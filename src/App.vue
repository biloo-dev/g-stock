<style>
 textarea {
 overflow: hidden !important;
}
</style>
<template >
    <v-app style="background: transparent !important;"> 
        <router-view></router-view> 
    </v-app>
</template>

<script>
 
export default {
    name: "App",

    
    data: () => ({
        //
    }),
};
</script>
