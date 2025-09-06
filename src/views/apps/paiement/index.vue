<template>
  <Layout>
    <Breadcrumb title="Paiements" subtitle="Historique & règlement" />

    <!-- Header actions -->
    <div class="mt-6 flex items-center justify-between">
      <h4 class="text-lg font-semibold">Gestion des paiements</h4>
      <button
        class="inline-flex items-center px-4 py-2 rounded-md font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
        @click="nouveauPaiement"
      >
        Faire un paiement
      </button>
    </div>

    <!-- 3 cards KPI -->
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div class="text-sm text-gray-500">Total dû</div>
        <div class="mt-1 text-2xl font-bold">
          {{ formatMoney(totalDu) }}
        </div>
        <div class="mt-1 text-xs text-gray-500">Sommes non réglées (en attente + échoués)</div>
      </div>

      <div class="card p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div class="text-sm text-gray-500">Mois en cours</div>
        <div class="mt-1 text-2xl font-bold">
          {{ formatMoney(totalMoisEnCours) }}
        </div>
        <div class="mt-1 text-xs text-gray-500">Échéances de ce mois non complétées</div>
      </div>

      <div class="card p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div class="text-sm text-gray-500">En retard</div>
        <div class="mt-1 text-2xl font-bold">
          {{ formatMoney(totalEnRetard) }}
        </div>
        <div class="mt-1 text-xs text-gray-500">Échéances passées non complétées</div>
      </div>
    </div>

    <!-- Filtre + date -->
    <div class="mt-6 card p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div class="flex items-center gap-3">
          <label class="text-sm text-gray-600">Filtrer:</label>
          <select v-model="filtreEtat" class="border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm">
            <option value="tous">Tous les paiements</option>
            <option value="complete">Complétés</option>
            <option value="en_attente">En attente</option>
            <option value="echoue">Échoués</option>
          </select>
        </div>

        <div class="flex items-center gap-3">
          <label class="text-sm text-gray-600">Date:</label>
          <input
            type="date"
            v-model="filtreDate"
            class="border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm"
          />
          <button class="text-sm px-3 py-2 rounded-md border dark:border-gray-700" @click="resetFiltres">
            Réinitialiser
          </button>
        </div>
      </div>
    </div>

    <!-- Tableau paiements -->
    <div class="card mt-4">
      <div class="p-0 overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Date</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Référence</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Type</th>
              <th class="px-4 py-2 text-right border border-gray-200 dark:border-gray-700">Montant</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Mode</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Statut</th>
              <th class="px-4 py-2 text-center border border-gray-200 dark:border-gray-700">Reçu</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="p in paiementsFiltres"
              :key="p.reference"
              class="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                {{ p.date }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700 font-mono">
                {{ p.reference }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                {{ p.type }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700 text-right">
                {{ formatMoney(p.montant) }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                {{ p.mode }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                <span
                  :class="[
                    'px-2 py-1 rounded text-xs font-semibold inline-flex items-center',
                    p.statut === 'complete' ? 'bg-green-100 text-green-700' : '',
                    p.statut === 'en_attente' ? 'bg-yellow-100 text-yellow-700' : '',
                    p.statut === 'echoue' ? 'bg-red-100 text-red-700' : '',
                  ]"
                >
                  {{ libelleStatut(p.statut) }}
                </span>
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700 text-center">
                <a
                  v-if="p.statut === 'complete'"
                  href="#"
                  class="text-cyan-600 hover:underline"
                >
                  Télécharger
                </a>
                <span v-else class="text-gray-400">—</span>
              </td>
            </tr>
            <tr v-if="paiementsFiltres.length === 0">
              <td class="px-4 py-6 text-center text-gray-500" colspan="7">
                Aucun paiement pour ces filtres.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

type Statut = "complete" | "en_attente" | "echoue";

interface Paiement {
  date: string;       // YYYY-MM-DD (date du paiement ou de l’échéance)
  dueDate: string;    // YYYY-MM-DD (date d’échéance)
  reference: string;
  type: string;       // ex: "Taxe mensuelle", "Frais d’inscription"
  montant: number;
  mode: string;       // ex: "Carte", "Mobile Money", "Virement"
  statut: Statut;
}

export default defineComponent({
  name: "PaiementsPage",
  components: { Layout, Breadcrumb },
  data() {
    const today = new Date(); // utilisé dans les calculs
    return {
      filtreEtat: "tous" as "tous" | Statut,
      filtreDate: "" as string, // YYYY-MM-DD
      // Fake datas
      paiements: [
        { date: "2025-09-04", dueDate: "2025-09-10", reference: "INV-2025-0901", type: "Taxe mensuelle", montant: 2590, mode: "Carte", statut: "en_attente" },
        { date: "2025-09-01", dueDate: "2025-09-05", reference: "INV-2025-0902", type: "Taxe mensuelle", montant: 425, mode: "Mobile Money", statut: "echoue" },
        { date: "2025-08-15", dueDate: "2025-08-20", reference: "INV-2025-0810", type: "Taxe mensuelle", montant: 3015.5, mode: "Virement", statut: "en_attente" },
        { date: "2025-08-10", dueDate: "2025-08-15", reference: "INV-2025-0809", type: "Pénalité retard", montant: 120, mode: "Carte", statut: "echoue" },
        { date: "2025-07-14", dueDate: "2025-07-17", reference: "INV-2025-0707", type: "Taxe mensuelle", montant: 2886, mode: "Carte", statut: "complete" },
        { date: "2025-06-14", dueDate: "2025-06-17", reference: "INV-2025-0605", type: "Taxe mensuelle", montant: 3182, mode: "Virement", statut: "complete" },
      ] as Paiement[],
      today, // stocké pour les computed
    };
  },
  computed: {
    // Filtrage combiné par statut + date exacte (si renseignée)
    paiementsFiltres(): Paiement[] {
      const byStatus = this.filtreEtat === "tous"
        ? this.paiements
        : this.paiements.filter(p => p.statut === this.filtreEtat);
      if (!this.filtreDate) return byStatus;
      return byStatus.filter(p => p.date === this.filtreDate);
    },

    // Sommes agrégées
    totalDu(): number {
      return this.paiements
        .filter(p => p.statut !== "complete")
        .reduce((s, p) => s + p.montant, 0);
    },
    totalMoisEnCours(): number {
      const y = this.today.getFullYear();
      const m = this.today.getMonth(); // 0-based
      return this.paiements
        .filter(p => p.statut !== "complete")
        .filter(p => {
          const d = new Date(p.dueDate);
          return d.getFullYear() === y && d.getMonth() === m;
        })
        .reduce((s, p) => s + p.montant, 0);
    },
    totalEnRetard(): number {
      const now = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate()
      );
      return this.paiements
        .filter(p => p.statut !== "complete")
        .filter(p => new Date(p.dueDate) < now)
        .reduce((s, p) => s + p.montant, 0);
    },
  },
  methods: {
    formatMoney(n: number): string {
      return n.toLocaleString("fr-FR", { style: "currency", currency: "USD" });
    },
    libelleStatut(s: Statut): string {
      return s === "complete" ? "Complété" : s === "en_attente" ? "En attente" : "Échoué";
    },
    resetFiltres() {
      this.filtreEtat = "tous";
      this.filtreDate = "";
    },
    nouveauPaiement() {
      // à brancher sur ta modale / page de checkout
      alert("Démarrer un nouveau paiement…");
    },
  },
});
</script>
