<template>
  <div class="home">
    <h1>hi saya asep ridwan</h1>
    <Gettoken></Gettoken>
    <Content></Content>
  </div>
</template>

<script>
// @ is an alias to /src
import Gettoken from '@/components/Gettoken.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'home',
  components: {
    Gettoken,
    Content
  }
}
</script>
