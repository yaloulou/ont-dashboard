<template>
  <Layout>
    <Breadcrumb title="Modals" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Example">
        <template #card-body>
          <div>
            <button class="btn bg-primary text-white" data-hs-overlay="#hs-basic-modal" type="button">
              Show Modal
            </button>

            <div id="hs-basic-modal"
                 class="hs-overlay z-[60] w-full h-full mt-5 fixed top-0 left-0 transition-all duration-500 fc-modal hidden">
              <div
                  class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700">
                <div
                    class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                  <h3 class="font-medium text-gray-800 dark:text-white text-lg">
                    Modal Title
                  </h3>
                  <button
                      class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                      type="button" data-hs-overlay="#hs-basic-modal">
                    <span class="material-symbols-rounded">close</span>
                  </button>
                </div>
                <div class="px-4 py-8 overflow-y-auto">
                  <p class="text-gray-800 dark:text-gray-200">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content.
                  </p>
                </div>
                <div
                    class="flex justify-end items-center gap-4 p-4 border-t dark:border-slate-700">
                  <button
                      class="hs-dropdown-toggle btn dark:text-gray-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                      data-hs-overlay="#hs-basic-modal">Close
                  </button>
                  <a class="btn bg-primary text-white" href="javascript:void(0)">Save</a>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Auto Targeting">
        <template #card-body>
          <div>
            <button class="btn bg-primary text-white" data-hs-overlay="#hs-basic-modal" type="button">
              Show Modal
            </button>

            <div id="hs-basic-modal"
                 class="hs-overlay z-[60] w-full h-full mt-5 fixed top-0 left-0 transition-all duration-500 fc-modal hidden">
              <div
                  class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700">
                <div
                    class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                  <h3 class="font-medium text-gray-800 dark:text-white text-lg">
                    Modal Title
                  </h3>
                  <button
                      class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                      type="button" data-hs-overlay="#hs-basic-modal">
                    <span class="material-symbols-rounded">close</span>
                  </button>
                </div>
                <div class="px-4 py-8 overflow-y-auto">
                  <p class="text-gray-800 dark:text-gray-200">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content.
                  </p>
                </div>
                <div
                    class="flex justify-end items-center gap-4 p-4 border-t dark:border-slate-700">
                  <button
                      class="hs-dropdown-toggle btn dark:text-gray-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                      data-hs-overlay="#hs-basic-modal">Close
                  </button>
                  <a class="btn bg-primary text-white" href="javascript:void(0)">Save</a>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Sizes">
        <template #card-body>
          <div class="flex flex-wrap gap-4">

            <!--Small-->
            <button type="button" class="btn bg-primary text-white" data-hs-overlay="#hs-small-modal">
              Small
            </button>

            <div id="hs-small-modal"
                 class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
              <div
                  class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div class="flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700">
                  <div class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                    <h3 class="font-medium text-gray-800 dark:text-white text-lg">
                      Modal Title
                    </h3>
                    <button type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            data-hs-overlay="#hs-small-modal">
                      <span class="material-symbols-rounded">close</span>
                    </button>
                  </div>
                  <div class="px-4 py-8 overflow-y-auto">
                    <p class="text-gray-800 dark:text-gray-200">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional
                      content.
                    </p>
                  </div>
                  <div class="flex justify-end items-center gap-4 p-4 border-t dark:border-slate-700">
                    <button type="button"
                            class="hs-dropdown-toggle btn dark:text-gray-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                            data-hs-overlay="#hs-small-modal">
                      Close
                    </button>
                    <a class="btn bg-primary text-white" href="javascript:void(0)">Save</a>
                  </div>
                </div>
              </div>
            </div>

            <!--Medium-->
            <button type="button" class="btn bg-primary text-white" data-hs-overlay="#hs-medium-modal">
              Medium
            </button>

            <div id="hs-medium-modal"
                 class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
              <div
                  class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                <div class="flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700">
                  <div class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                    <h3 class="font-large text-gray-800 dark:text-white text-lg">
                      Modal Title
                    </h3>
                    <button type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            data-hs-overlay="#hs-medium-modal">
                      <span class="material-symbols-rounded">close</span>
                    </button>
                  </div>
                  <div class="px-4 py-8 overflow-y-auto">
                    <p class="text-gray-800 dark:text-gray-200">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional
                      content.
                    </p>
                  </div>
                  <div class="flex justify-end items-center gap-4 p-4 border-t dark:border-slate-700">
                    <button type="button"
                            class="hs-dropdown-toggle btn dark:text-gray-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                            data-hs-overlay="#hs-medium-modal">
                      Close
                    </button>
                    <a class="btn bg-primary text-white" href="javascript:void(0)">Save</a>
                  </div>
                </div>
              </div>
            </div>


            <!--Large-->
            <button type="button" class="btn bg-primary text-white" data-hs-overlay="#hs-large-modal">
              Large
            </button>

            <div id="hs-large-modal"
                 class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
              <div
                  class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
                <div class="flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700">
                  <div class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                    <h3 class="font-large text-gray-800 dark:text-white text-lg">
                      Modal Title
                    </h3>
                    <button type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            data-hs-overlay="#hs-large-modal">
                      <span class="material-symbols-rounded">close</span>
                    </button>
                  </div>
                  <div class="px-4 py-8 overflow-y-auto">
                    <p class="text-gray-800 dark:text-gray-200">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional
                      content.
                    </p>
                  </div>
                  <div class="flex justify-end items-center gap-4 p-4 border-t dark:border-slate-700">
                    <button type="button"
                            class="hs-dropdown-toggle btn dark:text-gray-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                            data-hs-overlay="#hs-large-modal">
                      Close
                    </button>
                    <a class="btn bg-primary text-white" href="javascript:void(0)">Save</a>
                  </div>
                </div>
              </div>
            </div>


            <!--Full Screen-->
            <button type="button" class="btn bg-primary text-white" data-hs-overlay="#hs-fullscreen-modal">
              Full Screen
            </button>

            <div id="hs-fullscreen-modal"
                 class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
              <div
                  class="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full w-full">
                <div class="flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700">
                  <div class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                    <h3 class="font-large text-gray-800 dark:text-white text-lg">
                      Modal Title
                    </h3>
                    <button type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            data-hs-overlay="#hs-fullscreen-modal">
                      <span class="material-symbols-rounded">close</span>
                    </button>
                  </div>
                  <div class="px-4 py-8 overflow-y-auto">
                    <p class="text-gray-800 dark:text-gray-200">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional
                      content.
                    </p>
                  </div>
                  <div class="flex justify-end items-center gap-4 p-4 border-t dark:border-slate-700">
                    <button type="button"
                            class="hs-dropdown-toggle btn dark:text-gray-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                            data-hs-overlay="#hs-fullscreen-modal">
                      Close
                    </button>
                    <a class="btn bg-primary text-white" href="javascript:void(0)">Save</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Static Backdrop">
        <template #card-body>
          <div class="flex gap-2">
            <button class="btn bg-primary text-white" data-hs-overlay="#hs-static-backdrop-modal" type="button">
              Show Modal
            </button>

            <div id="hs-static-backdrop-modal"
                 class="hs-overlay z-[60] overflow-x-hidden overflow-y-auto w-full h-full mt-5 fixed top-0 left-0 transition-all duration-500 hidden [--overlay-backdrop:static]">
              <div
                  class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700 ">
                <div class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                  <h3 class="font-medium text-gray-800 dark:text-white text-lg">
                    Modal Title
                  </h3>
                  <button
                      class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                      data-hs-overlay="#hs-static-backdrop-modal" type="button">
                    <span class="material-symbols-rounded">close</span>
                  </button>
                </div>
                <div class="px-4 py-8 overflow-y-auto">
                  <p class="text-gray-800 dark:text-gray-200">
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content.
                  </p>
                </div>
                <div class="flex justify-end items-center gap-4 p-4 border-t dark:border-slate-700">
                  <button
                      class="hs-dropdown-toggle py-2 px-5 inline-flex justify-center items-center gap-2 rounded dark:text-gray-200 border dark:border-slate-700 font-medium hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                      data-hs-overlay="#hs-static-backdrop-modal" type="button">Close
                  </button>
                  <a class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded bg-primary hover:bg-primary-600 text-white"
                     href="javascript:void(0)">Save</a>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Vertically & Horizontally Centered">
        <template #card-body>
          <div class="flex gap-2">
            <button type="button" class="btn bg-primary text-white" data-hs-overlay="#hs-centered-modal">
              Show Modal
            </button>

            <div id="hs-centered-modal"
                 class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
              <div
                  class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center shadow-sm rounded-md">

                <div class="flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700">
                  <div class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                    <h3 class="font-medium text-gray-800 dark:text-white text-lg">
                      Modal Title
                    </h3>
                    <button type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            data-hs-overlay="#hs-centered-modal">
                      <span class="material-symbols-rounded">close</span>
                    </button>
                  </div>
                  <div class="px-4 py-8 overflow-y-auto">
                    <p class="text-gray-800 dark:text-gray-200">
                      This is a wider card with supporting text below as a natural lead-in to additional
                      content.
                    </p>
                  </div>
                  <div class="flex justify-end items-center gap-4 p-4 border-t dark:border-gray-700">
                    <button type="button"
                            class="hs-dropdown-toggle py-2 px-5 inline-flex justify-center items-center gap-2 rounded dark:text-gray-200 border dark:border-slate-700 font-medium hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                            data-hs-overlay="#hs-centered-modal">
                      Close
                    </button>
                    <a class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded bg-primary hover:bg-primary-600 text-white"
                       href="javascript:void(0)">Save</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Animated">
        <template #card-body>
          <div class="flex gap-2">

            <button type="button" class="btn bg-primary text-white" data-hs-overlay="#hs-slide-up-animation-modal">
              Slide Up
            </button>

            <div id="hs-slide-up-animation-modal"
                 class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
              <div
                  class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div class="flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700">
                  <div class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                    <h3 class="font-medium text-gray-800 dark:text-white text-lg">
                      Modal Title
                    </h3>
                    <button type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            data-hs-overlay="#hs-slide-up-animation-modal">
                      <span class="material-symbols-rounded">close</span>
                    </button>
                  </div>
                  <div class="px-4 py-8 overflow-y-auto">
                    <p class="text-gray-800 dark:text-gray-200">
                      This is a wider card with supporting text below as a natural lead-in to additional
                      content.
                    </p>
                  </div>
                  <div class="flex justify-end items-center gap-4 p-4 border-t dark:border-gray-700">
                    <button type="button"
                            class="hs-dropdown-toggle py-2 px-5 inline-flex justify-center items-center gap-2 rounded dark:text-gray-200 border dark:border-slate-700 font-medium hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                            data-hs-overlay="#hs-slide-up-animation-modal">
                      Close
                    </button>
                    <a class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded bg-primary hover:bg-primary-600 text-white"
                       href="javascript:void(0)">Save</a>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" class="btn bg-primary text-white" data-hs-overlay="#hs-slide-down-animation-modal">
              Slide Down
            </button>

            <div id="hs-slide-down-animation-modal"
                 class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
              <div
                  class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div class="flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700">
                  <div class="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                    <h3 class="font-medium text-gray-800 dark:text-white text-lg">
                      Modal Title
                    </h3>
                    <button type="button"
                            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            data-hs-overlay="#hs-slide-down-animation-modal">
                      <span class="material-symbols-rounded">close</span>
                    </button>
                  </div>
                  <div class="px-4 py-8 overflow-y-auto">
                    <p class="text-gray-800 dark:text-gray-200">
                      This is a wider card with supporting text below as a natural lead-in to additional
                      content.
                    </p>
                  </div>
                  <div class="flex justify-end items-center gap-4 p-4 border-t dark:border-gray-700">
                    <button type="button"
                            class="hs-dropdown-toggle py-2 px-5 inline-flex justify-center items-center gap-2 rounded dark:text-gray-200 border dark:border-slate-700 font-medium hover:bg-slate-100 hover:dark:bg-slate-700 transition-all"
                            data-hs-overlay="#hs-slide-down-animation-modal">
                      Close
                    </button>
                    <a class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded bg-primary hover:bg-primary-600 text-white"
                       href="javascript:void(0)">Save</a>
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
