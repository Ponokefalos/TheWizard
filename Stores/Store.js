const store ={
    state:{
        steps: [{
            name: 'Provisions',
            label: 'Παροχή',
            icon: 'fa-list-ul',
        },

        {
            name: 'Takers',
            label: 'Ενδιαφερόμενοι',
            icon: 'fa-user',
        },
        {
            name: 'Application',
            label: 'Αίτηση',
            icon: 'fa-list-ul',
        },
        {
            name: 'Overview',
            label: 'Προεπισκόπηση',
            icon: 'fa-check',
        },
    ], 
    currentStep: 'Provisions',
    lastActiveStepIndex: 0,
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