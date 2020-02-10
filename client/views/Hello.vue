<template>
<div id="hello">
  {{ hello }}
</div>
</template>

<script lang="ts">
import _   from 'lodash';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Hello extends Vue {
  hello = ''
  /** mounted */
  async mounted() {
    const app = this
    app.hello = 'Hello World!'
  }
}
</script>