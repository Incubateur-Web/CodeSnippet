<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-5">
    <div class="flex items-center justify-between">
      <div class="px-4 py-3 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Folder
          <span class="text-xs text-gray-600 ml-1">5fa45cac5f09ac0e68e512c6</span>
        </h3>
        <div class="mt-1">
          <p class="max-w-2xl text-xs text-gray-600">
            Créer le <span class="text-gray-900">01/01/2020</span>
            | Dernière mise à jour le <span class="text-gray-900">24/06/2020</span>
          </p>
        </div>
      </div>
      <div class="px-4 py-3 sm:px-6">
        <a class="text-red-600 px-4 py-2 border
          border-transparent text-sm font-medium rounded-md
          cursor-pointer hover:text-red-700">
          Delete folder
        </a>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs
                    font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs
                    font-medium text-gray-500 uppercase tracking-wider">
                      Extension
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs
                    font-medium text-gray-500 uppercase tracking-wider">
                      Mime Type
                    </th>
                    <!--<th scope="col" class="px-6 py-3 text-left text-xs
                    font-medium text-gray-500 uppercase tracking-wider">
                      Owner
                    </th>-->
                    <th scope="col" class="px-6 py-3 text-left text-xs
                    font-medium text-gray-500 uppercase tracking-wider">
                      Creation date
                    </th>
                    <th scope="col" class="px-6 py-3 text-right text-xs
                    font-medium text-gray-500 uppercase tracking-wider">
                      Last update
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs
                    font-medium text-gray-500 uppercase tracking-wider">
                      <span class="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="file in files"
                  :key="file.id">
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
<!--                    <td class="px-6 py-2 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ file.idOwner }}
                      </div>
                    </td>-->
                    <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-900 text-left">
                      {{ file.createdAt }}
                    </td>
                    <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-900 text-right">
                      {{ file.updatedAt }}
                    </td>
                    <td class="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
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
</template>

<script>
export default {
  name: 'ProjectContent',
  data: () => ({
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
  }),
};
</script>

<style scoped>

</style>
