<template>
  <Layout>
    <Breadcrumb title="Changelog" subtitle="Documentation" />

    <div class="card">
      <div class="p-6">
        <h4 class="card-title mb-3">v1.0.0  <code class="text-primary text-sm"> - 3 June, 2023</code></h4>

        <ul class="list-inside">
          <li class="text-sm text-slate-700 dark:text-slate-400 list-disc">Initial released </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

export default {
  components: {Breadcrumb, Layout}

}
</script>
