/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors.app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _webfontloader = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");

var _webfontloader2 = _interopRequireDefault(_webfontloader);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Main = __webpack_require__(/*! ./app/containers/Main.jsx */ "./src/js/app/containers/Main.jsx");

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_webfontloader2.default.load({
    google: {
        families: ['Lato', 'Exo 2']
    },
    active: function active() {
        _reactDom2.default.render(_react2.default.createElement(_Main2.default, null), document.getElementById("root"));
    }
});

/***/ }),

/***/ "./src/js/app/components/Brand.jsx":
/*!*****************************************!*\
  !*** ./src/js/app/components/Brand.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Brand(props) {
    return _react2.default.createElement(
        "div",
        { className: "brand" },
        _react2.default.createElement("img", { src: "/images/brand.png", alt: "Marca" })
    );
}

exports.default = Brand;

/***/ }),

/***/ "./src/js/app/components/Header.jsx":
/*!******************************************!*\
  !*** ./src/js/app/components/Header.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Brand = __webpack_require__(/*! ./Brand.jsx */ "./src/js/app/components/Brand.jsx");

var _Brand2 = _interopRequireDefault(_Brand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(props) {
    return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(_Brand2.default, null),
        _react2.default.createElement(
            'h1',
            null,
            props.title
        )
    );
}

exports.default = Header;

/***/ }),

/***/ "./src/js/app/components/Inputs/Mask.jsx":
/*!***********************************************!*\
  !*** ./src/js/app/components/Inputs/Mask.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTextMask = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");

var _reactTextMask2 = _interopRequireDefault(_reactTextMask);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    label: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired,
    pattern: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Mask = function (_Component) {
    _inherits(Mask, _Component);

    function Mask(props) {
        _classCallCheck(this, Mask);

        var _this = _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this, props));

        _this.state = {
            focus: false
        };
        _this.myRef = _react2.default.createRef();
        return _this;
    }

    _createClass(Mask, [{
        key: 'handleFocus',
        value: function handleFocus(value) {
            this.setState({
                focus: value
            });
        }
    }, {
        key: 'classes',
        value: function classes() {
            var focus = this.state.focus;

            return (0, _classnames2.default)({
                'input-group': true,
                'focus': focus
            });
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.handleFocus(false);
            var _props = this.props,
                name = _props.name,
                pattern = _props.pattern,
                value = _props.value,
                onChange = _props.onChange;

            var cleanValue = value.replace('_', '');

            if (pattern.length === cleanValue.length) return;

            onChange({
                target: {
                    name: name,
                    value: ''
                }
            });
        }
    }, {
        key: 'convertPattern',
        value: function convertPattern(pattern) {
            var patternArray = pattern.split('');

            var newPattern = patternArray.map(function (item) {
                switch (item) {
                    case '9':
                        return (/\d/
                        ); ///[1-9]/
                    case 'A':
                        return (/[A-Z|a-z]/
                        );
                    default:
                        return item;
                }
            });

            return newPattern;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                label = _props2.label,
                pattern = _props2.pattern,
                props = _objectWithoutProperties(_props2, ['label', 'pattern']);

            return _react2.default.createElement(
                'div',
                { className: this.classes() },
                _react2.default.createElement(
                    'label',
                    null,
                    label
                ),
                _react2.default.createElement(_reactTextMask2.default, _extends({
                    mask: this.convertPattern(pattern),
                    type: 'text',
                    keepCharPositions: true,
                    autoComplete: 'off',
                    onFocus: function onFocus() {
                        return _this2.handleFocus(true);
                    },
                    onBlur: function onBlur() {
                        return _this2.onBlur();
                    }
                }, props))
            );
        }
    }]);

    return Mask;
}(_react.Component);

Mask.propTypes = propTypes;

exports.default = Mask;

/***/ }),

/***/ "./src/js/app/components/Inputs/Photo.jsx":
/*!************************************************!*\
  !*** ./src/js/app/components/Inputs/Photo.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = __webpack_require__(/*! ./Text.jsx */ "./src/js/app/components/Inputs/Text.jsx");

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    position: _propTypes2.default.number.isRequired,
    label: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Photo = function (_Component) {
    _inherits(Photo, _Component);

    function Photo(props) {
        _classCallCheck(this, Photo);

        var _this = _possibleConstructorReturn(this, (Photo.__proto__ || Object.getPrototypeOf(Photo)).call(this, props));

        _this.myRef = _react2.default.createRef();
        return _this;
    }

    _createClass(Photo, [{
        key: 'onChange',
        value: function onChange(event) {
            var _event$target = event.target,
                inputName = _event$target.name,
                inputValue = _event$target.value;
            var _props = this.props,
                value = _props.value,
                position = _props.position,
                onChange = _props.onChange;


            var newValue = _extends({}, value, _defineProperty({}, inputName, inputValue));

            onChange(position, newValue);
        }
    }, {
        key: 'onFileSelected',
        value: function onFileSelected(event) {
            var inputName = event.target.name;
            var _props2 = this.props,
                value = _props2.value,
                position = _props2.position,
                onChange = _props2.onChange;

            var files = event.target.files || event.dataTransfer.files;

            var newValue = _extends({}, value, _defineProperty({}, inputName, files[0]));

            onChange(position, newValue);
        }
    }, {
        key: 'handleSize',
        value: function handleSize(val) {
            var _props3 = this.props,
                value = _props3.value,
                position = _props3.position,
                onChange = _props3.onChange;

            var scale = value.scale || 1;

            var newValue = _extends({}, value, {
                scale: scale + val
            });

            onChange(position, newValue);
        }
    }, {
        key: 'openDialog',
        value: function openDialog() {
            this.myRef.current.click();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props4 = this.props,
                label = _props4.label,
                value = _props4.value;

            return _react2.default.createElement(
                'div',
                { className: 'photo' },
                _react2.default.createElement(
                    'h2',
                    null,
                    label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement('input', { type: 'file',
                        name: 'file',
                        ref: this.myRef,
                        onChange: function onChange(event) {
                            return _this2.onFileSelected(event);
                        }
                    }),
                    _react2.default.createElement(_Text2.default, {
                        label: 'Nome',
                        name: 'name',
                        value: value.name || '',
                        onChange: function onChange(event) {
                            return _this2.onChange(event);
                        }
                    }),
                    _react2.default.createElement(_Text2.default, {
                        label: 'Cargo',
                        name: 'role',
                        value: value.role || '',
                        onChange: function onChange(event) {
                            return _this2.onChange(event);
                        }
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttons-group' },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'upload',
                                onClick: function onClick() {
                                    return _this2.openDialog();
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/upload.png', alt: 'Upload' }),
                            'UPLOAD'
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleSize(.1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/increase.png' })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleSize(-.1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/decrease.png' })
                        )
                    )
                )
            );
        }
    }]);

    return Photo;
}(_react.Component);

Photo.propTypes = propTypes;

exports.default = Photo;

/***/ }),

/***/ "./src/js/app/components/Inputs/Picture.jsx":
/*!**************************************************!*\
  !*** ./src/js/app/components/Inputs/Picture.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Picture = function (_Component) {
    _inherits(Picture, _Component);

    function Picture(props) {
        _classCallCheck(this, Picture);

        var _this = _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).call(this, props));

        _this.myRef = _react2.default.createRef();
        return _this;
    }

    _createClass(Picture, [{
        key: 'onFileSelected',
        value: function onFileSelected(event) {
            var inputName = event.target.name;
            var _props = this.props,
                value = _props.value,
                onChange = _props.onChange;

            var files = event.target.files || event.dataTransfer.files;

            var newValue = _extends({}, value, _defineProperty({}, inputName, files[0]));

            onChange(newValue);
        }
    }, {
        key: 'handleSize',
        value: function handleSize(val) {
            var _props2 = this.props,
                value = _props2.value,
                onChange = _props2.onChange;

            var scale = value.scale || 1;

            var newValue = _extends({}, value, {
                scale: scale + val
            });

            onChange(newValue);
        }
    }, {
        key: 'openDialog',
        value: function openDialog() {
            this.myRef.current.click();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props3 = this.props,
                label = _props3.label,
                id = _props3.id;

            return _react2.default.createElement(
                'div',
                { className: 'photo input-group background', id: id },
                _react2.default.createElement(
                    'label',
                    null,
                    label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement('input', { type: 'file',
                        name: 'file',
                        ref: this.myRef,
                        onChange: function onChange(event) {
                            return _this2.onFileSelected(event);
                        }
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttons-group' },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'upload',
                                onClick: function onClick() {
                                    return _this2.openDialog();
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/upload.png', alt: 'Upload' }),
                            'UPLOAD'
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleSize(.1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/increase.png' })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleSize(-.1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/decrease.png' })
                        )
                    )
                )
            );
        }
    }]);

    return Picture;
}(_react.Component);

Picture.propTypes = propTypes;

exports.default = Picture;

/***/ }),

/***/ "./src/js/app/components/Inputs/Select.jsx":
/*!*************************************************!*\
  !*** ./src/js/app/components/Inputs/Select.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    label: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired,
    options: _propTypes2.default.array.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Select = function (_Component) {
    _inherits(Select, _Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.state = {
            focus: false
        };
        return _this;
    }

    _createClass(Select, [{
        key: 'handleFocus',
        value: function handleFocus(value) {
            this.setState({
                focus: value
            });
        }
    }, {
        key: 'classes',
        value: function classes() {
            var focus = this.state.focus;

            return (0, _classnames2.default)({
                'input-group': true,
                'focus': focus
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                options = _props.options,
                props = _objectWithoutProperties(_props, ['label', 'options']);

            return _react2.default.createElement(
                'div',
                { className: this.classes() },
                _react2.default.createElement(
                    'label',
                    null,
                    label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'input-select' },
                    _react2.default.createElement(
                        'select',
                        props,
                        options.map(function (item, index) {
                            return _react2.default.createElement(
                                'option',
                                {
                                    key: index,
                                    value: item.value
                                },
                                item.label
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Select;
}(_react.Component);

Select.propTypes = propTypes;

exports.default = Select;

/***/ }),

/***/ "./src/js/app/components/Inputs/Template.jsx":
/*!***************************************************!*\
  !*** ./src/js/app/components/Inputs/Template.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    label: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Template = function (_Component) {
    _inherits(Template, _Component);

    function Template() {
        _classCallCheck(this, Template);

        return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
    }

    _createClass(Template, [{
        key: 'classes',
        value: function classes(pos) {
            var _className;

            var base = 'template-' + pos;
            var value = this.props.value;


            return (0, _classnames2.default)((_className = {
                'template': true
            }, _defineProperty(_className, base, true), _defineProperty(_className, 'active', value === pos), _className));
        }
    }, {
        key: 'handleClick',
        value: function handleClick(val) {
            var _props = this.props,
                onChange = _props.onChange,
                name = _props.name,
                value = _props.value;


            if (val === value) return;

            onChange({
                target: {
                    name: name,
                    value: val
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var label = this.props.label;


            return _react2.default.createElement(
                'div',
                { className: 'input-group' },
                _react2.default.createElement(
                    'label',
                    null,
                    label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'templates' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: this.classes('A'),
                            onClick: function onClick() {
                                return _this2.handleClick('A');
                            }
                        },
                        _react2.default.createElement('span', null),
                        ' A'
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: this.classes('B'),
                            onClick: function onClick() {
                                return _this2.handleClick('B');
                            }
                        },
                        _react2.default.createElement('span', null),
                        ' B'
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: this.classes('C'),
                            onClick: function onClick() {
                                return _this2.handleClick('C');
                            }
                        },
                        _react2.default.createElement('span', null),
                        ' C'
                    )
                )
            );
        }
    }]);

    return Template;
}(_react.Component);

Template.propTypes = propTypes;

exports.default = Template;

/***/ }),

/***/ "./src/js/app/components/Inputs/TemplateOne.jsx":
/*!******************************************************!*\
  !*** ./src/js/app/components/Inputs/TemplateOne.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    label: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var TemplateOne = function (_Component) {
    _inherits(TemplateOne, _Component);

    function TemplateOne() {
        _classCallCheck(this, TemplateOne);

        return _possibleConstructorReturn(this, (TemplateOne.__proto__ || Object.getPrototypeOf(TemplateOne)).apply(this, arguments));
    }

    _createClass(TemplateOne, [{
        key: 'classes',
        value: function classes(pos) {
            var _className;

            var base = 'template-' + pos;
            var value = this.props.value;


            return (0, _classnames2.default)((_className = {
                'template': true
            }, _defineProperty(_className, base, true), _defineProperty(_className, 'active', value === pos), _className));
        }
    }, {
        key: 'handleClick',
        value: function handleClick(val) {
            var _props = this.props,
                onChange = _props.onChange,
                name = _props.name,
                value = _props.value;


            if (val === value) return;

            onChange({
                target: {
                    name: name,
                    value: val
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var label = this.props.label;


            return _react2.default.createElement(
                'div',
                { className: 'input-group' },
                _react2.default.createElement(
                    'label',
                    null,
                    label
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'templates' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: this.classes('A'),
                            onClick: function onClick() {
                                return _this2.handleClick('A');
                            }
                        },
                        _react2.default.createElement('span', null),
                        ' A'
                    )
                )
            );
        }
    }]);

    return TemplateOne;
}(_react.Component);

TemplateOne.propTypes = propTypes;

exports.default = TemplateOne;

/***/ }),

/***/ "./src/js/app/components/Inputs/Text.jsx":
/*!***********************************************!*\
  !*** ./src/js/app/components/Inputs/Text.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    label: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Text = function (_Component) {
    _inherits(Text, _Component);

    function Text(props) {
        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

        _this.state = {
            focus: false
        };
        return _this;
    }

    _createClass(Text, [{
        key: 'handleFocus',
        value: function handleFocus(value) {
            this.setState({
                focus: value
            });
        }
    }, {
        key: 'classes',
        value: function classes() {
            var focus = this.state.focus;

            return (0, _classnames2.default)({
                'input-group': true,
                'focus': focus
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                label = _props.label,
                props = _objectWithoutProperties(_props, ['label']);

            return _react2.default.createElement(
                'div',
                { className: this.classes() },
                _react2.default.createElement(
                    'label',
                    null,
                    label
                ),
                _react2.default.createElement('input', _extends({
                    type: 'text',
                    autoComplete: 'off',
                    onFocus: function onFocus() {
                        return _this2.handleFocus(true);
                    },
                    onBlur: function onBlur() {
                        return _this2.handleFocus(false);
                    }
                }, props))
            );
        }
    }]);

    return Text;
}(_react.Component);

Text.propTypes = propTypes;

exports.default = Text;

/***/ }),

/***/ "./src/js/app/components/Inputs/TextArea.jsx":
/*!***************************************************!*\
  !*** ./src/js/app/components/Inputs/TextArea.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    label: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var TextArea = function (_Component) {
    _inherits(TextArea, _Component);

    function TextArea(props) {
        _classCallCheck(this, TextArea);

        var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

        _this.state = {
            focus: false
        };
        return _this;
    }

    _createClass(TextArea, [{
        key: 'handleFocus',
        value: function handleFocus(value) {
            this.setState({
                focus: value
            });
        }
    }, {
        key: 'classes',
        value: function classes() {
            var focus = this.state.focus;

            return (0, _classnames2.default)({
                'input-group': true,
                'focus': focus
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                label = _props.label,
                props = _objectWithoutProperties(_props, ['label']);

            return _react2.default.createElement(
                'div',
                { className: this.classes() },
                _react2.default.createElement(
                    'label',
                    null,
                    label
                ),
                _react2.default.createElement('textarea', _extends({
                    type: 'text',
                    autoComplete: 'off',
                    onFocus: function onFocus() {
                        return _this2.handleFocus(true);
                    },
                    onBlur: function onBlur() {
                        return _this2.handleFocus(false);
                    }
                }, props))
            );
        }
    }]);

    return TextArea;
}(_react.Component);

TextArea.propTypes = propTypes;

exports.default = TextArea;

/***/ }),

/***/ "./src/js/app/configs/selects.js":
/*!***************************************!*\
  !*** ./src/js/app/configs/selects.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    weekdays: [{ label: 'Selecione', value: '' }, { label: 'Domingo', value: 'Domingo' }, { label: 'Segunda', value: 'Segunda' }, { label: 'Terça', value: 'Terça' }, { label: 'Quarta', value: 'Quarta' }, { label: 'Quinta', value: 'Quinta' }, { label: 'Sexta', value: 'Sexta' }, { label: 'Sábado', value: 'Sábado' }],
    typesAPN: [{ label: 'Uma foto', value: 1 },
    //{ label: 'Duas fotos', value: 2 },
    { label: 'Foto da Cidade', value: 3 }, { label: 'Padrão', value: 4 }],
    typesB2B: [{ label: 'Uma foto', value: 1 }, { label: 'Duas fotos', value: 2 }, { label: 'Padrão', value: 3 }],
    typesRec: [{ label: 'Sem foto', value: 'A' }, { label: 'Com foto', value: 'B' }],
    modelsRec: [{ label: 'Safira', value: 'safira' }, { label: 'Rubi', value: 'ruby' }, { label: 'Esmeralda', value: 'emerald' }, { label: 'Diamante', value: 'diamond' }, { label: 'Blue Diamond', value: 'diamond-blue' }, { label: 'Black Diamond', value: 'diamond-black' }],
    typesRecM: [{ label: 'Sem foto', value: 'A' }, { label: 'Com foto', value: 'B' }],
    modelsRecM: [{ label: 'Safira', value: 'reconhecimento_safira' }, { label: 'Rubi', value: 'reconhecimento_rubi' }, { label: 'Red', value: 'reconhecimento_red' }, { label: 'Esmeralda', value: 'reconhecimento_esmeralda' }, { label: 'Elite', value: 'reconhecimento_elite' }, { label: 'Diamante', value: 'reconhecimento_diamante' }, { label: 'Blue Diamond', value: 'reconhecimento_blue' }, { label: 'Black Diamond', value: 'reconhecimento_black' }],
    modelsBiogenica: [{ label: 'Post', value: 'post' }, { label: 'Stories', value: 'stories' }],
    modelsBanner: [{ label: 'Banner', value: 'banner' }],
    typesBanner: [{ label: 'Sem foto', value: 'A' }, { label: 'Com foto', value: 'B' }],
    getLabelModelRec: function getLabelModelRec(value) {
        return this.modelsRec.find(function (item) {
            return value === item.value;
        });
    },

    getLabelModelRecM: function getLabelModelRecM(value) {
        return this.modelsRecM.find(function (item) {
            return value === item.value;
        });
    },

    getLabelModelBanner: function getLabelModelBanner(value) {
        return this.modelsBanner.find(function (item) {
            return value === item.value;
        });
    },

    getLabelModelBiogenica: function getLabelModelBiogenica(value) {
        return this.modelsBiogenica.find(function (item) {
            return value === item.value;
        });
    }
};

/***/ }),

