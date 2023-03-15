<template>
  <div class="header-box">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink class="link" to="/">Home</RouterLink>
          <RouterLink class="link" to="/counter">Counter</RouterLink>
          <a
            class="link"
            href="https://github.com/lmash12"
            target="_blank"
            rel="noopener noreferrer"
            >Github</a
          >
        </nav>
      </div>
    </header>
  </div>
  <div class="counter-wrapper">
    <div class="counter-box">
      <div class="heading-count">
        <p class="count-heading">Commence Counting</p>
        <p class="count">{{ $store.state.counter }}</p>
      </div>

      <div class="button-box">
        <increment-counter />
        <decrement-counter />
        <reset-counter />
      </div>
      <div class="input-value">
        <input
          type="number"
          placeholder="insert count"
          v-model="$store.state.counter"
        />
        <set-value />
      </div>
    </div>
  </div>
</template>

<script>
import incrementCounter from "@/components/incrementCounter";
import decrementCounter from "@/components/decrementCounter";
import resetCounter from "@/components/resetCounter";
import setValue from "@/components/setValue";
export default {
  components: {
    incrementCounter,
    decrementCounter,
    resetCounter,
    setValue,
  },
};
</script>
<style>
.header-box {
  background: whitesmoke;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  width: 100%;
}

.counter-wrapper {
  border-top: 2px solid white;
  height: 100vh;
  margin-top: 0px;
  background-color: whitesmoke;
}
.heading-count {
  height: 120px;
}
.counter-box {
  max-width: 350px;
  text-align: center;
  margin: 0 auto;
  margin-top: 60px;
  background-color: white;
  border: 1px solid #32355c;
  border-radius: 10px;
  padding-bottom: 50px;
  padding-top: 30px;
}
.button-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.count-heading {
  color: #32355c;
}
.count {
  font-size: 24px;
  color: #32355c;
}
.input-value {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  justify-content: center;
}
input {
  outline: none;
  padding: 10px;
}
.link {
  color: whitesmoke;
}

@media only screen and (max-width: 428px) {
  .counter-box {
    width: 300px;
  }
}
</style>
