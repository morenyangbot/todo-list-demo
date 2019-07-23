<template>
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
</style>

