require('./bootstrap');

import Vue from 'vue';
window.Vue = Vue;

Vue.component('EntriesAccordion', () => import('./vue/components/EntriesAccordion.vue'))
Vue.component('EntryExpandable', () => import('./vue/components/EntryExpandable.vue'))
Vue.component('FullLogo', () => import('./vue/components/svg/FullLogo.vue'))

const app = new Vue({
  el: '#vue-app',
  data: () => ({
    entriesApiUrl: 'asdfasd',
  }),
});
