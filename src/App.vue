<script setup>
import { ref } from 'vue';

  const num = ref(0)

  function Increasement(){
    return num.value ++
  }
  function Decreasement(){
    if(num.value !== 0 ){

      return num.value --
    }
  }
  const data =ref({id:1,name:"ahmad",age:34})
  const username = ref("")
</script>

<template>
  <div>
    <input class="rounded-2xl ring-4 ring-blue-600" type="text" v-model="username"/>
    <p>{{username}}</p>
    <div>
      <ul>
        <li  v-for="(value,key) in data" v-bind:key="key">{{key}} - {{value}}</li>
      </ul>
    </div>
    <form  class="flex flex-col justify-center items-center w-full h-screen">
      <button @click.prevent="Increasement" class="bg-blue-600 p-2 rounded-2xl">Increase</button>
      <p  class="my-5 px-2 rounded-2xl ring-2 ring-blue-500 text-center">{{num}}</p>
      <button @click.prevent="Decreasement" class="bg-blue-600 p-2 rounded-2xl">Decrease</button>

    </form>
  </div>
</template>

<style scoped>

</style>
