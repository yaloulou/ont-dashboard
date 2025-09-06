<template>
  <Layout>
    <Breadcrumb title="Hébergements" subtitle="En cours" />

    <!-- Header actions -->
    <div class="mt-6 flex items-center justify-between">
      <h4 class="text-lg font-semibold">Hébergements en cours</h4>
      <button
        class="inline-flex items-center px-4 py-2 rounded-md font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
        @click="creerClient"
      >
        Créer un nouveau client
      </button>
    </div>

    <!-- KPIs -->
    <div class="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="card p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div class="text-sm text-gray-500">Clients présents</div>
        <div class="mt-1 text-2xl font-bold">{{ kpiClientsPresents }}</div>
        <div class="mt-1 text-xs text-gray-500">Actuellement enregistrés</div>
      </div>
      <div class="card p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div class="text-sm text-gray-500">Arrivées prévues</div>
        <div class="mt-1 text-2xl font-bold">{{ kpiArriveesPrevues }}</div>
        <div class="mt-1 text-xs text-gray-500">Aujourd’hui et à venir</div>
      </div>
      <div class="card p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div class="text-sm text-gray-500">Départs prévus</div>
        <div class="mt-1 text-2xl font-bold">{{ kpiDepartsPrevus }}</div>
        <div class="mt-1 text-xs text-gray-500">Aujourd’hui et demain</div>
      </div>
      <div class="card p-5 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div class="text-sm text-gray-500">Chambres occupées</div>
        <div class="mt-1 text-2xl font-bold">{{ kpiChambresOccupees }}</div>
        <div class="mt-1 text-xs text-gray-500">Occupées par des clients présents</div>
      </div>
    </div>

    <!-- Barre recherche -->
    <div class="mt-6 card p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div class="text-sm text-gray-600">Liste des hébergements</div>
        <div class="flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            v-model.trim="recherche"
            placeholder="Rechercher (client, téléphone, chambre)…"
            class="w-full md:w-96 border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm"
          />
          <button class="text-sm px-3 py-2 rounded-md border dark:border-gray-700" @click="recherche = ''">
            Effacer
          </button>
        </div>
      </div>
    </div>

    <!-- Tableau -->
    <div class="card mt-4">
      <div class="p-0 overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Client</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Chambre</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Téléphone</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Arrivée</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Départ prévu</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Statut</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="h in hebergementsFiltres"
              :key="h.reference"
              class="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                <div class="font-medium">{{ h.client }}</div>
                <div class="text-xs text-gray-500">{{ h.reference }}</div>
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                {{ h.chambre }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                <span class="font-mono">{{ h.telephone }}</span>
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                {{ h.arrivee }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                {{ h.departPrevu }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                <span
                  :class="[
                    'px-2 py-1 rounded text-xs font-semibold inline-flex items-center capitalize',
                    h.statut === 'present' ? 'bg-emerald-100 text-emerald-700' : '',
                    h.statut === 'arrivee_prevue' ? 'bg-blue-100 text-blue-700' : '',
                    h.statut === 'depart_prevu' ? 'bg-amber-100 text-amber-700' : '',
                  ]"
                >
                  {{ libelleStatut(h.statut) }}
                </span>
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-2">
                  <button class="px-2 py-1 text-xs rounded border hover:bg-gray-100 dark:border-gray-600" @click="voir(h)">Voir</button>
                  <button class="px-2 py-1 text-xs rounded border hover:bg-gray-100 dark:border-gray-600" @click="modifier(h)">Modifier</button>
                  <button
                    v-if="h.statut === 'present'"
                    class="px-2 py-1 text-xs rounded border hover:bg-gray-100 dark:border-gray-600"
                    @click="checkout(h)"
                  >
                    Check-out
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="hebergementsFiltres.length === 0">
              <td class="px-4 py-6 text-center text-gray-500" colspan="7">
                Aucun enregistrement ne correspond à la recherche.
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

type StatutHeb = "present" | "arrivee_prevue" | "depart_prevu";

interface Hebergement {
  reference: string;   // id dossier
  client: string;
  telephone: string;
  chambre: string;     // ex: "204", "Suite 3B"
  arrivee: string;     // YYYY-MM-DD
  departPrevu: string; // YYYY-MM-DD
  statut: StatutHeb;
}

function toYMD(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default defineComponent({
  name: "HebergementsEnCoursPage",
  components: { Layout, Breadcrumb },
  data() {
    const today = new Date();
    const demain = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    return {
      recherche: "" as string,
      todayStr: toYMD(today),
      demainStr: toYMD(demain),
      hebergements: [
        { reference: "HB-2025-0901", client: "Lucien Bangelesa", telephone: "+243 970 000 111", chambre: "204", arrivee: "2025-09-04", departPrevu: "2025-09-07", statut: "present" },
        { reference: "HB-2025-0902", client: "Sarah Mbala", telephone: "+243 970 000 112", chambre: "305", arrivee: "2025-09-06", departPrevu: "2025-09-08", statut: "arrivee_prevue" },
        { reference: "HB-2025-0903", client: "Jean Kaseya", telephone: "+243 970 000 113", chambre: "Suite 3B", arrivee: "2025-09-03", departPrevu: "2025-09-06", statut: "depart_prevu" },
        { reference: "HB-2025-0904", client: "Aminata Diop", telephone: "+221 770 000 114", chambre: "118", arrivee: "2025-09-05", departPrevu: "2025-09-10", statut: "present" },
        { reference: "HB-2025-0905", client: "Barry Williams", telephone: "+1 615 000 115", chambre: "417", arrivee: "2025-09-07", departPrevu: "2025-09-09", statut: "arrivee_prevue" },
        { reference: "HB-2025-0906", client: "Shanam Kapoor", telephone: "+1 415 000 116", chambre: "220", arrivee: "2025-09-04", departPrevu: "2025-09-06", statut: "depart_prevu" },
      ] as Hebergement[],
    };
  },
  computed: {
    hebergementsFiltres(): Hebergement[] {
      const q = this.recherche.toLowerCase();
      if (!q) return this.hebergements;
      return this.hebergements.filter(h =>
        h.client.toLowerCase().includes(q) ||
        h.telephone.toLowerCase().includes(q) ||
        h.chambre.toLowerCase().includes(q) ||
        h.reference.toLowerCase().includes(q)
      );
    },

    kpiClientsPresents(): number {
      return this.hebergements.filter(h => h.statut === "present").length;
    },
    kpiArriveesPrevues(): number {
      // arrivées dont date >= aujourd'hui
      const today = new Date(this.todayStr);
      return this.hebergements.filter(h => {
        if (h.statut !== "arrivee_prevue") return false;
        return new Date(h.arrivee) >= today;
      }).length;
    },
    kpiDepartsPrevus(): number {
      // départs prévus aujourd’hui ou demain
      const today = new Date(this.todayStr);
      const tomorrow = new Date(this.demainStr);
      return this.hebergements.filter(h => {
        if (h.statut !== "depart_prevu" && h.statut !== "present") return false;
        const d = new Date(h.departPrevu);
        return d.getTime() === today.getTime() || d.getTime() === tomorrow.getTime();
      }).length;
    },
    kpiChambresOccupees(): number {
      // chambres uniques parmi les présents
      const set = new Set(this.hebergements.filter(h => h.statut === "present").map(h => h.chambre));
      return set.size;
    },
  },
  methods: {
    libelleStatut(s: StatutHeb): string {
      return s === "present" ? "Présent" : s === "arrivee_prevue" ? "Arrivée prévue" : "Départ prévu";
    },
    creerClient() {
      alert("Ouvrir le formulaire de création client…");
    },
    voir(h: Hebergement) {
      alert(`Voir la fiche: ${h.reference}`);
    },
    modifier(h: Hebergement) {
      alert(`Modifier l’hébergement: ${h.reference}`);
    },
    checkout(h: Hebergement) {
      const ok = confirm(`Confirmer le check-out de ${h.client} (ch. ${h.chambre}) ?`);
      if (ok) {
        h.statut = "depart_prevu"; // ou supprimer de la liste / marquer 'checked_out'
        alert("Check-out enregistré.");
      }
    },
  },
});
</script>
