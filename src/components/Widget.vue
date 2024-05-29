<template>
  <div class="widget">
    <div class="widget__title">
      <Text :text="props.title "/>
    </div>

    <div class="widget__content">

      <div class="widget__content-rolling-number">
        <Text :text="props.rollingNumber "/>
      </div>

      <div class="widget__content-icontext">
        <div class="widget__content-icontext-text">
          <Text :text="props.iconText"/>
        </div>

        <div class="widget__content-icontext-icon" :class="props.icon">
          <Icon :name="props.icon" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useWidgetProps,defineProps } from "@/composables/useWidgetProps";

const props = defineProps(useWidgetProps().widgetProps);
</script>

<style lang="scss" scoped>
.widget {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  border-radius: 16px;
  background-color: $coconut-white;
  color: $eerie-black;

  &:has(.arrow-up-double-fill){
    background-color: $coastal-breeze;
  }

  &__title {
    @include text-style($font-size-sm, $font-weight-light, $line-height-sm) 
  }

  &__content {
    display: flex;
    justify-content: space-between;

    &-rolling-number{
      @include text-style($font-size-xl, $font-weight-medium, $line-height-xl) 
    }

    &-icontext {
      display: flex;
      align-items: center;
      gap: 4px;

      &-text{
        @include text-style($font-size-sm, $font-weight-light, $line-height-sm) 
      }
    }
  }
}
</style>
