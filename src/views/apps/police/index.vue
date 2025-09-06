<template>
  <Layout>
    <Breadcrumb title="Fiche de police" subtitle="Enregistrement visiteur / hébergé" />

    <!-- Actions top -->
    <div class="mt-6 flex items-center justify-between">
      <h4 class="text-lg font-semibold">Nouvelle fiche</h4>
      <div class="text-sm text-gray-500">Les champs marqués d’un <span class="text-red-600">*</span> sont requis.</div>
    </div>

    <!-- Alert erreurs -->
    <div v-if="erreurs.length" class="mt-4 p-4 rounded-md border border-red-200 bg-red-50 text-red-800 text-sm">
      <div class="font-semibold mb-2">Veuillez corriger les champs suivants :</div>
      <ul class="list-disc pl-5">
        <li v-for="(e, i) in erreurs" :key="i">{{ e }}</li>
      </ul>
    </div>

    <!-- Formulaire -->
    <form class="mt-6 space-y-6" @submit.prevent="enregistrer">

      <!-- Informations personnelles -->
      <div class="card p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h5 class="text-base font-semibold mb-4">Informations personnelles</h5>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm mb-1">Prénom <span class="text-red-600">*</span></label>
            <input v-model.trim="form.prenom" type="text" placeholder="Ex: Jean"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Nom de famille <span class="text-red-600">*</span></label>
            <input v-model.trim="form.nom" type="text" placeholder="Ex: Kabila"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>

          <div>
            <label class="block text-sm mb-1">Email</label>
            <input v-model.trim="form.email" type="email" placeholder="exemple@domaine.com"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Téléphone <span class="text-red-600">*</span></label>
            <input v-model.trim="form.telephone" type="tel" placeholder="+243 900 000 000"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>

          <div>
            <label class="block text-sm mb-1">Nationalité</label>
            <select v-model="form.nationalite"
                    class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700">
              <option value="">Sélectionner…</option>
              <option>Congo (RDC)</option>
              <option>Congo (Brazzaville)</option>
              <option>Rwanda</option>
              <option>Burundi</option>
              <option>Angola</option>
              <option>France</option>
              <option>Belgique</option>
              <option>Autre</option>
            </select>
          </div>
          <div>
            <label class="block text-sm mb-1">Numéro d'identification</label>
            <input v-model.trim="form.identification" type="text" placeholder="N° passeport / carte"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>

          <div>
            <label class="block text-sm mb-1">Date de naissance</label>
            <input v-model="form.dateNaissance" type="date"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Sexe</label>
            <select v-model="form.sexe"
                    class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700">
              <option value="">Sélectionner…</option>
              <option>F</option>
              <option>M</option>
              <option>Autre / Préfère ne pas dire</option>
            </select>
          </div>
        </div>

        <!-- Adresse -->
        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm mb-1">Pays</label>
            <input v-model.trim="form.adresse.pays" type="text" placeholder="Ex: RDC"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Ville</label>
            <input v-model.trim="form.adresse.ville" type="text" placeholder="Ex: Kinshasa"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Commune</label>
            <input v-model.trim="form.adresse.commune" type="text" placeholder="Ex: Gombe"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
        </div>
      </div>

      <!-- Informations de séjour -->
      <div class="card p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h5 class="text-base font-semibold mb-4">Informations de séjour</h5>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm mb-1">Date d'arrivée <span class="text-red-600">*</span></label>
            <input v-model="form.sejour.arrivee" type="date"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Date de départ <span class="text-red-600">*</span></label>
            <input v-model="form.sejour.depart" type="date"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Type de séjour</label>
            <select v-model="form.sejour.type"
                    class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700">
              <option value="">Sélectionner…</option>
              <option>Affaires</option>
              <option>Tourisme</option>
              <option>Famille</option>
              <option>Transit</option>
              <option>Autre</option>
            </select>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm mb-1">Numéro de chambre / logement</label>
            <input v-model.trim="form.sejour.logement" type="text" placeholder="Ex: Chambre 204"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Adresse de séjour (si différente)</label>
            <input v-model.trim="form.sejour.adresseSejour" type="text" placeholder="Adresse complète"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
        </div>
      </div>

      <!-- Informations complémentaires -->
      <div class="card p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h5 class="text-base font-semibold mb-4">Informations complémentaires</h5>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm mb-1">Motif de visite</label>
            <input v-model.trim="form.complement.motif" type="text" placeholder="Ex: Conférence, mission, tourisme…"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Entreprise / Organisation</label>
            <input v-model.trim="form.complement.organisation" type="text" placeholder="Ex: TechAfrique SARL"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm mb-1">Demandes spéciales</label>
            <textarea v-model.trim="form.complement.demandes" rows="3" placeholder="Régime alimentaire, accessibilité, etc."
                      class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"></textarea>
          </div>
          <div>
            <label class="block text-sm mb-1">Notes internes</label>
            <textarea v-model.trim="form.complement.notes" rows="3" placeholder="Visible uniquement par le personnel"
                      class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"></textarea>
          </div>
        </div>
      </div>

      <!-- Contact d'urgence -->
      <div class="card p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h5 class="text-base font-semibold mb-4">Contact d'urgence</h5>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm mb-1">Nom et prénom <span class="text-red-600">*</span></label>
            <input v-model.trim="form.urgence.nom" type="text" placeholder="Ex: Marie K."
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Lien</label>
            <input v-model.trim="form.urgence.lien" type="text" placeholder="Ex: Conjoint(e), parent, ami…"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
          <div>
            <label class="block text-sm mb-1">Téléphone <span class="text-red-600">*</span></label>
            <input v-model.trim="form.urgence.telephone" type="tel" placeholder="+243 …"
                   class="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-700"/>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3 pb-10">
        <button type="submit" class="px-4 py-2 rounded-md font-semibold bg-cyan-600 text-white hover:bg-cyan-700">
          Enregistrer
        </button>
        <button type="button" @click="reset" class="px-4 py-2 rounded-md border dark:border-gray-700">
          Réinitialiser
        </button>
      </div>
    </form>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

