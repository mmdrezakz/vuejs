import { ref } from 'vue';


  const username = ref("")
  const email = ref("")
  const Users = ref([])

   function Submithandler(){

    Users.value.push({name:username.value,emailn:email.value})
    email.value = ""
    username.value = ""

  }

  export {Submithandler,Users,email,username}
