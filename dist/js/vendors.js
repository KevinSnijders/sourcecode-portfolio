'use strict';
function _typeof(e) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
var pJS = function(e, t) {
  var a = document.querySelector(
    '#' + e + ' > .particles-js-canvas-el'
  );
  this.pJS = {
    canvas: { el: a, w: a.offsetWidth, h: a.offsetHeight },
    particles: {
      number: {
        value: 400,
        density: { enable: !0, value_area: 800 }
      },
      color: { value: '#fff' },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#ff0000' },
        polygon: { nb_sides: 5 },
        image: { src: '', width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 }
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: 'none',
        random: !1,
        straight: !1,
        out_mode: 'out',
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: !0, mode: 'grab' },
        onclick: { enable: !0, mode: 'push' },
        resize: !0
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {}
  };
  var d = this.pJS;
  t && Object.deepExtend(d, t),
    (d.tmp.obj = {
      size_value: d.particles.size.value,
      size_anim_speed: d.particles.size.anim.speed,
      move_speed: d.particles.move.speed,
      line_linked_distance: d.particles.line_linked.distance,
      line_linked_width: d.particles.line_linked.width,
      mode_grab_distance: d.interactivity.modes.grab.distance,
      mode_bubble_distance: d.interactivity.modes.bubble.distance,
      mode_bubble_size: d.interactivity.modes.bubble.size,
      mode_repulse_distance: d.interactivity.modes.repulse.distance
    }),
    (d.fn.retinaInit = function() {
      d.retina_detect && 1 < window.devicePixelRatio
        ? ((d.canvas.pxratio = window.devicePixelRatio),
          (d.tmp.retina = !0))
        : ((d.canvas.pxratio = 1), (d.tmp.retina = !1)),
        (d.canvas.w = d.canvas.el.offsetWidth * d.canvas.pxratio),
        (d.canvas.h = d.canvas.el.offsetHeight * d.canvas.pxratio),
        (d.particles.size.value =
          d.tmp.obj.size_value * d.canvas.pxratio),
        (d.particles.size.anim.speed =
          d.tmp.obj.size_anim_speed * d.canvas.pxratio),
        (d.particles.move.speed =
          d.tmp.obj.move_speed * d.canvas.pxratio),
        (d.particles.line_linked.distance =
          d.tmp.obj.line_linked_distance * d.canvas.pxratio),
        (d.interactivity.modes.grab.distance =
          d.tmp.obj.mode_grab_distance * d.canvas.pxratio),
        (d.interactivity.modes.bubble.distance =
          d.tmp.obj.mode_bubble_distance * d.canvas.pxratio),
        (d.particles.line_linked.width =
          d.tmp.obj.line_linked_width * d.canvas.pxratio),
        (d.interactivity.modes.bubble.size =
          d.tmp.obj.mode_bubble_size * d.canvas.pxratio),
        (d.interactivity.modes.repulse.distance =
          d.tmp.obj.mode_repulse_distance * d.canvas.pxratio);
    }),
    (d.fn.canvasInit = function() {
      d.canvas.ctx = d.canvas.el.getContext('2d');
    }),
    (d.fn.canvasSize = function() {
      (d.canvas.el.width = d.canvas.w),
        (d.canvas.el.height = d.canvas.h),
        d &&
          d.interactivity.events.resize &&
          window.addEventListener('resize', function() {
            (d.canvas.w = d.canvas.el.offsetWidth),
              (d.canvas.h = d.canvas.el.offsetHeight),
              d.tmp.retina &&
                ((d.canvas.w *= d.canvas.pxratio),
                (d.canvas.h *= d.canvas.pxratio)),
              (d.canvas.el.width = d.canvas.w),
              (d.canvas.el.height = d.canvas.h),
              d.particles.move.enable ||
                (d.fn.particlesEmpty(),
                d.fn.particlesCreate(),
                d.fn.particlesDraw(),
                d.fn.vendors.densityAutoParticles()),
              d.fn.vendors.densityAutoParticles();
          });
    }),
    (d.fn.canvasPaint = function() {
      d.canvas.ctx.fillRect(0, 0, d.canvas.w, d.canvas.h);
    }),
    (d.fn.canvasClear = function() {
      d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h);
    }),
    (d.fn.particle = function(e, t, a) {
      if (
        ((this.radius =
          (d.particles.size.random ? Math.random() : 1) *
          d.particles.size.value),
        d.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = d.particles.size.anim.speed / 100),
          d.particles.size.anim.sync ||
            (this.vs = this.vs * Math.random())),
        (this.x = a ? a.x : Math.random() * d.canvas.w),
        (this.y = a ? a.y : Math.random() * d.canvas.h),
        this.x > d.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius &&
            (this.x = this.x + this.radius),
        this.y > d.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius &&
            (this.y = this.y + this.radius),
        d.particles.move.bounce && d.fn.vendors.checkOverlap(this, a),
        (this.color = {}),
        'object' == _typeof(e.value))
      )
        if (e.value instanceof Array) {
          var i =
            e.value[
              Math.floor(
                Math.random() * d.particles.color.value.length
              )
            ];
          this.color.rgb = hexToRgb(i);
        } else
          null != e.value.r &&
            null != e.value.g &&
            null != e.value.b &&
            (this.color.rgb = {
              r: e.value.r,
              g: e.value.g,
              b: e.value.b
            }),
            null != e.value.h &&
              null != e.value.s &&
              null != e.value.l &&
              (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
              });
      else
        'random' == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0
            })
          : 'string' == typeof e.value &&
            ((this.color = e),
            (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (d.particles.opacity.random ? Math.random() : 1) *
        d.particles.opacity.value),
        d.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = d.particles.opacity.anim.speed / 100),
          d.particles.opacity.anim.sync ||
            (this.vo = this.vo * Math.random()));
      var n = {};
      switch (d.particles.move.direction) {
        case 'top':
          n = { x: 0, y: -1 };
          break;
        case 'top-right':
          n = { x: 0.5, y: -0.5 };
          break;
        case 'right':
          n = { x: 1, y: -0 };
          break;
        case 'bottom-right':
          n = { x: 0.5, y: 0.5 };
          break;
        case 'bottom':
          n = { x: 0, y: 1 };
          break;
        case 'bottom-left':
          n = { x: -0.5, y: 1 };
          break;
        case 'left':
          n = { x: -1, y: 0 };
          break;
        case 'top-left':
          n = { x: -0.5, y: -0.5 };
          break;
        default:
          n = { x: 0, y: 0 };
      }
      d.particles.move.straight
        ? ((this.vx = n.x),
          (this.vy = n.y),
          d.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = n.x + Math.random() - 0.5),
          (this.vy = n.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var s = d.particles.shape.type;
      if ('object' == _typeof(s)) {
        if (s instanceof Array) {
          var r = s[Math.floor(Math.random() * s.length)];
          this.shape = r;
        }
      } else this.shape = s;
      if ('image' == this.shape) {
        var c = d.particles.shape;
        (this.img = {
          src: c.image.src,
          ratio: c.image.width / c.image.height
        }),
          this.img.ratio || (this.img.ratio = 1),
          'svg' == d.tmp.img_type &&
            null != d.tmp.source_svg &&
            (d.fn.vendors.createSvgImg(this),
            d.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (d.fn.particle.prototype.draw = function() {
      var e = this;
      if (null != e.radius_bubble) var t = e.radius_bubble;
      else t = e.radius;
      if (null != e.opacity_bubble) var a = e.opacity_bubble;
      else a = e.opacity;
      if (e.color.rgb)
        var i =
          'rgba(' +
          e.color.rgb.r +
          ',' +
          e.color.rgb.g +
          ',' +
          e.color.rgb.b +
          ',' +
          a +
          ')';
      else
        i =
          'hsla(' +
          e.color.hsl.h +
          ',' +
          e.color.hsl.s +
          '%,' +
          e.color.hsl.l +
          '%,' +
          a +
          ')';
      switch (
        ((d.canvas.ctx.fillStyle = i),
        d.canvas.ctx.beginPath(),
        e.shape)
      ) {
        case 'circle':
          d.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
          break;
        case 'edge':
          d.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
          break;
        case 'triangle':
          d.fn.vendors.drawShape(
            d.canvas.ctx,
            e.x - t,
            e.y + t / 1.66,
            2 * t,
            3,
            2
          );
          break;
        case 'polygon':
          d.fn.vendors.drawShape(
            d.canvas.ctx,
            e.x - t / (d.particles.shape.polygon.nb_sides / 3.5),
            e.y - t / 0.76,
            (2.66 * t) / (d.particles.shape.polygon.nb_sides / 3),
            d.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case 'star':
          d.fn.vendors.drawShape(
            d.canvas.ctx,
            e.x - (2 * t) / (d.particles.shape.polygon.nb_sides / 4),
            e.y - t / 1.52,
            (2 * t * 2.66) / (d.particles.shape.polygon.nb_sides / 3),
            d.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case 'image':
          if ('svg' == d.tmp.img_type) var n = e.img.obj;
          else n = d.tmp.img_obj;
          n &&
            d.canvas.ctx.drawImage(
              n,
              e.x - t,
              e.y - t,
              2 * t,
              (2 * t) / e.img.ratio
            );
      }
      d.canvas.ctx.closePath(),
        0 < d.particles.shape.stroke.width &&
          ((d.canvas.ctx.strokeStyle =
            d.particles.shape.stroke.color),
          (d.canvas.ctx.lineWidth = d.particles.shape.stroke.width),
          d.canvas.ctx.stroke()),
        d.canvas.ctx.fill();
    }),
    (d.fn.particlesCreate = function() {
      for (var e = 0; e < d.particles.number.value; e++)
        d.particles.array.push(
          new d.fn.particle(
            d.particles.color,
            d.particles.opacity.value
          )
        );
    }),
    (d.fn.particlesUpdate = function() {
      for (var e = 0; e < d.particles.array.length; e++) {
        var t = d.particles.array[e];
        if (d.particles.move.enable) {
          var a = d.particles.move.speed / 2;
          (t.x += t.vx * a), (t.y += t.vy * a);
        }
        if (
          (d.particles.opacity.anim.enable &&
            (1 == t.opacity_status
              ? (t.opacity >= d.particles.opacity.value &&
                  (t.opacity_status = !1),
                (t.opacity += t.vo))
              : (t.opacity <= d.particles.opacity.anim.opacity_min &&
                  (t.opacity_status = !0),
                (t.opacity -= t.vo)),
            t.opacity < 0 && (t.opacity = 0)),
          d.particles.size.anim.enable &&
            (1 == t.size_status
              ? (t.radius >= d.particles.size.value &&
                  (t.size_status = !1),
                (t.radius += t.vs))
              : (t.radius <= d.particles.size.anim.size_min &&
                  (t.size_status = !0),
                (t.radius -= t.vs)),
            t.radius < 0 && (t.radius = 0)),
          'bounce' == d.particles.move.out_mode)
        )
          var i = {
            x_left: t.radius,
            x_right: d.canvas.w,
            y_top: t.radius,
            y_bottom: d.canvas.h
          };
        else
          i = {
            x_left: -t.radius,
            x_right: d.canvas.w + t.radius,
            y_top: -t.radius,
            y_bottom: d.canvas.h + t.radius
          };
        switch (
          (t.x - t.radius > d.canvas.w
            ? ((t.x = i.x_left), (t.y = Math.random() * d.canvas.h))
            : t.x + t.radius < 0 &&
              ((t.x = i.x_right), (t.y = Math.random() * d.canvas.h)),
          t.y - t.radius > d.canvas.h
            ? ((t.y = i.y_top), (t.x = Math.random() * d.canvas.w))
            : t.y + t.radius < 0 &&
              ((t.y = i.y_bottom),
              (t.x = Math.random() * d.canvas.w)),
          d.particles.move.out_mode)
        ) {
          case 'bounce':
            t.x + t.radius > d.canvas.w
              ? (t.vx = -t.vx)
              : t.x - t.radius < 0 && (t.vx = -t.vx),
              t.y + t.radius > d.canvas.h
                ? (t.vy = -t.vy)
                : t.y - t.radius < 0 && (t.vy = -t.vy);
        }
        if (
          (isInArray('grab', d.interactivity.events.onhover.mode) &&
            d.fn.modes.grabParticle(t),
          (isInArray('bubble', d.interactivity.events.onhover.mode) ||
            isInArray(
              'bubble',
              d.interactivity.events.onclick.mode
            )) &&
            d.fn.modes.bubbleParticle(t),
          (isInArray(
            'repulse',
            d.interactivity.events.onhover.mode
          ) ||
            isInArray(
              'repulse',
              d.interactivity.events.onclick.mode
            )) &&
            d.fn.modes.repulseParticle(t),
          d.particles.line_linked.enable ||
            d.particles.move.attract.enable)
        )
          for (var n = e + 1; n < d.particles.array.length; n++) {
            var s = d.particles.array[n];
            d.particles.line_linked.enable &&
              d.fn.interact.linkParticles(t, s),
              d.particles.move.attract.enable &&
                d.fn.interact.attractParticles(t, s),
              d.particles.move.bounce &&
                d.fn.interact.bounceParticles(t, s);
          }
      }
    }),
    (d.fn.particlesDraw = function() {
      d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h),
        d.fn.particlesUpdate();
      for (var e = 0; e < d.particles.array.length; e++) {
        d.particles.array[e].draw();
      }
    }),
    (d.fn.particlesEmpty = function() {
      d.particles.array = [];
    }),
    (d.fn.particlesRefresh = function() {
      cancelRequestAnimFrame(d.fn.checkAnimFrame),
        cancelRequestAnimFrame(d.fn.drawAnimFrame),
        (d.tmp.source_svg = void 0),
        (d.tmp.img_obj = void 0),
        (d.tmp.count_svg = 0),
        d.fn.particlesEmpty(),
        d.fn.canvasClear(),
        d.fn.vendors.start();
    }),
    (d.fn.interact.linkParticles = function(e, t) {
      var a = e.x - t.x,
        i = e.y - t.y,
        n = Math.sqrt(a * a + i * i);
      if (n <= d.particles.line_linked.distance) {
        var s =
          d.particles.line_linked.opacity -
          n /
            (1 / d.particles.line_linked.opacity) /
            d.particles.line_linked.distance;
        if (0 < s) {
          var r = d.particles.line_linked.color_rgb_line;
          (d.canvas.ctx.strokeStyle =
            'rgba(' + r.r + ',' + r.g + ',' + r.b + ',' + s + ')'),
            (d.canvas.ctx.lineWidth = d.particles.line_linked.width),
            d.canvas.ctx.beginPath(),
            d.canvas.ctx.moveTo(e.x, e.y),
            d.canvas.ctx.lineTo(t.x, t.y),
            d.canvas.ctx.stroke(),
            d.canvas.ctx.closePath();
        }
      }
    }),
    (d.fn.interact.attractParticles = function(e, t) {
      var a = e.x - t.x,
        i = e.y - t.y;
      if (
        Math.sqrt(a * a + i * i) <= d.particles.line_linked.distance
      ) {
        var n = a / (1e3 * d.particles.move.attract.rotateX),
          s = i / (1e3 * d.particles.move.attract.rotateY);
        (e.vx -= n), (e.vy -= s), (t.vx += n), (t.vy += s);
      }
    }),
    (d.fn.interact.bounceParticles = function(e, t) {
      var a = e.x - t.x,
        i = e.y - t.y;
      Math.sqrt(a * a + i * i) <= e.radius + t.radius &&
        ((e.vx = -e.vx),
        (e.vy = -e.vy),
        (t.vx = -t.vx),
        (t.vy = -t.vy));
    }),
    (d.fn.modes.pushParticles = function(e, t) {
      d.tmp.pushing = !0;
      for (var a = 0; a < e; a++)
        d.particles.array.push(
          new d.fn.particle(
            d.particles.color,
            d.particles.opacity.value,
            {
              x: t ? t.pos_x : Math.random() * d.canvas.w,
              y: t ? t.pos_y : Math.random() * d.canvas.h
            }
          )
        ),
          a == e - 1 &&
            (d.particles.move.enable || d.fn.particlesDraw(),
            (d.tmp.pushing = !1));
    }),
    (d.fn.modes.removeParticles = function(e) {
      d.particles.array.splice(0, e),
        d.particles.move.enable || d.fn.particlesDraw();
    }),
    (d.fn.modes.bubbleParticle = function(c) {
      if (
        d.interactivity.events.onhover.enable &&
        isInArray('bubble', d.interactivity.events.onhover.mode)
      ) {
        var e = function() {
            (c.opacity_bubble = c.opacity),
              (c.radius_bubble = c.radius);
          },
          t = c.x - d.interactivity.mouse.pos_x,
          a = c.y - d.interactivity.mouse.pos_y,
          i =
            1 -
            (l = Math.sqrt(t * t + a * a)) /
              d.interactivity.modes.bubble.distance;
        if (l <= d.interactivity.modes.bubble.distance) {
          if (0 <= i && 'mousemove' == d.interactivity.status) {
            if (
              d.interactivity.modes.bubble.size !=
              d.particles.size.value
            )
              if (
                d.interactivity.modes.bubble.size >
                d.particles.size.value
              ) {
                0 <=
                  (s =
                    c.radius +
                    d.interactivity.modes.bubble.size * i) &&
                  (c.radius_bubble = s);
              } else {
                var n = c.radius - d.interactivity.modes.bubble.size,
                  s = c.radius - n * i;
                c.radius_bubble = 0 < s ? s : 0;
              }
            var r;
            if (
              d.interactivity.modes.bubble.opacity !=
              d.particles.opacity.value
            )
              if (
                d.interactivity.modes.bubble.opacity >
                d.particles.opacity.value
              )
                (r = d.interactivity.modes.bubble.opacity * i) >
                  c.opacity &&
                  r <= d.interactivity.modes.bubble.opacity &&
                  (c.opacity_bubble = r);
              else
                (r =
                  c.opacity -
                  (d.particles.opacity.value -
                    d.interactivity.modes.bubble.opacity) *
                    i) < c.opacity &&
                  r >= d.interactivity.modes.bubble.opacity &&
                  (c.opacity_bubble = r);
          }
        } else e();
        'mouseleave' == d.interactivity.status && e();
      } else if (
        d.interactivity.events.onclick.enable &&
        isInArray('bubble', d.interactivity.events.onclick.mode)
      ) {
        var o = function(e, t, a, i, n) {
          if (e != t)
            if (d.tmp.bubble_duration_end)
              null != a &&
                ((r =
                  e +
                  (e -
                    (i -
                      (v * (i - e)) /
                        d.interactivity.modes.bubble.duration))),
                'size' == n && (c.radius_bubble = r),
                'opacity' == n && (c.opacity_bubble = r));
            else if (l <= d.interactivity.modes.bubble.distance) {
              if (null != a) var s = a;
              else s = i;
              if (s != e) {
                var r =
                  i -
                  (v * (i - e)) /
                    d.interactivity.modes.bubble.duration;
                'size' == n && (c.radius_bubble = r),
                  'opacity' == n && (c.opacity_bubble = r);
              }
            } else
              'size' == n && (c.radius_bubble = void 0),
                'opacity' == n && (c.opacity_bubble = void 0);
        };
        if (d.tmp.bubble_clicking) {
          (t = c.x - d.interactivity.mouse.click_pos_x),
            (a = c.y - d.interactivity.mouse.click_pos_y);
          var l = Math.sqrt(t * t + a * a),
            v =
              (new Date().getTime() -
                d.interactivity.mouse.click_time) /
              1e3;
          v > d.interactivity.modes.bubble.duration &&
            (d.tmp.bubble_duration_end = !0),
            v > 2 * d.interactivity.modes.bubble.duration &&
              ((d.tmp.bubble_clicking = !1),
              (d.tmp.bubble_duration_end = !1));
        }
        d.tmp.bubble_clicking &&
          (o(
            d.interactivity.modes.bubble.size,
            d.particles.size.value,
            c.radius_bubble,
            c.radius,
            'size'
          ),
          o(
            d.interactivity.modes.bubble.opacity,
            d.particles.opacity.value,
            c.opacity_bubble,
            c.opacity,
            'opacity'
          ));
      }
    }),
    (d.fn.modes.repulseParticle = function(i) {
      if (
        d.interactivity.events.onhover.enable &&
        isInArray('repulse', d.interactivity.events.onhover.mode) &&
        'mousemove' == d.interactivity.status
      ) {
        var e = i.x - d.interactivity.mouse.pos_x,
          t = i.y - d.interactivity.mouse.pos_y,
          a = Math.sqrt(e * e + t * t),
          n = e / a,
          s = t / a,
          r = clamp(
            (1 / (o = d.interactivity.modes.repulse.distance)) *
              (-1 * Math.pow(a / o, 2) + 1) *
              o *
              100,
            0,
            50
          ),
          c = { x: i.x + n * r, y: i.y + s * r };
        'bounce' == d.particles.move.out_mode
          ? (0 < c.x - i.radius &&
              c.x + i.radius < d.canvas.w &&
              (i.x = c.x),
            0 < c.y - i.radius &&
              c.y + i.radius < d.canvas.h &&
              (i.y = c.y))
          : ((i.x = c.x), (i.y = c.y));
      } else if (
        d.interactivity.events.onclick.enable &&
        isInArray('repulse', d.interactivity.events.onclick.mode)
      )
        if (
          (d.tmp.repulse_finish ||
            (d.tmp.repulse_count++,
            d.tmp.repulse_count == d.particles.array.length &&
              (d.tmp.repulse_finish = !0)),
          d.tmp.repulse_clicking)
        ) {
          var o = Math.pow(
              d.interactivity.modes.repulse.distance / 6,
              3
            ),
            l = d.interactivity.mouse.click_pos_x - i.x,
            v = d.interactivity.mouse.click_pos_y - i.y,
            p = l * l + v * v,
            m = (-o / p) * 1;
          p <= o &&
            (function() {
              var e = Math.atan2(v, l);
              if (
                ((i.vx = m * Math.cos(e)),
                (i.vy = m * Math.sin(e)),
                'bounce' == d.particles.move.out_mode)
              ) {
                var t = i.x + i.vx,
                  a = i.y + i.vy;
                t + i.radius > d.canvas.w
                  ? (i.vx = -i.vx)
                  : t - i.radius < 0 && (i.vx = -i.vx),
                  a + i.radius > d.canvas.h
                    ? (i.vy = -i.vy)
                    : a - i.radius < 0 && (i.vy = -i.vy);
              }
            })();
        } else
          0 == d.tmp.repulse_clicking &&
            ((i.vx = i.vx_i), (i.vy = i.vy_i));
    }),
    (d.fn.modes.grabParticle = function(e) {
      if (
        d.interactivity.events.onhover.enable &&
        'mousemove' == d.interactivity.status
      ) {
        var t = e.x - d.interactivity.mouse.pos_x,
          a = e.y - d.interactivity.mouse.pos_y,
          i = Math.sqrt(t * t + a * a);
        if (i <= d.interactivity.modes.grab.distance) {
          var n =
            d.interactivity.modes.grab.line_linked.opacity -
            i /
              (1 / d.interactivity.modes.grab.line_linked.opacity) /
              d.interactivity.modes.grab.distance;
          if (0 < n) {
            var s = d.particles.line_linked.color_rgb_line;
            (d.canvas.ctx.strokeStyle =
              'rgba(' + s.r + ',' + s.g + ',' + s.b + ',' + n + ')'),
              (d.canvas.ctx.lineWidth =
                d.particles.line_linked.width),
              d.canvas.ctx.beginPath(),
              d.canvas.ctx.moveTo(e.x, e.y),
              d.canvas.ctx.lineTo(
                d.interactivity.mouse.pos_x,
                d.interactivity.mouse.pos_y
              ),
              d.canvas.ctx.stroke(),
              d.canvas.ctx.closePath();
          }
        }
      }
    }),
    (d.fn.vendors.eventsListeners = function() {
      'window' == d.interactivity.detect_on
        ? (d.interactivity.el = window)
        : (d.interactivity.el = d.canvas.el),
        (d.interactivity.events.onhover.enable ||
          d.interactivity.events.onclick.enable) &&
          (d.interactivity.el.addEventListener('mousemove', function(
            e
          ) {
            if (d.interactivity.el == window)
              var t = e.clientX,
                a = e.clientY;
            else
              (t = e.offsetX || e.clientX),
                (a = e.offsetY || e.clientY);
            (d.interactivity.mouse.pos_x = t),
              (d.interactivity.mouse.pos_y = a),
              d.tmp.retina &&
                ((d.interactivity.mouse.pos_x *= d.canvas.pxratio),
                (d.interactivity.mouse.pos_y *= d.canvas.pxratio)),
              (d.interactivity.status = 'mousemove');
          }),
          d.interactivity.el.addEventListener('mouseleave', function(
            e
          ) {
            (d.interactivity.mouse.pos_x = null),
              (d.interactivity.mouse.pos_y = null),
              (d.interactivity.status = 'mouseleave');
          })),
        d.interactivity.events.onclick.enable &&
          d.interactivity.el.addEventListener('click', function() {
            if (
              ((d.interactivity.mouse.click_pos_x =
                d.interactivity.mouse.pos_x),
              (d.interactivity.mouse.click_pos_y =
                d.interactivity.mouse.pos_y),
              (d.interactivity.mouse.click_time = new Date().getTime()),
              d.interactivity.events.onclick.enable)
            )
              switch (d.interactivity.events.onclick.mode) {
                case 'push':
                  d.particles.move.enable
                    ? d.fn.modes.pushParticles(
                        d.interactivity.modes.push.particles_nb,
                        d.interactivity.mouse
                      )
                    : 1 == d.interactivity.modes.push.particles_nb
                    ? d.fn.modes.pushParticles(
                        d.interactivity.modes.push.particles_nb,
                        d.interactivity.mouse
                      )
                    : 1 < d.interactivity.modes.push.particles_nb &&
                      d.fn.modes.pushParticles(
                        d.interactivity.modes.push.particles_nb
                      );
                  break;
                case 'remove':
                  d.fn.modes.removeParticles(
                    d.interactivity.modes.remove.particles_nb
                  );
                  break;
                case 'bubble':
                  d.tmp.bubble_clicking = !0;
                  break;
                case 'repulse':
                  (d.tmp.repulse_clicking = !0),
                    (d.tmp.repulse_count = 0),
                    (d.tmp.repulse_finish = !1),
                    setTimeout(function() {
                      d.tmp.repulse_clicking = !1;
                    }, 1e3 * d.interactivity.modes.repulse.duration);
              }
          });
    }),
    (d.fn.vendors.densityAutoParticles = function() {
      if (d.particles.number.density.enable) {
        var e = (d.canvas.el.width * d.canvas.el.height) / 1e3;
        d.tmp.retina && (e /= 2 * d.canvas.pxratio);
        var t =
            (e * d.particles.number.value) /
            d.particles.number.density.value_area,
          a = d.particles.array.length - t;
        a < 0
          ? d.fn.modes.pushParticles(Math.abs(a))
          : d.fn.modes.removeParticles(a);
      }
    }),
    (d.fn.vendors.checkOverlap = function(e, t) {
      for (var a = 0; a < d.particles.array.length; a++) {
        var i = d.particles.array[a],
          n = e.x - i.x,
          s = e.y - i.y;
        Math.sqrt(n * n + s * s) <= e.radius + i.radius &&
          ((e.x = t ? t.x : Math.random() * d.canvas.w),
          (e.y = t ? t.y : Math.random() * d.canvas.h),
          d.fn.vendors.checkOverlap(e));
      }
    }),
    (d.fn.vendors.createSvgImg = function(s) {
      var e = d.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(
          e,
          t,
          a,
          i
        ) {
          if (s.color.rgb)
            var n =
              'rgba(' +
              s.color.rgb.r +
              ',' +
              s.color.rgb.g +
              ',' +
              s.color.rgb.b +
              ',' +
              s.opacity +
              ')';
          else
            n =
              'hsla(' +
              s.color.hsl.h +
              ',' +
              s.color.hsl.s +
              '%,' +
              s.color.hsl.l +
              '%,' +
              s.opacity +
              ')';
          return n;
        }),
        t = new Blob([e], { type: 'image/svg+xml;charset=utf-8' }),
        a = window.URL || window.webkitURL || window,
        i = a.createObjectURL(t),
        n = new Image();
      n.addEventListener('load', function() {
        (s.img.obj = n),
          (s.img.loaded = !0),
          a.revokeObjectURL(i),
          d.tmp.count_svg++;
      }),
        (n.src = i);
    }),
    (d.fn.vendors.destroypJS = function() {
      cancelAnimationFrame(d.fn.drawAnimFrame),
        a.remove(),
        (pJSDom = null);
    }),
    (d.fn.vendors.drawShape = function(e, t, a, i, n, s) {
      var r = n * s,
        c = n / s,
        o = (180 * (c - 2)) / c,
        l = Math.PI - (Math.PI * o) / 180;
      e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
      for (var v = 0; v < r; v++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
      e.fill(), e.restore();
    }),
    (d.fn.vendors.exportImg = function() {
      window.open(d.canvas.el.toDataURL('image/png'), '_blank');
    }),
    (d.fn.vendors.loadImg = function(e) {
      if (
        ((d.tmp.img_error = void 0),
        '' != d.particles.shape.image.src)
      )
        if ('svg' == e) {
          var t = new XMLHttpRequest();
          t.open('GET', d.particles.shape.image.src),
            (t.onreadystatechange = function(e) {
              4 == t.readyState &&
                (200 == t.status
                  ? ((d.tmp.source_svg = e.currentTarget.response),
                    d.fn.vendors.checkBeforeDraw())
                  : (console.log('Error pJS - Image not found'),
                    (d.tmp.img_error = !0)));
            }),
            t.send();
        } else {
          var a = new Image();
          a.addEventListener('load', function() {
            (d.tmp.img_obj = a), d.fn.vendors.checkBeforeDraw();
          }),
            (a.src = d.particles.shape.image.src);
        }
      else
        console.log('Error pJS - No image.src'),
          (d.tmp.img_error = !0);
    }),
    (d.fn.vendors.draw = function() {
      'image' == d.particles.shape.type
        ? 'svg' == d.tmp.img_type
          ? d.tmp.count_svg >= d.particles.number.value
            ? (d.fn.particlesDraw(),
              d.particles.move.enable
                ? (d.fn.drawAnimFrame = requestAnimFrame(
                    d.fn.vendors.draw
                  ))
                : cancelRequestAnimFrame(d.fn.drawAnimFrame))
            : d.tmp.img_error ||
              (d.fn.drawAnimFrame = requestAnimFrame(
                d.fn.vendors.draw
              ))
          : null != d.tmp.img_obj
          ? (d.fn.particlesDraw(),
            d.particles.move.enable
              ? (d.fn.drawAnimFrame = requestAnimFrame(
                  d.fn.vendors.draw
                ))
              : cancelRequestAnimFrame(d.fn.drawAnimFrame))
          : d.tmp.img_error ||
            (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw))
        : (d.fn.particlesDraw(),
          d.particles.move.enable
            ? (d.fn.drawAnimFrame = requestAnimFrame(
                d.fn.vendors.draw
              ))
            : cancelRequestAnimFrame(d.fn.drawAnimFrame));
    }),
    (d.fn.vendors.checkBeforeDraw = function() {
      'image' == d.particles.shape.type
        ? 'svg' == d.tmp.img_type && null == d.tmp.source_svg
          ? (d.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(d.tmp.checkAnimFrame),
            d.tmp.img_error ||
              (d.fn.vendors.init(), d.fn.vendors.draw()))
        : (d.fn.vendors.init(), d.fn.vendors.draw());
    }),
    (d.fn.vendors.init = function() {
      d.fn.retinaInit(),
        d.fn.canvasInit(),
        d.fn.canvasSize(),
        d.fn.canvasPaint(),
        d.fn.particlesCreate(),
        d.fn.vendors.densityAutoParticles(),
        (d.particles.line_linked.color_rgb_line = hexToRgb(
          d.particles.line_linked.color
        ));
    }),
    (d.fn.vendors.start = function() {
      isInArray('image', d.particles.shape.type)
        ? ((d.tmp.img_type = d.particles.shape.image.src.substr(
            d.particles.shape.image.src.length - 3
          )),
          d.fn.vendors.loadImg(d.tmp.img_type))
        : d.fn.vendors.checkBeforeDraw();
    }),
    d.fn.vendors.eventsListeners(),
    d.fn.vendors.start();
};
function hexToRgb(e) {
  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(
    e,
    t,
    a,
    i
  ) {
    return t + t + a + a + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t
    ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
      }
    : null;
}
function clamp(e, t, a) {
  return Math.min(Math.max(e, t), a);
}
function isInArray(e, t) {
  return -1 < t.indexOf(e);
}
(Object.deepExtend = function e(t, a) {
  for (var i in a)
    a[i] && a[i].constructor && a[i].constructor === Object
      ? ((t[i] = t[i] || {}), e(t[i], a[i]))
      : (t[i] = a[i]);
  return t;
}),
  (window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(e) {
      window.setTimeout(e, 1e3 / 60);
    }),
  (window.cancelRequestAnimFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout),
  (window.pJSDom = []),
  (window.particlesJS = function(e, t) {
    'string' != typeof e && ((t = e), (e = 'particles-js')),
      (e = e || 'particles-js');
    var a = document.getElementById(e),
      i = 'particles-js-canvas-el',
      n = a.getElementsByClassName(i);
    if (n.length) for (; 0 < n.length; ) a.removeChild(n[0]);
    var s = document.createElement('canvas');
    (s.className = i),
      (s.style.width = '100%'),
      (s.style.height = '100%'),
      null != document.getElementById(e).appendChild(s) &&
        pJSDom.push(new pJS(e, t));
  }),
  (window.particlesJS.load = function(a, e, i) {
    var n = new XMLHttpRequest();
    n.open('GET', e),
      (n.onreadystatechange = function(e) {
        if (4 == n.readyState)
          if (200 == n.status) {
            var t = JSON.parse(e.currentTarget.response);
            window.particlesJS(a, t), i && i();
          } else
            console.log(
              'Error pJS - XMLHttpRequest status: ' + n.status
            ),
              console.log('Error pJS - File config not found');
      }),
      n.send();
  });
('use strict');
function _typeof(e) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
!(function(e, t) {
  'object' ==
    ('undefined' == typeof module ? 'undefined' : _typeof(module)) &&
  'object' == _typeof(module.exports)
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document)
              throw new Error(
                'jQuery requires a window with a document'
              );
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : void 0, function(C, e) {
  function t(e, t) {
    return t.toUpperCase();
  }
  var n = [],
    k = C.document,
    c = n.slice,
    g = n.concat,
    a = n.push,
    i = n.indexOf,
    r = {},
    o = r.toString,
    h = r.hasOwnProperty,
    v = {},
    s = '2.2.4',
    S = function e(t, n) {
      return new e.fn.init(t, n);
    },
    u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    l = /^-ms-/,
    f = /-([\da-z])/gi;
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      n = S.type(e);
    return (
      'function' !== n &&
      !S.isWindow(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype = {
    jquery: s,
    constructor: S,
    selector: '',
    length: 0,
    toArray: function() {
      return c.call(this);
    },
    get: function(e) {
      return null != e
        ? e < 0
          ? this[e + this.length]
          : this[e]
        : c.call(this);
    },
    pushStack: function(e) {
      var t = S.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function(e) {
      return S.each(this, e);
    },
    map: function(n) {
      return this.pushStack(
        S.map(this, function(e, t) {
          return n.call(e, t, e);
        })
      );
    },
    slice: function() {
      return this.pushStack(c.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: a,
    sort: n.sort,
    splice: n.splice
  }),
    (S.extend = S.fn.extend = function() {
      var e,
        t,
        n,
        r,
        i,
        o,
        s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
      for (
        'boolean' == typeof s &&
          ((l = s), (s = arguments[a] || {}), a++),
          'object' == _typeof(s) || S.isFunction(s) || (s = {}),
          a === u && ((s = this), a--);
        a < u;
        a++
      )
        if (null != (e = arguments[a]))
          for (t in e)
            (n = s[t]),
              s !== (r = e[t]) &&
                (l && r && (S.isPlainObject(r) || (i = S.isArray(r)))
                  ? ((o = i
                      ? ((i = !1), n && S.isArray(n) ? n : [])
                      : n && S.isPlainObject(n)
                      ? n
                      : {}),
                    (s[t] = S.extend(l, o, r)))
                  : void 0 !== r && (s[t] = r));
      return s;
    }),
    S.extend({
      expando: 'jQuery' + (s + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {},
      isFunction: function(e) {
        return 'function' === S.type(e);
      },
      isArray: Array.isArray,
      isWindow: function(e) {
        return null != e && e === e.window;
      },
      isNumeric: function(e) {
        var t = e && e.toString();
        return !S.isArray(e) && 0 <= t - parseFloat(t) + 1;
      },
      isPlainObject: function(e) {
        var t;
        if ('object' !== S.type(e) || e.nodeType || S.isWindow(e))
          return !1;
        if (
          e.constructor &&
          !h.call(e, 'constructor') &&
          !h.call(e.constructor.prototype || {}, 'isPrototypeOf')
        )
          return !1;
        for (t in e);
        return void 0 === t || h.call(e, t);
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function(e) {
        return null == e
          ? e + ''
          : 'object' == _typeof(e) || 'function' == typeof e
          ? r[o.call(e)] || 'object'
          : _typeof(e);
      },
      globalEval: function(e) {
        var t,
          n = eval;
        (e = S.trim(e)) &&
          (1 === e.indexOf('use strict')
            ? (((t = k.createElement('script')).text = e),
              k.head.appendChild(t).parentNode.removeChild(t))
            : n(e));
      },
      camelCase: function(e) {
        return e.replace(l, 'ms-').replace(f, t);
      },
      nodeName: function(e, t) {
        return (
          e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        );
      },
      each: function(e, t) {
        var n,
          r = 0;
        if (p(e))
          for (
            n = e.length;
            r < n && !1 !== t.call(e[r], r, e[r]);
            r++
          );
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function(e) {
        return null == e ? '' : (e + '').replace(u, '');
      },
      makeArray: function(e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, 'string' == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++)
          e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function(e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
          !t(e[i], i) != s && r.push(e[i]);
        return r;
      },
      map: function(e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return g.apply([], s);
      },
      guid: 1,
      proxy: function(e, t) {
        var n, r, i;
        return (
          'string' == typeof t && ((n = e[t]), (t = e), (e = n)),
          S.isFunction(e)
            ? ((r = c.call(arguments, 2)),
              ((i = function() {
                return e.apply(
                  t || this,
                  r.concat(c.call(arguments))
                );
              }).guid = e.guid = e.guid || S.guid++),
              i)
            : void 0
        );
      },
      now: Date.now,
      support: v
    }),
    'function' == typeof Symbol &&
      (S.fn[Symbol.iterator] = n[Symbol.iterator]),
    S.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function(e, t) {
        r['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var d = (function(n) {
    function f(e, t, n) {
      var r = '0x' + t - 65536;
      return r != r || n
        ? t
        : r < 0
        ? String.fromCharCode(65536 + r)
        : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
    }
    function i() {
      T();
    }
    var e,
      h,
      b,
      o,
      s,
      g,
      p,
      v,
      w,
      u,
      l,
      T,
      C,
      a,
      k,
      m,
      c,
      d,
      y,
      S = 'sizzle' + 1 * new Date(),
      x = n.document,
      E = 0,
      r = 0,
      N = ie(),
      j = ie(),
      D = ie(),
      A = function(e, t) {
        return e === t && (l = !0), 0;
      },
      q = {}.hasOwnProperty,
      t = [],
      L = t.pop,
      H = t.push,
      O = t.push,
      F = t.slice,
      P = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t) return n;
        return -1;
      },
      R =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      I = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      W =
        '\\[' +
        M +
        '*(' +
        I +
        ')(?:' +
        M +
        '*([*^$|!~]?=)' +
        M +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        I +
        '))|)' +
        M +
        '*\\]',
      _ =
        ':(' +
        I +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        W +
        ')*)|.*)\\)|)',
      $ = new RegExp(M + '+', 'g'),
      B = new RegExp(
        '^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$',
        'g'
      ),
      X = new RegExp('^' + M + '*,' + M + '*'),
      z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp('=' + M + '*([^\\]\'"]*?)' + M + '*\\]', 'g'),
      V = new RegExp(_),
      Y = new RegExp('^' + I + '$'),
      G = {
        ID: new RegExp('^#(' + I + ')'),
        CLASS: new RegExp('^\\.(' + I + ')'),
        TAG: new RegExp('^(' + I + '|[*])'),
        ATTR: new RegExp('^' + W),
        PSEUDO: new RegExp('^' + _),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            M +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            M +
            '*(?:([+-]|)' +
            M +
            '*(\\d+)|))' +
            M +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + R + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            M +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            M +
            '*((?:-\\d)?\\d*)' +
            M +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = /'|\\/g,
      ne = new RegExp(
        '\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)',
        'ig'
      );
    try {
      O.apply((t = F.call(x.childNodes)), x.childNodes),
        t[x.childNodes.length].nodeType;
    } catch (e) {
      O = {
        apply: t.length
          ? function(e, t) {
              H.apply(e, F.call(t));
            }
          : function(e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            }
      };
    }
    function re(e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l,
        c,
        f,
        p = t && t.ownerDocument,
        d = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof e ||
          !e ||
          (1 !== d && 9 !== d && 11 !== d))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : x) !== C && T(t),
        (t = t || C),
        k)
      ) {
        if (11 !== d && (l = Z.exec(e)))
          if ((i = l[1])) {
            if (9 === d) {
              if (!(s = t.getElementById(i))) return n;
              if (s.id === i) return n.push(s), n;
            } else if (
              p &&
              (s = p.getElementById(i)) &&
              y(t, s) &&
              s.id === i
            )
              return n.push(s), n;
          } else {
            if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = l[3]) &&
              h.getElementsByClassName &&
              t.getElementsByClassName
            )
              return O.apply(n, t.getElementsByClassName(i)), n;
          }
        if (h.qsa && !D[e + ' '] && (!m || !m.test(e))) {
          if (1 !== d) (p = t), (f = e);
          else if ('object' !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute('id'))
                ? (a = a.replace(te, '\\$&'))
                : t.setAttribute('id', (a = S)),
                o = (c = g(e)).length,
                u = Y.test(a) ? '#' + a : "[id='" + a + "']";
              o--;

            )
              c[o] = u + ' ' + he(c[o]);
            (f = c.join(',')),
              (p = (ee.test(e) && pe(t.parentNode)) || t);
          }
          if (f)
            try {
              return O.apply(n, p.querySelectorAll(f)), n;
            } catch (e) {
            } finally {
              a === S && t.removeAttribute('id');
            }
        }
      }
      return v(e.replace(B, '$1'), t, n, r);
    }
    function ie() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        );
      };
    }
    function oe(e) {
      return (e[S] = !0), e;
    }
    function se(e) {
      var t = C.createElement('div');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ae(e, t) {
      for (var n = e.split('|'), r = n.length; r--; )
        b.attrHandle[n[r]] = t;
    }
    function ue(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function le(t) {
      return function(e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function ce(n) {
      return function(e) {
        var t = e.nodeName.toLowerCase();
        return ('input' === t || 'button' === t) && e.type === n;
      };
    }
    function fe(s) {
      return oe(function(o) {
        return (
          (o = +o),
          oe(function(e, t) {
            for (var n, r = s([], e.length, o), i = r.length; i--; )
              e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function pe(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((h = re.support = {}),
    (s = re.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && 'HTML' !== t.nodeName;
    }),
    (T = re.setDocument = function(e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : x;
      return (
        r !== C &&
          9 === r.nodeType &&
          r.documentElement &&
          ((a = (C = r).documentElement),
          (k = !s(C)),
          (n = C.defaultView) &&
            n.top !== n &&
            (n.addEventListener
              ? n.addEventListener('unload', i, !1)
              : n.attachEvent && n.attachEvent('onunload', i)),
          (h.attributes = se(function(e) {
            return (e.className = 'i'), !e.getAttribute('className');
          })),
          (h.getElementsByTagName = se(function(e) {
            return (
              e.appendChild(C.createComment('')),
              !e.getElementsByTagName('*').length
            );
          })),
          (h.getElementsByClassName = K.test(
            C.getElementsByClassName
          )),
          (h.getById = se(function(e) {
            return (
              (a.appendChild(e).id = S),
              !C.getElementsByName || !C.getElementsByName(S).length
            );
          })),
          h.getById
            ? ((b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && k) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }),
              (b.filter.ID = function(e) {
                var t = e.replace(ne, f);
                return function(e) {
                  return e.getAttribute('id') === t;
                };
              }))
            : (delete b.find.ID,
              (b.filter.ID = function(e) {
                var n = e.replace(ne, f);
                return function(e) {
                  var t =
                    void 0 !== e.getAttributeNode &&
                    e.getAttributeNode('id');
                  return t && t.value === n;
                };
              })),
          (b.find.TAG = h.getElementsByTagName
            ? function(e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : h.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function(e, t) {
                var n,
                  r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);
                if ('*' !== e) return o;
                for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                return r;
              }),
          (b.find.CLASS =
            h.getElementsByClassName &&
            function(e, t) {
              return void 0 !== t.getElementsByClassName && k
                ? t.getElementsByClassName(e)
                : void 0;
            }),
          (c = []),
          (m = []),
          (h.qsa = K.test(C.querySelectorAll)) &&
            (se(function(e) {
              (a.appendChild(e).innerHTML =
                "<a id='" +
                S +
                "'></a><select id='" +
                S +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  m.push('[*^$]=' + M + '*(?:\'\'|"")'),
                e.querySelectorAll('[selected]').length ||
                  m.push('\\[' + M + '*(?:value|' + R + ')'),
                e.querySelectorAll('[id~=' + S + '-]').length ||
                  m.push('~='),
                e.querySelectorAll(':checked').length ||
                  m.push(':checked'),
                e.querySelectorAll('a#' + S + '+*').length ||
                  m.push('.#.+[+~]');
            }),
            se(function(e) {
              var t = C.createElement('input');
              t.setAttribute('type', 'hidden'),
                e.appendChild(t).setAttribute('name', 'D'),
                e.querySelectorAll('[name=d]').length &&
                  m.push('name' + M + '*[*^$|!~]?='),
                e.querySelectorAll(':enabled').length ||
                  m.push(':enabled', ':disabled'),
                e.querySelectorAll('*,:x'),
                m.push(',.*:');
            })),
          (h.matchesSelector = K.test(
            (d =
              a.matches ||
              a.webkitMatchesSelector ||
              a.mozMatchesSelector ||
              a.oMatchesSelector ||
              a.msMatchesSelector)
          )) &&
            se(function(e) {
              (h.disconnectedMatch = d.call(e, 'div')),
                d.call(e, "[s!='']:x"),
                c.push('!=', _);
            }),
          (m = m.length && new RegExp(m.join('|'))),
          (c = c.length && new RegExp(c.join('|'))),
          (t = K.test(a.compareDocumentPosition)),
          (y =
            t || K.test(a.contains)
              ? function(e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                  return (
                    e === r ||
                    !(
                      !r ||
                      1 !== r.nodeType ||
                      !(n.contains
                        ? n.contains(r)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(r))
                    )
                  );
                }
              : function(e, t) {
                  if (t)
                    for (; (t = t.parentNode); )
                      if (t === e) return !0;
                  return !1;
                }),
          (A = t
            ? function(e, t) {
                if (e === t) return (l = !0), 0;
                var n =
                  !e.compareDocumentPosition -
                  !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) ===
                      (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!h.sortDetached &&
                    t.compareDocumentPosition(e) === n)
                    ? e === C || (e.ownerDocument === x && y(x, e))
                      ? -1
                      : t === C || (t.ownerDocument === x && y(x, t))
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function(e, t) {
                if (e === t) return (l = !0), 0;
                var n,
                  r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  s = [e],
                  a = [t];
                if (!i || !o)
                  return e === C
                    ? -1
                    : t === C
                    ? 1
                    : i
                    ? -1
                    : o
                    ? 1
                    : u
                    ? P(u, e) - P(u, t)
                    : 0;
                if (i === o) return ue(e, t);
                for (n = e; (n = n.parentNode); ) s.unshift(n);
                for (n = t; (n = n.parentNode); ) a.unshift(n);
                for (; s[r] === a[r]; ) r++;
                return r
                  ? ue(s[r], a[r])
                  : s[r] === x
                  ? -1
                  : a[r] === x
                  ? 1
                  : 0;
              })),
        C
      );
    }),
    (re.matches = function(e, t) {
      return re(e, null, null, t);
    }),
    (re.matchesSelector = function(e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        (t = t.replace(U, "='$1']")),
        h.matchesSelector &&
          k &&
          !D[t + ' '] &&
          (!c || !c.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var n = d.call(e, t);
          if (
            n ||
            h.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < re(t, C, null, [e]).length;
    }),
    (re.contains = function(e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }),
    (re.attr = function(e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r =
          n && q.call(b.attrHandle, t.toLowerCase())
            ? n(e, t, !k)
            : void 0;
      return void 0 !== r
        ? r
        : h.attributes || !k
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (re.error = function(e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (re.uniqueSort = function(e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !h.detectDuplicates),
        (u = !h.sortStable && e.slice(0)),
        e.sort(A),
        l)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = re.getText = function(e) {
      var t,
        n = '',
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; (t = e[r++]); ) n += o(t);
      return n;
    }),
    ((b = re.selectors = {
      cacheLength: 50,
      createPseudo: oe,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function(e) {
          return (
            (e[1] = e[1].replace(ne, f)),
            (e[3] = (e[3] || e[4] || e[5] || '').replace(ne, f)),
            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
            e.slice(0, 4)
          );
        },
        CHILD: function(e) {
          return (
            (e[1] = e[1].toLowerCase()),
            'nth' === e[1].slice(0, 3)
              ? (e[3] || re.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ('even' === e[3] || 'odd' === e[3]))),
                (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
              : e[3] && re.error(e[0]),
            e
          );
        },
        PSEUDO: function(e) {
          var t,
            n = !e[6] && e[2];
          return G.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || '')
                : n &&
                  V.test(n) &&
                  (t = g(n, !0)) &&
                  (t = n.indexOf(')', n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(ne, f).toLowerCase();
          return '*' === e
            ? function() {
                return !0;
              }
            : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function(e) {
          var t = N[e + ' '];
          return (
            t ||
            ((t = new RegExp(
              '(^|' + M + ')' + e + '(' + M + '|$)'
            )) &&
              N(e, function(e) {
                return t.test(
                  ('string' == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute &&
                      e.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function(n, r, i) {
          return function(e) {
            var t = re.attr(e, n);
            return null == t
              ? '!=' === r
              : !r ||
                  ((t += ''),
                  '=' === r
                    ? t === i
                    : '!=' === r
                    ? t !== i
                    : '^=' === r
                    ? i && 0 === t.indexOf(i)
                    : '*=' === r
                    ? i && -1 < t.indexOf(i)
                    : '$=' === r
                    ? i && t.slice(-i.length) === i
                    : '~=' === r
                    ? -1 < (' ' + t.replace($, ' ') + ' ').indexOf(i)
                    : '|=' === r &&
                      (t === i ||
                        t.slice(0, i.length + 1) === i + '-'));
          };
        },
        CHILD: function(h, e, t, g, v) {
          var m = 'nth' !== h.slice(0, 3),
            y = 'last' !== h.slice(-4),
            x = 'of-type' === e;
          return 1 === g && 0 === v
            ? function(e) {
                return !!e.parentNode;
              }
            : function(e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l = m != y ? 'nextSibling' : 'previousSibling',
                  c = e.parentNode,
                  f = x && e.nodeName.toLowerCase(),
                  p = !n && !x,
                  d = !1;
                if (c) {
                  if (m) {
                    for (; l; ) {
                      for (s = e; (s = s[l]); )
                        if (
                          x
                            ? s.nodeName.toLowerCase() === f
                            : 1 === s.nodeType
                        )
                          return !1;
                      u = l = 'only' === h && !u && 'nextSibling';
                    }
                    return !0;
                  }
                  if (
                    ((u = [y ? c.firstChild : c.lastChild]), y && p)
                  ) {
                    for (
                      d =
                        (a =
                          (r =
                            (i =
                              (o = (s = c)[S] || (s[S] = {}))[
                                s.uniqueID
                              ] || (o[s.uniqueID] = {}))[h] ||
                            [])[0] === E && r[1]) && r[2],
                        s = a && c.childNodes[a];
                      (s =
                        (++a && s && s[l]) || (d = a = 0) || u.pop());

                    )
                      if (1 === s.nodeType && ++d && s === e) {
                        i[h] = [E, a, d];
                        break;
                      }
                  } else if (
                    (p &&
                      (d = a =
                        (r =
                          (i =
                            (o = (s = e)[S] || (s[S] = {}))[
                              s.uniqueID
                            ] || (o[s.uniqueID] = {}))[h] ||
                          [])[0] === E && r[1]),
                    !1 === d)
                  )
                    for (
                      ;
                      (s =
                        (++a && s && s[l]) ||
                        (d = a = 0) ||
                        u.pop()) &&
                      ((x
                        ? s.nodeName.toLowerCase() !== f
                        : 1 !== s.nodeType) ||
                        !++d ||
                        (p &&
                          ((i =
                            (o = s[S] || (s[S] = {}))[s.uniqueID] ||
                            (o[s.uniqueID] = {}))[h] = [E, d]),
                        s !== e));

                    );
                  return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                }
              };
        },
        PSEUDO: function(e, o) {
          var t,
            s =
              b.pseudos[e] ||
              b.setFilters[e.toLowerCase()] ||
              re.error('unsupported pseudo: ' + e);
          return s[S]
            ? s(o)
            : 1 < s.length
            ? ((t = [e, e, '', o]),
              b.setFilters.hasOwnProperty(e.toLowerCase())
                ? oe(function(e, t) {
                    for (var n, r = s(e, o), i = r.length; i--; )
                      e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                  })
                : function(e) {
                    return s(e, 0, t);
                  })
            : s;
        }
      },
      pseudos: {
        not: oe(function(e) {
          var r = [],
            i = [],
            a = p(e.replace(B, '$1'));
          return a[S]
            ? oe(function(e, t, n, r) {
                for (
                  var i, o = a(e, null, r, []), s = e.length;
                  s--;

                )
                  (i = o[s]) && (e[s] = !(t[s] = i));
              })
            : function(e, t, n) {
                return (
                  (r[0] = e),
                  a(r, null, n, i),
                  (r[0] = null),
                  !i.pop()
                );
              };
        }),
        has: oe(function(t) {
          return function(e) {
            return 0 < re(t, e).length;
          };
        }),
        contains: oe(function(t) {
          return (
            (t = t.replace(ne, f)),
            function(e) {
              return (
                -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
              );
            }
          );
        }),
        lang: oe(function(n) {
          return (
            Y.test(n || '') || re.error('unsupported lang: ' + n),
            (n = n.replace(ne, f).toLowerCase()),
            function(e) {
              var t;
              do {
                if (
                  (t = k
                    ? e.lang
                    : e.getAttribute('xml:lang') ||
                      e.getAttribute('lang'))
                )
                  return (
                    (t = t.toLowerCase()) === n ||
                    0 === t.indexOf(n + '-')
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function(e) {
          return e === a;
        },
        focus: function(e) {
          return (
            e === C.activeElement &&
            (!C.hasFocus || C.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: function(e) {
          return !1 === e.disabled;
        },
        disabled: function(e) {
          return !0 === e.disabled;
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return (
            ('input' === t && !!e.checked) ||
            ('option' === t && !!e.selected)
          );
        },
        selected: function(e) {
          return (
            e.parentNode && e.parentNode.selectedIndex,
            !0 === e.selected
          );
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function(e) {
          return !b.pseudos.empty(e);
        },
        header: function(e) {
          return J.test(e.nodeName);
        },
        input: function(e) {
          return Q.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return (
            ('input' === t && 'button' === e.type) || 'button' === t
          );
        },
        text: function(e) {
          var t;
          return (
            'input' === e.nodeName.toLowerCase() &&
            'text' === e.type &&
            (null == (t = e.getAttribute('type')) ||
              'text' === t.toLowerCase())
          );
        },
        first: fe(function() {
          return [0];
        }),
        last: fe(function(e, t) {
          return [t - 1];
        }),
        eq: fe(function(e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: fe(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: fe(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: fe(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
          return e;
        }),
        gt: fe(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = le(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = ce(e);
    function de() {}
    function he(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++)
        r += e[t].value;
      return r;
    }
    function ge(a, e, t) {
      var u = e.dir,
        l = t && 'parentNode' === u,
        c = r++;
      return e.first
        ? function(e, t, n) {
            for (; (e = e[u]); )
              if (1 === e.nodeType || l) return a(e, t, n);
          }
        : function(e, t, n) {
            var r,
              i,
              o,
              s = [E, c];
            if (n) {
              for (; (e = e[u]); )
                if ((1 === e.nodeType || l) && a(e, t, n)) return !0;
            } else
              for (; (e = e[u]); )
                if (1 === e.nodeType || l) {
                  if (
                    (r = (i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {}))[u]) &&
                    r[0] === E &&
                    r[1] === c
                  )
                    return (s[2] = r[2]);
                  if (((i[u] = s)[2] = a(e, t, n))) return !0;
                }
          };
    }
    function ve(i) {
      return 1 < i.length
        ? function(e, t, n) {
            for (var r = i.length; r--; )
              if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function me(e, t, n, r, i) {
      for (
        var o, s = [], a = 0, u = e.length, l = null != t;
        a < u;
        a++
      )
        (o = e[a]) &&
          ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
      return s;
    }
    function ye(d, h, g, v, m, e) {
      return (
        v && !v[S] && (v = ye(v)),
        m && !m[S] && (m = ye(m, e)),
        oe(function(e, t, n, r) {
          var i,
            o,
            s,
            a = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function(e, t, n) {
                for (var r = 0, i = t.length; r < i; r++)
                  re(e, t[r], n);
                return n;
              })(h || '*', n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : me(c, a, d, n, r),
            p = g ? (m || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v))
            for (i = me(p, u), v(i, [], n, r), o = i.length; o--; )
              (s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
          if (e) {
            if (m || d) {
              if (m) {
                for (i = [], o = p.length; o--; )
                  (s = p[o]) && i.push((f[o] = s));
                m(null, (p = []), i, r);
              }
              for (o = p.length; o--; )
                (s = p[o]) &&
                  -1 < (i = m ? P(e, s) : a[o]) &&
                  (e[i] = !(t[i] = s));
            }
          } else (p = me(p === t ? p.splice(l, p.length) : p)), m ? m(null, t, p, r) : O.apply(t, p);
        })
      );
    }
    function xe(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          s = o || b.relative[' '],
          a = o ? 1 : 0,
          u = ge(
            function(e) {
              return e === i;
            },
            s,
            !0
          ),
          l = ge(
            function(e) {
              return -1 < P(i, e);
            },
            s,
            !0
          ),
          c = [
            function(e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            }
          ];
        a < r;
        a++
      )
        if ((t = b.relative[e[a].type])) c = [ge(ve(c), t)];
        else {
          if (
            (t = b.filter[e[a].type].apply(null, e[a].matches))[S]
          ) {
            for (n = ++a; n < r && !b.relative[e[n].type]; n++);
            return ye(
              1 < a && ve(c),
              1 < a &&
                he(
                  e
                    .slice(0, a - 1)
                    .concat({
                      value: ' ' === e[a - 2].type ? '*' : ''
                    })
                ).replace(B, '$1'),
              t,
              a < n && xe(e.slice(a, n)),
              n < r && xe((e = e.slice(n))),
              n < r && he(e)
            );
          }
          c.push(t);
        }
      return ve(c);
    }
    return (
      (de.prototype = b.filters = b.pseudos),
      (b.setFilters = new de()),
      (g = re.tokenize = function(e, t) {
        var n,
          r,
          i,
          o,
          s,
          a,
          u,
          l = j[e + ' '];
        if (l) return t ? 0 : l.slice(0);
        for (s = e, a = [], u = b.preFilter; s; ) {
          for (o in ((n && !(r = X.exec(s))) ||
            (r && (s = s.slice(r[0].length) || s), a.push((i = []))),
          (n = !1),
          (r = z.exec(s)) &&
            ((n = r.shift()),
            i.push({ value: n, type: r[0].replace(B, ' ') }),
            (s = s.slice(n.length))),
          b.filter))
            !(r = G[o].exec(s)) ||
              (u[o] && !(r = u[o](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: o, matches: r }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? re.error(e) : j(e, a).slice(0);
      }),
      (p = re.compile = function(e, t) {
        var n,
          r = [],
          i = [],
          o = D[e + ' '];
        if (!o) {
          for (n = (t = t || g(e)).length; n--; )
            (o = xe(t[n]))[S] ? r.push(o) : i.push(o);
          (o = D(
            e,
            (function(v, m) {
              function e(e, t, n, r, i) {
                var o,
                  s,
                  a,
                  u = 0,
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG('*', i)),
                  h = (E += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t === C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    for (
                      s = 0,
                        t ||
                          o.ownerDocument === C ||
                          (T(o), (n = !k));
                      (a = v[s++]);

                    )
                      if (a(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (E = h);
                  }
                  y && ((o = !a && o) && u--, e && c.push(o));
                }
                if (((u += l), y && l !== u)) {
                  for (s = 0; (a = m[s++]); ) a(c, f, t, n);
                  if (e) {
                    if (0 < u)
                      for (; l--; )
                        c[l] || f[l] || (f[l] = L.call(r));
                    f = me(f);
                  }
                  O.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + m.length &&
                      re.uniqueSort(r);
                }
                return i && ((E = h), (w = p)), c;
              }
              var y = 0 < m.length,
                x = 0 < v.length;
              return y ? oe(e) : e;
            })(i, r)
          )).selector = e;
        }
        return o;
      }),
      (v = re.select = function(e, t, n, r) {
        var i,
          o,
          s,
          a,
          u,
          l = 'function' == typeof e && e,
          c = !r && g((e = l.selector || e));
        if (((n = n || []), 1 === c.length)) {
          if (
            2 < (o = c[0] = c[0].slice(0)).length &&
            'ID' === (s = o[0]).type &&
            h.getById &&
            9 === t.nodeType &&
            k &&
            b.relative[o[1].type]
          ) {
            if (
              !(t = (b.find.ID(s.matches[0].replace(ne, f), t) ||
                [])[0])
            )
              return n;
            l && (t = t.parentNode),
              (e = e.slice(o.shift().value.length));
          }
          for (
            i = G.needsContext.test(e) ? 0 : o.length;
            i-- && ((s = o[i]), !b.relative[(a = s.type)]);

          )
            if (
              (u = b.find[a]) &&
              (r = u(
                s.matches[0].replace(ne, f),
                (ee.test(o[0].type) && pe(t.parentNode)) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && he(o))))
                return O.apply(n, r), n;
              break;
            }
        }
        return (
          (l || p(e, c))(
            r,
            t,
            !k,
            n,
            !t || (ee.test(e) && pe(t.parentNode)) || t
          ),
          n
        );
      }),
      (h.sortStable =
        S.split('')
          .sort(A)
          .join('') === S),
      (h.detectDuplicates = !!l),
      T(),
      (h.sortDetached = se(function(e) {
        return 1 & e.compareDocumentPosition(C.createElement('div'));
      })),
      se(function(e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        ae('type|href|height|width', function(e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (h.attributes &&
        se(function(e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        ae('value', function(e, t, n) {
          return n || 'input' !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      se(function(e) {
        return null == e.getAttribute('disabled');
      }) ||
        ae(R, function(e, t, n) {
          var r;
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
      re
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[':'] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains);
  function m(e, t, n) {
    for (
      var r = [], i = void 0 !== n;
      (e = e[t]) && 9 !== e.nodeType;

    )
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function y(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var x = S.expr.match.needsContext,
    b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function T(e, n, r) {
    if (S.isFunction(n))
      return S.grep(e, function(e, t) {
        return !!n.call(e, t, e) !== r;
      });
    if (n.nodeType)
      return S.grep(e, function(e) {
        return (e === n) !== r;
      });
    if ('string' == typeof n) {
      if (w.test(n)) return S.filter(n, e, r);
      n = S.filter(n, e);
    }
    return S.grep(e, function(e) {
      return -1 < i.call(n, e) !== r;
    });
  }
  (S.filter = function(e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function(e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function(e) {
        var t,
          n = this.length,
          r = [],
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            S(e).filter(function() {
              for (t = 0; t < n; t++)
                if (S.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; t < n; t++) S.find(e, i[t], r);
        return (
          ((r = this.pushStack(
            1 < n ? S.unique(r) : r
          )).selector = this.selector ? this.selector + ' ' + e : e),
          r
        );
      },
      filter: function(e) {
        return this.pushStack(T(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(T(this, e || [], !0));
      },
      is: function(e) {
        return !!T(
          this,
          'string' == typeof e && x.test(e) ? S(e) : e || [],
          !1
        ).length;
      }
    });
  var E,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((S.fn.init = function(e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || E), 'string' != typeof e))
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : S.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(S)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector),
            (this.context = e.context)),
          S.makeArray(e, this));
    if (
      !(r =
        '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : N.exec(e)) ||
      (!r[1] && t)
    )
      return !t || t.jquery
        ? (t || n).find(e)
        : this.constructor(t).find(e);
    if (r[1]) {
      if (
        ((t = t instanceof S ? t[0] : t),
        S.merge(
          this,
          S.parseHTML(
            r[1],
            t && t.nodeType ? t.ownerDocument || t : k,
            !0
          )
        ),
        b.test(r[1]) && S.isPlainObject(t))
      )
        for (r in t)
          S.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      return this;
    }
    return (
      (i = k.getElementById(r[2])) &&
        i.parentNode &&
        ((this.length = 1), (this[0] = i)),
      (this.context = k),
      (this.selector = e),
      this
    );
  }).prototype = S.fn),
    (E = S(k));
  var j = /^(?:parents|prev(?:Until|All))/,
    D = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  S.fn.extend({
    has: function(e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++)
          if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function(e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          s =
            x.test(e) || 'string' != typeof e
              ? S(e, t || this.context)
              : 0;
        r < i;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (s
              ? -1 < s.index(n)
              : 1 === n.nodeType && S.find.matchesSelector(n, e))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function(e) {
      return e
        ? 'string' == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(e, t) {
      return this.pushStack(
        S.uniqueSort(S.merge(this.get(), S(e, t)))
      );
    },
    addBack: function(e) {
      return this.add(
        null == e ? this.prevObject : this.prevObject.filter(e)
      );
    }
  }),
    S.each(
      {
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
          return m(e, 'parentNode');
        },
        parentsUntil: function(e, t, n) {
          return m(e, 'parentNode', n);
        },
        next: function(e) {
          return A(e, 'nextSibling');
        },
        prev: function(e) {
          return A(e, 'previousSibling');
        },
        nextAll: function(e) {
          return m(e, 'nextSibling');
        },
        prevAll: function(e) {
          return m(e, 'previousSibling');
        },
        nextUntil: function(e, t, n) {
          return m(e, 'nextSibling', n);
        },
        prevUntil: function(e, t, n) {
          return m(e, 'previousSibling', n);
        },
        siblings: function(e) {
          return y((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return y(e.firstChild);
        },
        contents: function(e) {
          return e.contentDocument || S.merge([], e.childNodes);
        }
      },
      function(r, i) {
        S.fn[r] = function(e, t) {
          var n = S.map(this, i, e);
          return (
            'Until' !== r.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (D[r] || S.uniqueSort(n), j.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var q,
    L = /\S+/g;
  function H() {
    k.removeEventListener('DOMContentLoaded', H),
      C.removeEventListener('load', H),
      S.ready();
  }
  (S.Callbacks = function(r) {
    r =
      'string' == typeof r
        ? (function(e) {
            var n = {};
            return (
              S.each(e.match(L) || [], function(e, t) {
                n[t] = !0;
              }),
              n
            );
          })(r)
        : S.extend({}, r);
    function n() {
      for (o = r.once, t = i = !0; a.length; u = -1)
        for (e = a.shift(); ++u < s.length; )
          !1 === s[u].apply(e[0], e[1]) &&
            r.stopOnFalse &&
            ((u = s.length), (e = !1));
      r.memory || (e = !1), (i = !1), o && (s = e ? [] : '');
    }
    var i,
      e,
      t,
      o,
      s = [],
      a = [],
      u = -1,
      l = {
        add: function() {
          return (
            s &&
              (e && !i && ((u = s.length - 1), a.push(e)),
              (function n(e) {
                S.each(e, function(e, t) {
                  S.isFunction(t)
                    ? (r.unique && l.has(t)) || s.push(t)
                    : t && t.length && 'string' !== S.type(t) && n(t);
                });
              })(arguments),
              e && !i && n()),
            this
          );
        },
        remove: function() {
          return (
            S.each(arguments, function(e, t) {
              for (var n; -1 < (n = S.inArray(t, s, n)); )
                s.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function(e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function() {
          return (s = s && []), this;
        },
        disable: function() {
          return (o = a = []), (s = e = ''), this;
        },
        disabled: function() {
          return !s;
        },
        lock: function() {
          return (o = a = []), e || (s = e = ''), this;
        },
        locked: function() {
          return !!o;
        },
        fireWith: function(e, t) {
          return (
            o ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              a.push(t),
              i || n()),
            this
          );
        },
        fire: function() {
          return l.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!t;
        }
      };
    return l;
  }),
    S.extend({
      Deferred: function(e) {
        var o = [
            [
              'resolve',
              'done',
              S.Callbacks('once memory'),
              'resolved'
            ],
            [
              'reject',
              'fail',
              S.Callbacks('once memory'),
              'rejected'
            ],
            ['notify', 'progress', S.Callbacks('memory')]
          ],
          i = 'pending',
          s = {
            state: function() {
              return i;
            },
            always: function() {
              return a.done(arguments).fail(arguments), this;
            },
            then: function() {
              var i = arguments;
              return S.Deferred(function(r) {
                S.each(o, function(e, t) {
                  var n = S.isFunction(i[e]) && i[e];
                  a[t[1]](function() {
                    var e = n && n.apply(this, arguments);
                    e && S.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + 'With'](
                          this === s ? r.promise() : this,
                          n ? [e] : arguments
                        );
                  });
                }),
                  (i = null);
              }).promise();
            },
            promise: function(e) {
              return null != e ? S.extend(e, s) : s;
            }
          },
          a = {};
        return (
          (s.pipe = s.then),
          S.each(o, function(e, t) {
            var n = t[2],
              r = t[3];
            (s[t[1]] = n.add),
              r &&
                n.add(
                  function() {
                    i = r;
                  },
                  o[1 ^ e][2].disable,
                  o[2][2].lock
                ),
              (a[t[0]] = function() {
                return (
                  a[t[0] + 'With'](this === a ? s : this, arguments),
                  this
                );
              }),
              (a[t[0] + 'With'] = n.fireWith);
          }),
          s.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function(e) {
        function t(t, n, r) {
          return function(e) {
            (n[t] = this),
              (r[t] = 1 < arguments.length ? c.call(arguments) : e),
              r === i
                ? l.notifyWith(n, r)
                : --u || l.resolveWith(n, r);
          };
        }
        var i,
          n,
          r,
          o = 0,
          s = c.call(arguments),
          a = s.length,
          u = 1 !== a || (e && S.isFunction(e.promise)) ? a : 0,
          l = 1 === u ? e : S.Deferred();
        if (1 < a)
          for (
            i = new Array(a), n = new Array(a), r = new Array(a);
            o < a;
            o++
          )
            s[o] && S.isFunction(s[o].promise)
              ? s[o]
                  .promise()
                  .progress(t(o, n, i))
                  .done(t(o, r, s))
                  .fail(l.reject)
              : --u;
        return u || l.resolveWith(r, s), l.promise();
      }
    }),
    (S.fn.ready = function(e) {
      return S.ready.promise().done(e), this;
    }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? S.readyWait++ : S.ready(!0);
      },
      ready: function(e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          (((S.isReady = !0) !== e && 0 < --S.readyWait) ||
            (q.resolveWith(k, [S]),
            S.fn.triggerHandler &&
              (S(k).triggerHandler('ready'), S(k).off('ready'))));
      }
    }),
    (S.ready.promise = function(e) {
      return (
        q ||
          ((q = S.Deferred()),
          'complete' === k.readyState ||
          ('loading' !== k.readyState && !k.documentElement.doScroll)
            ? C.setTimeout(S.ready)
            : (k.addEventListener('DOMContentLoaded', H),
              C.addEventListener('load', H))),
        q.promise(e)
      );
    }),
    S.ready.promise();
  function O(e, t, n, r, i, o, s) {
    var a = 0,
      u = e.length,
      l = null == n;
    if ('object' === S.type(n))
      for (a in ((i = !0), n)) O(e, t, a, n[a], !0, o, s);
    else if (
      void 0 !== r &&
      ((i = !0),
      S.isFunction(r) || (s = !0),
      l &&
        (t = s
          ? (t.call(e, r), null)
          : ((l = t),
            function(e, t, n) {
              return l.call(S(e), n);
            })),
      t)
    )
      for (; a < u; a++)
        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  }
  function F(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function P() {
    this.expando = S.expando + P.uid++;
  }
  (P.uid = 1),
    (P.prototype = {
      register: function(e, t) {
        var n = t || {};
        return (
          e.nodeType
            ? (e[this.expando] = n)
            : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
              }),
          e[this.expando]
        );
      },
      cache: function(e) {
        if (!F(e)) return {};
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            F(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                  }))),
          t
        );
      },
      set: function(e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[t] = n;
        else for (r in t) i[r] = t[r];
        return i;
      },
      get: function(e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][t];
      },
      access: function(e, t, n) {
        var r;
        return void 0 === t ||
          (t && 'string' == typeof t && void 0 === n)
          ? void 0 !== (r = this.get(e, t))
            ? r
            : this.get(e, S.camelCase(t))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function(e, t) {
        var n,
          r,
          i,
          o = e[this.expando];
        if (void 0 !== o) {
          if (void 0 === t) this.register(e);
          else {
            n = (r = S.isArray(t)
              ? t.concat(t.map(S.camelCase))
              : ((i = S.camelCase(t)),
                t in o
                  ? [t, i]
                  : (r = i) in o
                  ? [r]
                  : r.match(L) || [])).length;
            for (; n--; ) delete o[r[n]];
          }
          (void 0 !== t && !S.isEmptyObject(o)) ||
            (e.nodeType
              ? (e[this.expando] = void 0)
              : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      }
    });
  var R = new P(),
    M = new P(),
    I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    W = /[A-Z]/g;
  function _(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(W, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === n ||
            ('false' !== n &&
              ('null' === n
                ? null
                : +n + '' === n
                ? +n
                : I.test(n)
                ? S.parseJSON(n)
                : n));
        } catch (e) {}
        M.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function(e) {
      return M.hasData(e) || R.hasData(e);
    },
    data: function(e, t, n) {
      return M.access(e, t, n);
    },
    removeData: function(e, t) {
      M.remove(e, t);
    },
    _data: function(e, t, n) {
      return R.access(e, t, n);
    },
    _removeData: function(e, t) {
      R.remove(e, t);
    }
  }),
    S.fn.extend({
      data: function(r, e) {
        var t,
          n,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 !== r)
          return 'object' == _typeof(r)
            ? this.each(function() {
                M.set(this, r);
              })
            : O(
                this,
                function(t) {
                  var e, n;
                  if (o && void 0 === t) {
                    if (
                      void 0 !==
                      (e =
                        M.get(o, r) ||
                        M.get(o, r.replace(W, '-$&').toLowerCase()))
                    )
                      return e;
                    if (
                      ((n = S.camelCase(r)),
                      void 0 !== (e = M.get(o, n)))
                    )
                      return e;
                    if (void 0 !== (e = _(o, n, void 0))) return e;
                  } else
                    (n = S.camelCase(r)),
                      this.each(function() {
                        var e = M.get(this, n);
                        M.set(this, n, t),
                          -1 < r.indexOf('-') &&
                            void 0 !== e &&
                            M.set(this, r, t);
                      });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = M.get(o)),
          1 === o.nodeType && !R.get(o, 'hasDataAttrs'))
        ) {
          for (t = s.length; t--; )
            s[t] &&
              (0 === (n = s[t].name).indexOf('data-') &&
                ((n = S.camelCase(n.slice(5))), _(o, n, i[n])));
          R.set(o, 'hasDataAttrs', !0);
        }
        return i;
      },
      removeData: function(e) {
        return this.each(function() {
          M.remove(this, e);
        });
      }
    }),
    S.extend({
      queue: function(e, t, n) {
        var r;
        return e
          ? ((t = (t || 'fx') + 'queue'),
            (r = R.get(e, t)),
            n &&
              (!r || S.isArray(n)
                ? (r = R.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function(e, t) {
        t = t || 'fx';
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function() {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function(e, t) {
        var n = t + 'queueHooks';
        return (
          R.get(e, n) ||
          R.access(e, n, {
            empty: S.Callbacks('once memory').add(function() {
              R.remove(e, [t + 'queue', n]);
            })
          })
        );
      }
    }),
    S.fn.extend({
      queue: function(t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  'fx' === t &&
                    'inprogress' !== e[0] &&
                    S.dequeue(this, t);
              })
        );
      },
      dequeue: function(e) {
        return this.each(function() {
          S.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || 'fx', []);
      },
      promise: function(e, t) {
        function n() {
          --i || o.resolveWith(s, [s]);
        }
        var r,
          i = 1,
          o = S.Deferred(),
          s = this,
          a = this.length;
        for (
          'string' != typeof e && ((t = e), (e = void 0)),
            e = e || 'fx';
          a--;

        )
          (r = R.get(s[a], e + 'queueHooks')) &&
            r.empty &&
            (i++, r.empty.add(n));
        return n(), o.promise(t);
      }
    });
  function $(e, t) {
    return (
      (e = t || e),
      'none' === S.css(e, 'display') ||
        !S.contains(e.ownerDocument, e)
    );
  }
  var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    X = new RegExp('^(?:([+-])=|)(' + B + ')([a-z%]*)$', 'i'),
    z = ['Top', 'Right', 'Bottom', 'Left'];
  function U(e, t, n, r) {
    var i,
      o = 1,
      s = 20,
      a = r
        ? function() {
            return r.cur();
          }
        : function() {
            return S.css(e, t, '');
          },
      u = a(),
      l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
      c =
        (S.cssNumber[t] || ('px' !== l && +u)) && X.exec(S.css(e, t));
    if (c && c[3] !== l)
      for (
        l = l || c[3], n = n || [], c = +u || 1;
        (c /= o = o || '.5'),
          S.style(e, t, c + l),
          o !== (o = a() / u) && 1 !== o && --s;

      );
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var V = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    G = /^$|\/(?:java|ecma)script/i,
    Q = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    };
  function J(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || '*')
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || '*')
        : [];
    return void 0 === t || (t && S.nodeName(e, t))
      ? S.merge([e], n)
      : n;
  }
  function K(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      R.set(e[n], 'globalEval', !t || R.get(t[n], 'globalEval'));
  }
  (Q.optgroup = Q.option),
    (Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead),
    (Q.th = Q.td);
  var Z,
    ee,
    te = /<|&#?\w+;/;
  function ne(e, t, n, r, i) {
    for (
      var o,
        s,
        a,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === S.type(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (te.test(o)) {
          for (
            s = s || f.appendChild(t.createElement('div')),
              a = (Y.exec(o) || ['', ''])[1].toLowerCase(),
              u = Q[a] || Q._default,
              s.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            s = s.lastChild;
          S.merge(p, s.childNodes),
            ((s = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    for (f.textContent = '', d = 0; (o = p[d++]); )
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = S.contains(o.ownerDocument, o)),
        (s = J(f.appendChild(o), 'script')),
        l && K(s),
        n)
      )
        for (c = 0; (o = s[c++]); ) G.test(o.type || '') && n.push(o);
    return f;
  }
  (Z = k
    .createDocumentFragment()
    .appendChild(k.createElement('div'))),
    (ee = k.createElement('input')).setAttribute('type', 'radio'),
    ee.setAttribute('checked', 'checked'),
    ee.setAttribute('name', 't'),
    Z.appendChild(ee),
    (v.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (Z.innerHTML = '<textarea>x</textarea>'),
    (v.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue);
  var re = /^key/,
    ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    oe = /^([^.]*)(?:\.(.+)|)/;
  function se() {
    return !0;
  }
  function ae() {
    return !1;
  }
  function ue() {
    try {
      return k.activeElement;
    } catch (e) {}
  }
  function le(e, t, n, r, i, o) {
    var s, a;
    if ('object' == _typeof(t)) {
      for (a in ('string' != typeof n && ((r = r || n), (n = void 0)),
      t))
        le(e, a, n, r, t[a], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ae;
    else if (!i) return e;
    return (
      1 === o &&
        ((s = i),
        ((i = function(e) {
          return S().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = S.guid++))),
      e.each(function() {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  (S.event = {
    global: {},
    add: function(t, e, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = R.get(t);
      if (v)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            n.guid || (n.guid = S.guid++),
            (u = v.events) || (u = v.events = {}),
            (s = v.handle) ||
              (s = v.handle = function(e) {
                return void 0 !== S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            l = (e = (e || '').match(L) || ['']).length;
          l--;

        )
          (d = g = (a = oe.exec(e[l]) || [])[1]),
            (h = (a[2] || '').split('.').sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext:
                    i && S.expr.match.needsContext.test(i),
                  namespace: h.join('.')
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, s)) ||
                  (t.addEventListener && t.addEventListener(d, s))),
              f.add &&
                (f.add.call(t, c),
                c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
    },
    remove: function(e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = R.hasData(e) && R.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || '').match(L) || ['']).length; l--; )
          if (
            ((d = g = (a = oe.exec(t[l]) || [])[1]),
            (h = (a[2] || '').split('.').sort()),
            d)
          ) {
            for (
              f = S.event.special[d] || {},
                p =
                  u[(d = (r ? f.delegateType : f.bindType) || d)] ||
                  [],
                a =
                  a[2] &&
                  new RegExp(
                    '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
                  ),
                s = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (r &&
                    r !== c.selector &&
                    ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !p.length &&
              ((f.teardown &&
                !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && R.remove(e, 'handle events');
      }
    },
    dispatch: function(e) {
      e = S.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        s = [],
        a = c.call(arguments),
        u = (R.get(this, 'events') || {})[e.type] || [],
        l = S.event.special[e.type] || {};
      if (
        (((a[0] = e).delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, e))
      ) {
        for (
          s = S.event.handlers.call(this, e, u), t = 0;
          (i = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) &&
            !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
              ((e.handleObj = o),
              (e.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle ||
                  o.handler
                ).apply(i.elem, a)) &&
                !1 === (e.result = r) &&
                (e.preventDefault(), e.stopPropagation()));
        return (
          l.postDispatch && l.postDispatch.call(this, e), e.result
        );
      }
    },
    handlers: function(e, t) {
      var n,
        r,
        i,
        o,
        s = [],
        a = t.delegateCount,
        u = e.target;
      if (
        a &&
        u.nodeType &&
        ('click' !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; u !== this; u = u.parentNode || this)
          if (
            1 === u.nodeType &&
            (!0 !== u.disabled || 'click' !== e.type)
          ) {
            for (r = [], n = 0; n < a; n++)
              void 0 === r[(i = (o = t[n]).selector + ' ')] &&
                (r[i] = o.needsContext
                  ? -1 < S(i, this).index(u)
                  : S.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && s.push({ elem: u, handlers: r });
          }
      return (
        a < t.length && s.push({ elem: this, handlers: t.slice(a) }),
        s
      );
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
      ' '
    ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function(e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
        ' '
      ),
      filter: function(e, t) {
        var n,
          r,
          i,
          o = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((r = (n = e.target.ownerDocument || k).documentElement),
            (i = n.body),
            (e.pageX =
              t.clientX +
              ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
              ((r && r.clientTop) || (i && i.clientTop) || 0))),
          e.which ||
            void 0 === o ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      }
    },
    fix: function(e) {
      if (e[S.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        s = this.fixHooks[i];
      for (
        s ||
          (this.fixHooks[i] = s = ie.test(i)
            ? this.mouseHooks
            : re.test(i)
            ? this.keyHooks
            : {}),
          r = s.props ? this.props.concat(s.props) : this.props,
          e = new S.Event(o),
          t = r.length;
        t--;

      )
        e[(n = r[t])] = o[n];
      return (
        e.target || (e.target = k),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        s.filter ? s.filter(e, o) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          return this !== ue() && this.focus
            ? (this.focus(), !1)
            : void 0;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function() {
          return this === ue() && this.blur
            ? (this.blur(), !1)
            : void 0;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function() {
          return 'checkbox' === this.type &&
            this.click &&
            S.nodeName(this, 'input')
            ? (this.click(), !1)
            : void 0;
        },
        _default: function(e) {
          return S.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }),
    (S.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function(e, t) {
      return this instanceof S.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented &&
                  !1 === e.returnValue)
                  ? se
                  : ae))
            : (this.type = e),
          t && S.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || S.now()),
          void (this[S.expando] = !0))
        : new S.Event(e, t);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: ae,
      isPropagationStopped: ae,
      isImmediatePropagationStopped: ae,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = se),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        (this.isPropagationStopped = se),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = se),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    S.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
      },
      function(e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function(e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          }
        };
      }
    ),
    S.fn.extend({
      on: function(e, t, n, r) {
        return le(this, e, t, n, r);
      },
      one: function(e, t, n, r) {
        return le(this, e, t, n, r, 1);
      },
      off: function(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace
                ? r.origType + '.' + r.namespace
                : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' != _typeof(e))
          return (
            (!1 !== t && 'function' != typeof t) ||
              ((n = t), (t = void 0)),
            !1 === n && (n = ae),
            this.each(function() {
              S.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
    });
  var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    fe = /<script|<style|<link/i,
    pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    de = /^true\/(.*)/,
    he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function ge(e, t) {
    return S.nodeName(e, 'table') &&
      S.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] ||
          e.appendChild(e.ownerDocument.createElement('tbody'))
      : e;
  }
  function ve(e) {
    return (
      (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
    );
  }
  function me(e) {
    var t = de.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
  }
  function ye(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (
        R.hasData(e) &&
        ((o = R.access(e)), (s = R.set(t, o)), (l = o.events))
      )
        for (i in (delete s.handle, (s.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++)
            S.event.add(t, i, l[i][n]);
      M.hasData(e) &&
        ((a = M.access(e)), (u = S.extend({}, a)), M.set(t, u));
    }
  }
  function xe(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      s,
      a,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = S.isFunction(d);
    if (
      h ||
      (1 < f && 'string' == typeof d && !v.checkClone && pe.test(d))
    )
      return n.each(function(e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), xe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = ne(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (a = (s = S.map(J(e, 'script'), ve)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)),
            a && S.merge(s, J(u, 'script'))),
          i.call(n[c], u, c);
      if (a)
        for (
          l = s[s.length - 1].ownerDocument, S.map(s, me), c = 0;
          c < a;
          c++
        )
          (u = s[c]),
            G.test(u.type || '') &&
              !R.access(u, 'globalEval') &&
              S.contains(l, u) &&
              (u.src
                ? S._evalUrl && S._evalUrl(u.src)
                : S.globalEval(u.textContent.replace(he, '')));
    }
    return n;
  }
  function be(e, t, n) {
    for (
      var r, i = t ? S.filter(t, e) : e, o = 0;
      null != (r = i[o]);
      o++
    )
      n || 1 !== r.nodeType || S.cleanData(J(r)),
        r.parentNode &&
          (n && S.contains(r.ownerDocument, r) && K(J(r, 'script')),
          r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function(e) {
      return e.replace(ce, '<$1></$2>');
    },
    clone: function(e, t, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        c = e.cloneNode(!0),
        f = S.contains(e.ownerDocument, e);
      if (
        !(
          v.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (s = J(c), r = 0, i = (o = J(e)).length; r < i; r++)
          (a = o[r]),
            (u = s[r]),
            void 0,
            'input' === (l = u.nodeName.toLowerCase()) &&
            V.test(a.type)
              ? (u.checked = a.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (
            o = o || J(e), s = s || J(c), r = 0, i = o.length;
            r < i;
            r++
          )
            ye(o[r], s[r]);
        else ye(e, c);
      return (
        0 < (s = J(c, 'script')).length && K(s, !f && J(e, 'script')),
        c
      );
    },
    cleanData: function(e) {
      for (
        var t, n, r, i = S.event.special, o = 0;
        void 0 !== (n = e[o]);
        o++
      )
        if (F(n)) {
          if ((t = n[R.expando])) {
            if (t.events)
              for (r in t.events)
                i[r]
                  ? S.event.remove(n, r)
                  : S.removeEvent(n, r, t.handle);
            n[R.expando] = void 0;
          }
          n[M.expando] && (n[M.expando] = void 0);
        }
    }
  }),
    S.fn.extend({
      domManip: xe,
      detach: function(e) {
        return be(this, e, !0);
      },
      remove: function(e) {
        return be(this, e);
      },
      text: function(e) {
        return O(
          this,
          function(e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function() {
        return xe(this, arguments, function(e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            ge(this, e).appendChild(e);
        });
      },
      prepend: function() {
        return xe(this, arguments, function(e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = ge(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return xe(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return xe(this, arguments, function(e) {
          this.parentNode &&
            this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType &&
            (S.cleanData(J(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function(e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function() {
            return S.clone(this, e, t);
          })
        );
      },
      html: function(e) {
        return O(
          this,
          function(e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !fe.test(e) &&
              !Q[(Y.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(J(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function() {
        var n = [];
        return xe(
          this,
          arguments,
          function(e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(J(this)), t && t.replaceChild(e, this));
          },
          n
        );
      }
    }),
    S.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function(e, s) {
        S.fn[e] = function(e) {
          for (
            var t, n = [], r = S(e), i = r.length - 1, o = 0;
            o <= i;
            o++
          )
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[s](t),
              a.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var we,
    Te = { HTML: 'block', BODY: 'block' };
  function Ce(e, t) {
    var n = S(t.createElement(e)).appendTo(t.body),
      r = S.css(n[0], 'display');
    return n.detach(), r;
  }
  function ke(e) {
    var t = k,
      n = Te[e];
    return (
      n ||
        (('none' !== (n = Ce(e, t)) && n) ||
          ((t = (we = (
            we || S("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement))[0].contentDocument).write(),
          t.close(),
          (n = Ce(e, t)),
          we.detach()),
        (Te[e] = n)),
      n
    );
  }
  function Se(e, t, n, r) {
    var i,
      o,
      s = {};
    for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
    for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
    return i;
  }
  var Ee = /^margin/,
    Ne = new RegExp('^(' + B + ')(?!px)[a-z%]+$', 'i'),
    je = function(e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    De = k.documentElement;
  function Ae(e, t, n) {
    var r,
      i,
      o,
      s,
      a = e.style;
    return (
      ('' !==
        (s = (n = n || je(e))
          ? n.getPropertyValue(t) || n[t]
          : void 0) &&
        void 0 !== s) ||
        S.contains(e.ownerDocument, e) ||
        (s = S.style(e, t)),
      n &&
        !v.pixelMarginRight() &&
        Ne.test(s) &&
        Ee.test(t) &&
        ((r = a.width),
        (i = a.minWidth),
        (o = a.maxWidth),
        (a.minWidth = a.maxWidth = a.width = s),
        (s = n.width),
        (a.width = r),
        (a.minWidth = i),
        (a.maxWidth = o)),
      void 0 !== s ? s + '' : s
    );
  }
  function qe(e, t) {
    return {
      get: function() {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      }
    };
  }
  !(function() {
    var t,
      n,
      r,
      i,
      o = k.createElement('div'),
      s = k.createElement('div');
    if (s.style) {
      var e = function() {
        (s.style.cssText =
          '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
          (s.innerHTML = ''),
          De.appendChild(o);
        var e = C.getComputedStyle(s);
        (t = '1%' !== e.top),
          (i = '2px' === e.marginLeft),
          (n = '4px' === e.width),
          (s.style.marginRight = '50%'),
          (r = '4px' === e.marginRight),
          De.removeChild(o);
      };
      (s.style.backgroundClip = 'content-box'),
        (s.cloneNode(!0).style.backgroundClip = ''),
        (v.clearCloneStyle =
          'content-box' === s.style.backgroundClip),
        (o.style.cssText =
          'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
        o.appendChild(s),
        S.extend(v, {
          pixelPosition: function() {
            return e(), t;
          },
          boxSizingReliable: function() {
            return null == n && e(), n;
          },
          pixelMarginRight: function() {
            return null == n && e(), r;
          },
          reliableMarginLeft: function() {
            return null == n && e(), i;
          },
          reliableMarginRight: function() {
            var e,
              t = s.appendChild(k.createElement('div'));
            return (
              (t.style.cssText = s.style.cssText =
                '-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
              (t.style.marginRight = t.style.width = '0'),
              (s.style.width = '1px'),
              De.appendChild(o),
              (e = !parseFloat(C.getComputedStyle(t).marginRight)),
              De.removeChild(o),
              s.removeChild(t),
              e
            );
          }
        });
    }
  })();
  var Le = /^(none|table(?!-c[ea]).+)/,
    He = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    },
    Oe = { letterSpacing: '0', fontWeight: '400' },
    Fe = ['Webkit', 'O', 'Moz', 'ms'],
    Pe = k.createElement('div').style;
  function Re(e) {
    if (e in Pe) return e;
    for (
      var t = e[0].toUpperCase() + e.slice(1), n = Fe.length;
      n--;

    )
      if ((e = Fe[n] + t) in Pe) return e;
  }
  function Me(e, t, n) {
    var r = X.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function Ie(e, t, n, r, i) {
    for (
      var o =
          n === (r ? 'border' : 'content')
            ? 4
            : 'width' === t
            ? 1
            : 0,
        s = 0;
      o < 4;
      o += 2
    )
      'margin' === n && (s += S.css(e, n + z[o], !0, i)),
        r
          ? ('content' === n &&
              (s -= S.css(e, 'padding' + z[o], !0, i)),
            'margin' !== n &&
              (s -= S.css(e, 'border' + z[o] + 'Width', !0, i)))
          : ((s += S.css(e, 'padding' + z[o], !0, i)),
            'padding' !== n &&
              (s += S.css(e, 'border' + z[o] + 'Width', !0, i)));
    return s;
  }
  function We(e, t, n) {
    var r = !0,
      i = 'width' === t ? e.offsetWidth : e.offsetHeight,
      o = je(e),
      s = 'border-box' === S.css(e, 'boxSizing', !1, o);
    if (i <= 0 || null == i) {
      if (
        (((i = Ae(e, t, o)) < 0 || null == i) && (i = e.style[t]),
        Ne.test(i))
      )
        return i;
      (r = s && (v.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + Ie(e, t, n || (s ? 'border' : 'content'), r, o) + 'px';
  }
  function _e(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
      (r = e[s]).style &&
        ((o[s] = R.get(r, 'olddisplay')),
        (n = r.style.display),
        t
          ? (o[s] || 'none' !== n || (r.style.display = ''),
            '' === r.style.display &&
              $(r) &&
              (o[s] = R.access(r, 'olddisplay', ke(r.nodeName))))
          : ((i = $(r)),
            ('none' === n && i) ||
              R.set(r, 'olddisplay', i ? n : S.css(r, 'display'))));
    for (s = 0; s < a; s++)
      (r = e[s]).style &&
        ((t &&
          'none' !== r.style.display &&
          '' !== r.style.display) ||
          (r.style.display = t ? o[s] || '' : 'none'));
    return e;
  }
  function $e(e, t, n, r, i) {
    return new $e.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Ae(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: 'cssFloat' },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = S.camelCase(t),
          u = e.style;
        return (
          (t = S.cssProps[a] || (S.cssProps[a] = Re(a) || a)),
          (s = S.cssHooks[t] || S.cssHooks[a]),
          void 0 === n
            ? s && 'get' in s && void 0 !== (i = s.get(e, !1, r))
              ? i
              : u[t]
            : ('string' === (o = _typeof(n)) &&
                (i = X.exec(n)) &&
                i[1] &&
                ((n = U(e, t, i)), (o = 'number')),
              void (
                null != n &&
                n == n &&
                ('number' === o &&
                  (n += (i && i[3]) || (S.cssNumber[a] ? '' : 'px')),
                v.clearCloneStyle ||
                  '' !== n ||
                  0 !== t.indexOf('background') ||
                  (u[t] = 'inherit'),
                (s &&
                  'set' in s &&
                  void 0 === (n = s.set(e, n, r))) ||
                  (u[t] = n))
              ))
        );
      }
    },
    css: function(e, t, n, r) {
      var i,
        o,
        s,
        a = S.camelCase(t);
      return (
        (t = S.cssProps[a] || (S.cssProps[a] = Re(a) || a)),
        (s = S.cssHooks[t] || S.cssHooks[a]) &&
          'get' in s &&
          (i = s.get(e, !0, n)),
        void 0 === i && (i = Ae(e, t, r)),
        'normal' === i && t in Oe && (i = Oe[t]),
        '' === n || n
          ? ((o = parseFloat(i)),
            !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    }
  }),
    S.each(['height', 'width'], function(e, s) {
      S.cssHooks[s] = {
        get: function(e, t, n) {
          return t
            ? Le.test(S.css(e, 'display')) && 0 === e.offsetWidth
              ? Se(e, He, function() {
                  return We(e, s, n);
                })
              : We(e, s, n)
            : void 0;
        },
        set: function(e, t, n) {
          var r,
            i = n && je(e),
            o =
              n &&
              Ie(
                e,
                s,
                n,
                'border-box' === S.css(e, 'boxSizing', !1, i),
                i
              );
          return (
            o &&
              (r = X.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[s] = t), (t = S.css(e, s))),
            Me(0, t, o)
          );
        }
      };
    }),
    (S.cssHooks.marginLeft = qe(v.reliableMarginLeft, function(e, t) {
      return t
        ? (parseFloat(Ae(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Se(e, { marginLeft: 0 }, function() {
                return e.getBoundingClientRect().left;
              })) + 'px'
        : void 0;
    })),
    (S.cssHooks.marginRight = qe(v.reliableMarginRight, function(
      e,
      t
    ) {
      return t
        ? Se(e, { display: 'inline-block' }, Ae, [e, 'marginRight'])
        : void 0;
    })),
    S.each({ margin: '', padding: '', border: 'Width' }, function(
      i,
      o
    ) {
      (S.cssHooks[i + o] = {
        expand: function(e) {
          for (
            var t = 0,
              n = {},
              r = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[i + z[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        }
      }),
        Ee.test(i) || (S.cssHooks[i + o].set = Me);
    }),
    S.fn.extend({
      css: function(e, t) {
        return O(
          this,
          function(e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (S.isArray(t)) {
              for (r = je(e), i = t.length; s < i; s++)
                o[t[s]] = S.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
      show: function() {
        return _e(this, !0);
      },
      hide: function() {
        return _e(this);
      },
      toggle: function(e) {
        return 'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function() {
              $(this) ? S(this).show() : S(this).hide();
            });
      }
    }),
    (((S.Tween = $e).prototype = {
      constructor: $e,
      init: function(e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? '' : 'px'));
      },
      cur: function() {
        var e = $e.propHooks[this.prop];
        return e && e.get
          ? e.get(this)
          : $e.propHooks._default.get(this);
      },
      run: function(e) {
        var t,
          n = $e.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = S.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : $e.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = $e.prototype),
    (($e.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function(e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[S.cssProps[e.prop]] &&
                !S.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }).scrollTop = $e.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType &&
          e.elem.parentNode &&
          (e.elem[e.prop] = e.now);
      }
    }),
    (S.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing'
    }),
    (S.fx = $e.prototype.init),
    (S.fx.step = {});
  var Be,
    Xe,
    ze,
    Ue,
    Ve,
    Ye = /^(?:toggle|show|hide)$/,
    Ge = /queueHooks$/;
  function Qe() {
    return (
      C.setTimeout(function() {
        Be = void 0;
      }),
      (Be = S.now())
    );
  }
  function Je(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = z[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function Ke(e, t, n) {
    for (
      var r,
        i = (Ze.tweeners[t] || []).concat(Ze.tweeners['*']),
        o = 0,
        s = i.length;
      o < s;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function Ze(o, e, t) {
    var n,
      s,
      r = 0,
      i = Ze.prefilters.length,
      a = S.Deferred().always(function() {
        delete u.elem;
      }),
      u = function() {
        if (s) return !1;
        for (
          var e = Be || Qe(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          a.notifyWith(o, [l, n, t]),
          n < 1 && i ? t : (a.resolveWith(o, [l]), !1)
        );
      },
      l = a.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(
          !0,
          { specialEasing: {}, easing: S.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: Be || Qe(),
        duration: t.duration,
        tweens: [],
        createTween: function(e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function(e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (s) return this;
          for (s = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l, e]))
              : a.rejectWith(o, [l, e]),
            this
          );
        }
      }),
      c = l.props;
    for (
      (function(e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (
            ((i = t[(r = S.camelCase(n))]),
            (o = e[n]),
            S.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (s = S.cssHooks[r]) && ('expand' in s))
          )
            for (n in ((o = s.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = Ze.prefilters[r].call(l, o, c, l.opts)))
        return (
          S.isFunction(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = S.proxy(
              n.stop,
              n
            )),
          n
        );
    return (
      S.map(c, Ke, l),
      S.isFunction(l.opts.start) && l.opts.start.call(o, l),
      S.fx.timer(
        S.extend(u, { elem: o, anim: l, queue: l.opts.queue })
      ),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  (S.Animation = S.extend(Ze, {
    tweeners: {
      '*': [
        function(e, t) {
          var n = this.createTween(e, t);
          return U(n.elem, e, X.exec(t), n), n;
        }
      ]
    },
    tweener: function(e, t) {
      for (
        var n,
          r = 0,
          i = (e = S.isFunction(e) ? ((t = e), ['*']) : e.match(L))
            .length;
        r < i;
        r++
      )
        (n = e[r]),
          (Ze.tweeners[n] = Ze.tweeners[n] || []),
          Ze.tweeners[n].unshift(t);
    },
    prefilters: [
      function(t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = this,
          f = {},
          p = t.style,
          d = t.nodeType && $(t),
          h = R.get(t, 'fxshow');
        for (r in (n.queue ||
          (null == (a = S._queueHooks(t, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (u = a.empty.fire),
            (a.empty.fire = function() {
              a.unqueued || u();
            })),
          a.unqueued++,
          c.always(function() {
            c.always(function() {
              a.unqueued--, S.queue(t, 'fx').length || a.empty.fire();
            });
          })),
        1 === t.nodeType &&
          ('height' in e || 'width' in e) &&
          ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
          'inline' ===
            ('none' === (l = S.css(t, 'display'))
              ? R.get(t, 'olddisplay') || ke(t.nodeName)
              : l) &&
            'none' === S.css(t, 'float') &&
            (p.display = 'inline-block')),
        n.overflow &&
          ((p.overflow = 'hidden'),
          c.always(function() {
            (p.overflow = n.overflow[0]),
              (p.overflowX = n.overflow[1]),
              (p.overflowY = n.overflow[2]);
          })),
        e))
          if (((i = e[r]), Ye.exec(i))) {
            if (
              (delete e[r],
              (o = o || 'toggle' === i),
              i === (d ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !h || void 0 === h[r]) continue;
              d = !0;
            }
            f[r] = (h && h[r]) || S.style(t, r);
          } else l = void 0;
        if (S.isEmptyObject(f))
          'inline' === ('none' === l ? ke(t.nodeName) : l) &&
            (p.display = l);
        else
          for (r in (h
            ? 'hidden' in h && (d = h.hidden)
            : (h = R.access(t, 'fxshow', {})),
          o && (h.hidden = !d),
          d
            ? S(t).show()
            : c.done(function() {
                S(t).hide();
              }),
          c.done(function() {
            var e;
            for (e in (R.remove(t, 'fxshow'), f)) S.style(t, e, f[e]);
          }),
          f))
            (s = Ke(d ? h[r] : 0, r, c)),
              r in h ||
                ((h[r] = s.start),
                d &&
                  ((s.end = s.start),
                  (s.start =
                    'width' === r || 'height' === r ? 1 : 0)));
      }
    ],
    prefilter: function(e, t) {
      t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e);
    }
  })),
    (S.speed = function(e, t, n) {
      var r =
        e && 'object' == _typeof(e)
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (S.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !S.isFunction(t) && t)
            };
      return (
        (r.duration = S.fx.off
          ? 0
          : 'number' == typeof r.duration
          ? r.duration
          : r.duration in S.fx.speeds
          ? S.fx.speeds[r.duration]
          : S.fx.speeds._default),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function() {
          S.isFunction(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter($)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function(t, e, n, r) {
        function i() {
          var e = Ze(this, S.extend({}, t), s);
          (o || R.get(this, 'finish')) && e.stop(!0);
        }
        var o = S.isEmptyObject(t),
          s = S.speed(e, n, r);
        return (
          (i.finish = i),
          o || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
        );
      },
      stop: function(i, e, o) {
        function s(e) {
          var t = e.stop;
          delete e.stop, t(o);
        }
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || 'fx', []),
          this.each(function() {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = S.timers,
              r = R.get(this);
            if (t) r[t] && r[t].stop && s(r[t]);
            else
              for (t in r) r[t] && r[t].stop && Ge.test(t) && s(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function(s) {
        return (
          !1 !== s && (s = s || 'fx'),
          this.each(function() {
            var e,
              t = R.get(this),
              n = t[s + 'queue'],
              r = t[s + 'queueHooks'],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === s &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      }
    }),
    S.each(['toggle', 'show', 'hide'], function(e, r) {
      var i = S.fn[r];
      S.fn[r] = function(e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(Je(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: Je('show'),
        slideUp: Je('hide'),
        slideToggle: Je('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function(e, r) {
        S.fn[e] = function(e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function() {
      var e,
        t = 0,
        n = S.timers;
      for (Be = S.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Be = void 0);
    }),
    (S.fx.timer = function(e) {
      S.timers.push(e), e() ? S.fx.start() : S.timers.pop();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function() {
      Xe = Xe || C.setInterval(S.fx.tick, S.fx.interval);
    }),
    (S.fx.stop = function() {
      C.clearInterval(Xe), (Xe = null);
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function(r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function(e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function() {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (ze = k.createElement('input')),
    (Ue = k.createElement('select')),
    (Ve = Ue.appendChild(k.createElement('option'))),
    (ze.type = 'checkbox'),
    (v.checkOn = '' !== ze.value),
    (v.optSelected = Ve.selected),
    (Ue.disabled = !0),
    (v.optDisabled = !Ve.disabled),
    ((ze = k.createElement('input')).value = 't'),
    (ze.type = 'radio'),
    (v.radioValue = 't' === ze.value);
  var et,
    tt = S.expr.attrHandle;
  S.fn.extend({
    attr: function(e, t) {
      return O(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function(e) {
      return this.each(function() {
        S.removeAttr(this, e);
      });
    }
  }),
    S.extend({
      attr: function(e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i =
                  S.attrHooks[t] ||
                  (S.expr.match.bool.test(t) ? et : void 0))),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (
              !v.radioValue &&
              'radio' === t &&
              S.nodeName(e, 'input')
            ) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(L);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = S.propFix[n] || n),
              S.expr.match.bool.test(n) && (e[r] = !1),
              e.removeAttribute(n);
      }
    }),
    (et = {
      set: function(e, t, n) {
        return (
          !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        );
      }
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var o = tt[t] || S.find.attr;
      tt[t] = function(e, t, n) {
        var r, i;
        return (
          n ||
            ((i = tt[t]),
            (tt[t] = r),
            (r = null != o(e, t, n) ? t.toLowerCase() : null),
            (tt[t] = i)),
          r
        );
      };
    });
  var nt = /^(?:input|select|textarea|button)$/i,
    rt = /^(?:a|area)$/i;
  S.fn.extend({
    prop: function(e, t) {
      return O(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[S.propFix[e] || e];
      });
    }
  }),
    S.extend({
      prop: function(e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = S.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : nt.test(e.nodeName) || (rt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    v.optSelected ||
      (S.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return (
            t && t.parentNode && t.parentNode.selectedIndex, null
          );
        },
        set: function(e) {
          var t = e.parentNode;
          t &&
            (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex);
        }
      }),
    S.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function() {
        S.propFix[this.toLowerCase()] = this;
      }
    );
  var it = /[\t\r\n\f]/g;
  function ot(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  S.fn.extend({
    addClass: function(t) {
      var e,
        n,
        r,
        i,
        o,
        s,
        a,
        u = 0;
      if (S.isFunction(t))
        return this.each(function(e) {
          S(this).addClass(t.call(this, e, ot(this)));
        });
      if ('string' == typeof t && t)
        for (e = t.match(L) || []; (n = this[u++]); )
          if (
            ((i = ot(n)),
            (r =
              1 === n.nodeType && (' ' + i + ' ').replace(it, ' ')))
          ) {
            for (s = 0; (o = e[s++]); )
              r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
            i !== (a = S.trim(r)) && n.setAttribute('class', a);
          }
      return this;
    },
    removeClass: function(t) {
      var e,
        n,
        r,
        i,
        o,
        s,
        a,
        u = 0;
      if (S.isFunction(t))
        return this.each(function(e) {
          S(this).removeClass(t.call(this, e, ot(this)));
        });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof t && t)
        for (e = t.match(L) || []; (n = this[u++]); )
          if (
            ((i = ot(n)),
            (r =
              1 === n.nodeType && (' ' + i + ' ').replace(it, ' ')))
          ) {
            for (s = 0; (o = e[s++]); )
              for (; -1 < r.indexOf(' ' + o + ' '); )
                r = r.replace(' ' + o + ' ', ' ');
            i !== (a = S.trim(r)) && n.setAttribute('class', a);
          }
      return this;
    },
    toggleClass: function(i, t) {
      var o = _typeof(i);
      return 'boolean' == typeof t && 'string' === o
        ? t
          ? this.addClass(i)
          : this.removeClass(i)
        : S.isFunction(i)
        ? this.each(function(e) {
            S(this).toggleClass(i.call(this, e, ot(this), t), t);
          })
        : this.each(function() {
            var e, t, n, r;
            if ('string' === o)
              for (
                t = 0, n = S(this), r = i.match(L) || [];
                (e = r[t++]);

              )
                n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
            else
              (void 0 !== i && 'boolean' !== o) ||
                ((e = ot(this)) && R.set(this, '__className__', e),
                this.setAttribute &&
                  this.setAttribute(
                    'class',
                    e || !1 === i
                      ? ''
                      : R.get(this, '__className__') || ''
                  ));
          });
    },
    hasClass: function(e) {
      var t,
        n,
        r = 0;
      for (t = ' ' + e + ' '; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          -1 < (' ' + ot(n) + ' ').replace(it, ' ').indexOf(t)
        )
          return !0;
      return !1;
    }
  });
  var st = /\r/g,
    at = /[\x20\t\r\n\f]+/g;
  S.fn.extend({
    val: function(n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = S.isFunction(n)),
          this.each(function(e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : S.isArray(t) &&
                  (t = S.map(t, function(e) {
                    return null == e ? '' : e + '';
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in r &&
                void 0 !== r.set(this, t, 'value')) ||
                (this.value = t));
          }))
        : t
        ? (r =
            S.valHooks[t.type] ||
            S.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in r &&
          void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(st, '')
          : null == e
          ? ''
          : e
        : void 0;
    }
  }),
    S.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = S.find.attr(e, 'value');
            return null != t ? t : S.trim(S.text(e)).replace(at, ' ');
          }
        },
        select: {
          get: function(e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = 'select-one' === e.type || i < 0,
                s = o ? null : [],
                a = o ? i + 1 : r.length,
                u = i < 0 ? a : o ? i : 0;
              u < a;
              u++
            )
              if (
                ((n = r[u]).selected || u === i) &&
                (v.optDisabled
                  ? !n.disabled
                  : null === n.getAttribute('disabled')) &&
                (!n.parentNode.disabled ||
                  !S.nodeName(n.parentNode, 'optgroup'))
              ) {
                if (((t = S(n).val()), o)) return t;
                s.push(t);
              }
            return s;
          },
          set: function(e, t) {
            for (
              var n,
                r,
                i = e.options,
                o = S.makeArray(t),
                s = i.length;
              s--;

            )
              ((r = i[s]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) &&
                (n = !0);
            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }),
    S.each(['radio', 'checkbox'], function() {
      (S.valHooks[this] = {
        set: function(e, t) {
          return S.isArray(t)
            ? (e.checked = -1 < S.inArray(S(e).val(), t))
            : void 0;
        }
      }),
        v.checkOn ||
          (S.valHooks[this].get = function(e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    });
  var ut = /^(?:focusinfocus|focusoutblur)$/;
  S.extend(S.event, {
    trigger: function(e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l,
        c,
        f = [n || k],
        p = h.call(e, 'type') ? e.type : e,
        d = h.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((o = s = n = n || k),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !ut.test(p + S.event.triggered) &&
          (-1 < p.indexOf('.') &&
            ((p = (d = p.split('.')).shift()), d.sort()),
          (u = p.indexOf(':') < 0 && 'on' + p),
          ((e = e[S.expando]
            ? e
            : new S.Event(
                p,
                'object' == _typeof(e) && e
              )).isTrigger = r ? 2 : 3),
          (e.namespace = d.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp(
                '(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'
              )
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[p] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !S.isWindow(n)) {
          for (
            a = c.delegateType || p,
              ut.test(a + p) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            f.push(o), (s = o);
          s === (n.ownerDocument || k) &&
            f.push(s.defaultView || s.parentWindow || C);
        }
        for (i = 0; (o = f[i++]) && !e.isPropagationStopped(); )
          (e.type = 1 < i ? a : c.bindType || p),
            (l =
              (R.get(o, 'events') || {})[e.type] &&
              R.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              F(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = p),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(f.pop(), t)) ||
            !F(n) ||
            (u &&
              S.isFunction(n[p]) &&
              !S.isWindow(n) &&
              ((s = n[u]) && (n[u] = null),
              n[(S.event.triggered = p)](),
              (S.event.triggered = void 0),
              s && (n[u] = s))),
          e.result
        );
      }
    },
    simulate: function(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }),
    S.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        return n ? S.event.trigger(e, t, n, !0) : void 0;
      }
    }),
    S.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function(e, n) {
        S.fn[n] = function(e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    S.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }),
    (v.focusin = 'onfocusin' in C),
    v.focusin ||
      S.each({ focus: 'focusin', blur: 'focusout' }, function(n, r) {
        function i(e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        }
        S.event.special[r] = {
          setup: function() {
            var e = this.ownerDocument || this,
              t = R.access(e, r);
            t || e.addEventListener(n, i, !0),
              R.access(e, r, (t || 0) + 1);
          },
          teardown: function() {
            var e = this.ownerDocument || this,
              t = R.access(e, r) - 1;
            t
              ? R.access(e, r, t)
              : (e.removeEventListener(n, i, !0), R.remove(e, r));
          }
        };
      });
  var lt = C.location,
    ct = S.now(),
    ft = /\?/;
  (S.parseJSON = function(e) {
    return JSON.parse(e + '');
  }),
    (S.parseXML = function(e) {
      var t;
      if (!e || 'string' != typeof e) return null;
      try {
        t = new C.DOMParser().parseFromString(e, 'text/xml');
      } catch (e) {
        t = void 0;
      }
      return (
        (t && !t.getElementsByTagName('parsererror').length) ||
          S.error('Invalid XML: ' + e),
        t
      );
    });
  var pt = /#.*$/,
    dt = /([?&])_=[^&]*/,
    ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    gt = /^(?:GET|HEAD)$/,
    vt = /^\/\//,
    mt = {},
    yt = {},
    xt = '*/'.concat('*'),
    bt = k.createElement('a');
  function wt(o) {
    return function(e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(L) || [];
      if (S.isFunction(t))
        for (; (n = i[r++]); )
          '+' === n[0]
            ? ((n = n.slice(1) || '*'),
              (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Tt(t, i, o, s) {
    var a = {},
      u = t === yt;
    function l(e) {
      var r;
      return (
        (a[e] = !0),
        S.each(t[e] || [], function(e, t) {
          var n = t(i, o, s);
          return 'string' != typeof n || u || a[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!a['*'] && l('*'));
  }
  function Ct(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t)
      void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (bt.href = lt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: lt.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          lt.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType:
          'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': xt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON'
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': S.parseJSON,
          'text xml': S.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(e, t) {
        return t
          ? Ct(Ct(e, S.ajaxSettings), t)
          : Ct(S.ajaxSettings, e);
      },
      ajaxPrefilter: wt(mt),
      ajaxTransport: wt(yt),
      ajax: function(e, t) {
        'object' == _typeof(e) && ((t = e), (e = void 0)),
          (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          i,
          g = S.ajaxSetup({}, t),
          v = g.context || g,
          m = g.context && (v.nodeType || v.jquery) ? S(v) : S.event,
          y = S.Deferred(),
          x = S.Callbacks('once memory'),
          b = g.statusCode || {},
          o = {},
          s = {},
          w = 0,
          a = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === w) {
                if (!n)
                  for (n = {}; (t = ht.exec(p)); )
                    n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function() {
              return 2 === w ? p : null;
            },
            setRequestHeader: function(e, t) {
              var n = e.toLowerCase();
              return w || ((e = s[n] = s[n] || e), (o[e] = t)), this;
            },
            overrideMimeType: function(e) {
              return w || (g.mimeType = e), this;
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (w < 2) for (t in e) b[t] = [b[t], e[t]];
                else T.always(e[T.status]);
              return this;
            },
            abort: function(e) {
              var t = e || a;
              return c && c.abort(t), u(0, t), this;
            }
          };
        if (
          ((y.promise(T).complete = x.add),
          (T.success = T.done),
          (T.error = T.fail),
          (g.url = ((e || g.url || lt.href) + '')
            .replace(pt, '')
            .replace(vt, lt.protocol + '//')),
          (g.type = t.method || t.type || g.method || g.type),
          (g.dataTypes = S.trim(g.dataType || '*')
            .toLowerCase()
            .match(L) || ['']),
          null == g.crossDomain)
        ) {
          r = k.createElement('a');
          try {
            (r.href = g.url),
              (r.href = r.href),
              (g.crossDomain =
                bt.protocol + '//' + bt.host !=
                r.protocol + '//' + r.host);
          } catch (e) {
            g.crossDomain = !0;
          }
        }
        if (
          (g.data &&
            g.processData &&
            'string' != typeof g.data &&
            (g.data = S.param(g.data, g.traditional)),
          Tt(mt, g, t, T),
          2 === w)
        )
          return T;
        for (i in ((h = S.event && g.global) &&
          0 == S.active++ &&
          S.event.trigger('ajaxStart'),
        (g.type = g.type.toUpperCase()),
        (g.hasContent = !gt.test(g.type)),
        (f = g.url),
        g.hasContent ||
          (g.data &&
            ((f = g.url += (ft.test(f) ? '&' : '?') + g.data),
            delete g.data),
          !1 === g.cache &&
            (g.url = dt.test(f)
              ? f.replace(dt, '$1_=' + ct++)
              : f + (ft.test(f) ? '&' : '?') + '_=' + ct++)),
        g.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader(
              'If-Modified-Since',
              S.lastModified[f]
            ),
          S.etag[f] &&
            T.setRequestHeader('If-None-Match', S.etag[f])),
        ((g.data && g.hasContent && !1 !== g.contentType) ||
          t.contentType) &&
          T.setRequestHeader('Content-Type', g.contentType),
        T.setRequestHeader(
          'Accept',
          g.dataTypes[0] && g.accepts[g.dataTypes[0]]
            ? g.accepts[g.dataTypes[0]] +
                ('*' !== g.dataTypes[0] ? ', ' + xt + '; q=0.01' : '')
            : g.accepts['*']
        ),
        g.headers))
          T.setRequestHeader(i, g.headers[i]);
        if (
          g.beforeSend &&
          (!1 === g.beforeSend.call(v, T, g) || 2 === w)
        )
          return T.abort();
        for (i in ((a = 'abort'),
        { success: 1, error: 1, complete: 1 }))
          T[i](g[i]);
        if ((c = Tt(yt, g, t, T))) {
          if (
            ((T.readyState = 1),
            h && m.trigger('ajaxSend', [T, g]),
            2 === w)
          )
            return T;
          g.async &&
            0 < g.timeout &&
            (d = C.setTimeout(function() {
              T.abort('timeout');
            }, g.timeout));
          try {
            (w = 1), c.send(o, u);
          } catch (e) {
            if (!(w < 2)) throw e;
            u(-1, e);
          }
        } else u(-1, 'No Transport');
        function u(e, t, n, r) {
          var i,
            o,
            s,
            a,
            u,
            l = t;
          2 !== w &&
            ((w = 2),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function(e, t, n) {
                for (
                  var r, i, o, s, a = e.contents, u = e.dataTypes;
                  '*' === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r =
                        e.mimeType ||
                        t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in a)
                    if (a[i] && a[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    s = s || i;
                  }
                  o = o || s;
                }
                return o
                  ? (o !== u[0] && u.unshift(o), n[o])
                  : void 0;
              })(g, T, n)),
            (a = (function(e, t, n, r) {
              var i,
                o,
                s,
                a,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters)
                  l[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] &&
                    (n[e.responseFields[o]] = t),
                  !u &&
                    r &&
                    e.dataFilter &&
                    (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(s = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (a = i.split(' '))[1] === o &&
                          (s = l[u + ' ' + a[0]] || l['* ' + a[0]])
                        ) {
                          !0 === s
                            ? (s = l[i])
                            : !0 !== l[i] &&
                              ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: s
                              ? e
                              : 'No conversion from ' + u + ' to ' + o
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(g, a, T, i)),
            i
              ? (g.ifModified &&
                  ((u = T.getResponseHeader('Last-Modified')) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader('etag')) &&
                    (S.etag[f] = u)),
                204 === e || 'HEAD' === g.type
                  ? (l = 'nocontent')
                  : 304 === e
                  ? (l = 'notmodified')
                  : ((l = a.state),
                    (o = a.data),
                    (i = !(s = a.error))))
              : ((s = l),
                (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i
              ? y.resolveWith(v, [o, l, T])
              : y.rejectWith(v, [T, l, s]),
            T.statusCode(b),
            (b = void 0),
            h &&
              m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [
                T,
                g,
                i ? o : s
              ]),
            x.fireWith(v, [T, l]),
            h &&
              (m.trigger('ajaxComplete', [T, g]),
              --S.active || S.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function(e, t, n) {
        return S.get(e, t, n, 'json');
      },
      getScript: function(e, t) {
        return S.get(e, void 0, t, 'script');
      }
    }),
    S.each(['get', 'post'], function(e, i) {
      S[i] = function(e, t, n, r) {
        return (
          S.isFunction(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (S._evalUrl = function(e) {
      return S.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    S.fn.extend({
      wrapAll: function(t) {
        var e;
        return S.isFunction(t)
          ? this.each(function(e) {
              S(this).wrapAll(t.call(this, e));
            })
          : (this[0] &&
              ((e = S(t, this[0].ownerDocument)
                .eq(0)
                .clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function() {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function(n) {
        return S.isFunction(n)
          ? this.each(function(e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function() {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function(t) {
        var n = S.isFunction(t);
        return this.each(function(e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function() {
        return this.parent()
          .each(function() {
            S.nodeName(this, 'body') ||
              S(this).replaceWith(this.childNodes);
          })
          .end();
      }
    }),
    (S.expr.filters.hidden = function(e) {
      return !S.expr.filters.visible(e);
    }),
    (S.expr.filters.visible = function(e) {
      return (
        0 < e.offsetWidth ||
        0 < e.offsetHeight ||
        0 < e.getClientRects().length
      );
    });
  var kt = /%20/g,
    St = /\[\]$/,
    Et = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (S.isArray(e))
      S.each(e, function(e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n +
                '[' +
                ('object' == _typeof(t) && null != t ? e : '') +
                ']',
              t,
              r,
              i
            );
      });
    else if (r || 'object' !== S.type(e)) i(n, e);
    else for (t in e) Dt(n + '[' + t + ']', e[t], r, i);
  }
  (S.param = function(e, t) {
    function n(e, t) {
      (t = S.isFunction(t) ? t() : null == t ? '' : t),
        (i[i.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(t));
    }
    var r,
      i = [];
    if (
      (void 0 === t &&
        (t = S.ajaxSettings && S.ajaxSettings.traditional),
      S.isArray(e) || (e.jquery && !S.isPlainObject(e)))
    )
      S.each(e, function() {
        n(this.name, this.value);
      });
    else for (r in e) Dt(r, e[r], t, n);
    return i.join('&').replace(kt, '+');
  }),
    S.fn.extend({
      serialize: function() {
        return S.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = S.prop(this, 'elements');
          return e ? S.makeArray(e) : this;
        })
          .filter(function() {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(':disabled') &&
              jt.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !V.test(e))
            );
          })
          .map(function(e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : S.isArray(n)
              ? S.map(n, function(e) {
                  return {
                    name: t.name,
                    value: e.replace(Et, '\r\n')
                  };
                })
              : { name: t.name, value: n.replace(Et, '\r\n') };
          })
          .get();
      }
    }),
    (S.ajaxSettings.xhr = function() {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var At = { 0: 200, 1223: 204 },
    qt = S.ajaxSettings.xhr();
  (v.cors = !!qt && 'withCredentials' in qt),
    (v.ajax = qt = !!qt),
    S.ajaxTransport(function(i) {
      var o, s;
      return v.cors || (qt && !i.crossDomain)
        ? {
            send: function(e, t) {
              var n,
                r = i.xhr();
              if (
                (r.open(
                  i.type,
                  i.url,
                  i.async,
                  i.username,
                  i.password
                ),
                i.xhrFields)
              )
                for (n in i.xhrFields) r[n] = i.xhrFields[n];
              for (n in (i.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(i.mimeType),
              i.crossDomain ||
                e['X-Requested-With'] ||
                (e['X-Requested-With'] = 'XMLHttpRequest'),
              e))
                r.setRequestHeader(n, e[n]);
              (o = function(e) {
                return function() {
                  o &&
                    ((o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null),
                    'abort' === e
                      ? r.abort()
                      : 'error' === e
                      ? 'number' != typeof r.status
                        ? t(0, 'error')
                        : t(r.status, r.statusText)
                      : t(
                          At[r.status] || r.status,
                          r.statusText,
                          'text' !== (r.responseType || 'text') ||
                            'string' != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = o()),
                (s = r.onerror = o('error')),
                void 0 !== r.onabort
                  ? (r.onabort = s)
                  : (r.onreadystatechange = function() {
                      4 === r.readyState &&
                        C.setTimeout(function() {
                          o && s();
                        });
                    }),
                (o = o('abort'));
              try {
                r.send((i.hasContent && i.data) || null);
              } catch (e) {
                if (o) throw e;
              }
            },
            abort: function() {
              o && o();
            }
          }
        : void 0;
    }),
    S.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function(e) {
          return S.globalEval(e), e;
        }
      }
    }),
    S.ajaxPrefilter('script', function(e) {
      void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = 'GET');
    }),
    S.ajaxTransport('script', function(n) {
      var r, i;
      if (n.crossDomain)
        return {
          send: function(e, t) {
            (r = S('<script>')
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function(e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              k.head.appendChild(r[0]);
          },
          abort: function() {
            i && i();
          }
        };
    });
  var Lt = [],
    Ht = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function() {
      var e = Lt.pop() || S.expando + '_' + ct++;
      return (this[e] = !0), e;
    }
  }),
    S.ajaxPrefilter('json jsonp', function(e, t, n) {
      var r,
        i,
        o,
        s =
          !1 !== e.jsonp &&
          (Ht.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Ht.test(e.data) &&
              'data');
      return s || 'jsonp' === e.dataTypes[0]
        ? ((r = e.jsonpCallback = S.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          s
            ? (e[s] = e[s].replace(Ht, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url +=
                (ft.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function() {
            return o || S.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = C[r]),
          (C[r] = function() {
            o = arguments;
          }),
          n.always(function() {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] &&
                ((e.jsonpCallback = t.jsonpCallback), Lt.push(r)),
              o && S.isFunction(i) && i(o[0]),
              (o = i = void 0);
          }),
          'script')
        : void 0;
    }),
    (S.parseHTML = function(e, t, n) {
      if (!e || 'string' != typeof e) return null;
      'boolean' == typeof t && ((n = t), (t = !1)), (t = t || k);
      var r = b.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = ne([e], t, i)),
          i && i.length && S(i).remove(),
          S.merge([], r.childNodes));
    });
  var Ot = S.fn.load;
  function Ft(e) {
    return S.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  (S.fn.load = function(e, t, n) {
    if ('string' != typeof e && Ot) return Ot.apply(this, arguments);
    var r,
      i,
      o,
      s = this,
      a = e.indexOf(' ');
    return (
      -1 < a && ((r = S.trim(e.slice(a))), (e = e.slice(0, a))),
      S.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && 'object' == _typeof(t) && (i = 'POST'),
      0 < s.length &&
        S.ajax({
          url: e,
          type: i || 'GET',
          dataType: 'html',
          data: t
        })
          .done(function(e) {
            (o = arguments),
              s.html(
                r
                  ? S('<div>')
                      .append(S.parseHTML(e))
                      .find(r)
                  : e
              );
          })
          .always(
            n &&
              function(e, t) {
                s.each(function() {
                  n.apply(this, o || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    S.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
      ],
      function(e, t) {
        S.fn[t] = function(e) {
          return this.on(t, e);
        };
      }
    ),
    (S.expr.filters.animated = function(t) {
      return S.grep(S.timers, function(e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function(e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l = S.css(e, 'position'),
          c = S(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (a = c.offset()),
          (o = S.css(e, 'top')),
          (u = S.css(e, 'left')),
          (i =
            ('absolute' === l || 'fixed' === l) &&
            -1 < (o + u).indexOf('auto')
              ? ((s = (r = c.position()).top), r.left)
              : ((s = parseFloat(o) || 0), parseFloat(u) || 0)),
          S.isFunction(t) && (t = t.call(e, n, S.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      }
    }),
    S.fn.extend({
      offset: function(t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function(e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0],
          i = { top: 0, left: 0 },
          o = r && r.ownerDocument;
        return o
          ? ((e = o.documentElement),
            S.contains(e, r)
              ? ((i = r.getBoundingClientRect()),
                (n = Ft(o)),
                {
                  top: i.top + n.pageYOffset - e.clientTop,
                  left: i.left + n.pageXOffset - e.clientLeft
                })
              : i)
          : void 0;
      },
      position: function() {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            'fixed' === S.css(n, 'position')
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                S.nodeName(e[0], 'html') || (r = e.offset()),
                (r.top += S.css(e[0], 'borderTopWidth', !0)),
                (r.left += S.css(e[0], 'borderLeftWidth', !0))),
            {
              top: t.top - r.top - S.css(n, 'marginTop', !0),
              left: t.left - r.left - S.css(n, 'marginLeft', !0)
            }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var e = this.offsetParent;
            e && 'static' === S.css(e, 'position');

          )
            e = e.offsetParent;
          return e || De;
        });
      }
    }),
    S.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function(t, i) {
        var o = 'pageYOffset' === i;
        S.fn[t] = function(e) {
          return O(
            this,
            function(e, t, n) {
              var r = Ft(e);
              return void 0 === n
                ? r
                  ? r[i]
                  : e[t]
                : void (r
                    ? r.scrollTo(
                        o ? r.pageXOffset : n,
                        o ? n : r.pageYOffset
                      )
                    : (e[t] = n));
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(['top', 'left'], function(e, n) {
      S.cssHooks[n] = qe(v.pixelPosition, function(e, t) {
        return t
          ? ((t = Ae(e, n)),
            Ne.test(t) ? S(e).position()[n] + 'px' : t)
          : void 0;
      });
    }),
    S.each({ Height: 'height', Width: 'width' }, function(o, s) {
      S.each(
        { padding: 'inner' + o, content: s, '': 'outer' + o },
        function(r, e) {
          S.fn[e] = function(e, t) {
            var n = arguments.length && (r || 'boolean' != typeof e),
              i = r || (!0 === e || !0 === t ? 'margin' : 'border');
            return O(
              this,
              function(e, t, n) {
                var r;
                return S.isWindow(e)
                  ? e.document.documentElement['client' + o]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body['scroll' + o],
                      r['scroll' + o],
                      e.body['offset' + o],
                      r['offset' + o],
                      r['client' + o]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n,
              null
            );
          };
        }
      );
    }),
    S.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      size: function() {
        return this.length;
      }
    }),
    (S.fn.andSelf = S.fn.addBack),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function() {
        return S;
      });
  var Pt = C.jQuery,
    Rt = C.$;
  return (
    (S.noConflict = function(e) {
      return (
        C.$ === S && (C.$ = Rt),
        e && C.jQuery === S && (C.jQuery = Pt),
        S
      );
    }),
    e || (C.jQuery = C.$ = S),
    S
  );
});
!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery'], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery);
})(this, function(t, p) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      'function' == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          })
        )),
        e.forEach(function(t) {
          var e, n, i;
          (e = o),
            (i = r[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[n] = i);
        });
    }
    return o;
  }
  p = p && p.hasOwnProperty('default') ? p.default : p;
  var e = 'transitionend';
  function n(t) {
    var e = this,
      n = !1;
    return (
      p(this).one(m.TRANSITION_END, function() {
        n = !0;
      }),
      setTimeout(function() {
        n || m.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var m = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function(t) {
      for (
        ;
        (t += ~~(1e6 * Math.random())), document.getElementById(t);

      );
      return t;
    },
    getSelectorFromElement: function(t) {
      var e = t.getAttribute('data-target');
      if (!e || '#' === e) {
        var n = t.getAttribute('href');
        e = n && '#' !== n ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function(t) {
      if (!t) return 0;
      var e = p(t).css('transition-duration'),
        n = p(t).css('transition-delay'),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o
        ? ((e = e.split(',')[0]),
          (n = n.split(',')[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function(t) {
      p(t).trigger(e);
    },
    supportsTransitionEnd: function() {
      return Boolean(e);
    },
    isElement: function(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function(t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && m.isElement(r)
                ? 'element'
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function(t) {
      if (!document.documentElement.attachShadow) return null;
      if ('function' != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? m.findShadowRoot(t.parentNode)
          : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  (p.fn.emulateTransitionEnd = n),
    (p.event.special[m.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function(t) {
        if (p(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      }
    });
  var o = 'alert',
    r = 'bs.alert',
    a = '.' + r,
    c = p.fn[o],
    h = {
      CLOSE: 'close' + a,
      CLOSED: 'closed' + a,
      CLICK_DATA_API: 'click' + a + '.data-api'
    },
    u = 'alert',
    f = 'fade',
    d = 'show',
    g = (function() {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.close = function(t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (t.dispose = function() {
          p.removeData(this._element, r), (this._element = null);
        }),
        (t._getRootElement = function(t) {
          var e = m.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            (n = n || p(t).closest('.' + u)[0])
          );
        }),
        (t._triggerCloseEvent = function(t) {
          var e = p.Event(h.CLOSE);
          return p(t).trigger(e), e;
        }),
        (t._removeElement = function(e) {
          var n = this;
          if ((p(e).removeClass(d), p(e).hasClass(f))) {
            var t = m.getTransitionDurationFromElement(e);
            p(e)
              .one(m.TRANSITION_END, function(t) {
                return n._destroyElement(e, t);
              })
              .emulateTransitionEnd(t);
          } else this._destroyElement(e);
        }),
        (t._destroyElement = function(t) {
          p(t)
            .detach()
            .trigger(h.CLOSED)
            .remove();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = p(this),
              e = t.data(r);
            e || ((e = new i(this)), t.data(r, e)),
              'close' === n && e[n](this);
          });
        }),
        (i._handleDismiss = function(e) {
          return function(t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          }
        ]),
        i
      );
    })();
  p(document).on(
    h.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    g._handleDismiss(new g())
  ),
    (p.fn[o] = g._jQueryInterface),
    (p.fn[o].Constructor = g),
    (p.fn[o].noConflict = function() {
      return (p.fn[o] = c), g._jQueryInterface;
    });
  var _ = 'button',
    v = 'bs.button',
    y = '.' + v,
    E = '.data-api',
    b = p.fn[_],
    w = 'active',
    C = 'btn',
    T = 'focus',
    S = '[data-toggle^="button"]',
    D = '[data-toggle="buttons"]',
    I = 'input:not([type="hidden"])',
    A = '.active',
    O = '.btn',
    N = {
      CLICK_DATA_API: 'click' + y + E,
      FOCUS_BLUR_DATA_API: 'focus' + y + E + ' blur' + y + E
    },
    k = (function() {
      function n(t) {
        this._element = t;
      }
      var t = n.prototype;
      return (
        (t.toggle = function() {
          var t = !0,
            e = !0,
            n = p(this._element).closest(D)[0];
          if (n) {
            var i = this._element.querySelector(I);
            if (i) {
              if ('radio' === i.type)
                if (i.checked && this._element.classList.contains(w))
                  t = !1;
                else {
                  var o = n.querySelector(A);
                  o && p(o).removeClass(w);
                }
              if (t) {
                if (
                  i.hasAttribute('disabled') ||
                  n.hasAttribute('disabled') ||
                  i.classList.contains('disabled') ||
                  n.classList.contains('disabled')
                )
                  return;
                (i.checked = !this._element.classList.contains(w)),
                  p(i).trigger('change');
              }
              i.focus(), (e = !1);
            }
          }
          e &&
            this._element.setAttribute(
              'aria-pressed',
              !this._element.classList.contains(w)
            ),
            t && p(this._element).toggleClass(w);
        }),
        (t.dispose = function() {
          p.removeData(this._element, v), (this._element = null);
        }),
        (n._jQueryInterface = function(e) {
          return this.each(function() {
            var t = p(this).data(v);
            t || ((t = new n(this)), p(this).data(v, t)),
              'toggle' === e && t[e]();
          });
        }),
        s(n, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          }
        ]),
        n
      );
    })();
  p(document)
    .on(N.CLICK_DATA_API, S, function(t) {
      t.preventDefault();
      var e = t.target;
      p(e).hasClass(C) || (e = p(e).closest(O)),
        k._jQueryInterface.call(p(e), 'toggle');
    })
    .on(N.FOCUS_BLUR_DATA_API, S, function(t) {
      var e = p(t.target).closest(O)[0];
      p(e).toggleClass(T, /^focus(in)?$/.test(t.type));
    }),
    (p.fn[_] = k._jQueryInterface),
    (p.fn[_].Constructor = k),
    (p.fn[_].noConflict = function() {
      return (p.fn[_] = b), k._jQueryInterface;
    });
  var L = 'carousel',
    x = 'bs.carousel',
    P = '.' + x,
    H = '.data-api',
    j = p.fn[L],
    R = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0
    },
    F = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    },
    M = 'next',
    W = 'prev',
    U = 'left',
    B = 'right',
    q = {
      SLIDE: 'slide' + P,
      SLID: 'slid' + P,
      KEYDOWN: 'keydown' + P,
      MOUSEENTER: 'mouseenter' + P,
      MOUSELEAVE: 'mouseleave' + P,
      TOUCHSTART: 'touchstart' + P,
      TOUCHMOVE: 'touchmove' + P,
      TOUCHEND: 'touchend' + P,
      POINTERDOWN: 'pointerdown' + P,
      POINTERUP: 'pointerup' + P,
      DRAG_START: 'dragstart' + P,
      LOAD_DATA_API: 'load' + P + H,
      CLICK_DATA_API: 'click' + P + H
    },
    K = 'carousel',
    Q = 'active',
    V = 'slide',
    Y = 'carousel-item-right',
    z = 'carousel-item-left',
    X = 'carousel-item-next',
    G = 'carousel-item-prev',
    $ = 'pointer-event',
    J = '.active',
    Z = '.active.carousel-item',
    tt = '.carousel-item',
    et = '.carousel-item img',
    nt = '.carousel-item-next, .carousel-item-prev',
    it = '.carousel-indicators',
    ot = '[data-slide], [data-slide-to]',
    rt = '[data-ride="carousel"]',
    st = { TOUCH: 'touch', PEN: 'pen' },
    at = (function() {
      function r(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(it)),
          (this._touchSupported =
            'ontouchstart' in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var t = r.prototype;
      return (
        (t.next = function() {
          this._isSliding || this._slide(M);
        }),
        (t.nextWhenVisible = function() {
          !document.hidden &&
            p(this._element).is(':visible') &&
            'hidden' !== p(this._element).css('visibility') &&
            this.next();
        }),
        (t.prev = function() {
          this._isSliding || this._slide(W);
        }),
        (t.pause = function(t) {
          t || (this._isPaused = !0),
            this._element.querySelector(nt) &&
              (m.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function(t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval),
              (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (t.to = function(t) {
          var e = this;
          this._activeElement = this._element.querySelector(Z);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              p(this._element).one(q.SLID, function() {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = n < t ? M : W;
              this._slide(i, this._items[t]);
            }
        }),
        (t.dispose = function() {
          p(this._element).off(P),
            p.removeData(this._element, x),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function(t) {
          return (t = l({}, R, t)), m.typeCheckConfig(L, t, F), t;
        }),
        (t._handleSwipe = function() {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            0 < e && this.prev(), e < 0 && this.next();
          }
        }),
        (t._addEventListeners = function() {
          var e = this;
          this._config.keyboard &&
            p(this._element).on(q.KEYDOWN, function(t) {
              return e._keydown(t);
            }),
            'hover' === this._config.pause &&
              p(this._element)
                .on(q.MOUSEENTER, function(t) {
                  return e.pause(t);
                })
                .on(q.MOUSELEAVE, function(t) {
                  return e.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (t._addTouchEventListeners = function() {
          var e = this;
          if (this._touchSupported) {
            var n = function(t) {
                e._pointerEvent &&
                st[t.originalEvent.pointerType.toUpperCase()]
                  ? (e.touchStartX = t.originalEvent.clientX)
                  : e._pointerEvent ||
                    (e.touchStartX =
                      t.originalEvent.touches[0].clientX);
              },
              i = function(t) {
                e._pointerEvent &&
                  st[t.originalEvent.pointerType.toUpperCase()] &&
                  (e.touchDeltaX =
                    t.originalEvent.clientX - e.touchStartX),
                  e._handleSwipe(),
                  'hover' === e._config.pause &&
                    (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    (e.touchTimeout = setTimeout(function(t) {
                      return e.cycle(t);
                    }, 500 + e._config.interval)));
              };
            p(this._element.querySelectorAll(et)).on(
              q.DRAG_START,
              function(t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (p(this._element).on(q.POINTERDOWN, function(t) {
                    return n(t);
                  }),
                  p(this._element).on(q.POINTERUP, function(t) {
                    return i(t);
                  }),
                  this._element.classList.add($))
                : (p(this._element).on(q.TOUCHSTART, function(t) {
                    return n(t);
                  }),
                  p(this._element).on(q.TOUCHMOVE, function(t) {
                    return (function(t) {
                      t.originalEvent.touches &&
                      1 < t.originalEvent.touches.length
                        ? (e.touchDeltaX = 0)
                        : (e.touchDeltaX =
                            t.originalEvent.touches[0].clientX -
                            e.touchStartX);
                    })(t);
                  }),
                  p(this._element).on(q.TOUCHEND, function(t) {
                    return i(t);
                  }));
          }
        }),
        (t._keydown = function(t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function(t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(tt))
                : []),
            this._items.indexOf(t)
          );
        }),
        (t._getItemByDirection = function(t, e) {
          var n = t === M,
            i = t === W,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (
            ((i && 0 === o) || (n && o === r)) &&
            !this._config.wrap
          )
            return e;
          var s = (o + (t === W ? -1 : 1)) % this._items.length;
          return -1 == s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (t._triggerSlideEvent = function(t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(this._element.querySelector(Z)),
            o = p.Event(q.SLIDE, {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n
            });
          return p(this._element).trigger(o), o;
        }),
        (t._setActiveIndicatorElement = function(t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll(J)
            );
            p(e).removeClass(Q);
            var n = this._indicatorsElement.children[
              this._getItemIndex(t)
            ];
            n && p(n).addClass(Q);
          }
        }),
        (t._slide = function(t, e) {
          var n,
            i,
            o,
            r = this,
            s = this._element.querySelector(Z),
            a = this._getItemIndex(s),
            l = e || (s && this._getItemByDirection(t, s)),
            c = this._getItemIndex(l),
            h = Boolean(this._interval);
          if (
            ((o =
              t === M
                ? ((n = z), (i = X), U)
                : ((n = Y), (i = G), B)),
            l && p(l).hasClass(Q))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
            s &&
            l
          ) {
            (this._isSliding = !0),
              h && this.pause(),
              this._setActiveIndicatorElement(l);
            var u = p.Event(q.SLID, {
              relatedTarget: l,
              direction: o,
              from: a,
              to: c
            });
            if (p(this._element).hasClass(V)) {
              p(l).addClass(i),
                m.reflow(l),
                p(s).addClass(n),
                p(l).addClass(n);
              var f = parseInt(l.getAttribute('data-interval'), 10);
              f
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval ||
                    this._config.interval),
                  (this._config.interval = f))
                : (this._config.interval =
                    this._config.defaultInterval ||
                    this._config.interval);
              var d = m.getTransitionDurationFromElement(s);
              p(s)
                .one(m.TRANSITION_END, function() {
                  p(l)
                    .removeClass(n + ' ' + i)
                    .addClass(Q),
                    p(s).removeClass(Q + ' ' + i + ' ' + n),
                    (r._isSliding = !1),
                    setTimeout(function() {
                      return p(r._element).trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(d);
            } else
              p(s).removeClass(Q),
                p(l).addClass(Q),
                (this._isSliding = !1),
                p(this._element).trigger(u);
            h && this.cycle();
          }
        }),
        (r._jQueryInterface = function(i) {
          return this.each(function() {
            var t = p(this).data(x),
              e = l({}, R, p(this).data());
            'object' == typeof i && (e = l({}, e, i));
            var n = 'string' == typeof i ? i : e.slide;
            if (
              (t || ((t = new r(this, e)), p(this).data(x, t)),
              'number' == typeof i)
            )
              t.to(i);
            else if ('string' == typeof n) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            } else e.interval && e.ride && (t.pause(), t.cycle());
          });
        }),
        (r._dataApiClickHandler = function(t) {
          var e = m.getSelectorFromElement(this);
          if (e) {
            var n = p(e)[0];
            if (n && p(n).hasClass(K)) {
              var i = l({}, p(n).data(), p(this).data()),
                o = this.getAttribute('data-slide-to');
              o && (i.interval = !1),
                r._jQueryInterface.call(p(n), i),
                o &&
                  p(n)
                    .data(x)
                    .to(o),
                t.preventDefault();
            }
          }
        }),
        s(r, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return R;
            }
          }
        ]),
        r
      );
    })();
  p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler),
    p(window).on(q.LOAD_DATA_API, function() {
      for (
        var t = [].slice.call(document.querySelectorAll(rt)),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = p(t[e]);
        at._jQueryInterface.call(i, i.data());
      }
    }),
    (p.fn[L] = at._jQueryInterface),
    (p.fn[L].Constructor = at),
    (p.fn[L].noConflict = function() {
      return (p.fn[L] = j), at._jQueryInterface;
    });
  var lt = 'collapse',
    ct = 'bs.collapse',
    ht = '.' + ct,
    ut = p.fn[lt],
    ft = { toggle: !0, parent: '' },
    dt = { toggle: 'boolean', parent: '(string|element)' },
    pt = {
      SHOW: 'show' + ht,
      SHOWN: 'shown' + ht,
      HIDE: 'hide' + ht,
      HIDDEN: 'hidden' + ht,
      CLICK_DATA_API: 'click' + ht + '.data-api'
    },
    mt = 'show',
    gt = 'collapse',
    _t = 'collapsing',
    vt = 'collapsed',
    yt = 'width',
    Et = 'height',
    bt = '.show, .collapsing',
    wt = '[data-toggle="collapse"]',
    Ct = (function() {
      function a(e, t) {
        (this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(wt)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = m.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function(t) {
                return t === e;
              });
          null !== s &&
            0 < a.length &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent
          ? this._getParent()
          : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(
              this._element,
              this._triggerArray
            ),
          this._config.toggle && this.toggle();
      }
      var t = a.prototype;
      return (
        (t.toggle = function() {
          p(this._element).hasClass(mt) ? this.hide() : this.show();
        }),
        (t.show = function() {
          var t,
            e,
            n = this;
          if (
            !this._isTransitioning &&
            !p(this._element).hasClass(mt) &&
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(this._parent.querySelectorAll(bt))
                  .filter(function(t) {
                    return 'string' == typeof n._config.parent
                      ? t.getAttribute('data-parent') ===
                          n._config.parent
                      : t.classList.contains(gt);
                  })).length &&
              (t = null),
            !(
              t &&
              (e = p(t)
                .not(this._selector)
                .data(ct)) &&
              e._isTransitioning
            ))
          ) {
            var i = p.Event(pt.SHOW);
            if (
              (p(this._element).trigger(i), !i.isDefaultPrevented())
            ) {
              t &&
                (a._jQueryInterface.call(
                  p(t).not(this._selector),
                  'hide'
                ),
                e || p(t).data(ct, null));
              var o = this._getDimension();
              p(this._element)
                .removeClass(gt)
                .addClass(_t),
                (this._element.style[o] = 0),
                this._triggerArray.length &&
                  p(this._triggerArray)
                    .removeClass(vt)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0);
              var r = 'scroll' + (o[0].toUpperCase() + o.slice(1)),
                s = m.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(m.TRANSITION_END, function() {
                  p(n._element)
                    .removeClass(_t)
                    .addClass(gt)
                    .addClass(mt),
                    (n._element.style[o] = ''),
                    n.setTransitioning(!1),
                    p(n._element).trigger(pt.SHOWN);
                })
                .emulateTransitionEnd(s),
                (this._element.style[o] = this._element[r] + 'px');
            }
          }
        }),
        (t.hide = function() {
          var t = this;
          if (
            !this._isTransitioning &&
            p(this._element).hasClass(mt)
          ) {
            var e = p.Event(pt.HIDE);
            if (
              (p(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + 'px'),
                m.reflow(this._element),
                p(this._element)
                  .addClass(_t)
                  .removeClass(gt)
                  .removeClass(mt);
              var i = this._triggerArray.length;
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    s = m.getSelectorFromElement(r);
                  if (null !== s)
                    p(
                      [].slice.call(document.querySelectorAll(s))
                    ).hasClass(mt) ||
                      p(r)
                        .addClass(vt)
                        .attr('aria-expanded', !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = '';
              var a = m.getTransitionDurationFromElement(
                this._element
              );
              p(this._element)
                .one(m.TRANSITION_END, function() {
                  t.setTransitioning(!1),
                    p(t._element)
                      .removeClass(_t)
                      .addClass(gt)
                      .trigger(pt.HIDDEN);
                })
                .emulateTransitionEnd(a);
            }
          }
        }),
        (t.setTransitioning = function(t) {
          this._isTransitioning = t;
        }),
        (t.dispose = function() {
          p.removeData(this._element, ct),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function(t) {
          return (
            ((t = l({}, ft, t)).toggle = Boolean(t.toggle)),
            m.typeCheckConfig(lt, t, dt),
            t
          );
        }),
        (t._getDimension = function() {
          return p(this._element).hasClass(yt) ? yt : Et;
        }),
        (t._getParent = function() {
          var t,
            n = this;
          m.isElement(this._config.parent)
            ? ((t = this._config.parent),
              void 0 !== this._config.parent.jquery &&
                (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            i = [].slice.call(t.querySelectorAll(e));
          return (
            p(i).each(function(t, e) {
              n._addAriaAndCollapsedClass(
                a._getTargetFromElement(e),
                [e]
              );
            }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function(t, e) {
          var n = p(t).hasClass(mt);
          e.length &&
            p(e)
              .toggleClass(vt, !n)
              .attr('aria-expanded', n);
        }),
        (a._getTargetFromElement = function(t) {
          var e = m.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (a._jQueryInterface = function(i) {
          return this.each(function() {
            var t = p(this),
              e = t.data(ct),
              n = l(
                {},
                ft,
                t.data(),
                'object' == typeof i && i ? i : {}
              );
            if (
              (!e &&
                n.toggle &&
                /show|hide/.test(i) &&
                (n.toggle = !1),
              e || ((e = new a(this, n)), t.data(ct, e)),
              'string' == typeof i)
            ) {
              if (void 0 === e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        s(a, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return ft;
            }
          }
        ]),
        a
      );
    })();
  p(document).on(pt.CLICK_DATA_API, wt, function(t) {
    'A' === t.currentTarget.tagName && t.preventDefault();
    var n = p(this),
      e = m.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    p(i).each(function() {
      var t = p(this),
        e = t.data(ct) ? 'toggle' : n.data();
      Ct._jQueryInterface.call(t, e);
    });
  }),
    (p.fn[lt] = Ct._jQueryInterface),
    (p.fn[lt].Constructor = Ct),
    (p.fn[lt].noConflict = function() {
      return (p.fn[lt] = ut), Ct._jQueryInterface;
    });
  for (
    var Tt =
        'undefined' != typeof window &&
        'undefined' != typeof document,
      St = ['Edge', 'Trident', 'Firefox'],
      Dt = 0,
      It = 0;
    It < St.length;
    It += 1
  )
    if (Tt && 0 <= navigator.userAgent.indexOf(St[It])) {
      Dt = 1;
      break;
    }
  var At =
    Tt && window.Promise
      ? function(t) {
          var e = !1;
          return function() {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function() {
                (e = !1), t();
              }));
          };
        }
      : function(t) {
          var e = !1;
          return function() {
            e ||
              ((e = !0),
              setTimeout(function() {
                (e = !1), t();
              }, Dt));
          };
        };
  function Ot(t) {
    return t && '[object Function]' === {}.toString.call(t);
  }
  function Nt(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function kt(t) {
    return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
  }
  function Lt(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case 'HTML':
      case 'BODY':
        return t.ownerDocument.body;
      case '#document':
        return t.body;
    }
    var e = Nt(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : Lt(kt(t));
  }
  var xt =
      Tt && !(!window.MSInputMethodContext || !document.documentMode),
    Pt = Tt && /MSIE 10/.test(navigator.userAgent);
  function Ht(t) {
    return 11 === t ? xt : 10 === t ? Pt : xt || Pt;
  }
  function jt(t) {
    if (!t) return document.documentElement;
    for (
      var e = Ht(10) ? document.body : null,
        n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i
      ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) &&
        'static' === Nt(n, 'position')
        ? jt(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function Rt(t) {
    return null !== t.parentNode ? Rt(t.parentNode) : t;
  }
  function Ft(t, e) {
    if (!(t && t.nodeType && e && e.nodeType))
      return document.documentElement;
    var n =
        t.compareDocumentPosition(e) &
        Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s = r.commonAncestorContainer;
    if ((t !== s && e !== s) || i.contains(o))
      return (function(t) {
        var e = t.nodeName;
        return (
          'BODY' !== e &&
          ('HTML' === e || jt(t.firstElementChild) === t)
        );
      })(s)
        ? s
        : jt(s);
    var a = Rt(t);
    return a.host ? Ft(a.host, e) : Ft(t, Rt(e).host);
  }
  function Mt(t, e) {
    var n =
        'top' === (1 < arguments.length && void 0 !== e ? e : 'top')
          ? 'scrollTop'
          : 'scrollLeft',
      i = t.nodeName;
    if ('BODY' !== i && 'HTML' !== i) return t[n];
    var o = t.ownerDocument.documentElement;
    return (t.ownerDocument.scrollingElement || o)[n];
  }
  function Wt(t, e) {
    var n = 'x' === e ? 'Left' : 'Top',
      i = 'Left' == n ? 'Right' : 'Bottom';
    return (
      parseFloat(t['border' + n + 'Width'], 10) +
      parseFloat(t['border' + i + 'Width'], 10)
    );
  }
  function Ut(t, e, n, i) {
    return Math.max(
      e['offset' + t],
      e['scroll' + t],
      n['client' + t],
      n['offset' + t],
      n['scroll' + t],
      Ht(10)
        ? parseInt(n['offset' + t]) +
            parseInt(
              i['margin' + ('Height' === t ? 'Top' : 'Left')]
            ) +
            parseInt(
              i['margin' + ('Height' === t ? 'Bottom' : 'Right')]
            )
        : 0
    );
  }
  function Bt(t) {
    var e = t.body,
      n = t.documentElement,
      i = Ht(10) && getComputedStyle(n);
    return {
      height: Ut('Height', e, n, i),
      width: Ut('Width', e, n, i)
    };
  }
  var qt = function(t, e, n) {
    return e && Kt(t.prototype, e), n && Kt(t, n), t;
  };
  function Kt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function Qt(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (t[e] = n),
      t
    );
  }
  var Vt =
    Object.assign ||
    function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    };
  function Yt(t) {
    return Vt({}, t, {
      right: t.left + t.width,
      bottom: t.top + t.height
    });
  }
  function zt(t) {
    var e = {};
    try {
      if (Ht(10)) {
        e = t.getBoundingClientRect();
        var n = Mt(t, 'top'),
          i = Mt(t, 'left');
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top
      },
      r = 'HTML' === t.nodeName ? Bt(t.ownerDocument) : {},
      s = r.width || t.clientWidth || o.right - o.left,
      a = r.height || t.clientHeight || o.bottom - o.top,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var h = Nt(t);
      (l -= Wt(h, 'x')),
        (c -= Wt(h, 'y')),
        (o.width -= l),
        (o.height -= c);
    }
    return Yt(o);
  }
  function Xt(t, e, n) {
    var i = 2 < arguments.length && void 0 !== n && n,
      o = Ht(10),
      r = 'HTML' === e.nodeName,
      s = zt(t),
      a = zt(e),
      l = Lt(t),
      c = Nt(e),
      h = parseFloat(c.borderTopWidth, 10),
      u = parseFloat(c.borderLeftWidth, 10);
    i &&
      r &&
      ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var f = Yt({
      top: s.top - a.top - h,
      left: s.left - a.left - u,
      width: s.width,
      height: s.height
    });
    if (((f.marginTop = 0), (f.marginLeft = 0), !o && r)) {
      var d = parseFloat(c.marginTop, 10),
        p = parseFloat(c.marginLeft, 10);
      (f.top -= h - d),
        (f.bottom -= h - d),
        (f.left -= u - p),
        (f.right -= u - p),
        (f.marginTop = d),
        (f.marginLeft = p);
    }
    return (
      (o && !i ? e.contains(l) : e === l && 'BODY' !== l.nodeName) &&
        (f = (function(t, e, n) {
          var i = 2 < arguments.length && void 0 !== n && n,
            o = Mt(e, 'top'),
            r = Mt(e, 'left'),
            s = i ? -1 : 1;
          return (
            (t.top += o * s),
            (t.bottom += o * s),
            (t.left += r * s),
            (t.right += r * s),
            t
          );
        })(f, e)),
      f
    );
  }
  function Gt(t) {
    if (!t || !t.parentElement || Ht())
      return document.documentElement;
    for (
      var e = t.parentElement;
      e && 'none' === Nt(e, 'transform');

    )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function $t(t, e, n, i, o) {
    var r = 4 < arguments.length && void 0 !== o && o,
      s = { top: 0, left: 0 },
      a = r ? Gt(t) : Ft(t, e);
    if ('viewport' === i)
      s = (function(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e,
          i = t.ownerDocument.documentElement,
          o = Xt(t, i),
          r = Math.max(i.clientWidth, window.innerWidth || 0),
          s = Math.max(i.clientHeight, window.innerHeight || 0),
          a = n ? 0 : Mt(i),
          l = n ? 0 : Mt(i, 'left');
        return Yt({
          top: a - o.top + o.marginTop,
          left: l - o.left + o.marginLeft,
          width: r,
          height: s
        });
      })(a, r);
    else {
      var l = void 0;
      'scrollParent' === i
        ? 'BODY' === (l = Lt(kt(e))).nodeName &&
          (l = t.ownerDocument.documentElement)
        : (l = 'window' === i ? t.ownerDocument.documentElement : i);
      var c = Xt(l, a, r);
      if (
        'HTML' !== l.nodeName ||
        (function t(e) {
          var n = e.nodeName;
          if ('BODY' === n || 'HTML' === n) return !1;
          if ('fixed' === Nt(e, 'position')) return !0;
          var i = kt(e);
          return !!i && t(i);
        })(a)
      )
        s = c;
      else {
        var h = Bt(t.ownerDocument),
          u = h.height,
          f = h.width;
        (s.top += c.top - c.marginTop),
          (s.bottom = u + c.top),
          (s.left += c.left - c.marginLeft),
          (s.right = f + c.left);
      }
    }
    var d = 'number' == typeof (n = n || 0);
    return (
      (s.left += d ? n : n.left || 0),
      (s.top += d ? n : n.top || 0),
      (s.right -= d ? n : n.right || 0),
      (s.bottom -= d ? n : n.bottom || 0),
      s
    );
  }
  function Jt(t, e, i, n, o, r) {
    var s = 5 < arguments.length && void 0 !== r ? r : 0;
    if (-1 === t.indexOf('auto')) return t;
    var a = $t(i, n, s, o),
      l = {
        top: { width: a.width, height: e.top - a.top },
        right: { width: a.right - e.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - e.bottom },
        left: { width: e.left - a.left, height: a.height }
      },
      c = Object.keys(l)
        .map(function(t) {
          return Vt({ key: t }, l[t], {
            area: (function(t) {
              return t.width * t.height;
            })(l[t])
          });
        })
        .sort(function(t, e) {
          return e.area - t.area;
        }),
      h = c.filter(function(t) {
        var e = t.width,
          n = t.height;
        return e >= i.clientWidth && n >= i.clientHeight;
      }),
      u = 0 < h.length ? h[0].key : c[0].key,
      f = t.split('-')[1];
    return u + (f ? '-' + f : '');
  }
  function Zt(t, e, n, i) {
    var o = 3 < arguments.length && void 0 !== i ? i : null;
    return Xt(n, o ? Gt(e) : Ft(e, n), o);
  }
  function te(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n =
        parseFloat(e.marginTop || 0) +
        parseFloat(e.marginBottom || 0),
      i =
        parseFloat(e.marginLeft || 0) +
        parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function ee(t) {
    var e = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return t.replace(/left|right|bottom|top/g, function(t) {
      return e[t];
    });
  }
  function ne(t, e, n) {
    n = n.split('-')[0];
    var i = te(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ['right', 'left'].indexOf(n),
      s = r ? 'top' : 'left',
      a = r ? 'left' : 'top',
      l = r ? 'height' : 'width',
      c = r ? 'width' : 'height';
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[ee(a)]),
      o
    );
  }
  function ie(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function oe(t, n, e) {
    return (
      (void 0 === e
        ? t
        : t.slice(
            0,
            (function(t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function(t) {
                  return t[e] === n;
                });
              var i = ie(t, function(t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, 'name', e)
          )
      ).forEach(function(t) {
        t.function &&
          console.warn(
            '`modifier.function` is deprecated, use `modifier.fn`!'
          );
        var e = t.function || t.fn;
        t.enabled &&
          Ot(e) &&
          ((n.offsets.popper = Yt(n.offsets.popper)),
          (n.offsets.reference = Yt(n.offsets.reference)),
          (n = e(n, t)));
      }),
      n
    );
  }
  function re(t, n) {
    return t.some(function(t) {
      var e = t.name;
      return t.enabled && e === n;
    });
  }
  function se(t) {
    for (
      var e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? '' + o + n : t;
      if (void 0 !== document.body.style[r]) return r;
    }
    return null;
  }
  function ae(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function le(t, e, n, i) {
    (n.updateBound = i),
      ae(t).addEventListener('resize', n.updateBound, {
        passive: !0
      });
    var o = Lt(t);
    return (
      (function t(e, n, i, o) {
        var r = 'BODY' === e.nodeName,
          s = r ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
          r || t(Lt(s.parentNode), n, i, o),
          o.push(s);
      })(o, 'scroll', n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function ce() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = (function(t, e) {
        return (
          ae(t).removeEventListener('resize', e.updateBound),
          e.scrollParents.forEach(function(t) {
            t.removeEventListener('scroll', e.updateBound);
          }),
          (e.updateBound = null),
          (e.scrollParents = []),
          (e.scrollElement = null),
          (e.eventsEnabled = !1),
          e
        );
      })(this.reference, this.state)));
  }
  function he(t) {
    return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function ue(n, i) {
    Object.keys(i).forEach(function(t) {
      var e = '';
      -1 !==
        ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
          t
        ) &&
        he(i[t]) &&
        (e = 'px'),
        (n.style[t] = i[t] + e);
    });
  }
  var fe = Tt && /Firefox/i.test(navigator.userAgent);
  function de(t, e, n) {
    var i = ie(t, function(t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function(t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = '`' + e + '`',
        s = '`' + n + '`';
      console.warn(
        s +
          ' modifier is required by ' +
          r +
          ' modifier in order to work, be sure to include it before ' +
          r +
          '!'
      );
    }
    return o;
  }
  var pe = [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start'
    ],
    me = pe.slice(3);
  function ge(t, e) {
    var n = 1 < arguments.length && void 0 !== e && e,
      i = me.indexOf(t),
      o = me.slice(i + 1).concat(me.slice(0, i));
    return n ? o.reverse() : o;
  }
  var _e = 'flip',
    ve = 'clockwise',
    ye = 'counterclockwise';
  function Ee(t, o, r, e) {
    var s = [0, 0],
      a = -1 !== ['right', 'left'].indexOf(e),
      n = t.split(/(\+|\-)/).map(function(t) {
        return t.trim();
      }),
      i = n.indexOf(
        ie(n, function(t) {
          return -1 !== t.search(/,|\s/);
        })
      );
    n[i] &&
      -1 === n[i].indexOf(',') &&
      console.warn(
        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== i
          ? [
              n.slice(0, i).concat([n[i].split(l)[0]]),
              [n[i].split(l)[1]].concat(n.slice(i + 1))
            ]
          : [n];
    return (
      (c = c.map(function(t, e) {
        var n = (1 === e ? !a : a) ? 'height' : 'width',
          i = !1;
        return t
          .reduce(function(t, e) {
            return '' === t[t.length - 1] &&
              -1 !== ['+', '-'].indexOf(e)
              ? ((t[t.length - 1] = e), (i = !0), t)
              : i
              ? ((t[t.length - 1] += e), (i = !1), t)
              : t.concat(e);
          }, [])
          .map(function(t) {
            return (function(t, e, n, i) {
              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return t;
              if (0 !== s.indexOf('%'))
                return 'vh' !== s && 'vw' !== s
                  ? r
                  : (('vh' === s
                      ? Math.max(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        )
                      : Math.max(
                          document.documentElement.clientWidth,
                          window.innerWidth || 0
                        )) /
                      100) *
                      r;
              var a = void 0;
              switch (s) {
                case '%p':
                  a = n;
                  break;
                case '%':
                case '%r':
                default:
                  a = i;
              }
              return (Yt(a)[e] / 100) * r;
            })(t, n, o, r);
          });
      })).forEach(function(n, i) {
        n.forEach(function(t, e) {
          he(t) && (s[i] += t * ('-' === n[e - 1] ? -1 : 1));
        });
      }),
      s
    );
  }
  var be = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function() {},
      onUpdate: function() {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function(t) {
            var e = t.placement,
              n = e.split('-')[0],
              i = e.split('-')[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ['bottom', 'top'].indexOf(n),
                l = a ? 'left' : 'top',
                c = a ? 'width' : 'height',
                h = {
                  start: Qt({}, l, r[l]),
                  end: Qt({}, l, r[l] + r[c] - s[c])
                };
              t.offsets.popper = Vt({}, s, h[i]);
            }
            return t;
          }
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function(t, e) {
            var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split('-')[0],
              l = void 0;
            return (
              (l = he(+n) ? [+n, 0] : Ee(n, r, s, a)),
              'left' === a
                ? ((r.top += l[0]), (r.left -= l[1]))
                : 'right' === a
                ? ((r.top += l[0]), (r.left += l[1]))
                : 'top' === a
                ? ((r.left += l[0]), (r.top -= l[1]))
                : 'bottom' === a &&
                  ((r.left += l[0]), (r.top += l[1])),
              (t.popper = r),
              t
            );
          },
          offset: 0
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function(t, i) {
            var e = i.boundariesElement || jt(t.instance.popper);
            t.instance.reference === e && (e = jt(e));
            var n = se('transform'),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
            (o.top = ''), (o.left = ''), (o[n] = '');
            var l = $t(
              t.instance.popper,
              t.instance.reference,
              i.padding,
              e,
              t.positionFixed
            );
            (o.top = r), (o.left = s), (o[n] = a), (i.boundaries = l);
            var c = i.priority,
              h = t.offsets.popper,
              u = {
                primary: function(t) {
                  var e = h[t];
                  return (
                    h[t] < l[t] &&
                      !i.escapeWithReference &&
                      (e = Math.max(h[t], l[t])),
                    Qt({}, t, e)
                  );
                },
                secondary: function(t) {
                  var e = 'right' === t ? 'left' : 'top',
                    n = h[e];
                  return (
                    h[t] > l[t] &&
                      !i.escapeWithReference &&
                      (n = Math.min(
                        h[e],
                        l[t] - ('right' === t ? h.width : h.height)
                      )),
                    Qt({}, e, n)
                  );
                }
              };
            return (
              c.forEach(function(t) {
                var e =
                  -1 !== ['left', 'top'].indexOf(t)
                    ? 'primary'
                    : 'secondary';
                h = Vt({}, h, u[e](t));
              }),
              (t.offsets.popper = h),
              t
            );
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent'
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function(t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split('-')[0],
              r = Math.floor,
              s = -1 !== ['top', 'bottom'].indexOf(o),
              a = s ? 'right' : 'bottom',
              l = s ? 'left' : 'top',
              c = s ? 'width' : 'height';
            return (
              n[a] < r(i[l]) &&
                (t.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
              t
            );
          }
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function(t, e) {
            var n;
            if (!de(t.instance.modifiers, 'arrow', 'keepTogether'))
              return t;
            var i = e.element;
            if ('string' == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  'WARNING: `arrow.element` must be child of its popper element!'
                ),
                t
              );
            var o = t.placement.split('-')[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ['left', 'right'].indexOf(o),
              c = l ? 'height' : 'width',
              h = l ? 'Top' : 'Left',
              u = h.toLowerCase(),
              f = l ? 'left' : 'top',
              d = l ? 'bottom' : 'right',
              p = te(i)[c];
            a[d] - p < s[u] &&
              (t.offsets.popper[u] -= s[u] - (a[d] - p)),
              a[u] + p > s[d] &&
                (t.offsets.popper[u] += a[u] + p - s[d]),
              (t.offsets.popper = Yt(t.offsets.popper));
            var m = a[u] + a[c] / 2 - p / 2,
              g = Nt(t.instance.popper),
              _ = parseFloat(g['margin' + h], 10),
              v = parseFloat(g['border' + h + 'Width'], 10),
              y = m - t.offsets.popper[u] - _ - v;
            return (
              (y = Math.max(Math.min(s[c] - p, y), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (Qt((n = {}), u, Math.round(y)), Qt(n, f, ''), n)),
              t
            );
          },
          element: '[x-arrow]'
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function(d, p) {
            if (re(d.instance.modifiers, 'inner')) return d;
            if (d.flipped && d.placement === d.originalPlacement)
              return d;
            var m = $t(
                d.instance.popper,
                d.instance.reference,
                p.padding,
                p.boundariesElement,
                d.positionFixed
              ),
              g = d.placement.split('-')[0],
              _ = ee(g),
              v = d.placement.split('-')[1] || '',
              y = [];
            switch (p.behavior) {
              case _e:
                y = [g, _];
                break;
              case ve:
                y = ge(g);
                break;
              case ye:
                y = ge(g, !0);
                break;
              default:
                y = p.behavior;
            }
            return (
              y.forEach(function(t, e) {
                if (g !== t || y.length === e + 1) return d;
                (g = d.placement.split('-')[0]), (_ = ee(g));
                var n = d.offsets.popper,
                  i = d.offsets.reference,
                  o = Math.floor,
                  r =
                    ('left' === g && o(n.right) > o(i.left)) ||
                    ('right' === g && o(n.left) < o(i.right)) ||
                    ('top' === g && o(n.bottom) > o(i.top)) ||
                    ('bottom' === g && o(n.top) < o(i.bottom)),
                  s = o(n.left) < o(m.left),
                  a = o(n.right) > o(m.right),
                  l = o(n.top) < o(m.top),
                  c = o(n.bottom) > o(m.bottom),
                  h =
                    ('left' === g && s) ||
                    ('right' === g && a) ||
                    ('top' === g && l) ||
                    ('bottom' === g && c),
                  u = -1 !== ['top', 'bottom'].indexOf(g),
                  f =
                    !!p.flipVariations &&
                    ((u && 'start' === v && s) ||
                      (u && 'end' === v && a) ||
                      (!u && 'start' === v && l) ||
                      (!u && 'end' === v && c));
                (r || h || f) &&
                  ((d.flipped = !0),
                  (r || h) && (g = y[e + 1]),
                  f &&
                    (v = (function(t) {
                      return 'end' === t
                        ? 'start'
                        : 'start' === t
                        ? 'end'
                        : t;
                    })(v)),
                  (d.placement = g + (v ? '-' + v : '')),
                  (d.offsets.popper = Vt(
                    {},
                    d.offsets.popper,
                    ne(
                      d.instance.popper,
                      d.offsets.reference,
                      d.placement
                    )
                  )),
                  (d = oe(d.instance.modifiers, d, 'flip')));
              }),
              d
            );
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport'
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function(t) {
            var e = t.placement,
              n = e.split('-')[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ['left', 'right'].indexOf(n),
              a = -1 === ['top', 'left'].indexOf(n);
            return (
              (o[s ? 'left' : 'top'] =
                r[n] - (a ? o[s ? 'width' : 'height'] : 0)),
              (t.placement = ee(e)),
              (t.offsets.popper = Yt(o)),
              t
            );
          }
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function(t) {
            if (!de(t.instance.modifiers, 'hide', 'preventOverflow'))
              return t;
            var e = t.offsets.reference,
              n = ie(t.instance.modifiers, function(t) {
                return 'preventOverflow' === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0),
                (t.attributes['x-out-of-boundaries'] = '');
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1),
                (t.attributes['x-out-of-boundaries'] = !1);
            }
            return t;
          }
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function(t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = ie(t.instance.modifiers, function(t) {
                return 'applyStyle' === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
              );
            var s = void 0 !== r ? r : e.gpuAcceleration,
              a = jt(t.instance.popper),
              l = zt(a),
              c = { position: o.position },
              h = (function(t, e) {
                function n(t) {
                  return t;
                }
                var i = t.offsets,
                  o = i.popper,
                  r = i.reference,
                  s = Math.round,
                  a = Math.floor,
                  l = s(r.width),
                  c = s(o.width),
                  h = -1 !== ['left', 'right'].indexOf(t.placement),
                  u = -1 !== t.placement.indexOf('-'),
                  f = e ? (h || u || l % 2 == c % 2 ? s : a) : n,
                  d = e ? s : n;
                return {
                  left: f(
                    l % 2 == 1 && c % 2 == 1 && !u && e
                      ? o.left - 1
                      : o.left
                  ),
                  top: d(o.top),
                  bottom: d(o.bottom),
                  right: f(o.right)
                };
              })(t, window.devicePixelRatio < 2 || !fe),
              u = 'bottom' === n ? 'top' : 'bottom',
              f = 'right' === i ? 'left' : 'right',
              d = se('transform'),
              p = void 0,
              m = void 0;
            if (
              ((m =
                'bottom' == u
                  ? 'HTML' === a.nodeName
                    ? -a.clientHeight + h.bottom
                    : -l.height + h.bottom
                  : h.top),
              (p =
                'right' == f
                  ? 'HTML' === a.nodeName
                    ? -a.clientWidth + h.right
                    : -l.width + h.right
                  : h.left),
              s && d)
            )
              (c[d] = 'translate3d(' + p + 'px, ' + m + 'px, 0)'),
                (c[u] = 0),
                (c[f] = 0),
                (c.willChange = 'transform');
            else {
              var g = 'bottom' == u ? -1 : 1,
                _ = 'right' == f ? -1 : 1;
              (c[u] = m * g),
                (c[f] = p * _),
                (c.willChange = u + ', ' + f);
            }
            var v = { 'x-placement': t.placement };
            return (
              (t.attributes = Vt({}, v, t.attributes)),
              (t.styles = Vt({}, c, t.styles)),
              (t.arrowStyles = Vt(
                {},
                t.offsets.arrow,
                t.arrowStyles
              )),
              t
            );
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right'
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function(t) {
            return (
              ue(t.instance.popper, t.styles),
              (function(e, n) {
                Object.keys(n).forEach(function(t) {
                  !1 !== n[t]
                    ? e.setAttribute(t, n[t])
                    : e.removeAttribute(t);
                });
              })(t.instance.popper, t.attributes),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                ue(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function(t, e, n, i, o) {
            var r = Zt(o, e, t, n.positionFixed),
              s = Jt(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute('x-placement', s),
              ue(e, {
                position: n.positionFixed ? 'fixed' : 'absolute'
              }),
              n
            );
          },
          gpuAcceleration: void 0
        }
      }
    },
    we =
      (qt(Ce, [
        {
          key: 'update',
          value: function() {
            return function() {
              if (!this.state.isDestroyed) {
                var t = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {}
                };
                (t.offsets.reference = Zt(
                  this.state,
                  this.popper,
                  this.reference,
                  this.options.positionFixed
                )),
                  (t.placement = Jt(
                    this.options.placement,
                    t.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                  )),
                  (t.originalPlacement = t.placement),
                  (t.positionFixed = this.options.positionFixed),
                  (t.offsets.popper = ne(
                    this.popper,
                    t.offsets.reference,
                    t.placement
                  )),
                  (t.offsets.popper.position = this.options
                    .positionFixed
                    ? 'fixed'
                    : 'absolute'),
                  (t = oe(this.modifiers, t)),
                  this.state.isCreated
                    ? this.options.onUpdate(t)
                    : ((this.state.isCreated = !0),
                      this.options.onCreate(t));
              }
            }.call(this);
          }
        },
        {
          key: 'destroy',
          value: function() {
            return function() {
              return (
                (this.state.isDestroyed = !0),
                re(this.modifiers, 'applyStyle') &&
                  (this.popper.removeAttribute('x-placement'),
                  (this.popper.style.position = ''),
                  (this.popper.style.top = ''),
                  (this.popper.style.left = ''),
                  (this.popper.style.right = ''),
                  (this.popper.style.bottom = ''),
                  (this.popper.style.willChange = ''),
                  (this.popper.style[se('transform')] = '')),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                  this.popper.parentNode.removeChild(this.popper),
                this
              );
            }.call(this);
          }
        },
        {
          key: 'enableEventListeners',
          value: function() {
            return function() {
              this.state.eventsEnabled ||
                (this.state = le(
                  this.reference,
                  this.options,
                  this.state,
                  this.scheduleUpdate
                ));
            }.call(this);
          }
        },
        {
          key: 'disableEventListeners',
          value: function() {
            return ce.call(this);
          }
        }
      ]),
      Ce);
  function Ce(t, e) {
    var n = this,
      i =
        2 < arguments.length && void 0 !== arguments[2]
          ? arguments[2]
          : {};
    !(function(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    })(this, Ce),
      (this.scheduleUpdate = function() {
        return requestAnimationFrame(n.update);
      }),
      (this.update = At(this.update.bind(this))),
      (this.options = Vt({}, Ce.Defaults, i)),
      (this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }),
      (this.reference = t && t.jquery ? t[0] : t),
      (this.popper = e && e.jquery ? e[0] : e),
      (this.options.modifiers = {}),
      Object.keys(Vt({}, Ce.Defaults.modifiers, i.modifiers)).forEach(
        function(t) {
          n.options.modifiers[t] = Vt(
            {},
            Ce.Defaults.modifiers[t] || {},
            i.modifiers ? i.modifiers[t] : {}
          );
        }
      ),
      (this.modifiers = Object.keys(this.options.modifiers)
        .map(function(t) {
          return Vt({ name: t }, n.options.modifiers[t]);
        })
        .sort(function(t, e) {
          return t.order - e.order;
        })),
      this.modifiers.forEach(function(t) {
        t.enabled &&
          Ot(t.onLoad) &&
          t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }),
      this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), (this.state.eventsEnabled = o);
  }
  (we.Utils = ('undefined' != typeof window
    ? window
    : global
  ).PopperUtils),
    (we.placements = pe),
    (we.Defaults = be);
  var Te = 'dropdown',
    Se = 'bs.dropdown',
    De = '.' + Se,
    Ie = '.data-api',
    Ae = p.fn[Te],
    Oe = new RegExp('38|40|27'),
    Ne = {
      HIDE: 'hide' + De,
      HIDDEN: 'hidden' + De,
      SHOW: 'show' + De,
      SHOWN: 'shown' + De,
      CLICK: 'click' + De,
      CLICK_DATA_API: 'click' + De + Ie,
      KEYDOWN_DATA_API: 'keydown' + De + Ie,
      KEYUP_DATA_API: 'keyup' + De + Ie
    },
    ke = 'disabled',
    Le = 'show',
    xe = 'dropup',
    Pe = 'dropright',
    He = 'dropleft',
    je = 'dropdown-menu-right',
    Re = 'position-static',
    Fe = '[data-toggle="dropdown"]',
    Me = '.dropdown form',
    We = '.dropdown-menu',
    Ue = '.navbar-nav',
    Be =
      '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
    qe = 'top-start',
    Ke = 'top-end',
    Qe = 'bottom-start',
    Ve = 'bottom-end',
    Ye = 'right-start',
    ze = 'left-start',
    Xe = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    },
    Ge = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
    },
    $e = (function() {
      function c(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var t = c.prototype;
      return (
        (t.toggle = function() {
          if (
            !this._element.disabled &&
            !p(this._element).hasClass(ke)
          ) {
            var t = c._getParentFromElement(this._element),
              e = p(this._menu).hasClass(Le);
            if ((c._clearMenus(), !e)) {
              var n = { relatedTarget: this._element },
                i = p.Event(Ne.SHOW, n);
              if ((p(t).trigger(i), !i.isDefaultPrevented())) {
                if (!this._inNavbar) {
                  if (void 0 === we)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var o = this._element;
                  'parent' === this._config.reference
                    ? (o = t)
                    : m.isElement(this._config.reference) &&
                      ((o = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (o = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary &&
                      p(t).addClass(Re),
                    (this._popper = new we(
                      o,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                'ontouchstart' in document.documentElement &&
                  0 === p(t).closest(Ue).length &&
                  p(document.body)
                    .children()
                    .on('mouseover', null, p.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  p(this._menu).toggleClass(Le),
                  p(t)
                    .toggleClass(Le)
                    .trigger(p.Event(Ne.SHOWN, n));
              }
            }
          }
        }),
        (t.show = function() {
          if (
            !(
              this._element.disabled ||
              p(this._element).hasClass(ke) ||
              p(this._menu).hasClass(Le)
            )
          ) {
            var t = { relatedTarget: this._element },
              e = p.Event(Ne.SHOW, t),
              n = c._getParentFromElement(this._element);
            p(n).trigger(e),
              e.isDefaultPrevented() ||
                (p(this._menu).toggleClass(Le),
                p(n)
                  .toggleClass(Le)
                  .trigger(p.Event(Ne.SHOWN, t)));
          }
        }),
        (t.hide = function() {
          if (
            !this._element.disabled &&
            !p(this._element).hasClass(ke) &&
            p(this._menu).hasClass(Le)
          ) {
            var t = { relatedTarget: this._element },
              e = p.Event(Ne.HIDE, t),
              n = c._getParentFromElement(this._element);
            p(n).trigger(e),
              e.isDefaultPrevented() ||
                (p(this._menu).toggleClass(Le),
                p(n)
                  .toggleClass(Le)
                  .trigger(p.Event(Ne.HIDDEN, t)));
          }
        }),
        (t.dispose = function() {
          p.removeData(this._element, Se),
            p(this._element).off(De),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function() {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function() {
          var e = this;
          p(this._element).on(Ne.CLICK, function(t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (t._getConfig = function(t) {
          return (
            (t = l(
              {},
              this.constructor.Default,
              p(this._element).data(),
              t
            )),
            m.typeCheckConfig(Te, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._getMenuElement = function() {
          if (!this._menu) {
            var t = c._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(We));
          }
          return this._menu;
        }),
        (t._getPlacement = function() {
          var t = p(this._element.parentNode),
            e = Qe;
          return (
            t.hasClass(xe)
              ? ((e = qe), p(this._menu).hasClass(je) && (e = Ke))
              : t.hasClass(Pe)
              ? (e = Ye)
              : t.hasClass(He)
              ? (e = ze)
              : p(this._menu).hasClass(je) && (e = Ve),
            e
          );
        }),
        (t._detectNavbar = function() {
          return 0 < p(this._element).closest('.navbar').length;
        }),
        (t._getOffset = function() {
          var e = this,
            t = {};
          return (
            'function' == typeof this._config.offset
              ? (t.fn = function(t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets, e._element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (t._getPopperConfig = function() {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          };
          return (
            'static' === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            t
          );
        }),
        (c._jQueryInterface = function(e) {
          return this.each(function() {
            var t = p(this).data(Se);
            if (
              (t ||
                ((t = new c(this, 'object' == typeof e ? e : null)),
                p(this).data(Se, t)),
              'string' == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        (c._clearMenus = function(t) {
          if (
            !t ||
            (3 !== t.which && ('keyup' !== t.type || 9 === t.which))
          )
            for (
              var e = [].slice.call(document.querySelectorAll(Fe)),
                n = 0,
                i = e.length;
              n < i;
              n++
            ) {
              var o = c._getParentFromElement(e[n]),
                r = p(e[n]).data(Se),
                s = { relatedTarget: e[n] };
              if (
                (t && 'click' === t.type && (s.clickEvent = t), r)
              ) {
                var a = r._menu;
                if (
                  p(o).hasClass(Le) &&
                  !(
                    t &&
                    (('click' === t.type &&
                      /input|textarea/i.test(t.target.tagName)) ||
                      ('keyup' === t.type && 9 === t.which)) &&
                    p.contains(o, t.target)
                  )
                ) {
                  var l = p.Event(Ne.HIDE, s);
                  p(o).trigger(l),
                    l.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        p(document.body)
                          .children()
                          .off('mouseover', null, p.noop),
                      e[n].setAttribute('aria-expanded', 'false'),
                      p(a).removeClass(Le),
                      p(o)
                        .removeClass(Le)
                        .trigger(p.Event(Ne.HIDDEN, s)));
                }
              }
            }
        }),
        (c._getParentFromElement = function(t) {
          var e,
            n = m.getSelectorFromElement(t);
          return (
            n && (e = document.querySelector(n)), e || t.parentNode
          );
        }),
        (c._dataApiKeydownHandler = function(t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) ||
                      p(t.target).closest(We).length))
                )
              : Oe.test(t.which)) &&
            (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !p(this).hasClass(ke))
          ) {
            var e = c._getParentFromElement(this),
              n = p(e).hasClass(Le);
            if (n && (!n || (27 !== t.which && 32 !== t.which))) {
              var i = [].slice.call(e.querySelectorAll(Be));
              if (0 !== i.length) {
                var o = i.indexOf(t.target);
                38 === t.which && 0 < o && o--,
                  40 === t.which && o < i.length - 1 && o++,
                  o < 0 && (o = 0),
                  i[o].focus();
              }
            } else {
              if (27 === t.which) {
                var r = e.querySelector(Fe);
                p(r).trigger('focus');
              }
              p(this).trigger('click');
            }
          }
        }),
        s(c, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return Xe;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return Ge;
            }
          }
        ]),
        c
      );
    })();
  p(document)
    .on(Ne.KEYDOWN_DATA_API, Fe, $e._dataApiKeydownHandler)
    .on(Ne.KEYDOWN_DATA_API, We, $e._dataApiKeydownHandler)
    .on(Ne.CLICK_DATA_API + ' ' + Ne.KEYUP_DATA_API, $e._clearMenus)
    .on(Ne.CLICK_DATA_API, Fe, function(t) {
      t.preventDefault(),
        t.stopPropagation(),
        $e._jQueryInterface.call(p(this), 'toggle');
    })
    .on(Ne.CLICK_DATA_API, Me, function(t) {
      t.stopPropagation();
    }),
    (p.fn[Te] = $e._jQueryInterface),
    (p.fn[Te].Constructor = $e),
    (p.fn[Te].noConflict = function() {
      return (p.fn[Te] = Ae), $e._jQueryInterface;
    });
  var Je = 'modal',
    Ze = 'bs.modal',
    tn = '.' + Ze,
    en = p.fn[Je],
    nn = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    on = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    },
    rn = {
      HIDE: 'hide' + tn,
      HIDDEN: 'hidden' + tn,
      SHOW: 'show' + tn,
      SHOWN: 'shown' + tn,
      FOCUSIN: 'focusin' + tn,
      RESIZE: 'resize' + tn,
      CLICK_DISMISS: 'click.dismiss' + tn,
      KEYDOWN_DISMISS: 'keydown.dismiss' + tn,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + tn,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + tn,
      CLICK_DATA_API: 'click' + tn + '.data-api'
    },
    sn = 'modal-dialog-scrollable',
    an = 'modal-scrollbar-measure',
    ln = 'modal-backdrop',
    cn = 'modal-open',
    hn = 'fade',
    un = 'show',
    fn = '.modal-dialog',
    dn = '.modal-body',
    pn = '[data-toggle="modal"]',
    mn = '[data-dismiss="modal"]',
    gn = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    _n = '.sticky-top',
    vn = (function() {
      function o(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(fn)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var t = o.prototype;
      return (
        (t.toggle = function(t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (t.show = function(t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            p(this._element).hasClass(hn) &&
              (this._isTransitioning = !0);
            var n = p.Event(rn.SHOW, { relatedTarget: t });
            p(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(this._element).on(rn.CLICK_DISMISS, mn, function(
                  t
                ) {
                  return e.hide(t);
                }),
                p(this._dialog).on(rn.MOUSEDOWN_DISMISS, function() {
                  p(e._element).one(rn.MOUSEUP_DISMISS, function(t) {
                    p(t.target).is(e._element) &&
                      (e._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function() {
                  return e._showElement(t);
                }));
          }
        }),
        (t.hide = function(t) {
          var e = this;
          if (
            (t && t.preventDefault(),
            this._isShown && !this._isTransitioning)
          ) {
            var n = p.Event(rn.HIDE);
            if (
              (p(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = p(this._element).hasClass(hn);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(document).off(rn.FOCUSIN),
                p(this._element).removeClass(un),
                p(this._element).off(rn.CLICK_DISMISS),
                p(this._dialog).off(rn.MOUSEDOWN_DISMISS),
                i)
              ) {
                var o = m.getTransitionDurationFromElement(
                  this._element
                );
                p(this._element)
                  .one(m.TRANSITION_END, function(t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(o);
              } else this._hideModal();
            }
          }
        }),
        (t.dispose = function() {
          [window, this._element, this._dialog].forEach(function(t) {
            return p(t).off(tn);
          }),
            p(document).off(rn.FOCUSIN),
            p.removeData(this._element, Ze),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function() {
          this._adjustDialog();
        }),
        (t._getConfig = function(t) {
          return (t = l({}, nn, t)), m.typeCheckConfig(Je, t, on), t;
        }),
        (t._showElement = function(t) {
          var e = this,
            n = p(this._element).hasClass(hn);
          (this._element.parentNode &&
            this._element.parentNode.nodeType ===
              Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            p(this._dialog).hasClass(sn)
              ? (this._dialog.querySelector(dn).scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && m.reflow(this._element),
            p(this._element).addClass(un),
            this._config.focus && this._enforceFocus();
          function i() {
            e._config.focus && e._element.focus(),
              (e._isTransitioning = !1),
              p(e._element).trigger(o);
          }
          var o = p.Event(rn.SHOWN, { relatedTarget: t });
          if (n) {
            var r = m.getTransitionDurationFromElement(this._dialog);
            p(this._dialog)
              .one(m.TRANSITION_END, i)
              .emulateTransitionEnd(r);
          } else i();
        }),
        (t._enforceFocus = function() {
          var e = this;
          p(document)
            .off(rn.FOCUSIN)
            .on(rn.FOCUSIN, function(t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === p(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (t._setEscapeEvent = function() {
          var e = this;
          this._isShown && this._config.keyboard
            ? p(this._element).on(rn.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(), e.hide());
              })
            : this._isShown ||
              p(this._element).off(rn.KEYDOWN_DISMISS);
        }),
        (t._setResizeEvent = function() {
          var e = this;
          this._isShown
            ? p(window).on(rn.RESIZE, function(t) {
                return e.handleUpdate(t);
              })
            : p(window).off(rn.RESIZE);
        }),
        (t._hideModal = function() {
          var t = this;
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            (this._isTransitioning = !1),
            this._showBackdrop(function() {
              p(document.body).removeClass(cn),
                t._resetAdjustments(),
                t._resetScrollbar(),
                p(t._element).trigger(rn.HIDDEN);
            });
        }),
        (t._removeBackdrop = function() {
          this._backdrop &&
            (p(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function(t) {
          var e = this,
            n = p(this._element).hasClass(hn) ? hn : '';
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = ln),
              n && this._backdrop.classList.add(n),
              p(this._backdrop).appendTo(document.body),
              p(this._element).on(rn.CLICK_DISMISS, function(t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ('static' === e._config.backdrop
                      ? e._element.focus()
                      : e.hide());
              }),
              n && m.reflow(this._backdrop),
              p(this._backdrop).addClass(un),
              !t)
            )
              return;
            if (!n) return void t();
            var i = m.getTransitionDurationFromElement(
              this._backdrop
            );
            p(this._backdrop)
              .one(m.TRANSITION_END, t)
              .emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            p(this._backdrop).removeClass(un);
            var o = function() {
              e._removeBackdrop(), t && t();
            };
            if (p(this._element).hasClass(hn)) {
              var r = m.getTransitionDurationFromElement(
                this._backdrop
              );
              p(this._backdrop)
                .one(m.TRANSITION_END, o)
                .emulateTransitionEnd(r);
            } else o();
          } else t && t();
        }),
        (t._adjustDialog = function() {
          var t =
            this._element.scrollHeight >
            document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft =
              this._scrollbarWidth + 'px'),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight =
                this._scrollbarWidth + 'px');
        }),
        (t._resetAdjustments = function() {
          (this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '');
        }),
        (t._checkScrollbar = function() {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function() {
          var o = this;
          if (this._isBodyOverflowing) {
            var t = [].slice.call(document.querySelectorAll(gn)),
              e = [].slice.call(document.querySelectorAll(_n));
            p(t).each(function(t, e) {
              var n = e.style.paddingRight,
                i = p(e).css('padding-right');
              p(e)
                .data('padding-right', n)
                .css(
                  'padding-right',
                  parseFloat(i) + o._scrollbarWidth + 'px'
                );
            }),
              p(e).each(function(t, e) {
                var n = e.style.marginRight,
                  i = p(e).css('margin-right');
                p(e)
                  .data('margin-right', n)
                  .css(
                    'margin-right',
                    parseFloat(i) - o._scrollbarWidth + 'px'
                  );
              });
            var n = document.body.style.paddingRight,
              i = p(document.body).css('padding-right');
            p(document.body)
              .data('padding-right', n)
              .css(
                'padding-right',
                parseFloat(i) + this._scrollbarWidth + 'px'
              );
          }
          p(document.body).addClass(cn);
        }),
        (t._resetScrollbar = function() {
          var t = [].slice.call(document.querySelectorAll(gn));
          p(t).each(function(t, e) {
            var n = p(e).data('padding-right');
            p(e).removeData('padding-right'),
              (e.style.paddingRight = n || '');
          });
          var e = [].slice.call(document.querySelectorAll('' + _n));
          p(e).each(function(t, e) {
            var n = p(e).data('margin-right');
            void 0 !== n &&
              p(e)
                .css('margin-right', n)
                .removeData('margin-right');
          });
          var n = p(document.body).data('padding-right');
          p(document.body).removeData('padding-right'),
            (document.body.style.paddingRight = n || '');
        }),
        (t._getScrollbarWidth = function() {
          var t = document.createElement('div');
          (t.className = an), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (o._jQueryInterface = function(n, i) {
          return this.each(function() {
            var t = p(this).data(Ze),
              e = l(
                {},
                nn,
                p(this).data(),
                'object' == typeof n && n ? n : {}
              );
            if (
              (t || ((t = new o(this, e)), p(this).data(Ze, t)),
              'string' == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n](i);
            } else e.show && t.show(i);
          });
        }),
        s(o, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return nn;
            }
          }
        ]),
        o
      );
    })();
  p(document).on(rn.CLICK_DATA_API, pn, function(t) {
    var e,
      n = this,
      i = m.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = p(e).data(Ze)
      ? 'toggle'
      : l({}, p(e).data(), p(this).data());
    ('A' !== this.tagName && 'AREA' !== this.tagName) ||
      t.preventDefault();
    var r = p(e).one(rn.SHOW, function(t) {
      t.isDefaultPrevented() ||
        r.one(rn.HIDDEN, function() {
          p(n).is(':visible') && n.focus();
        });
    });
    vn._jQueryInterface.call(p(e), o, this);
  }),
    (p.fn[Je] = vn._jQueryInterface),
    (p.fn[Je].Constructor = vn),
    (p.fn[Je].noConflict = function() {
      return (p.fn[Je] = en), vn._jQueryInterface;
    });
  var yn = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href'
    ],
    En = {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
      a: ['target', 'href', 'title', 'rel'],
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
      img: ['src', 'alt', 'title', 'width', 'height'],
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
    bn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    wn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function Cn(t, s, e) {
    if (0 === t.length) return t;
    if (e && 'function' == typeof e) return e(t);
    for (
      var n = new window.DOMParser().parseFromString(t, 'text/html'),
        a = Object.keys(s),
        l = [].slice.call(n.body.querySelectorAll('*')),
        i = function(t, e) {
          var n = l[t],
            i = n.nodeName.toLowerCase();
          if (-1 === a.indexOf(n.nodeName.toLowerCase()))
            return n.parentNode.removeChild(n), 'continue';
          var o = [].slice.call(n.attributes),
            r = [].concat(s['*'] || [], s[i] || []);
          o.forEach(function(t) {
            !(function(t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === yn.indexOf(n) ||
                  Boolean(
                    t.nodeValue.match(bn) || t.nodeValue.match(wn)
                  )
                );
              for (
                var i = e.filter(function(t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, r) && n.removeAttribute(t.nodeName);
          });
        },
        o = 0,
        r = l.length;
      o < r;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var Tn = 'tooltip',
    Sn = 'bs.tooltip',
    Dn = '.' + Sn,
    In = p.fn[Tn],
    An = 'bs-tooltip',
    On = new RegExp('(^|\\s)' + An + '\\S+', 'g'),
    Nn = ['sanitize', 'whiteList', 'sanitizeFn'],
    kn = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object'
    },
    Ln = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    },
    xn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: En
    },
    Pn = 'show',
    Hn = 'out',
    jn = {
      HIDE: 'hide' + Dn,
      HIDDEN: 'hidden' + Dn,
      SHOW: 'show' + Dn,
      SHOWN: 'shown' + Dn,
      INSERTED: 'inserted' + Dn,
      CLICK: 'click' + Dn,
      FOCUSIN: 'focusin' + Dn,
      FOCUSOUT: 'focusout' + Dn,
      MOUSEENTER: 'mouseenter' + Dn,
      MOUSELEAVE: 'mouseleave' + Dn
    },
    Rn = 'fade',
    Fn = 'show',
    Mn = '.tooltip-inner',
    Wn = '.arrow',
    Un = 'hover',
    Bn = 'focus',
    qn = 'click',
    Kn = 'manual',
    Qn = (function() {
      function i(t, e) {
        if (void 0 === we)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.enable = function() {
          this._isEnabled = !0;
        }),
        (t.disable = function() {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function() {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function(t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = p(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                p(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (p(this.getTipElement()).hasClass(Fn))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (t.dispose = function() {
          clearTimeout(this._timeout),
            p.removeData(this.element, this.constructor.DATA_KEY),
            p(this.element).off(this.constructor.EVENT_KEY),
            p(this.element)
              .closest('.modal')
              .off('hide.bs.modal'),
            this.tip && p(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null) !== this._popper &&
              this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function() {
          var e = this;
          if ('none' === p(this.element).css('display'))
            throw new Error('Please use show on visible elements');
          var t = p.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            p(this.element).trigger(t);
            var n = m.findShadowRoot(this.element),
              i = p.contains(
                null !== n
                  ? n
                  : this.element.ownerDocument.documentElement,
                this.element
              );
            if (t.isDefaultPrevented() || !i) return;
            var o = this.getTipElement(),
              r = m.getUID(this.constructor.NAME);
            o.setAttribute('id', r),
              this.element.setAttribute('aria-describedby', r),
              this.setContent(),
              this.config.animation && p(o).addClass(Rn);
            var s =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = this._getContainer();
            p(o).data(this.constructor.DATA_KEY, this),
              p.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || p(o).appendTo(l),
              p(this.element).trigger(
                this.constructor.Event.INSERTED
              ),
              (this._popper = new we(this.element, o, {
                placement: a,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: Wn },
                  preventOverflow: {
                    boundariesElement: this.config.boundary
                  }
                },
                onCreate: function(t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function(t) {
                  return e._handlePopperPlacementChange(t);
                }
              })),
              p(o).addClass(Fn),
              'ontouchstart' in document.documentElement &&
                p(document.body)
                  .children()
                  .on('mouseover', null, p.noop);
            var c = function() {
              e.config.animation && e._fixTransition();
              var t = e._hoverState;
              (e._hoverState = null),
                p(e.element).trigger(e.constructor.Event.SHOWN),
                t === Hn && e._leave(null, e);
            };
            if (p(this.tip).hasClass(Rn)) {
              var h = m.getTransitionDurationFromElement(this.tip);
              p(this.tip)
                .one(m.TRANSITION_END, c)
                .emulateTransitionEnd(h);
            } else c();
          }
        }),
        (t.hide = function(t) {
          function e() {
            n._hoverState !== Pn &&
              i.parentNode &&
              i.parentNode.removeChild(i),
              n._cleanTipClass(),
              n.element.removeAttribute('aria-describedby'),
              p(n.element).trigger(n.constructor.Event.HIDDEN),
              null !== n._popper && n._popper.destroy(),
              t && t();
          }
          var n = this,
            i = this.getTipElement(),
            o = p.Event(this.constructor.Event.HIDE);
          if ((p(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (p(i).removeClass(Fn),
              'ontouchstart' in document.documentElement &&
                p(document.body)
                  .children()
                  .off('mouseover', null, p.noop),
              (this._activeTrigger[qn] = !1),
              (this._activeTrigger[Bn] = !1),
              (this._activeTrigger[Un] = !1),
              p(this.tip).hasClass(Rn))
            ) {
              var r = m.getTransitionDurationFromElement(i);
              p(i)
                .one(m.TRANSITION_END, e)
                .emulateTransitionEnd(r);
            } else e();
            this._hoverState = '';
          }
        }),
        (t.update = function() {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function() {
          return Boolean(this.getTitle());
        }),
        (t.addAttachmentClass = function(t) {
          p(this.getTipElement()).addClass(An + '-' + t);
        }),
        (t.getTipElement = function() {
          return (
            (this.tip = this.tip || p(this.config.template)[0]),
            this.tip
          );
        }),
        (t.setContent = function() {
          var t = this.getTipElement();
          this.setElementContent(
            p(t.querySelectorAll(Mn)),
            this.getTitle()
          ),
            p(t).removeClass(Rn + ' ' + Fn);
        }),
        (t.setElementContent = function(t, e) {
          'object' != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = Cn(
                    e,
                    this.config.whiteList,
                    this.config.sanitizeFn
                  )),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? p(e)
                .parent()
                .is(t) || t.empty().append(e)
            : t.text(p(e).text());
        }),
        (t.getTitle = function() {
          var t = this.element.getAttribute('data-original-title');
          return (t =
            t ||
            ('function' == typeof this.config.title
              ? this.config.title.call(this.element)
              : this.config.title));
        }),
        (t._getOffset = function() {
          var e = this,
            t = {};
          return (
            'function' == typeof this.config.offset
              ? (t.fn = function(t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e.config.offset(t.offsets, e.element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (t._getContainer = function() {
          return !1 === this.config.container
            ? document.body
            : m.isElement(this.config.container)
            ? p(this.config.container)
            : p(document).find(this.config.container);
        }),
        (t._getAttachment = function(t) {
          return Ln[t.toUpperCase()];
        }),
        (t._setListeners = function() {
          var i = this;
          this.config.trigger.split(' ').forEach(function(t) {
            if ('click' === t)
              p(i.element).on(
                i.constructor.Event.CLICK,
                i.config.selector,
                function(t) {
                  return i.toggle(t);
                }
              );
            else if (t !== Kn) {
              var e =
                  t === Un
                    ? i.constructor.Event.MOUSEENTER
                    : i.constructor.Event.FOCUSIN,
                n =
                  t === Un
                    ? i.constructor.Event.MOUSELEAVE
                    : i.constructor.Event.FOCUSOUT;
              p(i.element)
                .on(e, i.config.selector, function(t) {
                  return i._enter(t);
                })
                .on(n, i.config.selector, function(t) {
                  return i._leave(t);
                });
            }
          }),
            p(this.element)
              .closest('.modal')
              .on('hide.bs.modal', function() {
                i.element && i.hide();
              }),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: 'manual',
                  selector: ''
                }))
              : this._fixTitle();
        }),
        (t._fixTitle = function() {
          var t = typeof this.element.getAttribute(
            'data-original-title'
          );
          (!this.element.getAttribute('title') && 'string' == t) ||
            (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || ''
            ),
            this.element.setAttribute('title', ''));
        }),
        (t._enter = function(t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || p(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            p(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger['focusin' === t.type ? Bn : Un] = !0),
            p(e.getTipElement()).hasClass(Fn) || e._hoverState === Pn
              ? (e._hoverState = Pn)
              : (clearTimeout(e._timeout),
                (e._hoverState = Pn),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function() {
                      e._hoverState === Pn && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (t._leave = function(t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || p(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            p(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger[
                'focusout' === t.type ? Bn : Un
              ] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = Hn),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function() {
                    e._hoverState === Hn && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (t._isWithActiveTrigger = function() {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (t._getConfig = function(t) {
          var e = p(this.element).data();
          return (
            Object.keys(e).forEach(function(t) {
              -1 !== Nn.indexOf(t) && delete e[t];
            }),
            'number' ==
              typeof (t = l(
                {},
                this.constructor.Default,
                e,
                'object' == typeof t && t ? t : {}
              )).delay &&
              (t.delay = { show: t.delay, hide: t.delay }),
            'number' == typeof t.title &&
              (t.title = t.title.toString()),
            'number' == typeof t.content &&
              (t.content = t.content.toString()),
            m.typeCheckConfig(Tn, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Cn(
                t.template,
                t.whiteList,
                t.sanitizeFn
              )),
            t
          );
        }),
        (t._getDelegateConfig = function() {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (t._cleanTipClass = function() {
          var t = p(this.getTipElement()),
            e = t.attr('class').match(On);
          null !== e && e.length && t.removeClass(e.join(''));
        }),
        (t._handlePopperPlacementChange = function(t) {
          var e = t.instance;
          (this.tip = e.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (t._fixTransition = function() {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute('x-placement') &&
            (p(t).removeClass(Rn),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = p(this).data(Sn),
              e = 'object' == typeof n && n;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), p(this).data(Sn, t)),
              'string' == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return xn;
            }
          },
          {
            key: 'NAME',
            get: function() {
              return Tn;
            }
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return Sn;
            }
          },
          {
            key: 'Event',
            get: function() {
              return jn;
            }
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return Dn;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return kn;
            }
          }
        ]),
        i
      );
    })();
  (p.fn[Tn] = Qn._jQueryInterface),
    (p.fn[Tn].Constructor = Qn),
    (p.fn[Tn].noConflict = function() {
      return (p.fn[Tn] = In), Qn._jQueryInterface;
    });
  var Vn = 'popover',
    Yn = 'bs.popover',
    zn = '.' + Yn,
    Xn = p.fn[Vn],
    Gn = 'bs-popover',
    $n = new RegExp('(^|\\s)' + Gn + '\\S+', 'g'),
    Jn = l({}, Qn.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    Zn = l({}, Qn.DefaultType, {
      content: '(string|element|function)'
    }),
    ti = 'fade',
    ei = 'show',
    ni = '.popover-header',
    ii = '.popover-body',
    oi = {
      HIDE: 'hide' + zn,
      HIDDEN: 'hidden' + zn,
      SHOW: 'show' + zn,
      SHOWN: 'shown' + zn,
      INSERTED: 'inserted' + zn,
      CLICK: 'click' + zn,
      FOCUSIN: 'focusin' + zn,
      FOCUSOUT: 'focusout' + zn,
      MOUSEENTER: 'mouseenter' + zn,
      MOUSELEAVE: 'mouseleave' + zn
    },
    ri = (function(t) {
      function i() {
        return t.apply(this, arguments) || this;
      }
      !(function(t, e) {
        (t.prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e);
      })(i, t);
      var e = i.prototype;
      return (
        (e.isWithContent = function() {
          return this.getTitle() || this._getContent();
        }),
        (e.addAttachmentClass = function(t) {
          p(this.getTipElement()).addClass(Gn + '-' + t);
        }),
        (e.getTipElement = function() {
          return (
            (this.tip = this.tip || p(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function() {
          var t = p(this.getTipElement());
          this.setElementContent(t.find(ni), this.getTitle());
          var e = this._getContent();
          'function' == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(ii), e),
            t.removeClass(ti + ' ' + ei);
        }),
        (e._getContent = function() {
          return (
            this.element.getAttribute('data-content') ||
            this.config.content
          );
        }),
        (e._cleanTipClass = function() {
          var t = p(this.getTipElement()),
            e = t.attr('class').match($n);
          null !== e && 0 < e.length && t.removeClass(e.join(''));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = p(this).data(Yn),
              e = 'object' == typeof n ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), p(this).data(Yn, t)),
              'string' == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return Jn;
            }
          },
          {
            key: 'NAME',
            get: function() {
              return Vn;
            }
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return Yn;
            }
          },
          {
            key: 'Event',
            get: function() {
              return oi;
            }
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return zn;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return Zn;
            }
          }
        ]),
        i
      );
    })(Qn);
  (p.fn[Vn] = ri._jQueryInterface),
    (p.fn[Vn].Constructor = ri),
    (p.fn[Vn].noConflict = function() {
      return (p.fn[Vn] = Xn), ri._jQueryInterface;
    });
  var si = 'scrollspy',
    ai = 'bs.scrollspy',
    li = '.' + ai,
    ci = p.fn[si],
    hi = { offset: 10, method: 'auto', target: '' },
    ui = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    },
    fi = {
      ACTIVATE: 'activate' + li,
      SCROLL: 'scroll' + li,
      LOAD_DATA_API: 'load' + li + '.data-api'
    },
    di = 'dropdown-item',
    pi = 'active',
    mi = '[data-spy="scroll"]',
    gi = '.nav, .list-group',
    _i = '.nav-link',
    vi = '.nav-item',
    yi = '.list-group-item',
    Ei = '.dropdown',
    bi = '.dropdown-item',
    wi = '.dropdown-toggle',
    Ci = 'offset',
    Ti = 'position',
    Si = (function() {
      function n(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = 'BODY' === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            ' ' +
            _i +
            ',' +
            this._config.target +
            ' ' +
            yi +
            ',' +
            this._config.target +
            ' ' +
            bi),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          p(this._scrollElement).on(fi.SCROLL, function(t) {
            return n._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var t = n.prototype;
      return (
        (t.refresh = function() {
          var e = this,
            t =
              this._scrollElement === this._scrollElement.window
                ? Ci
                : Ti,
            o =
              'auto' === this._config.method
                ? t
                : this._config.method,
            r = o === Ti ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function(t) {
                var e,
                  n = m.getSelectorFromElement(t);
                if ((n && (e = document.querySelector(n)), e)) {
                  var i = e.getBoundingClientRect();
                  if (i.width || i.height)
                    return [p(e)[o]().top + r, n];
                }
                return null;
              })
              .filter(function(t) {
                return t;
              })
              .sort(function(t, e) {
                return t[0] - e[0];
              })
              .forEach(function(t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (t.dispose = function() {
          p.removeData(this._element, ai),
            p(this._scrollElement).off(li),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function(t) {
          if (
            'string' !=
            typeof (t = l({}, hi, 'object' == typeof t && t ? t : {}))
              .target
          ) {
            var e = p(t.target).attr('id');
            e || ((e = m.getUID(si)), p(t.target).attr('id', e)),
              (t.target = '#' + e);
          }
          return m.typeCheckConfig(si, t, ui), t;
        }),
        (t._getScrollTop = function() {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function() {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (t._getOffsetHeight = function() {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function() {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                (void 0 === this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (t._activate = function(e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(',').map(function(t) {
              return (
                t +
                '[data-target="' +
                e +
                '"],' +
                t +
                '[href="' +
                e +
                '"]'
              );
            }),
            n = p(
              [].slice.call(document.querySelectorAll(t.join(',')))
            );
          n.hasClass(di)
            ? (n
                .closest(Ei)
                .find(wi)
                .addClass(pi),
              n.addClass(pi))
            : (n.addClass(pi),
              n
                .parents(gi)
                .prev(_i + ', ' + yi)
                .addClass(pi),
              n
                .parents(gi)
                .prev(vi)
                .children(_i)
                .addClass(pi)),
            p(this._scrollElement).trigger(fi.ACTIVATE, {
              relatedTarget: e
            });
        }),
        (t._clear = function() {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function(t) {
              return t.classList.contains(pi);
            })
            .forEach(function(t) {
              return t.classList.remove(pi);
            });
        }),
        (n._jQueryInterface = function(e) {
          return this.each(function() {
            var t = p(this).data(ai);
            if (
              (t ||
                ((t = new n(this, 'object' == typeof e && e)),
                p(this).data(ai, t)),
              'string' == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        s(n, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return hi;
            }
          }
        ]),
        n
      );
    })();
  p(window).on(fi.LOAD_DATA_API, function() {
    for (
      var t = [].slice.call(document.querySelectorAll(mi)),
        e = t.length;
      e--;

    ) {
      var n = p(t[e]);
      Si._jQueryInterface.call(n, n.data());
    }
  }),
    (p.fn[si] = Si._jQueryInterface),
    (p.fn[si].Constructor = Si),
    (p.fn[si].noConflict = function() {
      return (p.fn[si] = ci), Si._jQueryInterface;
    });
  var Di = 'bs.tab',
    Ii = '.' + Di,
    Ai = p.fn.tab,
    Oi = {
      HIDE: 'hide' + Ii,
      HIDDEN: 'hidden' + Ii,
      SHOW: 'show' + Ii,
      SHOWN: 'shown' + Ii,
      CLICK_DATA_API: 'click' + Ii + '.data-api'
    },
    Ni = 'dropdown-menu',
    ki = 'active',
    Li = 'disabled',
    xi = 'fade',
    Pi = 'show',
    Hi = '.dropdown',
    ji = '.nav, .list-group',
    Ri = '.active',
    Fi = '> li > .active',
    Mi =
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Wi = '.dropdown-toggle',
    Ui = '> .dropdown-menu .active',
    Bi = (function() {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.show = function() {
          var n = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType ===
                  Node.ELEMENT_NODE &&
                p(this._element).hasClass(ki)) ||
              p(this._element).hasClass(Li)
            )
          ) {
            var t,
              i,
              e = p(this._element).closest(ji)[0],
              o = m.getSelectorFromElement(this._element);
            if (e) {
              var r =
                'UL' === e.nodeName || 'OL' === e.nodeName ? Fi : Ri;
              i = (i = p.makeArray(p(e).find(r)))[i.length - 1];
            }
            var s = p.Event(Oi.HIDE, {
                relatedTarget: this._element
              }),
              a = p.Event(Oi.SHOW, { relatedTarget: i });
            if (
              (i && p(i).trigger(s),
              p(this._element).trigger(a),
              !a.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (t = document.querySelector(o)),
                this._activate(this._element, e);
              var l = function() {
                var t = p.Event(Oi.HIDDEN, {
                    relatedTarget: n._element
                  }),
                  e = p.Event(Oi.SHOWN, { relatedTarget: i });
                p(i).trigger(t), p(n._element).trigger(e);
              };
              t ? this._activate(t, t.parentNode, l) : l();
            }
          }
        }),
        (t.dispose = function() {
          p.removeData(this._element, Di), (this._element = null);
        }),
        (t._activate = function(t, e, n) {
          function i() {
            return o._transitionComplete(t, r, n);
          }
          var o = this,
            r = (!e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
              ? p(e).children(Ri)
              : p(e).find(Fi))[0],
            s = n && r && p(r).hasClass(xi);
          if (r && s) {
            var a = m.getTransitionDurationFromElement(r);
            p(r)
              .removeClass(Pi)
              .one(m.TRANSITION_END, i)
              .emulateTransitionEnd(a);
          } else i();
        }),
        (t._transitionComplete = function(t, e, n) {
          if (e) {
            p(e).removeClass(ki);
            var i = p(e.parentNode).find(Ui)[0];
            i && p(i).removeClass(ki),
              'tab' === e.getAttribute('role') &&
                e.setAttribute('aria-selected', !1);
          }
          if (
            (p(t).addClass(ki),
            'tab' === t.getAttribute('role') &&
              t.setAttribute('aria-selected', !0),
            m.reflow(t),
            t.classList.contains(xi) && t.classList.add(Pi),
            t.parentNode && p(t.parentNode).hasClass(Ni))
          ) {
            var o = p(t).closest(Hi)[0];
            if (o) {
              var r = [].slice.call(o.querySelectorAll(Wi));
              p(r).addClass(ki);
            }
            t.setAttribute('aria-expanded', !0);
          }
          n && n();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = p(this),
              e = t.data(Di);
            if (
              (e || ((e = new i(this)), t.data(Di, e)),
              'string' == typeof n)
            ) {
              if (void 0 === e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          }
        ]),
        i
      );
    })();
  p(document).on(Oi.CLICK_DATA_API, Mi, function(t) {
    t.preventDefault(), Bi._jQueryInterface.call(p(this), 'show');
  }),
    (p.fn.tab = Bi._jQueryInterface),
    (p.fn.tab.Constructor = Bi),
    (p.fn.tab.noConflict = function() {
      return (p.fn.tab = Ai), Bi._jQueryInterface;
    });
  var qi = 'toast',
    Ki = 'bs.toast',
    Qi = '.' + Ki,
    Vi = p.fn[qi],
    Yi = {
      CLICK_DISMISS: 'click.dismiss' + Qi,
      HIDE: 'hide' + Qi,
      HIDDEN: 'hidden' + Qi,
      SHOW: 'show' + Qi,
      SHOWN: 'shown' + Qi
    },
    zi = 'fade',
    Xi = 'hide',
    Gi = 'show',
    $i = 'showing',
    Ji = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    },
    Zi = { animation: !0, autohide: !0, delay: 500 },
    to = '[data-dismiss="toast"]',
    eo = (function() {
      function i(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.show = function() {
          var t = this;
          p(this._element).trigger(Yi.SHOW),
            this._config.animation && this._element.classList.add(zi);
          function e() {
            t._element.classList.remove($i),
              t._element.classList.add(Gi),
              p(t._element).trigger(Yi.SHOWN),
              t._config.autohide && t.hide();
          }
          if (
            (this._element.classList.remove(Xi),
            this._element.classList.add($i),
            this._config.animation)
          ) {
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element)
              .one(m.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (t.hide = function(t) {
          var e = this;
          this._element.classList.contains(Gi) &&
            (p(this._element).trigger(Yi.HIDE),
            t
              ? this._close()
              : (this._timeout = setTimeout(function() {
                  e._close();
                }, this._config.delay)));
        }),
        (t.dispose = function() {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(Gi) &&
              this._element.classList.remove(Gi),
            p(this._element).off(Yi.CLICK_DISMISS),
            p.removeData(this._element, Ki),
            (this._element = null),
            (this._config = null);
        }),
        (t._getConfig = function(t) {
          return (
            (t = l(
              {},
              Zi,
              p(this._element).data(),
              'object' == typeof t && t ? t : {}
            )),
            m.typeCheckConfig(qi, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._setListeners = function() {
          var t = this;
          p(this._element).on(Yi.CLICK_DISMISS, to, function() {
            return t.hide(!0);
          });
        }),
        (t._close = function() {
          function t() {
            e._element.classList.add(Xi),
              p(e._element).trigger(Yi.HIDDEN);
          }
          var e = this;
          if (
            (this._element.classList.remove(Gi),
            this._config.animation)
          ) {
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element)
              .one(m.TRANSITION_END, t)
              .emulateTransitionEnd(n);
          } else t();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = p(this),
              e = t.data(Ki);
            if (
              (e ||
                ((e = new i(this, 'object' == typeof n && n)),
                t.data(Ki, e)),
              'string' == typeof n)
            ) {
              if (void 0 === e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n](this);
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return Ji;
            }
          },
          {
            key: 'Default',
            get: function() {
              return Zi;
            }
          }
        ]),
        i
      );
    })();
  (p.fn[qi] = eo._jQueryInterface),
    (p.fn[qi].Constructor = eo),
    (p.fn[qi].noConflict = function() {
      return (p.fn[qi] = Vi), eo._jQueryInterface;
    }),
    (function() {
      if (void 0 === p)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = p.fn.jquery.split(' ')[0].split('.');
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(),
    (t.Util = m),
    (t.Alert = g),
    (t.Button = k),
    (t.Carousel = at),
    (t.Collapse = Ct),
    (t.Dropdown = $e),
    (t.Modal = vn),
    (t.Popover = ri),
    (t.Scrollspy = Si),
    (t.Tab = Bi),
    (t.Toast = eo),
    (t.Tooltip = Qn),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery'], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery);
})(this, function(t, p) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function r(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function s(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      'function' == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          })
        )),
        e.forEach(function(t) {
          var e, n, i;
          (e = o),
            (i = r[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[n] = i);
        });
    }
    return o;
  }
  p = p && p.hasOwnProperty('default') ? p.default : p;
  var e = 'transitionend';
  var m = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function(t) {
      for (
        ;
        (t += ~~(1e6 * Math.random())), document.getElementById(t);

      );
      return t;
    },
    getSelectorFromElement: function(t) {
      var e = t.getAttribute('data-target');
      if (!e || '#' === e) {
        var n = t.getAttribute('href');
        e = n && '#' !== n ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function(t) {
      if (!t) return 0;
      var e = p(t).css('transition-duration'),
        n = p(t).css('transition-delay'),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o
        ? ((e = e.split(',')[0]),
          (n = n.split(',')[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function(t) {
      p(t).trigger(e);
    },
    supportsTransitionEnd: function() {
      return Boolean(e);
    },
    isElement: function(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function(t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && m.isElement(r)
                ? 'element'
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function(t) {
      if (!document.documentElement.attachShadow) return null;
      if ('function' != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? m.findShadowRoot(t.parentNode)
          : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  (p.fn.emulateTransitionEnd = function(t) {
    var e = this,
      n = !1;
    return (
      p(this).one(m.TRANSITION_END, function() {
        n = !0;
      }),
      setTimeout(function() {
        n || m.triggerTransitionEnd(e);
      }, t),
      this
    );
  }),
    (p.event.special[m.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function(t) {
        if (p(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      }
    });
  var n,
    o = 'alert',
    a = 'bs.alert',
    l = '.' + a,
    c = p.fn[o],
    h = {
      CLOSE: 'close' + l,
      CLOSED: 'closed' + l,
      CLICK_DATA_API: 'click' + l + '.data-api'
    },
    u =
      (((n = f.prototype).close = function(t) {
        var e = this._element;
        t && (e = this._getRootElement(t)),
          this._triggerCloseEvent(e).isDefaultPrevented() ||
            this._removeElement(e);
      }),
      (n.dispose = function() {
        p.removeData(this._element, a), (this._element = null);
      }),
      (n._getRootElement = function(t) {
        var e = m.getSelectorFromElement(t),
          n = !1;
        return (
          e && (n = document.querySelector(e)),
          (n = n || p(t).closest('.alert')[0])
        );
      }),
      (n._triggerCloseEvent = function(t) {
        var e = p.Event(h.CLOSE);
        return p(t).trigger(e), e;
      }),
      (n._removeElement = function(e) {
        var n = this;
        if ((p(e).removeClass('show'), p(e).hasClass('fade'))) {
          var t = m.getTransitionDurationFromElement(e);
          p(e)
            .one(m.TRANSITION_END, function(t) {
              return n._destroyElement(e, t);
            })
            .emulateTransitionEnd(t);
        } else this._destroyElement(e);
      }),
      (n._destroyElement = function(t) {
        p(t)
          .detach()
          .trigger(h.CLOSED)
          .remove();
      }),
      (f._jQueryInterface = function(n) {
        return this.each(function() {
          var t = p(this),
            e = t.data(a);
          e || ((e = new f(this)), t.data(a, e)),
            'close' === n && e[n](this);
        });
      }),
      (f._handleDismiss = function(e) {
        return function(t) {
          t && t.preventDefault(), e.close(this);
        };
      }),
      r(f, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        }
      ]),
      f);
  function f(t) {
    this._element = t;
  }
  p(document).on(
    h.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    u._handleDismiss(new u())
  ),
    (p.fn[o] = u._jQueryInterface),
    (p.fn[o].Constructor = u),
    (p.fn[o].noConflict = function() {
      return (p.fn[o] = c), u._jQueryInterface;
    });
  var d,
    g = 'button',
    _ = 'bs.button',
    v = '.' + _,
    y = '.data-api',
    E = p.fn[g],
    b = 'active',
    w = '[data-toggle^="button"]',
    C = '.btn',
    T = {
      CLICK_DATA_API: 'click' + v + y,
      FOCUS_BLUR_DATA_API: 'focus' + v + y + ' blur' + v + y
    },
    S =
      (((d = D.prototype).toggle = function() {
        var t = !0,
          e = !0,
          n = p(this._element).closest('[data-toggle="buttons"]')[0];
        if (n) {
          var i = this._element.querySelector(
            'input:not([type="hidden"])'
          );
          if (i) {
            if ('radio' === i.type)
              if (i.checked && this._element.classList.contains(b))
                t = !1;
              else {
                var o = n.querySelector('.active');
                o && p(o).removeClass(b);
              }
            if (t) {
              if (
                i.hasAttribute('disabled') ||
                n.hasAttribute('disabled') ||
                i.classList.contains('disabled') ||
                n.classList.contains('disabled')
              )
                return;
              (i.checked = !this._element.classList.contains(b)),
                p(i).trigger('change');
            }
            i.focus(), (e = !1);
          }
        }
        e &&
          this._element.setAttribute(
            'aria-pressed',
            !this._element.classList.contains(b)
          ),
          t && p(this._element).toggleClass(b);
      }),
      (d.dispose = function() {
        p.removeData(this._element, _), (this._element = null);
      }),
      (D._jQueryInterface = function(e) {
        return this.each(function() {
          var t = p(this).data(_);
          t || ((t = new D(this)), p(this).data(_, t)),
            'toggle' === e && t[e]();
        });
      }),
      r(D, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        }
      ]),
      D);
  function D(t) {
    this._element = t;
  }
  p(document)
    .on(T.CLICK_DATA_API, w, function(t) {
      t.preventDefault();
      var e = t.target;
      p(e).hasClass('btn') || (e = p(e).closest(C)),
        S._jQueryInterface.call(p(e), 'toggle');
    })
    .on(T.FOCUS_BLUR_DATA_API, w, function(t) {
      var e = p(t.target).closest(C)[0];
      p(e).toggleClass('focus', /^focus(in)?$/.test(t.type));
    }),
    (p.fn[g] = S._jQueryInterface),
    (p.fn[g].Constructor = S),
    (p.fn[g].noConflict = function() {
      return (p.fn[g] = E), S._jQueryInterface;
    });
  var I,
    A = 'carousel',
    O = 'bs.carousel',
    N = '.' + O,
    k = '.data-api',
    L = p.fn[A],
    x = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0
    },
    P = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    },
    H = 'next',
    j = 'prev',
    R = {
      SLIDE: 'slide' + N,
      SLID: 'slid' + N,
      KEYDOWN: 'keydown' + N,
      MOUSEENTER: 'mouseenter' + N,
      MOUSELEAVE: 'mouseleave' + N,
      TOUCHSTART: 'touchstart' + N,
      TOUCHMOVE: 'touchmove' + N,
      TOUCHEND: 'touchend' + N,
      POINTERDOWN: 'pointerdown' + N,
      POINTERUP: 'pointerup' + N,
      DRAG_START: 'dragstart' + N,
      LOAD_DATA_API: 'load' + N + k,
      CLICK_DATA_API: 'click' + N + k
    },
    F = 'active',
    M = '.active.carousel-item',
    W = { TOUCH: 'touch', PEN: 'pen' },
    U =
      (((I = B.prototype).next = function() {
        this._isSliding || this._slide(H);
      }),
      (I.nextWhenVisible = function() {
        !document.hidden &&
          p(this._element).is(':visible') &&
          'hidden' !== p(this._element).css('visibility') &&
          this.next();
      }),
      (I.prev = function() {
        this._isSliding || this._slide(j);
      }),
      (I.pause = function(t) {
        t || (this._isPaused = !0),
          this._element.querySelector(
            '.carousel-item-next, .carousel-item-prev'
          ) &&
            (m.triggerTransitionEnd(this._element), this.cycle(!0)),
          clearInterval(this._interval),
          (this._interval = null);
      }),
      (I.cycle = function(t) {
        t || (this._isPaused = !1),
          this._interval &&
            (clearInterval(this._interval), (this._interval = null)),
          this._config.interval &&
            !this._isPaused &&
            (this._interval = setInterval(
              (document.visibilityState
                ? this.nextWhenVisible
                : this.next
              ).bind(this),
              this._config.interval
            ));
      }),
      (I.to = function(t) {
        var e = this;
        this._activeElement = this._element.querySelector(M);
        var n = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0))
          if (this._isSliding)
            p(this._element).one(R.SLID, function() {
              return e.to(t);
            });
          else {
            if (n === t) return this.pause(), void this.cycle();
            var i = n < t ? H : j;
            this._slide(i, this._items[t]);
          }
      }),
      (I.dispose = function() {
        p(this._element).off(N),
          p.removeData(this._element, O),
          (this._items = null),
          (this._config = null),
          (this._element = null),
          (this._interval = null),
          (this._isPaused = null),
          (this._isSliding = null),
          (this._activeElement = null),
          (this._indicatorsElement = null);
      }),
      (I._getConfig = function(t) {
        return (t = s({}, x, t)), m.typeCheckConfig(A, t, P), t;
      }),
      (I._handleSwipe = function() {
        var t = Math.abs(this.touchDeltaX);
        if (!(t <= 40)) {
          var e = t / this.touchDeltaX;
          0 < e && this.prev(), e < 0 && this.next();
        }
      }),
      (I._addEventListeners = function() {
        var e = this;
        this._config.keyboard &&
          p(this._element).on(R.KEYDOWN, function(t) {
            return e._keydown(t);
          }),
          'hover' === this._config.pause &&
            p(this._element)
              .on(R.MOUSEENTER, function(t) {
                return e.pause(t);
              })
              .on(R.MOUSELEAVE, function(t) {
                return e.cycle(t);
              }),
          this._config.touch && this._addTouchEventListeners();
      }),
      (I._addTouchEventListeners = function() {
        var n = this;
        if (this._touchSupported) {
          var e = function(t) {
              n._pointerEvent &&
              W[t.originalEvent.pointerType.toUpperCase()]
                ? (n.touchStartX = t.originalEvent.clientX)
                : n._pointerEvent ||
                  (n.touchStartX =
                    t.originalEvent.touches[0].clientX);
            },
            i = function(t) {
              n._pointerEvent &&
                W[t.originalEvent.pointerType.toUpperCase()] &&
                (n.touchDeltaX =
                  t.originalEvent.clientX - n.touchStartX),
                n._handleSwipe(),
                'hover' === n._config.pause &&
                  (n.pause(),
                  n.touchTimeout && clearTimeout(n.touchTimeout),
                  (n.touchTimeout = setTimeout(function(t) {
                    return n.cycle(t);
                  }, 500 + n._config.interval)));
            };
          p(this._element.querySelectorAll('.carousel-item img')).on(
            R.DRAG_START,
            function(t) {
              return t.preventDefault();
            }
          ),
            this._pointerEvent
              ? (p(this._element).on(R.POINTERDOWN, function(t) {
                  return e(t);
                }),
                p(this._element).on(R.POINTERUP, function(t) {
                  return i(t);
                }),
                this._element.classList.add('pointer-event'))
              : (p(this._element).on(R.TOUCHSTART, function(t) {
                  return e(t);
                }),
                p(this._element).on(R.TOUCHMOVE, function(t) {
                  var e;
                  (e = t).originalEvent.touches &&
                  1 < e.originalEvent.touches.length
                    ? (n.touchDeltaX = 0)
                    : (n.touchDeltaX =
                        e.originalEvent.touches[0].clientX -
                        n.touchStartX);
                }),
                p(this._element).on(R.TOUCHEND, function(t) {
                  return i(t);
                }));
        }
      }),
      (I._keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName))
          switch (t.which) {
            case 37:
              t.preventDefault(), this.prev();
              break;
            case 39:
              t.preventDefault(), this.next();
          }
      }),
      (I._getItemIndex = function(t) {
        return (
          (this._items =
            t && t.parentNode
              ? [].slice.call(
                  t.parentNode.querySelectorAll('.carousel-item')
                )
              : []),
          this._items.indexOf(t)
        );
      }),
      (I._getItemByDirection = function(t, e) {
        var n = t === H,
          i = t === j,
          o = this._getItemIndex(e),
          r = this._items.length - 1;
        if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
          return e;
        var s = (o + (t === j ? -1 : 1)) % this._items.length;
        return -1 == s
          ? this._items[this._items.length - 1]
          : this._items[s];
      }),
      (I._triggerSlideEvent = function(t, e) {
        var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(M)),
          o = p.Event(R.SLIDE, {
            relatedTarget: t,
            direction: e,
            from: i,
            to: n
          });
        return p(this._element).trigger(o), o;
      }),
      (I._setActiveIndicatorElement = function(t) {
        if (this._indicatorsElement) {
          var e = [].slice.call(
            this._indicatorsElement.querySelectorAll('.active')
          );
          p(e).removeClass(F);
          var n = this._indicatorsElement.children[
            this._getItemIndex(t)
          ];
          n && p(n).addClass(F);
        }
      }),
      (I._slide = function(t, e) {
        var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(M),
          a = this._getItemIndex(s),
          l = e || (s && this._getItemByDirection(t, s)),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);
        if (
          ((o =
            t === H
              ? ((n = 'carousel-item-left'),
                (i = 'carousel-item-next'),
                'left')
              : ((n = 'carousel-item-right'),
                (i = 'carousel-item-prev'),
                'right')),
          l && p(l).hasClass(F))
        )
          this._isSliding = !1;
        else if (
          !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
          s &&
          l
        ) {
          (this._isSliding = !0),
            h && this.pause(),
            this._setActiveIndicatorElement(l);
          var u = p.Event(R.SLID, {
            relatedTarget: l,
            direction: o,
            from: a,
            to: c
          });
          if (p(this._element).hasClass('slide')) {
            p(l).addClass(i),
              m.reflow(l),
              p(s).addClass(n),
              p(l).addClass(n);
            var f = parseInt(l.getAttribute('data-interval'), 10);
            this._config.interval = f
              ? ((this._config.defaultInterval =
                  this._config.defaultInterval ||
                  this._config.interval),
                f)
              : this._config.defaultInterval || this._config.interval;
            var d = m.getTransitionDurationFromElement(s);
            p(s)
              .one(m.TRANSITION_END, function() {
                p(l)
                  .removeClass(n + ' ' + i)
                  .addClass(F),
                  p(s).removeClass(F + ' ' + i + ' ' + n),
                  (r._isSliding = !1),
                  setTimeout(function() {
                    return p(r._element).trigger(u);
                  }, 0);
              })
              .emulateTransitionEnd(d);
          } else
            p(s).removeClass(F),
              p(l).addClass(F),
              (this._isSliding = !1),
              p(this._element).trigger(u);
          h && this.cycle();
        }
      }),
      (B._jQueryInterface = function(i) {
        return this.each(function() {
          var t = p(this).data(O),
            e = s({}, x, p(this).data());
          'object' == typeof i && (e = s({}, e, i));
          var n = 'string' == typeof i ? i : e.slide;
          if (
            (t || ((t = new B(this, e)), p(this).data(O, t)),
            'number' == typeof i)
          )
            t.to(i);
          else if ('string' == typeof n) {
            if (void 0 === t[n])
              throw new TypeError('No method named "' + n + '"');
            t[n]();
          } else e.interval && e.ride && (t.pause(), t.cycle());
        });
      }),
      (B._dataApiClickHandler = function(t) {
        var e = m.getSelectorFromElement(this);
        if (e) {
          var n = p(e)[0];
          if (n && p(n).hasClass('carousel')) {
            var i = s({}, p(n).data(), p(this).data()),
              o = this.getAttribute('data-slide-to');
            o && (i.interval = !1),
              B._jQueryInterface.call(p(n), i),
              o &&
                p(n)
                  .data(O)
                  .to(o),
              t.preventDefault();
          }
        }
      }),
      r(B, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return x;
          }
        }
      ]),
      B);
  function B(t, e) {
    (this._items = null),
      (this._interval = null),
      (this._activeElement = null),
      (this._isPaused = !1),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this.touchStartX = 0),
      (this.touchDeltaX = 0),
      (this._config = this._getConfig(e)),
      (this._element = t),
      (this._indicatorsElement = this._element.querySelector(
        '.carousel-indicators'
      )),
      (this._touchSupported =
        'ontouchstart' in document.documentElement ||
        0 < navigator.maxTouchPoints),
      (this._pointerEvent = Boolean(
        window.PointerEvent || window.MSPointerEvent
      )),
      this._addEventListeners();
  }
  p(document).on(
    R.CLICK_DATA_API,
    '[data-slide], [data-slide-to]',
    U._dataApiClickHandler
  ),
    p(window).on(R.LOAD_DATA_API, function() {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = p(t[e]);
        U._jQueryInterface.call(i, i.data());
      }
    }),
    (p.fn[A] = U._jQueryInterface),
    (p.fn[A].Constructor = U),
    (p.fn[A].noConflict = function() {
      return (p.fn[A] = L), U._jQueryInterface;
    });
  var q,
    K = 'collapse',
    Q = 'bs.collapse',
    V = '.' + Q,
    Y = p.fn[K],
    z = { toggle: !0, parent: '' },
    X = { toggle: 'boolean', parent: '(string|element)' },
    G = {
      SHOW: 'show' + V,
      SHOWN: 'shown' + V,
      HIDE: 'hide' + V,
      HIDDEN: 'hidden' + V,
      CLICK_DATA_API: 'click' + V + '.data-api'
    },
    $ = 'show',
    J = 'collapse',
    Z = 'collapsing',
    tt = 'collapsed',
    et = '[data-toggle="collapse"]',
    nt =
      (((q = it.prototype).toggle = function() {
        p(this._element).hasClass($) ? this.hide() : this.show();
      }),
      (q.show = function() {
        var t,
          e,
          n = this;
        if (
          !(
            this._isTransitioning ||
            p(this._element).hasClass($) ||
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(
                    this._parent.querySelectorAll(
                      '.show, .collapsing'
                    )
                  )
                  .filter(function(t) {
                    return 'string' == typeof n._config.parent
                      ? t.getAttribute('data-parent') ===
                          n._config.parent
                      : t.classList.contains(J);
                  })).length &&
              (t = null),
            t &&
              (e = p(t)
                .not(this._selector)
                .data(Q)) &&
              e._isTransitioning)
          )
        ) {
          var i = p.Event(G.SHOW);
          if (
            (p(this._element).trigger(i), !i.isDefaultPrevented())
          ) {
            t &&
              (it._jQueryInterface.call(
                p(t).not(this._selector),
                'hide'
              ),
              e || p(t).data(Q, null));
            var o = this._getDimension();
            p(this._element)
              .removeClass(J)
              .addClass(Z),
              (this._element.style[o] = 0),
              this._triggerArray.length &&
                p(this._triggerArray)
                  .removeClass(tt)
                  .attr('aria-expanded', !0),
              this.setTransitioning(!0);
            var r = 'scroll' + (o[0].toUpperCase() + o.slice(1)),
              s = m.getTransitionDurationFromElement(this._element);
            p(this._element)
              .one(m.TRANSITION_END, function() {
                p(n._element)
                  .removeClass(Z)
                  .addClass(J)
                  .addClass($),
                  (n._element.style[o] = ''),
                  n.setTransitioning(!1),
                  p(n._element).trigger(G.SHOWN);
              })
              .emulateTransitionEnd(s),
              (this._element.style[o] = this._element[r] + 'px');
          }
        }
      }),
      (q.hide = function() {
        var t = this;
        if (!this._isTransitioning && p(this._element).hasClass($)) {
          var e = p.Event(G.HIDE);
          if (
            (p(this._element).trigger(e), !e.isDefaultPrevented())
          ) {
            var n = this._getDimension();
            (this._element.style[n] =
              this._element.getBoundingClientRect()[n] + 'px'),
              m.reflow(this._element),
              p(this._element)
                .addClass(Z)
                .removeClass(J)
                .removeClass($);
            var i = this._triggerArray.length;
            if (0 < i)
              for (var o = 0; o < i; o++) {
                var r = this._triggerArray[o],
                  s = m.getSelectorFromElement(r);
                null !== s &&
                  (p(
                    [].slice.call(document.querySelectorAll(s))
                  ).hasClass($) ||
                    p(r)
                      .addClass(tt)
                      .attr('aria-expanded', !1));
              }
            this.setTransitioning(!0), (this._element.style[n] = '');
            var a = m.getTransitionDurationFromElement(this._element);
            p(this._element)
              .one(m.TRANSITION_END, function() {
                t.setTransitioning(!1),
                  p(t._element)
                    .removeClass(Z)
                    .addClass(J)
                    .trigger(G.HIDDEN);
              })
              .emulateTransitionEnd(a);
          }
        }
      }),
      (q.setTransitioning = function(t) {
        this._isTransitioning = t;
      }),
      (q.dispose = function() {
        p.removeData(this._element, Q),
          (this._config = null),
          (this._parent = null),
          (this._element = null),
          (this._triggerArray = null),
          (this._isTransitioning = null);
      }),
      (q._getConfig = function(t) {
        return (
          ((t = s({}, z, t)).toggle = Boolean(t.toggle)),
          m.typeCheckConfig(K, t, X),
          t
        );
      }),
      (q._getDimension = function() {
        return p(this._element).hasClass('width')
          ? 'width'
          : 'height';
      }),
      (q._getParent = function() {
        var t,
          n = this;
        m.isElement(this._config.parent)
          ? ((t = this._config.parent),
            void 0 !== this._config.parent.jquery &&
              (t = this._config.parent[0]))
          : (t = document.querySelector(this._config.parent));
        var e =
            '[data-toggle="collapse"][data-parent="' +
            this._config.parent +
            '"]',
          i = [].slice.call(t.querySelectorAll(e));
        return (
          p(i).each(function(t, e) {
            n._addAriaAndCollapsedClass(it._getTargetFromElement(e), [
              e
            ]);
          }),
          t
        );
      }),
      (q._addAriaAndCollapsedClass = function(t, e) {
        var n = p(t).hasClass($);
        e.length &&
          p(e)
            .toggleClass(tt, !n)
            .attr('aria-expanded', n);
      }),
      (it._getTargetFromElement = function(t) {
        var e = m.getSelectorFromElement(t);
        return e ? document.querySelector(e) : null;
      }),
      (it._jQueryInterface = function(i) {
        return this.each(function() {
          var t = p(this),
            e = t.data(Q),
            n = s(
              {},
              z,
              t.data(),
              'object' == typeof i && i ? i : {}
            );
          if (
            (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
            e || ((e = new it(this, n)), t.data(Q, e)),
            'string' == typeof i)
          ) {
            if (void 0 === e[i])
              throw new TypeError('No method named "' + i + '"');
            e[i]();
          }
        });
      }),
      r(it, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return z;
          }
        }
      ]),
      it);
  function it(e, t) {
    (this._isTransitioning = !1),
      (this._element = e),
      (this._config = this._getConfig(t)),
      (this._triggerArray = [].slice.call(
        document.querySelectorAll(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )
      ));
    for (
      var n = [].slice.call(document.querySelectorAll(et)),
        i = 0,
        o = n.length;
      i < o;
      i++
    ) {
      var r = n[i],
        s = m.getSelectorFromElement(r),
        a = [].slice
          .call(document.querySelectorAll(s))
          .filter(function(t) {
            return t === e;
          });
      null !== s &&
        0 < a.length &&
        ((this._selector = s), this._triggerArray.push(r));
    }
    (this._parent = this._config.parent ? this._getParent() : null),
      this._config.parent ||
        this._addAriaAndCollapsedClass(
          this._element,
          this._triggerArray
        ),
      this._config.toggle && this.toggle();
  }
  p(document).on(G.CLICK_DATA_API, et, function(t) {
    'A' === t.currentTarget.tagName && t.preventDefault();
    var n = p(this),
      e = m.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    p(i).each(function() {
      var t = p(this),
        e = t.data(Q) ? 'toggle' : n.data();
      nt._jQueryInterface.call(t, e);
    });
  }),
    (p.fn[K] = nt._jQueryInterface),
    (p.fn[K].Constructor = nt),
    (p.fn[K].noConflict = function() {
      return (p.fn[K] = Y), nt._jQueryInterface;
    });
  for (
    var ot =
        'undefined' != typeof window &&
        'undefined' != typeof document,
      rt = ['Edge', 'Trident', 'Firefox'],
      st = 0,
      at = 0;
    at < rt.length;
    at += 1
  )
    if (ot && 0 <= navigator.userAgent.indexOf(rt[at])) {
      st = 1;
      break;
    }
  var lt =
    ot && window.Promise
      ? function(t) {
          var e = !1;
          return function() {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function() {
                (e = !1), t();
              }));
          };
        }
      : function(t) {
          var e = !1;
          return function() {
            e ||
              ((e = !0),
              setTimeout(function() {
                (e = !1), t();
              }, st));
          };
        };
  function ct(t) {
    return t && '[object Function]' === {}.toString.call(t);
  }
  function ht(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function ut(t) {
    return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
  }
  function ft(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case 'HTML':
      case 'BODY':
        return t.ownerDocument.body;
      case '#document':
        return t.body;
    }
    var e = ht(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : ft(ut(t));
  }
  var dt =
      ot && !(!window.MSInputMethodContext || !document.documentMode),
    pt = ot && /MSIE 10/.test(navigator.userAgent);
  function mt(t) {
    return 11 === t ? dt : 10 === t ? pt : dt || pt;
  }
  function gt(t) {
    if (!t) return document.documentElement;
    for (
      var e = mt(10) ? document.body : null,
        n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i
      ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) &&
        'static' === ht(n, 'position')
        ? gt(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function _t(t) {
    return null !== t.parentNode ? _t(t.parentNode) : t;
  }
  function vt(t, e) {
    if (!(t && t.nodeType && e && e.nodeType))
      return document.documentElement;
    var n =
        t.compareDocumentPosition(e) &
        Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s,
      a,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return 'BODY' === (a = (s = l).nodeName) ||
        ('HTML' !== a && gt(s.firstElementChild) !== s)
        ? gt(l)
        : l;
    var c = _t(t);
    return c.host ? vt(c.host, e) : vt(t, _t(e).host);
  }
  function yt(t, e) {
    var n =
        'top' === (1 < arguments.length && void 0 !== e ? e : 'top')
          ? 'scrollTop'
          : 'scrollLeft',
      i = t.nodeName;
    if ('BODY' !== i && 'HTML' !== i) return t[n];
    var o = t.ownerDocument.documentElement;
    return (t.ownerDocument.scrollingElement || o)[n];
  }
  function Et(t, e) {
    var n = 'x' === e ? 'Left' : 'Top',
      i = 'Left' == n ? 'Right' : 'Bottom';
    return (
      parseFloat(t['border' + n + 'Width'], 10) +
      parseFloat(t['border' + i + 'Width'], 10)
    );
  }
  function bt(t, e, n, i) {
    return Math.max(
      e['offset' + t],
      e['scroll' + t],
      n['client' + t],
      n['offset' + t],
      n['scroll' + t],
      mt(10)
        ? parseInt(n['offset' + t]) +
            parseInt(
              i['margin' + ('Height' === t ? 'Top' : 'Left')]
            ) +
            parseInt(
              i['margin' + ('Height' === t ? 'Bottom' : 'Right')]
            )
        : 0
    );
  }
  function wt(t) {
    var e = t.body,
      n = t.documentElement,
      i = mt(10) && getComputedStyle(n);
    return {
      height: bt('Height', e, n, i),
      width: bt('Width', e, n, i)
    };
  }
  function Ct(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (t[e] = n),
      t
    );
  }
  var Tt = function(t, e, n) {
      return e && Dt(t.prototype, e), n && Dt(t, n), t;
    },
    St =
      Object.assign ||
      function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) &&
              (t[i] = n[i]);
        }
        return t;
      };
  function Dt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function It(t) {
    return St({}, t, {
      right: t.left + t.width,
      bottom: t.top + t.height
    });
  }
  function At(t) {
    var e = {};
    try {
      if (mt(10)) {
        e = t.getBoundingClientRect();
        var n = yt(t, 'top'),
          i = yt(t, 'left');
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top
      },
      r = 'HTML' === t.nodeName ? wt(t.ownerDocument) : {},
      s = r.width || t.clientWidth || o.right - o.left,
      a = r.height || t.clientHeight || o.bottom - o.top,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var h = ht(t);
      (l -= Et(h, 'x')),
        (c -= Et(h, 'y')),
        (o.width -= l),
        (o.height -= c);
    }
    return It(o);
  }
  function Ot(t, e, n) {
    var i = 2 < arguments.length && void 0 !== n && n,
      o = mt(10),
      r = 'HTML' === e.nodeName,
      s = At(t),
      a = At(e),
      l = ft(t),
      c = ht(e),
      h = parseFloat(c.borderTopWidth, 10),
      u = parseFloat(c.borderLeftWidth, 10);
    i &&
      r &&
      ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var f = It({
      top: s.top - a.top - h,
      left: s.left - a.left - u,
      width: s.width,
      height: s.height
    });
    if (((f.marginTop = 0), (f.marginLeft = 0), !o && r)) {
      var d = parseFloat(c.marginTop, 10),
        p = parseFloat(c.marginLeft, 10);
      (f.top -= h - d),
        (f.bottom -= h - d),
        (f.left -= u - p),
        (f.right -= u - p),
        (f.marginTop = d),
        (f.marginLeft = p);
    }
    return (
      (o && !i ? e.contains(l) : e === l && 'BODY' !== l.nodeName) &&
        (f = (function(t, e, n) {
          var i = 2 < arguments.length && void 0 !== n && n,
            o = yt(e, 'top'),
            r = yt(e, 'left'),
            s = i ? -1 : 1;
          return (
            (t.top += o * s),
            (t.bottom += o * s),
            (t.left += r * s),
            (t.right += r * s),
            t
          );
        })(f, e)),
      f
    );
  }
  function Nt(t) {
    if (!t || !t.parentElement || mt())
      return document.documentElement;
    for (
      var e = t.parentElement;
      e && 'none' === ht(e, 'transform');

    )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function kt(t, e, n, i, o) {
    var r = 4 < arguments.length && void 0 !== o && o,
      s = { top: 0, left: 0 },
      a = r ? Nt(t) : vt(t, e);
    if ('viewport' === i)
      s = (function(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e,
          i = t.ownerDocument.documentElement,
          o = Ot(t, i),
          r = Math.max(i.clientWidth, window.innerWidth || 0),
          s = Math.max(i.clientHeight, window.innerHeight || 0),
          a = n ? 0 : yt(i),
          l = n ? 0 : yt(i, 'left');
        return It({
          top: a - o.top + o.marginTop,
          left: l - o.left + o.marginLeft,
          width: r,
          height: s
        });
      })(a, r);
    else {
      var l = void 0;
      'scrollParent' === i
        ? 'BODY' === (l = ft(ut(e))).nodeName &&
          (l = t.ownerDocument.documentElement)
        : (l = 'window' === i ? t.ownerDocument.documentElement : i);
      var c = Ot(l, a, r);
      if (
        'HTML' !== l.nodeName ||
        (function t(e) {
          var n = e.nodeName;
          if ('BODY' === n || 'HTML' === n) return !1;
          if ('fixed' === ht(e, 'position')) return !0;
          var i = ut(e);
          return !!i && t(i);
        })(a)
      )
        s = c;
      else {
        var h = wt(t.ownerDocument),
          u = h.height,
          f = h.width;
        (s.top += c.top - c.marginTop),
          (s.bottom = u + c.top),
          (s.left += c.left - c.marginLeft),
          (s.right = f + c.left);
      }
    }
    var d = 'number' == typeof (n = n || 0);
    return (
      (s.left += d ? n : n.left || 0),
      (s.top += d ? n : n.top || 0),
      (s.right -= d ? n : n.right || 0),
      (s.bottom -= d ? n : n.bottom || 0),
      s
    );
  }
  function Lt(t, e, i, n, o, r) {
    var s = 5 < arguments.length && void 0 !== r ? r : 0;
    if (-1 === t.indexOf('auto')) return t;
    var a = kt(i, n, s, o),
      l = {
        top: { width: a.width, height: e.top - a.top },
        right: { width: a.right - e.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - e.bottom },
        left: { width: e.left - a.left, height: a.height }
      },
      c = Object.keys(l)
        .map(function(t) {
          return St({ key: t }, l[t], {
            area: ((e = l[t]), e.width * e.height)
          });
          var e;
        })
        .sort(function(t, e) {
          return e.area - t.area;
        }),
      h = c.filter(function(t) {
        var e = t.width,
          n = t.height;
        return e >= i.clientWidth && n >= i.clientHeight;
      }),
      u = 0 < h.length ? h[0].key : c[0].key,
      f = t.split('-')[1];
    return u + (f ? '-' + f : '');
  }
  function xt(t, e, n, i) {
    var o = 3 < arguments.length && void 0 !== i ? i : null;
    return Ot(n, o ? Nt(e) : vt(e, n), o);
  }
  function Pt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n =
        parseFloat(e.marginTop || 0) +
        parseFloat(e.marginBottom || 0),
      i =
        parseFloat(e.marginLeft || 0) +
        parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function Ht(t) {
    var e = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return t.replace(/left|right|bottom|top/g, function(t) {
      return e[t];
    });
  }
  function jt(t, e, n) {
    n = n.split('-')[0];
    var i = Pt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ['right', 'left'].indexOf(n),
      s = r ? 'top' : 'left',
      a = r ? 'left' : 'top',
      l = r ? 'height' : 'width',
      c = r ? 'width' : 'height';
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[Ht(a)]),
      o
    );
  }
  function Rt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function Ft(t, n, e) {
    return (
      (void 0 === e
        ? t
        : t.slice(
            0,
            (function(t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function(t) {
                  return t.name === n;
                });
              var i = Rt(t, function(t) {
                return t.name === n;
              });
              return t.indexOf(i);
            })(t, 0, e)
          )
      ).forEach(function(t) {
        t.function &&
          console.warn(
            '`modifier.function` is deprecated, use `modifier.fn`!'
          );
        var e = t.function || t.fn;
        t.enabled &&
          ct(e) &&
          ((n.offsets.popper = It(n.offsets.popper)),
          (n.offsets.reference = It(n.offsets.reference)),
          (n = e(n, t)));
      }),
      n
    );
  }
  function Mt(t, n) {
    return t.some(function(t) {
      var e = t.name;
      return t.enabled && e === n;
    });
  }
  function Wt(t) {
    for (
      var e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? '' + o + n : t;
      if (void 0 !== document.body.style[r]) return r;
    }
    return null;
  }
  function Ut(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function Bt(t) {
    return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function qt(n, i) {
    Object.keys(i).forEach(function(t) {
      var e = '';
      -1 !==
        ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
          t
        ) &&
        Bt(i[t]) &&
        (e = 'px'),
        (n.style[t] = i[t] + e);
    });
  }
  var Kt = ot && /Firefox/i.test(navigator.userAgent);
  function Qt(t, e, n) {
    var i = Rt(t, function(t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function(t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = '`' + e + '`',
        s = '`' + n + '`';
      console.warn(
        s +
          ' modifier is required by ' +
          r +
          ' modifier in order to work, be sure to include it before ' +
          r +
          '!'
      );
    }
    return o;
  }
  var Vt = [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start'
    ],
    Yt = Vt.slice(3);
  function zt(t, e) {
    var n = 1 < arguments.length && void 0 !== e && e,
      i = Yt.indexOf(t),
      o = Yt.slice(i + 1).concat(Yt.slice(0, i));
    return n ? o.reverse() : o;
  }
  var Xt = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function() {},
      onUpdate: function() {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function(t) {
            var e = t.placement,
              n = e.split('-')[0],
              i = e.split('-')[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ['bottom', 'top'].indexOf(n),
                l = a ? 'left' : 'top',
                c = a ? 'width' : 'height',
                h = {
                  start: Ct({}, l, r[l]),
                  end: Ct({}, l, r[l] + r[c] - s[c])
                };
              t.offsets.popper = St({}, s, h[i]);
            }
            return t;
          }
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function(t, e) {
            var n,
              i = e.offset,
              o = t.placement,
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = o.split('-')[0];
            return (
              (n = Bt(+i)
                ? [+i, 0]
                : (function(t, o, r, e) {
                    var s = [0, 0],
                      a = -1 !== ['right', 'left'].indexOf(e),
                      n = t.split(/(\+|\-)/).map(function(t) {
                        return t.trim();
                      }),
                      i = n.indexOf(
                        Rt(n, function(t) {
                          return -1 !== t.search(/,|\s/);
                        })
                      );
                    n[i] &&
                      -1 === n[i].indexOf(',') &&
                      console.warn(
                        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
                      );
                    var l = /\s*,\s*|\s+/,
                      c =
                        -1 !== i
                          ? [
                              n
                                .slice(0, i)
                                .concat([n[i].split(l)[0]]),
                              [n[i].split(l)[1]].concat(
                                n.slice(i + 1)
                              )
                            ]
                          : [n];
                    return (
                      (c = c.map(function(t, e) {
                        var n = (1 === e
                          ? !a
                          : a)
                            ? 'height'
                            : 'width',
                          i = !1;
                        return t
                          .reduce(function(t, e) {
                            return '' === t[t.length - 1] &&
                              -1 !== ['+', '-'].indexOf(e)
                              ? ((t[t.length - 1] = e), (i = !0), t)
                              : i
                              ? ((t[t.length - 1] += e), (i = !1), t)
                              : t.concat(e);
                          }, [])
                          .map(function(t) {
                            return (function(t, e, n, i) {
                              var o = t.match(
                                  /((?:\-|\+)?\d*\.?\d*)(.*)/
                                ),
                                r = +o[1],
                                s = o[2];
                              if (!r) return t;
                              if (0 !== s.indexOf('%'))
                                return 'vh' !== s && 'vw' !== s
                                  ? r
                                  : (('vh' === s
                                      ? Math.max(
                                          document.documentElement
                                            .clientHeight,
                                          window.innerHeight || 0
                                        )
                                      : Math.max(
                                          document.documentElement
                                            .clientWidth,
                                          window.innerWidth || 0
                                        )) /
                                      100) *
                                      r;
                              var a = void 0;
                              switch (s) {
                                case '%p':
                                  a = n;
                                  break;
                                case '%':
                                case '%r':
                                default:
                                  a = i;
                              }
                              return (It(a)[e] / 100) * r;
                            })(t, n, o, r);
                          });
                      })).forEach(function(n, i) {
                        n.forEach(function(t, e) {
                          Bt(t) &&
                            (s[i] += t * ('-' === n[e - 1] ? -1 : 1));
                        });
                      }),
                      s
                    );
                  })(i, s, a, l)),
              'left' === l
                ? ((s.top += n[0]), (s.left -= n[1]))
                : 'right' === l
                ? ((s.top += n[0]), (s.left += n[1]))
                : 'top' === l
                ? ((s.left += n[0]), (s.top -= n[1]))
                : 'bottom' === l &&
                  ((s.left += n[0]), (s.top += n[1])),
              (t.popper = s),
              t
            );
          },
          offset: 0
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function(t, i) {
            var e = i.boundariesElement || gt(t.instance.popper);
            t.instance.reference === e && (e = gt(e));
            var n = Wt('transform'),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
            (o.top = ''), (o.left = ''), (o[n] = '');
            var l = kt(
              t.instance.popper,
              t.instance.reference,
              i.padding,
              e,
              t.positionFixed
            );
            (o.top = r), (o.left = s), (o[n] = a), (i.boundaries = l);
            var c = i.priority,
              h = t.offsets.popper,
              u = {
                primary: function(t) {
                  var e = h[t];
                  return (
                    h[t] < l[t] &&
                      !i.escapeWithReference &&
                      (e = Math.max(h[t], l[t])),
                    Ct({}, t, e)
                  );
                },
                secondary: function(t) {
                  var e = 'right' === t ? 'left' : 'top',
                    n = h[e];
                  return (
                    h[t] > l[t] &&
                      !i.escapeWithReference &&
                      (n = Math.min(
                        h[e],
                        l[t] - ('right' === t ? h.width : h.height)
                      )),
                    Ct({}, e, n)
                  );
                }
              };
            return (
              c.forEach(function(t) {
                var e =
                  -1 !== ['left', 'top'].indexOf(t)
                    ? 'primary'
                    : 'secondary';
                h = St({}, h, u[e](t));
              }),
              (t.offsets.popper = h),
              t
            );
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent'
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function(t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split('-')[0],
              r = Math.floor,
              s = -1 !== ['top', 'bottom'].indexOf(o),
              a = s ? 'right' : 'bottom',
              l = s ? 'left' : 'top',
              c = s ? 'width' : 'height';
            return (
              n[a] < r(i[l]) &&
                (t.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
              t
            );
          }
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function(t, e) {
            var n;
            if (!Qt(t.instance.modifiers, 'arrow', 'keepTogether'))
              return t;
            var i = e.element;
            if ('string' == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  'WARNING: `arrow.element` must be child of its popper element!'
                ),
                t
              );
            var o = t.placement.split('-')[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ['left', 'right'].indexOf(o),
              c = l ? 'height' : 'width',
              h = l ? 'Top' : 'Left',
              u = h.toLowerCase(),
              f = l ? 'left' : 'top',
              d = l ? 'bottom' : 'right',
              p = Pt(i)[c];
            a[d] - p < s[u] &&
              (t.offsets.popper[u] -= s[u] - (a[d] - p)),
              a[u] + p > s[d] &&
                (t.offsets.popper[u] += a[u] + p - s[d]),
              (t.offsets.popper = It(t.offsets.popper));
            var m = a[u] + a[c] / 2 - p / 2,
              g = ht(t.instance.popper),
              _ = parseFloat(g['margin' + h], 10),
              v = parseFloat(g['border' + h + 'Width'], 10),
              y = m - t.offsets.popper[u] - _ - v;
            return (
              (y = Math.max(Math.min(s[c] - p, y), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (Ct((n = {}), u, Math.round(y)), Ct(n, f, ''), n)),
              t
            );
          },
          element: '[x-arrow]'
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function(p, m) {
            if (Mt(p.instance.modifiers, 'inner')) return p;
            if (p.flipped && p.placement === p.originalPlacement)
              return p;
            var g = kt(
                p.instance.popper,
                p.instance.reference,
                m.padding,
                m.boundariesElement,
                p.positionFixed
              ),
              _ = p.placement.split('-')[0],
              v = Ht(_),
              y = p.placement.split('-')[1] || '',
              E = [];
            switch (m.behavior) {
              case 'flip':
                E = [_, v];
                break;
              case 'clockwise':
                E = zt(_);
                break;
              case 'counterclockwise':
                E = zt(_, !0);
                break;
              default:
                E = m.behavior;
            }
            return (
              E.forEach(function(t, e) {
                if (_ !== t || E.length === e + 1) return p;
                (_ = p.placement.split('-')[0]), (v = Ht(_));
                var n,
                  i = p.offsets.popper,
                  o = p.offsets.reference,
                  r = Math.floor,
                  s =
                    ('left' === _ && r(i.right) > r(o.left)) ||
                    ('right' === _ && r(i.left) < r(o.right)) ||
                    ('top' === _ && r(i.bottom) > r(o.top)) ||
                    ('bottom' === _ && r(i.top) < r(o.bottom)),
                  a = r(i.left) < r(g.left),
                  l = r(i.right) > r(g.right),
                  c = r(i.top) < r(g.top),
                  h = r(i.bottom) > r(g.bottom),
                  u =
                    ('left' === _ && a) ||
                    ('right' === _ && l) ||
                    ('top' === _ && c) ||
                    ('bottom' === _ && h),
                  f = -1 !== ['top', 'bottom'].indexOf(_),
                  d =
                    !!m.flipVariations &&
                    ((f && 'start' === y && a) ||
                      (f && 'end' === y && l) ||
                      (!f && 'start' === y && c) ||
                      (!f && 'end' === y && h));
                (s || u || d) &&
                  ((p.flipped = !0),
                  (s || u) && (_ = E[e + 1]),
                  d &&
                    (y =
                      'end' === (n = y)
                        ? 'start'
                        : 'start' === n
                        ? 'end'
                        : n),
                  (p.placement = _ + (y ? '-' + y : '')),
                  (p.offsets.popper = St(
                    {},
                    p.offsets.popper,
                    jt(
                      p.instance.popper,
                      p.offsets.reference,
                      p.placement
                    )
                  )),
                  (p = Ft(p.instance.modifiers, p, 'flip')));
              }),
              p
            );
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport'
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function(t) {
            var e = t.placement,
              n = e.split('-')[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ['left', 'right'].indexOf(n),
              a = -1 === ['top', 'left'].indexOf(n);
            return (
              (o[s ? 'left' : 'top'] =
                r[n] - (a ? o[s ? 'width' : 'height'] : 0)),
              (t.placement = Ht(e)),
              (t.offsets.popper = It(o)),
              t
            );
          }
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function(t) {
            if (!Qt(t.instance.modifiers, 'hide', 'preventOverflow'))
              return t;
            var e = t.offsets.reference,
              n = Rt(t.instance.modifiers, function(t) {
                return 'preventOverflow' === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0),
                (t.attributes['x-out-of-boundaries'] = '');
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1),
                (t.attributes['x-out-of-boundaries'] = !1);
            }
            return t;
          }
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function(t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = Rt(t.instance.modifiers, function(t) {
                return 'applyStyle' === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
              );
            var s,
              a,
              l,
              c,
              h,
              u,
              f,
              d,
              p,
              m,
              g,
              _,
              v,
              y,
              E,
              b,
              w = void 0 !== r ? r : e.gpuAcceleration,
              C = gt(t.instance.popper),
              T = At(C),
              S = { position: o.position },
              D =
                ((s = t),
                (a = window.devicePixelRatio < 2 || !Kt),
                (c = (l = s.offsets).popper),
                (h = l.reference),
                (u = Math.round),
                (f = Math.floor),
                (d = function(t) {
                  return t;
                }),
                (p = u(h.width)),
                (m = u(c.width)),
                (g = -1 !== ['left', 'right'].indexOf(s.placement)),
                (_ = -1 !== s.placement.indexOf('-')),
                (y = a ? u : d),
                {
                  left: (v = a
                    ? g || _ || p % 2 == m % 2
                      ? u
                      : f
                    : d)(
                    p % 2 == 1 && m % 2 == 1 && !_ && a
                      ? c.left - 1
                      : c.left
                  ),
                  top: y(c.top),
                  bottom: y(c.bottom),
                  right: v(c.right)
                }),
              I = 'bottom' === n ? 'top' : 'bottom',
              A = 'right' === i ? 'left' : 'right',
              O = Wt('transform');
            if (
              ((b =
                'bottom' == I
                  ? 'HTML' === C.nodeName
                    ? -C.clientHeight + D.bottom
                    : -T.height + D.bottom
                  : D.top),
              (E =
                'right' == A
                  ? 'HTML' === C.nodeName
                    ? -C.clientWidth + D.right
                    : -T.width + D.right
                  : D.left),
              w && O)
            )
              (S[O] = 'translate3d(' + E + 'px, ' + b + 'px, 0)'),
                (S[I] = 0),
                (S[A] = 0),
                (S.willChange = 'transform');
            else {
              var N = 'bottom' == I ? -1 : 1,
                k = 'right' == A ? -1 : 1;
              (S[I] = b * N),
                (S[A] = E * k),
                (S.willChange = I + ', ' + A);
            }
            var L = { 'x-placement': t.placement };
            return (
              (t.attributes = St({}, L, t.attributes)),
              (t.styles = St({}, S, t.styles)),
              (t.arrowStyles = St(
                {},
                t.offsets.arrow,
                t.arrowStyles
              )),
              t
            );
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right'
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function(t) {
            var e, n;
            return (
              qt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function(t) {
                !1 !== n[t]
                  ? e.setAttribute(t, n[t])
                  : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                qt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function(t, e, n, i, o) {
            var r = xt(o, e, t, n.positionFixed),
              s = Lt(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute('x-placement', s),
              qt(e, {
                position: n.positionFixed ? 'fixed' : 'absolute'
              }),
              n
            );
          },
          gpuAcceleration: void 0
        }
      }
    },
    Gt =
      (Tt($t, [
        {
          key: 'update',
          value: function() {
            return function() {
              if (!this.state.isDestroyed) {
                var t = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {}
                };
                (t.offsets.reference = xt(
                  this.state,
                  this.popper,
                  this.reference,
                  this.options.positionFixed
                )),
                  (t.placement = Lt(
                    this.options.placement,
                    t.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                  )),
                  (t.originalPlacement = t.placement),
                  (t.positionFixed = this.options.positionFixed),
                  (t.offsets.popper = jt(
                    this.popper,
                    t.offsets.reference,
                    t.placement
                  )),
                  (t.offsets.popper.position = this.options
                    .positionFixed
                    ? 'fixed'
                    : 'absolute'),
                  (t = Ft(this.modifiers, t)),
                  this.state.isCreated
                    ? this.options.onUpdate(t)
                    : ((this.state.isCreated = !0),
                      this.options.onCreate(t));
              }
            }.call(this);
          }
        },
        {
          key: 'destroy',
          value: function() {
            return function() {
              return (
                (this.state.isDestroyed = !0),
                Mt(this.modifiers, 'applyStyle') &&
                  (this.popper.removeAttribute('x-placement'),
                  (this.popper.style.position = ''),
                  (this.popper.style.top = ''),
                  (this.popper.style.left = ''),
                  (this.popper.style.right = ''),
                  (this.popper.style.bottom = ''),
                  (this.popper.style.willChange = ''),
                  (this.popper.style[Wt('transform')] = '')),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                  this.popper.parentNode.removeChild(this.popper),
                this
              );
            }.call(this);
          }
        },
        {
          key: 'enableEventListeners',
          value: function() {
            return function() {
              this.state.eventsEnabled ||
                (this.state = (function(t, e, n, i) {
                  (n.updateBound = i),
                    Ut(t).addEventListener('resize', n.updateBound, {
                      passive: !0
                    });
                  var o = ft(t);
                  return (
                    (function t(e, n, i, o) {
                      var r = 'BODY' === e.nodeName,
                        s = r ? e.ownerDocument.defaultView : e;
                      s.addEventListener(n, i, { passive: !0 }),
                        r || t(ft(s.parentNode), n, i, o),
                        o.push(s);
                    })(o, 'scroll', n.updateBound, n.scrollParents),
                    (n.scrollElement = o),
                    (n.eventsEnabled = !0),
                    n
                  );
                })(
                  this.reference,
                  this.options,
                  this.state,
                  this.scheduleUpdate
                ));
            }.call(this);
          }
        },
        {
          key: 'disableEventListeners',
          value: function() {
            return function() {
              var t, e;
              this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state =
                  ((t = this.reference),
                  (e = this.state),
                  Ut(t).removeEventListener('resize', e.updateBound),
                  e.scrollParents.forEach(function(t) {
                    t.removeEventListener('scroll', e.updateBound);
                  }),
                  (e.updateBound = null),
                  (e.scrollParents = []),
                  (e.scrollElement = null),
                  (e.eventsEnabled = !1),
                  e)));
            }.call(this);
          }
        }
      ]),
      $t);
  function $t(t, e) {
    var n = this,
      i =
        2 < arguments.length && void 0 !== arguments[2]
          ? arguments[2]
          : {};
    !(function(t) {
      if (!(t instanceof $t))
        throw new TypeError('Cannot call a class as a function');
    })(this),
      (this.scheduleUpdate = function() {
        return requestAnimationFrame(n.update);
      }),
      (this.update = lt(this.update.bind(this))),
      (this.options = St({}, $t.Defaults, i)),
      (this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }),
      (this.reference = t && t.jquery ? t[0] : t),
      (this.popper = e && e.jquery ? e[0] : e),
      (this.options.modifiers = {}),
      Object.keys(St({}, $t.Defaults.modifiers, i.modifiers)).forEach(
        function(t) {
          n.options.modifiers[t] = St(
            {},
            $t.Defaults.modifiers[t] || {},
            i.modifiers ? i.modifiers[t] : {}
          );
        }
      ),
      (this.modifiers = Object.keys(this.options.modifiers)
        .map(function(t) {
          return St({ name: t }, n.options.modifiers[t]);
        })
        .sort(function(t, e) {
          return t.order - e.order;
        })),
      this.modifiers.forEach(function(t) {
        t.enabled &&
          ct(t.onLoad) &&
          t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }),
      this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), (this.state.eventsEnabled = o);
  }
  (Gt.Utils = ('undefined' != typeof window
    ? window
    : global
  ).PopperUtils),
    (Gt.placements = Vt),
    (Gt.Defaults = Xt);
  var Jt,
    Zt = 'dropdown',
    te = 'bs.dropdown',
    ee = '.' + te,
    ne = '.data-api',
    ie = p.fn[Zt],
    oe = new RegExp('38|40|27'),
    re = {
      HIDE: 'hide' + ee,
      HIDDEN: 'hidden' + ee,
      SHOW: 'show' + ee,
      SHOWN: 'shown' + ee,
      CLICK: 'click' + ee,
      CLICK_DATA_API: 'click' + ee + ne,
      KEYDOWN_DATA_API: 'keydown' + ee + ne,
      KEYUP_DATA_API: 'keyup' + ee + ne
    },
    se = 'disabled',
    ae = 'show',
    le = 'dropdown-menu-right',
    ce = '[data-toggle="dropdown"]',
    he = '.dropdown-menu',
    ue = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    },
    fe = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
    },
    de =
      (((Jt = pe.prototype).toggle = function() {
        if (
          !this._element.disabled &&
          !p(this._element).hasClass(se)
        ) {
          var t = pe._getParentFromElement(this._element),
            e = p(this._menu).hasClass(ae);
          if ((pe._clearMenus(), !e)) {
            var n = { relatedTarget: this._element },
              i = p.Event(re.SHOW, n);
            if ((p(t).trigger(i), !i.isDefaultPrevented())) {
              if (!this._inNavbar) {
                if (void 0 === Gt)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var o = this._element;
                'parent' === this._config.reference
                  ? (o = t)
                  : m.isElement(this._config.reference) &&
                    ((o = this._config.reference),
                    void 0 !== this._config.reference.jquery &&
                      (o = this._config.reference[0])),
                  'scrollParent' !== this._config.boundary &&
                    p(t).addClass('position-static'),
                  (this._popper = new Gt(
                    o,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              'ontouchstart' in document.documentElement &&
                0 === p(t).closest('.navbar-nav').length &&
                p(document.body)
                  .children()
                  .on('mouseover', null, p.noop),
                this._element.focus(),
                this._element.setAttribute('aria-expanded', !0),
                p(this._menu).toggleClass(ae),
                p(t)
                  .toggleClass(ae)
                  .trigger(p.Event(re.SHOWN, n));
            }
          }
        }
      }),
      (Jt.show = function() {
        if (
          !(
            this._element.disabled ||
            p(this._element).hasClass(se) ||
            p(this._menu).hasClass(ae)
          )
        ) {
          var t = { relatedTarget: this._element },
            e = p.Event(re.SHOW, t),
            n = pe._getParentFromElement(this._element);
          p(n).trigger(e),
            e.isDefaultPrevented() ||
              (p(this._menu).toggleClass(ae),
              p(n)
                .toggleClass(ae)
                .trigger(p.Event(re.SHOWN, t)));
        }
      }),
      (Jt.hide = function() {
        if (
          !this._element.disabled &&
          !p(this._element).hasClass(se) &&
          p(this._menu).hasClass(ae)
        ) {
          var t = { relatedTarget: this._element },
            e = p.Event(re.HIDE, t),
            n = pe._getParentFromElement(this._element);
          p(n).trigger(e),
            e.isDefaultPrevented() ||
              (p(this._menu).toggleClass(ae),
              p(n)
                .toggleClass(ae)
                .trigger(p.Event(re.HIDDEN, t)));
        }
      }),
      (Jt.dispose = function() {
        p.removeData(this._element, te),
          p(this._element).off(ee),
          (this._element = null),
          (this._menu = null) !== this._popper &&
            (this._popper.destroy(), (this._popper = null));
      }),
      (Jt.update = function() {
        (this._inNavbar = this._detectNavbar()),
          null !== this._popper && this._popper.scheduleUpdate();
      }),
      (Jt._addEventListeners = function() {
        var e = this;
        p(this._element).on(re.CLICK, function(t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }),
      (Jt._getConfig = function(t) {
        return (
          (t = s(
            {},
            this.constructor.Default,
            p(this._element).data(),
            t
          )),
          m.typeCheckConfig(Zt, t, this.constructor.DefaultType),
          t
        );
      }),
      (Jt._getMenuElement = function() {
        if (!this._menu) {
          var t = pe._getParentFromElement(this._element);
          t && (this._menu = t.querySelector(he));
        }
        return this._menu;
      }),
      (Jt._getPlacement = function() {
        var t = p(this._element.parentNode),
          e = 'bottom-start';
        return (
          t.hasClass('dropup')
            ? ((e = 'top-start'),
              p(this._menu).hasClass(le) && (e = 'top-end'))
            : t.hasClass('dropright')
            ? (e = 'right-start')
            : t.hasClass('dropleft')
            ? (e = 'left-start')
            : p(this._menu).hasClass(le) && (e = 'bottom-end'),
          e
        );
      }),
      (Jt._detectNavbar = function() {
        return 0 < p(this._element).closest('.navbar').length;
      }),
      (Jt._getOffset = function() {
        var e = this,
          t = {};
        return (
          'function' == typeof this._config.offset
            ? (t.fn = function(t) {
                return (
                  (t.offsets = s(
                    {},
                    t.offsets,
                    e._config.offset(t.offsets, e._element) || {}
                  )),
                  t
                );
              })
            : (t.offset = this._config.offset),
          t
        );
      }),
      (Jt._getPopperConfig = function() {
        var t = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: { enabled: this._config.flip },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        return (
          'static' === this._config.display &&
            (t.modifiers.applyStyle = { enabled: !1 }),
          t
        );
      }),
      (pe._jQueryInterface = function(e) {
        return this.each(function() {
          var t = p(this).data(te);
          if (
            (t ||
              ((t = new pe(this, 'object' == typeof e ? e : null)),
              p(this).data(te, t)),
            'string' == typeof e)
          ) {
            if (void 0 === t[e])
              throw new TypeError('No method named "' + e + '"');
            t[e]();
          }
        });
      }),
      (pe._clearMenus = function(t) {
        if (
          !t ||
          (3 !== t.which && ('keyup' !== t.type || 9 === t.which))
        )
          for (
            var e = [].slice.call(document.querySelectorAll(ce)),
              n = 0,
              i = e.length;
            n < i;
            n++
          ) {
            var o = pe._getParentFromElement(e[n]),
              r = p(e[n]).data(te),
              s = { relatedTarget: e[n] };
            if ((t && 'click' === t.type && (s.clickEvent = t), r)) {
              var a = r._menu;
              if (
                p(o).hasClass(ae) &&
                !(
                  t &&
                  (('click' === t.type &&
                    /input|textarea/i.test(t.target.tagName)) ||
                    ('keyup' === t.type && 9 === t.which)) &&
                  p.contains(o, t.target)
                )
              ) {
                var l = p.Event(re.HIDE, s);
                p(o).trigger(l),
                  l.isDefaultPrevented() ||
                    ('ontouchstart' in document.documentElement &&
                      p(document.body)
                        .children()
                        .off('mouseover', null, p.noop),
                    e[n].setAttribute('aria-expanded', 'false'),
                    p(a).removeClass(ae),
                    p(o)
                      .removeClass(ae)
                      .trigger(p.Event(re.HIDDEN, s)));
              }
            }
          }
      }),
      (pe._getParentFromElement = function(t) {
        var e,
          n = m.getSelectorFromElement(t);
        return (
          n && (e = document.querySelector(n)), e || t.parentNode
        );
      }),
      (pe._dataApiKeydownHandler = function(t) {
        if (
          (/input|textarea/i.test(t.target.tagName)
            ? !(
                32 === t.which ||
                (27 !== t.which &&
                  ((40 !== t.which && 38 !== t.which) ||
                    p(t.target).closest(he).length))
              )
            : oe.test(t.which)) &&
          (t.preventDefault(),
          t.stopPropagation(),
          !this.disabled && !p(this).hasClass(se))
        ) {
          var e = pe._getParentFromElement(this),
            n = p(e).hasClass(ae);
          if (n && (!n || (27 !== t.which && 32 !== t.which))) {
            var i = [].slice.call(
              e.querySelectorAll(
                '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
              )
            );
            if (0 !== i.length) {
              var o = i.indexOf(t.target);
              38 === t.which && 0 < o && o--,
                40 === t.which && o < i.length - 1 && o++,
                o < 0 && (o = 0),
                i[o].focus();
            }
          } else {
            if (27 === t.which) {
              var r = e.querySelector(ce);
              p(r).trigger('focus');
            }
            p(this).trigger('click');
          }
        }
      }),
      r(pe, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return ue;
          }
        },
        {
          key: 'DefaultType',
          get: function() {
            return fe;
          }
        }
      ]),
      pe);
  function pe(t, e) {
    (this._element = t),
      (this._popper = null),
      (this._config = this._getConfig(e)),
      (this._menu = this._getMenuElement()),
      (this._inNavbar = this._detectNavbar()),
      this._addEventListeners();
  }
  p(document)
    .on(re.KEYDOWN_DATA_API, ce, de._dataApiKeydownHandler)
    .on(re.KEYDOWN_DATA_API, he, de._dataApiKeydownHandler)
    .on(re.CLICK_DATA_API + ' ' + re.KEYUP_DATA_API, de._clearMenus)
    .on(re.CLICK_DATA_API, ce, function(t) {
      t.preventDefault(),
        t.stopPropagation(),
        de._jQueryInterface.call(p(this), 'toggle');
    })
    .on(re.CLICK_DATA_API, '.dropdown form', function(t) {
      t.stopPropagation();
    }),
    (p.fn[Zt] = de._jQueryInterface),
    (p.fn[Zt].Constructor = de),
    (p.fn[Zt].noConflict = function() {
      return (p.fn[Zt] = ie), de._jQueryInterface;
    });
  var me,
    ge = 'modal',
    _e = 'bs.modal',
    ve = '.' + _e,
    ye = p.fn[ge],
    Ee = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    be = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    },
    we = {
      HIDE: 'hide' + ve,
      HIDDEN: 'hidden' + ve,
      SHOW: 'show' + ve,
      SHOWN: 'shown' + ve,
      FOCUSIN: 'focusin' + ve,
      RESIZE: 'resize' + ve,
      CLICK_DISMISS: 'click.dismiss' + ve,
      KEYDOWN_DISMISS: 'keydown.dismiss' + ve,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + ve,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + ve,
      CLICK_DATA_API: 'click' + ve + '.data-api'
    },
    Ce = 'modal-open',
    Te = 'fade',
    Se = 'show',
    De = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    Ie = '.sticky-top',
    Ae =
      (((me = Oe.prototype).toggle = function(t) {
        return this._isShown ? this.hide() : this.show(t);
      }),
      (me.show = function(t) {
        var e = this;
        if (!this._isShown && !this._isTransitioning) {
          p(this._element).hasClass(Te) &&
            (this._isTransitioning = !0);
          var n = p.Event(we.SHOW, { relatedTarget: t });
          p(this._element).trigger(n),
            this._isShown ||
              n.isDefaultPrevented() ||
              ((this._isShown = !0),
              this._checkScrollbar(),
              this._setScrollbar(),
              this._adjustDialog(),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              p(this._element).on(
                we.CLICK_DISMISS,
                '[data-dismiss="modal"]',
                function(t) {
                  return e.hide(t);
                }
              ),
              p(this._dialog).on(we.MOUSEDOWN_DISMISS, function() {
                p(e._element).one(we.MOUSEUP_DISMISS, function(t) {
                  p(t.target).is(e._element) &&
                    (e._ignoreBackdropClick = !0);
                });
              }),
              this._showBackdrop(function() {
                return e._showElement(t);
              }));
        }
      }),
      (me.hide = function(t) {
        var e = this;
        if (
          (t && t.preventDefault(),
          this._isShown && !this._isTransitioning)
        ) {
          var n = p.Event(we.HIDE);
          if (
            (p(this._element).trigger(n),
            this._isShown && !n.isDefaultPrevented())
          ) {
            this._isShown = !1;
            var i = p(this._element).hasClass(Te);
            if (
              (i && (this._isTransitioning = !0),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              p(document).off(we.FOCUSIN),
              p(this._element).removeClass(Se),
              p(this._element).off(we.CLICK_DISMISS),
              p(this._dialog).off(we.MOUSEDOWN_DISMISS),
              i)
            ) {
              var o = m.getTransitionDurationFromElement(
                this._element
              );
              p(this._element)
                .one(m.TRANSITION_END, function(t) {
                  return e._hideModal(t);
                })
                .emulateTransitionEnd(o);
            } else this._hideModal();
          }
        }
      }),
      (me.dispose = function() {
        [window, this._element, this._dialog].forEach(function(t) {
          return p(t).off(ve);
        }),
          p(document).off(we.FOCUSIN),
          p.removeData(this._element, _e),
          (this._config = null),
          (this._element = null),
          (this._dialog = null),
          (this._backdrop = null),
          (this._isShown = null),
          (this._isBodyOverflowing = null),
          (this._ignoreBackdropClick = null),
          (this._isTransitioning = null),
          (this._scrollbarWidth = null);
      }),
      (me.handleUpdate = function() {
        this._adjustDialog();
      }),
      (me._getConfig = function(t) {
        return (t = s({}, Ee, t)), m.typeCheckConfig(ge, t, be), t;
      }),
      (me._showElement = function(t) {
        var e = this,
          n = p(this._element).hasClass(Te);
        function i() {
          e._config.focus && e._element.focus(),
            (e._isTransitioning = !1),
            p(e._element).trigger(o);
        }
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.appendChild(this._element),
          (this._element.style.display = 'block'),
          this._element.removeAttribute('aria-hidden'),
          this._element.setAttribute('aria-modal', !0),
          p(this._dialog).hasClass('modal-dialog-scrollable')
            ? (this._dialog.querySelector(
                '.modal-body'
              ).scrollTop = 0)
            : (this._element.scrollTop = 0),
          n && m.reflow(this._element),
          p(this._element).addClass(Se),
          this._config.focus && this._enforceFocus();
        var o = p.Event(we.SHOWN, { relatedTarget: t });
        if (n) {
          var r = m.getTransitionDurationFromElement(this._dialog);
          p(this._dialog)
            .one(m.TRANSITION_END, i)
            .emulateTransitionEnd(r);
        } else i();
      }),
      (me._enforceFocus = function() {
        var e = this;
        p(document)
          .off(we.FOCUSIN)
          .on(we.FOCUSIN, function(t) {
            document !== t.target &&
              e._element !== t.target &&
              0 === p(e._element).has(t.target).length &&
              e._element.focus();
          });
      }),
      (me._setEscapeEvent = function() {
        var e = this;
        this._isShown && this._config.keyboard
          ? p(this._element).on(we.KEYDOWN_DISMISS, function(t) {
              27 === t.which && (t.preventDefault(), e.hide());
            })
          : this._isShown || p(this._element).off(we.KEYDOWN_DISMISS);
      }),
      (me._setResizeEvent = function() {
        var e = this;
        this._isShown
          ? p(window).on(we.RESIZE, function(t) {
              return e.handleUpdate(t);
            })
          : p(window).off(we.RESIZE);
      }),
      (me._hideModal = function() {
        var t = this;
        (this._element.style.display = 'none'),
          this._element.setAttribute('aria-hidden', !0),
          this._element.removeAttribute('aria-modal'),
          (this._isTransitioning = !1),
          this._showBackdrop(function() {
            p(document.body).removeClass(Ce),
              t._resetAdjustments(),
              t._resetScrollbar(),
              p(t._element).trigger(we.HIDDEN);
          });
      }),
      (me._removeBackdrop = function() {
        this._backdrop &&
          (p(this._backdrop).remove(), (this._backdrop = null));
      }),
      (me._showBackdrop = function(t) {
        var e = this,
          n = p(this._element).hasClass(Te) ? Te : '';
        if (this._isShown && this._config.backdrop) {
          if (
            ((this._backdrop = document.createElement('div')),
            (this._backdrop.className = 'modal-backdrop'),
            n && this._backdrop.classList.add(n),
            p(this._backdrop).appendTo(document.body),
            p(this._element).on(we.CLICK_DISMISS, function(t) {
              e._ignoreBackdropClick
                ? (e._ignoreBackdropClick = !1)
                : t.target === t.currentTarget &&
                  ('static' === e._config.backdrop
                    ? e._element.focus()
                    : e.hide());
            }),
            n && m.reflow(this._backdrop),
            p(this._backdrop).addClass(Se),
            !t)
          )
            return;
          if (!n) return void t();
          var i = m.getTransitionDurationFromElement(this._backdrop);
          p(this._backdrop)
            .one(m.TRANSITION_END, t)
            .emulateTransitionEnd(i);
        } else if (!this._isShown && this._backdrop) {
          p(this._backdrop).removeClass(Se);
          var o = function() {
            e._removeBackdrop(), t && t();
          };
          if (p(this._element).hasClass(Te)) {
            var r = m.getTransitionDurationFromElement(
              this._backdrop
            );
            p(this._backdrop)
              .one(m.TRANSITION_END, o)
              .emulateTransitionEnd(r);
          } else o();
        } else t && t();
      }),
      (me._adjustDialog = function() {
        var t =
          this._element.scrollHeight >
          document.documentElement.clientHeight;
        !this._isBodyOverflowing &&
          t &&
          (this._element.style.paddingLeft =
            this._scrollbarWidth + 'px'),
          this._isBodyOverflowing &&
            !t &&
            (this._element.style.paddingRight =
              this._scrollbarWidth + 'px');
      }),
      (me._resetAdjustments = function() {
        (this._element.style.paddingLeft = ''),
          (this._element.style.paddingRight = '');
      }),
      (me._checkScrollbar = function() {
        var t = document.body.getBoundingClientRect();
        (this._isBodyOverflowing =
          t.left + t.right < window.innerWidth),
          (this._scrollbarWidth = this._getScrollbarWidth());
      }),
      (me._setScrollbar = function() {
        var o = this;
        if (this._isBodyOverflowing) {
          var t = [].slice.call(document.querySelectorAll(De)),
            e = [].slice.call(document.querySelectorAll(Ie));
          p(t).each(function(t, e) {
            var n = e.style.paddingRight,
              i = p(e).css('padding-right');
            p(e)
              .data('padding-right', n)
              .css(
                'padding-right',
                parseFloat(i) + o._scrollbarWidth + 'px'
              );
          }),
            p(e).each(function(t, e) {
              var n = e.style.marginRight,
                i = p(e).css('margin-right');
              p(e)
                .data('margin-right', n)
                .css(
                  'margin-right',
                  parseFloat(i) - o._scrollbarWidth + 'px'
                );
            });
          var n = document.body.style.paddingRight,
            i = p(document.body).css('padding-right');
          p(document.body)
            .data('padding-right', n)
            .css(
              'padding-right',
              parseFloat(i) + this._scrollbarWidth + 'px'
            );
        }
        p(document.body).addClass(Ce);
      }),
      (me._resetScrollbar = function() {
        var t = [].slice.call(document.querySelectorAll(De));
        p(t).each(function(t, e) {
          var n = p(e).data('padding-right');
          p(e).removeData('padding-right'),
            (e.style.paddingRight = n || '');
        });
        var e = [].slice.call(document.querySelectorAll(Ie));
        p(e).each(function(t, e) {
          var n = p(e).data('margin-right');
          void 0 !== n &&
            p(e)
              .css('margin-right', n)
              .removeData('margin-right');
        });
        var n = p(document.body).data('padding-right');
        p(document.body).removeData('padding-right'),
          (document.body.style.paddingRight = n || '');
      }),
      (me._getScrollbarWidth = function() {
        var t = document.createElement('div');
        (t.className = 'modal-scrollbar-measure'),
          document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }),
      (Oe._jQueryInterface = function(n, i) {
        return this.each(function() {
          var t = p(this).data(_e),
            e = s(
              {},
              Ee,
              p(this).data(),
              'object' == typeof n && n ? n : {}
            );
          if (
            (t || ((t = new Oe(this, e)), p(this).data(_e, t)),
            'string' == typeof n)
          ) {
            if (void 0 === t[n])
              throw new TypeError('No method named "' + n + '"');
            t[n](i);
          } else e.show && t.show(i);
        });
      }),
      r(Oe, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return Ee;
          }
        }
      ]),
      Oe);
  function Oe(t, e) {
    (this._config = this._getConfig(e)),
      (this._element = t),
      (this._dialog = t.querySelector('.modal-dialog')),
      (this._backdrop = null),
      (this._isShown = !1),
      (this._isBodyOverflowing = !1),
      (this._ignoreBackdropClick = !1),
      (this._isTransitioning = !1),
      (this._scrollbarWidth = 0);
  }
  p(document).on(we.CLICK_DATA_API, '[data-toggle="modal"]', function(
    t
  ) {
    var e,
      n = this,
      i = m.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = p(e).data(_e)
      ? 'toggle'
      : s({}, p(e).data(), p(this).data());
    ('A' !== this.tagName && 'AREA' !== this.tagName) ||
      t.preventDefault();
    var r = p(e).one(we.SHOW, function(t) {
      t.isDefaultPrevented() ||
        r.one(we.HIDDEN, function() {
          p(n).is(':visible') && n.focus();
        });
    });
    Ae._jQueryInterface.call(p(e), o, this);
  }),
    (p.fn[ge] = Ae._jQueryInterface),
    (p.fn[ge].Constructor = Ae),
    (p.fn[ge].noConflict = function() {
      return (p.fn[ge] = ye), Ae._jQueryInterface;
    });
  var Ne = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href'
    ],
    ke = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    Le = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function xe(t, s, e) {
    if (0 === t.length) return t;
    if (e && 'function' == typeof e) return e(t);
    for (
      var n = new window.DOMParser().parseFromString(t, 'text/html'),
        a = Object.keys(s),
        l = [].slice.call(n.body.querySelectorAll('*')),
        i = function(t, e) {
          var n = l[t],
            i = n.nodeName.toLowerCase();
          if (-1 === a.indexOf(n.nodeName.toLowerCase()))
            return n.parentNode.removeChild(n), 'continue';
          var o = [].slice.call(n.attributes),
            r = [].concat(s['*'] || [], s[i] || []);
          o.forEach(function(t) {
            !(function(t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Ne.indexOf(n) ||
                  Boolean(
                    t.nodeValue.match(ke) || t.nodeValue.match(Le)
                  )
                );
              for (
                var i = e.filter(function(t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, r) && n.removeAttribute(t.nodeName);
          });
        },
        o = 0,
        r = l.length;
      o < r;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var Pe,
    He = 'tooltip',
    je = 'bs.tooltip',
    Re = '.' + je,
    Fe = p.fn[He],
    Me = 'bs-tooltip',
    We = new RegExp('(^|\\s)' + Me + '\\S+', 'g'),
    Ue = ['sanitize', 'whiteList', 'sanitizeFn'],
    Be = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object'
    },
    qe = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    },
    Ke = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
        a: ['target', 'href', 'title', 'rel'],
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
        img: ['src', 'alt', 'title', 'width', 'height'],
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
      }
    },
    Qe = 'show',
    Ve = {
      HIDE: 'hide' + Re,
      HIDDEN: 'hidden' + Re,
      SHOW: 'show' + Re,
      SHOWN: 'shown' + Re,
      INSERTED: 'inserted' + Re,
      CLICK: 'click' + Re,
      FOCUSIN: 'focusin' + Re,
      FOCUSOUT: 'focusout' + Re,
      MOUSEENTER: 'mouseenter' + Re,
      MOUSELEAVE: 'mouseleave' + Re
    },
    Ye = 'fade',
    ze = 'show',
    Xe = 'hover',
    Ge = 'focus',
    $e =
      (((Pe = Je.prototype).enable = function() {
        this._isEnabled = !0;
      }),
      (Pe.disable = function() {
        this._isEnabled = !1;
      }),
      (Pe.toggleEnabled = function() {
        this._isEnabled = !this._isEnabled;
      }),
      (Pe.toggle = function(t) {
        if (this._isEnabled)
          if (t) {
            var e = this.constructor.DATA_KEY,
              n = p(t.currentTarget).data(e);
            n ||
              ((n = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              p(t.currentTarget).data(e, n)),
              (n._activeTrigger.click = !n._activeTrigger.click),
              n._isWithActiveTrigger()
                ? n._enter(null, n)
                : n._leave(null, n);
          } else {
            if (p(this.getTipElement()).hasClass(ze))
              return void this._leave(null, this);
            this._enter(null, this);
          }
      }),
      (Pe.dispose = function() {
        clearTimeout(this._timeout),
          p.removeData(this.element, this.constructor.DATA_KEY),
          p(this.element).off(this.constructor.EVENT_KEY),
          p(this.element)
            .closest('.modal')
            .off('hide.bs.modal'),
          this.tip && p(this.tip).remove(),
          (this._isEnabled = null),
          (this._timeout = null),
          (this._hoverState = null),
          (this._activeTrigger = null) !== this._popper &&
            this._popper.destroy(),
          (this._popper = null),
          (this.element = null),
          (this.config = null),
          (this.tip = null);
      }),
      (Pe.show = function() {
        var e = this;
        if ('none' === p(this.element).css('display'))
          throw new Error('Please use show on visible elements');
        var t = p.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          p(this.element).trigger(t);
          var n = m.findShadowRoot(this.element),
            i = p.contains(
              null !== n
                ? n
                : this.element.ownerDocument.documentElement,
              this.element
            );
          if (t.isDefaultPrevented() || !i) return;
          var o = this.getTipElement(),
            r = m.getUID(this.constructor.NAME);
          o.setAttribute('id', r),
            this.element.setAttribute('aria-describedby', r),
            this.setContent(),
            this.config.animation && p(o).addClass(Ye);
          var s =
              'function' == typeof this.config.placement
                ? this.config.placement.call(this, o, this.element)
                : this.config.placement,
            a = this._getAttachment(s);
          this.addAttachmentClass(a);
          var l = this._getContainer();
          p(o).data(this.constructor.DATA_KEY, this),
            p.contains(
              this.element.ownerDocument.documentElement,
              this.tip
            ) || p(o).appendTo(l),
            p(this.element).trigger(this.constructor.Event.INSERTED),
            (this._popper = new Gt(this.element, o, {
              placement: a,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: '.arrow' },
                preventOverflow: {
                  boundariesElement: this.config.boundary
                }
              },
              onCreate: function(t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function(t) {
                return e._handlePopperPlacementChange(t);
              }
            })),
            p(o).addClass(ze),
            'ontouchstart' in document.documentElement &&
              p(document.body)
                .children()
                .on('mouseover', null, p.noop);
          var c = function() {
            e.config.animation && e._fixTransition();
            var t = e._hoverState;
            (e._hoverState = null),
              p(e.element).trigger(e.constructor.Event.SHOWN),
              'out' === t && e._leave(null, e);
          };
          if (p(this.tip).hasClass(Ye)) {
            var h = m.getTransitionDurationFromElement(this.tip);
            p(this.tip)
              .one(m.TRANSITION_END, c)
              .emulateTransitionEnd(h);
          } else c();
        }
      }),
      (Pe.hide = function(t) {
        function e() {
          n._hoverState !== Qe &&
            i.parentNode &&
            i.parentNode.removeChild(i),
            n._cleanTipClass(),
            n.element.removeAttribute('aria-describedby'),
            p(n.element).trigger(n.constructor.Event.HIDDEN),
            null !== n._popper && n._popper.destroy(),
            t && t();
        }
        var n = this,
          i = this.getTipElement(),
          o = p.Event(this.constructor.Event.HIDE);
        if ((p(this.element).trigger(o), !o.isDefaultPrevented())) {
          if (
            (p(i).removeClass(ze),
            'ontouchstart' in document.documentElement &&
              p(document.body)
                .children()
                .off('mouseover', null, p.noop),
            (this._activeTrigger.click = !1),
            (this._activeTrigger[Ge] = !1),
            (this._activeTrigger[Xe] = !1),
            p(this.tip).hasClass(Ye))
          ) {
            var r = m.getTransitionDurationFromElement(i);
            p(i)
              .one(m.TRANSITION_END, e)
              .emulateTransitionEnd(r);
          } else e();
          this._hoverState = '';
        }
      }),
      (Pe.update = function() {
        null !== this._popper && this._popper.scheduleUpdate();
      }),
      (Pe.isWithContent = function() {
        return Boolean(this.getTitle());
      }),
      (Pe.addAttachmentClass = function(t) {
        p(this.getTipElement()).addClass(Me + '-' + t);
      }),
      (Pe.getTipElement = function() {
        return (
          (this.tip = this.tip || p(this.config.template)[0]),
          this.tip
        );
      }),
      (Pe.setContent = function() {
        var t = this.getTipElement();
        this.setElementContent(
          p(t.querySelectorAll('.tooltip-inner')),
          this.getTitle()
        ),
          p(t).removeClass(Ye + ' ' + ze);
      }),
      (Pe.setElementContent = function(t, e) {
        'object' != typeof e || (!e.nodeType && !e.jquery)
          ? this.config.html
            ? (this.config.sanitize &&
                (e = xe(
                  e,
                  this.config.whiteList,
                  this.config.sanitizeFn
                )),
              t.html(e))
            : t.text(e)
          : this.config.html
          ? p(e)
              .parent()
              .is(t) || t.empty().append(e)
          : t.text(p(e).text());
      }),
      (Pe.getTitle = function() {
        var t = this.element.getAttribute('data-original-title');
        return (t =
          t ||
          ('function' == typeof this.config.title
            ? this.config.title.call(this.element)
            : this.config.title));
      }),
      (Pe._getOffset = function() {
        var e = this,
          t = {};
        return (
          'function' == typeof this.config.offset
            ? (t.fn = function(t) {
                return (
                  (t.offsets = s(
                    {},
                    t.offsets,
                    e.config.offset(t.offsets, e.element) || {}
                  )),
                  t
                );
              })
            : (t.offset = this.config.offset),
          t
        );
      }),
      (Pe._getContainer = function() {
        return !1 === this.config.container
          ? document.body
          : m.isElement(this.config.container)
          ? p(this.config.container)
          : p(document).find(this.config.container);
      }),
      (Pe._getAttachment = function(t) {
        return qe[t.toUpperCase()];
      }),
      (Pe._setListeners = function() {
        var i = this;
        this.config.trigger.split(' ').forEach(function(t) {
          if ('click' === t)
            p(i.element).on(
              i.constructor.Event.CLICK,
              i.config.selector,
              function(t) {
                return i.toggle(t);
              }
            );
          else if ('manual' !== t) {
            var e =
                t === Xe
                  ? i.constructor.Event.MOUSEENTER
                  : i.constructor.Event.FOCUSIN,
              n =
                t === Xe
                  ? i.constructor.Event.MOUSELEAVE
                  : i.constructor.Event.FOCUSOUT;
            p(i.element)
              .on(e, i.config.selector, function(t) {
                return i._enter(t);
              })
              .on(n, i.config.selector, function(t) {
                return i._leave(t);
              });
          }
        }),
          p(this.element)
            .closest('.modal')
            .on('hide.bs.modal', function() {
              i.element && i.hide();
            }),
          this.config.selector
            ? (this.config = s({}, this.config, {
                trigger: 'manual',
                selector: ''
              }))
            : this._fixTitle();
      }),
      (Pe._fixTitle = function() {
        var t = typeof this.element.getAttribute(
          'data-original-title'
        );
        (!this.element.getAttribute('title') && 'string' == t) ||
          (this.element.setAttribute(
            'data-original-title',
            this.element.getAttribute('title') || ''
          ),
          this.element.setAttribute('title', ''));
      }),
      (Pe._enter = function(t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || p(t.currentTarget).data(n)) ||
          ((e = new this.constructor(
            t.currentTarget,
            this._getDelegateConfig()
          )),
          p(t.currentTarget).data(n, e)),
          t &&
            (e._activeTrigger['focusin' === t.type ? Ge : Xe] = !0),
          p(e.getTipElement()).hasClass(ze) || e._hoverState === Qe
            ? (e._hoverState = Qe)
            : (clearTimeout(e._timeout),
              (e._hoverState = Qe),
              e.config.delay && e.config.delay.show
                ? (e._timeout = setTimeout(function() {
                    e._hoverState === Qe && e.show();
                  }, e.config.delay.show))
                : e.show());
      }),
      (Pe._leave = function(t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || p(t.currentTarget).data(n)) ||
          ((e = new this.constructor(
            t.currentTarget,
            this._getDelegateConfig()
          )),
          p(t.currentTarget).data(n, e)),
          t &&
            (e._activeTrigger['focusout' === t.type ? Ge : Xe] = !1),
          e._isWithActiveTrigger() ||
            (clearTimeout(e._timeout),
            (e._hoverState = 'out'),
            e.config.delay && e.config.delay.hide
              ? (e._timeout = setTimeout(function() {
                  'out' === e._hoverState && e.hide();
                }, e.config.delay.hide))
              : e.hide());
      }),
      (Pe._isWithActiveTrigger = function() {
        for (var t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1;
      }),
      (Pe._getConfig = function(t) {
        var e = p(this.element).data();
        return (
          Object.keys(e).forEach(function(t) {
            -1 !== Ue.indexOf(t) && delete e[t];
          }),
          'number' ==
            typeof (t = s(
              {},
              this.constructor.Default,
              e,
              'object' == typeof t && t ? t : {}
            )).delay && (t.delay = { show: t.delay, hide: t.delay }),
          'number' == typeof t.title &&
            (t.title = t.title.toString()),
          'number' == typeof t.content &&
            (t.content = t.content.toString()),
          m.typeCheckConfig(He, t, this.constructor.DefaultType),
          t.sanitize &&
            (t.template = xe(t.template, t.whiteList, t.sanitizeFn)),
          t
        );
      }),
      (Pe._getDelegateConfig = function() {
        var t = {};
        if (this.config)
          for (var e in this.config)
            this.constructor.Default[e] !== this.config[e] &&
              (t[e] = this.config[e]);
        return t;
      }),
      (Pe._cleanTipClass = function() {
        var t = p(this.getTipElement()),
          e = t.attr('class').match(We);
        null !== e && e.length && t.removeClass(e.join(''));
      }),
      (Pe._handlePopperPlacementChange = function(t) {
        var e = t.instance;
        (this.tip = e.popper),
          this._cleanTipClass(),
          this.addAttachmentClass(this._getAttachment(t.placement));
      }),
      (Pe._fixTransition = function() {
        var t = this.getTipElement(),
          e = this.config.animation;
        null === t.getAttribute('x-placement') &&
          (p(t).removeClass(Ye),
          (this.config.animation = !1),
          this.hide(),
          this.show(),
          (this.config.animation = e));
      }),
      (Je._jQueryInterface = function(n) {
        return this.each(function() {
          var t = p(this).data(je),
            e = 'object' == typeof n && n;
          if (
            (t || !/dispose|hide/.test(n)) &&
            (t || ((t = new Je(this, e)), p(this).data(je, t)),
            'string' == typeof n)
          ) {
            if (void 0 === t[n])
              throw new TypeError('No method named "' + n + '"');
            t[n]();
          }
        });
      }),
      r(Je, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return Ke;
          }
        },
        {
          key: 'NAME',
          get: function() {
            return He;
          }
        },
        {
          key: 'DATA_KEY',
          get: function() {
            return je;
          }
        },
        {
          key: 'Event',
          get: function() {
            return Ve;
          }
        },
        {
          key: 'EVENT_KEY',
          get: function() {
            return Re;
          }
        },
        {
          key: 'DefaultType',
          get: function() {
            return Be;
          }
        }
      ]),
      Je);
  function Je(t, e) {
    if (void 0 === Gt)
      throw new TypeError(
        "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
      );
    (this._isEnabled = !0),
      (this._timeout = 0),
      (this._hoverState = ''),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this.element = t),
      (this.config = this._getConfig(e)),
      (this.tip = null),
      this._setListeners();
  }
  (p.fn[He] = $e._jQueryInterface),
    (p.fn[He].Constructor = $e),
    (p.fn[He].noConflict = function() {
      return (p.fn[He] = Fe), $e._jQueryInterface;
    });
  var Ze = 'popover',
    tn = 'bs.popover',
    en = '.' + tn,
    nn = p.fn[Ze],
    on = 'bs-popover',
    rn = new RegExp('(^|\\s)' + on + '\\S+', 'g'),
    sn = s({}, $e.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    an = s({}, $e.DefaultType, {
      content: '(string|element|function)'
    }),
    ln = {
      HIDE: 'hide' + en,
      HIDDEN: 'hidden' + en,
      SHOW: 'show' + en,
      SHOWN: 'shown' + en,
      INSERTED: 'inserted' + en,
      CLICK: 'click' + en,
      FOCUSIN: 'focusin' + en,
      FOCUSOUT: 'focusout' + en,
      MOUSEENTER: 'mouseenter' + en,
      MOUSELEAVE: 'mouseleave' + en
    },
    cn = (function(t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        ((e.prototype.constructor = e).__proto__ = n);
      var o = i.prototype;
      return (
        (o.isWithContent = function() {
          return this.getTitle() || this._getContent();
        }),
        (o.addAttachmentClass = function(t) {
          p(this.getTipElement()).addClass(on + '-' + t);
        }),
        (o.getTipElement = function() {
          return (
            (this.tip = this.tip || p(this.config.template)[0]),
            this.tip
          );
        }),
        (o.setContent = function() {
          var t = p(this.getTipElement());
          this.setElementContent(
            t.find('.popover-header'),
            this.getTitle()
          );
          var e = this._getContent();
          'function' == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find('.popover-body'), e),
            t.removeClass('fade show');
        }),
        (o._getContent = function() {
          return (
            this.element.getAttribute('data-content') ||
            this.config.content
          );
        }),
        (o._cleanTipClass = function() {
          var t = p(this.getTipElement()),
            e = t.attr('class').match(rn);
          null !== e && 0 < e.length && t.removeClass(e.join(''));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = p(this).data(tn),
              e = 'object' == typeof n ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), p(this).data(tn, t)),
              'string' == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        r(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return sn;
            }
          },
          {
            key: 'NAME',
            get: function() {
              return Ze;
            }
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return tn;
            }
          },
          {
            key: 'Event',
            get: function() {
              return ln;
            }
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return en;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return an;
            }
          }
        ]),
        i
      );
    })($e);
  (p.fn[Ze] = cn._jQueryInterface),
    (p.fn[Ze].Constructor = cn),
    (p.fn[Ze].noConflict = function() {
      return (p.fn[Ze] = nn), cn._jQueryInterface;
    });
  var hn,
    un = 'scrollspy',
    fn = 'bs.scrollspy',
    dn = '.' + fn,
    pn = p.fn[un],
    mn = { offset: 10, method: 'auto', target: '' },
    gn = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    },
    _n = {
      ACTIVATE: 'activate' + dn,
      SCROLL: 'scroll' + dn,
      LOAD_DATA_API: 'load' + dn + '.data-api'
    },
    vn = 'active',
    yn = '.nav, .list-group',
    En = '.nav-link',
    bn = '.list-group-item',
    wn = 'position',
    Cn =
      (((hn = Tn.prototype).refresh = function() {
        var e = this,
          t =
            this._scrollElement === this._scrollElement.window
              ? 'offset'
              : wn,
          o =
            'auto' === this._config.method ? t : this._config.method,
          r = o === wn ? this._getScrollTop() : 0;
        (this._offsets = []),
          (this._targets = []),
          (this._scrollHeight = this._getScrollHeight()),
          [].slice
            .call(document.querySelectorAll(this._selector))
            .map(function(t) {
              var e,
                n = m.getSelectorFromElement(t);
              if ((n && (e = document.querySelector(n)), e)) {
                var i = e.getBoundingClientRect();
                if (i.width || i.height)
                  return [p(e)[o]().top + r, n];
              }
              return null;
            })
            .filter(function(t) {
              return t;
            })
            .sort(function(t, e) {
              return t[0] - e[0];
            })
            .forEach(function(t) {
              e._offsets.push(t[0]), e._targets.push(t[1]);
            });
      }),
      (hn.dispose = function() {
        p.removeData(this._element, fn),
          p(this._scrollElement).off(dn),
          (this._element = null),
          (this._scrollElement = null),
          (this._config = null),
          (this._selector = null),
          (this._offsets = null),
          (this._targets = null),
          (this._activeTarget = null),
          (this._scrollHeight = null);
      }),
      (hn._getConfig = function(t) {
        if (
          'string' !=
          typeof (t = s({}, mn, 'object' == typeof t && t ? t : {}))
            .target
        ) {
          var e = p(t.target).attr('id');
          e || ((e = m.getUID(un)), p(t.target).attr('id', e)),
            (t.target = '#' + e);
        }
        return m.typeCheckConfig(un, t, gn), t;
      }),
      (hn._getScrollTop = function() {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }),
      (hn._getScrollHeight = function() {
        return (
          this._scrollElement.scrollHeight ||
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (hn._getOffsetHeight = function() {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }),
      (hn._process = function() {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();
        if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i);
        } else {
          if (
            this._activeTarget &&
            t < this._offsets[0] &&
            0 < this._offsets[0]
          )
            return (this._activeTarget = null), void this._clear();
          for (var o = this._offsets.length; o--; )
            this._activeTarget !== this._targets[o] &&
              t >= this._offsets[o] &&
              (void 0 === this._offsets[o + 1] ||
                t < this._offsets[o + 1]) &&
              this._activate(this._targets[o]);
        }
      }),
      (hn._activate = function(e) {
        (this._activeTarget = e), this._clear();
        var t = this._selector.split(',').map(function(t) {
            return (
              t +
              '[data-target="' +
              e +
              '"],' +
              t +
              '[href="' +
              e +
              '"]'
            );
          }),
          n = p(
            [].slice.call(document.querySelectorAll(t.join(',')))
          );
        n.hasClass('dropdown-item')
          ? (n
              .closest('.dropdown')
              .find('.dropdown-toggle')
              .addClass(vn),
            n.addClass(vn))
          : (n.addClass(vn),
            n
              .parents(yn)
              .prev(En + ', ' + bn)
              .addClass(vn),
            n
              .parents(yn)
              .prev('.nav-item')
              .children(En)
              .addClass(vn)),
          p(this._scrollElement).trigger(_n.ACTIVATE, {
            relatedTarget: e
          });
      }),
      (hn._clear = function() {
        [].slice
          .call(document.querySelectorAll(this._selector))
          .filter(function(t) {
            return t.classList.contains(vn);
          })
          .forEach(function(t) {
            return t.classList.remove(vn);
          });
      }),
      (Tn._jQueryInterface = function(e) {
        return this.each(function() {
          var t = p(this).data(fn);
          if (
            (t ||
              ((t = new Tn(this, 'object' == typeof e && e)),
              p(this).data(fn, t)),
            'string' == typeof e)
          ) {
            if (void 0 === t[e])
              throw new TypeError('No method named "' + e + '"');
            t[e]();
          }
        });
      }),
      r(Tn, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return mn;
          }
        }
      ]),
      Tn);
  function Tn(t, e) {
    var n = this;
    (this._element = t),
      (this._scrollElement = 'BODY' === t.tagName ? window : t),
      (this._config = this._getConfig(e)),
      (this._selector =
        this._config.target +
        ' ' +
        En +
        ',' +
        this._config.target +
        ' ' +
        bn +
        ',' +
        this._config.target +
        ' .dropdown-item'),
      (this._offsets = []),
      (this._targets = []),
      (this._activeTarget = null),
      (this._scrollHeight = 0),
      p(this._scrollElement).on(_n.SCROLL, function(t) {
        return n._process(t);
      }),
      this.refresh(),
      this._process();
  }
  p(window).on(_n.LOAD_DATA_API, function() {
    for (
      var t = [].slice.call(
          document.querySelectorAll('[data-spy="scroll"]')
        ),
        e = t.length;
      e--;

    ) {
      var n = p(t[e]);
      Cn._jQueryInterface.call(n, n.data());
    }
  }),
    (p.fn[un] = Cn._jQueryInterface),
    (p.fn[un].Constructor = Cn),
    (p.fn[un].noConflict = function() {
      return (p.fn[un] = pn), Cn._jQueryInterface;
    });
  var Sn,
    Dn = 'bs.tab',
    In = '.' + Dn,
    An = p.fn.tab,
    On = {
      HIDE: 'hide' + In,
      HIDDEN: 'hidden' + In,
      SHOW: 'show' + In,
      SHOWN: 'shown' + In,
      CLICK_DATA_API: 'click' + In + '.data-api'
    },
    Nn = 'active',
    kn = '.active',
    Ln = '> li > .active',
    xn =
      (((Sn = Pn.prototype).show = function() {
        var n = this;
        if (
          !(
            (this._element.parentNode &&
              this._element.parentNode.nodeType ===
                Node.ELEMENT_NODE &&
              p(this._element).hasClass(Nn)) ||
            p(this._element).hasClass('disabled')
          )
        ) {
          var t,
            i,
            e = p(this._element).closest('.nav, .list-group')[0],
            o = m.getSelectorFromElement(this._element);
          if (e) {
            var r =
              'UL' === e.nodeName || 'OL' === e.nodeName ? Ln : kn;
            i = (i = p.makeArray(p(e).find(r)))[i.length - 1];
          }
          var s = p.Event(On.HIDE, { relatedTarget: this._element }),
            a = p.Event(On.SHOW, { relatedTarget: i });
          if (
            (i && p(i).trigger(s),
            p(this._element).trigger(a),
            !a.isDefaultPrevented() && !s.isDefaultPrevented())
          ) {
            o && (t = document.querySelector(o)),
              this._activate(this._element, e);
            var l = function() {
              var t = p.Event(On.HIDDEN, {
                  relatedTarget: n._element
                }),
                e = p.Event(On.SHOWN, { relatedTarget: i });
              p(i).trigger(t), p(n._element).trigger(e);
            };
            t ? this._activate(t, t.parentNode, l) : l();
          }
        }
      }),
      (Sn.dispose = function() {
        p.removeData(this._element, Dn), (this._element = null);
      }),
      (Sn._activate = function(t, e, n) {
        function i() {
          return o._transitionComplete(t, r, n);
        }
        var o = this,
          r = (!e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
            ? p(e).children(kn)
            : p(e).find(Ln))[0],
          s = n && r && p(r).hasClass('fade');
        if (r && s) {
          var a = m.getTransitionDurationFromElement(r);
          p(r)
            .removeClass('show')
            .one(m.TRANSITION_END, i)
            .emulateTransitionEnd(a);
        } else i();
      }),
      (Sn._transitionComplete = function(t, e, n) {
        if (e) {
          p(e).removeClass(Nn);
          var i = p(e.parentNode).find('> .dropdown-menu .active')[0];
          i && p(i).removeClass(Nn),
            'tab' === e.getAttribute('role') &&
              e.setAttribute('aria-selected', !1);
        }
        if (
          (p(t).addClass(Nn),
          'tab' === t.getAttribute('role') &&
            t.setAttribute('aria-selected', !0),
          m.reflow(t),
          t.classList.contains('fade') && t.classList.add('show'),
          t.parentNode && p(t.parentNode).hasClass('dropdown-menu'))
        ) {
          var o = p(t).closest('.dropdown')[0];
          if (o) {
            var r = [].slice.call(
              o.querySelectorAll('.dropdown-toggle')
            );
            p(r).addClass(Nn);
          }
          t.setAttribute('aria-expanded', !0);
        }
        n && n();
      }),
      (Pn._jQueryInterface = function(n) {
        return this.each(function() {
          var t = p(this),
            e = t.data(Dn);
          if (
            (e || ((e = new Pn(this)), t.data(Dn, e)),
            'string' == typeof n)
          ) {
            if (void 0 === e[n])
              throw new TypeError('No method named "' + n + '"');
            e[n]();
          }
        });
      }),
      r(Pn, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        }
      ]),
      Pn);
  function Pn(t) {
    this._element = t;
  }
  p(document).on(
    On.CLICK_DATA_API,
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function(t) {
      t.preventDefault(), xn._jQueryInterface.call(p(this), 'show');
    }
  ),
    (p.fn.tab = xn._jQueryInterface),
    (p.fn.tab.Constructor = xn),
    (p.fn.tab.noConflict = function() {
      return (p.fn.tab = An), xn._jQueryInterface;
    });
  var Hn,
    jn = 'toast',
    Rn = 'bs.toast',
    Fn = '.' + Rn,
    Mn = p.fn[jn],
    Wn = {
      CLICK_DISMISS: 'click.dismiss' + Fn,
      HIDE: 'hide' + Fn,
      HIDDEN: 'hidden' + Fn,
      SHOW: 'show' + Fn,
      SHOWN: 'shown' + Fn
    },
    Un = 'show',
    Bn = 'showing',
    qn = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    },
    Kn = { animation: !0, autohide: !0, delay: 500 },
    Qn =
      (((Hn = Vn.prototype).show = function() {
        var t = this;
        function e() {
          t._element.classList.remove(Bn),
            t._element.classList.add(Un),
            p(t._element).trigger(Wn.SHOWN),
            t._config.autohide && t.hide();
        }
        if (
          (p(this._element).trigger(Wn.SHOW),
          this._config.animation &&
            this._element.classList.add('fade'),
          this._element.classList.remove('hide'),
          this._element.classList.add(Bn),
          this._config.animation)
        ) {
          var n = m.getTransitionDurationFromElement(this._element);
          p(this._element)
            .one(m.TRANSITION_END, e)
            .emulateTransitionEnd(n);
        } else e();
      }),
      (Hn.hide = function(t) {
        var e = this;
        this._element.classList.contains(Un) &&
          (p(this._element).trigger(Wn.HIDE),
          t
            ? this._close()
            : (this._timeout = setTimeout(function() {
                e._close();
              }, this._config.delay)));
      }),
      (Hn.dispose = function() {
        clearTimeout(this._timeout),
          (this._timeout = null),
          this._element.classList.contains(Un) &&
            this._element.classList.remove(Un),
          p(this._element).off(Wn.CLICK_DISMISS),
          p.removeData(this._element, Rn),
          (this._element = null),
          (this._config = null);
      }),
      (Hn._getConfig = function(t) {
        return (
          (t = s(
            {},
            Kn,
            p(this._element).data(),
            'object' == typeof t && t ? t : {}
          )),
          m.typeCheckConfig(jn, t, this.constructor.DefaultType),
          t
        );
      }),
      (Hn._setListeners = function() {
        var t = this;
        p(this._element).on(
          Wn.CLICK_DISMISS,
          '[data-dismiss="toast"]',
          function() {
            return t.hide(!0);
          }
        );
      }),
      (Hn._close = function() {
        function t() {
          e._element.classList.add('hide'),
            p(e._element).trigger(Wn.HIDDEN);
        }
        var e = this;
        if (
          (this._element.classList.remove(Un), this._config.animation)
        ) {
          var n = m.getTransitionDurationFromElement(this._element);
          p(this._element)
            .one(m.TRANSITION_END, t)
            .emulateTransitionEnd(n);
        } else t();
      }),
      (Vn._jQueryInterface = function(n) {
        return this.each(function() {
          var t = p(this),
            e = t.data(Rn);
          if (
            (e ||
              ((e = new Vn(this, 'object' == typeof n && n)),
              t.data(Rn, e)),
            'string' == typeof n)
          ) {
            if (void 0 === e[n])
              throw new TypeError('No method named "' + n + '"');
            e[n](this);
          }
        });
      }),
      r(Vn, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'DefaultType',
          get: function() {
            return qn;
          }
        },
        {
          key: 'Default',
          get: function() {
            return Kn;
          }
        }
      ]),
      Vn);
  function Vn(t, e) {
    (this._element = t),
      (this._config = this._getConfig(e)),
      (this._timeout = null),
      this._setListeners();
  }
  (p.fn[jn] = Qn._jQueryInterface),
    (p.fn[jn].Constructor = Qn),
    (p.fn[jn].noConflict = function() {
      return (p.fn[jn] = Mn), Qn._jQueryInterface;
    }),
    (function() {
      if (void 0 === p)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = p.fn.jquery.split(' ')[0].split('.');
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(),
    (t.Util = m),
    (t.Alert = u),
    (t.Button = S),
    (t.Carousel = U),
    (t.Collapse = nt),
    (t.Dropdown = de),
    (t.Modal = Ae),
    (t.Popover = cn),
    (t.Scrollspy = Cn),
    (t.Tab = xn),
    (t.Toast = Qn),
    (t.Tooltip = $e),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery', 'popper.js'], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function(t, g, u) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r);
      'function' == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          })
        )),
        e.forEach(function(t) {
          var e, n, i;
          (e = o),
            (i = r[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[n] = i);
        });
    }
    return o;
  }
  (g = g && g.hasOwnProperty('default') ? g.default : g),
    (u = u && u.hasOwnProperty('default') ? u.default : u);
  var e = 'transitionend';
  function n(t) {
    var e = this,
      n = !1;
    return (
      g(this).one(_.TRANSITION_END, function() {
        n = !0;
      }),
      setTimeout(function() {
        n || _.triggerTransitionEnd(e);
      }, t),
      this
    );
  }
  var _ = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function(t) {
      for (
        ;
        (t += ~~(1e6 * Math.random())), document.getElementById(t);

      );
      return t;
    },
    getSelectorFromElement: function(t) {
      var e = t.getAttribute('data-target');
      if (!e || '#' === e) {
        var n = t.getAttribute('href');
        e = n && '#' !== n ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function(t) {
      if (!t) return 0;
      var e = g(t).css('transition-duration'),
        n = g(t).css('transition-delay'),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o
        ? ((e = e.split(',')[0]),
          (n = n.split(',')[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function(t) {
      g(t).trigger(e);
    },
    supportsTransitionEnd: function() {
      return Boolean(e);
    },
    isElement: function(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function(t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && _.isElement(r)
                ? 'element'
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function(t) {
      if (!document.documentElement.attachShadow) return null;
      if ('function' != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? _.findShadowRoot(t.parentNode)
          : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  (g.fn.emulateTransitionEnd = n),
    (g.event.special[_.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function(t) {
        if (g(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      }
    });
  var o = 'alert',
    r = 'bs.alert',
    a = '.' + r,
    c = g.fn[o],
    h = {
      CLOSE: 'close' + a,
      CLOSED: 'closed' + a,
      CLICK_DATA_API: 'click' + a + '.data-api'
    },
    f = 'alert',
    d = 'fade',
    m = 'show',
    p = (function() {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.close = function(t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (t.dispose = function() {
          g.removeData(this._element, r), (this._element = null);
        }),
        (t._getRootElement = function(t) {
          var e = _.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            (n = n || g(t).closest('.' + f)[0])
          );
        }),
        (t._triggerCloseEvent = function(t) {
          var e = g.Event(h.CLOSE);
          return g(t).trigger(e), e;
        }),
        (t._removeElement = function(e) {
          var n = this;
          if ((g(e).removeClass(m), g(e).hasClass(d))) {
            var t = _.getTransitionDurationFromElement(e);
            g(e)
              .one(_.TRANSITION_END, function(t) {
                return n._destroyElement(e, t);
              })
              .emulateTransitionEnd(t);
          } else this._destroyElement(e);
        }),
        (t._destroyElement = function(t) {
          g(t)
            .detach()
            .trigger(h.CLOSED)
            .remove();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this),
              e = t.data(r);
            e || ((e = new i(this)), t.data(r, e)),
              'close' === n && e[n](this);
          });
        }),
        (i._handleDismiss = function(e) {
          return function(t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          }
        ]),
        i
      );
    })();
  g(document).on(
    h.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    p._handleDismiss(new p())
  ),
    (g.fn[o] = p._jQueryInterface),
    (g.fn[o].Constructor = p),
    (g.fn[o].noConflict = function() {
      return (g.fn[o] = c), p._jQueryInterface;
    });
  var v = 'button',
    E = 'bs.button',
    y = '.' + E,
    C = '.data-api',
    T = g.fn[v],
    S = 'active',
    b = 'btn',
    I = 'focus',
    D = '[data-toggle^="button"]',
    w = '[data-toggle="buttons"]',
    A = 'input:not([type="hidden"])',
    N = '.active',
    O = '.btn',
    k = {
      CLICK_DATA_API: 'click' + y + C,
      FOCUS_BLUR_DATA_API: 'focus' + y + C + ' blur' + y + C
    },
    P = (function() {
      function n(t) {
        this._element = t;
      }
      var t = n.prototype;
      return (
        (t.toggle = function() {
          var t = !0,
            e = !0,
            n = g(this._element).closest(w)[0];
          if (n) {
            var i = this._element.querySelector(A);
            if (i) {
              if ('radio' === i.type)
                if (i.checked && this._element.classList.contains(S))
                  t = !1;
                else {
                  var o = n.querySelector(N);
                  o && g(o).removeClass(S);
                }
              if (t) {
                if (
                  i.hasAttribute('disabled') ||
                  n.hasAttribute('disabled') ||
                  i.classList.contains('disabled') ||
                  n.classList.contains('disabled')
                )
                  return;
                (i.checked = !this._element.classList.contains(S)),
                  g(i).trigger('change');
              }
              i.focus(), (e = !1);
            }
          }
          e &&
            this._element.setAttribute(
              'aria-pressed',
              !this._element.classList.contains(S)
            ),
            t && g(this._element).toggleClass(S);
        }),
        (t.dispose = function() {
          g.removeData(this._element, E), (this._element = null);
        }),
        (n._jQueryInterface = function(e) {
          return this.each(function() {
            var t = g(this).data(E);
            t || ((t = new n(this)), g(this).data(E, t)),
              'toggle' === e && t[e]();
          });
        }),
        s(n, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          }
        ]),
        n
      );
    })();
  g(document)
    .on(k.CLICK_DATA_API, D, function(t) {
      t.preventDefault();
      var e = t.target;
      g(e).hasClass(b) || (e = g(e).closest(O)),
        P._jQueryInterface.call(g(e), 'toggle');
    })
    .on(k.FOCUS_BLUR_DATA_API, D, function(t) {
      var e = g(t.target).closest(O)[0];
      g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
    }),
    (g.fn[v] = P._jQueryInterface),
    (g.fn[v].Constructor = P),
    (g.fn[v].noConflict = function() {
      return (g.fn[v] = T), P._jQueryInterface;
    });
  var L = 'carousel',
    j = 'bs.carousel',
    H = '.' + j,
    R = '.data-api',
    x = g.fn[L],
    F = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0
    },
    U = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    },
    W = 'next',
    q = 'prev',
    M = 'left',
    K = 'right',
    Q = {
      SLIDE: 'slide' + H,
      SLID: 'slid' + H,
      KEYDOWN: 'keydown' + H,
      MOUSEENTER: 'mouseenter' + H,
      MOUSELEAVE: 'mouseleave' + H,
      TOUCHSTART: 'touchstart' + H,
      TOUCHMOVE: 'touchmove' + H,
      TOUCHEND: 'touchend' + H,
      POINTERDOWN: 'pointerdown' + H,
      POINTERUP: 'pointerup' + H,
      DRAG_START: 'dragstart' + H,
      LOAD_DATA_API: 'load' + H + R,
      CLICK_DATA_API: 'click' + H + R
    },
    B = 'carousel',
    V = 'active',
    Y = 'slide',
    z = 'carousel-item-right',
    X = 'carousel-item-left',
    $ = 'carousel-item-next',
    G = 'carousel-item-prev',
    J = 'pointer-event',
    Z = '.active',
    tt = '.active.carousel-item',
    et = '.carousel-item',
    nt = '.carousel-item img',
    it = '.carousel-item-next, .carousel-item-prev',
    ot = '.carousel-indicators',
    rt = '[data-slide], [data-slide-to]',
    st = '[data-ride="carousel"]',
    at = { TOUCH: 'touch', PEN: 'pen' },
    lt = (function() {
      function r(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(ot)),
          (this._touchSupported =
            'ontouchstart' in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var t = r.prototype;
      return (
        (t.next = function() {
          this._isSliding || this._slide(W);
        }),
        (t.nextWhenVisible = function() {
          !document.hidden &&
            g(this._element).is(':visible') &&
            'hidden' !== g(this._element).css('visibility') &&
            this.next();
        }),
        (t.prev = function() {
          this._isSliding || this._slide(q);
        }),
        (t.pause = function(t) {
          t || (this._isPaused = !0),
            this._element.querySelector(it) &&
              (_.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function(t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval),
              (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (t.to = function(t) {
          var e = this;
          this._activeElement = this._element.querySelector(tt);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              g(this._element).one(Q.SLID, function() {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var i = n < t ? W : q;
              this._slide(i, this._items[t]);
            }
        }),
        (t.dispose = function() {
          g(this._element).off(H),
            g.removeData(this._element, j),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function(t) {
          return (t = l({}, F, t)), _.typeCheckConfig(L, t, U), t;
        }),
        (t._handleSwipe = function() {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            0 < e && this.prev(), e < 0 && this.next();
          }
        }),
        (t._addEventListeners = function() {
          var e = this;
          this._config.keyboard &&
            g(this._element).on(Q.KEYDOWN, function(t) {
              return e._keydown(t);
            }),
            'hover' === this._config.pause &&
              g(this._element)
                .on(Q.MOUSEENTER, function(t) {
                  return e.pause(t);
                })
                .on(Q.MOUSELEAVE, function(t) {
                  return e.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (t._addTouchEventListeners = function() {
          var e = this;
          if (this._touchSupported) {
            var n = function(t) {
                e._pointerEvent &&
                at[t.originalEvent.pointerType.toUpperCase()]
                  ? (e.touchStartX = t.originalEvent.clientX)
                  : e._pointerEvent ||
                    (e.touchStartX =
                      t.originalEvent.touches[0].clientX);
              },
              i = function(t) {
                e._pointerEvent &&
                  at[t.originalEvent.pointerType.toUpperCase()] &&
                  (e.touchDeltaX =
                    t.originalEvent.clientX - e.touchStartX),
                  e._handleSwipe(),
                  'hover' === e._config.pause &&
                    (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    (e.touchTimeout = setTimeout(function(t) {
                      return e.cycle(t);
                    }, 500 + e._config.interval)));
              };
            g(this._element.querySelectorAll(nt)).on(
              Q.DRAG_START,
              function(t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                    return n(t);
                  }),
                  g(this._element).on(Q.POINTERUP, function(t) {
                    return i(t);
                  }),
                  this._element.classList.add(J))
                : (g(this._element).on(Q.TOUCHSTART, function(t) {
                    return n(t);
                  }),
                  g(this._element).on(Q.TOUCHMOVE, function(t) {
                    return (function(t) {
                      t.originalEvent.touches &&
                      1 < t.originalEvent.touches.length
                        ? (e.touchDeltaX = 0)
                        : (e.touchDeltaX =
                            t.originalEvent.touches[0].clientX -
                            e.touchStartX);
                    })(t);
                  }),
                  g(this._element).on(Q.TOUCHEND, function(t) {
                    return i(t);
                  }));
          }
        }),
        (t._keydown = function(t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function(t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(et))
                : []),
            this._items.indexOf(t)
          );
        }),
        (t._getItemByDirection = function(t, e) {
          var n = t === W,
            i = t === q,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (
            ((i && 0 === o) || (n && o === r)) &&
            !this._config.wrap
          )
            return e;
          var s = (o + (t === q ? -1 : 1)) % this._items.length;
          return -1 == s
            ? this._items[this._items.length - 1]
            : this._items[s];
        }),
        (t._triggerSlideEvent = function(t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(this._element.querySelector(tt)),
            o = g.Event(Q.SLIDE, {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n
            });
          return g(this._element).trigger(o), o;
        }),
        (t._setActiveIndicatorElement = function(t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll(Z)
            );
            g(e).removeClass(V);
            var n = this._indicatorsElement.children[
              this._getItemIndex(t)
            ];
            n && g(n).addClass(V);
          }
        }),
        (t._slide = function(t, e) {
          var n,
            i,
            o,
            r = this,
            s = this._element.querySelector(tt),
            a = this._getItemIndex(s),
            l = e || (s && this._getItemByDirection(t, s)),
            c = this._getItemIndex(l),
            h = Boolean(this._interval);
          if (
            ((o =
              t === W
                ? ((n = X), (i = $), M)
                : ((n = z), (i = G), K)),
            l && g(l).hasClass(V))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
            s &&
            l
          ) {
            (this._isSliding = !0),
              h && this.pause(),
              this._setActiveIndicatorElement(l);
            var u = g.Event(Q.SLID, {
              relatedTarget: l,
              direction: o,
              from: a,
              to: c
            });
            if (g(this._element).hasClass(Y)) {
              g(l).addClass(i),
                _.reflow(l),
                g(s).addClass(n),
                g(l).addClass(n);
              var f = parseInt(l.getAttribute('data-interval'), 10);
              f
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval ||
                    this._config.interval),
                  (this._config.interval = f))
                : (this._config.interval =
                    this._config.defaultInterval ||
                    this._config.interval);
              var d = _.getTransitionDurationFromElement(s);
              g(s)
                .one(_.TRANSITION_END, function() {
                  g(l)
                    .removeClass(n + ' ' + i)
                    .addClass(V),
                    g(s).removeClass(V + ' ' + i + ' ' + n),
                    (r._isSliding = !1),
                    setTimeout(function() {
                      return g(r._element).trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(d);
            } else
              g(s).removeClass(V),
                g(l).addClass(V),
                (this._isSliding = !1),
                g(this._element).trigger(u);
            h && this.cycle();
          }
        }),
        (r._jQueryInterface = function(i) {
          return this.each(function() {
            var t = g(this).data(j),
              e = l({}, F, g(this).data());
            'object' == typeof i && (e = l({}, e, i));
            var n = 'string' == typeof i ? i : e.slide;
            if (
              (t || ((t = new r(this, e)), g(this).data(j, t)),
              'number' == typeof i)
            )
              t.to(i);
            else if ('string' == typeof n) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            } else e.interval && e.ride && (t.pause(), t.cycle());
          });
        }),
        (r._dataApiClickHandler = function(t) {
          var e = _.getSelectorFromElement(this);
          if (e) {
            var n = g(e)[0];
            if (n && g(n).hasClass(B)) {
              var i = l({}, g(n).data(), g(this).data()),
                o = this.getAttribute('data-slide-to');
              o && (i.interval = !1),
                r._jQueryInterface.call(g(n), i),
                o &&
                  g(n)
                    .data(j)
                    .to(o),
                t.preventDefault();
            }
          }
        }),
        s(r, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return F;
            }
          }
        ]),
        r
      );
    })();
  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
    g(window).on(Q.LOAD_DATA_API, function() {
      for (
        var t = [].slice.call(document.querySelectorAll(st)),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = g(t[e]);
        lt._jQueryInterface.call(i, i.data());
      }
    }),
    (g.fn[L] = lt._jQueryInterface),
    (g.fn[L].Constructor = lt),
    (g.fn[L].noConflict = function() {
      return (g.fn[L] = x), lt._jQueryInterface;
    });
  var ct = 'collapse',
    ht = 'bs.collapse',
    ut = '.' + ht,
    ft = g.fn[ct],
    dt = { toggle: !0, parent: '' },
    gt = { toggle: 'boolean', parent: '(string|element)' },
    _t = {
      SHOW: 'show' + ut,
      SHOWN: 'shown' + ut,
      HIDE: 'hide' + ut,
      HIDDEN: 'hidden' + ut,
      CLICK_DATA_API: 'click' + ut + '.data-api'
    },
    mt = 'show',
    pt = 'collapse',
    vt = 'collapsing',
    Et = 'collapsed',
    yt = 'width',
    Ct = 'height',
    Tt = '.show, .collapsing',
    St = '[data-toggle="collapse"]',
    bt = (function() {
      function a(e, t) {
        (this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(St)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function(t) {
                return t === e;
              });
          null !== s &&
            0 < a.length &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent
          ? this._getParent()
          : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(
              this._element,
              this._triggerArray
            ),
          this._config.toggle && this.toggle();
      }
      var t = a.prototype;
      return (
        (t.toggle = function() {
          g(this._element).hasClass(mt) ? this.hide() : this.show();
        }),
        (t.show = function() {
          var t,
            e,
            n = this;
          if (
            !this._isTransitioning &&
            !g(this._element).hasClass(mt) &&
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(this._parent.querySelectorAll(Tt))
                  .filter(function(t) {
                    return 'string' == typeof n._config.parent
                      ? t.getAttribute('data-parent') ===
                          n._config.parent
                      : t.classList.contains(pt);
                  })).length &&
              (t = null),
            !(
              t &&
              (e = g(t)
                .not(this._selector)
                .data(ht)) &&
              e._isTransitioning
            ))
          ) {
            var i = g.Event(_t.SHOW);
            if (
              (g(this._element).trigger(i), !i.isDefaultPrevented())
            ) {
              t &&
                (a._jQueryInterface.call(
                  g(t).not(this._selector),
                  'hide'
                ),
                e || g(t).data(ht, null));
              var o = this._getDimension();
              g(this._element)
                .removeClass(pt)
                .addClass(vt),
                (this._element.style[o] = 0),
                this._triggerArray.length &&
                  g(this._triggerArray)
                    .removeClass(Et)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0);
              var r = 'scroll' + (o[0].toUpperCase() + o.slice(1)),
                s = _.getTransitionDurationFromElement(this._element);
              g(this._element)
                .one(_.TRANSITION_END, function() {
                  g(n._element)
                    .removeClass(vt)
                    .addClass(pt)
                    .addClass(mt),
                    (n._element.style[o] = ''),
                    n.setTransitioning(!1),
                    g(n._element).trigger(_t.SHOWN);
                })
                .emulateTransitionEnd(s),
                (this._element.style[o] = this._element[r] + 'px');
            }
          }
        }),
        (t.hide = function() {
          var t = this;
          if (
            !this._isTransitioning &&
            g(this._element).hasClass(mt)
          ) {
            var e = g.Event(_t.HIDE);
            if (
              (g(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + 'px'),
                _.reflow(this._element),
                g(this._element)
                  .addClass(vt)
                  .removeClass(pt)
                  .removeClass(mt);
              var i = this._triggerArray.length;
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    s = _.getSelectorFromElement(r);
                  if (null !== s)
                    g(
                      [].slice.call(document.querySelectorAll(s))
                    ).hasClass(mt) ||
                      g(r)
                        .addClass(Et)
                        .attr('aria-expanded', !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = '';
              var a = _.getTransitionDurationFromElement(
                this._element
              );
              g(this._element)
                .one(_.TRANSITION_END, function() {
                  t.setTransitioning(!1),
                    g(t._element)
                      .removeClass(vt)
                      .addClass(pt)
                      .trigger(_t.HIDDEN);
                })
                .emulateTransitionEnd(a);
            }
          }
        }),
        (t.setTransitioning = function(t) {
          this._isTransitioning = t;
        }),
        (t.dispose = function() {
          g.removeData(this._element, ht),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function(t) {
          return (
            ((t = l({}, dt, t)).toggle = Boolean(t.toggle)),
            _.typeCheckConfig(ct, t, gt),
            t
          );
        }),
        (t._getDimension = function() {
          return g(this._element).hasClass(yt) ? yt : Ct;
        }),
        (t._getParent = function() {
          var t,
            n = this;
          _.isElement(this._config.parent)
            ? ((t = this._config.parent),
              void 0 !== this._config.parent.jquery &&
                (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            i = [].slice.call(t.querySelectorAll(e));
          return (
            g(i).each(function(t, e) {
              n._addAriaAndCollapsedClass(
                a._getTargetFromElement(e),
                [e]
              );
            }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function(t, e) {
          var n = g(t).hasClass(mt);
          e.length &&
            g(e)
              .toggleClass(Et, !n)
              .attr('aria-expanded', n);
        }),
        (a._getTargetFromElement = function(t) {
          var e = _.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (a._jQueryInterface = function(i) {
          return this.each(function() {
            var t = g(this),
              e = t.data(ht),
              n = l(
                {},
                dt,
                t.data(),
                'object' == typeof i && i ? i : {}
              );
            if (
              (!e &&
                n.toggle &&
                /show|hide/.test(i) &&
                (n.toggle = !1),
              e || ((e = new a(this, n)), t.data(ht, e)),
              'string' == typeof i)
            ) {
              if (void 0 === e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        s(a, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return dt;
            }
          }
        ]),
        a
      );
    })();
  g(document).on(_t.CLICK_DATA_API, St, function(t) {
    'A' === t.currentTarget.tagName && t.preventDefault();
    var n = g(this),
      e = _.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    g(i).each(function() {
      var t = g(this),
        e = t.data(ht) ? 'toggle' : n.data();
      bt._jQueryInterface.call(t, e);
    });
  }),
    (g.fn[ct] = bt._jQueryInterface),
    (g.fn[ct].Constructor = bt),
    (g.fn[ct].noConflict = function() {
      return (g.fn[ct] = ft), bt._jQueryInterface;
    });
  var It = 'dropdown',
    Dt = 'bs.dropdown',
    wt = '.' + Dt,
    At = '.data-api',
    Nt = g.fn[It],
    Ot = new RegExp('38|40|27'),
    kt = {
      HIDE: 'hide' + wt,
      HIDDEN: 'hidden' + wt,
      SHOW: 'show' + wt,
      SHOWN: 'shown' + wt,
      CLICK: 'click' + wt,
      CLICK_DATA_API: 'click' + wt + At,
      KEYDOWN_DATA_API: 'keydown' + wt + At,
      KEYUP_DATA_API: 'keyup' + wt + At
    },
    Pt = 'disabled',
    Lt = 'show',
    jt = 'dropup',
    Ht = 'dropright',
    Rt = 'dropleft',
    xt = 'dropdown-menu-right',
    Ft = 'position-static',
    Ut = '[data-toggle="dropdown"]',
    Wt = '.dropdown form',
    qt = '.dropdown-menu',
    Mt = '.navbar-nav',
    Kt =
      '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
    Qt = 'top-start',
    Bt = 'top-end',
    Vt = 'bottom-start',
    Yt = 'bottom-end',
    zt = 'right-start',
    Xt = 'left-start',
    $t = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    },
    Gt = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
    },
    Jt = (function() {
      function c(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var t = c.prototype;
      return (
        (t.toggle = function() {
          if (
            !this._element.disabled &&
            !g(this._element).hasClass(Pt)
          ) {
            var t = c._getParentFromElement(this._element),
              e = g(this._menu).hasClass(Lt);
            if ((c._clearMenus(), !e)) {
              var n = { relatedTarget: this._element },
                i = g.Event(kt.SHOW, n);
              if ((g(t).trigger(i), !i.isDefaultPrevented())) {
                if (!this._inNavbar) {
                  if (void 0 === u)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var o = this._element;
                  'parent' === this._config.reference
                    ? (o = t)
                    : _.isElement(this._config.reference) &&
                      ((o = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (o = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary &&
                      g(t).addClass(Ft),
                    (this._popper = new u(
                      o,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                'ontouchstart' in document.documentElement &&
                  0 === g(t).closest(Mt).length &&
                  g(document.body)
                    .children()
                    .on('mouseover', null, g.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  g(this._menu).toggleClass(Lt),
                  g(t)
                    .toggleClass(Lt)
                    .trigger(g.Event(kt.SHOWN, n));
              }
            }
          }
        }),
        (t.show = function() {
          if (
            !(
              this._element.disabled ||
              g(this._element).hasClass(Pt) ||
              g(this._menu).hasClass(Lt)
            )
          ) {
            var t = { relatedTarget: this._element },
              e = g.Event(kt.SHOW, t),
              n = c._getParentFromElement(this._element);
            g(n).trigger(e),
              e.isDefaultPrevented() ||
                (g(this._menu).toggleClass(Lt),
                g(n)
                  .toggleClass(Lt)
                  .trigger(g.Event(kt.SHOWN, t)));
          }
        }),
        (t.hide = function() {
          if (
            !this._element.disabled &&
            !g(this._element).hasClass(Pt) &&
            g(this._menu).hasClass(Lt)
          ) {
            var t = { relatedTarget: this._element },
              e = g.Event(kt.HIDE, t),
              n = c._getParentFromElement(this._element);
            g(n).trigger(e),
              e.isDefaultPrevented() ||
                (g(this._menu).toggleClass(Lt),
                g(n)
                  .toggleClass(Lt)
                  .trigger(g.Event(kt.HIDDEN, t)));
          }
        }),
        (t.dispose = function() {
          g.removeData(this._element, Dt),
            g(this._element).off(wt),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function() {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function() {
          var e = this;
          g(this._element).on(kt.CLICK, function(t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (t._getConfig = function(t) {
          return (
            (t = l(
              {},
              this.constructor.Default,
              g(this._element).data(),
              t
            )),
            _.typeCheckConfig(It, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._getMenuElement = function() {
          if (!this._menu) {
            var t = c._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(qt));
          }
          return this._menu;
        }),
        (t._getPlacement = function() {
          var t = g(this._element.parentNode),
            e = Vt;
          return (
            t.hasClass(jt)
              ? ((e = Qt), g(this._menu).hasClass(xt) && (e = Bt))
              : t.hasClass(Ht)
              ? (e = zt)
              : t.hasClass(Rt)
              ? (e = Xt)
              : g(this._menu).hasClass(xt) && (e = Yt),
            e
          );
        }),
        (t._detectNavbar = function() {
          return 0 < g(this._element).closest('.navbar').length;
        }),
        (t._getOffset = function() {
          var e = this,
            t = {};
          return (
            'function' == typeof this._config.offset
              ? (t.fn = function(t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets, e._element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (t._getPopperConfig = function() {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          };
          return (
            'static' === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            t
          );
        }),
        (c._jQueryInterface = function(e) {
          return this.each(function() {
            var t = g(this).data(Dt);
            if (
              (t ||
                ((t = new c(this, 'object' == typeof e ? e : null)),
                g(this).data(Dt, t)),
              'string' == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        (c._clearMenus = function(t) {
          if (
            !t ||
            (3 !== t.which && ('keyup' !== t.type || 9 === t.which))
          )
            for (
              var e = [].slice.call(document.querySelectorAll(Ut)),
                n = 0,
                i = e.length;
              n < i;
              n++
            ) {
              var o = c._getParentFromElement(e[n]),
                r = g(e[n]).data(Dt),
                s = { relatedTarget: e[n] };
              if (
                (t && 'click' === t.type && (s.clickEvent = t), r)
              ) {
                var a = r._menu;
                if (
                  g(o).hasClass(Lt) &&
                  !(
                    t &&
                    (('click' === t.type &&
                      /input|textarea/i.test(t.target.tagName)) ||
                      ('keyup' === t.type && 9 === t.which)) &&
                    g.contains(o, t.target)
                  )
                ) {
                  var l = g.Event(kt.HIDE, s);
                  g(o).trigger(l),
                    l.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        g(document.body)
                          .children()
                          .off('mouseover', null, g.noop),
                      e[n].setAttribute('aria-expanded', 'false'),
                      g(a).removeClass(Lt),
                      g(o)
                        .removeClass(Lt)
                        .trigger(g.Event(kt.HIDDEN, s)));
                }
              }
            }
        }),
        (c._getParentFromElement = function(t) {
          var e,
            n = _.getSelectorFromElement(t);
          return (
            n && (e = document.querySelector(n)), e || t.parentNode
          );
        }),
        (c._dataApiKeydownHandler = function(t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) ||
                      g(t.target).closest(qt).length))
                )
              : Ot.test(t.which)) &&
            (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !g(this).hasClass(Pt))
          ) {
            var e = c._getParentFromElement(this),
              n = g(e).hasClass(Lt);
            if (n && (!n || (27 !== t.which && 32 !== t.which))) {
              var i = [].slice.call(e.querySelectorAll(Kt));
              if (0 !== i.length) {
                var o = i.indexOf(t.target);
                38 === t.which && 0 < o && o--,
                  40 === t.which && o < i.length - 1 && o++,
                  o < 0 && (o = 0),
                  i[o].focus();
              }
            } else {
              if (27 === t.which) {
                var r = e.querySelector(Ut);
                g(r).trigger('focus');
              }
              g(this).trigger('click');
            }
          }
        }),
        s(c, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return $t;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return Gt;
            }
          }
        ]),
        c
      );
    })();
  g(document)
    .on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler)
    .on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler)
    .on(kt.CLICK_DATA_API + ' ' + kt.KEYUP_DATA_API, Jt._clearMenus)
    .on(kt.CLICK_DATA_API, Ut, function(t) {
      t.preventDefault(),
        t.stopPropagation(),
        Jt._jQueryInterface.call(g(this), 'toggle');
    })
    .on(kt.CLICK_DATA_API, Wt, function(t) {
      t.stopPropagation();
    }),
    (g.fn[It] = Jt._jQueryInterface),
    (g.fn[It].Constructor = Jt),
    (g.fn[It].noConflict = function() {
      return (g.fn[It] = Nt), Jt._jQueryInterface;
    });
  var Zt = 'modal',
    te = 'bs.modal',
    ee = '.' + te,
    ne = g.fn[Zt],
    ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    oe = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    },
    re = {
      HIDE: 'hide' + ee,
      HIDDEN: 'hidden' + ee,
      SHOW: 'show' + ee,
      SHOWN: 'shown' + ee,
      FOCUSIN: 'focusin' + ee,
      RESIZE: 'resize' + ee,
      CLICK_DISMISS: 'click.dismiss' + ee,
      KEYDOWN_DISMISS: 'keydown.dismiss' + ee,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + ee,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + ee,
      CLICK_DATA_API: 'click' + ee + '.data-api'
    },
    se = 'modal-dialog-scrollable',
    ae = 'modal-scrollbar-measure',
    le = 'modal-backdrop',
    ce = 'modal-open',
    he = 'fade',
    ue = 'show',
    fe = '.modal-dialog',
    de = '.modal-body',
    ge = '[data-toggle="modal"]',
    _e = '[data-dismiss="modal"]',
    me = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    pe = '.sticky-top',
    ve = (function() {
      function o(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(fe)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var t = o.prototype;
      return (
        (t.toggle = function(t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (t.show = function(t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            g(this._element).hasClass(he) &&
              (this._isTransitioning = !0);
            var n = g.Event(re.SHOW, { relatedTarget: t });
            g(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(this._element).on(re.CLICK_DISMISS, _e, function(
                  t
                ) {
                  return e.hide(t);
                }),
                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                  g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                    g(t.target).is(e._element) &&
                      (e._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function() {
                  return e._showElement(t);
                }));
          }
        }),
        (t.hide = function(t) {
          var e = this;
          if (
            (t && t.preventDefault(),
            this._isShown && !this._isTransitioning)
          ) {
            var n = g.Event(re.HIDE);
            if (
              (g(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = g(this._element).hasClass(he);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(document).off(re.FOCUSIN),
                g(this._element).removeClass(ue),
                g(this._element).off(re.CLICK_DISMISS),
                g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                i)
              ) {
                var o = _.getTransitionDurationFromElement(
                  this._element
                );
                g(this._element)
                  .one(_.TRANSITION_END, function(t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(o);
              } else this._hideModal();
            }
          }
        }),
        (t.dispose = function() {
          [window, this._element, this._dialog].forEach(function(t) {
            return g(t).off(ee);
          }),
            g(document).off(re.FOCUSIN),
            g.removeData(this._element, te),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function() {
          this._adjustDialog();
        }),
        (t._getConfig = function(t) {
          return (t = l({}, ie, t)), _.typeCheckConfig(Zt, t, oe), t;
        }),
        (t._showElement = function(t) {
          var e = this,
            n = g(this._element).hasClass(he);
          (this._element.parentNode &&
            this._element.parentNode.nodeType ===
              Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            g(this._dialog).hasClass(se)
              ? (this._dialog.querySelector(de).scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && _.reflow(this._element),
            g(this._element).addClass(ue),
            this._config.focus && this._enforceFocus();
          function i() {
            e._config.focus && e._element.focus(),
              (e._isTransitioning = !1),
              g(e._element).trigger(o);
          }
          var o = g.Event(re.SHOWN, { relatedTarget: t });
          if (n) {
            var r = _.getTransitionDurationFromElement(this._dialog);
            g(this._dialog)
              .one(_.TRANSITION_END, i)
              .emulateTransitionEnd(r);
          } else i();
        }),
        (t._enforceFocus = function() {
          var e = this;
          g(document)
            .off(re.FOCUSIN)
            .on(re.FOCUSIN, function(t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === g(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (t._setEscapeEvent = function() {
          var e = this;
          this._isShown && this._config.keyboard
            ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(), e.hide());
              })
            : this._isShown ||
              g(this._element).off(re.KEYDOWN_DISMISS);
        }),
        (t._setResizeEvent = function() {
          var e = this;
          this._isShown
            ? g(window).on(re.RESIZE, function(t) {
                return e.handleUpdate(t);
              })
            : g(window).off(re.RESIZE);
        }),
        (t._hideModal = function() {
          var t = this;
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            (this._isTransitioning = !1),
            this._showBackdrop(function() {
              g(document.body).removeClass(ce),
                t._resetAdjustments(),
                t._resetScrollbar(),
                g(t._element).trigger(re.HIDDEN);
            });
        }),
        (t._removeBackdrop = function() {
          this._backdrop &&
            (g(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function(t) {
          var e = this,
            n = g(this._element).hasClass(he) ? he : '';
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = le),
              n && this._backdrop.classList.add(n),
              g(this._backdrop).appendTo(document.body),
              g(this._element).on(re.CLICK_DISMISS, function(t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ('static' === e._config.backdrop
                      ? e._element.focus()
                      : e.hide());
              }),
              n && _.reflow(this._backdrop),
              g(this._backdrop).addClass(ue),
              !t)
            )
              return;
            if (!n) return void t();
            var i = _.getTransitionDurationFromElement(
              this._backdrop
            );
            g(this._backdrop)
              .one(_.TRANSITION_END, t)
              .emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            g(this._backdrop).removeClass(ue);
            var o = function() {
              e._removeBackdrop(), t && t();
            };
            if (g(this._element).hasClass(he)) {
              var r = _.getTransitionDurationFromElement(
                this._backdrop
              );
              g(this._backdrop)
                .one(_.TRANSITION_END, o)
                .emulateTransitionEnd(r);
            } else o();
          } else t && t();
        }),
        (t._adjustDialog = function() {
          var t =
            this._element.scrollHeight >
            document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft =
              this._scrollbarWidth + 'px'),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight =
                this._scrollbarWidth + 'px');
        }),
        (t._resetAdjustments = function() {
          (this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '');
        }),
        (t._checkScrollbar = function() {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function() {
          var o = this;
          if (this._isBodyOverflowing) {
            var t = [].slice.call(document.querySelectorAll(me)),
              e = [].slice.call(document.querySelectorAll(pe));
            g(t).each(function(t, e) {
              var n = e.style.paddingRight,
                i = g(e).css('padding-right');
              g(e)
                .data('padding-right', n)
                .css(
                  'padding-right',
                  parseFloat(i) + o._scrollbarWidth + 'px'
                );
            }),
              g(e).each(function(t, e) {
                var n = e.style.marginRight,
                  i = g(e).css('margin-right');
                g(e)
                  .data('margin-right', n)
                  .css(
                    'margin-right',
                    parseFloat(i) - o._scrollbarWidth + 'px'
                  );
              });
            var n = document.body.style.paddingRight,
              i = g(document.body).css('padding-right');
            g(document.body)
              .data('padding-right', n)
              .css(
                'padding-right',
                parseFloat(i) + this._scrollbarWidth + 'px'
              );
          }
          g(document.body).addClass(ce);
        }),
        (t._resetScrollbar = function() {
          var t = [].slice.call(document.querySelectorAll(me));
          g(t).each(function(t, e) {
            var n = g(e).data('padding-right');
            g(e).removeData('padding-right'),
              (e.style.paddingRight = n || '');
          });
          var e = [].slice.call(document.querySelectorAll('' + pe));
          g(e).each(function(t, e) {
            var n = g(e).data('margin-right');
            void 0 !== n &&
              g(e)
                .css('margin-right', n)
                .removeData('margin-right');
          });
          var n = g(document.body).data('padding-right');
          g(document.body).removeData('padding-right'),
            (document.body.style.paddingRight = n || '');
        }),
        (t._getScrollbarWidth = function() {
          var t = document.createElement('div');
          (t.className = ae), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (o._jQueryInterface = function(n, i) {
          return this.each(function() {
            var t = g(this).data(te),
              e = l(
                {},
                ie,
                g(this).data(),
                'object' == typeof n && n ? n : {}
              );
            if (
              (t || ((t = new o(this, e)), g(this).data(te, t)),
              'string' == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n](i);
            } else e.show && t.show(i);
          });
        }),
        s(o, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return ie;
            }
          }
        ]),
        o
      );
    })();
  g(document).on(re.CLICK_DATA_API, ge, function(t) {
    var e,
      n = this,
      i = _.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = g(e).data(te)
      ? 'toggle'
      : l({}, g(e).data(), g(this).data());
    ('A' !== this.tagName && 'AREA' !== this.tagName) ||
      t.preventDefault();
    var r = g(e).one(re.SHOW, function(t) {
      t.isDefaultPrevented() ||
        r.one(re.HIDDEN, function() {
          g(n).is(':visible') && n.focus();
        });
    });
    ve._jQueryInterface.call(g(e), o, this);
  }),
    (g.fn[Zt] = ve._jQueryInterface),
    (g.fn[Zt].Constructor = ve),
    (g.fn[Zt].noConflict = function() {
      return (g.fn[Zt] = ne), ve._jQueryInterface;
    });
  var Ee = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href'
    ],
    ye = {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
      a: ['target', 'href', 'title', 'rel'],
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
      img: ['src', 'alt', 'title', 'width', 'height'],
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
    Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function Se(t, s, e) {
    if (0 === t.length) return t;
    if (e && 'function' == typeof e) return e(t);
    for (
      var n = new window.DOMParser().parseFromString(t, 'text/html'),
        a = Object.keys(s),
        l = [].slice.call(n.body.querySelectorAll('*')),
        i = function(t, e) {
          var n = l[t],
            i = n.nodeName.toLowerCase();
          if (-1 === a.indexOf(n.nodeName.toLowerCase()))
            return n.parentNode.removeChild(n), 'continue';
          var o = [].slice.call(n.attributes),
            r = [].concat(s['*'] || [], s[i] || []);
          o.forEach(function(t) {
            !(function(t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Ee.indexOf(n) ||
                  Boolean(
                    t.nodeValue.match(Ce) || t.nodeValue.match(Te)
                  )
                );
              for (
                var i = e.filter(function(t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, r) && n.removeAttribute(t.nodeName);
          });
        },
        o = 0,
        r = l.length;
      o < r;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var be = 'tooltip',
    Ie = 'bs.tooltip',
    De = '.' + Ie,
    we = g.fn[be],
    Ae = 'bs-tooltip',
    Ne = new RegExp('(^|\\s)' + Ae + '\\S+', 'g'),
    Oe = ['sanitize', 'whiteList', 'sanitizeFn'],
    ke = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object'
    },
    Pe = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    },
    Le = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: ye
    },
    je = 'show',
    He = 'out',
    Re = {
      HIDE: 'hide' + De,
      HIDDEN: 'hidden' + De,
      SHOW: 'show' + De,
      SHOWN: 'shown' + De,
      INSERTED: 'inserted' + De,
      CLICK: 'click' + De,
      FOCUSIN: 'focusin' + De,
      FOCUSOUT: 'focusout' + De,
      MOUSEENTER: 'mouseenter' + De,
      MOUSELEAVE: 'mouseleave' + De
    },
    xe = 'fade',
    Fe = 'show',
    Ue = '.tooltip-inner',
    We = '.arrow',
    qe = 'hover',
    Me = 'focus',
    Ke = 'click',
    Qe = 'manual',
    Be = (function() {
      function i(t, e) {
        if (void 0 === u)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.enable = function() {
          this._isEnabled = !0;
        }),
        (t.disable = function() {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function() {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function(t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = g(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                g(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (g(this.getTipElement()).hasClass(Fe))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (t.dispose = function() {
          clearTimeout(this._timeout),
            g.removeData(this.element, this.constructor.DATA_KEY),
            g(this.element).off(this.constructor.EVENT_KEY),
            g(this.element)
              .closest('.modal')
              .off('hide.bs.modal'),
            this.tip && g(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null) !== this._popper &&
              this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function() {
          var e = this;
          if ('none' === g(this.element).css('display'))
            throw new Error('Please use show on visible elements');
          var t = g.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            g(this.element).trigger(t);
            var n = _.findShadowRoot(this.element),
              i = g.contains(
                null !== n
                  ? n
                  : this.element.ownerDocument.documentElement,
                this.element
              );
            if (t.isDefaultPrevented() || !i) return;
            var o = this.getTipElement(),
              r = _.getUID(this.constructor.NAME);
            o.setAttribute('id', r),
              this.element.setAttribute('aria-describedby', r),
              this.setContent(),
              this.config.animation && g(o).addClass(xe);
            var s =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = this._getContainer();
            g(o).data(this.constructor.DATA_KEY, this),
              g.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || g(o).appendTo(l),
              g(this.element).trigger(
                this.constructor.Event.INSERTED
              ),
              (this._popper = new u(this.element, o, {
                placement: a,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: We },
                  preventOverflow: {
                    boundariesElement: this.config.boundary
                  }
                },
                onCreate: function(t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function(t) {
                  return e._handlePopperPlacementChange(t);
                }
              })),
              g(o).addClass(Fe),
              'ontouchstart' in document.documentElement &&
                g(document.body)
                  .children()
                  .on('mouseover', null, g.noop);
            var c = function() {
              e.config.animation && e._fixTransition();
              var t = e._hoverState;
              (e._hoverState = null),
                g(e.element).trigger(e.constructor.Event.SHOWN),
                t === He && e._leave(null, e);
            };
            if (g(this.tip).hasClass(xe)) {
              var h = _.getTransitionDurationFromElement(this.tip);
              g(this.tip)
                .one(_.TRANSITION_END, c)
                .emulateTransitionEnd(h);
            } else c();
          }
        }),
        (t.hide = function(t) {
          function e() {
            n._hoverState !== je &&
              i.parentNode &&
              i.parentNode.removeChild(i),
              n._cleanTipClass(),
              n.element.removeAttribute('aria-describedby'),
              g(n.element).trigger(n.constructor.Event.HIDDEN),
              null !== n._popper && n._popper.destroy(),
              t && t();
          }
          var n = this,
            i = this.getTipElement(),
            o = g.Event(this.constructor.Event.HIDE);
          if ((g(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (g(i).removeClass(Fe),
              'ontouchstart' in document.documentElement &&
                g(document.body)
                  .children()
                  .off('mouseover', null, g.noop),
              (this._activeTrigger[Ke] = !1),
              (this._activeTrigger[Me] = !1),
              (this._activeTrigger[qe] = !1),
              g(this.tip).hasClass(xe))
            ) {
              var r = _.getTransitionDurationFromElement(i);
              g(i)
                .one(_.TRANSITION_END, e)
                .emulateTransitionEnd(r);
            } else e();
            this._hoverState = '';
          }
        }),
        (t.update = function() {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function() {
          return Boolean(this.getTitle());
        }),
        (t.addAttachmentClass = function(t) {
          g(this.getTipElement()).addClass(Ae + '-' + t);
        }),
        (t.getTipElement = function() {
          return (
            (this.tip = this.tip || g(this.config.template)[0]),
            this.tip
          );
        }),
        (t.setContent = function() {
          var t = this.getTipElement();
          this.setElementContent(
            g(t.querySelectorAll(Ue)),
            this.getTitle()
          ),
            g(t).removeClass(xe + ' ' + Fe);
        }),
        (t.setElementContent = function(t, e) {
          'object' != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = Se(
                    e,
                    this.config.whiteList,
                    this.config.sanitizeFn
                  )),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? g(e)
                .parent()
                .is(t) || t.empty().append(e)
            : t.text(g(e).text());
        }),
        (t.getTitle = function() {
          var t = this.element.getAttribute('data-original-title');
          return (t =
            t ||
            ('function' == typeof this.config.title
              ? this.config.title.call(this.element)
              : this.config.title));
        }),
        (t._getOffset = function() {
          var e = this,
            t = {};
          return (
            'function' == typeof this.config.offset
              ? (t.fn = function(t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e.config.offset(t.offsets, e.element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (t._getContainer = function() {
          return !1 === this.config.container
            ? document.body
            : _.isElement(this.config.container)
            ? g(this.config.container)
            : g(document).find(this.config.container);
        }),
        (t._getAttachment = function(t) {
          return Pe[t.toUpperCase()];
        }),
        (t._setListeners = function() {
          var i = this;
          this.config.trigger.split(' ').forEach(function(t) {
            if ('click' === t)
              g(i.element).on(
                i.constructor.Event.CLICK,
                i.config.selector,
                function(t) {
                  return i.toggle(t);
                }
              );
            else if (t !== Qe) {
              var e =
                  t === qe
                    ? i.constructor.Event.MOUSEENTER
                    : i.constructor.Event.FOCUSIN,
                n =
                  t === qe
                    ? i.constructor.Event.MOUSELEAVE
                    : i.constructor.Event.FOCUSOUT;
              g(i.element)
                .on(e, i.config.selector, function(t) {
                  return i._enter(t);
                })
                .on(n, i.config.selector, function(t) {
                  return i._leave(t);
                });
            }
          }),
            g(this.element)
              .closest('.modal')
              .on('hide.bs.modal', function() {
                i.element && i.hide();
              }),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: 'manual',
                  selector: ''
                }))
              : this._fixTitle();
        }),
        (t._fixTitle = function() {
          var t = typeof this.element.getAttribute(
            'data-original-title'
          );
          (!this.element.getAttribute('title') && 'string' == t) ||
            (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || ''
            ),
            this.element.setAttribute('title', ''));
        }),
        (t._enter = function(t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || g(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            g(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger['focusin' === t.type ? Me : qe] = !0),
            g(e.getTipElement()).hasClass(Fe) || e._hoverState === je
              ? (e._hoverState = je)
              : (clearTimeout(e._timeout),
                (e._hoverState = je),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function() {
                      e._hoverState === je && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (t._leave = function(t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || g(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            g(t.currentTarget).data(n, e)),
            t &&
              (e._activeTrigger[
                'focusout' === t.type ? Me : qe
              ] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = He),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function() {
                    e._hoverState === He && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (t._isWithActiveTrigger = function() {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (t._getConfig = function(t) {
          var e = g(this.element).data();
          return (
            Object.keys(e).forEach(function(t) {
              -1 !== Oe.indexOf(t) && delete e[t];
            }),
            'number' ==
              typeof (t = l(
                {},
                this.constructor.Default,
                e,
                'object' == typeof t && t ? t : {}
              )).delay &&
              (t.delay = { show: t.delay, hide: t.delay }),
            'number' == typeof t.title &&
              (t.title = t.title.toString()),
            'number' == typeof t.content &&
              (t.content = t.content.toString()),
            _.typeCheckConfig(be, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Se(
                t.template,
                t.whiteList,
                t.sanitizeFn
              )),
            t
          );
        }),
        (t._getDelegateConfig = function() {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (t._cleanTipClass = function() {
          var t = g(this.getTipElement()),
            e = t.attr('class').match(Ne);
          null !== e && e.length && t.removeClass(e.join(''));
        }),
        (t._handlePopperPlacementChange = function(t) {
          var e = t.instance;
          (this.tip = e.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (t._fixTransition = function() {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute('x-placement') &&
            (g(t).removeClass(xe),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this).data(Ie),
              e = 'object' == typeof n && n;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), g(this).data(Ie, t)),
              'string' == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return Le;
            }
          },
          {
            key: 'NAME',
            get: function() {
              return be;
            }
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return Ie;
            }
          },
          {
            key: 'Event',
            get: function() {
              return Re;
            }
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return De;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return ke;
            }
          }
        ]),
        i
      );
    })();
  (g.fn[be] = Be._jQueryInterface),
    (g.fn[be].Constructor = Be),
    (g.fn[be].noConflict = function() {
      return (g.fn[be] = we), Be._jQueryInterface;
    });
  var Ve = 'popover',
    Ye = 'bs.popover',
    ze = '.' + Ye,
    Xe = g.fn[Ve],
    $e = 'bs-popover',
    Ge = new RegExp('(^|\\s)' + $e + '\\S+', 'g'),
    Je = l({}, Be.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    Ze = l({}, Be.DefaultType, {
      content: '(string|element|function)'
    }),
    tn = 'fade',
    en = 'show',
    nn = '.popover-header',
    on = '.popover-body',
    rn = {
      HIDE: 'hide' + ze,
      HIDDEN: 'hidden' + ze,
      SHOW: 'show' + ze,
      SHOWN: 'shown' + ze,
      INSERTED: 'inserted' + ze,
      CLICK: 'click' + ze,
      FOCUSIN: 'focusin' + ze,
      FOCUSOUT: 'focusout' + ze,
      MOUSEENTER: 'mouseenter' + ze,
      MOUSELEAVE: 'mouseleave' + ze
    },
    sn = (function(t) {
      function i() {
        return t.apply(this, arguments) || this;
      }
      !(function(t, e) {
        (t.prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e);
      })(i, t);
      var e = i.prototype;
      return (
        (e.isWithContent = function() {
          return this.getTitle() || this._getContent();
        }),
        (e.addAttachmentClass = function(t) {
          g(this.getTipElement()).addClass($e + '-' + t);
        }),
        (e.getTipElement = function() {
          return (
            (this.tip = this.tip || g(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function() {
          var t = g(this.getTipElement());
          this.setElementContent(t.find(nn), this.getTitle());
          var e = this._getContent();
          'function' == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(on), e),
            t.removeClass(tn + ' ' + en);
        }),
        (e._getContent = function() {
          return (
            this.element.getAttribute('data-content') ||
            this.config.content
          );
        }),
        (e._cleanTipClass = function() {
          var t = g(this.getTipElement()),
            e = t.attr('class').match(Ge);
          null !== e && 0 < e.length && t.removeClass(e.join(''));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this).data(Ye),
              e = 'object' == typeof n ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), g(this).data(Ye, t)),
              'string' == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return Je;
            }
          },
          {
            key: 'NAME',
            get: function() {
              return Ve;
            }
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return Ye;
            }
          },
          {
            key: 'Event',
            get: function() {
              return rn;
            }
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return ze;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return Ze;
            }
          }
        ]),
        i
      );
    })(Be);
  (g.fn[Ve] = sn._jQueryInterface),
    (g.fn[Ve].Constructor = sn),
    (g.fn[Ve].noConflict = function() {
      return (g.fn[Ve] = Xe), sn._jQueryInterface;
    });
  var an = 'scrollspy',
    ln = 'bs.scrollspy',
    cn = '.' + ln,
    hn = g.fn[an],
    un = { offset: 10, method: 'auto', target: '' },
    fn = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    },
    dn = {
      ACTIVATE: 'activate' + cn,
      SCROLL: 'scroll' + cn,
      LOAD_DATA_API: 'load' + cn + '.data-api'
    },
    gn = 'dropdown-item',
    _n = 'active',
    mn = '[data-spy="scroll"]',
    pn = '.nav, .list-group',
    vn = '.nav-link',
    En = '.nav-item',
    yn = '.list-group-item',
    Cn = '.dropdown',
    Tn = '.dropdown-item',
    Sn = '.dropdown-toggle',
    bn = 'offset',
    In = 'position',
    Dn = (function() {
      function n(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = 'BODY' === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            ' ' +
            vn +
            ',' +
            this._config.target +
            ' ' +
            yn +
            ',' +
            this._config.target +
            ' ' +
            Tn),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          g(this._scrollElement).on(dn.SCROLL, function(t) {
            return n._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var t = n.prototype;
      return (
        (t.refresh = function() {
          var e = this,
            t =
              this._scrollElement === this._scrollElement.window
                ? bn
                : In,
            o =
              'auto' === this._config.method
                ? t
                : this._config.method,
            r = o === In ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function(t) {
                var e,
                  n = _.getSelectorFromElement(t);
                if ((n && (e = document.querySelector(n)), e)) {
                  var i = e.getBoundingClientRect();
                  if (i.width || i.height)
                    return [g(e)[o]().top + r, n];
                }
                return null;
              })
              .filter(function(t) {
                return t;
              })
              .sort(function(t, e) {
                return t[0] - e[0];
              })
              .forEach(function(t) {
                e._offsets.push(t[0]), e._targets.push(t[1]);
              });
        }),
        (t.dispose = function() {
          g.removeData(this._element, ln),
            g(this._scrollElement).off(cn),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function(t) {
          if (
            'string' !=
            typeof (t = l({}, un, 'object' == typeof t && t ? t : {}))
              .target
          ) {
            var e = g(t.target).attr('id');
            e || ((e = _.getUID(an)), g(t.target).attr('id', e)),
              (t.target = '#' + e);
          }
          return _.typeCheckConfig(an, t, fn), t;
        }),
        (t._getScrollTop = function() {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function() {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (t._getOffsetHeight = function() {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function() {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                (void 0 === this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (t._activate = function(e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(',').map(function(t) {
              return (
                t +
                '[data-target="' +
                e +
                '"],' +
                t +
                '[href="' +
                e +
                '"]'
              );
            }),
            n = g(
              [].slice.call(document.querySelectorAll(t.join(',')))
            );
          n.hasClass(gn)
            ? (n
                .closest(Cn)
                .find(Sn)
                .addClass(_n),
              n.addClass(_n))
            : (n.addClass(_n),
              n
                .parents(pn)
                .prev(vn + ', ' + yn)
                .addClass(_n),
              n
                .parents(pn)
                .prev(En)
                .children(vn)
                .addClass(_n)),
            g(this._scrollElement).trigger(dn.ACTIVATE, {
              relatedTarget: e
            });
        }),
        (t._clear = function() {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function(t) {
              return t.classList.contains(_n);
            })
            .forEach(function(t) {
              return t.classList.remove(_n);
            });
        }),
        (n._jQueryInterface = function(e) {
          return this.each(function() {
            var t = g(this).data(ln);
            if (
              (t ||
                ((t = new n(this, 'object' == typeof e && e)),
                g(this).data(ln, t)),
              'string' == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        s(n, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return un;
            }
          }
        ]),
        n
      );
    })();
  g(window).on(dn.LOAD_DATA_API, function() {
    for (
      var t = [].slice.call(document.querySelectorAll(mn)),
        e = t.length;
      e--;

    ) {
      var n = g(t[e]);
      Dn._jQueryInterface.call(n, n.data());
    }
  }),
    (g.fn[an] = Dn._jQueryInterface),
    (g.fn[an].Constructor = Dn),
    (g.fn[an].noConflict = function() {
      return (g.fn[an] = hn), Dn._jQueryInterface;
    });
  var wn = 'bs.tab',
    An = '.' + wn,
    Nn = g.fn.tab,
    On = {
      HIDE: 'hide' + An,
      HIDDEN: 'hidden' + An,
      SHOW: 'show' + An,
      SHOWN: 'shown' + An,
      CLICK_DATA_API: 'click' + An + '.data-api'
    },
    kn = 'dropdown-menu',
    Pn = 'active',
    Ln = 'disabled',
    jn = 'fade',
    Hn = 'show',
    Rn = '.dropdown',
    xn = '.nav, .list-group',
    Fn = '.active',
    Un = '> li > .active',
    Wn =
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    qn = '.dropdown-toggle',
    Mn = '> .dropdown-menu .active',
    Kn = (function() {
      function i(t) {
        this._element = t;
      }
      var t = i.prototype;
      return (
        (t.show = function() {
          var n = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType ===
                  Node.ELEMENT_NODE &&
                g(this._element).hasClass(Pn)) ||
              g(this._element).hasClass(Ln)
            )
          ) {
            var t,
              i,
              e = g(this._element).closest(xn)[0],
              o = _.getSelectorFromElement(this._element);
            if (e) {
              var r =
                'UL' === e.nodeName || 'OL' === e.nodeName ? Un : Fn;
              i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
            }
            var s = g.Event(On.HIDE, {
                relatedTarget: this._element
              }),
              a = g.Event(On.SHOW, { relatedTarget: i });
            if (
              (i && g(i).trigger(s),
              g(this._element).trigger(a),
              !a.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (t = document.querySelector(o)),
                this._activate(this._element, e);
              var l = function() {
                var t = g.Event(On.HIDDEN, {
                    relatedTarget: n._element
                  }),
                  e = g.Event(On.SHOWN, { relatedTarget: i });
                g(i).trigger(t), g(n._element).trigger(e);
              };
              t ? this._activate(t, t.parentNode, l) : l();
            }
          }
        }),
        (t.dispose = function() {
          g.removeData(this._element, wn), (this._element = null);
        }),
        (t._activate = function(t, e, n) {
          function i() {
            return o._transitionComplete(t, r, n);
          }
          var o = this,
            r = (!e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
              ? g(e).children(Fn)
              : g(e).find(Un))[0],
            s = n && r && g(r).hasClass(jn);
          if (r && s) {
            var a = _.getTransitionDurationFromElement(r);
            g(r)
              .removeClass(Hn)
              .one(_.TRANSITION_END, i)
              .emulateTransitionEnd(a);
          } else i();
        }),
        (t._transitionComplete = function(t, e, n) {
          if (e) {
            g(e).removeClass(Pn);
            var i = g(e.parentNode).find(Mn)[0];
            i && g(i).removeClass(Pn),
              'tab' === e.getAttribute('role') &&
                e.setAttribute('aria-selected', !1);
          }
          if (
            (g(t).addClass(Pn),
            'tab' === t.getAttribute('role') &&
              t.setAttribute('aria-selected', !0),
            _.reflow(t),
            t.classList.contains(jn) && t.classList.add(Hn),
            t.parentNode && g(t.parentNode).hasClass(kn))
          ) {
            var o = g(t).closest(Rn)[0];
            if (o) {
              var r = [].slice.call(o.querySelectorAll(qn));
              g(r).addClass(Pn);
            }
            t.setAttribute('aria-expanded', !0);
          }
          n && n();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this),
              e = t.data(wn);
            if (
              (e || ((e = new i(this)), t.data(wn, e)),
              'string' == typeof n)
            ) {
              if (void 0 === e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          }
        ]),
        i
      );
    })();
  g(document).on(On.CLICK_DATA_API, Wn, function(t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), 'show');
  }),
    (g.fn.tab = Kn._jQueryInterface),
    (g.fn.tab.Constructor = Kn),
    (g.fn.tab.noConflict = function() {
      return (g.fn.tab = Nn), Kn._jQueryInterface;
    });
  var Qn = 'toast',
    Bn = 'bs.toast',
    Vn = '.' + Bn,
    Yn = g.fn[Qn],
    zn = {
      CLICK_DISMISS: 'click.dismiss' + Vn,
      HIDE: 'hide' + Vn,
      HIDDEN: 'hidden' + Vn,
      SHOW: 'show' + Vn,
      SHOWN: 'shown' + Vn
    },
    Xn = 'fade',
    $n = 'hide',
    Gn = 'show',
    Jn = 'showing',
    Zn = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    },
    ti = { animation: !0, autohide: !0, delay: 500 },
    ei = '[data-dismiss="toast"]',
    ni = (function() {
      function i(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var t = i.prototype;
      return (
        (t.show = function() {
          var t = this;
          g(this._element).trigger(zn.SHOW),
            this._config.animation && this._element.classList.add(Xn);
          function e() {
            t._element.classList.remove(Jn),
              t._element.classList.add(Gn),
              g(t._element).trigger(zn.SHOWN),
              t._config.autohide && t.hide();
          }
          if (
            (this._element.classList.remove($n),
            this._element.classList.add(Jn),
            this._config.animation)
          ) {
            var n = _.getTransitionDurationFromElement(this._element);
            g(this._element)
              .one(_.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (t.hide = function(t) {
          var e = this;
          this._element.classList.contains(Gn) &&
            (g(this._element).trigger(zn.HIDE),
            t
              ? this._close()
              : (this._timeout = setTimeout(function() {
                  e._close();
                }, this._config.delay)));
        }),
        (t.dispose = function() {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(Gn) &&
              this._element.classList.remove(Gn),
            g(this._element).off(zn.CLICK_DISMISS),
            g.removeData(this._element, Bn),
            (this._element = null),
            (this._config = null);
        }),
        (t._getConfig = function(t) {
          return (
            (t = l(
              {},
              ti,
              g(this._element).data(),
              'object' == typeof t && t ? t : {}
            )),
            _.typeCheckConfig(Qn, t, this.constructor.DefaultType),
            t
          );
        }),
        (t._setListeners = function() {
          var t = this;
          g(this._element).on(zn.CLICK_DISMISS, ei, function() {
            return t.hide(!0);
          });
        }),
        (t._close = function() {
          function t() {
            e._element.classList.add($n),
              g(e._element).trigger(zn.HIDDEN);
          }
          var e = this;
          if (
            (this._element.classList.remove(Gn),
            this._config.animation)
          ) {
            var n = _.getTransitionDurationFromElement(this._element);
            g(this._element)
              .one(_.TRANSITION_END, t)
              .emulateTransitionEnd(n);
          } else t();
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this),
              e = t.data(Bn);
            if (
              (e ||
                ((e = new i(this, 'object' == typeof n && n)),
                t.data(Bn, e)),
              'string' == typeof n)
            ) {
              if (void 0 === e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n](this);
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return Zn;
            }
          },
          {
            key: 'Default',
            get: function() {
              return ti;
            }
          }
        ]),
        i
      );
    })();
  (g.fn[Qn] = ni._jQueryInterface),
    (g.fn[Qn].Constructor = ni),
    (g.fn[Qn].noConflict = function() {
      return (g.fn[Qn] = Yn), ni._jQueryInterface;
    }),
    (function() {
      if (void 0 === g)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = g.fn.jquery.split(' ')[0].split('.');
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(),
    (t.Util = _),
    (t.Alert = p),
    (t.Button = P),
    (t.Carousel = lt),
    (t.Collapse = bt),
    (t.Dropdown = Jt),
    (t.Modal = ve),
    (t.Popover = sn),
    (t.Scrollspy = Dn),
    (t.Tab = Kn),
    (t.Toast = ni),
    (t.Tooltip = Be),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery', 'popper.js'], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function(t, g, u) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function r(o) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(s);
      'function' == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(s).filter(function(t) {
            return Object.getOwnPropertyDescriptor(s, t).enumerable;
          })
        )),
        e.forEach(function(t) {
          var e, n, i;
          (e = o),
            (i = s[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[n] = i);
        });
    }
    return o;
  }
  (g = g && g.hasOwnProperty('default') ? g.default : g),
    (u = u && u.hasOwnProperty('default') ? u.default : u);
  var e = 'transitionend';
  var _ = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function(t) {
      for (
        ;
        (t += ~~(1e6 * Math.random())), document.getElementById(t);

      );
      return t;
    },
    getSelectorFromElement: function(t) {
      var e = t.getAttribute('data-target');
      if (!e || '#' === e) {
        var n = t.getAttribute('href');
        e = n && '#' !== n ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function(t) {
      if (!t) return 0;
      var e = g(t).css('transition-duration'),
        n = g(t).css('transition-delay'),
        i = parseFloat(e),
        o = parseFloat(n);
      return i || o
        ? ((e = e.split(',')[0]),
          (n = n.split(',')[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function(t) {
      g(t).trigger(e);
    },
    supportsTransitionEnd: function() {
      return Boolean(e);
    },
    isElement: function(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function(t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            s = e[i],
            r =
              s && _.isElement(s)
                ? 'element'
                : ((a = s),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(r))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                r +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function(t) {
      if (!document.documentElement.attachShadow) return null;
      if ('function' != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? _.findShadowRoot(t.parentNode)
          : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  (g.fn.emulateTransitionEnd = function(t) {
    var e = this,
      n = !1;
    return (
      g(this).one(_.TRANSITION_END, function() {
        n = !0;
      }),
      setTimeout(function() {
        n || _.triggerTransitionEnd(e);
      }, t),
      this
    );
  }),
    (g.event.special[_.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function(t) {
        if (g(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      }
    });
  var n,
    o = 'alert',
    a = 'bs.alert',
    l = '.' + a,
    c = g.fn[o],
    h = {
      CLOSE: 'close' + l,
      CLOSED: 'closed' + l,
      CLICK_DATA_API: 'click' + l + '.data-api'
    },
    f =
      (((n = d.prototype).close = function(t) {
        var e = this._element;
        t && (e = this._getRootElement(t)),
          this._triggerCloseEvent(e).isDefaultPrevented() ||
            this._removeElement(e);
      }),
      (n.dispose = function() {
        g.removeData(this._element, a), (this._element = null);
      }),
      (n._getRootElement = function(t) {
        var e = _.getSelectorFromElement(t),
          n = !1;
        return (
          e && (n = document.querySelector(e)),
          (n = n || g(t).closest('.alert')[0])
        );
      }),
      (n._triggerCloseEvent = function(t) {
        var e = g.Event(h.CLOSE);
        return g(t).trigger(e), e;
      }),
      (n._removeElement = function(e) {
        var n = this;
        if ((g(e).removeClass('show'), g(e).hasClass('fade'))) {
          var t = _.getTransitionDurationFromElement(e);
          g(e)
            .one(_.TRANSITION_END, function(t) {
              return n._destroyElement(e, t);
            })
            .emulateTransitionEnd(t);
        } else this._destroyElement(e);
      }),
      (n._destroyElement = function(t) {
        g(t)
          .detach()
          .trigger(h.CLOSED)
          .remove();
      }),
      (d._jQueryInterface = function(n) {
        return this.each(function() {
          var t = g(this),
            e = t.data(a);
          e || ((e = new d(this)), t.data(a, e)),
            'close' === n && e[n](this);
        });
      }),
      (d._handleDismiss = function(e) {
        return function(t) {
          t && t.preventDefault(), e.close(this);
        };
      }),
      s(d, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        }
      ]),
      d);
  function d(t) {
    this._element = t;
  }
  g(document).on(
    h.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    f._handleDismiss(new f())
  ),
    (g.fn[o] = f._jQueryInterface),
    (g.fn[o].Constructor = f),
    (g.fn[o].noConflict = function() {
      return (g.fn[o] = c), f._jQueryInterface;
    });
  var m,
    p = 'button',
    v = 'bs.button',
    E = '.' + v,
    y = '.data-api',
    C = g.fn[p],
    T = 'active',
    S = '[data-toggle^="button"]',
    b = '.btn',
    I = {
      CLICK_DATA_API: 'click' + E + y,
      FOCUS_BLUR_DATA_API: 'focus' + E + y + ' blur' + E + y
    },
    D =
      (((m = w.prototype).toggle = function() {
        var t = !0,
          e = !0,
          n = g(this._element).closest('[data-toggle="buttons"]')[0];
        if (n) {
          var i = this._element.querySelector(
            'input:not([type="hidden"])'
          );
          if (i) {
            if ('radio' === i.type)
              if (i.checked && this._element.classList.contains(T))
                t = !1;
              else {
                var o = n.querySelector('.active');
                o && g(o).removeClass(T);
              }
            if (t) {
              if (
                i.hasAttribute('disabled') ||
                n.hasAttribute('disabled') ||
                i.classList.contains('disabled') ||
                n.classList.contains('disabled')
              )
                return;
              (i.checked = !this._element.classList.contains(T)),
                g(i).trigger('change');
            }
            i.focus(), (e = !1);
          }
        }
        e &&
          this._element.setAttribute(
            'aria-pressed',
            !this._element.classList.contains(T)
          ),
          t && g(this._element).toggleClass(T);
      }),
      (m.dispose = function() {
        g.removeData(this._element, v), (this._element = null);
      }),
      (w._jQueryInterface = function(e) {
        return this.each(function() {
          var t = g(this).data(v);
          t || ((t = new w(this)), g(this).data(v, t)),
            'toggle' === e && t[e]();
        });
      }),
      s(w, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        }
      ]),
      w);
  function w(t) {
    this._element = t;
  }
  g(document)
    .on(I.CLICK_DATA_API, S, function(t) {
      t.preventDefault();
      var e = t.target;
      g(e).hasClass('btn') || (e = g(e).closest(b)),
        D._jQueryInterface.call(g(e), 'toggle');
    })
    .on(I.FOCUS_BLUR_DATA_API, S, function(t) {
      var e = g(t.target).closest(b)[0];
      g(e).toggleClass('focus', /^focus(in)?$/.test(t.type));
    }),
    (g.fn[p] = D._jQueryInterface),
    (g.fn[p].Constructor = D),
    (g.fn[p].noConflict = function() {
      return (g.fn[p] = C), D._jQueryInterface;
    });
  var A,
    N = 'carousel',
    O = 'bs.carousel',
    k = '.' + O,
    P = '.data-api',
    L = g.fn[N],
    j = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0
    },
    H = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    },
    R = 'next',
    x = 'prev',
    F = {
      SLIDE: 'slide' + k,
      SLID: 'slid' + k,
      KEYDOWN: 'keydown' + k,
      MOUSEENTER: 'mouseenter' + k,
      MOUSELEAVE: 'mouseleave' + k,
      TOUCHSTART: 'touchstart' + k,
      TOUCHMOVE: 'touchmove' + k,
      TOUCHEND: 'touchend' + k,
      POINTERDOWN: 'pointerdown' + k,
      POINTERUP: 'pointerup' + k,
      DRAG_START: 'dragstart' + k,
      LOAD_DATA_API: 'load' + k + P,
      CLICK_DATA_API: 'click' + k + P
    },
    U = 'active',
    W = '.active.carousel-item',
    q = { TOUCH: 'touch', PEN: 'pen' },
    M =
      (((A = K.prototype).next = function() {
        this._isSliding || this._slide(R);
      }),
      (A.nextWhenVisible = function() {
        !document.hidden &&
          g(this._element).is(':visible') &&
          'hidden' !== g(this._element).css('visibility') &&
          this.next();
      }),
      (A.prev = function() {
        this._isSliding || this._slide(x);
      }),
      (A.pause = function(t) {
        t || (this._isPaused = !0),
          this._element.querySelector(
            '.carousel-item-next, .carousel-item-prev'
          ) &&
            (_.triggerTransitionEnd(this._element), this.cycle(!0)),
          clearInterval(this._interval),
          (this._interval = null);
      }),
      (A.cycle = function(t) {
        t || (this._isPaused = !1),
          this._interval &&
            (clearInterval(this._interval), (this._interval = null)),
          this._config.interval &&
            !this._isPaused &&
            (this._interval = setInterval(
              (document.visibilityState
                ? this.nextWhenVisible
                : this.next
              ).bind(this),
              this._config.interval
            ));
      }),
      (A.to = function(t) {
        var e = this;
        this._activeElement = this._element.querySelector(W);
        var n = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0))
          if (this._isSliding)
            g(this._element).one(F.SLID, function() {
              return e.to(t);
            });
          else {
            if (n === t) return this.pause(), void this.cycle();
            var i = n < t ? R : x;
            this._slide(i, this._items[t]);
          }
      }),
      (A.dispose = function() {
        g(this._element).off(k),
          g.removeData(this._element, O),
          (this._items = null),
          (this._config = null),
          (this._element = null),
          (this._interval = null),
          (this._isPaused = null),
          (this._isSliding = null),
          (this._activeElement = null),
          (this._indicatorsElement = null);
      }),
      (A._getConfig = function(t) {
        return (t = r({}, j, t)), _.typeCheckConfig(N, t, H), t;
      }),
      (A._handleSwipe = function() {
        var t = Math.abs(this.touchDeltaX);
        if (!(t <= 40)) {
          var e = t / this.touchDeltaX;
          0 < e && this.prev(), e < 0 && this.next();
        }
      }),
      (A._addEventListeners = function() {
        var e = this;
        this._config.keyboard &&
          g(this._element).on(F.KEYDOWN, function(t) {
            return e._keydown(t);
          }),
          'hover' === this._config.pause &&
            g(this._element)
              .on(F.MOUSEENTER, function(t) {
                return e.pause(t);
              })
              .on(F.MOUSELEAVE, function(t) {
                return e.cycle(t);
              }),
          this._config.touch && this._addTouchEventListeners();
      }),
      (A._addTouchEventListeners = function() {
        var n = this;
        if (this._touchSupported) {
          var e = function(t) {
              n._pointerEvent &&
              q[t.originalEvent.pointerType.toUpperCase()]
                ? (n.touchStartX = t.originalEvent.clientX)
                : n._pointerEvent ||
                  (n.touchStartX =
                    t.originalEvent.touches[0].clientX);
            },
            i = function(t) {
              n._pointerEvent &&
                q[t.originalEvent.pointerType.toUpperCase()] &&
                (n.touchDeltaX =
                  t.originalEvent.clientX - n.touchStartX),
                n._handleSwipe(),
                'hover' === n._config.pause &&
                  (n.pause(),
                  n.touchTimeout && clearTimeout(n.touchTimeout),
                  (n.touchTimeout = setTimeout(function(t) {
                    return n.cycle(t);
                  }, 500 + n._config.interval)));
            };
          g(this._element.querySelectorAll('.carousel-item img')).on(
            F.DRAG_START,
            function(t) {
              return t.preventDefault();
            }
          ),
            this._pointerEvent
              ? (g(this._element).on(F.POINTERDOWN, function(t) {
                  return e(t);
                }),
                g(this._element).on(F.POINTERUP, function(t) {
                  return i(t);
                }),
                this._element.classList.add('pointer-event'))
              : (g(this._element).on(F.TOUCHSTART, function(t) {
                  return e(t);
                }),
                g(this._element).on(F.TOUCHMOVE, function(t) {
                  var e;
                  (e = t).originalEvent.touches &&
                  1 < e.originalEvent.touches.length
                    ? (n.touchDeltaX = 0)
                    : (n.touchDeltaX =
                        e.originalEvent.touches[0].clientX -
                        n.touchStartX);
                }),
                g(this._element).on(F.TOUCHEND, function(t) {
                  return i(t);
                }));
        }
      }),
      (A._keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName))
          switch (t.which) {
            case 37:
              t.preventDefault(), this.prev();
              break;
            case 39:
              t.preventDefault(), this.next();
          }
      }),
      (A._getItemIndex = function(t) {
        return (
          (this._items =
            t && t.parentNode
              ? [].slice.call(
                  t.parentNode.querySelectorAll('.carousel-item')
                )
              : []),
          this._items.indexOf(t)
        );
      }),
      (A._getItemByDirection = function(t, e) {
        var n = t === R,
          i = t === x,
          o = this._getItemIndex(e),
          s = this._items.length - 1;
        if (((i && 0 === o) || (n && o === s)) && !this._config.wrap)
          return e;
        var r = (o + (t === x ? -1 : 1)) % this._items.length;
        return -1 == r
          ? this._items[this._items.length - 1]
          : this._items[r];
      }),
      (A._triggerSlideEvent = function(t, e) {
        var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(W)),
          o = g.Event(F.SLIDE, {
            relatedTarget: t,
            direction: e,
            from: i,
            to: n
          });
        return g(this._element).trigger(o), o;
      }),
      (A._setActiveIndicatorElement = function(t) {
        if (this._indicatorsElement) {
          var e = [].slice.call(
            this._indicatorsElement.querySelectorAll('.active')
          );
          g(e).removeClass(U);
          var n = this._indicatorsElement.children[
            this._getItemIndex(t)
          ];
          n && g(n).addClass(U);
        }
      }),
      (A._slide = function(t, e) {
        var n,
          i,
          o,
          s = this,
          r = this._element.querySelector(W),
          a = this._getItemIndex(r),
          l = e || (r && this._getItemByDirection(t, r)),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);
        if (
          ((o =
            t === R
              ? ((n = 'carousel-item-left'),
                (i = 'carousel-item-next'),
                'left')
              : ((n = 'carousel-item-right'),
                (i = 'carousel-item-prev'),
                'right')),
          l && g(l).hasClass(U))
        )
          this._isSliding = !1;
        else if (
          !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
          r &&
          l
        ) {
          (this._isSliding = !0),
            h && this.pause(),
            this._setActiveIndicatorElement(l);
          var u = g.Event(F.SLID, {
            relatedTarget: l,
            direction: o,
            from: a,
            to: c
          });
          if (g(this._element).hasClass('slide')) {
            g(l).addClass(i),
              _.reflow(l),
              g(r).addClass(n),
              g(l).addClass(n);
            var f = parseInt(l.getAttribute('data-interval'), 10);
            this._config.interval = f
              ? ((this._config.defaultInterval =
                  this._config.defaultInterval ||
                  this._config.interval),
                f)
              : this._config.defaultInterval || this._config.interval;
            var d = _.getTransitionDurationFromElement(r);
            g(r)
              .one(_.TRANSITION_END, function() {
                g(l)
                  .removeClass(n + ' ' + i)
                  .addClass(U),
                  g(r).removeClass(U + ' ' + i + ' ' + n),
                  (s._isSliding = !1),
                  setTimeout(function() {
                    return g(s._element).trigger(u);
                  }, 0);
              })
              .emulateTransitionEnd(d);
          } else
            g(r).removeClass(U),
              g(l).addClass(U),
              (this._isSliding = !1),
              g(this._element).trigger(u);
          h && this.cycle();
        }
      }),
      (K._jQueryInterface = function(i) {
        return this.each(function() {
          var t = g(this).data(O),
            e = r({}, j, g(this).data());
          'object' == typeof i && (e = r({}, e, i));
          var n = 'string' == typeof i ? i : e.slide;
          if (
            (t || ((t = new K(this, e)), g(this).data(O, t)),
            'number' == typeof i)
          )
            t.to(i);
          else if ('string' == typeof n) {
            if (void 0 === t[n])
              throw new TypeError('No method named "' + n + '"');
            t[n]();
          } else e.interval && e.ride && (t.pause(), t.cycle());
        });
      }),
      (K._dataApiClickHandler = function(t) {
        var e = _.getSelectorFromElement(this);
        if (e) {
          var n = g(e)[0];
          if (n && g(n).hasClass('carousel')) {
            var i = r({}, g(n).data(), g(this).data()),
              o = this.getAttribute('data-slide-to');
            o && (i.interval = !1),
              K._jQueryInterface.call(g(n), i),
              o &&
                g(n)
                  .data(O)
                  .to(o),
              t.preventDefault();
          }
        }
      }),
      s(K, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return j;
          }
        }
      ]),
      K);
  function K(t, e) {
    (this._items = null),
      (this._interval = null),
      (this._activeElement = null),
      (this._isPaused = !1),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this.touchStartX = 0),
      (this.touchDeltaX = 0),
      (this._config = this._getConfig(e)),
      (this._element = t),
      (this._indicatorsElement = this._element.querySelector(
        '.carousel-indicators'
      )),
      (this._touchSupported =
        'ontouchstart' in document.documentElement ||
        0 < navigator.maxTouchPoints),
      (this._pointerEvent = Boolean(
        window.PointerEvent || window.MSPointerEvent
      )),
      this._addEventListeners();
  }
  g(document).on(
    F.CLICK_DATA_API,
    '[data-slide], [data-slide-to]',
    M._dataApiClickHandler
  ),
    g(window).on(F.LOAD_DATA_API, function() {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = g(t[e]);
        M._jQueryInterface.call(i, i.data());
      }
    }),
    (g.fn[N] = M._jQueryInterface),
    (g.fn[N].Constructor = M),
    (g.fn[N].noConflict = function() {
      return (g.fn[N] = L), M._jQueryInterface;
    });
  var Q,
    B = 'collapse',
    V = 'bs.collapse',
    Y = '.' + V,
    z = g.fn[B],
    X = { toggle: !0, parent: '' },
    $ = { toggle: 'boolean', parent: '(string|element)' },
    G = {
      SHOW: 'show' + Y,
      SHOWN: 'shown' + Y,
      HIDE: 'hide' + Y,
      HIDDEN: 'hidden' + Y,
      CLICK_DATA_API: 'click' + Y + '.data-api'
    },
    J = 'show',
    Z = 'collapse',
    tt = 'collapsing',
    et = 'collapsed',
    nt = '[data-toggle="collapse"]',
    it =
      (((Q = ot.prototype).toggle = function() {
        g(this._element).hasClass(J) ? this.hide() : this.show();
      }),
      (Q.show = function() {
        var t,
          e,
          n = this;
        if (
          !(
            this._isTransitioning ||
            g(this._element).hasClass(J) ||
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(
                    this._parent.querySelectorAll(
                      '.show, .collapsing'
                    )
                  )
                  .filter(function(t) {
                    return 'string' == typeof n._config.parent
                      ? t.getAttribute('data-parent') ===
                          n._config.parent
                      : t.classList.contains(Z);
                  })).length &&
              (t = null),
            t &&
              (e = g(t)
                .not(this._selector)
                .data(V)) &&
              e._isTransitioning)
          )
        ) {
          var i = g.Event(G.SHOW);
          if (
            (g(this._element).trigger(i), !i.isDefaultPrevented())
          ) {
            t &&
              (ot._jQueryInterface.call(
                g(t).not(this._selector),
                'hide'
              ),
              e || g(t).data(V, null));
            var o = this._getDimension();
            g(this._element)
              .removeClass(Z)
              .addClass(tt),
              (this._element.style[o] = 0),
              this._triggerArray.length &&
                g(this._triggerArray)
                  .removeClass(et)
                  .attr('aria-expanded', !0),
              this.setTransitioning(!0);
            var s = 'scroll' + (o[0].toUpperCase() + o.slice(1)),
              r = _.getTransitionDurationFromElement(this._element);
            g(this._element)
              .one(_.TRANSITION_END, function() {
                g(n._element)
                  .removeClass(tt)
                  .addClass(Z)
                  .addClass(J),
                  (n._element.style[o] = ''),
                  n.setTransitioning(!1),
                  g(n._element).trigger(G.SHOWN);
              })
              .emulateTransitionEnd(r),
              (this._element.style[o] = this._element[s] + 'px');
          }
        }
      }),
      (Q.hide = function() {
        var t = this;
        if (!this._isTransitioning && g(this._element).hasClass(J)) {
          var e = g.Event(G.HIDE);
          if (
            (g(this._element).trigger(e), !e.isDefaultPrevented())
          ) {
            var n = this._getDimension();
            (this._element.style[n] =
              this._element.getBoundingClientRect()[n] + 'px'),
              _.reflow(this._element),
              g(this._element)
                .addClass(tt)
                .removeClass(Z)
                .removeClass(J);
            var i = this._triggerArray.length;
            if (0 < i)
              for (var o = 0; o < i; o++) {
                var s = this._triggerArray[o],
                  r = _.getSelectorFromElement(s);
                null !== r &&
                  (g(
                    [].slice.call(document.querySelectorAll(r))
                  ).hasClass(J) ||
                    g(s)
                      .addClass(et)
                      .attr('aria-expanded', !1));
              }
            this.setTransitioning(!0), (this._element.style[n] = '');
            var a = _.getTransitionDurationFromElement(this._element);
            g(this._element)
              .one(_.TRANSITION_END, function() {
                t.setTransitioning(!1),
                  g(t._element)
                    .removeClass(tt)
                    .addClass(Z)
                    .trigger(G.HIDDEN);
              })
              .emulateTransitionEnd(a);
          }
        }
      }),
      (Q.setTransitioning = function(t) {
        this._isTransitioning = t;
      }),
      (Q.dispose = function() {
        g.removeData(this._element, V),
          (this._config = null),
          (this._parent = null),
          (this._element = null),
          (this._triggerArray = null),
          (this._isTransitioning = null);
      }),
      (Q._getConfig = function(t) {
        return (
          ((t = r({}, X, t)).toggle = Boolean(t.toggle)),
          _.typeCheckConfig(B, t, $),
          t
        );
      }),
      (Q._getDimension = function() {
        return g(this._element).hasClass('width')
          ? 'width'
          : 'height';
      }),
      (Q._getParent = function() {
        var t,
          n = this;
        _.isElement(this._config.parent)
          ? ((t = this._config.parent),
            void 0 !== this._config.parent.jquery &&
              (t = this._config.parent[0]))
          : (t = document.querySelector(this._config.parent));
        var e =
            '[data-toggle="collapse"][data-parent="' +
            this._config.parent +
            '"]',
          i = [].slice.call(t.querySelectorAll(e));
        return (
          g(i).each(function(t, e) {
            n._addAriaAndCollapsedClass(ot._getTargetFromElement(e), [
              e
            ]);
          }),
          t
        );
      }),
      (Q._addAriaAndCollapsedClass = function(t, e) {
        var n = g(t).hasClass(J);
        e.length &&
          g(e)
            .toggleClass(et, !n)
            .attr('aria-expanded', n);
      }),
      (ot._getTargetFromElement = function(t) {
        var e = _.getSelectorFromElement(t);
        return e ? document.querySelector(e) : null;
      }),
      (ot._jQueryInterface = function(i) {
        return this.each(function() {
          var t = g(this),
            e = t.data(V),
            n = r(
              {},
              X,
              t.data(),
              'object' == typeof i && i ? i : {}
            );
          if (
            (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
            e || ((e = new ot(this, n)), t.data(V, e)),
            'string' == typeof i)
          ) {
            if (void 0 === e[i])
              throw new TypeError('No method named "' + i + '"');
            e[i]();
          }
        });
      }),
      s(ot, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return X;
          }
        }
      ]),
      ot);
  function ot(e, t) {
    (this._isTransitioning = !1),
      (this._element = e),
      (this._config = this._getConfig(t)),
      (this._triggerArray = [].slice.call(
        document.querySelectorAll(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )
      ));
    for (
      var n = [].slice.call(document.querySelectorAll(nt)),
        i = 0,
        o = n.length;
      i < o;
      i++
    ) {
      var s = n[i],
        r = _.getSelectorFromElement(s),
        a = [].slice
          .call(document.querySelectorAll(r))
          .filter(function(t) {
            return t === e;
          });
      null !== r &&
        0 < a.length &&
        ((this._selector = r), this._triggerArray.push(s));
    }
    (this._parent = this._config.parent ? this._getParent() : null),
      this._config.parent ||
        this._addAriaAndCollapsedClass(
          this._element,
          this._triggerArray
        ),
      this._config.toggle && this.toggle();
  }
  g(document).on(G.CLICK_DATA_API, nt, function(t) {
    'A' === t.currentTarget.tagName && t.preventDefault();
    var n = g(this),
      e = _.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e));
    g(i).each(function() {
      var t = g(this),
        e = t.data(V) ? 'toggle' : n.data();
      it._jQueryInterface.call(t, e);
    });
  }),
    (g.fn[B] = it._jQueryInterface),
    (g.fn[B].Constructor = it),
    (g.fn[B].noConflict = function() {
      return (g.fn[B] = z), it._jQueryInterface;
    });
  var st,
    rt = 'dropdown',
    at = 'bs.dropdown',
    lt = '.' + at,
    ct = '.data-api',
    ht = g.fn[rt],
    ut = new RegExp('38|40|27'),
    ft = {
      HIDE: 'hide' + lt,
      HIDDEN: 'hidden' + lt,
      SHOW: 'show' + lt,
      SHOWN: 'shown' + lt,
      CLICK: 'click' + lt,
      CLICK_DATA_API: 'click' + lt + ct,
      KEYDOWN_DATA_API: 'keydown' + lt + ct,
      KEYUP_DATA_API: 'keyup' + lt + ct
    },
    dt = 'disabled',
    gt = 'show',
    _t = 'dropdown-menu-right',
    mt = '[data-toggle="dropdown"]',
    pt = '.dropdown-menu',
    vt = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    },
    Et = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
    },
    yt =
      (((st = Ct.prototype).toggle = function() {
        if (
          !this._element.disabled &&
          !g(this._element).hasClass(dt)
        ) {
          var t = Ct._getParentFromElement(this._element),
            e = g(this._menu).hasClass(gt);
          if ((Ct._clearMenus(), !e)) {
            var n = { relatedTarget: this._element },
              i = g.Event(ft.SHOW, n);
            if ((g(t).trigger(i), !i.isDefaultPrevented())) {
              if (!this._inNavbar) {
                if (void 0 === u)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var o = this._element;
                'parent' === this._config.reference
                  ? (o = t)
                  : _.isElement(this._config.reference) &&
                    ((o = this._config.reference),
                    void 0 !== this._config.reference.jquery &&
                      (o = this._config.reference[0])),
                  'scrollParent' !== this._config.boundary &&
                    g(t).addClass('position-static'),
                  (this._popper = new u(
                    o,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              'ontouchstart' in document.documentElement &&
                0 === g(t).closest('.navbar-nav').length &&
                g(document.body)
                  .children()
                  .on('mouseover', null, g.noop),
                this._element.focus(),
                this._element.setAttribute('aria-expanded', !0),
                g(this._menu).toggleClass(gt),
                g(t)
                  .toggleClass(gt)
                  .trigger(g.Event(ft.SHOWN, n));
            }
          }
        }
      }),
      (st.show = function() {
        if (
          !(
            this._element.disabled ||
            g(this._element).hasClass(dt) ||
            g(this._menu).hasClass(gt)
          )
        ) {
          var t = { relatedTarget: this._element },
            e = g.Event(ft.SHOW, t),
            n = Ct._getParentFromElement(this._element);
          g(n).trigger(e),
            e.isDefaultPrevented() ||
              (g(this._menu).toggleClass(gt),
              g(n)
                .toggleClass(gt)
                .trigger(g.Event(ft.SHOWN, t)));
        }
      }),
      (st.hide = function() {
        if (
          !this._element.disabled &&
          !g(this._element).hasClass(dt) &&
          g(this._menu).hasClass(gt)
        ) {
          var t = { relatedTarget: this._element },
            e = g.Event(ft.HIDE, t),
            n = Ct._getParentFromElement(this._element);
          g(n).trigger(e),
            e.isDefaultPrevented() ||
              (g(this._menu).toggleClass(gt),
              g(n)
                .toggleClass(gt)
                .trigger(g.Event(ft.HIDDEN, t)));
        }
      }),
      (st.dispose = function() {
        g.removeData(this._element, at),
          g(this._element).off(lt),
          (this._element = null),
          (this._menu = null) !== this._popper &&
            (this._popper.destroy(), (this._popper = null));
      }),
      (st.update = function() {
        (this._inNavbar = this._detectNavbar()),
          null !== this._popper && this._popper.scheduleUpdate();
      }),
      (st._addEventListeners = function() {
        var e = this;
        g(this._element).on(ft.CLICK, function(t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }),
      (st._getConfig = function(t) {
        return (
          (t = r(
            {},
            this.constructor.Default,
            g(this._element).data(),
            t
          )),
          _.typeCheckConfig(rt, t, this.constructor.DefaultType),
          t
        );
      }),
      (st._getMenuElement = function() {
        if (!this._menu) {
          var t = Ct._getParentFromElement(this._element);
          t && (this._menu = t.querySelector(pt));
        }
        return this._menu;
      }),
      (st._getPlacement = function() {
        var t = g(this._element.parentNode),
          e = 'bottom-start';
        return (
          t.hasClass('dropup')
            ? ((e = 'top-start'),
              g(this._menu).hasClass(_t) && (e = 'top-end'))
            : t.hasClass('dropright')
            ? (e = 'right-start')
            : t.hasClass('dropleft')
            ? (e = 'left-start')
            : g(this._menu).hasClass(_t) && (e = 'bottom-end'),
          e
        );
      }),
      (st._detectNavbar = function() {
        return 0 < g(this._element).closest('.navbar').length;
      }),
      (st._getOffset = function() {
        var e = this,
          t = {};
        return (
          'function' == typeof this._config.offset
            ? (t.fn = function(t) {
                return (
                  (t.offsets = r(
                    {},
                    t.offsets,
                    e._config.offset(t.offsets, e._element) || {}
                  )),
                  t
                );
              })
            : (t.offset = this._config.offset),
          t
        );
      }),
      (st._getPopperConfig = function() {
        var t = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: { enabled: this._config.flip },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        return (
          'static' === this._config.display &&
            (t.modifiers.applyStyle = { enabled: !1 }),
          t
        );
      }),
      (Ct._jQueryInterface = function(e) {
        return this.each(function() {
          var t = g(this).data(at);
          if (
            (t ||
              ((t = new Ct(this, 'object' == typeof e ? e : null)),
              g(this).data(at, t)),
            'string' == typeof e)
          ) {
            if (void 0 === t[e])
              throw new TypeError('No method named "' + e + '"');
            t[e]();
          }
        });
      }),
      (Ct._clearMenus = function(t) {
        if (
          !t ||
          (3 !== t.which && ('keyup' !== t.type || 9 === t.which))
        )
          for (
            var e = [].slice.call(document.querySelectorAll(mt)),
              n = 0,
              i = e.length;
            n < i;
            n++
          ) {
            var o = Ct._getParentFromElement(e[n]),
              s = g(e[n]).data(at),
              r = { relatedTarget: e[n] };
            if ((t && 'click' === t.type && (r.clickEvent = t), s)) {
              var a = s._menu;
              if (
                g(o).hasClass(gt) &&
                !(
                  t &&
                  (('click' === t.type &&
                    /input|textarea/i.test(t.target.tagName)) ||
                    ('keyup' === t.type && 9 === t.which)) &&
                  g.contains(o, t.target)
                )
              ) {
                var l = g.Event(ft.HIDE, r);
                g(o).trigger(l),
                  l.isDefaultPrevented() ||
                    ('ontouchstart' in document.documentElement &&
                      g(document.body)
                        .children()
                        .off('mouseover', null, g.noop),
                    e[n].setAttribute('aria-expanded', 'false'),
                    g(a).removeClass(gt),
                    g(o)
                      .removeClass(gt)
                      .trigger(g.Event(ft.HIDDEN, r)));
              }
            }
          }
      }),
      (Ct._getParentFromElement = function(t) {
        var e,
          n = _.getSelectorFromElement(t);
        return (
          n && (e = document.querySelector(n)), e || t.parentNode
        );
      }),
      (Ct._dataApiKeydownHandler = function(t) {
        if (
          (/input|textarea/i.test(t.target.tagName)
            ? !(
                32 === t.which ||
                (27 !== t.which &&
                  ((40 !== t.which && 38 !== t.which) ||
                    g(t.target).closest(pt).length))
              )
            : ut.test(t.which)) &&
          (t.preventDefault(),
          t.stopPropagation(),
          !this.disabled && !g(this).hasClass(dt))
        ) {
          var e = Ct._getParentFromElement(this),
            n = g(e).hasClass(gt);
          if (n && (!n || (27 !== t.which && 32 !== t.which))) {
            var i = [].slice.call(
              e.querySelectorAll(
                '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
              )
            );
            if (0 !== i.length) {
              var o = i.indexOf(t.target);
              38 === t.which && 0 < o && o--,
                40 === t.which && o < i.length - 1 && o++,
                o < 0 && (o = 0),
                i[o].focus();
            }
          } else {
            if (27 === t.which) {
              var s = e.querySelector(mt);
              g(s).trigger('focus');
            }
            g(this).trigger('click');
          }
        }
      }),
      s(Ct, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return vt;
          }
        },
        {
          key: 'DefaultType',
          get: function() {
            return Et;
          }
        }
      ]),
      Ct);
  function Ct(t, e) {
    (this._element = t),
      (this._popper = null),
      (this._config = this._getConfig(e)),
      (this._menu = this._getMenuElement()),
      (this._inNavbar = this._detectNavbar()),
      this._addEventListeners();
  }
  g(document)
    .on(ft.KEYDOWN_DATA_API, mt, yt._dataApiKeydownHandler)
    .on(ft.KEYDOWN_DATA_API, pt, yt._dataApiKeydownHandler)
    .on(ft.CLICK_DATA_API + ' ' + ft.KEYUP_DATA_API, yt._clearMenus)
    .on(ft.CLICK_DATA_API, mt, function(t) {
      t.preventDefault(),
        t.stopPropagation(),
        yt._jQueryInterface.call(g(this), 'toggle');
    })
    .on(ft.CLICK_DATA_API, '.dropdown form', function(t) {
      t.stopPropagation();
    }),
    (g.fn[rt] = yt._jQueryInterface),
    (g.fn[rt].Constructor = yt),
    (g.fn[rt].noConflict = function() {
      return (g.fn[rt] = ht), yt._jQueryInterface;
    });
  var Tt,
    St = 'modal',
    bt = 'bs.modal',
    It = '.' + bt,
    Dt = g.fn[St],
    wt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    At = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    },
    Nt = {
      HIDE: 'hide' + It,
      HIDDEN: 'hidden' + It,
      SHOW: 'show' + It,
      SHOWN: 'shown' + It,
      FOCUSIN: 'focusin' + It,
      RESIZE: 'resize' + It,
      CLICK_DISMISS: 'click.dismiss' + It,
      KEYDOWN_DISMISS: 'keydown.dismiss' + It,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + It,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + It,
      CLICK_DATA_API: 'click' + It + '.data-api'
    },
    Ot = 'modal-open',
    kt = 'fade',
    Pt = 'show',
    Lt = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    jt = '.sticky-top',
    Ht =
      (((Tt = Rt.prototype).toggle = function(t) {
        return this._isShown ? this.hide() : this.show(t);
      }),
      (Tt.show = function(t) {
        var e = this;
        if (!this._isShown && !this._isTransitioning) {
          g(this._element).hasClass(kt) &&
            (this._isTransitioning = !0);
          var n = g.Event(Nt.SHOW, { relatedTarget: t });
          g(this._element).trigger(n),
            this._isShown ||
              n.isDefaultPrevented() ||
              ((this._isShown = !0),
              this._checkScrollbar(),
              this._setScrollbar(),
              this._adjustDialog(),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              g(this._element).on(
                Nt.CLICK_DISMISS,
                '[data-dismiss="modal"]',
                function(t) {
                  return e.hide(t);
                }
              ),
              g(this._dialog).on(Nt.MOUSEDOWN_DISMISS, function() {
                g(e._element).one(Nt.MOUSEUP_DISMISS, function(t) {
                  g(t.target).is(e._element) &&
                    (e._ignoreBackdropClick = !0);
                });
              }),
              this._showBackdrop(function() {
                return e._showElement(t);
              }));
        }
      }),
      (Tt.hide = function(t) {
        var e = this;
        if (
          (t && t.preventDefault(),
          this._isShown && !this._isTransitioning)
        ) {
          var n = g.Event(Nt.HIDE);
          if (
            (g(this._element).trigger(n),
            this._isShown && !n.isDefaultPrevented())
          ) {
            this._isShown = !1;
            var i = g(this._element).hasClass(kt);
            if (
              (i && (this._isTransitioning = !0),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              g(document).off(Nt.FOCUSIN),
              g(this._element).removeClass(Pt),
              g(this._element).off(Nt.CLICK_DISMISS),
              g(this._dialog).off(Nt.MOUSEDOWN_DISMISS),
              i)
            ) {
              var o = _.getTransitionDurationFromElement(
                this._element
              );
              g(this._element)
                .one(_.TRANSITION_END, function(t) {
                  return e._hideModal(t);
                })
                .emulateTransitionEnd(o);
            } else this._hideModal();
          }
        }
      }),
      (Tt.dispose = function() {
        [window, this._element, this._dialog].forEach(function(t) {
          return g(t).off(It);
        }),
          g(document).off(Nt.FOCUSIN),
          g.removeData(this._element, bt),
          (this._config = null),
          (this._element = null),
          (this._dialog = null),
          (this._backdrop = null),
          (this._isShown = null),
          (this._isBodyOverflowing = null),
          (this._ignoreBackdropClick = null),
          (this._isTransitioning = null),
          (this._scrollbarWidth = null);
      }),
      (Tt.handleUpdate = function() {
        this._adjustDialog();
      }),
      (Tt._getConfig = function(t) {
        return (t = r({}, wt, t)), _.typeCheckConfig(St, t, At), t;
      }),
      (Tt._showElement = function(t) {
        var e = this,
          n = g(this._element).hasClass(kt);
        function i() {
          e._config.focus && e._element.focus(),
            (e._isTransitioning = !1),
            g(e._element).trigger(o);
        }
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.appendChild(this._element),
          (this._element.style.display = 'block'),
          this._element.removeAttribute('aria-hidden'),
          this._element.setAttribute('aria-modal', !0),
          g(this._dialog).hasClass('modal-dialog-scrollable')
            ? (this._dialog.querySelector(
                '.modal-body'
              ).scrollTop = 0)
            : (this._element.scrollTop = 0),
          n && _.reflow(this._element),
          g(this._element).addClass(Pt),
          this._config.focus && this._enforceFocus();
        var o = g.Event(Nt.SHOWN, { relatedTarget: t });
        if (n) {
          var s = _.getTransitionDurationFromElement(this._dialog);
          g(this._dialog)
            .one(_.TRANSITION_END, i)
            .emulateTransitionEnd(s);
        } else i();
      }),
      (Tt._enforceFocus = function() {
        var e = this;
        g(document)
          .off(Nt.FOCUSIN)
          .on(Nt.FOCUSIN, function(t) {
            document !== t.target &&
              e._element !== t.target &&
              0 === g(e._element).has(t.target).length &&
              e._element.focus();
          });
      }),
      (Tt._setEscapeEvent = function() {
        var e = this;
        this._isShown && this._config.keyboard
          ? g(this._element).on(Nt.KEYDOWN_DISMISS, function(t) {
              27 === t.which && (t.preventDefault(), e.hide());
            })
          : this._isShown || g(this._element).off(Nt.KEYDOWN_DISMISS);
      }),
      (Tt._setResizeEvent = function() {
        var e = this;
        this._isShown
          ? g(window).on(Nt.RESIZE, function(t) {
              return e.handleUpdate(t);
            })
          : g(window).off(Nt.RESIZE);
      }),
      (Tt._hideModal = function() {
        var t = this;
        (this._element.style.display = 'none'),
          this._element.setAttribute('aria-hidden', !0),
          this._element.removeAttribute('aria-modal'),
          (this._isTransitioning = !1),
          this._showBackdrop(function() {
            g(document.body).removeClass(Ot),
              t._resetAdjustments(),
              t._resetScrollbar(),
              g(t._element).trigger(Nt.HIDDEN);
          });
      }),
      (Tt._removeBackdrop = function() {
        this._backdrop &&
          (g(this._backdrop).remove(), (this._backdrop = null));
      }),
      (Tt._showBackdrop = function(t) {
        var e = this,
          n = g(this._element).hasClass(kt) ? kt : '';
        if (this._isShown && this._config.backdrop) {
          if (
            ((this._backdrop = document.createElement('div')),
            (this._backdrop.className = 'modal-backdrop'),
            n && this._backdrop.classList.add(n),
            g(this._backdrop).appendTo(document.body),
            g(this._element).on(Nt.CLICK_DISMISS, function(t) {
              e._ignoreBackdropClick
                ? (e._ignoreBackdropClick = !1)
                : t.target === t.currentTarget &&
                  ('static' === e._config.backdrop
                    ? e._element.focus()
                    : e.hide());
            }),
            n && _.reflow(this._backdrop),
            g(this._backdrop).addClass(Pt),
            !t)
          )
            return;
          if (!n) return void t();
          var i = _.getTransitionDurationFromElement(this._backdrop);
          g(this._backdrop)
            .one(_.TRANSITION_END, t)
            .emulateTransitionEnd(i);
        } else if (!this._isShown && this._backdrop) {
          g(this._backdrop).removeClass(Pt);
          var o = function() {
            e._removeBackdrop(), t && t();
          };
          if (g(this._element).hasClass(kt)) {
            var s = _.getTransitionDurationFromElement(
              this._backdrop
            );
            g(this._backdrop)
              .one(_.TRANSITION_END, o)
              .emulateTransitionEnd(s);
          } else o();
        } else t && t();
      }),
      (Tt._adjustDialog = function() {
        var t =
          this._element.scrollHeight >
          document.documentElement.clientHeight;
        !this._isBodyOverflowing &&
          t &&
          (this._element.style.paddingLeft =
            this._scrollbarWidth + 'px'),
          this._isBodyOverflowing &&
            !t &&
            (this._element.style.paddingRight =
              this._scrollbarWidth + 'px');
      }),
      (Tt._resetAdjustments = function() {
        (this._element.style.paddingLeft = ''),
          (this._element.style.paddingRight = '');
      }),
      (Tt._checkScrollbar = function() {
        var t = document.body.getBoundingClientRect();
        (this._isBodyOverflowing =
          t.left + t.right < window.innerWidth),
          (this._scrollbarWidth = this._getScrollbarWidth());
      }),
      (Tt._setScrollbar = function() {
        var o = this;
        if (this._isBodyOverflowing) {
          var t = [].slice.call(document.querySelectorAll(Lt)),
            e = [].slice.call(document.querySelectorAll(jt));
          g(t).each(function(t, e) {
            var n = e.style.paddingRight,
              i = g(e).css('padding-right');
            g(e)
              .data('padding-right', n)
              .css(
                'padding-right',
                parseFloat(i) + o._scrollbarWidth + 'px'
              );
          }),
            g(e).each(function(t, e) {
              var n = e.style.marginRight,
                i = g(e).css('margin-right');
              g(e)
                .data('margin-right', n)
                .css(
                  'margin-right',
                  parseFloat(i) - o._scrollbarWidth + 'px'
                );
            });
          var n = document.body.style.paddingRight,
            i = g(document.body).css('padding-right');
          g(document.body)
            .data('padding-right', n)
            .css(
              'padding-right',
              parseFloat(i) + this._scrollbarWidth + 'px'
            );
        }
        g(document.body).addClass(Ot);
      }),
      (Tt._resetScrollbar = function() {
        var t = [].slice.call(document.querySelectorAll(Lt));
        g(t).each(function(t, e) {
          var n = g(e).data('padding-right');
          g(e).removeData('padding-right'),
            (e.style.paddingRight = n || '');
        });
        var e = [].slice.call(document.querySelectorAll(jt));
        g(e).each(function(t, e) {
          var n = g(e).data('margin-right');
          void 0 !== n &&
            g(e)
              .css('margin-right', n)
              .removeData('margin-right');
        });
        var n = g(document.body).data('padding-right');
        g(document.body).removeData('padding-right'),
          (document.body.style.paddingRight = n || '');
      }),
      (Tt._getScrollbarWidth = function() {
        var t = document.createElement('div');
        (t.className = 'modal-scrollbar-measure'),
          document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }),
      (Rt._jQueryInterface = function(n, i) {
        return this.each(function() {
          var t = g(this).data(bt),
            e = r(
              {},
              wt,
              g(this).data(),
              'object' == typeof n && n ? n : {}
            );
          if (
            (t || ((t = new Rt(this, e)), g(this).data(bt, t)),
            'string' == typeof n)
          ) {
            if (void 0 === t[n])
              throw new TypeError('No method named "' + n + '"');
            t[n](i);
          } else e.show && t.show(i);
        });
      }),
      s(Rt, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return wt;
          }
        }
      ]),
      Rt);
  function Rt(t, e) {
    (this._config = this._getConfig(e)),
      (this._element = t),
      (this._dialog = t.querySelector('.modal-dialog')),
      (this._backdrop = null),
      (this._isShown = !1),
      (this._isBodyOverflowing = !1),
      (this._ignoreBackdropClick = !1),
      (this._isTransitioning = !1),
      (this._scrollbarWidth = 0);
  }
  g(document).on(Nt.CLICK_DATA_API, '[data-toggle="modal"]', function(
    t
  ) {
    var e,
      n = this,
      i = _.getSelectorFromElement(this);
    i && (e = document.querySelector(i));
    var o = g(e).data(bt)
      ? 'toggle'
      : r({}, g(e).data(), g(this).data());
    ('A' !== this.tagName && 'AREA' !== this.tagName) ||
      t.preventDefault();
    var s = g(e).one(Nt.SHOW, function(t) {
      t.isDefaultPrevented() ||
        s.one(Nt.HIDDEN, function() {
          g(n).is(':visible') && n.focus();
        });
    });
    Ht._jQueryInterface.call(g(e), o, this);
  }),
    (g.fn[St] = Ht._jQueryInterface),
    (g.fn[St].Constructor = Ht),
    (g.fn[St].noConflict = function() {
      return (g.fn[St] = Dt), Ht._jQueryInterface;
    });
  var xt = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href'
    ],
    Ft = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    Ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function Wt(t, r, e) {
    if (0 === t.length) return t;
    if (e && 'function' == typeof e) return e(t);
    for (
      var n = new window.DOMParser().parseFromString(t, 'text/html'),
        a = Object.keys(r),
        l = [].slice.call(n.body.querySelectorAll('*')),
        i = function(t, e) {
          var n = l[t],
            i = n.nodeName.toLowerCase();
          if (-1 === a.indexOf(n.nodeName.toLowerCase()))
            return n.parentNode.removeChild(n), 'continue';
          var o = [].slice.call(n.attributes),
            s = [].concat(r['*'] || [], r[i] || []);
          o.forEach(function(t) {
            !(function(t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === xt.indexOf(n) ||
                  Boolean(
                    t.nodeValue.match(Ft) || t.nodeValue.match(Ut)
                  )
                );
              for (
                var i = e.filter(function(t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  s = i.length;
                o < s;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, s) && n.removeAttribute(t.nodeName);
          });
        },
        o = 0,
        s = l.length;
      o < s;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var qt,
    Mt = 'tooltip',
    Kt = 'bs.tooltip',
    Qt = '.' + Kt,
    Bt = g.fn[Mt],
    Vt = 'bs-tooltip',
    Yt = new RegExp('(^|\\s)' + Vt + '\\S+', 'g'),
    zt = ['sanitize', 'whiteList', 'sanitizeFn'],
    Xt = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object'
    },
    $t = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    },
    Gt = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
        a: ['target', 'href', 'title', 'rel'],
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
        img: ['src', 'alt', 'title', 'width', 'height'],
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
      }
    },
    Jt = 'show',
    Zt = {
      HIDE: 'hide' + Qt,
      HIDDEN: 'hidden' + Qt,
      SHOW: 'show' + Qt,
      SHOWN: 'shown' + Qt,
      INSERTED: 'inserted' + Qt,
      CLICK: 'click' + Qt,
      FOCUSIN: 'focusin' + Qt,
      FOCUSOUT: 'focusout' + Qt,
      MOUSEENTER: 'mouseenter' + Qt,
      MOUSELEAVE: 'mouseleave' + Qt
    },
    te = 'fade',
    ee = 'show',
    ne = 'hover',
    ie = 'focus',
    oe =
      (((qt = se.prototype).enable = function() {
        this._isEnabled = !0;
      }),
      (qt.disable = function() {
        this._isEnabled = !1;
      }),
      (qt.toggleEnabled = function() {
        this._isEnabled = !this._isEnabled;
      }),
      (qt.toggle = function(t) {
        if (this._isEnabled)
          if (t) {
            var e = this.constructor.DATA_KEY,
              n = g(t.currentTarget).data(e);
            n ||
              ((n = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              g(t.currentTarget).data(e, n)),
              (n._activeTrigger.click = !n._activeTrigger.click),
              n._isWithActiveTrigger()
                ? n._enter(null, n)
                : n._leave(null, n);
          } else {
            if (g(this.getTipElement()).hasClass(ee))
              return void this._leave(null, this);
            this._enter(null, this);
          }
      }),
      (qt.dispose = function() {
        clearTimeout(this._timeout),
          g.removeData(this.element, this.constructor.DATA_KEY),
          g(this.element).off(this.constructor.EVENT_KEY),
          g(this.element)
            .closest('.modal')
            .off('hide.bs.modal'),
          this.tip && g(this.tip).remove(),
          (this._isEnabled = null),
          (this._timeout = null),
          (this._hoverState = null),
          (this._activeTrigger = null) !== this._popper &&
            this._popper.destroy(),
          (this._popper = null),
          (this.element = null),
          (this.config = null),
          (this.tip = null);
      }),
      (qt.show = function() {
        var e = this;
        if ('none' === g(this.element).css('display'))
          throw new Error('Please use show on visible elements');
        var t = g.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          g(this.element).trigger(t);
          var n = _.findShadowRoot(this.element),
            i = g.contains(
              null !== n
                ? n
                : this.element.ownerDocument.documentElement,
              this.element
            );
          if (t.isDefaultPrevented() || !i) return;
          var o = this.getTipElement(),
            s = _.getUID(this.constructor.NAME);
          o.setAttribute('id', s),
            this.element.setAttribute('aria-describedby', s),
            this.setContent(),
            this.config.animation && g(o).addClass(te);
          var r =
              'function' == typeof this.config.placement
                ? this.config.placement.call(this, o, this.element)
                : this.config.placement,
            a = this._getAttachment(r);
          this.addAttachmentClass(a);
          var l = this._getContainer();
          g(o).data(this.constructor.DATA_KEY, this),
            g.contains(
              this.element.ownerDocument.documentElement,
              this.tip
            ) || g(o).appendTo(l),
            g(this.element).trigger(this.constructor.Event.INSERTED),
            (this._popper = new u(this.element, o, {
              placement: a,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: '.arrow' },
                preventOverflow: {
                  boundariesElement: this.config.boundary
                }
              },
              onCreate: function(t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function(t) {
                return e._handlePopperPlacementChange(t);
              }
            })),
            g(o).addClass(ee),
            'ontouchstart' in document.documentElement &&
              g(document.body)
                .children()
                .on('mouseover', null, g.noop);
          var c = function() {
            e.config.animation && e._fixTransition();
            var t = e._hoverState;
            (e._hoverState = null),
              g(e.element).trigger(e.constructor.Event.SHOWN),
              'out' === t && e._leave(null, e);
          };
          if (g(this.tip).hasClass(te)) {
            var h = _.getTransitionDurationFromElement(this.tip);
            g(this.tip)
              .one(_.TRANSITION_END, c)
              .emulateTransitionEnd(h);
          } else c();
        }
      }),
      (qt.hide = function(t) {
        function e() {
          n._hoverState !== Jt &&
            i.parentNode &&
            i.parentNode.removeChild(i),
            n._cleanTipClass(),
            n.element.removeAttribute('aria-describedby'),
            g(n.element).trigger(n.constructor.Event.HIDDEN),
            null !== n._popper && n._popper.destroy(),
            t && t();
        }
        var n = this,
          i = this.getTipElement(),
          o = g.Event(this.constructor.Event.HIDE);
        if ((g(this.element).trigger(o), !o.isDefaultPrevented())) {
          if (
            (g(i).removeClass(ee),
            'ontouchstart' in document.documentElement &&
              g(document.body)
                .children()
                .off('mouseover', null, g.noop),
            (this._activeTrigger.click = !1),
            (this._activeTrigger[ie] = !1),
            (this._activeTrigger[ne] = !1),
            g(this.tip).hasClass(te))
          ) {
            var s = _.getTransitionDurationFromElement(i);
            g(i)
              .one(_.TRANSITION_END, e)
              .emulateTransitionEnd(s);
          } else e();
          this._hoverState = '';
        }
      }),
      (qt.update = function() {
        null !== this._popper && this._popper.scheduleUpdate();
      }),
      (qt.isWithContent = function() {
        return Boolean(this.getTitle());
      }),
      (qt.addAttachmentClass = function(t) {
        g(this.getTipElement()).addClass(Vt + '-' + t);
      }),
      (qt.getTipElement = function() {
        return (
          (this.tip = this.tip || g(this.config.template)[0]),
          this.tip
        );
      }),
      (qt.setContent = function() {
        var t = this.getTipElement();
        this.setElementContent(
          g(t.querySelectorAll('.tooltip-inner')),
          this.getTitle()
        ),
          g(t).removeClass(te + ' ' + ee);
      }),
      (qt.setElementContent = function(t, e) {
        'object' != typeof e || (!e.nodeType && !e.jquery)
          ? this.config.html
            ? (this.config.sanitize &&
                (e = Wt(
                  e,
                  this.config.whiteList,
                  this.config.sanitizeFn
                )),
              t.html(e))
            : t.text(e)
          : this.config.html
          ? g(e)
              .parent()
              .is(t) || t.empty().append(e)
          : t.text(g(e).text());
      }),
      (qt.getTitle = function() {
        var t = this.element.getAttribute('data-original-title');
        return (t =
          t ||
          ('function' == typeof this.config.title
            ? this.config.title.call(this.element)
            : this.config.title));
      }),
      (qt._getOffset = function() {
        var e = this,
          t = {};
        return (
          'function' == typeof this.config.offset
            ? (t.fn = function(t) {
                return (
                  (t.offsets = r(
                    {},
                    t.offsets,
                    e.config.offset(t.offsets, e.element) || {}
                  )),
                  t
                );
              })
            : (t.offset = this.config.offset),
          t
        );
      }),
      (qt._getContainer = function() {
        return !1 === this.config.container
          ? document.body
          : _.isElement(this.config.container)
          ? g(this.config.container)
          : g(document).find(this.config.container);
      }),
      (qt._getAttachment = function(t) {
        return $t[t.toUpperCase()];
      }),
      (qt._setListeners = function() {
        var i = this;
        this.config.trigger.split(' ').forEach(function(t) {
          if ('click' === t)
            g(i.element).on(
              i.constructor.Event.CLICK,
              i.config.selector,
              function(t) {
                return i.toggle(t);
              }
            );
          else if ('manual' !== t) {
            var e =
                t === ne
                  ? i.constructor.Event.MOUSEENTER
                  : i.constructor.Event.FOCUSIN,
              n =
                t === ne
                  ? i.constructor.Event.MOUSELEAVE
                  : i.constructor.Event.FOCUSOUT;
            g(i.element)
              .on(e, i.config.selector, function(t) {
                return i._enter(t);
              })
              .on(n, i.config.selector, function(t) {
                return i._leave(t);
              });
          }
        }),
          g(this.element)
            .closest('.modal')
            .on('hide.bs.modal', function() {
              i.element && i.hide();
            }),
          this.config.selector
            ? (this.config = r({}, this.config, {
                trigger: 'manual',
                selector: ''
              }))
            : this._fixTitle();
      }),
      (qt._fixTitle = function() {
        var t = typeof this.element.getAttribute(
          'data-original-title'
        );
        (!this.element.getAttribute('title') && 'string' == t) ||
          (this.element.setAttribute(
            'data-original-title',
            this.element.getAttribute('title') || ''
          ),
          this.element.setAttribute('title', ''));
      }),
      (qt._enter = function(t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || g(t.currentTarget).data(n)) ||
          ((e = new this.constructor(
            t.currentTarget,
            this._getDelegateConfig()
          )),
          g(t.currentTarget).data(n, e)),
          t &&
            (e._activeTrigger['focusin' === t.type ? ie : ne] = !0),
          g(e.getTipElement()).hasClass(ee) || e._hoverState === Jt
            ? (e._hoverState = Jt)
            : (clearTimeout(e._timeout),
              (e._hoverState = Jt),
              e.config.delay && e.config.delay.show
                ? (e._timeout = setTimeout(function() {
                    e._hoverState === Jt && e.show();
                  }, e.config.delay.show))
                : e.show());
      }),
      (qt._leave = function(t, e) {
        var n = this.constructor.DATA_KEY;
        (e = e || g(t.currentTarget).data(n)) ||
          ((e = new this.constructor(
            t.currentTarget,
            this._getDelegateConfig()
          )),
          g(t.currentTarget).data(n, e)),
          t &&
            (e._activeTrigger['focusout' === t.type ? ie : ne] = !1),
          e._isWithActiveTrigger() ||
            (clearTimeout(e._timeout),
            (e._hoverState = 'out'),
            e.config.delay && e.config.delay.hide
              ? (e._timeout = setTimeout(function() {
                  'out' === e._hoverState && e.hide();
                }, e.config.delay.hide))
              : e.hide());
      }),
      (qt._isWithActiveTrigger = function() {
        for (var t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1;
      }),
      (qt._getConfig = function(t) {
        var e = g(this.element).data();
        return (
          Object.keys(e).forEach(function(t) {
            -1 !== zt.indexOf(t) && delete e[t];
          }),
          'number' ==
            typeof (t = r(
              {},
              this.constructor.Default,
              e,
              'object' == typeof t && t ? t : {}
            )).delay && (t.delay = { show: t.delay, hide: t.delay }),
          'number' == typeof t.title &&
            (t.title = t.title.toString()),
          'number' == typeof t.content &&
            (t.content = t.content.toString()),
          _.typeCheckConfig(Mt, t, this.constructor.DefaultType),
          t.sanitize &&
            (t.template = Wt(t.template, t.whiteList, t.sanitizeFn)),
          t
        );
      }),
      (qt._getDelegateConfig = function() {
        var t = {};
        if (this.config)
          for (var e in this.config)
            this.constructor.Default[e] !== this.config[e] &&
              (t[e] = this.config[e]);
        return t;
      }),
      (qt._cleanTipClass = function() {
        var t = g(this.getTipElement()),
          e = t.attr('class').match(Yt);
        null !== e && e.length && t.removeClass(e.join(''));
      }),
      (qt._handlePopperPlacementChange = function(t) {
        var e = t.instance;
        (this.tip = e.popper),
          this._cleanTipClass(),
          this.addAttachmentClass(this._getAttachment(t.placement));
      }),
      (qt._fixTransition = function() {
        var t = this.getTipElement(),
          e = this.config.animation;
        null === t.getAttribute('x-placement') &&
          (g(t).removeClass(te),
          (this.config.animation = !1),
          this.hide(),
          this.show(),
          (this.config.animation = e));
      }),
      (se._jQueryInterface = function(n) {
        return this.each(function() {
          var t = g(this).data(Kt),
            e = 'object' == typeof n && n;
          if (
            (t || !/dispose|hide/.test(n)) &&
            (t || ((t = new se(this, e)), g(this).data(Kt, t)),
            'string' == typeof n)
          ) {
            if (void 0 === t[n])
              throw new TypeError('No method named "' + n + '"');
            t[n]();
          }
        });
      }),
      s(se, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return Gt;
          }
        },
        {
          key: 'NAME',
          get: function() {
            return Mt;
          }
        },
        {
          key: 'DATA_KEY',
          get: function() {
            return Kt;
          }
        },
        {
          key: 'Event',
          get: function() {
            return Zt;
          }
        },
        {
          key: 'EVENT_KEY',
          get: function() {
            return Qt;
          }
        },
        {
          key: 'DefaultType',
          get: function() {
            return Xt;
          }
        }
      ]),
      se);
  function se(t, e) {
    if (void 0 === u)
      throw new TypeError(
        "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
      );
    (this._isEnabled = !0),
      (this._timeout = 0),
      (this._hoverState = ''),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this.element = t),
      (this.config = this._getConfig(e)),
      (this.tip = null),
      this._setListeners();
  }
  (g.fn[Mt] = oe._jQueryInterface),
    (g.fn[Mt].Constructor = oe),
    (g.fn[Mt].noConflict = function() {
      return (g.fn[Mt] = Bt), oe._jQueryInterface;
    });
  var re = 'popover',
    ae = 'bs.popover',
    le = '.' + ae,
    ce = g.fn[re],
    he = 'bs-popover',
    ue = new RegExp('(^|\\s)' + he + '\\S+', 'g'),
    fe = r({}, oe.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    de = r({}, oe.DefaultType, {
      content: '(string|element|function)'
    }),
    ge = {
      HIDE: 'hide' + le,
      HIDDEN: 'hidden' + le,
      SHOW: 'show' + le,
      SHOWN: 'shown' + le,
      INSERTED: 'inserted' + le,
      CLICK: 'click' + le,
      FOCUSIN: 'focusin' + le,
      FOCUSOUT: 'focusout' + le,
      MOUSEENTER: 'mouseenter' + le,
      MOUSELEAVE: 'mouseleave' + le
    },
    _e = (function(t) {
      var e, n;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        ((e.prototype.constructor = e).__proto__ = n);
      var o = i.prototype;
      return (
        (o.isWithContent = function() {
          return this.getTitle() || this._getContent();
        }),
        (o.addAttachmentClass = function(t) {
          g(this.getTipElement()).addClass(he + '-' + t);
        }),
        (o.getTipElement = function() {
          return (
            (this.tip = this.tip || g(this.config.template)[0]),
            this.tip
          );
        }),
        (o.setContent = function() {
          var t = g(this.getTipElement());
          this.setElementContent(
            t.find('.popover-header'),
            this.getTitle()
          );
          var e = this._getContent();
          'function' == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find('.popover-body'), e),
            t.removeClass('fade show');
        }),
        (o._getContent = function() {
          return (
            this.element.getAttribute('data-content') ||
            this.config.content
          );
        }),
        (o._cleanTipClass = function() {
          var t = g(this.getTipElement()),
            e = t.attr('class').match(ue);
          null !== e && 0 < e.length && t.removeClass(e.join(''));
        }),
        (i._jQueryInterface = function(n) {
          return this.each(function() {
            var t = g(this).data(ae),
              e = 'object' == typeof n ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), g(this).data(ae, t)),
              'string' == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function() {
              return '4.3.1';
            }
          },
          {
            key: 'Default',
            get: function() {
              return fe;
            }
          },
          {
            key: 'NAME',
            get: function() {
              return re;
            }
          },
          {
            key: 'DATA_KEY',
            get: function() {
              return ae;
            }
          },
          {
            key: 'Event',
            get: function() {
              return ge;
            }
          },
          {
            key: 'EVENT_KEY',
            get: function() {
              return le;
            }
          },
          {
            key: 'DefaultType',
            get: function() {
              return de;
            }
          }
        ]),
        i
      );
    })(oe);
  (g.fn[re] = _e._jQueryInterface),
    (g.fn[re].Constructor = _e),
    (g.fn[re].noConflict = function() {
      return (g.fn[re] = ce), _e._jQueryInterface;
    });
  var me,
    pe = 'scrollspy',
    ve = 'bs.scrollspy',
    Ee = '.' + ve,
    ye = g.fn[pe],
    Ce = { offset: 10, method: 'auto', target: '' },
    Te = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    },
    Se = {
      ACTIVATE: 'activate' + Ee,
      SCROLL: 'scroll' + Ee,
      LOAD_DATA_API: 'load' + Ee + '.data-api'
    },
    be = 'active',
    Ie = '.nav, .list-group',
    De = '.nav-link',
    we = '.list-group-item',
    Ae = 'position',
    Ne =
      (((me = Oe.prototype).refresh = function() {
        var e = this,
          t =
            this._scrollElement === this._scrollElement.window
              ? 'offset'
              : Ae,
          o =
            'auto' === this._config.method ? t : this._config.method,
          s = o === Ae ? this._getScrollTop() : 0;
        (this._offsets = []),
          (this._targets = []),
          (this._scrollHeight = this._getScrollHeight()),
          [].slice
            .call(document.querySelectorAll(this._selector))
            .map(function(t) {
              var e,
                n = _.getSelectorFromElement(t);
              if ((n && (e = document.querySelector(n)), e)) {
                var i = e.getBoundingClientRect();
                if (i.width || i.height)
                  return [g(e)[o]().top + s, n];
              }
              return null;
            })
            .filter(function(t) {
              return t;
            })
            .sort(function(t, e) {
              return t[0] - e[0];
            })
            .forEach(function(t) {
              e._offsets.push(t[0]), e._targets.push(t[1]);
            });
      }),
      (me.dispose = function() {
        g.removeData(this._element, ve),
          g(this._scrollElement).off(Ee),
          (this._element = null),
          (this._scrollElement = null),
          (this._config = null),
          (this._selector = null),
          (this._offsets = null),
          (this._targets = null),
          (this._activeTarget = null),
          (this._scrollHeight = null);
      }),
      (me._getConfig = function(t) {
        if (
          'string' !=
          typeof (t = r({}, Ce, 'object' == typeof t && t ? t : {}))
            .target
        ) {
          var e = g(t.target).attr('id');
          e || ((e = _.getUID(pe)), g(t.target).attr('id', e)),
            (t.target = '#' + e);
        }
        return _.typeCheckConfig(pe, t, Te), t;
      }),
      (me._getScrollTop = function() {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }),
      (me._getScrollHeight = function() {
        return (
          this._scrollElement.scrollHeight ||
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (me._getOffsetHeight = function() {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }),
      (me._process = function() {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();
        if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i);
        } else {
          if (
            this._activeTarget &&
            t < this._offsets[0] &&
            0 < this._offsets[0]
          )
            return (this._activeTarget = null), void this._clear();
          for (var o = this._offsets.length; o--; )
            this._activeTarget !== this._targets[o] &&
              t >= this._offsets[o] &&
              (void 0 === this._offsets[o + 1] ||
                t < this._offsets[o + 1]) &&
              this._activate(this._targets[o]);
        }
      }),
      (me._activate = function(e) {
        (this._activeTarget = e), this._clear();
        var t = this._selector.split(',').map(function(t) {
            return (
              t +
              '[data-target="' +
              e +
              '"],' +
              t +
              '[href="' +
              e +
              '"]'
            );
          }),
          n = g(
            [].slice.call(document.querySelectorAll(t.join(',')))
          );
        n.hasClass('dropdown-item')
          ? (n
              .closest('.dropdown')
              .find('.dropdown-toggle')
              .addClass(be),
            n.addClass(be))
          : (n.addClass(be),
            n
              .parents(Ie)
              .prev(De + ', ' + we)
              .addClass(be),
            n
              .parents(Ie)
              .prev('.nav-item')
              .children(De)
              .addClass(be)),
          g(this._scrollElement).trigger(Se.ACTIVATE, {
            relatedTarget: e
          });
      }),
      (me._clear = function() {
        [].slice
          .call(document.querySelectorAll(this._selector))
          .filter(function(t) {
            return t.classList.contains(be);
          })
          .forEach(function(t) {
            return t.classList.remove(be);
          });
      }),
      (Oe._jQueryInterface = function(e) {
        return this.each(function() {
          var t = g(this).data(ve);
          if (
            (t ||
              ((t = new Oe(this, 'object' == typeof e && e)),
              g(this).data(ve, t)),
            'string' == typeof e)
          ) {
            if (void 0 === t[e])
              throw new TypeError('No method named "' + e + '"');
            t[e]();
          }
        });
      }),
      s(Oe, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'Default',
          get: function() {
            return Ce;
          }
        }
      ]),
      Oe);
  function Oe(t, e) {
    var n = this;
    (this._element = t),
      (this._scrollElement = 'BODY' === t.tagName ? window : t),
      (this._config = this._getConfig(e)),
      (this._selector =
        this._config.target +
        ' ' +
        De +
        ',' +
        this._config.target +
        ' ' +
        we +
        ',' +
        this._config.target +
        ' .dropdown-item'),
      (this._offsets = []),
      (this._targets = []),
      (this._activeTarget = null),
      (this._scrollHeight = 0),
      g(this._scrollElement).on(Se.SCROLL, function(t) {
        return n._process(t);
      }),
      this.refresh(),
      this._process();
  }
  g(window).on(Se.LOAD_DATA_API, function() {
    for (
      var t = [].slice.call(
          document.querySelectorAll('[data-spy="scroll"]')
        ),
        e = t.length;
      e--;

    ) {
      var n = g(t[e]);
      Ne._jQueryInterface.call(n, n.data());
    }
  }),
    (g.fn[pe] = Ne._jQueryInterface),
    (g.fn[pe].Constructor = Ne),
    (g.fn[pe].noConflict = function() {
      return (g.fn[pe] = ye), Ne._jQueryInterface;
    });
  var ke,
    Pe = 'bs.tab',
    Le = '.' + Pe,
    je = g.fn.tab,
    He = {
      HIDE: 'hide' + Le,
      HIDDEN: 'hidden' + Le,
      SHOW: 'show' + Le,
      SHOWN: 'shown' + Le,
      CLICK_DATA_API: 'click' + Le + '.data-api'
    },
    Re = 'active',
    xe = '.active',
    Fe = '> li > .active',
    Ue =
      (((ke = We.prototype).show = function() {
        var n = this;
        if (
          !(
            (this._element.parentNode &&
              this._element.parentNode.nodeType ===
                Node.ELEMENT_NODE &&
              g(this._element).hasClass(Re)) ||
            g(this._element).hasClass('disabled')
          )
        ) {
          var t,
            i,
            e = g(this._element).closest('.nav, .list-group')[0],
            o = _.getSelectorFromElement(this._element);
          if (e) {
            var s =
              'UL' === e.nodeName || 'OL' === e.nodeName ? Fe : xe;
            i = (i = g.makeArray(g(e).find(s)))[i.length - 1];
          }
          var r = g.Event(He.HIDE, { relatedTarget: this._element }),
            a = g.Event(He.SHOW, { relatedTarget: i });
          if (
            (i && g(i).trigger(r),
            g(this._element).trigger(a),
            !a.isDefaultPrevented() && !r.isDefaultPrevented())
          ) {
            o && (t = document.querySelector(o)),
              this._activate(this._element, e);
            var l = function() {
              var t = g.Event(He.HIDDEN, {
                  relatedTarget: n._element
                }),
                e = g.Event(He.SHOWN, { relatedTarget: i });
              g(i).trigger(t), g(n._element).trigger(e);
            };
            t ? this._activate(t, t.parentNode, l) : l();
          }
        }
      }),
      (ke.dispose = function() {
        g.removeData(this._element, Pe), (this._element = null);
      }),
      (ke._activate = function(t, e, n) {
        function i() {
          return o._transitionComplete(t, s, n);
        }
        var o = this,
          s = (!e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
            ? g(e).children(xe)
            : g(e).find(Fe))[0],
          r = n && s && g(s).hasClass('fade');
        if (s && r) {
          var a = _.getTransitionDurationFromElement(s);
          g(s)
            .removeClass('show')
            .one(_.TRANSITION_END, i)
            .emulateTransitionEnd(a);
        } else i();
      }),
      (ke._transitionComplete = function(t, e, n) {
        if (e) {
          g(e).removeClass(Re);
          var i = g(e.parentNode).find('> .dropdown-menu .active')[0];
          i && g(i).removeClass(Re),
            'tab' === e.getAttribute('role') &&
              e.setAttribute('aria-selected', !1);
        }
        if (
          (g(t).addClass(Re),
          'tab' === t.getAttribute('role') &&
            t.setAttribute('aria-selected', !0),
          _.reflow(t),
          t.classList.contains('fade') && t.classList.add('show'),
          t.parentNode && g(t.parentNode).hasClass('dropdown-menu'))
        ) {
          var o = g(t).closest('.dropdown')[0];
          if (o) {
            var s = [].slice.call(
              o.querySelectorAll('.dropdown-toggle')
            );
            g(s).addClass(Re);
          }
          t.setAttribute('aria-expanded', !0);
        }
        n && n();
      }),
      (We._jQueryInterface = function(n) {
        return this.each(function() {
          var t = g(this),
            e = t.data(Pe);
          if (
            (e || ((e = new We(this)), t.data(Pe, e)),
            'string' == typeof n)
          ) {
            if (void 0 === e[n])
              throw new TypeError('No method named "' + n + '"');
            e[n]();
          }
        });
      }),
      s(We, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        }
      ]),
      We);
  function We(t) {
    this._element = t;
  }
  g(document).on(
    He.CLICK_DATA_API,
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function(t) {
      t.preventDefault(), Ue._jQueryInterface.call(g(this), 'show');
    }
  ),
    (g.fn.tab = Ue._jQueryInterface),
    (g.fn.tab.Constructor = Ue),
    (g.fn.tab.noConflict = function() {
      return (g.fn.tab = je), Ue._jQueryInterface;
    });
  var qe,
    Me = 'toast',
    Ke = 'bs.toast',
    Qe = '.' + Ke,
    Be = g.fn[Me],
    Ve = {
      CLICK_DISMISS: 'click.dismiss' + Qe,
      HIDE: 'hide' + Qe,
      HIDDEN: 'hidden' + Qe,
      SHOW: 'show' + Qe,
      SHOWN: 'shown' + Qe
    },
    Ye = 'show',
    ze = 'showing',
    Xe = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    },
    $e = { animation: !0, autohide: !0, delay: 500 },
    Ge =
      (((qe = Je.prototype).show = function() {
        var t = this;
        function e() {
          t._element.classList.remove(ze),
            t._element.classList.add(Ye),
            g(t._element).trigger(Ve.SHOWN),
            t._config.autohide && t.hide();
        }
        if (
          (g(this._element).trigger(Ve.SHOW),
          this._config.animation &&
            this._element.classList.add('fade'),
          this._element.classList.remove('hide'),
          this._element.classList.add(ze),
          this._config.animation)
        ) {
          var n = _.getTransitionDurationFromElement(this._element);
          g(this._element)
            .one(_.TRANSITION_END, e)
            .emulateTransitionEnd(n);
        } else e();
      }),
      (qe.hide = function(t) {
        var e = this;
        this._element.classList.contains(Ye) &&
          (g(this._element).trigger(Ve.HIDE),
          t
            ? this._close()
            : (this._timeout = setTimeout(function() {
                e._close();
              }, this._config.delay)));
      }),
      (qe.dispose = function() {
        clearTimeout(this._timeout),
          (this._timeout = null),
          this._element.classList.contains(Ye) &&
            this._element.classList.remove(Ye),
          g(this._element).off(Ve.CLICK_DISMISS),
          g.removeData(this._element, Ke),
          (this._element = null),
          (this._config = null);
      }),
      (qe._getConfig = function(t) {
        return (
          (t = r(
            {},
            $e,
            g(this._element).data(),
            'object' == typeof t && t ? t : {}
          )),
          _.typeCheckConfig(Me, t, this.constructor.DefaultType),
          t
        );
      }),
      (qe._setListeners = function() {
        var t = this;
        g(this._element).on(
          Ve.CLICK_DISMISS,
          '[data-dismiss="toast"]',
          function() {
            return t.hide(!0);
          }
        );
      }),
      (qe._close = function() {
        function t() {
          e._element.classList.add('hide'),
            g(e._element).trigger(Ve.HIDDEN);
        }
        var e = this;
        if (
          (this._element.classList.remove(Ye), this._config.animation)
        ) {
          var n = _.getTransitionDurationFromElement(this._element);
          g(this._element)
            .one(_.TRANSITION_END, t)
            .emulateTransitionEnd(n);
        } else t();
      }),
      (Je._jQueryInterface = function(n) {
        return this.each(function() {
          var t = g(this),
            e = t.data(Ke);
          if (
            (e ||
              ((e = new Je(this, 'object' == typeof n && n)),
              t.data(Ke, e)),
            'string' == typeof n)
          ) {
            if (void 0 === e[n])
              throw new TypeError('No method named "' + n + '"');
            e[n](this);
          }
        });
      }),
      s(Je, null, [
        {
          key: 'VERSION',
          get: function() {
            return '4.3.1';
          }
        },
        {
          key: 'DefaultType',
          get: function() {
            return Xe;
          }
        },
        {
          key: 'Default',
          get: function() {
            return $e;
          }
        }
      ]),
      Je);
  function Je(t, e) {
    (this._element = t),
      (this._config = this._getConfig(e)),
      (this._timeout = null),
      this._setListeners();
  }
  (g.fn[Me] = Ge._jQueryInterface),
    (g.fn[Me].Constructor = Ge),
    (g.fn[Me].noConflict = function() {
      return (g.fn[Me] = Be), Ge._jQueryInterface;
    }),
    (function() {
      if (void 0 === g)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = g.fn.jquery.split(' ')[0].split('.');
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    })(),
    (t.Util = _),
    (t.Alert = f),
    (t.Button = D),
    (t.Carousel = M),
    (t.Collapse = it),
    (t.Dropdown = yt),
    (t.Modal = Ht),
    (t.Popover = _e),
    (t.Scrollspy = Ne),
    (t.Tab = Ue),
    (t.Toast = Ge),
    (t.Tooltip = oe),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
