const store = {
    state: {
        steps: [{
                name: 'Step1',
                label: 'Step 1',
                icon: 'fa-list-ul',
            },
            {
                name: 'Step2',
                label: 'Step 2',
                icon: 'fa-list-ul',
            },
            {
                name: 'Step3',
                label: 'Step 3',
                icon: 'fa-list-ul',
            }
        ],
        tabsOrSpaces: [{
                Id: 1,
                Description: 'Tabs',
                Notes: '',
                icon: 'fa-burn'
            },
            {
                Id: 2,
                Description: 'Spaces',
                Notes: '',
                icon: 'fa-burn'
            },
            {
                Id: 3,
                Description: 'Nah, I dont care',
                Notes: '',
                icon: 'fa-burn'
            },
        ],
        currentStep: 'Step1',
        lastActiveStepIndex: 0,
        lastName: '',
        firstName: '',
        selectedAnswer: 0,
        isStep1Valid: false,
        isStep2Valid: false,
        isStep3Valid: true,
    },
    setFirstName(value) {
        this.state.firstName = value;
    },
    setLastName(value) {
        this.state.lastName = value;
    },
    setAnswer(value) {
        this.state.selectedAnswer = value;
    },
    setStep1Valid(value) {
        this.state.isStep1Valid = value;
    },
    setStep2Valid(value) {
        this.state.isStep2Valid = value;
    },
    setCurrentStep(stepName) {
        this.state.currentStep = stepName;
    },
    /**
     * Returns the step object
     * of the current step.
     */
    getCurrentStepObject() {
        return this.state.steps.find(step =>
            step.name === this.state.currentStep);
    },
    /**
     * Returns the index of the current step
     * in the steps list.
     */
    stepIndex() {
        var currentStep = this.state.currentStep;
        return this.state.steps.findIndex(step => step.name === currentStep);

    },
    gotToNextStep() {
        var stepIndex = this.stepIndex();
        stepIndex++;
        if (this.state.lastActiveStepIndex == this.state.steps.length) {
            return;
        }
        if (
            stepIndex >= this.state.steps.length ||
            stepIndex > this.state.lastActiveStepIndex
        )
            return;
        this.state.currentStep = this.state.steps[stepIndex].name;
    },
};
export default store;