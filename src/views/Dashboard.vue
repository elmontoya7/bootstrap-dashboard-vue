<template lang="pug">
  d-layout
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
