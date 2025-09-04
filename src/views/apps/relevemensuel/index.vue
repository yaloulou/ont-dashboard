<template>
  <Layout>
    <Breadcrumb title="Taxes" subtitle="Historique des paiements" />

    <div class="card mt-6">
      <div class="p-6 overflow-x-auto">
        <h4 class="card-title mb-4">Tableau des Taxes</h4>
        <table class="min-w-full border border-gray-200 dark:border-gray-700 text-sm">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Mois</th>
              <th class="px-4 py-2 border">Revenus Déclarés</th>
              <th class="px-4 py-2 border">Taxe Calculée</th>
              <th class="px-4 py-2 border">Montant Payé</th>
              <th class="px-4 py-2 border">Solde Restant</th>
              <th class="px-4 py-2 border">Statut</th>
              <th class="px-4 py-2 border">Date Génération</th>
              <th class="px-4 py-2 border">Date Limite</th>
              <th class="px-4 py-2 border">Date Paiement</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in taxes" :key="item.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td class="px-4 py-2 border text-center">{{ item.id }}</td>
              <td class="px-4 py-2 border">{{ item.mois_annee }}</td>
              <td class="px-4 py-2 border text-right">{{ item.revenus_declares.toLocaleString() }}</td>
              <td class="px-4 py-2 border text-right">{{ item.taxe_calculee.toLocaleString() }}</td>
              <td class="px-4 py-2 border text-right">{{ item.montant_paye.toLocaleString() }}</td>
              <td class="px-4 py-2 border text-right">{{ item.solde_restant.toLocaleString() }}</td>
              <td class="px-4 py-2 border">
                <span
                  :class="{
                    'text-green-600 font-semibold': item.statut === 'payee',
                    'text-yellow-600 font-semibold': item.statut === 'en_cours',
                    'text-red-600 font-semibold': item.statut === 'en_retard'
                  }"
                >
                  {{ item.statut }}
                </span>
              </td>
              <td class="px-4 py-2 border">{{ item.date_generation }}</td>
              <td class="px-4 py-2 border">{{ item.date_limite }}</td>
              <td class="px-4 py-2 border">{{ item.date_paiement ?? '-' }}</td>
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

export default defineComponent({
  name: "TaxesTable",
  components: { Layout, Breadcrumb },
  data() {
    return {
      taxes: [
        {
          "date_generation": "2025-05-03",
          "date_limite": "2025-05-17",
          "date_paiement": "2025-05-14",
          "id": 6,
          "mois_annee": "April 2025",
          "montant_paye": 3607.5,
          "periode": "2025-04",
          "revenus_declares": 19500,
          "solde_restant": 0,
          "statut": "payee",
          "taxe_calculee": 3607.5
        },
        {
          "date_generation": "2025-06-03",
          "date_limite": "2025-06-17",
          "date_paiement": "2025-06-14",
          "id": 5,
          "mois_annee": "May 2025",
          "montant_paye": 3182,
          "periode": "2025-05",
          "revenus_declares": 17200,
          "solde_restant": 0,
          "statut": "payee",
          "taxe_calculee": 3182
        },
        {
          "date_generation": "2025-07-03",
          "date_limite": "2025-07-17",
          "date_paiement": "2025-07-14",
          "id": 4,
          "mois_annee": "June 2025",
          "montant_paye": 3311.5,
          "periode": "2025-06",
          "revenus_declares": 17900,
          "solde_restant": 0,
          "statut": "payee",
          "taxe_calculee": 3311.5
        },
        {
          "date_generation": "2025-08-03",
          "date_limite": "2025-08-17",
          "date_paiement": "2025-08-14",
          "id": 3,
          "mois_annee": "July 2025",
          "montant_paye": 2886,
          "periode": "2025-07",
          "revenus_declares": 15600,
          "solde_restant": 0,
          "statut": "payee",
          "taxe_calculee": 2886
        },
        {
          "date_generation": "2025-09-03",
          "date_limite": "2025-09-17",
          "date_paiement": null,
          "id": 2,
          "mois_annee": "August 2025",
          "montant_paye": 0,
          "periode": "2025-08",
          "revenus_declares": 16300,
          "solde_restant": 3015.5,
          "statut": "en_retard",
          "taxe_calculee": 3015.5
        },
        {
          "date_generation": "2025-10-03",
          "date_limite": "2025-10-17",
          "date_paiement": null,
          "id": 1,
          "mois_annee": "September 2025",
          "montant_paye": 0,
          "periode": "2025-09",
          "revenus_declares": 14000,
          "solde_restant": 2590,
          "statut": "en_cours",
          "taxe_calculee": 2590
        }
      ]
    };
  }
});
</script>
