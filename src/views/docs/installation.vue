<template>
  <Layout>
    <Breadcrumb title="Installation" subtitle="Documentation"/>

    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Setup</h6>
      </div>
      <div class="p-6">

        <div class="px-6 max-w-full">


          <h6 class="mb-2.5 text-base font-semibold">Prerequisites</h6>

          <p class="mb-4">Please follow below steps to install and setup all prerequisites:</p>

          <ul class="ps-8">
            <li class="list-disc">
              <p class="my-2.5">Node.js - v18.17.x</p>
              <p class="mb-3.5">In order to use build tools you will need to download
                and install Node.js. If you do not have Node.js installed already,
                you can get it by downloading the package installer from the
                official website. Please download the stable version of Node.js
                (LTS). <a href="https://nodejs.org/" target="_blank" class="text-primary">Download
                  Node.js</a></p>
            </li>
            <li class="list-disc">
              <p class="my-2.5">Yarn</p>
              <p>Make sure to have the <a href="https://yarnpkg.com/lang/en/" target="_blank"
                                          class="text-primary">Yarn</a> installed &amp; running in your
                computer. If you already have installed yarn on your computer, you
                can skip this step.</p>
            </li>
          </ul>

          <h6 class="mt-9 mb-2.5 font-normal">Installation</h6>

          <p class="mb-4">You can run the following commands to run project locally or
            build for production use:</p>

          <div class="shadow-sm overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 rounded-md">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Command</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-6 py-4 text-sm whitespace-nowrap font-medium"><code>yarn install</code></td>
                <td class="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">This will install all necessary dependencies in the
                  <code>node_modules</code> folder. Once the
                  installation is complete, you are ready to run Konrix
                  for the first time.
                </td>
              </tr>

              <tr>
                <td class="px-6 py-4 text-sm whitespace-nowrap font-medium"><code>yarn dev</code></td>
                <td class="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">It will start the development server locally. You can use <code>yarn build-only</code> to build for production
                </td>
              </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div class="bg-success/20 text-sm text-success rounded-md p-4 mt-6">If you are having
          any question or
          difficulty during setup, don't hesitate to contact us. We would be glad
          to assist you.
        </div>

      </div>
    </div>

  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

export default {
  components: {Breadcrumb, Layout}

}
</script>
