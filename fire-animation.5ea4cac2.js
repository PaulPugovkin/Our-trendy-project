// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/fire-animation.js":[function(require,module,exports) {
var mainNext = 'M20.4359 15.518C20.1701 14.9225 19.8034 14.3362 19.2672 13.6589C17.9151 11.9589 17.3208 10.4227 17.3163 10.3864C17.2979 10.2045 17.1696 10.0545 17 10C16.8258 9.94545 16.6379 9.99545 16.5142 10.1318C15.8582 10.8546 15.7609 12.468 16.1276 13.5816C16.2284 13.8862 16.3384 14.2453 16.4163 14.6089C17.0121 17.5498 16 22.5 15.5 22.5C15.2388 22.5727 15.06 22.5364 14.895 22.3591C14 21.5 14.2301 16.3453 14.4959 13.6862C14.5509 13.1453 14.5371 12.6589 14.4592 12.2044C13.8986 8.93604 11.843 6.83959 11.3196 6.10436C9.88048 3.97709 7.50006 1.49982 6.72923 0.40436C6.50006 -4.82798e-06 6.30006 0.0134504 6.30006 0.0134504C6.00006 -4.82265e-06 5.90006 0.499887 5.90006 0.499887C5.40006 1.99989 6.45489 6.21533 7.1534 7.80436C7.37213 8.30195 7.50006 8.8064 7.64382 9.48618C8.1617 11.9352 8.33909 14.2887 8.10006 14.9998C8.09243 15.0225 7.90006 15.4998 7.90006 15.4998C7.90006 15.4998 7.50006 16.7498 6.54197 16.979C6.54197 16.979 6.48697 16.9744 6.45489 16.9654C6.12947 16.8972 6.19548 16.4397 6.19548 15.418C6.17715 11.5407 2.95489 10.1642 1.78632 10.1642C1.45489 10.1642 1.18425 10.0722 0.954885 10.4654C0.830607 10.6784 0.954885 10.9654 1.18425 11.2176C1.59783 11.6723 1.78632 11.5959 1.78632 12.8498C1.69923 14.1771 1.45632 15.4907 1.06673 16.7498C0.140899 19.768 0.287566 22.6271 0.296732 22.7635C1.00866 30.5047 12.1419 31.8611 18.7492 27.4998C19.4734 27.0225 20.0646 26.4771 20.5001 25.8771C22.9384 22.5134 21.5039 17.9453 20.4359 15.518ZM3.91667 24.45C4 24.74 3.91667 24.9336 3.73 25H3.7C3.1 25.1 3 24.5 3 24.5C2.5 23.5 2.55178 21.6044 2.60219 20.8498C2.62053 20.5998 2.84053 20.4135 3.09261 20.427C3.34469 20.4452 3.53719 20.6634 3.51886 20.9134C3.4684 21.6316 3.5 23 3.91667 24.45ZM3.72507 18.8862C3.69757 19.118 3.50048 19.2862 3.27132 19.2862C3.25298 19.2862 3.23465 19.2862 3.21173 19.2816C2.96423 19.2498 2.78548 19.0271 2.81298 18.7771L3.27132 15.418C3.3034 15.1725 3.52798 14.9953 3.78465 15.0225C4.03673 15.0544 4.21548 15.2816 4.1834 15.5316L3.72507 18.8862Z';
var rightNext = 'M17.3803 6.21533C17.1303 6.17692 17.079 5.89384 16.9974 5.69733C16.5 4.5 15.4027 3.99605 15.8521 3.52064C16.0251 3.33732 16.3147 3.32777 16.5 3.5C16.6009 3.59382 16.627 3.65873 16.9 4C17.173 4.34127 17.9575 5.49115 17.9033 5.83588C17.8646 6.08115 17.634 6.25329 17.3803 6.21533Z';
var leftNext = 'M0.671272 8.47949C0.583547 8.14144 0.916328 7.45504 1.22943 7.21787C1.47321 6.85417 1.33308 6.68864 1.5 6.5C1.66651 6.31091 1.95586 6.29159 2.14675 6.45782C2.5 7 2 7.5 1.55929 8.25353C1.53014 8.30338 1.47427 8.74381 1.22943 8.8064C0.979181 8.86881 0.733651 8.71849 0.671272 8.47949Z';
var mainStart = 'M20.4811 15.5526C20.2152 14.9572 19.8486 14.3708 19.3123 13.6935C17.9602 11.9935 17.5477 8.20264 17.5431 8.16628C17.5248 7.98446 17.3965 7.83446 17.2269 7.77991C17.0527 7.72537 16.8648 7.77537 16.7411 7.91173C15.1277 9.71628 15.8061 12.5026 16.1727 13.6163C16.2736 13.9208 16.3836 14.2799 16.4614 14.6435C17.0573 17.5845 15.9068 18.9163 15.6364 19.1845C15.3752 19.2572 15.1964 19.2208 15.0314 19.0436C14.4631 18.4208 14.2752 16.3799 14.541 13.7208C14.5961 13.1799 14.5823 12.6935 14.5043 12.239C13.9437 8.97068 11.8881 6.87423 11.3648 6.139C9.9256 4.01173 9.77893 0.47082 9.77435 0.439002C9.76976 0.27082 9.67351 0.12082 9.52226 0.048093C9.3756 -0.0246343 9.19685 -0.0155433 9.05935 0.0799112C6.65768 1.71173 6.86393 5.64355 7.19851 7.839C7.27643 8.34809 7.42768 8.86628 7.68893 9.52082C8.61935 11.8617 7.5056 14.8845 7.49643 14.9117C7.48726 14.939 7.4781 14.9617 7.47351 14.989C7.33143 15.7345 7.0931 16.1799 6.82726 16.1799C6.79976 16.1799 6.77226 16.1754 6.74018 16.1663C6.41476 16.0981 6.24518 15.7526 6.2406 15.4526C6.22226 11.5754 2.33101 10.2708 2.28976 10.2572C2.1156 10.2026 1.9231 10.2526 1.80393 10.3935C1.68018 10.5345 1.65726 10.7299 1.73976 10.8935C1.7856 10.989 1.93226 11.4072 1.83143 12.8845C1.74435 14.2117 1.50143 15.5254 1.11185 16.7845C0.186014 19.8026 0.332681 22.6617 0.341848 22.7981C1.05378 30.5393 12.187 31.8958 18.7943 27.5345C19.5185 27.0572 20.1098 26.5117 20.5452 25.9117C22.9836 22.5481 21.549 17.9799 20.4811 15.5526ZM3.54564 22.9481C3.55939 23.1981 3.36689 23.4117 3.11481 23.4254H3.08731C2.84439 23.4254 2.64273 23.239 2.62898 22.9981C2.58773 22.3345 2.59689 21.639 2.64731 20.8845C2.66564 20.6345 2.88564 20.4481 3.13773 20.4617C3.38981 20.4799 3.58231 20.698 3.56398 20.948C3.51351 21.6663 3.50439 22.3208 3.54564 22.9481ZM3.77018 18.9208C3.74268 19.1526 3.5456 19.3208 3.31643 19.3208C3.2981 19.3208 3.27976 19.3208 3.25685 19.3163C3.00935 19.2845 2.8306 19.0617 2.8581 18.8117L3.0781 17.0572C3.11018 16.8117 3.33476 16.6345 3.59143 16.6617C3.84351 16.6935 4.02226 16.9208 3.99018 17.1708L3.77018 18.9208Z';
var rightStart = 'M17.3802 6.21548C17.1302 6.17707 16.9588 5.94539 16.9973 5.69748C17.026 5.51279 17.1916 4.56734 17.641 4.09193C17.8139 3.90861 18.1036 3.89907 18.2889 4.07129C18.4735 4.24284 18.4829 4.53052 18.3097 4.71384C18.1195 4.91516 17.9574 5.49129 17.9033 5.83602C17.8646 6.0813 17.6339 6.25343 17.3802 6.21548Z';
var leftStart = 'M0.671208 8.47963C0.583483 8.14159 0.3655 7.58409 0.15627 7.40209C-0.034167 7.2365 -0.0531879 6.94931 0.113737 6.76068C0.28025 6.57159 0.569595 6.55227 0.760491 6.7185C1.25439 7.14795 1.51243 8.07282 1.55923 8.25368C1.62188 8.49673 1.47421 8.74395 1.22937 8.80654C0.979116 8.86895 0.733587 8.71863 0.671208 8.47963Z';
new anime({
  targets: '.main-start',
  d: [{
    value: mainNext
  }, {
    value: mainStart
  }],
  easing: 'easeOutQuad',
  duration: 1500,
  loop: true
});
new anime({
  targets: '.right-start',
  d: [{
    value: rightNext
  }, {
    value: rightStart
  }],
  easing: 'easeOutQuad',
  duration: 1500,
  loop: true
});
new anime({
  targets: '.left-start',
  d: [{
    value: leftNext
  }, {
    value: leftStart
  }],
  easing: 'easeOutQuad',
  duration: 1500,
  loop: true
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61516" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/fire-animation.js"], null)
//# sourceMappingURL=/fire-animation.5ea4cac2.js.map