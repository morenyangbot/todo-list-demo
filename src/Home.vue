<template>
  <div>
    <header class="home-header">
      <button @click="onClickBack">Back</button>
      <div>{{$store.getters.user.username}}</div>
    </header>
    <div class="main">
      <div class="home-wrapper">
        <div class="side-bar">
          <ul>
            <router-link
              v-for="link in links"
              :key="link.name"
              tag="li"
              :to="link.path"
              active-class="sidebar-link-active"
            >
              <a>{{link.name}}</a>
            </router-link>
          </ul>
        </div>
        <div class="app-main">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      links: [
        {
          name: "Todo List",
          path: "/app/todos"
        },
        {
          name: "My Profile",
          path: "/app/user"
        }
      ]
    };
  },
  methods: {
    onClickBack() {
      const res = confirm("Are you sore to go back? ");
      console.log(res)
      if (res) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>
.home-wrapper {
  display: flex;
}
.side-bar {
  width: 360px;
}
.app-main {
  flex: 1;
}
.sidebar-link-active a {
  color: #fc999b;
}
.home-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  height: 60px;
}
</style>

