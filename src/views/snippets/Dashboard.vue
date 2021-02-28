<template>
  <div>
    <div class="flex flex-col justify-center align-center h-full px-10">
      <div class="flex flex-col text-left w-full mt-5 mb-5">
        <h1 class="sm:text-4xl text-3xl font-medium title-font text-default font-bold tracking-wider">
          DASHBOARD
        </h1>
        <h2 class="text-s text-primary tracking-widest font-bold title-font mb-1">
          MANAGE YOUR SNIPPETS AND STUFF
        </h2>
      </div>
      <hr class="w-1/5 mb-10">
      <!-- YOUR LAST EDITED SNIPPETS -->
      <h2 class="sm:text-xl text-xl font-medium title-font text-default">
        Last edited
      </h2>
      <div class="flex flex-wrap items-center">
        <!-- SNIPPET 1 -->
        <div class="flex-shrink-0 mt-3 mr-5 relative overflow-hidden bg-orange-600 rounded-md max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 text-sm mb-1">PERSONAL</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Exo 1</span>
              <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center ml-5">6 days ago</span>
            </div>
          </div>
        </div>
        <!-- SNIPPET 2 -->
        <div class="flex-shrink-0 mt-3 mr-5 relative overflow-hidden bg-blue-600 rounded-md max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 text-sm mb-1">PERSONAL</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Arrays JS</span>
              <span class="block bg-white rounded-full text-blue-600 text-xs font-bold px-3 py-2 leading-none flex items-center ml-5">6 days ago</span>
            </div>
          </div>
        </div>
        <!-- SNIPPET 3 -->
        <div class="flex-shrink-0 mt-3 mr-5 relative overflow-hidden bg-secondary rounded-md max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 text-sm mb-1">GROUP</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Custom Navbar</span>
              <span class="block bg-white rounded-full text-secondary text-xs font-bold px-3 py-2 leading-none flex items-center ml-5">
                6 days ago
              </span>
            </div>
          </div>
        </div>
        <!-- SNIPPET 4 -->
        <div class="flex-shrink-0 mt-3 mr-5 relative overflow-hidden bg-green rounded-md max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 text-sm mb-1">GROUP</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">Cute flowers</span>
              <span class="block bg-white rounded-full text-green text-xs font-bold px-3 py-2 leading-none flex items-center ml-5">
                6 days ago
              </span>
            </div>
          </div>
        </div>
        <!-- SNIPPET 5 -->
        <div class="flex-shrink-0 mt-3 mr-5 relative overflow-hidden bg-pink-500 rounded-md max-w-xs shadow-lg">
          <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
          </svg>
          <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 text-sm mb-1">PERSONAL</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-xl">CSS Cat</span>
              <span class="block bg-white rounded-full text-pink-500 text-xs font-bold px-3 py-2 leading-none flex items-center ml-5">
                6 days ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: { },
  name: 'AllSnippets',
};
</script>
