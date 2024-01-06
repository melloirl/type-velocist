<template>
  <div
    class="game-view h-full w-full p-2 bg-slate-200 flex justify-center items-center flex-col"
  >
    <TypeGame />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TypeGame from "@/components/TypeGame.vue";

export default defineComponent({
  name: "GameView",
  setup() {
    return {};
  },
  components: { TypeGame },
});
</script>

<style scoped></style>
