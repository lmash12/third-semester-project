<template>
  <div class="error">
    <div class="error-page">
      <p class="text">404</p>
      <p>Error page</p>
      <router-link to="/" class="home">Back to home</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 80px auto;
}
.home {
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
}
.text {
  font-size: 24px;
  margin-bottom: 0px;
}
</style>
