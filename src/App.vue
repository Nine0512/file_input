<script setup>
import {ref} from "vue";
import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <div data-theme="garden">
    <navbar />
    <router-view></router-view>
  </div>

</template>

<style scoped>
* {
  font-family: 'Sarabun', sans-serif;
}
</style>