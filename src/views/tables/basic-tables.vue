<template>
  <Layout>
    <Breadcrumb title="Basic Table" subtitle="Table"/>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Example" body-class="p-0">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in basicTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in basicTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Striped rows" body-class="p-0">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in stripedTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-700 dark:even:bg-slate-800"
                      v-for="(record,index) in stripedTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ record.age }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {{ record.address }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Hoverable rows" body-class="p-0">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in stripedTable.head"
                        :key="index">{{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" v-for="(record,index) in stripedTable.body"
                      :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Striped Hoverable" body-class="p-0">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in stripedTable.head"
                        :key="index">{{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
                      v-for="(record,index) in stripedTable.body"
                      :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Highlighted tables" body-class="p-0">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                    <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="bg-primary/25 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">
                      John Brown
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake
                      Park
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim
                      Green
                    </td>
                    <td class="bg-orange-100 px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">27
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake
                      Park
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>

                  <tr>
                    <td class="bg-red-100 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">
                      Joe Black
                    </td>
                    <td class="bg-primary/25 px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">31
                    </td>
                    <td class="bg-primary/25 px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">
                      Sidney No. 1 Lake Park
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Bordered tables">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="border overflow-hidden dark:border-gray-700">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in basicTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in basicTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Rounded tables">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="border rounded-lg overflow-hidden dark:border-gray-700">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in basicTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in basicTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Table thead horizontally divided">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr class="divide-x divide-gray-200 dark:divide-gray-700">
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in basicTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in basicTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Header in Gray color">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="border rounded-lg overflow-hidden dark:border-gray-700">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in basicTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in basicTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="With shadow">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="border rounded-lg shadow-lg overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in basicTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in basicTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Headless">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in basicTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Table foot">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in basicTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in basicTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      Footer
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Footer</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Footer</td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Footer</a>
                    </td>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Captions">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <caption class="py-2 text-left text-sm text-gray-600 dark:text-gray-500">List of users</caption>
                  <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in basicTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in basicTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.age
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Overflow">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''"
                        v-for="(header,index) in overflowTable.head" :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in overflowTable.body" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ record.title }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.email
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ record.age }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{
                        record.address
                      }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Selection">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="border rounded-lg overflow-hidden dark:border-gray-700">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                  <tr>
                    <th scope="col" class="py-3 ps-4">
                      <div class="flex items-center h-5">
                        <input id="table-checkbox-all" type="checkbox" class="form-checkbox rounded">
                        <label for="table-checkbox-all" class="sr-only">Checkbox</label>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        :class="header == 'Action' ?'text-end':''" v-for="(header,index) in stripedTable.head"
                        :key="index">
                      {{ header }}
                    </th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(record,index) in stripedTable.body" :key="index">
                    <td class="py-3 ps-4">
                      <div class="flex items-center h-5">
                        <input id="table-checkbox-1" type="checkbox" class="form-checkbox rounded">
                        <label for="table-checkbox-1" class="sr-only">Checkbox</label>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {{ record.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ record.age }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {{ record.address }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Search input">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <div class="py-3 px-4">
                  <div class="relative max-w-xs">
                    <label for="table-search" class="sr-only">Search</label>
                    <input type="text" name="table-search" id="table-search" class="form-input ps-11"
                           placeholder="Search for items">
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                      <svg class="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                           fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" class="py-3 ps-4">
                        <div class="flex items-center h-5">
                          <input id="table-search-checkbox-all" type="checkbox" class="form-checkbox rounded">
                          <label for="table-search-checkbox-all" class="sr-only">Checkbox</label>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                          :class="header == 'Action' ?'text-end':''" v-for="(header,index) in stripedTable.head"
                          :key="index">
                        {{ header }}
                      </th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr v-for="(record,index) in stripedTable.body" :key="index">
                      <td class="py-3 ps-4">
                        <div class="flex items-center h-5">
                          <input id="table-checkbox-1" type="checkbox" class="form-checkbox rounded">
                          <label for="table-checkbox-1" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {{ record.name }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ record.age }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {{ record.address }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="With pagination">
        <template #card-body>
          <div class="overflow-x-auto">
            <div class="min-w-full inline-block align-middle">
              <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <div class="py-3 px-4">
                  <div class="relative max-w-xs">
                    <label for="table-with-pagination-search" class="sr-only">Search</label>
                    <input type="text" name="table-with-pagination-search" id="table-with-pagination-search"
                           class="form-input ps-11" placeholder="Search for items">
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                      <svg class="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                           fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" class="py-3 ps-4">
                        <div class="flex items-center h-5">
                          <input id="table-pagination-checkbox-all" type="checkbox" class="form-checkbox rounded">
                          <label for="table-pagination-checkbox-all" class="sr-only">Checkbox</label>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                          :class="header == 'Action' ?'text-end':''" v-for="(header,index) in stripedTable.head"
                          :key="index">
                        {{ header }}
                      </th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr v-for="(record,index) in stripedTable.body" :key="index">
                      <td class="py-3 ps-4">
                        <div class="flex items-center h-5">
                          <input id="table-checkbox-1" type="checkbox" class="form-checkbox rounded">
                          <label for="table-checkbox-1" class="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {{ record.name }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ record.age }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {{ record.address }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <a class="text-primary hover:text-sky-700" href="#">Delete</a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="py-1 px-4">
                  <nav class="flex items-center space-x-2">
                    <a class="text-gray-400 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md"
                       href="#">
                      <span aria-hidden="true">«</span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
                       href="#" aria-current="page">1</a>
                    <a class="w-10 h-10 text-gray-400 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full"
                       href="#">2</a>
                    <a class="w-10 h-10 text-gray-400 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full"
                       href="#">3</a>
                    <a class="text-gray-400 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-md"
                       href="#">
                      <span class="sr-only">Next</span>
                      <span aria-hidden="true">»</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
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

export default {
  components: {CustomSyntax, Layout, Breadcrumb},
  data() {
    return {
      basicTable: {
        head: ['Name', 'Age', 'Address', 'Action'],
        body: [
          {
            name: 'John Brown',
            age: 45,
            address: 'New York No. 1 Lake Park'
          }, {
            name: 'Jim Green',
            age: 27,
            address: 'London No. 1 Lake Park'
          }, {
            name: 'Joe Black',
            age: 31,
            address: 'Sidney No. 1 Lake Park'
          },
        ]
      },
      stripedTable: {
        head: ['Name', 'Age', 'Address', 'Action'],
        body: [
          {
            name: 'John Brown',
            age: 45,
            address: 'New York No. 1 Lake Park'
          }, {
            name: 'Jim Green',
            age: 27,
            address: 'London No. 1 Lake Park'
          }, {
            name: 'Joe Black',
            age: 31,
            address: 'Sidney No. 1 Lake Park'
          }, {
            name: 'Edward King',
            age: 16,
            address: 'LA No. 1 Lake Park'
          }, {
            name: 'Jim Red',
            age: 45,
            address: 'Melbourne No. 1 Lake Park'
          },
        ]
      },
      overflowTable: {
        head: ['Name', 'Title', 'Email', 'Age', 'Address', 'Action'],
        body: [
          {
            name: 'John Brown',
            title: 'Regional Paradigm Technician',
            email: 'john@site.com',
            age: 45,
            address: 'New York No. 1 Lake Park'
          }, {
            name: 'Jim Green',
            title: 'Forward Response Developer',
            email: 'jim@site.com',
            age: 27,
            address: 'London No. 1 Lake Park'
          }, {
            name: 'Joe Black',
            title: 'Product Directives Officer',
            email: 'joe@site.com',
            age: 31,
            address: 'Sidney No. 1 Lake Park'
          },
        ]
      },
    }
  }
};
</script>