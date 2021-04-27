<template>
<div style="padding: 40px">
<h1> Categories </h1>

       <b-list-group deck>
      <b-list-group-item
        v-for="list in datacollection"
        :key="list.id"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
      
        {{ Object.keys(list)[0].toUpperCase() }} <br>
        <b-button
          variant="outline-info"
          class="ml-auto"
          @click="navigate(Object.keys(list)[0])"
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
    name: 'PageContent',
    data: function() {
        return {
            datacollection: [
                {'spectacles': []},
                {'sunglasses': []}, 
            
            ],
        }
    },

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
        
        navigate(listId) {
            this.$router.push({ path: `item/${listId}`, params: { hi: listId } }); // go to spectacles, go to sunglasses
        },
    },
    
    created () {
        this.fetchItems()
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