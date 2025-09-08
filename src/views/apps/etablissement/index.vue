<template>
  <Layout>
    <Breadcrumb title="Establishment" subtitle="Registration" />

    <form class="space-y-6" @submit.prevent="submitForm" @reset.prevent="resetForm">
      <!-- Logo de l'établissement (AU-DESSUS des infos de base) -->
      <div class="card">
        <div class="p-6">
          <h4 class="card-title mb-4">Logo de l'établissement</h4>

          <div class="flex items-center gap-6">
            <!-- Aperçu du logo -->
            <div
              class="w-28 h-28 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center bg-gray-50 dark:bg-gray-900"
            >
              <img
                v-if="logoPreview"
                :src="logoPreview"
                alt="Logo preview"
                class="object-contain w-full h-full"
              />
              <span v-else class="text-xs text-gray-400">No logo</span>
            </div>

            <!-- Actions -->
            <div class="flex flex-col gap-2">
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="onLogoChange"
              />
              <div class="flex gap-2">
                <button
                  type="button"
                  class="btn bg-primary/25 text-primary hover:bg-primary hover:text-white"
                  @click="triggerFile"
                >
                  Upload Logo
                </button>
                <button
                  v-if="logoPreview"
                  type="button"
                  class="btn bg-dark/25 text-slate-900 dark:text-slate-200/80 hover:bg-dark/90 hover:text-white"
                  @click="removeLogo"
                >
                  Remove
                </button>
              </div>
              <p class="text-xs text-gray-500">
                PNG/JPG/SVG, max 2 MB — carré recommandé (ex. 512×512).
              </p>
              <p v-if="logoError" class="text-xs text-red-600">{{ logoError }}</p>
            </div>
          </div>

          <!-- Nouveau: champ URL du logo pour remplir brand.logoUrl -->
          <div class="mt-4">
            <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Logo URL</label>
            <input v-model.trim="form.brand.logoUrl" type="url" class="form-input" placeholder="https://example.com/logo.png" />
            <p class="text-xs text-gray-500 mt-1">Si renseigné, cette URL sera envoyée dans <code>brand.logoUrl</code>. Le champ <code>brand.logoFile</code> sera toujours <code>null</code> dans le JSON.</p>
          </div>
        </div>
      </div>

      <!-- Informations de Base -->
      <div class="card">
        <div class="p-6">
          <h4 class="card-title mb-4">Informations de Base</h4>
          <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Nom de l'Établissement *</label>
              <input v-model.trim="form.base.name" type="text" class="form-input" placeholder="Ex. Hotel du Fleuve" required />
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Type *</label>
              <select v-model="form.base.type" class="form-select" required>
                <option value="" disabled>— Sélectionner —</option>
                <option>Hôtel</option>
                <option>Guest House</option>
                <option>Lodge</option>
                <option>Motel</option>
                <option>Auberge</option>
                <option>Résidence</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">NIF (Numéro d'Identification Fiscale)</label>
              <input v-model.trim="form.base.nif" type="text" class="form-input" placeholder="Ex. A1234567" />
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Numéro d'Enregistrement</label>
              <input v-model.trim="form.base.registrationNumber" type="text" class="form-input" placeholder="RCCM / Agrément…" />
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Catégorie *</label>
              <select v-model="form.base.category" class="form-select" required>
                <option value="" disabled>— Choisir —</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Statut *</label>
              <select v-model="form.base.status" class="form-select" required>
                <option value="" disabled>— Choisir —</option>
                <option>Actif</option>
                <option>Inactif</option>
                <option>En attente</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Informations de Contact -->
      <div class="card">
        <div class="p-6">
          <h4 class="card-title mb-4">Informations de Contact</h4>
          <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Nom du Responsable *</label>
              <input v-model.trim="form.contact.managerName" type="text" class="form-input" placeholder="Nom & prénom" required />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Email *</label>
              <input v-model.trim="form.contact.email" type="email" class="form-input" placeholder="exemple@mail.com" required />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Téléphone *</label>
              <input v-model.trim="form.contact.phone" type="tel" class="form-input" placeholder="+243 000 000 000" required />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Site Web</label>
              <input v-model.trim="form.contact.website" type="url" class="form-input" placeholder="https://…" />
            </div>
          </div>
        </div>
      </div>

      <!-- Localisation -->
      <div class="card">
        <div class="p-6">
          <h4 class="card-title mb-4">Informations de Localisation</h4>
          <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <div class="md:col-span-3">
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Adresse *</label>
              <input v-model.trim="form.location.address" type="text" class="form-input" placeholder="Rue, numéro" required />
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Ville *</label>
              <input v-model.trim="form.location.city" type="text" class="form-input" placeholder="Ex. Kinshasa" required />
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Province *</label>
              <select v-model="form.location.province" class="form-select" required>
                <option value="" disabled>— Sélectionnez une province —</option>
                <option v-for="p in provinces" :key="p" :value="p">{{ p }}</option>
              </select>
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Code Postal</label>
              <input v-model.trim="form.location.postalCode" type="text" class="form-input" placeholder="—" />
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Latitude</label>
              <input v-model.number="form.location.latitude" type="number" step="0.000001" class="form-input" placeholder="Ex. -4.325" />
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Longitude</label>
              <input v-model.number="form.location.longitude" type="number" step="0.000001" class="form-input" placeholder="Ex. 15.322" />
            </div>
          </div>
        </div>
      </div>

      <!-- Facility Information -->
      <div class="card">
        <div class="p-6">
          <h4 class="card-title mb-4">Facility Information</h4>
          <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Total Rooms</label>
              <input v-model.number="form.facility.totalRooms" type="number" min="0" class="form-input" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Total Beds</label>
              <input v-model.number="form.facility.totalBeds" type="number" min="0" class="form-input" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Conference Rooms</label>
              <input v-model.number="form.facility.conferenceRooms" type="number" min="0" class="form-input" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Parking Spaces</label>
              <input v-model.number="form.facility.parkingSpaces" type="number" min="0" class="form-input" />
            </div>
          </div>
        </div>
      </div>

      <!-- Tarification des Chambres -->
      <div class="card">
        <div class="p-6">
          <h4 class="card-title mb-4">Tarification des Chambres</h4>
          <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Chambre Simple (USD/nuit)</label>
              <input v-model.number="form.pricing.single" type="number" step="0.01" min="0" class="form-input" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Chambre Double (USD/nuit)</label>
              <input v-model.number="form.pricing.double" type="number" step="0.01" min="0" class="form-input" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Suite (USD/nuit)</label>
              <input v-model.number="form.pricing.suite" type="number" step="0.01" min="0" class="form-input" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Deluxe (USD/nuit)</label>
              <input v-model.number="form.pricing.deluxe" type="number" step="0.01" min="0" class="form-input" />
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Prix Moyen par Nuit (USD)</label>
              <input :value="avgPriceFormatted" type="text" class="form-input bg-gray-100 dark:bg-gray-700" readonly />
            </div>

            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Supplément Weekend (%)</label>
              <input v-model.number="form.pricing.weekendSurcharge" type="number" step="0.1" min="0" class="form-input" placeholder="Ex. 10" />
            </div>
          </div>
        </div>
      </div>

      <!-- Facilities -->
      <div class="card">
        <div class="p-6">
          <h4 class="card-title mb-4">Facilities</h4>
          <div class="grid sm:grid-cols-3 grid-cols-2 gap-3">
            <label class="inline-flex items-center gap-2">
              <input v-model="form.amenities.restaurant" type="checkbox" class="form-checkbox" />
              <span>Restaurant</span>
            </label>
            <label class="inline-flex items-center gap-2">
              <input v-model="form.amenities.bar" type="checkbox" class="form-checkbox" />
              <span>Bar</span>
            </label>
            <label class="inline-flex items-center gap-2">
              <input v-model="form.amenities.pool" type="checkbox" class="form-checkbox" />
              <span>Swimming Pool</span>
            </label>
            <label class="inline-flex items-center gap-2">
              <input v-model="form.amenities.gym" type="checkbox" class="form-checkbox" />
              <span>Gym / Fitness Center</span>
            </label>
            <label class="inline-flex items-center gap-2">
              <input v-model="form.amenities.spa" type="checkbox" class="form-checkbox" />
              <span>Spa</span>
            </label>
            <label class="inline-flex items-center gap-2">
              <input v-model="form.amenities.wifi" type="checkbox" class="form-checkbox" />
              <span>WiFi</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Banking Information -->
      <div class="card">
        <div class="p-6">
          <h4 class="card-title mb-4">Banking Information</h4>
          <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Bank Name</label>
              <input v-model.trim="form.banking.bankName" type="text" class="form-input" placeholder="Ex. Rawbank" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Account Number</label>
              <input v-model.trim="form.banking.accountNumber" type="text" class="form-input" placeholder="—" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Account Name</label>
              <input v-model.trim="form.banking.accountName" type="text" class="form-input" placeholder="Dénomination du compte" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">SWIFT Code</label>
              <input v-model.trim="form.banking.swift" type="text" class="form-input" placeholder="Ex. RAWBCDKIXXX" />
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-wrap gap-3">
        <button type="submit" class="btn bg-primary/25 text-primary hover:bg-primary hover:text-white">
          Enregistrer
        </button>
        <button type="reset" class="btn bg-dark/25 text-slate-900 dark:text-slate-200/80 hover:bg-dark/90 hover:text-white">
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
import axios from "axios";

