<template>
  <div
    class="input-group d-flex justify-self-end mt-auto position-sticky start-0 bottom-0 px-4 py-3 bg-white"
  >
    <span
      class="input-group-text bi bi-envelope ps-3 border-0"
      style="background-color: #f9faff"
      id="basic-addon1"
    ></span>
    <input
      type="text"
      v-model="answer"
      :disabled="secondCount>4"
      class="form-control py-3 border-0"
      style="background-color: #f9faff"
      placeholder="Type Your Answer"
      aria-label="Username"
      aria-describedby="basic-addon1"
      id="msg"
      @keydown.enter="sendAnswer()"
    />
    <span
      class="input-group-text border-0 px-6"
      style="background-color: #f9faff; cursor: pointer"
      @click="sendAnswer()"
    >
      <svg
        id="Capa_1"
        style="background-color: #f9faff"
        enable-background="new 0 0 465.882 465.882"
        height="21"
        viewBox="0 0 465.882 465.882"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z"
        />
      </svg>
    </span>
  </div>
</template>

<script>
import EventBus from "../event-bus";
export default {
  props: ["messages"],
  data() {
    return {
      answer: "",
      counter: 0,
      secondCount:0,
      questions: [
        { question: "Hey what should we call your project?" },
        { question: "Awesome! So tell me a little more. What is your idea?" },
        { question: "Sounds good. So who will be the target users?" },
        { question: "Do you have any specific tech stack in mind?" },
        {
          question:
            "Cool. Are there anyone else working on the project now? Maybe a designer or PM already in?",
        },
        {
          question:
            "Can you please give me an idea about your budget in terms of time and money? How soon do you want this and how much is your budget?",
        },
        { question: "If you have a requirement doc or any files related to the project, please upload them here!" },
      ],
    };
  },
  methods: {
    sendAnswer() {
      EventBus.$emit("count", this.counter);
      this.counter++;
      this.send("me", this.answer, this.time());
      this.send("other", this.questions[this.counter].question, this.time());
      window.scrollTo(0,document.body.scrollHeight);
    },
    send(who, text, time) {
      this.messages.push({ who, text, time });
      this.answer = "";
    },
    time() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    },
  },
  created() {
    this.send("other", "Hey what should we call your project?", this.time());
  },
  mounted(){
    EventBus.$on('count',(num)=>{
      this.secondCount=num
      console.log(num)
    })
  },
};
</script>

<style>
</style>