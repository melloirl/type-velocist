<template>
  <main>
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>

<style>
main {
  height: 100vh;
  width: 100vw;
  padding-top: 80px;
  padding-bottom: 20px;
}
</style>
