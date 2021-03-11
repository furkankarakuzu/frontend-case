<template>
  <div
    class="app-content position-relative d-flex flex-column justify-content-start pt-7"
  >
    <messageBalloon :messages="messages" />
    <messageInput :messages="messages" />
  </div>
</template>

<script>
import messageInput from "./messageInput";
import messageBalloon from "./messageBalloon";
export default {
  components: {
    messageInput,
    messageBalloon,
  },
  data() {
    return {
      messages: [],
    };
  }
};
</script>

<style lang="sass">
@import "../assets/css/bootstrap/scss/bootstrap.scss"
.app-content
  min-height: 100vh
  width: calc( 100% - 280px )
  @include media-breakpoint-down(md)
    width: 100%
</style>