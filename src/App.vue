<template>
  <div>{{ time }}</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { unix } from "@foxone/mixin-api/encrypt";

@Component
class App extends Vue {
  a = 23;

  asfd = 1;

  afd = "2";

  time = unix();

  mounted() {
    console.log(unix());
  }
}
export default App;
</script>
