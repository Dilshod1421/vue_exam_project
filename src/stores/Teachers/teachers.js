import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const teacherStore = defineStore('teacher', () => {
  const state = reactive({
    list: [
      {
        _id: Date.now(),
        id: 123456780,
        ism: 'Anvar',
        sharif: 'Abdullayev',
        fan: 'Dasturlash',
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '2 Fevral 1994',
        login: 'anvar',
        parol: 'anvar1994',
        malumot: '2016-yilda axborot xavfsilzigi fakultetini tamomlagan...'
      },
      {
        _id: Date.now(),
        id: 123456781,
        ism: 'Anvar',
        sharif: 'Abdullayev',
        fan: 'Dasturlash',
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '2 Fevral 1994',
        login: 'anvar',
        parol: 'anvar1994',
        malumot: '2016-yilda axborot xavfsilzigi fakultetini tamomlagan...'
      },
      {
        _id: Date.now(),
        id: 123456782,
        ism: 'Anvar',
        sharif: 'Abdullayev',
        fan: 'Dasturlash',
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '2 Fevral 1994',
        login: 'anvar',
        parol: 'anvar1994',
        malumot: '2016-yilda axborot xavfsilzigi fakultetini tamomlagan...'
      },
      {
        _id: Date.now(),
        id: 123456783,
        ism: 'Anvar',
        sharif: 'Abdullayev',
        fan: 'Dasturlash',
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '2 Fevral 1994',
        login: 'anvar',
        parol: 'anvar1994',
        malumot: '2016-yilda axborot xavfsilzigi fakultetini tamomlagan...'
      },
      {
        _id: Date.now(),
        id: 123456784,
        ism: 'Anvar',
        sharif: 'Abdullayev',
        fan: 'Dasturlash',
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '2 Fevral 1994',
        login: 'anvar',
        parol: 'anvar1994',
        malumot: '2016-yilda axborot xavfsilzigi fakultetini tamomlagan...'
      }
    ]
  })

  const newTeacher = (teacher) => {
    console.log(teacher)
    state.list.push(teacher)
  }

  const editTeacher = (teacher, id) => {
    for (let i in state.list) {
      if (state.list[i]._id == id) {
        state.list[i] = teacher
      }
    }
  }

  return { state, newTeacher, editTeacher }
})
