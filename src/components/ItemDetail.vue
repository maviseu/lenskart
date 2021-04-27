<template>
<div style="padding: 40px">
    <b-button
        v-b-toggle.collapse-1
        variant="info"
        class="ml-auto"
        @click="back()"
    >
        Back
    </b-button>
    <h1> {{this.itemName}} </h1>

    <p align="center">
    <img v-bind:src="itemData[0].url" width="300"><br>
    
    {{"Price: $" + itemData[0].price}}<br>
    {{"Category: " + itemData[0].category.toUpperCase()}}<br>
    <br><br>
    Other Products
    </p>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="2500"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333; width:300px; margin: auto;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
    <b-carousel-slide 
        v-for="list in datacollection" 
        v-bind:key="list.id" 
        v-bind:img-src="list.url">

    <b-button size="sm" v-on:click="navigate(list)">Click</b-button>
    </b-carousel-slide>
    </b-carousel>
</div>
</template>

<script>

import axios from 'axios'
//import { router } from '@/routes';

export default {
    name: 'ItemDetail',
    
    props: ["itemName"],
    data: function() {
        return {
            datacollection: [
            ],
            itemData: [],
            slide: 0,
            sliding: null
        }
    },

    components: {
    },
    
    methods: {
        retrieveItem: function() {
            axios.get(`http://139.59.244.121/my_items`)
                    .then(response => {
                        response.data.forEach(data => {
                            var name = data.name
                            if (name == this.itemName) { 
                                this.itemData.push(data)
                            } else {
                                this.datacollection.push(data)
                            }
                        })
                    })            
        },
        
        back() {
            this.$router.back()
        },
        navigate(item) {
            var name = item.name
            this.$router.push({ path: `${name}`, params: { itemName: name } }); //go to item detail
        },
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
    },
    
    created () {
        this.retrieveItem()
    }
    
}   
</script>

<style scoped>

h1 {
   font-family: Century Gothic;
   color: rgb(78, 78, 78);
   text-align:center;
   padding: 20px;
}
</style>