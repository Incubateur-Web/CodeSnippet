<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-5">
    <div class="px-4 py-3 sm:px-6">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
        </div>
        <div class="ml-4">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            CodeSnippets
          </h3>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-lighter px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            ID
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            01287
          </dd>
        </div>
        <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            Title
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            CodeSnippets
          </dd>
        </div>
        <div class="bg-lighter px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            Description
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Fugiat ipsum ipsum deserunt culpa aute sint
            do nostrud anim incididunt cillum culpa consequat.
            Excepteur qui ipsum aliquip consequat sint.
            Sit id mollit nulla mollit nostrud in ea officia proident.
            Irure nostrud pariatur mollit ad adipisicing
            reprehenderit deserunt qui eu.
          </dd>
        </div>
        <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            ID AWS
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            be34zbf878zd26DBHZGfejh7T8
          </dd>
        </div>
        <div class="bg-lighter px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            ID Owner
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            be34zbf878zd26DBHZGfejh7T8
          </dd>
        </div>
        <div class="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            Folder(s)
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            4
          </dd>
        </div>
        <div class="bg-lighter px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-700">
            File(s)
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            12
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetails',
  data: () => ({
    users: [
      {
        id: '01287',
        name: 'John Smith',
        role: 'Admin',
      },
      {
        id: '01481',
        name: 'Jane Cooper',
        role: 'Editor',
      },
      {
        id: '31388',
        name: 'Esther Howard',
        role: 'Reader',
      },
      {
        id: '0157',
        name: 'Kristin Watson',
        role: 'Reader',
      },
    ],
  }),
};
</script>

<style scoped>

</style>
