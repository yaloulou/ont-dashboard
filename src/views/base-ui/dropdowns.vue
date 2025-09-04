<template>
  <Layout>
    <Breadcrumb title="Dropdowns" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Default">
        <template #card-body>
          <div class="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-default" type="button"
                    class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
              Actions <i class="mgc_down_line text-base ms-1"></i>
            </button>

            <div
                class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
              <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                 href="#">
                Action
              </a>
              <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                 href="#">
                Another action
              </a>
              <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                 href="#">
                Something else here
              </a>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Dropdown Color Variant">
        <template #card-body>
          <div class="flex flex-wrap gap-2">
            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex bg-primary text-white justify-center items-center text-sm gap-2 rounded-md font-medium shadow-sm align-middle transition-all">
                Primary <i class="mgc_down_line text-base"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>


            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex bg-secondary text-white justify-center items-center text-sm gap-2 rounded-md font-medium shadow-sm align-middle transition-all">
                Secondary <i class="mgc_down_line text-base"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>


            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex bg-success text-white justify-center items-center text-sm gap-2 rounded-md font-medium shadow-sm align-middle transition-all">
                Success <i class="mgc_down_line text-base"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>


            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex bg-warning text-white justify-center items-center text-sm gap-2 rounded-md font-medium shadow-sm align-middle transition-all">
                Warning <i class="mgc_down_line text-base"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>


            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex bg-danger text-white justify-center items-center text-sm gap-2 rounded-md font-medium shadow-sm align-middle transition-all">
                Danger <i class="mgc_down_line text-base"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Hover event">
        <template #card-body>
          <div class="hs-dropdown relative inline-flex [--trigger:hover]">
            <button id="hs-dropdown-default" type="button"
                    class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
              Hover Actions <i class="mgc_down_line text-base ms-1"></i>
            </button>

            <div
                class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
              <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                 href="#">
                Action
              </a>
              <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                 href="#">
                Another action
              </a>
              <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                 href="#">
                Something else here
              </a>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Dividers">
        <template #card-body>
          <div class="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-default" type="button"
                    class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
              Actions <i class="mgc_down_line text-base ms-1"></i>
            </button>

            <div
                class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700 divide-y divide-gray-200">
              <div class="py-2 first:pt-0 last:pb-0">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
              <div class="py-2 first:pt-0 last:pb-0">
                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Separated link
                </a>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Nested Dropdown">
        <template #card-body>
          <div class="flex flex-wrap gap-2">
            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                Two Level Dropdown <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
                <div class="w-full">
                  <div class="hs-dropdown relative inline-flex w-full [--placement:right-top] [--trigger:hover]">
                    <button id="hs-dropdown-default" type="button"
                            class="hs-dropdown-toggle flex w-full items-center justify-between py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer">
                      Actions  <span class="ms-2 mgc_right_line text-lg/none"></span>
                    </button>

                    <div
                        class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                      <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                         href="#">
                        Action
                      </a>
                      <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                         href="#">
                        Another action
                      </a>
                      <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                         href="#">
                        Something else here
                      </a>
                      <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                         href="javascript:void(0)">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Alignment options">
        <template #card-body>
          <div class="flex flex-wrap gap-2">
            <div class="hs-dropdown relative inline-flex [--placement:right]">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                Dropdown Right <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>

            <div class="hs-dropdown relative inline-flex [--placement:left]">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                Dropdown Left <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>

            <div class="hs-dropdown relative inline-flex [--placement:top]">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                Dropdown Top <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>

            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                Dropdown Bottom <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>

            <br/>
            <div class="hs-dropdown relative inline-flex [--placement:top-left]">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                Top Start <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>

            <div class="hs-dropdown relative inline-flex [--placement:top-right]">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                Top End <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Another action
                </a>
                <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                   href="#">
                  Something else here
                </a>
              </div>
            </div>

          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Dropdown With Form Components">
        <template #card-body>
          <div class="flex flex-wrap gap-2">
            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                Radio <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <div
                    class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                  <div class="flex">
                    <input type="radio" name="default-radio" class="shrink-0 form-radio rounded" id="default-radio">
                    <label for="default-radio" class="text-sm text-gray-500 ms-2 dark:text-gray-400">Default
                      radio</label>
                  </div>
                </div>
                <div
                    class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                  <div class="flex">
                    <input type="radio" name="default-radio" class="shrink-0 form-radio rounded" id="checked-radio"
                           checked>
                    <label for="checked-radio" class="text-sm text-gray-500 ms-2 dark:text-gray-400">Checked
                      radio</label>
                  </div>
                </div>
              </div>
            </div>


            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                CheckBox <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700">
                <div
                    class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                  <div class="flex">
                    <input type="checkbox" class="shrink-0 form-checkbox rounded" id="default-checkbox">
                    <label for="default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Default
                      checkbox</label>
                  </div>
                </div>
                <div
                    class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                  <div class="flex">
                    <input type="checkbox" class="shrink-0 form-checkbox rounded" id="checked-checkbox" checked>
                    <label for="checked-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Checked
                      checkbox</label>
                  </div>
                </div>
              </div>
            </div>


            <div class="hs-dropdown relative inline-flex">
              <button id="hs-dropdown-default" type="button"
                      class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                Form <i class="mgc_down_line text-base ms-1"></i>
              </button>

              <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 w-auto hidden mt-2 min-w-[15rem] opacity-0 z-50 bg-white border shadow-md rounded-lg p-5 dark:bg-slate-800 dark:border-slate-700">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="text-gray-800 text-sm font-medium inline-block mb-2">Email
                      address</label>
                    <input type="email" class="form-input" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-sm text-slate-700 dark:text-slate-400">We'll
                      never share your email
                      with anyone else.</small>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="text-gray-800 text-sm font-medium inline-block mb-2">Password</label>
                    <input type="password" class="form-input" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <div class="flex items-center gap-2 mb-3">
                    <input type="checkbox" class="form-checkbox rounded border border-gray-200" id="checkmeout0">
                    <label class="text-gray-800 text-sm font-medium inline-block" for="checkmeout0">Check me out
                      !</label>
                  </div>
                  <button type="submit" class="btn bg-primary text-white">Submit</button>
                </form>
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
import CustomSyntax from "@/components/custom-syntax.vue";

export default {
  components: {CustomSyntax, Layout, Breadcrumb},
};
</script>
