exports.ids = [11];
exports.modules = {

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Directives
 // Types


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'rippleable',
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  methods: {
    genRipple(data = {}) {
      if (!this.ripple) return null;
      data.staticClass = 'v-input--selection-controls__ripple';
      data.directives = data.directives || [];
      data.directives.push({
        name: 'ripple',
        value: {
          center: true
        }
      });
      return this.$createElement('div', data);
    }
  }
}));

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ae7a972c", content, true)

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prevent */
/* harmony import */ var _components_VInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _rippleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(274);
/* harmony import */ var _comparable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
// Components
 // Mixins


 // Utilities


function prevent(e) {
  e.preventDefault();
}
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_components_VInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _rippleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _comparable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
  name: 'selectable',
  model: {
    prop: 'inputValue',
    event: 'change'
  },
  props: {
    id: String,
    inputValue: null,
    falseValue: null,
    trueValue: null,
    multiple: {
      type: Boolean,
      default: null
    },
    label: String
  },
  data() {
    return {
      hasColor: this.inputValue,
      lazyValue: this.inputValue
    };
  },
  computed: {
    computedColor() {
      if (!this.isActive) return undefined;
      if (this.color) return this.color;
      if (this.isDark && !this.appIsDark) return 'white';
      return 'primary';
    },
    isMultiple() {
      return this.multiple === true || this.multiple === null && Array.isArray(this.internalValue);
    },
    isActive() {
      const value = this.value;
      const input = this.internalValue;
      if (this.isMultiple) {
        if (!Array.isArray(input)) return false;
        return input.some(item => this.valueComparator(item, value));
      }
      if (this.trueValue === undefined || this.falseValue === undefined) {
        return value ? this.valueComparator(value, input) : Boolean(input);
      }
      return this.valueComparator(input, this.trueValue);
    },
    isDirty() {
      return this.isActive;
    },
    rippleState() {
      return !this.isDisabled && !this.validationState ? undefined : this.validationState;
    }
  },
  watch: {
    inputValue(val) {
      this.lazyValue = val;
      this.hasColor = val;
    }
  },
  methods: {
    genLabel() {
      const label = _components_VInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].options.methods.genLabel.call(this);
      if (!label) return label;
      label.data.on = {
        // Label shouldn't cause the input to focus
        click: prevent
      };
      return label;
    },
    genInput(type, attrs) {
      return this.$createElement('input', {
        attrs: Object.assign({
          'aria-checked': this.isActive.toString(),
          disabled: this.isDisabled,
          id: this.computedId,
          role: type,
          type
        }, attrs),
        domProps: {
          value: this.value,
          checked: this.isActive
        },
        on: {
          blur: this.onBlur,
          change: this.onChange,
          focus: this.onFocus,
          keydown: this.onKeydown,
          click: prevent
        },
        ref: 'input'
      });
    },
    onClick(e) {
      this.onChange();
      this.$emit('click', e);
    },
    onChange() {
      if (!this.isInteractive) return;
      const value = this.value;
      let input = this.internalValue;
      if (this.isMultiple) {
        if (!Array.isArray(input)) {
          input = [];
        }
        const length = input.length;
        input = input.filter(item => !this.valueComparator(item, value));
        if (input.length === length) {
          input.push(value);
        }
      } else if (this.trueValue !== undefined && this.falseValue !== undefined) {
        input = this.valueComparator(input, this.trueValue) ? this.falseValue : this.trueValue;
      } else if (value) {
        input = this.valueComparator(input, value) ? null : value;
      } else {
        input = !input;
      }
      this.validate(true, input);
      this.internalValue = input;
      this.hasColor = input;
    },
    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    /** @abstract */
    onKeydown(e) {}
  }
}));

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  bind(el, binding, vnode) {
    el.addEventListener("input", function (event) {
      // Remove any non-numeric characters
      let value = event.target.value.replace(/[^0-9]/g, "");
      // Format the value with comma-separated thousands
      value = parseInt(value, 10).toLocaleString("en-US");
      // Update the input value
      if (value === 'NaN') value = '0';
      vnode.componentInstance.$emit("input", value);
    });
  }
});

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("59f225a8", content, true)

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(313);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(114);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
// Styles

 // Mixins


 // Directives

 // Components


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].extend({
  name: 'v-switch',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  props: {
    inset: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls v-input--switch': true,
        'v-input--switch--flat': this.flat,
        'v-input--switch--inset': this.inset
      };
    },
    attrs() {
      return {
        'aria-checked': String(this.isActive),
        'aria-disabled': String(this.isDisabled),
        role: 'switch'
      };
    },
    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    },
    switchData() {
      return this.setTextColor(this.loading ? undefined : this.validationState, {
        class: this.themeClasses
      });
    }
  },
  methods: {
    genDefaultSlot() {
      return [this.genSwitch(), this.genLabel()];
    },
    genSwitch() {
      const {
        title,
        ...switchAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.genInput('checkbox', {
        ...this.attrs,
        ...switchAttrs
      }), this.genRipple(this.setTextColor(this.validationState, {
        directives: [{
          name: 'touch',
          value: {
            left: this.onSwipeLeft,
            right: this.onSwipeRight
          }
        }]
      })), this.$createElement('div', {
        staticClass: 'v-input--switch__track',
        ...this.switchData
      }), this.$createElement('div', {
        staticClass: 'v-input--switch__thumb',
        ...this.switchData
      }, [this.genProgress()])]);
    },
    genProgress() {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_5__[/* VFabTransition */ "c"], {}, [this.loading === false ? null : this.$slots.progress || this.$createElement(_VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        props: {
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          size: 16,
          width: 2,
          indeterminate: true
        }
      })]);
    },
    onSwipeLeft() {
      if (this.isActive) this.onChange();
    },
    onSwipeRight() {
      if (!this.isActive) this.onChange();
    },
    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].left && this.isActive || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* keyCodes */ "y"].right && !this.isActive) this.onChange();
    }
  }
}));

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/VAutocomplete.js
var VAutocomplete = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(264);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(267);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(266);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js
var VSwitch = __webpack_require__(338);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/customer/CustomerForm.vue?vue&type=template&id=75c741a4&














