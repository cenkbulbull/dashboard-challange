<template>
  <div class="search" :style="style">
    <div class="search__input">
      <Icon :name="props.icon" :color="props.color"/>
      <Input border="0" bg="transparent" :placeholder="props.placeholder" :fontSize="props.fontSize"/>
    </div>
    <div class="search__button">
      <Button icon="hashtag" :color="props.color"/>
    </div>
  </div>
</template>

<script setup>
import { useSearchProps,defineProps } from "@/composables/useSearchProps";

const props = defineProps(useSearchProps().searchProps);
const { style } = useSearchProps(props);
</script>

<style lang="scss" scoped>
.search{
  display: flex;
  align-items: center;
  gap: 8px;

  &__input{
    display: flex;
    gap: 4px;
  }
}
</style>