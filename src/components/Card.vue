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

  <div class="card w-full my-4">
    <router-link :to="{name:'book' , params:{id:props.id}}">
      <figure class="h-full overflow-hidden"><img :src="img" :alt="title" class="w-full"/></figure>
      <div class="py-4 h-40">
        <div class="h-full">
          <h2 class="text-base">{{ title }}</h2>
          <h3 class="text-sm">{{ author }}</h3>
          <h3 class="text-sm">{{ category.join(',') }}</h3>
        </div>
      </div>
    </router-link>
    <div class="grid place-items-center">
      <button class="w-full lg:w-11/12 py-0.5 rounded-xl bg-yellow-500 text-sm lg:text-black mb-4">{{ price }} Baht</button>
    </div>
  </div>

</template>

<style scoped>

</style>