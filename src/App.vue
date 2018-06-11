<template>
    <div>
        <div id="app">
            <div id="description">
                <div>
                    <h1>Login</h1>
                    <p>By logging in, you agree to the ridiculously long terms that you didn't bother to read.</p>
                </div>
            </div>
            <div id="login">
                <div class="wrapper">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter email" v-model="email">
                </div>
                <div class="wrapper">
                    <div class="holder">
                        <label for="password">Password</label>
                        <div v-on:click="showPassword = true" v-show="showPassword === false"><i class="fas fa-eye"></i></div>
                        <div v-show="showPassword === true" v-on:click="showPassword = false"><i class="fas fa-eye-slash"></i></div>
                    </div>
                    <input class="password" type="password" placeholder="Enter password" v-model="password" v-show="showPassword === false">
                    <input class="password" type="text" placeholder="Enter password" v-model="password" v-show="showPassword === true">
                </div>
                <div id="button" v-on:click="validateCredentials"><span>Log in</span></div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
      name: 'Login',
      data() {
            return {
              showPassword: false,
              email: "",
              password: ""
            }
        },
        
        methods: {
            validateCredentials: function () {
                if (this.email.indexOf("@") < 1 || this.email.indexOf(".") < 1 || this.email == "") {
                    alert("Invalid email. Email must contain '@' and '.' and must not be empty");
                    return false;
                }
                
                if (this.password == "") {
                    alert("Password is required");
                    return false;
                } else {
                    this.$router.push({ path: '/cars' });
                    document.getElementById("app").style.display = "none";

                } 
            }
        }
    }

</script>

<style>

body {
    margin: 0;
    padding: 0;
    background-color: #DFE0E3;
    font-family: Arial, Helvetica, sans-serif;
}

#app {
    width: 900px;
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#description {
    width: 280px;
    height: 180px;
    background-color: white;
    display: flex;
    flex-direction: column;
}

#description div {
    width: 80%;
    margin-left: 30px;
    margin-top: 10px;
}

#description p {
    color: #9AA2A3;
}

#login {
    width: 260px;
    height: 240px;
    background-color: #32475C;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#login label {
    color: #92A1AB;
    margin-bottom: 5px;
    margin-right: 8px;
}

#login input {
    margin-bottom: 20px;
}

input[type="text"], input[type="password"] {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 15px;
}

.holder {
    width: 100%;
    display: flex;
    justify-content: left;
}

.password {
    margin-top: 5px;
}

#button {
    background-color: white;
    color: black;
    width: 195px;
    height: 41px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

#button:hover {
    cursor: pointer;
}

svg:hover {
    cursor: pointer;
}

</style>
