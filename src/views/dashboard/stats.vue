<template>
  <div v-if="isLoading" class="p-4 text-gray-500">Loading recent activity…</div>
  <div v-else-if="error" class="p-4 text-red-600">{{ error }}</div>

  <div class="card" v-for="(project, index) in projectAdditional" :key="index">
    <div class="p-6">
      <div class="flex items-center">
        <div class="flex-shrink-0 me-3">
          <div
            class="w-12 h-12 flex justify-center items-center rounded"
            :class="`text-${project.color} bg-${project.color}/25`"
          >
            <span v-if="project.emoji" class="text-xl">{{ project.emoji }}</span>
          </div>
        </div>
        <div class="flex-grow">
          <h5 class="mb-1">{{ project.text }}</h5>
          <p class="text-gray-500">{{ project.subtext }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

type ApiActivity = {
  date: string;
  description: string;
  icone: string; // emoji
  type: string;  // payment | declaration | profile | ...
};

type CardItem = {
  emoji: string;
  color: string;
  text: string;
  subtext: string;
};

const API_URL = "https://ont-redevance.com/api/v1/establishment/activity/recent";

export default defineComponent({
  data() {
    return {
      projectAdditional: [] as CardItem[],
      isLoading: false,
      error: "" as string,
    };
  },
  mounted() {
    this.fetchActivities();
  },
  methods: {
    async fetchActivities() {
      this.isLoading = true;
      this.error = "";

      try {
        // 1) Récupérer le token stocké à la connexion
        const token = localStorage.getItem("authToken");

        if (!token) {
          this.error = "Not authenticated. Please log in first.";
          return;
        }

        // 2) Appel Axios avec header Authorization: Bearer <token>
        const res = await axios.get(API_URL, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const items = (res.data?.data ?? []) as ApiActivity[];

        // 3) Mapper la réponse API vers ton affichage
        this.projectAdditional = items.map((a) => ({
          emoji: a.icone,
          color: this.colorForType(a.type),
          text: a.description,
          subtext: this.formatDate(a.date),
        }));
      } catch (e: any) {
        console.error(e);
        this.error =
          e?.response?.status === 401
            ? "Unauthorized. Your session may have expired."
            : "Failed to load recent activity.";
      } finally {
        this.isLoading = false;
      }
    },

    colorForType(t: string): string {
      switch (t) {
        case "payment":
          return "success";
        case "declaration":
          return "info";
        case "profile":
          return "warning";
        default:
          return "primary";
      }
    },

    formatDate(iso: string): string {
      try {
        return new Intl.DateTimeFormat(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date(iso));
      } catch {
        return iso;
      }
    },
  },
});
</script>
