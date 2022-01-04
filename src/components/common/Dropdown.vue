<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      @click="handleClick()"
    >
      <span class="arrow-down"></span>
    </button>
    <div
      v-show="show"
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.arrow-down {
  display: inline-block;
  background: url("../../assets/img/arrow-dropdown.svg") center no-repeat;
  background-size: contain;
  height: 15px;
  width: 15px;
}

.dropdown button {
  background: transparent;
  padding: 0;
  line-height: unset;
  border: 0;
  width: 20px;
}

.dropdown {
  position: absolute;
  right: 10px;
}

.user-widget {
  position: relative;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 4px;
  background: #fff;
  position: absolute;
  right: 0;
  box-shadow: 2px 2px 5px #cccccc45;
}

.dropdown-menu a {
  min-width: 130px;
}

.dropdown-menu > * {
  padding: 0.2rem;
}

.dropdown-menu .dropdown-item {
  text-decoration: none;
}
</style>