/***/ "./src/js/app/containers/APN/Form.jsx":
/*!********************************************!*\
  !*** ./src/js/app/containers/APN/Form.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Template = __webpack_require__(/*! ../../components/Inputs/Template.jsx */ "./src/js/app/components/Inputs/Template.jsx");

var _Template2 = _interopRequireDefault(_Template);

var _TemplateOne = __webpack_require__(/*! ../../components/Inputs/TemplateOne.jsx */ "./src/js/app/components/Inputs/TemplateOne.jsx");

var _TemplateOne2 = _interopRequireDefault(_TemplateOne);

var _Text = __webpack_require__(/*! ../../components/Inputs/Text.jsx */ "./src/js/app/components/Inputs/Text.jsx");

var _Text2 = _interopRequireDefault(_Text);

var _TextArea = __webpack_require__(/*! ../../components/Inputs/TextArea.jsx */ "./src/js/app/components/Inputs/TextArea.jsx");

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Mask = __webpack_require__(/*! ../../components/Inputs/Mask.jsx */ "./src/js/app/components/Inputs/Mask.jsx");

var _Mask2 = _interopRequireDefault(_Mask);

var _Select = __webpack_require__(/*! ../../components/Inputs/Select.jsx */ "./src/js/app/components/Inputs/Select.jsx");

var _Select2 = _interopRequireDefault(_Select);

var _Photo = __webpack_require__(/*! ../../components/Inputs/Photo.jsx */ "./src/js/app/components/Inputs/Photo.jsx");

var _Photo2 = _interopRequireDefault(_Photo);

var _Picture = __webpack_require__(/*! ../../components/Inputs/Picture.jsx */ "./src/js/app/components/Inputs/Picture.jsx");

var _Picture2 = _interopRequireDefault(_Picture);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    data: _propTypes2.default.object.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var photos = this.props.data.photos;

            var total = photos.length;

            this.setPhotos(total);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _prevProps$data = prevProps.data,
                photos = _prevProps$data.photos,
                prevType = _prevProps$data.type;
            var type = this.props.data.type;

            var total = photos.length;

            if (prevType !== type) this.setPhotos(total);
        }
    }, {
        key: 'handleBg',
        value: function handleBg(value) {
            var onChange = this.props.onChange;


            onChange({
                target: {
                    name: 'bg',
                    value: value
                }
            });
        }
    }, {
        key: 'setPhotos',
        value: function setPhotos(total) {
            var _props = this.props,
                data = _props.data,
                onChange = _props.onChange;
            var photos = data.photos,
                typeStr = data.type;

            var type = Number.parseInt(typeStr);
            var newState = void 0;

            if (type > 2 && total !== 0) {
                onChange({
                    target: {
                        name: 'photos',
                        value: []
                    }
                });
            } else if (type === 1 && total !== 1) {
                if (total > 1) newState = photos.slice(0, 1);else newState = [{}];

                onChange({
                    target: {
                        name: 'photos',
                        value: newState
                    }
                });
            } else if (type === 2 && total !== 2) {
                if (total === 0) newState = [{}, {}];else {
                    newState = photos.slice(0, 1);
                    newState.push({});
                }

                onChange({
                    target: {
                        name: 'photos',
                        value: newState
                    }
                });
            }
        }
    }, {
        key: 'handlePhotos',
        value: function handlePhotos(position, value) {
            var _props2 = this.props,
                data = _props2.data,
                onChange = _props2.onChange;
            var photos = data.photos;

            var newPhotos = [].concat(_toConsumableArray(photos));
            newPhotos[position] = value;

            onChange({
                target: {
                    name: 'photos',
                    value: newPhotos
                }
            });
        }
    }, {
        key: 'handleFontSize',
        value: function handleFontSize(value) {
            var _props3 = this.props,
                data = _props3.data,
                onChange = _props3.onChange;
            var fontSize = data.fontSize;


            onChange({
                target: {
                    name: 'fontSize',
                    value: fontSize + value
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props4 = this.props,
                data = _props4.data,
                onChange = _props4.onChange;
            var types = _selects2.default.typesAPN,
                weekdays = _selects2.default.weekdays;


            return _react2.default.createElement(
                'div',
                { className: 'form' },
                _react2.default.createElement(_Select2.default, {
                    label: 'Modelo',
                    name: 'type',
                    options: types,
                    value: data.type,
                    onChange: onChange
                }),
                data.type < 4 ? _react2.default.createElement(_Picture2.default, {
                    label: 'Fundo',
                    name: 'bg',
                    value: data.bg,
                    onChange: function onChange(value) {
                        return _this2.handleBg(value);
                    }
                }) : null,
                _react2.default.createElement(_Text2.default, {
                    label: 'T\xEDtulo',
                    name: 'title',
                    value: data.title,
                    onChange: onChange
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Cidade',
                        name: 'city',
                        value: data.city,
                        onChange: onChange
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttons-group' },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/increase.png' })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(-1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/decrease.png' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Dia',
                        name: 'date',
                        value: data.date,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Select2.default, {
                        label: 'Dia da semana',
                        name: 'weekday',
                        options: weekdays,
                        value: data.weekday,
                        onChange: onChange
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Check-in',
                        name: 'checkIn',
                        value: data.checkIn,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Text2.default, {
                        label: 'Ingresso',
                        name: 'price',
                        value: data.price,
                        onChange: onChange
                    })
                ),
                _react2.default.createElement(_Text2.default, {
                    label: 'Local',
                    name: 'place',
                    value: data.place,
                    onChange: onChange
                }),
                _react2.default.createElement(_TextArea2.default, {
                    label: 'Endere\xE7o',
                    name: 'address',
                    value: data.address,
                    onChange: onChange
                }),
                data.photos.map(function (item, index) {
                    return _react2.default.createElement(_Photo2.default, {
                        key: index,
                        position: index,
                        label: 'Palestrante',
                        name: 'photos[' + index + ']',
                        value: item,
                        onChange: function onChange(position, value) {
                            return _this2.handlePhotos(position, value);
                        }
                    });
                })
            );
        }
    }]);

    return Form;
}(_react.Component);

Form.propTypes = propTypes;

exports.default = Form;

/***/ }),

/***/ "./src/js/app/containers/APN/Post.jsx":
/*!********************************************!*\
  !*** ./src/js/app/containers/APN/Post.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _Header = __webpack_require__(/*! ../../components/Header.jsx */ "./src/js/app/components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Preview = __webpack_require__(/*! ./Preview.jsx */ "./src/js/app/containers/APN/Preview.jsx");

var _Preview2 = _interopRequireDefault(_Preview);

var _Form = __webpack_require__(/*! ./Form.jsx */ "./src/js/app/containers/APN/Form.jsx");

var _Form2 = _interopRequireDefault(_Form);

var _googleAnalytics = __webpack_require__(/*! ../../utils/googleAnalytics */ "./src/js/app/utils/googleAnalytics.js");

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
    _inherits(Posts, _Component);

    function Posts(props) {
        _classCallCheck(this, Posts);

        var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

        _this.state = {
            inputs: {
                template: 'A',
                type: 4,
                bg: {
                    file: '',
                    scale: 1
                },
                title: '',
                city: '',
                date: '',
                weekday: '',
                checkIn: '',
                price: '',
                place: '',
                address: '',
                photos: [],
                fontSize: 113
            },
            dataImage: '/#'
        };
        _this.canvas = new PIXI.Application({ width: 1080, height: 1080, preserveDrawingBuffer: true, premultipliedAlpha: true, backgroundColor: 0xFFFFFF });
        return _this;
    }

    _createClass(Posts, [{
        key: 'onChange',
        value: function onChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;

            this.setState(function (prevState) {
                return _extends({}, prevState, {
                    inputs: _extends({}, prevState.inputs, _defineProperty({}, name, value))
                });
            });
        }
    }, {
        key: 'teste',
        value: function teste() {

            var renderTexture = PIXI.RenderTexture.create(this.canvas.renderer.width, this.canvas.renderer.height);
            this.canvas.renderer.render(this.canvas.stage, renderTexture);
            var canvas = this.canvas.renderer.extract.canvas(renderTexture);
            window.open(canvas.toDataURL('image/png'));
            return;
            var image = this.canvas.renderer.extract.base64(this.canvas.stage);
            this.setState({
                dataImage: image
            });
        }
    }, {
        key: 'download',
        value: function download() {

            var renderTexture = PIXI.RenderTexture.create(this.canvas.renderer.width, this.canvas.renderer.height);
            this.canvas.renderer.render(this.canvas.stage, renderTexture);
            var image = this.canvas.renderer.extract.base64(renderTexture, null, true);
            this.setState({
                dataImage: image
            });

            var inputs = this.state.inputs;

            var type = _selects2.default.typesAPN.find(function (item) {
                return item.value === Number(inputs.type);
            });
            (0, _googleAnalytics.event)('download', 'APN', 'Template ' + inputs.template + ' - ' + type.label);
            (0, _googleAnalytics.event)('content', 'APN', 'Cidade: ' + inputs.city);
            (0, _googleAnalytics.event)('content', 'APN', 'Dia da semana: ' + inputs.weekday);
            (0, _googleAnalytics.event)('content', 'APN', 'Check in: ' + inputs.checkIn);
            if (inputs.photos.length > 0) inputs.photos.map(function (photo) {
                (0, _googleAnalytics.event)('content', 'APN', 'Photo: ' + photo.name + ' / ' + photo.role);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                inputs = _state.inputs,
                dataImage = _state.dataImage;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_Header2.default, { title: 'GERADOR DE CONVITE APN' }),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    _react2.default.createElement(_Form2.default, {
                        data: inputs,
                        onChange: function onChange(event) {
                            return _this2.onChange(event);
                        }
                    }),
                    _react2.default.createElement(_Preview2.default, {
                        canvas: this.canvas,
                        data: inputs
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper left' },
                    _react2.default.createElement(
                        'a',
                        {
                            href: dataImage,
                            download: 'mdt-post.png',
                            className: 'download',
                            onClick: function onClick() {
                                return _this2.download();
                            }
                        },
                        'Download'
                    )
                )
            );
        }
    }]);

    return Posts;
}(_react.Component);

exports.default = Posts;

/***/ }),

