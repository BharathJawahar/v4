(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [368],
  {
    8368: function(e, t, r) {
      'use strict';
      r.r(t),
      r.d(t, {
        lazyHydrate: function() {
          return a;
        },
      });
      const o = r(9285);
      const i = r(7294);
      const n = r(3935);
      r(4041), r(4811);
      function a(e, t, r, a) {
        const c = e.image;
        const d = e.loading;
        const g = e.isLoading;
        const s = e.isLoaded;
        const l = e.toggleIsLoaded;
        const u = e.ref;
        const b = e.imgClassName;
        const h = e.imgStyle;
        let m = void 0 === h ? {} : h;
        const f = e.objectPosition;
        const j = e.backgroundColor;
        const k = e.objectFit;
        const v = void 0 === k ? 'cover' : k;
        const y = (0, o._)(e, [
          'image',
          'loading',
          'isLoading',
          'isLoaded',
          'toggleIsLoaded',
          'ref',
          'imgClassName',
          'imgStyle',
          'objectPosition',
          'backgroundColor',
          'objectFit',
        ]);
        const C = c.width;
        const L = c.height;
        const w = c.layout;
        const p = c.images;
        const N = c.placeholder;
        const P = c.backgroundColor;
        const E = JSON.stringify(p);
        m = (0, o.a)({ objectFit: v, objectPosition: f, backgroundColor: j }, m);
        const F = i.createElement(
          o.L,
          { layout: w, width: C, height: L },
          i.createElement(o.P, Object.assign({}, (0, o.g)(N, s, w, C, L, P, v, f))),
          i.createElement(
            o.M,
            Object.assign(
              {},
              y,
              { width: C, height: L, className: b },
              (0, o.b)(g, s, p, d, l, E, u, m),
            ),
          ),
        );
        return (
          t.current &&
            ((r.current || a.current ? n.render : n.hydrate)(F, t.current), (r.current = !0)),
          function() {
            t.current && (0, n.render)(null, t.current);
          }
        );
      }
    },
  },
]);
//# sourceMappingURL=368-ac8944368b09b7147a84.js.map
