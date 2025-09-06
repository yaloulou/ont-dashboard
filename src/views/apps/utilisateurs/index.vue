<template>
  <Layout>
    <Breadcrumb title="Utilisateurs" subtitle="Gestion des comptes de l’établissement" />

    <!-- Header actions -->
    <div class="mt-6 flex items-center justify-between">
      <h4 class="text-lg font-semibold">Gestion des utilisateurs</h4>
      <button
        class="inline-flex items-center px-4 py-2 rounded-md font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
        @click="ajouterUtilisateur"
      >
        Ajouter un utilisateur
      </button>
    </div>

    <!-- Filtres -->
    <div class="mt-6 card p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <!-- Select Rôle -->
        <div class="flex items-center gap-3">
          <label class="text-sm text-gray-600">Rôle:</label>
          <select
            v-model="filtreRole"
            class="border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm"
          >
            <option value="tous">Tous les rôles</option>
            <option value="proprietaire">Propriétaire</option>
            <option value="gestionnaire">Gestionnaire</option>
            <option value="personnel">Personnel</option>
            <option value="observateur">Observateur</option>
          </select>
        </div>

        <!-- Recherche -->
        <div class="flex items-center gap-3 w-full md:w-auto">
          <label class="text-sm text-gray-600">Rechercher:</label>
          <input
            type="text"
            v-model.trim="recherche"
            placeholder="Rechercher un utilisateur (nom ou email)"
            class="w-full md:w-80 border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700 text-sm"
          />
          <button class="text-sm px-3 py-2 rounded-md border dark:border-gray-700" @click="resetFiltres">
            Réinitialiser
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
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Nom d'utilisateur</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Email</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Rôle</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Statut</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Dernière connexion</th>
              <th class="px-4 py-2 text-left border border-gray-200 dark:border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="u in utilisateursFiltres"
              :key="u.email"
              class="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700 font-medium">
                {{ u.nom }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                <span class="font-mono">{{ u.email }}</span>
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                <span
                  :class="[
                    'px-2 py-1 rounded text-xs font-semibold inline-flex items-center capitalize',
                    u.role === 'proprietaire' ? 'bg-indigo-100 text-indigo-700' : '',
                    u.role === 'gestionnaire' ? 'bg-blue-100 text-blue-700' : '',
                    u.role === 'personnel' ? 'bg-emerald-100 text-emerald-700' : '',
                    u.role === 'observateur' ? 'bg-amber-100 text-amber-700' : '',
                  ]"
                >
                  {{ libelleRole(u.role) }}
                </span>
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                <span
                  :class="[
                    'px-2 py-1 rounded text-xs font-semibold inline-flex items-center',
                    u.statut === 'actif' ? 'bg-green-100 text-green-700' : '',
                    u.statut === 'en_attente' ? 'bg-yellow-100 text-yellow-700' : '',
                    u.statut === 'desactive' ? 'bg-red-100 text-red-700' : '',
                  ]"
                >
                  {{ libelleStatut(u.statut) }}
                </span>
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                {{ u.derniereConnexion || '—' }}
              </td>
              <td class="px-4 py-2 border border-gray-200 dark:border-gray-700">
                <div class="flex items-center gap-2">
                  <button class="px-2 py-1 text-xs rounded border hover:bg-gray-100 dark:border-gray-600" @click="modifier(u)">Modifier</button>
                  <button class="px-2 py-1 text-xs rounded border hover:bg-gray-100 dark:border-gray-600" @click="resetMDP(u)">Reset</button>
                  <button
                    class="px-2 py-1 text-xs rounded border hover:bg-gray-100 dark:border-gray-600"
                    :class="u.statut === 'desactive' ? 'opacity-60 cursor-not-allowed' : ''"
                    :disabled="u.statut === 'desactive'"
                    @click="desactiver(u)"
                  >
                    Désactiver
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="utilisateursFiltres.length === 0">
              <td class="px-4 py-6 text-center text-gray-500" colspan="6">
                Aucun utilisateur ne correspond à ces filtres.
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