/***/ "./src/js/app/containers/APN/Preview.jsx":
/*!***********************************************!*\
  !*** ./src/js/app/containers/APN/Preview.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    canvas: _propTypes2.default.any,
    data: _propTypes2.default.object.isRequired
};

var colors = {
    purple: '#5c2e91',
    white: '#FFFFFF',
    orange: '#f47920',
    green: '#193631'
};

var welcomeMessages = {
    1: 'Presença de',
    2: 'Presenças de:'
};

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        _this.app = _this.props.canvas;
        _this.first = true;
        _this.elements = {};
        _this.myRef = _react2.default.createRef();
        return _this;
    }

    _createClass(Preview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.myRef.current.appendChild(this.app.view);
            //update
            var loader = PIXI.loader.add('/images/background.png').add('/images/phone.png').add('/images/photo.png').add('/images/template-bg-A1.png').add('/images/template-bg-A2.png').add('/images/template-bg-B1.png').add('/images/template-bg-B2.png').add('/images/template-bg-C1.png').add('/images/template-bg-C2.png').load(function () {
                return _this2.update();
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps !== this.props) this.update();
        }
    }, {
        key: 'update',
        value: function update() {
            var _props$data = this.props.data,
                template = _props$data.template,
                type = _props$data.type,
                bg = _props$data.bg,
                title = _props$data.title,
                city = _props$data.city,
                date = _props$data.date,
                weekday = _props$data.weekday,
                checkIn = _props$data.checkIn,
                price = _props$data.price,
                place = _props$data.place,
                address = _props$data.address,
                photos = _props$data.photos,
                fontSize = _props$data.fontSize;

            var color = template === 'A' ? colors.green : colors.white;
            var typeInt = Number.parseInt(type) || 0;

            this.canvasBg(bg, typeInt);
            this.canvasBase(template, typeInt);
            this.canvasStatic(color, typeInt);
            this.canvasTitle(title.toUpperCase(), color);
            this.canvasCity(city.toUpperCase(), color, fontSize);
            this.canvasDate(date, weekday.toUpperCase(), color);
            this.canvasCheck(checkIn, color);
            this.canvasPrice(price, color);
            this.canvasPlace(place, color);
            this.canvasAddress(address, color);
            this.canvasPhone(typeInt);
            this.canvasPhotos(typeInt, photos);
        }
    }, {
        key: 'canvasBg',
        value: function canvasBg(bg, typeInt) {
            var _this3 = this;

            var exists = this.elements.bg ? true : false;
            if (typeInt == 4 && exists) {
                this.elements.bg.texture = PIXI.Texture.fromImage('/images/posts/background.png');
                this.elements.bg.scale.x = 1;
                this.elements.bg.scale.y = 1;
                this.elements.bg.zIndex = 20;
                this.elements.bg.filters[0].reset();
                return;
            }
            if (exists) {
                if (bg.file) this.loadImage(bg.file).then(function (res) {
                    _this3.elements.bg.texture = res;
                });
                this.elements.bg.scale.x = bg.scale;
                this.elements.bg.scale.y = bg.scale;
                this.elements.bg.zIndex = 20;

                var _filters = new PIXI.filters.ColorMatrixFilter();
                _filters.alpha = 1.5;
                this.elements.bg.filters = [_filters];
                return;
            }

            var filters = new PIXI.filters.ColorMatrixFilter();
            var file = PIXI.Texture.fromImage('/images/posts/background.png');
            file.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

            var mask = new PIXI.Graphics();
            mask.lineStyle(0).beginFill(0xFF0000, 0.5).drawRect(0, 0, 1080, 1080).endFill();

            this.elements.bg = new PIXI.Sprite(file);
            this.elements.bg.anchor.set(.5, .5);
            this.elements.bg.x = 540;
            this.elements.bg.y = 540;
            //this.elements.bg.alpha = 0.5;
            this.elements.bg.filters = [filters];
            if (typeInt != 4) {} else {
                filters.reset();
            }

            this.elements.bg.mask = mask;

            this.app.stage.addChild(this.elements.bg);
        }
    }, {
        key: 'canvasBase',
        value: function canvasBase(template, type) {
            var exists = this.elements.base ? true : false;
            var variant = type === 4 ? 2 : 1;

            var file = PIXI.Texture.fromImage('/images/posts/template-bg-' + template + variant + '.png');

            if (exists) {
                this.elements.base.texture = file;
                return;
            }

            this.elements.base = new PIXI.Sprite(file);
            this.app.stage.addChild(this.elements.base);
        }
    }, {
        key: 'canvasStatic',
        value: function canvasStatic(color, type) {
            if (!this.first) {
                this.elements.check.style.fill = color;
                return;
            }

            var phoneFile = PIXI.Texture.fromImage('/images/posts/phone.png');
            var speakerFile = PIXI.Texture.fromImage('/images/posts/photo.png');
            var speakerRingFile = PIXI.Texture.fromImage('/images/posts/photo_ring.png');

            var logoFile = PIXI.Texture.fromImage('/images/posts/logo_mdt.png');
            var leafFile = PIXI.Texture.fromImage('/images/posts/background_folha.png');

            speakerFile.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

            //orange box
            this.elements.box = new PIXI.Graphics();
            this.elements.box.beginFill(0x002e27).drawRoundedRect(-20, 733, 85, 160, 20).endFill();
            this.elements.box.zIndex = 101;
            //checkin text
            this.elements.check = new PIXI.Text('CHECK IN:', {
                fontWeight: 300,
                fontSize: 43,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                zIndex: 99
            });

            this.elements.check.x = 80;
            this.elements.check.y = 793;

            //ingresso text
            this.elements.ingresso = new PIXI.Text('Ingresso: R$', {
                fontWeight: 300,
                fontSize: 33,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                zIndex: 100
            });

            this.elements.ingresso.x = 80;
            this.elements.ingresso.y = 840;

            //price text
            this.elements.price = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 33,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                zIndex: 100
            });

            this.elements.price.x = this.elements.ingresso.x + this.elements.ingresso.width + 10;
            this.elements.price.y = 840;

            this.elements.logoFile = new PIXI.Sprite.from(logoFile);
            this.elements.logoFile.x = 390;
            this.elements.logoFile.y = 0;
            this.elements.logoFile.zIndex = 100;

            this.elements.leafFile = new PIXI.Sprite.from(leafFile);
            this.elements.leafFile.x = 0;
            this.elements.leafFile.y = 0;
            this.elements.leafFile.zIndex = 15;

            //upper background container
            this.elements.containerbackground = new PIXI.Container();
            this.elements.containerbackground.x = 0;
            this.elements.containerbackground.y = 0;
            this.elements.containerbackground.zIndex = 50;

            //phone container
            this.elements.container = new PIXI.Container();
            this.elements.container.x = 600;
            this.elements.container.y = 230;

            //phone mockup
            this.elements.phone = new PIXI.Sprite(phoneFile);
            this.elements.phone.x = 0;
            this.elements.phone.y = 0;
            //text top on phone container
            this.elements.welcome = new PIXI.Text(welcomeMessages[type], {
                fontWeight: 400,
                fontSize: 32,
                fontFamily: 'Lato',
                fill: colors.green,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 300,
                zIndex: 100
            });

            this.elements.welcome.anchor.set(0.5, 0);
            this.elements.welcome.x = 237;
            this.elements.welcome.y = 628;

            //speaker A
            this.elements.speakerA = new PIXI.Container();
            this.elements.speakerA.x = 100;
            this.elements.speakerA.y = 250;
            //
            this.elements.borderA = new PIXI.Graphics();
            this.elements.borderA.lineStyle(0).beginFill(0xFFFFff, .2).drawCircle(165, 165, 160).endFill();
            this.elements.borderA.zIndex = 100;

            this.elements.maskA = new PIXI.Graphics();
            this.elements.maskA.lineStyle(0).beginFill(0xFF00ff, 1).drawCircle(165, 165, 160).endFill();
            this.elements.maskA.zIndex = 100;

            //
            this.elements.speakerAPicture = new PIXI.Sprite(speakerFile);
            this.elements.speakerAPicture.interactive = true;
            this.elements.speakerAPicture.buttonMode = true;
            this.elements.speakerAPicture.anchor.set(.1, .5);
            this.elements.speakerAPicture.x = 0;
            this.elements.speakerAPicture.y = 0;
            this.elements.speakerAPicture.scale.x *= 1.2;
            this.elements.speakerAPicture.scale.y *= 1.2;
            this.elements.speakerAPicture.zIndex = 100;

            this.elements.speakerAPicture.mask = this.elements.maskA;

            this.elements.speakerAPicture.on('pointerdown', this.onDragStart).on('pointerup', this.onDragEnd).on('pointerupoutside', this.onDragEnd).on('pointermove', this.onDragMove);

            this.elements.speakerAPictureRing = new PIXI.Sprite(speakerRingFile);
            this.elements.speakerAPictureRing.x = 0;
            this.elements.speakerAPictureRing.y = 0;
            this.elements.speakerAPictureRing.scale.x *= 1;
            this.elements.speakerAPictureRing.scale.y *= 1;
            this.elements.speakerAPictureRing.zIndex = 100;

            //
            this.elements.speakerAName = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 35,
                fontFamily: 'Lato',
                fill: colors.green,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 300,
                zIndex: 100
            });

            this.elements.speakerAName.anchor.set(0.5, 0);
            this.elements.speakerAName.x = 160;
            this.elements.speakerAName.y = 375;
            //
            this.elements.speakerARole = new PIXI.Text('Role', {
                fontWeight: 400,
                fontSize: 28,
                fontFamily: 'Lato',
                fill: colors.green,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 300
            });

            this.elements.speakerARole.anchor.set(0.5, 0);
            this.elements.speakerARole.x = 160;
            this.elements.speakerARole.y = 250;

            //speaker B
            this.elements.speakerB = new PIXI.Container();
            this.elements.speakerB.x = 60;
            this.elements.speakerB.y = this.elements.speakerA.height + 20;
            this.elements.speakerB.scale.x *= .7;
            this.elements.speakerB.scale.y *= .7;

            this.elements.borderB = new PIXI.Graphics();
            this.elements.borderB.lineStyle(0).beginFill(0xFFFFFF, .2).drawCircle(198, 130, 130).endFill();

            this.elements.maskB = new PIXI.Graphics();
            this.elements.maskB.lineStyle(0).beginFill(0xFF0000, 1).drawCircle(198, 130, 120).endFill();
            //
            this.elements.speakerBPicture = new PIXI.Sprite(speakerFile);
            this.elements.speakerBPicture.interactive = true;
            this.elements.speakerBPicture.buttonMode = true;
            this.elements.speakerBPicture.anchor.set(.5, .5);
            this.elements.speakerBPicture.x = 198;
            this.elements.speakerBPicture.y = 130;
            this.elements.speakerBPicture.scale.x *= .8;
            this.elements.speakerBPicture.scale.y *= .8;

            this.elements.speakerBPicture.mask = this.elements.maskB;

            this.elements.speakerBPicture.on('pointerdown', this.onDragStart).on('pointerup', this.onDragEnd).on('pointerupoutside', this.onDragEnd).on('pointermove', this.onDragMove);
            //
            this.elements.speakerBName = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 35,
                fontFamily: 'Lato',
                fill: colors.white,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 300
            });

            this.elements.speakerBName.anchor.set(0.5, 0);
            this.elements.speakerBName.x = 200;
            this.elements.speakerBName.y = 280;
            //
            this.elements.speakerBRole = new PIXI.Text('Role', {
                fontWeight: 700,
                fontSize: 25,
                fontFamily: 'Lato',
                fill: colors.white,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 300
            });

            this.elements.speakerBRole.anchor.set(0.5, 0);
            this.elements.speakerBRole.x = 200;

            this.app.stage.zIndex = 100;
            this.app.stage.addChild(this.elements.containerbackground, this.elements.box, this.elements.check, this.elements.ingresso, this.elements.price, this.elements.logoFile, this.elements.container);
            this.elements.container.addChild(this.elements.phone, this.elements.welcome, this.elements.speakerA, this.elements.speakerB);
            this.elements.speakerA.addChild(this.elements.borderA, this.elements.maskA, this.elements.speakerAPicture, this.elements.speakerAName, this.elements.speakerARole, this.elements.speakerAPictureRing);
            this.elements.speakerB.addChild(this.elements.borderB, this.elements.maskB, this.elements.speakerBPicture, this.elements.speakerBName, this.elements.speakerBRole);
            this.elements.containerbackground.addChild(this.elements.leafFile);

            this.first = false;
        }
    }, {
        key: 'canvasTitle',
        value: function canvasTitle(text, color) {
            var exists = this.elements.title ? true : false;

            if (exists) {
                this.elements.title.text = text;
                this.elements.title.style.fill = color;
                return;
            }

            this.elements.title = new PIXI.Text(text, {
                fontWeight: 700,
                fontSize: 50,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 650,
                zIndex: 100
            });

            this.elements.title.x = 65;
            this.elements.title.y = 388;

            this.app.stage.addChild(this.elements.title);
        }
    }, {
        key: 'canvasCity',
        value: function canvasCity(text, color, fontSize) {
            var exists = this.elements.city ? true : false;

            if (exists) {
                this.elements.city.text = text;
                this.elements.city.style.fontSize = fontSize;
                this.elements.city.style.fill = color;
                return;
            }

            this.elements.city = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 113,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550,
                zIndex: 100
            });

            this.elements.city.anchor.set(0, 0.5);
            this.elements.city.x = 65;
            this.elements.city.y = 570;

            this.app.stage.addChild(this.elements.city);
        }
    }, {
        key: 'canvasDate',
        value: function canvasDate(textA, textB, color) {
            var exists = this.elements.date ? true : false;
            var text = textA ? textA + ' - ' + textB : '';

            if (exists) {
                this.elements.date.text = text;
                this.elements.date.style.fill = color;
                return;
            }

            this.elements.date = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 60,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                zIndex: 100
            });

            this.elements.date.x = 80;
            this.elements.date.y = 730;

            this.app.stage.addChild(this.elements.date);
        }
    }, {
        key: 'canvasCheck',
        value: function canvasCheck(text, color) {
            var exists = this.elements.hour ? true : false;

            if (exists) {
                this.elements.hour.text = text;
                this.elements.hour.style.fill = color;
                return;
            }

            this.elements.hour = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 43,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550,
                zIndex: 100
            });

            this.elements.hour.x = this.elements.check.x + this.elements.check.width + 10;
            this.elements.hour.y = this.elements.check.y;

            this.app.stage.addChild(this.elements.hour);
        }
    }, {
        key: 'canvasPrice',
        value: function canvasPrice(text, color) {
            this.elements.price.text = text;
            this.elements.price.style.fill = color;
            this.elements.ingresso.style.fill = color;
        }
    }, {
        key: 'canvasPlace',
        value: function canvasPlace(text, color) {
            var exists = this.elements.place ? true : false;

            if (exists) {

                this.elements.place.text = text.toUpperCase();
                this.elements.place.style.fill = color;
                return;
            }

            this.elements.place = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 30,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 650,
                zIndex: 100
            });

            this.elements.place.x = 80;
            this.elements.place.y = 930;

            this.app.stage.addChild(this.elements.place);
        }
    }, {
        key: 'canvasAddress',
        value: function canvasAddress(text, color) {
            var exists = this.elements.address ? true : false;

            if (exists) {
                this.elements.address.text = text;
                this.elements.address.style.fill = color;
                return;
            }

            this.elements.address = new PIXI.Text(text, {
                fontWeight: 400,
                fontSize: 30,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 650
            });

            this.elements.address.x = 80;
            this.elements.address.y = 970;

            this.app.stage.addChild(this.elements.address);
        }
    }, {
        key: 'canvasPhone',
        value: function canvasPhone(type) {
            if (type <= 2) {
                this.elements.container.visible = true;
                this.elements.welcome.text = welcomeMessages[type];
            } else this.elements.container.visible = false;
        }
    }, {
        key: 'canvasPhotos',
        value: function canvasPhotos(type, speaker) {
            var _this4 = this;

            var scale = void 0;
            console.log("Type:" + type);
            if (type === 1) {
                this.elements.speakerA.x = 60;
                this.elements.speakerA.y = 250;
                this.elements.speakerA.scale.x = 1.1;
                this.elements.speakerA.scale.y = 1.1;
                this.elements.speakerB.visible = false;
            } else {
                this.elements.speakerA.x = 60;
                this.elements.speakerA.y = 200;
                this.elements.speakerA.scale.x = .7;
                this.elements.speakerA.scale.y = .7;
                this.elements.speakerB.visible = true;
            }

            if (type <= 2) {
                var speakerA = speaker[0] || {};
                scale = speakerA.scale || 1;
                this.elements.speakerAName.text = speakerA.name;
                this.elements.speakerAName.text = speakerA.name;
                this.elements.speakerARole.text = speakerA.role;
                this.elements.speakerARole.y = this.elements.speakerAName.y + this.elements.speakerAName.height;
                this.elements.speakerAPicture.scale.x = scale;
                this.elements.speakerAPicture.scale.y = scale;

                if (speakerA.file) this.loadImage(speakerA.file).then(function (res) {
                    _this4.elements.speakerAPicture.texture = res;
                });
            }
            if (type === 2) {
                var speakerB = speaker[1] || {};
                scale = speakerB.scale || 1;
                this.elements.speakerB.y = this.elements.speakerA.y + this.elements.speakerA.height + 20;
                this.elements.speakerBName.text = speakerB.name;
                this.elements.speakerBRole.text = speakerB.role;
                this.elements.speakerBRole.y = this.elements.speakerBName.y + this.elements.speakerBName.height;
                this.elements.speakerBPicture.scale.x = scale;
                this.elements.speakerBPicture.scale.y = scale;

                if (speakerB.file) this.loadImage(speakerB.file).then(function (res) {
                    _this4.elements.speakerBPicture.texture = res;
                });
            }
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(event) {
            this.draggingData = event.data;
            var position = this.draggingData.getLocalPosition(this);
            this.pivot.set(position.x, position.y);
            this.position.set(this.draggingData.global.x, this.draggingData.global.y);
            this.dragging = true;

            var newPosition = this.draggingData.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd() {
            this.dragging = false;
            this.draggingData = null;
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove() {
            if (this.dragging) {
                var newPosition = this.draggingData.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
    }, {
        key: 'loadImage',
        value: function loadImage(src) {

            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var file = PIXI.Texture.fromImage(e.target.result);
                    resolve(file);
                };
                reader.readAsDataURL(src);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'preview',
                ref: this.myRef
            });
        }
    }]);

    return Preview;
}(_react.Component);

Preview.propTypes = propTypes;

exports.default = Preview;

/***/ }),

/***/ "./src/js/app/containers/B2B/Form.jsx":
/*!********************************************!*\
  !*** ./src/js/app/containers/B2B/Form.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Template = __webpack_require__(/*! ../../components/Inputs/Template.jsx */ "./src/js/app/components/Inputs/Template.jsx");

var _Template2 = _interopRequireDefault(_Template);

var _Text = __webpack_require__(/*! ../../components/Inputs/Text.jsx */ "./src/js/app/components/Inputs/Text.jsx");

var _Text2 = _interopRequireDefault(_Text);

var _TextArea = __webpack_require__(/*! ../../components/Inputs/TextArea.jsx */ "./src/js/app/components/Inputs/TextArea.jsx");

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Mask = __webpack_require__(/*! ../../components/Inputs/Mask.jsx */ "./src/js/app/components/Inputs/Mask.jsx");

var _Mask2 = _interopRequireDefault(_Mask);

var _Select = __webpack_require__(/*! ../../components/Inputs/Select.jsx */ "./src/js/app/components/Inputs/Select.jsx");

var _Select2 = _interopRequireDefault(_Select);

var _Photo = __webpack_require__(/*! ../../components/Inputs/Photo.jsx */ "./src/js/app/components/Inputs/Photo.jsx");

var _Photo2 = _interopRequireDefault(_Photo);

var _Picture = __webpack_require__(/*! ../../components/Inputs/Picture.jsx */ "./src/js/app/components/Inputs/Picture.jsx");

var _Picture2 = _interopRequireDefault(_Picture);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    data: _propTypes2.default.object.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var photos = this.props.data.photos;

            var total = photos.length;

            this.setPhotos(total);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _prevProps$data = prevProps.data,
                photos = _prevProps$data.photos,
                prevType = _prevProps$data.type;
            var type = this.props.data.type;

            var total = photos.length;

            if (prevType !== type) this.setPhotos(total);
        }
    }, {
        key: 'handleBg',
        value: function handleBg(value) {
            var onChange = this.props.onChange;


            onChange({
                target: {
                    name: 'bg',
                    value: value
                }
            });
        }
    }, {
        key: 'setPhotos',
        value: function setPhotos(total) {
            var _props = this.props,
                data = _props.data,
                onChange = _props.onChange;
            var photos = data.photos,
                typeStr = data.type;

            var type = Number.parseInt(typeStr);
            var newState = void 0;

            if (type > 2 && total !== 0) {
                onChange({
                    target: {
                        name: 'photos',
                        value: []
                    }
                });
            } else if (type === 1 && total !== 1) {
                if (total > 1) newState = photos.slice(0, 1);else newState = [{}];

                onChange({
                    target: {
                        name: 'photos',
                        value: newState
                    }
                });
            } else if (type === 2 && total !== 2) {
                if (total === 0) newState = [{}, {}];else {
                    newState = photos.slice(0, 1);
                    newState.push({});
                }

                onChange({
                    target: {
                        name: 'photos',
                        value: newState
                    }
                });
            }
        }
    }, {
        key: 'handlePhotos',
        value: function handlePhotos(position, value) {
            var _props2 = this.props,
                data = _props2.data,
                onChange = _props2.onChange;
            var photos = data.photos;

            var newPhotos = [].concat(_toConsumableArray(photos));
            newPhotos[position] = value;

            onChange({
                target: {
                    name: 'photos',
                    value: newPhotos
                }
            });
        }
    }, {
        key: 'handleFontSize',
        value: function handleFontSize(value) {
            var _props3 = this.props,
                data = _props3.data,
                onChange = _props3.onChange;
            var fontSize = data.fontSize;


            onChange({
                target: {
                    name: 'fontSize',
                    value: fontSize + value
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props4 = this.props,
                data = _props4.data,
                onChange = _props4.onChange;
            var types = _selects2.default.typesB2B,
                weekdays = _selects2.default.weekdays;


            return _react2.default.createElement(
                'div',
                { className: 'form' },
                _react2.default.createElement(_Template2.default, {
                    label: 'Template',
                    name: 'template',
                    value: data.template,
                    onChange: onChange
                }),
                _react2.default.createElement(_Select2.default, {
                    label: 'Modelo',
                    name: 'type',
                    options: types,
                    value: data.type,
                    onChange: onChange
                }),
                _react2.default.createElement(_Picture2.default, {
                    label: 'Fundo',
                    name: 'bg',
                    id: 'Fundo',
                    value: data.bg,
                    onChange: function onChange(value) {
                        return _this2.handleBg(value);
                    }
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Cidade',
                        name: 'city',
                        value: data.city,
                        onChange: onChange
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttons-group' },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/increase.png' })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(-1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/decrease.png' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Associado',
                        name: 'priceA',
                        value: data.priceA,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Text2.default, {
                        label: 'Expositor',
                        name: 'priceB',
                        value: data.priceB,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Text2.default, {
                        label: 'N\xE3o Associado',
                        name: 'priceC',
                        value: data.priceC,
                        onChange: onChange
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Dia',
                        name: 'date',
                        value: data.date,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Select2.default, {
                        label: 'Dia da semana',
                        name: 'weekday',
                        options: weekdays,
                        value: data.weekday,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Text2.default, {
                        label: 'Check-in',
                        name: 'checkIn',
                        value: data.checkIn,
                        onChange: onChange
                    })
                ),
                _react2.default.createElement(_Text2.default, {
                    label: 'Local',
                    name: 'place',
                    value: data.place,
                    onChange: onChange
                }),
                _react2.default.createElement(_TextArea2.default, {
                    label: 'Endere\xE7o',
                    name: 'address',
                    value: data.address,
                    onChange: onChange
                }),
                data.photos.map(function (item, index) {
                    return _react2.default.createElement(_Photo2.default, {
                        key: index,
                        position: index,
                        label: 'Palestrante',
                        name: 'photos[' + index + ']',
                        value: item,
                        onChange: function onChange(position, value) {
                            return _this2.handlePhotos(position, value);
                        }
                    });
                })
            );
        }
    }]);

    return Form;
}(_react.Component);

Form.propTypes = propTypes;

exports.default = Form;

/***/ }),

/***/ "./src/js/app/containers/B2B/Post.jsx":
/*!********************************************!*\
  !*** ./src/js/app/containers/B2B/Post.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _Header = __webpack_require__(/*! ../../components/Header.jsx */ "./src/js/app/components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Preview = __webpack_require__(/*! ./Preview.jsx */ "./src/js/app/containers/B2B/Preview.jsx");

var _Preview2 = _interopRequireDefault(_Preview);

var _Form = __webpack_require__(/*! ./Form.jsx */ "./src/js/app/containers/B2B/Form.jsx");

var _Form2 = _interopRequireDefault(_Form);

var _googleAnalytics = __webpack_require__(/*! ../../utils/googleAnalytics */ "./src/js/app/utils/googleAnalytics.js");

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
    _inherits(Posts, _Component);

    function Posts(props) {
        _classCallCheck(this, Posts);

        var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

        _this.state = {
            inputs: {
                template: 'A',
                type: 3,
                bg: {
                    file: '',
                    scale: 1
                },
                title: '',
                city: '',
                date: '',
                weekday: '',
                checkIn: '',
                place: '',
                address: '',
                photos: [],
                fontSize: 92,
                priceA: '',
                priceB: '',
                priceC: ''
            },
            dataImage: '/#'
        };
        _this.canvas = new PIXI.Application({ width: 1080, height: 1080, preserveDrawingBuffer: true, premultipliedAlpha: true, backgroundColor: 0xFFFFFF });
        return _this;
    }

    _createClass(Posts, [{
        key: 'onChange',
        value: function onChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;

            this.setState(function (prevState) {
                return _extends({}, prevState, {
                    inputs: _extends({}, prevState.inputs, _defineProperty({}, name, value))
                });
            });
        }
    }, {
        key: 'download',
        value: function download() {
            var image = this.canvas.renderer.extract.base64(this.canvas.stage);
            this.setState({
                dataImage: image
            });

            var inputs = this.state.inputs;

            var type = _selects2.default.typesB2B.find(function (item) {
                return item.value === Number(inputs.type);
            });
            (0, _googleAnalytics.event)('download', 'B2B', type.label);
            (0, _googleAnalytics.event)('content', 'B2B', 'Cidade: ' + inputs.city);
            (0, _googleAnalytics.event)('content', 'B2B', 'Dia da semana: ' + inputs.weekday);
            (0, _googleAnalytics.event)('content', 'B2B', 'Check in: ' + inputs.checkIn);
            if (inputs.photos.length > 0) inputs.photos.map(function (photo) {
                (0, _googleAnalytics.event)('content', 'B2B', 'Photo: ' + photo.name + ' / ' + photo.role);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                inputs = _state.inputs,
                dataImage = _state.dataImage;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_Header2.default, { title: 'GERADOR DE CONVITE B2B' }),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    _react2.default.createElement(_Form2.default, {
                        data: inputs,
                        onChange: function onChange(event) {
                            return _this2.onChange(event);
                        }
                    }),
                    _react2.default.createElement(_Preview2.default, {
                        canvas: this.canvas,
                        data: inputs
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper left' },
                    _react2.default.createElement(
                        'a',
                        {
                            href: dataImage,
                            download: 'youhub-b2b.png',
                            className: 'download',
                            onClick: function onClick() {
                                return _this2.download();
                            }
                        },
                        'Download'
                    )
                )
            );
        }
    }]);

    return Posts;
}(_react.Component);

