<script setup>
import { ref } from 'vue';
import Child from './Child.vue';
let mess = ref("by")
let mess2 = ref("Safe Props")
function handler(news){
  mess.value = news
}
</script>
<template>
  <Child  v-on:change="handler" v-bind:tex="mess2" />
<h1>{{mess}}</h1>


</template>
