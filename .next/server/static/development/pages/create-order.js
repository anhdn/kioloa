module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "undefined";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./kioloa-firebase-adminsdk-b6s9e-32032849ea.json":
/*!********************************************************!*\
  !*** ./kioloa-firebase-adminsdk-b6s9e-32032849ea.json ***!
  \********************************************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"kioloa\",\"private_key_id\":\"32032849eae6e9954ca0a779e7dd58cba2842cc5\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDuDV4GzlclJH4+\\nSLTqaeBMMyeyvzdUpKTm6ooZdIuq+DttynMsWe7V4W3ZXUEXHQcAdOlfBeoLi/ox\\n5627fQr+CzZubygLrDDh+HXlIGVT7zJjv7fMi0iZ4vh//bpBz6AfBLwxmxQJFUrs\\n8mgocDsvy+q6MZOJlqi61/Tegfvb7VodsMBBAHFOcQZ65Q+fHrsAydWTJwwuVXLm\\n2qaKJZ0GdNjTgK/R+B2lebDTVZhxDnbdJEQKLzux30iJz0Y5BwKQi9DWpSf04FwP\\n4loTapQCuef4Pkwij6DPW4HaNnW08AsJ1YIINNxQVKt3jRuvtt2cK/I8NLcXkE9Z\\ncBNqKtS5AgMBAAECggEAFjNo8XmM5wngPC7LsJDvOiwLJ8BtiJdSSbbV6knUPL2p\\nzTN0Sk6Y15mOhRcNWvp6DLDakuIaUblcPAs/SJ0AyXCCQwpa0bvdUzW4yQWcbZeB\\nO4xFt+3Fd5STWFxxYnHanQn0AyxTUgWKV07EKAFPg8WgvnyhJdPHKKW7UIUO2BO8\\npWTUfRWcrxmFVtJ3ubcCHBWvZiWizXhKw3ajnmeBvWOSGtoKoZZF8cBb+8vTp2Vu\\nNFNpTqYEXGUV2o+x/XaL9TNKyd0NgMJ2JAKvjGRmC73R6vUl4WRnbQ0fXcR9IFWQ\\nLf1yiQjYF6TC3ug92PcCok27p2ZhHD2N9C2EkWmQAQKBgQD8LlO1g48UzomlbLxS\\nwlT83LlbtzabjERZfpktvukzHN0XIg6hpSs0T/3UNm6dz2veqIdYYlH2gjlP6N0N\\ndGwFXt87u3lFjlt3X5Ls+EDxsbPkuhrx/YDBfR0EIGoCS7oZBOwQR4XwH1gNdEBc\\nF9eJk9j0MpfpyanSmXEqJsoz8QKBgQDxqEPVDBkpXs5lu2cfiRJLahq3sCsJ+A1n\\nUsCBS3CuED1OfgE9RONhoEcDpJ30dwjk3WzEs0kKHHz/WFY4N4PPIZ8uBWXhJtsN\\n96W6NnlH1uSaVKCi6v5rUrlHqDaMrMiwMelsHrLleCe8r7whYrn72hFnCYcAIGK1\\npAnwAnNVSQKBgBf1BrrNvsAJRwZSKCnskEpdZbaS1zs7vhqKbl7sLhdO/Kn/8Efm\\n+w3DM6f/a87OL789X25EGOlEQdGXm7h1gPWZp7dy/fhfp8zVZY3hn7nWWfK2w2yN\\n2reG/USxF6EUNJ+/2fVJ9i1zrNfKXXriQPWu+ANq8wegwuNg9GE+wiLhAoGBANWh\\nOtYMa/H2rd+hW/i05Edm9VeNlX6qmq7MqQGj/2jhUlEhc1cGnzyexCikTj7fPC2W\\n0aDSHa+in53cKdxot01VG7NDcl0oTF58nzWPEog/oLgOODPOKjwWVVTTj+WsmX2p\\nogDC4sOZBQf5Ewcwj9nlXZ0I/x9NgfWxnlde0zaBAoGBAL6H23s2XH2Bdy7iRIic\\nrXOsDT38wrJm4An6qgWre08wJu+DJBbTecAhQQKmj/PuTKxn/BoquIvZ5bKVvNzm\\n4qapy1abz07oPNj26vkcF06m8lh+2YIUfMixA4R4P8AsejOpvt9Pq4mgNc4rfopp\\nXv93s3Ta1ZFwkYdLFsSiS4pI\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-b6s9e@kioloa.iam.gserviceaccount.com\",\"client_id\":\"109943589269784190594\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b6s9e%40kioloa.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./pages/create-order.js":
/*!*******************************!*\
  !*** ./pages/create-order.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_actions_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/actions/order */ "./src/actions/order.js");
