import b from 'babel-polyfill';
import Vue from 'vue';
import App from '../Wizard.vue';

const instance = new Vue({
    el: '#app',
    render: h => h(App),
});