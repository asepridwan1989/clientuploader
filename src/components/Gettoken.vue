<template >
    <div>
        <p style="color:red">{{errorLog}}</p>
            <form>
                <div class="form-group" v-on:submit.prevent="gettoken">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control"  placeholder="your name" v-model="name">
                </div>
                <div class="form-check">
                </div>
                <button type="submit" class="btn btn-primary" @click="gettoken">Get user token</button>
            </form>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Gettoken',
  data: function () {
    return {
      email: '',
      name: ''
    }
  },
  computed: {
    ...mapState([
      'errorLog'
    ])
  },
  methods: {
    gettoken () {
      let body = {
        email: this.email,
        name: this.name
      }
      this.$store.dispatch('usertoken', body)
    }
  }
}
</script>

<style>

</style>
