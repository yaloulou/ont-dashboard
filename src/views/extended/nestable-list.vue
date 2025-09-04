<template>
  <Layout>
    <Breadcrumb title="Nestable" subtitle="Extended"/>
    <div class="flex flex-col gap-6">

      <CustomSyntax title="Simple list example">
        <template #card-body>
          <div id="example1" class="flex flex-col gap-3">
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 1</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 2</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 3</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 4</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 5</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 6</div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Shared lists">
        <template #card-body>
          <div class="grid md:grid-cols-2 gap-5">
            <div id="example2-left" class="flex flex-col gap-3">
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 1</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 2</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 3</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 4</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 5</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 6</div>
            </div>

            <div id="example2-right" class="flex flex-col gap-3">
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 1</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 2</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 3</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 4</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 5</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 6</div>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Cloning">
        <template #card-body>
          <p class="text-gray-400 mb-4">Try dragging from one list to another. The item you drag will be cloned and the
            clone will stay in the original list.</p>
          <div class="grid md:grid-cols-2 gap-5">
            <div id="example3-left" class="flex flex-col gap-3">
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 1</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 2</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 3</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 4</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 5</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 6</div>
            </div>

            <div id="example3-right" class="flex flex-col gap-3">
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 1</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 2</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 3</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 4</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 5</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 6</div>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Disabling Sorting">
        <template #card-body>
          <p class="text-gray-400 mb-4">Try sorting the list on the left. It is not possible because it has it's <code>sort</code>
            option set to false. However, you can still drag from the list on the left to the list on the right.</p>
          <div class="grid md:grid-cols-2 gap-5">
            <div id="example4-left" class="flex flex-col gap-3">
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 1</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 2</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 3</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 4</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 5</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 6</div>
            </div>

            <div id="example4-right" class="flex flex-col gap-3">
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 1</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 2</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 3</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 4</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 5</div>
              <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 tinted">Item 6</div>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Handle With Icon">
        <template #card-body>
          <div id="example5" class="flex flex-col gap-3">
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700"><i
                class="mgc_move_line handle"></i>&nbsp;&nbsp;Item 1
            </div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700"><i
                class="mgc_move_line handle"></i>&nbsp;&nbsp;Item 2
            </div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700"><i
                class="mgc_move_line handle"></i>&nbsp;&nbsp;Item 3
            </div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700"><i
                class="mgc_move_line handle"></i>&nbsp;&nbsp;Item 4
            </div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700"><i
                class="mgc_move_line handle"></i>&nbsp;&nbsp;Item 5
            </div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700"><i
                class="mgc_move_line handle"></i>&nbsp;&nbsp;Item 6
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Filter">
        <template #card-body>
          <p class="text-gray-400 mb-4">Try dragging the item with a red background. It cannot be done, because that
            item is filtered out using the <code>filter</code> option.</p>
          <div id="example6" class="flex flex-col gap-3">
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 1</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 2</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 3</div>
            <div class="rounded-md border px-6 py-3 bg-danger filtered text-white border-gray-200 dark:border-gray-700">
              Filtered
            </div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 4</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 5</div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Grid Example">
        <template #card-body>
          <div id="gridDemo" class="flex flex-wrap gap-4">
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 1
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 2
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 3
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 4
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 5
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 6
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 7
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 8
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 9
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 10
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 11
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 12
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 13
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 14
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 15
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 16
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 17
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 18
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 19
            </div>
            <div
                class="w-24 h-24 flex items-center justify-center text-slate-900 dark:text-slate-200 rounded border shadow border-gray-200 dark:border-gray-700">
              Item 20
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Nested Sortables Example">
        <template #card-body>
          <p class="text-gray-400 mb-4">NOTE: When using nested Sortables with animation, it is recommended that the
            <code>fallbackOnBody</code> option is set to true. <br>It is also always recommended that either the <code>invertSwap</code>
            option is set to true, or the <code>swapThreshold</code> option is lower than the default value of 1 (eg
            <code>0.65</code>).</p>
          <div id="nestedDemo" class="flex flex-col gap-3 nested-sortable">
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-1">
              <div class="pb-3">Item 1.1</div>
              <div class="list-group nested-sortable">
                <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-2">Item 2.1
                </div>
                <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-2">Item 2.2
                  <div class="list-group nested-sortable">
                    <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-3">Item
                      3.1
                    </div>
                    <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-3">Item
                      3.2
                    </div>
                    <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-3">Item
                      3.3
                    </div>
                    <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-3">Item
                      3.4
                    </div>
                  </div>
                </div>
                <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-2">Item 2.3
                </div>
                <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-2">Item 2.4
                </div>
              </div>
            </div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-1">Item 1.2</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-1">Item 1.3</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-1">Item 1.4
              <div class="list-group nested-sortable">
                <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-2">Item 2.1
                </div>
                <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-2">Item 2.2
                </div>
                <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-2">Item 2.3
                </div>
                <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-2">Item 2.4
                </div>
              </div>
            </div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700 nested-1">Item 1.5</div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="MultiDrag">
        <template #card-body>
          <p class="text-gray-400 mb-4">The <a target="_blank"
                                               href="https://github.com/SortableJS/Sortable/tree/master/plugins/MultiDrag">MultiDrag</a>
            plugin allows for multiple items to be dragged at a time. You can click to "select" multiple items, and then
            drag them as one item.</p>
          <div id="multiDragDemo" class="flex flex-col gap-3">
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 1</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 2</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 3</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 4</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 5</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 6</div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Swap">
        <template #card-body>
          <p class="text-gray-400 mb-4">The <a target="_blank"
                                               href="https://github.com/SortableJS/Sortable/tree/master/plugins/MultiDrag">MultiDrag</a>
            plugin allows for multiple items to be dragged at a time. You can click to "select" multiple items, and then
            drag them as one item.</p>
          <p class="text-gray-400 mb-4">The <a target="_blank"
                                               href="https://github.com/SortableJS/Sortable/tree/master/plugins/Swap">Swap</a>
            plugin changes the behaviour of Sortable to allow for items to be swapped with eachother rather than sorted.
          </p>
          <div id="swapDemo" class="flex flex-col gap-3">
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 1</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 2</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 3</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 4</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 5</div>
            <div class="card cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-700">Item 6</div>
          </div>
        </template>
      </CustomSyntax>
    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";

