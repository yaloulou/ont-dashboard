<template>
  <Layout>
    <Breadcrumb title="Vector" subtitle="Maps"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">

      <div class="lg:col-span-2">
        <div class="card">
          <div class="card-header">
            <div class="flex justify-between items-center">
              <h4 class="card-title">World Vector Map</h4>
              <div class="flex items-center gap-2">
                <a href="https://jvm-docs.vercel.app/" target="_blank" class="btn-code">
                  <i class="mgc_link_2_line text-sm"></i>
                  <span class="ms-2">Documentation</span>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-3">
              <BaseVectorMap id="world-map" :height="360" :options="worldMapOption"/>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Canada Vector Map</h4>
        </div>
        <div class="p-6">
          <div class="mb-3">
            <BaseVectorMap id="canada-vector-map" :height="360" :options="canadaMapOption"/>
          </div>
        </div>
      </div>


      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Russia Vector Map</h4>
        </div>
        <div class="p-6">
          <div class="mb-3">
            <BaseVectorMap id="russia-vector-map" :height="360" :options="russiaMapOption"/>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Italy Vector Map</h4>
        </div>
        <div class="p-6">
          <div class="mb-3">
            <BaseVectorMap id="italy-vector-map" :height="360" :options="italyMapOption"/>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Iraq Vector Map</h4>
        </div>

        <div class="p-6">
          <div class="mb-3">
            <BaseVectorMap id="iraq-vector-map" :height="360" :options="iraqMapOption"/>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Spain Vector Map</h4>
        </div>
        <div class="p-6">
          <div class="mb-3">
            <BaseVectorMap id="spain-vector-map" :height="360" :options="spainMapOption"/>
          </div>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script lang="ts">

import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import BaseVectorMap from "@/components/base-vector-map.vue";

export default {
  components: {BaseVectorMap, Breadcrumb, Layout},
  data() {
    return {
      worldMapOption: {
        map: 'world',
        selector: '#world-map',
        zoomOnScroll: false,
        zoomButtons: true,
        markersSelectable: true,
        markers: [
          {name: "Greenland", coords: [72, -42]},
          {name: "Canada", coords: [56.1304, -106.3468]},
          {name: "Brazil", coords: [-14.2350, -51.9253]},
          {name: "Egypt", coords: [26.8206, 30.8025]},
          {name: "Russia", coords: [61, 105]},
          {name: "China", coords: [35.8617, 104.1954]},
          {name: "United States", coords: [37.0902, -95.7129]},
          {name: "Norway", coords: [60.472024, 8.468946]},
          {name: "Ukraine", coords: [48.379433, 31.16558]},
        ],
        markerStyle: {
          initial: {fill: "#3073F1"},
          selected: {fill: "#3073f16e"}
        },
        labels: {
          markers: {
            render: marker => marker.name
          }
        }
      },
      canadaMapOption: {
        map: 'canada',
        selector: '#canada-vector-map',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: '#3073F1'
          }
        }
      },
      russiaMapOption: {
        map: 'russia',
        selector: '#russia-vector-map',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: '#5d7186'
          }
        }
      },
      italyMapOption: {
        map: 'italy',
        selector: '#italy-vector-map',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: '#37a593'
          }
        }
      },
      iraqMapOption: {
        map: 'iraq',
        selector: '#iraq-vector-map',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: '#20c8e9'
          }
        }
      },
      spainMapOption: {
        map: 'spain',
        selector: '#spain-vector-map',
        zoomOnScroll: false,
        regionStyle: {
          initial: {
            fill: '#ffe381'
          }
        }
      }
    }
  }
}
</script>