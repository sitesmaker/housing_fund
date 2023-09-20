<template>
  <header class="container header">
    <div class="row">
      <div class="header__logo">Жилфонд</div>
      <div class="header__user">Пользователь</div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout",
};
</script>

<style scoped lang="scss">
.header {
  padding-top: 46px;
  padding-bottom: 44px;
  flex-grow: 0;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    font-size: 32px;
    font-weight: 700;
    color: $red;
  }
  &__user {
    font-size: 16px;
  }
}
</style>
