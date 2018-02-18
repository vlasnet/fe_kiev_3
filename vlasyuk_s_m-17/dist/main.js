/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_render__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_main_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_main_scss__);




var button = document.querySelector("#btn");

button.addEventListener("click", __WEBPACK_IMPORTED_MODULE_0__js_render__["a" /* pageRender */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageRender; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_fetch__ = __webpack_require__(2);
/*jshint esversion: 6 */



function pageRender() {
    var API_KEY = '8027937-8ec3965bcdf1b5ee3d66ab500';
    var searchingWord = document.querySelector("#keyword").value;
    var picturesAmount = +document.querySelector("#count").value;

    if (searchingWord.length > 100) {
        alert("Название категории не должно превышать 100 символов");
    } else if (picturesAmount > 2 && picturesAmount <= 200) {
        var url = "https://pixabay.com/api/?key=" + API_KEY + "&per_page=" + picturesAmount + "&q=" + searchingWord;

        Object(__WEBPACK_IMPORTED_MODULE_0__server_fetch__["a" /* getDataFromServer */])(url, picturesAmount, searchingWord);
    } else {
        alert("Недопустимое количество фото в запросе! \nДоступное количество фотографий от 3 до 200");
    }
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataFromServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_images__ = __webpack_require__(3);

function getDataFromServer(url, picturesAmount, searchingWord) {
    console.log("Fetching URL: " + url);

    fetch(url).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
    }).then(function (data) {
        Object(__WEBPACK_IMPORTED_MODULE_0__add_images__["a" /* createImages */])(picturesAmount);
        var links = [];
        if (data.totalHits > 0) {
            document.querySelector(".error-message").textContent = '';
            data.hits.forEach(function (hit, i) {
                links.push(hit.webformatURL);
            });
        } else {
            console.log('No hits');
            document.querySelector(".error-message").textContent = "\u0421\u0430\u0439\u0442 https://pixabay.com \u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u0432 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438: " + searchingWord;
            var images = document.querySelectorAll("[id ^=img-]");
            images.forEach(function (picture, i) {
                Object(__WEBPACK_IMPORTED_MODULE_0__add_images__["b" /* showImage */])("", "", i, picture);
            });
        }
        return links;
    }).then(function (links) {
        links.forEach(function (link, i) {
            Object(__WEBPACK_IMPORTED_MODULE_0__add_images__["b" /* showImage */])(link, 'picture from site pixabay.com', i);
        });
    });
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createImages; });
function showImage(link, alt, idNumber) {
    var image = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var img = void 0;
    if (image == 0) {
        img = document.querySelector('#img-' + (idNumber + 1));
    } else {
        img = image;
    }
    img.setAttribute('src', link);
    img.setAttribute('alt', alt);
}

function createImages(amount) {
    var imagesField = document.querySelector(".images-wrapper");
    imagesField.innerHTML = "";
    for (var i = 1; i <= amount; i++) {
        var tempImage = document.createElement("div");
        tempImage.classList.add("img");
        tempImage.innerHTML = '<img class="img" src="" alt="" id="img-' + i + '">';
        imagesField.appendChild(tempImage);
    }
}



/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);