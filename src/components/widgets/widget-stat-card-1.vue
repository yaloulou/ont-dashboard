<template>
  <div class="card">
    <div class="p-6">
      <div class="flex justify-between items-start">
        <div>
          <h4 class="text-base mb-1 text-gray-600 dark:text-gray-400">
            {{ title }}
          </h4>
          <p class="font-normal text-sm text-gray-400 truncate dark:text-gray-500">
            {{ subTxt }}
          </p>
        </div>

        <div class="hs-dropdown relative inline-flex [--placement:left-top]">
          <button class="hs-dropdown-toggle text-gray-600 dark:text-gray-400"  type="button">
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

      <div class="flex items-end">
        <div class="flex-grow">
          <p
              class="text-[13px] text-gray-400 dark:text-gray-500 font-semibold"
          >
            <i class="mgc_alarm_2_line"></i> {{ time }}
          </p>
        </div>
        <div class="flex">
          <a
              v-for="(assignee, index) in assignees"
              :key="index"
              :class="index != 0 ?'-ms-2':''"
          >
            <img
                :src="assignee.img"
                class="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700"
                alt="friend"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    title: {
      type: String,
      require: true
    },
    subTxt: {
      type: String,
      require: true
    },
    time: {
      type: String,
      require: true
    },
    assignees: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
    }
  }
}
</script>
