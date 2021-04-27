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
    
    <h1> {{ this.id.toUpperCase() }} </h1>

    <b-list-group deck>
        <b-list-group-item
            v-for="list in itemData[0]"
            :key="list.id"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
            {{ list.id + ' - ' + list.name + ' - Price $' + list.price }} <br>
            <b-button
            variant="outline-info"
            class="ml-auto"
            @click="navigate(list.name)"
            >
            View More
            </b-button>
        </b-list-group-item>
        </b-list-group>
</div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Item',
    data: function() {
        return {
            datacollection: [
                {'spectacles': []},
                {'sunglasses': []}, 
            
            ],
            itemData: [],


        }
    },

    props: ["id"],
    components: {
    },
    
    methods: {
        fetchItems: function() {
            axios.get(`http://139.59.244.121/my_items`)
                    .then(response => {
                        //if sunglasses, create sunglasses key, put into sunglasses value
                        response.data.forEach(data => {
                            var cat = data.category
                            if (cat == 'spectacles') {
                                //console.log(this.datacollection[0].sunglasses)
                                this.datacollection[0].spectacles.push(data)
                            } else if (cat == 'sunglasses') {
                                this.datacollection[1].sunglasses.push(data)
                            }
                            
                            
                        })
                    })            
        },
        filterItems: function() {
            var category = this.id
            for (var i = 0; i < this.datacollection.length; i++) {
                if (Object.keys(this.datacollection[i]) == category) {
                    console.log(this.datacollection[i])
                    this.itemData.push(this.datacollection[i][category])

                }
            }
        },
        navigate(item) {
            var test = this.id
            this.$router.push({ path: `${test}/detail/${item}`, params: { itemName: item } }); //go to item detail
        },
        back() {
            this.$router.back()
        },
    },
        
    created () {
        this.fetchItems();
        this.filterItems();
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