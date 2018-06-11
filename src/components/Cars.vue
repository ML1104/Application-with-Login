<template>
    <div id="container" :class="{ darkmode: darkmode }">
        <div id="card" v-for="card in cards" v-bind:key="card.img" :class="{ darkened: darkmode }">
            <img :src="card.img" alt="car image">
            <h2>{{ card.brand }}</h2>
            <h4>{{ card.model }}</h4>
            <p>{{ card.description }}</p>
        </div>
        <div class="wrapper" :class="{ darkened: darkmode }">
            <div>Dark Mode:</div>
            <div @click="toggleDarkMode" v-show="darkmode === false"><i class="fas fa-toggle-on switches"></i></div>
            <div @click="toggleDarkMode" v-show="darkmode === true"><i class="fas fa-toggle-off switches"></i></div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Cars',

    data() {
        return {
            cards: [],
            darkmode: false
        }
    },

    methods: {
        toggleDarkMode() {
            if (this.darkmode === false) {
                this.darkmode = true;
            }

            else if (this.darkmode === true) {
                this.darkmode = false;
            }
        }
    },

    mounted() {
        this.axios.get('https://api.myjson.com/bins/1dnl0e')
            .then((response => (this.cards = response.data.cards)));
    },

}

</script>

<style scoped>

    .wrapper {
        height: 100px;
        width: 100px;
        text-align: center;
    }

    .switches {
        width: 80px;
        height: 80px;
    }

    .darkmode {
        background-color: black;
    }

    .darkened {
        background-color: indigo!important;
        color: white;
        border: 1px solid white;
    }

    #container {
        display: flex;
        justify-content: space-around;
        width: 100vw;
        height: 100vh;
    }

    #card {
        margin-top: 200px;
        width: 400px;
        background-color: teal;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    #card img {
        background-size: cover;
        width: 100%;
        height: 280px;
    }

    #card p {
        width: 300px;
        text-align: center;
        margin-bottom: 50px;
    }
</style>