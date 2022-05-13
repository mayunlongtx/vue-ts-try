import { createApp } from "vue";
import router from "./router/index";
import "vant/lib/index.css";
import "./styles/index.scss";
import "amfe-flexible";
import App from "./App.vue";
import Vant from "vant";
import directives from "./directive/index";

const app = createApp(App);
app.use(router).use(directives).use(Vant);
app.mount("#app");
