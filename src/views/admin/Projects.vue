<template>
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-4 lg:px-8">
        <h1 class="text-2xl font-bold leading-tight text-gray-900">
          {{ this.$route.name }}
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-3 sm:px-0">
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead style="background-color: #292a42 !important;">
                    <tr>
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-left text-xs font-medium
                          text-white tracking-wider"
                      >
                        # ID
                      </th>
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-left text-xs font-medium
                          text-white uppercase tracking-wider"
                      >
                        Title & Description
                      </th>
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-right text-xs font-medium
                          text-white uppercase tracking-wider"
                      >
                        Team
                      </th>
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-left text-xs font-medium
                          text-white uppercase tracking-wider"
                      >
                        Creation date
                      </th>
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-right text-xs font-medium
                          text-white uppercase tracking-wider"
                      >
                        Last update
                      </th>
                      <th scope="col" class="px-6 py-3 bg-gray-50">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="project in projects"
                        :key="project.id">
                      <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        {{ project.id }}
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap min-w-40%">
                        <div class="text-sm text-gray-900">{{ project.title }}</div>
                        <div class="text-sm text-gray-500">
                          {{ project.description.slice(0, 70) + '...' }}
                        </div>
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap text-right">
                        <div class="flex justify-end -space-x-1 overflow-hidden">
                          <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                          <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                          <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
                          <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                          <div class="inline-block h-6 w-6 rounded-full text-center text-xs
                          flex items-center justify-center ring-2 ring-white bg-gray-100">
                            +5
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-900 text-left">
                        {{ project.createdAt }}
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-900 text-right">
                        {{ project.updatedAt }}
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          @click="goToProjectDetails(project.id)"
                          class="text-indigo-600 hover:text-indigo-900 cursor-pointer">
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
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data: () => ({
    projects: [
      {
        id: '01287',
        title: 'GraphQL API',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit dolor id consequat dignissim.',
        createdAt: 'January 09, 2020',
        updatedAt: 'March 17, 2020',
      },
      {
        id: '01481',
        title: 'iOS App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit dolor id consequat dignissim.',
        createdAt: 'March 30, 2020',
        updatedAt: 'June 24, 2020',
      },
      {
        id: '31388',
        title: 'Android App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit dolor id consequat dignissim.',
        createdAt: 'December 24, 2019',
        updatedAt: 'January 02, 2020',
      },
      {
        id: '0157',
        title: 'Implement NPS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit dolor id consequat dignissim.',
        createdAt: 'April 20, 2020',
        updatedAt: 'July 29, 2020',
      },
      {
        id: '017',
        title: 'Hire CFO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit dolor id consequat dignissim.',
        createdAt: 'January 09, 2020',
        updatedAt: 'September 11, 2020',
      },
    ],
  }),
  methods: {
    goToProjectDetails(idProject) {
      this.$router.push({ name: 'Admin Project Details', params: { idProject } });
    },
  },
};
</script>

<style scoped>

</style>
