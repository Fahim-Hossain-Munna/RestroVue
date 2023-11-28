<template >
    <div>
        <h1>yes im home</h1>
        <button v-on:click="logout" >Logout</button>
    </div>
</template>
<script>
export default {
    name: "Home",
    mounted(){
        let user = localStorage.getItem('user-info')

        if(!user){
            this.$router.push({ name : "signUp" }); 
        }
    },
    methods:{
        logout(){
            localStorage.removeItem('user-info')
            this.$router.push({ name : "signUp" }); 
        }
    }
}
</script>
<style lang="">
    
</style>