<template>
  <div class="wizard">  
     <notifications group="foo" position="top right" classes="vue-notification"/>
        <div class="wizard__steps clearfix">
            <steptab v-for="(step, index) in steps"
                      v-bind:key="index"
                      v-bind:step="step"
                      v-bind:index="index"
                      v-bind:current-step="currentStep"
                      v-bind:last-active-step-index="lastActiveStepIndex"
                      v-bind:steps-count="steps.length"
                      v-on:click="stepTabClickHandler">
            </steptab>
        </div>
        <stepProgress v-bind:steps-count="steps.length"
                       v-bind:last-active-step-index="lastActiveStepIndex">
        </stepProgress>
        <component v-bind:is="currentTabContent"
                   v-bind:icon="currentStepObject.icon">
        </component>
        
    </div>
</template>
<script>
import store from './Stores/Store.js';
import steptab from './WizardComponents/StepTab.vue';
import stepProgress from './WizardComponents/StepProgress.vue';

//asd
export default {
  name: 'Wizard',

  components: {
    steptab,
    stepProgress,
  },
  data() {
    return {
      state: store.state,
      steps: store.state.steps,
    };
  },
  computed: {
    currentStep: function() {
      return store.state.currentStep;
    },
    currentStepObject: function() {
      return store.getCurrentStepObject();
    },
    currentTabContent: function() {
      return store.state.currentStep + 'TabContent';
    },
    lastActiveStepIndex: function() {
      return store.state.lastActiveStepIndex;
    },
  },
  methods: {
    stepTabClickHandler: function(step) {
      store.setCurrentStep(step.name);
    },
    }
};
</script>

