<template>
  <Layout>
    <Breadcrumb title="Collapse" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Collapse with Targe">
        <template #card-body>
          <button type="button" class="hs-collapse-toggle btn bg-primary text-white" data-hs-collapse="#hs-basic-collapse-heading">
            Collapse <i class="mgc_down_line hs-collapse-open:rotate-180 ms-2 transition-all text-xl"></i>
          </button>

          <div id="hs-basic-collapse-heading" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300">
            <p class="pt-5 text-gray-800 dark:text-gray-200">
              Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.
            </p>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Read More Collapse">
        <template #card-body>

          <a class="hs-collapse-toggle flex items-center text-primary" href="javascript:;" id="hs-show-hide-collapse" data-hs-collapse="#hs-show-hide-collapse-heading">
            <span class="hs-collapse-open:hidden">Read more</span>
            <span class="hs-collapse-open:block hidden">Read less</span>
            <i class="mgc_down_line hs-collapse-open:rotate-180 ms-2 transition-all text-xl"></i>
          </a>

          <div id="hs-show-hide-collapse-heading" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-show-hide-collapse">
            <p class="pt-5 text-gray-800 dark:text-gray-200">
              Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.
            </p>
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
