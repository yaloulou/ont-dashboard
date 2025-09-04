<template>
  <Layout>
    <Breadcrumb title="Dismissible" subtitle="Components"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
      <div class="space-y-6">

        <CustomSyntax title="Dismissible">
          <template #card-body>
            <div id="dismiss-example"
                 class="border bg-info/10 text-info border-info/20 rounded px-4 py-3 flex justify-between items-center">
              <p>
                <span class="font-medium">Alert:</span>
                You can dismiss this alert by, simply click on close button
              </p>
              <button class="flex-shrink-0" data-hs-remove-element="#dismiss-example"
                      type="button">
                <i class="mgc_close_line text-xl"></i>
              </button>
            </div>
          </template>
        </CustomSyntax>

      </div>

      <CustomSyntax title="Card Dismissible">
        <template #card-body>
          <div class="card shadow-md max-w-xs relative" id="dismiss-card">
            <div class="absolute end-2 top-2">
              <button data-hs-remove-element="#dismiss-card" type="button" id="dismiss-test"
                      class="ms-auto h-8 w-8 rounded-full bg-gray-500/20 flex justify-center items-center ">
                <i class="mgc_close_line text-xl"></i>
              </button>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                Card subtitle
              </p>
              <p class="mt-2 text-gray-800 dark:text-gray-400">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a class="inline-flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:text-sky-700"
                 href="#">
                Card link
                <i class="msr text-xl">chevron_right</i>
              </a>
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
