<template>
  <section class="flex">
    <div>
      <Sidebar />
    </div>
    <div class="w-full min-h-screen bg-[#F3F4FF]">
      <router-view></router-view>
    </div>
  </section>
</template>
<script setup>
import Sidebar from '../components/SIdebar/Sidebar.vue'
</script>
<style></style>
