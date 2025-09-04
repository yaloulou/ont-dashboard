<template>
  <Layout>
    <Breadcrumb title="Range" subtitle="Form"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
      <div class="space-y-6">

        <CustomSyntax title="Basic Example">
          <template #card-body>
            <div id="slider"></div>
          </template>
        </CustomSyntax>


        <CustomSyntax title="Using HTML5 input elements">
          <template #card-body>
            <div id="html5"></div>
            <div class="flex mt-3 gap-2">
              <select id="input-select" class="form-select w-auto"></select>
              <input type="number" class="form-input w-auto" min="-20" max="40" step="1" id="input-number">
            </div>
          </template>
        </CustomSyntax>

        <CustomSyntax title="Locking sliders together">
          <template #card-body>
            <div class="">
              <div class="slider" id="slider1"></div>
              <span class="example-val text-gray-600 dark:text-zinc-100 mt-2"
                    id="slider1-span"></span>

              <div class="slider" id="slider2"></div>
              <span class="example-val text-gray-600 dark:text-zinc-100 mt-2"
                    id="slider2-span"></span>

              <button id="lockbutton" class="btn bg-primary text-white">Lock</button>
            </div>
          </template>
        </CustomSyntax>

        <CustomSyntax title="Only showing tooltips when sliding handle">
          <template #card-body>
            <div class="slider" id="slider-hide"></div>
          </template>
        </CustomSyntax>

        <CustomSyntax title="Colored Connect Elements">
          <template #card-body>
            <div class="slider" id="slider-color"></div>
          </template>
        </CustomSyntax>

      </div>

      <div class="space-y-6">

        <CustomSyntax title="Colorpicker">
          <template #card-body>
            <div class="sliders" id="red"></div>
            <div class="sliders" id="green"></div>
            <div class="sliders" id="blue"></div>

            <div id="result"></div>
          </template>
        </CustomSyntax>

        <CustomSyntax title="Non linear slider">
          <template #card-body>
            <div id="nonlinear"></div>
            <span class="example-val text-gray-600 dark:text-zinc-100" id="lower-value"></span>
            <span class="example-val text-gray-600 dark:text-zinc-100" id="upper-value"></span>
          </template>
        </CustomSyntax>

        <CustomSyntax title="Creating a toggle">
          <template #card-body>
            <div id="slider-toggle"></div>
          </template>
        </CustomSyntax>

        <CustomSyntax title="Soft limits">
          <template #card-body>
            <div class="mb-8" id="soft"></div>
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

import noUiSlider, {Options} from 'nouislider'
import wNumb from 'wnumb'

