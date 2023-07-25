import App from "@/app.js";
import { $ } from "@/utils/selector.js";

const $target = $("#root");
console.log("Hello world2");
console.log($target);

const app = new App({ $target });
app.init();
