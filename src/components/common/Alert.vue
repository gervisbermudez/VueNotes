
<script>
export default {
  name: 'Alert',
  props: ["alertType", "title", "dismissible", "content"],
  data() {
    return {
      show: true,
    };
  },
  methods: {
      handleHideAlert: function () {
          this.show = false;
      }
  }
};
</script>


<template>
  <div >
    <div
      :class="`alert ${alertType} ${dismissible ? 'alert-dismissible' : ''}`"
      role="alert" 
      v-show="show"
    >
      <h4 v-if="title" class="alert-heading">{{ title }}</h4>
      {{ content }}
      <button
        v-if="dismissible"
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="handleHideAlert()"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin: 1rem 0px;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: var(--white);
}

.alert-heading {
  display: block;
  line-height: 1.5rem;
  margin: 0.75rem;
}

.alert-dismissible {
  padding-right: 4rem;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  color: inherit;
  background: transparent;
  -webkit-appearance: none !important;
  border: 0;
  cursor: pointer;
}
</style>
