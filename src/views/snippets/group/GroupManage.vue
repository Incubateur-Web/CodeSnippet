<template>
  <div class="h-full flex flex-col p-5 px-8 w-full">
    <div class="flex flex-col text-left w-full mb-5">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-xl font-medium title-font text-default font-bold tracking-wider">
            EDITION
          </h1>
          <h2 class="text-s text-primary tracking-widest font-bold title-font mb-1">
            MANAGE YOUR PROJECT AND STUFF
          </h2>
        </div>
        <button-ui
          v-tooltip="'Save'"
          class="shadow-xl"
          round small
          type="primary"
          icon>
          <v-mdi name="mdi-check-outline"></v-mdi>
        </button-ui>
      </div>
      <form>
        <div class="flex flex-col justify-around align-center flex-wrap">
          <div class="w-full mx-auto">
            <label for="title" class="flex flex-wrap items-stretch w-full mb-1 relative mt-5">
              <input type="text" name="title" placeholder="Title" id="title" v-model="group.title" class="flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" />
            </label>
            <label for="description" class="flex flex-wrap items-stretch w-full mb-1 relative mt-5">
              <textarea type="text" name="description" placeholder="Description" id="description" v-model="group.description" class="flex-shrink flex-grow flex-auto text-black leading-normal w-px flex-1 border border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow p-2" rows="3"></textarea>
            </label>
            <div class="mt-4">
              <div class="flex mr-4 mb-2">
                <input v-model="group.locked" id="locked" type="checkbox" name="locked" class="hidden" checked />
                <label for="locked" class="flex items-center cursor-pointer text-md mr-3">
                  <span class="w-6 h-6 inline-block mr-2 rounded border border-grey flex-no-shrink bg-dark"></span>
                  Unlocked period
                </label>
              </div>
              <div v-if="group.locked">
                <div>
                  <vc-date-picker
                    v-model="group.lockedDate"
                    mode="dateTime"
                    :masks="masks"
                    :is-dark="this.$store.state.dark"
                    is-range
                  >
                    <template v-slot="{ inputValue, inputEvents, isDragging }">
                      <div class="flex flex-col sm:flex-row justify-start items-center">
                        <!-- DATE START -->
                        <div class="relative flex-grow bg-dark">
                          <svg
                            class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          <input
                            class="flex-grow pl-8 pr-2 py-1 bg-card border rounded w-full"
                            :class="isDragging ? 'text-default' : 'text-default'"
                            :value="inputValue.start"
                            v-on="inputEvents.start"
                          />
                        </div>
                        <span class="flex-shrink-0 m-2">
                              <svg
                                class="w-4 h-4 stroke-current text-default"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </span>
                        <!-- DATE END -->
                        <div class="relative flex-grow">
                          <svg
                            class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          <input
                            class="flex-grow pl-8 pr-2 py-1 bg-card border rounded w-full"
                            :class="isDragging ? 'text-default' : 'text-default'"
                            :value="inputValue.end"
                            v-on="inputEvents.end"
                          />
                        </div>
                      </div>
                    </template>
                  </vc-date-picker>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="divider"></div>
      <div class="w-full py-3 px-4 border border-danger rounded">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-default font-bold">Delete this group</h2>
            <p class="text-sm">Once you delete a group, there is no going back. Please be certain.</p>
          </div>
          <button-ui class="shadow-xl"
            round type="danger" icon small
            style="bottom: 20px; right: 20px"
          >
            <v-mdi name="mdi-delete-outline"></v-mdi>
          </button-ui>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupManage',
  data: () => ({
    group: {
      title: '',
      description: '',
      locked: true,
      lockedDate: {
        start: new Date(),
        end: new Date().setDate(new Date().getDate() + 5),
      },
    },
    masks: {
      input: 'YYYY-MM-DD h:mm A',
    },
  }),
};
</script>

<style scoped lang="scss">

.divider {
  width: 75%;
  height: 2px;
  background: var(--border);
  margin: 1.5rem auto;
}

input[type="radio"] + label span, input[type="checkbox"] + label span {
  transition: all .2s,
  transform .2s;
}
input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span,
input[type="checkbox"] + label span:hover,
input[type="checkbox"] + label:hover span{
  transform: scale(1.1);
}
input[type="radio"]:checked + label span, input[type="checkbox"]:checked + label span {
  background-color: var(--primary); //bg-blue
  box-shadow: 0px 0px 0px 5px white inset;
}
input[type="radio"]:checked + label, input[type="checkbox"]:checked + label{
  color: #3490DC; //text-blue
}

</style>
