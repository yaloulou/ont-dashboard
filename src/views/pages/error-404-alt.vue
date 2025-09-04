<template>
  <Layout>
    <Breadcrumb title="404 Atl" subtitle="Extra Pages" />
    <div class="flex h-full justify-center items-center">
      <div class="flex flex-col justify-center text-center gap-6">
        <router-link to="/" class="flex justify-center mx-auto">
          <img
            class="h-6 block dark:hidden"
            src="/src/assets/images/logo-dark.png"
            alt=""
          />
          <img
            class="h-6 hidden dark:block"
            src="/src/assets/images/logo-light.png"
            alt=""
          />
        </router-link>
        <p class="text-3xl font-semibold text-primary">404!</p>
        <h1 class="text-4xl font-bold tracking-tight dark:text-gray-100">
          Page not found.
        </h1>
        <p class="text-base text-gray-600 dark:text-gray-300">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <router-link to="/" class="text-base font-medium text-primary">
          Go back home
        </router-link>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
export default {
  components: { Layout, Breadcrumb },
  mounted() {
    document
      .getElementsByTagName("body")[0]
      .classList.add(
        "bg-gradient-to-r",
        "from-rose-100",
        "to-teal-100",
        "dark:from-gray-700",
        "dark:via-gray-900",
        "dark:to-black"
      );
  },
  unmounted() {
    document
      .getElementsByTagName("body")[0]
      .classList.remove(
        "bg-gradient-to-r",
        "from-rose-100",
        "to-teal-100",
        "dark:from-gray-700",
        "dark:via-gray-900",
        "dark:to-black"
      );
  },
};
</script>
