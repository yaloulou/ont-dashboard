<template>
  <Layout>
    <Breadcrumb title="Project Detail" subtitle="Project"/>
    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-3">
        <div class="card">
          <div class="card-header">
            <h6 class="card-title">Project Overview</h6>
          </div>

          <div class="p-6">
            <div class="grid lg:grid-cols-4 gap-6">

              <!-- stat -->
              <div v-for="(item,index) in projectOverview" :key="index" class="flex items-center gap-5">
                <vue-feather :type="item.icon" class="h-10 w-10"></vue-feather>
                <div class="">
                  <h4 class="text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {{ item.number }}
                  </h4>
                  <span class="text-sm">{{ item.text }}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">About Project</h4>
          </div>

          <div class="p-6">
            <div>
              <p class="text-gray-500 mb-4 text-sm">
                To an English person, it will seem like simplified English, as a
                skeptical Cambridge friend of mine told me what Occidental is.
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
              <p class="text-gray-500 mb-4 text-sm">
                Everyone realizes why a new common language would be desirable:
                one could refuse to pay expensive translators. To achieve this,
                it would be necessary to have uniform grammar, pronunciation and
                more common words. If several languages coalesce, the grammar of
                the resulting language is more simple and regular than that of
                the individual languages.
              </p>
              <ul class="ps-9 mb-9 list-disc">
                <li>Quis autem vel eum iure</li>
                <li>Ut enim ad minima veniam</li>
                <li>Et harum quidem rerum</li>
                <li>Nam libero cum soluta</li>
              </ul>

              <div class="mb-6">
                <h6 class="font-medium my-3 text-gray-800">Tags</h6>
                <div class="uppercase flex gap-4">
                  <a
                      href="#"
                      class="inline-flex items-center font-semibold py-1 px-2 rounded text-xs bg-primary/20 text-primary"
                  >Html</a
                  >
                  <a
                      href="#"
                      class="inline-flex items-center font-semibold py-1 px-2 rounded text-xs bg-primary/20 text-primary"
                  >Css</a
                  >
                  <a
                      href="#"
                      class="inline-flex items-center font-semibold py-1 px-2 rounded text-xs bg-primary/20 text-primary"
                  >Tailwind</a
                  >
                  <a
                      href="#"
                      class="inline-flex items-center font-semibold py-1 px-2 rounded text-xs bg-primary/20 text-primary"
                  >JavaScript</a
                  >
                </div>
              </div>

              <div class="grid grid-cols-4 gap-6">
                <div class="">
                  <div class="">
                    <p class="mb-3 text-sm uppercase font-medium">
                      <i class="uil-calender text-red-500 text-base"></i> Start
                      Date
                    </p>
                    <h5
                        class="text-base text-gray-700 dark:text-gray-300 font-medium"
                    >
                      15 July, 2019
                    </h5>
                  </div>
                </div>
                <div class="">
                  <p class="mb-3 text-sm uppercase font-medium">
                    <i class="uil-calendar-slash text-red-500 text-base"></i>
                    Due Date
                  </p>
                  <h5
                      class="text-base text-gray-700 dark:text-gray-300 font-medium"
                  >
                    21 Nov, 2020
                  </h5>
                </div>
                <div class="">
                  <p class="mb-3 text-sm uppercase font-medium">
                    <i class="uil-dollar-alt text-red-500 text-base"></i> Budget
                  </p>
                  <h5
                      class="text-base text-gray-700 dark:text-gray-300 font-medium"
                  >
                    $13,250
                  </h5>
                </div>

                <div class="">
                  <p class="mb-3 text-sm uppercase font-medium">
                    <i class="uil-user text-red-500 text-base"></i> Owner
                  </p>
                  <h5
                      class="text-base text-gray-700 dark:text-gray-300 font-medium"
                  >
                    Rick Perry
                  </h5>
                </div>
              </div>

              <div class="mt-6">
                <h6 class="text-sm text-gray-800 font-medium mb-3">
                  Assign To
                </h6>
                <div class="flex flex-wrap -space-x-2">
                  <a href="javascript: void(0);">
                    <img
                        class="inline-block h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                        src="/src/assets/images/users/avatar-2.jpg"
                        alt="Image Description"
                    />
                  </a>
                  <a href="javascript: void(0);">
                    <img
                        class="inline-block h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                        src="/src/assets/images/users/avatar-3.jpg"
                        alt="Image Description"
                    />
                  </a>
                  <a href="javascript: void(0);">
                    <img
                        class="inline-block h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                        src="/src/assets/images/users/avatar-9.jpg"
                        alt="Image Description"
                    />
                  </a>
                  <a href="javascript: void(0);">
                    <img
                        class="inline-block h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                        src="/src/assets/images/users/avatar-10.jpg"
                        alt="Image Description"
                    />
                  </a>
                </div>
              </div>

              <div class="mt-6">
                <h6 class="text-gray-800 font-medium mb-3">Attached Files</h6>

                <div class="grid md:grid-cols-4 gap-3">
                  <div
                      class="p-2 border border-gray-200 dark:border-gray-700 rounded mb-2"
                  >
                    <div class="flex items-center">
                      <div
                          class="h-9 w-9 rounded flex justify-center items-center text-primary bg-primary/20 me-3"
                      >
                        <i class="mgc_file_new_line text-xl"></i>
                      </div>
                      <div class="">
                        <a href="#" class="text-sm font-medium"
                        >Landing 1.psd</a
                        >
                      </div>
                      <div>
                        <a href="#" class="p-2"
                        ><i class="mgc_download_line text-xl"></i
                        ></a>
                      </div>
                    </div>
                  </div>

                  <div
                      class="p-2 border border-gray-200 dark:border-gray-700 rounded mb-2"
                  >
                    <div class="flex items-center">
                      <div
                          class="h-9 w-9 rounded flex justify-center items-center text-primary bg-primary/20 me-3"
                      >
                        <i class="mgc_file_new_line text-xl"></i>
                      </div>
                      <div class="">
                        <a href="#" class="text-sm font-medium"
                        >Landing 2.psd</a
                        >
                      </div>
                      <div>
                        <a href="#" class="p-2"
                        ><i class="mgc_download_line text-xl"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1">
       <Activities />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import Activities from "@/views/apps/project/detail/activities.vue";
import {projectOverview} from "./data";

export default {
  components: {Activities, Layout, Breadcrumb},
  data() {
    return {
      projectOverview
    };
  },
};
</script>
