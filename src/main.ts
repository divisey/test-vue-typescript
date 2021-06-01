import Vue from "vue";
import { fetch } from "@polkadot/x-fetch";
import keyring from "@polkadot/keyring";
import { unix } from "@foxone/mixin-api/encrypt";
import App from "./App.vue";

console.log(unix());

console.log(fetch);

console.log(keyring);

new Vue({
  render: (h) => h(App)
}).$mount("#app");

// async function init() {
//   const response = await fetch("https://example.com/something.json");
//   const json = await response.json();

//   console.log(json);
// }

// init();
