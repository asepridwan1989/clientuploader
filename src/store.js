import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : '',

  },
  mutations: {
    settoken (state, payload) {
      console.log('commit', payload)
      state.token = payload
    },
  },
  actions: {
    usertoken: function (context, payload) {
      console.log(payload)
      axios.post('http://35.197.135.159/request-token', payload)
        .then(response => {
          console.log(response.data.uuid)
          context.commit('settoken', response.data.uuid)
          swal('successfuly get token')
        })
        .catch(function (err) {

        })
    },
    uploadImage: function (context, payload) {
      let headers = this.token
      axios.post('http://35.197.135.159/image', payload.formData, {headers})
      .then(response => {
        console.log('success', response.data)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
  }
})
