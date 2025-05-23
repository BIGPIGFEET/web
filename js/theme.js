"use strict";
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {})
}(this, (function(e) {
    function t(e) {
        return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e
    }
    function n(e) {
        return e instanceof t(e).Element || e instanceof Element
    }
    function o(e) {
        return e instanceof t(e).HTMLElement || e instanceof HTMLElement
    }
    function r(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
    }
    function i(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect()
          , r = 1
          , i = 1;
        return o(e) && t && (t = e.offsetHeight,
        0 < (e = e.offsetWidth) && (r = n.width / e || 1),
        0 < t && (i = n.height / t || 1)),
        {
            width: N(n.width / r),
            height: N(n.height / i),
            top: N(n.top / i),
            right: N(n.right / r),
            bottom: N(n.bottom / i),
            left: N(n.left / r),
            x: N(n.left / r),
            y: N(n.top / i)
        }
    }
    function a(e) {
        return {
            scrollLeft: (e = t(e)).pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function s(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }
    function f(e) {
        return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }
    function p(e) {
        return i(f(e)).left + a(e).scrollLeft
    }
    function c(e) {
        return t(e).getComputedStyle(e)
    }
    function l(e) {
        return e = c(e),
        /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
    }
    function u(e, n, r) {
        void 0 === r && (r = !1);
        var c, u = o(n);
        if (c = o(n)) {
            var d = (c = n.getBoundingClientRect()).height / n.offsetHeight || 1;
            c = 1 !== (c.width / n.offsetWidth || 1) || 1 !== d
        }
        d = c,
        c = f(n),
        e = i(e, d),
        d = {
            scrollLeft: 0,
            scrollTop: 0
        };
        var h = {
            x: 0,
            y: 0
        };
        return (u || !u && !r) && (("body" !== s(n) || l(c)) && (d = n !== t(n) && o(n) ? {
            scrollLeft: n.scrollLeft,
            scrollTop: n.scrollTop
        } : a(n)),
        o(n) ? ((h = i(n, !0)).x += n.clientLeft,
        h.y += n.clientTop) : c && (h.x = p(c))),
        {
            x: e.left + d.scrollLeft - h.x,
            y: e.top + d.scrollTop - h.y,
            width: e.width,
            height: e.height
        }
    }
    function d(e) {
        var t = i(e)
          , n = e.offsetWidth
          , o = e.offsetHeight;
        return 1 >= Math.abs(t.width - n) && (n = t.width),
        1 >= Math.abs(t.height - o) && (o = t.height),
        {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: o
        }
    }
    function h(e) {
        return "html" === s(e) ? e : e.assignedSlot || e.parentNode || (r(e) ? e.host : null) || f(e)
    }
    function m(e) {
        return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : o(e) && l(e) ? e : m(h(e))
    }
    function v(e, n) {
        var o;
        void 0 === n && (n = []);
        var r = m(e);
        return e = r === (null == (o = e.ownerDocument) ? void 0 : o.body),
        o = t(r),
        r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r,
        n = n.concat(r),
        e ? n : n.concat(v(h(r)))
    }
    function g(e) {
        return o(e) && "fixed" !== c(e).position ? e.offsetParent : null
    }
    function b(e) {
        for (var n = t(e), r = g(e); r && 0 <= ["table", "td", "th"].indexOf(s(r)) && "static" === c(r).position; )
            r = g(r);
        if (r && ("html" === s(r) || "body" === s(r) && "static" === c(r).position))
            return n;
        if (!r)
            e: {
                if (r = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
                -1 === navigator.userAgent.indexOf("Trident") || !o(e) || "fixed" !== c(e).position)
                    for (e = h(e); o(e) && 0 > ["html", "body"].indexOf(s(e)); ) {
                        var i = c(e);
                        if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || r && "filter" === i.willChange || r && i.filter && "none" !== i.filter) {
                            r = e;
                            break e
                        }
                        e = e.parentNode
                    }
                r = null
            }
        return r || n
    }
    function y(e) {
        function t(e) {
            o.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                o.has(e) || (e = n.get(e)) && t(e)
            }
            )),
            r.push(e)
        }
        var n = new Map
          , o = new Set
          , r = [];
        return e.forEach((function(e) {
            n.set(e.name, e)
        }
        )),
        e.forEach((function(e) {
            o.has(e.name) || t(e)
        }
        )),
        r
    }
    function w(e) {
        var t;
        return function() {
            return t || (t = new Promise((function(n) {
                Promise.resolve().then((function() {
                    t = void 0,
                    n(e())
                }
                ))
            }
            ))),
            t
        }
    }
    function x(e) {
        return e.split("-")[0]
    }
    function O(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t))
            return !0;
        if (n && r(n))
            do {
                if (t && e.isSameNode(t))
                    return !0;
                t = t.parentNode || t.host
            } while (t);
        return !1
    }
    function j(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }
    function E(e, n) {
        if ("viewport" === n) {
            n = t(e);
            var r = f(e);
            n = n.visualViewport;
            var s = r.clientWidth;
            r = r.clientHeight;
            var l = 0
              , u = 0;
            n && (s = n.width,
            r = n.height,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = n.offsetLeft,
            u = n.offsetTop)),
            e = j(e = {
                width: s,
                height: r,
                x: l + p(e),
                y: u
            })
        } else
            o(n) ? ((e = i(n)).top += n.clientTop,
            e.left += n.clientLeft,
            e.bottom = e.top + n.clientHeight,
            e.right = e.left + n.clientWidth,
            e.width = n.clientWidth,
            e.height = n.clientHeight,
            e.x = e.left,
            e.y = e.top) : (u = f(e),
            e = f(u),
            s = a(u),
            n = null == (r = u.ownerDocument) ? void 0 : r.body,
            r = z(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
            l = z(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
            u = -s.scrollLeft + p(u),
            s = -s.scrollTop,
            "rtl" === c(n || e).direction && (u += z(e.clientWidth, n ? n.clientWidth : 0) - r),
            e = j({
                width: r,
                height: l,
                x: u,
                y: s
            }));
        return e
    }
    function D(e, t, r) {
        return t = "clippingParents" === t ? function(e) {
            var t = v(h(e))
              , r = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && o(e) ? b(e) : e;
            return n(r) ? t.filter((function(e) {
                return n(e) && O(e, r) && "body" !== s(e)
            }
            )) : []
        }(e) : [].concat(t),
        (r = (r = [].concat(t, [r])).reduce((function(t, n) {
            return n = E(e, n),
            t.top = z(n.top, t.top),
            t.right = F(n.right, t.right),
            t.bottom = F(n.bottom, t.bottom),
            t.left = z(n.left, t.left),
            t
        }
        ), E(e, r[0]))).width = r.right - r.left,
        r.height = r.bottom - r.top,
        r.x = r.left,
        r.y = r.top,
        r
    }
    function L(e) {
        return e.split("-")[1]
    }
    function M(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
    }
    function P(e) {
        var t = e.reference
          , n = e.element
          , o = (e = e.placement) ? x(e) : null;
        e = e ? L(e) : null;
        var r = t.x + t.width / 2 - n.width / 2
          , i = t.y + t.height / 2 - n.height / 2;
        switch (o) {
        case "top":
            r = {
                x: r,
                y: t.y - n.height
            };
            break;
        case "bottom":
            r = {
                x: r,
                y: t.y + t.height
            };
            break;
        case "right":
            r = {
                x: t.x + t.width,
                y: i
            };
            break;
        case "left":
            r = {
                x: t.x - n.width,
                y: i
            };
            break;
        default:
            r = {
                x: t.x,
                y: t.y
            }
        }
        if (null != (o = o ? M(o) : null))
            switch (i = "y" === o ? "height" : "width",
            e) {
            case "start":
                r[o] -= t[i] / 2 - n[i] / 2;
                break;
            case "end":
                r[o] += t[i] / 2 - n[i] / 2
            }
        return r
    }
    function k(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }
    function W(e, t) {
        return t.reduce((function(t, n) {
            return t[n] = e,
            t
        }
        ), {})
    }
    function A(e, t) {
        void 0 === t && (t = {});
        var o = t;
        t = void 0 === (t = o.placement) ? e.placement : t;
        var r = o.boundary
          , a = void 0 === r ? "clippingParents" : r
          , s = void 0 === (r = o.rootBoundary) ? "viewport" : r;
        r = void 0 === (r = o.elementContext) ? "popper" : r;
        var p = o.altBoundary
          , c = void 0 !== p && p;
        o = k("number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : W(o, V)),
        p = e.rects.popper,
        a = D(n(c = e.elements[c ? "popper" === r ? "reference" : "popper" : r]) ? c : c.contextElement || f(e.elements.popper), a, s),
        c = P({
            reference: s = i(e.elements.reference),
            element: p,
            strategy: "absolute",
            placement: t
        }),
        p = j(Object.assign({}, p, c)),
        s = "popper" === r ? p : s;
        var l = {
            top: a.top - s.top + o.top,
            bottom: s.bottom - a.bottom + o.bottom,
            left: a.left - s.left + o.left,
            right: s.right - a.right + o.right
        };
        if (e = e.modifiersData.offset,
        "popper" === r && e) {
            var u = e[t];
            Object.keys(l).forEach((function(e) {
                var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1
                  , n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                l[e] += u[n] * t
            }
            ))
        }
        return l
    }
    function B() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some((function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }
        ))
    }
    function H(e) {
        void 0 === e && (e = {});
        var t = e.defaultModifiers
          , o = void 0 === t ? [] : t
          , r = void 0 === (e = e.defaultOptions) ? Y : e;
        return function(e, t, i) {
            function a() {
                f.forEach((function(e) {
                    return e()
                }
                )),
                f = []
            }
            void 0 === i && (i = r);
            var s = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Y, r),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            }
              , f = []
              , p = !1
              , c = {
                state: s,
                setOptions: function(i) {
                    return i = "function" == typeof i ? i(s.options) : i,
                    a(),
                    s.options = Object.assign({}, r, s.options, i),
                    s.scrollParents = {
                        reference: n(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
                        popper: v(t)
                    },
                    i = function(e) {
                        var t = y(e);
                        return U.reduce((function(e, n) {
                            return e.concat(t.filter((function(e) {
                                return e.phase === n
                            }
                            )))
                        }
                        ), [])
                    }(function(e) {
                        var t = e.reduce((function(e, t) {
                            var n = e[t.name];
                            return e[t.name] = n ? Object.assign({}, n, t, {
                                options: Object.assign({}, n.options, t.options),
                                data: Object.assign({}, n.data, t.data)
                            }) : t,
                            e
                        }
                        ), {});
                        return Object.keys(t).map((function(e) {
                            return t[e]
                        }
                        ))
                    }([].concat(o, s.options.modifiers))),
                    s.orderedModifiers = i.filter((function(e) {
                        return e.enabled
                    }
                    )),
                    s.orderedModifiers.forEach((function(e) {
                        var t = e.name
                          , n = e.options;
                        n = void 0 === n ? {} : n,
                        "function" == typeof (e = e.effect) && (t = e({
                            state: s,
                            name: t,
                            instance: c,
                            options: n
                        }),
                        f.push(t || function() {}
                        ))
                    }
                    )),
                    c.update()
                },
                forceUpdate: function() {
                    if (!p) {
                        var e = s.elements
                          , t = e.reference;
                        if (B(t, e = e.popper))
                            for (s.rects = {
                                reference: u(t, b(e), "fixed" === s.options.strategy),
                                popper: d(e)
                            },
                            s.reset = !1,
                            s.placement = s.options.placement,
                            s.orderedModifiers.forEach((function(e) {
                                return s.modifiersData[e.name] = Object.assign({}, e.data)
                            }
                            )),
                            t = 0; t < s.orderedModifiers.length; t++)
                                if (!0 === s.reset)
                                    s.reset = !1,
                                    t = -1;
                                else {
                                    var n = s.orderedModifiers[t];
                                    e = n.fn;
                                    var o = n.options;
                                    o = void 0 === o ? {} : o,
                                    n = n.name,
                                    "function" == typeof e && (s = e({
                                        state: s,
                                        options: o,
                                        name: n,
                                        instance: c
                                    }) || s)
                                }
                    }
                },
                update: w((function() {
                    return new Promise((function(e) {
                        c.forceUpdate(),
                        e(s)
                    }
                    ))
                }
                )),
                destroy: function() {
                    a(),
                    p = !0
                }
            };
            return B(e, t) ? (c.setOptions(i).then((function(e) {
                !p && i.onFirstUpdate && i.onFirstUpdate(e)
            }
            )),
            c) : c
        }
    }
    function T(e) {
        var n, o = e.popper, r = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, p = e.position, l = e.gpuAcceleration, u = e.adaptive;
        if (!0 === (e = e.roundOffsets)) {
            e = s.y;
            var d = window.devicePixelRatio || 1;
            e = {
                x: X(X(s.x * d) / d) || 0,
                y: X(X(e * d) / d) || 0
            }
        } else
            e = "function" == typeof e ? e(s) : s;
        e = void 0 === (e = (d = e).x) ? 0 : e,
        d = void 0 === (d = d.y) ? 0 : d;
        var h = s.hasOwnProperty("x");
        s = s.hasOwnProperty("y");
        var m, v = "left", g = "top", y = window;
        if (u) {
            var w = b(o)
              , x = "clientHeight"
              , O = "clientWidth";
            w === t(o) && ("static" !== c(w = f(o)).position && "absolute" === p && (x = "scrollHeight",
            O = "scrollWidth")),
            "top" !== i && ("left" !== i && "right" !== i || "end" !== a) || (g = "bottom",
            d -= w[x] - r.height,
            d *= l ? 1 : -1),
            "left" !== i && ("top" !== i && "bottom" !== i || "end" !== a) || (v = "right",
            e -= w[O] - r.width,
            e *= l ? 1 : -1)
        }
        return o = Object.assign({
            position: p
        }, u && Q),
        l ? Object.assign({}, o, ((m = {})[g] = s ? "0" : "",
        m[v] = h ? "0" : "",
        m.transform = 1 >= (y.devicePixelRatio || 1) ? "translate(" + e + "px, " + d + "px)" : "translate3d(" + e + "px, " + d + "px, 0)",
        m)) : Object.assign({}, o, ((n = {})[g] = s ? d + "px" : "",
        n[v] = h ? e + "px" : "",
        n.transform = "",
        n))
    }
    function R(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return te[e]
        }
        ))
    }
    function S(e) {
        return e.replace(/start|end/g, (function(e) {
            return ne[e]
        }
        ))
    }
    function C(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }
    function q(e) {
        return ["top", "right", "bottom", "left"].some((function(t) {
            return 0 <= e[t]
        }
        ))
    }
    var N = Math.round
      , V = ["top", "bottom", "right", "left"]
      , I = V.reduce((function(e, t) {
        return e.concat([t + "-start", t + "-end"])
    }
    ), [])
      , _ = [].concat(V, ["auto"]).reduce((function(e, t) {
        return e.concat([t, t + "-start", t + "-end"])
    }
    ), [])
      , U = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" ")
      , z = Math.max
      , F = Math.min
      , X = Math.round
      , Y = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    }
      , G = {
        passive: !0
    }
      , J = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var n = e.state
              , o = e.instance
              , r = (e = e.options).scroll
              , i = void 0 === r || r
              , a = void 0 === (e = e.resize) || e
              , s = t(n.elements.popper)
              , f = [].concat(n.scrollParents.reference, n.scrollParents.popper);
            return i && f.forEach((function(e) {
                e.addEventListener("scroll", o.update, G)
            }
            )),
            a && s.addEventListener("resize", o.update, G),
            function() {
                i && f.forEach((function(e) {
                    e.removeEventListener("scroll", o.update, G)
                }
                )),
                a && s.removeEventListener("resize", o.update, G)
            }
        },
        data: {}
    }
      , K = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e) {
            var t = e.state;
            t.modifiersData[e.name] = P({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    }
      , Q = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    }
      , Z = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state
              , n = e.options;
            e = void 0 === (e = n.gpuAcceleration) || e;
            var o = n.adaptive;
            o = void 0 === o || o,
            n = void 0 === (n = n.roundOffsets) || n,
            e = {
                placement: x(t.placement),
                variation: L(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: e
            },
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, T(Object.assign({}, e, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: o,
                roundOffsets: n
            })))),
            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, T(Object.assign({}, e, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: n
            })))),
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    }
      , $ = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach((function(e) {
                var n = t.styles[e] || {}
                  , r = t.attributes[e] || {}
                  , i = t.elements[e];
                o(i) && s(i) && (Object.assign(i.style, n),
                Object.keys(r).forEach((function(e) {
                    var t = r[e];
                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                }
                )))
            }
            ))
        },
        effect: function(e) {
            var t = e.state
              , n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(t.elements.popper.style, n.popper),
            t.styles = n,
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function() {
                Object.keys(t.elements).forEach((function(e) {
                    var r = t.elements[e]
                      , i = t.attributes[e] || {};
                    e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                        return e[t] = "",
                        e
                    }
                    ), {}),
                    o(r) && s(r) && (Object.assign(r.style, e),
                    Object.keys(i).forEach((function(e) {
                        r.removeAttribute(e)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    }
      , ee = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var t = e.state
              , n = e.name
              , o = void 0 === (e = e.options.offset) ? [0, 0] : e
              , r = (e = _.reduce((function(e, n) {
                var r = t.rects
                  , i = x(n)
                  , a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1
                  , s = "function" == typeof o ? o(Object.assign({}, r, {
                    placement: n
                })) : o;
                return r = (r = s[0]) || 0,
                s = ((s = s[1]) || 0) * a,
                i = 0 <= ["left", "right"].indexOf(i) ? {
                    x: s,
                    y: r
                } : {
                    x: r,
                    y: s
                },
                e[n] = i,
                e
            }
            ), {}))[t.placement]
              , i = r.x;
            r = r.y,
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i,
            t.modifiersData.popperOffsets.y += r),
            t.modifiersData[n] = e
        }
    }
      , te = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    }
      , ne = {
        start: "end",
        end: "start"
    }
      , oe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state
              , n = e.options;
            if (e = e.name,
            !t.modifiersData[e]._skip) {
                var o = n.mainAxis;
                o = void 0 === o || o;
                var r = n.altAxis;
                r = void 0 === r || r;
                var i = n.fallbackPlacements
                  , a = n.padding
                  , s = n.boundary
                  , f = n.rootBoundary
                  , p = n.altBoundary
                  , c = n.flipVariations
                  , l = void 0 === c || c
                  , u = n.allowedAutoPlacements;
                c = x(n = t.options.placement),
                i = i || (c !== n && l ? function(e) {
                    if ("auto" === x(e))
                        return [];
                    var t = R(e);
                    return [S(e), t, S(t)]
                }(n) : [R(n)]);
                var d = [n].concat(i).reduce((function(e, n) {
                    return e.concat("auto" === x(n) ? function(e, t) {
                        void 0 === t && (t = {});
                        var n = t.boundary
                          , o = t.rootBoundary
                          , r = t.padding
                          , i = t.flipVariations
                          , a = t.allowedAutoPlacements
                          , s = void 0 === a ? _ : a
                          , f = L(t.placement);
                        0 === (i = (t = f ? i ? I : I.filter((function(e) {
                            return L(e) === f
                        }
                        )) : V).filter((function(e) {
                            return 0 <= s.indexOf(e)
                        }
                        ))).length && (i = t);
                        var p = i.reduce((function(t, i) {
                            return t[i] = A(e, {
                                placement: i,
                                boundary: n,
                                rootBoundary: o,
                                padding: r
                            })[x(i)],
                            t
                        }
                        ), {});
                        return Object.keys(p).sort((function(e, t) {
                            return p[e] - p[t]
                        }
                        ))
                    }(t, {
                        placement: n,
                        boundary: s,
                        rootBoundary: f,
                        padding: a,
                        flipVariations: l,
                        allowedAutoPlacements: u
                    }) : n)
                }
                ), []);
                n = t.rects.reference,
                i = t.rects.popper;
                var h = new Map;
                c = !0;
                for (var m = d[0], v = 0; v < d.length; v++) {
                    var g = d[v]
                      , b = x(g)
                      , y = "start" === L(g)
                      , w = 0 <= ["top", "bottom"].indexOf(b)
                      , O = w ? "width" : "height"
                      , j = A(t, {
                        placement: g,
                        boundary: s,
                        rootBoundary: f,
                        altBoundary: p,
                        padding: a
                    });
                    if (y = w ? y ? "right" : "left" : y ? "bottom" : "top",
                    n[O] > i[O] && (y = R(y)),
                    O = R(y),
                    w = [],
                    o && w.push(0 >= j[b]),
                    r && w.push(0 >= j[y], 0 >= j[O]),
                    w.every((function(e) {
                        return e
                    }
                    ))) {
                        m = g,
                        c = !1;
                        break
                    }
                    h.set(g, w)
                }
                if (c)
                    for (o = function(e) {
                        var t = d.find((function(t) {
                            if (t = h.get(t))
                                return t.slice(0, e).every((function(e) {
                                    return e
                                }
                                ))
                        }
                        ));
                        if (t)
                            return m = t,
                            "break"
                    }
                    ,
                    r = l ? 3 : 1; 0 < r && "break" !== o(r); r--)
                        ;
                t.placement !== m && (t.modifiersData[e]._skip = !0,
                t.placement = m,
                t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    }
      , re = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state
              , n = e.options;
            e = e.name;
            var o = n.mainAxis
              , r = void 0 === o || o
              , i = void 0 !== (o = n.altAxis) && o;
            o = void 0 === (o = n.tether) || o;
            var a = n.tetherOffset
              , s = void 0 === a ? 0 : a
              , f = A(t, {
                boundary: n.boundary,
                rootBoundary: n.rootBoundary,
                padding: n.padding,
                altBoundary: n.altBoundary
            });
            n = x(t.placement);
            var p = L(t.placement)
              , c = !p
              , l = M(n);
            n = "x" === l ? "y" : "x",
            a = t.modifiersData.popperOffsets;
            var u = t.rects.reference
              , h = t.rects.popper
              , m = "function" == typeof s ? s(Object.assign({}, t.rects, {
                placement: t.placement
            })) : s;
            if (s = {
                x: 0,
                y: 0
            },
            a) {
                if (r || i) {
                    var v = "y" === l ? "top" : "left"
                      , g = "y" === l ? "bottom" : "right"
                      , y = "y" === l ? "height" : "width"
                      , w = a[l]
                      , O = a[l] + f[v]
                      , j = a[l] - f[g]
                      , E = o ? -h[y] / 2 : 0
                      , D = "start" === p ? u[y] : h[y];
                    p = "start" === p ? -h[y] : -u[y],
                    h = t.elements.arrow,
                    h = o && h ? d(h) : {
                        width: 0,
                        height: 0
                    };
                    var P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                    v = P[v],
                    g = P[g],
                    h = z(0, F(u[y], h[y])),
                    D = c ? u[y] / 2 - E - h - v - m : D - h - v - m,
                    u = c ? -u[y] / 2 + E + h + g + m : p + h + g + m,
                    c = t.elements.arrow && b(t.elements.arrow),
                    m = t.modifiersData.offset ? t.modifiersData.offset[t.placement][l] : 0,
                    c = a[l] + D - m - (c ? "y" === l ? c.clientTop || 0 : c.clientLeft || 0 : 0),
                    u = a[l] + u - m,
                    r && (r = o ? F(O, c) : O,
                    j = o ? z(j, u) : j,
                    r = z(r, F(w, j)),
                    a[l] = r,
                    s[l] = r - w),
                    i && (r = (i = a[n]) + f["x" === l ? "top" : "left"],
                    f = i - f["x" === l ? "bottom" : "right"],
                    r = o ? F(r, c) : r,
                    o = o ? z(f, u) : f,
                    o = z(r, F(i, o)),
                    a[n] = o,
                    s[n] = o - i)
                }
                t.modifiersData[e] = s
            }
        },
        requiresIfExists: ["offset"]
    }
      , ie = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = x(n.placement);
            if (e = M(s),
            s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width",
            i && a) {
                r = k("number" != typeof (r = "function" == typeof (r = r.padding) ? r(Object.assign({}, n.rects, {
                    placement: n.placement
                })) : r) ? r : W(r, V));
                var f = d(i)
                  , p = "y" === e ? "top" : "left"
                  , c = "y" === e ? "bottom" : "right"
                  , l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s];
                a = a[e] - n.rects.reference[e],
                a = (i = (i = b(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2),
                s = z(r[p], F(a, i - f[s] - r[c])),
                n.modifiersData[o] = ((t = {})[e] = s,
                t.centerOffset = s - a,
                t)
            }
        },
        effect: function(e) {
            var t = e.state;
            if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) {
                if ("string" == typeof e && !(e = t.elements.popper.querySelector(e)))
                    return;
                O(t.elements.popper, e) && (t.elements.arrow = e)
            }
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    }
      , ae = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(e) {
            var t = e.state;
            e = e.name;
            var n = t.rects.reference
              , o = t.rects.popper
              , r = t.modifiersData.preventOverflow
              , i = A(t, {
                elementContext: "reference"
            })
              , a = A(t, {
                altBoundary: !0
            });
            n = C(i, n),
            o = C(a, o, r),
            r = q(n),
            a = q(o),
            t.modifiersData[e] = {
                referenceClippingOffsets: n,
                popperEscapeOffsets: o,
                isReferenceHidden: r,
                hasPopperEscaped: a
            },
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": r,
                "data-popper-escaped": a
            })
        }
    }
      , se = H({
        defaultModifiers: [J, K, Z, $]
    })
      , fe = [J, K, Z, $, ee, oe, re, ie, ae]
      , pe = H({
        defaultModifiers: fe
    });
    e.applyStyles = $,
    e.arrow = ie,
    e.computeStyles = Z,
    e.createPopper = pe,
    e.createPopperLite = se,
    e.defaultModifiers = fe,
    e.detectOverflow = A,
    e.eventListeners = J,
    e.flip = oe,
    e.hide = ae,
    e.offset = ee,
    e.popperGenerator = H,
    e.popperOffsets = K,
    e.preventOverflow = re,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));

