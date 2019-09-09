<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="goHome">goHome</el-button>
  </div>
</template>
<script>
export default {
  name: 'about',
  methods: {
    goHome() {
      this.$router.push({ path: '/' });
    }
  }
};
</script>
