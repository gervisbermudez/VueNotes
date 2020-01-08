<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/new">Nueva</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul id="slide-out" class="sidenav">
      <li>
        <router-link to="/"><i class="material-icons">home</i> Inicio</router-link>
      </li>
      <li>
        <router-link to="/new"><i class="material-icons">add</i> Nueva</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars.scss";
nav {
  box-shadow: none;
  background: none;
  .sidenav-trigger{
    color: $primary;
  }
}
</style>