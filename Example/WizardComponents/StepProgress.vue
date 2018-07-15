<style>
.stepprogress {
  margin-top: 5px;
  width: 100%;
  height: 5px;
  background-color: #aaa;
  -moz-animation: show-stepprogress 0.8s ease-in;
  -o-animation: show-stepprogress 0.8s ease-in;
  -webkit-animation: show-stepprogress 0.8s ease-in;
  animation: show-stepprogress 0.8s ease-in;
}

.stepprogress .stepprogress__percentage {
  -moz-transition: width 0.2s ease-out;
  -o-transition: width 0.2s ease-out;
  -webkit-transition: width 0.2s ease-out;
  transition: width 0.2s ease-out;
  fill: #0ba29b;
}

@-moz-keyframes show-stepprogress {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@-webkit-keyframes show-stepprogress {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes show-stepprogress {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
</style>
<template>
  <svg class="stepprogress">
        <rect class="stepprogress__percentage" 
              v-bind:width="percentage + '%'" 
              height="100%"/>
    </svg>
</template>
<script>
export default {
  name: 'StepProgress',
  props: {
    stepsCount: { required: true, type: Number },
    lastActiveStepIndex: { required: true, type: Number },
  },
  data() {
    return {};
  },
  computed: {
    percentage() {
      return 100 / this.stepsCount * this.lastActiveStepIndex;
    },
  },
};
</script>

