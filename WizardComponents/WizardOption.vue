<style scoped>
.wizard__option-wrapper {
  padding: 5px;
  float: left;
}

.wizard__option {
  cursor: pointer;
  padding: 0;
  border-radius: 5px !important;
  background: #aaa;
  border-radius: 45px !important;
  padding-right: 20px;
}

.wizard__option:hover,
.wizard__option.wizard__option--selected {
  background: #72c02c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  color: white !important;
}

.wizard__option-icon {
  height: 45px;
  width: 45px;
  border-radius: 50% !important;
  float: left;
  position: relative;
  font-size: 16px;
  line-height: 45px;
  text-align: center;
  display: inline-block;
  color: white;
}

.wizard__option-content {
  float: left;
  margin-top: 2px;
}

.wizard__option-content h3 {
  color: white;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 0;
  text-transform: capitalize;
}

.wizard__option-content p {
  color: white;
  margin-bottom: 0;
  font-size: 12px;
}

.wizard__option.wizard__option--no-subtitle .wizard__option-content {
  margin-top: 8px;
}

@media (max-width: 991px) {
  .wizard__option-wrapper {
    width: 100%;
  }

  .wizard__option-content {
    max-width: calc(100% - 45px);
  }

  .wizard__option-content h3 {
    -ms-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
<template>
  <div class="wizard__option-wrapper clearfix">
        <div v-bind:class="classes"
             v-on:click="optionClickHandler">
            <i v-bind:class="iconClasses"></i>
            <div class="wizard__option-content clearfix">
                <h3>{{title}}</h3>
                <p v-if="hasSubTitle">{{subTitle}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'WizardOption',
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, default: '' },
    icon: { type: String, required: true },
    isSelected: { default: false },
  },
  data() {
    return {};
  },
  computed: {
    /**
     * Indicate if a subtitle is given.
     */
    hasSubTitle() {
      return !!this.subTitle;
    },
    classes() {
      return {
        wizard__option: true,
        clearfix: true,
        'wizard__option--selected': this.isSelected,
        'wizard__option--no-subtitle': !this.hasSubTitle,
      };
    },
    iconClasses() {
      return 'wizard__option-icon fa ' + this.icon;
    },
  },
  methods: {
    /**
     * On click emits a click event with the id of the option.
     */
    optionClickHandler() {
      this.$emit('click', this.id, this.title);
    },
  },
};
</script>

