<template>
  <div class="game-wrapper flex justify-center bg-slate-300 rounded-lg">
    <div class="game-view__text p-4 relative">
      <p v-if="!win">
        <span class="bg-green-400">{{ stringifyArray(correctText) }}</span>
        <span class="bg-red-400">{{ stringifyArray(incorrectText) }}</span>
        <span>{{ stringifyArray(targetText.slice(inputText.length)) }}</span>
      </p>
      <p v-else class="justify-center flex flex-col">
        <span class="text-5xl text-emerald-800">Congratulations!</span
        ><Icon icon="fluent-emoji-flat:confetti-ball" height="60" />
        <span>
          You typed the entire text in <b>{{ formatNumber(time) }}</b> seconds!
        </span>
        <span>
          You have commited <b>{{ typos }}</b> mistakes, giving you an accuracy
          of <b>{{ formatNumber(accuracy) }}%</b>!
        </span>
        <span>
          Your typing speed is <b>{{ cpm }}</b> characters per minute!
        </span>
        <RetryButton
          @click="reset"
          class="absolute inset-x-0 bottom-0 p-2 m-3"
        ></RetryButton>
      </p>
    </div>
  </div>
  <div class="game-input my-2 py-2">
    <input
      class="rounded-lg"
      type="text"
      v-model="inputText"
      @input="onInput"
      :disabled="win"
    />
  </div>
</template>

<script>
import TextService from "@/services/TextService";
import { useHighResTimer, formatNumber } from "@/composables/useTimer";
import { stringifyArray } from "@/composables/useWord";
import { Icon } from "@iconify/vue";
import RetryButton from "@/components/RetryButton.vue";
import { ref, onMounted } from "vue";

export default {
  name: "TypeGame",
  components: { Icon, RetryButton },
  setup() {
    const inputText = ref("");
    const targetText = ref([]);
    const displayText = ref([]);
    const correctText = ref([]);
    const incorrectText = ref([]);
    const cpm = ref(0);
    const accuracy = ref(0);
    const time = ref(0);
    const win = ref(false);
    const timer = useHighResTimer();
    const typos = ref(0);

    const initialState = () => {
      inputText.value = "";
      targetText.value = [];
      displayText.value = [];
      correctText.value = [];
      incorrectText.value = [];
      cpm.value = 0;
      accuracy.value = 0;
      time.value = 0;
      win.value = false;
      typos.value = 0;
    };

    const reset = async () => {
      initialState();
      const text = await TextService.getRandomText();
      targetText.value = text.split("");
    };

    onMounted(async () => {
      const text = await TextService.getRandomText();
      targetText.value = text.split("");
    });

    const onInput = (e) => {
      // If the timer is not running, start it
      if (!timer.isRunning()) {
        timer.start();
      }
      let input = e.target.value;
      // Get the initial sizes of the arrays
      const initialIncorrectSize = incorrectText.value.length;
      // Get array of input text
      input = input.split("");

      // Compare the input array with the target array
      // The correct array is the intersection of the two arrays elements
      // in the same position
      // This is only valid if there are no incorrect characters already typed

      if (incorrectText.value.length === 0) {
        correctText.value = input.filter((char, index) => {
          return char === targetText.value[index];
        });
      }

      // The incorrect array is the difference of the two arrays in the same
      // position
      incorrectText.value = input.filter((char, index) => {
        return char !== targetText.value[index];
      });

      // If the incorrect array has grown, then the user has typed an incorrect
      // So we increment the typos counter
      if (incorrectText.value.length > initialIncorrectSize) {
        typos.value++;
        console.log("A typo was made!");
      }

      // If the correct array is the same length as the target array, and
      // there are no incorrect characters, then the user has typed the
      // entire text correctly

      if (
        correctText.value.length === targetText.value.length &&
        incorrectText.value.length === 0
      ) {
        win.value = true;
        timer.stop();
        console.log(timer);
        time.value = timer.getElapsedTime(true);
        // Consider the time to be in seconds, we divide by 60 to get minutes
        cpm.value = Math.round((targetText.value.length / time.value) * 60);
        accuracy.value = Math.round(
          ((targetText.value.length - typos.value) / targetText.value.length) *
            100
        );
      }
    };

    return {
      onInput,
      cpm,
      time,
      accuracy,
      win,
      typos,
      displayText,
      stringifyArray,
      correctText,
      incorrectText,
      targetText,
      inputText,
      formatNumber,
      reset,
    };
  },
};
</script>

<style scoped>
.game-wrapper {
  width: 600px;
  height: 400px;
}
.game-input {
  width: 600px;
  height: 100px;
}
.game-input input {
  width: 100%;
  height: 30px;
  font-size: 2rem;
  text-align: center;
}
</style>
