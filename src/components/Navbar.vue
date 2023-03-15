<script setup>
const logo = 'img/Logo.png'
const profile = 'img/image4.png'
defineEmits(['change'])
</script>

<template>
  <div class="navbar w-full bg-yellow-500 flex justify-center">
    <div class="grid grid-cols-6 gap-4 w-4/6">
      <div class="flex-1 w-9/12">
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
            <input type="text" placeholder="Search" class="input input-bordered" @input="$emit('change',$event)"/>
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