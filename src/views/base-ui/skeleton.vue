<template>
  <Layout>
    <Breadcrumb title="Skeleton" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Example">
        <template #card-body>
          <h3 class="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-2/5"></h3>
          <ul class="mt-5 space-y-3">
            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          </ul>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Complex combination">
        <template #card-body>
          <h3 class="h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-3" style="width: 40%;"></h3>

          <div class="flex">
            <div class="flex-shrink-0">
              <span class="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>

            <div class="ms-4 mt-2 w-full">
              <h3 class="h-4 bg-gray-200 rounded-md dark:bg-gray-700" style="width: 40%;"></h3>
              <ul class="mt-5 space-y-3">
                <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
              </ul>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Active animation">
        <template #card-body>
          <div class="flex animate-pulse">
            <div class="flex-shrink-0">
              <span class="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>

            <div class="ms-4 mt-2 w-full">
              <h3 class="h-4 bg-gray-200 rounded-md dark:bg-gray-700" style="width: 40%;"></h3>
              <ul class="mt-5 space-y-3">
                <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
              </ul>
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
  