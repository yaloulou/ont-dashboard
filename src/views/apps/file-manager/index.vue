<template>
  <Layout>
    <Breadcrumb title="File Manager" subtitle="Apps"/>
    <div class="flex">
      <div
          id="default-offcanvas"
          class="lg:block hidden top-0 left-0 transform h-full min-w-[16rem] me-6 card rounded-none lg:rounded-md fc-offcanvas-open:translate-x-0 lg:z-0 z-50 fixed lg:static lg:translate-x-0 -translate-x-full transition-all duration-300"
          tabindex="-1"
      >
          <div class="p-5">

            <div class="hs-dropdown relative inline-flex m-auto w-full">
              <a href="javascript:void(0)"  type="button" class="hs-dropdown-toggle btn inline-flex justify-center items-center bg-primary text-white w-full">
                <i class="mgc_add_line text-lg me-2"></i> Create New
              </a>

              <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-50  duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <vue-feather type="folder" class="me-2 w-4"></vue-feather>
                  <span>Folder</span>
                </a>
                <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <vue-feather type="file" class="me-2 w-4"></vue-feather>
                  <span>File</span>
                </a>
                <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <vue-feather type="file-text" class="me-2 w-4"></vue-feather>
                  <span>Document</span>
                </a>
                <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <vue-feather type="upload" class="me-2 w-4"></vue-feather>
                  <span>Choose File</span>
                </a>
              </div>
            </div>


          <div class="space-y-2 mt-4">
            <a v-for="(tab,index) in tabs" :key="index"
               href="#"
                class="flex items-center py-2 px-4 text-sm rounded text-gray-500 hover:text-slate-700 dark:text-gray-400 dark:bg-gray-700 dark:hover:text-gray-300"
               :class="index == 0 ? 'bg-slate-100' : ''"
            >
              <Vue-feather :type="tab.icon" class="me-3.5 w-4"></Vue-feather>
              <span>{{ tab.text }}</span>
            </a>
          </div>

          <div class="mt-6">
            <span
                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 open:opacity-0"
            >Free</span
            >
            <h6 class="text-uppercase mt-3">Storage</h6>
            <div
                class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 mt-4"
            >
              <div
                  class="flex flex-col justify-center overflow-hidden bg-primary"
                  role="progressbar"
                  style="width: 46%"
                  aria-valuenow="46"
                  aria-valuemin="0"
                  aria-valuemax="100"
              ></div>
            </div>
            <p class="text-gray-500 mt-4 text-xs">
              7.02 GB (46%) of 15 GB used
            </p>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          <div class="2xl:col-span-4 sm:col-span-2">
            <div class="flex items-center justify-between gap-4">
              <div class="lg:hidden block">
                <button
                    data-fc-target="default-offcanvas"
                    data-fc-type="offcanvas"
                    class="inline-flex items-center justify-center text-gray-700 border border-gray-300 rounded shadow hover:bg-slate-100 dark:text-gray-400 hover:dark:bg-gray-800 dark:border-gray-700 transition h-9 w-9 duration-100"
                >
                  <div class="mgc_menu_line text-lg"></div>
                </button>
              </div>
              <h4 class="text-xl">Folders</h4>

              <form class="ms-auto">
                <div class="flex items-center">
                  <input
                      type="text"
                      class="form-input rounded-full"
                      placeholder="Search files..."
                  />
                  <span class="mgc_search_line text-xl -ms-8"></span>
                </div>
              </form>
            </div>
          </div>

          <div class="card" v-for="(item, index) in filesData" :key="index">
            <div class="p-5">
              <div class="space-y-4 text-gray-600 dark:text-gray-300">
                <div class="flex items-start relative gap-5">
                  <div class="flex items-center gap-3">
                    <div class="h-14 w-14">
                      <span
                          class="flex h-full w-full items-center justify-center"
                      >
                        <vue-feather type="folder" fill="warning" class="h-full w-full fill-warning text-warning" ></vue-feather>
                      </span>
                    </div>
                    <div class="space-y-1">
                      <p class="font-semibold text-base">{{ item.title }}</p>
                      <p class="text-xs">{{ item.text }}</p>
                    </div>
                  </div>
                  <div class="flex items-center absolute top-0 end-0">

                    <div class="hs-dropdown relative inline-flex">
                      <button
                          class="hs-dropdown-toggle inline-flex text-slate-700 hover:bg-slate-100 dark:hover:bg-gray-700 dark:text-gray-300 rounded-full p-2">
                        <vue-feather type="more-vertical" class="w-4 h-4"></vue-feather>
                      </button>

                      <div
                          class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-40 z-50 mt-2 duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                        <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                           href="#">
                          <vue-feather type="edit-3" class="w-4 h-4 me-3"></vue-feather>
                          Edit
                        </a>
                        <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                           href="#">
                          <vue-feather type="link" class="w-4 h-4 me-3"></vue-feather>
                          Copy Link
                        </a>
                        <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                           href="#">
                          <vue-feather type="share-2" class="w-4 h-4 me-3"></vue-feather>
                          Share
                        </a>
                        <a class="flex items-center py-2 px-4 text-sm rounded text-gray-500  hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                           href="#">
                          <vue-feather type="download" class="w-4 h-4 me-3"></vue-feather>
                          Download
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
                <div class="flex items-center gap-2">
                  <p class="text-sm">{{ item.space }} GB</p>
                  <span class="p-0.5 bg-gray-600 rounded-full"></span>
                  <p class="text-sm">{{ item.subtxt }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="2xl:col-span-4 sm:col-span-2">
          <RecentFiles />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

import {tabs, filesData} from "./data";
import RecentFiles from "@/views/apps/file-manager/recent-files.vue";

export default {
  components: {RecentFiles, Layout, Breadcrumb},
  data() {
    return {
      tabs,
      filesData,
    };
  },
};
</script>
