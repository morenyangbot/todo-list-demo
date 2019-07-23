<template>
  <div>
    <div class="profile-wrapper">
      <h2>User Profile</h2>
      <div class="profile-list">
        <div class="profile-item avatar">
          <img src="https://vuejs.org/images/logo.png" />
        </div>
        <div class="profile-item">
          <div class="profile-label">Name:</div>
          <input v-model="username" />
        </div>
        <div class="profile-item">
          <div class="profile-label">Phone:</div>
          <input v-model="phone" />
        </div>
        <div class="profile-item">
          <button @click="saveProfile">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      username: this.$store.getters.user.username,
      phone: this.$store.getters.user.phone
    };
  },
  methods: {
    saveProfile() {
      this.$store.dispatch("setUser", {
        username: this.username,
        phone: this.phone
      });
    }
  }
};
</script>

<style>
.profile-wrapper {
  width: 400px;
  margin: 40px auto;
}
.profile-item.avatar img {
  width: 40px;
  height: 40px;
}
</style>

