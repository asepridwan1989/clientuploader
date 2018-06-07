<template>
  <div>
    <h1>Click this button to upload image</h1>
    <div class="wrap" v-on:submit.prevent="uploadImage">
        <button class="btn btn-primary" data-toggle="modal" data-target="#create">upload image</button>
        <div class="modal" tabindex="-1" role="dialog" id='create'>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">upload image</h5>
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
    <div class="card" style="justify-content:center; width: auto margin: 20px;" v-for="(image, index) in images" v-bind:key="index">
        <img :src="image.url" alt="Card image cap" width="30%">
        <div class="card-body">
          <h3 class="card-text"> Posted by : {{image.user.name}}</h3>
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
    'images'
  ])
  },
  created () {
    this.$store.dispatch('getAllPost')
  },
  methods: {
    onFilePicked() {
     this.file = this.$refs.file.files[0]
    },
    uploadImage() {
     let formData = new FormData()
     formData.append('file', this.file)
     this.$store.dispatch('uploadImage', formData)
     this.$store.dispatch('getAllPost')
    },
  }
}
</script>

<style>

</style>

