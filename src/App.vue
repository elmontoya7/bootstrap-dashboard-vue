<template lang="pug">
  router-view
</template>

<script>
import DefaultLayout from '@/layouts/Default.vue'

export default {
  components: {
    'd-layout': DefaultLayout
  }
};
</script>

<style media="screen">
  body, html {
    width: 100%;
    height: 100%;
  }
</style>
