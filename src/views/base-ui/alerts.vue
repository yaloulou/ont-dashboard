<template>
  <Layout>
    <Breadcrumb title="Alerts" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Basic Alert">
        <template #card-body>
          <div class="space-y-4">
            <div class="bg-primary text-sm text-white rounded-md p-4" role="alert">
              <span class="font-bold">Primary</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-secondary text-sm text-white rounded-md p-4" role="alert">
              <span class="font-bold">Secondary</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-info text-sm text-white rounded-md p-4" role="alert">
              <span class="font-bold">Info</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-success text-sm text-white rounded-md p-4" role="alert">
              <span class="font-bold">Success</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-danger text-sm text-white rounded-md p-4" role="alert">
              <span class="font-bold">Danger</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-warning  text-sm text-white rounded-md p-4" role="alert">
              <span class="font-bold">Warning</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-dark text-sm text-white rounded-md p-4" role="alert">
              <span class="font-bold">Dark</span> alert! You should check in on some of those
              fields below.
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Soft color variants Alert">
        <template #card-body>
          <div class="space-y-4">
            <div class="bg-primary/25 text-primary text-sm rounded-md p-4" role="alert">
              <span class="font-bold">Primary</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-secondary/25 text-secondary text-sm rounded-md p-4" role="alert">
              <span class="font-bold">Secondary</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-info/25 text-info text-sm rounded-md p-4" role="alert">
              <span class="font-bold">Info</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-success/25 text-success text-sm rounded-md p-4" role="alert">
              <span class="font-bold">Success</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-danger/25 text-danger text-sm rounded-md p-4" role="alert">
              <span class="font-bold">Danger</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-warning/25 text-warning  text-sm rounded-md p-4" role="alert">
              <span class="font-bold">Warning</span> alert! You should check in on some of those
              fields below.
            </div>
            <div class="bg-dark/25 text-slate-900 dark:text-slate-200 text-sm rounded-md p-4"
                 role="alert">
              <span class="font-bold">Dark</span> alert! You should check in on some of those
              fields below.
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="With description Alert">
        <template #card-body>
          <div class="space-y-4">
            <div class="bg-yellow-50 border border-yellow-200 rounded-md p-4" role="alert">
              <div class="flex">
                <div class="flex-shrink-0">
                  <i class="mgc_information_line text-xl"></i>
                </div>
                <div class="ms-4">
                  <h3 class="text-sm text-yellow-800 font-semibold">
                    Cannot connect to the database
                  </h3>
                  <div class="mt-1 text-sm text-yellow-700">
                    We are unable to save any progress at this time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Actions">
        <template #card-body>
          <div class="bg-sky-50 border border-sky-200 rounded-md p-4" role="alert">
            <div class="flex">
              <div class="flex-shrink-0">
                <i class="mgc_information_line text-xl"></i>
              </div>
              <div class="ms-4">
                <h3 class="text-gray-800 font-semibold">
                  YouTube would like you to send notifications
                </h3>
                <div class="mt-2 text-sm text-gray-600">
                  Notifications may include alerts, sounds and icon badges. These can be
                  configured in Settings.
                </div>
                <div class="mt-4">
                  <div class="flex space-x-3">
                    <button type="button"
                            class="inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm">
                      Don't allow
                    </button>
                    <button type="button"
                            class="inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-sm">
                      Allow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Link on right">
        <template #card-body>
          <div class="bg-gray-50 border border-gray-200 rounded-md p-4" role="alert">
            <div class="flex">
              <div class="flex-shrink-0">
                <i class="mgc_information_line text-xl"></i>
              </div>
              <div class="flex-1 md:flex md:justify-between ms-4">
                <p class="text-sm text-gray-700">
                  A new software update is available. See what's new in version 3.0.7
                </p>
                <p class="text-sm mt-3 md:mt-0 md:ms-6">
                  <a class="text-gray-700 hover:text-gray-500 font-medium whitespace-nowrap" href="#">Details</a>
                </p>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Dismiss button">
        <template #card-body>
          <div id="dismiss-alert"
               class="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-teal-50 border border-teal-200 rounded-md p-4"
               role="alert">
            <div class="flex">
              <div class="flex-shrink-0">
                <i class="mgc_-badge-check text-xl"></i>
              </div>
              <div class="ml-3">
                <div class="text-sm text-teal-800 font-medium">
                  File has been successfully uploaded.
                </div>
              </div>
              <div class="pl-3 ml-auto">
                <div class="-mx-1.5 -my-1.5">
                  <button type="button"
                          class="inline-flex bg-teal-50 rounded-md p-1.5 text-teal-500 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-50 focus:ring-teal-600"
                          data-hs-remove-element="#dismiss-alert">
                    <i class="mgc_close_line text-xl"></i>
                  </button>
                </div>
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
  