<template>
  <div class="welcome-page">
    <h2 class="page-title">Please input your name</h2>
    <div class="input-bar">
      <input v-model="username" />
      <div class="start-btn" @click="onClickStart">Start</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    onClickStart() {
      this.$store.dispatch("setUsername", this.username);
      this.$router.push("/app/todos")
    }
  }
};
</script>

<style>
.welcome-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}

.welcome-page .page-title {
  margin-bottom: 20px;
}
.welcome-page .input-bar input {
  width: 300px;
  height: 24px;
  line-height: 24px;
}

.welcome-page .input-bar .start-btn {
  display: inline-block;
  margin-left: 15px;
  padding: 0 15px;
  height: 24px;
  line-height: 24px;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
}

.welcome-page .input-bar .start-btn:hover {
  opacity: 0.8;
}
</style>