/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function(t) {
    "use strict";
    function e(t) {
        if (t && t.__esModule)
            return t;
        const e = Object.create(null);
        if (t)
            for (const i in t)
                if ("default" !== i) {
                    const s = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: ()=>t[i]
                    })
                }
        return e.default = t,
        Object.freeze(e)
    }
    const i = e(t)
      , s = "transitionend"
      , n = t=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith("."))
                return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
            e = i && "#" !== i ? i.trim() : null
        }
        return e
    }
      , o = t=>{
        const e = n(t);
        return e && document.querySelector(e) ? e : null
    }
      , r = t=>{
        const e = n(t);
        return e ? document.querySelector(e) : null
    }
      , a = t=>{
        t.dispatchEvent(new Event(s))
    }
      , l = t=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , c = t=>l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
      , h = (t,e,i)=>{
        Object.keys(i).forEach((s=>{
            const n = i[s]
              , o = e[s]
              , r = o && l(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
            var a;
            if (!new RegExp(n).test(r))
                throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)
        }
        ))
    }
      , d = t=>!(!l(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
      , u = t=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , g = t=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? g(t.parentNode) : null
    }
      , _ = ()=>{}
      , f = t=>{
        t.offsetHeight
    }
      , p = ()=>{
        const {jQuery: t} = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
      , m = []
      , b = ()=>"rtl" === document.documentElement.dir
      , v = t=>{
        var e;
        e = ()=>{
            const e = p();
            if (e) {
                const i = t.NAME
                  , s = e.fn[i];
                e.fn[i] = t.jQueryInterface,
                e.fn[i].Constructor = t,
                e.fn[i].noConflict = ()=>(e.fn[i] = s,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (()=>{
            m.forEach((t=>t()))
        }
        )),
        m.push(e)) : e()
    }
      , y = t=>{
        "function" == typeof t && t()
    }
      , E = (t,e,i=!0)=>{
        if (!i)
            return void y(t);
        const n = (t=>{
            if (!t)
                return 0;
            let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
            const s = Number.parseFloat(e)
              , n = Number.parseFloat(i);
            return s || n ? (e = e.split(",")[0],
            i = i.split(",")[0],
            1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
        }
        )(e) + 5;
        let o = !1;
        const r = ({target: i})=>{
            i === e && (o = !0,
            e.removeEventListener(s, r),
            y(t))
        }
        ;
        e.addEventListener(s, r),
        setTimeout((()=>{
            o || a(e)
        }
        ), n)
    }
      , w = (t,e,i,s)=>{
        let n = t.indexOf(e);
        if (-1 === n)
            return t[!i && s ? t.length - 1 : 0];
        const o = t.length;
        return n += i ? 1 : -1,
        s && (n = (n + o) % o),
        t[Math.max(0, Math.min(n, o - 1))]
    }
      , A = /[^.]*(?=\..*)\.|.*/
      , T = /\..*/
      , C = /::\d+$/
      , k = {};
    let L = 1;
    const S = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , O = /^(mouseenter|mouseleave)/i
      , N = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function D(t, e) {
        return e && `${e}::${L++}` || t.uidEvent || L++
    }
    function I(t) {
        const e = D(t);
        return t.uidEvent = e,
        k[e] = k[e] || {},
        k[e]
    }
    function P(t, e, i=null) {
        const s = Object.keys(t);
        for (let n = 0, o = s.length; n < o; n++) {
            const o = t[s[n]];
            if (o.originalHandler === e && o.delegationSelector === i)
                return o
        }
        return null
    }
    function x(t, e, i) {
        const s = "string" == typeof e
          , n = s ? i : e;
        let o = H(t);
        return N.has(o) || (o = t),
        [s, n, o]
    }
    function M(t, e, i, s, n) {
        if ("string" != typeof e || !t)
            return;
        if (i || (i = s,
        s = null),
        O.test(e)) {
            const t = t=>function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            s ? s = t(s) : i = t(i)
        }
        const [o,r,a] = x(e, i, s)
          , l = I(t)
          , c = l[a] || (l[a] = {})
          , h = P(c, r, o ? i : null);
        if (h)
            return void (h.oneOff = h.oneOff && n);
        const d = D(r, e.replace(A, ""))
          , u = o ? function(t, e, i) {
            return function s(n) {
                const o = t.querySelectorAll(e);
                for (let {target: r} = n; r && r !== this; r = r.parentNode)
                    for (let a = o.length; a--; )
                        if (o[a] === r)
                            return n.delegateTarget = r,
                            s.oneOff && $.off(t, n.type, e, i),
                            i.apply(r, [n]);
                return null
            }
        }(t, i, s) : function(t, e) {
            return function i(s) {
                return s.delegateTarget = t,
                i.oneOff && $.off(t, s.type, e),
                e.apply(t, [s])
            }
        }(t, i);
        u.delegationSelector = o ? i : null,
        u.originalHandler = r,
        u.oneOff = n,
        u.uidEvent = d,
        c[d] = u,
        t.addEventListener(a, u, o)
    }
    function j(t, e, i, s, n) {
        const o = P(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)),
        delete e[i][o.uidEvent])
    }
    function H(t) {
        return t = t.replace(T, ""),
        S[t] || t
    }
    const $ = {
        on(t, e, i, s) {
            M(t, e, i, s, !1)
        },
        one(t, e, i, s) {
            M(t, e, i, s, !0)
        },
        off(t, e, i, s) {
            if ("string" != typeof e || !t)
                return;
            const [n,o,r] = x(e, i, s)
              , a = r !== e
              , l = I(t)
              , c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r])
                    return;
                return void j(t, l, r, o, n ? i : null)
            }
            c && Object.keys(l).forEach((i=>{
                !function(t, e, i, s) {
                    const n = e[i] || {};
                    Object.keys(n).forEach((o=>{
                        if (o.includes(s)) {
                            const s = n[o];
                            j(t, e, i, s.originalHandler, s.delegationSelector)
                        }
                    }
                    ))
                }(t, l, i, e.slice(1))
            }
            ));
            const h = l[r] || {};
            Object.keys(h).forEach((i=>{
                const s = i.replace(C, "");
                if (!a || e.includes(s)) {
                    const e = h[i];
                    j(t, l, r, e.originalHandler, e.delegationSelector)
                }
            }
            ))
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            const s = p()
              , n = H(e)
              , o = e !== n
              , r = N.has(n);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && s && (a = s.Event(e, i),
            s(t).trigger(a),
            l = !a.isPropagationStopped(),
            c = !a.isImmediatePropagationStopped(),
            h = a.isDefaultPrevented()),
            r ? (d = document.createEvent("HTMLEvents"),
            d.initEvent(n, l, !0)) : d = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== i && Object.keys(i).forEach((t=>{
                Object.defineProperty(d, t, {
                    get: ()=>i[t]
                })
            }
            )),
            h && d.preventDefault(),
            c && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
        }
    }
      , B = new Map
      , z = {
        set(t, e, i) {
            B.has(t) || B.set(t, new Map);
            const s = B.get(t);
            s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        },
        get: (t,e)=>B.has(t) && B.get(t).get(e) || null,
        remove(t, e) {
            if (!B.has(t))
                return;
            const i = B.get(t);
            i.delete(e),
            0 === i.size && B.delete(t)
        }
    };
    class R {
        constructor(t) {
            (t = c(t)) && (this._element = t,
            z.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            z.remove(this._element, this.constructor.DATA_KEY),
            $.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach((t=>{
                this[t] = null
            }
            ))
        }
        _queueCallback(t, e, i=!0) {
            E(t, e, i)
        }
        static getInstance(t) {
            return z.get(c(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }
    const F = (t,e="hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`
          , s = t.NAME;
        $.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
            u(this))
                return;
            const n = r(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(n)[e]()
        }
        ))
    }
    ;
    class q extends R {
        static get NAME() {
            return "alert"
        }
        close() {
            if ($.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((()=>this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            $.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    F(q, "close"),
    v(q);
    const W = '[data-bs-toggle="button"]';
    class U extends R {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = U.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    function K(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function V(t) {
        return t.replace(/[A-Z]/g, (t=>`-${t.toLowerCase()}`))
    }
    $.on(document, "click.bs.button.data-api", W, (t=>{
        t.preventDefault();
        const e = t.target.closest(W);
        U.getOrCreateInstance(e).toggle()
    }
    )),
    v(U);
    const X = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${V(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${V(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {};
            return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((i=>{
                let s = i.replace(/^bs/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length),
                e[s] = K(t.dataset[i])
            }
            )),
            e
        },
        getDataAttribute: (t,e)=>K(t.getAttribute(`data-bs-${V(e)}`)),
        offset(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            }
        },
        position: t=>({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    }
      , Y = {
        find: (t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t,e=document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),
        parents(t, e) {
            const i = [];
            let s = t.parentNode;
            for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType; )
                s.matches(e) && i.push(s),
                s = s.parentNode;
            return i
        },
        prev(t, e) {
            let i = t.previousElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let i = t.nextElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");
            return this.find(e, t).filter((t=>!u(t) && d(t)))
        }
    }
      , Q = "carousel"
      , G = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , Z = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , J = "next"
      , tt = "prev"
      , et = "left"
      , it = "right"
      , st = {
        ArrowLeft: it,
        ArrowRight: et
    }
      , nt = "slid.bs.carousel"
      , ot = "active"
      , rt = ".active.carousel-item";
    class at extends R {
        constructor(t, e) {
            super(t),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._indicatorsElement = Y.findOne(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return G
        }
        static get NAME() {
            return Q
        }
        next() {
            this._slide(J)
        }
        nextWhenVisible() {
            !document.hidden && d(this._element) && this.next()
        }
        prev() {
            this._slide(tt)
        }
        pause(t) {
            t || (this._isPaused = !0),
            Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = Y.findOne(rt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void $.one(this._element, nt, (()=>this.to(t)));
            if (e === t)
                return this.pause(),
                void this.cycle();
            const i = t > e ? J : tt;
            this._slide(i, this._items[t])
        }
        _getConfig(t) {
            return t = {
                ...G,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            h(Q, t, Z),
            t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40)
                return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0,
            e && this._slide(e > 0 ? it : et)
        }
        _addEventListeners() {
            this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (t=>this._keydown(t))),
            "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", (t=>this.pause(t))),
            $.on(this._element, "mouseleave.bs.carousel", (t=>this.cycle(t)))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t=>this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType)
              , e = e=>{
                t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
            }
              , i = t=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
            }
              , s = e=>{
                t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout((t=>this.cycle(t)), 500 + this._config.interval))
            }
            ;
            Y.find(".carousel-item img", this._element).forEach((t=>{
                $.on(t, "dragstart.bs.carousel", (t=>t.preventDefault()))
            }
            )),
            this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", (t=>e(t))),
            $.on(this._element, "pointerup.bs.carousel", (t=>s(t))),
            this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", (t=>e(t))),
            $.on(this._element, "touchmove.bs.carousel", (t=>i(t))),
            $.on(this._element, "touchend.bs.carousel", (t=>s(t))))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = st[t.key];
            e && (t.preventDefault(),
            this._slide(e))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const i = t === J;
            return w(this._items, e, i, this._config.wrap)
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t)
              , s = this._getItemIndex(Y.findOne(rt, this._element));
            return $.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: s,
                to: i
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = Y.findOne(".active", this._indicatorsElement);
                e.classList.remove(ot),
                e.removeAttribute("aria-current");
                const i = Y.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < i.length; e++)
                    if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        i[e].classList.add(ot),
                        i[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || Y.findOne(rt, this._element);
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const i = this._directionToOrder(t)
              , s = Y.findOne(rt, this._element)
              , n = this._getItemIndex(s)
              , o = e || this._getItemByOrder(i, s)
              , r = this._getItemIndex(o)
              , a = Boolean(this._interval)
              , l = i === J
              , c = l ? "carousel-item-start" : "carousel-item-end"
              , h = l ? "carousel-item-next" : "carousel-item-prev"
              , d = this._orderToDirection(i);
            if (o && o.classList.contains(ot))
                return void (this._isSliding = !1);
            if (this._isSliding)
                return;
            if (this._triggerSlideEvent(o, d).defaultPrevented)
                return;
            if (!s || !o)
                return;
            this._isSliding = !0,
            a && this.pause(),
            this._setActiveIndicatorElement(o),
            this._activeElement = o;
            const u = ()=>{
                $.trigger(this._element, nt, {
                    relatedTarget: o,
                    direction: d,
                    from: n,
                    to: r
                })
            }
            ;
            if (this._element.classList.contains("slide")) {
                o.classList.add(h),
                f(o),
                s.classList.add(c),
                o.classList.add(c);
                const t = ()=>{
                    o.classList.remove(c, h),
                    o.classList.add(ot),
                    s.classList.remove(ot, h, c),
                    this._isSliding = !1,
                    setTimeout(u, 0)
                }
                ;
                this._queueCallback(t, s, !0)
            } else
                s.classList.remove(ot),
                o.classList.add(ot),
                this._isSliding = !1,
                u();
            a && this.cycle()
        }
        _directionToOrder(t) {
            return [it, et].includes(t) ? b() ? t === et ? tt : J : t === et ? J : tt : t
        }
        _orderToDirection(t) {
            return [J, tt].includes(t) ? b() ? t === tt ? et : it : t === tt ? it : et : t
        }
        static carouselInterface(t, e) {
            const i = at.getOrCreateInstance(t, e);
            let {_config: s} = i;
            "object" == typeof e && (s = {
                ...s,
                ...e
            });
            const n = "string" == typeof e ? e : s.slide;
            if ("number" == typeof e)
                i.to(e);
            else if ("string" == typeof n) {
                if (void 0 === i[n])
                    throw new TypeError(`No method named "${n}"`);
                i[n]()
            } else
                s.interval && s.ride && (i.pause(),
                i.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                at.carouselInterface(this, t)
            }
            ))
        }
        static dataApiClickHandler(t) {
            const e = r(this);
            if (!e || !e.classList.contains("carousel"))
                return;
            const i = {
                ...X.getDataAttributes(e),
                ...X.getDataAttributes(this)
            }
              , s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1),
            at.carouselInterface(e, i),
            s && at.getInstance(e).to(s),
            t.preventDefault()
        }
    }
    $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", at.dataApiClickHandler),
    $.on(window, "load.bs.carousel.data-api", (()=>{
        const t = Y.find('[data-bs-ride="carousel"]');
        for (let e = 0, i = t.length; e < i; e++)
            at.carouselInterface(t[e], at.getInstance(t[e]))
    }
    )),
    v(at);
    const lt = "collapse"
      , ct = {
        toggle: !0,
        parent: null
    }
      , ht = {
        toggle: "boolean",
        parent: "(null|element)"
    }
      , dt = "show"
      , ut = "collapse"
      , gt = "collapsing"
      , _t = "collapsed"
      , ft = ":scope .collapse .collapse"
      , pt = '[data-bs-toggle="collapse"]';
    class mt extends R {
        constructor(t, e) {
            super(t),
            this._isTransitioning = !1,
            this._config = this._getConfig(e),
            this._triggerArray = [];
            const i = Y.find(pt);
            for (let t = 0, e = i.length; t < e; t++) {
                const e = i[t]
                  , s = o(e)
                  , n = Y.find(s).filter((t=>t === this._element));
                null !== s && n.length && (this._selector = s,
                this._triggerArray.push(e))
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return ct
        }
        static get NAME() {
            return lt
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t, e = [];
            if (this._config.parent) {
                const t = Y.find(ft, this._config.parent);
                e = Y.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e=>!t.includes(e)))
            }
            const i = Y.findOne(this._selector);
            if (e.length) {
                const s = e.find((t=>i !== t));
                if (t = s ? mt.getInstance(s) : null,
                t && t._isTransitioning)
                    return
            }
            if ($.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            e.forEach((e=>{
                i !== e && mt.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(),
                t || z.set(e, "bs.collapse", null)
            }
            ));
            const s = this._getDimension();
            this._element.classList.remove(ut),
            this._element.classList.add(gt),
            this._element.style[s] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const n = `scroll${s[0].toUpperCase() + s.slice(1)}`;
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(gt),
                this._element.classList.add(ut, dt),
                this._element.style[s] = "",
                $.trigger(this._element, "shown.bs.collapse")
            }
            ), this._element, !0),
            this._element.style[s] = `${this._element[n]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            f(this._element),
            this._element.classList.add(gt),
            this._element.classList.remove(ut, dt);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t]
                  , i = r(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0,
            this._element.style[t] = "",
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(gt),
                this._element.classList.add(ut),
                $.trigger(this._element, "hidden.bs.collapse")
            }
            ), this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(dt)
        }
        _getConfig(t) {
            return (t = {
                ...ct,
                ...X.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle),
            t.parent = c(t.parent),
            h(lt, t, ht),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = Y.find(ft, this._config.parent);
            Y.find(pt, this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{
                const e = r(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }
            ))
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach((t=>{
                e ? t.classList.remove(_t) : t.classList.add(_t),
                t.setAttribute("aria-expanded", e)
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = mt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.collapse.data-api", pt, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = o(this);
        Y.find(e).forEach((t=>{
            mt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        }
        ))
    }
    )),
    v(mt);
    const bt = "dropdown"
      , vt = "Escape"
      , yt = "Space"
      , Et = "ArrowUp"
      , wt = "ArrowDown"
      , At = new RegExp("ArrowUp|ArrowDown|Escape")
      , Tt = "click.bs.dropdown.data-api"
      , Ct = "keydown.bs.dropdown.data-api"
      , kt = "show"
      , Lt = '[data-bs-toggle="dropdown"]'
      , St = ".dropdown-menu"
      , Ot = b() ? "top-end" : "top-start"
      , Nt = b() ? "top-start" : "top-end"
      , Dt = b() ? "bottom-end" : "bottom-start"
      , It = b() ? "bottom-start" : "bottom-end"
      , Pt = b() ? "left-start" : "right-start"
      , xt = b() ? "right-start" : "left-start"
      , Mt = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }
      , jt = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class Ht extends R {
        constructor(t, e) {
            super(t),
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Mt
        }
        static get DefaultType() {
            return jt
        }
        static get NAME() {
            return bt
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (u(this._element) || this._isShown(this._menu))
                return;
            const t = {
                relatedTarget: this._element
            };
            if ($.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
                return;
            const e = Ht.getParentFromElement(this._element);
            this._inNavbar ? X.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e),
            "ontouchstart"in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t=>$.on(t, "mouseover", _))),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(kt),
            this._element.classList.add(kt),
            $.trigger(this._element, "shown.bs.dropdown", t)
        }
        hide() {
            if (u(this._element) || !this._isShown(this._menu))
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>$.off(t, "mouseover", _))),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(kt),
            this._element.classList.remove(kt),
            this._element.setAttribute("aria-expanded", "false"),
            X.removeDataAttribute(this._menu, "popper"),
            $.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...X.getDataAttributes(this._element),
                ...t
            },
            h(bt, t, this.constructor.DefaultType),
            "object" == typeof t.reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper(t) {
            if (void 0 === i)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : l(this._config.reference) ? e = c(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const s = this._getPopperConfig()
              , n = s.modifiers.find((t=>"applyStyles" === t.name && !1 === t.enabled));
            this._popper = i.createPopper(e, this._menu, s),
            n && X.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(t=this._element) {
            return t.classList.contains(kt)
        }
        _getMenuElement() {
            return Y.next(this._element, St)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return Pt;
            if (t.classList.contains("dropstart"))
                return xt;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Nt : Ot : e ? It : Dt
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(d);
            i.length && w(i, e, t === wt, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ht.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key))
                return;
            const e = Y.find(Lt);
            for (let i = 0, s = e.length; i < s; i++) {
                const s = Ht.getInstance(e[i]);
                if (!s || !1 === s._config.autoClose)
                    continue;
                if (!s._isShown())
                    continue;
                const n = {
                    relatedTarget: s._element
                };
                if (t) {
                    const e = t.composedPath()
                      , i = e.includes(s._menu);
                    if (e.includes(s._element) || "inside" === s._config.autoClose && !i || "outside" === s._config.autoClose && i)
                        continue;
                    if (s._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                        continue;
                    "click" === t.type && (n.clickEvent = t)
                }
                s._completeHide(n)
            }
        }
        static getParentFromElement(t) {
            return r(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === yt || t.key !== vt && (t.key !== wt && t.key !== Et || t.target.closest(St)) : !At.test(t.key))
                return;
            const e = this.classList.contains(kt);
            if (!e && t.key === vt)
                return;
            if (t.preventDefault(),
            t.stopPropagation(),
            u(this))
                return;
            const i = this.matches(Lt) ? this : Y.prev(this, Lt)[0]
              , s = Ht.getOrCreateInstance(i);
            if (t.key !== vt)
                return t.key === Et || t.key === wt ? (e || s.show(),
                void s._selectMenuItem(t)) : void (e && t.key !== yt || Ht.clearMenus());
            s.hide()
        }
    }
    $.on(document, Ct, Lt, Ht.dataApiKeydownHandler),
    $.on(document, Ct, St, Ht.dataApiKeydownHandler),
    $.on(document, Tt, Ht.clearMenus),
    $.on(document, "keyup.bs.dropdown.data-api", Ht.clearMenus),
    $.on(document, Tt, Lt, (function(t) {
        t.preventDefault(),
        Ht.getOrCreateInstance(this).toggle()
    }
    )),
    v(Ht);
    const $t = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Bt = ".sticky-top";
    class zt {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, "paddingRight", (e=>e + t)),
            this._setElementAttributes($t, "paddingRight", (e=>e + t)),
            this._setElementAttributes(Bt, "marginRight", (e=>e - t))
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const s = this.getWidth();
            this._applyManipulationCallback(t, (t=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + s)
                    return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t)[e];
                t.style[e] = `${i(Number.parseFloat(n))}px`
            }
            ))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, "paddingRight"),
            this._resetElementAttributes($t, "paddingRight"),
            this._resetElementAttributes(Bt, "marginRight")
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && X.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t=>{
                const i = X.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (X.removeDataAttribute(t, e),
                t.style[e] = i)
            }
            ))
        }
        _applyManipulationCallback(t, e) {
            l(t) ? e(t) : Y.find(t, this._element).forEach(e)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const Rt = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }
      , Ft = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }
      , qt = "show"
      , Wt = "mousedown.bs.backdrop";
    class Ut {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(),
            this._config.isAnimated && f(this._getElement()),
            this._getElement().classList.add(qt),
            this._emulateAnimation((()=>{
                y(t)
            }
            ))) : y(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(qt),
            this._emulateAnimation((()=>{
                this.dispose(),
                y(t)
            }
            ))) : y(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = {
                ...Rt,
                ..."object" == typeof t ? t : {}
            }).rootElement = c(t.rootElement),
            h("backdrop", t, Ft),
            t
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()),
            $.on(this._getElement(), Wt, (()=>{
                y(this._config.clickCallback)
            }
            )),
            this._isAppended = !0)
        }
        dispose() {
            this._isAppended && ($.off(this._element, Wt),
            this._element.remove(),
            this._isAppended = !1)
        }
        _emulateAnimation(t) {
            E(t, this._getElement(), this._config.isAnimated)
        }
    }
    const Kt = {
        trapElement: null,
        autofocus: !0
    }
      , Vt = {
        trapElement: "element",
        autofocus: "boolean"
    }
      , Xt = ".bs.focustrap"
      , Yt = "backward";
    class Qt {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        activate() {
            const {trapElement: t, autofocus: e} = this._config;
            this._isActive || (e && t.focus(),
            $.off(document, Xt),
            $.on(document, "focusin.bs.focustrap", (t=>this._handleFocusin(t))),
            $.on(document, "keydown.tab.bs.focustrap", (t=>this._handleKeydown(t))),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            $.off(document, Xt))
        }
        _handleFocusin(t) {
            const {target: e} = t
              , {trapElement: i} = this._config;
            if (e === document || e === i || i.contains(e))
                return;
            const s = Y.focusableChildren(i);
            0 === s.length ? i.focus() : this._lastTabNavDirection === Yt ? s[s.length - 1].focus() : s[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Yt : "forward")
        }
        _getConfig(t) {
            return t = {
                ...Kt,
                ..."object" == typeof t ? t : {}
            },
            h("focustrap", t, Vt),
            t
        }
    }
    const Gt = "modal"
      , Zt = "Escape"
      , Jt = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , te = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , ee = "hidden.bs.modal"
      , ie = "show.bs.modal"
      , se = "resize.bs.modal"
      , ne = "click.dismiss.bs.modal"
      , oe = "keydown.dismiss.bs.modal"
      , re = "mousedown.dismiss.bs.modal"
      , ae = "modal-open"
      , le = "show"
      , ce = "modal-static";
    class he extends R {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._dialog = Y.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollBar = new zt
        }
        static get Default() {
            return Jt
        }
        static get NAME() {
            return Gt
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || $.trigger(this._element, ie, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isAnimated() && (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(ae),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            $.on(this._dialog, re, (()=>{
                $.one(this._element, "mouseup.dismiss.bs.modal", (t=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }
                ))
            }
            )),
            this._showBackdrop((()=>this._showElement(t))))
        }
        hide() {
            if (!this._isShown || this._isTransitioning)
                return;
            if ($.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            this._focustrap.deactivate(),
            this._element.classList.remove(le),
            $.off(this._element, ne),
            $.off(this._dialog, re),
            this._queueCallback((()=>this._hideModal()), this._element, t)
        }
        dispose() {
            [window, this._dialog].forEach((t=>$.off(t, ".bs.modal"))),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Ut({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Qt({
                trapElement: this._element
            })
        }
        _getConfig(t) {
            return t = {
                ...Jt,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            h(Gt, t, te),
            t
        }
        _showElement(t) {
            const e = this._isAnimated()
              , i = Y.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            i && (i.scrollTop = 0),
            e && f(this._element),
            this._element.classList.add(le),
            this._queueCallback((()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                $.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            ), this._dialog, e)
        }
        _setEscapeEvent() {
            this._isShown ? $.on(this._element, oe, (t=>{
                this._config.keyboard && t.key === Zt ? (t.preventDefault(),
                this.hide()) : this._config.keyboard || t.key !== Zt || this._triggerBackdropTransition()
            }
            )) : $.off(this._element, oe)
        }
        _setResizeEvent() {
            this._isShown ? $.on(window, se, (()=>this._adjustDialog())) : $.off(window, se)
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide((()=>{
                document.body.classList.remove(ae),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                $.trigger(this._element, ee)
            }
            ))
        }
        _showBackdrop(t) {
            $.on(this._element, ne, (t=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }
            )),
            this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const {classList: t, scrollHeight: e, style: i} = this._element
              , s = e > document.documentElement.clientHeight;
            !s && "hidden" === i.overflowY || t.contains(ce) || (s || (i.overflowY = "hidden"),
            t.add(ce),
            this._queueCallback((()=>{
                t.remove(ce),
                s || this._queueCallback((()=>{
                    i.overflowY = ""
                }
                ), this._dialog)
            }
            ), this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , i = e > 0;
            (!i && t && !b() || i && !t && b()) && (this._element.style.paddingLeft = `${e}px`),
            (i && !t && !b() || !i && t && b()) && (this._element.style.paddingRight = `${e}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = he.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = r(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        $.one(e, ie, (t=>{
            t.defaultPrevented || $.one(e, ee, (()=>{
                d(this) && this.focus()
            }
            ))
        }
        ));
        const i = Y.findOne(".modal.show");
        i && he.getInstance(i).hide(),
        he.getOrCreateInstance(e).toggle(this)
    }
    )),
    F(he),
    v(he);
    const de = "offcanvas"
      , ue = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , ge = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }
      , _e = "show"
      , fe = ".offcanvas.show"
      , pe = "hidden.bs.offcanvas";
    class me extends R {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get NAME() {
            return de
        }
        static get Default() {
            return ue
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._element.style.visibility = "visible",
            this._backdrop.show(),
            this._config.scroll || (new zt).hide(),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(_e),
            this._queueCallback((()=>{
                this._config.scroll || this._focustrap.activate(),
                $.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            ), this._element, !0))
        }
        hide() {
            this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove(_e),
            this._backdrop.hide(),
            this._queueCallback((()=>{
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.scroll || (new zt).reset(),
                $.trigger(this._element, pe)
            }
            ), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...ue,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            h(de, t, ge),
            t
        }
        _initializeBackDrop() {
            return new Ut({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            })
        }
        _initializeFocusTrap() {
            return new Qt({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.offcanvas", (t=>{
                this._config.keyboard && "Escape" === t.key && this.hide()
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = me.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = r(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        u(this))
            return;
        $.one(e, pe, (()=>{
            d(this) && this.focus()
        }
        ));
        const i = Y.findOne(fe);
        i && i !== e && me.getInstance(i).hide(),
        me.getOrCreateInstance(e).toggle(this)
    }
    )),
    $.on(window, "load.bs.offcanvas.data-api", (()=>Y.find(fe).forEach((t=>me.getOrCreateInstance(t).show())))),
    F(me),
    v(me);
    const be = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , ve = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , ye = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , Ee = (t,e)=>{
        const i = t.nodeName.toLowerCase();
        if (e.includes(i))
            return !be.has(i) || Boolean(ve.test(t.nodeValue) || ye.test(t.nodeValue));
        const s = e.filter((t=>t instanceof RegExp));
        for (let t = 0, e = s.length; t < e; t++)
            if (s[t].test(i))
                return !0;
        return !1
    }
    ;
    function we(t, e, i) {
        if (!t.length)
            return t;
        if (i && "function" == typeof i)
            return i(t);
        const s = (new window.DOMParser).parseFromString(t, "text/html")
          , n = [].concat(...s.body.querySelectorAll("*"));
        for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t]
              , s = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(s)) {
                i.remove();
                continue
            }
            const o = [].concat(...i.attributes)
              , r = [].concat(e["*"] || [], e[s] || []);
            o.forEach((t=>{
                Ee(t, r) || i.removeAttribute(t.nodeName)
            }
            ))
        }
        return s.body.innerHTML
    }
    const Ae = "tooltip"
      , Te = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Ce = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }
      , ke = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: b() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: b() ? "right" : "left"
    }
      , Le = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , Se = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Oe = "fade"
      , Ne = "show"
      , De = "show"
      , Ie = "out"
      , Pe = ".tooltip-inner"
      , xe = ".modal"
      , Me = "hide.bs.modal"
      , je = "hover"
      , He = "focus";
    class $e extends R {
        constructor(t, e) {
            if (void 0 === i)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this._config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return Le
        }
        static get NAME() {
            return Ae
        }
        static get Event() {
            return Se
        }
        static get DefaultType() {
            return Ce
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click,
                    e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(Ne))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout),
            $.off(this._element.closest(xe), Me, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            const t = $.trigger(this._element, this.constructor.Event.SHOW)
              , e = g(this._element)
              , s = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !s)
                return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Pe).innerHTML && (this._disposePopper(),
            this.tip.remove(),
            this.tip = null);
            const n = this.getTipElement()
              , o = (t=>{
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }
            )(this.constructor.NAME);
            n.setAttribute("id", o),
            this._element.setAttribute("aria-describedby", o),
            this._config.animation && n.classList.add(Oe);
            const r = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement
              , a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const {container: l} = this._config;
            z.set(n, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n),
            $.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, n, this._getPopperConfig(a)),
            n.classList.add(Ne);
            const c = this._resolvePossibleFunction(this._config.customClass);
            c && n.classList.add(...c.split(" ")),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>{
                $.on(t, "mouseover", _)
            }
            ));
            const h = this.tip.classList.contains(Oe);
            this._queueCallback((()=>{
                const t = this._hoverState;
                this._hoverState = null,
                $.trigger(this._element, this.constructor.Event.SHOWN),
                t === Ie && this._leave(null, this)
            }
            ), this.tip, h)
        }
        hide() {
            if (!this._popper)
                return;
            const t = this.getTipElement();
            if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
                return;
            t.classList.remove(Ne),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>$.off(t, "mouseover", _))),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(Oe);
            this._queueCallback((()=>{
                this._isWithActiveTrigger() || (this._hoverState !== De && t.remove(),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                $.trigger(this._element, this.constructor.Event.HIDDEN),
                this._disposePopper())
            }
            ), this.tip, e),
            this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e),
            e.classList.remove(Oe, Ne),
            this.tip = e,
            this.tip
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), Pe)
        }
        _sanitizeAndSetContent(t, e, i) {
            const s = Y.findOne(i, t);
            e || !s ? this.setElementContent(s, e) : s.remove()
        }
        setElementContent(t, e) {
            if (null !== t)
                return l(e) ? (e = c(e),
                void (this._config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = we(e, this._config.allowList, this._config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t=>this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
        }
        _getAttachment(t) {
            return ke[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t=>{
                if ("click" === t)
                    $.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t=>this.toggle(t)));
                else if ("manual" !== t) {
                    const e = t === je ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
                      , i = t === je ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    $.on(this._element, e, this._config.selector, (t=>this._enter(t))),
                    $.on(this._element, i, this._config.selector, (t=>this._leave(t)))
                }
            }
            )),
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            $.on(this._element.closest(xe), Me, this._hideModalHandler),
            this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusin" === t.type ? He : je] = !0),
            e.getTipElement().classList.contains(Ne) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout),
            e._hoverState = De,
            e._config.delay && e._config.delay.show ? e._timeout = setTimeout((()=>{
                e._hoverState === De && e.show()
            }
            ), e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusout" === t.type ? He : je] = e._element.contains(t.relatedTarget)),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = Ie,
            e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((()=>{
                e._hoverState === Ie && e.hide()
            }
            ), e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            const e = X.getDataAttributes(this._element);
            return Object.keys(e).forEach((t=>{
                Te.has(t) && delete e[t]
            }
            )),
            (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : c(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            h(Ae, t, this.constructor.DefaultType),
            t.sanitize && (t.template = we(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g")
              , i = t.getAttribute("class").match(e);
            null !== i && i.length > 0 && i.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(t) {
            const {state: e} = t;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = $e.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    v($e);
    const Be = {
        ...$e.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , ze = {
        ...$e.DefaultType,
        content: "(string|element|function)"
    }
      , Re = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class Fe extends $e {
        static get Default() {
            return Be
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return Re
        }
        static get DefaultType() {
            return ze
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
            this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Fe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    v(Fe);
    const qe = "scrollspy"
      , We = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , Ue = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , Ke = "active"
      , Ve = ".nav-link, .list-group-item, .dropdown-item"
      , Xe = "position";
    class Ye extends R {
        constructor(t, e) {
            super(t),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(e),
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            $.on(this._scrollElement, "scroll.bs.scrollspy", (()=>this._process())),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return We
        }
        static get NAME() {
            return qe
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : Xe
              , e = "auto" === this._config.method ? t : this._config.method
              , i = e === Xe ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            Y.find(Ve, this._config.target).map((t=>{
                const s = o(t)
                  , n = s ? Y.findOne(s) : null;
                if (n) {
                    const t = n.getBoundingClientRect();
                    if (t.width || t.height)
                        return [X[e](n).top + i, s]
                }
                return null
            }
            )).filter((t=>t)).sort(((t,e)=>t[0] - e[0])).forEach((t=>{
                this._offsets.push(t[0]),
                this._targets.push(t[1])
            }
            ))
        }
        dispose() {
            $.off(this._scrollElement, ".bs.scrollspy"),
            super.dispose()
        }
        _getConfig(t) {
            return (t = {
                ...We,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = c(t.target) || document.documentElement,
            h(qe, t, Ue),
            t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (let e = this._offsets.length; e--; )
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }
        _activate(t) {
            this._activeTarget = t,
            this._clear();
            const e = Ve.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`))
              , i = Y.findOne(e.join(","), this._config.target);
            i.classList.add(Ke),
            i.classList.contains("dropdown-item") ? Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Ke) : Y.parents(i, ".nav, .list-group").forEach((t=>{
                Y.prev(t, ".nav-link, .list-group-item").forEach((t=>t.classList.add(Ke))),
                Y.prev(t, ".nav-item").forEach((t=>{
                    Y.children(t, ".nav-link").forEach((t=>t.classList.add(Ke)))
                }
                ))
            }
            )),
            $.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            Y.find(Ve, this._config.target).filter((t=>t.classList.contains(Ke))).forEach((t=>t.classList.remove(Ke)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ye.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    $.on(window, "load.bs.scrollspy.data-api", (()=>{
        Y.find('[data-bs-spy="scroll"]').forEach((t=>new Ye(t)))
    }
    )),
    v(Ye);
    const Qe = "active"
      , Ge = "fade"
      , Ze = "show"
      , Je = ".active"
      , ti = ":scope > li > .active";
    class ei extends R {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Qe))
                return;
            let t;
            const e = r(this._element)
              , i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? ti : Je;
                t = Y.find(e, i),
                t = t[t.length - 1]
            }
            const s = t ? $.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if ($.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== s && s.defaultPrevented)
                return;
            this._activate(this._element, i);
            const n = ()=>{
                $.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }),
                $.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            }
            ;
            e ? this._activate(e, e.parentNode, n) : n()
        }
        _activate(t, e, i) {
            const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Y.children(e, Je) : Y.find(ti, e))[0]
              , n = i && s && s.classList.contains(Ge)
              , o = ()=>this._transitionComplete(t, s, i);
            s && n ? (s.classList.remove(Ze),
            this._queueCallback(o, t, !0)) : o()
        }
        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(Qe);
                const t = Y.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(Qe),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(Qe),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            f(t),
            t.classList.contains(Ge) && t.classList.add(Ze);
            let s = t.parentNode;
            if (s && "LI" === s.nodeName && (s = s.parentNode),
            s && s.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && Y.find(".dropdown-toggle", e).forEach((t=>t.classList.add(Qe))),
                t.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ei.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        u(this) || ei.getOrCreateInstance(this).show()
    }
    )),
    v(ei);
    const ii = "toast"
      , si = "hide"
      , ni = "show"
      , oi = "showing"
      , ri = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ai = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class li extends R {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get DefaultType() {
            return ri
        }
        static get Default() {
            return ai
        }
        static get NAME() {
            return ii
        }
        show() {
            $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(si),
            f(this._element),
            this._element.classList.add(ni),
            this._element.classList.add(oi),
            this._queueCallback((()=>{
                this._element.classList.remove(oi),
                $.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains(ni) && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(oi),
            this._queueCallback((()=>{
                this._element.classList.add(si),
                this._element.classList.remove(oi),
                this._element.classList.remove(ni),
                $.trigger(this._element, "hidden.bs.toast")
            }
            ), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains(ni) && this._element.classList.remove(ni),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...ai,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            },
            h(ii, t, this.constructor.DefaultType),
            t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((()=>{
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            $.on(this._element, "mouseover.bs.toast", (t=>this._onInteraction(t, !0))),
            $.on(this._element, "mouseout.bs.toast", (t=>this._onInteraction(t, !1))),
            $.on(this._element, "focusin.bs.toast", (t=>this._onInteraction(t, !0))),
            $.on(this._element, "focusout.bs.toast", (t=>this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = li.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    return F(li),
    v(li),
    {
        Alert: q,
        Button: U,
        Carousel: at,
        Collapse: mt,
        Dropdown: Ht,
        Modal: he,
        Offcanvas: me,
        Popover: Fe,
        ScrollSpy: Ye,
        Tab: ei,
        Toast: li,
        Tooltip: $e
    }
}
));
/*!
 * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 */
!function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).Headroom = n()
}(this, function() {
    "use strict";
    function t() {
        return "undefined" != typeof window
    }
    function d(t) {
        return function(t) {
            return t && t.document && function(t) {
                return 9 === t.nodeType
            }(t.document)
        }(t) ? function(t) {
            var n = t.document
              , o = n.body
              , s = n.documentElement;
            return {
                scrollHeight: function() {
                    return Math.max(o.scrollHeight, s.scrollHeight, o.offsetHeight, s.offsetHeight, o.clientHeight, s.clientHeight)
                },
                height: function() {
                    return t.innerHeight || s.clientHeight || o.clientHeight
                },
                scrollY: function() {
                    return void 0 !== t.pageYOffset ? t.pageYOffset : (s || o.parentNode || o).scrollTop
                }
            }
        }(t) : function(t) {
            return {
                scrollHeight: function() {
                    return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
                },
                height: function() {
                    return Math.max(t.offsetHeight, t.clientHeight)
                },
                scrollY: function() {
                    return t.scrollTop
                }
            }
        }(t)
    }
    function n(t, s, e) {
        var n, o = function() {
            var n = !1;
            try {
                var t = {
                    get passive() {
                        n = !0
                    }
                };
                window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t)
            } catch (t) {
                n = !1
            }
            return n
        }(), i = !1, r = d(t), l = r.scrollY(), a = {};
        function c() {
            var t = Math.round(r.scrollY())
              , n = r.height()
              , o = r.scrollHeight();
            a.scrollY = t,
            a.lastScrollY = l,
            a.direction = l < t ? "down" : "up",
            a.distance = Math.abs(t - l),
            a.isOutOfBounds = t < 0 || o < t + n,
            a.top = t <= s.offset[a.direction],
            a.bottom = o <= t + n,
            a.toleranceExceeded = a.distance > s.tolerance[a.direction],
            e(a),
            l = t,
            i = !1
        }
        function h() {
            i || (i = !0,
            n = requestAnimationFrame(c))
        }
        var u = !!o && {
            passive: !0,
            capture: !1
        };
        return t.addEventListener("scroll", h, u),
        c(),
        {
            destroy: function() {
                cancelAnimationFrame(n),
                t.removeEventListener("scroll", h, u)
            }
        }
    }
    function o(t) {
        return t === Object(t) ? t : {
            down: t,
            up: t
        }
    }
    function s(t, n) {
        n = n || {},
        Object.assign(this, s.options, n),
        this.classes = Object.assign({}, s.options.classes, n.classes),
        this.elem = t,
        this.tolerance = o(this.tolerance),
        this.offset = o(this.offset),
        this.initialised = !1,
        this.frozen = !1
    }
    return s.prototype = {
        constructor: s,
        init: function() {
            return s.cutsTheMustard && !this.initialised && (this.addClass("initial"),
            this.initialised = !0,
            setTimeout(function(t) {
                t.scrollTracker = n(t.scroller, {
                    offset: t.offset,
                    tolerance: t.tolerance
                }, t.update.bind(t))
            }, 100, this)),
            this
        },
        destroy: function() {
            this.initialised = !1,
            Object.keys(this.classes).forEach(this.removeClass, this),
            this.scrollTracker.destroy()
        },
        unpin: function() {
            !this.hasClass("pinned") && this.hasClass("unpinned") || (this.addClass("unpinned"),
            this.removeClass("pinned"),
            this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            this.hasClass("unpinned") && (this.addClass("pinned"),
            this.removeClass("unpinned"),
            this.onPin && this.onPin.call(this))
        },
        freeze: function() {
            this.frozen = !0,
            this.addClass("frozen")
        },
        unfreeze: function() {
            this.frozen = !1,
            this.removeClass("frozen")
        },
        top: function() {
            this.hasClass("top") || (this.addClass("top"),
            this.removeClass("notTop"),
            this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            this.hasClass("notTop") || (this.addClass("notTop"),
            this.removeClass("top"),
            this.onNotTop && this.onNotTop.call(this))
        },
        bottom: function() {
            this.hasClass("bottom") || (this.addClass("bottom"),
            this.removeClass("notBottom"),
            this.onBottom && this.onBottom.call(this))
        },
        notBottom: function() {
            this.hasClass("notBottom") || (this.addClass("notBottom"),
            this.removeClass("bottom"),
            this.onNotBottom && this.onNotBottom.call(this))
        },
        shouldUnpin: function(t) {
            return "down" === t.direction && !t.top && t.toleranceExceeded
        },
        shouldPin: function(t) {
            return "up" === t.direction && t.toleranceExceeded || t.top
        },
        addClass: function(t) {
            this.elem.classList.add.apply(this.elem.classList, this.classes[t].split(" "))
        },
        removeClass: function(t) {
            this.elem.classList.remove.apply(this.elem.classList, this.classes[t].split(" "))
        },
        hasClass: function(t) {
            return this.classes[t].split(" ").every(function(t) {
                return this.classList.contains(t)
            }, this.elem)
        },
        update: function(t) {
            t.isOutOfBounds || !0 !== this.frozen && (t.top ? this.top() : this.notTop(),
            t.bottom ? this.bottom() : this.notBottom(),
            this.shouldUnpin(t) ? this.unpin() : this.shouldPin(t) && this.pin())
        }
    },
    s.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        scroller: t() ? window : null,
        classes: {
            frozen: "headroom--frozen",
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            bottom: "headroom--bottom",
            notBottom: "headroom--not-bottom",
            initial: "headroom"
        }
    },
    s.cutsTheMustard = !!(t() && function() {}
    .bind && "classList"in document.documentElement && Object.assign && Object.keys && requestAnimationFrame),
    s
});
/*!*  
* fancyBox v357
* http://fancyapps.com/fancybox/
*/
!function(t, e, n, o) {
    "use strict";
    function i(t, e) {
        var o, i, a, s = [], r = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(),
        e = e || {},
        t && t.data && (e = h(t.data.options, e)),
        o = e.$target || n(t.currentTarget).trigger("blur"),
        (a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o) || (e.selector ? s = n(e.selector) : (i = o.attr("data-fancybox") || "",
        i ? (s = t.data ? t.data.items : [],
        s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]')) : s = [o]),
        r = n(s).index(o),
        r < 0 && (r = 0),
        a = n.fancybox.open(s, e, r),
        a.$trigger = o))
    }
    if (t.console = t.console || {
        info: function(t) {}
    },
    n) {
        if (n.fn.fancybox)
            return void console.info("fancyBox already initialized");
        var a = {
            closeExisting: !1,
            loop: !1,
            gutter: 50,
            keyboard: !0,
            preventCaptionOverlap: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: {
                preload: !1
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            video: {
                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                format: "",
                autoStart: !0
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
            },
            parentEl: "body",
            hideScrollbar: !0,
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 3e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            },
            wheel: "auto",
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function(t, e) {
                return "image" === t.type && "zoom"
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                preventCaptionOverlap: !1,
                idleTime: !1,
                clickContent: function(t, e) {
                    return "image" === t.type && "toggleControls"
                },
                clickSlide: function(t, e) {
                    return "image" === t.type ? "toggleControls" : "close"
                },
                dblclickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                dblclickSlide: function(t, e) {
                    return "image" === t.type && "zoom"
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schlie&szlig;en",
                    NEXT: "Weiter",
                    PREV: "Zur&uuml;ck",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Vergr&ouml;&szlig;ern"
                }
            }
        }
          , s = n(t)
          , r = n(e)
          , c = 0
          , l = function(t) {
            return t && t.hasOwnProperty && t instanceof n
        }
          , d = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            }
        }()
          , u = function() {
            return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            }
        }()
          , f = function() {
            var t, n = e.createElement("fakeelement"), o = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in o)
                if (void 0 !== n.style[t])
                    return o[t];
            return "transitionend"
        }()
          , p = function(t) {
            return t && t.length && t[0].offsetHeight
        }
          , h = function(t, e) {
            var o = n.extend(!0, {}, t, e);
            return n.each(e, function(t, e) {
                n.isArray(e) && (o[t] = e)
            }),
            o
        }
          , g = function(t) {
            var o, i;
            return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"),
            o = {
                x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                y: t.getBoundingClientRect().top + t.offsetHeight / 2
            },
            i = e.elementFromPoint(o.x, o.y) === t,
            n(".fancybox-container").css("pointer-events", ""),
            i)
        }
          , b = function(t, e, o) {
            var i = this;
            i.opts = h({
                index: o
            }, n.fancybox.defaults),
            n.isPlainObject(e) && (i.opts = h(i.opts, e)),
            n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
            i.id = i.opts.id || ++c,
            i.currIndex = parseInt(i.opts.index, 10) || 0,
            i.prevIndex = null,
            i.prevPos = null,
            i.currPos = 0,
            i.firstRun = !0,
            i.group = [],
            i.slides = {},
            i.addContent(t),
            i.group.length && i.init()
        };
        n.extend(b.prototype, {
            init: function() {
                var o, i, a = this, s = a.group[a.currIndex], r = s.opts;
                r.closeExisting && n.fancybox.close(!0),
                n("body").addClass("fancybox-active"),
                !n.fancybox.getInstance() && !1 !== r.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"),
                n("body").addClass("compensate-for-scrollbar")),
                i = "",
                n.each(r.buttons, function(t, e) {
                    i += r.btnTpl[e] || ""
                }),
                o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(r.baseClass).data("FancyBox", a).appendTo(r.parentEl),
                a.$refs = {
                    container: o
                },
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                    a.$refs[t] = o.find(".fancybox-" + t)
                }),
                a.trigger("onInit"),
                a.activate(),
                a.jumpTo(a.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    return void 0 === n[e] ? t : n[e]
                })
            },
            addContent: function(t) {
                var e, o = this, i = n.makeArray(t);
                n.each(i, function(t, e) {
                    var i, a, s, r, c, l = {}, d = {};
                    n.isPlainObject(e) ? (l = e,
                    d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e),
                    d = i.data() || {},
                    d = n.extend(!0, {}, d, d.options),
                    d.$orig = i,
                    l.src = o.opts.src || d.src || i.attr("href"),
                    l.type || l.src || (l.type = "inline",
                    l.src = e)) : l = {
                        type: "html",
                        src: e + ""
                    },
                    l.opts = n.extend(!0, {}, o.opts, d),
                    n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
                    n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)),
                    a = l.type || l.opts.type,
                    r = l.src || "",
                    !a && r && ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video",
                    l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe",
                    l = n.extend(!0, l, {
                        contentType: "pdf",
                        opts: {
                            iframe: {
                                preload: !1
                            }
                        }
                    })) : "#" === r.charAt(0) && (a = "inline")),
                    a ? l.type = a : o.trigger("objectNeedsType", l),
                    l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type),
                    l.index = o.group.length,
                    "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1),
                    "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
                    l.$thumb = l.opts.$thumb || null,
                    l.opts.$trigger && l.index === o.opts.index && (l.$thumb = l.opts.$trigger.find("img:first"),
                    l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
                    l.$thumb && l.$thumb.length || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")),
                    l.$thumb && !l.$thumb.length && (l.$thumb = null),
                    l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null),
                    "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])),
                    "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])),
                    l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""),
                    "ajax" === l.type && (c = r.split(/\s+/, 2),
                    c.length > 1 && (l.src = c.shift(),
                    l.opts.filter = c.shift())),
                    l.opts.modal && (l.opts = n.extend(!0, l.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })),
                    o.group.push(l)
                }),
                Object.keys(o.slides).length && (o.updateControls(),
                (e = o.Thumbs) && e.isActive && (e.create(),
                e.focus()))
            },
            addEvents: function() {
                var e = this;
                e.removeEvents(),
                e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                    e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }),
                s.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId),
                    e.requestId = d(function() {
                        e.update(t)
                    })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(),
                    setTimeout(function() {
                        e.$refs.stage.show(),
                        e.update(t)
                    }, n.fancybox.isMobile ? 600 : 250))
                }),
                r.on("keydown.fb", function(t) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null
                      , i = o.current
                      , a = t.keyCode || t.which;
                    if (9 == a)
                        return void (i.opts.trapFocus && e.focus(t));
                    if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select")))
                        return 8 === a || 27 === a ? (t.preventDefault(),
                        void e.close(t)) : 37 === a || 38 === a ? (t.preventDefault(),
                        void e.previous()) : 39 === a || 40 === a ? (t.preventDefault(),
                        void e.next()) : void e.trigger("afterKeydown", t, a)
                }),
                e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0,
                r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                    e.idleSecondsCounter = 0,
                    e.isIdle && e.showControls(),
                    e.isIdle = !1
                }),
                e.idleInterval = t.setInterval(function() {
                    ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0,
                    e.idleSecondsCounter = 0,
                    e.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                s.off("orientationchange.fb resize.fb"),
                r.off("keydown.fb .fb-idle"),
                this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                e.idleInterval && (t.clearInterval(e.idleInterval),
                e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e) {
                var o, i, a, s, r, c, l, d, u, f = this, h = f.group.length;
                if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                    if (t = parseInt(t, 10),
                    !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h))
                        return !1;
                    if (o = f.firstRun = !Object.keys(f.slides).length,
                    r = f.current,
                    f.prevIndex = f.currIndex,
                    f.prevPos = f.currPos,
                    s = f.createSlide(t),
                    h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1),
                    (a || s.index > 0) && f.createSlide(t - 1)),
                    f.current = s,
                    f.currIndex = s.index,
                    f.currPos = s.pos,
                    f.trigger("beforeShow", o),
                    f.updateControls(),
                    s.forcedDuration = void 0,
                    n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[o ? "animationDuration" : "transitionDuration"],
                    e = parseInt(e, 10),
                    i = f.isMoved(s),
                    s.$slide.addClass("fancybox-slide--current"),
                    o)
                        return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"),
                        f.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                        f.loadSlide(s),
                        void f.preload("image");
                    c = n.fancybox.getTranslate(r.$slide),
                    l = n.fancybox.getTranslate(f.$refs.stage),
                    n.each(f.slides, function(t, e) {
                        n.fancybox.stop(e.$slide, !0)
                    }),
                    r.pos !== s.pos && (r.isComplete = !1),
                    r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                    i ? (u = c.left - (r.pos * c.width + r.pos * r.opts.gutter),
                    n.each(f.slides, function(t, o) {
                        o.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var i = o.pos * c.width + o.pos * o.opts.gutter;
                        n.fancybox.setTranslate(o.$slide, {
                            top: 0,
                            left: i - l.left + u
                        }),
                        o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")),
                        p(o.$slide),
                        n.fancybox.animate(o.$slide, {
                            top: 0,
                            left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter
                        }, e, function() {
                            o.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous"),
                            o.pos === f.currPos && f.complete()
                        })
                    })) : e && s.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect,
                    r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")),
                    n.fancybox.animate(r.$slide, d, e, function() {
                        r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1)),
                    s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
                    f.preload("image")
                }
            },
            createSlide: function(t) {
                var e, o, i = this;
                return o = t % i.group.length,
                o = o < 0 ? i.group.length + o : o,
                !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),
                i.slides[t] = n.extend(!0, {}, i.group[o], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }),
                i.updateSlide(i.slides[t])),
                i.slides[t]
            },
            scaleToActual: function(t, e, o) {
                var i, a, s, r, c, l = this, d = l.current, u = d.$content, f = n.fancybox.getTranslate(d.$slide).width, p = n.fancybox.getTranslate(d.$slide).height, h = d.width, g = d.height;
                l.isAnimating || l.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (l.isAnimating = !0,
                n.fancybox.stop(u),
                t = void 0 === t ? .5 * f : t,
                e = void 0 === e ? .5 * p : e,
                i = n.fancybox.getTranslate(u),
                i.top -= n.fancybox.getTranslate(d.$slide).top,
                i.left -= n.fancybox.getTranslate(d.$slide).left,
                r = h / i.width,
                c = g / i.height,
                a = .5 * f - .5 * h,
                s = .5 * p - .5 * g,
                h > f && (a = i.left * r - (t * r - t),
                a > 0 && (a = 0),
                a < f - h && (a = f - h)),
                g > p && (s = i.top * c - (e * c - e),
                s > 0 && (s = 0),
                s < p - g && (s = p - g)),
                l.updateCursor(h, g),
                n.fancybox.animate(u, {
                    top: s,
                    left: a,
                    scaleX: r,
                    scaleY: c
                }, o || 366, function() {
                    l.isAnimating = !1
                }),
                l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, o = this, i = o.current, a = i.$content;
                o.isAnimating || o.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0,
                n.fancybox.stop(a),
                e = o.getFitPos(i),
                o.updateCursor(e.width, e.height),
                n.fancybox.animate(a, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / a.width(),
                    scaleY: e.height / a.height()
                }, t || 366, function() {
                    o.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, o, i, a, s = this, r = t.$content, c = t.$slide, l = t.width || t.opts.width, d = t.height || t.opts.height, u = {};
                return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width,
                o = n.fancybox.getTranslate(s.$refs.stage).height,
                e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")),
                o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")),
                l && d || (l = e,
                d = o),
                i = Math.min(1, e / l, o / d),
                l *= i,
                d *= i,
                l > e - .5 && (l = e),
                d > o - .5 && (d = o),
                "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")),
                u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9,
                d > l / a ? d = l / a : l > d * a && (l = d * a)),
                u.width = l,
                u.height = d,
                u)
            },
            update: function(t) {
                var e = this;
                n.each(e.slides, function(n, o) {
                    e.updateSlide(o, t)
                })
            },
            updateSlide: function(t, e) {
                var o = this
                  , i = t && t.$content
                  , a = t.width || t.opts.width
                  , s = t.height || t.opts.height
                  , r = t.$slide;
                o.adjustCaption(t),
                i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i),
                n.fancybox.setTranslate(i, o.getFitPos(t)),
                t.pos === o.currPos && (o.isAnimating = !1,
                o.updateCursor())),
                o.adjustLayout(t),
                r.length && (r.trigger("refresh"),
                t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)),
                o.trigger("onUpdate", t, e)
            },
            centerSlide: function(t) {
                var e = this
                  , o = e.current
                  , i = o.$slide;
                !e.isClosing && o && (i.siblings().css({
                    transform: "",
                    opacity: ""
                }),
                i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                n.fancybox.animate(i, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, void 0 === t ? 0 : t, function() {
                    i.css({
                        transform: "",
                        opacity: ""
                    }),
                    o.isComplete || e.complete()
                }, !1))
            },
            isMoved: function(t) {
                var e, o, i = t || this.current;
                return !!i && (o = n.fancybox.getTranslate(this.$refs.stage),
                e = n.fancybox.getTranslate(i.$slide),
                !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5))
            },
            updateCursor: function(t, e) {
                var o, i, a = this, s = a.current, r = a.$refs.container;
                s && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                o = a.canPan(t, e),
                i = !!o || a.isZoomable(),
                r.toggleClass("fancybox-is-zoomable", i),
                n("[data-fancybox-zoom]").prop("disabled", !i),
                o ? r.addClass("fancybox-can-pan") : i && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"))
            },
            isZoomable: function() {
                var t, e = this, n = e.current;
                if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                    if (!n.isLoaded)
                        return !0;
                    if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height))
                        return !0
                }
                return !1
            },
            isScaledDown: function(t, e) {
                var o = this
                  , i = !1
                  , a = o.current
                  , s = a.$content;
                return void 0 !== t && void 0 !== e ? i = t < a.width && e < a.height : s && (i = n.fancybox.getTranslate(s),
                i = i.width < a.width && i.height < a.height),
                i
            },
            canPan: function(t, e) {
                var o = this
                  , i = o.current
                  , a = null
                  , s = !1;
                return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = o.getFitPos(i),
                void 0 !== t && void 0 !== e ? a = {
                    width: t,
                    height: e
                } : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
                a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)),
                s
            },
            loadSlide: function(t) {
                var e, o, i, a = this;
                if (!t.isLoading && !t.isLoaded) {
                    if (t.isLoading = !0,
                    !1 === a.trigger("beforeLoad", t))
                        return t.isLoading = !1,
                        !1;
                    switch (e = t.type,
                    o = t.$slide,
                    o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),
                    e) {
                    case "image":
                        a.setImage(t);
                        break;
                    case "iframe":
                        a.setIframe(t);
                        break;
                    case "html":
                        a.setContent(t, t.src || t.content);
                        break;
                    case "video":
                        a.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                        break;
                    case "inline":
                        n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                        break;
                    case "ajax":
                        a.showLoading(t),
                        i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function(e, n) {
                                "success" === n && a.setContent(t, e)
                            },
                            error: function(e, n) {
                                e && "abort" !== n && a.setError(t)
                            }
                        })),
                        o.one("onReset", function() {
                            i.abort()
                        });
                        break;
                    default:
                        a.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var o, i = this;
                setTimeout(function() {
                    var e = t.$image;
                    i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
                }, 50),
                i.checkSrcset(t),
                t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),
                !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width,
                t.height = t.opts.height,
                o = e.createElement("img"),
                o.onerror = function() {
                    n(this).remove(),
                    t.$ghost = null
                }
                ,
                o.onload = function() {
                    i.afterLoad(t)
                }
                ,
                t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)),
                i.setBigImage(t)
            },
            checkSrcset: function(e) {
                var n, o, i, a, s = e.opts.srcset || e.opts.image.srcset;
                if (s) {
                    i = t.devicePixelRatio || 1,
                    a = t.innerWidth * i,
                    o = s.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);
                            if (0 === n)
                                return e.url = t;
                            o && (e.value = o,
                            e.postfix = t[t.length - 1])
                        }),
                        e
                    }),
                    o.sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var r = 0; r < o.length; r++) {
                        var c = o[r];
                        if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= i) {
                            n = c;
                            break
                        }
                    }
                    !n && o.length && (n = o[o.length - 1]),
                    n && (e.src = n.url,
                    e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value,
                    e.width = n.value),
                    e.opts.srcset = s)
                }
            },
            setBigImage: function(t) {
                var o = this
                  , i = e.createElement("img")
                  , a = n(i);
                t.$image = a.one("error", function() {
                    o.setError(t)
                }).one("load", function() {
                    var e;
                    t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight),
                    o.afterLoad(t)),
                    o.isClosing || (t.opts.srcset && (e = t.opts.sizes,
                    e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"),
                    a.attr("sizes", e).attr("srcset", t.opts.srcset)),
                    t.$ghost && setTimeout(function() {
                        t.$ghost && !o.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                    o.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content),
                (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error")
            },
            resolveImageSlideSize: function(t, e, n) {
                var o = parseInt(t.opts.width, 10)
                  , i = parseInt(t.opts.height, 10);
                t.width = e,
                t.height = n,
                o > 0 && (t.width = o,
                t.height = Math.floor(o * n / e)),
                i > 0 && (t.width = Math.floor(i * e / n),
                t.height = i)
            },
            setIframe: function(t) {
                var e, o = this, i = t.opts.iframe, a = t.$slide;
                t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(a),
                a.addClass("fancybox-slide--" + t.contentType),
                t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content),
                i.preload ? (o.showLoading(t),
                e.on("load.fb error.fb", function(e) {
                    this.isReady = 1,
                    t.$slide.trigger("refresh"),
                    o.afterLoad(t)
                }),
                a.on("refresh.fb", function() {
                    var n, o, s = t.$content, r = i.css.width, c = i.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            n = e.contents(),
                            o = n.find("body")
                        } catch (t) {}
                        o && o.length && o.children().length && (a.css("overflow", "visible"),
                        s.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }),
                        void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))),
                        s.css("width", r || "").css("max-width", ""),
                        void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))),
                        s.css("height", c || ""),
                        a.css("overflow", "auto")),
                        s.removeClass("fancybox-is-hidden")
                    }
                })) : o.afterLoad(t),
                e.attr("src", t.src),
                a.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {}
                    n(this).off("refresh.fb").empty(),
                    t.isLoaded = !1,
                    t.isRevealed = !1
                })
            },
            setContent: function(t, e) {
                var o = this;
                o.isClosing || (o.hideLoading(t),
                t.$content && n.fancybox.stop(t.$content),
                t.$slide.empty(),
                l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                t.$placeholder = n("<div>").hide().insertAfter(e),
                e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                t.$slide.one("onReset", function() {
                    n(this).find("video,audio").trigger("pause"),
                    t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),
                    t.$placeholder = null),
                    t.$smallBtn && (t.$smallBtn.remove(),
                    t.$smallBtn = null),
                    t.hasError || (n(this).empty(),
                    t.isLoaded = !1,
                    t.isRevealed = !1)
                }),
                n(e).appendTo(t.$slide),
                n(e).is("video,audio") && (n(e).addClass("fancybox-video"),
                n(e).wrap("<div></div>"),
                t.contentType = "video",
                t.opts.width = t.opts.width || n(e).attr("width"),
                t.opts.height = t.opts.height || n(e).attr("height")),
                t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),
                t.$content.siblings().hide(),
                t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                t.$content.addClass("fancybox-content"),
                t.$slide.addClass("fancybox-slide--" + t.contentType),
                o.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0,
                t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"),
                t.contentType = "html",
                this.setContent(t, this.translate(t, t.opts.errorTpl)),
                t.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(t) {
                var e = this;
                (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
            },
            hideLoading: function(t) {
                var e = this;
                (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(),
                delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1,
                t.isLoaded = !0,
                e.trigger("afterLoad", t),
                e.hideLoading(t),
                !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(),
                    !0
                }),
                "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                e.adjustCaption(t),
                e.adjustLayout(t),
                t.pos === e.currPos && e.updateCursor(),
                e.revealContent(t))
            },
            adjustCaption: function(t) {
                var e, n = this, o = t || n.current, i = o.opts.caption, a = o.opts.preventCaptionOverlap, s = n.$refs.caption, r = !1;
                s.toggleClass("fancybox-caption--separate", a),
                a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()),
                e.children().eq(0).empty().html(i),
                r = e.outerHeight(!0),
                e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)),
                o.$slide.css("padding-bottom", r || ""))
            },
            adjustLayout: function(t) {
                var e, n, o, i, a = this, s = t || a.current;
                s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""),
                s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"],
                i = s.$slide.css("padding-bottom"),
                parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight,
                s.$slide.css("padding-bottom", 0),
                Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
                s.$slide.css("padding-bottom", o))),
                s.$content.css("margin-bottom", n))
            },
            revealContent: function(t) {
                var e, o, i, a, s = this, r = t.$slide, c = !1, l = !1, d = s.isMoved(t), u = t.isRevealed;
                return t.isRevealed = !0,
                e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"],
                i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"],
                i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10),
                !d && t.pos === s.currPos && i || (e = !1),
                "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? c = s.getFitPos(t) : e = "fade"),
                "zoom" === e ? (s.isAnimating = !0,
                c.scaleX = c.width / l.width,
                c.scaleY = c.height / l.height,
                a = t.opts.zoomOpacity,
                "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > .1),
                a && (l.opacity = .1,
                c.opacity = 1),
                n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l),
                p(t.$content),
                void n.fancybox.animate(t.$content, c, i, function() {
                    s.isAnimating = !1,
                    s.complete()
                })) : (s.updateSlide(t),
                e ? (n.fancybox.stop(r),
                o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e,
                r.addClass(o).removeClass("fancybox-slide--current"),
                t.$content.removeClass("fancybox-is-hidden"),
                p(r),
                "image" !== t.type && t.$content.hide().show(0),
                void n.fancybox.animate(r, "fancybox-slide--current", i, function() {
                    r.removeClass(o).css({
                        transform: "",
                        opacity: ""
                    }),
                    t.pos === s.currPos && s.complete()
                }, !0)) : (t.$content.removeClass("fancybox-is-hidden"),
                u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"),
                void (t.pos === s.currPos && s.complete())))
            },
            getThumbPos: function(t) {
                var e, o, i, a, s, r = !1, c = t.$thumb;
                return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c),
                o = parseFloat(c.css("border-top-width") || 0),
                i = parseFloat(c.css("border-right-width") || 0),
                a = parseFloat(c.css("border-bottom-width") || 0),
                s = parseFloat(c.css("border-left-width") || 0),
                r = {
                    top: e.top + o,
                    left: e.left + s,
                    width: e.width - i - s,
                    height: e.height - o - a,
                    scaleX: 1,
                    scaleY: 1
                },
                e.width > 0 && e.height > 0 && r)
            },
            complete: function() {
                var t, e = this, o = e.current, i = {};
                !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0,
                o.$slide.siblings().trigger("onReset"),
                e.preload("inline"),
                p(o.$slide),
                o.$slide.addClass("fancybox-slide--complete"),
                n.each(e.slides, function(t, o) {
                    o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide),
                    o.$slide.off().remove())
                }),
                e.slides = i),
                e.isAnimating = !1,
                e.updateCursor(),
                e.trigger("afterShow"),
                o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    e.next()
                }),
                o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"),
                t.length ? t.trigger("focus") : e.focus(null, !0)),
                o.$slide.scrollTop(0).scrollLeft(0))
            },
            preload: function(t) {
                var e, n, o = this;
                o.group.length < 2 || (n = o.slides[o.currPos + 1],
                e = o.slides[o.currPos - 1],
                e && e.type === t && o.loadSlide(e),
                n && n.type === t && o.loadSlide(n))
            },
            focus: function(t, o) {
                var i, a, s = this, r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                s.isClosing || (i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"),
                i = i.filter(r).filter(function() {
                    return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                }),
                i.length ? (a = i.index(e.activeElement),
                t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(),
                i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(),
                i.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"),
                    e.removeEvents(),
                    e.isVisible = !1)
                }),
                t.isVisible = !0,
                (t.current || t.isIdle) && (t.update(),
                t.updateControls()),
                t.trigger("onActivate"),
                t.addEvents()
            },
            close: function(t, e) {
                var o, i, a, s, r, c, l, u = this, f = u.current, h = function() {
                    u.cleanUp(t)
                };
                return !u.isClosing && (u.isClosing = !0,
                !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1,
                d(function() {
                    u.update()
                }),
                !1) : (u.removeEvents(),
                a = f.$content,
                o = f.opts.animationEffect,
                i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0,
                f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                !0 !== t ? n.fancybox.stop(f.$slide) : o = !1,
                f.$slide.siblings().trigger("onReset").remove(),
                i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"),
                u.hideLoading(f),
                u.hideControls(!0),
                u.updateCursor(),
                "zoom" !== o || a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"),
                "zoom" === o ? (n.fancybox.stop(a),
                s = n.fancybox.getTranslate(a),
                c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height
                },
                r = f.opts.zoomOpacity,
                "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1),
                r && (l.opacity = 0),
                n.fancybox.setTranslate(a, c),
                p(a),
                n.fancybox.animate(a, l, i, h),
                !0) : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(),
                !0)))
            },
            cleanUp: function(e) {
                var o, i, a, s = this, r = s.current.opts.$orig;
                s.current.$slide.trigger("onReset"),
                s.$refs.container.empty().remove(),
                s.trigger("afterClose", e),
                s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger),
                r && r.length && (i = t.scrollX,
                a = t.scrollY,
                r.trigger("focus"),
                n("html, body").scrollTop(a).scrollLeft(i))),
                s.current = null,
                o = n.fancybox.getInstance(),
                o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"),
                n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var o, i = Array.prototype.slice.call(arguments, 1), a = this, s = e && e.opts ? e : a.current;
                if (s ? i.unshift(s) : s = a,
                i.unshift(a),
                n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
                !1 === o)
                    return o;
                "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i)
            },
            updateControls: function() {
                var t = this
                  , o = t.current
                  , i = o.index
                  , a = t.$refs.container
                  , s = t.$refs.caption
                  , r = o.opts.caption;
                o.$slide.trigger("refresh"),
                r && r.length ? (t.$caption = s,
                s.children().eq(0).html(r)) : t.$caption = null,
                t.hasHiddenControls || t.isIdle || t.showControls(),
                a.find("[data-fancybox-count]").html(t.group.length),
                a.find("[data-fancybox-index]").html(i + 1),
                a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0),
                a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1),
                "image" === o.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
            },
            hideControls: function(t) {
                var e = this
                  , n = ["infobar", "toolbar", "nav"];
                !t && e.current.opts.preventCaptionOverlap || n.push("caption"),
                this.$refs.container.removeClass(n.map(function(t) {
                    return "fancybox-show-" + t
                }).join(" ")),
                this.hasHiddenControls = !0
            },
            showControls: function() {
                var t = this
                  , e = t.current ? t.current.opts : t.opts
                  , n = t.$refs.container;
                t.hasHiddenControls = !1,
                t.idleSecondsCounter = 0,
                n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
            },
            toggleControls: function() {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }),
        n.fancybox = {
            version: "3.5.7",
            defaults: a,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                  , o = Array.prototype.slice.call(arguments, 1);
                return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o),
                e)
            },
            open: function(t, e, n) {
                return new b(t,e,n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(),
                !0 === t && this.close(t))
            },
            destroy: function() {
                this.close(!0),
                r.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function(t) {
                var e;
                return !(!t || !t.length) && (e = t[0].getBoundingClientRect(),
                {
                    top: e.top || 0,
                    left: e.left || 0,
                    width: e.width,
                    height: e.height,
                    opacity: parseFloat(t.css("opacity"))
                })
            },
            setTranslate: function(t, e) {
                var n = ""
                  , o = {};
                if (t && e)
                    return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px",
                    n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                    void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                    n.length && (o.transform = n),
                    void 0 !== e.opacity && (o.opacity = e.opacity),
                    void 0 !== e.width && (o.width = e.width),
                    void 0 !== e.height && (o.height = e.height),
                    t.css(o)
            },
            animate: function(t, e, o, i, a) {
                var s, r = this;
                n.isFunction(o) && (i = o,
                o = null),
                r.stop(t),
                s = r.getTranslate(t),
                t.on(f, function(c) {
                    (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (r.stop(t),
                    n.isNumeric(o) && t.css("transition-duration", ""),
                    n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
                        top: e.top,
                        left: e.left,
                        width: s.width * e.scaleX,
                        height: s.height * e.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== a && t.removeClass(e),
                    n.isFunction(i) && i(c))
                }),
                n.isNumeric(o) && t.css("transition-duration", o + "ms"),
                n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width,
                delete e.height,
                t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")),
                n.fancybox.setTranslate(t, e)) : t.addClass(e),
                t.data("timer", setTimeout(function() {
                    t.trigger(f)
                }, o + 33))
            },
            stop: function(t, e) {
                t && t.length && (clearTimeout(t.data("timer")),
                e && t.trigger(f),
                t.off(f).css("transition-duration", ""),
                t.parent().removeClass("fancybox-is-scaling"))
            }
        },
        n.fn.fancybox = function(t) {
            var e;
            return t = t || {},
            e = t.selector || !1,
            e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, i) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, i),
            this
        }
        ,
        r.on("click.fb-start", "[data-fancybox]", i),
        r.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
            n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                $trigger: n(this)
            })
        }),
        function() {
            var t = null;
            r.on("mousedown mouseup focus blur", ".fancybox-button", function(e) {
                switch (e.type) {
                case "mousedown":
                    t = n(this);
                    break;
                case "mouseup":
                    t = null;
                    break;
                case "focusin":
                    n(".fancybox-button").removeClass("fancybox-focus"),
                    n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                    break;
                case "focusout":
                    n(".fancybox-button").removeClass("fancybox-focus")
                }
            })
        }()
    }
}(window, document, jQuery),
function(t) {
    "use strict";
    var e = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    }
      , n = function(e, n, o) {
        if (e)
            return o = o || "",
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
    };
    t(document).on("objectNeedsType.fb", function(o, i, a) {
        var s, r, c, l, d, u, f, p = a.src || "", h = !1;
        s = t.extend(!0, {}, e, a.opts.media),
        t.each(s, function(e, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type,
                f = e,
                u = {},
                o.paramPlace && c[o.paramPlace]) {
                    d = c[o.paramPlace],
                    "?" == d[0] && (d = d.substring(1)),
                    d = d.split("&");
                    for (var i = 0; i < d.length; ++i) {
                        var s = d[i].split("=", 2);
                        2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, a.opts[e], u),
                p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l),
                r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c),
                "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === e && (p = p.replace("&%23", "#")),
                !1
            }
        }),
        h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r),
        "iframe" === h && (a.opts = t.extend(!0, a.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })),
        t.extend(a, {
            type: h,
            src: p,
            origSrc: a.src,
            contentSource: f,
            contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : p && (a.type = a.opts.defaultType)
    });
    var o = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(t) {
            var e, n = this;
            if (this[t].loaded)
                return void setTimeout(function() {
                    n.done(t)
                });
            this[t].loading || (this[t].loading = !0,
            e = document.createElement("script"),
            e.type = "text/javascript",
            e.src = this[t].src,
            "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                n[t].loaded = !0,
                n.done(t)
            }
            : e.onload = function() {
                n[t].loaded = !0,
                n.done(t)
            }
            ,
            document.body.appendChild(e))
        },
        done: function(e) {
            var n, o, i;
            "youtube" === e && delete window.onYouTubeIframeAPIReady,
            (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"),
            "youtube" === e && void 0 !== YT && YT ? i = new YT.Player(o.attr("id"),{
                events: {
                    onStateChange: function(t) {
                        0 == t.data && n.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (i = new Vimeo.Player(o),
            i.on("ended", function() {
                n.next()
            })))
        }
    };
    t(document).on({
        "afterShow.fb": function(t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
        }
    })
}(jQuery),
function(t, e, n) {
    "use strict";
    var o = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    }()
      , i = function() {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        }
    }()
      , a = function(e) {
        var n = [];
        e = e.originalEvent || e || t.e,
        e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
        for (var o in e)
            e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
        return n
    }
      , s = function(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }
      , r = function(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable"))
            return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14))
                return !0;
        return !1
    }
      , c = function(e) {
        var n = t.getComputedStyle(e)["overflow-y"]
          , o = t.getComputedStyle(e)["overflow-x"]
          , i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight
          , a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a
    }
      , l = function(t) {
        for (var e = !1; ; ) {
            if (e = c(t.get(0)))
                break;
            if (t = t.parent(),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
                break
        }
        return e
    }
      , d = function(t) {
        var e = this;
        e.instance = t,
        e.$bg = t.$refs.bg,
        e.$stage = t.$refs.stage,
        e.$container = t.$refs.container,
        e.destroy(),
        e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
    d.prototype.destroy = function() {
        var t = this;
        t.$container.off(".fb.touch"),
        n(e).off(".fb.touch"),
        t.requestId && (i(t.requestId),
        t.requestId = null),
        t.tapped && (clearTimeout(t.tapped),
        t.tapped = null)
    }
    ,
    d.prototype.ontouchstart = function(o) {
        var i = this
          , c = n(o.target)
          , d = i.instance
          , u = d.current
          , f = u.$slide
          , p = u.$content
          , h = "touchstart" == o.type;
        if (h && i.$container.off("mousedown.fb.touch"),
        (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
                return o.stopPropagation(),
                void o.preventDefault();
            i.realPoints = i.startPoints = a(o),
            i.startPoints.length && (u.touch && o.stopPropagation(),
            i.startEvent = o,
            i.canTap = !0,
            i.$target = c,
            i.$content = p,
            i.opts = u.opts.touch,
            i.isPanning = !1,
            i.isSwiping = !1,
            i.isZooming = !1,
            i.isScrolling = !1,
            i.canPan = d.canPan(),
            i.startTime = (new Date).getTime(),
            i.distanceX = i.distanceY = i.distance = 0,
            i.canvasWidth = Math.round(f[0].clientWidth),
            i.canvasHeight = Math.round(f[0].clientHeight),
            i.contentLastPos = null,
            i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0
            },
            i.sliderStartPos = n.fancybox.getTranslate(f),
            i.stagePos = n.fancybox.getTranslate(d.$refs.stage),
            i.sliderStartPos.top -= i.stagePos.top,
            i.sliderStartPos.left -= i.stagePos.left,
            i.contentStartPos.top -= i.stagePos.top,
            i.contentStartPos.left -= i.stagePos.left,
            n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")),
            n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0),
            ((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(),
            n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (i.isScrollable = l(c) || l(c.parent()),
            n.fancybox.isMobile && i.isScrollable || o.preventDefault(),
            (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content),
            i.isPanning = !0) : i.isSwiping = !0,
            i.$container.addClass("fancybox-is-grabbing")),
            2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1,
            i.isSwiping = !1,
            i.isPanning = !1,
            i.isZooming = !0,
            n.fancybox.stop(i.$content),
            i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(),
            i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(),
            i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width,
            i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height,
            i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))))
        }
    }
    ,
    d.prototype.onscroll = function(t) {
        var n = this;
        n.isScrolling = !0,
        e.removeEventListener("scroll", n.onscroll, !0)
    }
    ,
    d.prototype.ontouchmove = function(t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = a(t),
        void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(),
        e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"),
        e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"),
        e.distance = s(e.newPoints[0], e.startPoints[0]),
        e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }
    ,
    d.prototype.onSwipe = function(e) {
        var a, s = this, r = s.instance, c = s.isSwiping, l = s.sliderStartPos.left || 0;
        if (!0 !== c)
            "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX),
            s.sliderLastPos = {
                top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
                left: l
            },
            s.requestId && (i(s.requestId),
            s.requestId = null),
            s.requestId = o(function() {
                s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
                    var o = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                    })
                }),
                s.$container.addClass("fancybox-is-sliding"))
            });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1,
            r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI),
            s.isSwiping = a > 45 && a < 135 ? "y" : "x"),
            "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
                return void (s.isScrolling = !0);
            r.isDragging = s.isSwiping,
            s.startPoints = s.newPoints,
            n.each(r.slides, function(t, e) {
                var o, i;
                n.fancybox.stop(e.$slide),
                o = n.fancybox.getTranslate(e.$slide),
                i = n.fancybox.getTranslate(r.$refs.stage),
                e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function(t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }),
                e.pos === r.current.pos && (s.sliderStartPos.top = o.top - i.top,
                s.sliderStartPos.left = o.left - i.left),
                n.fancybox.setTranslate(e.$slide, {
                    top: o.top - i.top,
                    left: o.left - i.left
                })
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    }
    ,
    d.prototype.onPan = function() {
        var t = this;
        if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5))
            return void (t.startPoints = t.newPoints);
        t.canTap = !1,
        t.contentLastPos = t.limitMovement(),
        t.requestId && i(t.requestId),
        t.requestId = o(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }
    ,
    d.prototype.limitMovement = function() {
        var t, e, n, o, i, a, s = this, r = s.canvasWidth, c = s.canvasHeight, l = s.distanceX, d = s.distanceY, u = s.contentStartPos, f = u.left, p = u.top, h = u.width, g = u.height;
        return i = h > r ? f + l : f,
        a = p + d,
        t = Math.max(0, .5 * r - .5 * h),
        e = Math.max(0, .5 * c - .5 * g),
        n = Math.min(r - h, .5 * r - .5 * h),
        o = Math.min(c - g, .5 * c - .5 * g),
        l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0),
        l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0),
        d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0),
        d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0),
        {
            top: a,
            left: i
        }
    }
    ,
    d.prototype.limitPosition = function(t, e, n, o) {
        var i = this
          , a = i.canvasWidth
          , s = i.canvasHeight;
        return n > a ? (t = t > 0 ? 0 : t,
        t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2),
        o > s ? (e = e > 0 ? 0 : e,
        e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2),
        {
            top: e,
            left: t
        }
    }
    ,
    d.prototype.onZoom = function() {
        var e = this
          , a = e.contentStartPos
          , r = a.width
          , c = a.height
          , l = a.left
          , d = a.top
          , u = s(e.newPoints[0], e.newPoints[1])
          , f = u / e.startDistanceBetweenFingers
          , p = Math.floor(r * f)
          , h = Math.floor(c * f)
          , g = (r - p) * e.percentageOfImageAtPinchPointX
          , b = (c - h) * e.percentageOfImageAtPinchPointY
          , m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft()
          , v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop()
          , y = m - e.centerPointStartX
          , x = v - e.centerPointStartY
          , w = l + (g + y)
          , $ = d + (b + x)
          , S = {
            top: $,
            left: w,
            scaleX: f,
            scaleY: f
        };
        e.canTap = !1,
        e.newWidth = p,
        e.newHeight = h,
        e.contentLastPos = S,
        e.requestId && i(e.requestId),
        e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }
    ,
    d.prototype.ontouchend = function(t) {
        var o = this
          , s = o.isSwiping
          , r = o.isPanning
          , c = o.isZooming
          , l = o.isScrolling;
        if (o.endPoints = a(t),
        o.dMs = Math.max((new Date).getTime() - o.startTime, 1),
        o.$container.removeClass("fancybox-is-grabbing"),
        n(e).off(".fb.touch"),
        e.removeEventListener("scroll", o.onscroll, !0),
        o.requestId && (i(o.requestId),
        o.requestId = null),
        o.isSwiping = !1,
        o.isPanning = !1,
        o.isZooming = !1,
        o.isScrolling = !1,
        o.instance.isDragging = !1,
        o.canTap)
            return o.onTap(t);
        o.speed = 100,
        o.velocityX = o.distanceX / o.dMs * .5,
        o.velocityY = o.distanceY / o.dMs * .5,
        r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)
    }
    ,
    d.prototype.endSwiping = function(t, e) {
        var o = this
          , i = !1
          , a = o.instance.group.length
          , s = Math.abs(o.distanceX)
          , r = "x" == t && a > 1 && (o.dMs > 130 && s > 10 || s > 50);
        o.sliderLastPos = null,
        "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200),
        i = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? i = o.instance.previous(300) : r && o.distanceX < 0 && (i = o.instance.next(300)),
        !1 !== i || "x" != t && "y" != t || o.instance.centerSlide(200),
        o.$container.removeClass("fancybox-is-sliding")
    }
    ,
    d.prototype.endPanning = function() {
        var t, e, o, i = this;
        i.contentLastPos && (!1 === i.opts.momentum || i.dMs > 350 ? (t = i.contentLastPos.left,
        e = i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX,
        e = i.contentLastPos.top + 500 * i.velocityY),
        o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height),
        o.width = i.contentStartPos.width,
        o.height = i.contentStartPos.height,
        n.fancybox.animate(i.$content, o, 366))
    }
    ,
    d.prototype.endZooming = function() {
        var t, e, o, i, a = this, s = a.instance.current, r = a.newWidth, c = a.newHeight;
        a.contentLastPos && (t = a.contentLastPos.left,
        e = a.contentLastPos.top,
        i = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        },
        n.fancybox.setTranslate(a.$content, i),
        r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c),
        n.fancybox.animate(a.$content, o, 150)))
    }
    ,
    d.prototype.onTap = function(e) {
        var o, i = this, s = n(e.target), r = i.instance, c = r.current, l = e && a(e) || i.startPoints, d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0, u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0, f = function(t) {
            var o = c.opts[t];
            if (n.isFunction(o) && (o = o.apply(r, [c, e])),
            o)
                switch (o) {
                case "close":
                    r.close(i.startEvent);
                    break;
                case "toggleControls":
                    r.toggleControls();
                    break;
                case "next":
                    r.next();
                    break;
                case "nextOrClose":
                    r.group.length > 1 ? r.next() : r.close(i.startEvent);
                    break;
                case "zoom":
                    "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
                }
        };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                o = "Outside";
            else if (s.is(".fancybox-slide"))
                o = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length)
                    return;
                o = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped),
                i.tapped = null,
                Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
                    return this;
                f("dblclick" + o)
            } else
                i.tapX = d,
                i.tapY = u,
                c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function() {
                    i.tapped = null,
                    r.isAnimating || f("click" + o)
                }, 500) : f("click" + o);
            return this
        }
    }
    ,
    n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new d(e))
    }).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function(t) {
        this.instance = t,
        this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this
              , n = t.instance
              , o = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }),
            n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function(t) {
            var n = this
              , o = n.instance
              , i = o.current;
            i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== i.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, i.opts.slideShow.speed),
            n.timer = setTimeout(function() {
                o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
            }, i.opts.slideShow.speed)) : (n.stop(),
            o.idleSecondsCounter = 0,
            o.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer),
            t.timer = null,
            t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function() {
            var t = this
              , e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
            t.isActive = !0,
            e.isComplete && t.set(!0),
            t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var t = this
              , e = t.instance.current;
            t.clear(),
            t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
            t.isActive = !1,
            t.instance.trigger("onSlideShowChange", !1),
            t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function(n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(),
            r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }),
    e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance()
          , o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
            var i = e[o];
            if (i && i[1]in t) {
                for (var a = 0; a < i.length; a++)
                    n[e[0][a]] = i[a];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var o = {
            request: function(e) {
                e = e || t.documentElement,
                e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[n.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement,
                this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }),
        e(t).on(n.fullscreenchange, function() {
            var t = o.isFullscreen()
              , n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1,
            n.update(!0, !0, 0),
            n.isComplete || n.complete()),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
            n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function(t, e) {
            var i;
            if (!n)
                return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
            e && e.group[e.currIndex].opts.fullScreen ? (i = e.$refs.container,
            i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                o.toggle()
            }),
            e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(),
            e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(),
            e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var o = function(t) {
        this.init(t)
    };
    e.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this
              , n = t.group
              , o = 0;
            e.instance = t,
            e.opts = n[t.currIndex].opts.thumbs,
            t.Thumbs = e,
            e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, a = n.length; i < a && (n[i].thumb && o++,
            !(o > 1)); i++)
                ;
            o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                e.toggle()
            }),
            e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, o = this, i = o.instance, a = o.opts.parentEl, s = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),
            o.$grid.on("click", "a", function() {
                i.jumpTo(e(this).attr("data-index"))
            })),
            o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
            e.each(i.group, function(e, n) {
                t = n.thumb,
                t || "image" !== n.type || (t = n.src),
                s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }),
            o.$list[0].innerHTML = s.join(""),
            "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, n, o = this, i = o.$list, a = o.$grid;
            o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"),
            n = e.position(),
            "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                scrollTop: i.scrollTop() + n.top
            }, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
            t.isVisible ? (t.$grid || t.create(),
            t.instance.trigger("onThumbsShow"),
            t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
            t.instance.update()
        },
        hide: function() {
            this.isVisible = !1,
            this.update()
        },
        show: function() {
            this.isVisible = !0,
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible,
            this.update()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && !e.Thumbs && (n = new o(e),
            n.isActive && !0 === n.opts.autoStart && n.show())
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(),
            a.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    function n(t) {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(t).replace(/[&<>"'`=\/]/g, function(t) {
            return e[t]
        })
    }
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }),
    e(t).on("click", "[data-fancybox-share]", function() {
        var t, o, i = e.fancybox.getInstance(), a = i.current || null;
        a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])),
        o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""),
        e.fancybox.open({
            src: i.translate(i, o),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(t, e) {
                    i.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }),
                    e.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"),
                        !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(t, e, n) {
    "use strict";
    function o() {
        var e = t.location.hash.substr(1)
          , n = e.split("-")
          , o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1
          , i = n.join("-");
        return {
            hash: e,
            index: o < 1 ? 1 : o,
            gallery: i
        }
    }
    function i(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }
    function a(t) {
        var e, n;
        return !!t && (e = t.current ? t.current.opts : t.opts,
        "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }
    ),
    n(function() {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function(t, e) {
                var n, i;
                !1 !== e.group[e.currIndex].opts.hash && (n = o(),
                (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, o, i, s) {
                var r;
                i && !1 !== i.opts.hash && (r = a(o)) && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""),
                t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash),
                o.hashTimer && clearTimeout(o.hashTimer),
                o.hashTimer = setTimeout(function() {
                    "replaceState"in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash),
                    s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash,
                    o.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(n, o, i) {
                i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer),
                o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState"in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash),
                o.currentHash = null)
            }
        }),
        n(t).on("hashchange.fb", function() {
            var t = o()
              , e = null;
            n.each(n(".fancybox-container").get().reverse(), function(t, o) {
                var i = n(o).data("FancyBox");
                if (i && i.currentHash)
                    return e = i,
                    !1
            }),
            e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null,
            e.close()) : "" !== t.gallery && i(t)
        }),
        setTimeout(function() {
            n.fancybox.getInstance() || i(o())
        }, 50))
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var o = e.current
                  , i = (new Date).getTime();
                e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(),
                t.stopPropagation(),
                o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t,
                i - n < 250 || (n = i,
                e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery);
/**
* @prettify
*/
var q = null;
window.PR_SHOULD_USE_CONTINUATION = !0;
(function() {
    function L(a) {
        function m(a) {
            var f = a.charCodeAt(0);
            if (f !== 92)
                return f;
            var b = a.charAt(1);
            return (f = r[b]) ? f : "0" <= b && b <= "7" ? parseInt(a.substring(1), 8) : b === "u" || b === "x" ? parseInt(a.substring(2), 16) : a.charCodeAt(1)
        }
        function e(a) {
            if (a < 32)
                return (a < 16 ? "\\x0" : "\\x") + a.toString(16);
            a = String.fromCharCode(a);
            if (a === "\\" || a === "-" || a === "[" || a === "]")
                a = "\\" + a;
            return a
        }
        function h(a) {
            for (var f = a.substring(1, a.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), a = [], b = [], o = f[0] === "^", c = o ? 1 : 0, i = f.length; c < i; ++c) {
                var j = f[c];
                if (/\\[bdsw]/i.test(j))
                    a.push(j);
                else {
                    var j = m(j), d;
                    c + 2 < i && "-" === f[c + 1] ? (d = m(f[c + 2]),
                    c += 2) : d = j;
                    b.push([j, d]);
                    d < 65 || j > 122 || (d < 65 || j > 90 || b.push([Math.max(65, j) | 32, Math.min(d, 90) | 32]),
                    d < 97 || j > 122 || b.push([Math.max(97, j) & -33, Math.min(d, 122) & -33]))
                }
            }
            b.sort(function(a, f) {
                return a[0] - f[0] || f[1] - a[1]
            });
            f = [];
            j = [NaN, NaN];
            for (c = 0; c < b.length; ++c)
                i = b[c],
                i[0] <= j[1] + 1 ? j[1] = Math.max(j[1], i[1]) : f.push(j = i);
            b = ["["];
            o && b.push("^");
            b.push.apply(b, a);
            for (c = 0; c < f.length; ++c)
                i = f[c],
                b.push(e(i[0])),
                i[1] > i[0] && (i[1] + 1 > i[0] && b.push("-"),
                b.push(e(i[1])));
            b.push("]");
            return b.join("")
        }
        function y(a) {
            for (var f = a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), b = f.length, d = [], c = 0, i = 0; c < b; ++c) {
                var j = f[c];
                j === "(" ? ++i : "\\" === j.charAt(0) && (j = +j.substring(1)) && j <= i && (d[j] = -1)
            }
            for (c = 1; c < d.length; ++c)
                -1 === d[c] && (d[c] = ++t);
            for (i = c = 0; c < b; ++c)
                j = f[c],
                j === "(" ? (++i,
                d[i] === void 0 && (f[c] = "(?:")) : "\\" === j.charAt(0) && (j = +j.substring(1)) && j <= i && (f[c] = "\\" + d[i]);
            for (i = c = 0; c < b; ++c)
                "^" === f[c] && "^" !== f[c + 1] && (f[c] = "");
            if (a.ignoreCase && s)
                for (c = 0; c < b; ++c)
                    j = f[c],
                    a = j.charAt(0),
                    j.length >= 2 && a === "[" ? f[c] = h(j) : a !== "\\" && (f[c] = j.replace(/[A-Za-z]/g, function(a) {
                        a = a.charCodeAt(0);
                        return "[" + String.fromCharCode(a & -33, a | 32) + "]"
                    }));
            return f.join("")
        }
        for (var t = 0, s = !1, l = !1, p = 0, d = a.length; p < d; ++p) {
            var g = a[p];
            if (g.ignoreCase)
                l = !0;
            else if (/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                s = !0;
                l = !1;
                break
            }
        }
        for (var r = {
            b: 8,
            t: 9,
            n: 10,
            v: 11,
            f: 12,
            r: 13
        }, n = [], p = 0, d = a.length; p < d; ++p) {
            g = a[p];
            if (g.global || g.multiline)
                throw Error("" + g);
            n.push("(?:" + y(g) + ")")
        }
        return RegExp(n.join("|"), l ? "gi" : "g")
    }
    function M(a) {
        function m(a) {
            switch (a.nodeType) {
            case 1:
                if (e.test(a.className))
                    break;
                for (var g = a.firstChild; g; g = g.nextSibling)
                    m(g);
                g = a.nodeName;
                if ("BR" === g || "LI" === g)
                    h[s] = "\n",
                    t[s << 1] = y++,
                    t[s++ << 1 | 1] = a;
                break;
            case 3:
            case 4:
                g = a.nodeValue,
                g.length && (g = p ? g.replace(/\r\n?/g, "\n") : g.replace(/[\t\n\r ]+/g, " "),
                h[s] = g,
                t[s << 1] = y,
                y += g.length,
                t[s++ << 1 | 1] = a)
            }
        }
        var e = /(?:^|\s)nocode(?:\s|$)/, h = [], y = 0, t = [], s = 0, l;
        a.currentStyle ? l = a.currentStyle.whiteSpace : window.getComputedStyle && (l = document.defaultView.getComputedStyle(a, q).getPropertyValue("white-space"));
        var p = l && "pre" === l.substring(0, 3);
        m(a);
        return {
            a: h.join("").replace(/\n$/, ""),
            c: t
        }
    }
    function B(a, m, e, h) {
        m && (a = {
            a: m,
            d: a
        },
        e(a),
        h.push.apply(h, a.e))
    }
    function x(a, m) {
        function e(a) {
            for (var l = a.d, p = [l, "pln"], d = 0, g = a.a.match(y) || [], r = {}, n = 0, z = g.length; n < z; ++n) {
                var f = g[n], b = r[f], o = void 0, c;
                if (typeof b === "string")
                    c = !1;
                else {
                    var i = h[f.charAt(0)];
                    if (i)
                        o = f.match(i[1]),
                        b = i[0];
                    else {
                        for (c = 0; c < t; ++c)
                            if (i = m[c],
                            o = f.match(i[1])) {
                                b = i[0];
                                break
                            }
                        o || (b = "pln")
                    }
                    if ((c = b.length >= 5 && "lang-" === b.substring(0, 5)) && !(o && typeof o[1] === "string"))
                        c = !1,
                        b = "src";
                    c || (r[f] = b)
                }
                i = d;
                d += f.length;
                if (c) {
                    c = o[1];
                    var j = f.indexOf(c)
                      , k = j + c.length;
                    o[2] && (k = f.length - o[2].length,
                    j = k - c.length);
                    b = b.substring(5);
                    B(l + i, f.substring(0, j), e, p);
                    B(l + i + j, c, C(b, c), p);
                    B(l + i + k, f.substring(k), e, p)
                } else
                    p.push(l + i, b)
            }
            a.e = p
        }
        var h = {}, y;
        (function() {
            for (var e = a.concat(m), l = [], p = {}, d = 0, g = e.length; d < g; ++d) {
                var r = e[d]
                  , n = r[3];
                if (n)
                    for (var k = n.length; --k >= 0; )
                        h[n.charAt(k)] = r;
                r = r[1];
                n = "" + r;
                p.hasOwnProperty(n) || (l.push(r),
                p[n] = q)
            }
            l.push(/[\S\s]/);
            y = L(l)
        }
        )();
        var t = m.length;
        return e
    }
    function u(a) {
        var m = []
          , e = [];
        a.tripleQuotedStrings ? m.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : a.multiLineStrings ? m.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : m.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]);
        a.verbatimStrings && e.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
        var h = a.hashComments;
        h && (a.cStyleComments ? (h > 1 ? m.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : m.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]),
        e.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : m.push(["com", /^#[^\n\r]*/, q, "#"]));
        a.cStyleComments && (e.push(["com", /^\/\/[^\n\r]*/, q]),
        e.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q]));
        a.regexLiterals && e.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);
        (h = a.types) && e.push(["typ", h]);
        a = ("" + a.keywords).replace(/^ | $/g, "");
        a.length && e.push(["kwd", RegExp("^(?:" + a.replace(/[\s,]+/g, "|") + ")\\b"), q]);
        m.push(["pln", /^\s+/, q, " \r\n\t\xa0"]);
        e.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'./@\\`]*/, q]);
        return x(m, e)
    }
    function D(a, m) {
        function e(a) {
            switch (a.nodeType) {
            case 1:
                if (k.test(a.className))
                    break;
                if ("BR" === a.nodeName)
                    h(a),
                    a.parentNode && a.parentNode.removeChild(a);
                else
                    for (a = a.firstChild; a; a = a.nextSibling)
                        e(a);
                break;
            case 3:
            case 4:
                if (p) {
                    var b = a.nodeValue
                      , d = b.match(t);
                    if (d) {
                        var c = b.substring(0, d.index);
                        a.nodeValue = c;
                        (b = b.substring(d.index + d[0].length)) && a.parentNode.insertBefore(s.createTextNode(b), a.nextSibling);
                        h(a);
                        c || a.parentNode.removeChild(a)
                    }
                }
            }
        }
        function h(a) {
            function b(a, d) {
                var e = d ? a.cloneNode(!1) : a
                  , f = a.parentNode;
                if (f) {
                    var f = b(f, 1)
                      , g = a.nextSibling;
                    f.appendChild(e);
                    for (var h = g; h; h = g)
                        g = h.nextSibling,
                        f.appendChild(h)
                }
                return e
            }
            for (; !a.nextSibling; )
                if (a = a.parentNode,
                !a)
                    return;
            for (var a = b(a.nextSibling, 0), e; (e = a.parentNode) && e.nodeType === 1; )
                a = e;
            d.push(a)
        }
        var k = /(?:^|\s)nocode(?:\s|$)/, t = /\r\n?|\n/, s = a.ownerDocument, l;
        a.currentStyle ? l = a.currentStyle.whiteSpace : window.getComputedStyle && (l = s.defaultView.getComputedStyle(a, q).getPropertyValue("white-space"));
        var p = l && "pre" === l.substring(0, 3);
        for (l = s.createElement("LI"); a.firstChild; )
            l.appendChild(a.firstChild);
        for (var d = [l], g = 0; g < d.length; ++g)
            e(d[g]);
        m === (m | 0) && d[0].setAttribute("value", m);
        var r = s.createElement("OL");
        r.className = "linenums";
        for (var n = Math.max(0, m - 1 | 0) || 0, g = 0, z = d.length; g < z; ++g)
            l = d[g],
            l.className = "L" + (g + n) % 10,
            l.firstChild || l.appendChild(s.createTextNode("\xa0")),
            r.appendChild(l);
        a.appendChild(r)
    }
    function k(a, m) {
        for (var e = m.length; --e >= 0; ) {
            var h = m[e];
            A.hasOwnProperty(h) ? window.console && console.warn("cannot override language handler %s", h) : A[h] = a
        }
    }
    function C(a, m) {
        if (!a || !A.hasOwnProperty(a))
            a = /^\s*</.test(m) ? "default-markup" : "default-code";
        return A[a]
    }
    function E(a) {
        var m = a.g;
        try {
            var e = M(a.h)
              , h = e.a;
            a.a = h;
            a.c = e.c;
            a.d = 0;
            C(m, h)(a);
            var k = /\bMSIE\b/.test(navigator.userAgent)
              , m = /\n/g
              , t = a.a
              , s = t.length
              , e = 0
              , l = a.c
              , p = l.length
              , h = 0
              , d = a.e
              , g = d.length
              , a = 0;
            d[g] = s;
            var r, n;
            for (n = r = 0; n < g; )
                d[n] !== d[n + 2] ? (d[r++] = d[n++],
                d[r++] = d[n++]) : n += 2;
            g = r;
            for (n = r = 0; n < g; ) {
                for (var z = d[n], f = d[n + 1], b = n + 2; b + 2 <= g && d[b + 1] === f; )
                    b += 2;
                d[r++] = z;
                d[r++] = f;
                n = b
            }
            for (d.length = r; h < p; ) {
                var o = l[h + 2] || s, c = d[a + 2] || s, b = Math.min(o, c), i = l[h + 1], j;
                if (i.nodeType !== 1 && (j = t.substring(e, b))) {
                    k && (j = j.replace(m, "\r"));
                    i.nodeValue = j;
                    var u = i.ownerDocument
                      , v = u.createElement("SPAN");
                    v.className = d[a + 1];
                    var x = i.parentNode;
                    x.replaceChild(v, i);
                    v.appendChild(i);
                    e < o && (l[h + 1] = i = u.createTextNode(t.substring(b, o)),
                    x.insertBefore(i, v.nextSibling))
                }
                e = b;
                e >= o && (h += 2);
                e >= c && (a += 2)
            }
        } catch (w) {
            "console"in window && console.log(w && w.stack ? w.stack : w)
        }
    }
    var v = ["break,continue,do,else,for,if,return,while"]
      , w = [[v, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"]
      , F = [w, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"]
      , G = [w, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"]
      , H = [G, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"]
      , w = [w, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"]
      , I = [v, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"]
      , J = [v, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"]
      , v = [v, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"]
      , K = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/
      , N = /\S/
      , O = u({
        keywords: [F, H, w, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" + I, J, v],
        hashComments: !0,
        cStyleComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    })
      , A = {};
    k(O, ["default-code"]);
    k(x([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]);
    k(x([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]);
    k(x([], [["atv", /^[\S\s]+/]]), ["uq.val"]);
    k(u({
        keywords: F,
        hashComments: !0,
        cStyleComments: !0,
        types: K
    }), ["c", "cc", "cpp", "cxx", "cyc", "m"]);
    k(u({
        keywords: "null,true,false"
    }), ["json"]);
    k(u({
        keywords: H,
        hashComments: !0,
        cStyleComments: !0,
        verbatimStrings: !0,
        types: K
    }), ["cs"]);
    k(u({
        keywords: G,
        cStyleComments: !0
    }), ["java"]);
    k(u({
        keywords: v,
        hashComments: !0,
        multiLineStrings: !0
    }), ["bsh", "csh", "sh"]);
    k(u({
        keywords: I,
        hashComments: !0,
        multiLineStrings: !0,
        tripleQuotedStrings: !0
    }), ["cv", "py"]);
    k(u({
        keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["perl", "pl", "pm"]);
    k(u({
        keywords: J,
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["rb"]);
    k(u({
        keywords: w,
        cStyleComments: !0,
        regexLiterals: !0
    }), ["js"]);
    k(u({
        keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
        hashComments: 3,
        cStyleComments: !0,
        multilineStrings: !0,
        tripleQuotedStrings: !0,
        regexLiterals: !0
    }), ["coffee"]);
    k(x([], [["str", /^[\S\s]+/]]), ["regex"]);
    window.prettyPrintOne = function(a, m, e) {
        var h = document.createElement("PRE");
        h.innerHTML = a;
        e && D(h, e);
        E({
            g: m,
            i: e,
            h: h
        });
        return h.innerHTML
    }
    ;
    window.prettyPrint = function(a) {
        function m() {
            for (var e = window.PR_SHOULD_USE_CONTINUATION ? l.now() + 250 : Infinity; p < h.length && l.now() < e; p++) {
                var n = h[p]
                  , k = n.className;
                if (k.indexOf("prettyprint") >= 0) {
                    var k = k.match(g), f, b;
                    if (b = !k) {
                        b = n;
                        for (var o = void 0, c = b.firstChild; c; c = c.nextSibling)
                            var i = c.nodeType
                              , o = i === 1 ? o ? b : c : i === 3 ? N.test(c.nodeValue) ? b : o : o;
                        b = (f = o === b ? void 0 : o) && "CODE" === f.tagName
                    }
                    b && (k = f.className.match(g));
                    k && (k = k[1]);
                    b = !1;
                    for (o = n.parentNode; o; o = o.parentNode)
                        if ((o.tagName === "pre" || o.tagName === "code" || o.tagName === "xmp") && o.className && o.className.indexOf("prettyprint") >= 0) {
                            b = !0;
                            break
                        }
                    b || ((b = (b = n.className.match(/\blinenums\b(?::(\d+))?/)) ? b[1] && b[1].length ? +b[1] : !0 : !1) && D(n, b),
                    d = {
                        g: k,
                        h: n,
                        i: b
                    },
                    E(d))
                }
            }
            p < h.length ? setTimeout(m, 250) : a && a()
        }
        for (var e = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], h = [], k = 0; k < e.length; ++k)
            for (var t = 0, s = e[k].length; t < s; ++t)
                h.push(e[k][t]);
        var e = q
          , l = Date;
        l.now || (l = {
            now: function() {
                return +new Date
            }
        });
        var p = 0, d, g = /\blang(?:uage)?-([\w.]+)(?!\S)/;
        m()
    }
    ;
    window.PR = {
        createSimpleLexer: x,
        registerLangHandler: k,
        sourceDecorator: u,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_NOCODE: "nocode",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ"
    }
}
)();
/*! WOW - v1.0.1 - 2014-09-03
* Copyright (c) 2014 Matthieu Aussaguel;
*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            this.animationNameCache = new c
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else {
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
                    this.util().addEvent(window, "scroll", this.scrollHandler),
                    this.util().addEvent(window, "resize", this.scrollHandler),
                    this.interval = setInterval(this.scrollCallback, 50)
                }
            return this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    e = 0,
                    f = b.length; f > e; e++)
                        d = b[e],
                        g.push(function() {
                            var a, b, e, f;
                            for (e = d.addedNodes || [],
                            f = [],
                            a = 0,
                            b = e.length; b > a; a++)
                                c = e[a],
                                f.push(this.doSync(c));
                            return f
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (!this.stopped) {
                if (null == a && (a = this.element),
                1 !== a.nodeType)
                    return;
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.applyStyle(b, !0),
                    this.boxes.push(b),
                    this.all.push(b),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = "" + a.className + " " + this.config.animateClass
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.setAttribute("style", "visibility: visible;"));
            return e
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            f = [];
            for (c in b)
                d = b[c],
                a["" + c] = d,
                f.push(function() {
                    var b, f, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    f = g.length; f > b; b++)
                        e = g[b],
                        h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                    return h
                }
                .call(this));
            return f
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (e = d(a),
            c = e.getPropertyCSSValue(b),
            i = this.vendors,
            g = 0,
            h = i.length; h > g; g++)
                f = i[g],
                c = c || e.getPropertyCSSValue("-" + f + "-" + b);
            return c
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);
/*!* wave-canvas.js */
var App = App || {};
!function() {
    var e = function() {
        var e, i, t, o, n, a, s, r, c, l, h, p, d, u, g, v = function() {
            if ($(".m-header").length)
                if (o = window.devicePixelRatio && cssua.ua.mobile ? window.devicePixelRatio : 1,
                e = $(window),
                i = $(".m-header"),
                i.append('<canvas id="wave-canvas"></canvas>'),
                n = document.getElementById("wave-canvas"),
                t = new createjs.Stage(n),
                a = new createjs.Shape,
                createjs.Ticker.setFPS(30),
                createjs.Ticker.addEventListener("tick", t),
                r = n.height - n.height / 2.7,
                c = n.height / 6.5,
                l = 60,
                h = .41,
                p = 2.5,
                d = 340,
                u = 2 * Math.PI / d,
                g = 10,
                Modernizr.canvas) {
                    w();
                    var s = _.throttle(f, 100);
                    e.on("resize", s),
                    f()
                } else
                    $(n).remove()
        }, f = function() {
            if (n.width = i.width() + 2,
            n.height = i.outerHeight(),
            r = n.height - n.height / 2.7,
            c = n.height / 7.5,
            h = .41,
            p = 2.5,
            n.width / o < 680 ? (s = new m,
            r = n.height - 10,
            p = 3.8,
            h = .2,
            c = 45) : s = new m,
            window.devicePixelRatio && cssua.ua.mobile) {
                var e = n.getAttribute("height")
                  , a = n.getAttribute("width");
                n.setAttribute("width", Math.round(a * window.devicePixelRatio)),
                n.setAttribute("height", Math.round(e * window.devicePixelRatio)),
                n.style.width = a + "px",
                n.style.height = e + "px",
                t.scaleX = t.scaleY = window.devicePixelRatio
            }
        }, w = function() {
            s = new m,
            t.addChild(a),
            C()
        }, m = function() {
            this.amp = 10 + 12 * Math.random(),
            this.freq = .0044,
            this.phase = 2 + 4 * Math.random(),
            this.offset = 2 + 4 * Math.random(),
            n.width / o < 680 && (this.amp = 2 + 6 * Math.random(),
            this.freq = .018,
            this.phase = 1 + 2 * Math.random(),
            this.offset = 1 + 2 * Math.random()),
            this.point = function(e) {
                return r - A() + this.offset + this.amp * Math.sin(this.freq * e + this.phase + u * g)
            }
        }, A = function() {
            var e = new Date;
            return c / 2 * Math.abs(e.getSeconds() + e.getMilliseconds() / 1e3 - 30) / 30
        }, C = function() {
            a.graphics.clear(),
            a.graphics.beginFill("#fff");
            for (var e = 0; e < n.width + 2; e++)
                a.graphics.lineTo(e, (s.point(e) * p + s.point(e)) * h);
            a.graphics.lineTo(n.width, n.height),
            a.graphics.lineTo(0, n.height),
            a.graphics.closePath(),
            a.graphics.endFill(),
            g = (g - 1) % d,
            t.update(),
            setTimeout(C, 1e3 / l)
        };
        return {
            initialize: v
        }
    }();
    App.waveCanvas = e,
    App.waveCanvas.initialize()
}();
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return n = {
        686: function(t, e, n) {
            "use strict";
            n.d(e, {
                default: function() {
                    return o
                }
            });
            var e = n(279)
              , i = n.n(e)
              , e = n(370)
              , u = n.n(e)
              , e = n(817)
              , c = n.n(e);
            function a(t) {
                try {
                    return document.execCommand(t)
                } catch (t) {
                    return
                }
            }
            var f = function(t) {
                t = c()(t);
                return a("cut"),
                t
            };
            var l = function(t) {
                var e, n, o, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                    container: document.body
                }, i = "";
                return "string" == typeof t ? (e = t,
                n = "rtl" === document.documentElement.getAttribute("dir"),
                (o = document.createElement("textarea")).style.fontSize = "12pt",
                o.style.border = "0",
                o.style.padding = "0",
                o.style.margin = "0",
                o.style.position = "absolute",
                o.style[n ? "right" : "left"] = "-9999px",
                n = window.pageYOffset || document.documentElement.scrollTop,
                o.style.top = "".concat(n, "px"),
                o.setAttribute("readonly", ""),
                o.value = e,
                o = o,
                r.container.appendChild(o),
                i = c()(o),
                a("copy"),
                o.remove()) : (i = c()(t),
                a("copy")),
                i
            };
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            var s = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = t.action
                  , n = void 0 === e ? "copy" : e
                  , o = t.container
                  , e = t.target
                  , t = t.text;
                if ("copy" !== n && "cut" !== n)
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (void 0 !== e) {
                    if (!e || "object" !== r(e) || 1 !== e.nodeType)
                        throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === n && e.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                }
                return t ? l(t, {
                    container: o
                }) : e ? "cut" === n ? f(e) : l(e, {
                    container: o
                }) : void 0
            };
            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            function y(t, e) {
                return (y = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                )(t, e)
            }
            function h(n) {
                var o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var t, e = m(n);
                    return t = o ? (t = m(this).constructor,
                    Reflect.construct(e, arguments, t)) : e.apply(this, arguments),
                    e = this,
                    !(t = t) || "object" !== p(t) && "function" != typeof t ? function(t) {
                        if (void 0 !== t)
                            return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(e) : t
                }
            }
            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function v(t, e) {
                t = "data-clipboard-".concat(t);
                if (e.hasAttribute(t))
                    return e.getAttribute(t)
            }
            var o = function() {
                !function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && y(t, e)
                }(r, i());
                var t, e, n, o = h(r);
                function r(t, e) {
                    var n;
                    return function(t) {
                        if (!(t instanceof r))
                            throw new TypeError("Cannot call a class as a function")
                    }(this),
                    (n = o.call(this)).resolveOptions(e),
                    n.listenClick(t),
                    n
                }
                return t = r,
                n = [{
                    key: "copy",
                    value: function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        };
                        return l(t, e)
                    }
                }, {
                    key: "cut",
                    value: function(t) {
                        return f(t)
                    }
                }, {
                    key: "isSupported",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                          , t = "string" == typeof t ? [t] : t
                          , e = !!document.queryCommandSupported;
                        return t.forEach(function(t) {
                            e = e && !!document.queryCommandSupported(t)
                        }),
                        e
                    }
                }],
                (e = [{
                    key: "resolveOptions",
                    value: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                        this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                        this.text = "function" == typeof t.text ? t.text : this.defaultText,
                        this.container = "object" === p(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function(t) {
                        var e = this;
                        this.listener = u()(t, "click", function(t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        var e = t.delegateTarget || t.currentTarget
                          , n = this.action(e) || "copy"
                          , t = s({
                            action: n,
                            container: this.container,
                            target: this.target(e),
                            text: this.text(e)
                        });
                        this.emit(t ? "success" : "error", {
                            action: n,
                            text: t,
                            trigger: e,
                            clearSelection: function() {
                                e && e.focus(),
                                document.activeElement.blur(),
                                window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function(t) {
                        return v("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function(t) {
                        t = v("target", t);
                        if (t)
                            return document.querySelector(t)
                    }
                }, {
                    key: "defaultText",
                    value: function(t) {
                        return v("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.listener.destroy()
                    }
                }]) && d(t.prototype, e),
                n && d(t, n),
                r
            }()
        },
        828: function(t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector),
            t.exports = function(t, e) {
                for (; t && 9 !== t.nodeType; ) {
                    if ("function" == typeof t.matches && t.matches(e))
                        return t;
                    t = t.parentNode
                }
            }
        },
        438: function(t, e, n) {
            var u = n(828);
            function i(t, e, n, o, r) {
                var i = function(e, n, t, o) {
                    return function(t) {
                        t.delegateTarget = u(t.target, n),
                        t.delegateTarget && o.call(e, t)
                    }
                }
                .apply(this, arguments);
                return t.addEventListener(n, i, r),
                {
                    destroy: function() {
                        t.removeEventListener(n, i, r)
                    }
                }
            }
            t.exports = function(t, e, n, o, r) {
                return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
                Array.prototype.map.call(t, function(t) {
                    return i(t, e, n, o, r)
                }))
            }
        },
        879: function(t, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }
            ,
            n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || n.node(t[0]))
            }
            ,
            n.string = function(t) {
                return "string" == typeof t || t instanceof String
            }
            ,
            n.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        },
        370: function(t, e, n) {
            var f = n(879)
              , l = n(438);
            t.exports = function(t, e, n) {
                if (!t && !e && !n)
                    throw new Error("Missing required arguments");
                if (!f.string(e))
                    throw new TypeError("Second argument must be a String");
                if (!f.fn(n))
                    throw new TypeError("Third argument must be a Function");
                if (f.node(t))
                    return c = e,
                    a = n,
                    (u = t).addEventListener(c, a),
                    {
                        destroy: function() {
                            u.removeEventListener(c, a)
                        }
                    };
                if (f.nodeList(t))
                    return o = t,
                    r = e,
                    i = n,
                    Array.prototype.forEach.call(o, function(t) {
                        t.addEventListener(r, i)
                    }),
                    {
                        destroy: function() {
                            Array.prototype.forEach.call(o, function(t) {
                                t.removeEventListener(r, i)
                            })
                        }
                    };
                if (f.string(t))
                    return t = t,
                    e = e,
                    n = n,
                    l(document.body, t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var o, r, i, u, c, a
            }
        },
        817: function(t) {
            t.exports = function(t) {
                var e, n = "SELECT" === t.nodeName ? (t.focus(),
                t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                e || t.removeAttribute("readonly"),
                t.value) : (t.hasAttribute("contenteditable") && t.focus(),
                n = window.getSelection(),
                (e = document.createRange()).selectNodeContents(t),
                n.removeAllRanges(),
                n.addRange(e),
                n.toString());
                return n
            }
        },
        279: function(t) {
            function e() {}
            e.prototype = {
                on: function(t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }),
                    this
                },
                once: function(t, e, n) {
                    var o = this;
                    function r() {
                        o.off(t, r),
                        e.apply(n, arguments)
                    }
                    return r._ = e,
                    this.on(t, r, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++)
                        n[o].fn.apply(n[o].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {})
                      , o = n[t]
                      , r = [];
                    if (o && e)
                        for (var i = 0, u = o.length; i < u; i++)
                            o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? n[t] = r : delete n[t],
                    this
                }
            },
            t.exports = e,
            t.exports.TinyEmitter = e
        }
    },
    r = {},
    o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return o.d(e, {
            a: e
        }),
        e
    }
    ,
    o.d = function(t, e) {
        for (var n in e)
            o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    o(686).default;
    function o(t) {
        if (r[t])
            return r[t].exports;
        var e = r[t] = {
            exports: {}
        };
        return n[t](e, e.exports, o),
        e.exports
    }
    var n, r
});

/*!
 * Meting.js
 */
"use strict";
function _objectSpread(a) {
    for (var b = 1; b < arguments.length; b++) {
        var c = null == arguments[b] ? {} : arguments[b]
          , d = Object.keys(c);
        "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
            return Object.getOwnPropertyDescriptor(c, a).enumerable
        }))),
        d.forEach(function(b) {
            _defineProperty(a, b, c[b])
        })
    }
    return a
}
function _defineProperty(a, b, c) {
    return b in a ? Object.defineProperty(a, b, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[b] = c,
    a
}
class MetingJSElement extends HTMLElement {
    connectedCallback() {
        window.APlayer && window.fetch && (this._init(),
        this._parse())
    }
    disconnectedCallback() {
        this.lock || this.aplayer.destroy()
    }
    _camelize(a) {
        return a.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (a,b)=>b.toUpperCase())
    }
    _init() {
        let a = {};
        for (let b = 0; b < this.attributes.length; b += 1)
            a[this._camelize(this.attributes[b].name)] = this.attributes[b].value;
        let b = ["server", "type", "id", "api", "auth", "auto", "lock", "name", "title", "artist", "author", "url", "cover", "pic", "lyric", "lrc"];
        this.meta = {};
        for (var c = 0; c < b.length; c++) {
            let d = b[c];
            this.meta[d] = a[d],
            delete a[d]
        }
        this.config = a,
        this.api = this.meta.api || window.meting_api || "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
        this.meta.auto && this._parse_link()
    }
    _parse_link() {
        let a = [["music.163.com.*song.*id=(\\d+)", "netease", "song"], ["music.163.com.*album.*id=(\\d+)", "netease", "album"], ["music.163.com.*artist.*id=(\\d+)", "netease", "artist"], ["music.163.com.*playlist.*id=(\\d+)", "netease", "playlist"], ["music.163.com.*discover/toplist.*id=(\\d+)", "netease", "playlist"], ["y.qq.com.*song/(\\w+).html", "tencent", "song"], ["y.qq.com.*album/(\\w+).html", "tencent", "album"], ["y.qq.com.*singer/(\\w+).html", "tencent", "artist"], ["y.qq.com.*playsquare/(\\w+).html", "tencent", "playlist"], ["y.qq.com.*playlist/(\\w+).html", "tencent", "playlist"], ["xiami.com.*song/(\\w+)", "xiami", "song"], ["xiami.com.*album/(\\w+)", "xiami", "album"], ["xiami.com.*artist/(\\w+)", "xiami", "artist"], ["xiami.com.*collect/(\\w+)", "xiami", "playlist"]];
        for (var b = 0; b < a.length; b++) {
            let c = a[b]
              , d = new RegExp(c[0])
              , e = d.exec(this.meta.auto);
            if (null !== e)
                return this.meta.server = c[1],
                this.meta.type = c[2],
                void (this.meta.id = e[1])
        }
    }
    _parse() {
        if (this.meta.url) {
            let a = {
                name: this.meta.name || this.meta.title || "Audio name",
                artist: this.meta.artist || this.meta.author || "Audio artist",
                url: this.meta.url,
                cover: this.meta.cover || this.meta.pic,
                lrc: this.meta.lrc || this.meta.lyric || "",
                type: this.meta.type || "auto"
            };
            return a.lrc || (this.meta.lrcType = 0),
            this.innerText && (a.lrc = this.innerText,
            this.meta.lrcType = 2),
            void this._loadPlayer([a])
        }
        let a = this.api.replace(":server", this.meta.server).replace(":type", this.meta.type).replace(":id", this.meta.id).replace(":auth", this.meta.auth).replace(":r", Math.random());
        fetch(a).then(a=>a.json()).then(a=>this._loadPlayer(a))
    }
    _loadPlayer(a) {
        let b = {
            audio: a,
            mutex: !0,
            lrcType: this.meta.lrcType || 3,
            storageName: "metingjs"
        };
        if (a.length) {
            let a = _objectSpread({}, b, this.config);
            for (let b in a)
                ("true" === a[b] || "false" === a[b]) && (a[b] = "true" === a[b]);
            let c = document.createElement("div");
            a.container = c,
            this.appendChild(c),
            this.aplayer = new APlayer(a)
        }
    }
}
