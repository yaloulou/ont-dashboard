<template>
  <Layout>
    <Breadcrumb title="Kanban" subtitle="Apps" />
    <div class="grid h-full w-full">
      <div class="overflow-hidden text-gray-700 dark:text-slate-400">
        <div class="flex overflow-x-auto custom-scroll gap-6 pb-4">
          <div
            class="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700"
          >
            <div
              class="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800"
            >
              <span class="block text-sm font-semibold uppercase"
                >In progress (6)</span
              >
            </div>
            <Draggable
              group="Tasks"
              :list="inProgressTasks"
              class="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll"
              id="kanbanborad-two"
            >
              <div
                class="card p-4 cursor-pointer"
                v-for="(task, index) in inProgressTasks"
                :key="index"
              >
                <div class="flex justify-between items-center">
                  <h4
                    class="flex justify-between items-center h-6 px-3 text-xs font-semibold rounded-full"
                    :class="`text-${task.color} bg-${task.color}/25`"
                  >
                    {{ task.label }}
                  </h4>
                  <div class="text-xs">{{ task.date }}</div>
                </div>

                <h4 class="mt-3 text-sm">{{ task.title }}</h4>
                <div
                  class="flex items-center w-full mt-3 text-xs font-medium text-gray-400"
                >
                  <div class="flex items-center">
                    <i class="mgc_chat_3_line text-base"></i>
                    <span class="ms-1 leading-none">{{ task.chat }}</span>
                  </div>
                  <div class="flex items-center ms-4">
                    <i class="mgc_attachment_line rotate-45 text-base"></i>
                    <span class="ms-1 leading-none">{{ task.attachment }}</span>
                  </div>
                  <img class="w-6 h-6 ms-auto rounded-full" :src="task.image" />
                </div>
              </div>
            </Draggable>
          </div>

          <div
            class="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700"
          >
            <div
              class="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800"
            >
              <span class="block text-sm font-semibold uppercase"
                >Todo (6)</span
              >
            </div>
            <Draggable
              group="Tasks"
              :list="todoTasks"
              class="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll"
              id="kanbanborad-one"
            >
              <div
                class="card p-4 cursor-pointer"
                v-for="(task, index) in todoTasks"
                :key="index"
              >
                <div class="flex justify-between items-center">
                  <h4
                    class="flex justify-between items-center h-6 px-3 text-xs font-semibold rounded-full"
                    :class="`text-${task.color} bg-${task.color}/25`"
                  >
                    {{ task.label }}
                  </h4>

                  <div class="text-xs">{{ task.date }}</div>
                </div>

                <h4 class="mt-3 text-sm">{{ task.title }}</h4>
                <div
                  class="flex items-center w-full mt-3 text-xs font-medium text-gray-400"
                >
                  <div class="flex items-center">
                    <i class="mgc_chat_3_line text-base"></i>
                    <span class="ms-1 leading-none">{{ task.chat }}</span>
                  </div>
                  <div class="flex items-center ms-4">
                    <i class="mgc_attachment_line rotate-45 text-base"></i>
                    <span class="ms-1 leading-none">{{ task.attachment }}</span>
                  </div>
                  <img class="w-6 h-6 ms-auto rounded-full" :src="task.image" />
                </div>
              </div>
            </Draggable>
          </div>

          <div
            class="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700"
          >
            <div
              class="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800"
            >
              <span class="block text-sm font-semibold uppercase"
                >Review (6)</span
              >
            </div>
            <Draggable
              group="Tasks"
              :list="reviewTasks"
              class="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll"
              id="kanbanborad-three"
            >
              <div
                class="card p-4 cursor-pointer"
                v-for="(task, index) in reviewTasks"
                :key="index"
              >
                <div class="flex justify-between items-center">
                  <h4
                    class="flex justify-between items-center h-6 px-3 text-xs font-semibold rounded-full"
                    :class="`text-${task.color} bg-${task.color}/25`"
                  >
                    {{ task.label }}
                  </h4>

                  <div class="text-xs">{{ task.date }}</div>
                </div>

                <h4 class="mt-3 text-sm">{{ task.title }}</h4>
                <div
                  class="flex items-center w-full mt-3 text-xs font-medium text-gray-400"
                >
                  <div class="flex items-center">
                    <i class="mgc_chat_3_line text-base"></i>
                    <span class="ms-1 leading-none">{{ task.chat }}</span>
                  </div>
                  <div class="flex items-center ms-4">
                    <i class="mgc_attachment_line rotate-45 text-base"></i>
                    <span class="ms-1 leading-none">{{ task.attachment }}</span>
                  </div>
                  <img class="w-6 h-6 ms-auto rounded-full" :src="task.image" />
                </div>
              </div>
            </Draggable>
          </div>

          <div
            class="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700"
          >
            <div
              class="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800"
            >
              <span class="block text-sm font-semibold uppercase"
                >Done (1)</span
              >
            </div>
            <Draggable
              group="Tasks"
              :list="doneTasks"
              class="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll"
              id="kanbanborad-four"
            >
              <div
                class="card p-4 cursor-pointer"
                v-for="(task, index) in doneTasks"
                :key="index"
              >
                <div class="flex justify-between items-center">
                  <h4
                    class="flex justify-between items-center h-6 px-3 text-xs font-semibold rounded-full"
                    :class="`text-${task.color} bg-${task.color}/25`"
                  >
                    {{ task.label }}
                  </h4>

                  <div class="text-xs">{{ task.date }}</div>
                </div>

                <h4 class="mt-3 text-sm">{{ task.title }}</h4>
                <div
                  class="flex items-center w-full mt-3 text-xs font-medium text-gray-400"
                >
                  <div class="flex items-center">
                    <i class="mgc_chat_3_line text-base"></i>
                    <span class="ms-1 leading-none">{{ task.chat }}</span>
                  </div>
                  <div class="flex items-center ms-4">
                    <i class="mgc_attachment_line rotate-45 text-base"></i>
                    <span class="ms-1 leading-none">{{ task.attachment }}</span>
                  </div>
                  <img class="w-6 h-6 ms-auto rounded-full" :src="task.image" />
                </div>
              </div>
            </Draggable>
          </div>

          <div
            class="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700"
          >
            <div
              class="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800"
            >
              <span class="block text-sm font-semibold uppercase"
                >Unassigned (1)</span
              >
            </div>
            <Draggable
              group="Tasks"
              :list="unassignedTasks"
              class="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll"
              id="kanbanborad-five"
            >
              <div
                class="card p-4 cursor-pointer"
                v-for="(task, index) in unassignedTasks"
                :key="index"
              >
                <div class="flex justify-between items-center">
                  <h4
                    class="flex justify-between items-center h-6 px-3 text-xs font-semibold rounded-full"
                    :class="`text-${task.color} bg-${task.color}/25`"
                  >
                    {{ task.label }}
                  </h4>

                  <div class="text-xs">{{ task.date }}</div>
                </div>

                <h4 class="mt-3 text-sm">{{ task.title }}</h4>
                <div
                  class="flex items-center w-full mt-3 text-xs font-medium text-gray-400"
                >
                  <div class="flex items-center">
                    <i class="mgc_chat_3_line text-base"></i>
                    <span class="ms-1 leading-none">{{ task.chat }}</span>
                  </div>
                  <div class="flex items-center ms-4">
                    <i class="mgc_attachment_line rotate-45 text-base"></i>
                    <span class="ms-1 leading-none">{{ task.attachment }}</span>
                  </div>
                  <img class="w-6 h-6 ms-auto rounded-full" :src="task.image" />
                </div>
              </div>
            </Draggable>
          </div>

          <div
            class="flex flex-col flex-shrink-0 w-72 border rounded-md overflow-hidden border-gray-200 dark:border-gray-700"
          >
            <div
              class="flex items-center flex-shrink-0 h-10 p-4 bg-white dark:bg-slate-800"
            >
              <span class="block text-sm font-semibold uppercase">New (1)</span>
            </div>
            <Draggable
              group="Tasks"
              :list="newTasks"
              class="flex flex-col gap-4 overflow-auto p-4 h-[calc(100vh-300px)] kanban-board custom-scroll"
              id="kanbanborad-six"
            >
              <div
                class="card p-4 cursor-pointer"
                v-for="(task, index) in newTasks"
                :key="index"
              >
                <div class="flex justify-between items-center">
                  <h4
                    class="flex justify-between items-center h-6 px-3 text-xs font-semibold rounded-full"
                    :class="`text-${task.color} bg-${task.color}/25`"
                  >
                    {{ task.label }}
                  </h4>

                  <div class="text-xs">{{ task.date }}</div>
                </div>

                <h4 class="mt-3 text-sm">{{ task.title }}</h4>
                <div
                  class="flex items-center w-full mt-3 text-xs font-medium text-gray-400"
                >
                  <div class="flex items-center">
                    <i class="mgc_chat_3_line text-base"></i>
                    <span class="ms-1 leading-none">{{ task.chat }}</span>
                  </div>
                  <div class="flex items-center ms-4">
                    <i class="mgc_attachment_line rotate-45 text-base"></i>
                    <span class="ms-1 leading-none">{{ task.attachment }}</span>
                  </div>
                  <img class="w-6 h-6 ms-auto rounded-full" :src="task.image" />
                </div>
              </div>
            </Draggable>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

import { VueDraggableNext } from "vue-draggable-next";

import {
  inProgressTasks,
  todoTasks,
  reviewTasks,
  doneTasks,
  unassignedTasks,
  newTasks,
} from "./data";

export default {
  components: { Layout, Breadcrumb, Draggable: VueDraggableNext },
  data() {
    return {
      inProgressTasks,
      todoTasks,
      reviewTasks,
      doneTasks,
      unassignedTasks,
      newTasks,
    };
  },
};
</script>