export default defineComponent({
  name: "FichePolicePage",
  components: { Layout, Breadcrumb },
  data() {
    return {
      form: {
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        nationalite: "",
        identification: "",
        dateNaissance: "",
        sexe: "",
        adresse: { pays: "", ville: "", commune: "" },
        sejour: { arrivee: "", depart: "", type: "", logement: "", adresseSejour: "" },
        complement: { motif: "", organisation: "", demandes: "", notes: "" },
        urgence: { nom: "", lien: "", telephone: "" },
      } as any,
      erreurs: [] as string[],
    };
  },
  methods: {
    validate(): boolean {
      const e: string[] = [];
      if (!this.form.prenom) e.push("Prénom est requis.");
      if (!this.form.nom) e.push("Nom de famille est requis.");
      if (!this.form.telephone) e.push("Téléphone est requis.");
      if (!this.form.sejour.arrivee) e.push("Date d'arrivée est requise.");
      if (!this.form.sejour.depart) e.push("Date de départ est requise.");
      if (!this.form.urgence.nom) e.push("Nom du contact d'urgence est requis.");
      if (!this.form.urgence.telephone) e.push("Téléphone du contact d'urgence est requis.");

      // cohérence dates
      if (this.form.sejour.arrivee && this.form.sejour.depart) {
        const a = new Date(this.form.sejour.arrivee);
        const d = new Date(this.form.sejour.depart);
        if (a > d) e.push("La date d'arrivée ne peut pas être postérieure à la date de départ.");
      }

      this.erreurs = e;
      return e.length === 0;
    },
    enregistrer() {
      if (!this.validate()) return;
      // Ici, en vrai: API call
      console.log("Fiche police soumise:", this.form);
      alert("Fiche enregistrée avec succès !");
      this.reset(); // Optionnel
    },
    reset() {
      this.form = {
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        nationalite: "",
        identification: "",
        dateNaissance: "",
        sexe: "",
        adresse: { pays: "", ville: "", commune: "" },
        sejour: { arrivee: "", depart: "", type: "", logement: "", adresseSejour: "" },
        complement: { motif: "", organisation: "", demandes: "", notes: "" },
        urgence: { nom: "", lien: "", telephone: "" },
      };
      this.erreurs = [];
    },
  },
});
</script>
