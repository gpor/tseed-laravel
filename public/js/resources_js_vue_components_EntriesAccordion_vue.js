"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_components_EntriesAccordion_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/EntriesAccordion.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/EntriesAccordion.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_lib_Entry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/js/lib/Entry.js */ "./resources/js/lib/Entry.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EntriesAccordion',
  components: {},
  props: {
    entries: {
      type: Array,
      required: true
    },
    entriesApiUrl: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      entryObjs: []
    };
  },
  created: function created() {
    var _this = this;

    // this.entryObjs = this.entries.map(entry => new Entry(entry)).sort((a, b) => a.pos - b.pos)
    // console.log('this.entriesApiUrl', this.entriesApiUrl, this.$root.entriesApiUrl)
    this.$root.entriesApiUrl = this.entriesApiUrl;
    this.entries.forEach(function (entry) {
      entry.childrenQueried = true;
      entry.entries.forEach(function (e) {
        e.childrenQueried = false;
        e.entries = [];
      });

      _this.entryObjs.push(entry);
    });
    console.log('this.entries', this.entryObjs);
    var prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;

    if (prefersDarkMode) {
      document.body.classList.add('-dark-theme');
    }

    console.log('prefersDarkMode', prefersDarkMode);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/EntriesAccordion.vue?vue&type=template&id=6c99377a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/EntriesAccordion.vue?vue&type=template&id=6c99377a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "entries-accordion"
  }, _vm._l(_vm.entryObjs, function (entry, i) {
    return _c("div", {
      key: entry.id,
      staticClass: "-entry"
    }, [_c("EntryExpandable", {
      attrs: {
        entry: entry,
        i: i
      }
    })], 1);
  }), 0);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/lib/Entry.js":
/*!***********************************!*\
  !*** ./resources/js/lib/Entry.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = /*#__PURE__*/_createClass(function _default(data) {
  var _this = this;

  _classCallCheck(this, _default);

  var fields = ['content', 'id', 'parent_id', 'pos', 'created_at', 'updated_at', 'entries'];
  fields.forEach(function (fName) {
    if (fName in data) {
      _this[fName] = data[fName];
    } else {
      console.error('Entry is missing ' + fName);
    }
  });
  this.isExpanded = false;
});



/***/ }),

/***/ "./resources/js/vue/components/EntriesAccordion.vue":
/*!**********************************************************!*\
  !*** ./resources/js/vue/components/EntriesAccordion.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EntriesAccordion_vue_vue_type_template_id_6c99377a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntriesAccordion.vue?vue&type=template&id=6c99377a& */ "./resources/js/vue/components/EntriesAccordion.vue?vue&type=template&id=6c99377a&");
