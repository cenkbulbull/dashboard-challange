<template>
  <div class="home flex flex-column g-28">

    <div class="row">
      <div class="col-12 flex justify-space-between color-eerie-black">

        <Text class="padding-8 font-size-14 font-weight-600" text="Overview"/>

        <Selectbox class="font-size-12 font-weight-400 padding-y-4 padding-x-8" border="0" name="dashboard" :options="['Today','Monday']" />

      </div>
    </div>

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