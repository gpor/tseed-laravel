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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX3Z1ZV9jb21wb25lbnRzX0VudHJpZXNBY2NvcmRpb25fdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUEsaUVBQWU7RUFDZkEsd0JBREE7RUFFQUMsY0FGQTtFQUlBQztJQUNBQztNQUNBQyxXQURBO01BRUFDO0lBRkEsQ0FEQTtJQUtBQztNQUNBRixZQURBO01BRUFDO0lBRkE7RUFMQSxDQUpBO0VBY0FFO0lBQUE7TUFDQUM7SUFEQTtFQUFBLENBZEE7RUFpQkFDLE9BakJBLHFCQWlCQTtJQUFBOztJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0FDO01BQ0FBO1FBQ0FDO1FBQ0FBO01BQ0EsQ0FIQTs7TUFJQTtJQUNBLENBUEE7SUFRQUM7RUFDQTtBQTlCQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLElBQUlDLE1BQU0sR0FBRyxTQUFTQSxNQUFULEdBQWtCO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEsT0FBT0EsRUFBRSxDQUNQLEtBRE8sRUFFUDtJQUFFRSxXQUFXLEVBQUU7RUFBZixDQUZPLEVBR1BILEdBQUcsQ0FBQ0ksRUFBSixDQUFPSixHQUFHLENBQUNOLFNBQVgsRUFBc0IsVUFBVUUsS0FBVixFQUFpQlMsQ0FBakIsRUFBb0I7SUFDeEMsT0FBT0osRUFBRSxDQUNQLEtBRE8sRUFFUDtNQUFFSyxHQUFHLEVBQUVWLEtBQUssQ0FBQ1csRUFBYjtNQUFpQkosV0FBVyxFQUFFO0lBQTlCLENBRk8sRUFHUCxDQUFDRixFQUFFLENBQUMsaUJBQUQsRUFBb0I7TUFBRU8sS0FBSyxFQUFFO1FBQUVaLEtBQUssRUFBRUEsS0FBVDtRQUFnQlMsQ0FBQyxFQUFFQTtNQUFuQjtJQUFULENBQXBCLENBQUgsQ0FITyxFQUlQLENBSk8sQ0FBVDtFQU1ELENBUEQsQ0FITyxFQVdQLENBWE8sQ0FBVDtBQWFELENBaEJEOztBQWlCQSxJQUFJSSxlQUFlLEdBQUcsRUFBdEI7QUFDQVYsTUFBTSxDQUFDVyxhQUFQLEdBQXVCLElBQXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUNDZkUsa0JBQVlqQixJQUFaLEVBQWtCO0VBQUE7O0VBQUE7O0VBQ2hCLElBQU1rQixNQUFNLEdBQUcsQ0FDYixTQURhLEVBRWIsSUFGYSxFQUdiLFdBSGEsRUFJYixLQUphLEVBS2IsWUFMYSxFQU1iLFlBTmEsRUFPYixTQVBhLENBQWY7RUFTQUEsTUFBTSxDQUFDQyxPQUFQLENBQWUsVUFBQUMsS0FBSyxFQUFJO0lBQ3RCLElBQUlBLEtBQUssSUFBSXBCLElBQWIsRUFBbUI7TUFDakIsS0FBSSxDQUFDb0IsS0FBRCxDQUFKLEdBQWNwQixJQUFJLENBQUNvQixLQUFELENBQWxCO0lBQ0QsQ0FGRCxNQUVPO01BQ0xmLE9BQU8sQ0FBQ2dCLEtBQVIsQ0FBYyxzQkFBb0JELEtBQWxDO0lBQ0Q7RUFDRixDQU5EO0VBT0EsS0FBS0UsVUFBTCxHQUFrQixLQUFsQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI0RjtBQUMzQjtBQUNMOzs7QUFHL0Q7QUFDQSxDQUFnRztBQUNoRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxzRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdENxTSxDQUFDLGlFQUFlLDJNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F4Tzs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvdnVlL2NvbXBvbmVudHMvRW50cmllc0FjY29yZGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3Z1ZS9jb21wb25lbnRzL0VudHJpZXNBY2NvcmRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9saWIvRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3Z1ZS9jb21wb25lbnRzL0VudHJpZXNBY2NvcmRpb24udnVlP2FjZDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3Z1ZS9jb21wb25lbnRzL0VudHJpZXNBY2NvcmRpb24udnVlPzEyZGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbnRyaWVzLWFjY29yZGlvblwiPlxuICAgIDxkaXZcbiAgICAgIHYtZm9yPVwiKGVudHJ5LCBpKSBpbiBlbnRyeU9ianNcIlxuICAgICAgOmtleT1cImVudHJ5LmlkXCJcbiAgICAgIGNsYXNzPVwiLWVudHJ5XCJcbiAgICA+XG4gICAgICA8RW50cnlFeHBhbmRhYmxlXG4gICAgICAgIDplbnRyeT1cImVudHJ5XCJcbiAgICAgICAgOmk9XCJpXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBFbnRyeSBmcm9tICd+L2pzL2xpYi9FbnRyeS5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRW50cmllc0FjY29yZGlvbicsXG4gIGNvbXBvbmVudHM6IHtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBlbnRyaWVzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgZW50cmllc0FwaVVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBlbnRyeU9ianM6IFtdLFxuICB9KSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvLyB0aGlzLmVudHJ5T2JqcyA9IHRoaXMuZW50cmllcy5tYXAoZW50cnkgPT4gbmV3IEVudHJ5KGVudHJ5KSkuc29ydCgoYSwgYikgPT4gYS5wb3MgLSBiLnBvcylcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5lbnRyaWVzQXBpVXJsJywgdGhpcy5lbnRyaWVzQXBpVXJsLCB0aGlzLiRyb290LmVudHJpZXNBcGlVcmwpXG4gICAgdGhpcy4kcm9vdC5lbnRyaWVzQXBpVXJsID0gdGhpcy5lbnRyaWVzQXBpVXJsO1xuICAgIHRoaXMuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGVudHJ5LmNoaWxkcmVuUXVlcmllZCA9IHRydWVcbiAgICAgIGVudHJ5LmVudHJpZXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZS5jaGlsZHJlblF1ZXJpZWQgPSBmYWxzZVxuICAgICAgICBlLmVudHJpZXMgPSBbXVxuICAgICAgfSlcbiAgICAgIHRoaXMuZW50cnlPYmpzLnB1c2goZW50cnkpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygndGhpcy5lbnRyaWVzJywgdGhpcy5lbnRyeU9ianMpXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW50cmllcy1hY2NvcmRpb25cIiB9LFxuICAgIF92bS5fbChfdm0uZW50cnlPYmpzLCBmdW5jdGlvbiAoZW50cnksIGkpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBrZXk6IGVudHJ5LmlkLCBzdGF0aWNDbGFzczogXCItZW50cnlcIiB9LFxuICAgICAgICBbX2MoXCJFbnRyeUV4cGFuZGFibGVcIiwgeyBhdHRyczogeyBlbnRyeTogZW50cnksIGk6IGkgfSB9KV0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgY29uc3QgZmllbGRzID0gW1xuICAgICAgJ2NvbnRlbnQnLFxuICAgICAgJ2lkJyxcbiAgICAgICdwYXJlbnRfaWQnLFxuICAgICAgJ3BvcycsXG4gICAgICAnY3JlYXRlZF9hdCcsXG4gICAgICAndXBkYXRlZF9hdCcsXG4gICAgICAnZW50cmllcycsXG4gICAgXVxuICAgIGZpZWxkcy5mb3JFYWNoKGZOYW1lID0+IHtcbiAgICAgIGlmIChmTmFtZSBpbiBkYXRhKSB7XG4gICAgICAgIHRoaXNbZk5hbWVdID0gZGF0YVtmTmFtZV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VudHJ5IGlzIG1pc3NpbmcgJytmTmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRW50cmllc0FjY29yZGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmM5OTM3N2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRW50cmllc0FjY29yZGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VudHJpZXNBY2NvcmRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9nYWxheHlwb3Jwb2lzZS93ZWIvZXhwL3RzZWVkLWxhcmF2ZWwvdHNlZWQtbGFyYXZlbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2Yzk5Mzc3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2Yzk5Mzc3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2Yzk5Mzc3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW50cmllc0FjY29yZGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmM5OTM3N2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmM5OTM3N2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92dWUvY29tcG9uZW50cy9FbnRyaWVzQWNjb3JkaW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnRyaWVzQWNjb3JkaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VudHJpZXNBY2NvcmRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwicHJvcHMiLCJlbnRyaWVzIiwidHlwZSIsInJlcXVpcmVkIiwiZW50cmllc0FwaVVybCIsImRhdGEiLCJlbnRyeU9ianMiLCJjcmVhdGVkIiwiZW50cnkiLCJlIiwiY29uc29sZSIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl9sIiwiaSIsImtleSIsImlkIiwiYXR0cnMiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwiZmllbGRzIiwiZm9yRWFjaCIsImZOYW1lIiwiZXJyb3IiLCJpc0V4cGFuZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==