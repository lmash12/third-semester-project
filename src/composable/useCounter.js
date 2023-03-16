import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

export function useCounter() {
  const state = reactive({
    count: 0,
  });

  const router = useRouter();

  const incrementCount = () => {
    state.count++;
  };

  const decrementCount = () => {
    state.count--;
  };

  const resetCount = () => {
    state.count = 0;
  };

  const setValue = () => {
    const input = parseInt(state.countInput);
    if (!isNaN(input)) {
      state.count = input;
      router.push(`/counter/${state.count}`);
    }
  };

  const formattedCount = computed(() => {
    return state.count.toLocaleString();
  });

  return {
    state,
    formattedCount,
    incrementCount,
    decrementCount,
    resetCount,
    setValue,
  };
}
