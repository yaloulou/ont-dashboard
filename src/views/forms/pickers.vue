<template>
  <Layout>
    <Breadcrumb title="Picker" subtitle="Form"/>

    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Basic Example">
        <template #card-body>
          <Flatpickr id="datepicker-basic" :options="defaultFlatpickrOptions"/>
        </template>
      </CustomSyntax>

      <CustomSyntax title="DateTime">
        <template #card-body>
          <Flatpickr id="datepicker-datetime" :options="datetimeFlatpickrOptions"/>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Human-friendly Dates">
        <template #card-body>
          <Flatpickr id="datepicker-humanfd" :options="humanfdFlatpickrOptions"/>
        </template>
      </CustomSyntax>


      <CustomSyntax title="MinDate and MaxDate">
        <template #card-body>
          <Flatpickr id="datepicker-minmax" :options="minmaxFlatpickrOptions"/>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Disabling dates">
        <template #card-body>
          <Flatpickr id="datepicker-disable" :options="disableFlatpickrOptions"/>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Selecting multiple dates">
        <template #card-body>
          <Flatpickr id="datepicker-multiple" :options="multipleFlatpickrOptions"/>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Range">
        <template #card-body>
          <Flatpickr id="datepicker-range" :options="rangeFlatpickrOptions"/>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Picker">
        <template #card-body>
          <Flatpickr id="datepicker-timepicker" :options="timepickerFlatpickrOptions"/>
        </template>
      </CustomSyntax>


      <div class="col-span-2">

        <CustomSyntax title="Colorpicker">
          <template #card-body>
            <div>
              <h5 class="text-base mb-3">Themes</h5>
              <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div class="bg-slate-100 p-4 rounded-md flex flex-col">
                  <h5 class="text-base text-gray-400 mb-2 shrink-0">Classic Demo</h5>
                  <p class="text-gray-400 grow">Use <code>classic-colorpicker</code> class to set
                    classic colorpicker.</p>
                  <div class="classic-colorpicker"></div>
                </div>
                <div class="bg-slate-100 p-4 rounded-md flex flex-col">
                  <h5 class="text-base text-gray-400 mb-2 shrink-0">Monolith Demo</h5>
                  <p class="text-gray-400 grow">Use <code>monolith-colorpicker</code> class to set
                    monolith colorpicker.</p>
                  <div class="monolith-colorpicker"></div>
                </div>
                <div class="bg-slate-100 p-4 rounded-md flex flex-col">
                  <h5 class="text-base text-gray-400 mb-2 shrink-0">Nano Demo</h5>
                  <p class="text-gray-400 grow">Use <code>nano-colorpicker</code> class to set nano
                    colorpicker.</p>
                  <div class="nano-colorpicker"></div>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <h5 class="text-base mb-2">Options</h5>

              <div class="grid lg:grid-cols-5 md:grid-cols-3 gap-6">
                <div class="bg-slate-100 p-4 rounded-md flex flex-col">
                  <h5 class="text-base text-gray-400 mb-2 shrink-0">Demo</h5>
                  <p class="text-gray-400 grow">Use <code>colorpicker-demo</code> class to set demo
                    option colorpicker.</p>
                  <div class="colorpicker-demo"></div>
                </div>

                <div class="bg-slate-100 p-4 rounded-md flex flex-col">
                  <h5 class="text-base text-gray-400 mb-2 shrink-0">Picker with Opacity & Hue</h5>
                  <p class="text-gray-400 grow">Use <code>colorpicker-opacity-hue</code> class to set
                    colorpicker with opacity & hue.</p>
                  <div class="colorpicker-opacity-hue"></div>
                </div>

                <div class="bg-slate-100 p-4 rounded-md flex flex-col">
                  <h5 class="text-base text-gray-400 mb-2 shrink-0">Switches</h5>
                  <p class="text-gray-400 grow">Use <code>colorpicker-switch</code> class to set switch
                    colorpicker.</p>
                  <div class="colorpicker-switch"></div>
                </div>

                <div class="bg-slate-100 p-4 rounded-md flex flex-col">
                  <h5 class="text-base text-gray-400 mb-2 shrink-0">Picker with Input</h5>
                  <p class="text-gray-400 grow">Use <code>colorpicker-input</code> class to set
                    colorpicker with input.</p>
                  <div class="colorpicker-input"></div>
                </div>

                <div class="bg-slate-100 p-4 rounded-md flex flex-col">
                  <h5 class="text-base text-gray-400 mb-2 shrink-0">Color Format</h5>
                  <p class="text-gray-400 grow">Use <code>colorpicker-format</code> class to set
                    colorpicker with format option.</p>
                  <div class="colorpicker-format"></div>
                </div>
              </div>
            </div>
          </template>
        </CustomSyntax>

      </div>
    </div>

  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";
import Flatpickr from "@/components/custom/flatpickr.vue";
import Pickr from '@simonwep/pickr';


