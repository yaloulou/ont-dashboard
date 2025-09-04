<template>
  <apexchart height="350" :options="options" :series="series"></apexchart>
</template>

<script lang="ts">
export default {
  data() {
    return {
      series: [
        {
          data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },

        colors: ["#34c38f"],
        grid: {
          borderColor: "#9ca3af20",
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
          ],
        },
      },
    };
  },
};
</script>
