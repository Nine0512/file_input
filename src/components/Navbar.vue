<script setup>

import {computed, onMounted, ref} from "vue";
import {getImg} from "@/composable/fetch";
import router from "@/router";

const logo = '/images/Logo.png'
const profile = '/images/image4.png'

let search = ref('')
let infoArr = ref([])

const getInfo = async () => {
  const res = await getImg()
  res.forEach(item => {
    let infoObj = {
      id: item.id,
      title: item.title
    }
    infoArr.value.push(infoObj)
  })
}

onMounted(() => {
  getInfo()
})

let searchChoice = computed(() => {
  if (search.value === '') {
    return []
  } else {
    return infoArr.value.filter(item => {
      if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
        return item.title
      }
    })
  }
})

let selectBook = (id) => {
  search.value = ''
  router.push({name: 'book', params: {id: id}})
}

let selectSearch = (value) => {
  search.value = ''
  router.push({name: 'bookLike', params: {name: value}})
}

</script>

<template>
  <div class="navbar w-full bg-yellow-500 flex justify-center">
    <div class="grid grid-cols-3 mx-5 lg:grid-cols-6 gap-4 w-full lg:w-4/6">
      <div class="flex-1 w-full md:w-5/12 lg:w-9/12 cursor-pointer" @click="router.push('/')">
        <img :src="logo" alt="logo">
      </div>
      <div class="col-span-3 max-xl:hidden grid grid-cols-4 place-items-center font-bold">
        <router-link to="/">Home</router-link>
        <router-link to="#">Category</router-link>
        <router-link to="#">Highlight</router-link>
        <router-link to="/all">All Book</router-link>
      </div>
      <div class="col-span-2 grid grid-cols-4 lg:grid-cols-3 place-items-center">
        <div class="form-control col-span-2 lg:col-span-2">
          <input type="text" placeholder="Search" class="input input-bordered w-11/12 h-8" v-model="search" @keydown.enter="selectSearch(search)"/>
          <div v-if="searchChoice.length"
               class="absolute bg-base-100 p-4 rounded-xl lg:w-2/12 max-h-36 mt-10 overflow-y-scroll z-50">
            <ul v-for="item in searchChoice" :key="item.id">
              <li class="p-2 rounded-md cursor-pointer hover:bg-blue-100" @click="selectBook(item.id)">{{
                  item.title
                }}
              </li>
              <hr>
            </ul>
          </div>
        </div>
        <div class="dropdown dropdown-end pl-1 lg:pl-5">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img :src="profile"/>
            </div>
          </label>
          <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <div class="dropdown dropdown-end w-5/12 lg:hidden">
          <label tabindex="0" class="font-bold m-1">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
                <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
                <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"></path>
              </g>
            </svg>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/">Category</router-link>
            </li>
            <li>
              <router-link to="/">Highlight</router-link>
            </li>
            <li>
              <router-link to="/all">All Book</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>