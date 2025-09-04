<template>
  <Layout>
    <Breadcrumb title="Accordion" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Default Accordion">
        <template #card-body>
          <div class="hs-accordion-group">
            <div class="hs-accordion active" id="hs-basic-heading-one">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-collapse-one">
                Accordion #1
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-collapse-one"
                   class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-heading-one">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                  framework functions by scanning all of your HTML files, JavaScript components, and templates for class
                  names, automatically generating corresponding styles, and writing them to a static CSS file. This
                  approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                  layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                  responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and
                  product views, making it the ideal choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-heading-two">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-collapse-two">
                Accordion #2
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-collapse-two"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-heading-two">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                  framework functions by scanning all of your HTML files, JavaScript components, and templates for class
                  names, automatically generating corresponding styles, and writing them to a static CSS file. This
                  approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                  layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                  responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and
                  product views, making it the ideal choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-heading-three">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-collapse-three">
                Accordion #3
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-collapse-three"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-heading-three">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                  framework functions by scanning all of your HTML files, JavaScript components, and templates for class
                  names, automatically generating corresponding styles, and writing them to a static CSS file. This
                  approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                  layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                  responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and
                  product views, making it the ideal choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Always Open">
        <template #card-body>
          <div class="hs-accordion-group" data-hs-accordion-always-open>
            <div class="hs-accordion active" id="hs-basic-always-open-heading-one">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-always-open-collapse-one">
                Accordion #1
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-always-open-collapse-one"
                   class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-always-open-heading-one">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                  framework functions by scanning all of your HTML files, JavaScript components, and templates for class
                  names, automatically generating corresponding styles, and writing them to a static CSS file. This
                  approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                  layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                  responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and
                  product views, making it the ideal choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-always-open-heading-two">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-always-open-collapse-two">
                Accordion #2
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-always-open-collapse-two"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-always-open-heading-two">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                  framework functions by scanning all of your HTML files, JavaScript components, and templates for class
                  names, automatically generating corresponding styles, and writing them to a static CSS file. This
                  approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                  layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                  responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and
                  product views, making it the ideal choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-always-open-heading-three">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-always-open-collapse-three">
                Accordion #3
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-always-open-collapse-three"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-always-open-heading-three">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                  framework functions by scanning all of your HTML files, JavaScript components, and templates for class
                  names, automatically generating corresponding styles, and writing them to a static CSS file. This
                  approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                  layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                  responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and
                  product views, making it the ideal choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Bordered">
        <template #card-body>
          <div class="hs-accordion-group">
            <div
                class="hs-accordion active bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
                id="hs-bordered-heading-one">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-bordered-collapse-one">
                Accordion #1
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-bordered-collapse-one"
                   class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-bordered-heading-one">
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-gray-200">
                    Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                    framework functions by scanning all of your HTML files, JavaScript components, and templates for
                    class
                    names, automatically generating corresponding styles, and writing them to a static CSS file. This
                    approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                    layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                    responsive web applications. Additionally, the framework includes checkout forms, shopping carts,
                    and
                    product views, making it the ideal choice for developing your next e-commerce front-end.
                  </p>
                </div>
              </div>
            </div>

            <div
                class="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
                id="hs-bordered-heading-two">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-bordered-collapse-two">
                Accordion #2
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-bordered-collapse-two"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-bordered-heading-two">
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-gray-200">
                    Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                    framework functions by scanning all of your HTML files, JavaScript components, and templates for
                    class
                    names, automatically generating corresponding styles, and writing them to a static CSS file. This
                    approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                    layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                    responsive web applications. Additionally, the framework includes checkout forms, shopping carts,
                    and
                    product views, making it the ideal choice for developing your next e-commerce front-end.
                  </p>
                </div>
              </div>
            </div>

            <div
                class="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
                id="hs-bordered-heading-three">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-bordered-collapse-three">
                Accordion #3
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-bordered-collapse-three"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby=" hs-bordered-heading-three">
                <div class="pb-4 px-5">
                  <p class="text-gray-800 dark:text-gray-200">
                    Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                    framework functions by scanning all of your HTML files, JavaScript components, and templates for
                    class
                    names, automatically generating corresponding styles, and writing them to a static CSS file. This
                    approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                    layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                    responsive web applications. Additionally, the framework includes checkout forms, shopping carts,
                    and
                    product views, making it the ideal choice for developing your next e-commerce front-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="With Icon">
        <template #card-body>
          <div class="hs-accordion-group">
            <div class="hs-accordion active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                <i class="mgc_store_2_line text-lg"></i>
                Accordion #1
                <i class="mgc_down_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                   class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                <i class="mgc_safe_flash_line text-lg"></i>
                Accordion #2
                <i class="mgc_down_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                <i class="mgc_home_3_line text-lg"></i>
                Accordion #3
                <i class="mgc_down_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="With arrow">
        <template #card-body>
          <div class="hs-accordion-group">
            <div class="hs-accordion active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                Accordion #1
                <i class="mgc_down_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                   class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                Accordion #2
                <i class="mgc_down_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                Accordion #3
                <i class="mgc_down_line hs-accordion-active:rotate-180 ms-auto transition-all text-xl"></i>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="No arrow">
        <template #card-body>
          <div class="hs-accordion-group">
            <div class="hs-accordion active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                Accordion #1
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                   class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                Accordion #2
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                Accordion #3
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Nested">
        <template #card-body>
          <div class="hs-accordion-group">
            <div class="hs-accordion active" id="hs-basic-nested-heading-one">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-nested-collapse-one">
                Accordion #1
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-nested-collapse-one"
                   class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-nested-heading-one">
                <div class="hs-accordion-group pl-6">
                  <div class="hs-accordion active" id="hs-basic-nested-sub-heading-one">
                    <button
                        class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-nested-sub-collapse-one">
                      Sub accordion #1
                      <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                      <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                    </button>
                    <div id="hs-basic-nested-sub-collapse-one"
                         class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                         aria-labelledby="hs-basic-nested-sub-heading-one">
                      <p class="text-gray-800 dark:text-gray-200">
                        Tailwind CSS offers a seamless way to build modern websites
                        without having to leave your HTML. The framework functions
                        by scanning all of your HTML files, JavaScript components,
                        and templates for class names, automatically generating
                        corresponding styles, and writing them to a static CSS file.
                        This approach is fast, flexible, and reliable, requiring
                        zero runtime. Whether you need to create form layouts,
                        tables, or modal dialogs, Tailwind CSS provides everything
                        necessary to design beautiful, responsive web applications.
                        Additionally, the framework includes checkout forms,
                        shopping carts, and product views, making it the ideal
                        choice for developing your next e-commerce front-end.
                      </p>
                    </div>
                  </div>

                  <div class="hs-accordion" id="hs-basic-nested-sub-heading-two">
                    <button
                        class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-nested-sub-collapse-two">
                      Sub accordion #2
                      <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                      <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                    </button>
                    <div id="hs-basic-nested-sub-collapse-two"
                         class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                         aria-labelledby="hs-basic-nested-sub-heading-two">
                      <p class="text-gray-800 dark:text-gray-200">
                        Tailwind CSS offers a seamless way to build modern websites
                        without having to leave your HTML. The framework functions
                        by scanning all of your HTML files, JavaScript components,
                        and templates for class names, automatically generating
                        corresponding styles, and writing them to a static CSS file.
                        This approach is fast, flexible, and reliable, requiring
                        zero runtime. Whether you need to create form layouts,
                        tables, or modal dialogs, Tailwind CSS provides everything
                        necessary to design beautiful, responsive web applications.
                        Additionally, the framework includes checkout forms,
                        shopping carts, and product views, making it the ideal
                        choice for developing your next e-commerce front-end.
                      </p>
                    </div>
                  </div>

                  <div class="hs-accordion" id="hs-basic-nested-sub-heading-three">
                    <button
                        class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-nested-sub-collapse-three">
                      Sub accordion #3
                      <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                      <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                    </button>
                    <div id="hs-basic-nested-sub-collapse-three"
                         class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                         aria-labelledby="hs-basic-nested-sub-heading-three">
                      <p class="text-gray-800 dark:text-gray-200">
                        Tailwind CSS offers a seamless way to build modern websites
                        without having to leave your HTML. The framework functions
                        by scanning all of your HTML files, JavaScript components,
                        and templates for class names, automatically generating
                        corresponding styles, and writing them to a static CSS file.
                        This approach is fast, flexible, and reliable, requiring
                        zero runtime. Whether you need to create form layouts,
                        tables, or modal dialogs, Tailwind CSS provides everything
                        necessary to design beautiful, responsive web applications.
                        Additionally, the framework includes checkout forms,
                        shopping carts, and product views, making it the ideal
                        choice for developing your next e-commerce front-end.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-nested-heading-two">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-nested-collapse-two">
                Accordion #2
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-nested-collapse-two"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-nested-heading-two">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites
                  without having to leave your HTML. The framework functions
                  by scanning all of your HTML files, JavaScript components,
                  and templates for class names, automatically generating
                  corresponding styles, and writing them to a static CSS file.
                  This approach is fast, flexible, and reliable, requiring
                  zero runtime. Whether you need to create form layouts,
                  tables, or modal dialogs, Tailwind CSS provides everything
                  necessary to design beautiful, responsive web applications.
                  Additionally, the framework includes checkout forms,
                  shopping carts, and product views, making it the ideal
                  choice for developing your next e-commerce front-end.
                </p>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-nested-heading-three">
              <button
                  class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                  aria-controls="hs-basic-nested-collapse-three">
                Accordion #3
                <i class="mgc_add_line hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
                <i class="mgc_minimize_line hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"></i>
              </button>
              <div id="hs-basic-nested-collapse-three"
                   class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                   aria-labelledby="hs-basic-nested-heading-three">
                <p class="text-gray-800 dark:text-gray-200">
                  Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The
                  framework functions by scanning all of your HTML files, JavaScript components, and templates for class
                  names, automatically generating corresponding styles, and writing them to a static CSS file. This
                  approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form
                  layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful,
                  responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and
                  product views, making it the ideal choice for developing your next e-commerce front-end.
                </p>
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
import Prism from "@/components/custom-syntax.vue";
import CustomSyntax from "@/components/custom-syntax.vue";

export default {
  components: {CustomSyntax, Layout, Breadcrumb, Prism,},
  data() {
    return {}
  }
};
</script>
