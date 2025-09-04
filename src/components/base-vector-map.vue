<template>
  <div :id="id" :style="{ width: width+'px', height: height+'px' }"></div>
</template>

<script lang="ts">
import "jsvectormap/dist/maps/world.js"
import "jsvectormap/dist/maps/russia.js";
import "jsvectormap/dist/maps/canada.js";
import "jsvectormap/dist/maps/iraq.js";
import "jsvectormap/dist/maps/italy.js";
import "jsvectormap/dist/maps/spain.js";

export default {
  props: {
    id: {type: String},
    width: {type: Number},
    height: {type: Number},
    options: {type: Object}
  },
  mounted() {
    new (window as any)["jsVectorMap"](this.options);
  }
}
</script>
