<template>
  <main class="w-full px-8 py-10 max-h-screen overflow-y-scroll">
    <div class="flex justify-between">
      <h1 class="text-3xl text-[#303972] font-bold">O'quvchilar</h1>
      <Navbar />
    </div>
    <div class="flex w-full pt-8 justify-between">
      <div class="flex w-full justify-between items-center">
        <Izlash />
        <QoshishBtn @click="closeModal" />
      </div>
    </div>
    <ul class="border border-solid border-[#EAECF0] rounded-2xl bg-[#F9FAFB] mt-16">
      <li class="flex items-center p-5 rounded-2xl text-center gap-20 bg-[#F9FAFB] text-[#8A92A6]">
        <div class="flex gap-3 items-center mr-44">
          <input
            class="hover:cursor-pointer w-4 h-4"
            id="default-checkbox"
            type="checkbox"
            value=""
          />
          <h1>F.I.O</h1>
          <img src="@/assets/icons/directions/down.svg" alt="" />
        </div>
        <div class="flex gap-3">
          <h1>Guruh raqami</h1>
          <img src="@/assets/icons/directions/down.svg" alt="" />
        </div>
        <div class="flex gap-3">
          <h1>Bosqich</h1>
          <img src="@/assets/icons/directions/down.svg" alt="" />
        </div>
        <div class="flex gap-3">
          <h1>Qo'shilgan sana</h1>
          <img src="@/assets/icons/directions/down.svg" alt="" />
        </div>
        <div class="flex gap-3">
          <h1>ID raqami</h1>
          <img src="@/assets/icons/directions/down.svg" alt="" />
        </div>
      </li>
      <li
        v-for="item in store.state.list"
        class="flex items-center p-6 gap-20 border border-solid border-[#EAECF0]"
      >
        <div class="flex gap-3 items-center w-[300px]">
          <input
            class="hover:cursor-pointer w-4 h-4"
            id="default-checkbox"
            type="checkbox"
            value=""
          />
          <div class="flex gap-3">
            <img class="w-12 h-12 rounded-full" :src="item.rasm" alt="img" />
            <div>
              <h1 class="text-[#101828] text-[15px] font-semibold">
                {{ item.ism }} {{ item.sharif }}
              </h1>
              <h1 class="text-[#667085] text-sm">{{ item.email }}</h1>
            </div>
          </div>
        </div>
        <div class="info text-center flex gap-32 text-[#232D42] text-[16px] font-semibold">
          <h1 class="w-7">{{ item.guruh }}</h1>
          <h1>Freelance</h1>
          <h1>{{ item.qoshilgan_sana }}</h1>
          <h1 class="w-8">{{ item.id }}</h1>
        </div>
        <div class="flex gap-5">
          <img
            @click="deleteStudent(item._id)"
            class="hover:cursor-pointer"
            src="@/assets/icons/directions/delete.svg"
            alt=""
          />
          <img
            @click="editModal(item._id)"
            class="hover:cursor-pointer"
            src="@/assets/icons/directions/edit.svg"
            alt=""
          />
        </div>
      </li>
      <li class="flex justify-between items-center p-5 text-[#344054] text-sm">
        <button
          class="px-3 py-2 border border-solid border-[#D0D5DD] rounded-lg hover:cursor-pointer hover:bg-slate-200"
        >
          Avvalgisi
        </button>
        <h1>Sahifa 1 dan 10</h1>
        <button
          class="px-3 py-2 border border-solid border-[#D0D5DD] rounded-lg hover:cursor-pointer hover:bg-slate-200"
        >
          Keyingisi
        </button>
      </li>
    </ul>

    <!-- Modal start -->
    <section>
      <form v-if="modal" @submit.prevent="addInfo">
        <div class="absolute top-28 w-[79%]">
          <div
            class="flex justify-between p-5 bg-[#4D44B5] text-[24px] font-semibold text-white py-3 pr-10 pl-10 rounded-t-3xl"
          >
            <h1>O'quvchi ma'lumotlari</h1>
            <h1 @click="closeModal" class="font-bold hover:cursor-pointer">X</h1>
          </div>
          <section class="bg-white px-9 pt-10 pb-56 rounded-b-3xl">
            <div class="flex justify-around">
              <div>
                <h1 class="text-[#303972] mb-2 text-[18px]">Ism *</h1>
                <input
                  required
                  type="text"
                  v-model="studentInfo.ism"
                  class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="Anvar"
                />
                <h1 class="text-[#303972] mb-2 text-[18px]">Tug'ilgan sana *</h1>
                <input
                  required
                  type="text"
                  v-model="studentInfo.tugilgan_sana"
                  class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[230px] h-10"
                  placeholder="24 Fevarl 2000"
                />
                <h1 class="text-[#303972] mb-2 text-[18px]">Email *</h1>
                <input
                  required
                  type="email"
                  v-model="studentInfo.email"
                  class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="anvar@gmail.com"
                />
              </div>
              <div>
                <h1 class="text-[#303972] mb-2 text-[18px]">Sharif *</h1>
                <input
                  required
                  type="text"
                  v-model="studentInfo.sharif"
                  class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="Abdullayev"
                />
                <h1 class="text-[#303972] mb-2 text-[18px]">Guruhni tanlang *</h1>
                <input
                  required
                  type="number"
                  v-model="studentInfo.guruh"
                  class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="45"
                />
                <h1 class="text-[#303972] mb-2 text-[18px]">Parol *</h1>
                <input
                  required
                  type="password"
                  v-model="studentInfo.parol"
                  class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="********"
                />
              </div>
            </div>
            <div class="flex gap-10 float-right pr-16 mt-16">
              <ModalQoshishBtn type="submit" />
            </div>
          </section>
        </div>
      </form>
    </section>
    <!-- Modal end -->
    <!-- Modal start -->
    <section>
      <form v-if="isEdit" @submit.prevent="editStudent">
        <div class="absolute top-28 w-[79%]">
          <div
            class="flex justify-between p-5 bg-[#4D44B5] text-[24px] font-semibold text-white py-3 pr-10 pl-10 rounded-t-3xl"
          >
            <h1>O'quvchi ma'lumotlari</h1>
            <h1 @click="editModal" class="font-bold hover:cursor-pointer">X</h1>
          </div>
          <section class="bg-white px-9 pt-10 pb-56 rounded-b-3xl">
            <div class="flex justify-around">
              <div>
                <h1 class="text-[#303972] mb-2 text-[18px]">Ism *</h1>
                <input
                  required
                  type="text"
                  v-model="studentInfo.ism"
                  class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="Anvar"
                />
                <h1 class="text-[#303972] mb-2 text-[18px]">Tug'ilgan sana *</h1>
                <input
                  required
                  type="text"
                  v-model="studentInfo.tugilgan_sana"
                  class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[230px] h-10"
                  placeholder="24 Fevarl 2000"
                />
                <h1 class="text-[#303972] mb-2 text-[18px]">Email *</h1>
                <input
                  required
                  type="email"
                  v-model="studentInfo.email"
                  class="border mb-8 outline-none focus:outline-1 focus:outline-gray-400 border-[#C1BBEB] rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="anvar@gmail.com"
                />
              </div>
              <div>
                <h1 class="text-[#303972] mb-2 text-[18px]">Sharif *</h1>
                <input
                  required
                  type="text"
                  v-model="studentInfo.sharif"
                  class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="Abdullayev"
                />
                <h1 class="text-[#303972] mb-2 text-[18px]">Guruhni tanlang *</h1>
                <input
                  required
                  type="number"
                  v-model="studentInfo.guruh"
                  class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="45"
                />
                <h1 class="text-[#303972] mb-2 text-[18px]">Parol *</h1>
                <input
                  required
                  type="password"
                  v-model="studentInfo.parol"
                  class="border border-[#C1BBEB] mb-8 outline-none focus:outline-1 focus:outline-gray-400 rounded-md pl-5 border-solid w-[400px] h-10"
                  placeholder="********"
                />
              </div>
            </div>
            <div class="flex gap-10 float-right pr-16 mt-16">
              <SaqlashBtn type="submit" />
            </div>
          </section>
        </div>
      </form>
    </section>
    <!-- Modal end -->
  </main>
