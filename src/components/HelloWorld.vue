<template>
  <div class="container">
    <nav class="menu-left">
      <user-widget />
    </nav>
    <div class="main-content">
      <h1>My Notes</h1>
    </div>
  </div>
</template>

<script>
import userWidget from './common/UserWidget'
export default {
  components: { userWidget },
  name: 'HelloWorld',
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  .menu-left{
    width: 20%;
    background-color: var(--graylight); 
    padding: 2rem;
  }
  .main-content{
    width: 80%;
    padding: 2rem;
  }
</style>

