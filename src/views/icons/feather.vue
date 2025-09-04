<template>
  <Layout>
    <Breadcrumb title="Feather" subtitle="Icons"/>
    <div class="card">
      <div class="card-header">
        <div class="flex justify-between items-center">
          <h5 class="card-title">
            All Icons
          </h5>

          <a href="https://feathericons.com/" target="_blank" class="btn-code">
            <span class="me-2">Documentation</span>

            <i class="mgc_link_2_line text-sm"></i>
          </a>
        </div>
      </div>
      <div class="p-6">
        <div class="grid lg:grid-cols-5 md:grid-cols-3 gap-6 " id="icons">
          <div v-for="(icon,index) in featherIcons" :key="index" class="flex space-x-4">
            <vue-feather size="24" :type="icon"></vue-feather>
            <span>{{icon}}</span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import VueFeather from "vue-feather";
import {featherIcons} from "./data";

export default {
  components: {Layout, Breadcrumb,VueFeather},
  data() {
    return {
      featherIcons,
    };
  },
};
</script>
<style scoped >
.icons-list-demo i{

}
</style>