</template>
<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import Izlash from '@/components/Buttons/Izlash.vue'
import QoshishBtn from '@/components/Buttons/QoshishBtn.vue'
import SaqlashBtn from '@/components/Modal/SaqlashBtn.vue'
import ModalQoshishBtn from "@/components/Modal/Qo'shishBtn.vue"
import { ref, reactive } from 'vue'
import { studentStore } from '@/stores/Students/Students'
const store = studentStore()

const modal = ref(false)
const closeModal = () => {
  modal.value = !modal.value
}

const studentInfo = reactive({
  _id: null,
  id: null,
  ism: '',
  sharif: '',
  guruh: null,
  rasm: '',
  tugilgan_sana: '',
  email: '',
  parol: '',
  qoshilgan_sana: null
})

const addInfo = () => {
  const student = {
    _id: Date.now(),
    id: store.state.list[0].id + 1,
    ism: studentInfo.ism,
    sharif: studentInfo.sharif,
    guruh: studentInfo.guruh,
    rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
    tugilgan_sana: studentInfo.tugilgan_sana,
    email: studentInfo.email,
    parol: studentInfo.parol,
    qoshilgan_sana: Date().slice(4, 15)
  }
  store.newStudent(student)
  studentInfo._id = null
  studentInfo.id = null
  studentInfo.ism = ''
  studentInfo.sharif = ''
  studentInfo.guruh = null
  studentInfo.rasm = ''
  studentInfo.tugilgan_sana = ''
  studentInfo.email = ''
  studentInfo.parol = ''
  studentInfo.qoshilgan_sana = null
  closeModal()
}

const isEdit = ref(false)
const editModal = (id) => {
  if (id) {
    localStorage.setItem('id', id)
  }
  isEdit.value = !isEdit.value
}
const editStudent = () => {
  let edit_id = localStorage.getItem('id')
  const student = {
    id: store.state.list[0].id + 1,
    ism: studentInfo.ism,
    sharif: studentInfo.sharif,
    guruh: studentInfo.guruh,
    rasm: 'http://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
    tugilgan_sana: studentInfo.tugilgan_sana,
    email: studentInfo.email,
    parol: studentInfo.parol,
    qoshilgan_sana: Date().slice(4, 15)
  }
  store.editStudent(student, edit_id)
  studentInfo._id = null
  studentInfo.id = null
  studentInfo.ism = ''
  studentInfo.sharif = ''
  studentInfo.guruh = null
  studentInfo.rasm = ''
  studentInfo.tugilgan_sana = ''
  studentInfo.email = ''
  studentInfo.parol = ''
  studentInfo.qoshilgan_sana = null
  editModal()
}

const deleteStudent = (id) => {
  store.removeStudent(id)
}
</script>
<style scoped>
.info {
  font-family: 'Abhaya Libre';
}
</style>
