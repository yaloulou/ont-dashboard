<template>
  <div class="card">
    <div class="p-6">
      <div class="flex justify-between items-center">
        <h4 class="card-title">Project Overview</h4>

        <div class="hs-dropdown relative inline-flex [--placement:left-top]">
          <button class="hs-dropdown-toggle text-gray-600 dark:text-gray-400" type="button">
            <i class="mgc_more_2_fill text-xl"></i>
          </button>

          <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-36 z-50 mt-2 duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
            <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
              Today
            </a>
            <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
              Yesterday
            </a>
            <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:void(0)">
              Last Week
            </a>
            <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:void(0)">
              Last Month
            </a>
          </div>
        </div>

      </div>

      <div class="grid md:grid-cols-2 items-center gap-4">
        <div class="md:order-1 order-2">
          <div class="flex flex-col gap-6">
            <div
                class="flex items-center"
                v-for="(project, index) in projectOverview"
                :key="index"
            >
              <div class="flex-shrink-0">
                <i
                    class="mgc_round_fill h-10 w-10 flex justify-center items-center rounded-full text-lg"
                    :class="`text-${project.color} bg-${project.color}/25`"
                ></i>
              </div>
              <div class="flex-grow ms-3">
                <h5 class="fw-semibold mb-1">{{ project.text }}</h5>
                <ul class="flex items-center gap-2">
                  <li class="list-inline-item">
                    <b>{{ project.total_projects }}</b> Total Projects
                  </li>
                  <li class="list-inline-item">
                    <div class="w-1 h-1 rounded bg-gray-400"></div>
                  </li>
                  <li class="list-inline-item">
                    <b>{{ project.employees }}</b> Employees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="md:order-2 order-1">
          <apexchart
              type="radialBar"
              class="apex-charts"
              height="350"
              :options="projectOverviewChart.options"
              :series="projectOverviewChart.series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      projectOverview: [
        {
          color: "primary",
          text: "Product Design",
          total_projects: 26,
          employees: 4,
        },
        {
          color: "danger",
          text: "Web Development",
          total_projects: 30,
          employees: 5,
        },
        {
          color: "success",
          text: "Illustration Design",
          total_projects: 12,
          employees: 3,
        },
        {
          color: "warning",
          text: "UI/UX Design",
          total_projects: 8,
          employees: 4,
        },
      ],
      projectOverviewChart: {
        series: [85, 70, 80, 65],
        options: {
          chart: {
            height: 350,
            type: "radialBar",
          },
          colors: ["#3073F1", "#ff679b", "#0acf97", "#ffbc00"],

          labels: [
            "Product Design",
            "Web Development",
            "Illustration Design",
            "UI/UX Design",
          ],
          plotOptions: {
            radialBar: {
              track: {
                margin: 5,
              },
            },
          },
        }
      },
    }
  }

}
</script>
