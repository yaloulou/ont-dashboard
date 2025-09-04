<template>
  <Layout>
    <Breadcrumb title="Player" subtitle="Extended"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Youtube Player">
        <template #card-body>
          <div class="rounded-xl overflow-hidden">

            <VuePlyr :options="options">
              <video
                  controls
                  crossorigin
                  playsinline
                  data-poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
              >
                <source
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
                    type="video/mp4"
                />
              </video>
            </VuePlyr>

          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Vimeo Player">
        <template #card-body>
          <div class="rounded-xl overflow-hidden">

            <VuePlyr>
              <div data-plyr-provider="vimeo" data-plyr-embed-id="707012696"></div>
            </VuePlyr>

          </div>
        </template>
      </CustomSyntax>

    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import CustomSyntax from "@/components/custom-syntax.vue";

export default {
  components: {CustomSyntax, Layout, Breadcrumb},
  component: {VuePlyr},
  data() {
    return {
      options: {quality: {default: '1080p'}}
    }
  }
};
</script>
