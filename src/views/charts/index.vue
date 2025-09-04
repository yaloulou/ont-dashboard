<template>
  <Layout>
    <Breadcrumb title="Charts" subtitle="Elements" />
    <div class="grid lg:grid-cols-2 gap-6">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Line with Data Labels</h4>
        </div>
        <div class="p-6">
          <LineChart class="apex-charts" dir="ltr"/>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Dashed Line</h4>
        </div>
        <div class="p-6">
            <DashedLineChart class="apex-charts" dir="ltr"/>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Spline Area</h4>
        </div>
        <div class="p-6">
          <SplineAreaChart class="apex-charts" dir="ltr" />
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Column Chart</h4>
        </div>
        <div class="p-6">
          <ColumnChart class="apex-charts" dir="ltr" />
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Column with Data Labels</h4>
        </div>
        <div class="p-6">
          <ColumnLabelChart class="apex-charts" dir="ltr" />
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Bar Chart</h4>
        </div>
        <div class="p-6">
          <BarChart class="apex-charts" dir="ltr" />
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Line, Column & Area Chart</h4>
        </div>
        <div class="p-6">
          <MixedChart class="apex-charts" dir="ltr" />
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Radial Chart</h4>
        </div>
        <div class="p-6">
          <RadialChart class="apex-charts" dir="ltr" />
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Pie Chart</h4>
        </div>
        <div class="p-6">
          <PieChart class="apex-charts" dir="ltr" />
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Donut Chart</h4>
        </div>
        <div class="p-6">
          <DonutChart class="apex-charts" dir="ltr" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

import LineChart from "./line-chart.vue";
import DashedLineChart from "./dashed-line-chart.vue";
import SplineAreaChart from "./spline-area-chart.vue";
import ColumnChart from "./column-chart.vue";
import ColumnLabelChart from "./column-label-chart.vue";
import BarChart from "./bar-chart.vue";
import MixedChart from "./mixed-chart.vue";
import RadialChart from "./radial-chart.vue";
import PieChart from "./pie-chart.vue";
import DonutChart from "./donut-chart.vue";
export default {
  components: { Layout, Breadcrumb, LineChart,DashedLineChart,SplineAreaChart,ColumnChart,ColumnLabelChart,BarChart,MixedChart,RadialChart,PieChart,DonutChart },
};
</script>
