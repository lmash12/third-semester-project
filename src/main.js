import { createApp } from "vue";
// import { createStore } from "vuex";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import counterPage from "@/components/counterPage.vue";
import homePage from "@/components/homePage";
import ErrorPage from "@/components/ErrorPage";

// import "./assets/global.css";

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
// app.use(store);
app.use(router).mount("#app");
// app
