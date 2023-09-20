<template>
  <HeaderLayout></HeaderLayout>
  <router-view />
</template>

<script>
import HeaderLayout from "./views/layouts/HeaderLayout.vue";
export default {
  components: {
    HeaderLayout,
  },
};
</script>

<style>
html,
body,
#app {
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
