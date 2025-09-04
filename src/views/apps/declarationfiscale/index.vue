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
              <option value="Tous">Tous</option>
              <option value="brouillon">Brouillon</option>
              <option value="soumis">Soumis</option>
              <option value="approuvé">Approuvé</option>
              <option value="rejeté">Rejeté</option>
            </select>
          </div>

          <div>
            <label class="label">Année</label>
            <select v-model.number="filters.year" class="form-select">
              <option :value="2022">2022</option>
              <option :value="2023">2023</option>
              <option :value="2024">2024</option>
            </select>
          </div>

          <div class="ms-auto">
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
              <th v-for="h in headers" :key="h" scope="col"
                  class="text-left text-sm font-semibold text-gray-900 dark:text-gray-200 px-4 py-3.5">
                {{ h }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="row in filteredRows" :key="row.id">
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
                <span class="inline-flex items-center gap-1.5 py-1 px-3 rounded text-xs font-medium"
                      :class="statusPillClass(row.statut)">
                  {{ capitalize(row.statut) }}
                </span>
              </td>
              <td class="whitespace-nowrap px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {{ row.submittedAt ? formatDate(row.submittedAt) : '—' }}
              </td>
              <td class="whitespace-nowrap px-4 py-3 text-sm text-center">
                <button class="me-1.5" title="Éditer" @click="editRow(row)">
                  <i class="mgc_edit_line text-lg"></i>
                </button>
                <button class="ms-1.5" title="Supprimer" @click="removeRow(row.id)">
                  <i class="mgc_delete_line text-xl"></i>
                </button>
              </td>
            </tr>
            <tr v-if="filteredRows.length === 0">
              <td colspan="6" class="px-4 py-6 text-sm text-gray-500 text-center">
                Aucune déclaration trouvée pour ces filtres.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- MODALE : Téléportée dans <body> -->
    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center"
        @keydown.esc.window="closeModal"
      >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50" @click="closeModal" aria-hidden="true"></div>

        <!-- Contenu -->
        <div
          class="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700
                 w-full max-w-4xl mx-4 shadow-xl overflow-hidden"
          role="dialog" aria-modal="true"
        >
          <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h4 class="card-title">Nouvelle déclaration fiscale</h4>
            <button class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" @click="closeModal" aria-label="Fermer">✕</button>
          </div>

          <form @submit.prevent="submit" @reset.prevent="resetForm">
            <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <!-- Période de Déclaration -->
              <div>
                <h5 class="section-title">Période de Déclaration</h5>
                <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <label class="label">Mois *</label>
                    <select v-model="form.period.month" class="form-select" required>
                      <option value="" disabled>— Sélectionner —</option>
                      <option v-for="(m,i) in months" :key="m" :value="i+1">{{ m }}</option>
                    </select>
                  </div>
                  <div>
                    <label class="label">Année *</label>
                    <select v-model.number="form.period.year" class="form-select" required>
                      <option :value="2022">2022</option>
                      <option :value="2023">2023</option>
                      <option :value="2024">2024</option>
                    </select>
                  </div>
                  <div>
                    <label class="label">Type de Déclaration *</label>
                    <select v-model="form.period.type" class="form-select" required>
                      <option value="" disabled>— Sélectionner —</option>
                      <option>Mensuelle</option>
                      <option>Rectificative</option>
                      <option>Complémentaire</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Informations sur les Revenus -->
              <div>
                <h5 class="section-title">Informations sur les Revenus</h5>
                <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <label class="label">Revenu des Chambres (USD)</label>
                    <input v-model.number="form.revenue.rooms" type="number" min="0" step="0.01" class="form-input" />
                  </div>
                  <div>
                    <label class="label">Revenu Restauration & Boissons (USD)</label>
                    <input v-model.number="form.revenue.fnb" type="number" min="0" step="0.01" class="form-input" />
                  </div>
                  <div>
                    <label class="label">Autres Revenus (USD)</label>
                    <input v-model.number="form.revenue.others" type="number" min="0" step="0.01" class="form-input" />
                  </div>

                  <div>
                    <label class="label">Revenu Total (USD)</label>
                    <input :value="formatNumber(totalRevenue)" type="text" class="form-input bg-gray-100 dark:bg-gray-700" readonly />
                  </div>
                  <div>
                    <label class="label">Déductions (USD)</label>
                    <input v-model.number="form.revenue.deductions" type="number" min="0" step="0.01" class="form-input" />
                  </div>

                  <div>
                    <label class="label">Revenu Imposable (USD)</label>
                    <div class="flex gap-2 items-center">
                      <input
                        :disabled="autoTaxable"
                        v-model.number="form.revenue.taxableManual"
                        type="number" min="0" step="0.01"
                        class="form-input flex-1"
                        :placeholder="formatNumber(taxableAuto)"
                      />
                      <label class="inline-flex items-center gap-2 text-xs">
                        <input type="checkbox" v-model="autoTaxable" class="form-checkbox" />
                        <span>Calcul auto</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Calcul de l'Impôt -->
              <div>
                <h5 class="section-title">Calcul de l'Impôt</h5>
                <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <label class="label">Revenu Imposable</label>
                    <input :value="formatNumber(taxableIncome)" type="text" class="form-input bg-gray-100 dark:bg-gray-700" readonly />
                  </div>
                  <div>
                    <label class="label">Taux d'Imposition</label>
                    <input :value="`${(TAX_RATE*100).toFixed(0)}%`" type="text" class="form-input bg-gray-100 dark:bg-gray-700" readonly />
                  </div>
                  <div>
                    <label class="label">Total de l'Impôt Dû</label>
                    <input :value="formatNumber(taxDue)" type="text" class="form-input bg-gray-100 dark:bg-gray-700" readonly />
                  </div>
                </div>
              </div>

              <!-- Documents -->
              <div>
                <h5 class="section-title">Documents Justificatifs</h5>
                <div class="flex items-center gap-3">
                  <input ref="docsInput" type="file" class="hidden" multiple @change="onDocsChange" />
                  <button type="button" class="btn bg-dark/25 text-slate-900 dark:text-slate-200/80 hover:bg-dark/90 hover:text-white" @click="triggerDocs">
                    Cliquez pour télécharger des documents
                  </button>
                  <span class="text-xs text-gray-500">{{ docsLabel }}</span>
                </div>
                <ul v-if="form.docs.length" class="mt-2 list-disc list-inside text-xs text-gray-500">
                  <li v-for="(f,i) in form.docs" :key="i">{{ f.name }} ({{ humanSize(f.size) }})</li>
                </ul>
              </div>

              <!-- Attestation -->
              <div>
                <h5 class="section-title">Attestation de Déclaration</h5>
                <label class="inline-flex items-start gap-3 text-sm">
                  <input v-model="form.attestation" type="checkbox" class="form-checkbox mt-1" />
                  <span>Je déclare que les informations fournies ci-dessus sont vraies et exactes au meilleur de mes connaissances.</span>
                </label>
              </div>

              <p v-if="formError" class="text-red-600 text-sm">{{ formError }}</p>
            </div>

            <div class="p-6 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2 justify-end">
              <button type="button" class="btn bg-dark/25 text-slate-900 dark:text-slate-200/80 hover:bg-dark/90 hover:text-white" @click="closeModal">
                Annuler
              </button>
              <button type="button" class="btn bg-primary/25 text-primary hover:bg-primary hover:text-white" @click="saveDraft">
                Enregistrer comme Brouillon
              </button>
              <button type="submit" class="btn bg-success/25 text-success hover:bg-success hover:text-white">
                Soumettre
              </button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

type Status = "brouillon" | "soumis" | "approuvé" | "rejeté";
type Row = {
  id: number;
  periode: string; // ex "2024-05"
  year: number;
  revenuTotal: number;
  impotDu: number;
  statut: Status;
  submittedAt?: string | null;
};

export default defineComponent({
  name: "DeclarationFiscale",
  components: { Layout, Breadcrumb },
  setup() {
    const headers = ["Période", "Revenu", "Impôt du", "Statut", "Soumis", "Actions"];

    // Démo data
    const rows = ref<Row[]>([
      { id: 1, periode: "2023-11", year: 2023, revenuTotal: 7400, impotDu: 1184, statut: "approuvé", submittedAt: "2023-12-02T10:30:00Z" },
      { id: 2, periode: "2024-01", year: 2024, revenuTotal: 5200, impotDu: 832, statut: "soumis", submittedAt: "2024-02-05T09:10:00Z" },
      { id: 3, periode: "2024-02", year: 2024, revenuTotal: 6100, impotDu: 976, statut: "brouillon", submittedAt: null },
      { id: 4, periode: "2022-12", year: 2022, revenuTotal: 6800, impotDu: 1088, statut: "rejeté", submittedAt: "2023-01-03T13:40:00Z" },
    ]);

    const filters = ref<{ status: "Tous" | Status; year: number }>({ status: "Tous", year: 2024 });
    const filteredRows = computed(() =>
      rows.value.filter(r => (filters.value.status === "Tous" ? true : r.statut === filters.value.status) && r.year === filters.value.year)
    );

    // Modal
    const isModalOpen = ref(false);
    function openModal() { isModalOpen.value = true; }
    function closeModal() { isModalOpen.value = false; }

    // Form
    const TAX_RATE = 0.16;
    const months = [
      "Janvier","Février","Mars","Avril","Mai","Juin",
      "Juillet","Août","Septembre","Octobre","Novembre","Décembre",
    ];

    const form = ref({
      period: { month: "" as number | "" , year: 2024, type: "" as "" | "Mensuelle" | "Rectificative" | "Complémentaire" },
      revenue: { rooms: 0 as number | null, fnb: 0 as number | null, others: 0 as number | null, deductions: 0 as number | null, taxableManual: null as number | null },
      docs: [] as File[],
      attestation: false,
    });
    const autoTaxable = ref(true);
    const docsInput = ref<HTMLInputElement | null>(null);
    const formError = ref("");

    const totalRevenue = computed(() => round2((form.value.revenue.rooms ?? 0) + (form.value.revenue.fnb ?? 0) + (form.value.revenue.others ?? 0)));
    const taxableAuto = computed(() => round2(Math.max(totalRevenue.value - (form.value.revenue.deductions ?? 0), 0)));
    const taxableIncome = computed(() => (autoTaxable.value ? taxableAuto.value : round2(Math.max(form.value.revenue.taxableManual ?? 0, 0))));
    const taxDue = computed(() => round2(taxableIncome.value * TAX_RATE));
    const docsLabel = computed(() => form.value.docs.length ? `${form.value.docs.length} fichier(s) sélectionné(s)` : "Aucun fichier sélectionné");

    // Helpers
    function round2(n: number) { return Math.round(n * 100) / 100; }
    function pad(n: number) { return n < 10 ? `0${n}` : `${n}`; }

    // Actions formulaire
    function triggerDocs() { docsInput.value?.click(); }
    function onDocsChange(e: Event) {
      const input = e.target as HTMLInputElement;
      form.value.docs = input.files ? Array.from(input.files) : [];
    }
    function resetForm() {
      form.value = {
        period: { month: "", year: 2024, type: "" },
        revenue: { rooms: 0, fnb: 0, others: 0, deductions: 0, taxableManual: null },
        docs: [],
        attestation: false,
      };
      autoTaxable.value = true;
      formError.value = "";
      if (docsInput.value) docsInput.value.value = "";
    }

    function formatNumber(n: number | null | undefined) {
      const v = typeof n === "number" ? n : Number(n ?? 0);
      if (!isFinite(v)) return "0.00";
      return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    async function saveDraft() {
      const err = validateCommon(); if (err) { formError.value = err; return; }
      const id = Math.max(0, ...rows.value.map(r => r.id)) + 1;
      const periodStr = `${form.value.period.year}-${pad(Number(form.value.period.month))}`;
      rows.value.unshift({
        id,
        periode: periodStr,
        year: form.value.period.year,
        revenuTotal: totalRevenue.value,
        impotDu: taxDue.value,
        statut: "brouillon",
        submittedAt: null,
      });
      // API POST draft here…
      closeModal(); resetForm();
    }

    async function submit() {
      formError.value = "";
      const err = validateCommon(); if (err) { formError.value = err; return; }
      if (!form.value.attestation) { formError.value = "Vous devez cocher l’attestation avant de soumettre."; return; }

      const id = Math.max(0, ...rows.value.map(r => r.id)) + 1;
      const periodStr = `${form.value.period.year}-${pad(Number(form.value.period.month))}`;
      rows.value.unshift({
        id,
        periode: periodStr,
        year: form.value.period.year,
        revenuTotal: totalRevenue.value,
        impotDu: taxDue.value,
        statut: "soumis",
        submittedAt: new Date().toISOString(),
      });
      // API submit (multipart si docs) ici…
      closeModal(); resetForm();
    }

    function validateCommon(): string | null {
      if (!form.value.period.month || !form.value.period.year || !form.value.period.type) {
        return "Veuillez renseigner la période et le type de déclaration.";
      }
      return null;
    }

    // Table actions
    function editRow(row: Row) {
      const [y, m] = row.periode.split("-").map(Number);
      form.value.period.year = y;
      form.value.period.month = m;
      form.value.period.type = "Mensuelle";
      form.value.revenue.rooms = row.revenuTotal; // démo
      form.value.revenue.fnb = 0;
      form.value.revenue.others = 0;
      form.value.revenue.deductions = 0;
      form.value.revenue.taxableManual = row.revenuTotal;
      autoTaxable.value = false;
      openModal();
    }
    function removeRow(id: number) { rows.value = rows.value.filter(r => r.id !== id); }

    // UI utils
    function formatCurrency(n: number) {
      try { return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n); }
      catch { return `${n.toFixed(2)} USD`; }
    }
    function formatDate(iso: string) {
      try { return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(iso)); }
      catch { return iso; }
    }
    function capitalize(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }
    function statusPillClass(st: Status) {
      switch (st) {
        case "brouillon": return "bg-dark/25 text-slate-900 dark:text-slate-200/90";
        case "soumis": return "bg-primary/25 text-primary";
        case "approuvé": return "bg-success/25 text-success";
        case "rejeté": return "bg-danger/25 text-danger";
      }
    }
    function humanSize(bytes: number) {
      const units = ["B","KB","MB","GB"]; let i=0; let b=bytes;
      while (b >= 1024 && i < units.length-1) { b/=1024; i++; }
      return `${b.toFixed(1)} ${units[i]}`;
    }

    return {
      headers, rows, filters, filteredRows,
      isModalOpen, openModal, closeModal,
      form, formError, months, TAX_RATE, autoTaxable,
      totalRevenue, taxableAuto, taxableIncome, taxDue,
      docsInput, docsLabel, triggerDocs, onDocsChange,
      saveDraft, submit, resetForm,
      // helpers
      formatCurrency, formatDate, capitalize, statusPillClass, humanSize, formatNumber, 
    };
  },
});
</script>
