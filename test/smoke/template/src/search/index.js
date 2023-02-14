import { createApp } from "vue";
import { say } from "../helloworld";
import App from "./app.vue";
import { a } from "./tree-shaking";

a();
// eslint-disable-next-line no-console
console.log(say("hello search"));
const app = createApp(App);
app.mount("#app");
