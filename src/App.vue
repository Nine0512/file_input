<script setup>
import {ref} from "vue";
import Navbar from "@/components/Navbar.vue";


let inputSearch = ref('')

const inputValue = (e) =>{
  inputSearch.value = e.target.value
}

</script>

<template>
  <div data-theme="garden">
    <navbar @change="inputValue($event)" />
    <router-view></router-view>
  </div>

</template>

<style scoped>
* {
  font-family: 'Sarabun', sans-serif;
}
</style>