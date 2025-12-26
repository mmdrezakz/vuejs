<script setup>
  let emit = defineEmits(['change'])
  defineProps(['tex'])
</script>
<template>
  <h1>{{tex}}</h1>
  <button @click="emit('change','Hello')" class="bg-gray-500">Click me</button>
</template>
