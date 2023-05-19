import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const studentStore = defineStore('student', () => {
  const state = reactive({
    list: [
      {
        _id: 4147347,
        id: 1234,
        ism: 'Murod',
        sharif: 'Nurmatov',
        guruh: 89,
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '14 mart 2000',
        email: 'murod@gmail.com',
        parol: 'murod2000',
        qoshilgan_sana: Date().slice(4, 15)
      },
      {
        _id: 4147327,
        id: 1235,
        ism: 'Murod',
        sharif: 'Nurmatov',
        guruh: 89,
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '14 mart 2000',
        email: 'murod@gmail.com',
        parol: 'murod2000',
        qoshilgan_sana: Date().slice(4, 15)
      },
      {
        _id: 4141347,
        id: 1236,
        ism: 'Murod',
        sharif: 'Nurmatov',
        guruh: 89,
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '14 mart 2000',
        email: 'murod@gmail.com',
        parol: 'murod2000',
        qoshilgan_sana: Date().slice(4, 15)
      },
      {
        _id: 4107347,
        id: 1237,
        ism: 'Murod',
        sharif: 'Nurmatov',
        guruh: 89,
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '14 mart 2000',
        email: 'murod@gmail.com',
        parol: 'murod2000',
        qoshilgan_sana: Date().slice(4, 15)
      },
      {
        _id: 4197347,
        id: 1238,
        ism: 'Murod',
        sharif: 'Nurmatov',
        guruh: 89,
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '14 mart 2000',
        email: 'murod@gmail.com',
        parol: 'murod2000',
        qoshilgan_sana: Date().slice(4, 15)
      },
      {
        _id: 4147347,
        id: 1239,
        ism: 'Murod',
        sharif: 'Nurmatov',
        guruh: 89,
        rasm: 'https://d29zunrt9sid73.cloudfront.net/speaker_media/asset/39036/large_70_tyler-2.jpg',
        tugilgan_sana: '14 mart 2000',
        email: 'murod@gmail.com',
        parol: 'murod2000',
        qoshilgan_sana: Date().slice(4, 15)
      }
    ]
  })
  const newStudent = (student) => {
    state.list.push(student)
  }

  const editStudent = (student, id) => {
    for (let i in state.list) {
      if (state.list[i]._id == id) {
        state.list[i] = student
      }
    }
  }

  const removeStudent = (id) => {
    for (let i in state.list) {
      if (state.list[i]._id == id) {
        state.list.splice(i, 1)
      }
    }
  }

  return { state, newStudent, editStudent, removeStudent }
})
