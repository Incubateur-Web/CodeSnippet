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
                      <!--<th scope="col"
                          class="px-6 py-3 bg-gray-50 text-left text-xs font-medium
                          text-white tracking-wider"
                      >
                        # ID
                      </th>-->
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-left text-xs font-medium
                          text-white uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-left text-xs font-medium
                          text-white uppercase tracking-wider"
                      >
                        Extension
                      </th>
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-left text-xs font-medium
                          text-white uppercase tracking-wider"
                      >
                        Mime Type
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
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-left text-xs font-medium
                          text-white uppercase tracking-wider"
                      >
                        <span class="sr-only">Actions</span>
                      </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="file in files"
                        :key="file.id">
                      <!--<td class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        {{ file.id }}
                      </td>-->
                      <td class="px-6 py-2 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">
                          {{ file.title }}
                        </div>
                      </td>
                      <td class="px-6 py-2 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          {{ file.extension }}
                        </div>
                      </td>
                      <td class="px-6 py-2 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          {{ file.mimeType }}
                        </div>
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-900 text-left">
                        {{ file.createdAt }}
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-900 text-right">
                        {{ file.updatedAt }}
                      </td>
                      <td class="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                        <a @click="goToSnippetDetails(file.id)"
                          class="text-indigo-600 hover:text-indigo-900 px-3 py-2 border
                        border-transparent text-sm font-medium rounded-md cursor-pointer">
                          View file
                        </a>
                        <a class="text-red-600 px-3 py-2 border border-transparent text-sm
                        font-medium rounded-md cursor-pointer hover:text-red-700">
                          Delete file
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
  name: 'Snippets',
  data() {
    return {
      files: [
        {
          id: '5fa455da0c077f24c0e5ef99',
          title: 'package.json',
          mimeType: 'text/javascript',
          extension: 'json',
          idOwner: '5f87105ca2f6951ac440d611',
          createdAt: 'January 09, 2020',
          updatedAt: 'March 17, 2020',
        },
        {
          id: '5fa455da0c093f24c0e5ef99',
          title: 'index.js',
          mimeType: 'text/javascript',
          extension: 'js',
          idOwner: '5f87105ca2f6951ac440d611',
          createdAt: 'December 09, 2019',
          updatedAt: 'February 17, 2020',
        },
        {
          id: '5fa455da0c639f24c0e5ef99',
          title: 'main.js',
          mimeType: 'text/javascript',
          extension: 'json',
          idOwner: '5f87105ca2f6951ac440d611',
          createdAt: 'Juin 09, 2020',
          updatedAt: 'September 17, 2020',
        },
        {
          id: '5fa455da0c070f24c0e5ef99',
          title: 'app.scss',
          mimeType: 'text/scss',
          extension: 'scss',
          idOwner: '5f87105ca2f6951ac440d611',
          createdAt: 'April 09, 2020',
          updatedAt: 'July 17, 2020',
        },
      ],
    };
  },
  methods: {
    goToSnippetDetails(idSnippet) {
      this.$router.push({ name: 'Admin Snippet Details', params: { idSnippet } });
    },
  },
};
</script>

<style scoped>

</style>
