<template>
  <Layout>
    <Breadcrumb subtitle="Maps" title="Google"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Basic Example</h4>
        </div>
        <div class="p-6">
          <div class="mb-3">
            <GoogleMap :api-key="api" :center="center" :zoom="5" style="height: 300px"></GoogleMap>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Markers Google Map</h4>
        </div>
        <div class="p-6">
          <div class="mb-3">
            <GoogleMap :api-key="api" :center="center" :zoom="3" style="height: 300px">
              <Marker
                  v-for="(m, index) in markers"
                  :key="index"
                  :options="m.markerOptions"
                  :clickable="true"
                  :draggable="true"
              ></Marker>
            </GoogleMap>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Polygon Editing</h4>
        </div>
        <div class="p-6">
          <div class="mb-3">
            <GoogleMap :api-key="api" :center="{ lat: 24.886, lng: -70.268 }" :zoom="4" style="height: 300px">
              <Polygon :options="polygonOption" :editable="true" @paths_changed="updateEdited($event)"></Polygon>
            </GoogleMap>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Info Window</h4>
        </div>
        <div class="p-6">
          <div class="mb-3">
            <GoogleMap :api-key="api" style="height: 300px" :center="center" :zoom="10">
              <InfoWindow :options="{ position: center, content: 'Hello viewer!' }" />
            </GoogleMap>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Heatmap Layer</h4>
        </div>
        <div class="p-6">
          <div class="mb-3">
            <GoogleMap
                :api-key="api"
                :libraries="['visualization']"
                style="height: 300px"
                :center="{ lat: 37.774546, lng: -122.433523 }"
                :zoom="13"
            >
              <HeatmapLayer :options="heatmapData"/>
            </GoogleMap>
          </div>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

import "https://maps.googleapis.com/maps/api/js";


import {GoogleMap, Marker, Polygon, HeatmapLayer,InfoWindow } from "vue3-google-map";

export default {
  components: {GoogleMap, Marker, Polygon, HeatmapLayer, InfoWindow , Breadcrumb, Layout},
  data() {
    return {
      api: '',
      center: {lat: -12.043333, lng: -77.028333},
      markers: [
        {
          markerOptions: {position: {lat: -12.04, lng: -77.0}, label: "Hi", title: "Hello from marker"}
        },
      ],
      paths: [
        [
          {lat: 1.38, lng: 103.8},
          {lat: 1.38, lng: 103.81},
          {lat: 1.39, lng: 103.81},
          {lat: 1.39, lng: 103.8},
        ],
        [
          {lat: 1.382, lng: 103.802},
          {lat: 1.382, lng: 103.808},
          {lat: 1.388, lng: 103.808},
          {lat: 1.388, lng: 103.802},
        ],
      ],
      pov: null,
      pano: null,
      edited: [[{lat: 0, lng: 0}]],
      polygonOption: {
        paths: [
          {lat: 25.774, lng: -80.19},
          {lat: 18.466, lng: -66.118},
          {lat: 32.321, lng: -64.757},
          {lat: 25.774, lng: -80.19},
        ],
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,

        heatmapData: {
          data: [
            {location: {lat: 37.782, lng: -122.447}, weight: 0.5},
            {lat: 37.782, lng: -122.445},
            {location: {lat: 37.782, lng: -122.443}, weight: 2},
            {location: {lat: 37.782, lng: -122.441}, weight: 3},
            {location: {lat: 37.782, lng: -122.439}, weight: 2},
            {lat: 37.782, lng: -122.437},
            {location: {lat: 37.782, lng: -122.435}, weight: 0.5},

            {location: {lat: 37.785, lng: -122.447}, weight: 3},
            {location: {lat: 37.785, lng: -122.445}, weight: 2},
            {lat: 37.785, lng: -122.443},
            {location: {lat: 37.785, lng: -122.441}, weight: 0.5},
            {lat: 37.785, lng: -122.439},
            {location: {lat: 37.785, lng: -122.437}, weight: 2},
            {location: {lat: 37.785, lng: -122.435}, weight: 3},
          ]
        }
      }
    }
  },
  methods: {
    /**
     * street view data update
     */
    updatePov(pov: any) {
      this.pov = pov
    },
    /**
     * street view data update
     */
    updatePano(pano: any) {
      this.pano = pano
    },
    /**
     * polygon editing
     */
    updateEdited(mvcArray: any) {
      let paths = []
      for (let i = 0; i < mvcArray.getLength(); i++) {
        let path = []
        for (let j = 0; j < mvcArray.getAt(i).getLength(); j++) {
          let point = mvcArray.getAt(i).getAt(j)
          path.push({lat: point.lat(), lng: point.lng()})
        }
        paths.push(path)
      }
      this.edited = paths
    },
  },
}
</script>
