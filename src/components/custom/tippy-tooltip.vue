<template>
  <span :id="id" class="btn btn-sm bg-primary text-white" :title="title" tabindex="0">
    <slot/>
  </span>
</template>

<script lang="ts">
import tippy, {roundArrow,followCursor} from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/shift-toward.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/animations/perspective.css'

import 'tippy.js/themes/translucent.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/themes/light-border.css'

export default {
  props: {
    id: {
      type: String
    },
    title: {
      type: String,
      default: `I'm a Tippy tooltip!`
    },
    content: {
      type: String,
      default: `I'm a Tippy tooltip!`
    },
    placement: {
      type: String,
      default: 'top'
    },
    arrow: {
      type: Boolean,
      default: false
    },
    roundArrow: {
      type: Boolean,
      default: false
    },
    interactive: {
      type: Boolean,
      default: false
    },
    triggerType: {
      type: String,
      default: 'mouseenter focus'
    },
    duration: {
      type: String || Array,
    },
    animation: {
      type: String,
      default: 'fade'
    },
    inertia: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: ''
    },
    followCursor: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Array,
    },
  },
  mounted() {
    tippy(`#${this.id}`, {
      content: this.content,
      placement: this.placement,
      arrow: this.roundArrow ? roundArrow : this.arrow,
      interactive: this.interactive,
      trigger: this.triggerType,
      duration: this.duration,
      animation: this.animation,
      inertia: this.inertia,
      theme: this.theme,
      followCursor: this.followCursor,
      plugins: [followCursor],
      offset: this.offset,

    });
  }
}
</script>
