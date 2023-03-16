<script setup>
import {onMounted, ref} from 'vue'
import Card from '../components/Card.vue'
import InputModal from '../components/InputModal.vue'
import Carousel from "@/components/Carousel.vue"
import {getImg} from '@/composable/fetch.js'

let imgArr = ref([])

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

onMounted((() => {
  renderImg()
}))

</script>

<template>
  <div class="w-full min-h-screen flex justify-center">
    <div class="w-full lg:w-4/6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div class="col-span-2 md:col-span-4 lg:col-span-6">
        <Carousel/>
      </div>
      <div v-for="item in imgArr" :key="item.id" class="mx-5 lg:mx-0">
        <Card :item="item"/>
      </div>
      <div class="col-span-2 md:col-span-4 lg:col-span-6 flex justify-end">
        <InputModal/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>