/* harmony import */ var _EntriesAccordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntriesAccordion.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/EntriesAccordion.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EntriesAccordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EntriesAccordion_vue_vue_type_template_id_6c99377a___WEBPACK_IMPORTED_MODULE_0__.render,
  _EntriesAccordion_vue_vue_type_template_id_6c99377a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/EntriesAccordion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/EntriesAccordion.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/vue/components/EntriesAccordion.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntriesAccordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntriesAccordion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/EntriesAccordion.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntriesAccordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/EntriesAccordion.vue?vue&type=template&id=6c99377a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/vue/components/EntriesAccordion.vue?vue&type=template&id=6c99377a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntriesAccordion_vue_vue_type_template_id_6c99377a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntriesAccordion_vue_vue_type_template_id_6c99377a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EntriesAccordion_vue_vue_type_template_id_6c99377a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntriesAccordion.vue?vue&type=template&id=6c99377a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/EntriesAccordion.vue?vue&type=template&id=6c99377a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX3Z1ZV9jb21wb25lbnRzX0VudHJpZXNBY2NvcmRpb25fdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUEsaUVBQWU7RUFDZkEsd0JBREE7RUFFQUMsY0FGQTtFQUlBQztJQUNBQztNQUNBQyxXQURBO01BRUFDO0lBRkEsQ0FEQTtJQUtBQztNQUNBRixZQURBO01BRUFDO0lBRkE7RUFMQSxDQUpBO0VBY0FFO0lBQUE7TUFDQUM7SUFEQTtFQUFBLENBZEE7RUFpQkFDLE9BakJBLHFCQWlCQTtJQUFBOztJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0FDO01BQ0FBO1FBQ0FDO1FBQ0FBO01BQ0EsQ0FIQTs7TUFJQTtJQUNBLENBUEE7SUFRQUM7SUFDQTs7SUFDQTtNQUNBQztJQUNBOztJQUNBRDtFQUNBO0FBbkNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsSUFBSUUsTUFBTSxHQUFHLFNBQVNBLE1BQVQsR0FBa0I7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQ1AsS0FETyxFQUVQO0lBQUVFLFdBQVcsRUFBRTtFQUFmLENBRk8sRUFHUEgsR0FBRyxDQUFDSSxFQUFKLENBQU9KLEdBQUcsQ0FBQ1AsU0FBWCxFQUFzQixVQUFVRSxLQUFWLEVBQWlCVSxDQUFqQixFQUFvQjtJQUN4QyxPQUFPSixFQUFFLENBQ1AsS0FETyxFQUVQO01BQUVLLEdBQUcsRUFBRVgsS0FBSyxDQUFDWSxFQUFiO01BQWlCSixXQUFXLEVBQUU7SUFBOUIsQ0FGTyxFQUdQLENBQUNGLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQjtNQUFFTyxLQUFLLEVBQUU7UUFBRWIsS0FBSyxFQUFFQSxLQUFUO1FBQWdCVSxDQUFDLEVBQUVBO01BQW5CO0lBQVQsQ0FBcEIsQ0FBSCxDQUhPLEVBSVAsQ0FKTyxDQUFUO0VBTUQsQ0FQRCxDQUhPLEVBV1AsQ0FYTyxDQUFUO0FBYUQsQ0FoQkQ7O0FBaUJBLElBQUlJLGVBQWUsR0FBRyxFQUF0QjtBQUNBVixNQUFNLENBQUNXLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0NmRSxrQkFBWWxCLElBQVosRUFBa0I7RUFBQTs7RUFBQTs7RUFDaEIsSUFBTW1CLE1BQU0sR0FBRyxDQUNiLFNBRGEsRUFFYixJQUZhLEVBR2IsV0FIYSxFQUliLEtBSmEsRUFLYixZQUxhLEVBTWIsWUFOYSxFQU9iLFNBUGEsQ0FBZjtFQVNBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZSxVQUFBQyxLQUFLLEVBQUk7SUFDdEIsSUFBSUEsS0FBSyxJQUFJckIsSUFBYixFQUFtQjtNQUNqQixLQUFJLENBQUNxQixLQUFELENBQUosR0FBY3JCLElBQUksQ0FBQ3FCLEtBQUQsQ0FBbEI7SUFDRCxDQUZELE1BRU87TUFDTGhCLE9BQU8sQ0FBQ2lCLEtBQVIsQ0FBYyxzQkFBb0JELEtBQWxDO0lBQ0Q7RUFDRixDQU5EO0VBT0EsS0FBS0UsVUFBTCxHQUFrQixLQUFsQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI0RjtBQUMzQjtBQUNMOzs7QUFHL0Q7QUFDQSxDQUFnRztBQUNoRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxzRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdENxTSxDQUFDLGlFQUFlLDJNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvdnVlL2NvbXBvbmVudHMvRW50cmllc0FjY29yZGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3Z1ZS9jb21wb25lbnRzL0VudHJpZXNBY2NvcmRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9saWIvRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3Z1ZS9jb21wb25lbnRzL0VudHJpZXNBY2NvcmRpb24udnVlP2FjZDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3Z1ZS9jb21wb25lbnRzL0VudHJpZXNBY2NvcmRpb24udnVlPzEyZGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbnRyaWVzLWFjY29yZGlvblwiPlxuICAgIDxkaXZcbiAgICAgIHYtZm9yPVwiKGVudHJ5LCBpKSBpbiBlbnRyeU9ianNcIlxuICAgICAgOmtleT1cImVudHJ5LmlkXCJcbiAgICAgIGNsYXNzPVwiLWVudHJ5XCJcbiAgICA+XG4gICAgICA8RW50cnlFeHBhbmRhYmxlXG4gICAgICAgIDplbnRyeT1cImVudHJ5XCJcbiAgICAgICAgOmk9XCJpXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBFbnRyeSBmcm9tICd+L2pzL2xpYi9FbnRyeS5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRW50cmllc0FjY29yZGlvbicsXG4gIGNvbXBvbmVudHM6IHtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBlbnRyaWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgZW50cmllc0FwaVVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBlbnRyeU9ianM6IFtdLFxuICB9KSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvLyB0aGlzLmVudHJ5T2JqcyA9IHRoaXMuZW50cmllcy5tYXAoZW50cnkgPT4gbmV3IEVudHJ5KGVudHJ5KSkuc29ydCgoYSwgYikgPT4gYS5wb3MgLSBiLnBvcylcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5lbnRyaWVzQXBpVXJsJywgdGhpcy5lbnRyaWVzQXBpVXJsLCB0aGlzLiRyb290LmVudHJpZXNBcGlVcmwpXG4gICAgdGhpcy4kcm9vdC5lbnRyaWVzQXBpVXJsID0gdGhpcy5lbnRyaWVzQXBpVXJsO1xuICAgIHRoaXMuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGVudHJ5LmNoaWxkcmVuUXVlcmllZCA9IHRydWVcbiAgICAgIGVudHJ5LmVudHJpZXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZS5jaGlsZHJlblF1ZXJpZWQgPSBmYWxzZVxuICAgICAgICBlLmVudHJpZXMgPSBbXVxuICAgICAgfSlcbiAgICAgIHRoaXMuZW50cnlPYmpzLnB1c2goZW50cnkpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygndGhpcy5lbnRyaWVzJywgdGhpcy5lbnRyeU9ianMpXG4gICAgY29uc3QgcHJlZmVyc0RhcmtNb2RlID0gd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6ZGFyaylcIikubWF0Y2hlc1xuICAgIGlmIChwcmVmZXJzRGFya01vZGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnLWRhcmstdGhlbWUnKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygncHJlZmVyc0RhcmtNb2RlJywgcHJlZmVyc0RhcmtNb2RlKVxuICB9LFxufVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVudHJpZXMtYWNjb3JkaW9uXCIgfSxcbiAgICBfdm0uX2woX3ZtLmVudHJ5T2JqcywgZnVuY3Rpb24gKGVudHJ5LCBpKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsga2V5OiBlbnRyeS5pZCwgc3RhdGljQ2xhc3M6IFwiLWVudHJ5XCIgfSxcbiAgICAgICAgW19jKFwiRW50cnlFeHBhbmRhYmxlXCIsIHsgYXR0cnM6IHsgZW50cnk6IGVudHJ5LCBpOiBpIH0gfSldLFxuICAgICAgICAxXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIGNvbnN0IGZpZWxkcyA9IFtcbiAgICAgICdjb250ZW50JyxcbiAgICAgICdpZCcsXG4gICAgICAncGFyZW50X2lkJyxcbiAgICAgICdwb3MnLFxuICAgICAgJ2NyZWF0ZWRfYXQnLFxuICAgICAgJ3VwZGF0ZWRfYXQnLFxuICAgICAgJ2VudHJpZXMnLFxuICAgIF1cbiAgICBmaWVsZHMuZm9yRWFjaChmTmFtZSA9PiB7XG4gICAgICBpZiAoZk5hbWUgaW4gZGF0YSkge1xuICAgICAgICB0aGlzW2ZOYW1lXSA9IGRhdGFbZk5hbWVdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFbnRyeSBpcyBtaXNzaW5nICcrZk5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VudHJpZXNBY2NvcmRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjOTkzNzdhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VudHJpZXNBY2NvcmRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FbnRyaWVzQWNjb3JkaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2xlZXN0ZXZlbnMvd2ViL2V4cC90c2VlZC1sYXJhdmVsL3RzZWVkLWxhcmF2ZWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmM5OTM3N2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmM5OTM3N2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmM5OTM3N2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VudHJpZXNBY2NvcmRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjOTkzNzdhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZjOTkzNzdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdnVlL2NvbXBvbmVudHMvRW50cmllc0FjY29yZGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW50cmllc0FjY29yZGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnRyaWVzQWNjb3JkaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9XG4gICAgdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbicgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnMgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJuYW1lIiwiY29tcG9uZW50cyIsInByb3BzIiwiZW50cmllcyIsInR5cGUiLCJyZXF1aXJlZCIsImVudHJpZXNBcGlVcmwiLCJkYXRhIiwiZW50cnlPYmpzIiwiY3JlYXRlZCIsImVudHJ5IiwiZSIsImNvbnNvbGUiLCJkb2N1bWVudCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl9sIiwiaSIsImtleSIsImlkIiwiYXR0cnMiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwiZmllbGRzIiwiZm9yRWFjaCIsImZOYW1lIiwiZXJyb3IiLCJpc0V4cGFuZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==