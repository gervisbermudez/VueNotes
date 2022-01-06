<template>
  <div class="user-widget">
    <div class="user-widget-avatar">
      <img src="../../assets/img/avatar.jpg" />
    </div>
    <div class="user-widget-info">
      <span class="username">Jane Cooper</span>
      <span class="userrole">Web Designer</span>
    </div>
    <dropdown>
      <router-link to="/login" class="dropdown-item">
        Logged
      </router-link>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  name: "user-widget",
  components: {
    Dropdown,
  },
};
</script>

<style scoped>
.user-widget {
  display: flex;
  flex-direction: row;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  background-color: var(--bone);
}

.user-widget-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 0.5rem;
}

.user-widget-avatar {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.user-widget-avatar img {
  display: block;
  max-width: 100%;
}

span.username {
  font-weight: 600;
}

span.userrole {
  font-weight: 300;
}
</style>