var _jsxFileName = "/Users/anhdang/IdeaProject/kioloa/pages/create-order.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class CreateOrder extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps(ctx) {
    console.log('getInitialProps ==> ');
    Object(_src_actions_order__WEBPACK_IMPORTED_MODULE_3__["createOrder"])();
  }

  render() {
    return __jsx("section", {
      className: "order-form my-4 mx-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "container pt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "You can see my Order Form"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "with some explanation below"), __jsx("hr", {
      className: "mt-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "row mx-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "col-12 mb-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("label", {
      className: "order-form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Name")), __jsx("div", {
      className: "col-12 col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: "First",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), __jsx("div", {
      className: "col-12 col-sm-6 mt-2 mt-sm-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: "Last",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }))), __jsx("div", {
      className: "row mt-3 mx-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("label", {
      className: "order-form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Type of thing you want to order")), __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: " ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }))), __jsx("div", {
      className: "row mt-3 mx-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("label", {
      className: "order-form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Another type of thing you want to order")), __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: " ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }))), __jsx("div", {
      className: "row mt-3 mx-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("label", {
      className: "order-form-label",
      htmlFor: "date-picker-example",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Date")), __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input datepicker",
      placeholder: "Selected date",
      type: "text",
      id: "date-picker-example",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }))), __jsx("div", {
      className: "row mt-3 mx-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("label", {
      className: "order-form-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Adress")), __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: "Street Address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })), __jsx("div", {
      className: "col-12 mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: "Street Address Line 2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })), __jsx("div", {
      className: "col-12 col-sm-6 mt-2 pr-sm-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: "City",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })), __jsx("div", {
      className: "col-12 col-sm-6 mt-2 pl-sm-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: "Region",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    })), __jsx("div", {
      className: "col-12 col-sm-6 mt-2 pr-sm-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: "Postal / Zip Code",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), __jsx("div", {
      className: "col-12 col-sm-6 mt-2 pl-sm-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("input", {
      className: "order-form-input",
      placeholder: "Country",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }))), __jsx("div", {
      className: "row mt-3 mx-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("div", {
      className: "form-check",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("input", {
      type: "checkbox",
      className: "form-check-input",
      name: "validation",
      id: "validation",
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "validation",
      className: "form-check-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "I know what I need to know")))), __jsx("div", {
      className: "row mt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      id: "btnSubmit",
      className: "btn btn-dark d-block mx-auto btn-submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Submit")))))));
  }

}

const mapStateToProps = state => {
  return {};
};

CreateOrder.propTypes = {
  createOrder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  createOrder: _src_actions_order__WEBPACK_IMPORTED_MODULE_3__["createOrder"]
})(CreateOrder));

/***/ }),

/***/ "./src/actions/db.js":
/*!***************************!*\
  !*** ./src/actions/db.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

let serviceAccount = __webpack_require__(/*! ../../kioloa-firebase-adminsdk-b6s9e-32032849ea.json */ "./kioloa-firebase-adminsdk-b6s9e-32032849ea.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://kioloa.firebaseio.com'
  });
}

const db = admin.firestore();
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ "./src/actions/order.js":
/*!******************************!*\
  !*** ./src/actions/order.js ***!
  \******************************/
/*! exports provided: GET_STORES, GET_STORES_SUCCESS, GET_STORES_FAIL, createOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORES", function() { return GET_STORES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORES_SUCCESS", function() { return GET_STORES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STORES_FAIL", function() { return GET_STORES_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrder", function() { return createOrder; });
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./src/actions/db.js");


const GET_STORES = _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default()('GET_STORES');
const GET_STORES_SUCCESS = _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default()('GET_STORES_SUCCESS');
const GET_STORES_FAIL = _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default()('GET_STORES_FAIL');
function createOrder() {
  // Add a new document with a generated id.
  _db__WEBPACK_IMPORTED_MODULE_1__["default"].collection('orders').add({
    name: 'Tokyo',
    country: 'Japan'
  }).then(ref => {
    console.log('Added document with ID: ', ref.id);
  });
}

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/create-order.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anhdang/IdeaProject/kioloa/pages/create-order.js */"./pages/create-order.js");


/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=create-order.js.map