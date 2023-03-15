<template>
  <div class="border-7 border-red-800">
    <button class="decrement" @click="decrement">-</button>
  </div>
</template>
<script>
export default {
  methods: {
    decrement() {
      this.$store.dispatch("decrement", 10);
    },
  },
};
</script>
<style>
.decrement {
  padding: 10px;
  border-radius: 5px;
  background: #32355c;
  border: 1px solid;
  color: white;
  width: 70px;
  font-size: 20px;
  margin: 0px 15px;
}
.decrement:hover {
  background: white;
  color: #32355c;
  border: 1px solid #32355c;
  border-radius: 10px;
}
</style>
