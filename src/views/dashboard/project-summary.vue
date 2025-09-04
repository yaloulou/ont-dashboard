<template>
  <div class="card mb-6">
    <div class="px-6 py-5 flex justify-between items-center">
      <h4 class="header-title">Project Summary</h4>

      <div class="hs-dropdown relative inline-flex [--placement:left-top]">
        <button class="hs-dropdown-toggle text-gray-600 dark:text-gray-400" type="button">
          <i class="mgc_more_1_fill text-xl"></i>
        </button>

        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-36 z-50 mt-2 duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
          <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
            <i class="mgc_add_circle_line"></i> Add
          </a>
          <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
            <i class="mgc_edit_line"></i> Edit
          </a>
          <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:void(0)">
            <i class="mgc_copy_2_line"></i> Copy
          </a>
          <div class="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
          <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="javascript:void(0)">
            <i class="mgc_delete_line"></i> Delete
          </a>
        </div>
      </div>

    </div>
    <div class="px-4 py-2 bg-warning/20 text-warning" role="alert">
      <i class="mgc_folder_star_line me-2 text-lg align-baseline"></i>
      <b>38</b> Total Admin & Client Projects
    </div>

    <div class="p-6 space-y-3">
      <div
          class="flex items-center border border-gray-200 dark:border-gray-700 rounded px-3 py-2"
          v-for="(project, index) in projectSummary"
          :key="index"
      >
        <div class="flex-shrink-0 me-2">
          <div
              class="w-12 h-12 flex justify-center items-center rounded-full"
              :class="`text-${project.color} bg-${project.color}/25`">
            <i :class="`${project.icon} text-xl`"></i>
          </div>
        </div>
        <div class="flex-grow">
          <h5 :class="index == 0 ? 'font-semibold mb-1' : 'fw-semibold my-0'">
            {{ project.text }}
          </h5>
          <p :class="index == 0 ? 'text-gray-400' : ''">
            {{ project.subtext }}
          </p>
        </div>

          <div class="hs-tooltip inline-block">
            <button class="hs-tooltip-toggle text-gray-400">
              <i class="mgc_information_line text-xl"></i>
            </button>
            <div
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-slate-700 mt-1 px-2 py-1 rounded  text-white  z-50"
                role="tooltip">
              Info
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      projectSummary: [
        {
          icon: "mgc_group_line",
          color: "primary",
          text: "Project Discssion",
          subtext: "6 Person",
        },
        {
          icon: "mgc_compass_line",
          color: "warning",
          text: "In Progress",
          subtext: "16 Projects",
        },
        {
          icon: "mgc_check_circle_line",
          color: "danger",
          text: "Completed Projects",
          subtext: "24",
        },
        {
          icon: "mgc_send_line",
          color: "success",
          text: "Delivery Projects",
          subtext: "20",
        },
      ],
    }
  }
}
</script>
