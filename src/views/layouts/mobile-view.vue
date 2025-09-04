<template>
  <Dashboard/>
</template>

<script lang="ts">
import Dashboard from '@/views/dashboard/index.vue'

export default {
  components: {Dashboard},
  mounted() {
    document.getElementsByTagName('html')[0].setAttribute('data-sidenav-view','mobile')
  },
  unmounted() {
    document.getElementsByTagName('html')[0].setAttribute('data-sidenav-view','default')
  }
}
</script>
