<template>
  <apexchart height="380" :options="options" :series="series"></apexchart>
</template>

<script lang="ts">
export default {
  data() {
    return {
      series: [
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: "Page Views",
          data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: "Total Visits",
          data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49],
        },
      ],
      options: {
        chart: {
          height: 380,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#556ee6", "#f46a6a", "#34c38f"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [3, 4, 3],
          curve: "straight",
          dashArray: [0, 8, 5],
        },

        title: {
          text: "Page Statistics",
          align: "left",
          style: {
            fontWeight: "500",
          },
        },
        markers: {
          size: 0,

          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: "#9ca3af20",
        },
      },
    };
  },
};
</script>
