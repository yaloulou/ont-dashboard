<template>
  <Dashboard/>
</template>

<script lang="ts">
import Dashboard from '@/views/dashboard/index.vue'

export default {
  components: {Dashboard},
  mounted() {
    document.getElementsByTagName('html')[0].setAttribute('data-sidenav-view','md')
  },
  unmounted() {
    document.getElementsByTagName('html')[0].setAttribute('data-sidenav-view','default')
  }
}
</script>
