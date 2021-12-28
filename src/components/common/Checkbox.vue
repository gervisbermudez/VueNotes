<template>
  <div class="input-form">
    <label class="checkbox-container"
      >{{ label }}
      <input type="checkbox" :checked="checked" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: ["label"],
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style scoped>
/* Customize the label (the checkbox-container) */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 2rem;
  margin: 1rem 0px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0px;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0.2rem;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 4px;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: var(--uclablue);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
