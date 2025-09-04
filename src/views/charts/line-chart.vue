<template>
  <apexchart
    height="380"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script lang="ts">
export default {
  data() {
    return {
      series: [
        {
          name: "High - 2018",
          data: [26, 24, 32, 36, 33, 31, 33],
        },
        {
          name: "Low - 2018",
          data: [14, 11, 16, 12, 17, 13, 12],
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
        colors: ["#556ee6", "#34c38f"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [3, 3],
          curve: "straight",
        },

        title: {
          text: "Average High & Low Temperature",
          align: "left",
          style: {
            fontWeight: "500",
          },
        },
        grid: {
          row: {
            colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.2,
          },
          borderColor: "#9ca3af20",
        },
        markers: {
          style: "inverted",
          size: 6,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              chart: {
                toolbar: {
                  show: false,
                },
              },
              legend: {
                show: false,
              },
            },
          },
        ],
      },
    };
  },
};
</script>
