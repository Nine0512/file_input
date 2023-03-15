<script setup>
import {computed, ref} from "vue";
import {getImg} from "@/composable/fetch";
import router from "@/router";

const logo = 'img/Logo.png'
const profile = 'img/image4.png'

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

let searchChoice = computed(() => {
  if (search.value === '') {
    return []
  }else {
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

getInfo()
</script>

<template>
  <div class="navbar w-full bg-yellow-500 flex justify-center">
    <div class="grid grid-cols-6 gap-4 w-4/6">
      <div class="flex-1 w-9/12 cursor-pointer" @click="router.push('/')">
        <img :src="logo" alt="logo">
      </div>
      <div class="col-span-3 grid grid-cols-4 place-items-center">
        <router-link to="/" class="font-bold">Home</router-link>
        <router-link to="#" class="font-bold">Category</router-link>
        <router-link to="#" class="font-bold">Highlight</router-link>
        <router-link to="/all" class="font-bold">All Book</router-link>
      </div>
      <div class="col-span-2 flex justify-end">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered" v-model="search"/>
          <div v-if="searchChoice.length" class="absolute bg-white p-4 rounded-xl w-2/12 max-h-36 mt-10 overflow-y-scroll z-50">
            <ul v-for="item in searchChoice" :key="item.id">
              <li class="p-2 rounded-md cursor-pointer hover:bg-blue-100" @click="selectBook(item.id)">{{ item.title }}</li>
              <hr>
            </ul>
          </div>
        </div>
        <div class="dropdown dropdown-end pl-5">
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
      </div>
    </div>
  </div>
</template>