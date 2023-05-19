<template>
  <main class="w-[75%] py-10 float-left px-8 overflow-y-scroll max-h-screen">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl text-[#303972] font-bold">Asosiy</h1>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
          <img src="@/assets/icons/search/search.svg" alt="" />
        </div>
        <input
          class="rounded-3xl p-2 w-64 pl-10 focus:outline-none"
          type="text"
          id="default-search"
          placeholder="Izlash"
        />
      </div>
    </div>
    <div class="flex bg-white rounded-xl mt-9 p-5 justify-between">
      <div class="flex w-[20%] justify-evenly">
        <img src="../../assets/icons/home_icons/teachers.svg" alt="" />
        <div>
          <h1 class="text-[#A098AE]">O'quvchilar</h1>
          <h1 class="text-2xl text-[#303972] font-bold">{{ storeStudent.state.list.length }}</h1>
        </div>
      </div>
      <div class="flex w-[20%] justify-evenly">
        <img src="../../assets/icons/home_icons/teachers.svg" alt="" />
        <div>
          <h1 class="text-[#A098AE]">O'qituvchilar</h1>
          <h1 class="text-2xl text-[#303972] font-bold">{{ storeTeacher.state.list.length }}</h1>
        </div>
      </div>
      <div class="flex w-[20%] justify-evenly">
        <img src="../../assets/icons/home_icons/groups.svg" alt="" />
        <div>
          <h1 class="text-[#A098AE]">Guruhlar</h1>
          <h1 class="text-2xl text-[#303972] font-bold">40</h1>
        </div>
      </div>
      <div class="flex w-[20%] justify-evenly">
        <img src="../../assets/icons/home_icons/sciences.svg" alt="" />
        <div>
          <h1 class="text-[#A098AE]">Fanlar</h1>
          <h1 class="text-2xl text-[#303972] font-bold">16</h1>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl mt-7 p-6">
      <h1 class="text-xl text-[#303972] font-semibold">O'qituvchilar:</h1>
      <div v-for="item in storeTeacher.state.list" class="flex justify-between mt-8 items-center">
        <div class="flex w-56 items-center">
          <img class="rounded-full w-10 h-10" :src="item.rasm" alt="img" />
          <h1 class="text-[#303972] font-semibold ml-5">{{ item.ism }} {{ item.sharif }}</h1>
        </div>
        <h1 class="text-[#4D44B5] font-semibold">ID {{ item.id }}</h1>
        <div class="flex justify-between w-24 items-center">
          <img class="w-10 h-10 rounded-full" src="@/assets/icons/teachers/avatar.svg" alt="" />
          <div>
            <h1 class="text-[#A098AE]">Class</h1>
            <h1 class="text-[#303972] font-semibold">VII A</h1>
          </div>
        </div>
        <h1 class="text-[#303972] font-semibold">32 soat</h1>
        <div class="flex justify-between items-center w-16">
          <img
            class="w-5 h-5 hover:cursor-pointer"
            src="@/assets/icons/teachers/printer.svg"
            alt=""
          />
          <img class="hover:cursor-pointer" src="@/assets/icons/teachers/dots.svg" alt="" />
        </div>
      </div>
      <div class="flex justify-between mt-12 items-center">
        <div class="flex justify-between w-28 text-[#A098AE] text-sm">
          <h3>1-5 dan</h3>
          <h3>100 ta</h3>
        </div>
        <div class="flex justify-between w-40">
          <img class="hover:cursor-pointer" src="@/assets/icons/directions/prev.svg" alt="" />
          <div
            v-for="el in 3"
            class="w-9 h-9 rounded-full border border-[#A098AE] text-[#A098AE] flex justify-center items-center hover:cursor-pointer hover:bg-indigo-700 hover:text-white"
          >
            {{ el }}
          </div>
          <img class="hover:cursor-pointer" src="@/assets/icons/directions/next.svg" alt="" />
        </div>
      </div>
    </div>
  </main>
  <aside class="bg-white w-[25%] h-[100vh] float-right px-8 overflow-y-scroll max-h-screen py-10">
    <Navbar />
    <div class="pt-10">
      <div class="flex justify-between items-center">
        <h1 class="text-[#303972] text-xl font-bold">Guruhlar</h1>
        <div
          class="text-white bg-[#303972] text-2xl font-bold w-10 h-10 rounded-full text-center hover:border border-[#303972] hover:text-[#303972] hover:bg-white hover:cursor-pointer"
        >
          +
        </div>
      </div>
      <div v-for="el in 5" class="mt-7 items-center">
        <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-11 h-11 rounded-full mr-5"
              src="https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/12/tes_gen_blog_post_071921_1233182206-1-800x412.jpg"
              alt="img"
            />
            <div class="text-sm">
              <h1 class="text-[#303972] font-semibold">Dastur injenering</h1>
              <h1 class="text-[#A098AE]">Class VII A</h1>
            </div>
          </div>
          <div
            class="w-10 h-10 flex items-center justify-center hover:bg-indigo-800 rounded-full border border-solid border-indigo-800"
          >
            <img class="hover:cursor-pointer" src="@/assets/icons/groups/message.svg" alt="" />
          </div>
        </div>
      </div>
      <Barchasi class="mt-8" />
    </div>
    <div class="pt-12">
      <h1 class="text-[#303972] text-xl font-bold">Xabarlar</h1>
      <div v-for="el in 4" class="mt-7">
        <div class="flex">
          <img
            class="w-11 h-11 rounded-full mr-3"
            src="https://www.mdirector.com/wp-content/uploads/2022/04/consejos-enviar-emails-masivos.jpg"
            alt="img"
          />
          <div class="text-sm">
            <h1 class="text-[#303972] font-semibold mr-2">Salimjon Sheraliyev</h1>
            <h1 class="text-[#A098AE]">Assalomu alaykum...</h1>
          </div>
          <h2 class="text-xs w-14 text-[#A098AE]">12:45 PM</h2>
        </div>
        <div class="w-full h-0 border border-solid border-[#A098AE] mt-3"></div>
      </div>
      <Barchasi class="mt-8" />
    </div>
  </aside>
</template>
<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import Barchasi from '@/components/Buttons/Barchasi.vue'
import { teacherStore } from '@/stores/Teachers/teachers'
import { studentStore } from '@/stores/Students/Students'
const storeTeacher = teacherStore()
const storeStudent = studentStore()
</script>
<style scoped></style>
