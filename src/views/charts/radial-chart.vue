<template>
  <apexchart height="370" :options="options" :series="series"></apexchart>
</template>

<script lang="ts">
export default {
  data() {
    return {
      series: [44, 55, 67, 83],
      options: {
        chart: {
          height: 370,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249;
                },
              },
            },
          },
        },

        labels: ["Computer", "Tablet", "Laptop", "Mobile"],
        colors: ["#556ee6", "#34c38f", "#f46a6a", "#f1b44c"],
      },
    };
  },
};
</script>
