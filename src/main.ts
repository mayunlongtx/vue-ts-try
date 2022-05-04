import { createApp } from "vue";
import router from "./router/index";
import "vant/lib/index.css";
import "./styles/index.scss";
import "amfe-flexible";
import App from "./App.vue";
import { Button, NavBar, Tabbar, TabbarItem, Icon, Sticky } from "vant";
import directives from "./directive/index";

const app = createApp(App);
app
  .use(router)
  .use(directives)
  .use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Sticky);
app.mount("#app");
