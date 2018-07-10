 <style>
</style>
<template>
  <div v-bind:class="[tabClass, tabAnimateClass, {'steptab--selected': isSelected, 'steptab--disabled': isDisabled}]" 
         v-on:click="clickHandler">
        <div class="steptab__content">
            <i v-bind:class="iconClass"></i>
            <div class="steptab__label">{{label}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'StepTab',
  props: {
    step: { required: true },
    index: { required: true, type: Number },
    stepsCount: { required: true, type: Number },
    currentStep: { required: true, type: String, default: '' },
    lastActiveStepIndex: { required: true, type: Number },
  },
  data() {
    return {
      iconClass: 'steptab__icon fa ' + this.step.icon,
      tabClass: 'steptab steptab--steps-' + this.stepsCount,
      tabAnimateClass: 'steptab-animate-' + this.index,
    };
  },
  computed: {
    name() {
      return this.step.name;
    },
    icon() {
      return this.step.icon;
    },
    label() {
      return this.step.label;
    },
    /**
     * A steptab is selected if it's name
     * is the same as the current step.
     */
    isSelected() {
      return this.name === this.currentStep;
    },
    /**
     * A steptab is disabled if it's index
     * is bigger that the index of the last active step.
     */
    isDisabled() {
      return this.index > this.lastActiveStepIndex;
    },
  },
  methods: {
    /**
     * Steptab click handler.
     * On click if the tab is not already selected or disabled
     * emits a click event and passes the step's data.
     */
    clickHandler() {
      if (this.isSelected || this.isDisabled) return;
      this.$emit('click', this.step);
    },
  },
};
</script>