type Role = "proprietaire" | "gestionnaire" | "personnel" | "observateur";
type Statut = "actif" | "en_attente" | "desactive";

interface Utilisateur {
  nom: string;
  email: string;
  role: Role;
  statut: Statut;
  derniereConnexion: string | null; // ISO, ou null si jamais connecté
}

export default defineComponent({
  name: "UsersPage",
  components: { Layout, Breadcrumb },
  data() {
    return {
      filtreRole: "tous" as "tous" | Role,
      recherche: "" as string,
      utilisateurs: [
        { nom: "Lucien Bangelesa", email: "lucien@etab.cd", role: "proprietaire", statut: "actif", derniereConnexion: "2025-09-05 10:21" },
        { nom: "Sarah Mbala", email: "sarah.mbala@etab.cd", role: "gestionnaire", statut: "actif", derniereConnexion: "2025-09-04 18:02" },
        { nom: "Jean Kaseya", email: "jkaseya@etab.cd", role: "gestionnaire", statut: "en_attente", derniereConnexion: null },
        { nom: "Aminata Diop", email: "adiop@etab.cd", role: "personnel", statut: "actif", derniereConnexion: "2025-09-03 08:45" },
        { nom: "Pierre Mputu", email: "pmputu@etab.cd", role: "personnel", statut: "desactive", derniereConnexion: "2025-07-29 12:10" },
        { nom: "Nadine K.", email: "nkunda@etab.cd", role: "observateur", statut: "actif", derniereConnexion: "2025-09-02 16:33" },
        { nom: "Omar F.", email: "omar@etab.cd", role: "observateur", statut: "en_attente", derniereConnexion: null },
        { nom: "Barry W.", email: "barry@etab.cd", role: "personnel", statut: "actif", derniereConnexion: "2025-08-30 09:12" },
        { nom: "Shanam K.", email: "shanam@etab.cd", role: "gestionnaire", statut: "actif", derniereConnexion: "2025-09-01 14:55" },
        { nom: "Elizabeth S.", email: "elizabeth@etab.cd", role: "observateur", statut: "actif", derniereConnexion: "2025-09-05 07:27" },
        { nom: "Ainsley R.", email: "ainsley@etab.cd", role: "personnel", statut: "en_attente", derniereConnexion: null },
        { nom: "Aaron W.", email: "aaron@etab.cd", role: "personnel", statut: "actif", derniereConnexion: "2025-09-03 11:42" },
      ] as Utilisateur[],
    };
  },
  computed: {
    utilisateursFiltres(): Utilisateur[] {
      const q = this.recherche.toLowerCase();
      let base = this.utilisateurs;

      if (this.filtreRole !== "tous") {
        base = base.filter(u => u.role === this.filtreRole);
      }
      if (q) {
        base = base.filter(u =>
          u.nom.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
        );
      }
      return base;
    },
  },
  methods: {
    libelleRole(r: Role): string {
      return r === "proprietaire"
        ? "Propriétaire"
        : r === "gestionnaire"
        ? "Gestionnaire"
        : r === "personnel"
        ? "Personnel"
        : "Observateur";
    },
    libelleStatut(s: Statut): string {
      return s === "actif" ? "Actif" : s === "en_attente" ? "En attente" : "Désactivé";
    },
    resetFiltres() {
      this.filtreRole = "tous";
      this.recherche = "";
    },
    ajouterUtilisateur() {
      // à remplacer par une modale / navigation dédiée
      alert("Ouvrir le formulaire d’ajout d’utilisateur…");
    },
    modifier(u: Utilisateur) {
      alert(`Modifier le profil de ${u.nom}`);
    },
    resetMDP(u: Utilisateur) {
      alert(`Envoyer un lien de réinitialisation à ${u.email}`);
    },
    desactiver(u: Utilisateur) {
      if (u.statut === "desactive") return;
      const ok = confirm(`Désactiver le compte de ${u.nom} ?`);
      if (ok) {
        u.statut = "desactive";
      }
    },
  },
});
</script>
