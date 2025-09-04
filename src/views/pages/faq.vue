<template>
  <Layout>
    <Breadcrumb title="FAQ" subtitle="Extra Pages" />
    <div class="grid lg:grid-cols-2 gap-4">

      <div class="hs-accordion-group space-y-4">

        <div class="hs-accordion active card" id="hs-basic-heading-one">
          <button aria-controls="hs-basic-collapse-one" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_store_2_line text-lg"></i>
            What is Lorem Ipsum?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-one">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
               {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-two">
          <button aria-controls="hs-basic-collapse-two" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_safe_flash_line text-lg"></i>
            My team has credits. How do we use them?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-two" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-two">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
               {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-three">
          <button aria-controls="hs-basic-collapse-three" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_home_3_line  text-lg"></i>
            How does Admin's pricing work?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-three" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-three">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
               {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-four">
          <button aria-controls="hs-basic-collapse-four" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_safe_flash_line text-lg"></i>
            How secure is FrostUI?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-four" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-four">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
               {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-five">
          <button aria-controls="hs-basic-collapse-five" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_home_3_line  text-lg"></i>
            How do I get access to a theme I purchased?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-five" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-five">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
               {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-six">
          <button aria-controls="hs-basic-collapse-six" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_safe_flash_line text-lg"></i>
            Upgrade License Type
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-six" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-six">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
               {{text}}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div class="hs-accordion-group space-y-4">

        <div class="hs-accordion active card" id="hs-basic-heading-one">
          <button aria-controls="hs-basic-collapse-one" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_store_2_line text-lg"></i>
            What is Lorem Ipsum?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-one">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
                {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-two">
          <button aria-controls="hs-basic-collapse-two" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_safe_flash_line text-lg"></i>
            My team has credits. How do we use them?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-two" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-two">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
                {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-three">
          <button aria-controls="hs-basic-collapse-three" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_home_3_line  text-lg"></i>
            How does Admin's pricing work?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-three" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-three">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
                {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-four">
          <button aria-controls="hs-basic-collapse-four" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_safe_flash_line text-lg"></i>
            How secure is FrostUI?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-four" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-four">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
                {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-five">
          <button aria-controls="hs-basic-collapse-five" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_home_3_line  text-lg"></i>
            How do I get access to a theme I purchased?
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-five" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-five">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
                {{text}}
              </p>
            </div>
          </div>
        </div>

        <div class="hs-accordion card" id="hs-basic-heading-six">
          <button aria-controls="hs-basic-collapse-six" class="hs-accordion-toggle group  hs-accordion-active:text-primary p-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <i class="mgc_safe_flash_line text-lg"></i>
            Upgrade License Type
            <i class="mgc_up_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
          </button>
          <div id="hs-basic-collapse-six" class="hs-accordion-content hidden  w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-six">
            <div class="border-t p-3 border-gray-200 dark:border-gray-700">
              <p class="text-gray-800 dark:text-gray-200">
                {{text}}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

export default {
  components: { Layout, Breadcrumb },
  data(){
    return{
      text:'Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.'
    }
  }
};
</script>