export default {
  components: {CustomSyntax, Layout, Breadcrumb},
  mounted() {

    this.basic()
    this.colorPicker()
    this.usingInputElements()
    this.nonLinearSlider()
    this.lockingSliders()
    this.hidingTooltipSlider()
    this.coloredConnected()
    this.toggleSlider()
    this.softLimits()
  },
  methods: {
    basic() {
      let slider = document.getElementById<HTMLElement>('slider');
      if (slider) {
        noUiSlider.create(slider, {
          start: [20, 80],
          connect: true,
          range: {
            'min': 0,
            'max': 100
          }
        });
      }
    },
    colorPicker() {
      let resultElement = document.getElementById<HTMLElement>('result');
      let sliders = document.getElementsByClassName<HTMLElement>('sliders');
      let colors = [0, 0, 0];

      [].slice.call(sliders).forEach(function (slider, index) {

        noUiSlider.create(slider, {
          start: 127,
          connect: [true, false],
          orientation: "vertical",
          range: {
            'min': 0,
            'max': 255
          },
          format: wNumb({
            decimals: 0
          })
        });

        // Bind the color changing function to the update event.
        slider.noUiSlider.on('update', function () {

          colors[index] = slider.noUiSlider.get();

          let color = 'rgb(' + colors.join(',') + ')';

          resultElement!.style.background = color;
          resultElement!.style.color = color;
        });
      });
    },
    usingInputElements() {

      let select = document.getElementById<HTMLElement>('input-select');

      // Append the option elements
      for (let i = -20; i <= 40; i++) {

        let option = document.createElement<HTMLElement>("option");
        option.text = i;
        option.value = i;

        if (select) select.appendChild(option);
      }

      let html5Slider = document.getElementById<HTMLElement>('html5');

      if (html5Slider) {
        noUiSlider.create(html5Slider, {
          start: [10, 30],
          connect: true,
          range: {
            'min': -20,
            'max': 40
          }
        });
      }

      let inputNumber = document.getElementById('input-number');

      html5Slider.noUiSlider.on('update', function (values, handle) {

        let value = values[handle];

        if (handle && inputNumber) {
          inputNumber.value = value;
        } else {
          select.value = Math.round(value);
        }
      });

      select!.addEventListener('change', function () {
        html5Slider.noUiSlider.set([this.value, null]);
      });

      inputNumber!.addEventListener('change', function () {
        html5Slider.noUiSlider.set([null, this.value]);
      });
    },
    nonLinearSlider() {
      let nonLinearSlider = document.getElementById('nonlinear');

      if (nonLinearSlider) {

        noUiSlider.create(nonLinearSlider, {
          connect: true,
          behaviour: 'tap',
          start: [500, 4000],
          range: {
            // Starting at 500, step the value by 500,
            // until 4000 is reached. From there, step by 1000.
            'min': [0],
            '10%': [500, 500],
            '50%': [4000, 1000],
            'max': [10000]
          }
        });
      }

      let nodes = [
        document.getElementById<HTMLElement>('lower-value'), // 0
        document.getElementById<HTMLElement>('upper-value')  // 1
      ];

      // Display the slider value and how far the handle moved
      // from the left edge of the slider.
      nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
        nodes[handle]!.innerHTML = values[handle] + ', ' + positions[handle].toFixed(2) + '%';
      });
    },
    lockingSliders() {
      let lockedState = false;
      let lockedSlider = false;
      let lockedValues = [60, 80];

      let slider1 = document.getElementById<HTMLElement>('slider1');
      let slider2 = document.getElementById<HTMLElement>('slider2');

      let lockButton = document.getElementById<HTMLElement>('lockbutton');
      let slider1Value = document.getElementById<HTMLElement>('slider1-span');
      let slider2Value = document.getElementById<HTMLElement>('slider2-span');

      // When the button is clicked, the locked state is inverted.
      if (lockButton) lockButton.addEventListener('click', function () {
        lockedState = !lockedState;
        this.textContent = lockedState ? 'Unlock' : 'lock';
      });

      function crossUpdate(value, slider) {

        // If the sliders aren't interlocked, don't
        // cross-update.
        if (!lockedState) return;

        // Select whether to increase or decrease
        // the other slider value.
        let a = slider1 === slider ? 0 : 1;

        // Invert a
        let b = a ? 0 : 1;

        // Offset the slider value.
        value -= lockedValues[b] - lockedValues[a];

        // Set the value
        slider.noUiSlider.set(value);
      }

      if (slider1) noUiSlider.create(slider1, {
        start: 60,

        // Disable animation on value-setting,
        // so the sliders respond immediately.
        animate: false,
        range: {
          min: 50,
          max: 100
        }
      });

      if (slider2) noUiSlider.create(slider2, {
        start: 80,
        animate: false,
        range: {
          min: 50,
          max: 100
        }
      });

      slider1.noUiSlider.on('update', function (values, handle) {
        if (slider1Value) slider1Value.innerHTML = values[handle];
      });

      slider2.noUiSlider.on('update', function (values, handle) {
        if (slider2Value) slider2Value.innerHTML = values[handle];
      });

      function setLockedValues() {
        lockedValues = [
          Number(slider1.noUiSlider.get()),
          Number(slider2.noUiSlider.get())
        ];
      }

      slider1.noUiSlider.on('change', setLockedValues);
      slider2.noUiSlider.on('change', setLockedValues);

      slider1.noUiSlider.on('slide', function (values, handle) {
        crossUpdate(values[handle], slider2);
      });

      slider2.noUiSlider.on('slide', function (values, handle) {
        crossUpdate(values[handle], slider1);
      });
    },
    hidingTooltipSlider() {

      let hidingTooltipSlider = document.getElementById('slider-hide');

      if (hidingTooltipSlider) noUiSlider.create(hidingTooltipSlider, {
        range: {
          min: 0,
          max: 100
        },
        start: [20, 80],
        tooltips: true
      });
    },
    coloredConnected() {
      let slider = document.getElementById('slider-color');

      if (slider) {
        noUiSlider.create(slider, {
          start: [4000, 8000, 12000, 16000],
          connect: [false, true, true, true, true],
          range: {
            'min': [2000],
            'max': [20000]
          }
        });

        let connect = slider.querySelectorAll('.noUi-connect');
        let classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color'];

        for (let i = 0; i < connect.length; i++) {
          connect[i].classList.add(classes[i]);
        }
      }
    },
    toggleSlider() {
      let toggleSlider = document.getElementById('slider-toggle');

      if (toggleSlider) {
        noUiSlider.create(toggleSlider, {
          orientation: "vertical",
          start: 0,
          range: {
            'min': [0, 1],
            'max': 1
          },
          format: wNumb({
            decimals: 0
          })
        });

        toggleSlider.noUiSlider.on('update', function (values, handle) {
          if (values[handle] === '1') {
            if (toggleSlider) toggleSlider.classList.add('off');
          } else {
            if (toggleSlider) toggleSlider.classList.remove('off');
          }
        });
      }
    },
    softLimits() {
      let softSlider = document.getElementById('soft');
      if (softSlider) {
        noUiSlider.create(softSlider, {
          start: 50,
          range: {
            min: 0,
            max: 100
          },
          pips: {
            mode: 'values',
            values: [20, 80],
            density: 4
          }
        } as Options);
      }

      softSlider.noUiSlider.on('change', function (values, handle) {
        if (values[handle] < 20) {
           softSlider.noUiSlider.set(20);
        } else if (values[handle] > 80) {
           softSlider.noUiSlider.set(80);
        }
      });
    }
  }
};
</script>
