<template>
  <div class="flex wrapper">
    <Leftsidebar />
    <div class="page-content">
      <Topbar />
      <main class="flex-grow p-6">
        <slot></slot>
      </main>
      <Footer />
    </div>
    <Rightsidebar />
  </div>
</template>

<script lang="ts">
import Leftsidebar from "./partials/left-sidebar.vue";
import Rightsidebar from "./partials/right-sidebar.vue";
import Topbar from "./partials/topbar.vue";
import Footer from "./partials/footer.vue";
export default {
  components: { Leftsidebar, Rightsidebar, Topbar, Footer },
};
</script>
