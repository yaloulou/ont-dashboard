<template>
  <Layout>
    <Breadcrumb title="Select" subtitle="Form"/>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6">


      <!-- Basic -->
      <CustomSyntax title="Basic">
        <template #card-body>
          <select class="selectize">
            <option selected value="orange">Orange</option>
            <option value="White">White</option>
            <option value="Purple">Purple</option>
          </select>
        </template>
      </CustomSyntax>

      <!-- Nested -->
      <CustomSyntax title="Nested">
        <template #card-body>
          <select class="selectize">
            <option disabled>Group 1</option>
            <option selected value="orange">Orange</option>
            <option value="White">White</option>
            <option value="Purple">Purple</option>
            <option disabled>Group 2</option>
            <option>Yellow</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option disabled>Group 3</option>
            <option>Aqua</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
          </select>
        </template>
      </CustomSyntax>

      <!-- Disabling options -->
      <CustomSyntax title="Disabling options">
        <template #card-body>
          <select class="selectize">
            <option selected value="orange">Orange</option>
            <option disabled value="White">White</option>
            <option value="Purple">Purple</option>
          </select>
        </template>
      </CustomSyntax>

      <!-- Placeholder -->
      <CustomSyntax class="lg:row-start-3" title="Placeholder">
        <template #card-body>
          <select class="selectize" placeholder="Choose...">
            <option value="orange">Orange</option>
            <option value="White">White</option>
            <option value="Purple">Purple</option>
          </select>
        </template>
      </CustomSyntax>

      <!-- Searchable -->
      <CustomSyntax title="Searchable">
        <template #card-body>
          <select id="search-select" class="search-select">
            <option value="orange">Orange</option>
            <option value="White">White</option>
            <option value="Purple">Purple</option>
          </select>
        </template>
      </CustomSyntax>

      <!-- Multiple -->
      <CustomSyntax title="Multiple select">
        <template #card-body>
          <select class="selectize" multiple="multiple">
            <option value="orange">Orange</option>
            <option value="White">White</option>
            <option value="Purple">Purple</option>
          </select>
        </template>
      </CustomSyntax>

    </div>

  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";

import NiceSelect from "nice-select2/dist/js/nice-select2";


export default {
  components: {CustomSyntax, Layout, Breadcrumb},
  mounted() {
    console.info(NiceSelect);
    // default
    var els = document.querySelectorAll(".selectize");
    els.forEach(function (select) {
      new NiceSelect(select, {})
    });


    // seachable
    var options = {
      searchable: true
    };
    new NiceSelect(document.getElementById("search-select"), options)

  }
};
</script>
