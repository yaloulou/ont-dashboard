<template>
  <Layout>
    <Breadcrumb title="Déclarations Fiscales" subtitle="Taxes" />

    <!-- Filtres -->
    <div class="card mb-6">
      <div class="p-6">
        <div class="flex flex-wrap items-end gap-4">
          <div>
            <label class="label">Statut</label>
            <select v-model="filters.status" class="form-select">
              <option value="">Tous</option>
              <option value="draft">Brouillon</option>
              <option value="submitted">Soumis</option>
              <option value="approved">Approuvé</option>
              <option value="rejected">Rejeté</option>
            </select>
          </div>

          <div>
            <label class="label">Année</label>
            <select v-model.number="filters.year" class="form-select">
              <option :value="2022">2022</option>
              <option :value="2023">2023</option>
              <option :value="2024">2024</option>
              <option :value="2025">2025</option>
            </select>
          </div>

          <div>
            <label class="label">Établissement (ID)</label>
            <input v-model.number="filters.establishmentId" type="number" class="form-input" placeholder="ex. 123" />
          </div>

          <div class="ms-auto flex items-center gap-2">
            <button type="button" class="btn bg-dark/25 hover:bg-dark/90 text-slate-900 dark:text-slate-200/80 hover:text-white" @click="fetchRows">
              Recharger
            </button>
            <button
              type="button"
              class="btn bg-primary/25 text-primary hover:bg-primary hover:text-white"
              @click="openModal"
            >
              <i class="mgc_add_circle_line me-2"></i> Nouvelle déclaration
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tableau -->
    <div class="card">
      <div class="relative overflow-x-auto">
        <table class="w-full divide-y divide-gray-300 dark:divide-gray-700">
          <thead class="bg-slate-300 bg-opacity-20 border-t dark:bg-slate-800 divide-gray-300 dark:border-gray-700">
            <tr>
              <th v-for="h in headers" :key="h" scope="col" class="text-left text-sm font-semibold text-gray-900 dark:text-gray-200 px-4 py-3.5">
                {{ h }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-if="isLoading">
              <td colspan="6" class="px-4 py-6 text-sm text-gray-500 text-center">Chargement des déclarations…</td>
            </tr>
            <tr v-else-if="loadError">
              <td colspan="6" class="px-4 py-6 text-sm text-red-600 text-center">{{ loadError }}</td>
            </tr>
            <tr v-else v-for="row in filteredRows" :key="row.id">
              <td class="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-200">
                {{ row.periode }}
              </td>
              <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {{ formatCurrency(row.revenuTotal) }}
              </td>
              <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {{ formatCurrency(row.impotDu) }}
              </td>
              <td class="whitespace-nowrap px-4 py-3 text-sm">
                <span class="inline-flex items-center gap-1.5 py-1 px-3 rounded text-xs font-medium" :class="statusPillClass(row.statut)">
                  {{ mapStatusLabel(row.statut) }}
                </span>
              </td>
              <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {{ row.submittedAt ? formatDate(row.submittedAt) : '—' }}
              </td>
              <td class="whitespace-nowrap px-4 py-3 text-sm text-center">
                <button class="me-1.5" title="Voir" @click="viewServerRow(row._raw)">👁️</button>
                <button class="ms-1.5" title="Supprimer" @click="removeRow(row.id)"><i class="mgc_delete_line text-xl"></i></button>
              </td>
            </tr>
            <tr v-if="!isLoading && !loadError && filteredRows.length === 0">
              <td colspan="6" class="px-4 py-6 text-sm text-gray-500 text-center">Aucune déclaration trouvée pour ces filtres.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination simple -->
      <div class="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700 text-sm">
        <div>
          Page {{ pagination.current_page }} / {{ pagination.total_pages }} — {{ pagination.total_count }} éléments
        </div>
        <div class="flex gap-2">
          <button class="btn bg-dark/25 hover:bg-dark/90 text-slate-900 dark:text-slate-200/80 hover:text-white"
                  :disabled="!pagination.has_previous" @click="goPrev">Précédent</button>
          <button class="btn bg-dark/25 hover:bg-dark/90 text-slate-900 dark:text-slate-200/80 hover:text-white"
                  :disabled="!pagination.has_next" @click="goNext">Suivant</button>
        </div>
      </div>
    </div>

    <!-- MODALE : Téléportée dans <body> -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="fixed inset-0 z-[9999] flex items-center justify-center" @keydown.esc.window="closeModal">
        <div class="absolute inset-0 bg-black/50" @click="closeModal" aria-hidden="true"></div>

        <div class="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 w-full max-w-4xl mx-4 shadow-xl overflow-hidden" role="dialog" aria-modal="true">
          <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h4 class="card-title">Nouvelle déclaration fiscale</h4>
            <button class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" @click="closeModal" aria-label="Fermer">✕</button>
          </div>

          <form @submit.prevent="submit" @reset.prevent="resetForm">
            <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <!-- En-tête -->
              <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label class="label">Établissement ID *</label>
                  <input v-model.number="form.establishmentId" type="number" class="form-input" required placeholder="ex. 123" />
                </div>
                <div>
                  <label class="label">Type de Déclaration *</label>
                  <select v-model="form.declarationType" class="form-select" required>
                    <option value="" disabled>— Sélectionner —</option>
                    <option value="monthly">Mensuelle</option>
                    <option value="rectificative">Rectificative</option>
                    <option value="complementaire">Complémentaire</option>
                  </select>
                </div>
                <div>
                  <label class="label">Devise</label>
                  <input v-model.trim="form.currency" type="text" class="form-input" placeholder="USD" />
                </div>
              </div>

              <!-- Période -->
              <div>
                <h5 class="section-title">Période</h5>
                <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <label class="label">Début *</label>
                    <input v-model="form.periodStart" type="date" class="form-input" required />
                  </div>
                  <div>
                    <label class="label">Fin *</label>
                    <input v-model="form.periodEnd" type="date" class="form-input" required />
                  </div>
                </div>
              </div>

              <!-- Revenus -->
              <div>
                <h5 class="section-title">Revenus</h5>
                <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <label class="label">Chambres (USD)</label>
                    <input v-model.number="form.revenue.room" type="number" min="0" step="0.01" class="form-input" />
                  </div>
                  <div>
                    <label class="label">Restauration & Boissons (USD)</label>
                    <input v-model.number="form.revenue.fnb" type="number" min="0" step="0.01" class="form-input" />
                  </div>
                  <div>
                    <label class="label">Autres (USD)</label>
                    <input v-model.number="form.revenue.others" type="number" min="0" step="0.01" class="form-input" />
                  </div>
                  <div>
                    <label class="label">Total (USD)</label>
                    <input :value="formatNumber(totalRevenue)" type="text" class="form-input bg-gray-100 dark:bg-gray-700" readonly />
                  </div>
                </div>
              </div>

              <!-- Occupation -->
              <div>
                <h5 class="section-title">Occupation</h5>
                <div class="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <label class="label">Total chambres</label>
                    <input v-model.number="form.occ.totalRooms" type="number" min="0" class="form-input" />
                  </div>
                  <div>
                    <label class="label">Nuits occupées</label>
                    <input v-model.number="form.occ.occupiedNights" type="number" min="0" class="form-input" />
                  </div>
                  <div>
                    <label class="label">Taux d’occupation</label>
                    <input v-model.number="form.occ.rate" type="number" step="0.0001" min="0" max="1" class="form-input" placeholder="0.75" />
                  </div>
                  <div>
                    <label class="label">Total clients</label>
                    <input v-model.number="form.occ.guests" type="number" min="0" class="form-input" />
                  </div>
                  <div>
                    <label class="label">ADR</label>
                    <input v-model.number="form.occ.adr" type="number" step="0.01" min="0" class="form-input" placeholder="Average Daily Rate" />
                  </div>
                </div>
              </div>

              <!-- Impôts -->
              <div>
                <h5 class="section-title">Calcul de l’Impôt</h5>
                <div class="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <label class="label">Base (USD)</label>
                    <input :value="formatNumber(totalRevenue)" type="text" class="form-input bg-gray-100 dark:bg-gray-700" readonly />
                  </div>
                  <div>
                    <label class="label">Taux (ex: 0.01)</label>
                    <input v-model.number="form.tax.rate" type="number" step="0.0001" min="0" class="form-input" />
                  </div>
                  <div>
                    <label class="label">Montant</label>
                    <input :value="formatNumber(taxAmount)" type="text" class="form-input bg-gray-100 dark:bg-gray-700" readonly />
                  </div>
                  <div>
                    <label class="label">Exonérations</label>
                    <input v-model.number="form.tax.exemptions" type="number" step="0.01" min="0" class="form-input" />
                  </div>
                  <div>
                    <label class="label">Déductions</label>
                    <input v-model.number="form.tax.deductions" type="number" step="0.01" min="0" class="form-input" />
                  </div>
                </div>
              </div>

              <!-- Divers -->
              <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label class="label">Taux de change</label>
                  <input v-model.number="form.exchangeRate" type="number" step="0.0001" min="0" class="form-input" placeholder="1.0" />
                </div>
                <div class="md:col-span-2">
                  <label class="label">Notes</label>
                  <input v-model.trim="form.notes" type="text" class="form-input" placeholder="Commentaire…" />
                </div>
              </div>

              <!-- Emails de notification -->
              <div>
                <label class="label">Emails de notification (séparés par des virgules)</label>
                <input v-model.trim="form.notificationEmails" type="text" class="form-input" placeholder="manager@hotel.com, accountant@hotel.com" />
              </div>

              <!-- Pièces jointes -->
              <div>
                <h5 class="section-title">Documents Justificatifs</h5>
                <div class="flex items-center gap-3">
                  <input ref="docsInput" type="file" class="hidden" multiple @change="onDocsChange" />
                  <button type="button" class="btn bg-dark/25 text-slate-900 dark:text-slate-200/80 hover:bg-dark/90 hover:text-white" @click="triggerDocs">
                    Cliquez pour sélectionner des documents
                  </button>
                  <span class="text-xs text-gray-500">{{ docsLabel }}</span>
                </div>
                <ul v-if="form.docs.length" class="mt-2 list-disc list-inside text-xs text-gray-500">
                  <li v-for="(f,i) in form.docs" :key="i">{{ f.name }} ({{ humanSize(f.size) }})</li>
                </ul>
              </div>

              <!-- Attestation + auto_submit -->
              <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                <label class="inline-flex items-start gap-3 text-sm">
                  <input v-model="form.attestation" type="checkbox" class="form-checkbox mt-1" />
                  <span>Je déclare que les informations fournies sont vraies et exactes.</span>
                </label>
                <label class="inline-flex items-start gap-3 text-sm">
                  <input v-model="form.autoSubmit" type="checkbox" class="form-checkbox mt-1" />
                  <span>Soumettre automatiquement après création</span>
                </label>
              </div>

              <p v-if="formError" class="text-red-600 text-sm">{{ formError }}</p>
            </div>

            <div class="p-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2 justify-end">
              <button type="button" class="btn bg-dark/25 text-slate-900 dark:text-slate-200/80 hover:bg-dark/90 hover:text-white" @click="closeModal">Annuler</button>
              <button type="submit" class="btn bg-success/25 text-success hover:bg-success hover:text-white">Soumettre</button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import axios from "axios";

type ServerItem = {
  id: number;
  establishment_id: number;
  establishment_name: string;
  declaration_type: string;
  declaration_number: string;
  period_start: string; // "YYYY-MM-DD"
  period_end: string;   // "YYYY-MM-DD"
  revenue_amount: number;
  tax_amount: number;
  status: string; // "draft" | "submitted" | "approved" | "rejected"
  submitted_date?: string | null;
  // ... (d'autres champs présents mais non affichés)
};

type Row = {
  id: number;
  periode: string;      // ex "2024-01"
  year: number;
  revenuTotal: number;  // revenue_amount
  impotDu: number;      // tax_amount
  statut: string;       // status
  submittedAt?: string | null;
  _raw: ServerItem;     // référence brute pour debug/voir
};

const API = {
  LIST:   "https://ont-redevance.com/api/v1/tax/declarations",
  CREATE: "https://ont-redevance.com/api/v1/tax/declarations",
};

export default defineComponent({
  name: "DeclarationFiscale",
  components: { Layout, Breadcrumb },
  setup() {
    const headers = ["Période", "Revenu", "Impôt du", "Statut", "Soumis", "Actions"];

    // Table state
    const rows = ref<Row[]>([]);
    const isLoading = ref(false);
    const loadError = ref<string | null>(null);

    // Pagination (côté serveur)
    const pagination = ref({
      current_page: 1,
      page_size: 20,
      total_count: 0,
      total_pages: 1,
      has_previous: false,
      has_next: false,
    });

    // Filtres → mappés sur les query params serveur
    const filters = ref<{ status: string; year: number; establishmentId?: number | null }>({
      status: "",
      year: 2024,
      establishmentId: null,
    });

    const filteredRows = computed(() =>
      rows.value.filter(r => (filters.value.status ? r.statut === filters.value.status : true) && r.year === filters.value.year)
    );

    // Modal
    const isModalOpen = ref(false);
    const openModal = () => (isModalOpen.value = true);
    const closeModal = () => (isModalOpen.value = false);

    // Form — POST payload exact demandé
    const form = ref({
      establishmentId: null as number | null,
      declarationType: "monthly" as string, // "monthly" | "rectificative" | "complementaire" (côté back tu consommeras comme tu veux)
      periodStart: "",
      periodEnd: "",
      revenue: { room: 0 as number | null, fnb: 0 as number | null, others: 0 as number | null },
      occ: { totalRooms: 0 as number | null, occupiedNights: 0 as number | null, rate: 0.75 as number | null, guests: 0 as number | null, adr: 0 as number | null },
      tax: { rate: 0.01 as number | null, exemptions: 0 as number | null, deductions: 0 as number | null },
      currency: "USD",
      exchangeRate: 1.0 as number | null,
      notes: "",
      docs: [] as File[],
      attestation: false,
      autoSubmit: false,
      notificationEmails: "",
    });

    const TAX_RATE_FALLBACK = 0.01;
    const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    const docsInput = ref<HTMLInputElement | null>(null);
    const formError = ref("");

    // Calculs
    const totalRevenue = computed(() =>
      round2((form.value.revenue.room ?? 0) + (form.value.revenue.fnb ?? 0) + (form.value.revenue.others ?? 0))
    );
    const taxAmount = computed(() => round2(totalRevenue.value * (form.value.tax.rate ?? TAX_RATE_FALLBACK)));
    const netTaxAmount = computed(() =>
      round2(Math.max(taxAmount.value - (form.value.tax.exemptions ?? 0) - (form.value.tax.deductions ?? 0), 0))
    );
    const docsLabel = computed(() => (form.value.docs.length ? `${form.value.docs.length} fichier(s) sélectionné(s)` : "Aucun fichier sélectionné"));

    // Helpers
    function round2(n: number) { return Math.round(n * 100) / 100; }
    function formatNumber(n: number | null | undefined) {
      const v = typeof n === "number" ? n : Number(n ?? 0);
      if (!isFinite(v)) return "0.00";
      return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    function formatCurrency(n: number) {
      try { return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n); }
      catch { return `${n.toFixed(2)} USD`; }
    }
    function formatDate(iso: string) {
      try { return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(iso)); }
      catch { return iso; }
    }
    function mapStatusLabel(st: string) {
      switch (st) {
        case "draft": return "Brouillon";
        case "submitted": return "Soumis";
        case "approved": return "Approuvé";
        case "rejected": return "Rejeté";
        default: return st;
      }
    }
    function statusPillClass(st: string) {
      switch (st) {
        case "draft": return "bg-dark/25 text-slate-900 dark:text-slate-200/90";
        case "submitted": return "bg-primary/25 text-primary";
        case "approved": return "bg-success/25 text-success";
        case "rejected": return "bg-danger/25 text-danger";
        default: return "bg-dark/25 text-slate-900 dark:text-slate-200/90";
      }
    }
    function humanSize(bytes: number) {
      const units = ["B","KB","MB","GB"]; let i=0; let b=bytes;
      while (b >= 1024 && i < units.length-1) { b/=1024; i++; }
      return `${b.toFixed(1)} ${units[i]}`;
    }

    // Files
    const triggerDocs = () => docsInput.value?.click();
    function onDocsChange(e: Event) {
      const input = e.target as HTMLInputElement;
      form.value.docs = input.files ? Array.from(input.files) : [];
    }
    function resetForm() {
      form.value = {
        establishmentId: filters.value.establishmentId ?? null,
        declarationType: "monthly",
        periodStart: "",
        periodEnd: "",
        revenue: { room: 0, fnb: 0, others: 0 },
        occ: { totalRooms: 0, occupiedNights: 0, rate: 0.75, guests: 0, adr: 0 },
        tax: { rate: 0.01, exemptions: 0, deductions: 0 },
        currency: "USD",
        exchangeRate: 1.0,
        notes: "",
        docs: [],
        attestation: false,
        autoSubmit: false,
        notificationEmails: "",
      };
      formError.value = "";
      if (docsInput.value) docsInput.value.value = "";
    }

    // API: GET (mappe la réponse fournie)
    async function fetchRows() {
      isLoading.value = true;
      loadError.value = null;

      try {
        const period_from = `${filters.value.year}-01-01`;
        const period_to   = `${filters.value.year}-12-31`;

        const params: Record<string, any> = {
          page: pagination.value.current_page,
          page_size: pagination.value.page_size,
          period_from,
          period_to,
          sort_by: "created_at",
          sort_order: "desc",
        };
        if (filters.value.status) params.status = filters.value.status;
        if (filters.value.establishmentId) params.establishment_id = filters.value.establishmentId;

        const { data } = await axios.get(API.LIST, {
          params,
          headers: { Accept: "application/json" },
        });

        // data.success, data.data[], data.pagination, data.meta...
        const list: ServerItem[] = data?.data ?? [];
        rows.value = list.map((it) => {
          const periode = (it.period_start || "").slice(0, 7); // "YYYY-MM"
          const year = Number((it.period_start || "0000-01-01").slice(0, 4));
          return {
            id: it.id,
            periode,
            year,
            revenuTotal: it.revenue_amount,
            impotDu: it.tax_amount,
            statut: it.status,
            submittedAt: it.submitted_date ?? null,
            _raw: it,
          } as Row;
        });

        const pg = data?.pagination || {};
        pagination.value = {
          current_page: pg.current_page ?? 1,
          page_size: pg.page_size ?? 20,
          total_count: pg.total_count ?? rows.value.length,
          total_pages: pg.total_pages ?? 1,
          has_previous: !!pg.has_previous,
          has_next: !!pg.has_next,
        };
      } catch (e: any) {
        console.error("GET /tax/declarations erreur:", e?.response?.data || e?.message || e);
        loadError.value = "Échec de chargement des déclarations.";
      } finally {
        isLoading.value = false;
      }
    }

    // Pagination handlers
    const goPrev = () => {
      if (!pagination.value.has_previous) return;
      pagination.value.current_page = Math.max(1, pagination.value.current_page - 1);
      fetchRows();
    };
    const goNext = () => {
      if (!pagination.value.has_next) return;
      pagination.value.current_page = Math.min(pagination.value.total_pages, pagination.value.current_page + 1);
      fetchRows();
    };

    onMounted(fetchRows);
    watch(filters, () => { pagination.value.current_page = 1; fetchRows(); }, { deep: true });

    // API: POST (payload exact)
    async function submit() {
      formError.value = "";
      const err = validateForm(); if (err) { formError.value = err; return; }
      if (!form.value.attestation) { formError.value = "Veuillez cocher l’attestation."; return; }

      try {
        const attachments = await filesToBase64(form.value.docs);
        const payload = {
          establishment_id: form.value.establishmentId,
          declaration_type: form.value.declarationType, // "monthly" attendu côté serveur
          period_start: form.value.periodStart,
          period_end: form.value.periodEnd,
          revenue_details: {
            room_revenue: form.value.revenue.room ?? 0,
            food_beverage_revenue: form.value.revenue.fnb ?? 0,
            other_revenue: form.value.revenue.others ?? 0,
            total_revenue: totalRevenue.value,
          },
          occupancy_details: {
            total_rooms: form.value.occ.totalRooms ?? 0,
            occupied_room_nights: form.value.occ.occupiedNights ?? 0,
            occupancy_rate: form.value.occ.rate ?? 0,
            total_guests: form.value.occ.guests ?? 0,
            average_daily_rate: form.value.occ.adr ?? 0,
          },
          tax_calculation: {
            revenue_amount: totalRevenue.value,
            tax_rate: form.value.tax.rate ?? TAX_RATE_FALLBACK,
            tax_amount: taxAmount.value,
            exemptions: form.value.tax.exemptions ?? 0,
            deductions: form.value.tax.deductions ?? 0,
            net_tax_amount: netTaxAmount.value,
          },
          currency: form.value.currency || "USD",
          exchange_rate: form.value.exchangeRate ?? 1.0,
          notes: form.value.notes || "",
          attachments,
          status: form.value.autoSubmit ? "submitted" : "draft",
          auto_submit: !!form.value.autoSubmit,
          notification_emails: splitEmails(form.value.notificationEmails),
        };

        await axios.post(API.CREATE, payload, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        await fetchRows();
        closeModal();
        resetForm();
      } catch (e: any) {
        console.error("POST /tax/declarations erreur:", e?.response?.data || e?.message || e);
        formError.value = "Échec de la soumission de la déclaration.";
      }
    }

    function validateForm(): string | null {
      if (!form.value.establishmentId) return "L'ID de l'établissement est requis.";
      if (!form.value.declarationType) return "Le type de déclaration est requis.";
      if (!form.value.periodStart || !form.value.periodEnd) return "La période est requise (début et fin).";
      return null;
    }

    function splitEmails(s: string): string[] {
      return s
        .split(",")
        .map(v => v.trim())
        .filter(v => v.length > 0);
    }

    async function filesToBase64(files: File[]) {
      const out: { filename: string; content_base64: string }[] = [];
      for (const f of files) {
        const b64 = await fileToBase64(f);
        out.push({ filename: f.name, content_base64: b64 });
      }
      return out;
    }
    function fileToBase64(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const res = (reader.result as string) || "";
          const base64 = res.includes(",") ? res.split(",")[1] : res; // retirer prefix data:
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    // Actions
    function viewServerRow(raw: ServerItem) {
      // simple debug viewer
      alert(`Déclaration #${raw.id}\n${raw.declaration_number}\n${raw.establishment_name}\nStatut: ${raw.status}`);
    }
    function removeRow(id: number) {
      rows.value = rows.value.filter(r => r.id !== id);
      // TODO: implémenter DELETE côté API si besoin
    }

    return {
      headers, rows, filteredRows, isLoading, loadError,
      pagination, goPrev, goNext,
      filters,
      isModalOpen, openModal, closeModal,
      form, formError, months, TAX_RATE_FALLBACK,
      totalRevenue, taxAmount, netTaxAmount,
      docsInput, docsLabel, triggerDocs, onDocsChange,
      submit, resetForm, fetchRows,
      // ui helpers
      formatCurrency, formatDate, humanSize, statusPillClass, mapStatusLabel, formatNumber,
      viewServerRow, removeRow,
    };
  },
});
</script>
