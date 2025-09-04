<template>
  <div class="card">
    <div class="card-header">
      <h6 class="card-title">Project Activities</h6>
    </div>
    <div class="table overflow-hidden w-full">
      <div
          class="divide-y divide-gray-300 dark:divide-gray-700 overflow-auto w-full max-w-full">
        <div
            class="p-3"
            v-for="(assignee, index) in projectActivities"
            :key="index"
        >
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 flex-shrink-0">
              <img
                  class="h-10 w-10 rounded-full"
                  :src="assignee.image"
                  alt=""
              />
            </div>
            <div class="flex-grow truncate">
              <div class="font-medium text-gray-900 dark:text-gray-300">
                {{ assignee.name }}
              </div>
              <p class="text-gray-600 dark:text-gray-400">
                {{ assignee.email }}
              </p>
            </div>
            <div
                class="px-3 py-1 md:block hidden rounded text-xs font-medium"
            >
              {{ assignee.workingOn }}
            </div>
            <div class="ms-auto">
              <div
                  class="px-3 py-1 rounded text-xs font-medium"
                  :class="
                        assignee.status == 'Working'
                          ? 'bg-primary/25 text-primary'
                          : '' || (assignee.status == 'Complated')
                          ? 'bg-success/25 text-success'
                          : '' || (assignee.status == 'Stop')
                          ? 'bg-danger/25 text-danger'
                          : ''
                      "
              >
                {{ assignee.status }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {projectActivities} from "./data"

export default {
  data(){
    return{
      projectActivities,
    }
  }
}
</script>
