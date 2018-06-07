import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : '',
    images: ''

  },
  mutations: {
    settoken (state, payload) {
      console.log('commit', payload)
      state.token = payload
    },
    setImage (state, payload) {
      console.log('commit', payload)
      state.images = payload
    },
  },
  actions: {
    usertoken: function (context, payload) {
      console.log(payload)
      axios.post('http://35.197.135.159/request-token', payload)
        .then(response => {
          console.log(response.data.uuid)
          context.commit('settoken', response.data.uuid)
          localStorage.setItem('useruploader', response.data.uuid)
          swal('successfuly get token')
        })
        .catch(function (err) {

        })
    },
    uploadImage: function (context, payload) {
      let token = window.localStorage["useruploader"]
      let headers = {authorization : token}
      console.log("header =",headers)
      axios.post('http://35.197.135.159/image', payload, {headers})
      .then(response => {
        console.log('success', response.data)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    getAllPost: function (context) {
      let token = window.localStorage["useruploader"]
      let headers = {authorization : token}
      axios.get('http://35.197.135.159/image', {headers})
      .then(response => {
        console.log('success', response.data)
        let payload = response.data
        context.commit('setImage', payload)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
  }
})
