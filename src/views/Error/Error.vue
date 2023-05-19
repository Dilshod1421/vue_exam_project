<script setup></script>
<template>
  <div
    class="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-blue-400"
  >
    <div class="px-40 py-20 bg-white rounded-2xl shadow-xl">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-blue-600 text-9xl">404</h1>
        <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          Sahifa toplimadi
        </h6>
        <p class="mb-8 text-center text-gray-500 md:text-lg">
          Siz qidirayotgan sahifa mavjud emas.
        </p>
        <router-link
          to="/"
          class="rounded-lg px-6 py-2 text-md font-semibold text-white bg-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"
          >Asosiyga qaytish</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
