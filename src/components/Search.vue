<template>
  <div class="search" :style="style">
    <div class="search__icon">
      <Icon :name="props.icon" :color="props.color"/>
    </div>
    <div class="search__input">
      <Input border="0" bg="transparent" :placeholder="props.placeholder" :fontSize="props.fontSize"/>
    </div>
  </div>
</template>

<script setup>
import { useSearchProps,defineProps } from "@/composables/ui/useSearchProps";

const props = defineProps(useSearchProps().searchProps);
const { style } = useSearchProps(props);
</script>