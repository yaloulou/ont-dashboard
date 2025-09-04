<template>
  <div class="card">
    <div class="card-header">
      <div class="flex justify-between items-center">
        <h4 class="card-title">Daily Task</h4>
        <div>
          <select class="form-input form-select-sm">
            <option selected>Today</option>
            <option value="1">Yesterday</option>
            <option value="2">Tomorrow</option>
          </select>
        </div>
      </div>
    </div>

    <div class="py-6">
      <simplebar class="px-6" data-simplebar style="max-height: 304px">
        <div class="space-y-4">
          <div
              class="border border-gray-200 dark:border-gray-700 rounded p-2"
              v-for="(task, index) in dailyTasks"
              :key="index"
          >
            <ul class="flex items-center gap-2 mb-2">
              <a
                  href="javascript:void(0);"
                  class="text-base text-gray-600 dark:text-gray-400"
              >{{ task.task }}</a
              >
              <i class="mgc_round_fill text-[5px]"></i>
              <h5 class="text-sm font-semibold">{{ task.time }}</h5>
            </ul>
            <p class="text-gray-500 dark:text-gray-400 text-sm mb-1">
              {{ task.text }}
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              <i class="mgc_group_line text-xl me-2 align-middle"></i>
              <b>{{ task.people }}</b> People
            </p>
          </div>
          <div class="flex items-center justify-center">
            <div class="animate-spin flex">
              <i class="mgc_loading_2_line text-xl"></i>
            </div>
          </div>
        </div>
      </simplebar>
    </div>
  </div>
</template>

<script lang="ts">
import simplebar from 'simplebar-vue';

export default {
  components: {simplebar},
  data() {
    return {
      dailyTasks: [
        {
          task: "Landing Page Design",
          time: "2 Hrs ago",
          text: "Create a new landing page (Saas Product)",
          people: 5,
        },
        {
          task: "Admin Dashboard",
          time: "3 Hrs ago",
          text: "Create a new Admin dashboard",
          people: 2,
        },
        {
          task: "Client Work",
          time: "5 Hrs ago",
          text: "Create a new Power Project (Sktech design)",
          people: 2,
        },
        {
          task: "UI/UX Design",
          time: "6 Hrs ago",
          text: "Create a new UI Kit in figma",
          people: 3,
        },
      ]
    }
  }
}
</script>