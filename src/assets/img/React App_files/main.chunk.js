(this["webpackJsonplanding_reactjs"] = this["webpackJsonplanding_reactjs"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: rgb(63,94,251);\n  background: linear-gradient(180deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0;\n}\n\n.root {\n  display: flex;\n  flex-direction: column;\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,kFAAkF;EAClF,YAAY;EACZ,kCAAkC;EAClC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap\");\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: rgb(63,94,251);\n  background: linear-gradient(180deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0;\n}\n\n.root {\n  display: flex;\n  flex-direction: column;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/view/public/home/__styles__/index.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/view/public/home/__styles__/index.css ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #3f5efb;\n  padding: 1rem;\n}\n\n.header__img {\n  width: 24%;\n  height: auto;\n  cursor: pointer;\n}\n.profile{\n  width: 10%;\n  height: auto;\n}\n.header__menu {\n\tmargin-right: 50px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n \n}\n\n.header__menu ul {\n  display: none;\n  list-style: none;\n  margin: 0px 0px 0px -14px;\n  padding: 0px;\n  position: absolute;\n  width: 130px;\n  text-align: right;\n}\n\n.header__menu:hover ul, ul:hover {\n\tdisplay: block;\n}\n\n.header__menu li {\n  margin: 10px 0px;\n}\n\n.header__menu li a {\n  color: white;\n  text-decoration: none;\n}\n\n.header__menu li a:hover {\n  text-decoration: underline;\n  width: 100;\n}\n\n.header__menu--profile {\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n}\n\n.header__menu--profile img {\n  margin-right: 8px;\n  width: 100%;\n  height: auto;\n}\n.search {\n  background-color: transparent;\n  border: 2px solid #22254b;\n  border-radius: 50px;\n  font-family: inherit;\n  font-size: 1.2rem;\n  padding: 0.5rem 1.5rem;\n  color: white;\n}\n\n.search:focus {\n  outline: none;\n}\n\n.search::placeholder {\n  color: white;\n}\n\n/*\n  Flex Wrap: https://origamid.com/projetos/flexbox-guia-completo/#flex-wrap\n*/\n.movie-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.movie {\n  background-color: #373b69;\n  border-radius: 10px;\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.1);\n  overflow: hidden;     /* Para a imagem nao criar uma borda pontuda na parte superior do box */\n  position: relative;   /* Relativo para ser referencia ao .movie-overview */\n  margin: 1rem;\n  width: 300px;\n}\n\n.movie img {\n  object-fit: cover;\n  height: 450px;\n  width: 100%;\n  border-top: 15px;\n}\n\n.movie-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.movie-info h3 {\n  margin: 0;\n}\n\n/*\n Sobre a propriedade position e o porque ele esta respeitando o elemento .movie:\n https://pt-br.learnlayout.com/position.html\n Sobre a propriedade transform:\n https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform\n*/\n.movie-overview {\n  background-color: #fff;\n  color: #22254b;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  box-shadow: 0 -3px 5px rgba(0,0,0,0.1);\n  padding: 1rem;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  max-height: 100%;\n  transform: translateY(102%);\n  transition: transform 0.3s ease-in-out;\n}\n\n.movie:hover .movie-overview {\n  transform: translateY(0%);\n}\n\n.tag {\n  background-color: #22254b;\n  border-radius: 5px;\n  font-weight: bold;\n  padding: 0.5rem;\n}\n\n.tag.green {\n  color: rgb(5, 184, 5);\n}\n\n.tag.orange {\n  color: orange;\n}\n\n.tag.red {\n  color: red;\n}\n\n\n.main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: auto;\n  height: 300px;\n  margin-top: -80px;\n  border-radius: 0px 0px 40px 40px;\n}\n.samp{\n  font-Size: 1.6rem;\n  margin-Left:-10;\n  padding-top:15 ;\n  cursor: pointer;\n}\n.main__title {\n  color: white;\n  font-size: 2rem;\n}\n\n.input {\n  background-color: rgba(255,255,255,0.1);\n  border: 2px solid white;\n  border-radius: 25px;\n  color: white;\n  font-family: 'Muli', sans-serif;\n  font-size: 16px;\n  height: 50px;\n  margin-bottom: 20px;\n  outline: none;\n  padding: 0px 20px;\n  width: 20rem;\n}\n\n::placeholder {\n  color: white;\n}", "",{"version":3,"sources":["webpack://src/view/public/home/__styles__/index.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,eAAe;AACjB;AACA;EACE,UAAU;EACV,YAAY;AACd;AACA;CACC,kBAAkB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;;AAEjB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;CACC,cAAc;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;AACA;EACE,6BAA6B;EAC7B,yBAAyB;EACzB,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;;CAEC;AACD;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,uCAAuC;EACvC,gBAAgB,MAAM,uEAAuE;EAC7F,kBAAkB,IAAI,oDAAoD;EAC1E,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA;;;;;CAKC;AACD;EACE,sBAAsB;EACtB,cAAc;EACd,2BAA2B;EAC3B,4BAA4B;EAC5B,sCAAsC;EACtC,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,cAAc;EACd,gBAAgB;EAChB,2BAA2B;EAC3B,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gCAAgC;AAClC;AACA;EACE,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,eAAe;AACjB;AACA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;EACvC,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,+BAA+B;EAC/B,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,YAAY;AACd","sourcesContent":["header {\n  display: flex;\n  justify-content: space-between;\n  background-color: #3f5efb;\n  padding: 1rem;\n}\n\n.header__img {\n  width: 24%;\n  height: auto;\n  cursor: pointer;\n}\n.profile{\n  width: 10%;\n  height: auto;\n}\n.header__menu {\n\tmargin-right: 50px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n \n}\n\n.header__menu ul {\n  display: none;\n  list-style: none;\n  margin: 0px 0px 0px -14px;\n  padding: 0px;\n  position: absolute;\n  width: 130px;\n  text-align: right;\n}\n\n.header__menu:hover ul, ul:hover {\n\tdisplay: block;\n}\n\n.header__menu li {\n  margin: 10px 0px;\n}\n\n.header__menu li a {\n  color: white;\n  text-decoration: none;\n}\n\n.header__menu li a:hover {\n  text-decoration: underline;\n  width: 100;\n}\n\n.header__menu--profile {\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n}\n\n.header__menu--profile img {\n  margin-right: 8px;\n  width: 100%;\n  height: auto;\n}\n.search {\n  background-color: transparent;\n  border: 2px solid #22254b;\n  border-radius: 50px;\n  font-family: inherit;\n  font-size: 1.2rem;\n  padding: 0.5rem 1.5rem;\n  color: white;\n}\n\n.search:focus {\n  outline: none;\n}\n\n.search::placeholder {\n  color: white;\n}\n\n/*\n  Flex Wrap: https://origamid.com/projetos/flexbox-guia-completo/#flex-wrap\n*/\n.movie-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.movie {\n  background-color: #373b69;\n  border-radius: 10px;\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.1);\n  overflow: hidden;     /* Para a imagem nao criar uma borda pontuda na parte superior do box */\n  position: relative;   /* Relativo para ser referencia ao .movie-overview */\n  margin: 1rem;\n  width: 300px;\n}\n\n.movie img {\n  object-fit: cover;\n  height: 450px;\n  width: 100%;\n  border-top: 15px;\n}\n\n.movie-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.movie-info h3 {\n  margin: 0;\n}\n\n/*\n Sobre a propriedade position e o porque ele esta respeitando o elemento .movie:\n https://pt-br.learnlayout.com/position.html\n Sobre a propriedade transform:\n https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform\n*/\n.movie-overview {\n  background-color: #fff;\n  color: #22254b;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  box-shadow: 0 -3px 5px rgba(0,0,0,0.1);\n  padding: 1rem;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  max-height: 100%;\n  transform: translateY(102%);\n  transition: transform 0.3s ease-in-out;\n}\n\n.movie:hover .movie-overview {\n  transform: translateY(0%);\n}\n\n.tag {\n  background-color: #22254b;\n  border-radius: 5px;\n  font-weight: bold;\n  padding: 0.5rem;\n}\n\n.tag.green {\n  color: rgb(5, 184, 5);\n}\n\n.tag.orange {\n  color: orange;\n}\n\n.tag.red {\n  color: red;\n}\n\n\n.main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: auto;\n  height: 300px;\n  margin-top: -80px;\n  border-radius: 0px 0px 40px 40px;\n}\n.samp{\n  font-Size: 1.6rem;\n  margin-Left:-10;\n  padding-top:15 ;\n  cursor: pointer;\n}\n.main__title {\n  color: white;\n  font-size: 2rem;\n}\n\n.input {\n  background-color: rgba(255,255,255,0.1);\n  border: 2px solid white;\n  border-radius: 25px;\n  color: white;\n  font-family: 'Muli', sans-serif;\n  font-size: 16px;\n  height: 50px;\n  margin-bottom: 20px;\n  outline: none;\n  padding: 0px 20px;\n  width: 20rem;\n}\n\n::placeholder {\n  color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/logo.ff45e97e.png");

/***/ }),

/***/ "./src/assets/img/user-icon.png":
/*!**************************************!*\
  !*** ./src/assets/img/user-icon.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEBgAABAYBmSDe8AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUCSURBVGiB7ZrLjxVFFMa/w8A8MIACA+MDEBeioIIhRoLgCw3KggUJYKKy0wVqxIhx69K4UWPURI1GE/8BiVHjKwqCMI4DBJgBMWCIDggq4THDY7w/F1XF7blcurv69qAxfMmkku7vPL7b1dWnTo10Cf8tWFmOgHGSFkiaL+lm/zeuhnZU0g5J2yVtlLTBzI6VlUNhAM3ACuATYJB4DAIfA8uBUY3kUuiJAG2SVktaI+kaf3lQ0mZJX0jaJmmXpN9rTCdJmilpjqRFkm6XNNLfOyDpZUlvmtmpInlFAVgE/JT4Vb8HHgPGF/A1AXgc2Jzwtwe4ZzhyD0HbgNeASkLA3SX6vxfo9L4rwCtAa1n+Q5AOYKsPcgJYDYwoNYiLMwJ4EjjpY3UBk8tyPjUxlXYAN2bwZwDPA18CvcAR4E9gP/ABMC9HzFlAj4+5G5jSqIjJfs4CbAKuSOG2A+8Cf6ctU37avJD1Tvn3J7w7u4FJRUW0+kcb3ocxKdxJwM4MAbU4g3vnRqf4HQNs8fxOoKWIkNe9gx5gQgpvBLA+UkQS64HmFP/tVGfFq7EiHvCGJ4FZGdxlDYgIWJsR4xagHzct78srog342Qd4Igf/oxKE7M8R52nP3UOeZRl4zht0Ak0ZXAOOlSAEYHpGrCag23PXZIloA/o8+f4cottLEgE5pgzwoOf+Ss1Tqf2oLZfUIanLzD7PcqxqnVQGLsvB+VTSVklXSVqWvFEr5FE/vpUzeCUnLw9OZxHMDFVze6QuCRiPK6tPAZfniYxb58vCDTljTgBOA2eBseF68oncKalJ0kYzO5rHqZkdlyu/G0VF0v6cMf+Q2y6MlHRXuJ4UssCPX0cmsSOSXw87I/cgX/kx5DxESCgGt0UmsS+SXw8/RPJDjucXsFQr3Fxz1ds0AQdLeD/6iNgW4KpjgN5wLWkcKtva7WkaxkkqY7/QofMbFWkIOZ6roJNCQnV7IsLhcUkDEfwLod/7yovQeam7aoVGBHm9mdlZSRsiErgQvjWzwRL8SLhdHEQ2EYDbcJVpUZwE5kbGnOhtD4drySdyxI9Rc97MOiWtirGpwSoz64q06fBjyHmIkL1+vL5AMusUt0gEHPK2sQg5hpyHCOnx45xYr2Z2WtJLBRJ60czOFLCb7cee8+5Q3enFftmD/Sjgx4h3oxMoVD0D33gfS+vdbCeyaKzjY2qEkEItHlxxG4rGc12dc1PLzA7L9W1bJK0sEkRuzudFX8EYKyU1S/rMzP6qywBWhcdeJAJxZX2ejVStf6M6fR9OI7YAv3ni4gKBpkcImVbA/xJve4CUFlIgr/XkbjKaDzV21zG0q56FTcC1Ef5HAtu9bXrzwRu0Avu8wVM5+AuB94GBCBEB/cB7wPwccdZ4m72ZTyNhtDQR6KY699uBZ6k2msvATuAZYGKdeLNxP1QFWJJLRMI4tEx7g3NgJvAhbvkbLpzyMeYmfrRiLVPvoBU3j8E1sd+g2DlhUVSAd6i+d9+R0sROPUMErpTb6Dd2PtE4fpE0z8wOXoiQur00sz5JdyhRnP0L2KUMEbkBTKF6VnIx0Qlc3fhvMVTMaNyJ1MVABXgbdww+PAAW49by4cIeYNGwCagR04I7fjhUooCDuG9Tvo9dyYKagYeAdbj1PxYDuIOiFY0KKPOfasZKWij3bxm3SpohaZpcyS1JZ+T6u7sldcst6+t9//gS/nf4B+Mty5hv+1kwAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/components/Movie.js":
/*!*********************************!*\
  !*** ./src/components/Movie.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/stevensc/Escritorio/landing_reactjs/src/components/Movie.js";


const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average
}) => {
  const setVoteClass = vote => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "movie",
    children: [poster_path ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      src: IMAGE_API + poster_path,
      alt: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      src: "no-cover.png",
      alt: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "movie-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: `tag ${setVoteClass(vote_average)}`,
        children: vote_average
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "movie-overview",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        children: "Overview:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: overview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

_c = Movie;
/* harmony default export */ __webpack_exports__["default"] = (Movie);

var _c;

__webpack_require__.$Refresh$.register(_c, "Movie");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_public_home_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/public/home/App */ "./src/view/public/home/App.js");
/* harmony import */ var _view_public_home_Information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/public/home/Information */ "./src/view/public/home/Information.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/stevensc/Escritorio/landing_reactjs/src/index.js";








const MyApp = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      path: "/",
      component: _view_public_home_App__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      path: "/information",
      component: _view_public_home_Information__WEBPACK_IMPORTED_MODULE_4__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

_c = MyApp;
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(MyApp, {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 5
}, undefined), document.getElementById('root'));

var _c;

__webpack_require__.$Refresh$.register(_c, "MyApp");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/navigation/navigation.js":
/*!**************************************!*\
  !*** ./src/navigation/navigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/stevensc/Escritorio/landing_reactjs/src/navigation/navigation.js";




const Nav = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/",
          children: " Index"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 22
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/information",
          children: " Information"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 22
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

__webpack_require__.$Refresh$.register(_c, "Nav");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/view/public/home/App.js":
/*!*************************************!*\
  !*** ./src/view/public/home/App.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Movie */ "./src/components/Movie.js");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var _assets_img_user_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/user-icon.png */ "./src/assets/img/user-icon.png");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./__styles__/index.css */ "./src/view/public/home/__styles__/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/stevensc/Escritorio/landing_reactjs/src/view/public/home/App.js",
    _s = __webpack_require__.$Refresh$.signature();








