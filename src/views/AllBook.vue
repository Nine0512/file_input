<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import Card from '../components/Card.vue'
import { getImg } from '@/composable/fetch.js'

let imgArr = ref([])
const route = useRoute()
let name = route.params.name

const renderImg = async () => {
  const img = await getImg()
  img.forEach(item => {
    let imgObj = {
      id: item.id,
      imageBase64: item.imageBase64,
      title: item.title,
      author: item.author,
      price: item.price,
      date: item.date,
      category: item.category
    }
    imgArr.value.push(imgObj)
  })
}
renderImg()

</script>

<template>

    <div class="w-full min-h-screen flex justify-center">
      <div class="w-4/6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-2">
        <div v-for="item in imgArr" :key="item.id">
          <Card :item="item"/>
        </div>
      </div>
    </div>

</template>