exports.default = Posts;

/***/ }),

/***/ "./src/js/app/containers/B2B/Preview.jsx":
/*!***********************************************!*\
  !*** ./src/js/app/containers/B2B/Preview.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    canvas: _propTypes2.default.any,
    data: _propTypes2.default.object.isRequired
};

var colors = {
    purple: '#5c2e91',
    white: '#FFFFFF',
    orange: '#f47920'
};

var welcomeMessages = {
    1: 'Com a\n presença de:',
    2: 'Presenças de:'
};

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        _this.app = _this.props.canvas;
        _this.first = true;
        _this.elements = {};
        _this.myRef = _react2.default.createRef();
        return _this;
    }

    _createClass(Preview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.myRef.current.appendChild(this.app.view);
            //update
            var loader = PIXI.loader.add('/images/phone.png').add('/images/photo.png').add('/images/bg.png').add('/images/template-bg-A1.png').add('/images/template-bg-A2.png').add('/images/template-bg-B1.png').add('/images/template-bg-B2.png').add('/images/template-bg-C1.png').add('/images/template-bg-C2.png').load(function () {
                return _this2.update();
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps !== this.props) this.update();
        }
    }, {
        key: 'update',
        value: function update() {
            var _props$data = this.props.data,
                template = _props$data.template,
                type = _props$data.type,
                bg = _props$data.bg,
                city = _props$data.city,
                priceA = _props$data.priceA,
                priceB = _props$data.priceB,
                priceC = _props$data.priceC,
                date = _props$data.date,
                weekday = _props$data.weekday,
                checkIn = _props$data.checkIn,
                place = _props$data.place,
                address = _props$data.address,
                photos = _props$data.photos,
                fontSize = _props$data.fontSize;

            var color = template === 'A' || template === 'B' ? colors.purple : colors.white;
            var typeInt = Number.parseInt(type) || 0;

            var a = document.getElementById('Fundo');
            if (a != undefined) {
                a.style.display = "";
            }
            if (template === 'A') {
                // escnder

                console.log(a);

                a.style.display = 'none';
            }
            console.log("update");
            this.canvasBg(bg);
            this.canvasBase(template, typeInt);
            this.canvasStatic(color, typeInt, template);
            //this.canvasTitle(color);
            this.canvasPrice(priceA, priceB, priceC, color);
            this.canvasCity(city.toUpperCase(), color, fontSize);
            this.canvasDate(date, weekday.toUpperCase(), color);
            this.canvasCheck(checkIn, color);
            this.canvasPlace(place, color);
            this.canvasAddress(address, color);
            this.canvasPhone(typeInt);
            this.canvasPhotos(typeInt, photos);
        }
    }, {
        key: 'canvasBg',
        value: function canvasBg(bg) {
            var _this3 = this;

            var exists = this.elements.bg ? true : false;

            if (exists) {
                if (bg.file) this.loadImage(bg.file).then(function (res) {
                    _this3.elements.bg.texture = res;
                });

                this.elements.bg.scale.x = bg.scale;
                this.elements.bg.scale.y = bg.scale;
                return;
            }

            /*const file = PIXI.Texture.fromImage(`/images/b2b/bg.png`);
            this.elements.bg = new PIXI.Sprite(file);
            this.app.stage.addChild(this.elements.bg);*/
            var filters = new PIXI.filters.ColorMatrixFilter();
            var file = PIXI.Texture.fromImage('/images/b2b/background.png');
            file.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

            var mask = new PIXI.Graphics();
            mask.lineStyle(0).beginFill(0xFF0000, 1).drawRect(0, 0, 1080, 1080).endFill();

            this.elements.bg = new PIXI.Sprite(file);
            this.elements.bg.anchor.set(.5, .5);
            this.elements.bg.x = 540;
            this.elements.bg.y = 540;
            this.elements.bg.filters = [filters];
            //filters.blackAndWhite(false);

            this.elements.bg.mask = mask;

            this.app.stage.addChild(this.elements.bg);
        }
    }, {
        key: 'canvasBase',
        value: function canvasBase(template, type) {
            var exists = this.elements.base ? true : false;
            var variant = 3;
            if (template == undefined) {
                template = "A";
            }
            console.log("Typo:" + variant);
            console.log("templat:");
            console.log(template);
            var file = PIXI.Texture.fromImage('/images/b2b/template-bg-' + template + variant + '.png');

            if (exists) {
                this.elements.base.texture = file;
                return;
            }

            this.elements.base = new PIXI.Sprite(file);
            this.app.stage.addChild(this.elements.base);
        }
    }, {
        key: 'canvasStatic',
        value: function canvasStatic(color, type, template) {
            var colortexto = template === 'C' ? colors.white : colors.purple;
            if (!this.first) {
                this.elements.prices.style.fill = colortexto;
                this.elements.check.style.fill = colortexto;

                return;
            }

            //load images
            var phoneFile = PIXI.Texture.fromImage('/images/posts/phone.png');
            var speakerFile = PIXI.Texture.fromImage('/images/posts/photo.png');
            speakerFile.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

            console.log("cor texto" + colortexto);

            //prices labels
            //text top on phone container
            this.elements.prices = new PIXI.Text('Associado: R$\nExpositor: R$\nNão Associado: R$', {
                fontWeight: 400,
                fontSize: 30,
                fontFamily: 'Lato',
                fill: colortexto,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 396
            });

            this.elements.prices.x = 65;
            this.elements.prices.y = 620;

            //orange box
            this.elements.box = new PIXI.Graphics();
            this.elements.box.beginFill(0xf47920).drawRect(43, 763, 7, 150).endFill();
            //checkin text
            this.elements.check = new PIXI.Text('CHECK IN:', {
                fontWeight: 300,
                fontSize: 43,
                fontFamily: 'Lato',
                fill: color,
                align: 'left'
            });

            this.elements.check.x = 65;
            this.elements.check.y = 850;

            //PHONE
            //phone container
            this.elements.container = new PIXI.Container();
            this.elements.container.x = 630;
            this.elements.container.y = 230;
            //phone mockup
            this.elements.phone = new PIXI.Sprite(phoneFile);
            this.elements.phone.x = 0;
            this.elements.phone.y = 0;
            //text top on phone container
            this.elements.welcome = new PIXI.Text(welcomeMessages[type], {
                fontWeight: 300,
                fontSize: 25,
                fontFamily: 'Lato',
                fill: colors.white,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 396
            });

            this.elements.welcome.anchor.set(0.5, 0);
            this.elements.welcome.x = 200;
            this.elements.welcome.y = 150;

            /*
            * SPEAKERS
            */
            //speaker container A
            this.elements.speakerA = new PIXI.Container();
            this.elements.speakerA.x = 0;
            this.elements.speakerA.y = 250;
            // speaker border
            this.elements.borderA = new PIXI.Graphics();
            this.elements.borderA.lineStyle(0).beginFill(0xFFFFFF, .2).drawCircle(198, 130, 130).endFill();
            //speaker mask
            this.elements.maskA = new PIXI.Graphics();
            this.elements.maskA.lineStyle(0).beginFill(0xFF0000, 1).drawCircle(198, 130, 120).endFill();

            //speaker picture
            this.elements.speakerAPicture = new PIXI.Sprite(speakerFile);
            this.elements.speakerAPicture.interactive = true;
            this.elements.speakerAPicture.buttonMode = true;
            this.elements.speakerAPicture.anchor.set(.5, .5);
            this.elements.speakerAPicture.x = 198;
            this.elements.speakerAPicture.y = 130;
            this.elements.speakerAPicture.scale.x *= .8;
            this.elements.speakerAPicture.scale.y *= .8;
            //
            this.elements.speakerAPicture.mask = this.elements.maskA;
            //speaker drad and drop
            this.elements.speakerAPicture.on('pointerdown', this.onDragStart).on('pointerup', this.onDragEnd).on('pointerupoutside', this.onDragEnd).on('pointermove', this.onDragMove);

            //speaker name
            this.elements.speakerAName = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 35,
                fontFamily: 'Lato',
                fill: colors.white,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 300
            });

            this.elements.speakerAName.anchor.set(0.5, 0);
            this.elements.speakerAName.x = 200;
            this.elements.speakerAName.y = 280;
            //speaker role
            this.elements.speakerARole = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 25,
                fontFamily: 'Lato',
                fill: colors.white,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 300
            });

            this.elements.speakerARole.anchor.set(0.5, 0);
            this.elements.speakerARole.x = 200;

            //speaker B
            this.elements.speakerB = new PIXI.Container();
            this.elements.speakerB.x = 60;
            this.elements.speakerB.y = this.elements.speakerA.height + 20;
            this.elements.speakerB.scale.x *= .7;
            this.elements.speakerB.scale.y *= .7;
            //speaker border
            this.elements.borderB = new PIXI.Graphics();
            this.elements.borderB.lineStyle(0).beginFill(0xFFFFFF, .2).drawCircle(198, 130, 130).endFill();
            //speaker mask
            this.elements.maskB = new PIXI.Graphics();
            this.elements.maskB.lineStyle(0).beginFill(0xFF0000, 1).drawCircle(198, 130, 120).endFill();
            //speaker picture
            this.elements.speakerBPicture = new PIXI.Sprite(speakerFile);
            this.elements.speakerBPicture.interactive = true;
            this.elements.speakerBPicture.buttonMode = true;
            this.elements.speakerBPicture.anchor.set(.5, .5);
            this.elements.speakerBPicture.x = 198;
            this.elements.speakerBPicture.y = 130;
            this.elements.speakerBPicture.scale.x *= .8;
            this.elements.speakerBPicture.scale.y *= .8;
            //
            this.elements.speakerBPicture.mask = this.elements.maskB;
            //speaker drap
            this.elements.speakerBPicture.on('pointerdown', this.onDragStart).on('pointerup', this.onDragEnd).on('pointerupoutside', this.onDragEnd).on('pointermove', this.onDragMove);
            //speaker name
            this.elements.speakerBName = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 35,
                fontFamily: 'Lato',
                fill: colors.white,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 300
            });
            //
            this.elements.speakerBName.anchor.set(0.5, 0);
            this.elements.speakerBName.x = 200;
            this.elements.speakerBName.y = 280;
            //speaker role
            this.elements.speakerBRole = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 25,
                fontFamily: 'Lato',
                fill: colors.white,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 300
            });

            this.elements.speakerBRole.anchor.set(0.5, 0);
            this.elements.speakerBRole.x = 200;

            //add to stage
            this.app.stage.addChild(this.elements.box, this.elements.check, this.elements.prices, this.elements.container);
            this.elements.container.addChild(this.elements.phone, this.elements.welcome, this.elements.speakerA, this.elements.speakerB);
            this.elements.speakerA.addChild(this.elements.borderA, this.elements.maskA, this.elements.speakerAPicture, this.elements.speakerAName, this.elements.speakerARole);
            this.elements.speakerB.addChild(this.elements.borderB, this.elements.maskB, this.elements.speakerBPicture, this.elements.speakerBName, this.elements.speakerBRole);

            this.first = false;
        }
    }, {
        key: 'canvasTitle',
        value: function canvasTitle(color) {
            var exists = this.elements.title ? true : false;

            if (exists) {
                this.elements.title.text = 'B2B';
                return;
            }

            this.elements.title = new PIXI.Text('B2B', {
                fontWeight: 700,
                fontSize: 240,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550
            });

            this.elements.title.x = 55;
            this.elements.title.y = 270;

            this.app.stage.addChild(this.elements.title);
        }
    }, {
        key: 'canvasPrice',
        value: function canvasPrice(priceA, priceB, priceC, color) {
            console.log("canvasPrice" + color);
            console.log("textoA" + this.elements.priceA);
            //priceA
            if (this.elements.priceA) {
                this.elements.priceA.style.fill = color;
                this.elements.priceA.text = priceA;
            } else {
                this.elements.priceA = new PIXI.Text(priceA, {
                    fontWeight: 700,
                    fontSize: 30,
                    fontFamily: 'Lato',
                    fill: color,
                    align: 'left',
                    wordWrap: true,
                    wordWrapWidth: 396,
                    zIndex: 1000
                });

                this.elements.priceA.x = 253;
                this.elements.priceA.y = this.elements.prices.y;

                this.app.stage.addChild(this.elements.priceA);
            }
            //priceB
            if (this.elements.priceB) {
                this.elements.priceB.text = priceB;
                this.elements.priceB.style.fill = color;
            } else {
                this.elements.priceB = new PIXI.Text(priceB, {
                    fontWeight: 700,
                    fontSize: 30,
                    fontFamily: 'Lato',
                    fill: color,
                    align: 'left',
                    wordWrap: true,
                    wordWrapWidth: 396,
                    zIndex: 1000
                });

                this.elements.priceB.x = 245;
                this.elements.priceB.y = this.elements.priceA.y + this.elements.priceA.height;

                this.app.stage.addChild(this.elements.priceB);
            }
            //priceC
            if (this.elements.priceC) {
                this.elements.priceC.text = priceC;
                this.elements.priceC.style.fill = color;
            } else {
                this.elements.priceC = new PIXI.Text(priceC, {
                    fontWeight: 700,
                    fontSize: 30,
                    fontFamily: 'Lato',
                    fill: color,
                    align: 'left',
                    wordWrap: true,
                    wordWrapWidth: 396,
                    zIndex: 1000
                });

                this.elements.priceC.x = 314;
                this.elements.priceC.y = this.elements.priceB.y + this.elements.priceB.height;

                this.app.stage.addChild(this.elements.priceC);
            }
        }
    }, {
        key: 'canvasCity',
        value: function canvasCity(text, color, fontSize) {
            var exists = this.elements.city ? true : false;

            if (exists) {
                this.elements.city.style.fill = color;
                this.elements.city.text = text;
                this.elements.city.style.fontSize = fontSize;
                return;
            }

            this.elements.city = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: fontSize,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550
            });

            this.elements.city.anchor.set(0, 0.5);
            this.elements.city.x = 65;
            this.elements.city.y = 556;

            this.app.stage.addChild(this.elements.city);
        }
    }, {
        key: 'canvasDate',
        value: function canvasDate(textA, textB, color) {
            var exists = this.elements.date ? true : false;
            var text = textA ? textA + ' - ' + textB : '';

            if (exists) {
                this.elements.date.text = text;
                this.elements.date.style.fill = color;
                return;
            }

            this.elements.date = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 60,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550
            });

            this.elements.date.x = 65;
            this.elements.date.y = 770;

            this.app.stage.addChild(this.elements.date);
        }
    }, {
        key: 'canvasCheck',
        value: function canvasCheck(text, color) {
            var exists = this.elements.hour ? true : false;

            if (exists) {
                this.elements.hour.style.fill = color;
                this.elements.hour.text = text;
                return;
            }

            this.elements.hour = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 43,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550
            });

            this.elements.hour.x = 280;
            this.elements.hour.y = this.elements.check.y;

            this.app.stage.addChild(this.elements.hour);
        }
    }, {
        key: 'canvasPlace',
        value: function canvasPlace(text, color) {
            var exists = this.elements.place ? true : false;

            if (exists) {
                this.elements.place.style.fill = color;
                this.elements.place.text = text;
                return;
            }

            this.elements.place = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 30,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550
            });

            this.elements.place.x = 65;
            this.elements.place.y = this.elements.check.y + 70;

            this.app.stage.addChild(this.elements.place);
        }
    }, {
        key: 'canvasAddress',
        value: function canvasAddress(text, color) {
            var exists = this.elements.address ? true : false;

            if (exists) {
                this.elements.address.style.fill = color;
                this.elements.address.text = text;
                this.elements.address.y = this.elements.place.y + this.elements.place.height;
                return;
            }

            this.elements.address = new PIXI.Text(text, {
                fontWeight: 400,
                fontSize: 30,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 600
            });

            this.elements.address.x = 65;

            this.app.stage.addChild(this.elements.address);
        }
    }, {
        key: 'canvasPhone',
        value: function canvasPhone(type) {
            if (type <= 2) {
                this.elements.container.visible = true;
                this.elements.welcome.text = welcomeMessages[type];
            } else this.elements.container.visible = false;
        }
    }, {
        key: 'canvasPhotos',
        value: function canvasPhotos(type, speaker) {
            var _this4 = this;

            var scale = void 0;

            if (type === 1) {
                this.elements.speakerA.x = 0;
                this.elements.speakerA.y = 250;
                this.elements.speakerA.scale.x = 1;
                this.elements.speakerA.scale.y = 1;
                this.elements.speakerB.visible = false;
            } else {
                this.elements.speakerA.x = 60;
                this.elements.speakerA.y = 200;
                this.elements.speakerA.scale.x = .7;
                this.elements.speakerA.scale.y = .7;
                this.elements.speakerB.visible = true;
            }

            if (type <= 2) {
                var speakerA = speaker[0] || {};
                scale = speakerA.scale || 1;
                this.elements.speakerAName.text = speakerA.name;
                this.elements.speakerARole.text = speakerA.role;
                this.elements.speakerARole.y = this.elements.speakerAName.y + this.elements.speakerAName.height;
                this.elements.speakerAPicture.scale.x = scale;
                this.elements.speakerAPicture.scale.y = scale;

                if (speakerA.file) this.loadImage(speakerA.file).then(function (res) {
                    _this4.elements.speakerAPicture.texture = res;
                });
            }
            if (type === 2) {
                var speakerB = speaker[1] || {};
                scale = speakerB.scale || 1;
                this.elements.speakerB.y = this.elements.speakerA.y + this.elements.speakerA.height + 20;
                this.elements.speakerBName.text = speakerB.name;
                this.elements.speakerBRole.text = speakerB.role;
                this.elements.speakerBRole.y = this.elements.speakerBName.y + this.elements.speakerBName.height;
                this.elements.speakerBPicture.scale.x = scale;
                this.elements.speakerBPicture.scale.y = scale;

                if (speakerB.file) this.loadImage(speakerB.file).then(function (res) {
                    _this4.elements.speakerBPicture.texture = res;
                });
            }
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(event) {
            this.draggingData = event.data;
            var position = this.draggingData.getLocalPosition(this);
            this.pivot.set(position.x, position.y);
            this.position.set(this.draggingData.global.x, this.draggingData.global.y);
            this.dragging = true;

            var newPosition = this.draggingData.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd() {
            this.dragging = false;
            this.draggingData = null;
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove() {
            if (this.dragging) {
                var newPosition = this.draggingData.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
    }, {
        key: 'loadImage',
        value: function loadImage(src) {

            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var file = PIXI.Texture.fromImage(e.target.result);
                    resolve(file);
                };
                reader.readAsDataURL(src);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'preview',
                ref: this.myRef
            });
        }
    }]);

    return Preview;
}(_react.Component);

