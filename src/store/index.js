import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useRankingStore = defineStore("ranking", () => {
  const ranking = ref([]);

  const pushToRanking = (item, wpm) => {
    ranking.value.push({ name: item, wpm });
    ranking.value.sort((a, b) => b.wpm - a.wpm);
  };

  const getRanking = computed(() => {
    return ranking.value.sort();
  });

  const $reset = () => {
    ranking.value = [];
  };

  return {
    ranking,
    pushToRanking,
    getRanking,
    $reset,
  };
});
