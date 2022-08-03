require('./bootstrap');

import Vue from 'vue';
window.Vue = Vue;
import axios from 'axios';
window.axios = axios;

Vue.component('EntriesAccordion', () => import('./vue/components/EntriesAccordion.vue'))
Vue.component('EntryExpandable', () => import('./vue/components/EntryExpandable.vue'))
Vue.component('FullLogo', () => import('./vue/components/svg/FullLogo.vue'))

axios.defaults.headers.common['Authorization'] = 'Bearer 1|EijeIwoFdbR2tyoCyTE0mpsIu1OeKbtm3IK9XRpm'

const app = new Vue({
  el: '#vue-app',
  data: () => ({
    entriesApiUrl: '',
  }),
});
