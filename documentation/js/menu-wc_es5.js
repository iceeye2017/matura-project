'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">carbon-calculator documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-ba0a14ad2899f10b5d5266121fed314e69c83032c91fd59baf9287e9db55ec46a5b0ab3b531c13f58828e21d196e3b740a42f29ff835bbadf6708faac7afca59"' : 'data-target="#xs-components-links-module-AppModule-ba0a14ad2899f10b5d5266121fed314e69c83032c91fd59baf9287e9db55ec46a5b0ab3b531c13f58828e21d196e3b740a42f29ff835bbadf6708faac7afca59"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-ba0a14ad2899f10b5d5266121fed314e69c83032c91fd59baf9287e9db55ec46a5b0ab3b531c13f58828e21d196e3b740a42f29ff835bbadf6708faac7afca59"' : 'id="xs-components-links-module-AppModule-ba0a14ad2899f10b5d5266121fed314e69c83032c91fd59baf9287e9db55ec46a5b0ab3b531c13f58828e21d196e3b740a42f29ff835bbadf6708faac7afca59"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/BarDiagramBothComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BarDiagramBothComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BarDiagramCompareComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BarDiagramCompareComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BarDiagramComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BarDiagramComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CalculationCardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CalculationCardComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CalculationDiagramCompareComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CalculationDiagramCompareComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CalculationDiagramComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CalculationDiagramComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CalculationListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CalculationListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CalculationSelectCompareComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CalculationSelectCompareComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CreateCalculationComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CreateCalculationComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CreateModuleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CreateModuleComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CreateTypeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CreateTypeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DiagramCompareDialogComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DiagramCompareDialogComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DiagramDialogComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DiagramDialogComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EmissionItemComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EmissionItemComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EmissionListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EmissionListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FactorEmissionModuleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FactorEmissionModuleComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FileUploadComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FileUploadComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ImportFileDialogComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ImportFileDialogComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavigationComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavigationComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PieDiagramComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PieDiagramComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SettingsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SettingsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SpecificCalculationListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SpecificCalculationListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TreeDiagramComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TreeDiagramComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TypeEmissionModuleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TypeEmissionModuleComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TypeInputComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TypeInputComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-ba0a14ad2899f10b5d5266121fed314e69c83032c91fd59baf9287e9db55ec46a5b0ab3b531c13f58828e21d196e3b740a42f29ff835bbadf6708faac7afca59"' : 'data-target="#xs-injectables-links-module-AppModule-ba0a14ad2899f10b5d5266121fed314e69c83032c91fd59baf9287e9db55ec46a5b0ab3b531c13f58828e21d196e3b740a42f29ff835bbadf6708faac7afca59"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-ba0a14ad2899f10b5d5266121fed314e69c83032c91fd59baf9287e9db55ec46a5b0ab3b531c13f58828e21d196e3b740a42f29ff835bbadf6708faac7afca59"' : 'id="xs-injectables-links-module-AppModule-ba0a14ad2899f10b5d5266121fed314e69c83032c91fd59baf9287e9db55ec46a5b0ab3b531c13f58828e21d196e3b740a42f29ff835bbadf6708faac7afca59"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/CalculationService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CalculationService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/MenuService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MenuService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/NavigationService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavigationService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AdvancedEmissionModule.html\" data-type=\"entity-link\" >AdvancedEmissionModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AdvancedSerializer.html\" data-type=\"entity-link\" >AdvancedSerializer</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Calculation.html\" data-type=\"entity-link\" >Calculation</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/EmissionsManager.html\" data-type=\"entity-link\" >EmissionsManager</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FactorEmissionModule.html\" data-type=\"entity-link\" >FactorEmissionModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FactorManager.html\" data-type=\"entity-link\" >FactorManager</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FactorProvider.html\" data-type=\"entity-link\" >FactorProvider</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FactorSerializer.html\" data-type=\"entity-link\" >FactorSerializer</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/CalculationService.html\" data-type=\"entity-link\" >CalculationService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MenuService.html\" data-type=\"entity-link\" >MenuService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/NavigationService.html\" data-type=\"entity-link\" >NavigationService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TranslationManagerService.html\" data-type=\"entity-link\" >TranslationManagerService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/AdvancedSubModule.html\" data-type=\"entity-link\" >AdvancedSubModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CalculationCardData.html\" data-type=\"entity-link\" >CalculationCardData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CalculationData.html\" data-type=\"entity-link\" >CalculationData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DiagramData.html\" data-type=\"entity-link\" >DiagramData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DiagramDataCompare.html\" data-type=\"entity-link\" >DiagramDataCompare</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DialogData.html\" data-type=\"entity-link\" >DialogData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DialogData-1.html\" data-type=\"entity-link\" >DialogData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/EmissionModule.html\" data-type=\"entity-link\" >EmissionModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ImportData.html\" data-type=\"entity-link\" >ImportData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Language.html\" data-type=\"entity-link\" >Language</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MenuPoint.html\" data-type=\"entity-link\" >MenuPoint</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ModuleType.html\" data-type=\"entity-link\" >ModuleType</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Serializer.html\" data-type=\"entity-link\" >Serializer</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TableData.html\" data-type=\"entity-link\" >TableData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Tree.html\" data-type=\"entity-link\" >Tree</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));