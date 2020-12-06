(this.webpackJsonpshope = this.webpackJsonpshope || []).push([
  [0],
  {
    134: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(2),
        r = n(0),
        c = n(11),
        i = n.n(c),
        s = n(7),
        o = n.n(s),
        u = n(10),
        l = n(13),
        j = n(78),
        d = new (n.n(j).a)(
          "pk_test_199022407dd51e344c68e82c54b15a9c033b4ad0de193",
          !0
        ),
        b = n(168),
        p = n(170),
        m = n(57),
        h = n(171),
        x = n(172),
        O = n(173),
        f = n(15),
        g = n(20),
        v = n(14),
        y = n(165),
        k = n(18),
        w = Object(y.a)(function (t) {
          return {
            appBar: Object(v.a)(
              {
                boxShadow: "none",
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
              },
              t.breakpoints.up("sm"),
              { width: "calc(100% - ".concat(0, "px)"), marginLeft: 0 }
            ),
            title: {
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            },
            image: { marginRight: "10px" },
            menuButton: Object(v.a)(
              { marginRight: t.spacing(2) },
              t.breakpoints.up("sm"),
              { display: "none" }
            ),
            grow: { flexGrow: 1 },
            search: Object(v.a)(
              {
                position: "relative",
                borderRadius: t.shape.borderRadius,
                backgroundColor: Object(k.b)(t.palette.common.white, 0.15),
                "&:hover": {
                  backgroundColor: Object(k.b)(t.palette.common.white, 0.25),
                },
                marginRight: t.spacing(2),
                marginLeft: 0,
                width: "100%",
              },
              t.breakpoints.up("sm"),
              { width: "auto" }
            ),
            searchIcon: {
              padding: t.spacing(0, 2),
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            inputRoot: { color: "inherit" },
            inputInput: Object(v.a)(
              {
                padding: t.spacing(1, 1, 1, 0),
                paddingLeft: "calc(1em + ".concat(t.spacing(4), "px)"),
                transition: t.transitions.create("width"),
                width: "100%",
              },
              t.breakpoints.up("md"),
              { width: "20ch" }
            ),
          };
        }),
        C = n.p + "static/media/commerse.b3701709.jfif",
        S = function (t) {
          var e = t.totalItems,
            n = w(),
            r = Object(f.g)();
          return Object(a.jsx)(a.Fragment, {
            children: Object(a.jsx)(b.a, {
              position: "fixed",
              className: n.appBar,
              color: "inherit",
              children: Object(a.jsxs)(p.a, {
                children: [
                  Object(a.jsxs)(m.a, {
                    variant: "h6",
                    className: n.title,
                    color: "inherit",
                    component: g.b,
                    to: "/",
                    children: [
                      Object(a.jsx)("img", {
                        src: C,
                        alt: "Commerce.js",
                        height: "25px",
                        className: n.image,
                      }),
                      "Commerce.js",
                    ],
                  }),
                  Object(a.jsx)("div", { className: n.grow }),
                  "/" === r.pathname &&
                    Object(a.jsx)("div", {
                      className: n.button,
                      children: Object(a.jsx)(h.a, {
                        component: g.b,
                        to: "/cart",
                        "aria-label": "Show card items",
                        color: "inherit",
                        children: Object(a.jsx)(x.a, {
                          badgeContent: e,
                          color: "secondary",
                          children: Object(a.jsx)(O.a, {}),
                        }),
                      }),
                    }),
                ],
              }),
            }),
          });
        },
        _ = n(179),
        N = n(174),
        B = n(175),
        T = n(176),
        E = n(177),
        F = n(178),
        R = Object(y.a)(function () {
          return {
            root: { maxWidth: "100%" },
            media: { height: 0, paddingTop: "56.25%" },
            cardActions: { display: "flex", justifyContent: "flex-end" },
            cardContent: { display: "flex", justifyContent: "space-between" },
          };
        }),
        A = function (t) {
          var e = t.product,
            n = t.onAddToCart,
            r = R();
          return Object(a.jsxs)(N.a, {
            className: r.root,
            children: [
              Object(a.jsx)(B.a, {
                className: r.media,
                image: e.media.source,
                title: e.name,
              }),
              Object(a.jsxs)(T.a, {
                children: [
                  Object(a.jsxs)("div", {
                    className: r.cardContent,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        gutterBottom: !0,
                        children: e.name,
                      }),
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        children: e.price.formatted_with_symbol,
                      }),
                    ],
                  }),
                  Object(a.jsx)(m.a, {
                    variant: "h5",
                    color: "textSecondary",
                    dangerouslySetInnerHTML: { __html: e.description },
                  }),
                ],
              }),
              Object(a.jsx)(E.a, {
                disableSpacing: !0,
                className: r.cardActions,
                children: Object(a.jsx)(h.a, {
                  "aria-label": "Add to Card",
                  onClick: function () {
                    return n(e.id, 1);
                  },
                  children: Object(a.jsx)(F.a, {}),
                }),
              }),
            ],
          });
        },
        I = Object(y.a)(function (t) {
          return {
            toolbar: t.mixins.toolbar,
            content: {
              flexGrow: 1,
              backgroundColor: t.palette.background.default,
              padding: t.spacing(3),
            },
            root: { flexGrow: 1 },
          };
        }),
        L = function (t) {
          var e = t.products,
            n = t.onAddToCart,
            r = I();
          return (
            console.log(e),
            Object(a.jsxs)("main", {
              className: r.content,
              children: [
                Object(a.jsx)("div", { className: r.toolbar }),
                Object(a.jsx)(_.a, {
                  container: !0,
                  justify: "center",
                  spacing: 4,
                  children:
                    e.length &&
                    e.map(function (t) {
                      return Object(a.jsx)(
                        _.a,
                        {
                          item: !0,
                          xs: 12,
                          sm: 6,
                          md: 4,
                          lg: 3,
                          children: Object(a.jsx)(A, {
                            product: t,
                            onAddToCart: n,
                          }),
                        },
                        t.id
                      );
                    }),
                }),
              ],
            })
          );
        },
        W = n(180),
        q = n(181),
        P = Object(y.a)(function (t) {
          var e;
          return {
            toolbar: t.mixins.toolbar,
            title: { marginTop: "5%" },
            emptyButton:
              ((e = { minWidth: "150px" }),
              Object(v.a)(e, t.breakpoints.down("xs"), { marginBottom: "5px" }),
              Object(v.a)(e, t.breakpoints.up("xs"), { marginRight: "20px" }),
              e),
            checkoutButton: { minWidth: "150px" },
            link: { textDecoration: "none" },
            cardDetails: {
              display: "flex",
              marginTop: "10%",
              width: "100%",
              justifyContent: "space-between",
            },
          };
        }),
        z = Object(y.a)(function () {
          return {
            media: { height: 260 },
            cardContent: { display: "flex", justifyContent: "space-between" },
            cartActions: { justifyContent: "space-between" },
            buttons: { display: "flex", alignItems: "center" },
          };
        }),
        D = function (t) {
          var e = t.item,
            n = t.handleUpdateCartQty,
            r = t.handleRemoveFromCart,
            c = z();
          return Object(a.jsxs)(N.a, {
            children: [
              Object(a.jsx)(B.a, {
                image: e.media.source,
                alt: e.name,
                className: c.media,
              }),
              Object(a.jsxs)(T.a, {
                className: c.cardContent,
                children: [
                  Object(a.jsx)(m.a, { variant: "h4", children: e.name }),
                  Object(a.jsx)(m.a, {
                    variant: "h5",
                    children: e.line_totalformatted_with_symbol,
                  }),
                ],
              }),
              Object(a.jsxs)(E.a, {
                className: c.cardActions,
                children: [
                  Object(a.jsxs)("div", {
                    className: c.buttons,
                    children: [
                      Object(a.jsx)(W.a, {
                        type: "button",
                        size: "small",
                        onClick: function () {
                          return n(e.id, e.quantity - 1);
                        },
                        children: "-",
                      }),
                      Object(a.jsx)(m.a, { children: e.quantity }),
                      Object(a.jsx)(W.a, {
                        type: "button",
                        size: "small",
                        onClick: function () {
                          return n(e.id, e.quantity + 1);
                        },
                        children: "+",
                      }),
                    ],
                  }),
                  Object(a.jsx)(W.a, {
                    variant: "contained",
                    type: "button",
                    color: "secondary",
                    onClick: function () {
                      return r(e.id);
                    },
                    children: "Remove",
                  }),
                ],
              }),
            ],
          });
        },
        H = function (t) {
          var e = t.cart,
            n = t.handleUpdateCartQty,
            r = t.handleRemoveFromCart,
            c = t.handleEmptyCart,
            i = P(),
            s = function () {
              return Object(a.jsxs)(m.a, {
                variant: "subtitle1",
                children: [
                  "You have no items in your shopping cart,",
                  " ",
                  Object(a.jsx)(g.b, {
                    to: "/",
                    className: i.link,
                    children: "start adding some!",
                  }),
                ],
              });
            },
            o = function () {
              return Object(a.jsxs)(a.Fragment, {
                children: [
                  Object(a.jsx)(_.a, {
                    container: !0,
                    spacing: 3,
                    children: e.line_items.map(function (t) {
                      return Object(a.jsx)(
                        _.a,
                        {
                          item: !0,
                          xs: 12,
                          sm: 4,
                          children: Object(a.jsx)(D, {
                            item: t,
                            handleUpdateCartQty: n,
                            handleRemoveFromCart: r,
                          }),
                        },
                        t.id
                      );
                    }),
                  }),
                  Object(a.jsxs)("div", {
                    className: i.cardDetails,
                    children: [
                      Object(a.jsxs)(m.a, {
                        variant: "h4",
                        children: [
                          "Subtotal: ",
                          e.subtotal.formatted_with_symbol,
                        ],
                      }),
                      Object(a.jsxs)("div", {
                        children: [
                          Object(a.jsx)(W.a, {
                            className: i.emptyButton,
                            size: "large",
                            type: "button",
                            variant: "contained",
                            color: "secondary",
                            onClick: c,
                            children: "Empty Card",
                          }),
                          Object(a.jsx)(W.a, {
                            className: i.checkoutButton,
                            size: "large",
                            type: "button",
                            variant: "contained",
                            color: "primary",
                            component: g.b,
                            to: "/checkout",
                            children: "Checkout",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            };
          return e.line_items
            ? Object(a.jsxs)(q.a, {
                children: [
                  Object(a.jsx)("div", { className: i.toolbar }),
                  Object(a.jsx)(m.a, {
                    className: i.title,
                    variant: "h3",
                    gutterBottom: !0,
                    children: "Your shopping card",
                  }),
                  e.line_items.length
                    ? Object(a.jsx)(o, {})
                    : Object(a.jsx)(s, {}),
                ],
              })
            : "Loading...";
        },
        M = n(184),
        Q = n(188),
        G = n(189),
        U = n(84),
        Y = n(196),
        J = n(190),
        V = n(192),
        X = Object(y.a)(function (t) {
          var e;
          return {
            appBar: { position: "relative" },
            toolbar: t.mixins.toolbar,
            layout: Object(v.a)(
              {
                marginTop: "5%",
                width: "auto",
                marginLeft: t.spacing(2),
                marginRight: t.spacing(2),
              },
              t.breakpoints.up(600 + 2 * t.spacing(2)),
              { width: 600, marginLeft: "auto", marginRight: "auto" }
            ),
            paper:
              ((e = {
                marginTop: t.spacing(3),
                marginBottom: t.spacing(3),
                padding: t.spacing(2),
              }),
              Object(v.a)(e, t.breakpoints.down("xs"), {
                width: "100%",
                marginTop: 60,
              }),
              Object(v.a)(e, t.breakpoints.up(600 + 2 * t.spacing(3)), {
                marginTop: t.spacing(6),
                marginBottom: t.spacing(6),
                padding: t.spacing(3),
              }),
              e),
            stepper: { padding: t.spacing(3, 0, 5) },
            buttons: { display: "flex", justifyContent: "flex-end" },
            button: { marginTop: t.spacing(3), marginLeft: t.spacing(1) },
            divider: { margin: "20px 0" },
            spinner: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          };
        }),
        Z = n(48),
        K = n(82),
        $ = n(182),
        tt = n(135),
        et = n(183),
        nt = function (t) {
          var e = t.checkoutToken;
          return Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)(m.a, {
                variant: "h6",
                gutterBottom: !0,
                children: "Order summary",
              }),
              Object(a.jsxs)($.a, {
                disablePadding: !0,
                children: [
                  e.live.line_items.map(function (t) {
                    return Object(a.jsxs)(tt.a, {
                      style: { padding: "10px 0" },
                      children: [
                        Object(a.jsx)(et.a, {
                          primary: t.name,
                          secondary: "Quantity: ".concat(t.quantity),
                        }),
                        Object(a.jsx)(m.a, {
                          variant: "body2",
                          children: t.line_total.formatted_with_symbol,
                        }),
                      ],
                    });
                  }),
                  Object(a.jsxs)(tt.a, {
                    style: { padding: "10px 0" },
                    children: [
                      Object(a.jsx)(et.a, { primary: "Total" }),
                      Object(a.jsx)(m.a, {
                        variant: "subtitle1",
                        style: { fontWeight: 700 },
                        children: e.live.subtotal.formatted_with_symbol,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        at = Object(K.loadStripe)("pk_test_SC8d8WXyqV22uBHxYrytpMqF00rcFypBfc"),
        rt = function (t) {
          var e = t.checkoutToken,
            n = t.shippingData,
            r = t.backStep,
            c = t.onCaptureCheckout,
            i = t.nextStep,
            s = t.timeout,
            l = (function () {
              var t = Object(u.a)(
                o.a.mark(function t(a, r, u) {
                  var l, j, d, b, p;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((a.preventDefault(), u && r)) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          return (
                            (l = r.getElement(Z.CardElement)),
                            (t.next = 6),
                            u.createPaymentMethod({ type: "card", card: l })
                          );
                        case 6:
                          (j = t.sent),
                            (d = j.error),
                            (b = j.paymentMethod),
                            d
                              ? console.log(d)
                              : ((p = {
                                  line_items: e.live.line_items,
                                  customer: {
                                    firstname: n.firstName,
                                    lastname: n.lastName,
                                    email: n.email,
                                  },
                                  shipping: {
                                    name: "Primary",
                                    street: n.adress1,
                                    town_city: n.city,
                                    county_state: n.shippingSubdivision,
                                    postal_zip_code: n.zip,
                                    country: n.shippingCountry,
                                  },
                                  fulfillment: {
                                    shipping_method: n.shippingOption,
                                  },
                                  payment: {
                                    gateway: "stripe",
                                    stripe: { payment_method_id: b.id },
                                  },
                                }),
                                c(e.id, p),
                                s(),
                                i());
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n, a) {
                return t.apply(this, arguments);
              };
            })();
          return Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)(nt, { checkoutToken: e }),
              Object(a.jsx)(M.a, {}),
              Object(a.jsx)(m.a, {
                variant: "h6",
                gutterBottom: !0,
                style: { margin: "20px 0" },
                children: "Payment Method",
              }),
              Object(a.jsx)(Z.Elements, {
                stripe: at,
                children: Object(a.jsx)(Z.ElementsConsumer, {
                  children: function (t) {
                    var n = t.elements,
                      c = t.stripe;
                    return Object(a.jsxs)("form", {
                      onSubmit: function (t) {
                        return l(t, n, c);
                      },
                      children: [
                        Object(a.jsx)(Z.CardElement, {}),
                        Object(a.jsx)("br", {}),
                        Object(a.jsx)("br", {}),
                        Object(a.jsxs)("div", {
                          style: {
                            display: "flex",
                            justifyContent: "space-between",
                          },
                          children: [
                            Object(a.jsx)(W.a, {
                              variant: "outlined",
                              onClick: r,
                              children: "Back",
                            }),
                            Object(a.jsxs)(W.a, {
                              type: "submit",
                              variant: "contained",
                              disabled: !c,
                              color: "primary",
                              children: [
                                "Pay ",
                                e.live.subtotal.formatted_with_symbol,
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                }),
              }),
            ],
          });
        },
        ct = n(49),
        it = n(195),
        st = n(191),
        ot = n(187),
        ut = n(44),
        lt = n(193),
        jt = function (t) {
          var e = t.name,
            n = t.label,
            r = Object(ut.d)().control;
          return Object(a.jsx)(_.a, {
            item: !0,
            xs: 12,
            sm: 6,
            children: Object(a.jsx)(ut.a, {
              defaultValue: "",
              as: lt.a,
              name: e,
              control: r,
              fullWidth: !0,
              label: n,
              required: !0,
            }),
          });
        },
        dt = function (t) {
          var e = t.checkoutToken,
            n = t.next,
            c = Object(r.useState)([]),
            i = Object(l.a)(c, 2),
            s = i[0],
            j = i[1],
            b = Object(r.useState)(""),
            p = Object(l.a)(b, 2),
            h = p[0],
            x = p[1],
            O = Object(r.useState)([]),
            f = Object(l.a)(O, 2),
            v = f[0],
            y = f[1],
            k = Object(r.useState)(""),
            w = Object(l.a)(k, 2),
            C = w[0],
            S = w[1],
            N = Object(r.useState)([]),
            B = Object(l.a)(N, 2),
            T = B[0],
            E = B[1],
            F = Object(r.useState)(""),
            R = Object(l.a)(F, 2),
            A = R[0],
            I = R[1],
            L = Object(ut.c)(),
            q = (function () {
              var t = Object(u.a)(
                o.a.mark(function t(e) {
                  var n, a;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            d.services.localeListShippingCountries(e)
                          );
                        case 2:
                          (n = t.sent),
                            (a = n.countries),
                            j(a),
                            x(Object.keys(a)[0]);
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            P = (function () {
              var t = Object(u.a)(
                o.a.mark(function t(e) {
                  var n, a;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), d.services.localeListSubdivisions(e)
                          );
                        case 2:
                          (n = t.sent),
                            (a = n.subdivisions),
                            y(a),
                            S(Object.keys(a)[0]);
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            z = (function () {
              var t = Object(u.a)(
                o.a.mark(function t(e, n) {
                  var a,
                    r,
                    c = arguments;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = c.length > 2 && void 0 !== c[2] ? c[2] : null),
                            (t.next = 3),
                            d.checkout.getShippingOptions(e, {
                              country: n,
                              region: a,
                            })
                          );
                        case 3:
                          (r = t.sent), E(r), I(r[0].id);
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          Object(r.useEffect)(function () {
            q(e.id);
          }, []),
            Object(r.useEffect)(
              function () {
                h && P(h);
              },
              [h]
            ),
            Object(r.useEffect)(
              function () {
                C && z(e.id, h, C);
              },
              [C]
            );
          var D = Object.entries(s).map(function (t) {
              var e = Object(l.a)(t, 2);
              return { id: e[0], label: e[1] };
            }),
            H = Object.entries(v).map(function (t) {
              var e = Object(l.a)(t, 2);
              return { id: e[0], label: e[1] };
            }),
            M = T.map(function (t) {
              return {
                id: t.id,
                label: ""
                  .concat(t.description, " - ")
                  .concat(t.price.formatted_with_symbol),
              };
            });
          return Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)(m.a, {
                variant: "h6",
                gutterBottom: !0,
                children: "Shipping Address",
              }),
              Object(a.jsx)(
                ut.b,
                Object(ct.a)(
                  Object(ct.a)({}, L),
                  {},
                  {
                    children: Object(a.jsxs)("form", {
                      onSubmit: L.handleSubmit(function (t) {
                        return n(
                          Object(ct.a)(
                            Object(ct.a)({}, t),
                            {},
                            {
                              setShippingCountry: x,
                              shippingSubdivision: C,
                              shippingOption: A,
                            }
                          )
                        );
                      }),
                      children: [
                        Object(a.jsxs)(_.a, {
                          container: !0,
                          spacing: 3,
                          children: [
                            Object(a.jsx)(jt, {
                              name: "firstName",
                              label: "First Name",
                            }),
                            Object(a.jsx)(jt, {
                              name: "lastName",
                              label: "Last Name",
                            }),
                            Object(a.jsx)(jt, {
                              name: "address1",
                              label: "Address",
                            }),
                            Object(a.jsx)(jt, {
                              name: "email",
                              label: "Email",
                            }),
                            Object(a.jsx)(jt, { name: "city", label: "City" }),
                            Object(a.jsx)(jt, {
                              name: "zip",
                              label: "ZIP / Postal Code",
                            }),
                            Object(a.jsxs)(_.a, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              children: [
                                Object(a.jsx)(it.a, {
                                  children: "Shipping Country",
                                }),
                                Object(a.jsx)(st.a, {
                                  value: h,
                                  fullWidth: !0,
                                  onChange: function (t) {
                                    return x(t.target.value);
                                  },
                                  children: D.map(function (t) {
                                    return Object(a.jsx)(
                                      ot.a,
                                      { value: t.id, children: t.label },
                                      t.id
                                    );
                                  }),
                                }),
                              ],
                            }),
                            Object(a.jsxs)(_.a, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              children: [
                                Object(a.jsx)(it.a, {
                                  children: "Shipping Subdivision",
                                }),
                                Object(a.jsx)(st.a, {
                                  value: C,
                                  fullWidth: !0,
                                  onChange: function (t) {
                                    return S(t.target.value);
                                  },
                                  children: H.map(function (t) {
                                    return Object(a.jsx)(
                                      ot.a,
                                      { value: t.id, children: t.label },
                                      t.id
                                    );
                                  }),
                                }),
                              ],
                            }),
                            Object(a.jsxs)(_.a, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              children: [
                                Object(a.jsx)(it.a, {
                                  children: "Shipping Options",
                                }),
                                Object(a.jsx)(st.a, {
                                  value: A,
                                  fullWidth: !0,
                                  onChange: function (t) {
                                    return I(t.target.value);
                                  },
                                  children: M.map(function (t) {
                                    return Object(a.jsx)(
                                      ot.a,
                                      { value: t.id, children: t.label },
                                      t.id
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(a.jsx)("br", {}),
                        Object(a.jsxs)("div", {
                          style: {
                            display: "flex",
                            justifyContent: "space-between",
                          },
                          children: [
                            Object(a.jsx)(W.a, {
                              variant: "outlined",
                              component: g.b,
                              to: "/cart",
                              children: "Back to Cart",
                            }),
                            Object(a.jsx)(W.a, {
                              type: "submit",
                              variant: "contained",
                              color: "primary",
                              children: "Next",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }
                )
              ),
            ],
          });
        },
        bt = ["Shipping address", "Payment details"],
        pt = function (t) {
          var e = t.cart,
            n = t.order,
            c = t.onCaptureCheckout,
            i = t.error,
            s = Object(r.useState)(0),
            j = Object(l.a)(s, 2),
            b = j[0],
            p = j[1],
            h = Object(r.useState)({}),
            x = Object(l.a)(h, 2),
            O = x[0],
            v = x[1],
            y = Object(r.useState)(null),
            k = Object(l.a)(y, 2),
            w = k[0],
            C = k[1],
            S = Object(r.useState)(!1),
            _ = Object(l.a)(S, 2),
            N = _[0],
            B = _[1],
            T = Object(f.f)();
          Object(r.useEffect)(
            function () {
              (function () {
                var t = Object(u.a)(
                  o.a.mark(function t() {
                    var n;
                    return o.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                d.checkout.generateToken(e.id, { type: "cart" })
                              );
                            case 3:
                              (n = t.sent), C(n), (t.next = 10);
                              break;
                            case 7:
                              (t.prev = 7), (t.t0 = t.catch(0)), T.push("/");
                            case 10:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })()();
            },
            [e, T]
          );
          var E = X(),
            F = function () {
              return p(function (t) {
                return t + 1;
              });
            },
            R = function () {
              return p(function (t) {
                return t - 1;
              });
            },
            A = function (t) {
              v(t), F();
            },
            I = function () {
              return 0 === b
                ? Object(a.jsx)(dt, { checkoutToken: w, next: A })
                : Object(a.jsx)(rt, {
                    shippingData: O,
                    checkoutToken: w,
                    backStep: R,
                    onCaptureCheckout: c,
                    nextStep: F,
                    timeout: L,
                  });
            },
            L = function () {
              setTimeout(function () {
                B(!0);
              }, 3e3);
            },
            q = function () {
              return n.customer
                ? Object(a.jsx)(a.Fragment, {
                    children: Object(a.jsxs)("div", {
                      children: [
                        Object(a.jsxs)(m.a, {
                          variant: "h5",
                          children: [
                            "Thank you for your purchase, ",
                            n.customer.firstname,
                            " ",
                            n.customer.lastname,
                          ],
                        }),
                        Object(a.jsx)(M.a, { className: E.divider }),
                        Object(a.jsxs)(m.a, {
                          variant: "subtitle2",
                          children: ["Order ref: ", n.customer_reference],
                        }),
                        Object(a.jsx)("br", {}),
                        Object(a.jsxs)(W.a, {
                          component: g.b,
                          to: "/",
                          variant: "outlined",
                          type: "button",
                          children: [" ", "Back to Home"],
                        }),
                      ],
                    }),
                  })
                : N
                ? Object(a.jsx)(a.Fragment, {
                    children: Object(a.jsxs)("div", {
                      children: [
                        Object(a.jsx)(m.a, {
                          variant: "h5",
                          children: "Thank you for your purchase",
                        }),
                        Object(a.jsx)(M.a, { className: E.divider }),
                        Object(a.jsx)("br", {}),
                        Object(a.jsxs)(W.a, {
                          component: g.b,
                          to: "/",
                          variant: "outlined",
                          type: "button",
                          children: [" ", "Back to Home"],
                        }),
                      ],
                    }),
                  })
                : Object(a.jsx)("div", {
                    className: E.spinner,
                    children: Object(a.jsx)(Q.a, {}),
                  });
            };
          return (
            i &&
              (q = function () {
                return Object(a.jsxs)(a.Fragment, {
                  children: [
                    " ",
                    Object(a.jsxs)(m.a, {
                      variant: "h5",
                      children: ["Error:", i],
                    }),
                    Object(a.jsx)("br", {}),
                    Object(a.jsxs)(W.a, {
                      component: g.b,
                      to: "/",
                      variant: "outlined",
                      type: "button",
                      children: [" ", "Back to Home"],
                    }),
                  ],
                });
              }),
            Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)(G.a, {}),
                Object(a.jsx)("div", { className: E.toolbar }),
                Object(a.jsx)("main", {
                  className: E.layout,
                  children: Object(a.jsxs)(U.a, {
                    className: E.paper,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h4",
                        align: "center",
                        children: "Checkout",
                      }),
                      Object(a.jsx)(Y.a, {
                        activeStep: 0,
                        className: E.stepper,
                        children: bt.map(function (t) {
                          return Object(a.jsx)(
                            J.a,
                            { children: Object(a.jsx)(V.a, { children: t }) },
                            t
                          );
                        }),
                      }),
                      b === bt.length
                        ? Object(a.jsx)(q, {})
                        : w && Object(a.jsx)(I, {}),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        mt = function () {
          var t = Object(r.useState)([]),
            e = Object(l.a)(t, 2),
            n = e[0],
            c = e[1],
            i = Object(r.useState)({}),
            s = Object(l.a)(i, 2),
            j = s[0],
            b = s[1],
            p = Object(r.useState)({}),
            m = Object(l.a)(p, 2),
            h = m[0],
            x = m[1],
            O = Object(r.useState)(""),
            v = Object(l.a)(O, 2),
            y = v[0],
            k = v[1],
            w = (function () {
              var t = Object(u.a)(
                o.a.mark(function t() {
                  var e, n;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), d.products.list();
                        case 2:
                          (e = t.sent), (n = e.data), c(n);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            C = (function () {
              var t = Object(u.a)(
                o.a.mark(function t() {
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.t0 = b), (t.next = 3), d.cart.retrieve();
                        case 3:
                          (t.t1 = t.sent), (0, t.t0)(t.t1);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            _ = (function () {
              var t = Object(u.a)(
                o.a.mark(function t(e, n) {
                  var a, r;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), d.cart.add(e, n);
                        case 2:
                          (a = t.sent), (r = a.cart), b(r);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })(),
            N = (function () {
              var t = Object(u.a)(
                o.a.mark(function t(e, n) {
                  var a, r;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), d.cart.update(e, { quantity: n })
                          );
                        case 2:
                          (a = t.sent), (r = a.cart), b(r);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })(),
            B = (function () {
              var t = Object(u.a)(
                o.a.mark(function t(e) {
                  var n, a;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), d.cart.remove(e);
                        case 2:
                          (n = t.sent), (a = n.cart), b(a);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            T = (function () {
              var t = Object(u.a)(
                o.a.mark(function t() {
                  var e, n;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), d.cart.empty();
                        case 2:
                          (e = t.sent), (n = e.cart), b(n);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            E = (function () {
              var t = Object(u.a)(
                o.a.mark(function t() {
                  var e;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), d.cart.empty();
                        case 2:
                          (e = t.sent), b(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            F = (function () {
              var t = Object(u.a)(
                o.a.mark(function t(e, n) {
                  var a;
                  return o.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              d.checkout.capture(e, n)
                            );
                          case 3:
                            return (a = t.sent), x(a), (t.next = 7), E();
                          case 7:
                            t.next = 12;
                            break;
                          case 9:
                            (t.prev = 9),
                              (t.t0 = t.catch(0)),
                              k(t.t0.data.error.message);
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          return (
            Object(r.useEffect)(function () {
              w(), C();
            }, []),
            Object(a.jsx)(g.a, {
              children: Object(a.jsxs)("div", {
                children: [
                  Object(a.jsx)(S, { totalItems: j.total_items }),
                  Object(a.jsxs)(f.c, {
                    children: [
                      Object(a.jsx)(f.a, {
                        exact: !0,
                        path: "/",
                        children: Object(a.jsx)(L, {
                          products: n,
                          onAddToCart: _,
                        }),
                      }),
                      Object(a.jsx)(f.a, {
                        exact: !0,
                        path: "/cart",
                        children: Object(a.jsx)(H, {
                          cart: j,
                          handleUpdateCartQty: N,
                          handleRemoveFromCart: B,
                          handleEmptyCart: T,
                        }),
                      }),
                      Object(a.jsx)(f.a, {
                        exact: !0,
                        path: "/checkout",
                        children: Object(a.jsx)(pt, {
                          cart: j,
                          order: h,
                          onCaptureCheckout: F,
                          error: y,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
      i.a.render(Object(a.jsx)(mt, {}), document.getElementById("root"));
    },
  },
  [[134, 1, 2]],
]);
//# sourceMappingURL=main.685d4a6b.chunk.js.map
