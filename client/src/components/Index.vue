<template>
<!-- PRÉSENTATONS DES LOCATIONS  -->
  <div>
    <div class="site-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center">
            <h2 class="font-weight-light text-black">Our Locations are here for you</h2>
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
          </div>
        </div>
    </div>

  <!-- BULLET POINTS NEIGHBORHOODZ  -->

    <div class="site-section">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-airplane"></span></div>
              <div>
                <h3>SPORT</h3>
                <p>Discover the different sport grounds that you can rent. Our team is confident that you will find the right field for the sport you want to practice.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-ship"></span></div>
              <div>
                <h3>PARTY</h3>
                <p>Find the ideal party room for the event you want to organize. You will have a choice of rooms depending on the number of people invited.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-route"></span></div>
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

    <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7">
            <h2 class="font-weight-light text-black text-center">Testimonials</h2>
          </div>
        </div>

        <div class="nonloop-block-13 owl-carousel">

          <div class="item">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 mb-5">
                  <img src="../assets/images/louis.jpg" alt="Image" class="img-md-fluid">
                </div>
                <div class="overlap-left col-lg-6 bg-white p-md-5 align-self-center">
                  <p class="text-black lead">I booked a basketball court àin Boistfort for a small tournament with friends and it was made available to us very quickly when we arrived. Thank you Neighborhoodz!</p>
                  <p class="">&mdash; <em>Louis Ryckmans</em>, Lessee</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
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
    getLocations () {
      axios.get('/api/location').then(result => {
        this.locations = result.data
      }, err => {
        console.log(err)
      })
    },
    getImg (img) {
      return require('../assets/images/' + img)
    }
  }
}
</script>
