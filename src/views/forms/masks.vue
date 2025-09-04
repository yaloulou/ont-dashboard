<template>
  <Layout>
    <Breadcrumb title="Masks" subtitle="Form"/>

    <CustomSyntax title="Input Masks">
      <template #card-body>
        <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <form action="#">
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">Date</label>
                <input type="text" class="form-input" v-mask="'##/##/####'" placeholder="DD/MM/YYYY">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">Hour</label>
                <input type="text" class="form-input" v-mask="'##:##:##'" placeholder="HH:MM:SS">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">Date & Hour</label>
                <input type="text" class="form-input" v-mask="'##/##/#### ##:##:##'" placeholder="DD/MM/YYYY HH:MM:SS">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">ZIP Code</label>
                <input type="text" class="form-input" v-mask="'#####-###'" placeholder="xxxxx-xxx">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">Crazy Zip Code</label>
                <input type="text" class="form-input" v-mask="'#-##-##-##'" placeholder="x-xx-xx-xx">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">Money</label>
                <input type="text" class="form-input" v-mask="'###.###.###.###.###,##'" placeholder="Your money">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">Money 2</label>
                <input type="text" class="form-input" v-mask="'#.##0,00'" placeholder="#.##0,00">
              </div>

            </form>
          </div>

          <div>
            <form action="#">
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">Telephone</label>
                <input type="text" class="form-input" v-mask="'####-####'" placeholder="xxxx-xxxx">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">Telephone with Code Area</label>
                <input type="text" class="form-input" v-mask="'(##) ####-####'" placeholder="(xx) xxxx-xxxx">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">US Telephone</label>
                <input type="text" class="form-input" v-mask="'(###) ###-####'" placeholder="(xxx) xxx-xxxx">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">São Paulo Celphones</label>
                <input type="text" class="form-input" v-mask="'(##) #####-####'" placeholder="(xx) xxxxx-xxxx">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">CPF</label>
                <input type="text" class="form-input" v-mask="'###.###.###-##'" placeholder="xxx.xxx.xxx-xx">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">CNPJ</label>
                <input type="text" class="form-input" v-mask="'##.###.###/####-##'" placeholder="xx.xxx.xxx/xxxx-xx">
              </div>
              <div class="mb-3">
                <label class="text-gray-800 text-sm font-medium inline-block mb-2">IP Address</label>
                <input type="text" class="form-input" v-mask="'###.###.###.###'" placeholder="xxx.xxx.xxx.xxx">
              </div>
            </form>
          </div>
        </div>
      </template>
    </CustomSyntax>

  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";


export default {
  components: {CustomSyntax, Breadcrumb, Layout},
}
</script>
