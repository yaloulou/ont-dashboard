<template>
  <div class="card">
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <h4 class="card-title">Revenue</h4>

        <button
          type="button"
          class="btn btn-sm bg-primary/25 text-primary hover:bg-primary hover:text-white disabled:opacity-60"
          :disabled="isLoading"
          @click="fetchRevenue"
        >
          <span v-if="isLoading" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"/>
            </svg>
            Refresh
          </span>
          <span v-else>Refresh</span>
        </button>
      </div>

      <div v-if="isLoading" class="text-gray-500">Loading current revenue…</div>
      <div v-else-if="error" class="text-red-600">{{ error }}</div>

      <div v-else>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Today -->
          <div class="border rounded-lg p-4 bg-white dark:bg-gray-800">
            <p class="text-sm text-gray-500">Today</p>
            <h3 class="text-2xl font-semibold mt-1">
              {{ formatCurrency(revenue.today) }}
            </h3>
          </div>

          <!-- Week + trend -->
          <div class="border rounded-lg p-4 bg-white dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">Week</p>
              <span class="text-xs px-2 py-0.5 rounded-full"
                    :class="trendClass(revenue.weekTrend)">
                <span class="inline-flex items-center">
                  <svg class="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path :d="trendIconPath(revenue.weekTrend)"/>
                  </svg>
                  {{ formatTrend(revenue.weekTrend) }}
                </span>
              </span>
            </div>
            <h3 class="text-2xl font-semibold mt-1">
              {{ formatCurrency(revenue.week) }}
            </h3>
          </div>

          <!-- Month -->
          <div class="border rounded-lg p-4 bg-white dark:bg-gray-800">
            <p class="text-sm text-gray-500">Month</p>
            <h3 class="text-2xl font-semibold mt-1">
              {{ formatCurrency(revenue.month) }}
            </h3>
          </div>

          <!-- Year + trend -->
          <div class="border rounded-lg p-4 bg-white dark:bg-gray-800">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">Year</p>
              <span class="text-xs px-2 py-0.5 rounded-full"
                    :class="trendClass(revenue.yearTrend)">
                <span class="inline-flex items-center">
                  <svg class="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path :d="trendIconPath(revenue.yearTrend)"/>
                  </svg>
                  {{ formatTrend(revenue.yearTrend) }}
                </span>
              </span>
            </div>
            <h3 class="text-2xl font-semibold mt-1">
              {{ formatCurrency(revenue.year) }}
            </h3>
          </div>
        </div>

        <p class="text-xs text-gray-400 mt-3">
          Currency: {{ revenue.currency }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

type ApiRevenue = {
  today: number;
  week: number;
  month: number;
  year: number;
  currency: string;
  weekTrend: number; // %
  yearTrend: number; // %
};

type ApiResponse = {
  success: boolean;
  data: ApiRevenue;
};

const API_URL =
  "http://172.233.253.208:8080/api/v1/establishment/revenue/current";

export default defineComponent({
  name: "Revenue",
  data() {
    return {
      isLoading: false,
      error: "" as string,
      revenue: {
        today: 0,
        week: 0,
        month: 0,
        year: 0,
        currency: "USD",
        weekTrend: 0,
        yearTrend: 0,
      } as ApiRevenue,
    };
  },
  mounted() {
    this.fetchRevenue();
  },
  methods: {
    async fetchRevenue() {
      this.isLoading = true;
      this.error = "";
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          this.error = "Not authenticated. Please log in first.";
          return;
        }

        const res = await axios.get<ApiResponse>(API_URL, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data?.data;
        if (!data) throw new Error("Malformed API response.");
        this.revenue = data;
      } catch (e: any) {
        console.error(e);
        this.error =
          e?.response?.status === 401
            ? "Unauthorized. Your session may have expired."
            : "Failed to load revenue.";
      } finally {
        this.isLoading = false;
      }
    },

    formatCurrency(n: number) {
      const cur = this.revenue?.currency || "USD";
      try {
        return new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: cur,
          maximumFractionDigits: 2,
        }).format(n);
      } catch {
        return `${n?.toFixed?.(2) ?? n} ${cur}`;
      }
    },

    formatTrend(value: number) {
      const sign = value > 0 ? "+" : "";
      return `${sign}${value.toFixed(1)}%`;
    },

    trendClass(value: number) {
      return value >= 0
        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    },

    // simple up/down arrow path
    trendIconPath(value: number) {
      return value >= 0
        ? "M12 4l-6 6h4v6h4v-6h4l-6-6z" // up
        : "M12 20l6-6h-4v-6h-4v6H6l6 6z"; // down
    },
  },
});
</script>
