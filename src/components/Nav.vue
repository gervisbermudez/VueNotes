<template>
  <div>
    <nav class="blue darken-1">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">Vue Notes <Icon name="assignment"/> </router-link>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/new">Nueva</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul id="slide-out" class="sidenav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/new">Nueva</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  name: "Nav",
  components: {
    Icon,
  },
};
</script>