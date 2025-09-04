<template>
  <div class="card">
    <div class="card-header">
      <div class="flex justify-between items-center">
        <h4 class="card-title">{{ title }}</h4>

        <!--        <div class="flex items-center gap-2">-->
        <!--          <button type="button" class="btn-code" data-fc-type="collapse" data-fc-target="#FormInputsHtml"-->
        <!--                  @click="showCode = !showCode">-->
        <!--            <i v-if="showCode" class="mgc_eye_close_line text-lg"></i>-->
        <!--            <i v-else class="mgc_eye_line text-lg"></i>-->
        <!--            <span class="ms-2">Code</span>-->
        <!--          </button>-->

        <!--          <button class="btn-code" data-clipboard-action="copy" @click="doCopy">-->
        <!--            <i class="mgc_copy_line text-lg"></i>-->
        <!--            <span class="ms-2">{{ copied ? 'Copied' : 'Copy' }}</span>-->
        <!--          </button>-->
        <!--        </div>-->
      </div>
    </div>
    <div :class="bodyClass">
      <card-body>
        <slot name="card-body"/>
      </card-body>

      <!--      <div class="w-full overflow-hidden transition-[height] duration-300">-->
      <!--        <Prism language="html" class="language-html h-56" v-show="showCode">-->
      <!--          {{ code }}-->
      <!--        </Prism>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";

import Prism from 'vue-prism-component'
import {copyText} from 'vue3-clipboard'

export default {
  components: {Prism},
  props: {
    title: {type: String},
    bodyClass:{
      type:String,
      default:'p-6'
    },
    code: {type: String},
  },
  data() {
    return {
      showCode: false,
      copied: false
    }
  },
  methods: {
    doCopy() {
      copyText(this.code, undefined, (error, event) => {
        if (error) {
          console.log(error)
        } else {
          this.copied = true
          setTimeout(() => {
            this.copied = false
          }, 2000)
          console.log(event)
        }
      })
    }
  }
};
</script>
