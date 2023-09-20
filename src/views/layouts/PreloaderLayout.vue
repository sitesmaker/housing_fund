<template>
  <div class="preloader"></div>
</template>

<script>
export default {
  name: "PreloaderLayout",
};
</script>

<style scoped lang="scss">
.preloader {
  width: 48px;
  height: 48px;
  border: 5px solid $gray_2;
  border-bottom-color: $red;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
