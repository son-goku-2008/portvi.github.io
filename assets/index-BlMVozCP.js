(function () {
  const R = document.createElement("link").relList;
  if (R && R.supports && R.supports("modulepreload")) return;
  for (const I of document.querySelectorAll('link[rel="modulepreload"]')) J(I);
  new MutationObserver((I) => {
    for (const H of I)
      if (H.type === "childList")
        for (const ae of H.addedNodes)
          ae.tagName === "LINK" && ae.rel === "modulepreload" && J(ae);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(I) {
    const H = {};
    return (
      I.integrity && (H.integrity = I.integrity),
      I.referrerPolicy && (H.referrerPolicy = I.referrerPolicy),
      I.crossOrigin === "use-credentials"
        ? (H.credentials = "include")
        : I.crossOrigin === "anonymous"
        ? (H.credentials = "omit")
        : (H.credentials = "same-origin"),
      H
    );
  }
  function J(I) {
    if (I.ep) return;
    I.ep = !0;
    const H = m(I);
    fetch(I.href, H);
  }
})();
var No = { exports: {} },
  wr = {},
  Po = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function If() {
  if (Pa) return D;
  Pa = 1;
  var k = Symbol.for("react.element"),
    R = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    I = Symbol.for("react.profiler"),
    H = Symbol.for("react.provider"),
    ae = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    ge = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    ne = Symbol.iterator;
  function $(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (ne && c[ne]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var We = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qe = Object.assign,
    b = {};
  function Y(c, y, O) {
    (this.props = c),
      (this.context = y),
      (this.refs = b),
      (this.updater = O || We);
  }
  (Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, c, y, "setState");
    }),
    (Y.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    });
  function yt() {}
  yt.prototype = Y.prototype;
  function at(c, y, O) {
    (this.props = c),
      (this.context = y),
      (this.refs = b),
      (this.updater = O || We);
  }
  var $e = (at.prototype = new yt());
  ($e.constructor = at), Qe($e, Y.prototype), ($e.isPureReactComponent = !0);
  var ke = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Pe = { current: null },
    Ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(c, y, O) {
    var F,
      V = {},
      U = null,
      Z = null;
    if (y != null)
      for (F in (y.ref !== void 0 && (Z = y.ref),
      y.key !== void 0 && (U = "" + y.key),
      y))
        be.call(y, F) && !Ae.hasOwnProperty(F) && (V[F] = y[F]);
    var Q = arguments.length - 2;
    if (Q === 1) V.children = O;
    else if (1 < Q) {
      for (var ee = Array(Q), _e = 0; _e < Q; _e++) ee[_e] = arguments[_e + 2];
      V.children = ee;
    }
    if (c && c.defaultProps)
      for (F in ((Q = c.defaultProps), Q)) V[F] === void 0 && (V[F] = Q[F]);
    return {
      $$typeof: k,
      type: c,
      key: U,
      ref: Z,
      props: V,
      _owner: Pe.current,
    };
  }
  function zt(c, y) {
    return {
      $$typeof: k,
      type: c.type,
      key: y,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === k;
  }
  function Jt(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (O) {
        return y[O];
      })
    );
  }
  var ct = /\/+/g;
  function Fe(c, y) {
    return typeof c == "object" && c !== null && c.key != null
      ? Jt("" + c.key)
      : y.toString(36);
  }
  function et(c, y, O, F, V) {
    var U = typeof c;
    (U === "undefined" || U === "boolean") && (c = null);
    var Z = !1;
    if (c === null) Z = !0;
    else
      switch (U) {
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case k:
            case R:
              Z = !0;
          }
      }
    if (Z)
      return (
        (Z = c),
        (V = V(Z)),
        (c = F === "" ? "." + Fe(Z, 0) : F),
        ke(V)
          ? ((O = ""),
            c != null && (O = c.replace(ct, "$&/") + "/"),
            et(V, y, O, "", function (_e) {
              return _e;
            }))
          : V != null &&
            (gt(V) &&
              (V = zt(
                V,
                O +
                  (!V.key || (Z && Z.key === V.key)
                    ? ""
                    : ("" + V.key).replace(ct, "$&/") + "/") +
                  c
              )),
            y.push(V)),
        1
      );
    if (((Z = 0), (F = F === "" ? "." : F + ":"), ke(c)))
      for (var Q = 0; Q < c.length; Q++) {
        U = c[Q];
        var ee = F + Fe(U, Q);
        Z += et(U, y, O, ee, V);
      }
    else if (((ee = $(c)), typeof ee == "function"))
      for (c = ee.call(c), Q = 0; !(U = c.next()).done; )
        (U = U.value), (ee = F + Fe(U, Q++)), (Z += et(U, y, O, ee, V));
    else if (U === "object")
      throw (
        ((y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Z;
  }
  function ft(c, y, O) {
    if (c == null) return c;
    var F = [],
      V = 0;
    return (
      et(c, F, "", "", function (U) {
        return y.call(O, U, V++);
      }),
      F
    );
  }
  function Le(c) {
    if (c._status === -1) {
      var y = c._result;
      (y = y()),
        y.then(
          function (O) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = O));
          },
          function (O) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = O));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = y));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ie = { current: null },
    S = { transition: null },
    M = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: S,
      ReactCurrentOwner: Pe,
    };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (D.Children = {
      map: ft,
      forEach: function (c, y, O) {
        ft(
          c,
          function () {
            y.apply(this, arguments);
          },
          O
        );
      },
      count: function (c) {
        var y = 0;
        return (
          ft(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          ft(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!gt(c))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return c;
      },
    }),
    (D.Component = Y),
    (D.Fragment = m),
    (D.Profiler = I),
    (D.PureComponent = at),
    (D.StrictMode = J),
    (D.Suspense = W),
    (D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
    (D.act = N),
    (D.cloneElement = function (c, y, O) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            "."
        );
      var F = Qe({}, c.props),
        V = c.key,
        U = c.ref,
        Z = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((U = y.ref), (Z = Pe.current)),
          y.key !== void 0 && (V = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps;
        for (ee in y)
          be.call(y, ee) &&
            !Ae.hasOwnProperty(ee) &&
            (F[ee] = y[ee] === void 0 && Q !== void 0 ? Q[ee] : y[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) F.children = O;
      else if (1 < ee) {
        Q = Array(ee);
        for (var _e = 0; _e < ee; _e++) Q[_e] = arguments[_e + 2];
        F.children = Q;
      }
      return { $$typeof: k, type: c.type, key: V, ref: U, props: F, _owner: Z };
    }),
    (D.createContext = function (c) {
      return (
        (c = {
          $$typeof: ae,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: H, _context: c }),
        (c.Consumer = c)
      );
    }),
    (D.createElement = Ke),
    (D.createFactory = function (c) {
      var y = Ke.bind(null, c);
      return (y.type = c), y;
    }),
    (D.createRef = function () {
      return { current: null };
    }),
    (D.forwardRef = function (c) {
      return { $$typeof: ce, render: c };
    }),
    (D.isValidElement = gt),
    (D.lazy = function (c) {
      return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (D.memo = function (c, y) {
      return { $$typeof: ge, type: c, compare: y === void 0 ? null : y };
    }),
    (D.startTransition = function (c) {
      var y = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = y;
      }
    }),
    (D.unstable_act = N),
    (D.useCallback = function (c, y) {
      return ie.current.useCallback(c, y);
    }),
    (D.useContext = function (c) {
      return ie.current.useContext(c);
    }),
    (D.useDebugValue = function () {}),
    (D.useDeferredValue = function (c) {
      return ie.current.useDeferredValue(c);
    }),
    (D.useEffect = function (c, y) {
      return ie.current.useEffect(c, y);
    }),
    (D.useId = function () {
      return ie.current.useId();
    }),
    (D.useImperativeHandle = function (c, y, O) {
      return ie.current.useImperativeHandle(c, y, O);
    }),
    (D.useInsertionEffect = function (c, y) {
      return ie.current.useInsertionEffect(c, y);
    }),
    (D.useLayoutEffect = function (c, y) {
      return ie.current.useLayoutEffect(c, y);
    }),
    (D.useMemo = function (c, y) {
      return ie.current.useMemo(c, y);
    }),
    (D.useReducer = function (c, y, O) {
      return ie.current.useReducer(c, y, O);
    }),
    (D.useRef = function (c) {
      return ie.current.useRef(c);
    }),
    (D.useState = function (c) {
      return ie.current.useState(c);
    }),
    (D.useSyncExternalStore = function (c, y, O) {
      return ie.current.useSyncExternalStore(c, y, O);
    }),
    (D.useTransition = function () {
      return ie.current.useTransition();
    }),
    (D.version = "18.3.1"),
    D
  );
}
var za;
function Ro() {
  return za || ((za = 1), (Po.exports = If())), Po.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja;
function Df() {
  if (ja) return wr;
  ja = 1;
  var k = Ro(),
    R = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    J = Object.prototype.hasOwnProperty,
    I = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(ce, W, ge) {
    var me,
      ne = {},
      $ = null,
      We = null;
    ge !== void 0 && ($ = "" + ge),
      W.key !== void 0 && ($ = "" + W.key),
      W.ref !== void 0 && (We = W.ref);
    for (me in W) J.call(W, me) && !H.hasOwnProperty(me) && (ne[me] = W[me]);
    if (ce && ce.defaultProps)
      for (me in ((W = ce.defaultProps), W))
        ne[me] === void 0 && (ne[me] = W[me]);
    return {
      $$typeof: R,
      type: ce,
      key: $,
      ref: We,
      props: ne,
      _owner: I.current,
    };
  }
  return (wr.Fragment = m), (wr.jsx = ae), (wr.jsxs = ae), wr;
}
var Aa;
function Ff() {
  return Aa || ((Aa = 1), (No.exports = Df())), No.exports;
}
var h = Ff(),
  sn = Ro(),
  Ll = {},
  zo = { exports: {} },
  De = {},
  jo = { exports: {} },
  Ao = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function _f() {
  return (
    La ||
      ((La = 1),
      (function (k) {
        function R(S, M) {
          var N = S.length;
          S.push(M);
          e: for (; 0 < N; ) {
            var c = (N - 1) >>> 1,
              y = S[c];
            if (0 < I(y, M)) (S[c] = M), (S[N] = y), (N = c);
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function J(S) {
          if (S.length === 0) return null;
          var M = S[0],
            N = S.pop();
          if (N !== M) {
            S[0] = N;
            e: for (var c = 0, y = S.length, O = y >>> 1; c < O; ) {
              var F = 2 * (c + 1) - 1,
                V = S[F],
                U = F + 1,
                Z = S[U];
              if (0 > I(V, N))
                U < y && 0 > I(Z, V)
                  ? ((S[c] = Z), (S[U] = N), (c = U))
                  : ((S[c] = V), (S[F] = N), (c = F));
              else if (U < y && 0 > I(Z, N)) (S[c] = Z), (S[U] = N), (c = U);
              else break e;
            }
          }
          return M;
        }
        function I(S, M) {
          var N = S.sortIndex - M.sortIndex;
          return N !== 0 ? N : S.id - M.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var H = performance;
          k.unstable_now = function () {
            return H.now();
          };
        } else {
          var ae = Date,
            ce = ae.now();
          k.unstable_now = function () {
            return ae.now() - ce;
          };
        }
        var W = [],
          ge = [],
          me = 1,
          ne = null,
          $ = 3,
          We = !1,
          Qe = !1,
          b = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function $e(S) {
          for (var M = m(ge); M !== null; ) {
            if (M.callback === null) J(ge);
            else if (M.startTime <= S)
              J(ge), (M.sortIndex = M.expirationTime), R(W, M);
            else break;
            M = m(ge);
          }
        }
        function ke(S) {
          if (((b = !1), $e(S), !Qe))
            if (m(W) !== null) (Qe = !0), Le(be);
            else {
              var M = m(ge);
              M !== null && ie(ke, M.startTime - S);
            }
        }
        function be(S, M) {
          (Qe = !1), b && ((b = !1), yt(Ke), (Ke = -1)), (We = !0);
          var N = $;
          try {
            for (
              $e(M), ne = m(W);
              ne !== null && (!(ne.expirationTime > M) || (S && !Jt()));

            ) {
              var c = ne.callback;
              if (typeof c == "function") {
                (ne.callback = null), ($ = ne.priorityLevel);
                var y = c(ne.expirationTime <= M);
                (M = k.unstable_now()),
                  typeof y == "function"
                    ? (ne.callback = y)
                    : ne === m(W) && J(W),
                  $e(M);
              } else J(W);
              ne = m(W);
            }
            if (ne !== null) var O = !0;
            else {
              var F = m(ge);
              F !== null && ie(ke, F.startTime - M), (O = !1);
            }
            return O;
          } finally {
            (ne = null), ($ = N), (We = !1);
          }
        }
        var Pe = !1,
          Ae = null,
          Ke = -1,
          zt = 5,
          gt = -1;
        function Jt() {
          return !(k.unstable_now() - gt < zt);
        }
        function ct() {
          if (Ae !== null) {
            var S = k.unstable_now();
            gt = S;
            var M = !0;
            try {
              M = Ae(!0, S);
            } finally {
              M ? Fe() : ((Pe = !1), (Ae = null));
            }
          } else Pe = !1;
        }
        var Fe;
        if (typeof at == "function")
          Fe = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var et = new MessageChannel(),
            ft = et.port2;
          (et.port1.onmessage = ct),
            (Fe = function () {
              ft.postMessage(null);
            });
        } else
          Fe = function () {
            Y(ct, 0);
          };
        function Le(S) {
          (Ae = S), Pe || ((Pe = !0), Fe());
        }
        function ie(S, M) {
          Ke = Y(function () {
            S(k.unstable_now());
          }, M);
        }
        (k.unstable_IdlePriority = 5),
          (k.unstable_ImmediatePriority = 1),
          (k.unstable_LowPriority = 4),
          (k.unstable_NormalPriority = 3),
          (k.unstable_Profiling = null),
          (k.unstable_UserBlockingPriority = 2),
          (k.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (k.unstable_continueExecution = function () {
            Qe || We || ((Qe = !0), Le(be));
          }),
          (k.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (zt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (k.unstable_getCurrentPriorityLevel = function () {
            return $;
          }),
          (k.unstable_getFirstCallbackNode = function () {
            return m(W);
          }),
          (k.unstable_next = function (S) {
            switch ($) {
              case 1:
              case 2:
              case 3:
                var M = 3;
                break;
              default:
                M = $;
            }
            var N = $;
            $ = M;
            try {
              return S();
            } finally {
              $ = N;
            }
          }),
          (k.unstable_pauseExecution = function () {}),
          (k.unstable_requestPaint = function () {}),
          (k.unstable_runWithPriority = function (S, M) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var N = $;
            $ = S;
            try {
              return M();
            } finally {
              $ = N;
            }
          }),
          (k.unstable_scheduleCallback = function (S, M, N) {
            var c = k.unstable_now();
            switch (
              (typeof N == "object" && N !== null
                ? ((N = N.delay),
                  (N = typeof N == "number" && 0 < N ? c + N : c))
                : (N = c),
              S)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = N + y),
              (S = {
                id: me++,
                callback: M,
                priorityLevel: S,
                startTime: N,
                expirationTime: y,
                sortIndex: -1,
              }),
              N > c
                ? ((S.sortIndex = N),
                  R(ge, S),
                  m(W) === null &&
                    S === m(ge) &&
                    (b ? (yt(Ke), (Ke = -1)) : (b = !0), ie(ke, N - c)))
                : ((S.sortIndex = y), R(W, S), Qe || We || ((Qe = !0), Le(be))),
              S
            );
          }),
          (k.unstable_shouldYield = Jt),
          (k.unstable_wrapCallback = function (S) {
            var M = $;
            return function () {
              var N = $;
              $ = M;
              try {
                return S.apply(this, arguments);
              } finally {
                $ = N;
              }
            };
          });
      })(Ao)),
    Ao
  );
}
var Ra;
function Vf() {
  return Ra || ((Ra = 1), (jo.exports = _f())), jo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ma;
function Uf() {
  if (Ma) return De;
  Ma = 1;
  var k = Ro(),
    R = Vf();
  function m(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var J = new Set(),
    I = {};
  function H(e, t) {
    ae(e, t), ae(e + "Capture", t);
  }
  function ae(e, t) {
    for (I[e] = t, e = 0; e < t.length; e++) J.add(t[e]);
  }
  var ce = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    W = Object.prototype.hasOwnProperty,
    ge =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    me = {},
    ne = {};
  function $(e) {
    return W.call(ne, e)
      ? !0
      : W.call(me, e)
      ? !1
      : ge.test(e)
      ? (ne[e] = !0)
      : ((me[e] = !0), !1);
  }
  function We(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Qe(e, t, n, r) {
    if (t === null || typeof t > "u" || We(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function b(e, t, n, r, l, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o);
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Y[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Y[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      Y[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Y[e] = new b(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Y[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Y[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Y[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Y[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Y[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, at);
      Y[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, at);
        Y[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, at);
      Y[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new b(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function $e(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Qe(t, n, l, r) && (n = null),
      r || l === null
        ? $(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ke = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Pe = Symbol.for("react.portal"),
    Ae = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    zt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Jt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function M(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var N = Object.assign,
    c;
  function y(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var O = !1;
  function F(e, t) {
    if (!e || O) return "";
    O = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (p) {
            r = p;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];

        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u])) {
                  var s =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (O = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = F(e.type, !1)), e;
      case 11:
        return (e = F(e.type.render, !1)), e;
      case 1:
        return (e = F(e.type, !0)), e;
      default:
        return "";
    }
  }
  function U(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ae:
        return "Fragment";
      case Pe:
        return "Portal";
      case zt:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Jt:
          return (e.displayName || "Context") + ".Consumer";
        case gt:
          return (e._context.displayName || "Context") + ".Provider";
        case ct:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ft:
          return (
            (t = e.displayName || null), t !== null ? t : U(e.type) || "Memo"
          );
        case Le:
          (t = e._payload), (e = e._init);
          try {
            return U(e(t));
          } catch {}
      }
    return null;
  }
  function Z(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return U(t);
      case 8:
        return t === Ke ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Q(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ee(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function _e(e) {
    var t = ee(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            (r = "" + o), i.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function xr(e) {
    e._valueTracker || (e._valueTracker = _e(e));
  }
  function Mo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ee(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function To(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Q(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Oo(e, t) {
    (t = t.checked), t != null && $e(e, "checked", t, !1);
  }
  function Ml(e, t) {
    Oo(e, t);
    var n = Q(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Tl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Tl(e, t.type, Q(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Io(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Tl(e, t, n) {
    (t !== "number" || kr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var On = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Q(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return N({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Do(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (On(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Q(n) };
  }
  function Fo(e, t) {
    var n = Q(t.value),
      r = Q(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function _o(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Vo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Vo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Sr,
    Uo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Sr = Sr || document.createElement("div"),
            Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Sr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function In(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    _a = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function (e) {
    _a.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]);
    });
  });
  function Bo(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ho(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bo(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Va = N(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Dl(e, t) {
    if (t) {
      if (Va[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _l = null;
  function Vl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ul = null,
    cn = null,
    fn = null;
  function Wo(e) {
    if ((e = lr(e))) {
      if (typeof Ul != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), Ul(e.stateNode, e.type, t));
    }
  }
  function Qo(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function Ko() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Wo(e), t)) for (e = 0; e < t.length; e++) Wo(t[e]);
    }
  }
  function Yo(e, t) {
    return e(t);
  }
  function Jo() {}
  var Bl = !1;
  function Zo(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Yo(e, t, n);
    } finally {
      (Bl = !1), (cn !== null || fn !== null) && (Jo(), Ko());
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Kr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (ce)
    try {
      var _n = {};
      Object.defineProperty(_n, "passive", {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener("test", _n, _n),
        window.removeEventListener("test", _n, _n);
    } catch {
      Hl = !1;
    }
  function Ua(e, t, n, r, l, i, o, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (g) {
      this.onError(g);
    }
  }
  var Vn = !1,
    Er = null,
    Cr = !1,
    Wl = null,
    Ba = {
      onError: function (e) {
        (Vn = !0), (Er = e);
      },
    };
  function Ha(e, t, n, r, l, i, o, u, s) {
    (Vn = !1), (Er = null), Ua.apply(Ba, arguments);
  }
  function Wa(e, t, n, r, l, i, o, u, s) {
    if ((Ha.apply(this, arguments), Vn)) {
      if (Vn) {
        var p = Er;
        (Vn = !1), (Er = null);
      } else throw Error(m(198));
      Cr || ((Cr = !0), (Wl = p));
    }
  }
  function Zt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Xo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Go(e) {
    if (Zt(e) !== e) throw Error(m(188));
  }
  function Qa(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Zt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Go(l), e;
          if (i === r) return Go(l), t;
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (u === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              (o = !0), (n = i), (r = l);
              break;
            }
            if (u === r) {
              (o = !0), (r = i), (n = l);
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function qo(e) {
    return (e = Qa(e)), e !== null ? $o(e) : null;
  }
  function $o(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = $o(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bo = R.unstable_scheduleCallback,
    eu = R.unstable_cancelCallback,
    Ka = R.unstable_shouldYield,
    Ya = R.unstable_requestPaint,
    ue = R.unstable_now,
    Ja = R.unstable_getCurrentPriorityLevel,
    Ql = R.unstable_ImmediatePriority,
    tu = R.unstable_UserBlockingPriority,
    Nr = R.unstable_NormalPriority,
    Za = R.unstable_LowPriority,
    nu = R.unstable_IdlePriority,
    Pr = null,
    dt = null;
  function Xa(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : $a,
    Ga = Math.log,
    qa = Math.LN2;
  function $a(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ga(e) / qa) | 0)) | 0;
  }
  var zr = 64,
    jr = 4194304;
  function Un(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ar(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Un(u)) : ((i &= o), i !== 0 && (r = Un(i)));
    } else (o = n & ~l), o !== 0 ? (r = Un(o)) : i !== 0 && (r = Un(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function ba(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ec(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var o = 31 - tt(i),
        u = 1 << o,
        s = l[o];
      s === -1
        ? (!(u & n) || u & r) && (l[o] = ba(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u);
    }
  }
  function Kl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ru() {
    var e = zr;
    return (zr <<= 1), !(zr & 4194240) && (zr = 64), e;
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Bn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - tt(t)),
      (e[t] = n);
  }
  function tc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - tt(n),
        i = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
  }
  function Jl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - tt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var K = 0;
  function lu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var iu,
    Zl,
    ou,
    uu,
    su,
    Xl = !1,
    Lr = [],
    jt = null,
    At = null,
    Lt = null,
    Hn = new Map(),
    Wn = new Map(),
    Rt = [],
    nc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function au(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jt = null;
        break;
      case "dragenter":
      case "dragleave":
        At = null;
        break;
      case "mouseover":
      case "mouseout":
        Lt = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wn.delete(t.pointerId);
    }
  }
  function Qn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function rc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (jt = Qn(jt, e, t, n, r, l)), !0;
      case "dragenter":
        return (At = Qn(At, e, t, n, r, l)), !0;
      case "mouseover":
        return (Lt = Qn(Lt, e, t, n, r, l)), !0;
      case "pointerover":
        var i = l.pointerId;
        return Hn.set(i, Qn(Hn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (i = l.pointerId), Wn.set(i, Qn(Wn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function cu(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Zt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xo(n)), t !== null)) {
            (e.blockedOn = t),
              su(e.priority, function () {
                ou(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (_l = r), n.target.dispatchEvent(r), (_l = null);
      } else return (t = lr(n)), t !== null && Zl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function fu(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function lc() {
    (Xl = !1),
      jt !== null && Rr(jt) && (jt = null),
      At !== null && Rr(At) && (At = null),
      Lt !== null && Rr(Lt) && (Lt = null),
      Hn.forEach(fu),
      Wn.forEach(fu);
  }
  function Kn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Xl ||
        ((Xl = !0),
        R.unstable_scheduleCallback(R.unstable_NormalPriority, lc)));
  }
  function Yn(e) {
    function t(l) {
      return Kn(l, e);
    }
    if (0 < Lr.length) {
      Kn(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      jt !== null && Kn(jt, e),
        At !== null && Kn(At, e),
        Lt !== null && Kn(Lt, e),
        Hn.forEach(t),
        Wn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      (r = Rt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
      cu(n), n.blockedOn === null && Rt.shift();
  }
  var dn = ke.ReactCurrentBatchConfig,
    Mr = !0;
  function ic(e, t, n, r) {
    var l = K,
      i = dn.transition;
    dn.transition = null;
    try {
      (K = 1), Gl(e, t, n, r);
    } finally {
      (K = l), (dn.transition = i);
    }
  }
  function oc(e, t, n, r) {
    var l = K,
      i = dn.transition;
    dn.transition = null;
    try {
      (K = 4), Gl(e, t, n, r);
    } finally {
      (K = l), (dn.transition = i);
    }
  }
  function Gl(e, t, n, r) {
    if (Mr) {
      var l = ql(e, t, n, r);
      if (l === null) mi(e, t, r, Tr, n), au(e, r);
      else if (rc(l, e, t, n, r)) r.stopPropagation();
      else if ((au(e, r), t & 4 && -1 < nc.indexOf(e))) {
        for (; l !== null; ) {
          var i = lr(l);
          if (
            (i !== null && iu(i),
            (i = ql(e, t, n, r)),
            i === null && mi(e, t, r, Tr, n),
            i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else mi(e, t, r, null, n);
    }
  }
  var Tr = null;
  function ql(e, t, n, r) {
    if (((Tr = null), (e = Vl(r)), (e = Xt(e)), e !== null))
      if (((t = Zt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Xo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Tr = e), null;
  }
  function du(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ja()) {
          case Ql:
            return 1;
          case tu:
            return 4;
          case Nr:
          case Za:
            return 16;
          case nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    $l = null,
    Or = null;
  function pu() {
    if (Or) return Or;
    var e,
      t = $l,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ir(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Dr() {
    return !0;
  }
  function mu() {
    return !1;
  }
  function Ve(e) {
    function t(n, r, l, i, o) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null);
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Dr
          : mu),
        (this.isPropagationStopped = mu),
        this
      );
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Dr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Dr));
        },
        persist: function () {},
        isPersistent: Dr,
      }),
      t
    );
  }
  var pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bl = Ve(pn),
    Jn = N({}, pn, { view: 0, detail: 0 }),
    uc = Ve(Jn),
    ei,
    ti,
    Zn,
    Fr = N({}, Jn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ri,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Zn &&
              (Zn && e.type === "mousemove"
                ? ((ei = e.screenX - Zn.screenX), (ti = e.screenY - Zn.screenY))
                : (ti = ei = 0),
              (Zn = e)),
            ei);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ti;
      },
    }),
    hu = Ve(Fr),
    sc = N({}, Fr, { dataTransfer: 0 }),
    ac = Ve(sc),
    cc = N({}, Jn, { relatedTarget: 0 }),
    ni = Ve(cc),
    fc = N({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dc = Ve(fc),
    pc = N({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    mc = Ve(pc),
    hc = N({}, pn, { data: 0 }),
    vu = Ve(hc),
    vc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    yc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gc[e])
      ? !!t[e]
      : !1;
  }
  function ri() {
    return wc;
  }
  var xc = N({}, Jn, {
      key: function (e) {
        if (e.key) {
          var t = vc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? yc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ri,
      charCode: function (e) {
        return e.type === "keypress" ? Ir(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ir(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    kc = Ve(xc),
    Sc = N({}, Fr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yu = Ve(Sc),
    Ec = N({}, Jn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ri,
    }),
    Cc = Ve(Ec),
    Nc = N({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pc = Ve(Nc),
    zc = N({}, Fr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    jc = Ve(zc),
    Ac = [9, 13, 27, 32],
    li = ce && "CompositionEvent" in window,
    Xn = null;
  ce && "documentMode" in document && (Xn = document.documentMode);
  var Lc = ce && "TextEvent" in window && !Xn,
    gu = ce && (!li || (Xn && 8 < Xn && 11 >= Xn)),
    wu = " ",
    xu = !1;
  function ku(e, t) {
    switch (e) {
      case "keyup":
        return Ac.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Su(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var mn = !1;
  function Rc(e, t) {
    switch (e) {
      case "compositionend":
        return Su(t);
      case "keypress":
        return t.which !== 32 ? null : ((xu = !0), wu);
      case "textInput":
        return (e = t.data), e === wu && xu ? null : e;
      default:
        return null;
    }
  }
  function Mc(e, t) {
    if (mn)
      return e === "compositionend" || (!li && ku(e, t))
        ? ((e = pu()), (Or = $l = Mt = null), (mn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return gu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tc[e.type] : t === "textarea";
  }
  function Cu(e, t, n, r) {
    Qo(r),
      (t = Hr(t, "onChange")),
      0 < t.length &&
        ((n = new bl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Gn = null,
    qn = null;
  function Oc(e) {
    Hu(e, 0);
  }
  function _r(e) {
    var t = wn(e);
    if (Mo(t)) return e;
  }
  function Ic(e, t) {
    if (e === "change") return t;
  }
  var Nu = !1;
  if (ce) {
    var ii;
    if (ce) {
      var oi = "oninput" in document;
      if (!oi) {
        var Pu = document.createElement("div");
        Pu.setAttribute("oninput", "return;"),
          (oi = typeof Pu.oninput == "function");
      }
      ii = oi;
    } else ii = !1;
    Nu = ii && (!document.documentMode || 9 < document.documentMode);
  }
  function zu() {
    Gn && (Gn.detachEvent("onpropertychange", ju), (qn = Gn = null));
  }
  function ju(e) {
    if (e.propertyName === "value" && _r(qn)) {
      var t = [];
      Cu(t, qn, e, Vl(e)), Zo(Oc, t);
    }
  }
  function Dc(e, t, n) {
    e === "focusin"
      ? (zu(), (Gn = t), (qn = n), Gn.attachEvent("onpropertychange", ju))
      : e === "focusout" && zu();
  }
  function Fc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return _r(qn);
  }
  function _c(e, t) {
    if (e === "click") return _r(t);
  }
  function Vc(e, t) {
    if (e === "input" || e === "change") return _r(t);
  }
  function Uc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Uc;
  function $n(e, t) {
    if (nt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!W.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Au(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lu(e, t) {
    var n = Au(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Au(n);
    }
  }
  function Ru(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ru(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Mu() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = kr(e.document);
    }
    return t;
  }
  function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Bc(e) {
    var t = Mu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ru(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ui(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            i = Math.min(r.start, l);
          (r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = Lu(n, i));
          var o = Lu(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Hc = ce && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    si = null,
    bn = null,
    ai = !1;
  function Tu(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ai ||
      hn == null ||
      hn !== kr(r) ||
      ((r = hn),
      "selectionStart" in r && ui(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && $n(bn, r)) ||
        ((bn = r),
        (r = Hr(si, "onSelect")),
        0 < r.length &&
          ((t = new bl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = hn))));
  }
  function Vr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var vn = {
      animationend: Vr("Animation", "AnimationEnd"),
      animationiteration: Vr("Animation", "AnimationIteration"),
      animationstart: Vr("Animation", "AnimationStart"),
      transitionend: Vr("Transition", "TransitionEnd"),
    },
    ci = {},
    Ou = {};
  ce &&
    ((Ou = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Ur(e) {
    if (ci[e]) return ci[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ou) return (ci[e] = t[n]);
    return e;
  }
  var Iu = Ur("animationend"),
    Du = Ur("animationiteration"),
    Fu = Ur("animationstart"),
    _u = Ur("transitionend"),
    Vu = new Map(),
    Uu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Tt(e, t) {
    Vu.set(e, t), H(t, [e]);
  }
  for (var fi = 0; fi < Uu.length; fi++) {
    var di = Uu[fi],
      Wc = di.toLowerCase(),
      Qc = di[0].toUpperCase() + di.slice(1);
    Tt(Wc, "on" + Qc);
  }
  Tt(Iu, "onAnimationEnd"),
    Tt(Du, "onAnimationIteration"),
    Tt(Fu, "onAnimationStart"),
    Tt("dblclick", "onDoubleClick"),
    Tt("focusin", "onFocus"),
    Tt("focusout", "onBlur"),
    Tt(_u, "onTransitionEnd"),
    ae("onMouseEnter", ["mouseout", "mouseover"]),
    ae("onMouseLeave", ["mouseout", "mouseover"]),
    ae("onPointerEnter", ["pointerout", "pointerover"]),
    ae("onPointerLeave", ["pointerout", "pointerover"]),
    H(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    H(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    H("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    H(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    H(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    H(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Kc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(er)
    );
  function Bu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Wa(r, t, void 0, e), (e.currentTarget = null);
  }
  function Hu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              s = u.instance,
              p = u.currentTarget;
            if (((u = u.listener), s !== i && l.isPropagationStopped()))
              break e;
            Bu(l, u, p), (i = s);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (s = u.instance),
              (p = u.currentTarget),
              (u = u.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            Bu(l, u, p), (i = s);
          }
      }
    }
    if (Cr) throw ((e = Wl), (Cr = !1), (Wl = null), e);
  }
  function G(e, t) {
    var n = t[xi];
    n === void 0 && (n = t[xi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Wu(t, e, 2, !1), n.add(r));
  }
  function pi(e, t, n) {
    var r = 0;
    t && (r |= 4), Wu(n, e, r, t);
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Br]) {
      (e[Br] = !0),
        J.forEach(function (n) {
          n !== "selectionchange" && (Kc.has(n) || pi(n, !1, e), pi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), pi("selectionchange", !1, t));
    }
  }
  function Wu(e, t, n, r) {
    switch (du(t)) {
      case 1:
        var l = ic;
        break;
      case 4:
        l = oc;
        break;
      default:
        l = Gl;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Hl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function mi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (((o = Xt(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Zo(function () {
      var p = i,
        g = Vl(n),
        w = [];
      e: {
        var v = Vu.get(e);
        if (v !== void 0) {
          var E = bl,
            P = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = kc;
              break;
            case "focusin":
              (P = "focus"), (E = ni);
              break;
            case "focusout":
              (P = "blur"), (E = ni);
              break;
            case "beforeblur":
            case "afterblur":
              E = ni;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = ac;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Cc;
              break;
            case Iu:
            case Du:
            case Fu:
              E = dc;
              break;
            case _u:
              E = Pc;
              break;
            case "scroll":
              E = uc;
              break;
            case "wheel":
              E = jc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = mc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = yu;
          }
          var z = (t & 4) !== 0,
            se = !z && e === "scroll",
            f = z ? (v !== null ? v + "Capture" : null) : v;
          z = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var x = d.stateNode;
            if (
              (d.tag === 5 &&
                x !== null &&
                ((d = x),
                f !== null &&
                  ((x = Fn(a, f)), x != null && z.push(nr(a, x, d)))),
              se)
            )
              break;
            a = a.return;
          }
          0 < z.length &&
            ((v = new E(v, P, null, n, g)), w.push({ event: v, listeners: z }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            v &&
              n !== _l &&
              (P = n.relatedTarget || n.fromElement) &&
              (Xt(P) || P[wt]))
          )
            break e;
          if (
            (E || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            E
              ? ((P = n.relatedTarget || n.toElement),
                (E = p),
                (P = P ? Xt(P) : null),
                P !== null &&
                  ((se = Zt(P)), P !== se || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((E = null), (P = p)),
            E !== P)
          ) {
            if (
              ((z = hu),
              (x = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = yu),
                (x = "onPointerLeave"),
                (f = "onPointerEnter"),
                (a = "pointer")),
              (se = E == null ? v : wn(E)),
              (d = P == null ? v : wn(P)),
              (v = new z(x, a + "leave", E, n, g)),
              (v.target = se),
              (v.relatedTarget = d),
              (x = null),
              Xt(g) === p &&
                ((z = new z(f, a + "enter", P, n, g)),
                (z.target = d),
                (z.relatedTarget = se),
                (x = z)),
              (se = x),
              E && P)
            )
              t: {
                for (z = E, f = P, a = 0, d = z; d; d = yn(d)) a++;
                for (d = 0, x = f; x; x = yn(x)) d++;
                for (; 0 < a - d; ) (z = yn(z)), a--;
                for (; 0 < d - a; ) (f = yn(f)), d--;
                for (; a--; ) {
                  if (z === f || (f !== null && z === f.alternate)) break t;
                  (z = yn(z)), (f = yn(f));
                }
                z = null;
              }
            else z = null;
            E !== null && Qu(w, v, E, z, !1),
              P !== null && se !== null && Qu(w, se, P, z, !0);
          }
        }
        e: {
          if (
            ((v = p ? wn(p) : window),
            (E = v.nodeName && v.nodeName.toLowerCase()),
            E === "select" || (E === "input" && v.type === "file"))
          )
            var j = Ic;
          else if (Eu(v))
            if (Nu) j = Vc;
            else {
              j = Fc;
              var A = Dc;
            }
          else
            (E = v.nodeName) &&
              E.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (j = _c);
          if (j && (j = j(e, p))) {
            Cu(w, j, n, g);
            break e;
          }
          A && A(e, v, p),
            e === "focusout" &&
              (A = v._wrapperState) &&
              A.controlled &&
              v.type === "number" &&
              Tl(v, "number", v.value);
        }
        switch (((A = p ? wn(p) : window), e)) {
          case "focusin":
            (Eu(A) || A.contentEditable === "true") &&
              ((hn = A), (si = p), (bn = null));
            break;
          case "focusout":
            bn = si = hn = null;
            break;
          case "mousedown":
            ai = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ai = !1), Tu(w, n, g);
            break;
          case "selectionchange":
            if (Hc) break;
          case "keydown":
          case "keyup":
            Tu(w, n, g);
        }
        var L;
        if (li)
          e: {
            switch (e) {
              case "compositionstart":
                var T = "onCompositionStart";
                break e;
              case "compositionend":
                T = "onCompositionEnd";
                break e;
              case "compositionupdate":
                T = "onCompositionUpdate";
                break e;
            }
            T = void 0;
          }
        else
          mn
            ? ku(e, n) && (T = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (T = "onCompositionStart");
        T &&
          (gu &&
            n.locale !== "ko" &&
            (mn || T !== "onCompositionStart"
              ? T === "onCompositionEnd" && mn && (L = pu())
              : ((Mt = g),
                ($l = "value" in Mt ? Mt.value : Mt.textContent),
                (mn = !0))),
          (A = Hr(p, T)),
          0 < A.length &&
            ((T = new vu(T, e, null, n, g)),
            w.push({ event: T, listeners: A }),
            L ? (T.data = L) : ((L = Su(n)), L !== null && (T.data = L)))),
          (L = Lc ? Rc(e, n) : Mc(e, n)) &&
            ((p = Hr(p, "onBeforeInput")),
            0 < p.length &&
              ((g = new vu("onBeforeInput", "beforeinput", null, n, g)),
              w.push({ event: g, listeners: p }),
              (g.data = L)));
      }
      Hu(w, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Fn(e, n)),
        i != null && r.unshift(nr(e, i, l)),
        (i = Fn(e, t)),
        i != null && r.push(nr(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        p = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
        p !== null &&
        ((u = p),
        l
          ? ((s = Fn(n, i)), s != null && o.unshift(nr(n, s, u)))
          : l || ((s = Fn(n, i)), s != null && o.push(nr(n, s, u)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Yc = /\r\n?/g,
    Jc = /\u0000|\uFFFD/g;
  function Ku(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Yc,
        `
`
      )
      .replace(Jc, "");
  }
  function Wr(e, t, n) {
    if (((t = Ku(t)), Ku(e) !== t && n)) throw Error(m(425));
  }
  function Qr() {}
  var hi = null,
    vi = null;
  function yi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var gi = typeof setTimeout == "function" ? setTimeout : void 0,
    Zc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yu = typeof Promise == "function" ? Promise : void 0,
    Xc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yu < "u"
        ? function (e) {
            return Yu.resolve(null).then(e).catch(Gc);
          }
        : gi;
  function Gc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), Yn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Yn(t);
  }
  function Ot(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ju(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var gn = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + gn,
    rr = "__reactProps$" + gn,
    wt = "__reactContainer$" + gn,
    xi = "__reactEvents$" + gn,
    qc = "__reactListeners$" + gn,
    $c = "__reactHandles$" + gn;
  function Xt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[wt] || n[pt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ju(e); e !== null; ) {
            if ((n = e[pt])) return n;
            e = Ju(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Kr(e) {
    return e[rr] || null;
  }
  var ki = [],
    xn = -1;
  function It(e) {
    return { current: e };
  }
  function q(e) {
    0 > xn || ((e.current = ki[xn]), (ki[xn] = null), xn--);
  }
  function X(e, t) {
    xn++, (ki[xn] = e.current), (e.current = t);
  }
  var Dt = {},
    Se = It(Dt),
    Re = It(!1),
    Gt = Dt;
  function kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Me(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Yr() {
    q(Re), q(Se);
  }
  function Zu(e, t, n) {
    if (Se.current !== Dt) throw Error(m(168));
    X(Se, t), X(Re, n);
  }
  function Xu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, Z(e) || "Unknown", l));
    return N({}, n, r);
  }
  function Jr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Dt),
      (Gt = Se.current),
      X(Se, e),
      X(Re, Re.current),
      !0
    );
  }
  function Gu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n
      ? ((e = Xu(e, t, Gt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        q(Re),
        q(Se),
        X(Se, e))
      : q(Re),
      X(Re, n);
  }
  var xt = null,
    Zr = !1,
    Si = !1;
  function qu(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function bc(e) {
    (Zr = !0), qu(e);
  }
  function Ft() {
    if (!Si && xt !== null) {
      Si = !0;
      var e = 0,
        t = K;
      try {
        var n = xt;
        for (K = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (xt = null), (Zr = !1);
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), bo(Ql, Ft), l);
      } finally {
        (K = t), (Si = !1);
      }
    }
    return null;
  }
  var Sn = [],
    En = 0,
    Xr = null,
    Gr = 0,
    Ye = [],
    Je = 0,
    qt = null,
    kt = 1,
    St = "";
  function $t(e, t) {
    (Sn[En++] = Gr), (Sn[En++] = Xr), (Xr = e), (Gr = t);
  }
  function $u(e, t, n) {
    (Ye[Je++] = kt), (Ye[Je++] = St), (Ye[Je++] = qt), (qt = e);
    var r = kt;
    e = St;
    var l = 32 - tt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - tt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      (i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (kt = (1 << (32 - tt(t) + l)) | (n << l) | r),
        (St = i + e);
    } else (kt = (1 << i) | (n << l) | r), (St = e);
  }
  function Ei(e) {
    e.return !== null && ($t(e, 1), $u(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Xr; )
      (Xr = Sn[--En]), (Sn[En] = null), (Gr = Sn[--En]), (Sn[En] = null);
    for (; e === qt; )
      (qt = Ye[--Je]),
        (Ye[Je] = null),
        (St = Ye[--Je]),
        (Ye[Je] = null),
        (kt = Ye[--Je]),
        (Ye[Je] = null);
  }
  var Ue = null,
    Be = null,
    te = !1,
    rt = null;
  function bu(e, t) {
    var n = qe(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function es(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ue = e), (Be = Ot(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ue = e), (Be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = qt !== null ? { id: kt, overflow: St } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = qe(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ue = e),
              (Be = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Pi(e) {
    if (te) {
      var t = Be;
      if (t) {
        var n = t;
        if (!es(e, t)) {
          if (Ni(e)) throw Error(m(418));
          t = Ot(n.nextSibling);
          var r = Ue;
          t && es(e, t)
            ? bu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ue = e));
        }
      } else {
        if (Ni(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (te = !1), (Ue = e);
      }
    }
  }
  function ts(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ue = e;
  }
  function qr(e) {
    if (e !== Ue) return !1;
    if (!te) return ts(e), (te = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps))),
      t && (t = Be))
    ) {
      if (Ni(e)) throw (ns(), Error(m(418)));
      for (; t; ) bu(e, t), (t = Ot(t.nextSibling));
    }
    if ((ts(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Be = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else Be = Ue ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ns() {
    for (var e = Be; e; ) e = Ot(e.nextSibling);
  }
  function Cn() {
    (Be = Ue = null), (te = !1);
  }
  function zi(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  var ef = ke.ReactCurrentBatchConfig;
  function ir(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var u = l.refs;
              o === null ? delete u[i] : (u[i] = o);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function $r(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function rs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ls(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) t(f, a), (a = a.sibling);
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
      return f;
    }
    function l(f, a) {
      return (f = Kt(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function i(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, a, d, x) {
      return a === null || a.tag !== 6
        ? ((a = wo(d, f.mode, x)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, x) {
      var j = d.type;
      return j === Ae
        ? g(f, a, d.props.children, x, d.key)
        : a !== null &&
          (a.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === Le &&
              rs(j) === a.type))
        ? ((x = l(a, d.props)), (x.ref = ir(f, a, d)), (x.return = f), x)
        : ((x = Sl(d.type, d.key, d.props, null, f.mode, x)),
          (x.ref = ir(f, a, d)),
          (x.return = f),
          x);
    }
    function p(f, a, d, x) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = xo(d, f.mode, x)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function g(f, a, d, x, j) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, x, j)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function w(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = wo("" + a, f.mode, d)), (a.return = f), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = Sl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ir(f, null, a)),
              (d.return = f),
              d
            );
          case Pe:
            return (a = xo(a, f.mode, d)), (a.return = f), a;
          case Le:
            var x = a._init;
            return w(f, x(a._payload), d);
        }
        if (On(a) || M(a))
          return (a = un(a, f.mode, d, null)), (a.return = f), a;
        $r(f, a);
      }
      return null;
    }
    function v(f, a, d, x) {
      var j = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return j !== null ? null : u(f, a, "" + d, x);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === j ? s(f, a, d, x) : null;
          case Pe:
            return d.key === j ? p(f, a, d, x) : null;
          case Le:
            return (j = d._init), v(f, a, j(d._payload), x);
        }
        if (On(d) || M(d)) return j !== null ? null : g(f, a, d, x, null);
        $r(f, d);
      }
      return null;
    }
    function E(f, a, d, x, j) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return (f = f.get(d) || null), u(a, f, "" + x, j);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case be:
            return (
              (f = f.get(x.key === null ? d : x.key) || null), s(a, f, x, j)
            );
          case Pe:
            return (
              (f = f.get(x.key === null ? d : x.key) || null), p(a, f, x, j)
            );
          case Le:
            var A = x._init;
            return E(f, a, d, A(x._payload), j);
        }
        if (On(x) || M(x)) return (f = f.get(d) || null), g(a, f, x, j, null);
        $r(a, x);
      }
      return null;
    }
    function P(f, a, d, x) {
      for (
        var j = null, A = null, L = a, T = (a = 0), ye = null;
        L !== null && T < d.length;
        T++
      ) {
        L.index > T ? ((ye = L), (L = null)) : (ye = L.sibling);
        var B = v(f, L, d[T], x);
        if (B === null) {
          L === null && (L = ye);
          break;
        }
        e && L && B.alternate === null && t(f, L),
          (a = i(B, a, T)),
          A === null ? (j = B) : (A.sibling = B),
          (A = B),
          (L = ye);
      }
      if (T === d.length) return n(f, L), te && $t(f, T), j;
      if (L === null) {
        for (; T < d.length; T++)
          (L = w(f, d[T], x)),
            L !== null &&
              ((a = i(L, a, T)),
              A === null ? (j = L) : (A.sibling = L),
              (A = L));
        return te && $t(f, T), j;
      }
      for (L = r(f, L); T < d.length; T++)
        (ye = E(L, f, T, d[T], x)),
          ye !== null &&
            (e &&
              ye.alternate !== null &&
              L.delete(ye.key === null ? T : ye.key),
            (a = i(ye, a, T)),
            A === null ? (j = ye) : (A.sibling = ye),
            (A = ye));
      return (
        e &&
          L.forEach(function (Yt) {
            return t(f, Yt);
          }),
        te && $t(f, T),
        j
      );
    }
    function z(f, a, d, x) {
      var j = M(d);
      if (typeof j != "function") throw Error(m(150));
      if (((d = j.call(d)), d == null)) throw Error(m(151));
      for (
        var A = (j = null), L = a, T = (a = 0), ye = null, B = d.next();
        L !== null && !B.done;
        T++, B = d.next()
      ) {
        L.index > T ? ((ye = L), (L = null)) : (ye = L.sibling);
        var Yt = v(f, L, B.value, x);
        if (Yt === null) {
          L === null && (L = ye);
          break;
        }
        e && L && Yt.alternate === null && t(f, L),
          (a = i(Yt, a, T)),
          A === null ? (j = Yt) : (A.sibling = Yt),
          (A = Yt),
          (L = ye);
      }
      if (B.done) return n(f, L), te && $t(f, T), j;
      if (L === null) {
        for (; !B.done; T++, B = d.next())
          (B = w(f, B.value, x)),
            B !== null &&
              ((a = i(B, a, T)),
              A === null ? (j = B) : (A.sibling = B),
              (A = B));
        return te && $t(f, T), j;
      }
      for (L = r(f, L); !B.done; T++, B = d.next())
        (B = E(L, f, T, B.value, x)),
          B !== null &&
            (e && B.alternate !== null && L.delete(B.key === null ? T : B.key),
            (a = i(B, a, T)),
            A === null ? (j = B) : (A.sibling = B),
            (A = B));
      return (
        e &&
          L.forEach(function (Of) {
            return t(f, Of);
          }),
        te && $t(f, T),
        j
      );
    }
    function se(f, a, d, x) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Ae &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var j = d.key, A = a; A !== null; ) {
                if (A.key === j) {
                  if (((j = d.type), j === Ae)) {
                    if (A.tag === 7) {
                      n(f, A.sibling),
                        (a = l(A, d.props.children)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                  } else if (
                    A.elementType === j ||
                    (typeof j == "object" &&
                      j !== null &&
                      j.$$typeof === Le &&
                      rs(j) === A.type)
                  ) {
                    n(f, A.sibling),
                      (a = l(A, d.props)),
                      (a.ref = ir(f, A, d)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  n(f, A);
                  break;
                } else t(f, A);
                A = A.sibling;
              }
              d.type === Ae
                ? ((a = un(d.props.children, f.mode, x, d.key)),
                  (a.return = f),
                  (f = a))
                : ((x = Sl(d.type, d.key, d.props, null, f.mode, x)),
                  (x.ref = ir(f, a, d)),
                  (x.return = f),
                  (f = x));
            }
            return o(f);
          case Pe:
            e: {
              for (A = d.key; a !== null; ) {
                if (a.key === A)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    n(f, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = f),
                      (f = a);
                    break e;
                  } else {
                    n(f, a);
                    break;
                  }
                else t(f, a);
                a = a.sibling;
              }
              (a = xo(d, f.mode, x)), (a.return = f), (f = a);
            }
            return o(f);
          case Le:
            return (A = d._init), se(f, a, A(d._payload), x);
        }
        if (On(d)) return P(f, a, d, x);
        if (M(d)) return z(f, a, d, x);
        $r(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = wo(d, f.mode, x)), (a.return = f), (f = a)),
          o(f))
        : n(f, a);
    }
    return se;
  }
  var Nn = ls(!0),
    is = ls(!1),
    br = It(null),
    el = null,
    Pn = null,
    ji = null;
  function Ai() {
    ji = Pn = el = null;
  }
  function Li(e) {
    var t = br.current;
    q(br), (e._currentValue = t);
  }
  function Ri(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function zn(e, t) {
    (el = e),
      (ji = Pn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Te = !0), (e.firstContext = null));
  }
  function Ze(e) {
    var t = e._currentValue;
    if (ji !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
        if (el === null) throw Error(m(308));
        (Pn = e), (el.dependencies = { lanes: 0, firstContext: e });
      } else Pn = Pn.next = e;
    return t;
  }
  var bt = null;
  function Mi(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Mi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Et(e, r)
    );
  }
  function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var _t = !1;
  function Ti(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function us(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Ct(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), _ & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Et(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Mi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function tl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n);
    }
  }
  function ss(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    _t = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        p = s.next;
      (s.next = null), o === null ? (i = p) : (o.next = p), (o = s);
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (u = g.lastBaseUpdate),
        u !== o &&
          (u === null ? (g.firstBaseUpdate = p) : (u.next = p),
          (g.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var w = l.baseState;
      (o = 0), (g = p = s = null), (u = i);
      do {
        var v = u.lane,
          E = u.eventTime;
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
              {
                eventTime: E,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var P = e,
              z = u;
            switch (((v = t), (E = n), z.tag)) {
              case 1:
                if (((P = z.payload), typeof P == "function")) {
                  w = P.call(E, w, v);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = z.payload),
                  (v = typeof P == "function" ? P.call(E, w, v) : P),
                  v == null)
                )
                  break e;
                w = N({}, w, v);
                break e;
              case 2:
                _t = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [u]) : v.push(u));
        } else
          (E = {
            eventTime: E,
            lane: v,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            g === null ? ((p = g = E), (s = w)) : (g = g.next = E),
            (o |= v);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (v = u),
            (u = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (g === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = g),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (o |= l.lane), (l = l.next);
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      (nn |= o), (e.lanes = o), (e.memoizedState = w);
    }
  }
  function as(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var or = {},
    mt = It(or),
    ur = It(or),
    sr = It(or);
  function en(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Oi(e, t) {
    switch ((X(sr, t), X(ur, e), X(mt, or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Il(t, e));
    }
    q(mt), X(mt, t);
  }
  function jn() {
    q(mt), q(ur), q(sr);
  }
  function cs(e) {
    en(sr.current);
    var t = en(mt.current),
      n = Il(t, e.type);
    t !== n && (X(ur, e), X(mt, n));
  }
  function Ii(e) {
    ur.current === e && (q(mt), q(ur));
  }
  var re = It(0);
  function rl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Di = [];
  function Fi() {
    for (var e = 0; e < Di.length; e++)
      Di[e]._workInProgressVersionPrimary = null;
    Di.length = 0;
  }
  var ll = ke.ReactCurrentDispatcher,
    _i = ke.ReactCurrentBatchConfig,
    tn = 0,
    le = null,
    de = null,
    he = null,
    il = !1,
    ar = !1,
    cr = 0,
    tf = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Vi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Ui(e, t, n, r, l, i) {
    if (
      ((tn = i),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? of : uf),
      (e = n(r, l)),
      ar)
    ) {
      i = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= i)) throw Error(m(301));
        (i += 1),
          (he = de = null),
          (t.updateQueue = null),
          (ll.current = sf),
          (e = n(r, l));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (t = de !== null && de.next !== null),
      (tn = 0),
      (he = de = le = null),
      (il = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Bi() {
    var e = cr !== 0;
    return (cr = 0), e;
  }
  function ht() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return he === null ? (le.memoizedState = he = e) : (he = he.next = e), he;
  }
  function Xe() {
    if (de === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = he === null ? le.memoizedState : he.next;
    if (t !== null) (he = t), (de = e);
    else {
      if (e === null) throw Error(m(310));
      (de = e),
        (e = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null,
        }),
        he === null ? (le.memoizedState = he = e) : (he = he.next = e);
    }
    return he;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Hi(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = de,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        (l.next = i.next), (i.next = o);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (i = l.next), (r = r.baseState);
      var u = (o = null),
        s = null,
        p = i;
      do {
        var g = p.lane;
        if ((tn & g) === g)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action));
        else {
          var w = {
            lane: g,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          s === null ? ((u = s = w), (o = r)) : (s = s.next = w),
            (le.lanes |= g),
            (nn |= g);
        }
        p = p.next;
      } while (p !== null && p !== i);
      s === null ? (o = r) : (s.next = u),
        nt(r, t.memoizedState) || (Te = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (i = l.lane), (le.lanes |= i), (nn |= i), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Wi(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do (i = e(i, o.action)), (o = o.next);
      while (o !== l);
      nt(i, t.memoizedState) || (Te = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function fs() {}
  function ds(e, t) {
    var n = le,
      r = Xe(),
      l = t(),
      i = !nt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Te = !0)),
      (r = r.queue),
      Qi(hs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        dr(9, ms.bind(null, n, r, l, t), void 0, null),
        ve === null)
      )
        throw Error(m(349));
      tn & 30 || ps(n, t, l);
    }
    return l;
  }
  function ps(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ms(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), vs(t) && ys(e);
  }
  function hs(e, t, n) {
    return n(function () {
      vs(t) && ys(e);
    });
  }
  function vs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function ys(e) {
    var t = Et(e, 1);
    t !== null && ut(t, e, 1, -1);
  }
  function gs(e) {
    var t = ht();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = lf.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ws() {
    return Xe().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = ht();
    (le.flags |= e),
      (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function ul(e, t, n, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (de !== null) {
      var o = de.memoizedState;
      if (((i = o.destroy), r !== null && Vi(r, o.deps))) {
        l.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    (le.flags |= e), (l.memoizedState = dr(1 | t, n, i, r));
  }
  function xs(e, t) {
    return ol(8390656, 8, e, t);
  }
  function Qi(e, t) {
    return ul(2048, 8, e, t);
  }
  function ks(e, t) {
    return ul(4, 2, e, t);
  }
  function Ss(e, t) {
    return ul(4, 4, e, t);
  }
  function Es(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Cs(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ul(4, 4, Es.bind(null, t, e), n)
    );
  }
  function Ki() {}
  function Ns(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ps(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function zs(e, t, n) {
    return tn & 21
      ? (nt(n, t) ||
          ((n = ru()), (le.lanes |= n), (nn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
  }
  function nf(e, t) {
    var n = K;
    (K = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = _i.transition;
    _i.transition = {};
    try {
      e(!1), t();
    } finally {
      (K = n), (_i.transition = r);
    }
  }
  function js() {
    return Xe().memoizedState;
  }
  function rf(e, t, n) {
    var r = Wt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      As(e))
    )
      Ls(t, n);
    else if (((n = os(e, t, n, r)), n !== null)) {
      var l = je();
      ut(n, e, r, l), Rs(n, t, r);
    }
  }
  function lf(e, t, n) {
    var r = Wt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (As(e)) Ls(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = u), nt(u, o))) {
            var s = t.interleaved;
            s === null
              ? ((l.next = l), Mi(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = os(e, t, l, r)),
        n !== null && ((l = je()), ut(n, e, r, l), Rs(n, t, r));
    }
  }
  function As(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Ls(e, t) {
    ar = il = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Rs(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n);
    }
  }
  var sl = {
      readContext: Ze,
      useCallback: Ee,
      useContext: Ee,
      useEffect: Ee,
      useImperativeHandle: Ee,
      useInsertionEffect: Ee,
      useLayoutEffect: Ee,
      useMemo: Ee,
      useReducer: Ee,
      useRef: Ee,
      useState: Ee,
      useDebugValue: Ee,
      useDeferredValue: Ee,
      useTransition: Ee,
      useMutableSource: Ee,
      useSyncExternalStore: Ee,
      useId: Ee,
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: Ze,
      useCallback: function (e, t) {
        return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ze,
      useEffect: xs,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ol(4194308, 4, Es.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ol(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ol(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ht();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = ht();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = rf.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: gs,
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = gs(!1),
          t = e[0];
        return (e = nf.bind(null, e[1])), (ht().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          l = ht();
        if (te) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(m(349));
          tn & 30 || ps(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          xs(hs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          dr(9, ms.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = ve.identifierPrefix;
        if (te) {
          var n = St,
            r = kt;
          (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = tf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: Ze,
      useCallback: Ns,
      useContext: Ze,
      useEffect: Qi,
      useImperativeHandle: Cs,
      useInsertionEffect: ks,
      useLayoutEffect: Ss,
      useMemo: Ps,
      useReducer: Hi,
      useRef: ws,
      useState: function () {
        return Hi(fr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Xe();
        return zs(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Hi(fr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: js,
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: Ze,
      useCallback: Ns,
      useContext: Ze,
      useEffect: Qi,
      useImperativeHandle: Cs,
      useInsertionEffect: ks,
      useLayoutEffect: Ss,
      useMemo: Ps,
      useReducer: Wi,
      useRef: ws,
      useState: function () {
        return Wi(fr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Xe();
        return de === null ? (t.memoizedState = e) : zs(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Wi(fr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: fs,
      useSyncExternalStore: ds,
      useId: js,
      unstable_isNewReconciler: !1,
    };
  function lt(e, t) {
    if (e && e.defaultProps) {
      (t = N({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Yi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Zt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = je(),
        l = Wt(e),
        i = Ct(r, l);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (ut(t, e, l, r), tl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = je(),
        l = Wt(e),
        i = Ct(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Vt(e, i, l)),
        t !== null && (ut(t, e, l, r), tl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = je(),
        r = Wt(e),
        l = Ct(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Vt(e, l, r)),
        t !== null && (ut(t, e, r, n), tl(t, e, r));
    },
  };
  function Ms(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !$n(n, r) || !$n(l, i)
        : !0
    );
  }
  function Ts(e, t, n) {
    var r = !1,
      l = Dt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ze(i))
        : ((l = Me(t) ? Gt : Se.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? kn(e, l) : Dt)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Os(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null);
  }
  function Ji(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ti(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (l.context = Ze(i))
      : ((i = Me(t) ? Gt : Se.current), (l.context = kn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Yi(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && al.enqueueReplaceState(l, l.state, null),
        nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function An(e, t) {
    try {
      var n = "",
        r = t;
      do (n += V(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Xi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var af = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        vl || ((vl = !0), (co = r)), Xi(e, t);
      }),
      n
    );
  }
  function Ds(e, t, n) {
    (n = Ct(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Xi(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Xi(e, t),
            typeof r != "function" &&
              (Bt === null ? (Bt = new Set([this])) : Bt.add(this));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Fs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new af();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Ef.bind(null, e, t, n)), t.then(e, e));
  }
  function _s(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Vs(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ct(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var cf = ke.ReactCurrentOwner,
    Te = !1;
  function ze(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : Nn(t, e.child, n, r);
  }
  function Us(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      zn(t, l),
      (r = Ui(e, t, n, r, i, l)),
      (n = Bi()),
      e !== null && !Te
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Nt(e, t, l))
        : (te && n && Ei(t), (t.flags |= 1), ze(e, t, r, l), t.child)
    );
  }
  function Bs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !go(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Hs(e, t, i, r, l))
        : ((e = Sl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
      var o = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : $n), n(o, r) && e.ref === t.ref)
      )
        return Nt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Kt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if ($n(i, r) && e.ref === t.ref)
        if (((Te = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          e.flags & 131072 && (Te = !0);
        else return (t.lanes = e.lanes), Nt(e, t, l);
    }
    return Gi(e, t, n, r, l);
  }
  function Ws(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          X(Rn, He),
          (He |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            X(Rn, He),
            (He |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          X(Rn, He),
          (He |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        X(Rn, He),
        (He |= r);
    return ze(e, t, l, n), t.child;
  }
  function Qs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Gi(e, t, n, r, l) {
    var i = Me(n) ? Gt : Se.current;
    return (
      (i = kn(t, i)),
      zn(t, l),
      (n = Ui(e, t, n, r, i, l)),
      (r = Bi()),
      e !== null && !Te
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Nt(e, t, l))
        : (te && r && Ei(t), (t.flags |= 1), ze(e, t, n, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (Me(n)) {
      var i = !0;
      Jr(t);
    } else i = !1;
    if ((zn(t, l), t.stateNode === null))
      fl(e, t), Ts(t, n, r), Ji(t, n, r, l), (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Ze(p))
        : ((p = Me(n) ? Gt : Se.current), (p = kn(t, p)));
      var g = n.getDerivedStateFromProps,
        w =
          typeof g == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      w ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== p) && Os(t, o, r, p)),
        (_t = !1);
      var v = t.memoizedState;
      (o.state = v),
        nl(t, r, o, l),
        (s = t.memoizedState),
        u !== r || v !== s || Re.current || _t
          ? (typeof g == "function" && (Yi(t, n, g, r), (s = t.memoizedState)),
            (u = _t || Ms(t, n, u, r, v, s, p))
              ? (w ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = p),
            (r = u))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        us(e, t),
        (u = t.memoizedProps),
        (p = t.type === t.elementType ? u : lt(t.type, u)),
        (o.props = p),
        (w = t.pendingProps),
        (v = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ze(s))
          : ((s = Me(n) ? Gt : Se.current), (s = kn(t, s)));
      var E = n.getDerivedStateFromProps;
      (g =
        typeof E == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== w || v !== s) && Os(t, o, r, s)),
        (_t = !1),
        (v = t.memoizedState),
        (o.state = v),
        nl(t, r, o, l);
      var P = t.memoizedState;
      u !== w || v !== P || Re.current || _t
        ? (typeof E == "function" && (Yi(t, n, E, r), (P = t.memoizedState)),
          (p = _t || Ms(t, n, p, r, v, P, s) || !1)
            ? (g ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, P, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, P, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (o.props = r),
          (o.state = P),
          (o.context = s),
          (r = p))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return qi(e, t, n, r, i, l);
  }
  function qi(e, t, n, r, l, i) {
    Qs(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Gu(t, n, !1), Nt(e, t, i);
    (r = t.stateNode), (cf.current = t);
    var u =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Nn(t, e.child, null, i)), (t.child = Nn(t, null, u, i)))
        : ze(e, t, u, i),
      (t.memoizedState = r.state),
      l && Gu(t, n, !0),
      t.child
    );
  }
  function Ys(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Zu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Zu(e, t.context, !1),
      Oi(e, t.containerInfo);
  }
  function Js(e, t, n, r, l) {
    return Cn(), zi(l), (t.flags |= 256), ze(e, t, n, r), t.child;
  }
  var $i = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zs(e, t, n) {
    var r = t.pendingProps,
      l = re.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      X(re, l & 1),
      e === null)
    )
      return (
        Pi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = El(o, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = bi(n)),
                (t.memoizedState = $i),
                e)
              : eo(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return ff(e, t, o, r, u, l, n);
    if (i) {
      (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Kt(u, i)) : ((i = un(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? bi(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = $i),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Kt(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function eo(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && zi(r),
      Nn(t, e.child, null, n),
      (e = eo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ff(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zi(Error(m(422)))), cl(e, t, o, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = El({ mode: "visible", children: r.children }, l, 0, null)),
          (i = un(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Nn(t, e.child, null, o),
          (t.child.memoizedState = bi(o)),
          (t.memoizedState = $i),
          i);
    if (!(t.mode & 1)) return cl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u), (i = Error(m(419))), (r = Zi(i, r, void 0)), cl(e, t, o, r)
      );
    }
    if (((u = (o & e.childLanes) !== 0), Te || u)) {
      if (((r = ve), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | o) ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Et(e, l), ut(r, e, l, -1));
      }
      return yo(), (r = Zi(Error(m(421)))), cl(e, t, o, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Cf.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Be = Ot(l.nextSibling)),
        (Ue = t),
        (te = !0),
        (rt = null),
        e !== null &&
          ((Ye[Je++] = kt),
          (Ye[Je++] = St),
          (Ye[Je++] = qt),
          (kt = e.id),
          (St = e.overflow),
          (qt = t)),
        (t = eo(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ri(e.return, t, n);
  }
  function to(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l));
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((ze(e, t, r.children, n), (r = re.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
          else if (e.tag === 19) Xs(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((X(re, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && rl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            to(t, !1, l, n, i);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          to(t, !0, n, null, i);
          break;
        case "together":
          to(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Nt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Kt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function df(e, t, n) {
    switch (t.tag) {
      case 3:
        Ys(t), Cn();
        break;
      case 5:
        cs(t);
        break;
      case 1:
        Me(t.type) && Jr(t);
        break;
      case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        X(br, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (X(re, re.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Zs(e, t, n)
            : (X(re, re.current & 1),
              (e = Nt(e, t, n)),
              e !== null ? e.sibling : null);
        X(re, re.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Gs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          X(re, re.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ws(e, t, n);
    }
    return Nt(e, t, n);
  }
  var qs, no, $s, bs;
  (qs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (no = function () {}),
    ($s = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), en(mt.current);
        var i = null;
        switch (n) {
          case "input":
            (l = Rl(e, l)), (r = Rl(e, r)), (i = []);
            break;
          case "select":
            (l = N({}, l, { value: void 0 })),
              (r = N({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (l = Ol(e, l)), (r = Ol(e, r)), (i = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Qr);
        }
        Dl(n, r);
        var o;
        n = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var u = l[p];
              for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (I.hasOwnProperty(p)
                  ? i || (i = [])
                  : (i = i || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((u = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== u && (s != null || u != null))
          )
            if (p === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (s && s.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in s)
                  s.hasOwnProperty(o) &&
                    u[o] !== s[o] &&
                    (n || (n = {}), (n[o] = s[o]));
              } else n || (i || (i = []), i.push(p, n)), (n = s);
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (u = u ? u.__html : void 0),
                  s != null && u !== s && (i = i || []).push(p, s))
                : p === "children"
                ? (typeof s != "string" && typeof s != "number") ||
                  (i = i || []).push(p, "" + s)
                : p !== "suppressContentEditableWarning" &&
                  p !== "suppressHydrationWarning" &&
                  (I.hasOwnProperty(p)
                    ? (s != null && p === "onScroll" && G("scroll", e),
                      i || u === s || (i = []))
                    : (i = i || []).push(p, s));
        }
        n && (i = i || []).push("style", n);
        var p = i;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (bs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function pr(e, t) {
    if (!te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ce(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function pf(e, t, n) {
    var r = t.pendingProps;
    switch ((Ci(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ce(t), null;
      case 1:
        return Me(t.type) && Yr(), Ce(t), null;
      case 3:
        return (
          (r = t.stateNode),
          jn(),
          q(Re),
          q(Se),
          Fi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), rt !== null && (mo(rt), (rt = null)))),
          no(e, t),
          Ce(t),
          null
        );
      case 5:
        Ii(t);
        var l = en(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          $s(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return Ce(t), null;
          }
          if (((e = en(mt.current)), qr(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[pt] = t), (r[rr] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                G("cancel", r), G("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) G(er[l], r);
                break;
              case "source":
                G("error", r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", r), G("load", r);
                break;
              case "details":
                G("toggle", r);
                break;
              case "input":
                To(r, i), G("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  G("invalid", r);
                break;
              case "textarea":
                Do(r, i), G("invalid", r);
            }
            Dl(n, i), (l = null);
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 &&
                        Wr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : I.hasOwnProperty(o) &&
                    u != null &&
                    o === "onScroll" &&
                    G("scroll", r);
              }
            switch (n) {
              case "input":
                xr(r), Io(r, i, !0);
                break;
              case "textarea":
                xr(r), _o(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Qr);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Vo(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[pt] = t),
              (e[rr] = r),
              qs(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = Fl(n, r)), n)) {
                case "dialog":
                  G("cancel", e), G("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) G(er[l], e);
                  l = r;
                  break;
                case "source":
                  G("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  G("error", e), G("load", e), (l = r);
                  break;
                case "details":
                  G("toggle", e), (l = r);
                  break;
                case "input":
                  To(e, r), (l = Rl(e, r)), G("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = N({}, r, { value: void 0 })),
                    G("invalid", e);
                  break;
                case "textarea":
                  Do(e, r), (l = Ol(e, r)), G("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(n, l), (u = l);
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i];
                  i === "style"
                    ? Ho(e, s)
                    : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Uo(e, s))
                    : i === "children"
                    ? typeof s == "string"
                      ? (n !== "textarea" || s !== "") && In(e, s)
                      : typeof s == "number" && In(e, "" + s)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (I.hasOwnProperty(i)
                        ? s != null && i === "onScroll" && G("scroll", e)
                        : s != null && $e(e, i, s, o));
                }
              switch (n) {
                case "input":
                  xr(e), Io(e, r, !1);
                  break;
                case "textarea":
                  xr(e), _o(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? an(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        an(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Qr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ce(t), null;
      case 6:
        if (e && t.stateNode != null) bs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(sr.current)), en(mt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (i = r.nodeValue !== n) && ((e = Ue), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Wr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Wr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r);
        }
        return Ce(t), null;
      case 13:
        if (
          (q(re),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Be !== null && t.mode & 1 && !(t.flags & 128))
            ns(), Cn(), (t.flags |= 98560), (i = !1);
          else if (((i = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(m(317));
              i[pt] = t;
            } else
              Cn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ce(t), (i = !1);
          } else rt !== null && (mo(rt), (rt = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || re.current & 1 ? pe === 0 && (pe = 3) : yo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ce(t),
            null);
      case 4:
        return (
          jn(),
          no(e, t),
          e === null && tr(t.stateNode.containerInfo),
          Ce(t),
          null
        );
      case 10:
        return Li(t.type._context), Ce(t), null;
      case 17:
        return Me(t.type) && Yr(), Ce(t), null;
      case 19:
        if ((q(re), (i = t.memoizedState), i === null)) return Ce(t), null;
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) pr(i, !1);
          else {
            if (pe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = rl(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      pr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return X(re, (re.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ue() > Mn &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !te)
              )
                return Ce(t), null;
            } else
              2 * ue() - i.renderingStartTime > Mn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ue()),
            (t.sibling = null),
            (n = re.current),
            X(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ce(t), null);
      case 22:
      case 23:
        return (
          vo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? He & 1073741824 &&
              (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ce(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function mf(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          Me(t.type) && Yr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          jn(),
          q(Re),
          q(Se),
          Fi(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ii(t), null;
      case 13:
        if (
          (q(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          Cn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return q(re), null;
      case 4:
        return jn(), null;
      case 10:
        return Li(t.type._context), null;
      case 22:
      case 23:
        return vo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    Ne = !1,
    hf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          oe(e, t, r);
        }
      else n.current = null;
  }
  function ro(e, t, n) {
    try {
      n();
    } catch (r) {
      oe(e, t, r);
    }
  }
  var ea = !1;
  function vf(e, t) {
    if (((hi = Mr), (e = Mu()), ui(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              u = -1,
              s = -1,
              p = 0,
              g = 0,
              w = e,
              v = null;
            t: for (;;) {
              for (
                var E;
                w !== n || (l !== 0 && w.nodeType !== 3) || (u = o + l),
                  w !== i || (r !== 0 && w.nodeType !== 3) || (s = o + r),
                  w.nodeType === 3 && (o += w.nodeValue.length),
                  (E = w.firstChild) !== null;

              )
                (v = w), (w = E);
              for (;;) {
                if (w === e) break t;
                if (
                  (v === n && ++p === l && (u = o),
                  v === i && ++g === r && (s = o),
                  (E = w.nextSibling) !== null)
                )
                  break;
                (w = v), (v = w.parentNode);
              }
              w = E;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      vi = { focusedElem: e, selectionRange: n }, Mr = !1, C = t;
      C !== null;

    )
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (C = e);
      else
        for (; C !== null; ) {
          t = C;
          try {
            var P = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (P !== null) {
                    var z = P.memoizedProps,
                      se = P.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? z : lt(t.type, z),
                        se
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = t.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (x) {
            oe(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (C = e);
            break;
          }
          C = t.return;
        }
    return (P = ea), (ea = !1), P;
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          (l.destroy = void 0), i !== void 0 && ro(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function lo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function ta(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), ta(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[pt],
          delete t[rr],
          delete t[xi],
          delete t[qc],
          delete t[$c])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function na(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ra(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || na(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Qr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (io(e, t, n), e = e.sibling; e !== null; )
        io(e, t, n), (e = e.sibling);
  }
  function oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oo(e, t, n), e = e.sibling; e !== null; )
        oo(e, t, n), (e = e.sibling);
  }
  var we = null,
    it = !1;
  function Ut(e, t, n) {
    for (n = n.child; n !== null; ) la(e, t, n), (n = n.sibling);
  }
  function la(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Pr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ne || Ln(n, t);
      case 6:
        var r = we,
          l = it;
        (we = null),
          Ut(e, t, n),
          (we = r),
          (it = l),
          we !== null &&
            (it
              ? ((e = we),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : we.removeChild(n.stateNode));
        break;
      case 18:
        we !== null &&
          (it
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8
                ? wi(e.parentNode, n)
                : e.nodeType === 1 && wi(e, n),
              Yn(e))
            : wi(we, n.stateNode));
        break;
      case 4:
        (r = we),
          (l = it),
          (we = n.stateNode.containerInfo),
          (it = !0),
          Ut(e, t, n),
          (we = r),
          (it = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ne &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            (i = i.tag),
              o !== void 0 && (i & 2 || i & 4) && ro(n, t, o),
              (l = l.next);
          } while (l !== r);
        }
        Ut(e, t, n);
        break;
      case 1:
        if (
          !Ne &&
          (Ln(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (u) {
            oe(n, t, u);
          }
        Ut(e, t, n);
        break;
      case 21:
        Ut(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ne = (r = Ne) || n.memoizedState !== null), Ut(e, t, n), (Ne = r))
          : Ut(e, t, n);
        break;
      default:
        Ut(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new hf()),
        t.forEach(function (r) {
          var l = Nf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                (we = u.stateNode), (it = !1);
                break e;
              case 3:
                (we = u.stateNode.containerInfo), (it = !0);
                break e;
              case 4:
                (we = u.stateNode.containerInfo), (it = !0);
                break e;
            }
            u = u.return;
          }
          if (we === null) throw Error(m(160));
          la(i, o, l), (we = null), (it = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (p) {
          oe(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) oa(t, e), (t = t.sibling);
  }
  function oa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ot(t, e), vt(e), r & 4)) {
          try {
            mr(3, e, e.return), pl(3, e);
          } catch (z) {
            oe(e, e.return, z);
          }
          try {
            mr(5, e, e.return);
          } catch (z) {
            oe(e, e.return, z);
          }
        }
        break;
      case 1:
        ot(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return);
        break;
      case 5:
        if (
          (ot(t, e),
          vt(e),
          r & 512 && n !== null && Ln(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            In(l, "");
          } catch (z) {
            oe(e, e.return, z);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              u === "input" && i.type === "radio" && i.name != null && Oo(l, i),
                Fl(u, o);
              var p = Fl(u, i);
              for (o = 0; o < s.length; o += 2) {
                var g = s[o],
                  w = s[o + 1];
                g === "style"
                  ? Ho(l, w)
                  : g === "dangerouslySetInnerHTML"
                  ? Uo(l, w)
                  : g === "children"
                  ? In(l, w)
                  : $e(l, g, w, p);
              }
              switch (u) {
                case "input":
                  Ml(l, i);
                  break;
                case "textarea":
                  Fo(l, i);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var E = i.value;
                  E != null
                    ? an(l, !!i.multiple, E, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? an(l, !!i.multiple, i.defaultValue, !0)
                        : an(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[rr] = i;
            } catch (z) {
              oe(e, e.return, z);
            }
        }
        break;
      case 6:
        if ((ot(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (i = e.memoizedProps);
          try {
            l.nodeValue = i;
          } catch (z) {
            oe(e, e.return, z);
          }
        }
        break;
      case 3:
        if (
          (ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Yn(t.containerInfo);
          } catch (z) {
            oe(e, e.return, z);
          }
        break;
      case 4:
        ot(t, e), vt(e);
        break;
      case 13:
        ot(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ao = ue())),
          r & 4 && ia(e);
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ne = (p = Ne) || g), ot(t, e), (Ne = p)) : ot(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !g && e.mode & 1)
          )
            for (C = e, g = e.child; g !== null; ) {
              for (w = C = g; C !== null; ) {
                switch (((v = C), (E = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, v, v.return);
                    break;
                  case 1:
                    Ln(v, v.return);
                    var P = v.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      (r = v), (n = v.return);
                      try {
                        (t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount();
                      } catch (z) {
                        oe(r, n, z);
                      }
                    }
                    break;
                  case 5:
                    Ln(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      aa(w);
                      continue;
                    }
                }
                E !== null ? ((E.return = v), (C = E)) : aa(w);
              }
              g = g.sibling;
            }
          e: for (g = null, w = e; ; ) {
            if (w.tag === 5) {
              if (g === null) {
                g = w;
                try {
                  (l = w.stateNode),
                    p
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((u = w.stateNode),
                        (s = w.memoizedProps.style),
                        (o =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (u.style.display = Bo("display", o)));
                } catch (z) {
                  oe(e, e.return, z);
                }
              }
            } else if (w.tag === 6) {
              if (g === null)
                try {
                  w.stateNode.nodeValue = p ? "" : w.memoizedProps;
                } catch (z) {
                  oe(e, e.return, z);
                }
            } else if (
              ((w.tag !== 22 && w.tag !== 23) ||
                w.memoizedState === null ||
                w === e) &&
              w.child !== null
            ) {
              (w.child.return = w), (w = w.child);
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              g === w && (g = null), (w = w.return);
            }
            g === w && (g = null),
              (w.sibling.return = w.return),
              (w = w.sibling);
          }
        }
        break;
      case 19:
        ot(t, e), vt(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        ot(t, e), vt(e);
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (na(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (In(l, ""), (r.flags &= -33));
            var i = ra(e);
            oo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = ra(e);
            io(e, u, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        oe(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yf(e, t, n) {
    (C = e), ua(e);
  }
  function ua(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl;
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Ne;
          u = dl;
          var p = Ne;
          if (((dl = o), (Ne = s) && !p))
            for (C = l; C !== null; )
              (o = C),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? ca(l)
                  : s !== null
                  ? ((s.return = o), (C = s))
                  : ca(l);
          for (; i !== null; ) (C = i), ua(i), (i = i.sibling);
          (C = l), (dl = u), (Ne = p);
        }
        sa(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : sa(e);
    }
  }
  function sa(e) {
    for (; C !== null; ) {
      var t = C;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ne || pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ne)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && as(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  as(t, o, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = u;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && n.focus();
                      break;
                    case "img":
                      s.src && (n.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var p = t.alternate;
                  if (p !== null) {
                    var g = p.memoizedState;
                    if (g !== null) {
                      var w = g.dehydrated;
                      w !== null && Yn(w);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          Ne || (t.flags & 512 && lo(t));
        } catch (v) {
          oe(t, t.return, v);
        }
      }
      if (t === e) {
        C = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (C = n);
        break;
      }
      C = t.return;
    }
  }
  function aa(e) {
    for (; C !== null; ) {
      var t = C;
      if (t === e) {
        C = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (C = n);
        break;
      }
      C = t.return;
    }
  }
  function ca(e) {
    for (; C !== null; ) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
            } catch (s) {
              oe(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                oe(t, l, s);
              }
            }
            var i = t.return;
            try {
              lo(t);
            } catch (s) {
              oe(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              lo(t);
            } catch (s) {
              oe(t, o, s);
            }
        }
      } catch (s) {
        oe(t, t.return, s);
      }
      if (t === e) {
        C = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        (u.return = t.return), (C = u);
        break;
      }
      C = t.return;
    }
  }
  var gf = Math.ceil,
    ml = ke.ReactCurrentDispatcher,
    uo = ke.ReactCurrentOwner,
    Ge = ke.ReactCurrentBatchConfig,
    _ = 0,
    ve = null,
    fe = null,
    xe = 0,
    He = 0,
    Rn = It(0),
    pe = 0,
    hr = null,
    nn = 0,
    hl = 0,
    so = 0,
    vr = null,
    Oe = null,
    ao = 0,
    Mn = 1 / 0,
    Pt = null,
    vl = !1,
    co = null,
    Bt = null,
    yl = !1,
    Ht = null,
    gl = 0,
    yr = 0,
    fo = null,
    wl = -1,
    xl = 0;
  function je() {
    return _ & 6 ? ue() : wl !== -1 ? wl : (wl = ue());
  }
  function Wt(e) {
    return e.mode & 1
      ? _ & 2 && xe !== 0
        ? xe & -xe
        : ef.transition !== null
        ? (xl === 0 && (xl = ru()), xl)
        : ((e = K),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : du(e.type))),
          e)
      : 1;
  }
  function ut(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (fo = null), Error(m(185)));
    Bn(e, n, r),
      (!(_ & 2) || e !== ve) &&
        (e === ve && (!(_ & 2) && (hl |= n), pe === 4 && Qt(e, xe)),
        Ie(e, r),
        n === 1 && _ === 0 && !(t.mode & 1) && ((Mn = ue() + 500), Zr && Ft()));
  }
  function Ie(e, t) {
    var n = e.callbackNode;
    ec(e, t);
    var r = Ar(e, e === ve ? xe : 0);
    if (r === 0)
      n !== null && eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && eu(n), t === 1))
        e.tag === 0 ? bc(da.bind(null, e)) : qu(da.bind(null, e)),
          Xc(function () {
            !(_ & 6) && Ft();
          }),
          (n = null);
      else {
        switch (lu(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = tu;
            break;
          case 16:
            n = Nr;
            break;
          case 536870912:
            n = nu;
            break;
          default:
            n = Nr;
        }
        n = xa(n, fa.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function fa(e, t) {
    if (((wl = -1), (xl = 0), _ & 6)) throw Error(m(327));
    var n = e.callbackNode;
    if (Tn() && e.callbackNode !== n) return null;
    var r = Ar(e, e === ve ? xe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
    else {
      t = r;
      var l = _;
      _ |= 2;
      var i = ma();
      (ve !== e || xe !== t) && ((Pt = null), (Mn = ue() + 500), ln(e, t));
      do
        try {
          kf();
          break;
        } catch (u) {
          pa(e, u);
        }
      while (!0);
      Ai(),
        (ml.current = i),
        (_ = l),
        fe !== null ? (t = 0) : ((ve = null), (xe = 0), (t = pe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = po(e, l)))),
        t === 1)
      )
        throw ((n = hr), ln(e, 0), Qt(e, r), Ie(e, ue()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !wf(l) &&
            ((t = kl(e, r)),
            t === 2 && ((i = Kl(e)), i !== 0 && ((r = i), (t = po(e, i)))),
            t === 1))
        )
          throw ((n = hr), ln(e, 0), Qt(e, r), Ie(e, ue()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            on(e, Oe, Pt);
            break;
          case 3:
            if (
              (Qt(e, r),
              (r & 130023424) === r && ((t = ao + 500 - ue()), 10 < t))
            ) {
              if (Ar(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                je(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = gi(on.bind(null, e, Oe, Pt), t);
              break;
            }
            on(e, Oe, Pt);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - tt(r);
              (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
            }
            if (
              ((r = l),
              (r = ue() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * gf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = gi(on.bind(null, e, Oe, Pt), r);
              break;
            }
            on(e, Oe, Pt);
            break;
          case 5:
            on(e, Oe, Pt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ie(e, ue()), e.callbackNode === n ? fa.bind(null, e) : null;
  }
  function po(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = kl(e, t)),
      e !== 2 && ((t = Oe), (Oe = n), t !== null && mo(t)),
      e
    );
  }
  function mo(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function wf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!nt(i(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Qt(e, t) {
    for (
      t &= ~so,
        t &= ~hl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - tt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function da(e) {
    if (_ & 6) throw Error(m(327));
    Tn();
    var t = Ar(e, 0);
    if (!(t & 1)) return Ie(e, ue()), null;
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && ((t = r), (n = po(e, r)));
    }
    if (n === 1) throw ((n = hr), ln(e, 0), Qt(e, t), Ie(e, ue()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, Oe, Pt),
      Ie(e, ue()),
      null
    );
  }
  function ho(e, t) {
    var n = _;
    _ |= 1;
    try {
      return e(t);
    } finally {
      (_ = n), _ === 0 && ((Mn = ue() + 500), Zr && Ft());
    }
  }
  function rn(e) {
    Ht !== null && Ht.tag === 0 && !(_ & 6) && Tn();
    var t = _;
    _ |= 1;
    var n = Ge.transition,
      r = K;
    try {
      if (((Ge.transition = null), (K = 1), e)) return e();
    } finally {
      (K = r), (Ge.transition = n), (_ = t), !(_ & 6) && Ft();
    }
  }
  function vo() {
    (He = Rn.current), q(Rn);
  }
  function ln(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Zc(n)), fe !== null))
      for (n = fe.return; n !== null; ) {
        var r = n;
        switch ((Ci(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Yr();
            break;
          case 3:
            jn(), q(Re), q(Se), Fi();
            break;
          case 5:
            Ii(r);
            break;
          case 4:
            jn();
            break;
          case 13:
            q(re);
            break;
          case 19:
            q(re);
            break;
          case 10:
            Li(r.type._context);
            break;
          case 22:
          case 23:
            vo();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Kt(e.current, null)),
      (xe = He = t),
      (pe = 0),
      (hr = null),
      (so = hl = nn = 0),
      (Oe = vr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            (i.next = l), (r.next = o);
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function pa(e, t) {
    do {
      var n = fe;
      try {
        if ((Ai(), (ll.current = sl), il)) {
          for (var r = le.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          il = !1;
        }
        if (
          ((tn = 0),
          (he = de = le = null),
          (ar = !1),
          (cr = 0),
          (uo.current = null),
          n === null || n.return === null)
        ) {
          (pe = 1), (hr = t), (fe = null);
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            s = t;
          if (
            ((t = xe),
            (u.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              g = u,
              w = g.tag;
            if (!(g.mode & 1) && (w === 0 || w === 11 || w === 15)) {
              var v = g.alternate;
              v
                ? ((g.updateQueue = v.updateQueue),
                  (g.memoizedState = v.memoizedState),
                  (g.lanes = v.lanes))
                : ((g.updateQueue = null), (g.memoizedState = null));
            }
            var E = _s(o);
            if (E !== null) {
              (E.flags &= -257),
                Vs(E, o, u, i, t),
                E.mode & 1 && Fs(i, p, t),
                (t = E),
                (s = p);
              var P = t.updateQueue;
              if (P === null) {
                var z = new Set();
                z.add(s), (t.updateQueue = z);
              } else P.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                Fs(i, p, t), yo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && u.mode & 1) {
            var se = _s(o);
            if (se !== null) {
              !(se.flags & 65536) && (se.flags |= 256),
                Vs(se, o, u, i, t),
                zi(An(s, u));
              break e;
            }
          }
          (i = s = An(s, u)),
            pe !== 4 && (pe = 2),
            vr === null ? (vr = [i]) : vr.push(i),
            (i = o);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var f = Is(i, s, t);
                ss(i, f);
                break e;
              case 1:
                u = s;
                var a = i.type,
                  d = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Bt === null || !Bt.has(d))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var x = Ds(i, u, t);
                  ss(i, x);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        va(n);
      } catch (j) {
        (t = j), fe === n && n !== null && (fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = ml.current;
    return (ml.current = sl), e === null ? sl : e;
  }
  function yo() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || (!(nn & 268435455) && !(hl & 268435455)) || Qt(ve, xe);
  }
  function kl(e, t) {
    var n = _;
    _ |= 2;
    var r = ma();
    (ve !== e || xe !== t) && ((Pt = null), ln(e, t));
    do
      try {
        xf();
        break;
      } catch (l) {
        pa(e, l);
      }
    while (!0);
    if ((Ai(), (_ = n), (ml.current = r), fe !== null)) throw Error(m(261));
    return (ve = null), (xe = 0), pe;
  }
  function xf() {
    for (; fe !== null; ) ha(fe);
  }
  function kf() {
    for (; fe !== null && !Ka(); ) ha(fe);
  }
  function ha(e) {
    var t = wa(e.alternate, e, He);
    (e.memoizedProps = e.pendingProps),
      t === null ? va(e) : (fe = t),
      (uo.current = null);
  }
  function va(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = mf(n, t)), n !== null)) {
          (n.flags &= 32767), (fe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (pe = 6), (fe = null);
          return;
        }
      } else if (((n = pf(n, t, He)), n !== null)) {
        fe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    pe === 0 && (pe = 5);
  }
  function on(e, t, n) {
    var r = K,
      l = Ge.transition;
    try {
      (Ge.transition = null), (K = 1), Sf(e, t, n, r);
    } finally {
      (Ge.transition = l), (K = r);
    }
    return null;
  }
  function Sf(e, t, n, r) {
    do Tn();
    while (Ht !== null);
    if (_ & 6) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (tc(e, i),
      e === ve && ((fe = ve = null), (xe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        yl ||
        ((yl = !0),
        xa(Nr, function () {
          return Tn(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Ge.transition), (Ge.transition = null);
      var o = K;
      K = 1;
      var u = _;
      (_ |= 4),
        (uo.current = null),
        vf(e, n),
        oa(n, e),
        Bc(vi),
        (Mr = !!hi),
        (vi = hi = null),
        (e.current = n),
        yf(n),
        Ya(),
        (_ = u),
        (K = o),
        (Ge.transition = i);
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Ht = e), (gl = l)),
      (i = e.pendingLanes),
      i === 0 && (Bt = null),
      Xa(n.stateNode),
      Ie(e, ue()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (vl) throw ((vl = !1), (e = co), (co = null), e);
    return (
      gl & 1 && e.tag !== 0 && Tn(),
      (i = e.pendingLanes),
      i & 1 ? (e === fo ? yr++ : ((yr = 0), (fo = e))) : (yr = 0),
      Ft(),
      null
    );
  }
  function Tn() {
    if (Ht !== null) {
      var e = lu(gl),
        t = Ge.transition,
        n = K;
      try {
        if (((Ge.transition = null), (K = 16 > e ? 16 : e), Ht === null))
          var r = !1;
        else {
          if (((e = Ht), (Ht = null), (gl = 0), _ & 6)) throw Error(m(331));
          var l = _;
          for (_ |= 4, C = e.current; C !== null; ) {
            var i = C,
              o = i.child;
            if (C.flags & 16) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (C = p; C !== null; ) {
                    var g = C;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, g, i);
                    }
                    var w = g.child;
                    if (w !== null) (w.return = g), (C = w);
                    else
                      for (; C !== null; ) {
                        g = C;
                        var v = g.sibling,
                          E = g.return;
                        if ((ta(g), g === p)) {
                          C = null;
                          break;
                        }
                        if (v !== null) {
                          (v.return = E), (C = v);
                          break;
                        }
                        C = E;
                      }
                  }
                }
                var P = i.alternate;
                if (P !== null) {
                  var z = P.child;
                  if (z !== null) {
                    P.child = null;
                    do {
                      var se = z.sibling;
                      (z.sibling = null), (z = se);
                    } while (z !== null);
                  }
                }
                C = i;
              }
            }
            if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
            else
              e: for (; C !== null; ) {
                if (((i = C), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  (f.return = i.return), (C = f);
                  break e;
                }
                C = i.return;
              }
          }
          var a = e.current;
          for (C = a; C !== null; ) {
            o = C;
            var d = o.child;
            if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (C = d);
            else
              e: for (o = a; C !== null; ) {
                if (((u = C), u.flags & 2048))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, u);
                    }
                  } catch (j) {
                    oe(u, u.return, j);
                  }
                if (u === o) {
                  C = null;
                  break e;
                }
                var x = u.sibling;
                if (x !== null) {
                  (x.return = u.return), (C = x);
                  break e;
                }
                C = u.return;
              }
          }
          if (
            ((_ = l), Ft(), dt && typeof dt.onPostCommitFiberRoot == "function")
          )
            try {
              dt.onPostCommitFiberRoot(Pr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (K = n), (Ge.transition = t);
      }
    }
    return !1;
  }
  function ya(e, t, n) {
    (t = An(n, t)),
      (t = Is(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = je()),
      e !== null && (Bn(e, 1, t), Ie(e, t));
  }
  function oe(e, t, n) {
    if (e.tag === 3) ya(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ya(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Bt === null || !Bt.has(r)))
          ) {
            (e = An(n, e)),
              (e = Ds(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = je()),
              t !== null && (Bn(t, 1, e), Ie(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ef(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = je()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (xe & n) === n &&
        (pe === 4 || (pe === 3 && (xe & 130023424) === xe && 500 > ue() - ao)
          ? ln(e, 0)
          : (so |= n)),
      Ie(e, t);
  }
  function ga(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
        : (t = 1));
    var n = je();
    (e = Et(e, t)), e !== null && (Bn(e, t, n), Ie(e, n));
  }
  function Cf(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), ga(e, n);
  }
  function Nf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(t), ga(e, n);
  }
  var wa;
  wa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Re.current) Te = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), df(e, t, n);
        Te = !!(e.flags & 131072);
      }
    else (Te = !1), te && t.flags & 1048576 && $u(t, Gr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        fl(e, t), (e = t.pendingProps);
        var l = kn(t, Se.current);
        zn(t, n), (l = Ui(null, t, r, e, l, n));
        var i = Bi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Me(r) ? ((i = !0), Jr(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ti(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ji(t, r, e, n),
              (t = qi(null, t, r, !0, i, n)))
            : ((t.tag = 0), te && i && Ei(t), ze(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (fl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = zf(r)),
            (e = lt(r, e)),
            l)
          ) {
            case 0:
              t = Gi(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = Us(null, t, r, e, n);
              break e;
            case 14:
              t = Bs(null, t, r, lt(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Gi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Ks(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ys(t), e === null)) throw Error(m(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            us(e, t),
            nl(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (l = An(Error(m(423)), t)), (t = Js(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = An(Error(m(424)), t)), (t = Js(e, t, r, n, l));
              break e;
            } else
              for (
                Be = Ot(t.stateNode.containerInfo.firstChild),
                  Ue = t,
                  te = !0,
                  rt = null,
                  n = is(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Cn(), r === l)) {
              t = Nt(e, t, n);
              break e;
            }
            ze(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          cs(t),
          e === null && Pi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          yi(r, l) ? (o = null) : i !== null && yi(r, i) && (t.flags |= 32),
          Qs(e, t),
          ze(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && Pi(t), null;
      case 13:
        return Zs(e, t, n);
      case 4:
        return (
          Oi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Nn(t, null, r, n)) : ze(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Us(e, t, r, l, n)
        );
      case 7:
        return ze(e, t, t.pendingProps, n), t.child;
      case 8:
        return ze(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ze(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            X(br, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (nt(i.value, o)) {
              if (i.children === l.children && !Re.current) {
                t = Nt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var u = i.dependencies;
                if (u !== null) {
                  o = i.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        (s = Ct(-1, n & -n)), (s.tag = 2);
                        var p = i.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var g = p.pending;
                          g === null
                            ? (s.next = s)
                            : ((s.next = g.next), (g.next = s)),
                            (p.pending = s);
                        }
                      }
                      (i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Ri(i.return, n, t),
                        (u.lanes |= n);
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(m(341));
                  (o.lanes |= n),
                    (u = o.alternate),
                    u !== null && (u.lanes |= n),
                    Ri(o, n, t),
                    (o = i.sibling);
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      (i.return = o.return), (o = i);
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          ze(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          zn(t, n),
          (l = Ze(l)),
          (r = r(l)),
          (t.flags |= 1),
          ze(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = lt(r, t.pendingProps)),
          (l = lt(r.type, l)),
          Bs(e, t, r, l, n)
        );
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          fl(e, t),
          (t.tag = 1),
          Me(r) ? ((e = !0), Jr(t)) : (e = !1),
          zn(t, n),
          Ts(t, r, l),
          Ji(t, r, l, n),
          qi(null, t, r, !0, e, n)
        );
      case 19:
        return Gs(e, t, n);
      case 22:
        return Ws(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function xa(e, t) {
    return bo(e, t);
  }
  function Pf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function qe(e, t, n, r) {
    return new Pf(e, t, n, r);
  }
  function go(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function zf(e) {
    if (typeof e == "function") return go(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = qe(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Sl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) go(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Ae:
          return un(n.children, l, i, t);
        case Ke:
          (o = 8), (l |= 8);
          break;
        case zt:
          return (
            (e = qe(12, n, t, l | 2)), (e.elementType = zt), (e.lanes = i), e
          );
        case Fe:
          return (e = qe(13, n, t, l)), (e.elementType = Fe), (e.lanes = i), e;
        case et:
          return (e = qe(19, n, t, l)), (e.elementType = et), (e.lanes = i), e;
        case ie:
          return El(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                o = 10;
                break e;
              case Jt:
                o = 9;
                break e;
              case ct:
                o = 11;
                break e;
              case ft:
                o = 14;
                break e;
              case Le:
                (o = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = qe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function un(e, t, n, r) {
    return (e = qe(7, e, r, t)), (e.lanes = n), e;
  }
  function El(e, t, n, r) {
    return (
      (e = qe(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wo(e, t, n) {
    return (e = qe(6, e, null, t)), (e.lanes = n), e;
  }
  function xo(e, t, n) {
    return (
      (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function jf(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Yl(0)),
      (this.expirationTimes = Yl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ko(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new jf(e, t, n, u, s)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = qe(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ti(i),
      e
    );
  }
  function Af(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Pe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ka(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Zt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Me(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Me(n)) return Xu(e, n, t);
    }
    return t;
  }
  function Sa(e, t, n, r, l, i, o, u, s) {
    return (
      (e = ko(n, r, !0, e, l, i, o, u, s)),
      (e.context = ka(null)),
      (n = e.current),
      (r = je()),
      (l = Wt(n)),
      (i = Ct(r, l)),
      (i.callback = t ?? null),
      Vt(n, i, l),
      (e.current.lanes = l),
      Bn(e, l, r),
      Ie(e, r),
      e
    );
  }
  function Cl(e, t, n, r) {
    var l = t.current,
      i = je(),
      o = Wt(l);
    return (
      (n = ka(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(l, t, o)),
      e !== null && (ut(e, l, o, i), tl(e, l, o)),
      o
    );
  }
  function Nl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ea(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function So(e, t) {
    Ea(e, t), (e = e.alternate) && Ea(e, t);
  }
  function Lf() {
    return null;
  }
  var Ca =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Eo(e) {
    this._internalRoot = e;
  }
  (Pl.prototype.render = Eo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      Cl(e, t, null, null);
    }),
    (Pl.prototype.unmount = Eo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          rn(function () {
            Cl(null, e, null, null);
          }),
            (t[wt] = null);
        }
      });
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = uu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      Rt.splice(n, 0, e), n === 0 && cu(e);
    }
  };
  function Co(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Na() {}
  function Rf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var p = Nl(o);
          i.call(p);
        };
      }
      var o = Sa(t, r, e, 0, null, !1, !1, "", Na);
      return (
        (e._reactRootContainer = o),
        (e[wt] = o.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var p = Nl(s);
        u.call(p);
      };
    }
    var s = ko(e, 0, !1, null, null, !1, !1, "", Na);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        Cl(t, s, n, r);
      }),
      s
    );
  }
  function jl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = Nl(o);
          u.call(s);
        };
      }
      Cl(t, o, e, l);
    } else o = Rf(n, t, e, l, r);
    return Nl(o);
  }
  (iu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Un(t.pendingLanes);
          n !== 0 &&
            (Jl(t, n | 1), Ie(t, ue()), !(_ & 6) && ((Mn = ue() + 500), Ft()));
        }
        break;
      case 13:
        rn(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = je();
            ut(r, e, 1, l);
          }
        }),
          So(e, 1);
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = je();
          ut(t, e, 134217728, n);
        }
        So(e, 134217728);
      }
    }),
    (ou = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = je();
          ut(n, e, t, r);
        }
        So(e, t);
      }
    }),
    (uu = function () {
      return K;
    }),
    (su = function (e, t) {
      var n = K;
      try {
        return (K = e), t();
      } finally {
        K = n;
      }
    }),
    (Ul = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ml(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Kr(r);
                if (!l) throw Error(m(90));
                Mo(r), Ml(r, l);
              }
            }
          }
          break;
        case "textarea":
          Fo(e, n);
          break;
        case "select":
          (t = n.value), t != null && an(e, !!n.multiple, t, !1);
      }
    }),
    (Yo = ho),
    (Jo = rn);
  var Mf = { usingClientEntryPoint: !1, Events: [lr, wn, Kr, Qo, Ko, ho] },
    gr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Tf = {
      bundleType: gr.bundleType,
      version: gr.version,
      rendererPackageName: gr.rendererPackageName,
      rendererConfig: gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = qo(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Lf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Al.isDisabled && Al.supportsFiber)
      try {
        (Pr = Al.inject(Tf)), (dt = Al);
      } catch {}
  }
  return (
    (De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf),
    (De.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Co(t)) throw Error(m(200));
      return Af(e, t, null, n);
    }),
    (De.createRoot = function (e, t) {
      if (!Co(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Ca;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ko(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Eo(t)
      );
    }),
    (De.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = qo(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (De.flushSync = function (e) {
      return rn(e);
    }),
    (De.hydrate = function (e, t, n) {
      if (!zl(t)) throw Error(m(200));
      return jl(null, e, t, !0, n);
    }),
    (De.hydrateRoot = function (e, t, n) {
      if (!Co(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Ca;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Sa(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[wt] = t.current),
        tr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Pl(t);
    }),
    (De.render = function (e, t, n) {
      if (!zl(t)) throw Error(m(200));
      return jl(null, e, t, !1, n);
    }),
    (De.unmountComponentAtNode = function (e) {
      if (!zl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            jl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[wt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (De.unstable_batchedUpdates = ho),
    (De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!zl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return jl(e, t, n, !1, r);
    }),
    (De.version = "18.3.1-next-f1338f8080-20240426"),
    De
  );
}
var Ta;
function Bf() {
  if (Ta) return zo.exports;
  Ta = 1;
  function k() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (R) {
        console.error(R);
      }
  }
  return k(), (zo.exports = Uf()), zo.exports;
}
var Oa;
function Hf() {
  if (Oa) return Ll;
  Oa = 1;
  var k = Bf();
  return (Ll.createRoot = k.createRoot), (Ll.hydrateRoot = k.hydrateRoot), Ll;
}
var Wf = Hf();
const Qf = "/assets/paper-airplane-DOIEMsft.png";
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = (k) => k.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ia = (...k) =>
    k
      .filter((R, m, J) => !!R && R.trim() !== "" && J.indexOf(R) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Yf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = sn.forwardRef(
  (
    {
      color: k = "currentColor",
      size: R = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: J,
      className: I = "",
      children: H,
      iconNode: ae,
      ...ce
    },
    W
  ) =>
    sn.createElement(
      "svg",
      {
        ref: W,
        ...Yf,
        width: R,
        height: R,
        stroke: k,
        strokeWidth: J ? (Number(m) * 24) / Number(R) : m,
        className: Ia("lucide", I),
        ...ce,
      },
      [
        ...ae.map(([ge, me]) => sn.createElement(ge, me)),
        ...(Array.isArray(H) ? H : [H]),
      ]
    )
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const st = (k, R) => {
  const m = sn.forwardRef(({ className: J, ...I }, H) =>
    sn.createElement(Jf, {
      ref: H,
      iconNode: R,
      className: Ia(`lucide-${Kf(k)}`, J),
      ...I,
    })
  );
  return (m.displayName = `${k}`), m;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = st("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = st("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = st("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = st("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $f = st("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = st("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ed = st("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = st("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nd = st("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rd = st("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ld = st("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  id = "/assets/VisualStudio-CxHtSIk4.webp",
  od = "/assets/Flutter-CqqH61jH.png",
  ud =
    "data:image/png;base64,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",
  sd = "/assets/unreal.wep-BHCmCw0J.webp",
  ad = "/assets/openai-CwXcp9Fu.png",
  cd =
    "data:image/png;base64,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",
  fd = "/assets/android-Bn-zYj7s.gif",
  dd = "/assets/nvidia-BH8FyiVn.png",
  pd = "/assets/python-DsObMupP.png",
  md =
    "data:image/png;base64,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",
  hd = "/assets/kotlin-Dxf2zdr0.png",
  vd = "/assets/html-DpZoZqu4.png",
  yd = "/assets/deno-Db8CUkmf.png",
  gd = "/assets/cpp-CgEm_Wwn.png",
  Lo = [
    { label: "Home", href: "https://google.com" },
    { label: "About", href: "https://google.com" },
    { label: "Skills", href: "https://google.com" },
    { label: "Projects", href: "https://google.com" },
    { label: "Contact", href: "https://google.com" },
  ],
  wd = [
    { img: yd, skillname: "Deno 2.0", id: 1 },
    { img: md, skillname: "React", id: 2 },
    { img: gd, skillname: "C++", id: 3 },
    { img: vd, skillname: "Html", id: 4 },
    { img: hd, skillname: "Kotlin", id: 5 },
    { img: pd, skillname: "python", id: 6 },
  ],
  Da = [
    { icon: h.jsx(Gf, {}) },
    { icon: h.jsx($f, {}) },
    { icon: h.jsx(qf, {}) },
    { icon: h.jsx(rd, {}) },
    { icon: h.jsx(Xf, {}) },
  ],
  xd = [
    { pro: id },
    { pro: od },
    { pro: dd },
    { pro: cd },
    { pro: sd },
    { pro: fd },
    { pro: ad },
    { pro: ud },
  ],
  kd = [
    { coni: h.jsx(nd, {}), coninfo: "+91 xxxxx xxxxx", herf: "#" },
    { coni: h.jsx(bf, {}), coninfo: "Example@Gamil.com", herf: "#" },
    { coni: h.jsx(ed, {}), coninfo: "street four,New Work,USA", herf: "#" },
  ],
  Sd = () => {
    const [k, R] = sn.useState(!1),
      m = () => {
        R(!k);
      };
    return h.jsxs("nav", {
      className:
        "sticky font-poppins top-0 z-50 py-3 bg-dark1 text-white flex justify-between w-full",
      children: [
        h.jsx("div", {
          className: "mx-4",
          children: h.jsx("span", { children: "Portfolio" }),
        }),
        h.jsx("div", {
          className: "hidden md:flex items-center",
          children: h.jsx("ul", {
            className: "inline-flex mx-5 px-5",
            children: Lo.map((J, I) =>
              h.jsx(
                "li",
                {
                  className: "mx-4",
                  children: h.jsx("a", {
                    className: "text-lightwhite",
                    href: J.herf,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: J.label,
                  }),
                },
                I
              )
            ),
          }),
        }),
        h.jsx("div", {
          className: "hidden md:block mx-4",
          children: h.jsx("button", {
            className:
              "bg-gradient-to-r from-linblue to-linpurple px-3 py-2 rounded-full text-xs",
            children: "Discuss For Projects",
          }),
        }),
        h.jsx("div", {
          className: "px-2 mx-2 md:hidden",
          children: h.jsx("button", {
            onClick: m,
            children: k ? h.jsx(ld, {}) : h.jsx(td, {}),
          }),
        }),
        k &&
          h.jsx("div", {
            className:
              "fixed z-50 top-12 flex justify-center items-center w-full bg-dark1 py-3",
            children: h.jsxs("ul", {
              className: "md:hidden flex flex-col items-center",
              children: [
                Lo.map((J, I) =>
                  h.jsx(
                    "li",
                    {
                      className: "mx-4 my-3",
                      children: h.jsx("a", {
                        className: "text-lightwhite",
                        href: J.herf,
                        children: J.label,
                      }),
                    },
                    I
                  )
                ),
                h.jsx("button", {
                  className:
                    "bg-gradient-to-r from-linblue to-linpurple px-3 py-2 rounded-full text-xs w-36",
                  children: "Discuss For Projects",
                }),
              ],
            }),
          }),
      ],
    });
  },
  Fa = "/assets/person-C4DLiCfj.png",
  Ed = () =>
    h.jsx("div", {
      className: "bg-black1",
      children: h.jsxs("div", {
        className:
          "py-20 md:flex flex-col justify-center items-center md:w-9/12 mx-auto xl:translate-y-32",
        children: [
          h.jsxs("div", {
            className:
              "z-10 md:mx-5 flex flex-col text-white font-grotesk font-thin text-4xl lg:text-7xl self-start px-12",
            children: [
              h.jsx("h1", { children: "This is your," }),
              h.jsx("span", { children: "Software Devloper" }),
              h.jsx("span", {
                className: "text-bluep font-bold",
                children: "Vipin Gavhade",
              }),
              h.jsx("p", {
                className:
                  "text-sm md:w-4/3 ml-2 mt-4 font-shatoshi text-gray-500",
                children:
                  "Hello i am a Software devloper with 1 yaer of work expericence in coding i worked on several projects in past",
              }),
              h.jsxs("div", {
                className: "flex flex-col md:flex-row gap-1 mt-5",
                children: [
                  h.jsx("button", {
                    className:
                      "bg-gradient-to-r from-linblue to-linpurple w-56 rounded-full px-2 py-1 text-[16px] font-shatoshi font-bold ",
                    children: "Discuss for Projects",
                  }),
                  h.jsxs("button", {
                    className:
                      "flex items-center rounded-full px-3 py-2 text-[16px] font-shatoshi font-bold ",
                    children: ["View Projects", h.jsx(Zf, {})],
                  }),
                ],
              }),
            ],
          }),
          h.jsx("div", {
            className:
              "hidden bg-gradient-to-tr from-transparent to-dark1 rounded-lg w-full h-64 justify-end xl:flex relative -translate-y-60",
            children: h.jsx("img", {
              src: Fa,
              className: "w-96 absolute bottom-0 grayscale",
            }),
          }),
        ],
      }),
    }),
  Cd = () =>
    h.jsxs("div", {
      className: "bg-black1 py-5",
      children: [
        h.jsxs("h1", {
          id: "about",
          className: "font-grotesk text-2xl text-white text-center mb-10",
          children: [
            "About ",
            h.jsx("span", {
              className: "text-bluep font-bold",
              children: "Me",
            }),
          ],
        }),
        h.jsxs("div", {
          className:
            "flex justify-evenly items-center pb-10 w-10/12 mx-auto rounded-lg bg-gradient-to-tr from-transparent to-dark1",
          children: [
            h.jsx("div", {
              className: "hidden md:block",
              children: h.jsx("img", { src: Fa, alt: "" }),
            }),
            h.jsxs("div", {
              className: "text-white flex flex-col space-y-5 justify-start",
              children: [
                h.jsxs("div", {
                  className:
                    "mr-0 inline-flex flex-col text-[16px] md:text-2xl gap-2",
                  children: [
                    h.jsx("h1", {
                      className:
                        "mb-3 text-2xl md:text-5xl lg:text-8xl text-bluep",
                      children: "Vipin Gavhade",
                    }),
                    h.jsx("p", { children: "B.Tech in Computer Science" }),
                    h.jsx("p", { children: "Software Developer" }),
                    h.jsx("p", { children: "graguated from cdgi" }),
                  ],
                }),
                h.jsx("div", {
                  children: h.jsxs("ul", {
                    className: "flex items-center",
                    children: [
                      h.jsx("h1", {
                        className: "hidden lg:block text-xl mr-4",
                        children: "Follow me:",
                      }),
                      Da.map((k, R) =>
                        h.jsx(
                          "li",
                          {
                            className:
                              "mr-2 md:mr-5 bg-dark1 p-2 rounded-full hover:scale-90",
                            herf: "#",
                            children: k.icon,
                          },
                          R
                        )
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Nd = () =>
    h.jsxs("div", {
      className: "bg-black1 flex flex-col",
      children: [
        h.jsx("div", {
          className: "text-center mb-4",
          children: h.jsxs("h1", {
            className: "text-white text-2xl font-grotesk",
            children: [
              "My ",
              h.jsx("span", {
                className: "text-bluep font-bold",
                children: "Skills",
              }),
            ],
          }),
        }),
        h.jsx("div", {
          className: "grid grid-cols-2 px-5 mx-auto lg:grid-cols-3",
          children: wd.map((k, R) =>
            h.jsx(
              "div",
              {
                className: "mx-5 my-3 md:my-11 md:mx-11",
                children: h.jsxs("div", {
                  id: k.id,
                  className:
                    "flex py-3 px-3 h-fit flex-col md:w-[270px] rounded-xl text-white justify-center items-center bg-gradient-to-tr from-transparent to-dark1",
                  children: [
                    h.jsx("img", { src: k.img, className: "w-28  xl:w-70" }),
                    h.jsx("a", {
                      href: "http://google.com",
                      className: "mt-2 text-xl",
                      children: k.skillname,
                    }),
                  ],
                }),
              },
              R
            )
          ),
        }),
      ],
    }),
  Pd = () =>
    h.jsxs("div", {
      className: "flex flex-col justify-center items-center bg-black1",
      children: [
        h.jsx("div", {
          className: "text-center my-5 flex flex-col gap-2",
          children: h.jsxs("h1", {
            id: "about",
            className: "font-grotesk text-2xl text-white text-center mb-10",
            children: [
              "My ",
              h.jsx("span", {
                className: "text-bluep font-bold",
                children: "Projects",
              }),
            ],
          }),
        }),
        h.jsxs("div", {
          className: "relative w-full flex justify-center items-center",
          children: [
            h.jsx("div", {
              className:
                "grid grid-rows-2 md:grid-flow-col h-72 md:h-full no-scrollbar flex-wrap overflow-y-scroll md:overflow-visible w-full md:flex justify-evenly",
              children: xd.map((k, R) =>
                h.jsx(
                  "div",
                  {
                    className: "blur-[2px] brightness-50 md:px-3 py-3",
                    children: h.jsx("img", {
                      className: "w-60 md:w-72 bg-white rounded-lg",
                      src: k.pro,
                      alt: "",
                    }),
                  },
                  R
                )
              ),
            }),
            h.jsx("div", {
              className: "absolute origin-center ",
              children: h.jsx("a", {
                className:
                  "bg-gradient-to-r from-linblue to-linpurple px-3 py-2 rounded-full text-white text-xl tracking-tight",
                href: "",
                children: "View all Projects",
              }),
            }),
          ],
        }),
      ],
    }),
  zd = () =>
    h.jsxs("div", {
      id: "contact",
      className:
        "flex flex-col justify-center items-center px-2 py-4 bg-black1",
      children: [
        h.jsxs("div", {
          className:
            "w-70 mt-16 mb-8 md:w-94 space-x-7 mx-auto px-5 md:px-9 rounded-lg flex items-center justify-center bg-gradient-to-tr from-transparent to-dark1",
          children: [
            h.jsx("img", { src: Qf, className: "w-24 md:w-32 " }),
            h.jsxs("div", {
              className:
                "text-lightwhite w-68 text-xs lg:text-xl mr-5 text-start",
              children: [
                h.jsx("h1", {
                  className: "text-xl",
                  children: "Have any Projects idea?",
                }),
                h.jsx("p", {
                  children:
                    "if you have any idea about project i can make for you contact me",
                }),
              ],
            }),
            h.jsx("a", {
              className:
                "hidden md:block text-white text-center px-3 py-2 bg-gradient-to-r from-linblue to-linpurple rounded-full w-32",
              href: "",
              children: "Contact Me",
            }),
          ],
        }),
        h.jsxs("div", {
          className: "flex flex-col px-6 md:flex-row md:justify-evenly w-full",
          children: [
            h.jsxs("div", {
              className: "my-4 text-lightwhite",
              children: [
                h.jsx("h1", {
                  className: "text-white text-xl",
                  children: "Vipin gavhade",
                }),
                h.jsx("p", {}),
                h.jsx("ul", {
                  className: "flex",
                  children: Da.map((k, R) =>
                    h.jsx(
                      "div",
                      {
                        className: "text-lightwhite mt-4 mr-4",
                        children: k.icon,
                      },
                      R
                    )
                  ),
                }),
              ],
            }),
            h.jsxs("div", {
              className: "text-lightwhite my-4",
              children: [
                h.jsx("h1", {
                  className: "text-white text-xl mb-4",
                  children: "Quick Links",
                }),
                h.jsx("ul", {
                  children: Lo.map((k, R) =>
                    h.jsx(
                      "li",
                      {
                        className: "mb-2",
                        children: h.jsx("a", {
                          href: k.href,
                          children: k.label,
                        }),
                      },
                      R
                    )
                  ),
                }),
              ],
            }),
            h.jsxs("div", {
              className: "text-lightwhite my-4",
              children: [
                h.jsx("h1", {
                  className: "text-white text-xl mb-4",
                  children: "Contacts",
                }),
                h.jsx("ul", {
                  children: kd.map((k, R) =>
                    h.jsx(
                      "li",
                      {
                        className: "mb-2",
                        children: h.jsxs("a", {
                          href: k.herf,
                          className: "inline-flex gap-4",
                          children: [k.coni, k.coninfo],
                        }),
                      },
                      R
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
function jd() {
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx(Sd, {}),
      h.jsx(Ed, {}),
      h.jsx(Cd, {}),
      h.jsx(Nd, {}),
      h.jsx(Pd, {}),
      h.jsx(zd, {}),
    ],
  });
}
Wf.createRoot(document.getElementById("root")).render(
  h.jsx(sn.StrictMode, { children: h.jsx(jd, {}) })
);
