<template>
  <Layout>
    <Breadcrumb title="Offcanvas" subtitle="Components"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Default">
        <template #card-body>
          <button class="bg-primary text-white hover:bg-primary-600 py-2 px-4 rounded transition-all"
                  data-hs-overlay="#hs-overlay-example">
            Open Offcanvas
          </button>
          <div id="hs-overlay-example"
               class="hs-overlay hs-overlay-open:translate-x-0 z-[60] hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full  bg-white border-r dark:bg-gray-800 dark:border-gray-700"
               tabindex="-1">
            <div class="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
              <h3 class="font-medium">
                Offcanvas title
              </h3>
              <button
                  class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400"
                  data-hs-overlay="#hs-overlay-example">
                <span class="material-symbols-rounded">close</span>
              </button>
            </div>
            <div class="p-4">
              <p class="text-gray-800 dark:text-gray-400">
                Some text as placeholder. In real life you can have the elements you have
                chosen. Like, text, images, lists, etc.
              </p>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Auto Targeting">
        <template #card-body>
          <div>
            <button class="bg-primary text-white hover:bg-primary-600 py-2 px-4 rounded transition-all"
                    data-hs-overlay="#hs-overlay-example">
              Open Offcanvas
            </button>
            <div id="hs-overlay-example"
                 class="hs-overlay hs-overlay-open:translate-x-0 z-[60] hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full  bg-white border-r dark:bg-gray-800 dark:border-gray-700"
                 tabindex="-1">
              <div class="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
                <h3 class="font-medium">
                  Offcanvas title
                </h3>
                <button
                    class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400"
                    data-hs-overlay="#hs-overlay-example">
                  <span class="material-symbols-rounded">close</span>
                </button>
              </div>
              <div class="p-4">
                <p class="text-gray-800 dark:text-gray-400">
                  Some text as placeholder. In real life you can have the elements you have
                  chosen. Like, text, images, lists, etc.
                </p>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Positions">
        <template #card-body>
          <div class="flex flex-wrap gap-4">
            <!--Left-->
            <button class="bg-primary text-white hover:bg-primary-600 py-2 px-4 rounded transition-all"
                    data-hs-overlay="#hs-overlay-left-example">
              Left
            </button>
            <div id="hs-overlay-left-example"
                 class="hs-overlay hs-overlay-open:translate-x-0 z-[60] hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full  bg-white border-r dark:bg-gray-800 dark:border-gray-700"
                 tabindex="-1">
              <div class="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
                <h3 class="font-medium">
                  Offcanvas title
                </h3>
                <button
                    class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400"
                    data-hs-overlay="#hs-overlay-left-example">
                  <span class="material-symbols-rounded">close</span>
                </button>
              </div>
              <div class="p-4">
                <p class="text-gray-800 dark:text-gray-400">
                  Some text as placeholder. In real life you can have the elements you have
                  chosen. Like, text, images, lists, etc.
                </p>
              </div>
            </div>

            <!--Top-->
            <button class="bg-primary text-white hover:bg-primary-600 py-2 px-4 rounded transition-all"
                    data-hs-overlay="#hs-overlay-top-example">
              Top
            </button>
            <div id="hs-overlay-top-example"
                 class="hs-overlay hs-overlay-open:translate-y-0 z-[60] -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform max-h-40 h-full w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hidden"
                 tabindex="-1">
              <div class="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
                <h3 class="font-medium">
                  Offcanvas title
                </h3>
                <button
                    class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400"
                    data-hs-overlay="#hs-overlay-top-example">
                  <span class="material-symbols-rounded">close</span>
                </button>
              </div>
              <div class="p-4">
                <p class="text-gray-800 dark:text-gray-400">
                  Some text as placeholder. In real life you can have the elements you have
                  chosen. Like, text, images, lists, etc.
                </p>
              </div>
            </div>


            <!--Right-->
            <button class="bg-primary text-white hover:bg-primary-600 py-2 px-4 rounded transition-all"
                    data-hs-overlay="#hs-overlay-right-example">
              Right
            </button>
            <div id="hs-overlay-right-example"
                 class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 max-w-xs w-full z-[60] transform h-full bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                 tabindex="-1">
              <div class="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
                <h3 class="font-medium">
                  Offcanvas title
                </h3>
                <button
                    class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400"
                    data-hs-overlay="#hs-overlay-right-example">
                  <span class="material-symbols-rounded">close</span>
                </button>
              </div>
              <div class="p-4">
                <p class="text-gray-800 dark:text-gray-400">
                  Some text as placeholder. In real life you can have the elements you have
                  chosen. Like, text, images, lists, etc.
                </p>
              </div>
            </div>

            <!--Bottom-->
            <button class="bg-primary text-white hover:bg-primary-600 py-2 px-4 rounded transition-all"
                    data-hs-overlay="#hs-overlay-bottom-example">
              Bottom
            </button>
            <div id="hs-overlay-bottom-example"
                 class="hs-overlay hs-overlay-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 z-[60] transition-all duration-300 transform max-h-40 h-full w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hidden"
                 tabindex="-1">
              <div class="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
                <h3 class="font-medium">
                  Offcanvas title
                </h3>
                <button
                    class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400"
                    data-hs-overlay="#hs-overlay-bottom-example">
                  <span class="material-symbols-rounded">close</span>
                </button>
              </div>
              <div class="p-4">
                <p class="text-gray-800 dark:text-gray-400">
                  Some text as placeholder. In real life you can have the elements you have
                  chosen. Like, text, images, lists, etc.
                </p>
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
