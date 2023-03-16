import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import counterPage from "@/components/counterPage.vue";
import homePage from "@/components/homePage";
import ErrorPage from "@/components/ErrorPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faHouse);

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

const app = createApp(App).component("fa", FontAwesomeIcon);
// app.use(store);
app.use(router).mount("#app");
// app
