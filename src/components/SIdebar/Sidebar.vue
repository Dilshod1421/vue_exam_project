<template>
  <div class="container bg-[#4d44b5] w-[270px] h-[100vh] float-left">
    <div class="logo flex justify-center">
      <div class="flex mt-9 justify-between w-[90%]">
        <div
          class="a-title bg-[#fb7d5b] w-[48px] h-[48px] rounded-[16px] flex justify-center items-center"
        >
          <img src="@/assets/icons/logo/a_logo.svg" alt="" />
        </div>
        <img class="mt-1.5" src="@/assets/icons/logo/academy_logo.svg" alt="" />
      </div>
    </div>
    <div class="mt-7">
      <ul class="text-white">
        <li v-for="item in navLink" :key="item.id">
          <router-link @click="tagName" :to="item.link" class="flex ml-10 mt-1 items-center p-2">
            <img :src="item.icon[0]" alt="img1" />
            <span class="text-md ml-6">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { navLinks } from '../../constants/navLinks'
const navLink = ref(navLinks)
</script>
<style scoped lang="scss">
.router-link-active {
  background: #f3f4ff;
  color: #4d44b5;
  box-shadow: 0px 20px 50px rgba(191, 21, 108, 0.05);
  border-radius: 40px 0px 0px 40px;
}
</style>