export default {
  components: {Flatpickr, CustomSyntax, Layout, Breadcrumb},
  data() {
    return {
      defaultFlatpickrOptions: {
        defaultDate: new Date()
      },
      datetimeFlatpickrOptions: {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        defaultDate: new Date()
      },
      humanfdFlatpickrOptions: {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        defaultDate: new Date()
      },
      minmaxFlatpickrOptions: {
        minDate: "today",
        defaultDate: new Date(),
        maxDate: new Date().fp_incr(14) // 14 days from now
      },
      disableFlatpickrOptions: {
        onReady: function () {
          this.jumpToDate("2025-01")
        },
        disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date(2025, 4, 9)],
        dateFormat: "Y-m-d",
        defaultDate: new Date()
      },
      multipleFlatpickrOptions: {
        mode: "multiple",
        dateFormat: "Y-m-d",
        defaultDate: new Date()
      },
      rangeFlatpickrOptions: {
        mode: "range",
        defaultDate: new Date()
      },
      timepickerFlatpickrOptions: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        defaultDate: new Date()
      },
      inlineFlatpickrOptions: {
        inline: true,
        defaultDate: new Date()
      },
      classicColorPickerOptions:{
        el: ".classic-colorpicker",
        theme: "classic", // or 'monolith', or 'nano'
        default: "#405189",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
          "rgba(0, 188, 212, 0.7)",
          "rgba(0, 150, 136, 0.75)",
          "rgba(76, 175, 80, 0.8)",
          "rgba(139, 195, 74, 0.85)",
          "rgba(205, 220, 57, 0.9)",
          "rgba(255, 235, 59, 0.95)",
          "rgba(255, 193, 7, 1)",
        ],

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: true,
          },
        },
      } as Pickr.Options,
      monolithColorPickerOptions:{
        el: ".monolith-colorpicker",
        theme: "monolith",
        default: "#0ab39c",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        defaultRepresentation: "HEXA",
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            hex: false,
            rgba: false,
            hsva: false,
            input: true,
            clear: true,
            save: true,
          },
        },
      } as Pickr.Options,
      nanoColorPickerOptions:{
        el: ".nano-colorpicker",
        theme: "nano",
        default: "#3577f1",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        defaultRepresentation: "HEXA",
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            hex: false,
            rgba: false,
            hsva: false,
            input: true,
            clear: true,
            save: true,
          },
        },
      } as Pickr.Options,
      demoColorPickerOptions:{
        el: ".colorpicker-demo",
        theme: "monolith",
        default: "#405189",
        components: {
          // Main components
          preview: true,
          // Input / output Options
          interaction: {
            clear: true,
            save: true,
          },
        },
      } as Pickr.Options,
      opacityAndHueColorPickerOptions:{
        el: ".colorpicker-opacity-hue",
        theme: "monolith",
        default: "#0ab39c",

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            clear: true,
            save: true,
          },
        },
      } as Pickr.Options,
      switchColorPickerOptions:{
        el: ".colorpicker-switch",
        theme: "monolith",
        default: "#3577f1",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            clear: true,
            save: true,
          },
        },
      } as Pickr.Options,
      inputColorPickerOptions:{
        el: ".colorpicker-input",
        theme: "monolith",
        default: "#f7b84b",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            input: true,
            clear: true,
            save: true,
          },
        },
      } as Pickr.Options,
      formatColorPickerOptions:{
        el: ".colorpicker-format",
        theme: "monolith",
        default: "#f06548",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: true,
          },
        },
      } as Pickr.Options,
    }
  },
  mounted() {
    this.classicColorPicker()
    this.monolithColorPicker()
    this.nanoColorPicker()
    this.demoColorPicker()
    this.opacityAndHueColorPicker()
    this.switchColorPicker()
    this.inputColorPicker()
    this.formatColorPicker()
  },
  methods: {
    classicColorPicker() {
      let classicPickrDemo = document.querySelectorAll<HTMLElement>(".classic-colorpicker");
      let self = this
      if (classicPickrDemo)
        classicPickrDemo.forEach(function () {
          const pickr = Pickr.create(self.classicColorPickerOptions);
        });
    },
    monolithColorPicker(){
      let monolithColorPickr = document.querySelectorAll(".monolith-colorpicker");
      let self = this
      if (monolithColorPickr)
        monolithColorPickr.forEach(function () {
          Pickr.create(self.monolithColorPickerOptions);
        });

    },
    nanoColorPicker(){
      let nanoColorPickr = document.querySelectorAll(".nano-colorpicker");
      let self = this
      if (nanoColorPickr)
        nanoColorPickr.forEach(function () {
          Pickr.create(self.nanoColorPickerOptions);
        });
    },
    demoColorPicker(){
      let demoColorPickr = document.querySelectorAll(".colorpicker-demo");
      let self = this
      if (demoColorPickr)
        demoColorPickr.forEach(function () {
          Pickr.create(self.demoColorPickerOptions);
        });
    },
    opacityAndHueColorPicker(){
      let opacityHueColorPickr = document.querySelectorAll(".colorpicker-opacity-hue");
      let self = this
      if (opacityHueColorPickr)
        opacityHueColorPickr.forEach(function () {
          Pickr.create(self.opacityAndHueColorPickerOptions);
        });

    },
    switchColorPicker(){
      let swatcherColorPickr = document.querySelectorAll(".colorpicker-switch");
      let self = this
      if (swatcherColorPickr)
        swatcherColorPickr.forEach(function () {
          Pickr.create(self.switchColorPickerOptions);
        });
    },
    inputColorPicker(){
      let inputColorPickr = document.querySelectorAll(".colorpicker-input");
      let self = this
      if (inputColorPickr)
        inputColorPickr.forEach(function () {
          Pickr.create(self.inputColorPickerOptions);
        });

    },
    formatColorPicker(){
      let formatColorPickr = document.querySelectorAll(".colorpicker-format");
      let self = this
      if (formatColorPickr)
        formatColorPickr.forEach(function () {
          Pickr.create(self.formatColorPickerOptions);
        });
    }
  }
};
</script>
