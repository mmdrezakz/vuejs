<script setup>
 import { reactive, watch, watchEffect } from 'vue';
import{Submithandler,Users,email,username} from './Loginstate'

 const Numbers = reactive(
 [
   {num:1,text:"yek"},
   {num:2,text:"do"},
   {num:3,text:"se"},
   {num:4,text:"char"},
   {num:5,text:"pang"},
   {num:6,text:"shish"},
])


watchEffect(()=>{
  console.log(username.value);
  console.log(email.value);


})
</script>

<template class="bg-amber-100 w-full h-screen">
  <div class="flex justify-center items-center m-auto w-full h-[80vh]" >
    <form @submit.prevent="Submithandler" class="flex flex-col justify-center items-center bg-purple-200 p-10 rounded-2xl w-fit" >
      <div class="flex justify-center gap-3 my-2">
        <label class="w-24">UserName</label>
        <input class="bg-white mx-4 px-2 rounded-2xl" type="text" placeholder="UserName" v-model="username"/>
      </div>
      <div class="flex justify-center gap-3 my-2">
        <label class="w-24">Email</label>
        <input class="bg-white mx-4 px-2 rounded-2xl" type="text" placeholder="Email" v-model="email"/>
      </div>
      <div class="w-full">

        <button  v-if="username && email ? true : false" class="bg-blue-400 my-2 px-3 py-1 rounded-2xl">Send</button>
        <p class="bg-white my-2 px-2 py-1 rounded-2xl" v-else>Please Enter username and email .</p>
      </div>
      <div>
        <ul v-show="Users.length > 0">
          <h2>Users :</h2>
          <li  v-for="user in Users" v-bind:key="user">{{user.name}} --- {{user.emailn}}</li>
        </ul>
      </div>
    </form>
  </div>
  <ul class="flex justify-center items-center gap-3">
    <li class="p-4" v-for="Number in Numbers" v-bind:key="Number.num">num :{{Number.num}} text : {{Number.text}}</li>
  </ul>
</template>

<style scoped>

</style>
