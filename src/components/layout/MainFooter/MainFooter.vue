<template>
  <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
    <div :class="[contained ? 'container' : 'container-fluid']">
      <div class="row">
        <ul class="nav">
          <li v-for="(item, idx) in menuItems" :key="idx" class="nav-item">
            <d-link class="nav-link" :to="item.to">{{ item.title }}</d-link>
          </li>
        </ul>
        <span class="copyright ml-auto my-auto mr-2">
          Made with
          <heart-icon class="mx-2 icon-sm"></heart-icon>
          by Torque
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
const defaultMenuItems = [
  {
    title: 'Home',
    to: '/',
  }
];

export default {
  name: 'main-footer',
  props: {
    /**
       * The footer menu items.
       */
    menuItems: {
      type: Array,
      default() {
        return defaultMenuItems;
      },
    },
    /**
       * Whether the footer should be wrapped in a container, or not.
       */
    contained: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
