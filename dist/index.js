!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory(require("vue")) : "function" == typeof define && define.amd ? define([ "vue" ], factory) : "object" == typeof exports ? exports["vue-dropdown-menu"] = factory(require("vue")) : root["vue-dropdown-menu"] = factory(root.vue);
}("undefined" != typeof self ? self : this, function(__WEBPACK_EXTERNAL_MODULE_11__) {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "/dist/", __webpack_require__(__webpack_require__.s = 6);
    }([ function(module, exports) {
        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "", cssMapping = item[3];
            if (!cssMapping) return content;
            if (useSourceMap && "function" == typeof btoa) {
                var sourceMapping = toComment(cssMapping);
                return [ content ].concat(cssMapping.sources.map(function(source) {
                    return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                })).concat([ sourceMapping ]).join("\n");
            }
            return [ content ].join("\n");
        }
        function toComment(sourceMap) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
        module.exports = function(useSourceMap) {
            var list = [];
            return list.toString = function() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
                }).join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function addStylesClient(parentId, list, _isProduction, _options) {
            isProduction = _isProduction, options = _options || {};
            var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__.a)(parentId, list);
            return addStylesToDom(styles), function(newList) {
                for (var mayRemove = [], i = 0; i < styles.length; i++) {
                    var item = styles[i], domStyle = stylesInDom[item.id];
                    domStyle.refs--, mayRemove.push(domStyle);
                }
                newList ? (styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__.a)(parentId, newList), 
                addStylesToDom(styles)) : styles = [];
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (0 === domStyle.refs) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        }
        function addStylesToDom(styles) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                    for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j]));
                    domStyle.parts.length > item.parts.length && (domStyle.parts.length = item.parts.length);
                } else {
                    for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j]));
                    stylesInDom[item.id] = {
                        id: item.id,
                        refs: 1,
                        parts: parts
                    };
                }
            }
        }
        function createStyleElement() {
            var styleElement = document.createElement("style");
            return styleElement.type = "text/css", head.appendChild(styleElement), styleElement;
        }
        function addStyle(obj) {
            var update, remove, styleElement = document.querySelector("style[" + ssrIdKey + '~="' + obj.id + '"]');
            if (styleElement) {
                if (isProduction) return noop;
                styleElement.parentNode.removeChild(styleElement);
            }
            if (isOldIE) {
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement()), update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), 
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
            } else styleElement = createStyleElement(), update = applyToTag.bind(null, styleElement), 
            remove = function() {
                styleElement.parentNode.removeChild(styleElement);
            };
            return update(obj), function(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj);
                } else remove();
            };
        }
        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
                var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
                childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
            }
        }
        function applyToTag(styleElement, obj) {
            var css = obj.css, media = obj.media, sourceMap = obj.sourceMap;
            if (media && styleElement.setAttribute("media", media), options.ssrId && styleElement.setAttribute(ssrIdKey, obj.id), 
            sourceMap && (css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */", css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */"), 
            styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
                for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
                styleElement.appendChild(document.createTextNode(css));
            }
        }
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_exports__.default = addStylesClient;
        var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(10), hasDocument = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !hasDocument) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var stylesInDom = {}, head = hasDocument && (document.head || document.getElementsByTagName("head")[0]), singletonElement = null, singletonCounter = 0, isProduction = !1, noop = function() {}, options = null, ssrIdKey = "data-vue-ssr-id", isOldIE = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()), replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
                return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
            };
        }();
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
            scriptExports = scriptExports || {};
            var type = typeof scriptExports.default;
            "object" !== type && "function" !== type || (scriptExports = scriptExports.default);
            var options = "function" == typeof scriptExports ? scriptExports.options : scriptExports;
            render && (options.render = render, options.staticRenderFns = staticRenderFns, options._compiled = !0), 
            functionalTemplate && (options.functional = !0), scopeId && (options._scopeId = scopeId);
            var hook;
            if (moduleIdentifier ? (hook = function(context) {
                context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, 
                context || "undefined" == typeof __VUE_SSR_CONTEXT__ || (context = __VUE_SSR_CONTEXT__), 
                injectStyles && injectStyles.call(this, context), context && context._registeredComponents && context._registeredComponents.add(moduleIdentifier);
            }, options._ssrRegister = hook) : injectStyles && (hook = shadowMode ? function() {
                injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles), hook) if (options.functional) {
                options._injectStyles = hook;
                var originalRender = options.render;
                options.render = function(h, context) {
                    return hook.call(context), originalRender(h, context);
                };
            } else {
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
            }
            return {
                exports: scriptExports,
                options: options
            };
        }
        __webpack_exports__.a = normalizeComponent;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(11), __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__), menuBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
            created: function() {
                var _this = this;
                document.querySelector("body").addEventListener("click", function() {
                    _this.$emit("close-menu");
                });
            }
        });
        __webpack_exports__.a = {
            name: "dropdown-menu",
            data: function() {
                return {
                    items: [],
                    showMenu: !1
                };
            },
            props: {},
            created: function() {
                var _this2 = this;
                this.getFields(), menuBus.$on("close-menu", function() {
                    console.log("on close-menu"), _this2.showMenu = !1;
                });
            },
            updated: function() {
                this.getFields();
            },
            methods: {
                openMenu: function($event) {
                    $event.stopPropagation(), console.log("openMenu"), menuBus.$emit("close-menu"), 
                    this.showMenu = !0;
                },
                getFields: function() {
                    var _this3 = this;
                    this.$slots.default.forEach(function($child) {
                        if ($child.componentOptions && ("dropdown-menu-item" === $child.componentOptions.tag || "dropdown-menu-sep" === $child.componentOptions.tag)) {
                            $child.componentOptions.propsData.itemClass = "string" == typeof $child.data.staticClass ? $child.data.staticClass : "", 
                            _this3.items.push($child);
                        }
                    });
                }
            },
            render: function(h) {
                var menu = [];
                !0 === this.showMenu && this.items.forEach(function(item) {
                    menu.push(item);
                });
                var c = [ h("span") ];
                return menu.length > 0 && c.push(h("ul", {
                    class: "",
                    attrs: {},
                    on: {
                        click: function(event) {
                            event.stopPropagation(), menuBus.$emit("close-menu");
                        }
                    }
                }, menu)), h("div", {
                    class: "dropdown-menu",
                    on: {
                        click: this.openMenu
                    }
                }, c);
            }
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_exports__.a = {
            name: "dropdown-menu-item",
            props: {
                title: {
                    type: String,
                    required: !0,
                    default: ""
                },
                default: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            methods: {
                menuClick: function() {
                    this.$emit("click");
                }
            }
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_exports__.a = {
            name: "dropdown-menu-sep",
            props: {},
            methods: {}
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__Components_dropdown_menu_vue__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_1__Components_dropdown_menu_item_vue__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_2__Components_dropdown_menu_sep_vue__ = __webpack_require__(16), dropdownMenuPlugin = {
            install: function(Vue) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                Vue.component(__WEBPACK_IMPORTED_MODULE_0__Components_dropdown_menu_vue__.a.name, __WEBPACK_IMPORTED_MODULE_0__Components_dropdown_menu_vue__.a), 
                Vue.component(__WEBPACK_IMPORTED_MODULE_1__Components_dropdown_menu_item_vue__.a.name, __WEBPACK_IMPORTED_MODULE_1__Components_dropdown_menu_item_vue__.a), 
                Vue.component(__WEBPACK_IMPORTED_MODULE_2__Components_dropdown_menu_sep_vue__.a.name, __WEBPACK_IMPORTED_MODULE_2__Components_dropdown_menu_sep_vue__.a);
            }
        };
        "undefined" != typeof window && window.Vue && window.Vue.use(dropdownMenuPlugin), 
        __webpack_exports__.default = dropdownMenuPlugin;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function injectStyle(context) {
            disposed || __webpack_require__(8);
        }
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2), disposed = !1, __vue_styles__ = injectStyle, Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__.a)(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__.a, void 0, void 0, !1, __vue_styles__, "data-v-78a55b0a", null);
        Component.options.__file = "src\\Components\\dropdown-menu.vue", __webpack_exports__.a = Component.exports;
    }, function(module, exports, __webpack_require__) {
        var content = __webpack_require__(9);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
        var add = __webpack_require__(1).default;
        add("6d184133", content, !1, {});
    }, function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(0)(!1), exports.push([ module.i, "\n.dropdown-menu[data-v-78a55b0a] {\n  border: 0;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  cursor: pointer;\n}\n.dropdown-menu span[data-v-78a55b0a] {\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  background-color: #717171;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: calc(50% - 1px);\n  z-index: 10;\n}\n.dropdown-menu span[data-v-78a55b0a]:before,\n.dropdown-menu span[data-v-78a55b0a]:after {\n  content: '';\n  width: 100%;\n  height: 2px;\n  background-color: #717171;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n}\n.dropdown-menu span[data-v-78a55b0a]:before {\n  top: -4px;\n}\n.dropdown-menu span[data-v-78a55b0a]:after {\n  bottom: -4px;\n}\n.dropdown-menu ul[data-v-78a55b0a] {\n  display: inline-block;\n  position: absolute;\n  list-style: none;\n  margin: 0;\n  top: 0;\n  left: 0;\n  padding: 3px 0;\n  border: 1px solid #cccccc;\n  background-color: white;\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);\n  z-index: 50;\n}\n", "" ]);
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function listToStyles(parentId, list) {
            for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
                var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                    id: parentId + ":" + i,
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                    id: id,
                    parts: [ part ]
                });
            }
            return styles;
        }
        __webpack_exports__.a = listToStyles;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_11__;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function injectStyle(context) {
            disposed || __webpack_require__(13);
        }
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_item_vue__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3636c555_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_item_vue__ = __webpack_require__(15), __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2), disposed = !1, __vue_styles__ = injectStyle, Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__.a)(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_item_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3636c555_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_item_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3636c555_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_item_vue__.b, !1, __vue_styles__, "data-v-3636c555", null);
        Component.options.__file = "src\\Components\\dropdown-menu-item.vue", __webpack_exports__.a = Component.exports;
    }, function(module, exports, __webpack_require__) {
        var content = __webpack_require__(14);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
        var add = __webpack_require__(1).default;
        add("b95e29ac", content, !1, {});
    }, function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(0)(!1), exports.push([ module.i, "\nli[data-v-3636c555] {\n  display: inline-block;\n  width: 100%;\n  padding: 3px 7px;\n  box-sizing: border-box;\n}\nli.default[data-v-3636c555] {\n  background-color: #eeeeee;\n}\nli[data-v-3636c555]:hover {\n  background-color: #2b81af;\n  color: white;\n  cursor: pointer;\n}\n", "" ]);
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return render;
        }), __webpack_require__.d(__webpack_exports__, "b", function() {
            return staticRenderFns;
        });
        var render = function() {
            var _vm = this, _h = _vm.$createElement;
            return (_vm._self._c || _h)("li", {
                class: !0 === this.default ? "default" : "",
                on: {
                    click: _vm.menuClick
                }
            }, [ _vm._v(_vm._s(this.title)) ]);
        }, staticRenderFns = [];
        render._withStripped = !0;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function injectStyle(context) {
            disposed || __webpack_require__(17);
        }
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_sep_vue__ = __webpack_require__(5), __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e36c2ce8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_sep_vue__ = __webpack_require__(19), __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2), disposed = !1, __vue_styles__ = injectStyle, Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__.a)(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_sep_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e36c2ce8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_sep_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e36c2ce8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_sep_vue__.b, !1, __vue_styles__, "data-v-e36c2ce8", null);
        Component.options.__file = "src\\Components\\dropdown-menu-sep.vue", __webpack_exports__.a = Component.exports;
    }, function(module, exports, __webpack_require__) {
        var content = __webpack_require__(18);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
        var add = __webpack_require__(1).default;
        add("f98d6402", content, !1, {});
    }, function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(0)(!1), exports.push([ module.i, "\nli.sep[data-v-e36c2ce8] {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid #cccccc;\n  overflow: hidden;\n}\n", "" ]);
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return render;
        }), __webpack_require__.d(__webpack_exports__, "b", function() {
            return staticRenderFns;
        });
        var render = function() {
            var _vm = this, _h = _vm.$createElement;
            return (_vm._self._c || _h)("li", {
                staticClass: "sep"
            });
        }, staticRenderFns = [];
        render._withStripped = !0;
    } ]);
});