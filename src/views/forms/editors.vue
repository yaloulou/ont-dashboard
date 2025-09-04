<template>
  <Layout>
    <Breadcrumb title="Editors" subtitle="Form"/>

    <div class="flex flex-col gap-6">

      <CustomSyntax title="Snow Editor">
        <template #card-body>
          <QuillEditor
              theme="snow"
              :toolbar="toolbar1"
              style="height: 300px"
              :content="taskDetail"
              content-type="html"
          />
        </template>
      </CustomSyntax>

      <CustomSyntax title="Bubble Editor">
        <template #card-body>
          <QuillEditor
              theme="bubble"
              style="height: 300px"
              :toolbar="toolbar2"
              :content="taskDetail"
              content-type="html"
          />
        </template>
      </CustomSyntax>

    </div>

  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";
import {QuillEditor} from "@vueup/vue-quill";

export default {
  components: {QuillEditor,CustomSyntax, Breadcrumb, Layout},
  data() {
    return {
      taskDetail: `<h3><span class="ql-size-large">Hello World!</span></h3>
      <h3>This is a simple editable area.</h3>
      - Select a text to reveal the toolbar.
      - Edit rich document on-the-fly, so elastic!
      <span ><b>End of simple area</b></span>`,
      toolbar1: [
        [{font: []}, {size: []}],
        ["bold", "italic", "underline", "strike"],
        [{color: []}, {background: []}],
        [{script: "super"}, {script: "sub"}],
        [{header: [false, 1, 2, 3, 4, 5, 6]}, "blockquote", "code-block"],
        [
          {list: "ordered"},
          {list: "bullet"},
          {indent: "-1"},
          {indent: "+1"},
        ],
        ["direction", {align: []}],
        ["link", "image", "video"],
        ["clean"],
      ],

      toolbar2: [
        ["bold", "italic", "link"],
        [{header: "1"}, {header: "2"}, "blockquote"],
      ],

      content: '',
      configs: {
        spellChecker: false,
        autosave: {
          enabled: true,
          unique_id: 'simplemde1',
        },
      }
    }
  }
}
</script>
