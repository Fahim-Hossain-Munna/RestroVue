<template >
    <div>
        <h1>yes im home</h1>
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
    }
}
</script>
<style lang="">
    
</style>