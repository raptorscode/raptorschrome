<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="bg-pattern p-10 rounded-xl">
    <img class="logo mx-auto" src="./logo.png" height="150" width="150" />
    <div class="mt-8 font-bold font-mono text-xl">Completely useless.</div>
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
@keyframes rotato {
  to {
    transform: rotate(360deg);
  }
}
.logo {
  animation: rotato 3s linear infinite;
}
html,
body {
  color: #eee;
  background: #222;
}
</style>
