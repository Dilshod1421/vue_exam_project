<template>
  <main class="w-full px-8 py-10 max-h-screen overflow-y-scroll">
    <div class="flex justify-between">
      <h1 class="text-3xl text-[#303972] font-bold">O'qituvchilar</h1>
      <Navbar />
    </div>
    <div class="flex w-full pt-8 justify-between">
      <div class="flex w-full justify-between items-center">
        <Izlash />
        <QoshishBtn @click="closeModal" />
      </div>
    </div>
    <section class="grid grid-cols-4 gap-8 mt-10">
      <div
        v-for="item in store.state.list"
        class="bg-white rounded-2xl p-6 flex flex-col items-center leading-10"
      >
        <div class="flex">
          <img class="w-32 h-32 rounded-[50%]" :src="item.rasm" alt="" />
          <div @click="editModal(item._id)" class="hover:cursor-pointer">
            <img src="@/assets/icons/teachers/dots.svg" alt="img" />
          </div>
        </div>
        <h1 class="text-[24px] text-[#303972] font-semibold">{{ item.ism }} {{ item.sharif }}</h1>
        <h1 class="text-[18px] text-[#A098AE]">{{ item.fan }}</h1>
        <div class="flex gap-5">
          <img class="hover:cursor-pointer" src="@/assets/icons/teachers/call.svg" alt="" />
          <img class="hover:cursor-pointer" src="@/assets/icons/teachers/message.svg" alt="" />
        </div>
      </div>
    </section>
    <div class="flex justify-between mt-10 w-40 float-right">
      <img src="@/assets/icons/directions/prev.svg" alt="" />
      <div
        v-for="el in 3"
        class="w-9 h-9 rounded-full border border-[#A098AE] text-[#A098AE] flex justify-center items-center"
      >
        {{ el++ }}
      </div>
      <img src="@/assets/icons/directions/next.svg" alt="" />
    </div>

    <!-- Modal start -->
    <form v-if="modal" @submit.prevent="addInfo">
      <div class="absolute top-0 w-[79%]">
        <div
          class="flex justify-between p-5 bg-[#4D44B5] text-[24px] font-semibold text-white py-3 pr-10 pl-10 rounded-t-3xl"
        >
          <h1>O'qituvchi ma'lumotlari</h1>
          <h1 @click="closeModal" class="font-bold hover:cursor-pointer">X</h1>
        </div>
        <section class="bg-white px-9 pt-10 pb-24 rounded-b-3xl">
          <div class="flex gap-14">
            <div>
              <h1 class="text-[#303972] mb-2 text-[18px]">Ism *</h1>
              <input
                v-model="teacherInfo.ism"
                required
                type="text"
                class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="Anvar"
              />
              <h1 class="text-[#303972] mb-2 text-[18px]">Login *</h1>
              <input
                v-model="teacherInfo.login"
                required
                type="text"
                class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="anvar2000"
              />
              <h1 class="text-[#303972] mb-2 text-[18px]">Ma'lumot</h1>
              <textarea
                v-model="teacherInfo.malumot"
                class="border mb-8 outline-none focus:outline-1 p-5 focus:outline-gray-400 border-[#C1BBEB] rounded-md border-solid"
                name="malumot"
                id=""
                cols="60"
                rows="5"
                placeholder="2020-yilda TATU ni tamomlagan..."
              ></textarea>
              <h1 class="text-[#303972] mb-2 text-[18px]">Tug'ilgan sana *</h1>
              <input
                v-model="teacherInfo.tugilgan_sana"
                required
                type="text"
                class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="24 Fevarl 2000"
              />
            </div>
            <div>
              <h1 class="text-[#303972] mb-2 text-[18px]">Sharifi *</h1>
              <input
                v-model="teacherInfo.sharif"
                required
                type="text"
                class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="Abdullayev"
              />
              <h1 class="text-[#303972] mb-2 text-[18px]">Parol *</h1>
              <input
                v-model="teacherInfo.parol"
                required
                type="password"
                class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="********"
              />
              <h1 class="text-[#303972] mb-2 text-[18px]">Rasm *</h1>
              <div class="text-center mb-10">
                <label
                  for="dropzone-file"
                  class="flex w-40 h-40 flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">Rasmni shu yerga joylang</p>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <h1 class="text-[#303972] mb-2 text-[18px]">Fan nomi *</h1>
              <input
                v-model="teacherInfo.fan"
                required
                type="text"
                class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="Dasturlash"
              />
            </div>
          </div>
          <div class="flex gap-10 float-right pr-16 mt-8">
            <ModalQoshishBtn type="submit" />
          </div>
        </section>
      </div>
    </form>
    <form v-if="isEdit" @submit.prevent="editTeacher">
      <div class="absolute top-0 w-[79%]">
        <div
          class="flex justify-between p-5 bg-[#4D44B5] text-[24px] font-semibold text-white py-3 pr-10 pl-10 rounded-t-3xl"
        >
          <h1>O'qituvchi ma'lumotlari</h1>
          <h1 @click="editModal" class="font-bold hover:cursor-pointer">X</h1>
        </div>
        <section class="bg-white px-9 pt-10 pb-24 rounded-b-3xl">
          <div class="flex gap-14">
            <div>
              <h1 class="text-[#303972] mb-2 text-[18px]">Ism *</h1>
              <input
                v-model="teacherInfo.ism"
                required
                type="text"
                class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="Anvar"
              />
              <h1 class="text-[#303972] mb-2 text-[18px]">Login *</h1>
              <input
                v-model="teacherInfo.login"
                required
                type="text"
                class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="anvar2000"
              />
              <h1 class="text-[#303972] mb-2 text-[18px]">Ma'lumot</h1>
              <textarea
                v-model="teacherInfo.malumot"
                class="border mb-8 outline-none focus:outline-1 p-5 focus:outline-gray-400 border-[#C1BBEB] rounded-md border-solid"
                name="malumot"
                id=""
                cols="60"
                rows="5"
                placeholder="2020-yilda TATU ni tamomlagan..."
              ></textarea>
              <h1 class="text-[#303972] mb-2 text-[18px]">Tug'ilgan sana *</h1>
              <input
                v-model="teacherInfo.tugilgan_sana"
                required
                type="text"
                class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="24 Fevarl 2000"
              />
            </div>
            <div>
              <h1 class="text-[#303972] mb-2 text-[18px]">Sharifi *</h1>
              <input
                v-model="teacherInfo.sharif"
                required
                type="text"
                class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="Abdullayev"
              />
              <h1 class="text-[#303972] mb-2 text-[18px]">Parol *</h1>
              <input
                v-model="teacherInfo.parol"
                required
                type="password"
                class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="********"
              />
              <h1 class="text-[#303972] mb-2 text-[18px]">Rasm *</h1>
              <div class="text-center mb-10">
                <label
                  for="dropzone-file"
                  class="flex w-40 h-40 flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">Rasmni shu yerga joylang</p>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <h1 class="text-[#303972] mb-2 text-[18px]">Fan nomi *</h1>
              <input
                v-model="teacherInfo.fan"
                required
                type="text"
                class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[500px] h-10"
                placeholder="Dasturlash"
              />
            </div>
          </div>
          <div class="flex gap-10 float-right pr-16 mt-8">
            <ModalQoshishBtn type="submit" />
          </div>
        </section>
      </div>
    </form>
    <!-- Modal end -->
  </main>