var CustomerFormvue_type_template_id_75c741a4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    attrs: {
      "justify": "center"
    }
  }, [_c(VDialog["a" /* default */], {
    attrs: {
      "hide-overlay": "",
      "persistent": "",
      "width": "300"
    },
    model: {
      value: _vm.isloading,
      callback: function ($$v) {
        _vm.isloading = $$v;
      },
      expression: "isloading"
    }
  }, [_c('loading-indicator')], 1), _vm._v(" "), _c(VCard["a" /* default */], {
    staticClass: "pa-4"
  }, [_c(components_VCard["d" /* VCardTitle */], [_c('span', {
    staticClass: "text-h5"
  }, [_vm._v("ຈັດການລູກຄ້າ")])]), _vm._v(" "), _c(components_VCard["c" /* VCardText */], [_c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ຊື່ລູກຄ້າ*",
      "required": ""
    },
    model: {
      value: _vm.client.name,
      callback: function ($$v) {
        _vm.$set(_vm.client, "name", $$v);
      },
      expression: "client.name"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "required": "",
      "label": "ບໍລິສັດ*"
    },
    model: {
      value: _vm.client.company,
      callback: function ($$v) {
        _vm.$set(_vm.client, "company", $$v);
      },
      expression: "client.company"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ອີເມວ*",
      "persistent-hint": "",
      "required": ""
    },
    model: {
      value: _vm.client.email,
      callback: function ($$v) {
        _vm.$set(_vm.client, "email", $$v);
      },
      expression: "client.email"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ທີ່ຢູ່*",
      "required": ""
    },
    model: {
      value: _vm.client.address,
      callback: function ($$v) {
        _vm.$set(_vm.client, "address", $$v);
      },
      expression: "client.address"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "ເບີໂທປະສານສຳພັນ*",
      "required": ""
    },
    model: {
      value: _vm.client.telephone,
      callback: function ($$v) {
        _vm.$set(_vm.client, "telephone", $$v);
      },
      expression: "client.telephone"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    attrs: {
      "label": "Credit *",
      "required": ""
    },
    model: {
      value: _vm.client.credit,
      callback: function ($$v) {
        _vm.$set(_vm.client, "credit", $$v);
      },
      expression: "client.credit"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "sm": "6",
      "md": "4"
    }
  }, [_c(VTextField["a" /* default */], {
    directives: [{
      name: "comma-thousand",
      rawName: "v-comma-thousand"
    }],
    attrs: {
      "label": "ອັດຕາເປີເຊັນປັບໃຫມ ການຈ່າຍຊ້າ*",
      "required": ""
    },
    model: {
      value: _vm.client.lateChargePercent,
      callback: function ($$v) {
        _vm.$set(_vm.client, "lateChargePercent", $$v);
      },
      expression: "client.lateChargePercent"
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VAutocomplete["a" /* default */], {
    attrs: {
      "items": _vm.grades,
      "label": "Grade *"
    },
    model: {
      value: _vm.client.grade,
      callback: function ($$v) {
        _vm.$set(_vm.client, "grade", $$v);
      },
      expression: "client.grade"
    }
  })], 1), _vm._v(" "), _c(VSwitch["a" /* default */], {
    attrs: {
      "label": "Active",
      "true-value": true,
      "false-value": false
    },
    model: {
      value: _vm.client.isActive,
      callback: function ($$v) {
        _vm.$set(_vm.client, "isActive", $$v);
      },
      expression: "client.isActive"
    }
  })], 1)], 1), _vm._v(" "), _c('small', [_vm._v("* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ")])], 1), _vm._v(" "), _c(components_VCard["a" /* VCardActions */], [_c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue-darken-1",
      "variant": "text"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('close-dialog');
      }
    }
  }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "blue-darken-1",
      "variant": "text"
    },
    on: {
      "click": _vm.submitData
    }
  }, [_vm._v("\n                Save\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/customer/CustomerForm.vue?vue&type=template&id=75c741a4&

// EXTERNAL MODULE: ./plugins/comma-thousand.js
var comma_thousand = __webpack_require__(306);

// EXTERNAL MODULE: ./common/index.js
var common = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/customer/CustomerForm.vue?vue&type=script&lang=js&


/* harmony default export */ var CustomerFormvue_type_script_lang_js_ = ({
  props: {
    customerId: {
      type: Number,
      default: 0
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    commaThousand: comma_thousand["a" /* default */]
  },
  data() {
    return {
      isloading: false,
      client: {
        name: '',
        company: '',
        email: '',
        address: '',
        telephone: '',
        credit: 30,
        lateChargePercent: 0,
        grade: 'C',
        isActive: true
      },
      grades: ['A', 'B', 'C', 'D', 'E', 'F']
    };
  },
  mounted() {
    if (this.isEdit) {
      console.log("Load payment header");
      this.loadEntryById();
    }
  },
  computed: {},
  methods: {
    async loadEntryById() {
      this.isloading = true;
      await this.$axios.get(`/api/client/find/${this.customerId}`).then(response => {
        this.client = response.data;
      }).catch(error => {
        Object(common["h" /* swalError2 */])(this.$swal, "Error", error.response.data);
      });
      this.isloading = false;
    },
    async submitData() {
      if (this.isloading) return;
      this.isloading = true;
      if (this.isEdit) {
        await this.$axios.put(`/api/client/update/${this.customerId}`, this.client).then(response => {
          Object(common["i" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.$emit('reload-data');
        }).catch(error => {
          Object(common["h" /* swalError2 */])(this.$swal, "Error", error.response.data);
        });
      } else {
        await this.$axios.post("/api/client/create", this.client).then(response => {
          Object(common["i" /* swalSuccess */])(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ');
          this.$emit('reload-data');
        }).catch(error => {
          Object(common["h" /* swalError2 */])(this.$swal, "Error", error.response.data.errors[0].msg);
        });
      }
      this.isloading = false;
    }
  }
});
// CONCATENATED MODULE: ./components/customer/CustomerForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var customer_CustomerFormvue_type_script_lang_js_ = (CustomerFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./components/customer/CustomerForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  customer_CustomerFormvue_type_script_lang_js_,
  CustomerFormvue_type_template_id_75c741a4_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "402fc6c2"
  
)

/* harmony default export */ var CustomerForm = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LoadingIndicator: __webpack_require__(111).default})


/***/ })

};;
//# sourceMappingURL=customer-form.js.map