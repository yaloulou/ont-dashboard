<template>
  <Layout>
    <Breadcrumb title="Spinners" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Example">
        <template #card-body>
          <div
              class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
              role="status"
              aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Color variants">
        <template #card-body>
          <div class="flex flex-wrap gap-3">
            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-red-600 rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-yellow-600 rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-purple-600 rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-pink-600 rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-orange-600 rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Sizes">
        <template #card-body>
          <div class="space-x-2">
            <div
                class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-primary rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>

            <div
                class="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-primary rounded-full"
                role="status"
                aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Customized description">
        <template #card-body>
          <div class="relative">
            <div class="bg-sky-50 border border-sky-200 rounded-md p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <i class="mgc_safe_alert_line text-lg text-sky-400"></i>
                </div>
                <div class="ms-3">
                  <h3 class="text-sm text-sky-800 font-medium">
                    Attention needed
                  </h3>
                  <div class="text-sm text-sky-700 mt-2">
                    <span class="font-semibold">Holy guacamole!</span> You
                    should check in on some of those fields below.
                  </div>
                </div>
              </div>
            </div>

            <div
                class="absolute top-0 start-0 w-full h-full bg-white/[.5] rounded-md dark:bg-gray-800/[.4]"
            ></div>

            <div
                class="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div
                  class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
                  role="status"
                  aria-label="loading"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Inside a card">
        <template #card-body>
          <div
              class="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
          >
            <div
                class="flex flex-auto flex-col justify-center items-center p-4 md:p-5"
            >
              <div class="flex justify-center">
                <div
                    class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
                    role="status"
                    aria-label="loading"
                >
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
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
