import { defineProps } from "vue";

export function useTextProps() {
  const textProps = {
    text: String,
  };

  return { textProps,defineProps };
}
