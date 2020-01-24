<template>
  <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
    <div :class="[contained ? 'container' : 'container-fluid']">
      <div class="row">
        <ul class="nav">
          <li v-for="(item, index) in Config.footerLinks" :key="index" class="nav-item">
            <d-link class="nav-link" :to="item.to || item.path">{{ item.title }}</d-link>
          </li>
        </ul>
        <span class="copyright ml-auto my-auto mr-2">
          Made with
          <heart-icon class="mx-1 icon-sm text-danger mb-1"></heart-icon>
          by Torque
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'main-footer',
  props: {
    contained: {
      type: Boolean,
      default: false,
    },
  }
};
</script>
