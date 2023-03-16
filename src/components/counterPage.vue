<template>
  <div class="header-box">
    <header>
      <div class="wrapper">
        <nav>
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/counter">Counter</router-link>
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
        <p
          class="count"
          :class="{
            'count--positive': state.count > 0,
            'count--negative': state.count < 0,
          }"
        >
          {{ formattedCount }}
        </p>
      </div>

      <div class="button-box">
        <button class="counter-button" @click="incrementCount">+</button>
        <button class="counter-button" @click="decrementCount">-</button>
        <button class="counter-button" @click="resetCount">Reset</button>
      </div>
      <div class="input-value">
        <input type="number" placeholder="insert count" v-model="state.count" />
        <button class="setbutton" @click="setValue">Set Value</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounter } from "@/composable/useCounter";

export default {
  setup() {
    const {
      state,
      formattedCount,
      incrementCount,
      decrementCount,
      resetCount,
      setValue,
    } = useCounter();

    return {
      state,
      formattedCount,
      incrementCount,
      decrementCount,
      resetCount,
      setValue,
    };
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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding-bottom: 50px;
  padding-top: 30px;
}
.button-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

/* Button styling */
.counter-button {
  display: inline-block;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #32355c;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0.25rem;
  transition: background-color 0.2s ease-in-out;
}

.setbutton {
  background-color: #32355c;
  border-radius: 0.25rem;
  color: #ffffff;
  outline: none;
  border: none;
  margin-left: 5px;
}

.setbutton:hover {
  background-color: #0069d9;
}

.counter-button:hover {
  background-color: #0069d9;
}

.count-heading {
  color: #32355c;
  font-size: 24px;
}
.count {
  font-size: 28px;
  color: #32355c;
  font-weight: 900;
  transition: color 0.2s ease-in-out;
}

.count--positive {
  color: green;
  font-weight: 900;
  font-size: 28px;
}

.count--negative {
  color: red;
  font-weight: 900;
  font-size: 28px;
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
  width: 60%;
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
