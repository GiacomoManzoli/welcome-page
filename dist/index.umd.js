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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap);", ""]);
// Module
exports.push([module.i, "html {\n    background-color: #272b35;\n    font-family: Ubuntu Mono;\n}\n\nbody {\n    margin: 0px;\n    user-select: none;\n    -moz-user-select: none;\n}\n\n.nav-link {\n    text-decoration: none;\n    color: #8c8c8b;\n    display: block;\n    margin: 0.5em 0em;\n    padding-left: 2.5rem;\n}\n\n.nav-link i {\n    display: none;\n    margin-right: 0.5em;\n}\n\n.nav-link:hover,\n.nav-link:focus {\n    color: #fff;\n    outline: none;\n}\n\n.nav-link:hover i,\n.nav-link:focus i {\n    display: inline;\n}\n\n.container {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.bookmarks {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    max-width: 80%;\n\n    flex-wrap: wrap;\n}\n\n.square {\n    padding: 0.4em;\n    font-size: 1rem;\n    margin: 1em 2em;\n    display: block;\n    min-width: 16em;\n}\n\n.square-header {\n    /* font-size: 1.1rem; */\n    font-weight: 600;\n    color: #fff;\n    margin: 0em 0em 0.35em 0em;\n    font-size: 1.5rem;\n}\n\n.square-header i {\n    margin-right: 1rem;\n    font-size: 1.3rem;\n}\n\n.square-body {\n    vertical-align: top;\n    align-items: center;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/components.ts":
/*!***************************!*\
  !*** ./src/components.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function makeSquare(group) {
    var _a;
    var square = document.createElement("div");
    square.classList.add("square");
    var squareHeader = document.createElement("div");
    squareHeader.classList.add("square-header");
    var squareLogo = document.createElement("i");
    if (!group.fontAwesome) {
        group.fontAwesome = ["far", "fa-folder"];
    }
    (_a = squareLogo.classList).add.apply(_a, group.fontAwesome);
    squareHeader.append(squareLogo);
    squareHeader.append(group.title);
    square.append(squareHeader);
    group.links.forEach(function (l) {
        var a = document.createElement("a");
        a.classList.add("nav-link");
        a.target = "_blank";
        a.href = l.href;
        var icon = document.createElement("i");
        icon.classList.add("fas", "fa-angle-right");
        a.append(icon);
        a.append(l.label);
        square.append(a);
    });
    return square;
}
exports.makeSquare = makeSquare;


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.groups = [
    {
        title: "Favs",
        fontAwesome: ["far", "fa-star"],
        links: [
            { href: "https://www.facebook.com/", label: "Facebook" },
            { href: "https://www.instagram.com/", label: "Instagram" },
            { href: "https://mail.google.com/", label: "GMail" },
            { href: "https://github.com/", label: "GitHub" },
            { href: "https://www.reddit.com/", label: "reddit" },
        ],
    },
    {
        title: "Work",
        fontAwesome: ["fas", "fa-briefcase"],
        links: [
            { href: "http://lego/", label: "LEGO" },
            { href: "https://developer.omnis.net/", label: "Omnis Dev" },
            { href: "https://developer.omnis.net/onlinedocs/index.jsp", label: "Omnis Doc" },
            { href: "http://webmail.888sp.it/login.php", label: "WebMail" },
        ],
    },
    // {
    //     title: "Giacomo",
    //     fontAwesome: ["far", "fa-folder"],
    //     links: [
    //         { href: "https://www.facebook.com/", label: "Facebook" },
    //         { href: "https://www.instagram.com/", label: "Instagram" },
    //         { href: "https://mail.google.com/", label: "GMail" },
    //         { href: "https://github.com/", label: "GitHub" },
    //         { href: "https://www.reddit.com/", label: "reddit" },
    //     ],
    // },
    {
        title: "Repos",
        fontAwesome: ["fas", "fa-code-branch"],
        links: [
            { href: "https://github.com/opensourceBIM/BIMserver", label: "BIMServer" },
            { href: "https://github.com/opensourceBIM/BIMserver-JavaScript-API", label: "BIMServer-JavaScript-API" },
            { href: "https://github.com/opensourceBIM/bimvie.ws", label: "bimvie.ws" },
            { href: "https://github.com/GiacomoManzoli/8Bim", label: "8BIM" },
        ],
    },
];


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./index.css */ "./src/index.css");
var components_1 = __webpack_require__(/*! ./components */ "./src/components.ts");
var data_1 = __webpack_require__(/*! ./data */ "./src/data.ts");
var container = document.createElement("div");
container.classList.add("container");
document.body.append(container);
var bookmarks = document.createElement("div");
bookmarks.classList.add("bookmarks");
container.append(bookmarks);
var Actions;
(function (Actions) {
    Actions[Actions["UP"] = 0] = "UP";
    Actions[Actions["DOWN"] = 1] = "DOWN";
    Actions[Actions["LEFT"] = 2] = "LEFT";
    Actions[Actions["RIGHT"] = 3] = "RIGHT";
    Actions[Actions["GO"] = 4] = "GO";
    Actions[Actions["INIT"] = 5] = "INIT";
    Actions[Actions["CLEAR"] = 6] = "CLEAR";
})(Actions || (Actions = {}));
var groupIndex = -1;
var linkIndex = -1;
var firstAction = true;
var currentLink;
function performAction(action) {
    console.log(action);
    if (firstAction) {
        firstAction = false;
        performAction(Actions.INIT);
        return;
    }
    switch (action) {
        case Actions.INIT:
            changeGroup(0);
            changeLink(0);
        case Actions.UP:
            changeLink(linkIndex - 1);
            selectLink();
            break;
        case Actions.DOWN:
            changeLink(linkIndex + 1);
            selectLink();
            break;
        case Actions.LEFT:
            changeGroup(groupIndex - 1);
            selectLink();
            break;
        case Actions.RIGHT:
            changeGroup(groupIndex + 1);
            selectLink();
            break;
        case Actions.GO:
            if (currentLink) {
                currentLink.click();
            }
            break;
        case Actions.CLEAR:
            if (currentLink) {
                currentLink.blur();
            }
            currentLink = null;
            firstAction = false;
            break;
    }
}
function changeLink(to) {
    if (to <= 0) {
        linkIndex = 0;
    }
    else {
        linkIndex = Math.min(to, groupMax());
    }
}
function groupMax() {
    return data_1.groups[groupIndex].links.length - 1;
}
function groupCount() {
    return data_1.groups.length;
}
function changeGroup(to) {
    if (to <= 0) {
        groupIndex = 0;
    }
    else {
        groupIndex = Math.min(to, groupCount());
    }
    changeLink(linkIndex);
}
function selectLink() {
    var href = data_1.groups[groupIndex].links[linkIndex].href;
    var link = bookmarks.querySelector("[href=\"" + href + "\"]");
    if (link) {
        currentLink = link;
        link.focus();
    }
}
document.body.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 38: // up
            performAction(Actions.UP);
            break;
        case 39: // ->
            performAction(Actions.RIGHT);
            break;
        case 40: // down
            performAction(Actions.DOWN);
            break;
        case 37: // <-
            performAction(Actions.LEFT);
            break;
        case 13: // enter
        case 32: // space
            performAction(Actions.GO);
            break;
    }
});
data_1.groups.forEach(function (g) {
    bookmarks.append(components_1.makeSquare(g));
});
bookmarks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("mouseover", function () {
        performAction(Actions.CLEAR);
    });
});


/***/ })

/******/ });
//# sourceMappingURL=index.umd.js.map