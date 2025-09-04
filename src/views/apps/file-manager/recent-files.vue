<template>
  <div class="card">
    <div class="card-header">
      <h4
          class="text-lg font-semibold text-gray-800 dark:text-gray-300">
        Recent Files
      </h4>
    </div>

    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden">
            <table
                class="min-w-full divide-y divide-gray-200 dark:divide-gray-600"
            >
              <thead class="bg-gray-50 dark:bg-gray-700">
              <tr class="text-gray-800 dark:text-gray-300">
                <th
                    scope="col"
                    class="p-3.5 text-sm text-start font-semibold min-w-[10rem]"
                >
                  File Name
                </th>
                <th
                    scope="col"
                    class="p-3.5 text-sm text-start font-semibold min-w-[10rem]"
                >
                  Last Modified
                </th>
                <th
                    scope="col"
                    class="p-3.5 text-sm text-start font-semibold min-w-[6rem]"
                >
                  File Size
                </th>
                <th
                    scope="col"
                    class="p-3.5 text-sm text-start font-semibold min-w-[8rem]"
                >
                  Owner
                </th>
                <th
                    scope="col"
                    class="p-3.5 text-sm text-start font-semibold min-w-[6rem]"
                >
                  Members
                </th>
                <th
                    scope="col"
                    class="p-3.5 text-sm text-start font-semibold"
                >
                  Action
                </th>
              </tr>
              </thead>
              <tbody
                  class="divide-y divide-gray-200 dark:divide-gray-600"
              >
              <tr v-for="(file, index) in recentFilesData"
                  :key="index">
                <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                  <a
                      href="javascript: void(0);"
                      class="font-medium">{{ file.fileName }}</a>
                </td>
                <td class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                  <p>{{ file.lastModifiedAt }}</p>
                  <span class="text-xs"
                  >by {{ file.lastModifiedBy }}</span>
                </td>
                <td
                    class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                  {{ file.fileSize }} MB
                </td>
                <td
                    class="p-3.5 text-sm text-gray-700 dark:text-gray-400">
                  {{ file.owner }}
                </td>
                <td class="p-3.5">
                  <div class="flex -space-x-1.5">
                    <img
                        v-for="img in file.members"
                        class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-700"
                        :src="img"
                        alt="Image Description"
                    />
                  </div>
                </td>
                <td class="p-3.5">
                  <div class="ms-3">

                    <div class="hs-dropdown relative inline-flex [--placement:left-top]">
                      <button
                          class="hs-dropdown-toggle inline-flex text-slate-700 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full p-2">
                        <vue-feather type="more-vertical" class="w-4 h-4"></vue-feather>
                      </button>

                      <div
                          class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-40 z-50 mt-2 duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                        <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                           href="#">
                          <vue-feather type="edit-3" class="w-4 h-4 me-3"></vue-feather>
                          Edit
                        </a>
                        <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                           href="#">
                          <vue-feather type="link" class="w-4 h-4 me-3"></vue-feather>
                          Copy Link
                        </a>
                        <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                           href="#">
                          <vue-feather type="share-2" class="w-4 h-4 me-3"></vue-feather>
                          Share
                        </a>
                        <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                           href="#">
                          <vue-feather type="download" class="w-4 h-4 me-3"></vue-feather>
                          Download
                        </a>
                      </div>
                    </div>

                  </div>

                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {recentFilesData} from "./data"

export default {
  data() {
    return {
      recentFilesData,
    }
  }
}
</script>