import Sortable from "sortablejs/Sortable.min.js"

export default {
  components: { CustomSyntax, Breadcrumb, Layout},
  mounted() {
    // Example 1 - Simple list
    new Sortable(document.getElementById('example1'), {
      animation: 150,
      ghostClass: 'blue-background-class'
    });

    // Example 2 - Shared lists
    new Sortable(document.getElementById('example2-left'), {
      group: 'shared', // set both lists to same group
      animation: 150
    });

    new Sortable(document.getElementById('example2-right'), {
      group: 'shared',
      animation: 150
    });

    // Example 3 - Cloning
    new Sortable(document.getElementById('example3-left'), {
      group: {
        name: 'shared',
        pull: 'clone' // To clone: set pull to 'clone'
      },
      animation: 150
    });

    new Sortable(document.getElementById('example3-right'), {
      group: {
        name: 'shared',
        pull: 'clone'
      },
      animation: 150
    });

    // Example 4 - No Sorting
    new Sortable(document.getElementById('example4-left'), {
      group: {
        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
      },
      animation: 150,
      sort: false // To disable sorting: set sort to false
    });

    new Sortable(document.getElementById('example4-right'), {
      group: 'shared',
      animation: 150
    });


    // Example 5 - Handle
    new Sortable(document.getElementById('example5'), {
      handle: '.handle', // handle class
      animation: 150
    });

    // Example 6 - Filter
    new Sortable(document.getElementById('example6'), {
      filter: '.filtered',
      animation: 150
    });

    // Example 7 - Thresholds

    // Grid demo
    new Sortable(document.getElementById('gridDemo'), {
      animation: 150,
      ghostClass: 'blue-background-class'
    });

    // Nested demo
    var nestedSortables = [].slice.call(document.querySelectorAll('.nested-sortable'));

    // Loop through each nested sortable element
    for (var i = 0; i < nestedSortables.length; i++) {
      new Sortable(nestedSortables[i], {
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65
      });
    }

    // MultiDrag demo
    new Sortable(document.getElementById('multiDragDemo'), {
      multiDrag: true,
      selectedClass: 'selected',
      fallbackTolerance: 3, // So that we can select items on mobile
      animation: 150
    });


    // Swap demo
    new Sortable(document.getElementById('swapDemo'), {
      swap: true,
      swapClass: 'highlight',
      animation: 150
    });

  }
}
</script>