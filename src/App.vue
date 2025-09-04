<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useLayoutStore } from "./stores/layout";

export default {
  mounted() {
    useLayoutStore().init()
  },
};
</script>
