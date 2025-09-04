<template>
  <Layout>
    <Breadcrumb title="Project List" subtitle="Project" />
    <div class="flex flex-auto flex-col">
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div class="card" v-for="(project, index) in projectList" :key="index">
          <div class="card-header">
            <div class="flex justify-between items-center">
              <h5 class="card-title">{{ project.label }}</h5>
              <div
                class="text-xs text-white rounded-md py-1 px-1.5 font-medium"
                :class="
                  project.status == 'Pending' ? 'bg-warning/60' : 'bg-success'
                "
                role="alert"
              >
                <span>{{ project.status }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="py-3 px-6">
              <h5 class="my-2">
                <a href="#" class="text-slate-900 dark:text-slate-200">{{
                  project.title
                }}</a>
              </h5>
              <p class="text-gray-500 text-sm mb-9">
                {{ project.subtxt }}
              </p>

              <div class="flex -space-x-2">
                <a
                  href="javascript: void(0);"
                  v-for="(assignee, index) in project.assignees"
                >
                  <img
                    v-if="assignee.image != null"
                    class="inline-block h-12 w-12 rounded-full border-2 border-white dark:border-gray-700"
                    :src="assignee.image"
                    alt="Image Description"
                  />
                  <div class="relative inline-flex" v-else>
                    <button
                      class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 transition-all text-sm"
                    >
                      <span class="font-medium leading-none"
                        >{{ project.assignees.length - 1 }}+</span
                      >
                    </button>
                  </div>
                </a>
              </div>
            </div>

            <div class="border-t p-5 border-gray-300 dark:border-gray-700">
              <div class="grid lg:grid-cols-2 gap-4">
                <div class="flex items-center justify-between gap-2">
                  <a href="#" class="text-sm">
                    <i class="mgc_calendar_line text-lg me-2"></i>
                    <span class="align-text-bottom">{{ project.date }}</span>
                  </a>

                  <a href="#" class="text-sm">
                    <i class="mgc_align_justify_line text-lg me-2"></i>
                    <span class="align-text-bottom">{{ project.chat }}</span>
                  </a>

                  <a href="#" class="text-sm">
                    <i class="mgc_comment_line text-lg me-2"></i>
                    <span class="align-text-bottom">{{
                      project.comments
                    }}</span>
                  </a>
                </div>
                <div class="flex items-center gap-2">
                  <div
                    class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700"
                  >
                    <div
                      class="h-1.5 rounded-full"
                      :class="project.progressClass"
                    ></div>
                  </div>
                  <span>{{ project.progress }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-6">
        <button
          type="button"
          class="btn bg-transparent border-gray-300 dark:border-gray-700"
        >
          <i class="mgc_loading_4_line me-2 animate-spin"></i>
          <span>Load More</span>
        </button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

import { projectList } from "./data";

export default {
  components: { Layout, Breadcrumb },
  data() {
    return {
      projectList,
    };
  },
};
</script>
