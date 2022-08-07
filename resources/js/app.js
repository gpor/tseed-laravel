require('./bootstrap');

import Vue from 'vue'
window.Vue = Vue
import axios from 'axios'
window.axios = axios
import Auth from '~/js/lib/Auth.js'
import { PageModalSml } from '~/js/lib/PageModal.js'
import AccordionPanels from '~/js/lib/AccordionPanels.js'

import contenteditable from 'vue-contenteditable'
Vue.use(contenteditable)

Vue.component('TypeSeedApp', () => import('./vue/components/TypeSeedApp.vue'))
Vue.component('PageHeader', () => import('./vue/components/PageHeader.vue'))
Vue.component('AccordionPanel', () => import('./vue/components/AccordionPanel.vue'))
Vue.component('AccordionContainer', () => import('./vue/components/AccordionContainer.vue'))
Vue.component('EntriesAccordion', () => import('./vue/components/EntriesAccordion.vue'))
Vue.component('EntryExpandable', () => import('./vue/components/EntryExpandable.vue'))
Vue.component('FullLogo', () => import('./vue/components/svg/FullLogo.vue'))


const auth = new Auth
const pageModalSml = new PageModalSml
const accordionPanels = new AccordionPanels


new Vue({
  el: '#vue-app',
  data: () => ({
    auth,
    pageModalSml,
    accordionPanels,
    isEditing: false,
  }),
  methods: {
    entriesApiCall(rootId) {
      const params = { rootId }
      console.log('apiUrlBase', apiUrlBase)
      return axios.get(apiUrlBase + '/api/entries-with-children', { params })
    },
    newEntry(data) {
      return {
        id: 0,
        content: '',
        entries: [],
        childrenQueried: true,
        isEditing: true,
        existsInDb: false,
        ...data,
      }
    },
  },
});
