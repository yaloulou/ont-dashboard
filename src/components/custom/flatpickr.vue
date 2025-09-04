<template>
  <input :id="id" type="text" class="form-input">
</template>

<script lang="ts">
import "flatpickr";

export default {
  props: {
    id: {
      type: String,
      require: true
    },
    options: {
      type: Object,
      require: true
    }
  },
  mounted() {
    $(`#${this.id}`).flatpickr(this.options);
  }
}
</script>
