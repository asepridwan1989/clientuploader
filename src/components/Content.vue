<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="query">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="search">cari</button>
      </form>
    </nav>
    <div class="wrap" v-on:submit.prevent="uploadImage">
        <button class="btn btn-primary" data-toggle="modal" data-target="#create">Tambah Buku Baru</button>
        <div class="modal" tabindex="-1" role="dialog" id='create'>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tambah Buku Baru</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>your image:</p>
                        <input class="btn btn-outline-primary" type="file" @change="onFilePicked" ref="file" accept="image/*">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="uploadImage">Submit Image</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card" style="width: auto margin: 20px;" v-for="(book, index) in books" v-bind:key="index">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="book.imageUrl" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{book.judul}}</h5>
          <p class="card-text"> Posted by : {{book.userId[0].username}}</p>
          <p class="card-text"> posted at {{book.createdAt | moment("MMMM Do YYYY, h:mm:ss")}}</p>
          <router-link :to="{ name: 'articledetail', params: { id: book._id }}"><h5 class="card-title">Detail</h5></router-link>
          <router-view/>
        </div>
      </div>
  </div>
  </div>  
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Content',
  data: function () {
    return {
      file:''
    }
  },
  computed: {
  ...mapState([
    'books'
  ])
  },
  created () {
    // this.$store.dispatch('getAllPost', headers)
  },
  methods: {
    onFilePicked() {
     this.file = this.$refs.file.files[0]
    },
    uploadImage() {
     let formData = new FormData()
     formData.append('photo', this.file)
     this.$store.dispatch('uploadImage', formData)
    },
  }
}
</script>

<style>

</style>

