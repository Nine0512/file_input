<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})


</script>

<template>

  <div class="card w-full">
    <router-link :to="{name:'book' , params:{id:props.id}}">
      <figure class="h-48 overflow-hidden"><img :src="img" :alt="title" class="h-full"/></figure>
      <div class="p-4 h-48">
        <h2 class="text-lg">{{ title }}</h2>
        <h3 class="text-sm">{{ author }}</h3>
        <div class="card-actions justify-end">
          <div v-for="(item,index) in category" :key="index">
            <div class="badge badge-outline">{{ item }}</div>
          </div>
        </div>
        <button class="w-full rounded-xl bg-yellow-500 text-black mt-2">{{ price }} Baht</button>
      </div>
    </router-link>
  </div>

</template>