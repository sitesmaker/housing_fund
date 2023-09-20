<template>
  <a
    href="#"
    @click.prevent="$emit('userCardClick', $event, user)"
    class="search-result__item"
  >
    <div class="image">
      <img :src="user.image ?? require('@/assets/images/plug.png')" />
    </div>
    <div class="content">
      <div class="name">{{ user.name }}</div>
      <div class="email">{{ user.email }}</div>
    </div>
  </a>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    user: {
      type: Object,
      default: new Object(),
    },
  },
};
</script>
<style lang="scss" scoped>
.search-result__item {
  display: flex;
  align-items: stretch;
  background-color: $white;
  margin-bottom: 18px;
  border-radius: $border-radius;
  box-shadow: 0 0 10px $shadow-color;
  border: 1px solid transparent;
  overflow: hidden;
  transition: $transition-4;

  &.active {
    border: 1px solid $gray_2;
    .content {
      background-color: $gray_2;
    }
  }

  .image {
    width: 70px;
    height: 70px;
    margin: auto;
  }

  .content {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: $gray_2;
    }

    .name,
    .email {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .name {
      font-weight: 600;
    }

    .email {
      margin-top: 5px;
    }
  }
}
</style>
