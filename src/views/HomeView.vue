<template>
  <div class="home">
    <div class="row">
      <div class="col-3"><Widget title="Views" rollingNumber="7,265" iconText="+11,2" icon="arrow-up-double-fill"/></div>
      <div class="col-3"><Widget title="Visits" rollingNumber="3,671" iconText="-0,03" icon="arrow-down-double-fill"/></div>
      <div class="col-3"><Widget title="New Users" rollingNumber="156" iconText="+15,1" icon="arrow-up-double-fill"/></div>
      <div class="col-3"><Widget title="Active Users" rollingNumber="123,3" iconText="-1,5" icon="arrow-down-double-fill"/></div>
    </div>

    <div class="row">
      <div class="col-9"><ChartWidget title="Total Users" type="line" :data="data.lineChart" :options="options"/></div>
      <div class="col-3"><ChartWidget title="Traffic by Website" type="line" :data="data.lineChart" :options="options"/></div>
    </div>

    <div class="row">
      <div class="col-6"><ChartWidget title="Traffic by Device" type="bar" :data="data.barChart" :options="options" height="100%"/></div>
      <div class="col-6"><ChartWidget title="Traffic by Location" type="doughnut" :data="data.doughnutChart" :options="options"/></div>
    </div>

    <div class="row">
      <div class="col-12"><ChartWidget title="Marketing & SEO" type="bar" :data="data.barChart" :options="options"/></div>
    </div>
  </div>
</template>

<script setup>
import data from '@/data/charts/data.json'
import options from '@/data/charts/options.json'
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
</style>
