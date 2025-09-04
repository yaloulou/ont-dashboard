<template>
  <Layout>
    <Breadcrumb title="Popovers" subtitle="Components"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Default Popover">
        <template #card-body>
          <div class="hs-tooltip inline-block [--trigger:click] [--placement:bottom]">
            <button class="hs-tooltip-toggle block btn bg-primary text-white">
              Click me
            </button>
            <div id="default-tooltip"
                 class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity inline-block absolute invisible bg-slate-700 mt-1 px-2 py-1 rounded text-white opacity-0 z-50">
              Believe me! I'm Popover 😀
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Auto Targeting Popover">
        <template #card-body>
          <div class="hs-tooltip inline-block [--trigger:click] [--placement:bottom]">
            <button class="hs-tooltip-toggle btn bg-primary text-white">
              Click me
            </button>
            <div
                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity inline-block absolute invisible bg-slate-700  mt-1 px-2 py-1 rounded text-white opacity-0 z-50">
              It's magic
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Four directions Popovers">
        <template #card-body>
          <div class="flex flex-wrap gap-3">

            <div class="hs-tooltip inline-block [--trigger:click]">
              <button type="button" class="hs-tooltip-toggle btn bg-primary/10 text-primary">
                Popover on Top
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity inline-block absolute invisible bg-gray-400 px-3 py-1 rounded-md  text-white opacity-0 z-50">
                Top popover
              </div>
            </div>

            <div class="hs-tooltip inline-block [--trigger:click] [--placement:bottom]">
              <button type="button" class="hs-tooltip-toggle btn bg-primary/10 text-primary">
                Popover on Bottom
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity inline-block absolute invisible bg-gray-400 px-3 py-1 rounded-md  text-white opacity-0 z-50">
                Bottom popover
              </div>
            </div>

            <div class="hs-tooltip inline-block [--trigger:click] [--placement:left]">
              <button type="button" class="hs-tooltip-toggle btn bg-primary/10 text-primary">
                Popover on Left
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity inline-block absolute invisible bg-gray-400 px-3 py-1 rounded-md  text-white opacity-0 z-50">
                Left popover
              </div>
            </div>

            <div class="hs-tooltip inline-block [--trigger:click] [--placement:right]">
              <button type="button" class="hs-tooltip-toggle btn bg-primary/10 text-primary">
                Popover on Right
              </button>
              <div
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity inline-block absolute invisible bg-gray-400 px-3 py-1 rounded-md  text-white opacity-0 z-50">
                Right popover
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="With content Popover">
        <template #card-body>

          <div class="flex flex-wrap gap-3">
            <div class="hs-tooltip inline-block [--trigger:click] [--placement:bottom]">
              <button type="button" class="hs-tooltip-toggle btn bg-primary text-white">
                Popover With Text
              </button>
              <div class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity inline-block absolute invisible w-72 z-50">
                <div class="bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                  <div class="px-4 py-3 border-b dark:border-gray-700">Popover title</div>
                  <div class="p-4">
                    And here's some amazing content. It's very engaging. Right?
                  </div>
                </div>
              </div>
            </div>

            <div class="hs-tooltip inline-block [--trigger:click] [--placement:bottom]">
              <button type="button" class="hs-tooltip-toggle btn bg-primary text-white">
                Popover with Images
              </button>

              <div class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible transition-opacity inline-block absolute invisible z-50">
                <div
                    class="max-w-xs bg-white border border-gray-100 text-left rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                    role="tooltip">
                  <span class="pt-3 px-4 block text-lg font-bold text-gray-800 dark:text-white">Overview</span>
                  <div class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                    <img src="https://placehold.co/600x400" class="mb-3 rounded" alt="images">
                    <p>This is a popover body with supporting text below as a natural lead-in to additional content.</p>
                    <dl class="mt-3">
                      <dt class="font-bold pt-3 first:pt-0 dark:text-white">Assigned to:</dt>
                      <dd class="text-gray-600 dark:text-gray-400">Mark Welson</dd>
                      <dt class="font-bold pt-3 first:pt-0 dark:text-white">Due:</dt>
                      <dd class="text-gray-600 dark:text-gray-400">December 21, 2021</dd>
                    </dl>
                  </div>
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
