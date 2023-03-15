import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import counterPage from "@/sub/counterPage";
import homePage from "@/sub/homePage";
import ErrorPage from "@/sub/ErrorPage";

// import "./assets/global.css";

const store = createStore({
  state() {
    return { counter: 0 };
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload;
    },
    decrement(state, payload) {
      state.counter = state.counter - payload;
    },
    reset(state, payload) {
      state.counter = state.counter * payload;
    },
    setValue(state) {
      return state.counter;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
    decrement(context, payload) {
      context.commit("decrement", payload);
    },
    reset(context, payload) {
      context.commit("reset", payload);
    },
    setValue(context) {
      context.commit("setValue");
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage,
    },
    {
      path: "/counter",
      name: "counterPage",
      component: counterPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "ErrorPage",
      component: ErrorPage,
    },
  ],
});

const app = createApp(App);
app.use(store);
app.use(router).mount("#app");
// app
