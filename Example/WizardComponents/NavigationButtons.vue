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
  border-radius: 50%;
  background-color: white;
  height: 39px;
  width: 51px;
}
.navigationbuttons .navigationbuttons__next:hover {
   background-color: #f27572;   
  box-shadow:  rgba(0,0,0,.6) 0 1px 4px 0;
}
.navigationbuttons .navigationbuttons__next:hover .go-next{
   color: white;
}
.go-next{
    margin-left: 20px;
    margin-top: 5px;
    color: #aaa;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}



</style>
<template>
<!-- <transition appear name="fade"> -->
      <div class="navigationbuttons clearfix">
        <div v-if="hasPrevious"
             v-bind:disabled="!isPreviousEnabled"
             @click="previousButtonClickHandler"
             class="navigationbuttons__previous btn-u btn-u-dark">
             <i class="fas fa-2x fa-angle-left go-next"></i>
          </div>
       
            <div v-if="hasNext"
                v-bind:disabled="!isNextEnabled"
                @click="nextButtonClickHandler"
                class="navigationbuttons__next pull-right">
                  <i class="fas fa-2x fa-angle-right go-next"></i>
            </div> <!-- btn btn-success -->
      
    </div>
<!-- </transition> -->
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


