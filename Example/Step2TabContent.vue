<template>
    <div>
        <div class="col-md-12">
            <div class="row">
                <h3>Choose at least one to unlock next step!</h3>
            </div>
            <div class="row">
                <wizard-option v-for="element in tabsOrSpaces"
                        v-bind:key="element.Id"
                        v-bind:id="element.Id"
                        v-bind:title="element.Description"
                        v-bind:sub-title="element.Notes"
                        v-bind:is-selected="element.Id === selectedAnswer"
                        v-bind:icon="element.icon"
                        v-on:click="optionClickHandler">
                </wizard-option>
            </div>            
        </div>        
        <navigation-buttons has-next="true"
                            v-bind:is-next-enabled="isValid"
                            v-on:nextClicked="goToNextStep"
                            v-on:previousClicked="goToPreviousStep">
        </navigation-buttons>
    </div>
</template>

<script>
import navigationButtons from "./WizardComponents/NavigationButtons.vue";
import wizardOption from "./WizardComponents/WizardOption.vue";

import store from "./Stores/Store.js";
export default {
  name: "Step2TabContent",
  components: {
    navigationButtons,
    wizardOption
  },
  data() {
    return {
      state: store.state
    };
  },
  mounted() {
    debugger;
    if (store.state.isStep2Valid) {
      store.state.lastActiveStepIndex = 3;
    }
  },
  computed: {
    tabsOrSpaces() {
      return store.state.tabsOrSpaces;
    },
    selectedAnswer: {
      get() {
        return store.state.selectedAnswer;
      },
      set(value) {
        store.setAnswer(value);
      }
    },
    isAnswerValid() {
      return this.selectedAnswer >= 1;
    },
    isValid() {
      return this.isAnswerValid;
    }
  },
  methods: {
    optionClickHandler(id, description) {
      this.selectedAnswer = id;
    },
    /**
     * Handle the next button click event
     * and call the corresponding method from store
     */
    goToNextStep() {
      store.gotToNextStep();
    },
    /**
     * Handle the previous button click event
     * and call the corresponding method from store
     */
    goToPreviousStep() {
      store.gotToPreviousStep();
    }
  },
  watch: {
    isValid(changedValue) {
      debugger;
      store.setStep2Valid(changedValue);
      changedValue
        ? (store.state.lastActiveStepIndex = 3)
        : (store.state.lastActiveStepIndex = 1);
    }
  }
};
</script>

<style>
</style>
