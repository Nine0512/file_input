<script setup>


const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
defineEmits(['update:title'])

</script>

<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">{{ title }}</span>
    </label>
    <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" placeholder="Type here" class="input input-bordered w-full max-w-xs"/>
  </div>
</template>