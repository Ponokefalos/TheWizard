<template>
    <div>
        <h3>Well done for making that far!</h3>
        <div class="center-form">
            <div class="row">
                <h4>Lets see what we have here</h4>
            </div>
            <div class="row">
                <p>First Name: {{firstName}}</p>
                <p>Last Name: {{lastName}}</p>
                <p>Hot answer: {{answer}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
import store from "./Stores/Store.js";
export default {
  name: "Step3TabContent",
  data() {
    return {
      state: store.state
    };
  },
  computed: {
    lastName() {
      return store.state.lastName;
    },
    firstName() {
      return store.state.firstName;
    },
    answer() {
      const answerDesc = store.state.tabsOrSpaces.find(
        element => element.Id === store.state.selectedAnswer
      ).Description;
      return answerDesc;
    }
  }
};
</script>

<style>
</style>
