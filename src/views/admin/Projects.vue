<template>
  <div class="container py-5">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
              <tr>
                <th scope="col" :class="classThead">
                  #
                </th>
                <th scope="col" :class="classThead">
                  Title
                </th>
                <th scope="col" :class="classThead">
                  Author
                </th>
                <th scope="col" :class="classThead">
                  Folders
                </th>
                <th scope="col" :class="classThead">
                  Files
                </th>
                <th scope="col" :class="classThead">
                  Created At
                </th>
                <th scope="col" :class="classThead">
                  Updated At
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  01287
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                  <!--<div class="text-sm text-gray-500">Optimization</div>-->
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <!--<div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                    </div>-->
                    <div>
                      <div class="text-sm font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <!--<div class="text-sm text-gray-500">
                        jane.cooper@example.com
                      </div>-->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  4
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  12
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  01/01/2020
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  28/09/2020
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    @click="goToProjectDetails('01287')"
                    class="text-indigo-600 hover:text-indigo-900">
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  01287
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                  <!--<div class="text-sm text-gray-500">Optimization</div>-->
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <!--<div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                    </div>-->
                    <div>
                      <div class="text-sm font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <!--<div class="text-sm text-gray-500">
                        jane.cooper@example.com
                      </div>-->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  6
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  28
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  13/04/2020
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  10/07/2020
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    @click="goToProjectDetails('01287')"
                    class="text-indigo-600 hover:text-indigo-900">
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  01287
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                  <!--<div class="text-sm text-gray-500">Optimization</div>-->
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <!--<div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                    </div>-->
                    <div>
                      <div class="text-sm font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <!--<div class="text-sm text-gray-500">
                        jane.cooper@example.com
                      </div>-->
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  2
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  7
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  30/06/2020
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  28/11/2020
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    @click="goToProjectDetails('01287')"
                    class="text-indigo-600 hover:text-indigo-900">
                    Details
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      classThead: 'px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
      classSpan: 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800',
    };
  },
  methods: {
    goToProjectDetails(idProject) {
      this.$router.push({ name: 'Project Details', params: { idProject } });
    },
  },
};
</script>

<style scoped>

</style>