const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query=";

function App() {
  _s();

  const [movies, setMovies] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [searchTerm, setSearchTerm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const getMovies = API => {
    fetch(API).then(res => res.json()).then(data => setMovies(data.results));
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    if (searchTerm) {
      getMovies(`${SEARCH_API}${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleOnChange = event => {
    setSearchTerm(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getMovies(FEATURED_API);
  }, []);
  return movies.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 33
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          onClick: () => {
            getMovies(FEATURED_API);
          },
          className: "header__img",
          src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
          alt: "MoviesTime"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("samp", {
          onClick: () => {
            getMovies(FEATURED_API);
          },
          className: "samp",
          children: "MoviesTime"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "header__menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "header__menu--profile",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
            className: "profile",
            src: _assets_img_user_icon_png__WEBPACK_IMPORTED_MODULE_3__["default"],
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
            children: "Perfil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: "/",
              children: "Iniciar Sesi\xF3n"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
        className: "main",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
          className: "main__title",
          children: "\xBFQu\xE9 quieres ver hoy?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("form", {
          onSubmit: handleOnSubmit,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "search",
            className: "input",
            placeholder: "Search...",
            value: searchTerm,
            onChange: handleOnChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "movie-container",
      children: movies.length > 0 && movies.map(movie => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Movie__WEBPACK_IMPORTED_MODULE_1__["default"], { ...movie
      }, movie.id, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 33
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(App, "aQi/tms59DsvcxPuc/aDP6Uhs+E=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/view/public/home/Information.js":
/*!*********************************************!*\
  !*** ./src/view/public/home/Information.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../navigation/navigation */ "./src/navigation/navigation.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/stevensc/Escritorio/landing_reactjs/src/view/public/home/Information.js";




const Page = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
    style: {
      color: 'red'
    },
    children: " Reports"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

__webpack_require__.$Refresh$.register(_c, "Page");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/view/public/home/__styles__/index.css":
/*!***************************************************!*\
  !*** ./src/view/public/home/__styles__/index.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/view/public/home/__styles__/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/view/public/home/__styles__/index.css",
      function () {
        content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/view/public/home/__styles__/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/stevensc/Escritorio/landing_reactjs/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/stevensc/Escritorio/landing_reactjs/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/stevensc/Escritorio/landing_reactjs/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/stevensc/Escritorio/landing_reactjs/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map