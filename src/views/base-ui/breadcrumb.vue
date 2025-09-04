<template>
  <Layout>
    <Breadcrumb title="Breadcrumb" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Simple">
        <template #card-body>
          <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center text-sm font-semibold space-x-4">
              <li>
                <div class="flex items-center">
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <i class="mgc_home_4_line text-lg flex-shrink-0 align-middle"></i>
                    <span class="sr-only">Home</span>
                  </a>
                </div>
              </li>

              <li>
                <div class="flex items-center">
                  <i class="mgc_right_line text-lg flex-shrink-0 text-gray-400"></i>
                  <a href="#" class="ms-4 text-sm font-medium text-gray-500 hover:text-gray-700">Apps</a>
                </div>
              </li>

              <li>
                <div class="flex items-center">
                  <i class="mgc_right_line text-lg flex-shrink-0 text-gray-400"></i>
                  <a href="#" class="ms-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">Calendar</a>
                </div>
              </li>
            </ol>
          </nav>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Example">
        <template #card-body>
          <ol class="flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
            <li class="text-sm text-gray-600 dark:text-gray-400">
              <a class="flex items-center hover:text-primary" href="#">
                Home
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2" width="16" height="16"
                     viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"/>
                </svg>
              </a>
            </li>

            <li class="text-sm text-gray-600 dark:text-gray-400">
              <a class="flex items-center hover:text-primary" href="#">
                App Center
                <svg class="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2" width="16" height="16"
                     viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"/>
                </svg>
              </a>
            </li>

            <li class="text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">
              Application
            </li>
          </ol>
        </template>
      </CustomSyntax>

    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";

export default {
  components: {CustomSyntax, Layout, Breadcrumb},
};
</script>
  