<template>
  <Layout>
    <Breadcrumb title="Dashboard" subtitle="Menu" />

    <!-- STATS en haut -->
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-6">
      <Stats />
    </div>

    <!-- Grille principale : alignement en haut -->
    <div class="grid 2xl:grid-cols-4 gap-6 mb-6 items-start">
      <!-- Colonne gauche (3/4) -->
      <div class="2xl:col-span-3">
        <div class="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
          <div v-for="(project, index) in projectData" :key="index">
            <WidgetStatCard1
              :title="project.text"
              :sub-txt="project.subTxt"
              :time="project.time"
              :assignees="project.assignees"
            />
          </div>
        </div>

        <div class="grid lg:grid-cols-3 gap-6">
          <!-- Monthly Target -->
          <div class="col-span-1">
            <div class="card">
              <div class="p-6">
                <h4 class="card-title">Monthly Target</h4>
                <apexchart
                  height="280"
                  :options="monthlyTargetChart.options"
                  :series="monthlyTargetChart.series"
                  class="apex-charts my-8"
                ></apexchart>

                <div class="flex justify-center">
                  <div class="w-1/2 text-center">
                    <h5>Pending</h5>
                    <p class="fw-semibold text-muted">
                      <i class="mgc_round_fill text-primary"></i> Projects
                    </p>
                  </div>
                  <div class="w-1/2 text-center">
                    <h5>Done</h5>
                    <p class="fw-semibold text-muted">
                      <i class="mgc_round_fill text-success"></i> Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Project Statistics -->
          <div class="lg:col-span-2">
            <div class="card">
              <div class="p-6">
                <div class="flex justify-between items-center">
                  <h4 class="card-title">Project Statistics</h4>
                  <div class="flex gap-2">
                    <button
                      type="button"
                      class="btn btn-sm bg-primary/25 text-primary hover:bg-primary hover:text-white"
                    >
                      All
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm bg-gray-400/25 text-gray-400 hover:bg-gray-400 hover:text-white"
                    >
                      6M
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm bg-gray-400/25 text-gray-400 hover:bg-gray-400 hover:text-white"
                    >
                      1Y
                    </button>
                  </div>
                </div>

                <div dir="ltr" class="mt-2">
                  <apexchart
                    type="bar"
                    height="350"
                    :options="projectStatisticsChart.options"
                    :series="projectStatisticsChart.series"
                    class="apex-charts"
                  ></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Colonne droite (1/4) -->
      <div class="2xl:col-span-1 self-start">
        <ProjectSummary />

        <div class="card p-6 mt-6">
          <h4 class="text-gray-600 dark:text-gray-300 mb-2.5">
            On Time Completed Rate
            <span class="px-2 py-0.5 rounded bg-success/25 text-success ms-2">
              <i class="mgc_arrow_up_line text-sm align-baseline me-1"></i>
              59%
            </span>
          </h4>

          <div class="flex justify-between items-center mb-2">
            <h5 class="text-base font-semibold">Completed Projects</h5>
            <h5 class="text-gray-600 dark:text-gray-300">65%</h5>
          </div>

          <div class="flex w-full h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
            <div
              class="flex flex-col justify-center overflow-hidden bg-primary w-1/4"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section du bas -->
    <div class="grid 2xl:grid-cols-4 md:grid-cols-2 gap-6">
      <div class="2xl:col-span-2 md:col-span-2">
        <ProjectOverview />
      </div>

      <div class="col-span-1">
        <DailyTask />
      </div>

      <div class="col-span-1">
        <Members />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

//images
import avatar1 from "@/assets/images/users/avatar-1.jpg";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import avatar8 from "@/assets/images/users/avatar-8.jpg";

import WidgetStatCard1 from "@/components/widgets/widget-stat-card-1.vue";
import ProjectSummary from "@/views/dashboard/project-summary.vue";
import Stats from "@/views/dashboard/stats.vue";
import ProjectOverview from "@/views/dashboard/project-overview.vue";
import DailyTask from "@/views/dashboard/daily-task.vue";
import Members from "@/views/dashboard/members.vue";

export default {
  components: {
    Members,
    DailyTask,
    ProjectOverview,
    Stats,
    ProjectSummary,
    WidgetStatCard1,
    Layout,
    Breadcrumb,
  },
  data() {
    return {
      projectData: [
        {
          text: "Project Dashboard",
          subTxt: 'New Task Assign',
          time: "4 Hrs ago",
          assignees: [
            {
              img: avatar1,
            },
            {
              img: avatar2,
            },
          ],
        },
        {
          text: "Admin Template",
          subTxt: 'New Task Assign',
          time: "3 Hrs ago",
          assignees: [
            {
              img: avatar3,
            },
            {
              img: avatar4,
            },
          ],
        },
        {
          text: "Client Project",
          subTxt: 'New Task Assign',
          time: "5 Hrs ago",
          assignees: [
            {
              img: avatar5,
            },
            {
              img: avatar6,
            },
          ],
        },
        {
          text: "Figma Design",
          subTxt: 'New Task Assign',
          time: "1 Day ago",
          assignees: [
            {
              img: avatar7,
            },
            {
              img: avatar8,
            },
          ],
        },
      ],
      monthlyTargetChart: {
        series: [82, 37],
        options: {
          chart: {
            height: 280,
            type: "donut",
          },
          legend: {
            show: false,
          },
          stroke: {
            colors: ["transparent"],
          },
          labels: ["Done Projects", "Pending Projects"],
          colors: ["#0acf97", "#3073F1"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },
      projectStatisticsChart: {
        series: [
          {
            name: "Projects",
            data: [56, 38, 85, 72, 28, 69, 55, 52, 69],
          },
          {
            name: "Working Hours",
            data: [176, 185, 256, 240, 187, 205, 191, 114, 194],
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
              horizontal: false,
              endingShape: "rounded",
              columnWidth: "25%",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 3,
            colors: ["transparent"],
          },
          colors: ["#cbdcfc", "#3073F1"],

          xaxis: {
            categories: [
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
            ],
          },
          legend: {
            offsetY: 7,
          },
          fill: {
            opacity: 1,
          },
          grid: {
            row: {
              colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.2,
            },
            borderColor: "#9ca3af20",
            padding: {
              bottom: 5,
            },
          },
        },
      }
    };
  },
};
</script>