Preview.propTypes = propTypes;

exports.default = Preview;

/***/ }),

/***/ "./src/js/app/containers/Banner/Form.jsx":
/*!***********************************************!*\
  !*** ./src/js/app/containers/Banner/Form.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = __webpack_require__(/*! ../../components/Inputs/Text.jsx */ "./src/js/app/components/Inputs/Text.jsx");

var _Text2 = _interopRequireDefault(_Text);

var _TextArea = __webpack_require__(/*! ../../components/Inputs/TextArea.jsx */ "./src/js/app/components/Inputs/TextArea.jsx");

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(/*! ../../components/Inputs/Select.jsx */ "./src/js/app/components/Inputs/Select.jsx");

var _Select2 = _interopRequireDefault(_Select);

var _Picture = __webpack_require__(/*! ../../components/Inputs/Picture.jsx */ "./src/js/app/components/Inputs/Picture.jsx");

var _Picture2 = _interopRequireDefault(_Picture);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    data: _propTypes2.default.object.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'handleFontSize',
        value: function handleFontSize(value) {
            var _props = this.props,
                data = _props.data,
                onChange = _props.onChange;
            var fontSize = data.fontSize;


            onChange({
                target: {
                    name: 'fontSize',
                    value: fontSize + value
                }
            });
        }
    }, {
        key: 'handlePhoto',
        value: function handlePhoto(value) {
            var onChange = this.props.onChange;


            onChange({
                target: {
                    name: 'photo',
                    value: value
                }
            });
        }
    }, {
        key: 'handleFontSize',
        value: function handleFontSize(value) {
            var _props2 = this.props,
                data = _props2.data,
                onChange = _props2.onChange;
            var fontSize = data.fontSize;


            onChange({
                target: {
                    name: 'fontSize',
                    value: fontSize + value
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props3 = this.props,
                data = _props3.data,
                onChange = _props3.onChange;
            var models = _selects2.default.modelsBanner,
                types = _selects2.default.typesBanner,
                weekdays = _selects2.default.weekdays;


            return _react2.default.createElement(
                'div',
                { className: 'form' },
                _react2.default.createElement(_Select2.default, {
                    label: 'Modelo',
                    name: 'model',
                    options: models,
                    value: data.model,
                    onChange: onChange
                }),
                _react2.default.createElement(_Select2.default, {
                    label: 'Foto',
                    name: 'type',
                    options: types,
                    value: data.type,
                    onChange: onChange
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Nome',
                        name: 'name',
                        value: data.name,
                        onChange: onChange
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttons-group' },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/increase.png' })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(-1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/decrease.png' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Cidade',
                        name: 'city',
                        value: data.city,
                        onChange: onChange
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttons-group' },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/increase.png' })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(-1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/decrease.png' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Dia',
                        name: 'date',
                        value: data.date,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Select2.default, {
                        label: 'Dia da semana',
                        name: 'weekday',
                        options: weekdays,
                        value: data.weekday,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Text2.default, {
                        label: 'Check-in',
                        name: 'checkIn',
                        value: data.checkIn,
                        onChange: onChange
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Palestrante',
                        name: 'speaker',
                        value: data.speaker,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Text2.default, {
                        label: 'Profiss\xE3o',
                        name: 'speaker_profession',
                        value: data.speaker_profession,
                        onChange: onChange
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Convidado Especial',
                        name: 'special_guest',
                        value: data.special_guest,
                        onChange: onChange
                    }),
                    _react2.default.createElement(_Text2.default, {
                        label: 'Profiss\xE3o',
                        name: 'special_guest_profession',
                        value: data.special_guest_profession,
                        onChange: onChange
                    })
                ),
                _react2.default.createElement(_Text2.default, {
                    label: 'Traje',
                    name: 'costume',
                    value: data.costume,
                    onChange: onChange
                }),
                _react2.default.createElement(_Text2.default, {
                    label: 'Local',
                    name: 'place',
                    value: data.place,
                    onChange: onChange
                }),
                _react2.default.createElement(_TextArea2.default, {
                    label: 'Endere\xE7o',
                    name: 'address',
                    value: data.address,
                    onChange: onChange
                }),
                _react2.default.createElement(_TextArea2.default, {
                    label: 'Informa\xE7\xF5es Adicionais',
                    name: 'other_info',
                    value: data.other_info,
                    onChange: onChange
                }),
                _react2.default.createElement(_TextArea2.default, {
                    label: 'Credencial',
                    name: 'credential',
                    value: data.credential,
                    onChange: onChange
                }),
                data.type === 'B' ? _react2.default.createElement(_Picture2.default, {
                    label: 'Foto',
                    name: 'photo',
                    value: data.photo,
                    onChange: function onChange(value) {
                        return _this2.handlePhoto(value);
                    }
                }) : null
            );
        }
    }]);

    return Form;
}(_react.Component);

Form.propTypes = propTypes;

exports.default = Form;

/***/ }),

/***/ "./src/js/app/containers/Banner/Post.jsx":
/*!***********************************************!*\
  !*** ./src/js/app/containers/Banner/Post.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _Header = __webpack_require__(/*! ../../components/Header.jsx */ "./src/js/app/components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Preview = __webpack_require__(/*! ./Preview.jsx */ "./src/js/app/containers/Banner/Preview.jsx");

var _Preview2 = _interopRequireDefault(_Preview);

var _Form = __webpack_require__(/*! ./Form.jsx */ "./src/js/app/containers/Banner/Form.jsx");

var _Form2 = _interopRequireDefault(_Form);

var _googleAnalytics = __webpack_require__(/*! ../../utils/googleAnalytics */ "./src/js/app/utils/googleAnalytics.js");

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
    _inherits(Posts, _Component);

    function Posts(props) {
        _classCallCheck(this, Posts);

        var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

        _this.state = {
            inputs: {
                model: 'banner',
                type: 'A',
                name: '',
                city: '',
                date: '',
                weekday: '',
                checkIn: '',
                place: '',
                address: '',
                speaker: '',
                speaker_profession: '',
                special_guest: '',
                special_guest_profession: '',
                costume: '',
                other_info: '',
                credential: '',

                photo: {
                    file: '',
                    scale: 1
                },
                fontSize: 88
            },
            dataImage: '/#'
        };
        _this.canvas = new PIXI.Application({ width: 1080, height: 1080, preserveDrawingBuffer: true, premultipliedAlpha: true, backgroundColor: 0xFFFFFF });
        return _this;
    }

    _createClass(Posts, [{
        key: 'onChange',
        value: function onChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;

            this.setState(function (prevState) {
                return _extends({}, prevState, {
                    inputs: _extends({}, prevState.inputs, _defineProperty({}, name, value))
                });
            });
        }
    }, {
        key: 'download',
        value: function download() {
            var inputs = this.state.inputs;

            var type = Boolean(inputs.type) ? 'Com foto' : 'Sem foto';
            var model = _selects2.default.modelsBanner.find(function (item) {
                return item.value === Number(inputs.model);
            });
            (0, _googleAnalytics.event)('download', 'Reconhecimento', 'Categoria ' + model + ' - ' + type.label);
            (0, _googleAnalytics.event)('content', 'Reconhecimento', 'Nome: ' + inputs.name);

            var image = this.canvas.renderer.extract.base64(this.canvas.stage);
            this.setState({
                dataImage: image
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                inputs = _state.inputs,
                dataImage = _state.dataImage;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_Header2.default, { title: 'GERADOR DE BANNER' }),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    _react2.default.createElement(_Form2.default, {
                        data: inputs,
                        onChange: function onChange(event) {
                            return _this2.onChange(event);
                        }
                    }),
                    _react2.default.createElement(_Preview2.default, {
                        canvas: this.canvas,
                        data: inputs
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper left' },
                    _react2.default.createElement(
                        'a',
                        {
                            href: dataImage,
                            download: 'youhub-banner.png',
                            className: 'download',
                            onClick: function onClick() {
                                return _this2.download();
                            }
                        },
                        'Download'
                    )
                )
            );
        }
    }]);

    return Posts;
}(_react.Component);

exports.default = Posts;

/***/ }),

/***/ "./src/js/app/containers/Banner/Preview.jsx":
/*!**************************************************!*\
  !*** ./src/js/app/containers/Banner/Preview.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    canvas: _propTypes2.default.any,
    data: _propTypes2.default.object.isRequired
};

var colors = {
    white: '#FFFFFF',
    greenolive: '#436435',
    brownred: '#663b32'
};

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        _this.app = _this.props.canvas;
        _this.elements = {};
        _this.myRef = _react2.default.createRef();
        return _this;
    }

    _createClass(Preview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.myRef.current.appendChild(this.app.view);
            //update
            var loader = PIXI.loader.add('/images/banner/banner_A.png').load(function () {
                return _this2.create();
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps !== this.props) this.update();
        }
    }, {
        key: 'create',
        value: function create() {
            //BG
            this.elements.background = new PIXI.Sprite('');
            this.elements.background.anchor.set(.5, .5);
            this.elements.background.x = 540;
            this.elements.background.y = 540;
            //parabens
            this.elements.congrats = new PIXI.Text('PARABÉNS!', {
                fontWeight: 700,
                fontSize: 69,
                fontFamily: 'Exo 2',
                letterSpacing: 0,
                fill: colors.white,
                align: 'center'
            });
            //text
            this.elements.text = new PIXI.Text('VOCÊ ATINGIU A QUALIFICAÇÃO', {
                fontWeight: 300,
                fontSize: 30,
                fontFamily: 'Exo 2',
                letterSpacing: 2,
                fill: colors.white,
                align: 'center'
            });
            this.elements.text.anchor.set(.5, 0);
            //text
            this.elements.category = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 103,
                fontFamily: 'Exo 2',
                letterSpacing: 2,
                fill: colors.white,
                align: 'center'
            });
            //name
            this.elements.name = new PIXI.Text('', {
                fontWeight: 300,
                fontSize: 88,
                fontFamily: 'Exo 2',
                letterSpacing: 2,
                fill: colors.white,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 760
            });
            this.elements.name.anchor.set(.5, 0);
            //achive
            this.elements.achive = new PIXI.Sprite('');
            this.elements.achive.anchor.set(.5, .5);
            //picture
            this.elements.pictureContainer = new PIXI.Container();
            this.elements.border = new PIXI.Graphics();
            this.elements.border.lineStyle(0).beginFill(0xFFFF00, .2).drawRect(190, 190, 650, 550).endFill();
            this.elements.mask = new PIXI.Graphics();
            this.elements.mask.lineStyle(0).beginFill(0xFF0000, 1).drawRect(200, 200, 500, 500).endFill();
            this.elements.picture = new PIXI.Sprite('');
            this.elements.picture.interactive = true;
            this.elements.picture.buttonMode = true;
            this.elements.picture.anchor.set(.5, .5);
            this.elements.picture.x = 200;
            this.elements.picture.y = 200;
            this.elements.picture.mask = this.elements.mask;
            //picture drag
            this.elements.picture.on('pointerdown', this.onDragStart).on('pointerup', this.onDragEnd).on('pointerupoutside', this.onDragEnd).on('pointermove', this.onDragMove);

            this.elements.pictureContainer.addChild(this.elements.border, this.elements.mask, this.elements.picture);
            //
            this.app.stage.addChild(this.elements.background);
            this.app.stage.addChild(this.elements.congrats);
            this.app.stage.addChild(this.elements.text);
            this.app.stage.addChild(this.elements.category);
            this.app.stage.addChild(this.elements.name);
            this.app.stage.addChild(this.elements.pictureContainer);
            this.app.stage.addChild(this.elements.achive);

            this.update();
        }
    }, {
        key: 'update',
        value: function update() {
            var _props$data = this.props.data,
                model = _props$data.model,
                type = _props$data.type,
                name = _props$data.name,
                city = _props$data.city,
                date = _props$data.date,
                weekday = _props$data.weekday,
                photo = _props$data.photo,
                fontSize = _props$data.fontSize;

            var color = colors.white;
            var citycolor = colors.brownred;
            //Background
            var backgroundFilename = this.getBackgroundFilename(model, type);
            var fileBackground = PIXI.Texture.fromImage('/images/banner/' + backgroundFilename);
            fileBackground.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            this.elements.background.texture = fileBackground;
            //text
            this.updateText(this.elements.text, model, type);
            //model
            this.updateCategory(this.elements.category, model, type);
            //name
            this.updateName(this.elements.name, name, model, type);
            //
            this.updatePicture(this.elements.pictureContainer, this.elements.picture, photo, model, type);
            //congrats
            this.updateCongrats(this.elements.congrats, model, type);
            this.canvasCity(city.toUpperCase(), citycolor, fontSize);
            this.canvasDate(date, weekday.toUpperCase(), colors.greenolive);
        }

        /**
         * Retrive background image filename
         * @param {String} model
         * @param {String} type
         * @returns {String}
         */

    }, {
        key: 'getBackgroundFilename',
        value: function getBackgroundFilename(model, type) {
            return model + '-' + type + '.png';
        }

        /**
         * @param {Object} element
         * @param {String} model
         * @param {string} type
         * @returns {Null}
         */

    }, {
        key: 'updateCongrats',
        value: function updateCongrats(element, model, type) {
            var settings = {
                left: 0,
                size: 69,
                spacing: 0,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.size = 69;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.size = 69;
                element.style.align = 'center';
                settings.anchor = .5;
            }

            element.x = settings.left;
            element.style.fontSize = settings.size;
            element.style.letterSpacing = settings.spacing;
            element.style.align = settings.align;
            element.anchor.set(settings.anchor, 0);
            element.y = this.elements.name.y - element.height + 10;
        }

        /**
         * @param {Object} element
         * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updateText',
        value: function updateText(element, model, type) {
            var settings = {
                left: 0,
                top: 0,
                size: 30,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.top = 870;
                settings.size = 30;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.top = type === 'A' ? 760 : 833;
                settings.size = 30;
                element.style.align = 'center';
                settings.anchor = .5;
            }

            element.x = settings.left;
            element.y = settings.top;
            element.style.fontSize = settings.size;
            element.style.align = settings.align;
            element.anchor.set(settings.anchor, 0);
        }

        /**
         * @param {Object} element
         * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updateCategory',
        value: function updateCategory(element, model, type) {
            var settings = {
                left: 0,
                top: 0,
                size: 103,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('banner') !== -1) {
                settings.left = 540;
                settings.top = 897;
                settings.size = 69;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.top = type === 'A' ? 790 : 860;
                settings.size = type === 'A' ? 103 : 69;
            }
            console.log(model);
            console.log(settings);
            element.x = settings.left;
            element.y = settings.top;
            element.style.fontSize = settings.size;
            element.style.align = settings.align;
            element.anchor.set(settings.anchor, 0);
            element.text = _selects2.default.getLabelModelBanner(model).label.toUpperCase();
        }

        /**
         * @param {Object} element
         * @param {String} name
         * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updateName',
        value: function updateName(element, name, model, type) {
            var fontSize = this.props.data.fontSize;


            var settings = {
                left: 0,
                top: 0,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.top = 280;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.top = type === 'A' ? 380 : 270;
                settings.align = 'center';
                settings.anchor = .5;
            }

            element.x = settings.left;
            element.style.fontSize = fontSize;
            element.style.align = settings.align;
            element.style.lineHeight = fontSize * .8;
            element.anchor.set(settings.anchor, 0);
            element.text = name;

            element.y = settings.top - element.height;
        }

        /**
          * @param {Object} container
          * @param {Object} element
          * @param {Object} photo
          * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updatePicture',
        value: function updatePicture(container, element, photo, model, type) {
            var diamond = model.indexOf('diamond') !== -1;
            var settings = {
                left: 540,
                top: 500,
                scale: 1
            };

            if (type === 'B') {
                if (photo.file) this.loadImage(photo.file).then(function (res) {
                    element.texture = res;
                });

                if (diamond) {
                    container.scale.x = 1;
                    container.scale.y = 1;
                    container.x = 600;
                    container.y = 450;
                    this.app.stage.setChildIndex(container, 6);
                    this.app.stage.setChildIndex(this.elements.achive, 5);
                } else {
                    container.scale.x = 1;
                    container.scale.y = 1;
                    container.x = settings.left - container.width / 2;
                    container.y = settings.top - container.height / 2;
                    this.app.stage.setChildIndex(container, 5);
                    this.app.stage.setChildIndex(this.elements.achive, 6);
                }
                element.scale.x = photo.scale || 1;
                element.scale.y = photo.scale || 1;

                container.visible = true;
            } else {
                container.visible = false;
            }
        }
    }, {
        key: 'canvasCity',
        value: function canvasCity(text, color, fontSize) {
            var exists = this.elements.city ? true : false;
            if (exists) {
                this.elements.city.style.fill = color;
                this.elements.city.text = text;
                this.elements.city.style.fontSize = fontSize;
                return;
            }

            this.elements.city = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: fontSize,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550
            });

            this.elements.city.anchor.set(0, 0.5);
            this.elements.city.x = 190;
            this.elements.city.y = 420;
            this.app.stage.addChild(this.elements.city);
        }
    }, {
        key: 'canvasDate',
        value: function canvasDate(textA, textB, color) {
            var exists = this.elements.date ? true : false;
            var text = textA ? textA + ' - ' + textB : '';
            if (exists) {
                this.elements.date.text = text;
                this.elements.date.style.fill = color;
                return;
            }

            this.elements.date = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 60,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550
            });
            this.elements.date.anchor.set(0, 0.5);
            this.elements.date.x = 90;
            this.elements.date.y = 320;

            this.app.stage.addChild(this.elements.date);
        }
    }, {
        key: 'canvasSpeaker',
        value: function canvasSpeaker(textA, textB, color) {
            var exists = this.elements.date ? true : false;
            var text = textA ? textA + ' - ' + textB : '';
            if (exists) {
                this.elements.date.text = text;
                this.elements.date.style.fill = color;
                return;
            }

            this.elements.date = new PIXI.Text(text, {
                fontWeight: 900,
                fontSize: 60,
                fontFamily: 'Lato',
                fill: color,
                align: 'left',
                wordWrap: true,
                wordWrapWidth: 550
            });
            this.elements.date.anchor.set(0, 0.5);
            this.elements.date.x = 90;
            this.elements.date.y = 320;

            this.app.stage.addChild(this.elements.date);
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(event) {
            this.draggingData = event.data;
            var position = this.draggingData.getLocalPosition(this);
            this.pivot.set(position.x, position.y);
            this.position.set(this.draggingData.global.x, this.draggingData.global.y);
            this.dragging = true;

            var newPosition = this.draggingData.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd() {
            this.dragging = false;
            this.draggingData = null;
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove() {
            if (this.dragging) {
                var newPosition = this.draggingData.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
                console.log("X:" + this.x + " Y:" + this.y);
            }
        }
    }, {
        key: 'loadImage',
        value: function loadImage(src) {

            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var file = PIXI.Texture.fromImage(e.target.result);
                    resolve(file);
                };
                reader.readAsDataURL(src);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'preview',
                ref: this.myRef
            });
        }
    }]);

    return Preview;
}(_react.Component);

Preview.propTypes = propTypes;

exports.default = Preview;

/***/ }),

