require('./bootstrap');

import Vue from 'vue'
window.Vue = Vue
import axios from 'axios'
window.axios = axios
import Auth from '~/js/lib/Auth.js'
import { PageModalSml } from '~/js/lib/PageModal.js'

Vue.component('TypeSeedApp', () => import('./vue/components/TypeSeedApp.vue'))
Vue.component('PageHeader', () => import('./vue/components/PageHeader.vue'))
Vue.component('AccordionWithHeader', () => import('./vue/components/AccordionWithHeader.vue'))
Vue.component('AccordionContainer', () => import('./vue/components/AccordionContainer.vue'))
Vue.component('EntriesAccordion', () => import('./vue/components/EntriesAccordion.vue'))
Vue.component('EntryExpandable', () => import('./vue/components/EntryExpandable.vue'))
Vue.component('FullLogo', () => import('./vue/components/svg/FullLogo.vue'))


const auth = new Auth
const pageModalSml = new PageModalSml



new Vue({
  el: '#vue-app',
  data: () => ({
    auth,
    pageModalSml,
    entriesApiUrl: '',
  }),
});
