<template>
  <div class="container main">
    <div class="row">
      <SidebarIndex @userCardClick="this.user = $event"></SidebarIndex>
      <div class="content">
        <div class="content__text" v-if="!user">
          Выберите сотрудника, чтобы посмотреть его профиль
        </div>
        <div class="content__user" v-if="user">
          <div class="image">
            <img :src="user.image ?? require('@/assets/images/plug_big.png')" />
          </div>
          <div class="wrapper">
            <div class="name">
              {{ user.name }}
            </div>
            <div class="email"><b>email:</b> {{ user.email }}</div>
            <div class="phone"><b>phone:</b>{{ user.phone }}</div>
            <!-- Описания не было вывел о компании -->
            <div class="description">
              <b>Address:</b>
              <ul>
                <li v-for="(index, item) in user.company" :key="index">
                  <b>{{ item }}:</b> {{ user.company[item] }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarIndex from "./Sidebar/SidebarIndex.vue";
export default {
  name: "HomeComponent",
  components: {
    SidebarIndex,
  },
  data() {
    return {
      user: "",
    };
  },
};
</script>

<style scoped lang="scss">
.main {
  height: 765px;
  margin-bottom: 44px;
  flex-grow: 1;

  .row {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: $gray-light;
    box-shadow: 0 0 10px $shadow-color;
    border-radius: $border-radius;
    overflow: hidden;
  }

  .content {
    display: flex;
    width: 100%;
    background-color: $white;
    padding: 30px 30px 30px 21px;

    &__text {
      color: $gray;
      margin: auto;
    }

    &__user {
      display: flex;
      align-items: flex-start;

      .image {
        max-width: 424px;
        width: 100%;

        img {
          width: 100%;
        }
      }

      .wrapper {
        padding-left: 61px;

        & > * {
          margin-bottom: 10px;
          color: $gray;

          b {
            padding-right: 6px;
          }

          &:nth-child(3) {
            margin-bottom: 20px;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        .name {
          color: $black;
          font-size: 16px;
          line-height: 140%;
          font-weight: 600;
        }

        .description {
          & > b {
            display: block;
            margin-bottom: 25px;
          }
        }
      }
    }
  }
}
</style>
