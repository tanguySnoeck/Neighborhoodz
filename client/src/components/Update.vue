<template>
    <form v-on:submit.prevent="submit" style="width: 50%; margin-left: 25%;">
        <div class="form-group">
            <label for="title">Name</label>
            <input id="title" v-model="title" type="text" name="title" class="form-control">
        </div>
        <div class="form-group">
            <label for="location_description">Description</label>
            <input id="location_description" v-model="location_description" type="text" name="location_description" class="form-control">
        </div>
        <div class="form-group">
            <label for="town">Town</label>
            <input id="town" v-model="town" type="text" name="town" class="form-control">
        </div>
        <div class="form-group">
            <label for="image">Image</label>
            <input id="image" v-model="image" type="text" name="image" class="form-control">
        </div>
        <div class="form-group">
            <label for="capacity">Capacity</label>
            <input id="capacity" v-model="capacity" type="number" name="capacity" class="form-control">
        </div>
        <div class="form-group">
          <label for="categories">Category</label>
          <select v-model="category" name="category" class="form-control">
            <option v-for="category in categories" v-bind:key="category.id_cat">{{category.cat_name}}</option>
          </select>
        </div>
        <div>
            <button type="submit" value="Submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Update',
  data () {
    return {
      title: '',
      location_description: '',
      town: '',
      capacity: '',
      image: '',
      location_id: '',
      category: '',
      categories: []
    }
  },
  mounted () {
    this.getCategories()
    this.location_id = this.$route.params.location_id

    if (this.location_id !== undefined) {
      axios.get('/api/location/' + this.location_id).then(result => {
        this.title = result.data.title
        this.location_description = result.data.location_description
        this.town = result.data.town
        this.capacity = result.data.capacity
        this.image = result.data.image
      }, err => {
        console.log(err)
      })
    }
  },
  methods: {
    submit () {
      const dataToSend = {
        title: this.title,
        location_description: this.location_description,
        town: this.town,
        capacity: this.capacity,
        image: this.image
      }

      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].cat_name === this.category) {
          dataToSend.cat_id = this.categories[i].id_category
        }
      }

      if (this.location_id !== undefined) {
        axios.put('/api/location/' + this.location_id, dataToSend).then(result => {
          console.log(result)
        }, err => {
          console.log(err)
        })
      } else {
        axios.post('/api/location', dataToSend).then(result => {
          console.log(result)
        }, err => {
          console.log(err)
        })
      }
    },
    getCategories () {
      axios.get('/api/category').then(result => {
        this.categories = result.data
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>
