<template>
  <div>
    <div
      v-for="(msg, index) in messages"
      :key="index"
      class="col-md-12 d-flex align-items-end justify-content-end my-2 pe-2"
    >
      <div :class="[msg.who]" class="box sb1 py-1 px-4">
        <div class="row">
          {{ msg.text }}
        </div>
        <small class="float-end d-block">{{ msg.time }}</small>
      </div>
      <img
        v-if="msg.who == 'other'"
        class="img"
        src="https://demo.toclient.com/assets/img/avatars/svg/man-4.svg"
        alt=""
        width="32px"
        height="32px"
      />
      <img
        v-else
        class="img"
        src="https://demo.toclient.com/assets/img/avatars/svg/man-3.svg"
        alt=""
        width="32px"
        height="32px"
      />
    </div>
    <div v-if="count >= 5" class="row m-0 p-0">
      <div class="col-md-9 text-center border-1 mx-auto bg-white py-3 px-6">
        <small class="d-block">Max Size 5MB</small>
        <small class="d-block mb-1">Supported formats(doc, docx, pdf)</small>
        <label
          class="btn btn-primary me-1 p-1"
          style="font-size: 14px; font-weight: 500; padding: 9px 15px"
        >
          <i class="bi bi-upload"></i>
          UPLOAD A FILE <input type="file" hidden>
        </label>
        <button
          @click="skip()"
          class="btn text-primary me-1 p-1"
          style="font-size: 14px; font-weight: 500; background-color: #eaeeff"
        >
          SKIP FOR NOW
        </button>
      </div>
    </div>

    <div v-if="count>=6" class="row m-0 p-0 my-5">
      <div class="col-md-9 border-1 mx-auto bg-white py-3 ps-6">
        <small v-if="nextComp<3" class="d-block my-2">SCHEDULE A 30 MINS CALL</small>
        <div v-if="nextComp == 0">
          <small class="d-block my-2">Select a Day</small>
          <div class="row">
            <div
              class="col-md-5 text-center border border-dark m-1 py-1 px-4 hvr"
              @click="selectDate(date)"
              v-for="(date, i) in dates"
              :key="i"
            >
              <span class="d-block">{{ date.gun }}</span>
              <span class="d-block">{{ date.tarih }}</span>
            </div>
          </div>
        </div>
        <div v-else-if="nextComp == 1">
          <small class="d-block my-2">Select a suitable time</small>
          <div class="row">
            <div
              class="col-md-5 text-center border border-dark m-1 py-1 px-4 hvr"
              @click="selectHour(hour)"
              v-for="(hour, i) in hours"
              :key="i"
            >
              <span class="d-block">{{ hour }}</span>
            </div>
          </div>
        </div>
        <div v-else-if="nextComp==2">
          <div class="row">
            <div class="col-md-4 p-0">
              <img
                src="https://demo.toclient.com/assets/img/call-require.jpg"
                class="callImg"
                alt=""
              />
            </div>
            <div class="col-md-8 mt-md-0 mt-2">
              <h3 class="p-0 m-0 fw-light">{{ selectedHour }}</h3>
              <h3 class="p-0 m-0 fw-light">{{ selectedDate }}</h3>
              <div class="mt-3 w-75">
                <small class="text-muted"
                  >Your are running GMT +03:00. Please enter your email address
                  to confirm the call.</small
                >
              </div>
              <div class="form-group my-2 text-muted">
                <label>Email Address</label>
                <input
                  type="email"
                  required=""
                  id="email"
                  v-model="userMail"
                  class="form-control"
                  style="background: #f9faff"
                  placeholder="johndoe@mail.com"
                />
              </div>
              <button
                @click="back()"
                class="btn text-primary p-1 w-50"
                style="
                  font-size: 14px;
                  font-weight: 500;
                  background-color: #eaeeff;
                "
              >
                Back
              </button>
              <button
                @click="confirm()"
                class="btn btn-primary p-1 w-50"
                style="font-size: 14px; font-weight: 500; padding: 9px 15px"
              >
                Confirm Call
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="py-4 px-3 text-center">
            <svg class="d-block mx-auto" width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <circle class="border" cx="42" cy="42" r="40" stroke-linecap="round" stroke-width="4" stroke="#2e5bff" fill="none"></circle>
              <path class="checkmark" stroke-linecap="round" stroke-linejoin="round" d="M23.375 42.5488281 36.8840688 56.0578969 64.891932 28.0500338" stroke-width="4" stroke="#2e5bff" fill="none"></path>
            </svg>
            <h3 class="text-primary mt-2">Call Confirmed</h3>
            <p>Thanks for reaching out. I'll get back to you. John</p>
          </div>
        </div>
        <button
          v-if="nextComp < 2"
          id="btn"
          class="btn btn-primary float-end me-lg-10 mt-2 py-1 px-6"
          @click="next()"
          :disabled="btnIsDisabled"
        >
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../event-bus";
export default {
  props: ["messages"],
  data() {
    return {
      count: 0,
      test: false,
      selectedDate: "",
      nextComp: 0,
      hours: [
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:30 PM",
        "2:30 PM",
        "3:30 PM",
      ],
      btnIsDisabled:true,
      selectedHour: "",
      userMail:""
    };
  },
  methods: {
    skip() {
      EventBus.$emit("count", ++this.count);
    },
    back(){
      this.nextComp--
      this.btnIsDisabled=false
    },
    selectDate(date) {
      this.selectedDate = date.tarih + " " + date.gun;
      this.btnIsDisabled=false
    },
    selectHour(hour) {
      this.selectedHour = hour;
      this.btnIsDisabled=false
    },
    next() {
      this.nextComp++;
      this.btnIsDisabled=true
    },
    confirm(){
      this.nextComp++
      console.log(this.selectedDate)
      console.log(this.selectedHour)
      console.log(this.userMail)

    }
  },
  computed: {
    dates() {
      let tarih = new Date();
      // .toLocaleString(window.navigator.language, {year:"numeric", month:"long", day:"numeric"})
      let tarih2 = new Date();
      let dates = [];
      for (let i = 1; i < 7; i++) {
        tarih2.setDate(tarih.getDate() + i);
        let tarih3 = tarih2.toLocaleString(window.navigator.language, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        let gun = tarih2.toLocaleString(window.navigator.language, {
          weekday: "long",
        });
        dates.push({ tarih: tarih3, gun });
      }
      return dates;
    },
  },
  mounted() {
    EventBus.$on("count", (num) => {
      this.count = num;
    });
  },
};
</script>

<style scoped>
.box {
  height: auto;
  background: #00bfb6;
  text-align: center;
  color: #fff;
  font-family: "rubik";
  position: relative;
}
.img {
  margin-left: 10px;
}
.other {
  background-color: #2e5bff;
}
.me {
  background-color: #656565;
}
.sb1 {
  color: white;
  position: relative;
  box-shadow: 0px -1px 2px #ccc;
  border-radius: 20px;
  max-width: 385px;
  border-bottom-right-radius: 0px;
}
.sb1:after {
  content: "";
  position: absolute;
  width: 0;
  right: 0px;
  bottom: -8px;
  height: 0;
  border-top: 8px solid #2e5bff;
  border-left: 8px solid transparent;
}
.hvr {
  cursor: pointer;
}
.hvr:hover {
  border: 1px solid blue !important;
}
.callImg {
  max-width: 160px;
}
</style>