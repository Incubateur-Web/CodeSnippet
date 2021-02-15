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
                        Identity
                      </th>
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-left text-xs font-medium
                        text-white uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th scope="col"
                          class="px-6 py-3 bg-gray-50 text-right text-xs font-medium
                          text-white uppercase tracking-wider"
                      >
                        Last login
                      </th>
                      <th scope="col" class="px-6 py-3 bg-gray-50">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="user in users" :key="user.id">
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ user.id }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" :src="user.avatar" alt="" />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              {{ user.name }}
                            </div>
                            <div class="text-sm text-gray-500">
                              {{ user.email }}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {{ user.isAdmin ? 'Admin' : 'Member' }}
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-900 text-right">
                        {{ user.lastLog }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a @click="goToUserDetails(user.id)"
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
  name: 'Users',
  data() {
    return {
      users: [
        {
          id: '01287',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          name: 'Jane Cooper',
          email: 'jane.cooper@example.com',
          lastLog: 'January 09, 2021',
          isAdmin: true,
        },
        {
          id: '08721',
          avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          name: 'Cody Fisher',
          email: 'cody.fisher@example.com',
          lastLog: 'September 30, 2020',
          isAdmin: true,
        },
        {
          id: '06220',
          avatar: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          name: 'Esther Howard',
          email: 'esther.howard@example.com',
          lastLog: 'February 09, 2020',
          isAdmin: false,
        },
        {
          id: '00917',
          avatar: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          name: 'Jenny Wilson',
          email: 'jenny.wilson@example.com',
          lastLog: 'June 23, 2020',
          isAdmin: false,
        },
      ],
    };
  },
  methods: {
    goToUserDetails(idUser) {
      this.$router.push({ name: 'Admin User Details', params: { idUser } });
    },
  },
};
</script>

<style scoped>

</style>
