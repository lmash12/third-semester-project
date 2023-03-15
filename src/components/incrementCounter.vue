<template>
  <div>
    <button class="increment" @click="increment">+</button>
  </div>
</template>
<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("increment", 10);
    },
  },
};
</script>

<style>
.increment {
  padding: 10px;
  border-radius: 5px;
  background: #32355c;
  border: 1px solid;
  color: white;
  width: 70px;
  font-size: 20px;
}
.increment:hover {
  background: white;
  color: #32355c;
  border: 1px solid #32355c;
  border-radius: 10px;
}
</style>
