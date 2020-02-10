<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  name = 'app'
}
</script>

<style>
#app {
  margin-top: 3rem;
  margin-bottom: 5rem;
}
</style>