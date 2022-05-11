<template>
<div id="app">
<b-form-input v-model="Uppercase_letters" placeholder="Enter lowercase letters" required></b-form-input><br><br>
<b-button @click=fun() >Click</b-button><br><br>
<b-form-input v-model="res" placeholder="Uppercase" required></b-form-input>
</div>
</template>
<script>
export default {
       name: "Question6AA",
       data() {
         return{
           Uppercase_letters:"",
           res:""
         }
        },
  watch: {
     Uppercase_letters:{
        handler(newvalue, oldvalue) {
          console.log("newvalue:",newvalue);
          console.log("oldvalue:",oldvalue);
        }
     },
  },
   methods:{
     fun(){
      this.res = this.Uppercase_letters.toUpperCase();
     },
   }
}
</script>




