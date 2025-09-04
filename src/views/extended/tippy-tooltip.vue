<template>
  <Layout>
    <Breadcrumb title="Tippy Tooltip" subtitle="Extended"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Placement Tooltips">
        <template #card-body>
          <p class="sub-header">A highly customizable vanilla JS tooltip & popover library</p>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-3">
            The default tippy tooltip looks like this when given no options. It has a nifty backdrop filling animation!
          </p>
          <div class="flex flex-wrap gap-2">
            <TippyTooltip id="top-tippy">Top</TippyTooltip>
            <TippyTooltip id="bottom-tippy" placement="bottom">Bottom</TippyTooltip>
            <TippyTooltip id="left-tippy" placement="left">Left</TippyTooltip>
            <TippyTooltip id="right-tippy" placement="right">Right</TippyTooltip>
            <TippyTooltip id="top-start-tippy" placement="top-start">Top-Start</TippyTooltip>
            <TippyTooltip id="top-end-tippy" placement="top-end">Top-End</TippyTooltip>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Arrows Tooltips">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-3">
            Arrows point toward the reference element.
          </p>
          <div class="flex flex-wrap gap-2">
            <TippyTooltip id="default-arrow-tippy" :arrow="true" >Default</TippyTooltip>
            <TippyTooltip id="round-arrow-tippy" :round-arrow="true" >Round</TippyTooltip>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Interactivity Tooltips">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-3">
            Tooltips can be interactive, meaning they won't hide when you hover over or click on them.
          </p>
          <div class="flex flex-wrap gap-2">
            <TippyTooltip id="hover-tippy" :interactive="true" >Interactive (hover)</TippyTooltip>
            <TippyTooltip id="click-tippy" :interactive="true" trigger-type="click" >Interactive (click)</TippyTooltip>

          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Duration Tooltips">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-3">
            A tippy can have different transition durations.
          </p>
          <div class="flex flex-wrap gap-2">
            <TippyTooltip id="custom-duration-tippy-1" duration="0">0ms</TippyTooltip>
            <TippyTooltip id="custom-duration-tippy-2" duration="200">200ms</TippyTooltip>
            <TippyTooltip id="custom-duration-tippy-3" duration="1000">1000ms</TippyTooltip>
            <TippyTooltip id="custom-duration-tippy-4" :duration="[500, 200]">[500ms, 200ms]</TippyTooltip>

          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Animations Tooltips">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-3">
            Tooltips can have different types of animations.
          </p>
          <div class="flex flex-wrap gap-2">
            <TippyTooltip id="shift-away-animation-tippy" animation="shift-away">Shift away</TippyTooltip>
            <TippyTooltip id="shift-toward-animation-tippy" animation="shift-toward">Shift toward</TippyTooltip>
            <TippyTooltip id="fade-animation-tippy">Fade</TippyTooltip>
            <TippyTooltip id="scale-animation-tippy" animation="scale">Scale</TippyTooltip>
            <TippyTooltip id="perspective-animation-tippy" animation="perspective">Perspective</TippyTooltip>
            <TippyTooltip id="inertia-shift-away-animation-tippy" animation="shift-away" :inertia="true" :duration="[600, 300]">Inertia (shift-away)</TippyTooltip>
            <TippyTooltip id="inertia-shift-toward-animation-tippy" animation="shift-toward" :inertia="true" :duration="[600, 300]">Inertia (shift-toward)</TippyTooltip>
            <TippyTooltip id="inertia-scale-animation-tippy" animation="scale" :inertia="true" :duration="[600, 300]">Inertia (scale)</TippyTooltip>
            <TippyTooltip id="inertia-perspective-animation-tippy" animation="perspective" :inertia="true" :duration="[600, 300]">Inertia (perspective)</TippyTooltip>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Themes Tooltips">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-3">
            A tippy can have any kind of theme you want! Creating a custom theme is a breeze.
          </p>
          <div class="flex flex-wrap gap-2">
            <TippyTooltip id="translucent-theme-tippy" content="See-through!" theme="translucent">Translucent</TippyTooltip>
            <TippyTooltip id="light-theme-tippy" content="A light Tooltip !" theme="light">Light</TippyTooltip>
            <TippyTooltip id="gradient-theme-tippy" content="Awesome Gradient !" theme="light-border">Light Border</TippyTooltip>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Misc Tooltips">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-3">
            Tippy has a ton of features, and it's constantly improving.
          </p>
          <div class="flex flex-wrap gap-2">
            <TippyTooltip id="follow-cursor-tippy" content="How cool&#39;s this?!" :follow-cursor="true">Follow cursor</TippyTooltip>
            <TippyTooltip id="offset-tippy" content="10px x-axis, 50px y-axis offset" :offset="[10, 50]">Offset</TippyTooltip>
          </div>
        </template>
      </CustomSyntax>

    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";
import TippyTooltip from "@/components/custom/tippy-tooltip.vue";

import tippy from 'tippy.js';

export default {
  components: {TippyTooltip,CustomSyntax, Layout, Breadcrumb,},
  mounted() {
    if (document.querySelectorAll('[data-plugin="tippy"]').length > 0) {

      document.querySelectorAll('[data-plugin="tippy"]').forEach((elm)=>{
        tippy(elm,{content: elm.getAttribute('title')});
      })

    }
  }
};
</script>
