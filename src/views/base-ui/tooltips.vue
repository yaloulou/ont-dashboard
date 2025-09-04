<template>
  <Layout>
    <Breadcrumb title="Tooltips" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
      <CustomSyntax title="Placement Tooltips">
        <template #card-body>
          <div class="flex flex-wrap gap-2">

            <div class="hs-tooltip inline-block [--placement:bottom]">
              <button class="hs-tooltip-toggle btn bg-primary text-white">
                Tooltip Bottom
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-slate-700  mt-1 px-2 py-1 rounded  text-white  z-50"
                  role="tooltip">
                Bottom Tooltip
              </div>
            </div>

            <div class="hs-tooltip inline-block [--placement:right]">
              <button class="hs-tooltip-toggle btn bg-primary text-white">
                Tooltip Right
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-slate-700  ms-1 px-2 py-1 rounded  text-white  z-50"
                  role="tooltip">
                Right Tooltip
              </div>
            </div>

            <div class="hs-tooltip inline-block ">
              <button class="hs-tooltip-toggle btn bg-primary text-white">
                Tooltip Top
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-slate-700  px-2 py-1 rounded  text-white  z-50"
                  role="tooltip">
                Top Tooltip
              </div>
            </div>

            <div class="hs-tooltip inline-block [--placement:left]">
              <button class="hs-tooltip-toggle btn bg-primary text-white">
                Tooltip Left
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-slate-700  me-1 px-2 py-1 rounded  text-white  z-50"
                  role="tooltip">
                Left Tooltip
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Color Tooltips">
        <template #card-body>
          <div class="flex flex-wrap gap-2">

            <div class="hs-tooltip inline-block">
              <button class="hs-tooltip-toggle btn bg-primary text-white">
                Primary
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-primary  px-2 py-1 rounded  text-white z-50"
                  role="tooltip">
                Primary Tooltip
              </div>
            </div>

            <div class="hs-tooltip inline-block">
              <button class="hs-tooltip-toggle btn bg-danger text-white">
                Danger
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-danger  px-2 py-1 rounded  text-white z-50"
                  role="tooltip">
                Danger Tooltip
              </div>
            </div>

            <div class="hs-tooltip inline-block">
              <button class="hs-tooltip-toggle btn bg-success text-white">
                Success
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-success  px-2 py-1 rounded  text-white  z-50"
                  role="tooltip">
                Success Tooltip
              </div>
            </div>

            <div class="hs-tooltip inline-block">
              <button class="hs-tooltip-toggle btn bg-info text-white">
                Info
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity inline-block absolute invisible bg-info  px-2 py-1 rounded  text-white opacity-0 z-50"
                  role="tooltip">
                Info Tooltip
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Real Example">
        <template #card-body>
          <div class="text-muted">
            You can use frost
            <span class="hs-tooltip inline-block [--placement:bottom]">
              <span class="hs-tooltip-toggle underline italic cursor-help">tooltip</span>
              <span
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible bg-slate-700  px-2 py-1 rounded  text-white  z-50"
                  role="tooltip"> Why you see at bottom</span>
            </span>
            to specify extra information. You can also use in
            <span class="hs-tooltip inline-block [--placement:bottom]">
            <span class="hs-tooltip-toggle underline italic cursor-help">large</span>
            <div
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible ">
              <div
                  class="max-w-xs bg-white border border-gray-100 text-left rounded-lg dark:bg-gray-800 dark:border-gray-700 p-3">
                <p class="block text-lg font-medium">Overview</p>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <img alt="images" class="mb-3 rounded" src="https://placehold.co/300x150">
                  <p>This is a popover body with supporting text below as a natural lead-in to additional
                    content.</p>
                  <dl class="mt-3">
                    <dt class="font-bold pt-3 first:pt-0 dark:text-white">Assigned to:</dt>
                    <dd class="text-gray-600 dark:text-gray-400">Charles East</dd>
                    <dt class="font-bold pt-3 first:pt-0 dark:text-white">Due:</dt>
                    <dd class="text-gray-600 dark:text-gray-400">March 20, 2023</dd>
                  </dl>
                </div>
              </div>
            </div>
            </span>
            Tooltip
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
