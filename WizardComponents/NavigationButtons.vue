<style>
.navigationbuttons {
  display: table;
  margin-top: 5px;
  width: 100%;
}

.navigationbuttons .navigationbuttons__previous[disabled],
.navigationbuttons .navigationbuttons__next[disabled],
.navigationbuttons .navigationbuttons__previous:disabled,
.navigationbuttons .navigationbuttons__next:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}

.navigationbuttons .navigationbuttons__previous {
  float: left;
}

.navigationbuttons .navigationbuttons__next {
  float: right;
}
</style>
<template>
      <div class="navigationbuttons clearfix">
        <div v-if="hasPrevious"
             v-bind:disabled="!isPreviousEnabled"
             @click="previousButtonClickHandler"
             class="navigationbuttons__previous btn-u btn-u-dark">ΠΙΣΩ</div>
        <div v-if="hasNext"
             v-bind:disabled="!isNextEnabled"
             @click="nextButtonClickHandler"
             class="navigationbuttons__next btn btn-u pull-right">ΣΥΝΕΧΕΙΑ</div>
    </div>
</template>
<script>
export default {
  name: 'NavigationButtons',
  props: {
    hasPrevious: { default: false },
    isPreviousEnabled: { default: false },
    hasNext: { default: false },
    isNextEnabled: { default: false },
  },
  data() {
    return {};
  },
  methods: {
    /**
     * Handles the previous button click
     * and pass the event to parrent component
     */
    previousButtonClickHandler() {
      if (!this.hasPrevious || !this.isPreviousEnabled) return;

      this.$emit('previousClicked');
    },
    /**
     * Handles the next button click
     * and pass the event to parrent component
     */
    nextButtonClickHandler() {
      if (!this.hasNext || !this.isNextEnabled) return;

      this.$emit('nextClicked');
    },
  },
};
</script>


