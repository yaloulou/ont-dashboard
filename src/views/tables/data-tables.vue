<template>
  <Layout>
    <Breadcrumb title="Data Table" subtitle="Table"/>

    <div class="flex flex-col gap-6">

      <CustomSyntax title="Basic">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-4">The most basic list group is an unordered list with
            list items and the proper classes. Build upon it with the options that follow, or with your own CSS as
            needed.</p>
          <div id="table-gridjs"></div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Pagination">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-4">Pagination can be enabled by setting <code>pagination:
            true</code>:</p>
          <div id="table-pagination"></div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Search">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-4">Grid.js supports global search on all rows and
            columns. Set <code>search: true</code> to enable the search plugin:</p>
          <div id="table-search"></div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Sorting">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-4">To enable sorting, simply add <code>sort:
            true</code> to your config:</p>
          <div id="table-sorting"></div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Loading State">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-4">Grid.js renders a loading bar automatically while
            it waits for the data to be fetched. Here we are using an async
            function to demonstrate this behaviour (e.g. an async function can be a XHR call to a server backend)</p>
          <div id="table-loading-state"></div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Fixed Header">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-4">The most basic list group is an unordered list with
            list items and the proper classes. Build upon it with the options that follow, or with your own CSS as
            needed.</p>
          <div id="table-fixed-header"></div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Hidden Columns">
        <template #card-body>
          <p class="text-sm text-slate-700 dark:text-slate-400 mb-4">Add <code>hidden: true</code> to the columns
            definition to hide them. </p>
          <div id="table-hidden-column"></div>
        </template>
      </CustomSyntax>

    </div>

  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import gridjs from "gridjs/dist/gridjs.umd.js";
import CustomSyntax from "@/components/custom-syntax.vue";

export default {
  components: {CustomSyntax, Breadcrumb, Layout},
  mounted() {
    // Basic Table
    if (document.getElementById("table-gridjs"))
      new gridjs.Grid({
        columns: [{
          name: 'ID',
          formatter: (function (cell) {
            return gridjs.html('<span class="fw-semibold">' + cell + '</span>');
          })
        },
          "Name",
          {
            name: 'Email',
            formatter: (function (cell) {
              return gridjs.html('<a href="">' + cell + '</a>');
            })
          },
          "Position", "Company", "Country",
          {
            name: 'Actions',
            width: '120px',
            formatter: (function (cell) {
              return gridjs.html("<a href='#' class='text-reset text-decoration-underline'>" + "Details" + "</a>");
            })
          },
        ],
        pagination: {
          limit: 5
        },
        sort: true,
        search: true,
        data: [
          ["01", "Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
          ["02", "Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
          ["03", "Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
          ["04", "Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
          ["05", "Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
          ["06", "Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
          ["07", "Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
          ["08", "Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
          ["09", "Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
          ["10", "Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        ]
      }).render(document.getElementById("table-gridjs")!);

    // pagination Table
    if (document.getElementById("table-pagination"))
      new gridjs.Grid({
        columns: [{
          name: 'ID',
          width: '120px',
          formatter: (function (cell) {
            return gridjs.html('<a href="" class="fw-medium">' + cell + '</a>');
          })
        }, "Name", "Date", "Total", "Status",
          {
            name: 'Actions',
            width: '100px',
            formatter: (function (cell) {
              return gridjs.html("<button type='button' class='btn btn-sm btn-light'>" +
                  "Details" +
                  "</button>");
            })
          },
        ],
        pagination: {
          limit: 5
        },

        data: [
          ["#VL2111", "Jonathan", "07 Oct, 2021", "$24.05", "Paid",],
          ["#VL2110", "Harold", "07 Oct, 2021", "$26.15", "Paid"],
          ["#VL2109", "Shannon", "06 Oct, 2021", "$21.25", "Refund"],
          ["#VL2108", "Robert", "05 Oct, 2021", "$25.03", "Paid"],
          ["#VL2107", "Noel", "05 Oct, 2021", "$22.61", "Paid"],
          ["#VL2106", "Traci", "04 Oct, 2021", "$24.05", "Paid"],
          ["#VL2105", "Kerry", "04 Oct, 2021", "$26.15", "Paid"],
          ["#VL2104", "Patsy", "04 Oct, 2021", "$21.25", "Refund"],
          ["#VL2103", "Cathy", "03 Oct, 2021", "$22.61", "Paid"],
          ["#VL2102", "Tyrone", "03 Oct, 2021", "$25.03", "Paid"],
        ]
      }).render(document.getElementById("table-pagination"));

    // search Table
    if (document.getElementById("table-search"))
      new gridjs.Grid({
        columns: ["Name", "Email", "Position", "Company", "Country"],
        pagination: {
          limit: 5
        },
        search: true,
        data: [
          ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
          ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
          ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
          ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
          ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
          ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
          ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
          ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
          ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
          ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        ]
      }).render(document.getElementById("table-search"));

    // Sorting Table
    if (document.getElementById("table-sorting"))
      new gridjs.Grid({
        columns: ["Name", "Email", "Position", "Company", "Country"],
        pagination: {
          limit: 5
        },
        sort: true,
        data: [
          ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
          ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
          ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
          ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
          ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
          ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
          ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
          ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
          ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
          ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        ]
      }).render(document.getElementById("table-sorting"));


    // Loading State Table
    if (document.getElementById("table-loading-state"))
      new gridjs.Grid({
        columns: ["Name", "Email", "Position", "Company", "Country"],
        pagination: {
          limit: 5
        },
        sort: true,
        data: function () {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve([
                ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
                ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
                ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
                ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
                ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
                ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
                ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
                ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
                ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
                ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]
              ])
            }, 2000);
          });
        }
      }).render(document.getElementById("table-loading-state"));


    // Fixed Header
    if (document.getElementById("table-fixed-header"))
      new gridjs.Grid({
        columns: ["Name", "Email", "Position", "Company", "Country"],
        sort: true,
        pagination: true,
        fixedHeader: true,
        height: '400px',
        data: [
          ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
          ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
          ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
          ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
          ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
          ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
          ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
          ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
          ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
          ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        ]
      }).render(document.getElementById("table-fixed-header"));


    // Hidden Columns
    if (document.getElementById("table-hidden-column"))
      new gridjs.Grid({
        columns: ["Name", "Email", "Position", "Company",
          {
            name: 'Country',
            hidden: true
          },
        ],
        pagination: {
          limit: 5
        },
        sort: true,
        data: [
          ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
          ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
          ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
          ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
          ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
          ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
          ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
          ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
          ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
          ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        ]
      }).render(document.getElementById("table-hidden-column"));
  }
}
</script>
