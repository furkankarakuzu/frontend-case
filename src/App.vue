<template>
  <div id="app">
    <div class="container-fluid p-0 d-flex flex-wrap">
      <nav-bar/>
      <app-content/>
    </div>
  </div>
</template>

<script>
import navBar from "./components/layout/navbar"
import appContent from "./components/appContent"
require('./assets/css/style.sass');
require('bootstrap-icons/font/bootstrap-icons.css')

export default {
  name: 'App',
  components: {
    navBar, appContent
  }
}
</script>

<style lang="sass">
#app
  & > .container-fluid
    height: 100vh
</style>