</template>
<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import Izlash from '@/components/Buttons/Izlash.vue'
import QoshishBtn from '@/components/Buttons/QoshishBtn.vue'
import SaqlashBtn from '@/components/Modal/SaqlashBtn.vue'
import ModalQoshishBtn from "@/components/Modal/Qo'shishBtn.vue"
import { teacherStore } from '@/stores/Teachers/teachers'
const store = teacherStore()
import { ref, reactive } from 'vue'

const modal = ref(false)
const closeModal = () => {
  modal.value = !modal.value
}

const teacherInfo = reactive({
  _id: null,
  id: null,
  ism: '',
  sharif: '',
  fan: '',
  rasm: '',
  tugilgan_sana: '',
  login: '',
  parol: '',
  malumot: ''
})

const addInfo = () => {
  const teacher = {
    _id: Date.now(),
    id: store.state.list[0].id + 1,
    ism: teacherInfo.ism,
    sharif: teacherInfo.sharif,
    fan: teacherInfo.fan,
    rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
    tugilgan_sana: teacherInfo.tugilgan_sana,
    login: teacherInfo.login,
    parol: teacherInfo.parol,
    malumot: Date().slice(4, 15)
  }

  store.newTeacher(teacher)
  teacherInfo._id = null
  teacherInfo.id = null
  teacherInfo.ism = ''
  teacherInfo.sharif = ''
  teacherInfo.fan = ''
  teacherInfo.rasm = ''
  teacherInfo.tugilgan_sana = ''
  teacherInfo.login = ''
  teacherInfo.parol = ''
  teacherInfo.malumot = ''
  closeModal()
}

const isEdit = ref(false)
const editModal = (id) => {
  if (id) {
    localStorage.setItem('teacher_id', id)
  }
  isEdit.value = !isEdit.value
}
const editTeacher = () => {
  let edit_id = localStorage.getItem('teacher_id')
  const teacher = {
    ism: teacherInfo.ism,
    sharif: teacherInfo.sharif,
    fan: teacherInfo.fan,
    rasm: 'http://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
    tugilgan_sana: teacherInfo.tugilgan_sana,
    login: teacherInfo.login,
    parol: teacherInfo.parol,
    malumot: teacherInfo.malumot
  }
  store.editTeacher(teacher, edit_id)
  teacherInfo._id = null
  teacherInfo.id = null
  teacherInfo.ism = ''
  teacherInfo.sharif = ''
  teacherInfo.fan = ''
  teacherInfo.rasm = ''
  teacherInfo.tugilgan_sana = ''
  teacherInfo.login = ''
  teacherInfo.parol = ''
  teacherInfo.malumot = ''
  editModal()
}
</script>
<style></style>
