<template>
  <div class="app-navbar py-2 py-md-2 bg-white">
    <div
      class="app-navbar-wrapper d-flex flex-column align-items-center w-100"
    >
      <div class="d-flex w-100 px-4 align-items-center justify-content-between">
        <div class="align-items-center d-flex">
          <img
            src="https://demo.toclient.com/assets/img/avatars/svg/man-4.svg"
            alt=""
            width="32px"
            height="32px"
          />
          <div class="p-0 mx-1">
            <h5
              class="d-inline-block my-0 p-0"
              style="font-weight: 10px; font-size: 14.4px"
            >
              John
            </h5>
            <p class="m-0 text-muted p-0" style="font-size: 14.4px">
              Welcomes you :)
            </p>
          </div>
        </div>
        <div
          class="navbar-toggler d-block d-md-none"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i @click.prevent class="bi bi-list" />
        </div>
      </div>
      <div
        class="navbar-nav collapse d-md-block mb-2 mt-4 align-self-start w-100"
        id="navbarNav"
      >
        <ul class="list-group stepper-list w-100 px-0">
          <li
            :class="[
              { actives: step.isActive },
              { disabled: !step.isActive },
              { 'border-3 border-start  border-primary': step.isActive },
            ]"
            class="border-top-0 border-end-0 border-bottom-0 list-group-item d-flex text-secondary justify-content-between px-3 py-2"
            v-for="(step, index) in Steps"
            :key="index"
          >
            <div>
              <i class="bi bi-grid me-2"></i>
              <span>{{ ++index }}. {{ step.text }}</span>
            </div>
            <i
              v-if="step.isDone"
              class="bi bi-check2 rounded-circle border-0 text-center text-secondary fw-bold stepper-list-actives"
            ></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../event-bus'
export default {
  data() {
    return {
      Steps: [
        { text: "Idea", isActive: true, isDone: false },
        { text: "Target Users", isActive: false, isDone: false },
        { text: "Technology", isActive: false, isDone: false },
        { text: "Team", isActive: false, isDone: false },
        { text: "Budget", isActive: false, isDone: false },
        { text: "File Upload", isActive: false, isDone: false },
        { text: "Schedule a call", isActive: false, isDone: false },
      ],
    };
  },
  mounted(){
    EventBus.$on('count',(num)=>{

      for (let i = 0; i < num; i++) {
        this.Steps[i].isActive=false
        this.Steps[i].isDone=true
      }
      this.Steps[num].isActive=true
    })
  }
};
</script>

<style lang="sass">
@import "../../assets/css/bootstrap.sass"

.app-navbar
  width: 279px
  @include media-breakpoint-down(md)
    width: 100%!important
    height: fit-content
  &-wrapper
    top: 2.5rem
    @include media-breakpoint-up(md)
      position: sticky

.stepper-list
  .actives
    background-color: #eaeeff
    span
      color: $primary
      font-size: 14px
      font-weight: 500
  .disabled
    color: $secondary !important

  &-actives
    line-height: 28px
    width: 28px
    height: 28px
    background-color: #cfe8ce
</style>