import Vue from "vue";
import Router from "vue-router";
import root from "@/pages/root/root";
import archie from "@/pages/archie/archie";
import single from "@/pages/single/single";
import search from "@/pages/search/search";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "root",
      component: root
    },
    {
      path: "/archie",
      name: "archie",
      component: archie
    },
    {
      path: "/single/:date",
      name: "single",
      component: single
    },
    {
      path: "/search",
      name: "search",
      component: search
    }
  ]
});
