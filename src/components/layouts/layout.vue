<template>
  <div>
    <Vertical>
      <slot />
    </Vertical>
  </div>
</template>

<script lang="ts">
import Vertical from "./vertical.vue";
export default {
  components: { Vertical },
};
</script>
