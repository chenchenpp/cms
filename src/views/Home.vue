<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button @click="goAbout">el-button</el-button>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-jianhao"></use>
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    goAbout() {
      this.$router.push({path: '/about'})
    }
  }
}
</script>
