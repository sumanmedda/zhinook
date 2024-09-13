/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{
    var i_ = Object.create;
    var un = Object.defineProperty;
    var o_ = Object.getOwnPropertyDescriptor;
    var a_ = Object.getOwnPropertyNames;
    var s_ = Object.getPrototypeOf
      , u_ = Object.prototype.hasOwnProperty;
    var me = (e,t)=>()=>(e && (t = e(e = 0)),
    t);
    var c = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Ge = (e,t)=>{
        for (var r in t)
            un(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , Ds = (e,t,r,n)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of a_(t))
                !u_.call(e, i) && i !== r && un(e, i, {
                    get: ()=>t[i],
                    enumerable: !(n = o_(t, i)) || n.enumerable
                });
        return e
    }
    ;
    var fe = (e,t,r)=>(r = e != null ? i_(s_(e)) : {},
    Ds(t || !e || !e.__esModule ? un(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , rt = e=>Ds(un({}, "__esModule", {
        value: !0
    }), e);
    var qi = c(()=>{
        "use strict";
        window.tram = function(e) {
            function t(f, w) {
                var S = new p.Bare;
                return S.init(f, w)
            }
            function r(f) {
                return f.replace(/[A-Z]/g, function(w) {
                    return "-" + w.toLowerCase()
                })
            }
            function n(f) {
                var w = parseInt(f.slice(1), 16)
                  , S = w >> 16 & 255
                  , L = w >> 8 & 255
                  , A = 255 & w;
                return [S, L, A]
            }
            function i(f, w, S) {
                return "#" + (1 << 24 | f << 16 | w << 8 | S).toString(16).slice(1)
            }
            function o() {}
            function a(f, w) {
                l("Type warning: Expected: [" + f + "] Got: [" + typeof w + "] " + w)
            }
            function s(f, w, S) {
                l("Units do not match [" + f + "]: " + w + ", " + S)
            }
            function u(f, w, S) {
                if (w !== void 0 && (S = w),
                f === void 0)
                    return S;
                var L = S;
                return Te.test(f) || !Re.test(f) ? L = parseInt(f, 10) : Re.test(f) && (L = 1e3 * parseFloat(f)),
                0 > L && (L = 0),
                L === L ? L : S
            }
            function l(f) {
                oe.debug && window && window.console.warn(f)
            }
            function _(f) {
                for (var w = -1, S = f ? f.length : 0, L = []; ++w < S; ) {
                    var A = f[w];
                    A && L.push(A)
                }
                return L
            }
            var d = function(f, w, S) {
                function L(ae) {
                    return typeof ae == "object"
                }
                function A(ae) {
                    return typeof ae == "function"
                }
                function q() {}
                function re(ae, ve) {
                    function Y() {
                        var Ne = new se;
                        return A(Ne.init) && Ne.init.apply(Ne, arguments),
                        Ne
                    }
                    function se() {}
                    ve === S && (ve = ae,
                    ae = Object),
                    Y.Bare = se;
                    var ue, _e = q[f] = ae[f], tt = se[f] = Y[f] = new q;
                    return tt.constructor = Y,
                    Y.mixin = function(Ne) {
                        return se[f] = Y[f] = re(Y, Ne)[f],
                        Y
                    }
                    ,
                    Y.open = function(Ne) {
                        if (ue = {},
                        A(Ne) ? ue = Ne.call(Y, tt, _e, Y, ae) : L(Ne) && (ue = Ne),
                        L(ue))
                            for (var Er in ue)
                                w.call(ue, Er) && (tt[Er] = ue[Er]);
                        return A(tt.init) || (tt.init = ae),
                        Y
                    }
                    ,
                    Y.open(ve)
                }
                return re
            }("prototype", {}.hasOwnProperty)
              , E = {
                ease: ["ease", function(f, w, S, L) {
                    var A = (f /= L) * f
                      , q = A * f;
                    return w + S * (-2.75 * q * A + 11 * A * A + -15.5 * q + 8 * A + .25 * f)
                }
                ],
                "ease-in": ["ease-in", function(f, w, S, L) {
                    var A = (f /= L) * f
                      , q = A * f;
                    return w + S * (-1 * q * A + 3 * A * A + -3 * q + 2 * A)
                }
                ],
                "ease-out": ["ease-out", function(f, w, S, L) {
                    var A = (f /= L) * f
                      , q = A * f;
                    return w + S * (.3 * q * A + -1.6 * A * A + 2.2 * q + -1.8 * A + 1.9 * f)
                }
                ],
                "ease-in-out": ["ease-in-out", function(f, w, S, L) {
                    var A = (f /= L) * f
                      , q = A * f;
                    return w + S * (2 * q * A + -5 * A * A + 2 * q + 2 * A)
                }
                ],
                linear: ["linear", function(f, w, S, L) {
                    return S * f / L + w
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, w, S, L) {
                    return S * (f /= L) * f + w
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, w, S, L) {
                    return -S * (f /= L) * (f - 2) + w
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, w, S, L) {
                    return (f /= L / 2) < 1 ? S / 2 * f * f + w : -S / 2 * (--f * (f - 2) - 1) + w
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, w, S, L) {
                    return S * (f /= L) * f * f + w
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, w, S, L) {
                    return S * ((f = f / L - 1) * f * f + 1) + w
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, w, S, L) {
                    return (f /= L / 2) < 1 ? S / 2 * f * f * f + w : S / 2 * ((f -= 2) * f * f + 2) + w
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, w, S, L) {
                    return S * (f /= L) * f * f * f + w
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, w, S, L) {
                    return -S * ((f = f / L - 1) * f * f * f - 1) + w
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, w, S, L) {
                    return (f /= L / 2) < 1 ? S / 2 * f * f * f * f + w : -S / 2 * ((f -= 2) * f * f * f - 2) + w
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, w, S, L) {
                    return S * (f /= L) * f * f * f * f + w
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, w, S, L) {
                    return S * ((f = f / L - 1) * f * f * f * f + 1) + w
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, w, S, L) {
                    return (f /= L / 2) < 1 ? S / 2 * f * f * f * f * f + w : S / 2 * ((f -= 2) * f * f * f * f + 2) + w
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, w, S, L) {
                    return -S * Math.cos(f / L * (Math.PI / 2)) + S + w
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, w, S, L) {
                    return S * Math.sin(f / L * (Math.PI / 2)) + w
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, w, S, L) {
                    return -S / 2 * (Math.cos(Math.PI * f / L) - 1) + w
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, w, S, L) {
                    return f === 0 ? w : S * Math.pow(2, 10 * (f / L - 1)) + w
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, w, S, L) {
                    return f === L ? w + S : S * (-Math.pow(2, -10 * f / L) + 1) + w
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, w, S, L) {
                    return f === 0 ? w : f === L ? w + S : (f /= L / 2) < 1 ? S / 2 * Math.pow(2, 10 * (f - 1)) + w : S / 2 * (-Math.pow(2, -10 * --f) + 2) + w
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, w, S, L) {
                    return -S * (Math.sqrt(1 - (f /= L) * f) - 1) + w
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, w, S, L) {
                    return S * Math.sqrt(1 - (f = f / L - 1) * f) + w
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, w, S, L) {
                    return (f /= L / 2) < 1 ? -S / 2 * (Math.sqrt(1 - f * f) - 1) + w : S / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + w
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, w, S, L, A) {
                    return A === void 0 && (A = 1.70158),
                    S * (f /= L) * f * ((A + 1) * f - A) + w
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, w, S, L, A) {
                    return A === void 0 && (A = 1.70158),
                    S * ((f = f / L - 1) * f * ((A + 1) * f + A) + 1) + w
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, w, S, L, A) {
                    return A === void 0 && (A = 1.70158),
                    (f /= L / 2) < 1 ? S / 2 * f * f * (((A *= 1.525) + 1) * f - A) + w : S / 2 * ((f -= 2) * f * (((A *= 1.525) + 1) * f + A) + 2) + w
                }
                ]
            }
              , m = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , y = document
              , T = window
              , O = "bkwld-tram"
              , x = /[\-\.0-9]/g
              , P = /[A-Z]/
              , C = "number"
              , M = /^(rgb|#)/
              , D = /(em|cm|mm|in|pt|pc|px)$/
              , F = /(em|cm|mm|in|pt|pc|px|%)$/
              , K = /(deg|rad|turn)$/
              , j = "unitless"
              , $ = /(all|none) 0s ease 0s/
              , ee = /^(width|height)$/
              , H = " "
              , N = y.createElement("a")
              , I = ["Webkit", "Moz", "O", "ms"]
              , R = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , k = function(f) {
                if (f in N.style)
                    return {
                        dom: f,
                        css: f
                    };
                var w, S, L = "", A = f.split("-");
                for (w = 0; w < A.length; w++)
                    L += A[w].charAt(0).toUpperCase() + A[w].slice(1);
                for (w = 0; w < I.length; w++)
                    if (S = I[w] + L,
                    S in N.style)
                        return {
                            dom: S,
                            css: R[w] + f
                        }
            }
              , V = t.support = {
                bind: Function.prototype.bind,
                transform: k("transform"),
                transition: k("transition"),
                backface: k("backface-visibility"),
                timing: k("transition-timing-function")
            };
            if (V.transition) {
                var J = V.timing.dom;
                if (N.style[J] = E["ease-in-back"][0],
                !N.style[J])
                    for (var ne in m)
                        E[ne][0] = m[ne]
            }
            var G = t.frame = function() {
                var f = T.requestAnimationFrame || T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || T.oRequestAnimationFrame || T.msRequestAnimationFrame;
                return f && V.bind ? f.bind(T) : function(w) {
                    T.setTimeout(w, 16)
                }
            }()
              , U = t.now = function() {
                var f = T.performance
                  , w = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                return w && V.bind ? w.bind(f) : Date.now || function() {
                    return +new Date
                }
            }()
              , v = d(function(f) {
                function w(ie, le) {
                    var Ee = _(("" + ie).split(H))
                      , pe = Ee[0];
                    le = le || {};
                    var Pe = z[pe];
                    if (!Pe)
                        return l("Unsupported property: " + pe);
                    if (!le.weak || !this.props[pe]) {
                        var je = Pe[0]
                          , ke = this.props[pe];
                        return ke || (ke = this.props[pe] = new je.Bare),
                        ke.init(this.$el, Ee, Pe, le),
                        ke
                    }
                }
                function S(ie, le, Ee) {
                    if (ie) {
                        var pe = typeof ie;
                        if (le || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        pe == "number" && le)
                            return this.timer = new te({
                                duration: ie,
                                context: this,
                                complete: q
                            }),
                            void (this.active = !0);
                        if (pe == "string" && le) {
                            switch (ie) {
                            case "hide":
                                Y.call(this);
                                break;
                            case "stop":
                                re.call(this);
                                break;
                            case "redraw":
                                se.call(this);
                                break;
                            default:
                                w.call(this, ie, Ee && Ee[1])
                            }
                            return q.call(this)
                        }
                        if (pe == "function")
                            return void ie.call(this, this);
                        if (pe == "object") {
                            var Pe = 0;
                            tt.call(this, ie, function(Ie, n_) {
                                Ie.span > Pe && (Pe = Ie.span),
                                Ie.stop(),
                                Ie.animate(n_)
                            }, function(Ie) {
                                "wait"in Ie && (Pe = u(Ie.wait, 0))
                            }),
                            _e.call(this),
                            Pe > 0 && (this.timer = new te({
                                duration: Pe,
                                context: this
                            }),
                            this.active = !0,
                            le && (this.timer.complete = q));
                            var je = this
                              , ke = !1
                              , sn = {};
                            G(function() {
                                tt.call(je, ie, function(Ie) {
                                    Ie.active && (ke = !0,
                                    sn[Ie.name] = Ie.nextStyle)
                                }),
                                ke && je.$el.css(sn)
                            })
                        }
                    }
                }
                function L(ie) {
                    ie = u(ie, 0),
                    this.active ? this.queue.push({
                        options: ie
                    }) : (this.timer = new te({
                        duration: ie,
                        context: this,
                        complete: q
                    }),
                    this.active = !0)
                }
                function A(ie) {
                    return this.active ? (this.queue.push({
                        options: ie,
                        args: arguments
                    }),
                    void (this.timer.complete = q)) : l("No active transition timer. Use start() or wait() before then().")
                }
                function q() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var ie = this.queue.shift();
                        S.call(this, ie.options, !0, ie.args)
                    }
                }
                function re(ie) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var le;
                    typeof ie == "string" ? (le = {},
                    le[ie] = 1) : le = typeof ie == "object" && ie != null ? ie : this.props,
                    tt.call(this, le, Ne),
                    _e.call(this)
                }
                function ae(ie) {
                    re.call(this, ie),
                    tt.call(this, ie, Er, t_)
                }
                function ve(ie) {
                    typeof ie != "string" && (ie = "block"),
                    this.el.style.display = ie
                }
                function Y() {
                    re.call(this),
                    this.el.style.display = "none"
                }
                function se() {
                    this.el.offsetHeight
                }
                function ue() {
                    re.call(this),
                    e.removeData(this.el, O),
                    this.$el = this.el = null
                }
                function _e() {
                    var ie, le, Ee = [];
                    this.upstream && Ee.push(this.upstream);
                    for (ie in this.props)
                        le = this.props[ie],
                        le.active && Ee.push(le.string);
                    Ee = Ee.join(","),
                    this.style !== Ee && (this.style = Ee,
                    this.el.style[V.transition.dom] = Ee)
                }
                function tt(ie, le, Ee) {
                    var pe, Pe, je, ke, sn = le !== Ne, Ie = {};
                    for (pe in ie)
                        je = ie[pe],
                        pe in ce ? (Ie.transform || (Ie.transform = {}),
                        Ie.transform[pe] = je) : (P.test(pe) && (pe = r(pe)),
                        pe in z ? Ie[pe] = je : (ke || (ke = {}),
                        ke[pe] = je));
                    for (pe in Ie) {
                        if (je = Ie[pe],
                        Pe = this.props[pe],
                        !Pe) {
                            if (!sn)
                                continue;
                            Pe = w.call(this, pe)
                        }
                        le.call(this, Pe, je)
                    }
                    Ee && ke && Ee.call(this, ke)
                }
                function Ne(ie) {
                    ie.stop()
                }
                function Er(ie, le) {
                    ie.set(le)
                }
                function t_(ie) {
                    this.$el.css(ie)
                }
                function Xe(ie, le) {
                    f[ie] = function() {
                        return this.children ? r_.call(this, le, arguments) : (this.el && le.apply(this, arguments),
                        this)
                    }
                }
                function r_(ie, le) {
                    var Ee, pe = this.children.length;
                    for (Ee = 0; pe > Ee; Ee++)
                        ie.apply(this.children[Ee], le);
                    return this
                }
                f.init = function(ie) {
                    if (this.$el = e(ie),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    oe.keepInherited && !oe.fallback) {
                        var le = W(this.el, "transition");
                        le && !$.test(le) && (this.upstream = le)
                    }
                    V.backface && oe.hideBackface && b(this.el, V.backface.css, "hidden")
                }
                ,
                Xe("add", w),
                Xe("start", S),
                Xe("wait", L),
                Xe("then", A),
                Xe("next", q),
                Xe("stop", re),
                Xe("set", ae),
                Xe("show", ve),
                Xe("hide", Y),
                Xe("redraw", se),
                Xe("destroy", ue)
            })
              , p = d(v, function(f) {
                function w(S, L) {
                    var A = e.data(S, O) || e.data(S, O, new v.Bare);
                    return A.el || A.init(S),
                    L ? A.start(L) : A
                }
                f.init = function(S, L) {
                    var A = e(S);
                    if (!A.length)
                        return this;
                    if (A.length === 1)
                        return w(A[0], L);
                    var q = [];
                    return A.each(function(re, ae) {
                        q.push(w(ae, L))
                    }),
                    this.children = q,
                    this
                }
            })
              , h = d(function(f) {
                function w() {
                    var q = this.get();
                    this.update("auto");
                    var re = this.get();
                    return this.update(q),
                    re
                }
                function S(q, re, ae) {
                    return re !== void 0 && (ae = re),
                    q in E ? q : ae
                }
                function L(q) {
                    var re = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
                    return (re ? i(re[1], re[2], re[3]) : q).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var A = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                f.init = function(q, re, ae, ve) {
                    this.$el = q,
                    this.el = q[0];
                    var Y = re[0];
                    ae[2] && (Y = ae[2]),
                    Z[Y] && (Y = Z[Y]),
                    this.name = Y,
                    this.type = ae[1],
                    this.duration = u(re[1], this.duration, A.duration),
                    this.ease = S(re[2], this.ease, A.ease),
                    this.delay = u(re[3], this.delay, A.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = ee.test(this.name),
                    this.unit = ve.unit || this.unit || oe.defaultUnit,
                    this.angle = ve.angle || this.angle || oe.defaultAngle,
                    oe.fallback || ve.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + H + this.duration + "ms" + (this.ease != "ease" ? H + E[this.ease][0] : "") + (this.delay ? H + this.delay + "ms" : ""))
                }
                ,
                f.set = function(q) {
                    q = this.convert(q, this.type),
                    this.update(q),
                    this.redraw()
                }
                ,
                f.transition = function(q) {
                    this.active = !0,
                    q = this.convert(q, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    q == "auto" && (q = w.call(this))),
                    this.nextStyle = q
                }
                ,
                f.fallback = function(q) {
                    var re = this.el.style[this.name] || this.convert(this.get(), this.type);
                    q = this.convert(q, this.type),
                    this.auto && (re == "auto" && (re = this.convert(this.get(), this.type)),
                    q == "auto" && (q = w.call(this))),
                    this.tween = new Q({
                        from: re,
                        to: q,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                f.get = function() {
                    return W(this.el, this.name)
                }
                ,
                f.update = function(q) {
                    b(this.el, this.name, q)
                }
                ,
                f.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    b(this.el, this.name, this.get()));
                    var q = this.tween;
                    q && q.context && q.destroy()
                }
                ,
                f.convert = function(q, re) {
                    if (q == "auto" && this.auto)
                        return q;
                    var ae, ve = typeof q == "number", Y = typeof q == "string";
                    switch (re) {
                    case C:
                        if (ve)
                            return q;
                        if (Y && q.replace(x, "") === "")
                            return +q;
                        ae = "number(unitless)";
                        break;
                    case M:
                        if (Y) {
                            if (q === "" && this.original)
                                return this.original;
                            if (re.test(q))
                                return q.charAt(0) == "#" && q.length == 7 ? q : L(q)
                        }
                        ae = "hex or rgb string";
                        break;
                    case D:
                        if (ve)
                            return q + this.unit;
                        if (Y && re.test(q))
                            return q;
                        ae = "number(px) or string(unit)";
                        break;
                    case F:
                        if (ve)
                            return q + this.unit;
                        if (Y && re.test(q))
                            return q;
                        ae = "number(px) or string(unit or %)";
                        break;
                    case K:
                        if (ve)
                            return q + this.angle;
                        if (Y && re.test(q))
                            return q;
                        ae = "number(deg) or string(angle)";
                        break;
                    case j:
                        if (ve || Y && F.test(q))
                            return q;
                        ae = "number(unitless) or string(unit or %)"
                    }
                    return a(ae, q),
                    q
                }
                ,
                f.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , g = d(h, function(f, w) {
                f.init = function() {
                    w.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), M))
                }
            })
              , B = d(h, function(f, w) {
                f.init = function() {
                    w.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                f.get = function() {
                    return this.$el[this.name]()
                }
                ,
                f.update = function(S) {
                    this.$el[this.name](S)
                }
            })
              , X = d(h, function(f, w) {
                function S(L, A) {
                    var q, re, ae, ve, Y;
                    for (q in L)
                        ve = ce[q],
                        ae = ve[0],
                        re = ve[1] || q,
                        Y = this.convert(L[q], ae),
                        A.call(this, re, Y, ae)
                }
                f.init = function() {
                    w.init.apply(this, arguments),
                    this.current || (this.current = {},
                    ce.perspective && oe.perspective && (this.current.perspective = oe.perspective,
                    b(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                f.set = function(L) {
                    S.call(this, L, function(A, q) {
                        this.current[A] = q
                    }),
                    b(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                f.transition = function(L) {
                    var A = this.values(L);
                    this.tween = new de({
                        current: this.current,
                        values: A,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var q, re = {};
                    for (q in this.current)
                        re[q] = q in A ? A[q] : this.current[q];
                    this.active = !0,
                    this.nextStyle = this.style(re)
                }
                ,
                f.fallback = function(L) {
                    var A = this.values(L);
                    this.tween = new de({
                        current: this.current,
                        values: A,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                f.update = function() {
                    b(this.el, this.name, this.style(this.current))
                }
                ,
                f.style = function(L) {
                    var A, q = "";
                    for (A in L)
                        q += A + "(" + L[A] + ") ";
                    return q
                }
                ,
                f.values = function(L) {
                    var A, q = {};
                    return S.call(this, L, function(re, ae, ve) {
                        q[re] = ae,
                        this.current[re] === void 0 && (A = 0,
                        ~re.indexOf("scale") && (A = 1),
                        this.current[re] = this.convert(A, ve))
                    }),
                    q
                }
            })
              , Q = d(function(f) {
                function w(Y) {
                    ae.push(Y) === 1 && G(S)
                }
                function S() {
                    var Y, se, ue, _e = ae.length;
                    if (_e)
                        for (G(S),
                        se = U(),
                        Y = _e; Y--; )
                            ue = ae[Y],
                            ue && ue.render(se)
                }
                function L(Y) {
                    var se, ue = e.inArray(Y, ae);
                    ue >= 0 && (se = ae.slice(ue + 1),
                    ae.length = ue,
                    se.length && (ae = ae.concat(se)))
                }
                function A(Y) {
                    return Math.round(Y * ve) / ve
                }
                function q(Y, se, ue) {
                    return i(Y[0] + ue * (se[0] - Y[0]), Y[1] + ue * (se[1] - Y[1]), Y[2] + ue * (se[2] - Y[2]))
                }
                var re = {
                    ease: E.ease[1],
                    from: 0,
                    to: 1
                };
                f.init = function(Y) {
                    this.duration = Y.duration || 0,
                    this.delay = Y.delay || 0;
                    var se = Y.ease || re.ease;
                    E[se] && (se = E[se][1]),
                    typeof se != "function" && (se = re.ease),
                    this.ease = se,
                    this.update = Y.update || o,
                    this.complete = Y.complete || o,
                    this.context = Y.context || this,
                    this.name = Y.name;
                    var ue = Y.from
                      , _e = Y.to;
                    ue === void 0 && (ue = re.from),
                    _e === void 0 && (_e = re.to),
                    this.unit = Y.unit || "",
                    typeof ue == "number" && typeof _e == "number" ? (this.begin = ue,
                    this.change = _e - ue) : this.format(_e, ue),
                    this.value = this.begin + this.unit,
                    this.start = U(),
                    Y.autoplay !== !1 && this.play()
                }
                ,
                f.play = function() {
                    this.active || (this.start || (this.start = U()),
                    this.active = !0,
                    w(this))
                }
                ,
                f.stop = function() {
                    this.active && (this.active = !1,
                    L(this))
                }
                ,
                f.render = function(Y) {
                    var se, ue = Y - this.start;
                    if (this.delay) {
                        if (ue <= this.delay)
                            return;
                        ue -= this.delay
                    }
                    if (ue < this.duration) {
                        var _e = this.ease(ue, 0, 1, this.duration);
                        return se = this.startRGB ? q(this.startRGB, this.endRGB, _e) : A(this.begin + _e * this.change),
                        this.value = se + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    se = this.endHex || this.begin + this.change,
                    this.value = se + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                f.format = function(Y, se) {
                    if (se += "",
                    Y += "",
                    Y.charAt(0) == "#")
                        return this.startRGB = n(se),
                        this.endRGB = n(Y),
                        this.endHex = Y,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ue = se.replace(x, "")
                          , _e = Y.replace(x, "");
                        ue !== _e && s("tween", se, Y),
                        this.unit = ue
                    }
                    se = parseFloat(se),
                    Y = parseFloat(Y),
                    this.begin = this.value = se,
                    this.change = Y - se
                }
                ,
                f.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var ae = []
                  , ve = 1e3
            })
              , te = d(Q, function(f) {
                f.init = function(w) {
                    this.duration = w.duration || 0,
                    this.complete = w.complete || o,
                    this.context = w.context,
                    this.play()
                }
                ,
                f.render = function(w) {
                    var S = w - this.start;
                    S < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , de = d(Q, function(f, w) {
                f.init = function(S) {
                    this.context = S.context,
                    this.update = S.update,
                    this.tweens = [],
                    this.current = S.current;
                    var L, A;
                    for (L in S.values)
                        A = S.values[L],
                        this.current[L] !== A && this.tweens.push(new Q({
                            name: L,
                            from: this.current[L],
                            to: A,
                            duration: S.duration,
                            delay: S.delay,
                            ease: S.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                f.render = function(S) {
                    var L, A, q = this.tweens.length, re = !1;
                    for (L = q; L--; )
                        A = this.tweens[L],
                        A.context && (A.render(S),
                        this.current[A.name] = A.value,
                        re = !0);
                    return re ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                f.destroy = function() {
                    if (w.destroy.call(this),
                    this.tweens) {
                        var S, L = this.tweens.length;
                        for (S = L; S--; )
                            this.tweens[S].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , oe = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !V.transition,
                agentTests: []
            };
            t.fallback = function(f) {
                if (!V.transition)
                    return oe.fallback = !0;
                oe.agentTests.push("(" + f + ")");
                var w = new RegExp(oe.agentTests.join("|"),"i");
                oe.fallback = w.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(f) {
                return new Q(f)
            }
            ,
            t.delay = function(f, w, S) {
                return new te({
                    complete: w,
                    duration: f,
                    context: S
                })
            }
            ,
            e.fn.tram = function(f) {
                return t.call(null, this, f)
            }
            ;
            var b = e.style
              , W = e.css
              , Z = {
                transform: V.transform && V.transform.css
            }
              , z = {
                color: [g, M],
                background: [g, M, "background-color"],
                "outline-color": [g, M],
                "border-color": [g, M],
                "border-top-color": [g, M],
                "border-right-color": [g, M],
                "border-bottom-color": [g, M],
                "border-left-color": [g, M],
                "border-width": [h, D],
                "border-top-width": [h, D],
                "border-right-width": [h, D],
                "border-bottom-width": [h, D],
                "border-left-width": [h, D],
                "border-spacing": [h, D],
                "letter-spacing": [h, D],
                margin: [h, D],
                "margin-top": [h, D],
                "margin-right": [h, D],
                "margin-bottom": [h, D],
                "margin-left": [h, D],
                padding: [h, D],
                "padding-top": [h, D],
                "padding-right": [h, D],
                "padding-bottom": [h, D],
                "padding-left": [h, D],
                "outline-width": [h, D],
                opacity: [h, C],
                top: [h, F],
                right: [h, F],
                bottom: [h, F],
                left: [h, F],
                "font-size": [h, F],
                "text-indent": [h, F],
                "word-spacing": [h, F],
                width: [h, F],
                "min-width": [h, F],
                "max-width": [h, F],
                height: [h, F],
                "min-height": [h, F],
                "max-height": [h, F],
                "line-height": [h, j],
                "scroll-top": [B, C, "scrollTop"],
                "scroll-left": [B, C, "scrollLeft"]
            }
              , ce = {};
            V.transform && (z.transform = [X],
            ce = {
                x: [F, "translateX"],
                y: [F, "translateY"],
                rotate: [K],
                rotateX: [K],
                rotateY: [K],
                scale: [C],
                scaleX: [C],
                scaleY: [C],
                skew: [K],
                skewX: [K],
                skewY: [K]
            }),
            V.transform && V.backface && (ce.z = [F, "translateZ"],
            ce.rotateZ = [K],
            ce.scaleZ = [C],
            ce.perspective = [D]);
            var Te = /ms/
              , Re = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var Gs = c((tB,ks)=>{
        "use strict";
        var c_ = window.$
          , l_ = qi() && c_.tram;
        ks.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , i = Function.prototype
              , o = r.push
              , a = r.slice
              , s = r.concat
              , u = n.toString
              , l = n.hasOwnProperty
              , _ = r.forEach
              , d = r.map
              , E = r.reduce
              , m = r.reduceRight
              , y = r.filter
              , T = r.every
              , O = r.some
              , x = r.indexOf
              , P = r.lastIndexOf
              , C = Array.isArray
              , M = Object.keys
              , D = i.bind
              , F = e.each = e.forEach = function(I, R, k) {
                if (I == null)
                    return I;
                if (_ && I.forEach === _)
                    I.forEach(R, k);
                else if (I.length === +I.length) {
                    for (var V = 0, J = I.length; V < J; V++)
                        if (R.call(k, I[V], V, I) === t)
                            return
                } else
                    for (var ne = e.keys(I), V = 0, J = ne.length; V < J; V++)
                        if (R.call(k, I[ne[V]], ne[V], I) === t)
                            return;
                return I
            }
            ;
            e.map = e.collect = function(I, R, k) {
                var V = [];
                return I == null ? V : d && I.map === d ? I.map(R, k) : (F(I, function(J, ne, G) {
                    V.push(R.call(k, J, ne, G))
                }),
                V)
            }
            ,
            e.find = e.detect = function(I, R, k) {
                var V;
                return K(I, function(J, ne, G) {
                    if (R.call(k, J, ne, G))
                        return V = J,
                        !0
                }),
                V
            }
            ,
            e.filter = e.select = function(I, R, k) {
                var V = [];
                return I == null ? V : y && I.filter === y ? I.filter(R, k) : (F(I, function(J, ne, G) {
                    R.call(k, J, ne, G) && V.push(J)
                }),
                V)
            }
            ;
            var K = e.some = e.any = function(I, R, k) {
                R || (R = e.identity);
                var V = !1;
                return I == null ? V : O && I.some === O ? I.some(R, k) : (F(I, function(J, ne, G) {
                    if (V || (V = R.call(k, J, ne, G)))
                        return t
                }),
                !!V)
            }
            ;
            e.contains = e.include = function(I, R) {
                return I == null ? !1 : x && I.indexOf === x ? I.indexOf(R) != -1 : K(I, function(k) {
                    return k === R
                })
            }
            ,
            e.delay = function(I, R) {
                var k = a.call(arguments, 2);
                return setTimeout(function() {
                    return I.apply(null, k)
                }, R)
            }
            ,
            e.defer = function(I) {
                return e.delay.apply(e, [I, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(I) {
                var R, k, V;
                return function() {
                    R || (R = !0,
                    k = arguments,
                    V = this,
                    l_.frame(function() {
                        R = !1,
                        I.apply(V, k)
                    }))
                }
            }
            ,
            e.debounce = function(I, R, k) {
                var V, J, ne, G, U, v = function() {
                    var p = e.now() - G;
                    p < R ? V = setTimeout(v, R - p) : (V = null,
                    k || (U = I.apply(ne, J),
                    ne = J = null))
                };
                return function() {
                    ne = this,
                    J = arguments,
                    G = e.now();
                    var p = k && !V;
                    return V || (V = setTimeout(v, R)),
                    p && (U = I.apply(ne, J),
                    ne = J = null),
                    U
                }
            }
            ,
            e.defaults = function(I) {
                if (!e.isObject(I))
                    return I;
                for (var R = 1, k = arguments.length; R < k; R++) {
                    var V = arguments[R];
                    for (var J in V)
                        I[J] === void 0 && (I[J] = V[J])
                }
                return I
            }
            ,
            e.keys = function(I) {
                if (!e.isObject(I))
                    return [];
                if (M)
                    return M(I);
                var R = [];
                for (var k in I)
                    e.has(I, k) && R.push(k);
                return R
            }
            ,
            e.has = function(I, R) {
                return l.call(I, R)
            }
            ,
            e.isObject = function(I) {
                return I === Object(I)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var j = /(.)^/
              , $ = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , ee = /\\|'|\r|\n|\u2028|\u2029/g
              , H = function(I) {
                return "\\" + $[I]
            }
              , N = /^\s*(\w|\$)+\s*$/;
            return e.template = function(I, R, k) {
                !R && k && (R = k),
                R = e.defaults({}, R, e.templateSettings);
                var V = RegExp([(R.escape || j).source, (R.interpolate || j).source, (R.evaluate || j).source].join("|") + "|$", "g")
                  , J = 0
                  , ne = "__p+='";
                I.replace(V, function(p, h, g, B, X) {
                    return ne += I.slice(J, X).replace(ee, H),
                    J = X + p.length,
                    h ? ne += `'+
((__t=(` + h + `))==null?'':_.escape(__t))+
'` : g ? ne += `'+
((__t=(` + g + `))==null?'':__t)+
'` : B && (ne += `';
` + B + `
__p+='`),
                    p
                }),
                ne += `';
`;
                var G = R.variable;
                if (G) {
                    if (!N.test(G))
                        throw new Error("variable is not a bare identifier: " + G)
                } else
                    ne = `with(obj||{}){
` + ne + `}
`,
                    G = "obj";
                ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
                var U;
                try {
                    U = new Function(R.variable || "obj","_",ne)
                } catch (p) {
                    throw p.source = ne,
                    p
                }
                var v = function(p) {
                    return U.call(this, p, e)
                };
                return v.source = "function(" + G + `){
` + ne + "}",
                v
            }
            ,
            e
        }()
    }
    );
    var qe = c((rB,zs)=>{
        "use strict";
        var he = {}
          , Ut = {}
          , Bt = []
          , Mi = window.Webflow || []
          , Et = window.jQuery
          , Ke = Et(window)
          , f_ = Et(document)
          , nt = Et.isFunction
          , ze = he._ = Gs()
          , Us = he.tram = qi() && Et.tram
          , ln = !1
          , Di = !1;
        Us.config.hideBackface = !1;
        Us.config.keepInherited = !0;
        he.define = function(e, t, r) {
            Ut[e] && Ws(Ut[e]);
            var n = Ut[e] = t(Et, ze, r) || {};
            return Bs(n),
            n
        }
        ;
        he.require = function(e) {
            return Ut[e]
        }
        ;
        function Bs(e) {
            he.env() && (nt(e.design) && Ke.on("__wf_design", e.design),
            nt(e.preview) && Ke.on("__wf_preview", e.preview)),
            nt(e.destroy) && Ke.on("__wf_destroy", e.destroy),
            e.ready && nt(e.ready) && d_(e)
        }
        function d_(e) {
            if (ln) {
                e.ready();
                return
            }
            ze.contains(Bt, e.ready) || Bt.push(e.ready)
        }
        function Ws(e) {
            nt(e.design) && Ke.off("__wf_design", e.design),
            nt(e.preview) && Ke.off("__wf_preview", e.preview),
            nt(e.destroy) && Ke.off("__wf_destroy", e.destroy),
            e.ready && nt(e.ready) && p_(e)
        }
        function p_(e) {
            Bt = ze.filter(Bt, function(t) {
                return t !== e.ready
            })
        }
        he.push = function(e) {
            if (ln) {
                nt(e) && e();
                return
            }
            Mi.push(e)
        }
        ;
        he.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var cn = navigator.userAgent.toLowerCase()
          , Hs = he.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , h_ = he.env.chrome = /chrome/.test(cn) && /Google/.test(navigator.vendor) && parseInt(cn.match(/chrome\/(\d+)\./)[1], 10)
          , v_ = he.env.ios = /(ipod|iphone|ipad)/.test(cn);
        he.env.safari = /safari/.test(cn) && !h_ && !v_;
        var Fi;
        Hs && f_.on("touchstart mousedown", function(e) {
            Fi = e.target
        });
        he.validClick = Hs ? function(e) {
            return e === Fi || Et.contains(e, Fi)
        }
        : function() {
            return !0
        }
        ;
        var Xs = "resize.webflow orientationchange.webflow load.webflow"
          , g_ = "scroll.webflow " + Xs;
        he.resize = ki(Ke, Xs);
        he.scroll = ki(Ke, g_);
        he.redraw = ki();
        function ki(e, t) {
            var r = []
              , n = {};
            return n.up = ze.throttle(function(i) {
                ze.each(r, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(i) {
                typeof i == "function" && (ze.contains(r, i) || r.push(i))
            }
            ,
            n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ze.filter(r, function(o) {
                    return o !== i
                })
            }
            ,
            n
        }
        he.location = function(e) {
            window.location = e
        }
        ;
        he.env() && (he.location = function() {}
        );
        he.ready = function() {
            ln = !0,
            Di ? m_() : ze.each(Bt, Vs),
            ze.each(Mi, Vs),
            he.resize.up()
        }
        ;
        function Vs(e) {
            nt(e) && e()
        }
        function m_() {
            Di = !1,
            ze.each(Ut, Bs)
        }
        var Rt;
        he.load = function(e) {
            Rt.then(e)
        }
        ;
        function js() {
            Rt && (Rt.reject(),
            Ke.off("load", Rt.resolve)),
            Rt = new Et.Deferred,
            Ke.on("load", Rt.resolve)
        }
        he.destroy = function(e) {
            e = e || {},
            Di = !0,
            Ke.triggerHandler("__wf_destroy"),
            e.domready != null && (ln = e.domready),
            ze.each(Ut, Ws),
            he.resize.off(),
            he.scroll.off(),
            he.redraw.off(),
            Bt = [],
            Mi = [],
            Rt.state() === "pending" && js()
        }
        ;
        Et(he.ready);
        js();
        zs.exports = window.Webflow = he
    }
    );
    var $s = c((nB,Ys)=>{
        "use strict";
        var Ks = qe();
        Ks.define("brand", Ys.exports = function(e) {
            var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
            t.ready = function() {
                var m = n.attr("data-wf-status")
                  , y = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(y) && a.hostname !== y && (m = !0),
                m && !s && (l = l || d(),
                E(),
                setTimeout(E, 500),
                e(r).off(u, _).on(u, _))
            }
            ;
            function _() {
                var m = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", m ? "display: none !important;" : "")
            }
            function d() {
                var m = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , y = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return m.append(y, T),
                m[0]
            }
            function E() {
                var m = i.children(o)
                  , y = m.length && m.get(0) === l
                  , T = Ks.env("editor");
                if (y) {
                    T && m.remove();
                    return
                }
                m.length && m.remove(),
                T || i.append(l)
            }
            return t
        }
        )
    }
    );
    var Zs = c((iB,Qs)=>{
        "use strict";
        var Gi = qe();
        Gi.define("edit", Qs.exports = function(e, t, r) {
            if (r = r || {},
            (Gi.env("test") || Gi.env("frame")) && !r.fixture && !y_())
                return {
                    exit: 1
                };
            var n = {}, i = e(window), o = e(document.documentElement), a = document.location, s = "hashchange", u, l = r.load || E, _ = !1;
            try {
                _ = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            _ ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, d).triggerHandler(s);
            function d() {
                u || /\?edit/.test(a.hash) && l()
            }
            function E() {
                u = !0,
                window.WebflowEditor = !0,
                i.off(s, d),
                P(function(M) {
                    e.ajax({
                        url: x("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: m(M)
                    })
                })
            }
            function m(M) {
                return function(D) {
                    if (!D) {
                        console.error("Could not load editor data");
                        return
                    }
                    D.thirdPartyCookiesSupported = M,
                    y(O(D.scriptPath), function() {
                        window.WebflowEditor(D)
                    })
                }
            }
            function y(M, D) {
                e.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(D, T)
            }
            function T(M, D, F) {
                throw console.error("Could not load editor script: " + D),
                F
            }
            function O(M) {
                return M.indexOf("//") >= 0 ? M : x("https://editor-api.webflow.com" + M)
            }
            function x(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }
            function P(M) {
                var D = window.document.createElement("iframe");
                D.src = "https://webflow.com/site/third-party-cookie-check.html",
                D.style.display = "none",
                D.sandbox = "allow-scripts allow-same-origin";
                var F = function(K) {
                    K.data === "WF_third_party_cookies_unsupported" ? (C(D, F),
                    M(!1)) : K.data === "WF_third_party_cookies_supported" && (C(D, F),
                    M(!0))
                };
                D.onerror = function() {
                    C(D, F),
                    M(!1)
                }
                ,
                window.addEventListener("message", F, !1),
                window.document.body.appendChild(D)
            }
            function C(M, D) {
                window.removeEventListener("message", D, !1),
                M.remove()
            }
            return n
        }
        );
        function y_() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var eu = c((oB,Js)=>{
        "use strict";
        var E_ = qe();
        E_.define("focus-visible", Js.exports = function() {
            function e(r) {
                var n = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(C) {
                    return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList"in C && "contains"in C.classList)
                }
                function u(C) {
                    var M = C.type
                      , D = C.tagName;
                    return !!(D === "INPUT" && a[M] && !C.readOnly || D === "TEXTAREA" && !C.readOnly || C.isContentEditable)
                }
                function l(C) {
                    C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
                }
                function _(C) {
                    C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
                }
                function d(C) {
                    C.metaKey || C.altKey || C.ctrlKey || (s(r.activeElement) && l(r.activeElement),
                    n = !0)
                }
                function E() {
                    n = !1
                }
                function m(C) {
                    s(C.target) && (n || u(C.target)) && l(C.target)
                }
                function y(C) {
                    s(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    _(C.target))
                }
                function T() {
                    document.visibilityState === "hidden" && (i && (n = !0),
                    O())
                }
                function O() {
                    document.addEventListener("mousemove", P),
                    document.addEventListener("mousedown", P),
                    document.addEventListener("mouseup", P),
                    document.addEventListener("pointermove", P),
                    document.addEventListener("pointerdown", P),
                    document.addEventListener("pointerup", P),
                    document.addEventListener("touchmove", P),
                    document.addEventListener("touchstart", P),
                    document.addEventListener("touchend", P)
                }
                function x() {
                    document.removeEventListener("mousemove", P),
                    document.removeEventListener("mousedown", P),
                    document.removeEventListener("mouseup", P),
                    document.removeEventListener("pointermove", P),
                    document.removeEventListener("pointerdown", P),
                    document.removeEventListener("pointerup", P),
                    document.removeEventListener("touchmove", P),
                    document.removeEventListener("touchstart", P),
                    document.removeEventListener("touchend", P)
                }
                function P(C) {
                    C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (n = !1,
                    x())
                }
                document.addEventListener("keydown", d, !0),
                document.addEventListener("mousedown", E, !0),
                document.addEventListener("pointerdown", E, !0),
                document.addEventListener("touchstart", E, !0),
                document.addEventListener("visibilitychange", T, !0),
                O(),
                r.addEventListener("focus", m, !0),
                r.addEventListener("blur", y, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var nu = c((aB,ru)=>{
        "use strict";
        var tu = qe();
        tu.define("focus", ru.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }
            function i(a) {
                n(a) && (t = !0,
                setTimeout(()=>{
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && tu.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var au = c((sB,ou)=>{
        "use strict";
        var Vi = window.jQuery
          , it = {}
          , fn = []
          , iu = ".w-ix"
          , dn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Vi(t).triggerHandler(it.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Vi(t).triggerHandler(it.types.OUTRO))
            }
        };
        it.triggers = {};
        it.types = {
            INTRO: "w-ix-intro" + iu,
            OUTRO: "w-ix-outro" + iu
        };
        it.init = function() {
            for (var e = fn.length, t = 0; t < e; t++) {
                var r = fn[t];
                r[0](0, r[1])
            }
            fn = [],
            Vi.extend(it.triggers, dn)
        }
        ;
        it.async = function() {
            for (var e in dn) {
                var t = dn[e];
                dn.hasOwnProperty(e) && (it.triggers[e] = function(r, n) {
                    fn.push([t, n])
                }
                )
            }
        }
        ;
        it.async();
        ou.exports = it
    }
    );
    var br = c((uB,cu)=>{
        "use strict";
        var Ui = au();
        function su(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var b_ = window.jQuery
          , pn = {}
          , uu = ".w-ix"
          , __ = {
            reset: function(e, t) {
                Ui.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Ui.triggers.intro(e, t),
                su(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Ui.triggers.outro(e, t),
                su(t, "COMPONENT_INACTIVE")
            }
        };
        pn.triggers = {};
        pn.types = {
            INTRO: "w-ix-intro" + uu,
            OUTRO: "w-ix-outro" + uu
        };
        b_.extend(pn.triggers, __);
        cu.exports = pn
    }
    );
    var lu = c((cB,dt)=>{
        function Bi(e) {
            return dt.exports = Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            dt.exports.__esModule = !0,
            dt.exports.default = dt.exports,
            Bi(e)
        }
        dt.exports = Bi,
        dt.exports.__esModule = !0,
        dt.exports.default = dt.exports
    }
    );
    var hn = c((lB,_r)=>{
        var I_ = lu().default;
        function fu(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (fu = function(i) {
                return i ? r : t
            }
            )(e)
        }
        function T_(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || I_(e) != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = fu(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        _r.exports = T_,
        _r.exports.__esModule = !0,
        _r.exports.default = _r.exports
    }
    );
    var du = c((fB,Ir)=>{
        function w_(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ir.exports = w_,
        Ir.exports.__esModule = !0,
        Ir.exports.default = Ir.exports
    }
    );
    var ye = c((dB,pu)=>{
        var vn = function(e) {
            return e && e.Math == Math && e
        };
        pu.exports = vn(typeof globalThis == "object" && globalThis) || vn(typeof window == "object" && window) || vn(typeof self == "object" && self) || vn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var Wt = c((pB,hu)=>{
        hu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var Lt = c((hB,vu)=>{
        var x_ = Wt();
        vu.exports = !x_(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var gn = c((vB,gu)=>{
        var Tr = Function.prototype.call;
        gu.exports = Tr.bind ? Tr.bind(Tr) : function() {
            return Tr.apply(Tr, arguments)
        }
    }
    );
    var bu = c(Eu=>{
        "use strict";
        var mu = {}.propertyIsEnumerable
          , yu = Object.getOwnPropertyDescriptor
          , O_ = yu && !mu.call({
            1: 2
        }, 1);
        Eu.f = O_ ? function(t) {
            var r = yu(this, t);
            return !!r && r.enumerable
        }
        : mu
    }
    );
    var Wi = c((mB,_u)=>{
        _u.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var Ye = c((yB,Tu)=>{
        var Iu = Function.prototype
          , Hi = Iu.bind
          , Xi = Iu.call
          , A_ = Hi && Hi.bind(Xi);
        Tu.exports = Hi ? function(e) {
            return e && A_(Xi, e)
        }
        : function(e) {
            return e && function() {
                return Xi.apply(e, arguments)
            }
        }
    }
    );
    var Ou = c((EB,xu)=>{
        var wu = Ye()
          , S_ = wu({}.toString)
          , C_ = wu("".slice);
        xu.exports = function(e) {
            return C_(S_(e), 8, -1)
        }
    }
    );
    var Su = c((bB,Au)=>{
        var R_ = ye()
          , L_ = Ye()
          , N_ = Wt()
          , P_ = Ou()
          , ji = R_.Object
          , q_ = L_("".split);
        Au.exports = N_(function() {
            return !ji("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return P_(e) == "String" ? q_(e, "") : ji(e)
        }
        : ji
    }
    );
    var zi = c((_B,Cu)=>{
        var F_ = ye()
          , M_ = F_.TypeError;
        Cu.exports = function(e) {
            if (e == null)
                throw M_("Can't call method on " + e);
            return e
        }
    }
    );
    var wr = c((IB,Ru)=>{
        var D_ = Su()
          , k_ = zi();
        Ru.exports = function(e) {
            return D_(k_(e))
        }
    }
    );
    var ot = c((TB,Lu)=>{
        Lu.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Ht = c((wB,Nu)=>{
        var G_ = ot();
        Nu.exports = function(e) {
            return typeof e == "object" ? e !== null : G_(e)
        }
    }
    );
    var xr = c((xB,Pu)=>{
        var Ki = ye()
          , V_ = ot()
          , U_ = function(e) {
            return V_(e) ? e : void 0
        };
        Pu.exports = function(e, t) {
            return arguments.length < 2 ? U_(Ki[e]) : Ki[e] && Ki[e][t]
        }
    }
    );
    var Fu = c((OB,qu)=>{
        var B_ = Ye();
        qu.exports = B_({}.isPrototypeOf)
    }
    );
    var Du = c((AB,Mu)=>{
        var W_ = xr();
        Mu.exports = W_("navigator", "userAgent") || ""
    }
    );
    var Hu = c((SB,Wu)=>{
        var Bu = ye(), Yi = Du(), ku = Bu.process, Gu = Bu.Deno, Vu = ku && ku.versions || Gu && Gu.version, Uu = Vu && Vu.v8, $e, mn;
        Uu && ($e = Uu.split("."),
        mn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
        !mn && Yi && ($e = Yi.match(/Edge\/(\d+)/),
        (!$e || $e[1] >= 74) && ($e = Yi.match(/Chrome\/(\d+)/),
        $e && (mn = +$e[1])));
        Wu.exports = mn
    }
    );
    var $i = c((CB,ju)=>{
        var Xu = Hu()
          , H_ = Wt();
        ju.exports = !!Object.getOwnPropertySymbols && !H_(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Xu && Xu < 41
        })
    }
    );
    var Qi = c((RB,zu)=>{
        var X_ = $i();
        zu.exports = X_ && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var Zi = c((LB,Ku)=>{
        var j_ = ye()
          , z_ = xr()
          , K_ = ot()
          , Y_ = Fu()
          , $_ = Qi()
          , Q_ = j_.Object;
        Ku.exports = $_ ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = z_("Symbol");
            return K_(t) && Y_(t.prototype, Q_(e))
        }
    }
    );
    var $u = c((NB,Yu)=>{
        var Z_ = ye()
          , J_ = Z_.String;
        Yu.exports = function(e) {
            try {
                return J_(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var Zu = c((PB,Qu)=>{
        var eI = ye()
          , tI = ot()
          , rI = $u()
          , nI = eI.TypeError;
        Qu.exports = function(e) {
            if (tI(e))
                return e;
            throw nI(rI(e) + " is not a function")
        }
    }
    );
    var ec = c((qB,Ju)=>{
        var iI = Zu();
        Ju.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : iI(r)
        }
    }
    );
    var rc = c((FB,tc)=>{
        var oI = ye()
          , Ji = gn()
          , eo = ot()
          , to = Ht()
          , aI = oI.TypeError;
        tc.exports = function(e, t) {
            var r, n;
            if (t === "string" && eo(r = e.toString) && !to(n = Ji(r, e)) || eo(r = e.valueOf) && !to(n = Ji(r, e)) || t !== "string" && eo(r = e.toString) && !to(n = Ji(r, e)))
                return n;
            throw aI("Can't convert object to primitive value")
        }
    }
    );
    var ic = c((MB,nc)=>{
        nc.exports = !1
    }
    );
    var yn = c((DB,ac)=>{
        var oc = ye()
          , sI = Object.defineProperty;
        ac.exports = function(e, t) {
            try {
                sI(oc, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                oc[e] = t
            }
            return t
        }
    }
    );
    var En = c((kB,uc)=>{
        var uI = ye()
          , cI = yn()
          , sc = "__core-js_shared__"
          , lI = uI[sc] || cI(sc, {});
        uc.exports = lI
    }
    );
    var ro = c((GB,lc)=>{
        var fI = ic()
          , cc = En();
        (lc.exports = function(e, t) {
            return cc[e] || (cc[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: fI ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var dc = c((VB,fc)=>{
        var dI = ye()
          , pI = zi()
          , hI = dI.Object;
        fc.exports = function(e) {
            return hI(pI(e))
        }
    }
    );
    var bt = c((UB,pc)=>{
        var vI = Ye()
          , gI = dc()
          , mI = vI({}.hasOwnProperty);
        pc.exports = Object.hasOwn || function(t, r) {
            return mI(gI(t), r)
        }
    }
    );
    var no = c((BB,hc)=>{
        var yI = Ye()
          , EI = 0
          , bI = Math.random()
          , _I = yI(1.toString);
        hc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + _I(++EI + bI, 36)
        }
    }
    );
    var io = c((WB,Ec)=>{
        var II = ye()
          , TI = ro()
          , vc = bt()
          , wI = no()
          , gc = $i()
          , yc = Qi()
          , Xt = TI("wks")
          , Nt = II.Symbol
          , mc = Nt && Nt.for
          , xI = yc ? Nt : Nt && Nt.withoutSetter || wI;
        Ec.exports = function(e) {
            if (!vc(Xt, e) || !(gc || typeof Xt[e] == "string")) {
                var t = "Symbol." + e;
                gc && vc(Nt, e) ? Xt[e] = Nt[e] : yc && mc ? Xt[e] = mc(t) : Xt[e] = xI(t)
            }
            return Xt[e]
        }
    }
    );
    var Tc = c((HB,Ic)=>{
        var OI = ye()
          , AI = gn()
          , bc = Ht()
          , _c = Zi()
          , SI = ec()
          , CI = rc()
          , RI = io()
          , LI = OI.TypeError
          , NI = RI("toPrimitive");
        Ic.exports = function(e, t) {
            if (!bc(e) || _c(e))
                return e;
            var r = SI(e, NI), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = AI(r, e, t),
                !bc(n) || _c(n))
                    return n;
                throw LI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            CI(e, t)
        }
    }
    );
    var oo = c((XB,wc)=>{
        var PI = Tc()
          , qI = Zi();
        wc.exports = function(e) {
            var t = PI(e, "string");
            return qI(t) ? t : t + ""
        }
    }
    );
    var so = c((jB,Oc)=>{
        var FI = ye()
          , xc = Ht()
          , ao = FI.document
          , MI = xc(ao) && xc(ao.createElement);
        Oc.exports = function(e) {
            return MI ? ao.createElement(e) : {}
        }
    }
    );
    var uo = c((zB,Ac)=>{
        var DI = Lt()
          , kI = Wt()
          , GI = so();
        Ac.exports = !DI && !kI(function() {
            return Object.defineProperty(GI("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var co = c(Cc=>{
        var VI = Lt()
          , UI = gn()
          , BI = bu()
          , WI = Wi()
          , HI = wr()
          , XI = oo()
          , jI = bt()
          , zI = uo()
          , Sc = Object.getOwnPropertyDescriptor;
        Cc.f = VI ? Sc : function(t, r) {
            if (t = HI(t),
            r = XI(r),
            zI)
                try {
                    return Sc(t, r)
                } catch {}
            if (jI(t, r))
                return WI(!UI(BI.f, t, r), t[r])
        }
    }
    );
    var Or = c((YB,Lc)=>{
        var Rc = ye()
          , KI = Ht()
          , YI = Rc.String
          , $I = Rc.TypeError;
        Lc.exports = function(e) {
            if (KI(e))
                return e;
            throw $I(YI(e) + " is not an object")
        }
    }
    );
    var Ar = c(qc=>{
        var QI = ye()
          , ZI = Lt()
          , JI = uo()
          , Nc = Or()
          , eT = oo()
          , tT = QI.TypeError
          , Pc = Object.defineProperty;
        qc.f = ZI ? Pc : function(t, r, n) {
            if (Nc(t),
            r = eT(r),
            Nc(n),
            JI)
                try {
                    return Pc(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw tT("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var bn = c((QB,Fc)=>{
        var rT = Lt()
          , nT = Ar()
          , iT = Wi();
        Fc.exports = rT ? function(e, t, r) {
            return nT.f(e, t, iT(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var fo = c((ZB,Mc)=>{
        var oT = Ye()
          , aT = ot()
          , lo = En()
          , sT = oT(Function.toString);
        aT(lo.inspectSource) || (lo.inspectSource = function(e) {
            return sT(e)
        }
        );
        Mc.exports = lo.inspectSource
    }
    );
    var Gc = c((JB,kc)=>{
        var uT = ye()
          , cT = ot()
          , lT = fo()
          , Dc = uT.WeakMap;
        kc.exports = cT(Dc) && /native code/.test(lT(Dc))
    }
    );
    var po = c((eW,Uc)=>{
        var fT = ro()
          , dT = no()
          , Vc = fT("keys");
        Uc.exports = function(e) {
            return Vc[e] || (Vc[e] = dT(e))
        }
    }
    );
    var _n = c((tW,Bc)=>{
        Bc.exports = {}
    }
    );
    var Kc = c((rW,zc)=>{
        var pT = Gc(), jc = ye(), ho = Ye(), hT = Ht(), vT = bn(), vo = bt(), go = En(), gT = po(), mT = _n(), Wc = "Object already initialized", yo = jc.TypeError, yT = jc.WeakMap, In, Sr, Tn, ET = function(e) {
            return Tn(e) ? Sr(e) : In(e, {})
        }, bT = function(e) {
            return function(t) {
                var r;
                if (!hT(t) || (r = Sr(t)).type !== e)
                    throw yo("Incompatible receiver, " + e + " required");
                return r
            }
        };
        pT || go.state ? (_t = go.state || (go.state = new yT),
        Hc = ho(_t.get),
        mo = ho(_t.has),
        Xc = ho(_t.set),
        In = function(e, t) {
            if (mo(_t, e))
                throw new yo(Wc);
            return t.facade = e,
            Xc(_t, e, t),
            t
        }
        ,
        Sr = function(e) {
            return Hc(_t, e) || {}
        }
        ,
        Tn = function(e) {
            return mo(_t, e)
        }
        ) : (Pt = gT("state"),
        mT[Pt] = !0,
        In = function(e, t) {
            if (vo(e, Pt))
                throw new yo(Wc);
            return t.facade = e,
            vT(e, Pt, t),
            t
        }
        ,
        Sr = function(e) {
            return vo(e, Pt) ? e[Pt] : {}
        }
        ,
        Tn = function(e) {
            return vo(e, Pt)
        }
        );
        var _t, Hc, mo, Xc, Pt;
        zc.exports = {
            set: In,
            get: Sr,
            has: Tn,
            enforce: ET,
            getterFor: bT
        }
    }
    );
    var Qc = c((nW,$c)=>{
        var Eo = Lt()
          , _T = bt()
          , Yc = Function.prototype
          , IT = Eo && Object.getOwnPropertyDescriptor
          , bo = _T(Yc, "name")
          , TT = bo && function() {}
        .name === "something"
          , wT = bo && (!Eo || Eo && IT(Yc, "name").configurable);
        $c.exports = {
            EXISTS: bo,
            PROPER: TT,
            CONFIGURABLE: wT
        }
    }
    );
    var rl = c((iW,tl)=>{
        var xT = ye()
          , Zc = ot()
          , OT = bt()
          , Jc = bn()
          , AT = yn()
          , ST = fo()
          , el = Kc()
          , CT = Qc().CONFIGURABLE
          , RT = el.get
          , LT = el.enforce
          , NT = String(String).split("String");
        (tl.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1, o = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, u;
            if (Zc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!OT(r, "name") || CT && r.name !== s) && Jc(r, "name", s),
            u = LT(r),
            u.source || (u.source = NT.join(typeof s == "string" ? s : ""))),
            e === xT) {
                o ? e[t] = r : AT(t, r);
                return
            } else
                i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Jc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return Zc(this) && RT(this).source || ST(this)
        })
    }
    );
    var _o = c((oW,nl)=>{
        var PT = Math.ceil
          , qT = Math.floor;
        nl.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? qT : PT)(t)
        }
    }
    );
    var ol = c((aW,il)=>{
        var FT = _o()
          , MT = Math.max
          , DT = Math.min;
        il.exports = function(e, t) {
            var r = FT(e);
            return r < 0 ? MT(r + t, 0) : DT(r, t)
        }
    }
    );
    var sl = c((sW,al)=>{
        var kT = _o()
          , GT = Math.min;
        al.exports = function(e) {
            return e > 0 ? GT(kT(e), 9007199254740991) : 0
        }
    }
    );
    var cl = c((uW,ul)=>{
        var VT = sl();
        ul.exports = function(e) {
            return VT(e.length)
        }
    }
    );
    var Io = c((cW,fl)=>{
        var UT = wr()
          , BT = ol()
          , WT = cl()
          , ll = function(e) {
            return function(t, r, n) {
                var i = UT(t), o = WT(i), a = BT(n, o), s;
                if (e && r != r) {
                    for (; o > a; )
                        if (s = i[a++],
                        s != s)
                            return !0
                } else
                    for (; o > a; a++)
                        if ((e || a in i) && i[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        fl.exports = {
            includes: ll(!0),
            indexOf: ll(!1)
        }
    }
    );
    var wo = c((lW,pl)=>{
        var HT = Ye()
          , To = bt()
          , XT = wr()
          , jT = Io().indexOf
          , zT = _n()
          , dl = HT([].push);
        pl.exports = function(e, t) {
            var r = XT(e), n = 0, i = [], o;
            for (o in r)
                !To(zT, o) && To(r, o) && dl(i, o);
            for (; t.length > n; )
                To(r, o = t[n++]) && (~jT(i, o) || dl(i, o));
            return i
        }
    }
    );
    var wn = c((fW,hl)=>{
        hl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var gl = c(vl=>{
        var KT = wo()
          , YT = wn()
          , $T = YT.concat("length", "prototype");
        vl.f = Object.getOwnPropertyNames || function(t) {
            return KT(t, $T)
        }
    }
    );
    var yl = c(ml=>{
        ml.f = Object.getOwnPropertySymbols
    }
    );
    var bl = c((hW,El)=>{
        var QT = xr()
          , ZT = Ye()
          , JT = gl()
          , ew = yl()
          , tw = Or()
          , rw = ZT([].concat);
        El.exports = QT("Reflect", "ownKeys") || function(t) {
            var r = JT.f(tw(t))
              , n = ew.f;
            return n ? rw(r, n(t)) : r
        }
    }
    );
    var Il = c((vW,_l)=>{
        var nw = bt()
          , iw = bl()
          , ow = co()
          , aw = Ar();
        _l.exports = function(e, t) {
            for (var r = iw(t), n = aw.f, i = ow.f, o = 0; o < r.length; o++) {
                var a = r[o];
                nw(e, a) || n(e, a, i(t, a))
            }
        }
    }
    );
    var wl = c((gW,Tl)=>{
        var sw = Wt()
          , uw = ot()
          , cw = /#|\.prototype\./
          , Cr = function(e, t) {
            var r = fw[lw(e)];
            return r == pw ? !0 : r == dw ? !1 : uw(t) ? sw(t) : !!t
        }
          , lw = Cr.normalize = function(e) {
            return String(e).replace(cw, ".").toLowerCase()
        }
          , fw = Cr.data = {}
          , dw = Cr.NATIVE = "N"
          , pw = Cr.POLYFILL = "P";
        Tl.exports = Cr
    }
    );
    var Ol = c((mW,xl)=>{
        var xo = ye()
          , hw = co().f
          , vw = bn()
          , gw = rl()
          , mw = yn()
          , yw = Il()
          , Ew = wl();
        xl.exports = function(e, t) {
            var r = e.target, n = e.global, i = e.stat, o, a, s, u, l, _;
            if (n ? a = xo : i ? a = xo[r] || mw(r, {}) : a = (xo[r] || {}).prototype,
            a)
                for (s in t) {
                    if (l = t[s],
                    e.noTargetGet ? (_ = hw(a, s),
                    u = _ && _.value) : u = a[s],
                    o = Ew(n ? s : r + (i ? "." : "#") + s, e.forced),
                    !o && u !== void 0) {
                        if (typeof l == typeof u)
                            continue;
                        yw(l, u)
                    }
                    (e.sham || u && u.sham) && vw(l, "sham", !0),
                    gw(a, s, l, e)
                }
        }
    }
    );
    var Sl = c((yW,Al)=>{
        var bw = wo()
          , _w = wn();
        Al.exports = Object.keys || function(t) {
            return bw(t, _w)
        }
    }
    );
    var Rl = c((EW,Cl)=>{
        var Iw = Lt()
          , Tw = Ar()
          , ww = Or()
          , xw = wr()
          , Ow = Sl();
        Cl.exports = Iw ? Object.defineProperties : function(t, r) {
            ww(t);
            for (var n = xw(r), i = Ow(r), o = i.length, a = 0, s; o > a; )
                Tw.f(t, s = i[a++], n[s]);
            return t
        }
    }
    );
    var Nl = c((bW,Ll)=>{
        var Aw = xr();
        Ll.exports = Aw("document", "documentElement")
    }
    );
    var Vl = c((_W,Gl)=>{
        var Sw = Or(), Cw = Rl(), Pl = wn(), Rw = _n(), Lw = Nl(), Nw = so(), Pw = po(), ql = ">", Fl = "<", Ao = "prototype", So = "script", Dl = Pw("IE_PROTO"), Oo = function() {}, kl = function(e) {
            return Fl + So + ql + e + Fl + "/" + So + ql
        }, Ml = function(e) {
            e.write(kl("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, qw = function() {
            var e = Nw("iframe"), t = "java" + So + ":", r;
            return e.style.display = "none",
            Lw.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(kl("document.F=Object")),
            r.close(),
            r.F
        }, xn, On = function() {
            try {
                xn = new ActiveXObject("htmlfile")
            } catch {}
            On = typeof document < "u" ? document.domain && xn ? Ml(xn) : qw() : Ml(xn);
            for (var e = Pl.length; e--; )
                delete On[Ao][Pl[e]];
            return On()
        };
        Rw[Dl] = !0;
        Gl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Oo[Ao] = Sw(t),
            n = new Oo,
            Oo[Ao] = null,
            n[Dl] = t) : n = On(),
            r === void 0 ? n : Cw(n, r)
        }
    }
    );
    var Bl = c((IW,Ul)=>{
        var Fw = io()
          , Mw = Vl()
          , Dw = Ar()
          , Co = Fw("unscopables")
          , Ro = Array.prototype;
        Ro[Co] == null && Dw.f(Ro, Co, {
            configurable: !0,
            value: Mw(null)
        });
        Ul.exports = function(e) {
            Ro[Co][e] = !0
        }
    }
    );
    var Wl = c(()=>{
        "use strict";
        var kw = Ol()
          , Gw = Io().includes
          , Vw = Bl();
        kw({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return Gw(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Vw("includes")
    }
    );
    var Xl = c((xW,Hl)=>{
        var Uw = ye()
          , Bw = Ye();
        Hl.exports = function(e, t) {
            return Bw(Uw[e].prototype[t])
        }
    }
    );
    var zl = c((OW,jl)=>{
        Wl();
        var Ww = Xl();
        jl.exports = Ww("Array", "includes")
    }
    );
    var Yl = c((AW,Kl)=>{
        var Hw = zl();
        Kl.exports = Hw
    }
    );
    var Ql = c((SW,$l)=>{
        var Xw = Yl();
        $l.exports = Xw
    }
    );
    var Lo = c((CW,Zl)=>{
        var jw = typeof global == "object" && global && global.Object === Object && global;
        Zl.exports = jw
    }
    );
    var Qe = c((RW,Jl)=>{
        var zw = Lo()
          , Kw = typeof self == "object" && self && self.Object === Object && self
          , Yw = zw || Kw || Function("return this")();
        Jl.exports = Yw
    }
    );
    var jt = c((LW,ef)=>{
        var $w = Qe()
          , Qw = $w.Symbol;
        ef.exports = Qw
    }
    );
    var of = c((NW,nf)=>{
        var tf = jt()
          , rf = Object.prototype
          , Zw = rf.hasOwnProperty
          , Jw = rf.toString
          , Rr = tf ? tf.toStringTag : void 0;
        function e0(e) {
            var t = Zw.call(e, Rr)
              , r = e[Rr];
            try {
                e[Rr] = void 0;
                var n = !0
            } catch {}
            var i = Jw.call(e);
            return n && (t ? e[Rr] = r : delete e[Rr]),
            i
        }
        nf.exports = e0
    }
    );
    var sf = c((PW,af)=>{
        var t0 = Object.prototype
          , r0 = t0.toString;
        function n0(e) {
            return r0.call(e)
        }
        af.exports = n0
    }
    );
    var It = c((qW,lf)=>{
        var uf = jt()
          , i0 = of()
          , o0 = sf()
          , a0 = "[object Null]"
          , s0 = "[object Undefined]"
          , cf = uf ? uf.toStringTag : void 0;
        function u0(e) {
            return e == null ? e === void 0 ? s0 : a0 : cf && cf in Object(e) ? i0(e) : o0(e)
        }
        lf.exports = u0
    }
    );
    var No = c((FW,ff)=>{
        function c0(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        ff.exports = c0
    }
    );
    var Po = c((MW,df)=>{
        var l0 = No()
          , f0 = l0(Object.getPrototypeOf, Object);
        df.exports = f0
    }
    );
    var pt = c((DW,pf)=>{
        function d0(e) {
            return e != null && typeof e == "object"
        }
        pf.exports = d0
    }
    );
    var qo = c((kW,vf)=>{
        var p0 = It()
          , h0 = Po()
          , v0 = pt()
          , g0 = "[object Object]"
          , m0 = Function.prototype
          , y0 = Object.prototype
          , hf = m0.toString
          , E0 = y0.hasOwnProperty
          , b0 = hf.call(Object);
        function _0(e) {
            if (!v0(e) || p0(e) != g0)
                return !1;
            var t = h0(e);
            if (t === null)
                return !0;
            var r = E0.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && hf.call(r) == b0
        }
        vf.exports = _0
    }
    );
    var gf = c(Fo=>{
        "use strict";
        Object.defineProperty(Fo, "__esModule", {
            value: !0
        });
        Fo.default = I0;
        function I0(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var mf = c((Do,Mo)=>{
        "use strict";
        Object.defineProperty(Do, "__esModule", {
            value: !0
        });
        var T0 = gf()
          , w0 = x0(T0);
        function x0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var zt;
        typeof self < "u" ? zt = self : typeof window < "u" ? zt = window : typeof global < "u" ? zt = global : typeof Mo < "u" ? zt = Mo : zt = Function("return this")();
        var O0 = (0,
        w0.default)(zt);
        Do.default = O0
    }
    );
    var ko = c(Lr=>{
        "use strict";
        Lr.__esModule = !0;
        Lr.ActionTypes = void 0;
        Lr.default = _f;
        var A0 = qo()
          , S0 = bf(A0)
          , C0 = mf()
          , yf = bf(C0);
        function bf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ef = Lr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function _f(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(_f)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , s = a
              , u = !1;
            function l() {
                s === a && (s = a.slice())
            }
            function _() {
                return o
            }
            function d(T) {
                if (typeof T != "function")
                    throw new Error("Expected listener to be a function.");
                var O = !0;
                return l(),
                s.push(T),
                function() {
                    if (O) {
                        O = !1,
                        l();
                        var P = s.indexOf(T);
                        s.splice(P, 1)
                    }
                }
            }
            function E(T) {
                if (!(0,
                S0.default)(T))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof T.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0,
                    o = i(o, T)
                } finally {
                    u = !1
                }
                for (var O = a = s, x = 0; x < O.length; x++)
                    O[x]();
                return T
            }
            function m(T) {
                if (typeof T != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = T,
                E({
                    type: Ef.INIT
                })
            }
            function y() {
                var T, O = d;
                return T = {
                    subscribe: function(P) {
                        if (typeof P != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function C() {
                            P.next && P.next(_())
                        }
                        C();
                        var M = O(C);
                        return {
                            unsubscribe: M
                        }
                    }
                },
                T[yf.default] = function() {
                    return this
                }
                ,
                T
            }
            return E({
                type: Ef.INIT
            }),
            n = {
                dispatch: E,
                subscribe: d,
                getState: _,
                replaceReducer: m
            },
            n[yf.default] = y,
            n
        }
    }
    );
    var Vo = c(Go=>{
        "use strict";
        Go.__esModule = !0;
        Go.default = R0;
        function R0(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var wf = c(Uo=>{
        "use strict";
        Uo.__esModule = !0;
        Uo.default = F0;
        var If = ko()
          , L0 = qo()
          , BW = Tf(L0)
          , N0 = Vo()
          , WW = Tf(N0);
        function Tf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function P0(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function q0(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: If.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + If.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function F0(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                q0(r)
            } catch (u) {
                s = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , _ = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var d;
                for (var E = !1, m = {}, y = 0; y < o.length; y++) {
                    var T = o[y]
                      , O = r[T]
                      , x = l[T]
                      , P = O(x, _);
                    if (typeof P > "u") {
                        var C = P0(T, _);
                        throw new Error(C)
                    }
                    m[T] = P,
                    E = E || P !== x
                }
                return E ? m : l
            }
        }
    }
    );
    var Of = c(Bo=>{
        "use strict";
        Bo.__esModule = !0;
        Bo.default = M0;
        function xf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function M0(e, t) {
            if (typeof e == "function")
                return xf(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i]
                  , a = e[o];
                typeof a == "function" && (n[o] = xf(a, t))
            }
            return n
        }
    }
    );
    var Ho = c(Wo=>{
        "use strict";
        Wo.__esModule = !0;
        Wo.default = D0;
        function D0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var Af = c(Xo=>{
        "use strict";
        Xo.__esModule = !0;
        var k0 = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        Xo.default = B0;
        var G0 = Ho()
          , V0 = U0(G0);
        function U0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function B0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a)
                      , u = s.dispatch
                      , l = []
                      , _ = {
                        getState: s.getState,
                        dispatch: function(E) {
                            return u(E)
                        }
                    };
                    return l = t.map(function(d) {
                        return d(_)
                    }),
                    u = V0.default.apply(void 0, l)(s.dispatch),
                    k0({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    }
    );
    var jo = c(He=>{
        "use strict";
        He.__esModule = !0;
        He.compose = He.applyMiddleware = He.bindActionCreators = He.combineReducers = He.createStore = void 0;
        var W0 = ko()
          , H0 = Kt(W0)
          , X0 = wf()
          , j0 = Kt(X0)
          , z0 = Of()
          , K0 = Kt(z0)
          , Y0 = Af()
          , $0 = Kt(Y0)
          , Q0 = Ho()
          , Z0 = Kt(Q0)
          , J0 = Vo()
          , KW = Kt(J0);
        function Kt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        He.createStore = H0.default;
        He.combineReducers = j0.default;
        He.bindActionCreators = K0.default;
        He.applyMiddleware = $0.default;
        He.compose = Z0.default
    }
    );
    var Ze, zo, at, ex, tx, An, rx, Ko = me(()=>{
        "use strict";
        Ze = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        zo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        at = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        ex = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        tx = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        An = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        rx = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Ve, nx, Sn = me(()=>{
        "use strict";
        Ve = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        nx = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var ix, Sf = me(()=>{
        "use strict";
        ix = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var ox, ax, sx, ux, cx, lx, fx, Yo, Cf = me(()=>{
        "use strict";
        Sn();
        ({TRANSFORM_MOVE: ox, TRANSFORM_SCALE: ax, TRANSFORM_ROTATE: sx, TRANSFORM_SKEW: ux, STYLE_SIZE: cx, STYLE_FILTER: lx, STYLE_FONT_VARIATION: fx} = Ve),
        Yo = {
            [ox]: !0,
            [ax]: !0,
            [sx]: !0,
            [ux]: !0,
            [cx]: !0,
            [lx]: !0,
            [fx]: !0
        }
    }
    );
    var we = {};
    Ge(we, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: ()=>Sx,
        IX2_ANIMATION_FRAME_CHANGED: ()=>Ix,
        IX2_CLEAR_REQUESTED: ()=>Ex,
        IX2_ELEMENT_STATE_CHANGED: ()=>Ax,
        IX2_EVENT_LISTENER_ADDED: ()=>bx,
        IX2_EVENT_STATE_CHANGED: ()=>_x,
        IX2_INSTANCE_ADDED: ()=>wx,
        IX2_INSTANCE_REMOVED: ()=>Ox,
        IX2_INSTANCE_STARTED: ()=>xx,
        IX2_MEDIA_QUERIES_DEFINED: ()=>Rx,
        IX2_PARAMETER_CHANGED: ()=>Tx,
        IX2_PLAYBACK_REQUESTED: ()=>mx,
        IX2_PREVIEW_REQUESTED: ()=>gx,
        IX2_RAW_DATA_IMPORTED: ()=>dx,
        IX2_SESSION_INITIALIZED: ()=>px,
        IX2_SESSION_STARTED: ()=>hx,
        IX2_SESSION_STOPPED: ()=>vx,
        IX2_STOP_REQUESTED: ()=>yx,
        IX2_TEST_FRAME_RENDERED: ()=>Lx,
        IX2_VIEWPORT_WIDTH_CHANGED: ()=>Cx
    });
    var dx, px, hx, vx, gx, mx, yx, Ex, bx, _x, Ix, Tx, wx, xx, Ox, Ax, Sx, Cx, Rx, Lx, Rf = me(()=>{
        "use strict";
        dx = "IX2_RAW_DATA_IMPORTED",
        px = "IX2_SESSION_INITIALIZED",
        hx = "IX2_SESSION_STARTED",
        vx = "IX2_SESSION_STOPPED",
        gx = "IX2_PREVIEW_REQUESTED",
        mx = "IX2_PLAYBACK_REQUESTED",
        yx = "IX2_STOP_REQUESTED",
        Ex = "IX2_CLEAR_REQUESTED",
        bx = "IX2_EVENT_LISTENER_ADDED",
        _x = "IX2_EVENT_STATE_CHANGED",
        Ix = "IX2_ANIMATION_FRAME_CHANGED",
        Tx = "IX2_PARAMETER_CHANGED",
        wx = "IX2_INSTANCE_ADDED",
        xx = "IX2_INSTANCE_STARTED",
        Ox = "IX2_INSTANCE_REMOVED",
        Ax = "IX2_ELEMENT_STATE_CHANGED",
        Sx = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        Cx = "IX2_VIEWPORT_WIDTH_CHANGED",
        Rx = "IX2_MEDIA_QUERIES_DEFINED",
        Lx = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var Le = {};
    Ge(Le, {
        ABSTRACT_NODE: ()=>CO,
        AUTO: ()=>yO,
        BACKGROUND: ()=>dO,
        BACKGROUND_COLOR: ()=>fO,
        BAR_DELIMITER: ()=>_O,
        BORDER_COLOR: ()=>pO,
        BOUNDARY_SELECTOR: ()=>Mx,
        CHILDREN: ()=>IO,
        COLON_DELIMITER: ()=>bO,
        COLOR: ()=>hO,
        COMMA_DELIMITER: ()=>EO,
        CONFIG_UNIT: ()=>Hx,
        CONFIG_VALUE: ()=>Vx,
        CONFIG_X_UNIT: ()=>Ux,
        CONFIG_X_VALUE: ()=>Dx,
        CONFIG_Y_UNIT: ()=>Bx,
        CONFIG_Y_VALUE: ()=>kx,
        CONFIG_Z_UNIT: ()=>Wx,
        CONFIG_Z_VALUE: ()=>Gx,
        DISPLAY: ()=>vO,
        FILTER: ()=>sO,
        FLEX: ()=>gO,
        FONT_VARIATION_SETTINGS: ()=>uO,
        HEIGHT: ()=>lO,
        HTML_ELEMENT: ()=>AO,
        IMMEDIATE_CHILDREN: ()=>TO,
        IX2_ID_DELIMITER: ()=>Nx,
        OPACITY: ()=>aO,
        PARENT: ()=>xO,
        PLAIN_OBJECT: ()=>SO,
        PRESERVE_3D: ()=>OO,
        RENDER_GENERAL: ()=>LO,
        RENDER_PLUGIN: ()=>PO,
        RENDER_STYLE: ()=>NO,
        RENDER_TRANSFORM: ()=>RO,
        ROTATE_X: ()=>eO,
        ROTATE_Y: ()=>tO,
        ROTATE_Z: ()=>rO,
        SCALE_3D: ()=>Jx,
        SCALE_X: ()=>$x,
        SCALE_Y: ()=>Qx,
        SCALE_Z: ()=>Zx,
        SIBLINGS: ()=>wO,
        SKEW: ()=>nO,
        SKEW_X: ()=>iO,
        SKEW_Y: ()=>oO,
        TRANSFORM: ()=>Xx,
        TRANSLATE_3D: ()=>Yx,
        TRANSLATE_X: ()=>jx,
        TRANSLATE_Y: ()=>zx,
        TRANSLATE_Z: ()=>Kx,
        WF_PAGE: ()=>Px,
        WIDTH: ()=>cO,
        WILL_CHANGE: ()=>mO,
        W_MOD_IX: ()=>Fx,
        W_MOD_JS: ()=>qx
    });
    var Nx, Px, qx, Fx, Mx, Dx, kx, Gx, Vx, Ux, Bx, Wx, Hx, Xx, jx, zx, Kx, Yx, $x, Qx, Zx, Jx, eO, tO, rO, nO, iO, oO, aO, sO, uO, cO, lO, fO, dO, pO, hO, vO, gO, mO, yO, EO, bO, _O, IO, TO, wO, xO, OO, AO, SO, CO, RO, LO, NO, PO, Lf = me(()=>{
        "use strict";
        Nx = "|",
        Px = "data-wf-page",
        qx = "w-mod-js",
        Fx = "w-mod-ix",
        Mx = ".w-dyn-item",
        Dx = "xValue",
        kx = "yValue",
        Gx = "zValue",
        Vx = "value",
        Ux = "xUnit",
        Bx = "yUnit",
        Wx = "zUnit",
        Hx = "unit",
        Xx = "transform",
        jx = "translateX",
        zx = "translateY",
        Kx = "translateZ",
        Yx = "translate3d",
        $x = "scaleX",
        Qx = "scaleY",
        Zx = "scaleZ",
        Jx = "scale3d",
        eO = "rotateX",
        tO = "rotateY",
        rO = "rotateZ",
        nO = "skew",
        iO = "skewX",
        oO = "skewY",
        aO = "opacity",
        sO = "filter",
        uO = "font-variation-settings",
        cO = "width",
        lO = "height",
        fO = "backgroundColor",
        dO = "background",
        pO = "borderColor",
        hO = "color",
        vO = "display",
        gO = "flex",
        mO = "willChange",
        yO = "AUTO",
        EO = ",",
        bO = ":",
        _O = "|",
        IO = "CHILDREN",
        TO = "IMMEDIATE_CHILDREN",
        wO = "SIBLINGS",
        xO = "PARENT",
        OO = "preserve-3d",
        AO = "HTML_ELEMENT",
        SO = "PLAIN_OBJECT",
        CO = "ABSTRACT_NODE",
        RO = "RENDER_TRANSFORM",
        LO = "RENDER_GENERAL",
        NO = "RENDER_STYLE",
        PO = "RENDER_PLUGIN"
    }
    );
    var Nf = {};
    Ge(Nf, {
        ActionAppliesTo: ()=>nx,
        ActionTypeConsts: ()=>Ve,
        EventAppliesTo: ()=>zo,
        EventBasedOn: ()=>at,
        EventContinuousMouseAxes: ()=>ex,
        EventLimitAffectedElements: ()=>tx,
        EventTypeConsts: ()=>Ze,
        IX2EngineActionTypes: ()=>we,
        IX2EngineConstants: ()=>Le,
        InteractionTypeConsts: ()=>ix,
        QuickEffectDirectionConsts: ()=>rx,
        QuickEffectIds: ()=>An,
        ReducedMotionTypes: ()=>Yo
    });
    var Ue = me(()=>{
        "use strict";
        Ko();
        Sn();
        Sf();
        Cf();
        Rf();
        Lf();
        Sn();
        Ko()
    }
    );
    var qO, Pf, qf = me(()=>{
        "use strict";
        Ue();
        ({IX2_RAW_DATA_IMPORTED: qO} = we),
        Pf = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case qO:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var Yt = c(be=>{
        "use strict";
        Object.defineProperty(be, "__esModule", {
            value: !0
        });
        var FO = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        be.clone = Rn;
        be.addLast = Df;
        be.addFirst = kf;
        be.removeLast = Gf;
        be.removeFirst = Vf;
        be.insert = Uf;
        be.removeAt = Bf;
        be.replaceAt = Wf;
        be.getIn = Ln;
        be.set = Nn;
        be.setIn = Pn;
        be.update = Xf;
        be.updateIn = jf;
        be.merge = zf;
        be.mergeDeep = Kf;
        be.mergeIn = Yf;
        be.omit = $f;
        be.addDefaults = Qf;
        var Ff = "INVALID_ARGS";
        function Mf(e) {
            throw new Error(e)
        }
        function $o(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var MO = {}.hasOwnProperty;
        function Rn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = $o(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }
        function Be(e, t, r) {
            var n = r;
            n == null && Mf(Ff);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var _ = $o(l);
                    if (_.length)
                        for (var d = 0; d <= _.length; d++) {
                            var E = _[d];
                            if (!(e && n[E] !== void 0)) {
                                var m = l[E];
                                t && Cn(n[E]) && Cn(m) && (m = Be(e, t, n[E], m)),
                                !(m === void 0 || m === n[E]) && (i || (i = !0,
                                n = Rn(n)),
                                n[E] = m)
                            }
                        }
                }
            }
            return n
        }
        function Cn(e) {
            var t = typeof e > "u" ? "undefined" : FO(e);
            return e != null && (t === "object" || t === "function")
        }
        function Df(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function kf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Gf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Vf(e) {
            return e.length ? e.slice(1) : e
        }
        function Uf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Bf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Wf(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++)
                i[o] = e[o];
            return i[t] = r,
            i
        }
        function Ln(e, t) {
            if (!Array.isArray(t) && Mf(Ff),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Nn(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , i = e ?? n;
            if (i[t] === r)
                return i;
            var o = Rn(i);
            return o[t] = r,
            o
        }
        function Hf(e, t, r, n) {
            var i = void 0
              , o = t[n];
            if (n === t.length - 1)
                i = r;
            else {
                var a = Cn(e) && Cn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Hf(a, t, r, n + 1)
            }
            return Nn(e, o, i)
        }
        function Pn(e, t, r) {
            return t.length ? Hf(e, t, r, 0) : r
        }
        function Xf(e, t, r) {
            var n = e?.[t]
              , i = r(n);
            return Nn(e, t, i)
        }
        function jf(e, t, r) {
            var n = Ln(e, t)
              , i = r(n);
            return Pn(e, t, i)
        }
        function zf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Be.call.apply(Be, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Be(!1, !1, e, t, r, n, i, o)
        }
        function Kf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Be.call.apply(Be, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Be(!1, !0, e, t, r, n, i, o)
        }
        function Yf(e, t, r, n, i, o, a) {
            var s = Ln(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, _ = Array(l > 7 ? l - 7 : 0), d = 7; d < l; d++)
                _[d - 7] = arguments[d];
            return _.length ? u = Be.call.apply(Be, [null, !1, !1, s, r, n, i, o, a].concat(_)) : u = Be(!1, !1, s, r, n, i, o, a),
            Pn(e, t, u)
        }
        function $f(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (MO.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var o = {}, a = $o(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }
        function Qf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Be.call.apply(Be, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Be(!0, !1, e, t, r, n, i, o)
        }
        var DO = {
            clone: Rn,
            addLast: Df,
            addFirst: kf,
            removeLast: Gf,
            removeFirst: Vf,
            insert: Uf,
            removeAt: Bf,
            replaceAt: Wf,
            getIn: Ln,
            set: Nn,
            setIn: Pn,
            update: Xf,
            updateIn: jf,
            merge: zf,
            mergeDeep: Kf,
            mergeIn: Yf,
            omit: $f,
            addDefaults: Qf
        };
        be.default = DO
    }
    );
    var Jf, kO, GO, VO, UO, BO, Zf, ed, td = me(()=>{
        "use strict";
        Ue();
        Jf = fe(Yt()),
        {IX2_PREVIEW_REQUESTED: kO, IX2_PLAYBACK_REQUESTED: GO, IX2_STOP_REQUESTED: VO, IX2_CLEAR_REQUESTED: UO} = we,
        BO = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        Zf = Object.create(null, {
            [kO]: {
                value: "preview"
            },
            [GO]: {
                value: "playback"
            },
            [VO]: {
                value: "stop"
            },
            [UO]: {
                value: "clear"
            }
        }),
        ed = (e=BO,t)=>{
            if (t.type in Zf) {
                let r = [Zf[t.type]];
                return (0,
                Jf.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var Fe, WO, HO, XO, jO, zO, KO, YO, $O, QO, ZO, rd, JO, nd, id = me(()=>{
        "use strict";
        Ue();
        Fe = fe(Yt()),
        {IX2_SESSION_INITIALIZED: WO, IX2_SESSION_STARTED: HO, IX2_TEST_FRAME_RENDERED: XO, IX2_SESSION_STOPPED: jO, IX2_EVENT_LISTENER_ADDED: zO, IX2_EVENT_STATE_CHANGED: KO, IX2_ANIMATION_FRAME_CHANGED: YO, IX2_ACTION_LIST_PLAYBACK_CHANGED: $O, IX2_VIEWPORT_WIDTH_CHANGED: QO, IX2_MEDIA_QUERIES_DEFINED: ZO} = we,
        rd = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        JO = 20,
        nd = (e=rd,t)=>{
            switch (t.type) {
            case WO:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    Fe.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case HO:
                return (0,
                Fe.set)(e, "active", !0);
            case XO:
                {
                    let {payload: {step: r=JO}} = t;
                    return (0,
                    Fe.set)(e, "tick", e.tick + r)
                }
            case jO:
                return rd;
            case YO:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    Fe.set)(e, "tick", r)
                }
            case zO:
                {
                    let r = (0,
                    Fe.addLast)(e.eventListeners, t.payload);
                    return (0,
                    Fe.set)(e, "eventListeners", r)
                }
            case KO:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    Fe.setIn)(e, ["eventState", r], n)
                }
            case $O:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    Fe.setIn)(e, ["playbackState", r], n)
                }
            case QO:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , i = n.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: u, max: l} = n[a];
                        if (r >= u && r <= l) {
                            o = s;
                            break
                        }
                    }
                    return (0,
                    Fe.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
            case ZO:
                return (0,
                Fe.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var ad = c((hH,od)=>{
        function eA() {
            this.__data__ = [],
            this.size = 0
        }
        od.exports = eA
    }
    );
    var qn = c((vH,sd)=>{
        function tA(e, t) {
            return e === t || e !== e && t !== t
        }
        sd.exports = tA
    }
    );
    var Nr = c((gH,ud)=>{
        var rA = qn();
        function nA(e, t) {
            for (var r = e.length; r--; )
                if (rA(e[r][0], t))
                    return r;
            return -1
        }
        ud.exports = nA
    }
    );
    var ld = c((mH,cd)=>{
        var iA = Nr()
          , oA = Array.prototype
          , aA = oA.splice;
        function sA(e) {
            var t = this.__data__
              , r = iA(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : aA.call(t, r, 1),
            --this.size,
            !0
        }
        cd.exports = sA
    }
    );
    var dd = c((yH,fd)=>{
        var uA = Nr();
        function cA(e) {
            var t = this.__data__
              , r = uA(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        fd.exports = cA
    }
    );
    var hd = c((EH,pd)=>{
        var lA = Nr();
        function fA(e) {
            return lA(this.__data__, e) > -1
        }
        pd.exports = fA
    }
    );
    var gd = c((bH,vd)=>{
        var dA = Nr();
        function pA(e, t) {
            var r = this.__data__
              , n = dA(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        vd.exports = pA
    }
    );
    var Pr = c((_H,md)=>{
        var hA = ad()
          , vA = ld()
          , gA = dd()
          , mA = hd()
          , yA = gd();
        function $t(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = hA;
        $t.prototype.delete = vA;
        $t.prototype.get = gA;
        $t.prototype.has = mA;
        $t.prototype.set = yA;
        md.exports = $t
    }
    );
    var Ed = c((IH,yd)=>{
        var EA = Pr();
        function bA() {
            this.__data__ = new EA,
            this.size = 0
        }
        yd.exports = bA
    }
    );
    var _d = c((TH,bd)=>{
        function _A(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        bd.exports = _A
    }
    );
    var Td = c((wH,Id)=>{
        function IA(e) {
            return this.__data__.get(e)
        }
        Id.exports = IA
    }
    );
    var xd = c((xH,wd)=>{
        function TA(e) {
            return this.__data__.has(e)
        }
        wd.exports = TA
    }
    );
    var st = c((OH,Od)=>{
        function wA(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        Od.exports = wA
    }
    );
    var Qo = c((AH,Ad)=>{
        var xA = It()
          , OA = st()
          , AA = "[object AsyncFunction]"
          , SA = "[object Function]"
          , CA = "[object GeneratorFunction]"
          , RA = "[object Proxy]";
        function LA(e) {
            if (!OA(e))
                return !1;
            var t = xA(e);
            return t == SA || t == CA || t == AA || t == RA
        }
        Ad.exports = LA
    }
    );
    var Cd = c((SH,Sd)=>{
        var NA = Qe()
          , PA = NA["__core-js_shared__"];
        Sd.exports = PA
    }
    );
    var Nd = c((CH,Ld)=>{
        var Zo = Cd()
          , Rd = function() {
            var e = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function qA(e) {
            return !!Rd && Rd in e
        }
        Ld.exports = qA
    }
    );
    var Jo = c((RH,Pd)=>{
        var FA = Function.prototype
          , MA = FA.toString;
        function DA(e) {
            if (e != null) {
                try {
                    return MA.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Pd.exports = DA
    }
    );
    var Fd = c((LH,qd)=>{
        var kA = Qo()
          , GA = Nd()
          , VA = st()
          , UA = Jo()
          , BA = /[\\^$.*+?()[\]{}|]/g
          , WA = /^\[object .+?Constructor\]$/
          , HA = Function.prototype
          , XA = Object.prototype
          , jA = HA.toString
          , zA = XA.hasOwnProperty
          , KA = RegExp("^" + jA.call(zA).replace(BA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function YA(e) {
            if (!VA(e) || GA(e))
                return !1;
            var t = kA(e) ? KA : WA;
            return t.test(UA(e))
        }
        qd.exports = YA
    }
    );
    var Dd = c((NH,Md)=>{
        function $A(e, t) {
            return e?.[t]
        }
        Md.exports = $A
    }
    );
    var Tt = c((PH,kd)=>{
        var QA = Fd()
          , ZA = Dd();
        function JA(e, t) {
            var r = ZA(e, t);
            return QA(r) ? r : void 0
        }
        kd.exports = JA
    }
    );
    var Fn = c((qH,Gd)=>{
        var eS = Tt()
          , tS = Qe()
          , rS = eS(tS, "Map");
        Gd.exports = rS
    }
    );
    var qr = c((FH,Vd)=>{
        var nS = Tt()
          , iS = nS(Object, "create");
        Vd.exports = iS
    }
    );
    var Wd = c((MH,Bd)=>{
        var Ud = qr();
        function oS() {
            this.__data__ = Ud ? Ud(null) : {},
            this.size = 0
        }
        Bd.exports = oS
    }
    );
    var Xd = c((DH,Hd)=>{
        function aS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Hd.exports = aS
    }
    );
    var zd = c((kH,jd)=>{
        var sS = qr()
          , uS = "__lodash_hash_undefined__"
          , cS = Object.prototype
          , lS = cS.hasOwnProperty;
        function fS(e) {
            var t = this.__data__;
            if (sS) {
                var r = t[e];
                return r === uS ? void 0 : r
            }
            return lS.call(t, e) ? t[e] : void 0
        }
        jd.exports = fS
    }
    );
    var Yd = c((GH,Kd)=>{
        var dS = qr()
          , pS = Object.prototype
          , hS = pS.hasOwnProperty;
        function vS(e) {
            var t = this.__data__;
            return dS ? t[e] !== void 0 : hS.call(t, e)
        }
        Kd.exports = vS
    }
    );
    var Qd = c((VH,$d)=>{
        var gS = qr()
          , mS = "__lodash_hash_undefined__";
        function yS(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = gS && t === void 0 ? mS : t,
            this
        }
        $d.exports = yS
    }
    );
    var Jd = c((UH,Zd)=>{
        var ES = Wd()
          , bS = Xd()
          , _S = zd()
          , IS = Yd()
          , TS = Qd();
        function Qt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = ES;
        Qt.prototype.delete = bS;
        Qt.prototype.get = _S;
        Qt.prototype.has = IS;
        Qt.prototype.set = TS;
        Zd.exports = Qt
    }
    );
    var rp = c((BH,tp)=>{
        var ep = Jd()
          , wS = Pr()
          , xS = Fn();
        function OS() {
            this.size = 0,
            this.__data__ = {
                hash: new ep,
                map: new (xS || wS),
                string: new ep
            }
        }
        tp.exports = OS
    }
    );
    var ip = c((WH,np)=>{
        function AS(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        np.exports = AS
    }
    );
    var Fr = c((HH,op)=>{
        var SS = ip();
        function CS(e, t) {
            var r = e.__data__;
            return SS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        op.exports = CS
    }
    );
    var sp = c((XH,ap)=>{
        var RS = Fr();
        function LS(e) {
            var t = RS(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        ap.exports = LS
    }
    );
    var cp = c((jH,up)=>{
        var NS = Fr();
        function PS(e) {
            return NS(this, e).get(e)
        }
        up.exports = PS
    }
    );
    var fp = c((zH,lp)=>{
        var qS = Fr();
        function FS(e) {
            return qS(this, e).has(e)
        }
        lp.exports = FS
    }
    );
    var pp = c((KH,dp)=>{
        var MS = Fr();
        function DS(e, t) {
            var r = MS(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        dp.exports = DS
    }
    );
    var Mn = c((YH,hp)=>{
        var kS = rp()
          , GS = sp()
          , VS = cp()
          , US = fp()
          , BS = pp();
        function Zt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = kS;
        Zt.prototype.delete = GS;
        Zt.prototype.get = VS;
        Zt.prototype.has = US;
        Zt.prototype.set = BS;
        hp.exports = Zt
    }
    );
    var gp = c(($H,vp)=>{
        var WS = Pr()
          , HS = Fn()
          , XS = Mn()
          , jS = 200;
        function zS(e, t) {
            var r = this.__data__;
            if (r instanceof WS) {
                var n = r.__data__;
                if (!HS || n.length < jS - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new XS(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        vp.exports = zS
    }
    );
    var ea = c((QH,mp)=>{
        var KS = Pr()
          , YS = Ed()
          , $S = _d()
          , QS = Td()
          , ZS = xd()
          , JS = gp();
        function Jt(e) {
            var t = this.__data__ = new KS(e);
            this.size = t.size
        }
        Jt.prototype.clear = YS;
        Jt.prototype.delete = $S;
        Jt.prototype.get = QS;
        Jt.prototype.has = ZS;
        Jt.prototype.set = JS;
        mp.exports = Jt
    }
    );
    var Ep = c((ZH,yp)=>{
        var eC = "__lodash_hash_undefined__";
        function tC(e) {
            return this.__data__.set(e, eC),
            this
        }
        yp.exports = tC
    }
    );
    var _p = c((JH,bp)=>{
        function rC(e) {
            return this.__data__.has(e)
        }
        bp.exports = rC
    }
    );
    var Tp = c((e5,Ip)=>{
        var nC = Mn()
          , iC = Ep()
          , oC = _p();
        function Dn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new nC; ++t < r; )
                this.add(e[t])
        }
        Dn.prototype.add = Dn.prototype.push = iC;
        Dn.prototype.has = oC;
        Ip.exports = Dn
    }
    );
    var xp = c((t5,wp)=>{
        function aC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        wp.exports = aC
    }
    );
    var Ap = c((r5,Op)=>{
        function sC(e, t) {
            return e.has(t)
        }
        Op.exports = sC
    }
    );
    var ta = c((n5,Sp)=>{
        var uC = Tp()
          , cC = xp()
          , lC = Ap()
          , fC = 1
          , dC = 2;
        function pC(e, t, r, n, i, o) {
            var a = r & fC
              , s = e.length
              , u = t.length;
            if (s != u && !(a && u > s))
                return !1;
            var l = o.get(e)
              , _ = o.get(t);
            if (l && _)
                return l == t && _ == e;
            var d = -1
              , E = !0
              , m = r & dC ? new uC : void 0;
            for (o.set(e, t),
            o.set(t, e); ++d < s; ) {
                var y = e[d]
                  , T = t[d];
                if (n)
                    var O = a ? n(T, y, d, t, e, o) : n(y, T, d, e, t, o);
                if (O !== void 0) {
                    if (O)
                        continue;
                    E = !1;
                    break
                }
                if (m) {
                    if (!cC(t, function(x, P) {
                        if (!lC(m, P) && (y === x || i(y, x, r, n, o)))
                            return m.push(P)
                    })) {
                        E = !1;
                        break
                    }
                } else if (!(y === T || i(y, T, r, n, o))) {
                    E = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            E
        }
        Sp.exports = pC
    }
    );
    var Rp = c((i5,Cp)=>{
        var hC = Qe()
          , vC = hC.Uint8Array;
        Cp.exports = vC
    }
    );
    var Np = c((o5,Lp)=>{
        function gC(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }),
            r
        }
        Lp.exports = gC
    }
    );
    var qp = c((a5,Pp)=>{
        function mC(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        Pp.exports = mC
    }
    );
    var Gp = c((s5,kp)=>{
        var Fp = jt()
          , Mp = Rp()
          , yC = qn()
          , EC = ta()
          , bC = Np()
          , _C = qp()
          , IC = 1
          , TC = 2
          , wC = "[object Boolean]"
          , xC = "[object Date]"
          , OC = "[object Error]"
          , AC = "[object Map]"
          , SC = "[object Number]"
          , CC = "[object RegExp]"
          , RC = "[object Set]"
          , LC = "[object String]"
          , NC = "[object Symbol]"
          , PC = "[object ArrayBuffer]"
          , qC = "[object DataView]"
          , Dp = Fp ? Fp.prototype : void 0
          , ra = Dp ? Dp.valueOf : void 0;
        function FC(e, t, r, n, i, o, a) {
            switch (r) {
            case qC:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case PC:
                return !(e.byteLength != t.byteLength || !o(new Mp(e), new Mp(t)));
            case wC:
            case xC:
            case SC:
                return yC(+e, +t);
            case OC:
                return e.name == t.name && e.message == t.message;
            case CC:
            case LC:
                return e == t + "";
            case AC:
                var s = bC;
            case RC:
                var u = n & IC;
                if (s || (s = _C),
                e.size != t.size && !u)
                    return !1;
                var l = a.get(e);
                if (l)
                    return l == t;
                n |= TC,
                a.set(e, t);
                var _ = EC(s(e), s(t), n, i, o, a);
                return a.delete(e),
                _;
            case NC:
                if (ra)
                    return ra.call(e) == ra.call(t)
            }
            return !1
        }
        kp.exports = FC
    }
    );
    var kn = c((u5,Vp)=>{
        function MC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
                e[i + r] = t[r];
            return e
        }
        Vp.exports = MC
    }
    );
    var xe = c((c5,Up)=>{
        var DC = Array.isArray;
        Up.exports = DC
    }
    );
    var na = c((l5,Bp)=>{
        var kC = kn()
          , GC = xe();
        function VC(e, t, r) {
            var n = t(e);
            return GC(e) ? n : kC(n, r(e))
        }
        Bp.exports = VC
    }
    );
    var Hp = c((f5,Wp)=>{
        function UC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Wp.exports = UC
    }
    );
    var ia = c((d5,Xp)=>{
        function BC() {
            return []
        }
        Xp.exports = BC
    }
    );
    var oa = c((p5,zp)=>{
        var WC = Hp()
          , HC = ia()
          , XC = Object.prototype
          , jC = XC.propertyIsEnumerable
          , jp = Object.getOwnPropertySymbols
          , zC = jp ? function(e) {
            return e == null ? [] : (e = Object(e),
            WC(jp(e), function(t) {
                return jC.call(e, t)
            }))
        }
        : HC;
        zp.exports = zC
    }
    );
    var Yp = c((h5,Kp)=>{
        function KC(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Kp.exports = KC
    }
    );
    var Qp = c((v5,$p)=>{
        var YC = It()
          , $C = pt()
          , QC = "[object Arguments]";
        function ZC(e) {
            return $C(e) && YC(e) == QC
        }
        $p.exports = ZC
    }
    );
    var Mr = c((g5,eh)=>{
        var Zp = Qp()
          , JC = pt()
          , Jp = Object.prototype
          , eR = Jp.hasOwnProperty
          , tR = Jp.propertyIsEnumerable
          , rR = Zp(function() {
            return arguments
        }()) ? Zp : function(e) {
            return JC(e) && eR.call(e, "callee") && !tR.call(e, "callee")
        }
        ;
        eh.exports = rR
    }
    );
    var rh = c((m5,th)=>{
        function nR() {
            return !1
        }
        th.exports = nR
    }
    );
    var Gn = c((Dr,er)=>{
        var iR = Qe()
          , oR = rh()
          , oh = typeof Dr == "object" && Dr && !Dr.nodeType && Dr
          , nh = oh && typeof er == "object" && er && !er.nodeType && er
          , aR = nh && nh.exports === oh
          , ih = aR ? iR.Buffer : void 0
          , sR = ih ? ih.isBuffer : void 0
          , uR = sR || oR;
        er.exports = uR
    }
    );
    var Vn = c((y5,ah)=>{
        var cR = 9007199254740991
          , lR = /^(?:0|[1-9]\d*)$/;
        function fR(e, t) {
            var r = typeof e;
            return t = t ?? cR,
            !!t && (r == "number" || r != "symbol" && lR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        ah.exports = fR
    }
    );
    var Un = c((E5,sh)=>{
        var dR = 9007199254740991;
        function pR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= dR
        }
        sh.exports = pR
    }
    );
    var ch = c((b5,uh)=>{
        var hR = It()
          , vR = Un()
          , gR = pt()
          , mR = "[object Arguments]"
          , yR = "[object Array]"
          , ER = "[object Boolean]"
          , bR = "[object Date]"
          , _R = "[object Error]"
          , IR = "[object Function]"
          , TR = "[object Map]"
          , wR = "[object Number]"
          , xR = "[object Object]"
          , OR = "[object RegExp]"
          , AR = "[object Set]"
          , SR = "[object String]"
          , CR = "[object WeakMap]"
          , RR = "[object ArrayBuffer]"
          , LR = "[object DataView]"
          , NR = "[object Float32Array]"
          , PR = "[object Float64Array]"
          , qR = "[object Int8Array]"
          , FR = "[object Int16Array]"
          , MR = "[object Int32Array]"
          , DR = "[object Uint8Array]"
          , kR = "[object Uint8ClampedArray]"
          , GR = "[object Uint16Array]"
          , VR = "[object Uint32Array]"
          , ge = {};
        ge[NR] = ge[PR] = ge[qR] = ge[FR] = ge[MR] = ge[DR] = ge[kR] = ge[GR] = ge[VR] = !0;
        ge[mR] = ge[yR] = ge[RR] = ge[ER] = ge[LR] = ge[bR] = ge[_R] = ge[IR] = ge[TR] = ge[wR] = ge[xR] = ge[OR] = ge[AR] = ge[SR] = ge[CR] = !1;
        function UR(e) {
            return gR(e) && vR(e.length) && !!ge[hR(e)]
        }
        uh.exports = UR
    }
    );
    var fh = c((_5,lh)=>{
        function BR(e) {
            return function(t) {
                return e(t)
            }
        }
        lh.exports = BR
    }
    );
    var ph = c((kr,tr)=>{
        var WR = Lo()
          , dh = typeof kr == "object" && kr && !kr.nodeType && kr
          , Gr = dh && typeof tr == "object" && tr && !tr.nodeType && tr
          , HR = Gr && Gr.exports === dh
          , aa = HR && WR.process
          , XR = function() {
            try {
                var e = Gr && Gr.require && Gr.require("util").types;
                return e || aa && aa.binding && aa.binding("util")
            } catch {}
        }();
        tr.exports = XR
    }
    );
    var Bn = c((I5,gh)=>{
        var jR = ch()
          , zR = fh()
          , hh = ph()
          , vh = hh && hh.isTypedArray
          , KR = vh ? zR(vh) : jR;
        gh.exports = KR
    }
    );
    var sa = c((T5,mh)=>{
        var YR = Yp()
          , $R = Mr()
          , QR = xe()
          , ZR = Gn()
          , JR = Vn()
          , eL = Bn()
          , tL = Object.prototype
          , rL = tL.hasOwnProperty;
        function nL(e, t) {
            var r = QR(e)
              , n = !r && $R(e)
              , i = !r && !n && ZR(e)
              , o = !r && !n && !i && eL(e)
              , a = r || n || i || o
              , s = a ? YR(e.length, String) : []
              , u = s.length;
            for (var l in e)
                (t || rL.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || JR(l, u))) && s.push(l);
            return s
        }
        mh.exports = nL
    }
    );
    var Wn = c((w5,yh)=>{
        var iL = Object.prototype;
        function oL(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || iL;
            return e === r
        }
        yh.exports = oL
    }
    );
    var bh = c((x5,Eh)=>{
        var aL = No()
          , sL = aL(Object.keys, Object);
        Eh.exports = sL
    }
    );
    var Hn = c((O5,_h)=>{
        var uL = Wn()
          , cL = bh()
          , lL = Object.prototype
          , fL = lL.hasOwnProperty;
        function dL(e) {
            if (!uL(e))
                return cL(e);
            var t = [];
            for (var r in Object(e))
                fL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        _h.exports = dL
    }
    );
    var qt = c((A5,Ih)=>{
        var pL = Qo()
          , hL = Un();
        function vL(e) {
            return e != null && hL(e.length) && !pL(e)
        }
        Ih.exports = vL
    }
    );
    var Vr = c((S5,Th)=>{
        var gL = sa()
          , mL = Hn()
          , yL = qt();
        function EL(e) {
            return yL(e) ? gL(e) : mL(e)
        }
        Th.exports = EL
    }
    );
    var xh = c((C5,wh)=>{
        var bL = na()
          , _L = oa()
          , IL = Vr();
        function TL(e) {
            return bL(e, IL, _L)
        }
        wh.exports = TL
    }
    );
    var Sh = c((R5,Ah)=>{
        var Oh = xh()
          , wL = 1
          , xL = Object.prototype
          , OL = xL.hasOwnProperty;
        function AL(e, t, r, n, i, o) {
            var a = r & wL
              , s = Oh(e)
              , u = s.length
              , l = Oh(t)
              , _ = l.length;
            if (u != _ && !a)
                return !1;
            for (var d = u; d--; ) {
                var E = s[d];
                if (!(a ? E in t : OL.call(t, E)))
                    return !1
            }
            var m = o.get(e)
              , y = o.get(t);
            if (m && y)
                return m == t && y == e;
            var T = !0;
            o.set(e, t),
            o.set(t, e);
            for (var O = a; ++d < u; ) {
                E = s[d];
                var x = e[E]
                  , P = t[E];
                if (n)
                    var C = a ? n(P, x, E, t, e, o) : n(x, P, E, e, t, o);
                if (!(C === void 0 ? x === P || i(x, P, r, n, o) : C)) {
                    T = !1;
                    break
                }
                O || (O = E == "constructor")
            }
            if (T && !O) {
                var M = e.constructor
                  , D = t.constructor;
                M != D && "constructor"in e && "constructor"in t && !(typeof M == "function" && M instanceof M && typeof D == "function" && D instanceof D) && (T = !1)
            }
            return o.delete(e),
            o.delete(t),
            T
        }
        Ah.exports = AL
    }
    );
    var Rh = c((L5,Ch)=>{
        var SL = Tt()
          , CL = Qe()
          , RL = SL(CL, "DataView");
        Ch.exports = RL
    }
    );
    var Nh = c((N5,Lh)=>{
        var LL = Tt()
          , NL = Qe()
          , PL = LL(NL, "Promise");
        Lh.exports = PL
    }
    );
    var qh = c((P5,Ph)=>{
        var qL = Tt()
          , FL = Qe()
          , ML = qL(FL, "Set");
        Ph.exports = ML
    }
    );
    var ua = c((q5,Fh)=>{
        var DL = Tt()
          , kL = Qe()
          , GL = DL(kL, "WeakMap");
        Fh.exports = GL
    }
    );
    var Xn = c((F5,Bh)=>{
        var ca = Rh()
          , la = Fn()
          , fa = Nh()
          , da = qh()
          , pa = ua()
          , Uh = It()
          , rr = Jo()
          , Mh = "[object Map]"
          , VL = "[object Object]"
          , Dh = "[object Promise]"
          , kh = "[object Set]"
          , Gh = "[object WeakMap]"
          , Vh = "[object DataView]"
          , UL = rr(ca)
          , BL = rr(la)
          , WL = rr(fa)
          , HL = rr(da)
          , XL = rr(pa)
          , Ft = Uh;
        (ca && Ft(new ca(new ArrayBuffer(1))) != Vh || la && Ft(new la) != Mh || fa && Ft(fa.resolve()) != Dh || da && Ft(new da) != kh || pa && Ft(new pa) != Gh) && (Ft = function(e) {
            var t = Uh(e)
              , r = t == VL ? e.constructor : void 0
              , n = r ? rr(r) : "";
            if (n)
                switch (n) {
                case UL:
                    return Vh;
                case BL:
                    return Mh;
                case WL:
                    return Dh;
                case HL:
                    return kh;
                case XL:
                    return Gh
                }
            return t
        }
        );
        Bh.exports = Ft
    }
    );
    var $h = c((M5,Yh)=>{
        var ha = ea()
          , jL = ta()
          , zL = Gp()
          , KL = Sh()
          , Wh = Xn()
          , Hh = xe()
          , Xh = Gn()
          , YL = Bn()
          , $L = 1
          , jh = "[object Arguments]"
          , zh = "[object Array]"
          , jn = "[object Object]"
          , QL = Object.prototype
          , Kh = QL.hasOwnProperty;
        function ZL(e, t, r, n, i, o) {
            var a = Hh(e)
              , s = Hh(t)
              , u = a ? zh : Wh(e)
              , l = s ? zh : Wh(t);
            u = u == jh ? jn : u,
            l = l == jh ? jn : l;
            var _ = u == jn
              , d = l == jn
              , E = u == l;
            if (E && Xh(e)) {
                if (!Xh(t))
                    return !1;
                a = !0,
                _ = !1
            }
            if (E && !_)
                return o || (o = new ha),
                a || YL(e) ? jL(e, t, r, n, i, o) : zL(e, t, u, r, n, i, o);
            if (!(r & $L)) {
                var m = _ && Kh.call(e, "__wrapped__")
                  , y = d && Kh.call(t, "__wrapped__");
                if (m || y) {
                    var T = m ? e.value() : e
                      , O = y ? t.value() : t;
                    return o || (o = new ha),
                    i(T, O, r, n, o)
                }
            }
            return E ? (o || (o = new ha),
            KL(e, t, r, n, i, o)) : !1
        }
        Yh.exports = ZL
    }
    );
    var va = c((D5,Jh)=>{
        var JL = $h()
          , Qh = pt();
        function Zh(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Qh(e) && !Qh(t) ? e !== e && t !== t : JL(e, t, r, n, Zh, i)
        }
        Jh.exports = Zh
    }
    );
    var tv = c((k5,ev)=>{
        var eN = ea()
          , tN = va()
          , rN = 1
          , nN = 2;
        function iN(e, t, r, n) {
            var i = r.length
              , o = i
              , a = !n;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                s = r[i];
                var u = s[0]
                  , l = e[u]
                  , _ = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e))
                        return !1
                } else {
                    var d = new eN;
                    if (n)
                        var E = n(l, _, u, e, t, d);
                    if (!(E === void 0 ? tN(_, l, rN | nN, n, d) : E))
                        return !1
                }
            }
            return !0
        }
        ev.exports = iN
    }
    );
    var ga = c((G5,rv)=>{
        var oN = st();
        function aN(e) {
            return e === e && !oN(e)
        }
        rv.exports = aN
    }
    );
    var iv = c((V5,nv)=>{
        var sN = ga()
          , uN = Vr();
        function cN(e) {
            for (var t = uN(e), r = t.length; r--; ) {
                var n = t[r]
                  , i = e[n];
                t[r] = [n, i, sN(i)]
            }
            return t
        }
        nv.exports = cN
    }
    );
    var ma = c((U5,ov)=>{
        function lN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        ov.exports = lN
    }
    );
    var sv = c((B5,av)=>{
        var fN = tv()
          , dN = iv()
          , pN = ma();
        function hN(e) {
            var t = dN(e);
            return t.length == 1 && t[0][2] ? pN(t[0][0], t[0][1]) : function(r) {
                return r === e || fN(r, e, t)
            }
        }
        av.exports = hN
    }
    );
    var Ur = c((W5,uv)=>{
        var vN = It()
          , gN = pt()
          , mN = "[object Symbol]";
        function yN(e) {
            return typeof e == "symbol" || gN(e) && vN(e) == mN
        }
        uv.exports = yN
    }
    );
    var zn = c((H5,cv)=>{
        var EN = xe()
          , bN = Ur()
          , _N = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , IN = /^\w*$/;
        function TN(e, t) {
            if (EN(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || bN(e) ? !0 : IN.test(e) || !_N.test(e) || t != null && e in Object(t)
        }
        cv.exports = TN
    }
    );
    var dv = c((X5,fv)=>{
        var lv = Mn()
          , wN = "Expected a function";
        function ya(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(wN);
            var r = function() {
                var n = arguments
                  , i = t ? t.apply(this, n) : n[0]
                  , o = r.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o,
                a
            };
            return r.cache = new (ya.Cache || lv),
            r
        }
        ya.Cache = lv;
        fv.exports = ya
    }
    );
    var hv = c((j5,pv)=>{
        var xN = dv()
          , ON = 500;
        function AN(e) {
            var t = xN(e, function(n) {
                return r.size === ON && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        pv.exports = AN
    }
    );
    var gv = c((z5,vv)=>{
        var SN = hv()
          , CN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , RN = /\\(\\)?/g
          , LN = SN(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(CN, function(r, n, i, o) {
                t.push(i ? o.replace(RN, "$1") : n || r)
            }),
            t
        });
        vv.exports = LN
    }
    );
    var Ea = c((K5,mv)=>{
        function NN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
                i[r] = t(e[r], r, e);
            return i
        }
        mv.exports = NN
    }
    );
    var Tv = c((Y5,Iv)=>{
        var yv = jt()
          , PN = Ea()
          , qN = xe()
          , FN = Ur()
          , MN = 1 / 0
          , Ev = yv ? yv.prototype : void 0
          , bv = Ev ? Ev.toString : void 0;
        function _v(e) {
            if (typeof e == "string")
                return e;
            if (qN(e))
                return PN(e, _v) + "";
            if (FN(e))
                return bv ? bv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -MN ? "-0" : t
        }
        Iv.exports = _v
    }
    );
    var xv = c(($5,wv)=>{
        var DN = Tv();
        function kN(e) {
            return e == null ? "" : DN(e)
        }
        wv.exports = kN
    }
    );
    var Br = c((Q5,Ov)=>{
        var GN = xe()
          , VN = zn()
          , UN = gv()
          , BN = xv();
        function WN(e, t) {
            return GN(e) ? e : VN(e, t) ? [e] : UN(BN(e))
        }
        Ov.exports = WN
    }
    );
    var nr = c((Z5,Av)=>{
        var HN = Ur()
          , XN = 1 / 0;
        function jN(e) {
            if (typeof e == "string" || HN(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -XN ? "-0" : t
        }
        Av.exports = jN
    }
    );
    var Kn = c((J5,Sv)=>{
        var zN = Br()
          , KN = nr();
        function YN(e, t) {
            t = zN(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[KN(t[r++])];
            return r && r == n ? e : void 0
        }
        Sv.exports = YN
    }
    );
    var Yn = c((eX,Cv)=>{
        var $N = Kn();
        function QN(e, t, r) {
            var n = e == null ? void 0 : $N(e, t);
            return n === void 0 ? r : n
        }
        Cv.exports = QN
    }
    );
    var Lv = c((tX,Rv)=>{
        function ZN(e, t) {
            return e != null && t in Object(e)
        }
        Rv.exports = ZN
    }
    );
    var Pv = c((rX,Nv)=>{
        var JN = Br()
          , eP = Mr()
          , tP = xe()
          , rP = Vn()
          , nP = Un()
          , iP = nr();
        function oP(e, t, r) {
            t = JN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i; ) {
                var a = iP(t[n]);
                if (!(o = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length,
            !!i && nP(i) && rP(a, i) && (tP(e) || eP(e)))
        }
        Nv.exports = oP
    }
    );
    var Fv = c((nX,qv)=>{
        var aP = Lv()
          , sP = Pv();
        function uP(e, t) {
            return e != null && sP(e, t, aP)
        }
        qv.exports = uP
    }
    );
    var Dv = c((iX,Mv)=>{
        var cP = va()
          , lP = Yn()
          , fP = Fv()
          , dP = zn()
          , pP = ga()
          , hP = ma()
          , vP = nr()
          , gP = 1
          , mP = 2;
        function yP(e, t) {
            return dP(e) && pP(t) ? hP(vP(e), t) : function(r) {
                var n = lP(r, e);
                return n === void 0 && n === t ? fP(r, e) : cP(t, n, gP | mP)
            }
        }
        Mv.exports = yP
    }
    );
    var $n = c((oX,kv)=>{
        function EP(e) {
            return e
        }
        kv.exports = EP
    }
    );
    var ba = c((aX,Gv)=>{
        function bP(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Gv.exports = bP
    }
    );
    var Uv = c((sX,Vv)=>{
        var _P = Kn();
        function IP(e) {
            return function(t) {
                return _P(t, e)
            }
        }
        Vv.exports = IP
    }
    );
    var Wv = c((uX,Bv)=>{
        var TP = ba()
          , wP = Uv()
          , xP = zn()
          , OP = nr();
        function AP(e) {
            return xP(e) ? TP(OP(e)) : wP(e)
        }
        Bv.exports = AP
    }
    );
    var wt = c((cX,Hv)=>{
        var SP = sv()
          , CP = Dv()
          , RP = $n()
          , LP = xe()
          , NP = Wv();
        function PP(e) {
            return typeof e == "function" ? e : e == null ? RP : typeof e == "object" ? LP(e) ? CP(e[0], e[1]) : SP(e) : NP(e)
        }
        Hv.exports = PP
    }
    );
    var _a = c((lX,Xv)=>{
        var qP = wt()
          , FP = qt()
          , MP = Vr();
        function DP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!FP(t)) {
                    var o = qP(r, 3);
                    t = MP(t),
                    r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Xv.exports = DP
    }
    );
    var Ia = c((fX,jv)=>{
        function kP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        jv.exports = kP
    }
    );
    var Kv = c((dX,zv)=>{
        var GP = /\s/;
        function VP(e) {
            for (var t = e.length; t-- && GP.test(e.charAt(t)); )
                ;
            return t
        }
        zv.exports = VP
    }
    );
    var $v = c((pX,Yv)=>{
        var UP = Kv()
          , BP = /^\s+/;
        function WP(e) {
            return e && e.slice(0, UP(e) + 1).replace(BP, "")
        }
        Yv.exports = WP
    }
    );
    var Qn = c((hX,Jv)=>{
        var HP = $v()
          , Qv = st()
          , XP = Ur()
          , Zv = 0 / 0
          , jP = /^[-+]0x[0-9a-f]+$/i
          , zP = /^0b[01]+$/i
          , KP = /^0o[0-7]+$/i
          , YP = parseInt;
        function $P(e) {
            if (typeof e == "number")
                return e;
            if (XP(e))
                return Zv;
            if (Qv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Qv(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = HP(e);
            var r = zP.test(e);
            return r || KP.test(e) ? YP(e.slice(2), r ? 2 : 8) : jP.test(e) ? Zv : +e
        }
        Jv.exports = $P
    }
    );
    var rg = c((vX,tg)=>{
        var QP = Qn()
          , eg = 1 / 0
          , ZP = 17976931348623157e292;
        function JP(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = QP(e),
            e === eg || e === -eg) {
                var t = e < 0 ? -1 : 1;
                return t * ZP
            }
            return e === e ? e : 0
        }
        tg.exports = JP
    }
    );
    var Ta = c((gX,ng)=>{
        var eq = rg();
        function tq(e) {
            var t = eq(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        ng.exports = tq
    }
    );
    var og = c((mX,ig)=>{
        var rq = Ia()
          , nq = wt()
          , iq = Ta()
          , oq = Math.max;
        function aq(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = r == null ? 0 : iq(r);
            return i < 0 && (i = oq(n + i, 0)),
            rq(e, nq(t, 3), i)
        }
        ig.exports = aq
    }
    );
    var wa = c((yX,ag)=>{
        var sq = _a()
          , uq = og()
          , cq = sq(uq);
        ag.exports = cq
    }
    );
    var cg = {};
    Ge(cg, {
        ELEMENT_MATCHES: ()=>lq,
        FLEX_PREFIXED: ()=>xa,
        IS_BROWSER_ENV: ()=>Je,
        TRANSFORM_PREFIXED: ()=>xt,
        TRANSFORM_STYLE_PREFIXED: ()=>Jn,
        withBrowser: ()=>Zn
    });
    var ug, Je, Zn, lq, xa, xt, sg, Jn, ei = me(()=>{
        "use strict";
        ug = fe(wa()),
        Je = typeof window < "u",
        Zn = (e,t)=>Je ? e() : t,
        lq = Zn(()=>(0,
        ug.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e=>e in Element.prototype)),
        xa = Zn(()=>{
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return r
            } catch {
                return r
            }
        }
        , "flex"),
        xt = Zn(()=>{
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        sg = xt.split("transform")[0],
        Jn = sg ? sg + "TransformStyle" : "transformStyle"
    }
    );
    var Oa = c((EX,hg)=>{
        var fq = 4
          , dq = .001
          , pq = 1e-7
          , hq = 10
          , Wr = 11
          , ti = 1 / (Wr - 1)
          , vq = typeof Float32Array == "function";
        function lg(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function fg(e, t) {
            return 3 * t - 6 * e
        }
        function dg(e) {
            return 3 * e
        }
        function ri(e, t, r) {
            return ((lg(t, r) * e + fg(t, r)) * e + dg(t)) * e
        }
        function pg(e, t, r) {
            return 3 * lg(t, r) * e * e + 2 * fg(t, r) * e + dg(t)
        }
        function gq(e, t, r, n, i) {
            var o, a, s = 0;
            do
                a = t + (r - t) / 2,
                o = ri(a, n, i) - e,
                o > 0 ? r = a : t = a;
            while (Math.abs(o) > pq && ++s < hq);
            return a
        }
        function mq(e, t, r, n) {
            for (var i = 0; i < fq; ++i) {
                var o = pg(t, r, n);
                if (o === 0)
                    return t;
                var a = ri(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        hg.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = vq ? new Float32Array(Wr) : new Array(Wr);
            if (t !== r || n !== i)
                for (var a = 0; a < Wr; ++a)
                    o[a] = ri(a * ti, t, n);
            function s(u) {
                for (var l = 0, _ = 1, d = Wr - 1; _ !== d && o[_] <= u; ++_)
                    l += ti;
                --_;
                var E = (u - o[_]) / (o[_ + 1] - o[_])
                  , m = l + E * ti
                  , y = pg(m, t, n);
                return y >= dq ? mq(u, m, t, n) : y === 0 ? m : gq(u, l, l + ti, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : ri(s(l), r, i)
            }
        }
    }
    );
    var Xr = {};
    Ge(Xr, {
        bounce: ()=>Jq,
        bouncePast: ()=>eF,
        ease: ()=>yq,
        easeIn: ()=>Eq,
        easeInOut: ()=>_q,
        easeOut: ()=>bq,
        inBack: ()=>Hq,
        inCirc: ()=>Vq,
        inCubic: ()=>xq,
        inElastic: ()=>zq,
        inExpo: ()=>Dq,
        inOutBack: ()=>jq,
        inOutCirc: ()=>Bq,
        inOutCubic: ()=>Aq,
        inOutElastic: ()=>Yq,
        inOutExpo: ()=>Gq,
        inOutQuad: ()=>wq,
        inOutQuart: ()=>Rq,
        inOutQuint: ()=>Pq,
        inOutSine: ()=>Mq,
        inQuad: ()=>Iq,
        inQuart: ()=>Sq,
        inQuint: ()=>Lq,
        inSine: ()=>qq,
        outBack: ()=>Xq,
        outBounce: ()=>Wq,
        outCirc: ()=>Uq,
        outCubic: ()=>Oq,
        outElastic: ()=>Kq,
        outExpo: ()=>kq,
        outQuad: ()=>Tq,
        outQuart: ()=>Cq,
        outQuint: ()=>Nq,
        outSine: ()=>Fq,
        swingFrom: ()=>Qq,
        swingFromTo: ()=>$q,
        swingTo: ()=>Zq
    });
    function Iq(e) {
        return Math.pow(e, 2)
    }
    function Tq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function wq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function xq(e) {
        return Math.pow(e, 3)
    }
    function Oq(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function Aq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function Sq(e) {
        return Math.pow(e, 4)
    }
    function Cq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function Rq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function Lq(e) {
        return Math.pow(e, 5)
    }
    function Nq(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function Pq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function qq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function Fq(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function Mq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function Dq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function kq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function Gq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function Vq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function Uq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function Bq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function Wq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function Hq(e) {
        let t = ht;
        return e * e * ((t + 1) * e - t)
    }
    function Xq(e) {
        let t = ht;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function jq(e) {
        let t = ht;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function zq(e) {
        let t = ht
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }
    function Kq(e) {
        let t = ht
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }
    function Yq(e) {
        let t = ht
          , r = 0
          , n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }
    function $q(e) {
        let t = ht;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function Qq(e) {
        let t = ht;
        return e * e * ((t + 1) * e - t)
    }
    function Zq(e) {
        let t = ht;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function Jq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function eF(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Hr, ht, yq, Eq, bq, _q, Aa = me(()=>{
        "use strict";
        Hr = fe(Oa()),
        ht = 1.70158,
        yq = (0,
        Hr.default)(.25, .1, .25, 1),
        Eq = (0,
        Hr.default)(.42, 0, 1, 1),
        bq = (0,
        Hr.default)(0, 0, .58, 1),
        _q = (0,
        Hr.default)(.42, 0, .58, 1)
    }
    );
    var gg = {};
    Ge(gg, {
        applyEasing: ()=>rF,
        createBezierEasing: ()=>tF,
        optimizeFloat: ()=>jr
    });
    function jr(e, t=5, r=10) {
        let n = Math.pow(r, t)
          , i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function tF(e) {
        return (0,
        vg.default)(...e)
    }
    function rF(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : jr(r ? t > 0 ? r(t) : t : t > 0 && e && Xr[e] ? Xr[e](t) : t)
    }
    var vg, Sa = me(()=>{
        "use strict";
        Aa();
        vg = fe(Oa())
    }
    );
    var Eg = {};
    Ge(Eg, {
        createElementState: ()=>yg,
        ixElements: ()=>gF,
        mergeActionState: ()=>Ca
    });
    function yg(e, t, r, n, i) {
        let o = r === nF ? (0,
        ir.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        ir.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }
    function Ca(e, t, r, n, i) {
        let o = yF(i);
        return (0,
        ir.mergeIn)(e, [t, vF, r], n, o)
    }
    function yF(e) {
        let {config: t} = e;
        return mF.reduce((r,n)=>{
            let i = n[0]
              , o = n[1]
              , a = t[i]
              , s = t[o];
            return a != null && s != null && (r[o] = s),
            r
        }
        , {})
    }
    var ir, _X, nF, IX, iF, oF, aF, sF, uF, cF, lF, fF, dF, pF, hF, mg, vF, gF, mF, bg = me(()=>{
        "use strict";
        ir = fe(Yt());
        Ue();
        ({HTML_ELEMENT: _X, PLAIN_OBJECT: nF, ABSTRACT_NODE: IX, CONFIG_X_VALUE: iF, CONFIG_Y_VALUE: oF, CONFIG_Z_VALUE: aF, CONFIG_VALUE: sF, CONFIG_X_UNIT: uF, CONFIG_Y_UNIT: cF, CONFIG_Z_UNIT: lF, CONFIG_UNIT: fF} = Le),
        {IX2_SESSION_STOPPED: dF, IX2_INSTANCE_ADDED: pF, IX2_ELEMENT_STATE_CHANGED: hF} = we,
        mg = {},
        vF = "refState",
        gF = (e=mg,t={})=>{
            switch (t.type) {
            case dF:
                return mg;
            case pF:
                {
                    let {elementId: r, element: n, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: s} = o
                      , u = e;
                    return (0,
                    ir.getIn)(u, [r, n]) !== n && (u = yg(u, n, a, r, o)),
                    Ca(u, r, s, i, o)
                }
            case hF:
                {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return Ca(e, r, n, i, o)
                }
            default:
                return e
            }
        }
        ;
        mF = [[iF, uF], [oF, cF], [aF, lF], [sF, fF]]
    }
    );
    var _g = c(Oe=>{
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
        var EF = e=>e.value;
        Oe.getPluginConfig = EF;
        var bF = (e,t)=>{
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        Oe.getPluginDuration = bF;
        var _F = e=>e || {
            value: 0
        };
        Oe.getPluginOrigin = _F;
        var IF = e=>({
            value: e.value
        });
        Oe.getPluginDestination = IF;
        var TF = e=>{
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        Oe.createPluginInstance = TF;
        var wF = (e,t,r)=>{
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        Oe.renderPlugin = wF;
        var xF = e=>{
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        Oe.clearPlugin = xF
    }
    );
    var Tg = c(Ae=>{
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var OF = e=>document.querySelector(`[data-w-id="${e}"]`)
          , AF = ()=>window.Webflow.require("spline")
          , SF = (e,t)=>e.filter(r=>!t.includes(r))
          , CF = (e,t)=>e.value[t];
        Ae.getPluginConfig = CF;
        var RF = ()=>null;
        Ae.getPluginDuration = RF;
        var Ig = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , LF = (e,t)=>{
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let o = Object.keys(e)
                  , a = SF(n, o);
                return a.length ? a.reduce((u,l)=>(u[l] = Ig[l],
                u), e) : e
            }
            return n.reduce((o,a)=>(o[a] = Ig[a],
            o), {})
        }
        ;
        Ae.getPluginOrigin = LF;
        var NF = e=>e.value;
        Ae.getPluginDestination = NF;
        var PF = (e,t)=>{
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? OF(n) : null
        }
        ;
        Ae.createPluginInstance = PF;
        var qF = (e,t,r)=>{
            let n = AF()
              , i = n.getInstance(e)
              , o = r.config.target.objectId
              , a = s=>{
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let u = o && s.findObjectById(o);
                if (!u)
                    return;
                let {PLUGIN_SPLINE: l} = t;
                l.positionX != null && (u.position.x = l.positionX),
                l.positionY != null && (u.position.y = l.positionY),
                l.positionZ != null && (u.position.z = l.positionZ),
                l.rotationX != null && (u.rotation.x = l.rotationX),
                l.rotationY != null && (u.rotation.y = l.rotationY),
                l.rotationZ != null && (u.rotation.z = l.rotationZ),
                l.scaleX != null && (u.scale.x = l.scaleX),
                l.scaleY != null && (u.scale.y = l.scaleY),
                l.scaleZ != null && (u.scale.z = l.scaleZ)
            }
            ;
            i ? a(i.spline) : n.setLoadHandler(e, a)
        }
        ;
        Ae.renderPlugin = qF;
        var FF = ()=>null;
        Ae.clearPlugin = FF
    }
    );
    var La = c(Ra=>{
        "use strict";
        Object.defineProperty(Ra, "__esModule", {
            value: !0
        });
        Ra.normalizeColor = MF;
        var wg = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function MF(e) {
            let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase(), s = (typeof wg[o] == "string" ? wg[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16),
                r = parseInt(u[1] + u[1], 16),
                n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16),
                r = parseInt(u.substring(2, 4), 16),
                n = parseInt(u.substring(4, 6), 16))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10),
                i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , l = parseFloat(u[0])
                  , _ = parseFloat(u[1].replace("%", "")) / 100
                  , d = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let E = (1 - Math.abs(2 * d - 1)) * _, m = E * (1 - Math.abs(l / 60 % 2 - 1)), y = d - E / 2, T, O, x;
                l >= 0 && l < 60 ? (T = E,
                O = m,
                x = 0) : l >= 60 && l < 120 ? (T = m,
                O = E,
                x = 0) : l >= 120 && l < 180 ? (T = 0,
                O = E,
                x = m) : l >= 180 && l < 240 ? (T = 0,
                O = m,
                x = E) : l >= 240 && l < 300 ? (T = m,
                O = 0,
                x = E) : (T = E,
                O = 0,
                x = m),
                t = Math.round((T + y) * 255),
                r = Math.round((O + y) * 255),
                n = Math.round((x + y) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]), _ = parseFloat(u[1].replace("%", "")) / 100, d = parseFloat(u[2].replace("%", "")) / 100, E = (1 - Math.abs(2 * d - 1)) * _, m = E * (1 - Math.abs(l / 60 % 2 - 1)), y = d - E / 2, T, O, x;
                l >= 0 && l < 60 ? (T = E,
                O = m,
                x = 0) : l >= 60 && l < 120 ? (T = m,
                O = E,
                x = 0) : l >= 120 && l < 180 ? (T = 0,
                O = E,
                x = m) : l >= 180 && l < 240 ? (T = 0,
                O = m,
                x = E) : l >= 240 && l < 300 ? (T = m,
                O = 0,
                x = E) : (T = E,
                O = 0,
                x = m),
                t = Math.round((T + y) * 255),
                r = Math.round((O + y) * 255),
                n = Math.round((x + y) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    }
    );
    var xg = c(Se=>{
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var DF = La()
          , kF = (e,t)=>e.value[t];
        Se.getPluginConfig = kF;
        var GF = ()=>null;
        Se.getPluginDuration = GF;
        var VF = (e,t)=>{
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return (0,
                DF.normalizeColor)(i)
        }
        ;
        Se.getPluginOrigin = VF;
        var UF = e=>e.value;
        Se.getPluginDestination = UF;
        var BF = ()=>null;
        Se.createPluginInstance = BF;
        var WF = (e,t,r)=>{
            let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: u, blue: l, alpha: _} = o, d;
            a != null && (d = a + i),
            s != null && l != null && u != null && _ != null && (d = `rgba(${s}, ${u}, ${l}, ${_})`),
            d != null && document.documentElement.style.setProperty(n, d)
        }
        ;
        Se.renderPlugin = WF;
        var HF = (e,t)=>{
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
        ;
        Se.clearPlugin = HF
    }
    );
    var Og = c(ni=>{
        "use strict";
        var Pa = hn().default;
        Object.defineProperty(ni, "__esModule", {
            value: !0
        });
        ni.pluginMethodMap = void 0;
        var Na = (Ue(),
        rt(Nf))
          , XF = Pa(_g())
          , jF = Pa(Tg())
          , zF = Pa(xg())
          , AX = ni.pluginMethodMap = new Map([[Na.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...XF
        }], [Na.ActionTypeConsts.PLUGIN_SPLINE, {
            ...jF
        }], [Na.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...zF
        }]])
    }
    );
    var Ag = {};
    Ge(Ag, {
        clearPlugin: ()=>Ga,
        createPluginInstance: ()=>YF,
        getPluginConfig: ()=>Fa,
        getPluginDestination: ()=>Da,
        getPluginDuration: ()=>KF,
        getPluginOrigin: ()=>Ma,
        isPluginType: ()=>Mt,
        renderPlugin: ()=>ka
    });
    function Mt(e) {
        return qa.pluginMethodMap.has(e)
    }
    var qa, Dt, Fa, Ma, KF, Da, YF, ka, Ga, Va = me(()=>{
        "use strict";
        ei();
        qa = fe(Og());
        Dt = e=>t=>{
            if (!Je)
                return ()=>null;
            let r = qa.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
        ,
        Fa = Dt("getPluginConfig"),
        Ma = Dt("getPluginOrigin"),
        KF = Dt("getPluginDuration"),
        Da = Dt("getPluginDestination"),
        YF = Dt("createPluginInstance"),
        ka = Dt("renderPlugin"),
        Ga = Dt("clearPlugin")
    }
    );
    var Cg = c((RX,Sg)=>{
        function $F(e, t) {
            return e == null || e !== e ? t : e
        }
        Sg.exports = $F
    }
    );
    var Lg = c((LX,Rg)=>{
        function QF(e, t, r, n) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o; )
                r = t(r, e[i], i, e);
            return r
        }
        Rg.exports = QF
    }
    );
    var Pg = c((NX,Ng)=>{
        function ZF(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1)
                        break
                }
                return t
            }
        }
        Ng.exports = ZF
    }
    );
    var Fg = c((PX,qg)=>{
        var JF = Pg()
          , e1 = JF();
        qg.exports = e1
    }
    );
    var Ua = c((qX,Mg)=>{
        var t1 = Fg()
          , r1 = Vr();
        function n1(e, t) {
            return e && t1(e, t, r1)
        }
        Mg.exports = n1
    }
    );
    var kg = c((FX,Dg)=>{
        var i1 = qt();
        function o1(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!i1(r))
                    return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
                    ;
                return r
            }
        }
        Dg.exports = o1
    }
    );
    var Ba = c((MX,Gg)=>{
        var a1 = Ua()
          , s1 = kg()
          , u1 = s1(a1);
        Gg.exports = u1
    }
    );
    var Ug = c((DX,Vg)=>{
        function c1(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1,
                o) : t(r, o, a, s)
            }),
            r
        }
        Vg.exports = c1
    }
    );
    var Wg = c((kX,Bg)=>{
        var l1 = Lg()
          , f1 = Ba()
          , d1 = wt()
          , p1 = Ug()
          , h1 = xe();
        function v1(e, t, r) {
            var n = h1(e) ? l1 : p1
              , i = arguments.length < 3;
            return n(e, d1(t, 4), r, i, f1)
        }
        Bg.exports = v1
    }
    );
    var Xg = c((GX,Hg)=>{
        var g1 = Ia()
          , m1 = wt()
          , y1 = Ta()
          , E1 = Math.max
          , b1 = Math.min;
        function _1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = n - 1;
            return r !== void 0 && (i = y1(r),
            i = r < 0 ? E1(n + i, 0) : b1(i, n - 1)),
            g1(e, m1(t, 3), i, !0)
        }
        Hg.exports = _1
    }
    );
    var zg = c((VX,jg)=>{
        var I1 = _a()
          , T1 = Xg()
          , w1 = I1(T1);
        jg.exports = w1
    }
    );
    function Kg(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function x1(e, t) {
        if (Kg(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let r = Object.keys(e)
          , n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Kg(e[r[i]], t[r[i]]))
                return !1;
        return !0
    }
    var Wa, Yg = me(()=>{
        "use strict";
        Wa = x1
    }
    );
    var pm = {};
    Ge(pm, {
        cleanupHTMLElement: ()=>IM,
        clearAllStyles: ()=>_M,
        clearObjectCache: ()=>B1,
        getActionListProgress: ()=>wM,
        getAffectedElements: ()=>Ka,
        getComputedStyle: ()=>$1,
        getDestinationValues: ()=>nM,
        getElementId: ()=>j1,
        getInstanceId: ()=>H1,
        getInstanceOrigin: ()=>J1,
        getItemConfigByKey: ()=>rM,
        getMaxDurationItemIndex: ()=>dm,
        getNamespacedParameterId: ()=>AM,
        getRenderType: ()=>cm,
        getStyleProp: ()=>iM,
        mediaQueriesEqual: ()=>CM,
        observeStore: ()=>Y1,
        reduceListToGroup: ()=>xM,
        reifyState: ()=>z1,
        renderHTMLElement: ()=>oM,
        shallowEqual: ()=>Wa,
        shouldAllowMediaQuery: ()=>SM,
        shouldNamespaceEventParameter: ()=>OM,
        stringifyTarget: ()=>RM
    });
    function B1() {
        ii.clear()
    }
    function H1() {
        return "i" + W1++
    }
    function j1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t)
                return n.id
        }
        return "e" + X1++
    }
    function z1({events: e, actionLists: t, site: r}={}) {
        let n = (0,
        ui.default)(e, (a,s)=>{
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}),
            a[u][s.id] = s,
            a
        }
        , {})
          , i = r && r.mediaQueries
          , o = [];
        return i ? o = i.map(a=>a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function Y1({store: e, select: t, onChange: r, comparator: n=K1}) {
        let {getState: i, subscribe: o} = e
          , a = o(u)
          , s = t(i());
        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            n(l, s) || (s = l,
            r(s, e))
        }
        return a
    }
    function Zg(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function Ka({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce((N,I)=>N.concat(Ka({
                config: {
                    target: I
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: l, getSiblingElements: _, matchSelector: d, elementContains: E, isSiblingNode: m} = i
          , {target: y} = e;
        if (!y)
            return [];
        let {id: T, objectId: O, selector: x, selectorGuids: P, appliesTo: C, useEventTarget: M} = Zg(y);
        if (O)
            return [ii.has(O) ? ii.get(O) : ii.set(O, {}).get(O)];
        if (C === zo.PAGE) {
            let N = a(T);
            return N ? [N] : []
        }
        let F = (t?.action?.config?.affectedElements ?? {})[T || x] || {}, K = !!(F.id || F.selector), j, $, ee, H = t && s(Zg(t.target));
        if (K ? (j = F.limitAffectedElements,
        $ = H,
        ee = s(F)) : $ = ee = s({
            id: T,
            selector: x,
            selectorGuids: P
        }),
        t && M) {
            let N = r && (ee || M === !0) ? [r] : u(H);
            if (ee) {
                if (M === G1)
                    return u(ee).filter(I=>N.some(R=>E(I, R)));
                if (M === $g)
                    return u(ee).filter(I=>N.some(R=>E(R, I)));
                if (M === Qg)
                    return u(ee).filter(I=>N.some(R=>m(R, I)))
            }
            return N
        }
        return $ == null || ee == null ? [] : Je && n ? u(ee).filter(N=>n.contains(N)) : j === $g ? u($, ee) : j === k1 ? l(u($)).filter(d(ee)) : j === Qg ? _(u($)).filter(d(ee)) : u(ee)
    }
    function $1({element: e, actionItem: t}) {
        if (!Je)
            return {};
        let {actionTypeId: r} = t;
        switch (r) {
        case cr:
        case lr:
        case fr:
        case dr:
        case li:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function J1(e, t={}, r={}, n, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = n;
        if (Mt(a))
            return Ma(a)(t[a], n);
        switch (n.actionTypeId) {
        case ar:
        case sr:
        case ur:
        case $r:
            return t[n.actionTypeId] || Ya[n.actionTypeId];
        case Qr:
            return Q1(t[n.actionTypeId], n.config.filters);
        case Zr:
            return Z1(t[n.actionTypeId], n.config.fontVariations);
        case am:
            return {
                value: (0,
                vt.default)(parseFloat(o(e, ai)), 1)
            };
        case cr:
            {
                let s = o(e, ut), u = o(e, ct), l, _;
                return n.config.widthUnit === Ot ? l = Jg.test(s) ? parseFloat(s) : parseFloat(r.width) : l = (0,
                vt.default)(parseFloat(s), parseFloat(r.width)),
                n.config.heightUnit === Ot ? _ = Jg.test(u) ? parseFloat(u) : parseFloat(r.height) : _ = (0,
                vt.default)(parseFloat(u), parseFloat(r.height)),
                {
                    widthValue: l,
                    heightValue: _
                }
            }
        case lr:
        case fr:
        case dr:
            return yM({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: r,
                getStyle: o
            });
        case li:
            return {
                value: (0,
                vt.default)(o(e, si), r.display)
            };
        case U1:
            return t[n.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function nM({element: e, actionItem: t, elementApi: r}) {
        if (Mt(t.actionTypeId))
            return Da(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case ar:
        case sr:
        case ur:
        case $r:
            {
                let {xValue: n, yValue: i, zValue: o} = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
        case cr:
            {
                let {getStyle: n, setStyle: i, getProperty: o} = r
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: u, heightValue: l} = t.config;
                if (!Je)
                    return {
                        widthValue: u,
                        heightValue: l
                    };
                if (a === Ot) {
                    let _ = n(e, ut);
                    i(e, ut, ""),
                    u = o(e, "offsetWidth"),
                    i(e, ut, _)
                }
                if (s === Ot) {
                    let _ = n(e, ct);
                    i(e, ct, ""),
                    l = o(e, "offsetHeight"),
                    i(e, ct, _)
                }
                return {
                    widthValue: u,
                    heightValue: l
                }
            }
        case lr:
        case fr:
        case dr:
            {
                let {rValue: n, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
                if (s && s.startsWith("--")) {
                    let {getStyle: u} = r
                      , l = u(e, s)
                      , _ = (0,
                    rm.normalizeColor)(l);
                    return {
                        rValue: _.red,
                        gValue: _.green,
                        bValue: _.blue,
                        aValue: _.alpha
                    }
                }
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case Qr:
            return t.config.filters.reduce(eM, {});
        case Zr:
            return t.config.fontVariations.reduce(tM, {});
        default:
            {
                let {value: n} = t.config;
                return {
                    value: n
                }
            }
        }
    }
    function cm(e) {
        if (/^TRANSFORM_/.test(e))
            return im;
        if (/^STYLE_/.test(e))
            return ja;
        if (/^GENERAL_/.test(e))
            return Xa;
        if (/^PLUGIN_/.test(e))
            return om
    }
    function iM(e, t) {
        return e === ja ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function oM(e, t, r, n, i, o, a, s, u) {
        switch (s) {
        case im:
            return lM(e, t, r, i, a);
        case ja:
            return EM(e, t, r, i, o, a);
        case Xa:
            return bM(e, i, a);
        case om:
            {
                let {actionTypeId: l} = i;
                if (Mt(l))
                    return ka(l)(u, t, i)
            }
        }
    }
    function lM(e, t, r, n, i) {
        let o = cM.map(s=>{
            let u = Ya[s]
              , {xValue: l=u.xValue, yValue: _=u.yValue, zValue: d=u.zValue, xUnit: E="", yUnit: m="", zUnit: y=""} = t[s] || {};
            switch (s) {
            case ar:
                return `${S1}(${l}${E}, ${_}${m}, ${d}${y})`;
            case sr:
                return `${C1}(${l}${E}, ${_}${m}, ${d}${y})`;
            case ur:
                return `${R1}(${l}${E}) ${L1}(${_}${m}) ${N1}(${d}${y})`;
            case $r:
                return `${P1}(${l}${E}, ${_}${m})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        kt(e, xt, i),
        a(e, xt, o),
        pM(n, r) && a(e, Jn, q1)
    }
    function fM(e, t, r, n) {
        let i = (0,
        ui.default)(t, (a,s,u)=>`${a} ${u}(${s}${uM(u, r)})`, "")
          , {setStyle: o} = n;
        kt(e, zr, n),
        o(e, zr, i)
    }
    function dM(e, t, r, n) {
        let i = (0,
        ui.default)(t, (a,s,u)=>(a.push(`"${u}" ${s}`),
        a), []).join(", ")
          , {setStyle: o} = n;
        kt(e, Kr, n),
        o(e, Kr, i)
    }
    function pM({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === ar && n !== void 0 || e === sr && n !== void 0 || e === ur && (t !== void 0 || r !== void 0)
    }
    function mM(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }
    function yM({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let i = za[t]
          , o = n(e, i)
          , a = vM.test(o) ? o : r[i]
          , s = mM(gM, a).split(Yr);
        return {
            rValue: (0,
            vt.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            vt.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            vt.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            vt.default)(parseFloat(s[3]), 1)
        }
    }
    function EM(e, t, r, n, i, o) {
        let {setStyle: a} = o;
        switch (n.actionTypeId) {
        case cr:
            {
                let {widthUnit: s="", heightUnit: u=""} = n.config
                  , {widthValue: l, heightValue: _} = r;
                l !== void 0 && (s === Ot && (s = "px"),
                kt(e, ut, o),
                a(e, ut, l + s)),
                _ !== void 0 && (u === Ot && (u = "px"),
                kt(e, ct, o),
                a(e, ct, _ + u));
                break
            }
        case Qr:
            {
                fM(e, r, n.config, o);
                break
            }
        case Zr:
            {
                dM(e, r, n.config, o);
                break
            }
        case lr:
        case fr:
        case dr:
            {
                let s = za[n.actionTypeId]
                  , u = Math.round(r.rValue)
                  , l = Math.round(r.gValue)
                  , _ = Math.round(r.bValue)
                  , d = r.aValue;
                kt(e, s, o),
                a(e, s, d >= 1 ? `rgb(${u},${l},${_})` : `rgba(${u},${l},${_},${d})`);
                break
            }
        default:
            {
                let {unit: s=""} = n.config;
                kt(e, i, o),
                a(e, i, r.value + s);
                break
            }
        }
    }
    function bM(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
        case li:
            {
                let {value: i} = t.config;
                i === F1 && Je ? n(e, si, xa) : n(e, si, i);
                return
            }
        }
    }
    function kt(e, t, r) {
        if (!Je)
            return;
        let n = um[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, or);
        if (!a) {
            o(e, or, n);
            return
        }
        let s = a.split(Yr).map(sm);
        s.indexOf(n) === -1 && o(e, or, s.concat(n).join(Yr))
    }
    function lm(e, t, r) {
        if (!Je)
            return;
        let n = um[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, or);
        !a || a.indexOf(n) === -1 || o(e, or, a.split(Yr).map(sm).filter(s=>s !== n).join(Yr))
    }
    function _M({store: e, elementApi: t}) {
        let {ixData: r} = e.getState()
          , {events: n={}, actionLists: i={}} = r;
        Object.keys(n).forEach(o=>{
            let a = n[o]
              , {config: s} = a.action
              , {actionListId: u} = s
              , l = i[u];
            l && em({
                actionList: l,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o=>{
            em({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function em({actionList: e={}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e;
        n && n.forEach(o=>{
            tm({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }
        ),
        i && i.forEach(o=>{
            let {continuousActionGroups: a} = o;
            a.forEach(s=>{
                tm({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            }
            )
        }
        )
    }
    function tm({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(i=>{
            let {actionTypeId: o, config: a} = i, s;
            Mt(o) ? s = u=>Ga(o)(u, i) : s = fm({
                effect: TM,
                actionTypeId: o,
                elementApi: r
            }),
            Ka({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        }
        )
    }
    function IM(e, t, r) {
        let {setStyle: n, getStyle: i} = r
          , {actionTypeId: o} = t;
        if (o === cr) {
            let {config: a} = t;
            a.widthUnit === Ot && n(e, ut, ""),
            a.heightUnit === Ot && n(e, ct, "")
        }
        i(e, or) && fm({
            effect: lm,
            actionTypeId: o,
            elementApi: r
        })(e)
    }
    function TM(e, t, r) {
        let {setStyle: n} = r;
        lm(e, t, r),
        n(e, t, ""),
        t === xt && n(e, Jn, "")
    }
    function dm(e) {
        let t = 0
          , r = 0;
        return e.forEach((n,i)=>{
            let {config: o} = n
              , a = o.delay + o.duration;
            a >= t && (t = a,
            r = i)
        }
        ),
        r
    }
    function wM(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , s = 0;
        return r.forEach((u,l)=>{
            if (n && l === 0)
                return;
            let {actionItems: _} = u
              , d = _[dm(_)]
              , {config: E, actionTypeId: m} = d;
            i.id === d.id && (s = a + o);
            let y = cm(m) === Xa ? 0 : E.duration;
            a += E.delay + y
        }
        ),
        a > 0 ? jr(s / a) : 0
    }
    function xM({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e
          , o = []
          , a = s=>(o.push((0,
        ci.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return n && n.some(({actionItems: s})=>s.some(a)),
        i && i.some(s=>{
            let {continuousActionGroups: u} = s;
            return u.some(({actionItems: l})=>l.some(a))
        }
        ),
        (0,
        ci.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function OM(e, {basedOn: t}) {
        return e === Ze.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === at.ELEMENT
    }
    function AM(e, t) {
        return e + V1 + t
    }
    function SM(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function CM(e, t) {
        return Wa(e && e.sort(), t && t.sort())
    }
    function RM(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + Ha + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: r="", useEventTarget: n=""} = e;
        return t + Ha + r + Ha + n
    }
    var vt, ui, oi, ci, rm, O1, A1, S1, C1, R1, L1, N1, P1, q1, F1, ai, zr, Kr, ut, ct, nm, M1, D1, $g, k1, Qg, G1, si, or, Ot, Yr, V1, Ha, im, Xa, ja, om, ar, sr, ur, $r, am, Qr, Zr, cr, lr, fr, dr, li, U1, sm, za, um, ii, W1, X1, K1, Jg, Q1, Z1, eM, tM, rM, Ya, aM, sM, uM, cM, hM, vM, gM, fm, hm = me(()=>{
        "use strict";
        vt = fe(Cg()),
        ui = fe(Wg()),
        oi = fe(zg()),
        ci = fe(Yt());
        Ue();
        Yg();
        Sa();
        rm = fe(La());
        Va();
        ei();
        ({BACKGROUND: O1, TRANSFORM: A1, TRANSLATE_3D: S1, SCALE_3D: C1, ROTATE_X: R1, ROTATE_Y: L1, ROTATE_Z: N1, SKEW: P1, PRESERVE_3D: q1, FLEX: F1, OPACITY: ai, FILTER: zr, FONT_VARIATION_SETTINGS: Kr, WIDTH: ut, HEIGHT: ct, BACKGROUND_COLOR: nm, BORDER_COLOR: M1, COLOR: D1, CHILDREN: $g, IMMEDIATE_CHILDREN: k1, SIBLINGS: Qg, PARENT: G1, DISPLAY: si, WILL_CHANGE: or, AUTO: Ot, COMMA_DELIMITER: Yr, COLON_DELIMITER: V1, BAR_DELIMITER: Ha, RENDER_TRANSFORM: im, RENDER_GENERAL: Xa, RENDER_STYLE: ja, RENDER_PLUGIN: om} = Le),
        {TRANSFORM_MOVE: ar, TRANSFORM_SCALE: sr, TRANSFORM_ROTATE: ur, TRANSFORM_SKEW: $r, STYLE_OPACITY: am, STYLE_FILTER: Qr, STYLE_FONT_VARIATION: Zr, STYLE_SIZE: cr, STYLE_BACKGROUND_COLOR: lr, STYLE_BORDER: fr, STYLE_TEXT_COLOR: dr, GENERAL_DISPLAY: li, OBJECT_VALUE: U1} = Ve,
        sm = e=>e.trim(),
        za = Object.freeze({
            [lr]: nm,
            [fr]: M1,
            [dr]: D1
        }),
        um = Object.freeze({
            [xt]: A1,
            [nm]: O1,
            [ai]: ai,
            [zr]: zr,
            [ut]: ut,
            [ct]: ct,
            [Kr]: Kr
        }),
        ii = new Map;
        W1 = 1;
        X1 = 1;
        K1 = (e,t)=>e === t;
        Jg = /px/,
        Q1 = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = aM[n.type]),
        r), e || {}),
        Z1 = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = sM[n.type] || n.defaultValue || 0),
        r), e || {});
        eM = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        tM = (e,t)=>(t && (e[t.type] = t.value || 0),
        e),
        rM = (e,t,r)=>{
            if (Mt(e))
                return Fa(e)(r, t);
            switch (e) {
            case Qr:
                {
                    let n = (0,
                    oi.default)(r.filters, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            case Zr:
                {
                    let n = (0,
                    oi.default)(r.fontVariations, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        Ya = {
            [ar]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [sr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [ur]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [$r]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        aM = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        sM = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        uM = (e,t)=>{
            let r = (0,
            oi.default)(t.filters, ({type: n})=>n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        cM = Object.keys(Ya);
        hM = "\\(([^)]+)\\)",
        vM = /^rgb/,
        gM = RegExp(`rgba?${hM}`);
        fm = ({effect: e, actionTypeId: t, elementApi: r})=>n=>{
            switch (t) {
            case ar:
            case sr:
            case ur:
            case $r:
                e(n, xt, r);
                break;
            case Qr:
                e(n, zr, r);
                break;
            case Zr:
                e(n, Kr, r);
                break;
            case am:
                e(n, ai, r);
                break;
            case cr:
                e(n, ut, r),
                e(n, ct, r);
                break;
            case lr:
            case fr:
            case dr:
                e(n, za[t], r);
                break;
            case li:
                e(n, si, r);
                break
            }
        }
    }
    );
    var Gt = c(Me=>{
        "use strict";
        var pr = hn().default;
        Object.defineProperty(Me, "__esModule", {
            value: !0
        });
        Me.IX2VanillaUtils = Me.IX2VanillaPlugins = Me.IX2ElementsReducer = Me.IX2Easings = Me.IX2EasingUtils = Me.IX2BrowserSupport = void 0;
        var LM = pr((ei(),
        rt(cg)));
        Me.IX2BrowserSupport = LM;
        var NM = pr((Aa(),
        rt(Xr)));
        Me.IX2Easings = NM;
        var PM = pr((Sa(),
        rt(gg)));
        Me.IX2EasingUtils = PM;
        var qM = pr((bg(),
        rt(Eg)));
        Me.IX2ElementsReducer = qM;
        var FM = pr((Va(),
        rt(Ag)));
        Me.IX2VanillaPlugins = FM;
        var MM = pr((hm(),
        rt(pm)));
        Me.IX2VanillaUtils = MM
    }
    );
    var di, gt, DM, kM, GM, VM, UM, BM, fi, vm, WM, HM, $a, XM, jM, zM, KM, gm, mm = me(()=>{
        "use strict";
        Ue();
        di = fe(Gt()),
        gt = fe(Yt()),
        {IX2_RAW_DATA_IMPORTED: DM, IX2_SESSION_STOPPED: kM, IX2_INSTANCE_ADDED: GM, IX2_INSTANCE_STARTED: VM, IX2_INSTANCE_REMOVED: UM, IX2_ANIMATION_FRAME_CHANGED: BM} = we,
        {optimizeFloat: fi, applyEasing: vm, createBezierEasing: WM} = di.IX2EasingUtils,
        {RENDER_GENERAL: HM} = Le,
        {getItemConfigByKey: $a, getRenderType: XM, getStyleProp: jM} = di.IX2VanillaUtils,
        zM = (e,t)=>{
            let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: l, skipMotion: _, skipToValue: d} = e
              , {parameters: E} = t.payload
              , m = Math.max(1 - a, .01)
              , y = E[n];
            y == null && (m = 1,
            y = s);
            let T = Math.max(y, 0) || 0
              , O = fi(T - r)
              , x = _ ? d : fi(r + O * m)
              , P = x * 100;
            if (x === r && e.current)
                return e;
            let C, M, D, F;
            for (let j = 0, {length: $} = i; j < $; j++) {
                let {keyframe: ee, actionItems: H} = i[j];
                if (j === 0 && (C = H[0]),
                P >= ee) {
                    C = H[0];
                    let N = i[j + 1]
                      , I = N && P !== ee;
                    M = I ? N.actionItems[0] : null,
                    I && (D = ee / 100,
                    F = (N.keyframe - ee) / 100)
                }
            }
            let K = {};
            if (C && !M)
                for (let j = 0, {length: $} = o; j < $; j++) {
                    let ee = o[j];
                    K[ee] = $a(u, ee, C.config)
                }
            else if (C && M && D !== void 0 && F !== void 0) {
                let j = (x - D) / F
                  , $ = C.config.easing
                  , ee = vm($, j, l);
                for (let H = 0, {length: N} = o; H < N; H++) {
                    let I = o[H]
                      , R = $a(u, I, C.config)
                      , J = ($a(u, I, M.config) - R) * ee + R;
                    K[I] = J
                }
            }
            return (0,
            gt.merge)(e, {
                position: x,
                current: K
            })
        }
        ,
        KM = (e,t)=>{
            let {active: r, origin: n, start: i, immediate: o, renderType: a, verbose: s, actionItem: u, destination: l, destinationKeys: _, pluginDuration: d, instanceDelay: E, customEasingFn: m, skipMotion: y} = e
              , T = u.config.easing
              , {duration: O, delay: x} = u.config;
            d != null && (O = d),
            x = E ?? x,
            a === HM ? O = 0 : (o || y) && (O = x = 0);
            let {now: P} = t.payload;
            if (r && n) {
                let C = P - (i + x);
                if (s) {
                    let j = P - i
                      , $ = O + x
                      , ee = fi(Math.min(Math.max(0, j / $), 1));
                    e = (0,
                    gt.set)(e, "verboseTimeElapsed", $ * ee)
                }
                if (C < 0)
                    return e;
                let M = fi(Math.min(Math.max(0, C / O), 1))
                  , D = vm(T, M, m)
                  , F = {}
                  , K = null;
                return _.length && (K = _.reduce((j,$)=>{
                    let ee = l[$]
                      , H = parseFloat(n[$]) || 0
                      , I = (parseFloat(ee) - H) * D + H;
                    return j[$] = I,
                    j
                }
                , {})),
                F.current = K,
                F.position = M,
                M === 1 && (F.active = !1,
                F.complete = !0),
                (0,
                gt.merge)(e, F)
            }
            return e
        }
        ,
        gm = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case DM:
                return t.payload.ixInstances || Object.freeze({});
            case kM:
                return Object.freeze({});
            case GM:
                {
                    let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: l, isCarrier: _, origin: d, destination: E, immediate: m, verbose: y, continuous: T, parameterId: O, actionGroups: x, smoothing: P, restingValue: C, pluginInstance: M, pluginDuration: D, instanceDelay: F, skipMotion: K, skipToValue: j} = t.payload
                      , {actionTypeId: $} = i
                      , ee = XM($)
                      , H = jM(ee, $)
                      , N = Object.keys(E).filter(R=>E[R] != null && typeof E[R] != "string")
                      , {easing: I} = i.config;
                    return (0,
                    gt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: d,
                        destination: E,
                        destinationKeys: N,
                        immediate: m,
                        verbose: y,
                        current: null,
                        actionItem: i,
                        actionTypeId: $,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        renderType: ee,
                        isCarrier: _,
                        styleProp: H,
                        continuous: T,
                        parameterId: O,
                        actionGroups: x,
                        smoothing: P,
                        restingValue: C,
                        pluginInstance: M,
                        pluginDuration: D,
                        instanceDelay: F,
                        skipMotion: K,
                        skipToValue: j,
                        customEasingFn: Array.isArray(I) && I.length === 4 ? WM(I) : void 0
                    })
                }
            case VM:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    gt.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case UM:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case BM:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: i} = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o]
                          , s = e[a]
                          , u = s.continuous ? zM : KM;
                        r = (0,
                        gt.set)(r, a, u(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
    }
    );
    var YM, $M, QM, ym, Em = me(()=>{
        "use strict";
        Ue();
        ({IX2_RAW_DATA_IMPORTED: YM, IX2_SESSION_STOPPED: $M, IX2_PARAMETER_CHANGED: QM} = we),
        ym = (e={},t)=>{
            switch (t.type) {
            case YM:
                return t.payload.ixParameters || {};
            case $M:
                return {};
            case QM:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var Im = {};
    Ge(Im, {
        default: ()=>JM
    });
    var bm, _m, ZM, JM, Tm = me(()=>{
        "use strict";
        bm = fe(jo());
        qf();
        td();
        id();
        _m = fe(Gt());
        mm();
        Em();
        ({ixElements: ZM} = _m.IX2ElementsReducer),
        JM = (0,
        bm.combineReducers)({
            ixData: Pf,
            ixRequest: ed,
            ixSession: nd,
            ixElements: ZM,
            ixInstances: gm,
            ixParameters: ym
        })
    }
    );
    var xm = c((nj,wm)=>{
        var eD = It()
          , tD = xe()
          , rD = pt()
          , nD = "[object String]";
        function iD(e) {
            return typeof e == "string" || !tD(e) && rD(e) && eD(e) == nD
        }
        wm.exports = iD
    }
    );
    var Am = c((ij,Om)=>{
        var oD = ba()
          , aD = oD("length");
        Om.exports = aD
    }
    );
    var Cm = c((oj,Sm)=>{
        var sD = "\\ud800-\\udfff"
          , uD = "\\u0300-\\u036f"
          , cD = "\\ufe20-\\ufe2f"
          , lD = "\\u20d0-\\u20ff"
          , fD = uD + cD + lD
          , dD = "\\ufe0e\\ufe0f"
          , pD = "\\u200d"
          , hD = RegExp("[" + pD + sD + fD + dD + "]");
        function vD(e) {
            return hD.test(e)
        }
        Sm.exports = vD
    }
    );
    var km = c((aj,Dm)=>{
        var Lm = "\\ud800-\\udfff"
          , gD = "\\u0300-\\u036f"
          , mD = "\\ufe20-\\ufe2f"
          , yD = "\\u20d0-\\u20ff"
          , ED = gD + mD + yD
          , bD = "\\ufe0e\\ufe0f"
          , _D = "[" + Lm + "]"
          , Qa = "[" + ED + "]"
          , Za = "\\ud83c[\\udffb-\\udfff]"
          , ID = "(?:" + Qa + "|" + Za + ")"
          , Nm = "[^" + Lm + "]"
          , Pm = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , qm = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , TD = "\\u200d"
          , Fm = ID + "?"
          , Mm = "[" + bD + "]?"
          , wD = "(?:" + TD + "(?:" + [Nm, Pm, qm].join("|") + ")" + Mm + Fm + ")*"
          , xD = Mm + Fm + wD
          , OD = "(?:" + [Nm + Qa + "?", Qa, Pm, qm, _D].join("|") + ")"
          , Rm = RegExp(Za + "(?=" + Za + ")|" + OD + xD, "g");
        function AD(e) {
            for (var t = Rm.lastIndex = 0; Rm.test(e); )
                ++t;
            return t
        }
        Dm.exports = AD
    }
    );
    var Vm = c((sj,Gm)=>{
        var SD = Am()
          , CD = Cm()
          , RD = km();
        function LD(e) {
            return CD(e) ? RD(e) : SD(e)
        }
        Gm.exports = LD
    }
    );
    var Bm = c((uj,Um)=>{
        var ND = Hn()
          , PD = Xn()
          , qD = qt()
          , FD = xm()
          , MD = Vm()
          , DD = "[object Map]"
          , kD = "[object Set]";
        function GD(e) {
            if (e == null)
                return 0;
            if (qD(e))
                return FD(e) ? MD(e) : e.length;
            var t = PD(e);
            return t == DD || t == kD ? e.size : ND(e).length
        }
        Um.exports = GD
    }
    );
    var Hm = c((cj,Wm)=>{
        var VD = "Expected a function";
        function UD(e) {
            if (typeof e != "function")
                throw new TypeError(VD);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Wm.exports = UD
    }
    );
    var Ja = c((lj,Xm)=>{
        var BD = Tt()
          , WD = function() {
            try {
                var e = BD(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Xm.exports = WD
    }
    );
    var es = c((fj,zm)=>{
        var jm = Ja();
        function HD(e, t, r) {
            t == "__proto__" && jm ? jm(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        zm.exports = HD
    }
    );
    var Ym = c((dj,Km)=>{
        var XD = es()
          , jD = qn()
          , zD = Object.prototype
          , KD = zD.hasOwnProperty;
        function YD(e, t, r) {
            var n = e[t];
            (!(KD.call(e, t) && jD(n, r)) || r === void 0 && !(t in e)) && XD(e, t, r)
        }
        Km.exports = YD
    }
    );
    var Zm = c((pj,Qm)=>{
        var $D = Ym()
          , QD = Br()
          , ZD = Vn()
          , $m = st()
          , JD = nr();
        function e2(e, t, r, n) {
            if (!$m(e))
                return e;
            t = QD(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
                var u = JD(t[i])
                  , l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (i != a) {
                    var _ = s[u];
                    l = n ? n(_, u, s) : void 0,
                    l === void 0 && (l = $m(_) ? _ : ZD(t[i + 1]) ? [] : {})
                }
                $D(s, u, l),
                s = s[u]
            }
            return e
        }
        Qm.exports = e2
    }
    );
    var ey = c((hj,Jm)=>{
        var t2 = Kn()
          , r2 = Zm()
          , n2 = Br();
        function i2(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i; ) {
                var a = t[n]
                  , s = t2(e, a);
                r(s, a) && r2(o, n2(a, e), s)
            }
            return o
        }
        Jm.exports = i2
    }
    );
    var ry = c((vj,ty)=>{
        var o2 = kn()
          , a2 = Po()
          , s2 = oa()
          , u2 = ia()
          , c2 = Object.getOwnPropertySymbols
          , l2 = c2 ? function(e) {
            for (var t = []; e; )
                o2(t, s2(e)),
                e = a2(e);
            return t
        }
        : u2;
        ty.exports = l2
    }
    );
    var iy = c((gj,ny)=>{
        function f2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        ny.exports = f2
    }
    );
    var ay = c((mj,oy)=>{
        var d2 = st()
          , p2 = Wn()
          , h2 = iy()
          , v2 = Object.prototype
          , g2 = v2.hasOwnProperty;
        function m2(e) {
            if (!d2(e))
                return h2(e);
            var t = p2(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !g2.call(e, n)) || r.push(n);
            return r
        }
        oy.exports = m2
    }
    );
    var uy = c((yj,sy)=>{
        var y2 = sa()
          , E2 = ay()
          , b2 = qt();
        function _2(e) {
            return b2(e) ? y2(e, !0) : E2(e)
        }
        sy.exports = _2
    }
    );
    var ly = c((Ej,cy)=>{
        var I2 = na()
          , T2 = ry()
          , w2 = uy();
        function x2(e) {
            return I2(e, w2, T2)
        }
        cy.exports = x2
    }
    );
    var dy = c((bj,fy)=>{
        var O2 = Ea()
          , A2 = wt()
          , S2 = ey()
          , C2 = ly();
        function R2(e, t) {
            if (e == null)
                return {};
            var r = O2(C2(e), function(n) {
                return [n]
            });
            return t = A2(t),
            S2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        fy.exports = R2
    }
    );
    var hy = c((_j,py)=>{
        var L2 = wt()
          , N2 = Hm()
          , P2 = dy();
        function q2(e, t) {
            return P2(e, N2(L2(t)))
        }
        py.exports = q2
    }
    );
    var gy = c((Ij,vy)=>{
        var F2 = Hn()
          , M2 = Xn()
          , D2 = Mr()
          , k2 = xe()
          , G2 = qt()
          , V2 = Gn()
          , U2 = Wn()
          , B2 = Bn()
          , W2 = "[object Map]"
          , H2 = "[object Set]"
          , X2 = Object.prototype
          , j2 = X2.hasOwnProperty;
        function z2(e) {
            if (e == null)
                return !0;
            if (G2(e) && (k2(e) || typeof e == "string" || typeof e.splice == "function" || V2(e) || B2(e) || D2(e)))
                return !e.length;
            var t = M2(e);
            if (t == W2 || t == H2)
                return !e.size;
            if (U2(e))
                return !F2(e).length;
            for (var r in e)
                if (j2.call(e, r))
                    return !1;
            return !0
        }
        vy.exports = z2
    }
    );
    var yy = c((Tj,my)=>{
        var K2 = es()
          , Y2 = Ua()
          , $2 = wt();
        function Q2(e, t) {
            var r = {};
            return t = $2(t, 3),
            Y2(e, function(n, i, o) {
                K2(r, i, t(n, i, o))
            }),
            r
        }
        my.exports = Q2
    }
    );
    var by = c((wj,Ey)=>{
        function Z2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        Ey.exports = Z2
    }
    );
    var Iy = c((xj,_y)=>{
        var J2 = $n();
        function ek(e) {
            return typeof e == "function" ? e : J2
        }
        _y.exports = ek
    }
    );
    var wy = c((Oj,Ty)=>{
        var tk = by()
          , rk = Ba()
          , nk = Iy()
          , ik = xe();
        function ok(e, t) {
            var r = ik(e) ? tk : rk;
            return r(e, nk(t))
        }
        Ty.exports = ok
    }
    );
    var Oy = c((Aj,xy)=>{
        var ak = Qe()
          , sk = function() {
            return ak.Date.now()
        };
        xy.exports = sk
    }
    );
    var Cy = c((Sj,Sy)=>{
        var uk = st()
          , ts = Oy()
          , Ay = Qn()
          , ck = "Expected a function"
          , lk = Math.max
          , fk = Math.min;
        function dk(e, t, r) {
            var n, i, o, a, s, u, l = 0, _ = !1, d = !1, E = !0;
            if (typeof e != "function")
                throw new TypeError(ck);
            t = Ay(t) || 0,
            uk(r) && (_ = !!r.leading,
            d = "maxWait"in r,
            o = d ? lk(Ay(r.maxWait) || 0, t) : o,
            E = "trailing"in r ? !!r.trailing : E);
            function m(F) {
                var K = n
                  , j = i;
                return n = i = void 0,
                l = F,
                a = e.apply(j, K),
                a
            }
            function y(F) {
                return l = F,
                s = setTimeout(x, t),
                _ ? m(F) : a
            }
            function T(F) {
                var K = F - u
                  , j = F - l
                  , $ = t - K;
                return d ? fk($, o - j) : $
            }
            function O(F) {
                var K = F - u
                  , j = F - l;
                return u === void 0 || K >= t || K < 0 || d && j >= o
            }
            function x() {
                var F = ts();
                if (O(F))
                    return P(F);
                s = setTimeout(x, T(F))
            }
            function P(F) {
                return s = void 0,
                E && n ? m(F) : (n = i = void 0,
                a)
            }
            function C() {
                s !== void 0 && clearTimeout(s),
                l = 0,
                n = u = i = s = void 0
            }
            function M() {
                return s === void 0 ? a : P(ts())
            }
            function D() {
                var F = ts()
                  , K = O(F);
                if (n = arguments,
                i = this,
                u = F,
                K) {
                    if (s === void 0)
                        return y(u);
                    if (d)
                        return clearTimeout(s),
                        s = setTimeout(x, t),
                        m(u)
                }
                return s === void 0 && (s = setTimeout(x, t)),
                a
            }
            return D.cancel = C,
            D.flush = M,
            D
        }
        Sy.exports = dk
    }
    );
    var Ly = c((Cj,Ry)=>{
        var pk = Cy()
          , hk = st()
          , vk = "Expected a function";
        function gk(e, t, r) {
            var n = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(vk);
            return hk(r) && (n = "leading"in r ? !!r.leading : n,
            i = "trailing"in r ? !!r.trailing : i),
            pk(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Ry.exports = gk
    }
    );
    var Py = {};
    Ge(Py, {
        actionListPlaybackChanged: ()=>vr,
        animationFrameChanged: ()=>hi,
        clearRequested: ()=>Uk,
        elementStateChanged: ()=>cs,
        eventListenerAdded: ()=>pi,
        eventStateChanged: ()=>as,
        instanceAdded: ()=>ss,
        instanceRemoved: ()=>us,
        instanceStarted: ()=>vi,
        mediaQueriesDefined: ()=>fs,
        parameterChanged: ()=>hr,
        playbackRequested: ()=>Gk,
        previewRequested: ()=>kk,
        rawDataImported: ()=>rs,
        sessionInitialized: ()=>ns,
        sessionStarted: ()=>is,
        sessionStopped: ()=>os,
        stopRequested: ()=>Vk,
        testFrameRendered: ()=>Bk,
        viewportWidthChanged: ()=>ls
    });
    var Ny, mk, yk, Ek, bk, _k, Ik, Tk, wk, xk, Ok, Ak, Sk, Ck, Rk, Lk, Nk, Pk, qk, Fk, Mk, Dk, rs, ns, is, os, kk, Gk, Vk, Uk, pi, Bk, as, hi, hr, ss, vi, us, cs, vr, ls, fs, gi = me(()=>{
        "use strict";
        Ue();
        Ny = fe(Gt()),
        {IX2_RAW_DATA_IMPORTED: mk, IX2_SESSION_INITIALIZED: yk, IX2_SESSION_STARTED: Ek, IX2_SESSION_STOPPED: bk, IX2_PREVIEW_REQUESTED: _k, IX2_PLAYBACK_REQUESTED: Ik, IX2_STOP_REQUESTED: Tk, IX2_CLEAR_REQUESTED: wk, IX2_EVENT_LISTENER_ADDED: xk, IX2_TEST_FRAME_RENDERED: Ok, IX2_EVENT_STATE_CHANGED: Ak, IX2_ANIMATION_FRAME_CHANGED: Sk, IX2_PARAMETER_CHANGED: Ck, IX2_INSTANCE_ADDED: Rk, IX2_INSTANCE_STARTED: Lk, IX2_INSTANCE_REMOVED: Nk, IX2_ELEMENT_STATE_CHANGED: Pk, IX2_ACTION_LIST_PLAYBACK_CHANGED: qk, IX2_VIEWPORT_WIDTH_CHANGED: Fk, IX2_MEDIA_QUERIES_DEFINED: Mk} = we,
        {reifyState: Dk} = Ny.IX2VanillaUtils,
        rs = e=>({
            type: mk,
            payload: {
                ...Dk(e)
            }
        }),
        ns = ({hasBoundaryNodes: e, reducedMotion: t})=>({
            type: yk,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        is = ()=>({
            type: Ek
        }),
        os = ()=>({
            type: bk
        }),
        kk = ({rawData: e, defer: t})=>({
            type: _k,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        Gk = ({actionTypeId: e=Ve.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: u})=>({
            type: Ik,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }),
        Vk = e=>({
            type: Tk,
            payload: {
                actionListId: e
            }
        }),
        Uk = ()=>({
            type: wk
        }),
        pi = (e,t)=>({
            type: xk,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        Bk = (e=1)=>({
            type: Ok,
            payload: {
                step: e
            }
        }),
        as = (e,t)=>({
            type: Ak,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        hi = (e,t)=>({
            type: Sk,
            payload: {
                now: e,
                parameters: t
            }
        }),
        hr = (e,t)=>({
            type: Ck,
            payload: {
                key: e,
                value: t
            }
        }),
        ss = e=>({
            type: Rk,
            payload: {
                ...e
            }
        }),
        vi = (e,t)=>({
            type: Lk,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        us = e=>({
            type: Nk,
            payload: {
                instanceId: e
            }
        }),
        cs = (e,t,r,n)=>({
            type: Pk,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }),
        vr = ({actionListId: e, isPlaying: t})=>({
            type: qk,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        ls = ({width: e, mediaQueries: t})=>({
            type: Fk,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        fs = ()=>({
            type: Mk
        })
    }
    );
    var De = {};
    Ge(De, {
        elementContains: ()=>hs,
        getChildElements: ()=>Zk,
        getClosestElement: ()=>Jr,
        getProperty: ()=>zk,
        getQuerySelector: ()=>ps,
        getRefType: ()=>vs,
        getSiblingElements: ()=>Jk,
        getStyle: ()=>jk,
        getValidDocument: ()=>Yk,
        isSiblingNode: ()=>Qk,
        matchSelector: ()=>Kk,
        queryDocument: ()=>$k,
        setStyle: ()=>Xk
    });
    function Xk(e, t, r) {
        e.style[t] = r
    }
    function jk(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function zk(e, t) {
        return e[t]
    }
    function Kk(e) {
        return t=>t[ds](e)
    }
    function ps({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(qy) !== -1) {
                let n = e.split(qy)
                  , i = n[0];
                if (r = n[1],
                i !== document.documentElement.getAttribute(My))
                    return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }
    function Yk(e) {
        return e == null || e === document.documentElement.getAttribute(My) ? document : null
    }
    function $k(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function hs(e, t) {
        return e.contains(t)
    }
    function Qk(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function Zk(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: i} = e[r]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function Jk(e=[]) {
        let t = []
          , r = [];
        for (let n = 0, {length: i} = e; n < i; n++) {
            let {parentNode: o} = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
                continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function vs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? Wk : Hk : null
    }
    var Fy, ds, qy, Wk, Hk, My, Jr, Dy = me(()=>{
        "use strict";
        Fy = fe(Gt());
        Ue();
        ({ELEMENT_MATCHES: ds} = Fy.IX2BrowserSupport),
        {IX2_ID_DELIMITER: qy, HTML_ELEMENT: Wk, PLAIN_OBJECT: Hk, WF_PAGE: My} = Le;
        Jr = Element.prototype.closest ? (e,t)=>document.documentElement.contains(e) ? e.closest(t) : null : (e,t)=>{
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[ds] && r[ds](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    }
    );
    var gs = c((Nj,Gy)=>{
        var eG = st()
          , ky = Object.create
          , tG = function() {
            function e() {}
            return function(t) {
                if (!eG(t))
                    return {};
                if (ky)
                    return ky(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        Gy.exports = tG
    }
    );
    var mi = c((Pj,Vy)=>{
        function rG() {}
        Vy.exports = rG
    }
    );
    var Ei = c((qj,Uy)=>{
        var nG = gs()
          , iG = mi();
        function yi(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        yi.prototype = nG(iG.prototype);
        yi.prototype.constructor = yi;
        Uy.exports = yi
    }
    );
    var Xy = c((Fj,Hy)=>{
        var By = jt()
          , oG = Mr()
          , aG = xe()
          , Wy = By ? By.isConcatSpreadable : void 0;
        function sG(e) {
            return aG(e) || oG(e) || !!(Wy && e && e[Wy])
        }
        Hy.exports = sG
    }
    );
    var Ky = c((Mj,zy)=>{
        var uG = kn()
          , cG = Xy();
        function jy(e, t, r, n, i) {
            var o = -1
              , a = e.length;
            for (r || (r = cG),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? jy(s, t - 1, r, n, i) : uG(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        zy.exports = jy
    }
    );
    var $y = c((Dj,Yy)=>{
        var lG = Ky();
        function fG(e) {
            var t = e == null ? 0 : e.length;
            return t ? lG(e, 1) : []
        }
        Yy.exports = fG
    }
    );
    var Zy = c((kj,Qy)=>{
        function dG(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Qy.exports = dG
    }
    );
    var tE = c((Gj,eE)=>{
        var pG = Zy()
          , Jy = Math.max;
        function hG(e, t, r) {
            return t = Jy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, i = -1, o = Jy(n.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = n[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = n[i];
                return s[t] = r(a),
                pG(e, this, s)
            }
        }
        eE.exports = hG
    }
    );
    var nE = c((Vj,rE)=>{
        function vG(e) {
            return function() {
                return e
            }
        }
        rE.exports = vG
    }
    );
    var aE = c((Uj,oE)=>{
        var gG = nE()
          , iE = Ja()
          , mG = $n()
          , yG = iE ? function(e, t) {
            return iE(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: gG(t),
                writable: !0
            })
        }
        : mG;
        oE.exports = yG
    }
    );
    var uE = c((Bj,sE)=>{
        var EG = 800
          , bG = 16
          , _G = Date.now;
        function IG(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = _G()
                  , i = bG - (n - r);
                if (r = n,
                i > 0) {
                    if (++t >= EG)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        sE.exports = IG
    }
    );
    var lE = c((Wj,cE)=>{
        var TG = aE()
          , wG = uE()
          , xG = wG(TG);
        cE.exports = xG
    }
    );
    var dE = c((Hj,fE)=>{
        var OG = $y()
          , AG = tE()
          , SG = lE();
        function CG(e) {
            return SG(AG(e, void 0, OG), e + "")
        }
        fE.exports = CG
    }
    );
    var vE = c((Xj,hE)=>{
        var pE = ua()
          , RG = pE && new pE;
        hE.exports = RG
    }
    );
    var mE = c((jj,gE)=>{
        function LG() {}
        gE.exports = LG
    }
    );
    var ms = c((zj,EE)=>{
        var yE = vE()
          , NG = mE()
          , PG = yE ? function(e) {
            return yE.get(e)
        }
        : NG;
        EE.exports = PG
    }
    );
    var _E = c((Kj,bE)=>{
        var qG = {};
        bE.exports = qG
    }
    );
    var ys = c((Yj,TE)=>{
        var IE = _E()
          , FG = Object.prototype
          , MG = FG.hasOwnProperty;
        function DG(e) {
            for (var t = e.name + "", r = IE[t], n = MG.call(IE, t) ? r.length : 0; n--; ) {
                var i = r[n]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        TE.exports = DG
    }
    );
    var _i = c(($j,wE)=>{
        var kG = gs()
          , GG = mi()
          , VG = 4294967295;
        function bi(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = VG,
            this.__views__ = []
        }
        bi.prototype = kG(GG.prototype);
        bi.prototype.constructor = bi;
        wE.exports = bi
    }
    );
    var OE = c((Qj,xE)=>{
        function UG(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        xE.exports = UG
    }
    );
    var SE = c((Zj,AE)=>{
        var BG = _i()
          , WG = Ei()
          , HG = OE();
        function XG(e) {
            if (e instanceof BG)
                return e.clone();
            var t = new WG(e.__wrapped__,e.__chain__);
            return t.__actions__ = HG(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        AE.exports = XG
    }
    );
    var LE = c((Jj,RE)=>{
        var jG = _i()
          , CE = Ei()
          , zG = mi()
          , KG = xe()
          , YG = pt()
          , $G = SE()
          , QG = Object.prototype
          , ZG = QG.hasOwnProperty;
        function Ii(e) {
            if (YG(e) && !KG(e) && !(e instanceof jG)) {
                if (e instanceof CE)
                    return e;
                if (ZG.call(e, "__wrapped__"))
                    return $G(e)
            }
            return new CE(e)
        }
        Ii.prototype = zG.prototype;
        Ii.prototype.constructor = Ii;
        RE.exports = Ii
    }
    );
    var PE = c((ez,NE)=>{
        var JG = _i()
          , eV = ms()
          , tV = ys()
          , rV = LE();
        function nV(e) {
            var t = tV(e)
              , r = rV[t];
            if (typeof r != "function" || !(t in JG.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = eV(r);
            return !!n && e === n[0]
        }
        NE.exports = nV
    }
    );
    var DE = c((tz,ME)=>{
        var qE = Ei()
          , iV = dE()
          , oV = ms()
          , Es = ys()
          , aV = xe()
          , FE = PE()
          , sV = "Expected a function"
          , uV = 8
          , cV = 32
          , lV = 128
          , fV = 256;
        function dV(e) {
            return iV(function(t) {
                var r = t.length
                  , n = r
                  , i = qE.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var o = t[n];
                    if (typeof o != "function")
                        throw new TypeError(sV);
                    if (i && !a && Es(o) == "wrapper")
                        var a = new qE([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    o = t[n];
                    var s = Es(o)
                      , u = s == "wrapper" ? oV(o) : void 0;
                    u && FE(u[0]) && u[1] == (lV | uV | cV | fV) && !u[4].length && u[9] == 1 ? a = a[Es(u[0])].apply(a, u[3]) : a = o.length == 1 && FE(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var l = arguments
                      , _ = l[0];
                    if (a && l.length == 1 && aV(_))
                        return a.plant(_).value();
                    for (var d = 0, E = r ? t[d].apply(this, l) : _; ++d < r; )
                        E = t[d].call(this, E);
                    return E
                }
            })
        }
        ME.exports = dV
    }
    );
    var GE = c((rz,kE)=>{
        var pV = DE()
          , hV = pV();
        kE.exports = hV
    }
    );
    var UE = c((nz,VE)=>{
        function vV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        VE.exports = vV
    }
    );
    var WE = c((iz,BE)=>{
        var gV = UE()
          , bs = Qn();
        function mV(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = bs(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = bs(t),
            t = t === t ? t : 0),
            gV(bs(e), t, r)
        }
        BE.exports = mV
    }
    );
    var ZE, JE, eb, tb, yV, EV, bV, _V, IV, TV, wV, xV, OV, AV, SV, CV, RV, LV, NV, rb, nb, PV, qV, FV, ib, MV, DV, ob, kV, _s, ab, HE, XE, sb, tn, GV, lt, ub, VV, We, et, rn, cb, Is, jE, Ts, UV, en, BV, WV, HV, lb, zE, XV, KE, jV, zV, KV, YE, Ti, wi, $E, QE, fb, db = me(()=>{
        "use strict";
        ZE = fe(GE()),
        JE = fe(Yn()),
        eb = fe(WE());
        Ue();
        ws();
        gi();
        tb = fe(Gt()),
        {MOUSE_CLICK: yV, MOUSE_SECOND_CLICK: EV, MOUSE_DOWN: bV, MOUSE_UP: _V, MOUSE_OVER: IV, MOUSE_OUT: TV, DROPDOWN_CLOSE: wV, DROPDOWN_OPEN: xV, SLIDER_ACTIVE: OV, SLIDER_INACTIVE: AV, TAB_ACTIVE: SV, TAB_INACTIVE: CV, NAVBAR_CLOSE: RV, NAVBAR_OPEN: LV, MOUSE_MOVE: NV, PAGE_SCROLL_DOWN: rb, SCROLL_INTO_VIEW: nb, SCROLL_OUT_OF_VIEW: PV, PAGE_SCROLL_UP: qV, SCROLLING_IN_VIEW: FV, PAGE_FINISH: ib, ECOMMERCE_CART_CLOSE: MV, ECOMMERCE_CART_OPEN: DV, PAGE_START: ob, PAGE_SCROLL: kV} = Ze,
        _s = "COMPONENT_ACTIVE",
        ab = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: HE} = Le,
        {getNamespacedParameterId: XE} = tb.IX2VanillaUtils,
        sb = e=>t=>typeof t == "object" && e(t) ? !0 : t,
        tn = sb(({element: e, nativeEvent: t})=>e === t.target),
        GV = sb(({element: e, nativeEvent: t})=>e.contains(t.target)),
        lt = (0,
        ZE.default)([tn, GV]),
        ub = (e,t)=>{
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , i = n[t];
                if (i && !UV[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        VV = ({store: e, event: t})=>{
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!ub(e, n)
        }
        ,
        We = ({store: e, event: t, element: r, eventStateKey: n},i)=>{
            let {action: o, id: a} = t
              , {actionListId: s, autoStopEventId: u} = o.config
              , l = ub(e, u);
            return l && gr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + HE + n.split(HE)[1],
                actionListId: (0,
                JE.default)(l, "action.config.actionListId")
            }),
            gr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            nn({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            i
        }
        ,
        et = (e,t)=>(r,n)=>e(r, n) === !0 ? t(r, n) : n,
        rn = {
            handler: et(lt, We)
        },
        cb = {
            ...rn,
            types: [_s, ab].join(" ")
        },
        Is = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        jE = "mouseover mouseout",
        Ts = {
            types: Is
        },
        UV = {
            PAGE_START: ob,
            PAGE_FINISH: ib
        },
        en = (()=>{
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return ()=>({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                eb.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        BV = (e,t)=>!(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        WV = ({element: e, nativeEvent: t})=>{
            let {type: r, target: n, relatedTarget: i} = t
              , o = e.contains(n);
            if (r === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }
        ,
        HV = e=>{
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: i} = en()
              , o = r.scrollOffsetValue
              , u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return BV(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }
        ,
        lb = e=>(t,r)=>{
            let {type: n} = t.nativeEvent
              , i = [_s, ab].indexOf(n) !== -1 ? n === _s : r.isActive
              , o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }
        ,
        zE = e=>(t,r)=>{
            let n = {
                elementHovered: WV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
        ,
        XV = e=>(t,r)=>{
            let n = {
                ...r,
                elementVisible: HV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
        ,
        KE = e=>(t,r={})=>{
            let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = en()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: u, scrollOffsetUnit: l} = a
              , _ = l === "PX"
              , d = i - o
              , E = Number((n / d).toFixed(2));
            if (r && r.percentTop === E)
                return r;
            let m = (_ ? u : o * (u || 0) / 100) / d, y, T, O = 0;
            r && (y = E > r.percentTop,
            T = r.scrollingDown !== y,
            O = T ? E : r.anchorTop);
            let x = s === rb ? E >= O + m : E <= O - m
              , P = {
                ...r,
                percentTop: E,
                inBounds: x,
                anchorTop: O,
                scrollingDown: y
            };
            return r && x && (T || P.inBounds !== r.inBounds) && e(t, P) || P
        }
        ,
        jV = (e,t)=>e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        zV = e=>(t,r)=>{
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
        ,
        KV = e=>(t,r)=>{
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
        ,
        YE = e=>(t,r={
            clickCount: 0
        })=>{
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
        ,
        Ti = (e=!0)=>({
            ...cb,
            handler: et(e ? lt : tn, lb((t,r)=>r.isActive ? rn.handler(t, r) : r))
        }),
        wi = (e=!0)=>({
            ...cb,
            handler: et(e ? lt : tn, lb((t,r)=>r.isActive ? r : rn.handler(t, r)))
        }),
        $E = {
            ...Ts,
            handler: XV((e,t)=>{
                let {elementVisible: r} = t
                  , {event: n, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === nb === r ? (We(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        QE = .05,
        fb = {
            [OV]: Ti(),
            [AV]: wi(),
            [xV]: Ti(),
            [wV]: wi(),
            [LV]: Ti(!1),
            [RV]: wi(!1),
            [SV]: Ti(),
            [CV]: wi(),
            [DV]: {
                types: "ecommerce-cart-open",
                handler: et(lt, We)
            },
            [MV]: {
                types: "ecommerce-cart-close",
                handler: et(lt, We)
            },
            [yV]: {
                types: "click",
                handler: et(lt, YE((e,{clickCount: t})=>{
                    VV(e) ? t === 1 && We(e) : We(e)
                }
                ))
            },
            [EV]: {
                types: "click",
                handler: et(lt, YE((e,{clickCount: t})=>{
                    t === 2 && We(e)
                }
                ))
            },
            [bV]: {
                ...rn,
                types: "mousedown"
            },
            [_V]: {
                ...rn,
                types: "mouseup"
            },
            [IV]: {
                types: jE,
                handler: et(lt, zE((e,t)=>{
                    t.elementHovered && We(e)
                }
                ))
            },
            [TV]: {
                types: jE,
                handler: et(lt, zE((e,t)=>{
                    t.elementHovered || We(e)
                }
                ))
            },
            [NV]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i},o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                })=>{
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: l, restingState: _=0} = r
                      , {clientX: d=o.clientX, clientY: E=o.clientY, pageX: m=o.pageX, pageY: y=o.pageY} = n
                      , T = s === "X_AXIS"
                      , O = n.type === "mouseout"
                      , x = _ / 100
                      , P = u
                      , C = !1;
                    switch (a) {
                    case at.VIEWPORT:
                        {
                            x = T ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(E, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case at.PAGE:
                        {
                            let {scrollLeft: M, scrollTop: D, scrollWidth: F, scrollHeight: K} = en();
                            x = T ? Math.min(M + m, F) / F : Math.min(D + y, K) / K;
                            break
                        }
                    case at.ELEMENT:
                    default:
                        {
                            P = XE(i, u);
                            let M = n.type.indexOf("mouse") === 0;
                            if (M && lt({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let D = t.getBoundingClientRect()
                              , {left: F, top: K, width: j, height: $} = D;
                            if (!M && !jV({
                                left: d,
                                top: E
                            }, D))
                                break;
                            C = !0,
                            x = T ? (d - F) / j : (E - K) / $;
                            break
                        }
                    }
                    return O && (x > 1 - QE || x < QE) && (x = Math.round(x)),
                    (a !== at.ELEMENT || C || C !== o.elementHovered) && (x = l ? 1 - x : x,
                    e.dispatch(hr(P, x))),
                    {
                        elementHovered: C,
                        clientX: d,
                        clientY: E,
                        pageX: m,
                        pageY: y
                    }
                }
            },
            [kV]: {
                types: Is,
                handler: ({store: e, eventConfig: t})=>{
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = en()
                      , s = i / (o - a);
                    s = n ? 1 - s : s,
                    e.dispatch(hr(r, s))
                }
            },
            [FV]: {
                types: Is,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n},i={
                    scrollPercent: 0
                })=>{
                    let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: l} = en()
                      , {basedOn: _, selectedAxis: d, continuousParameterGroupId: E, startsEntering: m, startsExiting: y, addEndOffset: T, addStartOffset: O, addOffsetValue: x=0, endOffsetValue: P=0} = r
                      , C = d === "X_AXIS";
                    if (_ === at.VIEWPORT) {
                        let M = C ? o / s : a / u;
                        return M !== i.scrollPercent && t.dispatch(hr(E, M)),
                        {
                            scrollPercent: M
                        }
                    } else {
                        let M = XE(n, E)
                          , D = e.getBoundingClientRect()
                          , F = (O ? x : 0) / 100
                          , K = (T ? P : 0) / 100;
                        F = m ? F : 1 - F,
                        K = y ? K : 1 - K;
                        let j = D.top + Math.min(D.height * F, l)
                          , ee = D.top + D.height * K - j
                          , H = Math.min(l + ee, u)
                          , I = Math.min(Math.max(0, l - j), H) / H;
                        return I !== i.scrollPercent && t.dispatch(hr(M, I)),
                        {
                            scrollPercent: I
                        }
                    }
                }
            },
            [nb]: $E,
            [PV]: $E,
            [rb]: {
                ...Ts,
                handler: KE((e,t)=>{
                    t.scrollingDown && We(e)
                }
                )
            },
            [qV]: {
                ...Ts,
                handler: KE((e,t)=>{
                    t.scrollingDown || We(e)
                }
                )
            },
            [ib]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(tn, zV(We))
            },
            [ob]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(tn, KV(We))
            }
        }
    }
    );
    var Cb = {};
    Ge(Cb, {
        observeRequests: ()=>hU,
        startActionGroup: ()=>nn,
        startEngine: ()=>Ri,
        stopActionGroup: ()=>gr,
        stopAllActionGroups: ()=>Ob,
        stopEngine: ()=>Li
    });
    function hU(e) {
        Vt({
            store: e,
            select: ({ixRequest: t})=>t.preview,
            onChange: mU
        }),
        Vt({
            store: e,
            select: ({ixRequest: t})=>t.playback,
            onChange: yU
        }),
        Vt({
            store: e,
            select: ({ixRequest: t})=>t.stop,
            onChange: EU
        }),
        Vt({
            store: e,
            select: ({ixRequest: t})=>t.clear,
            onChange: bU
        })
    }
    function vU(e) {
        Vt({
            store: e,
            select: ({ixSession: t})=>t.mediaQueryKey,
            onChange: ()=>{
                Li(e),
                Ib({
                    store: e,
                    elementApi: De
                }),
                Ri({
                    store: e,
                    allowEvents: !0
                }),
                Tb()
            }
        })
    }
    function gU(e, t) {
        let r = Vt({
            store: e,
            select: ({ixSession: n})=>n.tick,
            onChange: n=>{
                t(n),
                r()
            }
        })
    }
    function mU({rawData: e, defer: t}, r) {
        let n = ()=>{
            Ri({
                store: r,
                rawData: e,
                allowEvents: !0
            }),
            Tb()
        }
        ;
        t ? setTimeout(n, 0) : n()
    }
    function Tb() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function yU(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: u, verbose: l=!0} = e
          , {rawData: _} = e;
        if (n && i && _ && s) {
            let d = _.actionLists[n];
            d && (_ = nU({
                actionList: d,
                actionItemId: i,
                rawData: _
            }))
        }
        if (Ri({
            store: t,
            rawData: _,
            allowEvents: a,
            testManual: u
        }),
        n && r === Ve.GENERAL_START_ACTION || xs(r)) {
            gr({
                store: t,
                actionListId: n
            }),
            xb({
                store: t,
                actionListId: n,
                eventId: o
            });
            let d = nn({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: l
            });
            l && d && t.dispatch(vr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }
    function EU({actionListId: e}, t) {
        e ? gr({
            store: t,
            actionListId: e
        }) : Ob({
            store: t
        }),
        Li(t)
    }
    function bU(e, t) {
        Li(t),
        Ib({
            store: t,
            elementApi: De
        })
    }
    function Ri({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(rs(t)),
        i.active || (e.dispatch(ns({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        r && (OU(e),
        _U(),
        e.getState().ixSession.hasDefinedMediaQueries && vU(e)),
        e.dispatch(is()),
        IU(e, n))
    }
    function _U() {
        let {documentElement: e} = document;
        e.className.indexOf(pb) === -1 && (e.className += ` ${pb}`)
    }
    function IU(e, t) {
        let r = n=>{
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(hi(n, o)),
            t ? gU(e, r) : requestAnimationFrame(r))
        }
        ;
        r(window.performance.now())
    }
    function Li(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(TU),
            sU(),
            e.dispatch(os())
        }
    }
    function TU({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function wU({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: u}) {
        let {ixData: l, ixSession: _} = e.getState()
          , {events: d} = l
          , E = d[n]
          , {eventTypeId: m} = E
          , y = {}
          , T = {}
          , O = []
          , {continuousActionGroups: x} = a
          , {id: P} = a;
        iU(m, i) && (P = oU(t, P));
        let C = _.hasBoundaryNodes && r ? Jr(r, Oi) : null;
        x.forEach(M=>{
            let {keyframe: D, actionItems: F} = M;
            F.forEach(K=>{
                let {actionTypeId: j} = K
                  , {target: $} = K.config;
                if (!$)
                    return;
                let ee = $.boundaryMode ? C : null
                  , H = uU($) + Os + j;
                if (T[H] = xU(T[H], D, K),
                !y[H]) {
                    y[H] = !0;
                    let {config: N} = K;
                    Ai({
                        config: N,
                        event: E,
                        eventTarget: r,
                        elementRoot: ee,
                        elementApi: De
                    }).forEach(I=>{
                        O.push({
                            element: I,
                            key: H
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        O.forEach(({element: M, key: D})=>{
            let F = T[D]
              , K = (0,
            mt.default)(F, "[0].actionItems[0]", {})
              , {actionTypeId: j} = K
              , $ = Ci(j) ? Ss(j)(M, K) : null
              , ee = As({
                element: M,
                actionItem: K,
                elementApi: De
            }, $);
            Cs({
                store: e,
                element: M,
                eventId: n,
                actionListId: o,
                actionItem: K,
                destination: ee,
                continuous: !0,
                parameterId: P,
                actionGroups: F,
                smoothing: s,
                restingValue: u,
                pluginInstance: $
            })
        }
        )
    }
    function xU(e=[], t, r) {
        let n = [...e], i;
        return n.some((o,a)=>o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = n.length,
        n.push({
            keyframe: t,
            actionItems: []
        })),
        n[i].actionItems.push(r),
        n
    }
    function OU(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: r} = t;
        wb(e),
        (0,
        mr.default)(r, (i,o)=>{
            let a = fb[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            NU({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: n} = e.getState();
        n.eventListeners.length && SU(e)
    }
    function SU(e) {
        let t = ()=>{
            wb(e)
        }
        ;
        AU.forEach(r=>{
            window.addEventListener(r, t),
            e.dispatch(pi(window, [r, t]))
        }
        ),
        t()
    }
    function wb(e) {
        let {ixSession: t, ixData: r} = e.getState()
          , n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: i} = r;
            e.dispatch(ls({
                width: n,
                mediaQueries: i
            }))
        }
    }
    function NU({logic: e, store: t, events: r}) {
        PU(r);
        let {types: n, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , s = CU(r, LU);
        if (!(0,
        gb.default)(s))
            return;
        (0,
        mr.default)(s, (d,E)=>{
            let m = r[E]
              , {action: y, id: T, mediaQueries: O=o.mediaQueryKeys} = m
              , {actionListId: x} = y.config;
            cU(O, o.mediaQueryKeys) || t.dispatch(fs()),
            y.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION && (Array.isArray(m.config) ? m.config : [m.config]).forEach(C=>{
                let {continuousParameterGroupId: M} = C
                  , D = (0,
                mt.default)(a, `${x}.continuousParameterGroups`, [])
                  , F = (0,
                vb.default)(D, ({id: $})=>$ === M)
                  , K = (C.smoothing || 0) / 100
                  , j = (C.restingState || 0) / 100;
                F && d.forEach(($,ee)=>{
                    let H = T + Os + ee;
                    wU({
                        store: t,
                        eventStateKey: H,
                        eventTarget: $,
                        eventId: T,
                        eventConfig: C,
                        actionListId: x,
                        parameterGroup: F,
                        smoothing: K,
                        restingValue: j
                    })
                }
                )
            }
            ),
            (y.actionTypeId === Ve.GENERAL_START_ACTION || xs(y.actionTypeId)) && xb({
                store: t,
                actionListId: x,
                eventId: T
            })
        }
        );
        let u = d=>{
            let {ixSession: E} = t.getState();
            RU(s, (m,y,T)=>{
                let O = r[y]
                  , x = E.eventState[T]
                  , {action: P, mediaQueries: C=o.mediaQueryKeys} = O;
                if (!Si(C, E.mediaQueryKey))
                    return;
                let M = (D={})=>{
                    let F = i({
                        store: t,
                        element: m,
                        event: O,
                        eventConfig: D,
                        nativeEvent: d,
                        eventStateKey: T
                    }, x);
                    lU(F, x) || t.dispatch(as(T, F))
                }
                ;
                P.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(M) : M()
            }
            )
        }
          , l = (0,
        bb.default)(u, pU)
          , _ = ({target: d=document, types: E, throttle: m})=>{
            E.split(" ").filter(Boolean).forEach(y=>{
                let T = m ? l : u;
                d.addEventListener(y, T),
                t.dispatch(pi(d, [y, T]))
            }
            )
        }
        ;
        Array.isArray(n) ? n.forEach(_) : typeof n == "string" && _(e)
    }
    function PU(e) {
        if (!dU)
            return;
        let t = {}
          , r = "";
        for (let n in e) {
            let {eventTypeId: i, target: o} = e[n]
              , a = ps(o);
            t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0,
            r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r,
            document.body.appendChild(n)
        }
    }
    function xb({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = n
          , s = a[r]
          , u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0,
            mt.default)(u, "actionItemGroups[0].actionItems", [])
              , _ = (0,
            mt.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Si(_, i.mediaQueryKey))
                return;
            l.forEach(d=>{
                let {config: E, actionTypeId: m} = d
                  , y = E?.target?.useEventTarget === !0 && E?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : E
                  , T = Ai({
                    config: y,
                    event: s,
                    elementApi: De
                })
                  , O = Ci(m);
                T.forEach(x=>{
                    let P = O ? Ss(m)(x, d) : null;
                    Cs({
                        destination: As({
                            element: x,
                            actionItem: d,
                            elementApi: De
                        }, P),
                        immediate: !0,
                        store: e,
                        element: x,
                        eventId: r,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: P
                    })
                }
                )
            }
            )
        }
    }
    function Ob({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        mr.default)(t, r=>{
            if (!r.continuous) {
                let {actionListId: n, verbose: i} = r;
                Rs(r, e),
                i && e.dispatch(vr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function gr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && r ? Jr(r, Oi) : null;
        (0,
        mr.default)(o, u=>{
            let l = (0,
            mt.default)(u, "actionItem.config.target.boundaryMode")
              , _ = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && _) {
                if (s && l && !hs(s, u.element))
                    return;
                Rs(u, e),
                u.verbose && e.dispatch(vr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function nn({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
        let {ixData: u, ixSession: l} = e.getState()
          , {events: _} = u
          , d = _[t] || {}
          , {mediaQueries: E=u.mediaQueryKeys} = d
          , m = (0,
        mt.default)(u, `actionLists.${i}`, {})
          , {actionItemGroups: y, useFirstGroupAsInitialState: T} = m;
        if (!y || !y.length)
            return !1;
        o >= y.length && (0,
        mt.default)(d, "config.loop") && (o = 0),
        o === 0 && T && o++;
        let x = (o === 0 || o === 1 && T) && xs(d.action?.actionTypeId) ? d.config.delay : void 0
          , P = (0,
        mt.default)(y, [o, "actionItems"], []);
        if (!P.length || !Si(E, l.mediaQueryKey))
            return !1;
        let C = l.hasBoundaryNodes && r ? Jr(r, Oi) : null
          , M = eU(P)
          , D = !1;
        return P.forEach((F,K)=>{
            let {config: j, actionTypeId: $} = F
              , ee = Ci($)
              , {target: H} = j;
            if (!H)
                return;
            let N = H.boundaryMode ? C : null;
            Ai({
                config: j,
                event: d,
                eventTarget: r,
                elementRoot: N,
                elementApi: De
            }).forEach((R,k)=>{
                let V = ee ? Ss($)(R, F) : null
                  , J = ee ? fU($)(R, F) : null;
                D = !0;
                let ne = M === K && k === 0
                  , G = tU({
                    element: R,
                    actionItem: F
                })
                  , U = As({
                    element: R,
                    actionItem: F,
                    elementApi: De
                }, V);
                Cs({
                    store: e,
                    element: R,
                    actionItem: F,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ne,
                    computedStyle: G,
                    destination: U,
                    immediate: a,
                    verbose: s,
                    pluginInstance: V,
                    pluginDuration: J,
                    instanceDelay: x
                })
            }
            )
        }
        ),
        D
    }
    function Cs(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: l, eventId: _} = n, d = !u, E = ZV(), {ixElements: m, ixSession: y, ixData: T} = t.getState(), O = QV(m, i), {refState: x} = m[O] || {}, P = vs(i), C = y.reducedMotion && Yo[o.actionTypeId], M;
        if (C && u)
            switch (T.events[_]?.eventTypeId) {
            case Ze.MOUSE_MOVE:
            case Ze.MOUSE_MOVE_IN_VIEWPORT:
                M = l;
                break;
            default:
                M = .5;
                break
            }
        let D = rU(i, x, r, o, De, s);
        if (t.dispatch(ss({
            instanceId: E,
            elementId: O,
            origin: D,
            refType: P,
            skipMotion: C,
            skipToValue: M,
            ...n
        })),
        Ab(document.body, "ix2-animation-started", E),
        a) {
            qU(t, E);
            return
        }
        Vt({
            store: t,
            select: ({ixInstances: F})=>F[E],
            onChange: Sb
        }),
        d && t.dispatch(vi(E, y.tick))
    }
    function Rs(e, t) {
        Ab(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: r, actionItem: n} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[r] || {};
        a === _b && aU(o, n, De),
        t.dispatch(us(e.id))
    }
    function Ab(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r),
        e.dispatchEvent(n)
    }
    function qU(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(vi(t, 0)),
        e.dispatch(hi(performance.now(), r));
        let {ixInstances: n} = e.getState();
        Sb(n[t], e)
    }
    function Sb(e, t) {
        let {active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: u, current: l, groupIndex: _, eventId: d, eventTarget: E, eventStateKey: m, actionListId: y, isCarrier: T, styleProp: O, verbose: x, pluginInstance: P} = e
          , {ixData: C, ixSession: M} = t.getState()
          , {events: D} = C
          , F = D[d] || {}
          , {mediaQueries: K=C.mediaQueryKeys} = F;
        if (Si(K, M.mediaQueryKey) && (n || r || i)) {
            if (l || u === $V && i) {
                t.dispatch(cs(o, s, l, a));
                let {ixElements: j} = t.getState()
                  , {ref: $, refType: ee, refState: H} = j[o] || {}
                  , N = H && H[s];
                (ee === _b || Ci(s)) && JV($, H, N, d, a, O, De, u, P)
            }
            if (i) {
                if (T) {
                    let j = nn({
                        store: t,
                        eventId: d,
                        eventTarget: E,
                        eventStateKey: m,
                        actionListId: y,
                        groupIndex: _ + 1,
                        verbose: x
                    });
                    x && !j && t.dispatch(vr({
                        actionListId: y,
                        isPlaying: !1
                    }))
                }
                Rs(e, t)
            }
        }
    }
    var vb, mt, gb, mb, yb, Eb, mr, bb, xi, YV, xs, Os, Oi, _b, $V, pb, Ai, QV, As, Vt, ZV, JV, Ib, eU, tU, rU, nU, iU, oU, Si, aU, sU, uU, cU, lU, Ci, Ss, fU, hb, dU, pU, AU, CU, RU, LU, ws = me(()=>{
        "use strict";
        vb = fe(wa()),
        mt = fe(Yn()),
        gb = fe(Bm()),
        mb = fe(hy()),
        yb = fe(gy()),
        Eb = fe(yy()),
        mr = fe(wy()),
        bb = fe(Ly());
        Ue();
        xi = fe(Gt());
        gi();
        Dy();
        db();
        YV = Object.keys(An),
        xs = e=>YV.includes(e),
        {COLON_DELIMITER: Os, BOUNDARY_SELECTOR: Oi, HTML_ELEMENT: _b, RENDER_GENERAL: $V, W_MOD_IX: pb} = Le,
        {getAffectedElements: Ai, getElementId: QV, getDestinationValues: As, observeStore: Vt, getInstanceId: ZV, renderHTMLElement: JV, clearAllStyles: Ib, getMaxDurationItemIndex: eU, getComputedStyle: tU, getInstanceOrigin: rU, reduceListToGroup: nU, shouldNamespaceEventParameter: iU, getNamespacedParameterId: oU, shouldAllowMediaQuery: Si, cleanupHTMLElement: aU, clearObjectCache: sU, stringifyTarget: uU, mediaQueriesEqual: cU, shallowEqual: lU} = xi.IX2VanillaUtils,
        {isPluginType: Ci, createPluginInstance: Ss, getPluginDuration: fU} = xi.IX2VanillaPlugins,
        hb = navigator.userAgent,
        dU = hb.match(/iPad/i) || hb.match(/iPhone/),
        pU = 12;
        AU = ["resize", "orientationchange"];
        CU = (e,t)=>(0,
        mb.default)((0,
        Eb.default)(e, t), yb.default),
        RU = (e,t)=>{
            (0,
            mr.default)(e, (r,n)=>{
                r.forEach((i,o)=>{
                    let a = n + Os + o;
                    t(i, n, a)
                }
                )
            }
            )
        }
        ,
        LU = e=>{
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ai({
                config: t,
                elementApi: De
            })
        }
    }
    );
    var Lb = c(yt=>{
        "use strict";
        var FU = hn().default
          , MU = du().default;
        Object.defineProperty(yt, "__esModule", {
            value: !0
        });
        yt.actions = void 0;
        yt.destroy = Rb;
        yt.init = UU;
        yt.setEnv = VU;
        yt.store = void 0;
        Ql();
        var DU = jo()
          , kU = MU((Tm(),
        rt(Im)))
          , Ls = (ws(),
        rt(Cb))
          , GU = FU((gi(),
        rt(Py)));
        yt.actions = GU;
        var Ns = yt.store = (0,
        DU.createStore)(kU.default);
        function VU(e) {
            e() && (0,
            Ls.observeRequests)(Ns)
        }
        function UU(e) {
            Rb(),
            (0,
            Ls.startEngine)({
                store: Ns,
                rawData: e,
                allowEvents: !0
            })
        }
        function Rb() {
            (0,
            Ls.stopEngine)(Ns)
        }
    }
    );
    var Fb = c((pz,qb)=>{
        "use strict";
        var Nb = qe()
          , Pb = Lb();
        Pb.setEnv(Nb.env);
        Nb.define("ix2", qb.exports = function() {
            return Pb
        }
        )
    }
    );
    var Db = c((hz,Mb)=>{
        "use strict";
        var yr = qe();
        yr.define("links", Mb.exports = function(e, t) {
            var r = {}, n = e(window), i, o = yr.env(), a = window.location, s = document.createElement("a"), u = "w--current", l = /index\.(html|php)$/, _ = /\/$/, d, E;
            r.ready = r.design = r.preview = m;
            function m() {
                i = o && yr.env("design"),
                E = yr.env("slug") || a.pathname || "",
                yr.scroll.off(T),
                d = [];
                for (var x = document.links, P = 0; P < x.length; ++P)
                    y(x[P]);
                d.length && (yr.scroll.on(T),
                T())
            }
            function y(x) {
                if (!x.getAttribute("hreflang")) {
                    var P = i && x.getAttribute("href-disabled") || x.getAttribute("href");
                    if (s.href = P,
                    !(P.indexOf(":") >= 0)) {
                        var C = e(x);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var M = e(s.hash);
                            M.length && d.push({
                                link: C,
                                sec: M,
                                active: !1
                            });
                            return
                        }
                        if (!(P === "#" || P === "")) {
                            var D = s.href === a.href || P === E || l.test(P) && _.test(E);
                            O(C, u, D)
                        }
                    }
                }
            }
            function T() {
                var x = n.scrollTop()
                  , P = n.height();
                t.each(d, function(C) {
                    if (!C.link.attr("hreflang")) {
                        var M = C.link
                          , D = C.sec
                          , F = D.offset().top
                          , K = D.outerHeight()
                          , j = P * .5
                          , $ = D.is(":visible") && F + K - j >= x && F + j <= x + P;
                        C.active !== $ && (C.active = $,
                        O(M, u, $))
                    }
                })
            }
            function O(x, P, C) {
                var M = x.hasClass(P);
                C && M || !C && !M || (C ? x.addClass(P) : x.removeClass(P))
            }
            return r
        }
        )
    }
    );
    var Gb = c((vz,kb)=>{
        "use strict";
        var Ni = qe();
        Ni.define("scroll", kb.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = y() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(N) {
                window.setTimeout(N, 15)
            }
              , u = Ni.env("editor") ? ".w-editor-body" : "body"
              , l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
              , _ = 'a[href="#"]'
              , d = 'a[href*="#"]:not(.w-tab-link):not(' + _ + ")"
              , E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , m = document.createElement("style");
            m.appendChild(document.createTextNode(E));
            function y() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var T = /^#[a-zA-Z0-9][\w:.-]*$/;
            function O(N) {
                return T.test(N.hash) && N.host + N.pathname === r.host + r.pathname
            }
            let x = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function P() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || x.matches
            }
            function C(N, I) {
                var R;
                switch (I) {
                case "add":
                    R = N.attr("tabindex"),
                    R ? N.attr("data-wf-tabindex-swap", R) : N.attr("tabindex", "-1");
                    break;
                case "remove":
                    R = N.attr("data-wf-tabindex-swap"),
                    R ? (N.attr("tabindex", R),
                    N.removeAttr("data-wf-tabindex-swap")) : N.removeAttr("tabindex");
                    break
                }
                N.toggleClass("wf-force-outline-none", I === "add")
            }
            function M(N) {
                var I = N.currentTarget;
                if (!(Ni.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className))) {
                    var R = O(I) ? I.hash : "";
                    if (R !== "") {
                        var k = e(R);
                        k.length && (N && (N.preventDefault(),
                        N.stopPropagation()),
                        D(R, N),
                        window.setTimeout(function() {
                            F(k, function() {
                                C(k, "add"),
                                k.get(0).focus({
                                    preventScroll: !0
                                }),
                                C(k, "remove")
                            })
                        }, N ? 0 : 300))
                    }
                }
            }
            function D(N) {
                if (r.hash !== N && n && n.pushState && !(Ni.env.chrome && r.protocol === "file:")) {
                    var I = n.state && n.state.hash;
                    I !== N && n.pushState({
                        hash: N
                    }, "", N)
                }
            }
            function F(N, I) {
                var R = i.scrollTop()
                  , k = K(N);
                if (R !== k) {
                    var V = j(N, R, k)
                      , J = Date.now()
                      , ne = function() {
                        var G = Date.now() - J;
                        window.scroll(0, $(R, k, G, V)),
                        G <= V ? s(ne) : typeof I == "function" && I()
                    };
                    s(ne)
                }
            }
            function K(N) {
                var I = e(l)
                  , R = I.css("position") === "fixed" ? I.outerHeight() : 0
                  , k = N.offset().top - R;
                if (N.data("scroll") === "mid") {
                    var V = i.height() - R
                      , J = N.outerHeight();
                    J < V && (k -= Math.round((V - J) / 2))
                }
                return k
            }
            function j(N, I, R) {
                if (P())
                    return 0;
                var k = 1;
                return a.add(N).each(function(V, J) {
                    var ne = parseFloat(J.getAttribute("data-scroll-time"));
                    !isNaN(ne) && ne >= 0 && (k = ne)
                }),
                (472.143 * Math.log(Math.abs(I - R) + 125) - 2e3) * k
            }
            function $(N, I, R, k) {
                return R > k ? I : N + (I - N) * ee(R / k)
            }
            function ee(N) {
                return N < .5 ? 4 * N * N * N : (N - 1) * (2 * N - 2) * (2 * N - 2) + 1
            }
            function H() {
                var {WF_CLICK_EMPTY: N, WF_CLICK_SCROLL: I} = t;
                o.on(I, d, M),
                o.on(N, _, function(R) {
                    R.preventDefault()
                }),
                document.head.insertBefore(m, document.head.firstChild)
            }
            return {
                ready: H
            }
        }
        )
    }
    );
    var Ub = c((gz,Vb)=>{
        "use strict";
        var BU = qe();
        BU.define("touch", Vb.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new n(o) : null
            }
            ;
            function n(o) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), l, _;
                o.addEventListener("touchstart", d, !1),
                o.addEventListener("touchmove", E, !1),
                o.addEventListener("touchend", m, !1),
                o.addEventListener("touchcancel", y, !1),
                o.addEventListener("mousedown", d, !1),
                o.addEventListener("mousemove", E, !1),
                o.addEventListener("mouseup", m, !1),
                o.addEventListener("mouseout", y, !1);
                function d(O) {
                    var x = O.touches;
                    x && x.length > 1 || (a = !0,
                    x ? (s = !0,
                    l = x[0].clientX) : l = O.clientX,
                    _ = l)
                }
                function E(O) {
                    if (a) {
                        if (s && O.type === "mousemove") {
                            O.preventDefault(),
                            O.stopPropagation();
                            return
                        }
                        var x = O.touches
                          , P = x ? x[0].clientX : O.clientX
                          , C = P - _;
                        _ = P,
                        Math.abs(C) > u && r && String(r()) === "" && (i("swipe", O, {
                            direction: C > 0 ? "right" : "left"
                        }),
                        y())
                    }
                }
                function m(O) {
                    if (a && (a = !1,
                    s && O.type === "mouseup")) {
                        O.preventDefault(),
                        O.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function y() {
                    a = !1
                }
                function T() {
                    o.removeEventListener("touchstart", d, !1),
                    o.removeEventListener("touchmove", E, !1),
                    o.removeEventListener("touchend", m, !1),
                    o.removeEventListener("touchcancel", y, !1),
                    o.removeEventListener("mousedown", d, !1),
                    o.removeEventListener("mousemove", E, !1),
                    o.removeEventListener("mouseup", m, !1),
                    o.removeEventListener("mouseout", y, !1),
                    o = null
                }
                this.destroy = T
            }
            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var Bb = c(Ps=>{
        "use strict";
        Object.defineProperty(Ps, "__esModule", {
            value: !0
        });
        Ps.default = WU;
        function WU(e, t, r, n, i, o, a, s, u, l, _, d, E) {
            return function(m) {
                e(m);
                var y = m.form
                  , T = {
                    name: y.attr("data-name") || y.attr("name") || "Untitled Form",
                    pageId: y.attr("data-wf-page-id") || "",
                    elementId: y.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(y.html()),
                    trackingCookies: n()
                };
                let O = y.attr("data-wf-flow");
                O && (T.wfFlow = O),
                i(m);
                var x = o(y, T.fields);
                if (x)
                    return a(x);
                if (T.fileUploads = s(y),
                u(m),
                !l) {
                    _(m);
                    return
                }
                d.ajax({
                    url: E,
                    type: "POST",
                    data: T,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(P) {
                    P && P.code === 200 && (m.success = !0),
                    _(m)
                }).fail(function() {
                    _(m)
                })
            }
        }
    }
    );
    var Hb = c((yz,Wb)=>{
        "use strict";
        var Pi = qe();
        Pi.define("forms", Wb.exports = function(e, t) {
            var r = {}, n = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", u, l = /e(-)?mail/i, _ = /^\S+@\S+$/, d = window.alert, E = Pi.env(), m, y, T, O = /list-manage[1-9]?.com/i, x = t.debounce(function() {
                d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                P(),
                !E && !m && M()
            }
            ;
            function P() {
                u = e("html").attr("data-wf-site"),
                y = "https://webflow.com/api/v1/form/" + u,
                a && y.indexOf("https://webflow.com") >= 0 && (y = y.replace("https://webflow.com", "https://formdata.webflow.com")),
                T = `${y}/signFile`,
                i = e(s + " form"),
                i.length && i.each(C)
            }
            function C(G, U) {
                var v = e(U)
                  , p = e.data(U, s);
                p || (p = e.data(U, s, {
                    form: v
                })),
                D(p);
                var h = v.closest("div.w-form");
                p.done = h.find("> .w-form-done"),
                p.fail = h.find("> .w-form-fail"),
                p.fileUploads = h.find(".w-file-upload"),
                p.fileUploads.each(function(X) {
                    V(X, p)
                });
                var g = p.form.attr("aria-label") || p.form.attr("data-name") || "Form";
                p.done.attr("aria-label") || p.form.attr("aria-label", g),
                p.done.attr("tabindex", "-1"),
                p.done.attr("role", "region"),
                p.done.attr("aria-label") || p.done.attr("aria-label", g + " success"),
                p.fail.attr("tabindex", "-1"),
                p.fail.attr("role", "region"),
                p.fail.attr("aria-label") || p.fail.attr("aria-label", g + " failure");
                var B = p.action = v.attr("action");
                if (p.handler = null,
                p.redirect = v.attr("data-redirect"),
                O.test(B)) {
                    p.handler = I;
                    return
                }
                if (!B) {
                    if (u) {
                        p.handler = (()=>{
                            let X = Bb().default;
                            return X(D, o, Pi, ee, k, K, d, j, F, u, R, e, y)
                        }
                        )();
                        return
                    }
                    x()
                }
            }
            function M() {
                m = !0,
                n.on("submit", s + " form", function(X) {
                    var Q = e.data(this, s);
                    Q.handler && (Q.evt = X,
                    Q.handler(Q))
                });
                let G = ".w-checkbox-input"
                  , U = ".w-radio-input"
                  , v = "w--redirected-checked"
                  , p = "w--redirected-focus"
                  , h = "w--redirected-focus-visible"
                  , g = ":focus-visible, [data-wf-focus-visible]"
                  , B = [["checkbox", G], ["radio", U]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + G + ")", X=>{
                    e(X.target).siblings(G).toggleClass(v)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', X=>{
                    e(`input[name="${X.target.name}"]:not(${G})`).map((te,de)=>e(de).siblings(U).removeClass(v));
                    let Q = e(X.target);
                    Q.hasClass("w-radio-input") || Q.siblings(U).addClass(v)
                }
                ),
                B.forEach(([X,Q])=>{
                    n.on("focus", s + ` form input[type="${X}"]:not(` + Q + ")", te=>{
                        e(te.target).siblings(Q).addClass(p),
                        e(te.target).filter(g).siblings(Q).addClass(h)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${X}"]:not(` + Q + ")", te=>{
                        e(te.target).siblings(Q).removeClass(`${p} ${h}`)
                    }
                    )
                }
                )
            }
            function D(G) {
                var U = G.btn = G.form.find(':input[type="submit"]');
                G.wait = G.btn.attr("data-wait") || null,
                G.success = !1,
                U.prop("disabled", !1),
                G.label && U.val(G.label)
            }
            function F(G) {
                var U = G.btn
                  , v = G.wait;
                U.prop("disabled", !0),
                v && (G.label = U.val(),
                U.val(v))
            }
            function K(G, U) {
                var v = null;
                return U = U || {},
                G.find(':input:not([type="submit"]):not([type="file"])').each(function(p, h) {
                    var g = e(h)
                      , B = g.attr("type")
                      , X = g.attr("data-name") || g.attr("name") || "Field " + (p + 1);
                    X = encodeURIComponent(X);
                    var Q = g.val();
                    if (B === "checkbox")
                        Q = g.is(":checked");
                    else if (B === "radio") {
                        if (U[X] === null || typeof U[X] == "string")
                            return;
                        Q = G.find('input[name="' + g.attr("name") + '"]:checked').val() || null
                    }
                    typeof Q == "string" && (Q = e.trim(Q)),
                    U[X] = Q,
                    v = v || H(g, B, X, Q)
                }),
                v
            }
            function j(G) {
                var U = {};
                return G.find(':input[type="file"]').each(function(v, p) {
                    var h = e(p)
                      , g = h.attr("data-name") || h.attr("name") || "File " + (v + 1)
                      , B = h.attr("data-value");
                    typeof B == "string" && (B = e.trim(B)),
                    U[g] = B
                }),
                U
            }
            let $ = {
                _mkto_trk: "marketo"
            };
            function ee() {
                return document.cookie.split("; ").reduce(function(U, v) {
                    let p = v.split("=")
                      , h = p[0];
                    if (h in $) {
                        let g = $[h]
                          , B = p.slice(1).join("=");
                        U[g] = B
                    }
                    return U
                }, {})
            }
            function H(G, U, v, p) {
                var h = null;
                return U === "password" ? h = "Passwords cannot be submitted." : G.attr("required") ? p ? l.test(G.attr("type")) && (_.test(p) || (h = "Please enter a valid email address for: " + v)) : h = "Please fill out the required field: " + v : v === "g-recaptcha-response" && !p && (h = "Please confirm you\u2019re not a robot."),
                h
            }
            function N(G) {
                k(G),
                R(G)
            }
            function I(G) {
                D(G);
                var U = G.form
                  , v = {};
                if (/^https/.test(o.href) && !/^https/.test(G.action)) {
                    U.attr("method", "post");
                    return
                }
                k(G);
                var p = K(U, v);
                if (p)
                    return d(p);
                F(G);
                var h;
                t.each(v, function(Q, te) {
                    l.test(te) && (v.EMAIL = Q),
                    /^((full[ _-]?)?name)$/i.test(te) && (h = Q),
                    /^(first[ _-]?name)$/i.test(te) && (v.FNAME = Q),
                    /^(last[ _-]?name)$/i.test(te) && (v.LNAME = Q)
                }),
                h && !v.FNAME && (h = h.split(" "),
                v.FNAME = h[0],
                v.LNAME = v.LNAME || h[1]);
                var g = G.action.replace("/post?", "/post-json?") + "&c=?"
                  , B = g.indexOf("u=") + 2;
                B = g.substring(B, g.indexOf("&", B));
                var X = g.indexOf("id=") + 3;
                X = g.substring(X, g.indexOf("&", X)),
                v["b_" + B + "_" + X] = "",
                e.ajax({
                    url: g,
                    data: v,
                    dataType: "jsonp"
                }).done(function(Q) {
                    G.success = Q.result === "success" || /already/.test(Q.msg),
                    G.success || console.info("MailChimp error: " + Q.msg),
                    R(G)
                }).fail(function() {
                    R(G)
                })
            }
            function R(G) {
                var U = G.form
                  , v = G.redirect
                  , p = G.success;
                if (p && v) {
                    Pi.location(v);
                    return
                }
                G.done.toggle(p),
                G.fail.toggle(!p),
                p ? G.done.focus() : G.fail.focus(),
                U.toggle(!p),
                D(G)
            }
            function k(G) {
                G.evt && G.evt.preventDefault(),
                G.evt = null
            }
            function V(G, U) {
                if (!U.fileUploads || !U.fileUploads[G])
                    return;
                var v, p = e(U.fileUploads[G]), h = p.find("> .w-file-upload-default"), g = p.find("> .w-file-upload-uploading"), B = p.find("> .w-file-upload-success"), X = p.find("> .w-file-upload-error"), Q = h.find(".w-file-upload-input"), te = h.find(".w-file-upload-label"), de = te.children(), oe = X.find(".w-file-upload-error-msg"), b = B.find(".w-file-upload-file"), W = B.find(".w-file-remove-link"), Z = b.find(".w-file-upload-file-name"), z = oe.attr("data-w-size-error"), ce = oe.attr("data-w-type-error"), Te = oe.attr("data-w-generic-error");
                if (E || te.on("click keydown", function(A) {
                    A.type === "keydown" && A.which !== 13 && A.which !== 32 || (A.preventDefault(),
                    Q.click())
                }),
                te.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                E)
                    Q.on("click", function(A) {
                        A.preventDefault()
                    }),
                    te.on("click", function(A) {
                        A.preventDefault()
                    }),
                    de.on("click", function(A) {
                        A.preventDefault()
                    });
                else {
                    W.on("click keydown", function(A) {
                        if (A.type === "keydown") {
                            if (A.which !== 13 && A.which !== 32)
                                return;
                            A.preventDefault()
                        }
                        Q.removeAttr("data-value"),
                        Q.val(""),
                        Z.html(""),
                        h.toggle(!0),
                        B.toggle(!1),
                        te.focus()
                    }),
                    Q.on("change", function(A) {
                        v = A.target && A.target.files && A.target.files[0],
                        v && (h.toggle(!1),
                        X.toggle(!1),
                        g.toggle(!0),
                        g.focus(),
                        Z.text(v.name),
                        L() || F(U),
                        U.fileUploads[G].uploading = !0,
                        J(v, w))
                    });
                    var Re = te.outerHeight();
                    Q.height(Re),
                    Q.width(1)
                }
                function f(A) {
                    var q = A.responseJSON && A.responseJSON.msg
                      , re = Te;
                    typeof q == "string" && q.indexOf("InvalidFileTypeError") === 0 ? re = ce : typeof q == "string" && q.indexOf("MaxFileSizeError") === 0 && (re = z),
                    oe.text(re),
                    Q.removeAttr("data-value"),
                    Q.val(""),
                    g.toggle(!1),
                    h.toggle(!0),
                    X.toggle(!0),
                    X.focus(),
                    U.fileUploads[G].uploading = !1,
                    L() || D(U)
                }
                function w(A, q) {
                    if (A)
                        return f(A);
                    var re = q.fileName
                      , ae = q.postData
                      , ve = q.fileId
                      , Y = q.s3Url;
                    Q.attr("data-value", ve),
                    ne(Y, ae, v, re, S)
                }
                function S(A) {
                    if (A)
                        return f(A);
                    g.toggle(!1),
                    B.css("display", "inline-block"),
                    B.focus(),
                    U.fileUploads[G].uploading = !1,
                    L() || D(U)
                }
                function L() {
                    var A = U.fileUploads && U.fileUploads.toArray() || [];
                    return A.some(function(q) {
                        return q.uploading
                    })
                }
            }
            function J(G, U) {
                var v = new URLSearchParams({
                    name: G.name,
                    size: G.size
                });
                e.ajax({
                    type: "GET",
                    url: `${T}?${v}`,
                    crossDomain: !0
                }).done(function(p) {
                    U(null, p)
                }).fail(function(p) {
                    U(p)
                })
            }
            function ne(G, U, v, p, h) {
                var g = new FormData;
                for (var B in U)
                    g.append(B, U[B]);
                g.append("file", v, p),
                e.ajax({
                    type: "POST",
                    url: G,
                    data: g,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    h(null)
                }).fail(function(X) {
                    h(X)
                })
            }
            return r
        }
        )
    }
    );
    var zb = c((Ez,jb)=>{
        "use strict";
        var qs = qe()
          , Xb = "w-condition-invisible"
          , HU = "." + Xb;
        function XU(e) {
            return e.filter(function(t) {
                return !an(t)
            })
        }
        function an(e) {
            return !!(e.$el && e.$el.closest(HU).length)
        }
        function Fs(e, t) {
            for (var r = e; r >= 0; r--)
                if (!an(t[r]))
                    return r;
            return -1
        }
        function Ms(e, t) {
            for (var r = e; r <= t.length - 1; r++)
                if (!an(t[r]))
                    return r;
            return -1
        }
        function jU(e, t) {
            return Fs(e - 1, t) === -1
        }
        function zU(e, t) {
            return Ms(e + 1, t) === -1
        }
        function on(e, t) {
            e.attr("aria-label") || e.attr("aria-label", t)
        }
        function KU(e, t, r, n) {
            var i = r.tram, o = Array.isArray, a = "w-lightbox", s = a + "-", u = /(^|\s+)/g, l = [], _, d, E, m = [];
            function y(p, h) {
                return l = o(p) ? p : [p],
                d || y.build(),
                XU(l).length > 1 && (d.items = d.empty,
                l.forEach(function(g, B) {
                    var X = U("thumbnail")
                      , Q = U("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(X);
                    on(Q, `show item ${B + 1} of ${l.length}`),
                    an(g) && Q.addClass(Xb),
                    d.items = d.items.add(Q),
                    ee(g.thumbnailUrl || g.url, function(te) {
                        te.prop("width") > te.prop("height") ? V(te, "wide") : V(te, "tall"),
                        X.append(V(te, "thumbnail-image"))
                    })
                }),
                d.strip.empty().append(d.items),
                V(d.content, "group")),
                i(J(d.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }),
                V(d.html, "noscroll"),
                y.show(h || 0)
            }
            y.build = function() {
                return y.destroy(),
                d = {
                    html: r(t.documentElement),
                    empty: r()
                },
                d.arrowLeft = U("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"),
                d.arrowRight = U("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"),
                d.close = U("control close").attr("role", "button"),
                on(d.arrowLeft, "previous image"),
                on(d.arrowRight, "next image"),
                on(d.close, "close lightbox"),
                d.spinner = U("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"),
                d.strip = U("strip").attr("role", "tablist"),
                E = new I(d.spinner,R("hide")),
                d.content = U("content").append(d.spinner, d.arrowLeft, d.arrowRight, d.close),
                d.container = U("container").append(d.content, d.strip),
                d.lightbox = U("backdrop hide").append(d.container),
                d.strip.on("click", k("item"), C),
                d.content.on("swipe", M).on("click", k("left"), O).on("click", k("right"), x).on("click", k("close"), P).on("click", k("image, caption"), x),
                d.container.on("click", k("view"), P).on("dragstart", k("img"), F),
                d.lightbox.on("keydown", K).on("focusin", D),
                r(n).append(d.lightbox),
                y
            }
            ,
            y.destroy = function() {
                d && (J(d.html, "noscroll"),
                d.lightbox.remove(),
                d = void 0)
            }
            ,
            y.show = function(p) {
                if (p !== _) {
                    var h = l[p];
                    if (!h)
                        return y.hide();
                    if (an(h)) {
                        if (p < _) {
                            var g = Fs(p - 1, l);
                            p = g > -1 ? g : p
                        } else {
                            var B = Ms(p + 1, l);
                            p = B > -1 ? B : p
                        }
                        h = l[p]
                    }
                    var X = _;
                    _ = p,
                    d.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"),
                    E.show();
                    var Q = h.html && v(h.width, h.height) || h.url;
                    return ee(Q, function(te) {
                        if (p !== _)
                            return;
                        var de = U("figure", "figure").append(V(te, "image")), oe = U("frame").append(de), b = U("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(oe), W, Z;
                        h.html && (W = r(h.html),
                        Z = W.is("iframe"),
                        Z && W.on("load", z),
                        de.append(V(W, "embed"))),
                        h.caption && de.append(U("caption", "figcaption").text(h.caption)),
                        d.spinner.before(b),
                        Z || z();
                        function z() {
                            if (d.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"),
                            E.hide(),
                            p !== _) {
                                b.remove();
                                return
                            }
                            let ce = jU(p, l);
                            ne(d.arrowLeft, "inactive", ce),
                            G(d.arrowLeft, ce),
                            ce && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                            let Te = zU(p, l);
                            if (ne(d.arrowRight, "inactive", Te),
                            G(d.arrowRight, Te),
                            Te && d.arrowRight.is(":focus") && d.arrowLeft.focus(),
                            d.view ? (i(d.view).add("opacity .3s").start({
                                opacity: 0
                            }).then(H(d.view)),
                            i(b).add("opacity .3s").add("transform .3s").set({
                                x: p > X ? "80px" : "-80px"
                            }).start({
                                opacity: 1,
                                x: 0
                            })) : b.css("opacity", 1),
                            d.view = b,
                            d.view.prop("tabIndex", 0),
                            d.items) {
                                J(d.items, "active"),
                                d.items.removeAttr("aria-selected");
                                var Re = d.items.eq(p);
                                V(Re, "active"),
                                Re.attr("aria-selected", !0),
                                N(Re)
                            }
                        }
                    }),
                    d.close.prop("tabIndex", 0),
                    r(":focus").addClass("active-lightbox"),
                    m.length === 0 && (r("body").children().each(function() {
                        r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (m.push({
                            node: r(this),
                            hidden: r(this).attr("aria-hidden"),
                            tabIndex: r(this).attr("tabIndex")
                        }),
                        r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }),
                    d.close.focus()),
                    y
                }
            }
            ,
            y.hide = function() {
                return i(d.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then($),
                y
            }
            ,
            y.prev = function() {
                var p = Fs(_ - 1, l);
                p > -1 && y.show(p)
            }
            ,
            y.next = function() {
                var p = Ms(_ + 1, l);
                p > -1 && y.show(p)
            }
            ;
            function T(p) {
                return function(h) {
                    this === h.target && (h.stopPropagation(),
                    h.preventDefault(),
                    p())
                }
            }
            var O = T(y.prev)
              , x = T(y.next)
              , P = T(y.hide)
              , C = function(p) {
                var h = r(this).index();
                p.preventDefault(),
                y.show(h)
            }
              , M = function(p, h) {
                p.preventDefault(),
                h.direction === "left" ? y.next() : h.direction === "right" && y.prev()
            }
              , D = function() {
                this.focus()
            };
            function F(p) {
                p.preventDefault()
            }
            function K(p) {
                var h = p.keyCode;
                h === 27 || j(h, "close") ? y.hide() : h === 37 || j(h, "left") ? y.prev() : h === 39 || j(h, "right") ? y.next() : j(h, "item") && r(":focus").click()
            }
            function j(p, h) {
                if (p !== 13 && p !== 32)
                    return !1;
                var g = r(":focus").attr("class")
                  , B = R(h).trim();
                return g.includes(B)
            }
            function $() {
                d && (d.strip.scrollLeft(0).empty(),
                J(d.html, "noscroll"),
                V(d.lightbox, "hide"),
                d.view && d.view.remove(),
                J(d.content, "group"),
                V(d.arrowLeft, "inactive"),
                V(d.arrowRight, "inactive"),
                _ = d.view = void 0,
                m.forEach(function(p) {
                    var h = p.node;
                    h && (p.hidden ? h.attr("aria-hidden", p.hidden) : h.removeAttr("aria-hidden"),
                    p.tabIndex ? h.attr("tabIndex", p.tabIndex) : h.removeAttr("tabIndex"))
                }),
                m = [],
                r(".active-lightbox").removeClass("active-lightbox").focus())
            }
            function ee(p, h) {
                var g = U("img", "img");
                return g.one("load", function() {
                    h(g)
                }),
                g.attr("src", p),
                g
            }
            function H(p) {
                return function() {
                    p.remove()
                }
            }
            function N(p) {
                var h = p.get(0), g = d.strip.get(0), B = h.offsetLeft, X = h.clientWidth, Q = g.scrollLeft, te = g.clientWidth, de = g.scrollWidth - te, oe;
                B < Q ? oe = Math.max(0, B + X - te) : B + X > te + Q && (oe = Math.min(B, de)),
                oe != null && i(d.strip).add("scroll-left 500ms").start({
                    "scroll-left": oe
                })
            }
            function I(p, h, g) {
                this.$element = p,
                this.className = h,
                this.delay = g || 200,
                this.hide()
            }
            I.prototype.show = function() {
                var p = this;
                p.timeoutId || (p.timeoutId = setTimeout(function() {
                    p.$element.removeClass(p.className),
                    delete p.timeoutId
                }, p.delay))
            }
            ,
            I.prototype.hide = function() {
                var p = this;
                if (p.timeoutId) {
                    clearTimeout(p.timeoutId),
                    delete p.timeoutId;
                    return
                }
                p.$element.addClass(p.className)
            }
            ;
            function R(p, h) {
                return p.replace(u, (h ? " ." : " ") + s)
            }
            function k(p) {
                return R(p, !0)
            }
            function V(p, h) {
                return p.addClass(R(h))
            }
            function J(p, h) {
                return p.removeClass(R(h))
            }
            function ne(p, h, g) {
                return p.toggleClass(R(h), g)
            }
            function G(p, h) {
                return p.attr("aria-hidden", h).attr("tabIndex", h ? -1 : 0)
            }
            function U(p, h) {
                return V(r(t.createElement(h || "div")), p)
            }
            function v(p, h) {
                var g = '<svg xmlns="http://www.w3.org/2000/svg" width="' + p + '" height="' + h + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(g)
            }
            return function() {
                var p = e.navigator.userAgent
                  , h = /(iPhone|iPad|iPod);[^OS]*OS (\d)/
                  , g = p.match(h)
                  , B = p.indexOf("Android ") > -1 && p.indexOf("Chrome") === -1;
                if (!B && (!g || g[2] > 7))
                    return;
                var X = t.createElement("style");
                t.head.appendChild(X),
                e.addEventListener("resize", Q, !0);
                function Q() {
                    var te = e.innerHeight
                      , de = e.innerWidth
                      , oe = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + te + "px}.w-lightbox-view {width:" + de + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * te + "px}.w-lightbox-image {max-width:" + de + "px;max-height:" + te + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * te + "px}.w-lightbox-strip {padding: 0 " + .01 * te + "px}.w-lightbox-item {width:" + .1 * te + "px;padding:" + .02 * te + "px " + .01 * te + "px}.w-lightbox-thumbnail {height:" + .1 * te + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * te + "px}.w-lightbox-content {margin-top:" + .02 * te + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * te + "px}.w-lightbox-image {max-width:" + .96 * de + "px;max-height:" + .96 * te + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * de + "px;max-height:" + .84 * te + "px}}";
                    X.textContent = oe
                }
                Q()
            }(),
            y
        }
        qs.define("lightbox", jb.exports = function(e) {
            var t = {}, r = qs.env(), n = KU(window, document, e, r ? "#lightbox-mountpoint" : "body"), i = e(document), o, a, s = ".w-lightbox", u;
            t.ready = t.design = t.preview = l;
            function l() {
                a = r && qs.env("design"),
                n.destroy(),
                u = {},
                o = i.find(s),
                o.webflowLightBox(),
                o.each(function() {
                    on(e(this), "open lightbox"),
                    e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function() {
                    var m = this;
                    e.each(m, function(y, T) {
                        var O = e.data(T, s);
                        O || (O = e.data(T, s, {
                            el: e(T),
                            mode: "images",
                            images: [],
                            embed: ""
                        })),
                        O.el.off(s),
                        _(O),
                        a ? O.el.on("setting" + s, _.bind(null, O)) : O.el.on("click" + s, d(O)).on("click" + s, function(x) {
                            x.preventDefault()
                        })
                    })
                }
            });
            function _(m) {
                var y = m.el.children(".w-json").html(), T, O;
                if (!y) {
                    m.items = [];
                    return
                }
                try {
                    y = JSON.parse(y)
                } catch (x) {
                    console.error("Malformed lightbox JSON configuration.", x)
                }
                E(y),
                y.items.forEach(function(x) {
                    x.$el = m.el
                }),
                T = y.group,
                T ? (O = u[T],
                O || (O = u[T] = []),
                m.items = O,
                y.items.length && (m.index = O.length,
                O.push.apply(O, y.items))) : (m.items = y.items,
                m.index = 0)
            }
            function d(m) {
                return function() {
                    m.items.length && n(m.items, m.index || 0)
                }
            }
            function E(m) {
                m.images && (m.images.forEach(function(y) {
                    y.type = "image"
                }),
                m.items = m.images),
                m.embed && (m.embed.type = "video",
                m.items = [m.embed]),
                m.groupId && (m.group = m.groupId)
            }
            return t
        }
        )
    }
    );
    var Yb = c((bz,Kb)=>{
        "use strict";
        var At = qe()
          , YU = br()
          , Ce = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        At.define("navbar", Kb.exports = function(e, t) {
            var r = {}, n = e.tram, i = e(window), o = e(document), a = t.debounce, s, u, l, _, d = At.env(), E = '<div class="w-nav-overlay" data-wf-ignore />', m = ".w-nav", y = "w--open", T = "w--nav-dropdown-open", O = "w--nav-dropdown-toggle-open", x = "w--nav-dropdown-list-open", P = "w--nav-link-open", C = YU.triggers, M = e();
            r.ready = r.design = r.preview = D,
            r.destroy = function() {
                M = e(),
                F(),
                u && u.length && u.each(ee)
            }
            ;
            function D() {
                l = d && At.env("design"),
                _ = At.env("editor"),
                s = e(document.body),
                u = o.find(m),
                u.length && (u.each($),
                F(),
                K())
            }
            function F() {
                At.resize.off(j)
            }
            function K() {
                At.resize.on(j)
            }
            function j() {
                u.each(h)
            }
            function $(b, W) {
                var Z = e(W)
                  , z = e.data(W, m);
                z || (z = e.data(W, m, {
                    open: !1,
                    el: Z,
                    config: {},
                    selectedIdx: -1
                })),
                z.menu = Z.find(".w-nav-menu"),
                z.links = z.menu.find(".w-nav-link"),
                z.dropdowns = z.menu.find(".w-dropdown"),
                z.dropdownToggle = z.menu.find(".w-dropdown-toggle"),
                z.dropdownList = z.menu.find(".w-dropdown-list"),
                z.button = Z.find(".w-nav-button"),
                z.container = Z.find(".w-container"),
                z.overlayContainerId = "w-nav-overlay-" + b,
                z.outside = v(z);
                var ce = Z.find(".w-nav-brand");
                ce && ce.attr("href") === "/" && ce.attr("aria-label") == null && ce.attr("aria-label", "home"),
                z.button.attr("style", "-webkit-user-select: text;"),
                z.button.attr("aria-label") == null && z.button.attr("aria-label", "menu"),
                z.button.attr("role", "button"),
                z.button.attr("tabindex", "0"),
                z.button.attr("aria-controls", z.overlayContainerId),
                z.button.attr("aria-haspopup", "menu"),
                z.button.attr("aria-expanded", "false"),
                z.el.off(m),
                z.button.off(m),
                z.menu.off(m),
                I(z),
                l ? (H(z),
                z.el.on("setting" + m, R(z))) : (N(z),
                z.button.on("click" + m, G(z)),
                z.menu.on("click" + m, "a", U(z)),
                z.button.on("keydown" + m, k(z)),
                z.el.on("keydown" + m, V(z))),
                h(b, W)
            }
            function ee(b, W) {
                var Z = e.data(W, m);
                Z && (H(Z),
                e.removeData(W, m))
            }
            function H(b) {
                b.overlay && (oe(b, !0),
                b.overlay.remove(),
                b.overlay = null)
            }
            function N(b) {
                b.overlay || (b.overlay = e(E).appendTo(b.el),
                b.overlay.attr("id", b.overlayContainerId),
                b.parent = b.menu.parent(),
                oe(b, !0))
            }
            function I(b) {
                var W = {}
                  , Z = b.config || {}
                  , z = W.animation = b.el.attr("data-animation") || "default";
                W.animOver = /^over/.test(z),
                W.animDirect = /left$/.test(z) ? -1 : 1,
                Z.animation !== z && b.open && t.defer(ne, b),
                W.easing = b.el.attr("data-easing") || "ease",
                W.easing2 = b.el.attr("data-easing2") || "ease";
                var ce = b.el.attr("data-duration");
                W.duration = ce != null ? Number(ce) : 400,
                W.docHeight = b.el.attr("data-doc-height"),
                b.config = W
            }
            function R(b) {
                return function(W, Z) {
                    Z = Z || {};
                    var z = i.width();
                    I(b),
                    Z.open === !0 && te(b, !0),
                    Z.open === !1 && oe(b, !0),
                    b.open && t.defer(function() {
                        z !== i.width() && ne(b)
                    })
                }
            }
            function k(b) {
                return function(W) {
                    switch (W.keyCode) {
                    case Ce.SPACE:
                    case Ce.ENTER:
                        return G(b)(),
                        W.preventDefault(),
                        W.stopPropagation();
                    case Ce.ESCAPE:
                        return oe(b),
                        W.preventDefault(),
                        W.stopPropagation();
                    case Ce.ARROW_RIGHT:
                    case Ce.ARROW_DOWN:
                    case Ce.HOME:
                    case Ce.END:
                        return b.open ? (W.keyCode === Ce.END ? b.selectedIdx = b.links.length - 1 : b.selectedIdx = 0,
                        J(b),
                        W.preventDefault(),
                        W.stopPropagation()) : (W.preventDefault(),
                        W.stopPropagation())
                    }
                }
            }
            function V(b) {
                return function(W) {
                    if (b.open)
                        switch (b.selectedIdx = b.links.index(document.activeElement),
                        W.keyCode) {
                        case Ce.HOME:
                        case Ce.END:
                            return W.keyCode === Ce.END ? b.selectedIdx = b.links.length - 1 : b.selectedIdx = 0,
                            J(b),
                            W.preventDefault(),
                            W.stopPropagation();
                        case Ce.ESCAPE:
                            return oe(b),
                            b.button.focus(),
                            W.preventDefault(),
                            W.stopPropagation();
                        case Ce.ARROW_LEFT:
                        case Ce.ARROW_UP:
                            return b.selectedIdx = Math.max(-1, b.selectedIdx - 1),
                            J(b),
                            W.preventDefault(),
                            W.stopPropagation();
                        case Ce.ARROW_RIGHT:
                        case Ce.ARROW_DOWN:
                            return b.selectedIdx = Math.min(b.links.length - 1, b.selectedIdx + 1),
                            J(b),
                            W.preventDefault(),
                            W.stopPropagation()
                        }
                }
            }
            function J(b) {
                if (b.links[b.selectedIdx]) {
                    var W = b.links[b.selectedIdx];
                    W.focus(),
                    U(W)
                }
            }
            function ne(b) {
                b.open && (oe(b, !0),
                te(b, !0))
            }
            function G(b) {
                return a(function() {
                    b.open ? oe(b) : te(b)
                })
            }
            function U(b) {
                return function(W) {
                    var Z = e(this)
                      , z = Z.attr("href");
                    if (!At.validClick(W.currentTarget)) {
                        W.preventDefault();
                        return
                    }
                    z && z.indexOf("#") === 0 && b.open && oe(b)
                }
            }
            function v(b) {
                return b.outside && o.off("click" + m, b.outside),
                function(W) {
                    var Z = e(W.target);
                    _ && Z.closest(".w-editor-bem-EditorOverlay").length || p(b, Z)
                }
            }
            var p = a(function(b, W) {
                if (b.open) {
                    var Z = W.closest(".w-nav-menu");
                    b.menu.is(Z) || oe(b)
                }
            });
            function h(b, W) {
                var Z = e.data(W, m)
                  , z = Z.collapsed = Z.button.css("display") !== "none";
                if (Z.open && !z && !l && oe(Z, !0),
                Z.container.length) {
                    var ce = B(Z);
                    Z.links.each(ce),
                    Z.dropdowns.each(ce)
                }
                Z.open && de(Z)
            }
            var g = "max-width";
            function B(b) {
                var W = b.container.css(g);
                return W === "none" && (W = ""),
                function(Z, z) {
                    z = e(z),
                    z.css(g, ""),
                    z.css(g) === "none" && z.css(g, W)
                }
            }
            function X(b, W) {
                W.setAttribute("data-nav-menu-open", "")
            }
            function Q(b, W) {
                W.removeAttribute("data-nav-menu-open")
            }
            function te(b, W) {
                if (b.open)
                    return;
                b.open = !0,
                b.menu.each(X),
                b.links.addClass(P),
                b.dropdowns.addClass(T),
                b.dropdownToggle.addClass(O),
                b.dropdownList.addClass(x),
                b.button.addClass(y);
                var Z = b.config
                  , z = Z.animation;
                (z === "none" || !n.support.transform || Z.duration <= 0) && (W = !0);
                var ce = de(b)
                  , Te = b.menu.outerHeight(!0)
                  , Re = b.menu.outerWidth(!0)
                  , f = b.el.height()
                  , w = b.el[0];
                if (h(0, w),
                C.intro(0, w),
                At.redraw.up(),
                l || o.on("click" + m, b.outside),
                W) {
                    A();
                    return
                }
                var S = "transform " + Z.duration + "ms " + Z.easing;
                if (b.overlay && (M = b.menu.prev(),
                b.overlay.show().append(b.menu)),
                Z.animOver) {
                    n(b.menu).add(S).set({
                        x: Z.animDirect * Re,
                        height: ce
                    }).start({
                        x: 0
                    }).then(A),
                    b.overlay && b.overlay.width(Re);
                    return
                }
                var L = f + Te;
                n(b.menu).add(S).set({
                    y: -L
                }).start({
                    y: 0
                }).then(A);
                function A() {
                    b.button.attr("aria-expanded", "true")
                }
            }
            function de(b) {
                var W = b.config
                  , Z = W.docHeight ? o.height() : s.height();
                return W.animOver ? b.menu.height(Z) : b.el.css("position") !== "fixed" && (Z -= b.el.outerHeight(!0)),
                b.overlay && b.overlay.height(Z),
                Z
            }
            function oe(b, W) {
                if (!b.open)
                    return;
                b.open = !1,
                b.button.removeClass(y);
                var Z = b.config;
                if ((Z.animation === "none" || !n.support.transform || Z.duration <= 0) && (W = !0),
                C.outro(0, b.el[0]),
                o.off("click" + m, b.outside),
                W) {
                    n(b.menu).stop(),
                    w();
                    return
                }
                var z = "transform " + Z.duration + "ms " + Z.easing2
                  , ce = b.menu.outerHeight(!0)
                  , Te = b.menu.outerWidth(!0)
                  , Re = b.el.height();
                if (Z.animOver) {
                    n(b.menu).add(z).start({
                        x: Te * Z.animDirect
                    }).then(w);
                    return
                }
                var f = Re + ce;
                n(b.menu).add(z).start({
                    y: -f
                }).then(w);
                function w() {
                    b.menu.height(""),
                    n(b.menu).set({
                        x: 0,
                        y: 0
                    }),
                    b.menu.each(Q),
                    b.links.removeClass(P),
                    b.dropdowns.removeClass(T),
                    b.dropdownToggle.removeClass(O),
                    b.dropdownList.removeClass(x),
                    b.overlay && b.overlay.children().length && (M.length ? b.menu.insertAfter(M) : b.menu.prependTo(b.parent),
                    b.overlay.attr("style", "").hide()),
                    b.el.triggerHandler("w-close"),
                    b.button.attr("aria-expanded", "false")
                }
            }
            return r
        }
        )
    }
    );
    var Zb = c((_z,Qb)=>{
        "use strict";
        var St = qe()
          , $U = br()
          , ft = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , $b = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        St.define("slider", Qb.exports = function(e, t) {
            var r = {}, n = e.tram, i = e(document), o, a, s = St.env(), u = ".w-slider", l = '<div class="w-slider-dot" data-wf-ignore />', _ = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', d = "w-slider-force-show", E = $U.triggers, m, y = !1;
            r.ready = function() {
                a = St.env("design"),
                T()
            }
            ,
            r.design = function() {
                a = !0,
                setTimeout(T, 1e3)
            }
            ,
            r.preview = function() {
                a = !1,
                T()
            }
            ,
            r.redraw = function() {
                y = !0,
                T(),
                y = !1
            }
            ,
            r.destroy = O;
            function T() {
                o = i.find(u),
                o.length && (o.each(C),
                !m && (O(),
                x()))
            }
            function O() {
                St.resize.off(P),
                St.redraw.off(r.redraw)
            }
            function x() {
                St.resize.on(P),
                St.redraw.on(r.redraw)
            }
            function P() {
                o.filter(":visible").each(V)
            }
            function C(v, p) {
                var h = e(p)
                  , g = e.data(p, u);
                g || (g = e.data(p, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: h,
                    config: {}
                })),
                g.mask = h.children(".w-slider-mask"),
                g.left = h.children(".w-slider-arrow-left"),
                g.right = h.children(".w-slider-arrow-right"),
                g.nav = h.children(".w-slider-nav"),
                g.slides = g.mask.children(".w-slide"),
                g.slides.each(E.reset),
                y && (g.maskWidth = 0),
                h.attr("role") === void 0 && h.attr("role", "region"),
                h.attr("aria-label") === void 0 && h.attr("aria-label", "carousel");
                var B = g.mask.attr("id");
                if (B || (B = "w-slider-mask-" + v,
                g.mask.attr("id", B)),
                !a && !g.ariaLiveLabel && (g.ariaLiveLabel = e(_).appendTo(g.mask)),
                g.left.attr("role", "button"),
                g.left.attr("tabindex", "0"),
                g.left.attr("aria-controls", B),
                g.left.attr("aria-label") === void 0 && g.left.attr("aria-label", "previous slide"),
                g.right.attr("role", "button"),
                g.right.attr("tabindex", "0"),
                g.right.attr("aria-controls", B),
                g.right.attr("aria-label") === void 0 && g.right.attr("aria-label", "next slide"),
                !n.support.transform) {
                    g.left.hide(),
                    g.right.hide(),
                    g.nav.hide(),
                    m = !0;
                    return
                }
                g.el.off(u),
                g.left.off(u),
                g.right.off(u),
                g.nav.off(u),
                M(g),
                a ? (g.el.on("setting" + u, I(g)),
                N(g),
                g.hasTimer = !1) : (g.el.on("swipe" + u, I(g)),
                g.left.on("click" + u, j(g)),
                g.right.on("click" + u, $(g)),
                g.left.on("keydown" + u, K(g, j)),
                g.right.on("keydown" + u, K(g, $)),
                g.nav.on("keydown" + u, "> div", I(g)),
                g.config.autoplay && !g.hasTimer && (g.hasTimer = !0,
                g.timerCount = 1,
                H(g)),
                g.el.on("mouseenter" + u, F(g, !0, "mouse")),
                g.el.on("focusin" + u, F(g, !0, "keyboard")),
                g.el.on("mouseleave" + u, F(g, !1, "mouse")),
                g.el.on("focusout" + u, F(g, !1, "keyboard"))),
                g.nav.on("click" + u, "> div", I(g)),
                s || g.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var X = h.filter(":hidden");
                X.addClass(d);
                var Q = h.parents(":hidden");
                Q.addClass(d),
                y || V(v, p),
                X.removeClass(d),
                Q.removeClass(d)
            }
            function M(v) {
                var p = {};
                p.crossOver = 0,
                p.animation = v.el.attr("data-animation") || "slide",
                p.animation === "outin" && (p.animation = "cross",
                p.crossOver = .5),
                p.easing = v.el.attr("data-easing") || "ease";
                var h = v.el.attr("data-duration");
                if (p.duration = h != null ? parseInt(h, 10) : 500,
                D(v.el.attr("data-infinite")) && (p.infinite = !0),
                D(v.el.attr("data-disable-swipe")) && (p.disableSwipe = !0),
                D(v.el.attr("data-hide-arrows")) ? p.hideArrows = !0 : v.config.hideArrows && (v.left.show(),
                v.right.show()),
                D(v.el.attr("data-autoplay"))) {
                    p.autoplay = !0,
                    p.delay = parseInt(v.el.attr("data-delay"), 10) || 2e3,
                    p.timerMax = parseInt(v.el.attr("data-autoplay-limit"), 10);
                    var g = "mousedown" + u + " touchstart" + u;
                    a || v.el.off(g).one(g, function() {
                        N(v)
                    })
                }
                var B = v.right.width();
                p.edge = B ? B + 40 : 100,
                v.config = p
            }
            function D(v) {
                return v === "1" || v === "true"
            }
            function F(v, p, h) {
                return function(g) {
                    if (p)
                        v.hasFocus[h] = p;
                    else if (e.contains(v.el.get(0), g.relatedTarget) || (v.hasFocus[h] = p,
                    v.hasFocus.mouse && h === "keyboard" || v.hasFocus.keyboard && h === "mouse"))
                        return;
                    p ? (v.ariaLiveLabel.attr("aria-live", "polite"),
                    v.hasTimer && N(v)) : (v.ariaLiveLabel.attr("aria-live", "off"),
                    v.hasTimer && H(v))
                }
            }
            function K(v, p) {
                return function(h) {
                    switch (h.keyCode) {
                    case ft.SPACE:
                    case ft.ENTER:
                        return p(v)(),
                        h.preventDefault(),
                        h.stopPropagation()
                    }
                }
            }
            function j(v) {
                return function() {
                    k(v, {
                        index: v.index - 1,
                        vector: -1
                    })
                }
            }
            function $(v) {
                return function() {
                    k(v, {
                        index: v.index + 1,
                        vector: 1
                    })
                }
            }
            function ee(v, p) {
                var h = null;
                p === v.slides.length && (T(),
                J(v)),
                t.each(v.anchors, function(g, B) {
                    e(g.els).each(function(X, Q) {
                        e(Q).index() === p && (h = B)
                    })
                }),
                h != null && k(v, {
                    index: h,
                    immediate: !0
                })
            }
            function H(v) {
                N(v);
                var p = v.config
                  , h = p.timerMax;
                h && v.timerCount++ > h || (v.timerId = window.setTimeout(function() {
                    v.timerId == null || a || ($(v)(),
                    H(v))
                }, p.delay))
            }
            function N(v) {
                window.clearTimeout(v.timerId),
                v.timerId = null
            }
            function I(v) {
                return function(p, h) {
                    h = h || {};
                    var g = v.config;
                    if (a && p.type === "setting") {
                        if (h.select === "prev")
                            return j(v)();
                        if (h.select === "next")
                            return $(v)();
                        if (M(v),
                        J(v),
                        h.select == null)
                            return;
                        ee(v, h.select);
                        return
                    }
                    if (p.type === "swipe")
                        return g.disableSwipe || St.env("editor") ? void 0 : h.direction === "left" ? $(v)() : h.direction === "right" ? j(v)() : void 0;
                    if (v.nav.has(p.target).length) {
                        var B = e(p.target).index();
                        if (p.type === "click" && k(v, {
                            index: B
                        }),
                        p.type === "keydown")
                            switch (p.keyCode) {
                            case ft.ENTER:
                            case ft.SPACE:
                                {
                                    k(v, {
                                        index: B
                                    }),
                                    p.preventDefault();
                                    break
                                }
                            case ft.ARROW_LEFT:
                            case ft.ARROW_UP:
                                {
                                    R(v.nav, Math.max(B - 1, 0)),
                                    p.preventDefault();
                                    break
                                }
                            case ft.ARROW_RIGHT:
                            case ft.ARROW_DOWN:
                                {
                                    R(v.nav, Math.min(B + 1, v.pages)),
                                    p.preventDefault();
                                    break
                                }
                            case ft.HOME:
                                {
                                    R(v.nav, 0),
                                    p.preventDefault();
                                    break
                                }
                            case ft.END:
                                {
                                    R(v.nav, v.pages),
                                    p.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function R(v, p) {
                var h = v.children().eq(p).focus();
                v.children().not(h)
            }
            function k(v, p) {
                p = p || {};
                var h = v.config
                  , g = v.anchors;
                v.previous = v.index;
                var B = p.index
                  , X = {};
                B < 0 ? (B = g.length - 1,
                h.infinite && (X.x = -v.endX,
                X.from = 0,
                X.to = g[0].width)) : B >= g.length && (B = 0,
                h.infinite && (X.x = g[g.length - 1].width,
                X.from = -g[g.length - 1].x,
                X.to = X.from - X.x)),
                v.index = B;
                var Q = v.nav.children().eq(B).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                v.nav.children().not(Q).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                h.hideArrows && (v.index === g.length - 1 ? v.right.hide() : v.right.show(),
                v.index === 0 ? v.left.hide() : v.left.show());
                var te = v.offsetX || 0
                  , de = v.offsetX = -g[v.index].x
                  , oe = {
                    x: de,
                    opacity: 1,
                    visibility: ""
                }
                  , b = e(g[v.index].els)
                  , W = e(g[v.previous] && g[v.previous].els)
                  , Z = v.slides.not(b)
                  , z = h.animation
                  , ce = h.easing
                  , Te = Math.round(h.duration)
                  , Re = p.vector || (v.index > v.previous ? 1 : -1)
                  , f = "opacity " + Te + "ms " + ce
                  , w = "transform " + Te + "ms " + ce;
                if (b.find($b).removeAttr("tabindex"),
                b.removeAttr("aria-hidden"),
                b.find("*").removeAttr("aria-hidden"),
                Z.find($b).attr("tabindex", "-1"),
                Z.attr("aria-hidden", "true"),
                Z.find("*").attr("aria-hidden", "true"),
                a || (b.each(E.intro),
                Z.each(E.outro)),
                p.immediate && !y) {
                    n(b).set(oe),
                    A();
                    return
                }
                if (v.index === v.previous)
                    return;
                if (a || v.ariaLiveLabel.text(`Slide ${B + 1} of ${g.length}.`),
                z === "cross") {
                    var S = Math.round(Te - Te * h.crossOver)
                      , L = Math.round(Te - S);
                    f = "opacity " + S + "ms " + ce,
                    n(W).set({
                        visibility: ""
                    }).add(f).start({
                        opacity: 0
                    }),
                    n(b).set({
                        visibility: "",
                        x: de,
                        opacity: 0,
                        zIndex: v.depth++
                    }).add(f).wait(L).then({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (z === "fade") {
                    n(W).set({
                        visibility: ""
                    }).stop(),
                    n(b).set({
                        visibility: "",
                        x: de,
                        opacity: 0,
                        zIndex: v.depth++
                    }).add(f).start({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (z === "over") {
                    oe = {
                        x: v.endX
                    },
                    n(W).set({
                        visibility: ""
                    }).stop(),
                    n(b).set({
                        visibility: "",
                        zIndex: v.depth++,
                        x: de + g[v.index].width * Re
                    }).add(w).start({
                        x: de
                    }).then(A);
                    return
                }
                h.infinite && X.x ? (n(v.slides.not(W)).set({
                    visibility: "",
                    x: X.x
                }).add(w).start({
                    x: de
                }),
                n(W).set({
                    visibility: "",
                    x: X.from
                }).add(w).start({
                    x: X.to
                }),
                v.shifted = W) : (h.infinite && v.shifted && (n(v.shifted).set({
                    visibility: "",
                    x: te
                }),
                v.shifted = null),
                n(v.slides).set({
                    visibility: ""
                }).add(w).start({
                    x: de
                }));
                function A() {
                    b = e(g[v.index].els),
                    Z = v.slides.not(b),
                    z !== "slide" && (oe.visibility = "hidden"),
                    n(Z).set(oe)
                }
            }
            function V(v, p) {
                var h = e.data(p, u);
                if (h) {
                    if (G(h))
                        return J(h);
                    a && U(h) && J(h)
                }
            }
            function J(v) {
                var p = 1
                  , h = 0
                  , g = 0
                  , B = 0
                  , X = v.maskWidth
                  , Q = X - v.config.edge;
                Q < 0 && (Q = 0),
                v.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                v.slides.each(function(de, oe) {
                    g - h > Q && (p++,
                    h += X,
                    v.anchors[p - 1] = {
                        els: [],
                        x: g,
                        width: 0
                    }),
                    B = e(oe).outerWidth(!0),
                    g += B,
                    v.anchors[p - 1].width += B,
                    v.anchors[p - 1].els.push(oe);
                    var b = de + 1 + " of " + v.slides.length;
                    e(oe).attr("aria-label", b),
                    e(oe).attr("role", "group")
                }),
                v.endX = g,
                a && (v.pages = null),
                v.nav.length && v.pages !== p && (v.pages = p,
                ne(v));
                var te = v.index;
                te >= p && (te = p - 1),
                k(v, {
                    immediate: !0,
                    index: te
                })
            }
            function ne(v) {
                var p = [], h, g = v.el.attr("data-nav-spacing");
                g && (g = parseFloat(g) + "px");
                for (var B = 0, X = v.pages; B < X; B++)
                    h = e(l),
                    h.attr("aria-label", "Show slide " + (B + 1) + " of " + X).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    v.nav.hasClass("w-num") && h.text(B + 1),
                    g != null && h.css({
                        "margin-left": g,
                        "margin-right": g
                    }),
                    p.push(h);
                v.nav.empty().append(p)
            }
            function G(v) {
                var p = v.mask.width();
                return v.maskWidth !== p ? (v.maskWidth = p,
                !0) : !1
            }
            function U(v) {
                var p = 0;
                return v.slides.each(function(h, g) {
                    p += e(g).outerWidth(!0)
                }),
                v.slidesWidth !== p ? (v.slidesWidth = p,
                !0) : !1
            }
            return r
        }
        )
    }
    );
    var e_ = c((Iz,Jb)=>{
        "use strict";
        var Ct = qe()
          , QU = br();
        Ct.define("tabs", Jb.exports = function(e) {
            var t = {}, r = e.tram, n = e(document), i, o, a = Ct.env, s = a.safari, u = a(), l = "data-w-tab", _ = "data-w-pane", d = ".w-tabs", E = "w--current", m = "w--tab-active", y = QU.triggers, T = !1;
            t.ready = t.design = t.preview = O,
            t.redraw = function() {
                T = !0,
                O(),
                T = !1
            }
            ,
            t.destroy = function() {
                i = n.find(d),
                i.length && (i.each(C),
                x())
            }
            ;
            function O() {
                o = u && Ct.env("design"),
                i = n.find(d),
                i.length && (i.each(M),
                Ct.env("preview") && !T && i.each(C),
                x(),
                P())
            }
            function x() {
                Ct.redraw.off(t.redraw)
            }
            function P() {
                Ct.redraw.on(t.redraw)
            }
            function C(H, N) {
                var I = e.data(N, d);
                I && (I.links && I.links.each(y.reset),
                I.panes && I.panes.each(y.reset))
            }
            function M(H, N) {
                var I = d.substr(1) + "-" + H
                  , R = e(N)
                  , k = e.data(N, d);
                if (k || (k = e.data(N, d, {
                    el: R,
                    config: {}
                })),
                k.current = null,
                k.tabIdentifier = I + "-" + l,
                k.paneIdentifier = I + "-" + _,
                k.menu = R.children(".w-tab-menu"),
                k.links = k.menu.children(".w-tab-link"),
                k.content = R.children(".w-tab-content"),
                k.panes = k.content.children(".w-tab-pane"),
                k.el.off(d),
                k.links.off(d),
                k.menu.attr("role", "tablist"),
                k.links.attr("tabindex", "-1"),
                D(k),
                !o) {
                    k.links.on("click" + d, K(k)),
                    k.links.on("keydown" + d, j(k));
                    var V = k.links.filter("." + E)
                      , J = V.attr(l);
                    J && $(k, {
                        tab: J,
                        immediate: !0
                    })
                }
            }
            function D(H) {
                var N = {};
                N.easing = H.el.attr("data-easing") || "ease";
                var I = parseInt(H.el.attr("data-duration-in"), 10);
                I = N.intro = I === I ? I : 0;
                var R = parseInt(H.el.attr("data-duration-out"), 10);
                R = N.outro = R === R ? R : 0,
                N.immediate = !I && !R,
                H.config = N
            }
            function F(H) {
                var N = H.current;
                return Array.prototype.findIndex.call(H.links, I=>I.getAttribute(l) === N, null)
            }
            function K(H) {
                return function(N) {
                    N.preventDefault();
                    var I = N.currentTarget.getAttribute(l);
                    I && $(H, {
                        tab: I
                    })
                }
            }
            function j(H) {
                return function(N) {
                    var I = F(H)
                      , R = N.key
                      , k = {
                        ArrowLeft: I - 1,
                        ArrowUp: I - 1,
                        ArrowRight: I + 1,
                        ArrowDown: I + 1,
                        End: H.links.length - 1,
                        Home: 0
                    };
                    if (R in k) {
                        N.preventDefault();
                        var V = k[R];
                        V === -1 && (V = H.links.length - 1),
                        V === H.links.length && (V = 0);
                        var J = H.links[V]
                          , ne = J.getAttribute(l);
                        ne && $(H, {
                            tab: ne
                        })
                    }
                }
            }
            function $(H, N) {
                N = N || {};
                var I = H.config
                  , R = I.easing
                  , k = N.tab;
                if (k !== H.current) {
                    H.current = k;
                    var V;
                    H.links.each(function(h, g) {
                        var B = e(g);
                        if (N.immediate || I.immediate) {
                            var X = H.panes[h];
                            g.id || (g.id = H.tabIdentifier + "-" + h),
                            X.id || (X.id = H.paneIdentifier + "-" + h),
                            g.href = "#" + X.id,
                            g.setAttribute("role", "tab"),
                            g.setAttribute("aria-controls", X.id),
                            g.setAttribute("aria-selected", "false"),
                            X.setAttribute("role", "tabpanel"),
                            X.setAttribute("aria-labelledby", g.id)
                        }
                        g.getAttribute(l) === k ? (V = g,
                        B.addClass(E).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(y.intro)) : B.hasClass(E) && B.removeClass(E).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(y.outro)
                    });
                    var J = []
                      , ne = [];
                    H.panes.each(function(h, g) {
                        var B = e(g);
                        g.getAttribute(l) === k ? J.push(g) : B.hasClass(m) && ne.push(g)
                    });
                    var G = e(J)
                      , U = e(ne);
                    if (N.immediate || I.immediate) {
                        G.addClass(m).each(y.intro),
                        U.removeClass(m),
                        T || Ct.redraw.up();
                        return
                    } else {
                        var v = window.scrollX
                          , p = window.scrollY;
                        V.focus(),
                        window.scrollTo(v, p)
                    }
                    U.length && I.outro ? (U.each(y.outro),
                    r(U).add("opacity " + I.outro + "ms " + R, {
                        fallback: s
                    }).start({
                        opacity: 0
                    }).then(()=>ee(I, U, G))) : ee(I, U, G)
                }
            }
            function ee(H, N, I) {
                if (N.removeClass(m).css({
                    opacity: "",
                    transition: "",
                    transform: "",
                    width: "",
                    height: ""
                }),
                I.addClass(m).each(y.intro),
                Ct.redraw.up(),
                !H.intro)
                    return r(I).set({
                        opacity: 1
                    });
                r(I).set({
                    opacity: 0
                }).redraw().add("opacity " + H.intro + "ms " + H.easing, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
            return t
        }
        )
    }
    );
    $s();
    Zs();
    eu();
    nu();
    br();
    Fb();
    Db();
    Gb();
    Ub();
    Hb();
    zb();
    Yb();
    Zb();
    e_();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712510105236
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aedc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aedc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "smoothing": 100,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1712555452409
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|186397a0-540c-53dd-5d34-0eac4fd443d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|186397a0-540c-53dd-5d34-0eac4fd443d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1712641258367
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|163d4e2b-5424-3f80-cd97-480b6a23d7da",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|163d4e2b-5424-3f80-cd97-480b6a23d7da",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 20,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1712643787347
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2ae6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2ae6b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1712644231381
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2ae7d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2ae7d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 1200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1712644288108
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1712651871999
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aeb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aeb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 96,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1712682399552
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2af14",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2af14",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-9-p",
                "smoothing": 96,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1712685970934
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2065"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|5cfe1721-5861-5ece-bb86-33a4b716f06f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|5cfe1721-5861-5ece-bb86-33a4b716f06f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626238744651
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2005"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|5cfe1721-5861-5ece-bb86-33a4b716f06f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|5cfe1721-5861-5ece-bb86-33a4b716f06f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626238744652
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|d24e5ea8-78da-f5b7-6dab-ac39945b55b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|d24e5ea8-78da-f5b7-6dab-ac39945b55b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1712688366118
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|3d45cbe1-468a-3865-d5d7-8329edb94aee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|3d45cbe1-468a-3865-d5d7-8329edb94aee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 1200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1712727816834
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a36c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a36c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446317330
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a38c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a38c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a376",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a376",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446316922
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a36c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a36c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446317330
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446294539
        },
        "e-54": {
            "id": "e-54",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a35f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a35f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1000,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1696307617118
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a380",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a380",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446316466
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a376",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a376",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446316922
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a396",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a396",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a38c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a38c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a353",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a353",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1696307531116
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446348353
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a359",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a359",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1696307561194
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a396",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a396",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a380",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a380",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446316466
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a362",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446294536
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a356",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a356",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1696307546939
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|fc5537e5-f4fc-9ad9-9303-f2c6d878a3aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626446347986
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".side-menu-text-wrap",
                "originalId": "6612cfc14d4530a09963ffea|5a85e52a-8f38-8a2d-64e6-3de862b60be8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".side-menu-text-wrap",
                "originalId": "6612cfc14d4530a09963ffea|5a85e52a-8f38-8a2d-64e6-3de862b60be8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631538675437
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".side-menu-text-wrap",
                "originalId": "6612cfc14d4530a09963ffea|5a85e52a-8f38-8a2d-64e6-3de862b60be8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".side-menu-text-wrap",
                "originalId": "6612cfc14d4530a09963ffea|5a85e52a-8f38-8a2d-64e6-3de862b60be8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631538675438
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc18534329",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc18534329",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631536796630
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc18534329",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc18534329",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631536796629
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc1853432f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc1853432f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631542026562
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc18534329",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc18534329",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631542013102
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc1853432f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc1853432f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631533920354
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc1853432f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc1853432f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631533920354
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc18534329",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc18534329",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631542013101
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc1853432f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|3a1297f1-29a3-434f-56ba-04fc1853432f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1631542026563
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6612cfc14d4530a09963ffea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713068697093
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2ae80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2ae80",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "smoothing": 96,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1713069081417
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2affe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2affe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-29-p",
                "smoothing": 96,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1713078965527
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6612cfc14d4530a09963ffea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6612cfc14d4530a09963ffea",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713079342957
        }
    },
    "actionLists": {
        "a-3": {
            "id": "a-3",
            "title": "hero-tciker",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".hero-ticker-content",
                            "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52cca6"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 30000,
                        "target": {
                            "selector": ".hero-ticker-content",
                            "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52cca6"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1712510110812
        },
        "a-4": {
            "id": "a-4",
            "title": "showcase-scroll",
            "continuousParameterGroups": [{
                "id": "a-4-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-4-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aee8"
                            },
                            "yValue": 40,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-4-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aeec"
                            },
                            "yValue": 40,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-4-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aeec"
                            },
                            "yValue": null,
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-4-n-7",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aee8"
                            },
                            "yValue": null,
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "deg",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-4-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aeea"
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-4-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aee8"
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-4-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aeec"
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-4-n-6",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aeec"
                            },
                            "zValue": 5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-4-n-8",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aee8"
                            },
                            "zValue": -5,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-4-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "6612cfc14d4530a09963ffea|94c68da4-8ea5-3c83-4159-c0826db2aeea"
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1712555463894
        },
        "a-5": {
            "id": "a-5",
            "title": "pricing-card-pop",
            "continuousParameterGroups": [{
                "id": "a-5-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 36,
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".pricing-plan.is-primary.on-creators",
                                "selectorGuids": ["1759c9c4-2285-432e-b20c-598d84696162", "fe2c9bbc-14d6-13b9-ba2e-f8db07279559", "2740a7b2-e39b-119f-6b4f-eabe51424515"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 54,
                    "actionItems": [{
                        "id": "a-5-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".pricing-plan.is-primary.on-creators",
                                "selectorGuids": ["1759c9c4-2285-432e-b20c-598d84696162", "fe2c9bbc-14d6-13b9-ba2e-f8db07279559", "2740a7b2-e39b-119f-6b4f-eabe51424515"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1712641263053
        },
        "a-6": {
            "id": "a-6",
            "title": "process-scroll",
            "continuousParameterGroups": [{
                "id": "a-6-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline-black",
                                "selectorGuids": ["ed7fb5cf-0bcf-d4f0-e79c-e0e9f21de7d1"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 70,
                    "actionItems": [{
                        "id": "a-6-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeOut",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".timeline-black",
                                "selectorGuids": ["ed7fb5cf-0bcf-d4f0-e79c-e0e9f21de7d1"]
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1712643792768
        },
        "a-7": {
            "id": "a-7",
            "title": "footer-scroll",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".footer-scroll",
                            "selectorGuids": ["946f345a-6db8-564d-1ab9-0f6bead13bee"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 30000,
                        "target": {
                            "selector": ".footer-scroll",
                            "selectorGuids": ["946f345a-6db8-564d-1ab9-0f6bead13bee"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1712651875992
        },
        "a-8": {
            "id": "a-8",
            "title": "categories-scroll",
            "continuousParameterGroups": [{
                "id": "a-8-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-8-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img1",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "922e6119-9b59-2a32-09cb-6f61da26ba58"]
                            },
                            "yValue": 200,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-4",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "dbf5d3e4-df0c-5a22-7b88-5d349cc53b76"]
                            },
                            "yValue": 160,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-3",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "a970d6d3-f080-6cae-05f9-5e415e81b337"]
                            },
                            "yValue": 200,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-5",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "d61e27bd-467a-1922-ed52-4c8ee01b32cd"]
                            },
                            "yValue": 180,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-6",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "1856fd9b-6276-c879-1af8-c6f24e256b7d"]
                            },
                            "yValue": 140,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-7",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "c2421648-2f11-fbc6-b7e5-a3e261033f61"]
                            },
                            "yValue": 280,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-2",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "957b1ce9-0a81-ae88-6b85-0f3cf61bb31f"]
                            },
                            "yValue": 190,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-8-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-4",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "dbf5d3e4-df0c-5a22-7b88-5d349cc53b76"]
                            },
                            "yValue": -160,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img1",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "922e6119-9b59-2a32-09cb-6f61da26ba58"]
                            },
                            "yValue": -200,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-3",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "a970d6d3-f080-6cae-05f9-5e415e81b337"]
                            },
                            "yValue": -280,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-5",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "d61e27bd-467a-1922-ed52-4c8ee01b32cd"]
                            },
                            "yValue": -180,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-6",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "1856fd9b-6276-c879-1af8-c6f24e256b7d"]
                            },
                            "yValue": -140,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-7",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "c2421648-2f11-fbc6-b7e5-a3e261033f61"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuad",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category.img-2",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb9", "957b1ce9-0a81-ae88-6b85-0f3cf61bb31f"]
                            },
                            "yValue": -190,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1712682411696
        },
        "a-9": {
            "id": "a-9",
            "title": "perks-banner",
            "continuousParameterGroups": [{
                "id": "a-9-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-9-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "outCubic",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".benefits_component",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52cccb"]
                            },
                            "xValue": 0.75,
                            "yValue": 0.75,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 44,
                    "actionItems": [{
                        "id": "a-9-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "outCubic",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".benefits_component",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52cccb"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1712685984011
        },
        "a-10": {
            "id": "a-10",
            "title": "Navbar 3 menu [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar3_menu-background",
                            "selectorGuids": ["1bd5904c-8994-3764-5ee1-3bb942fc48f2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar3_menu-background",
                            "selectorGuids": ["1bd5904c-8994-3764-5ee1-3bb942fc48f2"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar3_menu-background",
                            "selectorGuids": ["1bd5904c-8994-3764-5ee1-3bb942fc48f2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1626238752650
        },
        "a-11": {
            "id": "a-11",
            "title": "Navbar 3 menu [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar3_menu-background",
                            "selectorGuids": ["1bd5904c-8994-3764-5ee1-3bb942fc48f2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar3_menu-background",
                            "selectorGuids": ["1bd5904c-8994-3764-5ee1-3bb942fc48f2"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626238752650
        },
        "a-16": {
            "id": "a-16",
            "title": "top-nav-reveal",
            "continuousParameterGroups": [{
                "id": "a-16-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-16-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-top",
                                "selectorGuids": ["b94afde1-7c88-e0af-8f05-519de62d2da2"]
                            },
                            "yValue": -120,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 14,
                    "actionItems": [{
                        "id": "a-16-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-top",
                                "selectorGuids": ["b94afde1-7c88-e0af-8f05-519de62d2da2"]
                            },
                            "yValue": -120,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 15,
                    "actionItems": [{
                        "id": "a-16-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".sticky-top",
                                "selectorGuids": ["b94afde1-7c88-e0af-8f05-519de62d2da2"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1712688374167
        },
        "a-17": {
            "id": "a-17",
            "title": "2. Open Accordion Item - BRIX ✅",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bca"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bca"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bca"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix.second-line---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bc6", "121773ab-6ca6-fd0d-b76b-17b236ab5bd0"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bca"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bca"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-17-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bca"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix.second-line---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bc6", "121773ab-6ca6-fd0d-b76b-17b236ab5bd0"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1626114382035
        },
        "a-18": {
            "id": "a-18",
            "title": "2. Close Accordion Item - BRIX",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bca"]
                        },
                        "xValue": 0.9,
                        "yValue": 0.9,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bca"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-content---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bca"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".open-close-line---brix.second-line---brix",
                            "selectorGuids": ["121773ab-6ca6-fd0d-b76b-17b236ab5bc6", "121773ab-6ca6-fd0d-b76b-17b236ab5bd0"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626114382035
        },
        "a-23": {
            "id": "a-23",
            "title": "Underline ON",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".underline",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de72"]
                        },
                        "xValue": 102,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".underline",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de72"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1631538679300
        },
        "a-24": {
            "id": "a-24",
            "title": "Underline OFF",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".underline",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de72"]
                        },
                        "xValue": 102,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1631538679300
        },
        "a-26": {
            "id": "a-26",
            "title": "Side Menu Open 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "xValue": 130,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": [0.39, 0.575, 0.565, 1],
                        "duration": 500,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "zValue": -7,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-26-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".close-button",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de71"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "widthValue": 22,
                        "widthUnit": "rem",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.398, 0.305, 0, 0.995],
                        "duration": 1500,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": [0.497, 0.311, 0, 1.001],
                        "duration": 2000,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-26-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-26-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".close-button",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de71"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1631008838516
        },
        "a-22": {
            "id": "a-22",
            "title": "Side Menu Close MOBILE",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.895, 0.001, 0.585, 0.592],
                        "duration": 600,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "xValue": 120,
                        "xUnit": "vw",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": [0.912, 0.007, 0.602, 0.609],
                        "duration": 600,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": [0.895, 0.007, 0.596, 0.603],
                        "duration": 700,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.906, 0.007, 0.608, 0.609],
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".close-button",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de71"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1631008838516
        },
        "a-20": {
            "id": "a-20",
            "title": "Side Menu Open MOBILE",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "xValue": 120,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": [0.39, 0.575, 0.565, 1],
                        "duration": 500,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-20-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".close-button",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de71"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.398, 0.305, 0, 0.995],
                        "duration": 1500,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": [0.497, 0.311, 0, 1.001],
                        "duration": 2000,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-20-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-20-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".close-button",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de71"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1631008838516
        },
        "a-21": {
            "id": "a-21",
            "title": "Side Menu Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": [0.895, 0.001, 0.585, 0.592],
                        "duration": 600,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "xValue": 165,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": [0.912, 0.007, 0.602, 0.609],
                        "duration": 600,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "zValue": -20,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-21-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": [0.895, 0.007, 0.596, 0.603],
                        "duration": 700,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "widthValue": 0,
                        "widthUnit": "rem",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.906, 0.007, 0.608, 0.609],
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "selector": ".close-button",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de71"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".side-menu_component",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de70"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-21-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 200,
                        "easing": [0.912, 0.007, 0.602, 0.609],
                        "duration": 0,
                        "target": {
                            "selector": ".side-menu-background",
                            "selectorGuids": ["5c3ca19b-dc2c-2090-c27c-7191bf07de73"]
                        },
                        "zValue": -7,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1631008838516
        },
        "a-27": {
            "id": "a-27",
            "title": "text-change-animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6612cfc14d4530a09963ffea|2b3d1700-4fc0-c83c-9f63-566ebcffa5c9"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuad",
                        "duration": 1000,
                        "target": {
                            "id": "6612cfc14d4530a09963ffea|2b3d1700-4fc0-c83c-9f63-566ebcffa5c9"
                        },
                        "yValue": -27,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuad",
                        "duration": 1000,
                        "target": {
                            "id": "6612cfc14d4530a09963ffea|2b3d1700-4fc0-c83c-9f63-566ebcffa5c9"
                        },
                        "yValue": -54,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuad",
                        "duration": 1000,
                        "target": {
                            "id": "6612cfc14d4530a09963ffea|2b3d1700-4fc0-c83c-9f63-566ebcffa5c9"
                        },
                        "yValue": -81,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1713068702588
        },
        "a-28": {
            "id": "a-28",
            "title": "categories-3d",
            "continuousParameterGroups": [{
                "id": "a-28-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-28-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".why-us-image.max-width-medium",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb1", "fb04e630-5cc0-e588-612c-8d8142086ec6"]
                            },
                            "yValue": 40,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 90,
                    "actionItems": [{
                        "id": "a-28-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".why-us-image.max-width-medium",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccb1", "fb04e630-5cc0-e588-612c-8d8142086ec6"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1713069092252
        },
        "a-29": {
            "id": "a-29",
            "title": "cta-scroll",
            "continuousParameterGroups": [{
                "id": "a-29-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-29-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".cta-huge-text.text-align-center",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccde", "36a3295f-b2e0-acb4-990d-62ffda52ccf6"]
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".cta-huge-text.text-align-center",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccde", "36a3295f-b2e0-acb4-990d-62ffda52ccf6"]
                            },
                            "xValue": 0.5,
                            "yValue": 0.5,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-29-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".cta-huge-text.text-align-center",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccde", "36a3295f-b2e0-acb4-990d-62ffda52ccf6"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".cta-huge-text.text-align-center",
                                "selectorGuids": ["36a3295f-b2e0-acb4-990d-62ffda52ccde", "36a3295f-b2e0-acb4-990d-62ffda52ccf6"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1713078970407
        },
        "a-30": {
            "id": "a-30",
            "title": "text-change-animation-mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "6612cfc14d4530a09963ffea|2b3d1700-4fc0-c83c-9f63-566ebcffa5c9"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuad",
                        "duration": 1000,
                        "target": {
                            "id": "6612cfc14d4530a09963ffea|2b3d1700-4fc0-c83c-9f63-566ebcffa5c9"
                        },
                        "yValue": -24,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuad",
                        "duration": 1000,
                        "target": {
                            "id": "6612cfc14d4530a09963ffea|2b3d1700-4fc0-c83c-9f63-566ebcffa5c9"
                        },
                        "yValue": -48,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outQuad",
                        "duration": 1000,
                        "target": {
                            "id": "6612cfc14d4530a09963ffea|2b3d1700-4fc0-c83c-9f63-566ebcffa5c9"
                        },
                        "yValue": -72,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1713068702588
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
