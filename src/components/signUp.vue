<template>
<div>
    <div class="main">
        <div class="left">
            <h2>Welcome To <span>Chatt.</span></h2>
            <h3>Sign Up</h3>
            <div class="form">
                <label>First Name</label>
                <input type="text" placeholder="Name here" v-model="name" />
                <div class="error" v-if="name == '' ">
                    <p>{{ error.nameError }}</p>
                </div>
                <label>Email</label>
                <input type="email" placeholder="Email here" v-model="email" />
                <div class="error" v-if="email == '' ">
                    <p>{{ error.emailError }}</p>
                </div>
                <label>Password</label>
                <input type="password" placeholder="Password here" v-model="password" />
                <div class="error" v-if="password == '' ">
                    <p>{{ error.passwordError }}</p>
                </div>
                <button v-on:click="signUp"><span>Sign Up</span></button>
            </div>
        </div>
        <div class="right">
            <img src="../assets/images/signup/signup.png" />
            <div class="overlay"></div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import HomeVue from './Home.vue';
export default {
    name: "signUp",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            error: {
                nameError: "",
                emailError: "",
                passwordError: "",
            },
        };
    },
    methods: {
       async signUp() {

            if (this.name === "" && this.email === "" && this.password === "") {
                this.error.nameError = "name field can't be null";
                this.error.emailError = "email field can't be null";
                this.error.passwordError = "password field can't be null";
            } else {
                if (this.name === "") {
                    this.error.nameError = "name field can't be null";

                } else if (this.email === "") {
                    this.error.emailError = "email field can't be null";
                } else if (this.password === "") {
                    this.error.passwordError = "password field can't be null";
                } else {
                    this.error = "";
                  let submit = await axios.post('http://localhost:8000/api/users',{
                        'name' : this.name,
                        'email' : this.email,
                        'password' : this.password
                    });
                    if(submit.status == 200){
                        alert('information submit successfull')
                        this.$router.push({ name : "Home" });
                    }else{
                        alert('information submit unsuccessfull')
                    }
                }
            }
        },
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
    display: flex;
    box-sizing: border-box;
}

.left {
    box-sizing: border-box;
    width: 40%;
    margin-top: 269px;
    margin-left: 100px;
}

.left h2 {
    color: var(--primary-100, #32375c);
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.left h2 span {
    font-size: 45px;
}

.left h3 {
    margin-top: 24px;
    margin-bottom: 24px;
    color: var(--dark-100, #222);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.left .form label {
    display: block;
    color: var(--dark-100, #222);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 16px;
}

.left .form input {
    padding-left: 14px;
    width: 492px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid var(--dark-20, #d3d3d3);
    background: var(--white-white, #fff);
    margin-bottom: 16px;
}

.left .form button {
    margin-top: 40px;
    display: inline-flex;
    padding: 12px 213px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background: #32375c;
    border: none;
}

.left .form button span {
    color: var(--white-white, #fff);
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

/* .left .error {
  display: none;
} */
.left .error p {
    color: var(--dark-100, #be3144);
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 16px;
}

.right {
    width: 60%;
    position: relative;
}

.right img {
    width: 100%;
    height: 100%;
    display: block;
}

.right .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(217, 217, 217, 1) 0%,
            rgba(50, 55, 92, 1) 73%);
    opacity: 0.3;
}
</style>