/***/ "./src/js/app/containers/Biogenica/Form.jsx":
/*!**************************************************!*\
  !*** ./src/js/app/containers/Biogenica/Form.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = __webpack_require__(/*! ../../components/Inputs/Text.jsx */ "./src/js/app/components/Inputs/Text.jsx");

var _Text2 = _interopRequireDefault(_Text);

var _Select = __webpack_require__(/*! ../../components/Inputs/Select.jsx */ "./src/js/app/components/Inputs/Select.jsx");

var _Select2 = _interopRequireDefault(_Select);

var _Picture = __webpack_require__(/*! ../../components/Inputs/Picture.jsx */ "./src/js/app/components/Inputs/Picture.jsx");

var _Picture2 = _interopRequireDefault(_Picture);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	data: _propTypes2.default.object.isRequired,
	onChange: _propTypes2.default.func.isRequired
};

var Form = function (_Component) {
	_inherits(Form, _Component);

	function Form() {
		_classCallCheck(this, Form);

		return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	}

	_createClass(Form, [{
		key: 'handleFontSize',
		value: function handleFontSize(value) {
			var _props = this.props,
			    data = _props.data,
			    onChange = _props.onChange;
			var fontSize = data.fontSize;


			onChange({
				target: {
					name: 'fontSize',
					value: fontSize + value
				}
			});
		}
	}, {
		key: 'handlePhoto',
		value: function handlePhoto(value) {
			var onChange = this.props.onChange;


			onChange({
				target: {
					name: 'photo',
					value: value
				}
			});
		}
	}, {
		key: 'handleFontSize',
		value: function handleFontSize(value) {
			var _props2 = this.props,
			    data = _props2.data,
			    onChange = _props2.onChange;
			var fontSize = data.fontSize;


			onChange({
				target: {
					name: 'fontSize',
					value: fontSize + value
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props3 = this.props,
			    data = _props3.data,
			    onChange = _props3.onChange;
			var models = _selects2.default.modelsBiogenica,
			    types = _selects2.default.typesRecM;


			return _react2.default.createElement(
				'div',
				{ className: 'form' },
				_react2.default.createElement(
					'div',
					{ className: 'group-row' },
					_react2.default.createElement(_Text2.default, {
						label: 'Nome',
						name: 'name',
						value: data.name,
						onChange: onChange
					}),
					_react2.default.createElement(
						'div',
						{ className: 'buttons-group' },
						_react2.default.createElement(
							'button',
							{
								type: 'button',
								className: 'changeSize',
								onClick: function onClick() {
									return _this2.handleFontSize(1);
								}
							},
							_react2.default.createElement('img', { src: '/images/increase.png' })
						),
						_react2.default.createElement(
							'button',
							{
								type: 'button',
								className: 'changeSize',
								onClick: function onClick() {
									return _this2.handleFontSize(-1);
								}
							},
							_react2.default.createElement('img', { src: '/images/decrease.png' })
						)
					)
				),
				data.type === 'B' ? _react2.default.createElement(_Picture2.default, {
					label: 'Foto',
					name: 'photo',
					value: data.photo,
					onChange: function onChange(value) {
						return _this2.handlePhoto(value);
					}
				}) : null
			);
		}
	}]);

	return Form;
}(_react.Component);

Form.propTypes = propTypes;

exports.default = Form;

/***/ }),

/***/ "./src/js/app/containers/Biogenica/Post.jsx":
/*!**************************************************!*\
  !*** ./src/js/app/containers/Biogenica/Post.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _Header = __webpack_require__(/*! ../../components/Header.jsx */ "./src/js/app/components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Preview = __webpack_require__(/*! ./Preview.jsx */ "./src/js/app/containers/Biogenica/Preview.jsx");

var _Preview2 = _interopRequireDefault(_Preview);

var _Form = __webpack_require__(/*! ./Form.jsx */ "./src/js/app/containers/Biogenica/Form.jsx");

var _Form2 = _interopRequireDefault(_Form);

var _googleAnalytics = __webpack_require__(/*! ../../utils/googleAnalytics */ "./src/js/app/utils/googleAnalytics.js");

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
	_inherits(Posts, _Component);

	function Posts(props) {
		_classCallCheck(this, Posts);

		var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

		_this.state = {
			inputs: {
				model: 'post',
				type: 'B',
				name: '',
				photo: {
					file: '',
					scale: 1
				},
				fontSize: 64
			},
			dataImage: '/#'
		};
		_this.canvas = new PIXI.Application({ width: 1080, height: 1080, preserveDrawingBuffer: true, premultipliedAlpha: true, backgroundColor: 0xFFFFFF });
		return _this;
	}

	_createClass(Posts, [{
		key: 'onChange',
		value: function onChange(event) {
			var _event$target = event.target,
			    name = _event$target.name,
			    value = _event$target.value;

			this.setState(function (prevState) {
				return _extends({}, prevState, {
					inputs: _extends({}, prevState.inputs, _defineProperty({}, name, value))
				});
			});
		}
	}, {
		key: 'download',
		value: function download() {
			var inputs = this.state.inputs;

			var type = 'Com foto';
			var model = _selects2.default.modelsBiogenica.find(function (item) {
				return item.value === Number(inputs.model);
			});
			(0, _googleAnalytics.event)('download', 'Biogenica', 'Categoria ' + model + ' - ' + type.label);
			(0, _googleAnalytics.event)('content', 'Biogenica', 'Nome: ' + inputs.name);

			var image = this.canvas.renderer.extract.base64(this.canvas.stage);
			this.setState({
				dataImage: image
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    inputs = _state.inputs,
			    dataImage = _state.dataImage;


			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(_Header2.default, { title: 'Gerador de post parceiro' }),
				_react2.default.createElement(
					'div',
					{ className: 'wrapper' },
					_react2.default.createElement(_Form2.default, {
						data: inputs,
						onChange: function onChange(event) {
							return _this2.onChange(event);
						}
					}),
					_react2.default.createElement(_Preview2.default, {
						canvas: this.canvas,
						data: inputs
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'wrapper left' },
					_react2.default.createElement(
						'a',
						{
							href: dataImage,
							download: 'biogenica-post.png',
							className: 'download',
							onClick: function onClick() {
								return _this2.download();
							}
						},
						'Download'
					)
				)
			);
		}
	}]);

	return Posts;
}(_react.Component);

exports.default = Posts;

/***/ }),

/***/ "./src/js/app/containers/Biogenica/Preview.jsx":
/*!*****************************************************!*\
  !*** ./src/js/app/containers/Biogenica/Preview.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	canvas: _propTypes2.default.any,
	data: _propTypes2.default.object.isRequired
};

var colors = {
	white: '#FFFFFF',
	red: '#FF0000',
	blue: '#401a49',
	green: '#193631'
};

var Preview = function (_Component) {
	_inherits(Preview, _Component);

	function Preview(props) {
		_classCallCheck(this, Preview);

		var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

		_this.app = _this.props.canvas;
		_this.elements = {};
		_this.myRef = _react2.default.createRef();
		return _this;
	}

	_createClass(Preview, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.myRef.current.appendChild(this.app.view);
			//update
			var loader = PIXI.loader.load(function () {
				return _this2.create();
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			if (prevProps !== this.props) this.update();
		}
	}, {
		key: 'create',
		value: function create() {
			//BG
			this.elements.background = new PIXI.Sprite('');
			this.elements.background.anchor.set(.5, .5);
			this.elements.background.x = 540;
			this.elements.background.y = 540;
			//parabens
			this.elements.congrats = new PIXI.Text('PARABÉNS!', {
				fontWeight: 700,
				fontSize: 69,
				fontFamily: 'Exo 2',
				letterSpacing: 0,
				fill: colors.green,
				align: 'center'
			});
			//text
			this.elements.text = new PIXI.Text('VOCÊ ATINGIU A QUALIFICAÇÃO', {
				fontWeight: 300,
				fontSize: 30,
				fontFamily: 'Exo 2',
				letterSpacing: 2,
				fill: colors.green,
				align: 'center',
				zIndex: 100
			});
			this.elements.text.anchor.set(.5, 0);
			//text
			this.elements.category = new PIXI.Text('', {
				fontWeight: 700,
				fontSize: 103,
				fontFamily: 'Exo 2',
				letterSpacing: 2,
				fill: colors.green,
				align: 'center'
			});
			//name
			this.elements.name = new PIXI.Text('', {
				fontWeight: 300,
				fontSize: 64,
				fontFamily: 'Exo 2',
				letterSpacing: 2,
				fill: colors.blue,
				align: 'center',
				wordWrap: true,
				wordWrapWidth: 760
			});
			this.elements.name.anchor.set(.5, 0);
			//achive
			this.elements.achive = new PIXI.Sprite('');
			this.elements.achive.anchor.set(.5, .5);
			this.elements.achive.zIndex = 10;
			//picture
			this.elements.pictureContainer = new PIXI.Container();
			this.elements.border = new PIXI.Graphics();
			this.elements.border.lineStyle(0).beginFill(0xFFFFFF, .2).drawCircle(270, 330, 270).endFill();
			this.elements.mask = new PIXI.Graphics();
			this.elements.mask.lineStyle(0).beginFill(0xFF0000, 1).drawCircle(270, 390, 350).endFill();
			this.elements.picture = new PIXI.Sprite('');
			this.elements.picture.interactive = true;
			this.elements.picture.buttonMode = true;
			this.elements.picture.anchor.set(.5, .5);
			this.elements.picture.x = 200;
			this.elements.picture.y = 200;
			this.elements.picture.zIndex = 200;
			this.elements.picture.mask = this.elements.mask;
			//picture drag
			this.elements.picture.on('pointerdown', this.onDragStart).on('pointerup', this.onDragEnd).on('pointerupoutside', this.onDragEnd).on('pointermove', this.onDragMove);

			this.elements.pictureContainer.addChild(this.elements.border, this.elements.mask, this.elements.picture);
			//
			this.app.stage.addChild(this.elements.achive);
			this.app.stage.addChild(this.elements.background);
			//this.app.stage.addChild(this.elements.congrats);
			//this.app.stage.addChild(this.elements.text);
			//this.app.stage.addChild(this.elements.category);
			this.app.stage.addChild(this.elements.name);
			this.app.stage.addChild(this.elements.pictureContainer);

			this.update();
		}
	}, {
		key: 'update',
		value: function update() {
			var _props$data = this.props.data,
			    model = _props$data.model,
			    type = _props$data.type,
			    name = _props$data.name,
			    photo = _props$data.photo,
			    fontSize = _props$data.fontSize;
			//Background

			var backgroundFilename = this.getBackgroundFilename(model, type);
			var fileBackground = PIXI.Texture.fromImage('/images/biogenica/' + backgroundFilename);
			fileBackground.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
			this.elements.background.texture = fileBackground;
			//text
			//this.updateText(this.elements.text, model, type);
			//model
			//this.updateCategory(this.elements.category, model, type);
			//name
			this.updateName(this.elements.name, name, model, type);
			//achive
			this.updateAchive(this.elements.achive, model, type);
			//
			this.updatePicture(this.elements.pictureContainer, this.elements.picture, photo, model, type);
			//congrats
			//this.updateCongrats(this.elements.congrats, model, type);

		}

		/**
   * Retrive background image filename
   * @param {String} model
   * @param {String} type
   * @returns {String}
   */

	}, {
		key: 'getBackgroundFilename',
		value: function getBackgroundFilename(model, type) {
			return model + '_' + type + '.png';
		}

		/**
   * @param {Object} element
   * @param {String} model
   * @param {string} type
   * @returns {Null}
   */

	}, {
		key: 'updateCongrats',
		value: function updateCongrats(element, model, type) {
			var settings = {
				left: 0,
				size: 69,
				spacing: 0,
				align: 'center',
				anchor: .5
			};

			if (model.indexOf('diamond') !== -1) {
				settings.left = 540;
				settings.size = 69;
				settings.align = 'center';
				settings.anchor = .5;
			} else {
				settings.left = 540;
				settings.size = 69;
				element.style.align = 'center';
				settings.anchor = .5;
			}

			element.x = settings.left;
			element.style.fontSize = settings.size;
			element.style.letterSpacing = settings.spacing;
			element.style.align = settings.align;
			element.anchor.set(settings.anchor, 0);
			element.y = this.elements.name.y - element.height + 10;
		}

		/**
   * @param {Object} element
   * @param {String} model
   * @param {string} type
   * @returns {Object}
   */

	}, {
		key: 'updateText',
		value: function updateText(element, model, type) {
			var settings = {
				left: 0,
				top: 0,
				size: 30,
				align: 'center',
				anchor: .5
			};

			if (model.indexOf('diamond') !== -1) {
				settings.left = 540;
				settings.top = 870;
				settings.size = 30;
				settings.align = 'center';
				settings.anchor = .5;
			} else {
				settings.left = 540;
				settings.top = type === 'A' ? 760 : 833;
				settings.size = 30;
				element.style.align = 'center';
				settings.anchor = .5;
			}

			element.x = settings.left;
			element.y = settings.top;
			element.style.fontSize = settings.size;
			element.style.align = settings.align;
			element.anchor.set(settings.anchor, 0);
		}

		/**
   * @param {Object} element
   * @param {String} model
   * @param {string} type
   * @returns {Object}
   */

	}, {
		key: 'updateCategory',
		value: function updateCategory(element, model, type) {
			var settings = {
				left: 0,
				top: 0,
				size: 103,
				align: 'center',
				anchor: .5
			};

			settings.left = 540;
			settings.top = type === 'A' ? 790 : 860;
			settings.size = type === 'A' ? 103 : 69;

			element.x = settings.left;
			element.y = settings.top;
			element.style.fontSize = settings.size;
			element.style.align = settings.align;
			element.anchor.set(settings.anchor, 0);
			element.text = _selects2.default.modelsBiogenica(model).label.toUpperCase();
		}

		/**
   * @param {Object} element
   * @param {String} name
   * @param {String} model
   * @param {string} type
   * @returns {Object}
   */

	}, {
		key: 'updateName',
		value: function updateName(element, name, model, type) {
			var fontSize = this.props.data.fontSize;


			var settings = {
				left: 0,
				top: 320,
				align: 'center',
				anchor: .5
			};

			if (model.indexOf('diamond') !== -1) {
				settings.left = 540;
				settings.top = 450;
				settings.align = 'center';
				settings.anchor = .5;
			} else {
				settings.left = 540;
				settings.top = 885;
				settings.align = 'center';
				settings.anchor = .5;
			}

			element.x = settings.left;
			element.style.fontSize = fontSize;
			element.style.align = settings.align;
			element.style.lineHeight = fontSize * .8;
			element.anchor.set(settings.anchor, 0);
			element.text = name;

			element.y = settings.top - element.height;
		}

		/**
   * @param {Object} element
   * @param {String} model
  * @param {string} type
  * @returns {Object}
  */

	}, {
		key: 'updateAchive',
		value: function updateAchive(element, model, type) {
			var settings = {
				left: 540,
				top: 560,
				scale: 1
			};

			settings.top = type === 'A' ? 540 : 540;
			settings.scale = type === 'A' ? 1 : 1;

			var dir = type === 'B' ? 'com_foto' : 'sem_foto';
			var fileAchive = PIXI.Texture.fromImage('/images/recm/' + dir + '/' + model + '.png');
			fileAchive.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
			element.texture = fileAchive;

			element.x = settings.left;
			element.y = settings.top;
			element.scale.x = settings.scale;
			element.scale.y = settings.scale;
		}

		/**
  	* @param {Object} container
  	* @param {Object} element
  	* @param {Object} photo
  	* @param {String} model
   * @param {string} type
   * @returns {Object}
   */

	}, {
		key: 'updatePicture',
		value: function updatePicture(container, element, photo, model, type) {
			var diamond = model.indexOf('diamond') !== -1;
			var settings = {
				top: 420,
				left: 550,
				scale: 1
			};

			if (type === 'B') {
				if (photo.file) this.loadImage(photo.file).then(function (res) {
					element.texture = res;
				});

				if (diamond) {
					container.scale.x = 1;
					container.scale.y = 1;
					container.x = 600;
					container.y = 450;
					this.app.stage.setChildIndex(container, 6);
					this.app.stage.setChildIndex(this.elements.achive, 5);
				} else {
					container.scale.x = 1;
					container.scale.y = 1;
					container.x = settings.left - container.width / 2;
					container.y = settings.top - container.height / 2;
					this.app.stage.setChildIndex(container, 2);
					this.app.stage.setChildIndex(this.elements.achive, 2);
				}
				element.scale.x = photo.scale || 1;
				element.scale.y = photo.scale || 1;

				container.visible = true;
			} else {
				container.visible = false;
			}
		}
	}, {
		key: 'onDragStart',
		value: function onDragStart(event) {
			this.draggingData = event.data;
			var position = this.draggingData.getLocalPosition(this);
			this.pivot.set(position.x, position.y);
			this.position.set(this.draggingData.global.x, this.draggingData.global.y);
			this.dragging = true;

			var newPosition = this.draggingData.getLocalPosition(this.parent);
			this.x = newPosition.x;
			this.y = newPosition.y;
		}
	}, {
		key: 'onDragEnd',
		value: function onDragEnd() {
			this.dragging = false;
			this.draggingData = null;
		}
	}, {
		key: 'onDragMove',
		value: function onDragMove() {
			if (this.dragging) {
				var newPosition = this.draggingData.getLocalPosition(this.parent);
				this.x = newPosition.x;
				this.y = newPosition.y;
			}
		}
	}, {
		key: 'loadImage',
		value: function loadImage(src) {

			return new Promise(function (resolve, reject) {
				var reader = new FileReader();
				reader.onload = function (e) {
					var file = PIXI.Texture.fromImage(e.target.result);
					resolve(file);
				};
				reader.readAsDataURL(src);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				className: 'preview',
				ref: this.myRef
			});
		}
	}]);

	return Preview;
}(_react.Component);

