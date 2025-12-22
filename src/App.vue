<script setup>
import { reactive, ref } from 'vue';

  const Name = ref("Mohammadreza")
  const User = reactive({
    firstName:"Mohammadreza",
    lastName : "Kazemi"
  })
  let urlImage = "https://static.vecteezy.com/system/browse_category/image/50/large_Backgrounds_cb1.jpg"
  let toggleColor = ref(false)
  let search = ref("")
  let isChecked = ref(false)
</script>

<template>
  <header>
    <h1 class="text-5xl">Hello Vue Js  : {{Name}}</h1>
    <input class="bg-black shadow-blue-700 shadow-sm my-5 px-2 rounded-sm ring-4 ring-blue-700 text-white" v-if="isChecked" type="text" placeholder="Search ..." v-model="search"/>
    <div v-else>Please Click Checkbox to Show SerchInput</div>
    <div>{{ search}}</div>
    <input type="checkbox" v-model="isChecked" />
    <div>{{isChecked ? "Active": "Not Active"}}</div>
    <div class="img-container">
      <img id="img-1" v-bind:src="urlImage"/>

    </div>
  </header>
  <p v-bind:style="{background:'orange',textAlign:'center',padding:'2rem'}">Style</p>
  <p class="div-red">Style</p>

  <h2 v-bind:class="toggleColor?'div-blue':'div-red'">hey ,{{User.firstName}}{{User.lastName}} Im here to help!</h2>
  <h3 v-bind:style="!toggleColor && {backgroundColor :'red'}">hey ,{{User.firstName}}{{User.lastName}} Im here to help!</h3>

</template>

<style scoped>
h1{
  background-color: rgb(37, 6, 6);
  color: rgb(255, 255, 255);
  padding: 2rem;
  border-radius: 40px;
  text-align: center;
}
.div-red{
  text-align: center;
  color: rgb(255, 0, 0);
}
.div-blue{
  text-align: center;
  color: rgb(72, 1, 236);
}
.img-container{
  display: flex;
  justify-content: center;

}
#img-1{
  width: 400px;
  height: 400px;
  object-position: center;
  border-radius: 40px;

}
</style>
