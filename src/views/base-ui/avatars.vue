<template>
  <Layout>
    <Breadcrumb title="Avatars" subtitle="Components"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Sizing - Images">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <img src="@/assets/images/users/avatar-1.jpg" alt="image" class="h-8 w-8 rounded">
            <img src="@/assets/images/users/avatar-2.jpg" alt="image" class="h-12 w-12 rounded">
            <img src="@/assets/images/users/avatar-3.jpg" alt="image" class="h-16 w-16 rounded">
            <img src="@/assets/images/users/avatar-7.jpg" alt="image" class="h-20 w-20 rounded">
            <img src="@/assets/images/users/avatar-4.jpg" alt="image" class="h-24 w-24 rounded">
            <img src="@/assets/images/users/avatar-5.jpg" alt="image" class="h-28 w-28 rounded">
            <img src="@/assets/images/users/avatar-6.jpg" alt="image" class="h-32 w-32 rounded">
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Rounded Circle">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <img src="@/assets/images/users/avatar-1.jpg" alt="image" class="h-8 w-8 rounded-full">
            <img src="@/assets/images/users/avatar-2.jpg" alt="image" class="h-12 w-12 rounded-full">
            <img src="@/assets/images/users/avatar-3.jpg" alt="image" class="h-16 w-16 rounded-full">
            <img src="@/assets/images/users/avatar-7.jpg" alt="image" class="h-20 w-20 rounded-full">
            <img src="@/assets/images/users/avatar-4.jpg" alt="image" class="h-24 w-24 rounded-full">
            <img src="@/assets/images/users/avatar-5.jpg" alt="image" class="h-28 w-28 rounded-full">
            <img src="@/assets/images/users/avatar-6.jpg" alt="image" class="h-32 w-32 rounded-full">
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Rounded Circle">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <div class="relative h-8 w-8 inline-flex">
              <img src="@/assets/images/users/avatar-1.jpg" alt="image" class="rounded-full">
              <div class="absolute end-0 h-2 w-2 rounded-full border border-white bg-success">
              </div>
            </div>
            <div class="relative h-12 w-12 inline-flex">
              <img src="@/assets/images/users/avatar-2.jpg" alt="image" class="rounded-full">
              <div class="absolute end-0 m-0.5 h-2.5 w-2.5 rounded-full border border-white bg-success">
              </div>
            </div>
            <div class="h-16 w-16 relative inline-flex">
              <img src="@/assets/images/users/avatar-3.jpg" alt="image" class="rounded-full">
              <div class="absolute end-0 m-1 h-2.5 w-2.5 rounded-full border border-white bg-success">
              </div>
            </div>
            <div class="h-20 w-20 relative inline-flex">
              <img src="@/assets/images/users/avatar-4.jpg" alt="image" class="rounded-full">
              <div class="absolute end-0 m-1.5 h-2.5 w-2.5 rounded-full border border-white bg-success">
              </div>
            </div>
            <div class="h-24 w-24 relative inline-flex">
              <img src="@/assets/images/users/avatar-5.jpg" alt="image" class="rounded-full">
              <div class="absolute end-0 m-2 h-3 w-3 border rounded-full border-white bg-success">
              </div>
            </div>
            <div class="h-28 w-28 relative inline-flex">
              <img src="@/assets/images/users/avatar-6.jpg" alt="image" class="rounded-full">
              <div class="absolute end-0 m-1.5 h-4 w-4 rounded-full border-2 border-white bg-success">
              </div>
            </div>
            <div class="relative h-32 w-32 inline-flex">
              <img src="@/assets/images/users/avatar-7.jpg" alt="image" class="rounded-full">
              <div class="absolute end-0 m-2  h-5 w-5 rounded-full border-[3px] border-white bg-success">
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Sizing - Background Color">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <div class="w-8 h-8 justify-center items-center flex bg-primary rounded">
              <span class="text-white">CT</span>
            </div>

            <div class="w-12 h-12 justify-center items-center flex bg-dark rounded">
              <span class="text-white text-lg">CT</span>
            </div>

            <div class="w-16 h-16 justify-center items-center flex bg-success rounded">
              <span class="text-white text-xl">CT</span>
            </div>

            <div class="w-20 h-20 justify-center items-center flex bg-info rounded">
              <span class="text-white text-2xl">CT</span>
            </div>

            <div class="w-24 h-24 justify-center items-center flex bg-danger rounded">
              <span class="text-white text-2xl">CT</span>
            </div>

            <div class="w-28 h-28 justify-center items-center flex bg-info/25 rounded">
              <span class="text-info text-3xl">CT</span>
            </div>

            <div class="w-32 h-32 justify-center items-center flex bg-primary/25 rounded">
              <span class="text-primary text-4xl">CT</span>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Rounded Circle Background">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <div class="w-8 h-8 justify-center items-center flex bg-primary rounded-full">
              <span class="text-white">CT</span>
            </div>

            <div class="w-12 h-12 justify-center items-center flex bg-dark rounded-full">
              <span class="text-white text-lg">CT</span>
            </div>

            <div class="w-16 h-16 justify-center items-center flex bg-success rounded-full">
              <span class="text-white text-xl">CT</span>
            </div>

            <div class="w-20 h-20 justify-center items-center flex bg-info rounded-full">
              <span class="text-white text-2xl">CT</span>
            </div>

            <div class="w-24 h-24 justify-center items-center flex bg-danger rounded-full">
              <span class="text-white text-2xl">CT</span>
            </div>

            <div class="w-28 h-28 justify-center items-center flex bg-info/25 rounded-full">
              <span class="text-info text-3xl">CT</span>
            </div>

            <div class="w-32 h-32 justify-center items-center flex bg-primary/25 rounded-full">
              <span class="text-primary text-4xl">CT</span>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Rounded Circle Background Top Status">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <div class="relative inline-flex">
              <div class="w-8 h-8 justify-center items-center flex bg-primary rounded-full">
                <span class="text-white">CT</span>
              </div>
              <div class="absolute end-0 h-2 w-2 rounded-full border border-white bg-success">
              </div>
            </div>

            <div class="relative inline-flex">
              <div class="w-12 h-12 justify-center items-center flex bg-dark rounded-full">
                <span class="text-white text-lg">CT</span>
              </div>
              <div class="absolute end-0 m-0.5 h-2.5 w-2.5 rounded-full border border-white bg-success">
              </div>
            </div>

            <div class="relative inline-flex">
              <div class="w-16 h-16 justify-center items-center flex bg-success/25 rounded-full">
                <span class="text-success text-xl">CT</span>
              </div>
              <div class="absolute end-0 m-1 h-3 w-3 rounded-full border border-white bg-gray-400">
              </div>
            </div>

            <div class="relative inline-flex">
              <div class="w-20 h-20 justify-center items-center flex bg-info rounded-full">
                <span class="text-white text-2xl">CT</span>
              </div>
              <div class="absolute end-0 m-1.5 h-3 w-3 rounded-full border border-white bg-danger">
              </div>
            </div>

            <div class="relative inline-flex">
              <div class="w-24 h-24 justify-center items-center flex bg-danger rounded-full">
                <span class="text-white text-2xl">CT</span>
              </div>
              <div class="absolute end-0 m-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-primary">
              </div>
            </div>

            <div class="relative inline-flex">
              <div class="w-28 h-28 justify-center items-center flex bg-info/25 rounded-full">
                <span class="text-info text-3xl">CT</span>
              </div>
              <div class="absolute end-0 m-2.5 h-4 w-4 rounded-full border-2 border-white bg-primary">
              </div>
            </div>

            <div class="relative inline-flex">
              <div class="w-32 h-32 justify-center items-center flex bg-primary/25 rounded-full">
                <span class="text-primary text-4xl">CT</span>
              </div>
              <div class="absolute end-0 m-2.5 h-5 w-5 rounded-full border-4 border-white bg-success">
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Circular avatars with bottom status">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <div class="relative inline-block">
              <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <span class="absolute bottom-0 end-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
            </div>
            <div class="relative inline-block">
              <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <span class="absolute bottom-0 end-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-400"></span>
            </div>
            <div class="relative inline-block">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <span class="absolute bottom-0 end-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
            </div>
            <div class="relative inline-block">
              <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
              <span
                  class="absolute bottom-0 end-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-orange-400"></span>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Rounded avatars with bottom status">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <div class="relative inline-block">
              <img class="inline-block h-8 w-8 rounded-md ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <span
                  class="absolute bottom-0 end-0 block h-1.5 w-1.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-gray-400"></span>
            </div>
            <div class="relative inline-block">
              <img class="inline-block h-9 w-9 rounded-md ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <span
                  class="absolute bottom-0 end-0 block h-2.5 w-2.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-red-400"></span>
            </div>
            <div class="relative inline-block">
              <img class="inline-block h-12 w-12 rounded-md ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <span
                  class="absolute bottom-0 end-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
            </div>
            <div class="relative inline-block">
              <img class="inline-block h-16 w-16 rounded-md ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
              <span
                  class="absolute bottom-0 end-0 block h-3.5 w-3.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-orange-400"></span>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Media">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <div class="flex-shrink-0 group block">
              <div class="flex items-center">
                <img class="inline-block flex-shrink-0 h-16 w-16 rounded-full"
                     src="@/assets/images/users/avatar-5.jpg" alt="Image Description">
                <div class="ms-3">
                  <h3 class="font-semibold text-gray-800 dark:text-white">Scote Wanner</h3>
                  <p class="text-sm font-medium text-gray-400">scote@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Image - Background Color">
        <template #card-body>
          <div class="flex gap-3">
            <div class="flex -space-x-2">
              <img class="inline-block h-12 w-12 rounded-full border-2 border-white dark:border-gray-800"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <div
                  class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-warning text-white border-2 border-white dark:border-gray-800">
                <span class="font-medium leading-none">CT</span>
              </div>
              <img class="inline-block h-12 w-12 rounded-full border-2 border-white dark:border-gray-800"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full border-2 border-white dark:border-gray-800"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <div
                  class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-info text-white border-2 border-white dark:border-gray-800">
                <span class="font-medium leading-none">CT</span>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Stack">
        <template #card-body>
          <div class="flex-col space-y-2">
            <div class="flex">
              <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
            </div>
            <div class="flex">
              <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
            </div>
            <div class="flex">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
            </div>
            <div class="flex">
              <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Border color">
        <template #card-body>
          <div class="flex flex-col gap-3">
            <div class="flex gap-2">
              <img class="inline-block h-8 w-8 rounded-full border-2 border-primary"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <img class="inline-block h-8 w-8 rounded-full border-2 border-primary"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-8 w-8 rounded-full border-2 border-primary"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <img class="inline-block h-8 w-8 rounded-full border-2 border-primary"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
            </div>
            <div class="flex gap-2">
              <img class="inline-block h-9 w-9 rounded-full border-2 border-red-300"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <img class="inline-block h-9 w-9 rounded-full border-2 border-red-300"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-9 w-9 rounded-full border-2 border-red-300"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <img class="inline-block h-9 w-9 rounded-full border-2 border-red-300"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
            </div>
            <div class="flex gap-2">
              <img class="inline-block h-12 w-12 rounded-full border-2 border-teal-500"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full border-2 border-teal-500"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full border-2 border-teal-500"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full border-2 border-teal-500"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
            </div>
            <div class="flex gap-2">
              <img class="inline-block h-16 w-16 rounded-full border-2 border-purple-400"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <img class="inline-block h-16 w-16 rounded-full border-2 border-purple-400"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-16 w-16 rounded-full border-2 border-purple-400"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <img class="inline-block h-16 w-16 rounded-full border-2 border-purple-400"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Grid">
        <template #card-body>
          <div class="flex flex-wrap items-end gap-3">
            <div class="grid grid-cols-3 gap-4">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-1.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-2.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-3.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-4.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-5.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-6.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-7.jpg" alt="Image Description">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800"
                   src="@/assets/images/users/avatar-8.jpg" alt="Image Description">
              <div
                  class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-slate-300 focus:outline-none focus:bg-primary/25 focus:text-primary focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-primary/25 dark:focus:text-primary dark:focus:ring-offset-gray-800">
                <span class="font-medium leading-none">9+</span>
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
  