Preview.propTypes = propTypes;

exports.default = Preview;

/***/ }),

/***/ "./src/js/app/containers/Main.jsx":
/*!****************************************!*\
  !*** ./src/js/app/containers/Main.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Wrapper = __webpack_require__(/*! ./Wrapper.jsx */ "./src/js/app/containers/Wrapper.jsx");

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Post = __webpack_require__(/*! ./APN/Post.jsx */ "./src/js/app/containers/APN/Post.jsx");

var _Post2 = _interopRequireDefault(_Post);

var _Post3 = __webpack_require__(/*! ./B2B/Post.jsx */ "./src/js/app/containers/B2B/Post.jsx");

var _Post4 = _interopRequireDefault(_Post3);

var _Post5 = __webpack_require__(/*! ./Reconhecimento/Post.jsx */ "./src/js/app/containers/Reconhecimento/Post.jsx");

var _Post6 = _interopRequireDefault(_Post5);

var _Post7 = __webpack_require__(/*! ./ReconhecimentoMaravilha/Post.jsx */ "./src/js/app/containers/ReconhecimentoMaravilha/Post.jsx");

var _Post8 = _interopRequireDefault(_Post7);

var _Post9 = __webpack_require__(/*! ./Biogenica/Post.jsx */ "./src/js/app/containers/Biogenica/Post.jsx");

var _Post10 = _interopRequireDefault(_Post9);

var _Post11 = __webpack_require__(/*! ./Banner/Post.jsx */ "./src/js/app/containers/Banner/Post.jsx");

var _Post12 = _interopRequireDefault(_Post11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Wrapper2.default,
                null,
                _react2.default.createElement(
                    _reactRouterDom.BrowserRouter,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Post10.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/apn', component: _Post2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/reconhecimento', component: _Post10.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { component: _Post10.default })
                    )
                )
            );
        }
    }]);

    return Main;
}(_react.Component);

exports.default = Main;

/***/ }),

/***/ "./src/js/app/containers/Reconhecimento/Form.jsx":
/*!*******************************************************!*\
  !*** ./src/js/app/containers/Reconhecimento/Form.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = __webpack_require__(/*! ../../components/Inputs/Text.jsx */ "./src/js/app/components/Inputs/Text.jsx");

var _Text2 = _interopRequireDefault(_Text);

var _Select = __webpack_require__(/*! ../../components/Inputs/Select.jsx */ "./src/js/app/components/Inputs/Select.jsx");

var _Select2 = _interopRequireDefault(_Select);

var _Picture = __webpack_require__(/*! ../../components/Inputs/Picture.jsx */ "./src/js/app/components/Inputs/Picture.jsx");

var _Picture2 = _interopRequireDefault(_Picture);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    data: _propTypes2.default.object.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'handleFontSize',
        value: function handleFontSize(value) {
            var _props = this.props,
                data = _props.data,
                onChange = _props.onChange;
            var fontSize = data.fontSize;


            onChange({
                target: {
                    name: 'fontSize',
                    value: fontSize + value
                }
            });
        }
    }, {
        key: 'handlePhoto',
        value: function handlePhoto(value) {
            var onChange = this.props.onChange;


            onChange({
                target: {
                    name: 'photo',
                    value: value
                }
            });
        }
    }, {
        key: 'handleFontSize',
        value: function handleFontSize(value) {
            var _props2 = this.props,
                data = _props2.data,
                onChange = _props2.onChange;
            var fontSize = data.fontSize;


            onChange({
                target: {
                    name: 'fontSize',
                    value: fontSize + value
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props3 = this.props,
                data = _props3.data,
                onChange = _props3.onChange;
            var models = _selects2.default.modelsRec,
                types = _selects2.default.typesRec;


            return _react2.default.createElement(
                'div',
                { className: 'form' },
                _react2.default.createElement(_Select2.default, {
                    label: 'Modelo',
                    name: 'model',
                    options: models,
                    value: data.model,
                    onChange: onChange
                }),
                _react2.default.createElement(_Select2.default, {
                    label: 'Foto',
                    name: 'type',
                    options: types,
                    value: data.type,
                    onChange: onChange
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Nome',
                        name: 'name',
                        value: data.name,
                        onChange: onChange
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttons-group' },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/increase.png' })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(-1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/decrease.png' })
                        )
                    )
                ),
                data.type === 'B' ? _react2.default.createElement(_Picture2.default, {
                    label: 'Foto',
                    name: 'photo',
                    value: data.photo,
                    onChange: function onChange(value) {
                        return _this2.handlePhoto(value);
                    }
                }) : null
            );
        }
    }]);

    return Form;
}(_react.Component);

Form.propTypes = propTypes;

exports.default = Form;

/***/ }),

/***/ "./src/js/app/containers/Reconhecimento/Post.jsx":
/*!*******************************************************!*\
  !*** ./src/js/app/containers/Reconhecimento/Post.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _Header = __webpack_require__(/*! ../../components/Header.jsx */ "./src/js/app/components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Preview = __webpack_require__(/*! ./Preview.jsx */ "./src/js/app/containers/Reconhecimento/Preview.jsx");

var _Preview2 = _interopRequireDefault(_Preview);

var _Form = __webpack_require__(/*! ./Form.jsx */ "./src/js/app/containers/Reconhecimento/Form.jsx");

var _Form2 = _interopRequireDefault(_Form);

var _googleAnalytics = __webpack_require__(/*! ../../utils/googleAnalytics */ "./src/js/app/utils/googleAnalytics.js");

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
    _inherits(Posts, _Component);

    function Posts(props) {
        _classCallCheck(this, Posts);

        var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

        _this.state = {
            inputs: {
                model: 'safira',
                type: 'A',
                name: '',
                photo: {
                    file: '',
                    scale: 1
                },
                fontSize: 88
            },
            dataImage: '/#'
        };
        _this.canvas = new PIXI.Application({ width: 1080, height: 1080, preserveDrawingBuffer: true, premultipliedAlpha: true, backgroundColor: 0xFFFFFF });
        return _this;
    }

    _createClass(Posts, [{
        key: 'onChange',
        value: function onChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;

            this.setState(function (prevState) {
                return _extends({}, prevState, {
                    inputs: _extends({}, prevState.inputs, _defineProperty({}, name, value))
                });
            });
        }
    }, {
        key: 'download',
        value: function download() {
            var inputs = this.state.inputs;

            var type = Boolean(inputs.type) ? 'Com foto' : 'Sem foto';
            var model = _selects2.default.modelsRec.find(function (item) {
                return item.value === Number(inputs.model);
            });
            (0, _googleAnalytics.event)('download', 'Reconhecimento', 'Categoria ' + model + ' - ' + type.label);
            (0, _googleAnalytics.event)('content', 'Reconhecimento', 'Nome: ' + inputs.name);

            var image = this.canvas.renderer.extract.base64(this.canvas.stage);
            this.setState({
                dataImage: image
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                inputs = _state.inputs,
                dataImage = _state.dataImage;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_Header2.default, { title: 'GERADOR DE POST DE RECONHECIMENTO' }),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    _react2.default.createElement(_Form2.default, {
                        data: inputs,
                        onChange: function onChange(event) {
                            return _this2.onChange(event);
                        }
                    }),
                    _react2.default.createElement(_Preview2.default, {
                        canvas: this.canvas,
                        data: inputs
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper left' },
                    _react2.default.createElement(
                        'a',
                        {
                            href: dataImage,
                            download: 'youhub-post.png',
                            className: 'download',
                            onClick: function onClick() {
                                return _this2.download();
                            }
                        },
                        'Download'
                    )
                )
            );
        }
    }]);

    return Posts;
}(_react.Component);

exports.default = Posts;

/***/ }),

/***/ "./src/js/app/containers/Reconhecimento/Preview.jsx":
/*!**********************************************************!*\
  !*** ./src/js/app/containers/Reconhecimento/Preview.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    canvas: _propTypes2.default.any,
    data: _propTypes2.default.object.isRequired
};

var colors = {
    white: '#FFFFFF'
};

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        _this.app = _this.props.canvas;
        _this.elements = {};
        _this.myRef = _react2.default.createRef();
        return _this;
    }

    _createClass(Preview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.myRef.current.appendChild(this.app.view);
            //update
            var loader = PIXI.loader.add('/images/rec/ruby-A.png').add('/images/rec/ruby-B.png').add('/images/rec/ruby.png').add('/images/rec/emerald-A.png').add('/images/rec/emerald-B.png').add('/images/rec/emerald.png').add('/images/rec/safira-A.png').add('/images/rec/safira-B.png').add('/images/rec/safira.png').add('/images/rec/diamond-A.png').add('/images/rec/diamond-B.png').add('/images/rec/diamond.png').add('/images/rec/diamond-blue-A.png').add('/images/rec/diamond-blue-B.png').add('/images/rec/diamond-blue.png').add('/images/rec/diamond-black-A.png').add('/images/rec/diamond-black-B.png').add('/images/rec/diamond-black.png').load(function () {
                return _this2.create();
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps !== this.props) this.update();
        }
    }, {
        key: 'create',
        value: function create() {
            //BG
            this.elements.background = new PIXI.Sprite('');
            this.elements.background.anchor.set(.5, .5);
            this.elements.background.x = 540;
            this.elements.background.y = 540;
            //parabens
            this.elements.congrats = new PIXI.Text('PARABÉNS!', {
                fontWeight: 700,
                fontSize: 69,
                fontFamily: 'Exo 2',
                letterSpacing: 0,
                fill: colors.white,
                align: 'center'
            });
            //text
            this.elements.text = new PIXI.Text('VOCÊ ATINGIU A QUALIFICAÇÃO', {
                fontWeight: 300,
                fontSize: 30,
                fontFamily: 'Exo 2',
                letterSpacing: 2,
                fill: colors.white,
                align: 'center'
            });
            this.elements.text.anchor.set(.5, 0);
            //text
            this.elements.category = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 103,
                fontFamily: 'Exo 2',
                letterSpacing: 2,
                fill: colors.white,
                align: 'center'
            });
            //name
            this.elements.name = new PIXI.Text('', {
                fontWeight: 300,
                fontSize: 88,
                fontFamily: 'Exo 2',
                letterSpacing: 2,
                fill: colors.white,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 760
            });
            this.elements.name.anchor.set(.5, 0);
            //achive
            this.elements.achive = new PIXI.Sprite('');
            this.elements.achive.anchor.set(.5, .5);
            //picture
            this.elements.pictureContainer = new PIXI.Container();
            this.elements.border = new PIXI.Graphics();
            this.elements.border.lineStyle(0).beginFill(0xFFFFFF, .2).drawCircle(200, 200, 200).endFill();
            this.elements.mask = new PIXI.Graphics();
            this.elements.mask.lineStyle(0).beginFill(0xFF0000, 1).drawCircle(200, 200, 180).endFill();
            this.elements.picture = new PIXI.Sprite('');
            this.elements.picture.interactive = true;
            this.elements.picture.buttonMode = true;
            this.elements.picture.anchor.set(.5, .5);
            this.elements.picture.x = 200;
            this.elements.picture.y = 200;
            this.elements.picture.mask = this.elements.mask;
            //picture drag
            this.elements.picture.on('pointerdown', this.onDragStart).on('pointerup', this.onDragEnd).on('pointerupoutside', this.onDragEnd).on('pointermove', this.onDragMove);

            this.elements.pictureContainer.addChild(this.elements.border, this.elements.mask, this.elements.picture);
            //
            this.app.stage.addChild(this.elements.background);
            this.app.stage.addChild(this.elements.congrats);
            this.app.stage.addChild(this.elements.text);
            this.app.stage.addChild(this.elements.category);
            this.app.stage.addChild(this.elements.name);
            this.app.stage.addChild(this.elements.pictureContainer);
            this.app.stage.addChild(this.elements.achive);

            this.update();
        }
    }, {
        key: 'update',
        value: function update() {
            var _props$data = this.props.data,
                model = _props$data.model,
                type = _props$data.type,
                name = _props$data.name,
                photo = _props$data.photo,
                fontSize = _props$data.fontSize;
            //Background

            var backgroundFilename = this.getBackgroundFilename(model, type);
            var fileBackground = PIXI.Texture.fromImage('/images/rec/' + backgroundFilename);
            fileBackground.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            this.elements.background.texture = fileBackground;
            //text
            this.updateText(this.elements.text, model, type);
            //model
            this.updateCategory(this.elements.category, model, type);
            //name
            this.updateName(this.elements.name, name, model, type);
            //achive
            this.updateAchive(this.elements.achive, model, type);
            //
            this.updatePicture(this.elements.pictureContainer, this.elements.picture, photo, model, type);
            //congrats
            this.updateCongrats(this.elements.congrats, model, type);
        }

        /**
         * Retrive background image filename
         * @param {String} model
         * @param {String} type
         * @returns {String}
         */

    }, {
        key: 'getBackgroundFilename',
        value: function getBackgroundFilename(model, type) {
            return model + '-' + type + '.png';
        }

        /**
         * @param {Object} element
         * @param {String} model
         * @param {string} type
         * @returns {Null}
         */

    }, {
        key: 'updateCongrats',
        value: function updateCongrats(element, model, type) {
            var settings = {
                left: 0,
                size: 69,
                spacing: 0,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.size = 69;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.size = 69;
                element.style.align = 'center';
                settings.anchor = .5;
            }

            element.x = settings.left;
            element.style.fontSize = settings.size;
            element.style.letterSpacing = settings.spacing;
            element.style.align = settings.align;
            element.anchor.set(settings.anchor, 0);
            element.y = this.elements.name.y - element.height + 10;
        }

        /**
         * @param {Object} element
         * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updateText',
        value: function updateText(element, model, type) {
            var settings = {
                left: 0,
                top: 0,
                size: 30,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.top = 870;
                settings.size = 30;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.top = type === 'A' ? 760 : 833;
                settings.size = 30;
                element.style.align = 'center';
                settings.anchor = .5;
            }

            element.x = settings.left;
            element.y = settings.top;
            element.style.fontSize = settings.size;
            element.style.align = settings.align;
            element.anchor.set(settings.anchor, 0);
        }

        /**
         * @param {Object} element
         * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updateCategory',
        value: function updateCategory(element, model, type) {
            var settings = {
                left: 0,
                top: 0,
                size: 103,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.top = 897;
                settings.size = 69;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.top = type === 'A' ? 790 : 860;
                settings.size = type === 'A' ? 103 : 69;
            }

            element.x = settings.left;
            element.y = settings.top;
            element.style.fontSize = settings.size;
            element.style.align = settings.align;
            element.anchor.set(settings.anchor, 0);
            element.text = _selects2.default.getLabelModelRec(model).label.toUpperCase();
        }

        /**
         * @param {Object} element
         * @param {String} name
         * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updateName',
        value: function updateName(element, name, model, type) {
            var fontSize = this.props.data.fontSize;


            var settings = {
                left: 0,
                top: 0,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.top = 280;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.top = type === 'A' ? 380 : 270;
                settings.align = 'center';
                settings.anchor = .5;
            }

            element.x = settings.left;
            element.style.fontSize = fontSize;
            element.style.align = settings.align;
            element.style.lineHeight = fontSize * .8;
            element.anchor.set(settings.anchor, 0);
            element.text = name;

            element.y = settings.top - element.height;
        }

        /**
         * @param {Object} element
         * @param {String} model
        * @param {string} type
        * @returns {Object}
        */

    }, {
        key: 'updateAchive',
        value: function updateAchive(element, model, type) {
            var settings = {
                left: 540,
                top: 560,
                scale: 1
            };

            if (model.indexOf('diamond') !== -1) {
                settings.top = 530;
                settings.scale = 1;
            } else {
                settings.top = type === 'A' ? 560 : 690;
                settings.scale = type === 'A' ? 1 : .85;
            }

            var fileAchive = PIXI.Texture.fromImage('/images/rec/' + model + '.png');
            fileAchive.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            element.texture = fileAchive;

            element.x = settings.left;
            element.y = settings.top;
            element.scale.x = settings.scale;
            element.scale.y = settings.scale;
        }

        /**
          * @param {Object} container
          * @param {Object} element
          * @param {Object} photo
          * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updatePicture',
        value: function updatePicture(container, element, photo, model, type) {
            var diamond = model.indexOf('diamond') !== -1;
            var settings = {
                left: 540,
                top: 500,
                scale: 1
            };

            if (type === 'B') {
                if (photo.file) this.loadImage(photo.file).then(function (res) {
                    element.texture = res;
                });

                if (diamond) {
                    container.scale.x = 1;
                    container.scale.y = 1;
                    container.x = 600;
                    container.y = 450;
                    this.app.stage.setChildIndex(container, 6);
                    this.app.stage.setChildIndex(this.elements.achive, 5);
                } else {
                    container.scale.x = 1;
                    container.scale.y = 1;
                    container.x = settings.left - container.width / 2;
                    container.y = settings.top - container.height / 2;
                    this.app.stage.setChildIndex(container, 5);
                    this.app.stage.setChildIndex(this.elements.achive, 6);
                }
                element.scale.x = photo.scale || 1;
                element.scale.y = photo.scale || 1;

                container.visible = true;
            } else {
                container.visible = false;
            }
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(event) {
            this.draggingData = event.data;
            var position = this.draggingData.getLocalPosition(this);
            this.pivot.set(position.x, position.y);
            this.position.set(this.draggingData.global.x, this.draggingData.global.y);
            this.dragging = true;

            var newPosition = this.draggingData.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd() {
            this.dragging = false;
            this.draggingData = null;
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove() {
            if (this.dragging) {
                var newPosition = this.draggingData.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
    }, {
        key: 'loadImage',
        value: function loadImage(src) {

            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var file = PIXI.Texture.fromImage(e.target.result);
                    resolve(file);
                };
                reader.readAsDataURL(src);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'preview',
                ref: this.myRef
            });
        }
    }]);

    return Preview;
}(_react.Component);

Preview.propTypes = propTypes;

exports.default = Preview;

/***/ }),

