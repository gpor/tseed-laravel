require('./bootstrap');

import Vue from 'vue';


Vue.component('EntriesAccordion', () => import('./vue/components/EntriesAccordion.vue'))

const app = new Vue({
  el: '#vue-app',
});
