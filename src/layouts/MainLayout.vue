<template>
  <header class="bg-racer-yellow flex items-center p-8">
    <div class="logo flex">
      <img src="@/assets/type-velocist-logo.png" alt="Logo" />
      <h1 class="font-bold text-2xl text-yellow-900">TypeVelocist</h1>
    </div>
    <nav class="flex-1">
      <ul class="flex justify-end">
        <li class="px-2">
          <router-link to="/">Home</router-link>
        </li>
        <li class="px-2">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <slot></slot>
  <footer class="bg-gray-200 flex items-center justify-center p-2">
    <p class="px-1">By <span class="font-bold">Mierulabs</span> with</p>
    <Icon icon="mdi-heart" color="red" />
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "MainLayout",
  components: {
    Icon,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap");

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
}

.logo {
  display: flex;
  align-items: center;
  font-family: "Quicksand", sans-serif;
}

.logo img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}
</style>
