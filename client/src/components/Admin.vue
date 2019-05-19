<template>
    <!-- PRÉSENTATONS DES LOCATIONS  -->

    <div class="site-section">
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-md-7 text-center">
                    <h2 class="font-weight-light text-black">Our locations are here for you</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" v-for="location in locations" v-bind:key="location.id_location">
                    <a :href="'/' + location.id_location" class="unit-1 text-center">
                        <img :src="getImg(location.image + '.jpg')" :alt="location.title" class="img-fluid" style="max-width: 345px; max-height: 230px;">

                        <div class="unit-1-text">
                            <h3 class="unit-1-heading">{{location.title}}</h3>
                            <strong class="text-white mb-2 d-block">{{location.description}}</strong>
                            <p class="unit-1-heading">
                                <!-- <img src="favicon" alt="placeholder" style="width: 30px; height:40x"> -->
                                {{location.town}}
                            </p>
                        </div>
                    </a>
                    <router-link :to="{name: 'Edit', 'params': {location_id: location.id_location}}" class="btn btn-warning">Edit</router-link>
                    <button class="btn btn-danger" v-on:click="remove(location.id_location)"> Remove</button>
                </div>
            </div>
            <div>
                <router-link :to="'add'" class="btn btn-primary"> ADD A LOCATION </router-link>
            </div>

<!-- BULLET POINTS NEIGHBORHOODZ  -->

            <div class="site-section">
                <div class="container">
                    <div class="row align-items-stretch">
                        <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="unit-4 d-flex">
                                <div class="unit-4-icon mr-4">
                                    <span class="text-primary flaticon-airplane"></span>
                                </div>
                                <div>
                                    <h3>SPORT</h3>
                                    <p>Discover the different sport grounds that you can rent. Our team is confident that you will find the right field for the sport you want to practice.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="unit-4 d-flex">
                                <div class="unit-4-icon mr-4">
                                    <span class="text-primary flaticon-ship"></span>
                                </div>
                                <div>
                                    <h3>PARTY</h3>
                                    <p>Find the ideal party room for the event you want to organize. You will have a choice of rooms depending on the number of people invited.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="unit-4 d-flex">
                                <div class="unit-4-icon mr-4">
                                    <span class="text-primary flaticon-route"></span>
                                </div>
                                <div>
                                    <h3>BUSINESS</h3>
                                    <p>Find the meeting room your team needs. They are all equipped and ready to welcome your enriching discussions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <!-- TÉMOIGNAGE  -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      locations: []
    }
  },
  mounted () {
    this.getLocations()
  },
  methods: {
    getLocations () { // Je récupère toutes les locations
      axios.get('/api/location').then(result => {
        this.locations = result.data
      }, err => {
        console.log(err)
      })
    },
    getImg (img) { // Nécessaire pcq webpack est bizarre
      return require('../assets/images/' + img)
    },
    remove (locationId) { // supprime une location
      axios.delete('/api/location/' + locationId).then(result => {
        for (let i = 0; i < this.locations.length; i++) {
          if (this.locations[i].id_location === locationId) {
            this.locations.splice(i, 1) // Je retire dynamiquement la location de la vue
          }
        }
      }, err => {
        console.log(err)
      })
    }
  },
  name: 'Admin'
}
</script>
