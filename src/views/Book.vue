<script setup>

import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import book from '../book/Ore no Imouto ga Konna ni Kawaii Wake ga Nai Ayase IF.pdf'
import {getImgById, deleteImg} from "@/composable/fetch";

const bookIcon = '/icon/book.svg'
const calendarIcon = '/icon/calendar.svg'
const globeIcon = '/icon/globe.svg'
const publisherIcon = '/icon/publisher.svg'


let pageImg = ref()
const route = useRoute()
let id = route.params.id

watch(() => route.params.id, () => {
  id = route.params.id
  renderImg()
})

const renderImg = async () => {
  const img = await getImgById(id)
  pageImg.value = img
}

renderImg()

</script>

<template>
  <div class="w-full min-h-screen flex justify-center text-black">
    <div class="w-full lg:w-4/6 lg:grid lg:grid-cols-6 gap-4 mx-5 my-2 mt-10">
      <div class="col-span-6 grid grid-cols-6 gap-4">
        <div class="col-span-2 w-full">
          <img :src="pageImg?.imageBase64" class="w-full object-cover">
        </div>
        <div class="col-span-4 grid grid-cols-2 px-5">
          <div class="my-5">
            <h1 class="text-4xl font-bold mb-5">{{ pageImg?.title }}</h1>
            <p class="text-lg">Author : {{ pageImg?.author }}</p>
            <p class="text-lg">Category :
              {{ pageImg?.category.length > 1 ? pageImg?.category.join(',') : pageImg?.category.join('') }}</p>
            <p class="text-lg">Latest Update : {{ pageImg?.date }}</p>
          </div>
          <div class="flex-col justify-self-end h-full">
            <div class="place-items-center grid h-full">
              <p class="text-4xl text-orange-500 font-bold">{{ pageImg?.price }} Baht</p>
              <button class="btn rounded-full w-full">Buy now</button>
            </div>
          </div>
          <div class="col-span-2 w-full grid place-content-center mb-5">
            <div class="flex w-5/6 justify-items-center w-full p-2 border-y border-neutral-400 border-solid">
              <div class="flex flex-col px-10 place-items-center">
                <p class="text-xs">Print Length</p>
                <img :src="bookIcon" class="w-8 h-8 my-2">
                <p class="text-xs">{{ pageImg?.printLength }} pages</p>
              </div>
              <div class="flex flex-col px-10 place-items-center">
                <p class="text-xs">Language</p>
                <img :src="globeIcon" class="w-8 h-8 my-2">
                <p class="text-xs">{{ pageImg?.language }}</p>
              </div>
              <div class="flex flex-col px-10 place-items-center">
                <p class="text-xs">Publisher</p>
                <img :src="publisherIcon" class="w-8 h-8 my-2">
                <p class="text-xs">{{ pageImg?.publisher }}</p>
              </div>
              <div class="flex flex-col px-10 place-items-center">
                <p class="text-xs">Publication Date</p>
                <img :src="calendarIcon" class="w-8 h-8 my-2">
                <p class="text-xs">{{ pageImg?.publishedDate }}</p>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <h1 class="text-lg font-semibold">Promotion</h1>
            <ul class="list-disc pl-5">
              <li>Limited-time Discount: Offer a limited-time discount on the book, reducing the price by 25%.</li>
              <li>Limited-time Discount: Offer a limited-time discount on the book, reducing the price by 25%.</li>
              <li>Limited-time Discount: Offer a limited-time discount on the book, reducing the price by 25%.</li>
              <li>Limited-time Discount: Offer a limited-time discount on the book, reducing the price by 25%.</li>
            </ul>
          </div>
        </div>

      </div>
      <div class="col-span-6">
        <div class="lg:col-span-6">
          <h1 class="text-2xl font-bold">Description : {{ pageImg?.title }}</h1>
          <p class="text-lg my-4 text-justify">&nbsp;&nbsp;&nbsp;&nbsp;{{ pageImg?.description }}</p>
        </div>
      </div>
      <div class="col-span-6">
        <a :href="book" class="btn" target="_blank">Download</a>
      </div>
      <div class="col-span-6 flex justify-end my-5">
        <router-link :to="'/manage/update/' + pageImg?.id" class="btn ml-2">Update</router-link>
        <label for="my-modal-6" class="btn ml-2">Delete</label>
        <input type="checkbox" id="my-modal-6" class="modal-toggle"/>
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Are you sure!</h3>
            <p class="py-4">You won't be able to revert this!</p>
            <div class="modal-action">
              <a href="/" class="btn btn-error" @click="deleteImg(pageImg?.id)">Delete</a>
              <label for="my-modal-6" class="btn">Cancel</label>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>