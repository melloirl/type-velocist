<template>
  <div
    class="leaderboards-view h-full w-full p-2 bg-slate-200 flex justify-center items-center flex-col"
  >
    <div
      class="leaderboard-wrapper bg-slate-300 rounded-lg flex-column justify-center p-2"
    >
      <span class="text-emerald-800 font-bold text-4xl text-center block mb-5"
        >Leaderboard 🏆</span
      >
      <div
        class="score-wrapper flex-column items-center justify-center text-center"
      >
        <div
          class="score-item m-2"
          v-for="(score, index) in ranking"
          :key="index"
        >
          <span class="text-2xl">{{ getMedal(index) }}</span>
          <span class="text-2xl">{{ score.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRankingStore } from "@/store";

export default defineComponent({
  name: "LeaderboardView",
  setup() {
    const store = useRankingStore();
    const medals = ["🥇", "🥈", "🥉"];
    const getMedal = (index) => {
      if (index < 3) {
        return medals[index];
      }
      return `${index + 1}th.`;
    };
    const ranking = store.getRanking;
    return { ranking, getMedal };
  },
});
</script>

<style scoped>
.leaderboard-wrapper {
  width: 800px;
  height: 600px;
}
</style>
