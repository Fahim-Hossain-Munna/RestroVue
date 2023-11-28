<template>
<div>
    <nav>
        <div class="container">
            <div class="menu">
                <div class="logo">
                    <img src="../assets/images/banner/logo.png">
                </div>
                <div class="item">
                    <ul>
                        <li>
                            <span>
                                <router-link to="/home" class="route">Home</router-link>
                            </span>
                        </li>
                        <li>
                            <span>
                                <router-link to="/list" class="route">Show Restro List</router-link>
                            </span>
                        </li>
                        <li>Home</li>
                        <li v-on:click="logout">Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: "Header",
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
    },
}
</script>

<style scoped>

nav{
    background: #000000;
}
.menu {
    display: flex;
    padding: 25px 0px;
}

.menu .logo{
    width: 25%;
}
.menu .item{
    width: 75%;
}

.menu ul{
    display: flex;
    justify-content: end;
    gap: 24px;
    color: #fff;
    align-items: center;
    margin: 15px 0px;
}
.menu li{
    font-size: 20px;
    font-weight: 600;
}

.menu li .route{
    color: #fff !important;
}

</style>
