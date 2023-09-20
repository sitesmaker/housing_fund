<template>
  <aside>
    <h2>Поиск сотрудников</h2>
    <input type="text" v-model="searchVal" />
    <h2>Результаты</h2>
    <div class="search-result" ref="searchResult">
      <div v-if="userByName">
        <SidebarItem
          v-for="(item, index) in userByName"
          :key="index"
          :user="item"
          @userCardClick="userCardClick($event, item)"
        >
        </SidebarItem>
      </div>
      <PreloaderLayout v-if="isPreloader"></PreloaderLayout>
      <div v-if="!isPreloader && !userByName.length && !searchVal.length">
        начните поиск
      </div>
      <div v-if="!isPreloader && !userByName.length && searchVal.length">
        ничего не найдено
      </div>
    </div>
  </aside>
</template>

<script>
import { mapActions } from "vuex";
import PreloaderLayout from "@/views/layouts/PreloaderLayout.vue";
import SidebarItem from "@/components/Sidebar/SidebarItem.vue";
export default {
  name: "SidebarIndex",
  data() {
    return {
      searchVal: "",
      users: [],
      isPreloader: false,
    };
  },
  components: {
    PreloaderLayout,
    SidebarItem,
  },
  methods: {
    userCardClick(event, item) {
      let items = this.$refs.searchResult.querySelectorAll(
        ".search-result__item"
      );

      items.forEach((el) => {
        el.classList.remove("active");
      });

      event.currentTarget.classList.add("active");
      this.$emit("userCardClick", item);
    },
  },
  computed: {
    ...mapActions("Users", ["usersAxios"]),
    userByName() {
      let serched = [];

      this.users.forEach((item) => {
        let name = item.name.toLowerCase().trim(),
          searchValArr = this.searchVal
            .toLocaleLowerCase()
            .trim()
            .split(",")
            .filter(Boolean);

        searchValArr.forEach((el) => {
          if (
            this.searchVal != "" &&
            name.includes(el.toLocaleLowerCase().trim())
          ) {
            serched.push(item);
          }
        });
      });
      return serched;
    },
  },
  beforeMount() {
    this.isPreloader = true;
    this.usersAxios.then((res) => {
      this.users = res.data;
      // Данных мало - грузятся быстро, прелоадер быстро пропадает, добавил задержку для демонстрации
      setTimeout(() => {
        this.isPreloader = false;
      }, 600);
    });
  },
};
</script>

<style scoped lang="scss">
aside {
  max-width: 293px;
  width: 100%;
  padding: 13px 30px 13px 23px;
  border-right: 1px solid $border-color;

  input {
    margin-top: 12px;
    margin-bottom: 22px;
  }
}

.search-result {
  overflow-y: auto;
  height: 555px;
  margin-top: -10px;
  padding-top: 10px;
  margin-right: -30px;
  margin-left: -23px;
  padding-right: 30px;
  padding-left: 23px;
}
</style>