type FormModel = {
  brand: {
    logoUrl: string;       // URL publique (optionnelle)
    logoFile: File | null; // fichier (prévisualisation locale seulement)
  };
  base: {
    name: string;
    type: string;
    nif: string;
    registrationNumber: string;
    category: "A" | "B" | "C" | "" ;
    status: "Actif" | "Inactif" | "En attente" | "" ;
  };
  contact: {
    managerName: string;
    email: string;
    phone: string;
    website: string;
  };
  location: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    latitude: number | null;
    longitude: number | null;
  };
  facility: {
    totalRooms: number | null;
    totalBeds: number | null;
    conferenceRooms: number | null;
    parkingSpaces: number | null;
  };
  pricing: {
    single: number | null;
    double: number | null;
    suite: number | null;
    deluxe: number | null;
    weekendSurcharge: number | null; // %
  };
  amenities: {
    restaurant: boolean;
    bar: boolean;
    pool: boolean;
    gym: boolean;
    spa: boolean;
    wifi: boolean;
  };
  banking: {
    bankName: string;
    accountNumber: string;
    accountName: string;
    swift: string;
  };
};

export default defineComponent({
  name: "EstablishmentForm",
  components: { Layout, Breadcrumb },
  data() {
    const form: FormModel = {
      brand: { logoUrl: "", logoFile: null },
      base: { name: "", type: "", nif: "", registrationNumber: "", category: "", status: "" },
      contact: { managerName: "", email: "", phone: "", website: "" },
      location: { address: "", city: "", province: "", postalCode: "", latitude: null, longitude: null },
      facility: { totalRooms: null, totalBeds: null, conferenceRooms: null, parkingSpaces: null },
      pricing: { single: null, double: null, suite: null, deluxe: null, weekendSurcharge: null },
      amenities: { restaurant: false, bar: false, pool: false, gym: false, spa: false, wifi: false },
      banking: { bankName: "", accountNumber: "", accountName: "", swift: "" },
    };

    const provinces = [
      "Kinshasa", "Kongo-Central", "Kwilu", "Kwango", "Mai-Ndombe",
      "Kasaï", "Kasaï-Central", "Kasaï-Oriental", "Lomami", "Sankuru",
      "Ituri", "Haut-Uélé", "Bas-Uélé", "Tshopo", "Nord-Kivu", "Sud-Kivu",
      "Maniema", "Tanganyika", "Haut-Lomami", "Lualaba", "Haut-Katanga",
      "Mongala", "Nord-Ubangi", "Sud-Ubangi", "Tshuapa", "Équateur"
    ];

    return {
      form,
      provinces,
      logoPreview: "" as string | null, // URL pour l'aperçu
      logoError: "" as string,
      isSubmitting: false as boolean,
    };
  },
  computed: {
    avgPrice(): number {
      const vals = [this.form.pricing.single, this.form.pricing.double, this.form.pricing.suite, this.form.pricing.deluxe]
        .filter((v): v is number => typeof v === "number" && !isNaN(v) && v >= 0);
      if (vals.length === 0) return 0;
      const sum = vals.reduce((a, b) => a + b, 0);
      return Number((sum / vals.length).toFixed(2));
    },
    avgPriceFormatted(): string {
      return this.avgPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
  },
  mounted() {
    if (this.form.brand.logoUrl) {
      this.logoPreview = this.form.brand.logoUrl;
    }
  },
  beforeUnmount() {
    if (this.logoPreview && this.form.brand.logoFile) {
      URL.revokeObjectURL(this.logoPreview);
    }
  },
  methods: {
    triggerFile() {
      (this.$refs.fileInput as HTMLInputElement)?.click();
    },
    onLogoChange(e: Event) {
      this.logoError = "";
      const input = e.target as HTMLInputElement;
      const file = input.files?.[0];
      if (!file) return;

      const MAX = 2 * 1024 * 1024;
      if (file.size > MAX) {
        this.logoError = "Le fichier dépasse 2 Mo.";
        (this.$refs.fileInput as HTMLInputElement).value = "";
        return;
      }

      if (this.logoPreview && this.form.brand.logoFile) {
        URL.revokeObjectURL(this.logoPreview);
      }
      this.form.brand.logoFile = file;
      this.logoPreview = URL.createObjectURL(file);
    },
    removeLogo() {
      this.logoError = "";
      if (this.logoPreview && this.form.brand.logoFile) {
        URL.revokeObjectURL(this.logoPreview);
      }
      this.form.brand.logoFile = null;
      this.logoPreview = this.form.brand.logoUrl || "";
      if (!this.form.brand.logoUrl) this.logoPreview = "";
      const el = this.$refs.fileInput as HTMLInputElement | undefined;
      if (el) el.value = "";
    },

    // 🔥 Soumission JSON stricte vers l'API en POST
    async submitForm() {
      this.isSubmitting = true;

      // Construire le payload EXACT demandé (brand.logoFile: null)
      const payload = {
        brand: {
          logoUrl: this.form.brand.logoUrl || "",
          logoFile: null
        },
        base: {
          name: this.form.base.name,
          type: this.form.base.type,
          nif: this.form.base.nif,
          registrationNumber: this.form.base.registrationNumber,
          category: this.form.base.category,
          status: this.form.base.status
        },
        contact: {
          managerName: this.form.contact.managerName,
          email: this.form.contact.email,
          phone: this.form.contact.phone,
          website: this.form.contact.website
        },
        location: {
          address: this.form.location.address,
          city: this.form.location.city,
          province: this.form.location.province,
          postalCode: this.form.location.postalCode,
          latitude: typeof this.form.location.latitude === "number" ? this.form.location.latitude : null,
          longitude: typeof this.form.location.longitude === "number" ? this.form.location.longitude : null
        },
        facility: {
          totalRooms: this.form.facility.totalRooms ?? null,
          totalBeds: this.form.facility.totalBeds ?? null,
          conferenceRooms: this.form.facility.conferenceRooms ?? null,
          parkingSpaces: this.form.facility.parkingSpaces ?? null
        },
        pricing: {
          single: this.form.pricing.single ?? null,
          double: this.form.pricing.double ?? null,
          suite: this.form.pricing.suite ?? null,
          deluxe: this.form.pricing.deluxe ?? null,
          weekendSurcharge: this.form.pricing.weekendSurcharge ?? null,
          average: this.avgPrice // number
        },
        amenities: {
          restaurant: this.form.amenities.restaurant,
          bar: this.form.amenities.bar,
          pool: this.form.amenities.pool,
          gym: this.form.amenities.gym,
          spa: this.form.amenities.spa,
          wifi: this.form.amenities.wifi
        },
        banking: {
          bankName: this.form.banking.bankName,
          accountNumber: this.form.banking.accountNumber,
          accountName: this.form.banking.accountName,
          swift: this.form.banking.swift
        }
      };

      try {
        const url = "http://172.233.253.208:8080/api/v1/establishment";
        const res = await axios.post(url, payload, {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("authToken") || ""}`,
          },
          // timeout: 20000, // optionnel
        });

        console.log("✅ Establishment saved:", res.data);
        alert("Établissement enregistré avec succès.");
      } catch (err: any) {
        console.error("❌ Erreur d'envoi:", err?.response?.data || err?.message || err);
        alert("Échec de l'enregistrement. Vérifiez la console pour les détails.");
      } finally {
        this.isSubmitting = false;
      }
    },

    resetForm() {
      this.form.brand = { logoUrl: "", logoFile: null };
      this.form.base = { name: "", type: "", nif: "", registrationNumber: "", category: "", status: "" };
      this.form.contact = { managerName: "", email: "", phone: "", website: "" };
      this.form.location = { address: "", city: "", province: "", postalCode: "", latitude: null, longitude: null };
      this.form.facility = { totalRooms: null, totalBeds: null, conferenceRooms: null, parkingSpaces: null };
      this.form.pricing = { single: null, double: null, suite: null, deluxe: null, weekendSurcharge: null };
      this.form.amenities = { restaurant: false, bar: false, pool: false, gym: false, spa: false, wifi: false };
      this.form.banking = { bankName: "", accountNumber: "", accountName: "", swift: "" };

      if (this.logoPreview && this.form.brand.logoFile) URL.revokeObjectURL(this.logoPreview);
      this.logoPreview = "";
      this.logoError = "";
      const el = this.$refs.fileInput as HTMLInputElement | undefined;
      if (el) el.value = "";
    },
  },
});
</script>
