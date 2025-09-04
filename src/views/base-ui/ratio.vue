<template>
  <Layout>
    <Breadcrumb title="Aspect Ratio" subtitle="Components"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Aspect Ratio 21:9">
        <template #card-body>
          <div class="aspect-w-7 aspect-h-3">
            <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Aspect Ratio 16:9">
        <template #card-body>
          <div class="aspect-w-16 aspect-h-9">
            <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Aspect Ratio 1:1">
        <template #card-body>
          <div class="aspect-w-1 aspect-h-1">
            <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Aspect Ratio 4:3">
        <template #card-body>
          <div class="aspect-w-4 aspect-h-3">
            <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
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
