<template>
  <v-container>
     
  </v-container>
</template>

<script>
export default {
 props: {
  id: String
 },
 data() {
  return {
   
  }
 },
 computed:{ 
 },
 methods: {
  
 },
 async created(){
  await this.$store.dispatch('getSettings')
 }
}
</script>

<style>

</style>