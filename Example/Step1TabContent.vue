<template>
    <div>
        <h3>Fill the fields bellow in order to move to next step!</h3>
        <div class="center-form">
            <div class="form-group">
                <label>First Name:</label>
                <input v-model="selectedFirstName" type="text" value="">
            </div>
            <div class="form-group">
                <label>Last Name:</label>
                <input v-model="selectedLastName" type="text" value="">
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
import store from "./Stores/Store.js";
export default {
  name: "Step1TabContent",
  components: {
    navigationButtons
  },

  data() {
    return {
      state: store.state
    };
  },
  computed: {
    selectedFirstName: {
      get() {
        return store.state.firstName;
      },
      set(value) {
        store.setFirstName(value);
      }
    },
    selectedLastName: {
      get() {
        return store.state.lastName;
      },
      set(value) {
        store.setLastName(value);
      }
    },
    isLastNameValid() {
      return this.selectedLastName !== "";
    },
    isFirstNameValid() {
      return this.selectedFirstName !== "";
    },
    isValid() {
      return this.isLastNameValid && this.isFirstNameValid;
    }
  },
  methods: {
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
      store.setStep1Valid(changedValue);
      changedValue
        ? (store.state.lastActiveStepIndex = 1)
        : (store.state.lastActiveStepIndex = 0);
    }
  }
};
</script>

<style>
.center-form {
  width: 50%;
  margin: 0 auto;
  padding-top: 20px;
}
</style>