/***/ "./src/js/app/containers/ReconhecimentoMaravilha/Form.jsx":
/*!****************************************************************!*\
  !*** ./src/js/app/containers/ReconhecimentoMaravilha/Form.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = __webpack_require__(/*! ../../components/Inputs/Text.jsx */ "./src/js/app/components/Inputs/Text.jsx");

var _Text2 = _interopRequireDefault(_Text);

var _Select = __webpack_require__(/*! ../../components/Inputs/Select.jsx */ "./src/js/app/components/Inputs/Select.jsx");

var _Select2 = _interopRequireDefault(_Select);

var _Picture = __webpack_require__(/*! ../../components/Inputs/Picture.jsx */ "./src/js/app/components/Inputs/Picture.jsx");

var _Picture2 = _interopRequireDefault(_Picture);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    data: _propTypes2.default.object.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'handleFontSize',
        value: function handleFontSize(value) {
            var _props = this.props,
                data = _props.data,
                onChange = _props.onChange;
            var fontSize = data.fontSize;


            onChange({
                target: {
                    name: 'fontSize',
                    value: fontSize + value
                }
            });
        }
    }, {
        key: 'handlePhoto',
        value: function handlePhoto(value) {
            var onChange = this.props.onChange;


            onChange({
                target: {
                    name: 'photo',
                    value: value
                }
            });
        }
    }, {
        key: 'handleFontSize',
        value: function handleFontSize(value) {
            var _props2 = this.props,
                data = _props2.data,
                onChange = _props2.onChange;
            var fontSize = data.fontSize;


            onChange({
                target: {
                    name: 'fontSize',
                    value: fontSize + value
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props3 = this.props,
                data = _props3.data,
                onChange = _props3.onChange;
            var models = _selects2.default.modelsRecM,
                types = _selects2.default.typesRecM;


            return _react2.default.createElement(
                'div',
                { className: 'form' },
                _react2.default.createElement(_Select2.default, {
                    label: 'Modelo',
                    name: 'model',
                    options: models,
                    value: data.model,
                    onChange: onChange
                }),
                _react2.default.createElement(_Select2.default, {
                    label: 'Foto',
                    name: 'type',
                    options: types,
                    value: data.type,
                    onChange: onChange
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'group-row' },
                    _react2.default.createElement(_Text2.default, {
                        label: 'Nome',
                        name: 'name',
                        value: data.name,
                        onChange: onChange
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttons-group' },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/increase.png' })
                        ),
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'changeSize',
                                onClick: function onClick() {
                                    return _this2.handleFontSize(-1);
                                }
                            },
                            _react2.default.createElement('img', { src: '/images/decrease.png' })
                        )
                    )
                ),
                data.type === 'B' ? _react2.default.createElement(_Picture2.default, {
                    label: 'Foto',
                    name: 'photo',
                    value: data.photo,
                    onChange: function onChange(value) {
                        return _this2.handlePhoto(value);
                    }
                }) : null
            );
        }
    }]);

    return Form;
}(_react.Component);

Form.propTypes = propTypes;

exports.default = Form;

/***/ }),

/***/ "./src/js/app/containers/ReconhecimentoMaravilha/Post.jsx":
/*!****************************************************************!*\
  !*** ./src/js/app/containers/ReconhecimentoMaravilha/Post.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _Header = __webpack_require__(/*! ../../components/Header.jsx */ "./src/js/app/components/Header.jsx");

var _Header2 = _interopRequireDefault(_Header);

var _Preview = __webpack_require__(/*! ./Preview.jsx */ "./src/js/app/containers/ReconhecimentoMaravilha/Preview.jsx");

var _Preview2 = _interopRequireDefault(_Preview);

var _Form = __webpack_require__(/*! ./Form.jsx */ "./src/js/app/containers/ReconhecimentoMaravilha/Form.jsx");

var _Form2 = _interopRequireDefault(_Form);

var _googleAnalytics = __webpack_require__(/*! ../../utils/googleAnalytics */ "./src/js/app/utils/googleAnalytics.js");

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
    _inherits(Posts, _Component);

    function Posts(props) {
        _classCallCheck(this, Posts);

        var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

        _this.state = {
            inputs: {
                model: 'reconhecimento_safira',
                type: 'A',
                name: '',
                photo: {
                    file: '',
                    scale: 1
                },
                fontSize: 88
            },
            dataImage: '/#'
        };
        _this.canvas = new PIXI.Application({ width: 1080, height: 1080, preserveDrawingBuffer: true, premultipliedAlpha: true, backgroundColor: 0xFFFFFF });
        return _this;
    }

    _createClass(Posts, [{
        key: 'onChange',
        value: function onChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;

            this.setState(function (prevState) {
                return _extends({}, prevState, {
                    inputs: _extends({}, prevState.inputs, _defineProperty({}, name, value))
                });
            });
        }
    }, {
        key: 'download',
        value: function download() {
            var inputs = this.state.inputs;

            var type = Boolean(inputs.type) ? 'Com foto' : 'Sem foto';
            var model = _selects2.default.modelsRecM.find(function (item) {
                return item.value === Number(inputs.model);
            });
            (0, _googleAnalytics.event)('download', 'Reconhecimento', 'Categoria ' + model + ' - ' + type.label);
            (0, _googleAnalytics.event)('content', 'Reconhecimento', 'Nome: ' + inputs.name);

            var image = this.canvas.renderer.extract.base64(this.canvas.stage);
            this.setState({
                dataImage: image
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                inputs = _state.inputs,
                dataImage = _state.dataImage;


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_Header2.default, { title: 'GERADOR DE POST DE RECONHECIMENTO' }),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    _react2.default.createElement(_Form2.default, {
                        data: inputs,
                        onChange: function onChange(event) {
                            return _this2.onChange(event);
                        }
                    }),
                    _react2.default.createElement(_Preview2.default, {
                        canvas: this.canvas,
                        data: inputs
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper left' },
                    _react2.default.createElement(
                        'a',
                        {
                            href: dataImage,
                            download: 'mdt-post.png',
                            className: 'download',
                            onClick: function onClick() {
                                return _this2.download();
                            }
                        },
                        'Download'
                    )
                )
            );
        }
    }]);

    return Posts;
}(_react.Component);

exports.default = Posts;

/***/ }),

/***/ "./src/js/app/containers/ReconhecimentoMaravilha/Preview.jsx":
/*!*******************************************************************!*\
  !*** ./src/js/app/containers/ReconhecimentoMaravilha/Preview.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pixi = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");

var PIXI = _interopRequireWildcard(_pixi);

var _selects = __webpack_require__(/*! ../../configs/selects */ "./src/js/app/configs/selects.js");

var _selects2 = _interopRequireDefault(_selects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    canvas: _propTypes2.default.any,
    data: _propTypes2.default.object.isRequired
};

var colors = {
    white: '#FFFFFF',
    red: '#FF0000',
    green: '#193631'
};

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        _this.app = _this.props.canvas;
        _this.elements = {};
        _this.myRef = _react2.default.createRef();
        return _this;
    }

    _createClass(Preview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.myRef.current.appendChild(this.app.view);
            //update
            var loader = PIXI.loader.load(function () {
                return _this2.create();
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps !== this.props) this.update();
        }
    }, {
        key: 'create',
        value: function create() {
            //BG
            this.elements.background = new PIXI.Sprite('');
            this.elements.background.anchor.set(.5, .5);
            this.elements.background.x = 540;
            this.elements.background.y = 540;
            //parabens
            this.elements.congrats = new PIXI.Text('PARABÉNS!', {
                fontWeight: 700,
                fontSize: 69,
                fontFamily: 'Exo 2',
                letterSpacing: 0,
                fill: colors.green,
                align: 'center'
            });
            //text
            this.elements.text = new PIXI.Text('VOCÊ ATINGIU A QUALIFICAÇÃO', {
                fontWeight: 300,
                fontSize: 30,
                fontFamily: 'Exo 2',
                letterSpacing: 2,
                fill: colors.green,
                align: 'center',
                zIndex: 100
            });
            this.elements.text.anchor.set(.5, 0);
            //text
            this.elements.category = new PIXI.Text('', {
                fontWeight: 700,
                fontSize: 103,
                fontFamily: 'Exo 2',
                letterSpacing: 2,
                fill: colors.green,
                align: 'center'
            });
            //name
            this.elements.name = new PIXI.Text('', {
                fontWeight: 300,
                fontSize: 88,
                fontFamily: 'Exo 2',
                letterSpacing: 2,
                fill: colors.green,
                align: 'center',
                wordWrap: true,
                wordWrapWidth: 760
            });
            this.elements.name.anchor.set(.5, 0);
            //achive
            this.elements.achive = new PIXI.Sprite('');
            this.elements.achive.anchor.set(.5, .5);
            this.elements.achive.zIndex = 10;
            //picture
            this.elements.pictureContainer = new PIXI.Container();
            this.elements.border = new PIXI.Graphics();
            this.elements.border.lineStyle(0).beginFill(0xFFFFFF, .2).drawCircle(270, 330, 270).endFill();
            this.elements.mask = new PIXI.Graphics();
            this.elements.mask.lineStyle(0).beginFill(0xFF0000, 1).drawCircle(270, 330, 250).endFill();
            this.elements.picture = new PIXI.Sprite('');
            this.elements.picture.interactive = true;
            this.elements.picture.buttonMode = true;
            this.elements.picture.anchor.set(.5, .5);
            this.elements.picture.x = 200;
            this.elements.picture.y = 200;
            this.elements.picture.zIndex = 200;
            this.elements.picture.mask = this.elements.mask;
            //picture drag
            this.elements.picture.on('pointerdown', this.onDragStart).on('pointerup', this.onDragEnd).on('pointerupoutside', this.onDragEnd).on('pointermove', this.onDragMove);

            this.elements.pictureContainer.addChild(this.elements.border, this.elements.mask, this.elements.picture);
            //
            this.app.stage.addChild(this.elements.achive);
            this.app.stage.addChild(this.elements.background);
            //this.app.stage.addChild(this.elements.congrats);
            //this.app.stage.addChild(this.elements.text);
            //this.app.stage.addChild(this.elements.category);
            this.app.stage.addChild(this.elements.name);
            this.app.stage.addChild(this.elements.pictureContainer);

            this.update();
        }
    }, {
        key: 'update',
        value: function update() {
            var _props$data = this.props.data,
                model = _props$data.model,
                type = _props$data.type,
                name = _props$data.name,
                photo = _props$data.photo,
                fontSize = _props$data.fontSize;
            //Background

            var backgroundFilename = this.getBackgroundFilename(model, type);
            var fileBackground = PIXI.Texture.fromImage('/images/recm/sem_foto/' + backgroundFilename);
            fileBackground.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            this.elements.background.texture = fileBackground;
            //text
            //this.updateText(this.elements.text, model, type);
            //model
            //this.updateCategory(this.elements.category, model, type);
            //name
            this.updateName(this.elements.name, name, model, type);
            //achive
            this.updateAchive(this.elements.achive, model, type);
            //
            this.updatePicture(this.elements.pictureContainer, this.elements.picture, photo, model, type);
            //congrats
            //this.updateCongrats(this.elements.congrats, model, type);

        }

        /**
         * Retrive background image filename
         * @param {String} model
         * @param {String} type
         * @returns {String}
         */

    }, {
        key: 'getBackgroundFilename',
        value: function getBackgroundFilename(model, type) {
            return model + '_' + type + '.png';
        }

        /**
         * @param {Object} element
         * @param {String} model
         * @param {string} type
         * @returns {Null}
         */

    }, {
        key: 'updateCongrats',
        value: function updateCongrats(element, model, type) {
            var settings = {
                left: 0,
                size: 69,
                spacing: 0,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.size = 69;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.size = 69;
                element.style.align = 'center';
                settings.anchor = .5;
            }

            element.x = settings.left;
            element.style.fontSize = settings.size;
            element.style.letterSpacing = settings.spacing;
            element.style.align = settings.align;
            element.anchor.set(settings.anchor, 0);
            element.y = this.elements.name.y - element.height + 10;
        }

        /**
         * @param {Object} element
         * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updateText',
        value: function updateText(element, model, type) {
            var settings = {
                left: 0,
                top: 0,
                size: 30,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.top = 870;
                settings.size = 30;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.top = type === 'A' ? 760 : 833;
                settings.size = 30;
                element.style.align = 'center';
                settings.anchor = .5;
            }

            element.x = settings.left;
            element.y = settings.top;
            element.style.fontSize = settings.size;
            element.style.align = settings.align;
            element.anchor.set(settings.anchor, 0);
        }

        /**
         * @param {Object} element
         * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updateCategory',
        value: function updateCategory(element, model, type) {
            var settings = {
                left: 0,
                top: 0,
                size: 103,
                align: 'center',
                anchor: .5
            };

            settings.left = 540;
            settings.top = type === 'A' ? 790 : 860;
            settings.size = type === 'A' ? 103 : 69;

            element.x = settings.left;
            element.y = settings.top;
            element.style.fontSize = settings.size;
            element.style.align = settings.align;
            element.anchor.set(settings.anchor, 0);
            element.text = _selects2.default.getLabelModelRecM(model).label.toUpperCase();
        }

        /**
         * @param {Object} element
         * @param {String} name
         * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updateName',
        value: function updateName(element, name, model, type) {
            var fontSize = this.props.data.fontSize;


            var settings = {
                left: 0,
                top: 0,
                align: 'center',
                anchor: .5
            };

            if (model.indexOf('diamond') !== -1) {
                settings.left = 540;
                settings.top = 280;
                settings.align = 'center';
                settings.anchor = .5;
            } else {
                settings.left = 540;
                settings.top = type === 'A' ? 320 : 300;
                settings.align = 'center';
                settings.anchor = .5;
            }

            element.x = settings.left;
            element.style.fontSize = fontSize;
            element.style.align = settings.align;
            element.style.lineHeight = fontSize * .8;
            element.anchor.set(settings.anchor, 0);
            element.text = name;

            element.y = settings.top - element.height;
        }

        /**
         * @param {Object} element
         * @param {String} model
        * @param {string} type
        * @returns {Object}
        */

    }, {
        key: 'updateAchive',
        value: function updateAchive(element, model, type) {
            var settings = {
                left: 540,
                top: 560,
                scale: 1
            };

            settings.top = type === 'A' ? 540 : 540;
            settings.scale = type === 'A' ? 1 : 1;

            var dir = type === 'B' ? 'com_foto' : 'sem_foto';
            var fileAchive = PIXI.Texture.fromImage('/images/recm/' + dir + '/' + model + '.png');
            fileAchive.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            element.texture = fileAchive;

            element.x = settings.left;
            element.y = settings.top;
            element.scale.x = settings.scale;
            element.scale.y = settings.scale;
        }

        /**
          * @param {Object} container
          * @param {Object} element
          * @param {Object} photo
          * @param {String} model
         * @param {string} type
         * @returns {Object}
         */

    }, {
        key: 'updatePicture',
        value: function updatePicture(container, element, photo, model, type) {
            var diamond = model.indexOf('diamond') !== -1;
            var settings = {
                left: 540,
                top: 100,
                scale: 1
            };

            if (type === 'B') {
                if (photo.file) this.loadImage(photo.file).then(function (res) {
                    element.texture = res;
                });

                if (diamond) {
                    container.scale.x = 1;
                    container.scale.y = 1;
                    container.x = 600;
                    container.y = 450;
                    this.app.stage.setChildIndex(container, 6);
                    this.app.stage.setChildIndex(this.elements.achive, 5);
                } else {
                    container.scale.x = 1;
                    container.scale.y = 1;
                    container.x = settings.left - container.width / 2;
                    container.y = settings.top - container.height / 2;
                    this.app.stage.setChildIndex(container, 2);
                    this.app.stage.setChildIndex(this.elements.achive, 2);
                }
                element.scale.x = photo.scale || 1;
                element.scale.y = photo.scale || 1;

                container.visible = true;
            } else {
                container.visible = false;
            }
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(event) {
            this.draggingData = event.data;
            var position = this.draggingData.getLocalPosition(this);
            this.pivot.set(position.x, position.y);
            this.position.set(this.draggingData.global.x, this.draggingData.global.y);
            this.dragging = true;

            var newPosition = this.draggingData.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd() {
            this.dragging = false;
            this.draggingData = null;
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove() {
            if (this.dragging) {
                var newPosition = this.draggingData.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
    }, {
        key: 'loadImage',
        value: function loadImage(src) {

            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var file = PIXI.Texture.fromImage(e.target.result);
                    resolve(file);
                };
                reader.readAsDataURL(src);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'preview',
                ref: this.myRef
            });
        }
    }]);

    return Preview;
}(_react.Component);

Preview.propTypes = propTypes;

exports.default = Preview;

/***/ }),

/***/ "./src/js/app/containers/Wrapper.jsx":
/*!*******************************************!*\
  !*** ./src/js/app/containers/Wrapper.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _googleAnalytics = __webpack_require__(/*! ../utils/googleAnalytics */ "./src/js/app/utils/googleAnalytics.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = function (_Component) {
    _inherits(Wrapper, _Component);

    function Wrapper() {
        _classCallCheck(this, Wrapper);

        return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
    }

    _createClass(Wrapper, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.location !== prevProps.location) window.scroll(0, 0);

            (0, _googleAnalytics.pageview)(this.props.location.pathname);
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children;
        }
    }]);

    return Wrapper;
}(_react.Component);

exports.default = Wrapper;

/***/ }),

/***/ "./src/js/app/utils/googleAnalytics.js":
/*!*********************************************!*\
  !*** ./src/js/app/utils/googleAnalytics.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.event = event;
exports.pageview = pageview;
function event(action, category, label) {
    gtag('event', action, {
        'event_category': category,
        'event_label': label
    });
}

function pageview(path) {
    gtag('config', 'UA-', {
        'page_path': path
    });
}

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/giba/Development/biogenica/app-banner-generator/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /home/giba/Development/biogenica/app-banner-generator/src/sass/app.scss */"./src/sass/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map