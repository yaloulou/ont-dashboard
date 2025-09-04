<template>
  <Layout>
    <Breadcrumb title="File Upload" subtitle="Form"/>

    <CustomSyntax title="Dropzone">
      <template #card-body>
        <form action="#" class="dropzone">
          <div class="fallback">
            <input name="file" type="file" multiple="multiple">
          </div>
          <div class="dz-message needsclick w-full">
            <div class="mb-3">
              <i class="mgc_upload_3_line text-4xl text-gray-300 dark:text-gray-200"></i>
            </div>

            <h5 class="text-xl text-gray-600 dark:text-gray-200">Drop files here or click to upload.</h5>
          </div>
        </form>

        <div class="text-center mt-4">
          <button type="button" class="btn bg-violet-500 border-violet-500 text-white">Send Files</button>
        </div>
      </template>
    </CustomSyntax>

  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";

import Dropzone from 'dropzone'
export default {
  components: {CustomSyntax, Breadcrumb, Layout},
  mounted() {
    new Dropzone(document.querySelector('.dropzone'), {})
  }
}
</script>
