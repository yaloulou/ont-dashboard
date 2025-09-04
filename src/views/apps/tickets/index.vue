<template>
  <Layout>
    <Breadcrumb title="Tickets" subtitle="Apps" />
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
      <div class="card" v-for="(card, index) in cardData" :key="index">
        <div class="p-5">
          <div class="flex justify-between">
            <div
              class="w-20 h-20 rounded-full inline-flex items-center justify-center"
              :class="
                index == 0 ? `bg-${card.color}/25` : `bg-${card.color}-100`
              "
            >
              <i
                :class="
                  index == 0
                    ? `${card.icon} text-4xl text-${card.color}`
                    : `${card.icon} text-4xl text-${card.color}-500`
                "
              ></i>
            </div>
            <div class="text-right">
              <h3
                class="text-gray-700 mt-1 text-2xl font-bold mb-5 dark:text-gray-300"
              >
                {{ card.number }}
              </h3>
              <p class="text-gray-500 mb-1 truncate dark:text-gray-400">
                {{ card.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="card">
        <div class="flex flex-wrap justify-between items-center gap-2 p-6">
          <a
            href="javascript:void(0);"
            class="btn bg-danger/20 text-sm font-medium text-danger hover:text-white hover:bg-danger"
            ><i class="mgc_add_circle_line me-3"></i> Add Customers</a
          >
          <div class="flex flex-wrap gap-2">
            <button
              type="button"
              class="btn bg-success/25 text-lg font-medium text-success hover:text-white hover:bg-success"
            >
              <i class="mgc_settings_3_line"></i>
            </button>
            <button
              type="button"
              class="btn bg-dark/25 text-sm font-medium text-slate-900 dark:text-slate-200/70 hover:text-white hover:bg-dark/90"
            >
              Import
            </button>
            <button
              type="button"
              class="btn bg-dark/25 text-sm font-medium text-slate-900 dark:text-slate-200/70 hover:text-white hover:bg-dark/90"
            >
              Export
            </button>
          </div>
        </div>
        <div class="relative overflow-x-auto">
          <table class="w-full divide-y divide-gray-300 dark:divide-gray-700">
            <thead
              class="bg-slate-300 bg-opacity-20 border-t dark:bg-slate-800 divide-gray-300 dark:border-gray-700"
            >
              <tr>
                <th
                  v-for="(heading, index) in tableHead"
                  scope="col"
                  class="text-left text-sm font-semibold text-gray-900 dark:text-gray-200"
                  :class="index == 0 ? 'py-3.5 ps-4 pe-3' : 'px-3 py-3.5'"
                >
                  {{ heading }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="item in tableData" :key="item.id">
                <td
                  class="whitespace-nowrap py-4 ps-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  <b>#{{ item.id }}</b>
                </td>
                <td class="whitespace-nowrap py-4 pe-3 text-sm">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="item.image.image"
                        alt=""
                      />
                    </div>
                    <div
                      class="font-medium text-gray-900 dark:text-gray-200 ms-4"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                </td>
                <td
                  class="whitespace-nowrap py-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  {{ item.sub }}
                </td>
                <td class="whitespace-nowrap py-4 px-3 text-sm">
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="item.assignee.image"
                    alt=""
                  />
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div
                    class="inline-flex items-center gap-1.5 py-1 px-3 rounded text-xs font-medium"
                    :class="
                      item.priority == 'Medium'
                        ? 'bg-primary/25 text-primary'
                        : '' || (item.priority == 'High')
                        ? 'bg-danger/25 text-danger'
                        : '' || (item.priority == 'Low')
                        ? 'bg-dark/25 text-slate-900 dark:text-slate-200/90'
                        : ''
                    "
                  >
                    {{ item.priority }}
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div
                    class="inline-flex items-center gap-1.5 py-1 px-3 rounded text-xs font-medium text-white"
                    :class="
                      item.status == 'Open' ? 'bg-success/90 ' : 'bg-dark/80 '
                    "
                  >
                    {{ item.status }}
                  </div>
                </td>
                <td
                  class="whitespace-nowrap py-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  {{ item.createdDate }}
                </td>
                <td
                  class="whitespace-nowrap py-4 pe-3 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  {{ item.dueDate }}
                </td>
                <td
                  class="whitespace-nowrap py-4 px-3 text-center text-sm font-medium"
                >
                  <a href="javascript:void(0);" class="me-0.5">
                    <i class="mgc_edit_line text-lg"></i>
                  </a>
                  <a href="javascript:void(0);" class="ms-0.5">
                    <i class="mgc_delete_line text-xl"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import { cardData, tableData, tableHead } from "./data";
export default {
  components: { Layout, Breadcrumb },
  data() {
    return {
      cardData,
      tableData,
      tableHead,
    };
  },
};
</script>
