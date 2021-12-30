;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [488],
  {
    3063: function (t, e) {
      function r(t) {
        if (t)
          return (function (t) {
            for (var e in r.prototype) t[e] = r.prototype[e]
            return t
          })(t)
      }
      ;(e.Q = r),
        (r.prototype.on = r.prototype.addEventListener = function (t, e) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(e),
            this
          )
        }),
        (r.prototype.once = function (t, e) {
          function r() {
            this.off(t, r), e.apply(this, arguments)
          }
          return (r.fn = e), this.on(t, r), this
        }),
        (r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (
          t,
          e
        ) {
          if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
            return (this._callbacks = {}), this
          var r,
            n = this._callbacks['$' + t]
          if (!n) return this
          if (1 == arguments.length) return delete this._callbacks['$' + t], this
          for (var i = 0; i < n.length; i++)
            if ((r = n[i]) === e || r.fn === e) {
              n.splice(i, 1)
              break
            }
          return 0 === n.length && delete this._callbacks['$' + t], this
        }),
        (r.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {}
          for (
            var e = new Array(arguments.length - 1), r = this._callbacks['$' + t], n = 1;
            n < arguments.length;
            n++
          )
            e[n - 1] = arguments[n]
          if (r) {
            n = 0
            for (var i = (r = r.slice(0)).length; n < i; ++n) r[n].apply(this, e)
          }
          return this
        }),
        (r.prototype.emitReserved = r.prototype.emit),
        (r.prototype.listeners = function (t) {
          return (this._callbacks = this._callbacks || {}), this._callbacks['$' + t] || []
        }),
        (r.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length
        })
    },
    3010: function (t) {
      function e(t) {
        ;(t = t || {}),
          (this.ms = t.min || 100),
          (this.max = t.max || 1e4),
          (this.factor = t.factor || 2),
          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
          (this.attempts = 0)
      }
      ;(t.exports = e),
        (e.prototype.duration = function () {
          var t = this.ms * Math.pow(this.factor, this.attempts++)
          if (this.jitter) {
            var e = Math.random(),
              r = Math.floor(e * this.jitter * t)
            t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r
          }
          return 0 | Math.min(t, this.max)
        }),
        (e.prototype.reset = function () {
          this.attempts = 0
        }),
        (e.prototype.setMin = function (t) {
          this.ms = t
        }),
        (e.prototype.setMax = function (t) {
          this.max = t
        }),
        (e.prototype.setJitter = function (t) {
          this.jitter = t
        })
    },
    9742: function (t, e) {
      'use strict'
      ;(e.byteLength = function (t) {
        var e = h(t),
          r = e[0],
          n = e[1]
        return (3 * (r + n)) / 4 - n
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            s = h(t),
            o = s[0],
            a = s[1],
            c = new i(
              (function (t, e, r) {
                return (3 * (e + r)) / 4 - r
              })(0, o, a)
            ),
            u = 0,
            f = a > 0 ? o - 4 : o
          for (r = 0; r < f; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (c[u++] = (e >> 16) & 255),
              (c[u++] = (e >> 8) & 255),
              (c[u++] = 255 & e)
          2 === a &&
            ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)), (c[u++] = 255 & e))
          1 === a &&
            ((e =
              (n[t.charCodeAt(r)] << 10) |
              (n[t.charCodeAt(r + 1)] << 4) |
              (n[t.charCodeAt(r + 2)] >> 2)),
            (c[u++] = (e >> 8) & 255),
            (c[u++] = 255 & e))
          return c
        }),
        (e.fromByteArray = function (t) {
          for (var e, n = t.length, i = n % 3, s = [], o = 16383, a = 0, h = n - i; a < h; a += o)
            s.push(c(t, a, a + o > h ? h : a + o))
          1 === i
            ? ((e = t[n - 1]), s.push(r[e >> 2] + r[(e << 4) & 63] + '=='))
            : 2 === i &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              s.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + '='))
          return s.join('')
        })
      for (
        var r = [],
          n = [],
          i = 'undefined' !== typeof Uint8Array ? Uint8Array : Array,
          s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          o = 0,
          a = s.length;
        o < a;
        ++o
      )
        (r[o] = s[o]), (n[s.charCodeAt(o)] = o)
      function h(t) {
        var e = t.length
        if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4')
        var r = t.indexOf('=')
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)]
      }
      function c(t, e, n) {
        for (var i, s, o = [], a = e; a < n; a += 3)
          (i = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (255 & t[a + 2])),
            o.push(r[((s = i) >> 18) & 63] + r[(s >> 12) & 63] + r[(s >> 6) & 63] + r[63 & s])
        return o.join('')
      }
      ;(n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63)
    },
    8764: function (t, e, r) {
      'use strict'
      var n = r(9742),
        i = r(645),
        s =
          'function' === typeof Symbol && 'function' === typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null
      ;(e.Buffer = h),
        (e.SlowBuffer = function (t) {
          ;+t != t && (t = 0)
          return h.alloc(+t)
        }),
        (e.INSPECT_MAX_BYTES = 50)
      var o = 2147483647
      function a(t) {
        if (t > o) throw new RangeError('The value "' + t + '" is invalid for option "size"')
        var e = new Uint8Array(t)
        return Object.setPrototypeOf(e, h.prototype), e
      }
      function h(t, e, r) {
        if ('number' === typeof t) {
          if ('string' === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            )
          return f(t)
        }
        return c(t, e, r)
      }
      function c(t, e, r) {
        if ('string' === typeof t)
          return (function (t, e) {
            ;('string' === typeof e && '' !== e) || (e = 'utf8')
            if (!h.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e)
            var r = 0 | y(t, e),
              n = a(r),
              i = n.write(t, e)
            i !== r && (n = n.slice(0, i))
            return n
          })(t, e)
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (F(t, Uint8Array)) {
              var e = new Uint8Array(t)
              return l(e.buffer, e.byteOffset, e.byteLength)
            }
            return p(t)
          })(t)
        if (null == t)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof t
          )
        if (F(t, ArrayBuffer) || (t && F(t.buffer, ArrayBuffer))) return l(t, e, r)
        if (
          'undefined' !== typeof SharedArrayBuffer &&
          (F(t, SharedArrayBuffer) || (t && F(t.buffer, SharedArrayBuffer)))
        )
          return l(t, e, r)
        if ('number' === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          )
        var n = t.valueOf && t.valueOf()
        if (null != n && n !== t) return h.from(n, e, r)
        var i = (function (t) {
          if (h.isBuffer(t)) {
            var e = 0 | d(t.length),
              r = a(e)
            return 0 === r.length || t.copy(r, 0, 0, e), r
          }
          if (void 0 !== t.length) return 'number' !== typeof t.length || V(t.length) ? a(0) : p(t)
          if ('Buffer' === t.type && Array.isArray(t.data)) return p(t.data)
        })(t)
        if (i) return i
        if (
          'undefined' !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' === typeof t[Symbol.toPrimitive]
        )
          return h.from(t[Symbol.toPrimitive]('string'), e, r)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof t
        )
      }
      function u(t) {
        if ('number' !== typeof t) throw new TypeError('"size" argument must be of type number')
        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
      }
      function f(t) {
        return u(t), a(t < 0 ? 0 : 0 | d(t))
      }
      function p(t) {
        for (var e = t.length < 0 ? 0 : 0 | d(t.length), r = a(e), n = 0; n < e; n += 1)
          r[n] = 255 & t[n]
        return r
      }
      function l(t, e, r) {
        if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds')
        if (t.byteLength < e + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds')
        var n
        return (
          (n =
            void 0 === e && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, h.prototype),
          n
        )
      }
      function d(t) {
        if (t >= o)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' + o.toString(16) + ' bytes'
          )
        return 0 | t
      }
      function y(t, e) {
        if (h.isBuffer(t)) return t.length
        if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength
        if ('string' !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          )
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2]
        if (!n && 0 === r) return 0
        for (var i = !1; ; )
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
              return j(t).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return q(t).length
            default:
              if (i) return n ? -1 : j(t).length
              ;(e = ('' + e).toLowerCase()), (i = !0)
          }
      }
      function g(t, e, r) {
        var n = !1
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return ''
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return ''
        if ((r >>>= 0) <= (e >>>= 0)) return ''
        for (t || (t = 'utf8'); ; )
          switch (t) {
            case 'hex':
              return O(this, e, r)
            case 'utf8':
            case 'utf-8':
              return C(this, e, r)
            case 'ascii':
              return _(this, e, r)
            case 'latin1':
            case 'binary':
              return S(this, e, r)
            case 'base64':
              return T(this, e, r)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return x(this, e, r)
            default:
              if (n) throw new TypeError('Unknown encoding: ' + t)
              ;(t = (t + '').toLowerCase()), (n = !0)
          }
      }
      function m(t, e, r) {
        var n = t[e]
        ;(t[e] = t[r]), (t[r] = n)
      }
      function b(t, e, r, n, i) {
        if (0 === t.length) return -1
        if (
          ('string' === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          V((r = +r)) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1
          r = t.length - 1
        } else if (r < 0) {
          if (!i) return -1
          r = 0
        }
        if (('string' === typeof e && (e = h.from(e, n)), h.isBuffer(e)))
          return 0 === e.length ? -1 : w(t, e, r, n, i)
        if ('number' === typeof e)
          return (
            (e &= 255),
            'function' === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : w(t, [e], r, n, i)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function w(t, e, r, n, i) {
        var s,
          o = 1,
          a = t.length,
          h = e.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1
          ;(o = 2), (a /= 2), (h /= 2), (r /= 2)
        }
        function c(t, e) {
          return 1 === o ? t[e] : t.readUInt16BE(e * o)
        }
        if (i) {
          var u = -1
          for (s = r; s < a; s++)
            if (c(t, s) === c(e, -1 === u ? 0 : s - u)) {
              if ((-1 === u && (u = s), s - u + 1 === h)) return u * o
            } else -1 !== u && (s -= s - u), (u = -1)
        } else
          for (r + h > a && (r = a - h), s = r; s >= 0; s--) {
            for (var f = !0, p = 0; p < h; p++)
              if (c(t, s + p) !== c(e, p)) {
                f = !1
                break
              }
            if (f) return s
          }
        return -1
      }
      function v(t, e, r, n) {
        r = Number(r) || 0
        var i = t.length - r
        n ? (n = Number(n)) > i && (n = i) : (n = i)
        var s = e.length
        n > s / 2 && (n = s / 2)
        for (var o = 0; o < n; ++o) {
          var a = parseInt(e.substr(2 * o, 2), 16)
          if (V(a)) return o
          t[r + o] = a
        }
        return o
      }
      function E(t, e, r, n) {
        return D(j(e, t.length - r), t, r, n)
      }
      function A(t, e, r, n) {
        return D(
          (function (t) {
            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r))
            return e
          })(e),
          t,
          r,
          n
        )
      }
      function k(t, e, r, n) {
        return D(q(e), t, r, n)
      }
      function B(t, e, r, n) {
        return D(
          (function (t, e) {
            for (var r, n, i, s = [], o = 0; o < t.length && !((e -= 2) < 0); ++o)
              (n = (r = t.charCodeAt(o)) >> 8), (i = r % 256), s.push(i), s.push(n)
            return s
          })(e, t.length - r),
          t,
          r,
          n
        )
      }
      function T(t, e, r) {
        return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
      }
      function C(t, e, r) {
        r = Math.min(t.length, r)
        for (var n = [], i = e; i < r; ) {
          var s,
            o,
            a,
            h,
            c = t[i],
            u = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1
          if (i + f <= r)
            switch (f) {
              case 1:
                c < 128 && (u = c)
                break
              case 2:
                128 === (192 & (s = t[i + 1])) && (h = ((31 & c) << 6) | (63 & s)) > 127 && (u = h)
                break
              case 3:
                ;(s = t[i + 1]),
                  (o = t[i + 2]),
                  128 === (192 & s) &&
                    128 === (192 & o) &&
                    (h = ((15 & c) << 12) | ((63 & s) << 6) | (63 & o)) > 2047 &&
                    (h < 55296 || h > 57343) &&
                    (u = h)
                break
              case 4:
                ;(s = t[i + 1]),
                  (o = t[i + 2]),
                  (a = t[i + 3]),
                  128 === (192 & s) &&
                    128 === (192 & o) &&
                    128 === (192 & a) &&
                    (h = ((15 & c) << 18) | ((63 & s) << 12) | ((63 & o) << 6) | (63 & a)) >
                      65535 &&
                    h < 1114112 &&
                    (u = h)
            }
          null === u
            ? ((u = 65533), (f = 1))
            : u > 65535 &&
              ((u -= 65536), n.push(((u >>> 10) & 1023) | 55296), (u = 56320 | (1023 & u))),
            n.push(u),
            (i += f)
        }
        return (function (t) {
          var e = t.length
          if (e <= R) return String.fromCharCode.apply(String, t)
          var r = '',
            n = 0
          for (; n < e; ) r += String.fromCharCode.apply(String, t.slice(n, (n += R)))
          return r
        })(n)
      }
      ;(e.kMaxLength = o),
        (h.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42
                },
              }
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            )
          } catch (r) {
            return !1
          }
        })()),
        h.TYPED_ARRAY_SUPPORT ||
          'undefined' === typeof console ||
          'function' !== typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(h.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (h.isBuffer(this)) return this.buffer
          },
        }),
        Object.defineProperty(h.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (h.isBuffer(this)) return this.byteOffset
          },
        }),
        (h.poolSize = 8192),
        (h.from = function (t, e, r) {
          return c(t, e, r)
        }),
        Object.setPrototypeOf(h.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(h, Uint8Array),
        (h.alloc = function (t, e, r) {
          return (function (t, e, r) {
            return (
              u(t),
              t <= 0
                ? a(t)
                : void 0 !== e
                ? 'string' === typeof r
                  ? a(t).fill(e, r)
                  : a(t).fill(e)
                : a(t)
            )
          })(t, e, r)
        }),
        (h.allocUnsafe = function (t) {
          return f(t)
        }),
        (h.allocUnsafeSlow = function (t) {
          return f(t)
        }),
        (h.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== h.prototype
        }),
        (h.compare = function (t, e) {
          if (
            (F(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)),
            F(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)),
            !h.isBuffer(t) || !h.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            )
          if (t === e) return 0
          for (var r = t.length, n = e.length, i = 0, s = Math.min(r, n); i < s; ++i)
            if (t[i] !== e[i]) {
              ;(r = t[i]), (n = e[i])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (h.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (h.concat = function (t, e) {
          if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === t.length) return h.alloc(0)
          var r
          if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
          var n = h.allocUnsafe(e),
            i = 0
          for (r = 0; r < t.length; ++r) {
            var s = t[r]
            if (F(s, Uint8Array))
              i + s.length > n.length
                ? h.from(s).copy(n, i)
                : Uint8Array.prototype.set.call(n, s, i)
            else {
              if (!h.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers')
              s.copy(n, i)
            }
            i += s.length
          }
          return n
        }),
        (h.byteLength = y),
        (h.prototype._isBuffer = !0),
        (h.prototype.swap16 = function () {
          var t = this.length
          if (t % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (var e = 0; e < t; e += 2) m(this, e, e + 1)
          return this
        }),
        (h.prototype.swap32 = function () {
          var t = this.length
          if (t % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2)
          return this
        }),
        (h.prototype.swap64 = function () {
          var t = this.length
          if (t % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (var e = 0; e < t; e += 8)
            m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4)
          return this
        }),
        (h.prototype.toString = function () {
          var t = this.length
          return 0 === t ? '' : 0 === arguments.length ? C(this, 0, t) : g.apply(this, arguments)
        }),
        (h.prototype.toLocaleString = h.prototype.toString),
        (h.prototype.equals = function (t) {
          if (!h.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
          return this === t || 0 === h.compare(this, t)
        }),
        (h.prototype.inspect = function () {
          var t = '',
            r = e.INSPECT_MAX_BYTES
          return (
            (t = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (t += ' ... '),
            '<Buffer ' + t + '>'
          )
        }),
        s && (h.prototype[s] = h.prototype.inspect),
        (h.prototype.compare = function (t, e, r, n, i) {
          if ((F(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t)))
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            )
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError('out of range index')
          if (n >= i && e >= r) return 0
          if (n >= i) return -1
          if (e >= r) return 1
          if (this === t) return 0
          for (
            var s = (i >>>= 0) - (n >>>= 0),
              o = (r >>>= 0) - (e >>>= 0),
              a = Math.min(s, o),
              c = this.slice(n, i),
              u = t.slice(e, r),
              f = 0;
            f < a;
            ++f
          )
            if (c[f] !== u[f]) {
              ;(s = c[f]), (o = u[f])
              break
            }
          return s < o ? -1 : o < s ? 1 : 0
        }),
        (h.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r)
        }),
        (h.prototype.indexOf = function (t, e, r) {
          return b(this, t, e, r, !0)
        }),
        (h.prototype.lastIndexOf = function (t, e, r) {
          return b(this, t, e, r, !1)
        }),
        (h.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
          else if (void 0 === r && 'string' === typeof e) (n = e), (r = this.length), (e = 0)
          else {
            if (!isFinite(e))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              )
            ;(e >>>= 0),
              isFinite(r) ? ((r >>>= 0), void 0 === n && (n = 'utf8')) : ((n = r), (r = void 0))
          }
          var i = this.length - e
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          for (var s = !1; ; )
            switch (n) {
              case 'hex':
                return v(this, t, e, r)
              case 'utf8':
              case 'utf-8':
                return E(this, t, e, r)
              case 'ascii':
              case 'latin1':
              case 'binary':
                return A(this, t, e, r)
              case 'base64':
                return k(this, t, e, r)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return B(this, t, e, r)
              default:
                if (s) throw new TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (s = !0)
            }
        }),
        (h.prototype.toJSON = function () {
          return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) }
        })
      var R = 4096
      function _(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
        return n
      }
      function S(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
        return n
      }
      function O(t, e, r) {
        var n = t.length
        ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n)
        for (var i = '', s = e; s < r; ++s) i += z[t[s]]
        return i
      }
      function x(t, e, r) {
        for (var n = t.slice(e, r), i = '', s = 0; s < n.length - 1; s += 2)
          i += String.fromCharCode(n[s] + 256 * n[s + 1])
        return i
      }
      function N(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError('offset is not uint')
        if (t + e > r) throw new RangeError('Trying to access beyond buffer length')
      }
      function L(t, e, r, n, i, s) {
        if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance')
        if (e > i || e < s) throw new RangeError('"value" argument is out of bounds')
        if (r + n > t.length) throw new RangeError('Index out of range')
      }
      function U(t, e, r, n, i, s) {
        if (r + n > t.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
      }
      function I(t, e, r, n, s) {
        return (e = +e), (r >>>= 0), s || U(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
      }
      function P(t, e, r, n, s) {
        return (e = +e), (r >>>= 0), s || U(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
      }
      ;(h.prototype.slice = function (t, e) {
        var r = this.length
        ;(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          e < t && (e = t)
        var n = this.subarray(t, e)
        return Object.setPrototypeOf(n, h.prototype), n
      }),
        (h.prototype.readUintLE = h.prototype.readUIntLE = function (t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || N(t, e, this.length)
          for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); ) n += this[t + s] * i
          return n
        }),
        (h.prototype.readUintBE = h.prototype.readUIntBE = function (t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || N(t, e, this.length)
          for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); ) n += this[t + --e] * i
          return n
        }),
        (h.prototype.readUint8 = h.prototype.readUInt8 = function (t, e) {
          return (t >>>= 0), e || N(t, 1, this.length), this[t]
        }),
        (h.prototype.readUint16LE = h.prototype.readUInt16LE = function (t, e) {
          return (t >>>= 0), e || N(t, 2, this.length), this[t] | (this[t + 1] << 8)
        }),
        (h.prototype.readUint16BE = h.prototype.readUInt16BE = function (t, e) {
          return (t >>>= 0), e || N(t, 2, this.length), (this[t] << 8) | this[t + 1]
        }),
        (h.prototype.readUint32LE = h.prototype.readUInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || N(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3]
          )
        }),
        (h.prototype.readUint32BE = h.prototype.readUInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || N(t, 4, this.length),
            16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          )
        }),
        (h.prototype.readIntLE = function (t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || N(t, e, this.length)
          for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); ) n += this[t + s] * i
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
        }),
        (h.prototype.readIntBE = function (t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || N(t, e, this.length)
          for (var n = e, i = 1, s = this[t + --n]; n > 0 && (i *= 256); ) s += this[t + --n] * i
          return s >= (i *= 128) && (s -= Math.pow(2, 8 * e)), s
        }),
        (h.prototype.readInt8 = function (t, e) {
          return (
            (t >>>= 0),
            e || N(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          )
        }),
        (h.prototype.readInt16LE = function (t, e) {
          ;(t >>>= 0), e || N(t, 2, this.length)
          var r = this[t] | (this[t + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (h.prototype.readInt16BE = function (t, e) {
          ;(t >>>= 0), e || N(t, 2, this.length)
          var r = this[t + 1] | (this[t] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (h.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || N(t, 4, this.length),
            this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
          )
        }),
        (h.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || N(t, 4, this.length),
            (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
          )
        }),
        (h.prototype.readFloatLE = function (t, e) {
          return (t >>>= 0), e || N(t, 4, this.length), i.read(this, t, !0, 23, 4)
        }),
        (h.prototype.readFloatBE = function (t, e) {
          return (t >>>= 0), e || N(t, 4, this.length), i.read(this, t, !1, 23, 4)
        }),
        (h.prototype.readDoubleLE = function (t, e) {
          return (t >>>= 0), e || N(t, 8, this.length), i.read(this, t, !0, 52, 8)
        }),
        (h.prototype.readDoubleBE = function (t, e) {
          return (t >>>= 0), e || N(t, 8, this.length), i.read(this, t, !1, 52, 8)
        }),
        (h.prototype.writeUintLE = h.prototype.writeUIntLE = function (t, e, r, n) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) || L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = 1,
            s = 0
          for (this[e] = 255 & t; ++s < r && (i *= 256); ) this[e + s] = (t / i) & 255
          return e + r
        }),
        (h.prototype.writeUintBE = h.prototype.writeUIntBE = function (t, e, r, n) {
          ;((t = +t), (e >>>= 0), (r >>>= 0), n) || L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = r - 1,
            s = 1
          for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); ) this[e + i] = (t / s) & 255
          return e + r
        }),
        (h.prototype.writeUint8 = h.prototype.writeUInt8 = function (t, e, r) {
          return (t = +t), (e >>>= 0), r || L(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1
        }),
        (h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || L(this, t, e, 2, 65535, 0),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || L(this, t, e, 2, 65535, 0),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || L(this, t, e, 4, 4294967295, 0),
            (this[e + 3] = t >>> 24),
            (this[e + 2] = t >>> 16),
            (this[e + 1] = t >>> 8),
            (this[e] = 255 & t),
            e + 4
          )
        }),
        (h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || L(this, t, e, 4, 4294967295, 0),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (h.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            L(this, t, e, r, i - 1, -i)
          }
          var s = 0,
            o = 1,
            a = 0
          for (this[e] = 255 & t; ++s < r && (o *= 256); )
            t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1),
              (this[e + s] = (((t / o) >> 0) - a) & 255)
          return e + r
        }),
        (h.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            L(this, t, e, r, i - 1, -i)
          }
          var s = r - 1,
            o = 1,
            a = 0
          for (this[e + s] = 255 & t; --s >= 0 && (o *= 256); )
            t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1),
              (this[e + s] = (((t / o) >> 0) - a) & 255)
          return e + r
        }),
        (h.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || L(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (h.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || L(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (h.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || L(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (h.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || L(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          )
        }),
        (h.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || L(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (h.prototype.writeFloatLE = function (t, e, r) {
          return I(this, t, e, !0, r)
        }),
        (h.prototype.writeFloatBE = function (t, e, r) {
          return I(this, t, e, !1, r)
        }),
        (h.prototype.writeDoubleLE = function (t, e, r) {
          return P(this, t, e, !0, r)
        }),
        (h.prototype.writeDoubleBE = function (t, e, r) {
          return P(this, t, e, !1, r)
        }),
        (h.prototype.copy = function (t, e, r, n) {
          if (!h.isBuffer(t)) throw new TypeError('argument should be a Buffer')
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0
          if (0 === t.length || 0 === this.length) return 0
          if (e < 0) throw new RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length) throw new RangeError('Index out of range')
          if (n < 0) throw new RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r)
          var i = n - r
          return (
            this === t && 'function' === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          )
        }),
        (h.prototype.fill = function (t, e, r, n) {
          if ('string' === typeof t) {
            if (
              ('string' === typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : 'string' === typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' !== typeof n)
            )
              throw new TypeError('encoding must be a string')
            if ('string' === typeof n && !h.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n)
            if (1 === t.length) {
              var i = t.charCodeAt(0)
              ;(('utf8' === n && i < 128) || 'latin1' === n) && (t = i)
            }
          } else 'number' === typeof t ? (t &= 255) : 'boolean' === typeof t && (t = Number(t))
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError('Out of range index')
          if (r <= e) return this
          var s
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            'number' === typeof t)
          )
            for (s = e; s < r; ++s) this[s] = t
          else {
            var o = h.isBuffer(t) ? t : h.from(t, n),
              a = o.length
            if (0 === a)
              throw new TypeError('The value "' + t + '" is invalid for argument "value"')
            for (s = 0; s < r - e; ++s) this[s + e] = o[s % a]
          }
          return this
        })
      var M = /[^+/0-9A-Za-z-_]/g
      function j(t, e) {
        var r
        e = e || 1 / 0
        for (var n = t.length, i = null, s = [], o = 0; o < n; ++o) {
          if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                ;(e -= 3) > -1 && s.push(239, 191, 189)
                continue
              }
              if (o + 1 === n) {
                ;(e -= 3) > -1 && s.push(239, 191, 189)
                continue
              }
              i = r
              continue
            }
            if (r < 56320) {
              ;(e -= 3) > -1 && s.push(239, 191, 189), (i = r)
              continue
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320))
          } else i && (e -= 3) > -1 && s.push(239, 191, 189)
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break
            s.push(r)
          } else if (r < 2048) {
            if ((e -= 2) < 0) break
            s.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((e -= 3) < 0) break
            s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point')
            if ((e -= 4) < 0) break
            s.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128)
          }
        }
        return s
      }
      function q(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split('=')[0]).trim().replace(M, '')).length < 2) return ''
            for (; t.length % 4 !== 0; ) t += '='
            return t
          })(t)
        )
      }
      function D(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i]
        return i
      }
      function F(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        )
      }
      function V(t) {
        return t !== t
      }
      var z = (function () {
        for (var t = '0123456789abcdef', e = new Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i]
        return e
      })()
    },
    8058: function (t) {
      try {
        t.exports =
          'undefined' !== typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
      } catch (e) {
        t.exports = !1
      }
    },
    645: function (t, e) {
      ;(e.read = function (t, e, r, n, i) {
        var s,
          o,
          a = 8 * i - n - 1,
          h = (1 << a) - 1,
          c = h >> 1,
          u = -7,
          f = r ? i - 1 : 0,
          p = r ? -1 : 1,
          l = t[e + f]
        for (
          f += p, s = l & ((1 << -u) - 1), l >>= -u, u += a;
          u > 0;
          s = 256 * s + t[e + f], f += p, u -= 8
        );
        for (
          o = s & ((1 << -u) - 1), s >>= -u, u += n;
          u > 0;
          o = 256 * o + t[e + f], f += p, u -= 8
        );
        if (0 === s) s = 1 - c
        else {
          if (s === h) return o ? NaN : (1 / 0) * (l ? -1 : 1)
          ;(o += Math.pow(2, n)), (s -= c)
        }
        return (l ? -1 : 1) * o * Math.pow(2, s - n)
      }),
        (e.write = function (t, e, r, n, i, s) {
          var o,
            a,
            h,
            c = 8 * s - i - 1,
            u = (1 << c) - 1,
            f = u >> 1,
            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            l = n ? 0 : s - 1,
            d = n ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (o = u))
                : ((o = Math.floor(Math.log(e) / Math.LN2)),
                  e * (h = Math.pow(2, -o)) < 1 && (o--, (h *= 2)),
                  (e += o + f >= 1 ? p / h : p * Math.pow(2, 1 - f)) * h >= 2 && (o++, (h /= 2)),
                  o + f >= u
                    ? ((a = 0), (o = u))
                    : o + f >= 1
                    ? ((a = (e * h - 1) * Math.pow(2, i)), (o += f))
                    : ((a = e * Math.pow(2, f - 1) * Math.pow(2, i)), (o = 0)));
            i >= 8;
            t[r + l] = 255 & a, l += d, a /= 256, i -= 8
          );
          for (o = (o << i) | a, c += i; c > 0; t[r + l] = 255 & o, l += d, o /= 256, c -= 8);
          t[r + l - d] |= 128 * y
        })
    },
    1830: function (t, e) {
      ;(e.encode = function (t) {
        var e = ''
        for (var r in t)
          t.hasOwnProperty(r) &&
            (e.length && (e += '&'), (e += encodeURIComponent(r) + '=' + encodeURIComponent(t[r])))
        return e
      }),
        (e.decode = function (t) {
          for (var e = {}, r = t.split('&'), n = 0, i = r.length; n < i; n++) {
            var s = r[n].split('=')
            e[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
          }
          return e
        })
    },
    4187: function (t) {
      var e = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        r = [
          'source',
          'protocol',
          'authority',
          'userInfo',
          'user',
          'password',
          'host',
          'port',
          'relative',
          'path',
          'directory',
          'file',
          'query',
          'anchor',
        ]
      t.exports = function (t) {
        var n = t,
          i = t.indexOf('['),
          s = t.indexOf(']')
        ;-1 != i &&
          -1 != s &&
          (t = t.substring(0, i) + t.substring(i, s).replace(/:/g, ';') + t.substring(s, t.length))
        for (var o = e.exec(t || ''), a = {}, h = 14; h--; ) a[r[h]] = o[h] || ''
        return (
          -1 != i &&
            -1 != s &&
            ((a.source = n),
            (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ':')),
            (a.authority = a.authority.replace('[', '').replace(']', '').replace(/;/g, ':')),
            (a.ipv6uri = !0)),
          (a.pathNames = (function (t, e) {
            var r = /\/{2,9}/g,
              n = e.replace(r, '/').split('/')
            ;('/' != e.substr(0, 1) && 0 !== e.length) || n.splice(0, 1)
            '/' == e.substr(e.length - 1, 1) && n.splice(n.length - 1, 1)
            return n
          })(0, a.path)),
          (a.queryKey = (function (t, e) {
            var r = {}
            return (
              e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
                e && (r[e] = n)
              }),
              r
            )
          })(0, a.query)),
          a
        )
      }
    },
    2281: function (t) {
      'use strict'
      var e,
        r = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
        n = {},
        i = 0,
        s = 0
      function o(t) {
        var e = ''
        do {
          ;(e = r[t % 64] + e), (t = Math.floor(t / 64))
        } while (t > 0)
        return e
      }
      function a() {
        var t = o(+new Date())
        return t !== e ? ((i = 0), (e = t)) : t + '.' + o(i++)
      }
      for (; s < 64; s++) n[r[s]] = s
      ;(a.encode = o),
        (a.decode = function (t) {
          var e = 0
          for (s = 0; s < t.length; s++) e = 64 * e + n[t.charAt(s)]
          return e
        }),
        (t.exports = a)
    },
    2488: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          Manager: function () {
            return at
          },
          Socket: function () {
            return st
          },
          connect: function () {
            return ct
          },
          default: function () {
            return ct
          },
          io: function () {
            return ct
          },
          protocol: function () {
            return G
          },
        })
      var n = {}
      r.r(n),
        r.d(n, {
          Decoder: function () {
            return et
          },
          Encoder: function () {
            return tt
          },
          PacketType: function () {
            return Z
          },
          protocol: function () {
            return G
          },
        })
      var i = r(4187)
      var s = r(8058),
        o =
          'undefined' !== typeof self
            ? self
            : 'undefined' !== typeof window
            ? window
            : Function('return this')()
      function a(t) {
        const e = t.xdomain
        try {
          if ('undefined' !== typeof XMLHttpRequest && (!e || s)) return new XMLHttpRequest()
        } catch (r) {}
        if (!e)
          try {
            return new o[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP')
          } catch (r) {}
      }
      function h(t, ...e) {
        return e.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {})
      }
      const c = setTimeout,
        u = clearTimeout
      function f(t, e) {
        e.useNativeTimers
          ? ((t.setTimeoutFn = c.bind(o)), (t.clearTimeoutFn = u.bind(o)))
          : ((t.setTimeoutFn = setTimeout.bind(o)), (t.clearTimeoutFn = clearTimeout.bind(o)))
      }
      var p = r(3063)
      const l = Object.create(null)
      ;(l.open = '0'),
        (l.close = '1'),
        (l.ping = '2'),
        (l.pong = '3'),
        (l.message = '4'),
        (l.upgrade = '5'),
        (l.noop = '6')
      const d = Object.create(null)
      Object.keys(l).forEach((t) => {
        d[l[t]] = t
      })
      const y = { type: 'error', data: 'parser error' },
        g =
          'function' === typeof Blob ||
          ('undefined' !== typeof Blob &&
            '[object BlobConstructor]' === Object.prototype.toString.call(Blob)),
        m = 'function' === typeof ArrayBuffer,
        b = (t, e) => {
          const r = new FileReader()
          return (
            (r.onload = function () {
              const t = r.result.split(',')[1]
              e('b' + t)
            }),
            r.readAsDataURL(t)
          )
        }
      for (
        var w = ({ type: t, data: e }, r, n) => {
            return g && e instanceof Blob
              ? r
                ? n(e)
                : b(e, n)
              : m &&
                (e instanceof ArrayBuffer ||
                  ((i = e),
                  'function' === typeof ArrayBuffer.isView
                    ? ArrayBuffer.isView(i)
                    : i && i.buffer instanceof ArrayBuffer))
              ? r
                ? n(e)
                : b(new Blob([e]), n)
              : n(l[t] + (e || ''))
            var i
          },
          v = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          E = 'undefined' === typeof Uint8Array ? [] : new Uint8Array(256),
          A = 0;
        A < v.length;
        A++
      )
        E[v.charCodeAt(A)] = A
      const k = 'function' === typeof ArrayBuffer,
        B = (t, e) => {
          if (k) {
            const r = (function (t) {
              var e,
                r,
                n,
                i,
                s,
                o = 0.75 * t.length,
                a = t.length,
                h = 0
              '=' === t[t.length - 1] && (o--, '=' === t[t.length - 2] && o--)
              var c = new ArrayBuffer(o),
                u = new Uint8Array(c)
              for (e = 0; e < a; e += 4)
                (r = E[t.charCodeAt(e)]),
                  (n = E[t.charCodeAt(e + 1)]),
                  (i = E[t.charCodeAt(e + 2)]),
                  (s = E[t.charCodeAt(e + 3)]),
                  (u[h++] = (r << 2) | (n >> 4)),
                  (u[h++] = ((15 & n) << 4) | (i >> 2)),
                  (u[h++] = ((3 & i) << 6) | (63 & s))
              return c
            })(t)
            return T(r, e)
          }
          return { base64: !0, data: t }
        },
        T = (t, e) => {
          switch (e) {
            case 'blob':
              return t instanceof ArrayBuffer ? new Blob([t]) : t
            case 'arraybuffer':
            default:
              return t
          }
        }
      var C = (t, e) => {
        if ('string' !== typeof t) return { type: 'message', data: T(t, e) }
        const r = t.charAt(0)
        if ('b' === r) return { type: 'message', data: B(t.substring(1), e) }
        return d[r] ? (t.length > 1 ? { type: d[r], data: t.substring(1) } : { type: d[r] }) : y
      }
      const R = String.fromCharCode(30)
      class _ extends p.Q {
        constructor(t) {
          super(),
            (this.writable = !1),
            f(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.readyState = ''),
            (this.socket = t.socket)
        }
        onError(t, e) {
          const r = new Error(t)
          return (r.type = 'TransportError'), (r.description = e), super.emit('error', r), this
        }
        open() {
          return (
            ('closed' !== this.readyState && '' !== this.readyState) ||
              ((this.readyState = 'opening'), this.doOpen()),
            this
          )
        }
        close() {
          return (
            ('opening' !== this.readyState && 'open' !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          )
        }
        send(t) {
          'open' === this.readyState && this.write(t)
        }
        onOpen() {
          ;(this.readyState = 'open'), (this.writable = !0), super.emit('open')
        }
        onData(t) {
          const e = C(t, this.socket.binaryType)
          this.onPacket(e)
        }
        onPacket(t) {
          super.emit('packet', t)
        }
        onClose() {
          ;(this.readyState = 'closed'), super.emit('close')
        }
      }
      var S = r(2281),
        O = r(1830)
      class x extends _ {
        constructor() {
          super(...arguments), (this.polling = !1)
        }
        get name() {
          return 'polling'
        }
        doOpen() {
          this.poll()
        }
        pause(t) {
          this.readyState = 'pausing'
          const e = () => {
            ;(this.readyState = 'paused'), t()
          }
          if (this.polling || !this.writable) {
            let t = 0
            this.polling &&
              (t++,
              this.once('pollComplete', function () {
                --t || e()
              })),
              this.writable ||
                (t++,
                this.once('drain', function () {
                  --t || e()
                }))
          } else e()
        }
        poll() {
          ;(this.polling = !0), this.doPoll(), this.emit('poll')
        }
        onData(t) {
          ;((t, e) => {
            const r = t.split(R),
              n = []
            for (let i = 0; i < r.length; i++) {
              const t = C(r[i], e)
              if ((n.push(t), 'error' === t.type)) break
            }
            return n
          })(t, this.socket.binaryType).forEach((t) => {
            if (
              ('opening' === this.readyState && 'open' === t.type && this.onOpen(),
              'close' === t.type)
            )
              return this.onClose(), !1
            this.onPacket(t)
          }),
            'closed' !== this.readyState &&
              ((this.polling = !1),
              this.emit('pollComplete'),
              'open' === this.readyState && this.poll())
        }
        doClose() {
          const t = () => {
            this.write([{ type: 'close' }])
          }
          'open' === this.readyState ? t() : this.once('open', t)
        }
        write(t) {
          ;(this.writable = !1),
            ((t, e) => {
              const r = t.length,
                n = new Array(r)
              let i = 0
              t.forEach((t, s) => {
                w(t, !1, (t) => {
                  ;(n[s] = t), ++i === r && e(n.join(R))
                })
              })
            })(t, (t) => {
              this.doWrite(t, () => {
                ;(this.writable = !0), this.emit('drain')
              })
            })
        }
        uri() {
          let t = this.query || {}
          const e = this.opts.secure ? 'https' : 'http'
          let r = ''
          !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = S()),
            this.supportsBinary || t.sid || (t.b64 = 1),
            this.opts.port &&
              (('https' === e && 443 !== Number(this.opts.port)) ||
                ('http' === e && 80 !== Number(this.opts.port))) &&
              (r = ':' + this.opts.port)
          const n = O.encode(t)
          return (
            e +
            '://' +
            (-1 !== this.opts.hostname.indexOf(':')
              ? '[' + this.opts.hostname + ']'
              : this.opts.hostname) +
            r +
            this.opts.path +
            (n.length ? '?' + n : '')
          )
        }
      }
      function N() {}
      const L = null != new a({ xdomain: !1 }).responseType
      class U extends p.Q {
        constructor(t, e) {
          super(),
            f(this, e),
            (this.opts = e),
            (this.method = e.method || 'GET'),
            (this.uri = t),
            (this.async = !1 !== e.async),
            (this.data = void 0 !== e.data ? e.data : null),
            this.create()
        }
        create() {
          const t = h(
            this.opts,
            'agent',
            'pfx',
            'key',
            'passphrase',
            'cert',
            'ca',
            'ciphers',
            'rejectUnauthorized',
            'autoUnref'
          )
          ;(t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs)
          const e = (this.xhr = new a(t))
          try {
            e.open(this.method, this.uri, this.async)
            try {
              if (this.opts.extraHeaders) {
                e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0)
                for (let t in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(t) &&
                    e.setRequestHeader(t, this.opts.extraHeaders[t])
              }
            } catch (r) {}
            if ('POST' === this.method)
              try {
                e.setRequestHeader('Content-type', 'text/plain;charset=UTF-8')
              } catch (r) {}
            try {
              e.setRequestHeader('Accept', '*/*')
            } catch (r) {}
            'withCredentials' in e && (e.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout && (e.timeout = this.opts.requestTimeout),
              (e.onreadystatechange = () => {
                4 === e.readyState &&
                  (200 === e.status || 1223 === e.status
                    ? this.onLoad()
                    : this.setTimeoutFn(() => {
                        this.onError('number' === typeof e.status ? e.status : 0)
                      }, 0))
              }),
              e.send(this.data)
          } catch (r) {
            return void this.setTimeoutFn(() => {
              this.onError(r)
            }, 0)
          }
          'undefined' !== typeof document &&
            ((this.index = U.requestsCount++), (U.requests[this.index] = this))
        }
        onSuccess() {
          this.emit('success'), this.cleanup()
        }
        onData(t) {
          this.emit('data', t), this.onSuccess()
        }
        onError(t) {
          this.emit('error', t), this.cleanup(!0)
        }
        cleanup(t) {
          if ('undefined' !== typeof this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = N), t))
              try {
                this.xhr.abort()
              } catch (e) {}
            'undefined' !== typeof document && delete U.requests[this.index], (this.xhr = null)
          }
        }
        onLoad() {
          const t = this.xhr.responseText
          null !== t && this.onData(t)
        }
        abort() {
          this.cleanup()
        }
      }
      if (((U.requestsCount = 0), (U.requests = {}), 'undefined' !== typeof document))
        if ('function' === typeof attachEvent) attachEvent('onunload', I)
        else if ('function' === typeof addEventListener) {
          addEventListener('onpagehide' in o ? 'pagehide' : 'unload', I, !1)
        }
      function I() {
        for (let t in U.requests) U.requests.hasOwnProperty(t) && U.requests[t].abort()
      }
      const P =
          'function' === typeof Promise && 'function' === typeof Promise.resolve
            ? (t) => Promise.resolve().then(t)
            : (t, e) => e(t, 0),
        M = o.WebSocket || o.MozWebSocket
      r(8764).Buffer
      const j =
        'undefined' !== typeof navigator &&
        'string' === typeof navigator.product &&
        'reactnative' === navigator.product.toLowerCase()
      class q extends _ {
        constructor(t) {
          super(t), (this.supportsBinary = !t.forceBase64)
        }
        get name() {
          return 'websocket'
        }
        doOpen() {
          if (!this.check()) return
          const t = this.uri(),
            e = this.opts.protocols,
            r = j
              ? {}
              : h(
                  this.opts,
                  'agent',
                  'perMessageDeflate',
                  'pfx',
                  'key',
                  'passphrase',
                  'cert',
                  'ca',
                  'ciphers',
                  'rejectUnauthorized',
                  'localAddress',
                  'protocolVersion',
                  'origin',
                  'maxPayload',
                  'family',
                  'checkServerIdentity'
                )
          this.opts.extraHeaders && (r.headers = this.opts.extraHeaders)
          try {
            this.ws = j ? new M(t, e, r) : e ? new M(t, e) : new M(t)
          } catch (n) {
            return this.emit('error', n)
          }
          ;(this.ws.binaryType = this.socket.binaryType || 'arraybuffer'), this.addEventListeners()
        }
        addEventListeners() {
          ;(this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
          }),
            (this.ws.onclose = this.onClose.bind(this)),
            (this.ws.onmessage = (t) => this.onData(t.data)),
            (this.ws.onerror = (t) => this.onError('websocket error', t))
        }
        write(t) {
          this.writable = !1
          for (let e = 0; e < t.length; e++) {
            const r = t[e],
              n = e === t.length - 1
            w(r, this.supportsBinary, (t) => {
              try {
                this.ws.send(t)
              } catch (e) {}
              n &&
                P(() => {
                  ;(this.writable = !0), this.emit('drain')
                }, this.setTimeoutFn)
            })
          }
        }
        doClose() {
          'undefined' !== typeof this.ws && (this.ws.close(), (this.ws = null))
        }
        uri() {
          let t = this.query || {}
          const e = this.opts.secure ? 'wss' : 'ws'
          let r = ''
          this.opts.port &&
            (('wss' === e && 443 !== Number(this.opts.port)) ||
              ('ws' === e && 80 !== Number(this.opts.port))) &&
            (r = ':' + this.opts.port),
            this.opts.timestampRequests && (t[this.opts.timestampParam] = S()),
            this.supportsBinary || (t.b64 = 1)
          const n = O.encode(t)
          return (
            e +
            '://' +
            (-1 !== this.opts.hostname.indexOf(':')
              ? '[' + this.opts.hostname + ']'
              : this.opts.hostname) +
            r +
            this.opts.path +
            (n.length ? '?' + n : '')
          )
        }
        check() {
          return !!M && !('__initialize' in M && this.name === q.prototype.name)
        }
      }
      const D = {
        websocket: q,
        polling: class extends x {
          constructor(t) {
            if ((super(t), 'undefined' !== typeof location)) {
              const e = 'https:' === location.protocol
              let r = location.port
              r || (r = e ? '443' : '80'),
                (this.xd =
                  ('undefined' !== typeof location && t.hostname !== location.hostname) ||
                  r !== t.port),
                (this.xs = t.secure !== e)
            }
            const e = t && t.forceBase64
            this.supportsBinary = L && !e
          }
          request(t = {}) {
            return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new U(this.uri(), t)
          }
          doWrite(t, e) {
            const r = this.request({ method: 'POST', data: t })
            r.on('success', e),
              r.on('error', (t) => {
                this.onError('xhr post error', t)
              })
          }
          doPoll() {
            const t = this.request()
            t.on('data', this.onData.bind(this)),
              t.on('error', (t) => {
                this.onError('xhr poll error', t)
              }),
              (this.pollXhr = t)
          }
        },
      }
      class F extends p.Q {
        constructor(t, e = {}) {
          super(),
            t && 'object' === typeof t && ((e = t), (t = null)),
            t
              ? ((t = i(t)),
                (e.hostname = t.host),
                (e.secure = 'https' === t.protocol || 'wss' === t.protocol),
                (e.port = t.port),
                t.query && (e.query = t.query))
              : e.host && (e.hostname = i(e.host).host),
            f(this, e),
            (this.secure =
              null != e.secure
                ? e.secure
                : 'undefined' !== typeof location && 'https:' === location.protocol),
            e.hostname && !e.port && (e.port = this.secure ? '443' : '80'),
            (this.hostname =
              e.hostname || ('undefined' !== typeof location ? location.hostname : 'localhost')),
            (this.port =
              e.port ||
              ('undefined' !== typeof location && location.port
                ? location.port
                : this.secure
                ? '443'
                : '80')),
            (this.transports = e.transports || ['polling', 'websocket']),
            (this.readyState = ''),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: '/engine.io',
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: 't',
                rememberUpgrade: !1,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !0,
              },
              e
            )),
            (this.opts.path = this.opts.path.replace(/\/$/, '') + '/'),
            'string' === typeof this.opts.query && (this.opts.query = O.decode(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            'function' === typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                addEventListener(
                  'beforeunload',
                  () => {
                    this.transport && (this.transport.removeAllListeners(), this.transport.close())
                  },
                  !1
                ),
              'localhost' !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose('transport close')
                }),
                addEventListener('offline', this.offlineEventListener, !1))),
            this.open()
        }
        createTransport(t) {
          const e = (function (t) {
            const e = {}
            for (let r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            return e
          })(this.opts.query)
          ;(e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id)
          const r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
            query: e,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
          })
          return new D[t](r)
        }
        open() {
          let t
          if (
            this.opts.rememberUpgrade &&
            F.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf('websocket')
          )
            t = 'websocket'
          else {
            if (0 === this.transports.length)
              return void this.setTimeoutFn(() => {
                this.emitReserved('error', 'No transports available')
              }, 0)
            t = this.transports[0]
          }
          this.readyState = 'opening'
          try {
            t = this.createTransport(t)
          } catch (e) {
            return this.transports.shift(), void this.open()
          }
          t.open(), this.setTransport(t)
        }
        setTransport(t) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
              .on('drain', this.onDrain.bind(this))
              .on('packet', this.onPacket.bind(this))
              .on('error', this.onError.bind(this))
              .on('close', () => {
                this.onClose('transport close')
              })
        }
        probe(t) {
          let e = this.createTransport(t),
            r = !1
          F.priorWebsocketSuccess = !1
          const n = () => {
            r ||
              (e.send([{ type: 'ping', data: 'probe' }]),
              e.once('packet', (t) => {
                if (!r)
                  if ('pong' === t.type && 'probe' === t.data) {
                    if (((this.upgrading = !0), this.emitReserved('upgrading', e), !e)) return
                    ;(F.priorWebsocketSuccess = 'websocket' === e.name),
                      this.transport.pause(() => {
                        r ||
                          ('closed' !== this.readyState &&
                            (c(),
                            this.setTransport(e),
                            e.send([{ type: 'upgrade' }]),
                            this.emitReserved('upgrade', e),
                            (e = null),
                            (this.upgrading = !1),
                            this.flush()))
                      })
                  } else {
                    const t = new Error('probe error')
                    ;(t.transport = e.name), this.emitReserved('upgradeError', t)
                  }
              }))
          }
          function i() {
            r || ((r = !0), c(), e.close(), (e = null))
          }
          const s = (t) => {
            const r = new Error('probe error: ' + t)
            ;(r.transport = e.name), i(), this.emitReserved('upgradeError', r)
          }
          function o() {
            s('transport closed')
          }
          function a() {
            s('socket closed')
          }
          function h(t) {
            e && t.name !== e.name && i()
          }
          const c = () => {
            e.removeListener('open', n),
              e.removeListener('error', s),
              e.removeListener('close', o),
              this.off('close', a),
              this.off('upgrading', h)
          }
          e.once('open', n),
            e.once('error', s),
            e.once('close', o),
            this.once('close', a),
            this.once('upgrading', h),
            e.open()
        }
        onOpen() {
          if (
            ((this.readyState = 'open'),
            (F.priorWebsocketSuccess = 'websocket' === this.transport.name),
            this.emitReserved('open'),
            this.flush(),
            'open' === this.readyState && this.opts.upgrade && this.transport.pause)
          ) {
            let t = 0
            const e = this.upgrades.length
            for (; t < e; t++) this.probe(this.upgrades[t])
          }
        }
        onPacket(t) {
          if (
            'opening' === this.readyState ||
            'open' === this.readyState ||
            'closing' === this.readyState
          )
            switch ((this.emitReserved('packet', t), this.emitReserved('heartbeat'), t.type)) {
              case 'open':
                this.onHandshake(JSON.parse(t.data))
                break
              case 'ping':
                this.resetPingTimeout(),
                  this.sendPacket('pong'),
                  this.emitReserved('ping'),
                  this.emitReserved('pong')
                break
              case 'error':
                const e = new Error('server error')
                ;(e.code = t.data), this.onError(e)
                break
              case 'message':
                this.emitReserved('data', t.data), this.emitReserved('message', t.data)
            }
        }
        onHandshake(t) {
          this.emitReserved('handshake', t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            this.onOpen(),
            'closed' !== this.readyState && this.resetPingTimeout()
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose('ping timeout')
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref()
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length ? this.emitReserved('drain') : this.flush()
        }
        flush() {
          'closed' !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length &&
            (this.transport.send(this.writeBuffer),
            (this.prevBufferLen = this.writeBuffer.length),
            this.emitReserved('flush'))
        }
        write(t, e, r) {
          return this.sendPacket('message', t, e, r), this
        }
        send(t, e, r) {
          return this.sendPacket('message', t, e, r), this
        }
        sendPacket(t, e, r, n) {
          if (
            ('function' === typeof e && ((n = e), (e = void 0)),
            'function' === typeof r && ((n = r), (r = null)),
            'closing' === this.readyState || 'closed' === this.readyState)
          )
            return
          ;(r = r || {}).compress = !1 !== r.compress
          const i = { type: t, data: e, options: r }
          this.emitReserved('packetCreate', i),
            this.writeBuffer.push(i),
            n && this.once('flush', n),
            this.flush()
        }
        close() {
          const t = () => {
              this.onClose('forced close'), this.transport.close()
            },
            e = () => {
              this.off('upgrade', e), this.off('upgradeError', e), t()
            },
            r = () => {
              this.once('upgrade', e), this.once('upgradeError', e)
            }
          return (
            ('opening' !== this.readyState && 'open' !== this.readyState) ||
              ((this.readyState = 'closing'),
              this.writeBuffer.length
                ? this.once('drain', () => {
                    this.upgrading ? r() : t()
                  })
                : this.upgrading
                ? r()
                : t()),
            this
          )
        }
        onError(t) {
          ;(F.priorWebsocketSuccess = !1),
            this.emitReserved('error', t),
            this.onClose('transport error', t)
        }
        onClose(t, e) {
          ;('opening' !== this.readyState &&
            'open' !== this.readyState &&
            'closing' !== this.readyState) ||
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners('close'),
            this.transport.close(),
            this.transport.removeAllListeners(),
            'function' === typeof removeEventListener &&
              removeEventListener('offline', this.offlineEventListener, !1),
            (this.readyState = 'closed'),
            (this.id = null),
            this.emitReserved('close', t, e),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0))
        }
        filterUpgrades(t) {
          const e = []
          let r = 0
          const n = t.length
          for (; r < n; r++) ~this.transports.indexOf(t[r]) && e.push(t[r])
          return e
        }
      }
      F.protocol = 4
      F.protocol
      const V = 'function' === typeof ArrayBuffer,
        z = Object.prototype.toString,
        Y =
          'function' === typeof Blob ||
          ('undefined' !== typeof Blob && '[object BlobConstructor]' === z.call(Blob)),
        H =
          'function' === typeof File ||
          ('undefined' !== typeof File && '[object FileConstructor]' === z.call(File))
      function K(t) {
        return (
          (V &&
            (t instanceof ArrayBuffer ||
              ((t) =>
                'function' === typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(t)
                  : t.buffer instanceof ArrayBuffer)(t))) ||
          (Y && t instanceof Blob) ||
          (H && t instanceof File)
        )
      }
      function W(t, e) {
        if (!t || 'object' !== typeof t) return !1
        if (Array.isArray(t)) {
          for (let e = 0, r = t.length; e < r; e++) if (W(t[e])) return !0
          return !1
        }
        if (K(t)) return !0
        if (t.toJSON && 'function' === typeof t.toJSON && 1 === arguments.length)
          return W(t.toJSON(), !0)
        for (const r in t) if (Object.prototype.hasOwnProperty.call(t, r) && W(t[r])) return !0
        return !1
      }
      function J(t) {
        const e = [],
          r = t.data,
          n = t
        return (n.data = X(r, e)), (n.attachments = e.length), { packet: n, buffers: e }
      }
      function X(t, e) {
        if (!t) return t
        if (K(t)) {
          const r = { _placeholder: !0, num: e.length }
          return e.push(t), r
        }
        if (Array.isArray(t)) {
          const r = new Array(t.length)
          for (let n = 0; n < t.length; n++) r[n] = X(t[n], e)
          return r
        }
        if ('object' === typeof t && !(t instanceof Date)) {
          const r = {}
          for (const n in t) t.hasOwnProperty(n) && (r[n] = X(t[n], e))
          return r
        }
        return t
      }
      function $(t, e) {
        return (t.data = Q(t.data, e)), (t.attachments = void 0), t
      }
      function Q(t, e) {
        if (!t) return t
        if (t && t._placeholder) return e[t.num]
        if (Array.isArray(t)) for (let r = 0; r < t.length; r++) t[r] = Q(t[r], e)
        else if ('object' === typeof t)
          for (const r in t) t.hasOwnProperty(r) && (t[r] = Q(t[r], e))
        return t
      }
      const G = 5
      var Z
      !(function (t) {
        ;(t[(t.CONNECT = 0)] = 'CONNECT'),
          (t[(t.DISCONNECT = 1)] = 'DISCONNECT'),
          (t[(t.EVENT = 2)] = 'EVENT'),
          (t[(t.ACK = 3)] = 'ACK'),
          (t[(t.CONNECT_ERROR = 4)] = 'CONNECT_ERROR'),
          (t[(t.BINARY_EVENT = 5)] = 'BINARY_EVENT'),
          (t[(t.BINARY_ACK = 6)] = 'BINARY_ACK')
      })(Z || (Z = {}))
      class tt {
        encode(t) {
          return (t.type !== Z.EVENT && t.type !== Z.ACK) || !W(t)
            ? [this.encodeAsString(t)]
            : ((t.type = t.type === Z.EVENT ? Z.BINARY_EVENT : Z.BINARY_ACK),
              this.encodeAsBinary(t))
        }
        encodeAsString(t) {
          let e = '' + t.type
          return (
            (t.type !== Z.BINARY_EVENT && t.type !== Z.BINARY_ACK) || (e += t.attachments + '-'),
            t.nsp && '/' !== t.nsp && (e += t.nsp + ','),
            null != t.id && (e += t.id),
            null != t.data && (e += JSON.stringify(t.data)),
            e
          )
        }
        encodeAsBinary(t) {
          const e = J(t),
            r = this.encodeAsString(e.packet),
            n = e.buffers
          return n.unshift(r), n
        }
      }
      class et extends p.Q {
        constructor() {
          super()
        }
        add(t) {
          let e
          if ('string' === typeof t)
            (e = this.decodeString(t)),
              e.type === Z.BINARY_EVENT || e.type === Z.BINARY_ACK
                ? ((this.reconstructor = new rt(e)),
                  0 === e.attachments && super.emitReserved('decoded', e))
                : super.emitReserved('decoded', e)
          else {
            if (!K(t) && !t.base64) throw new Error('Unknown type: ' + t)
            if (!this.reconstructor)
              throw new Error('got binary data when not reconstructing a packet')
            ;(e = this.reconstructor.takeBinaryData(t)),
              e && ((this.reconstructor = null), super.emitReserved('decoded', e))
          }
        }
        decodeString(t) {
          let e = 0
          const r = { type: Number(t.charAt(0)) }
          if (void 0 === Z[r.type]) throw new Error('unknown packet type ' + r.type)
          if (r.type === Z.BINARY_EVENT || r.type === Z.BINARY_ACK) {
            const n = e + 1
            for (; '-' !== t.charAt(++e) && e != t.length; );
            const i = t.substring(n, e)
            if (i != Number(i) || '-' !== t.charAt(e)) throw new Error('Illegal attachments')
            r.attachments = Number(i)
          }
          if ('/' === t.charAt(e + 1)) {
            const n = e + 1
            for (; ++e; ) {
              if (',' === t.charAt(e)) break
              if (e === t.length) break
            }
            r.nsp = t.substring(n, e)
          } else r.nsp = '/'
          const n = t.charAt(e + 1)
          if ('' !== n && Number(n) == n) {
            const n = e + 1
            for (; ++e; ) {
              const r = t.charAt(e)
              if (null == r || Number(r) != r) {
                --e
                break
              }
              if (e === t.length) break
            }
            r.id = Number(t.substring(n, e + 1))
          }
          if (t.charAt(++e)) {
            const n = (function (t) {
              try {
                return JSON.parse(t)
              } catch (e) {
                return !1
              }
            })(t.substr(e))
            if (!et.isPayloadValid(r.type, n)) throw new Error('invalid payload')
            r.data = n
          }
          return r
        }
        static isPayloadValid(t, e) {
          switch (t) {
            case Z.CONNECT:
              return 'object' === typeof e
            case Z.DISCONNECT:
              return void 0 === e
            case Z.CONNECT_ERROR:
              return 'string' === typeof e || 'object' === typeof e
            case Z.EVENT:
            case Z.BINARY_EVENT:
              return Array.isArray(e) && e.length > 0
            case Z.ACK:
            case Z.BINARY_ACK:
              return Array.isArray(e)
          }
        }
        destroy() {
          this.reconstructor && this.reconstructor.finishedReconstruction()
        }
      }
      class rt {
        constructor(t) {
          ;(this.packet = t), (this.buffers = []), (this.reconPack = t)
        }
        takeBinaryData(t) {
          if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
            const t = $(this.reconPack, this.buffers)
            return this.finishedReconstruction(), t
          }
          return null
        }
        finishedReconstruction() {
          ;(this.reconPack = null), (this.buffers = [])
        }
      }
      function nt(t, e, r) {
        return (
          t.on(e, r),
          function () {
            t.off(e, r)
          }
        )
      }
      const it = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      })
      class st extends p.Q {
        constructor(t, e, r) {
          super(),
            (this.connected = !1),
            (this.disconnected = !0),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = e),
            r && r.auth && (this.auth = r.auth),
            this.io._autoConnect && this.open()
        }
        subEvents() {
          if (this.subs) return
          const t = this.io
          this.subs = [
            nt(t, 'open', this.onopen.bind(this)),
            nt(t, 'packet', this.onpacket.bind(this)),
            nt(t, 'error', this.onerror.bind(this)),
            nt(t, 'close', this.onclose.bind(this)),
          ]
        }
        get active() {
          return !!this.subs
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              'open' === this.io._readyState && this.onopen()),
            this
          )
        }
        open() {
          return this.connect()
        }
        send(...t) {
          return t.unshift('message'), this.emit.apply(this, t), this
        }
        emit(t, ...e) {
          if (it.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name')
          e.unshift(t)
          const r = { type: Z.EVENT, data: e, options: {} }
          if (
            ((r.options.compress = !1 !== this.flags.compress),
            'function' === typeof e[e.length - 1])
          ) {
            const t = this.ids++,
              n = e.pop()
            this._registerAckCallback(t, n), (r.id = t)
          }
          const n = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable
          return (
            (this.flags.volatile && (!n || !this.connected)) ||
              (this.connected ? this.packet(r) : this.sendBuffer.push(r)),
            (this.flags = {}),
            this
          )
        }
        _registerAckCallback(t, e) {
          const r = this.flags.timeout
          if (void 0 === r) return void (this.acks[t] = e)
          const n = this.io.setTimeoutFn(() => {
            delete this.acks[t]
            for (let e = 0; e < this.sendBuffer.length; e++)
              this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1)
            e.call(this, new Error('operation has timed out'))
          }, r)
          this.acks[t] = (...t) => {
            this.io.clearTimeoutFn(n), e.apply(this, [null, ...t])
          }
        }
        packet(t) {
          ;(t.nsp = this.nsp), this.io._packet(t)
        }
        onopen() {
          'function' == typeof this.auth
            ? this.auth((t) => {
                this.packet({ type: Z.CONNECT, data: t })
              })
            : this.packet({ type: Z.CONNECT, data: this.auth })
        }
        onerror(t) {
          this.connected || this.emitReserved('connect_error', t)
        }
        onclose(t) {
          ;(this.connected = !1),
            (this.disconnected = !0),
            delete this.id,
            this.emitReserved('disconnect', t)
        }
        onpacket(t) {
          if (t.nsp === this.nsp)
            switch (t.type) {
              case Z.CONNECT:
                if (t.data && t.data.sid) {
                  const e = t.data.sid
                  this.onconnect(e)
                } else
                  this.emitReserved(
                    'connect_error',
                    new Error(
                      'It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)'
                    )
                  )
                break
              case Z.EVENT:
              case Z.BINARY_EVENT:
                this.onevent(t)
                break
              case Z.ACK:
              case Z.BINARY_ACK:
                this.onack(t)
                break
              case Z.DISCONNECT:
                this.ondisconnect()
                break
              case Z.CONNECT_ERROR:
                this.destroy()
                const e = new Error(t.data.message)
                ;(e.data = t.data.data), this.emitReserved('connect_error', e)
            }
        }
        onevent(t) {
          const e = t.data || []
          null != t.id && e.push(this.ack(t.id)),
            this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
        }
        emitEvent(t) {
          if (this._anyListeners && this._anyListeners.length) {
            const e = this._anyListeners.slice()
            for (const r of e) r.apply(this, t)
          }
          super.emit.apply(this, t)
        }
        ack(t) {
          const e = this
          let r = !1
          return function (...n) {
            r || ((r = !0), e.packet({ type: Z.ACK, id: t, data: n }))
          }
        }
        onack(t) {
          const e = this.acks[t.id]
          'function' === typeof e && (e.apply(this, t.data), delete this.acks[t.id])
        }
        onconnect(t) {
          ;(this.id = t),
            (this.connected = !0),
            (this.disconnected = !1),
            this.emitBuffered(),
            this.emitReserved('connect')
        }
        emitBuffered() {
          this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => this.packet(t)),
            (this.sendBuffer = [])
        }
        ondisconnect() {
          this.destroy(), this.onclose('io server disconnect')
        }
        destroy() {
          this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)), this.io._destroy(this)
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: Z.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose('io client disconnect'),
            this
          )
        }
        close() {
          return this.disconnect()
        }
        compress(t) {
          return (this.flags.compress = t), this
        }
        get volatile() {
          return (this.flags.volatile = !0), this
        }
        timeout(t) {
          return (this.flags.timeout = t), this
        }
        onAny(t) {
          return (this._anyListeners = this._anyListeners || []), this._anyListeners.push(t), this
        }
        prependAny(t) {
          return (
            (this._anyListeners = this._anyListeners || []), this._anyListeners.unshift(t), this
          )
        }
        offAny(t) {
          if (!this._anyListeners) return this
          if (t) {
            const e = this._anyListeners
            for (let r = 0; r < e.length; r++) if (t === e[r]) return e.splice(r, 1), this
          } else this._anyListeners = []
          return this
        }
        listenersAny() {
          return this._anyListeners || []
        }
      }
      var ot = r(3010)
      class at extends p.Q {
        constructor(t, e) {
          var r
          super(),
            (this.nsps = {}),
            (this.subs = []),
            t && 'object' === typeof t && ((e = t), (t = void 0)),
            ((e = e || {}).path = e.path || '/socket.io'),
            (this.opts = e),
            f(this, e),
            this.reconnection(!1 !== e.reconnection),
            this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(e.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (r = e.randomizationFactor) && void 0 !== r ? r : 0.5
            ),
            (this.backoff = new ot({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == e.timeout ? 2e4 : e.timeout),
            (this._readyState = 'closed'),
            (this.uri = t)
          const i = e.parser || n
          ;(this.encoder = new i.Encoder()),
            (this.decoder = new i.Decoder()),
            (this._autoConnect = !1 !== e.autoConnect),
            this._autoConnect && this.open()
        }
        reconnection(t) {
          return arguments.length ? ((this._reconnection = !!t), this) : this._reconnection
        }
        reconnectionAttempts(t) {
          return void 0 === t
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this)
        }
        reconnectionDelay(t) {
          var e
          return void 0 === t
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              null === (e = this.backoff) || void 0 === e || e.setMin(t),
              this)
        }
        randomizationFactor(t) {
          var e
          return void 0 === t
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              null === (e = this.backoff) || void 0 === e || e.setJitter(t),
              this)
        }
        reconnectionDelayMax(t) {
          var e
          return void 0 === t
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              null === (e = this.backoff) || void 0 === e || e.setMax(t),
              this)
        }
        timeout(t) {
          return arguments.length ? ((this._timeout = t), this) : this._timeout
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect()
        }
        open(t) {
          if (~this._readyState.indexOf('open')) return this
          this.engine = new F(this.uri, this.opts)
          const e = this.engine,
            r = this
          ;(this._readyState = 'opening'), (this.skipReconnect = !1)
          const n = nt(e, 'open', function () {
              r.onopen(), t && t()
            }),
            i = nt(e, 'error', (e) => {
              r.cleanup(),
                (r._readyState = 'closed'),
                this.emitReserved('error', e),
                t ? t(e) : r.maybeReconnectOnOpen()
            })
          if (!1 !== this._timeout) {
            const t = this._timeout
            0 === t && n()
            const r = this.setTimeoutFn(() => {
              n(), e.close(), e.emit('error', new Error('timeout'))
            }, t)
            this.opts.autoUnref && r.unref(),
              this.subs.push(function () {
                clearTimeout(r)
              })
          }
          return this.subs.push(n), this.subs.push(i), this
        }
        connect(t) {
          return this.open(t)
        }
        onopen() {
          this.cleanup(), (this._readyState = 'open'), this.emitReserved('open')
          const t = this.engine
          this.subs.push(
            nt(t, 'ping', this.onping.bind(this)),
            nt(t, 'data', this.ondata.bind(this)),
            nt(t, 'error', this.onerror.bind(this)),
            nt(t, 'close', this.onclose.bind(this)),
            nt(this.decoder, 'decoded', this.ondecoded.bind(this))
          )
        }
        onping() {
          this.emitReserved('ping')
        }
        ondata(t) {
          this.decoder.add(t)
        }
        ondecoded(t) {
          this.emitReserved('packet', t)
        }
        onerror(t) {
          this.emitReserved('error', t)
        }
        socket(t, e) {
          let r = this.nsps[t]
          return r || ((r = new st(this, t, e)), (this.nsps[t] = r)), r
        }
        _destroy(t) {
          const e = Object.keys(this.nsps)
          for (const r of e) {
            if (this.nsps[r].active) return
          }
          this._close()
        }
        _packet(t) {
          const e = this.encoder.encode(t)
          for (let r = 0; r < e.length; r++) this.engine.write(e[r], t.options)
        }
        cleanup() {
          this.subs.forEach((t) => t()), (this.subs.length = 0), this.decoder.destroy()
        }
        _close() {
          ;(this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose('forced close'),
            this.engine && this.engine.close()
        }
        disconnect() {
          return this._close()
        }
        onclose(t) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = 'closed'),
            this.emitReserved('close', t),
            this._reconnection && !this.skipReconnect && this.reconnect()
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this
          const t = this
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(), this.emitReserved('reconnect_failed'), (this._reconnecting = !1)
          else {
            const e = this.backoff.duration()
            this._reconnecting = !0
            const r = this.setTimeoutFn(() => {
              t.skipReconnect ||
                (this.emitReserved('reconnect_attempt', t.backoff.attempts),
                t.skipReconnect ||
                  t.open((e) => {
                    e
                      ? ((t._reconnecting = !1),
                        t.reconnect(),
                        this.emitReserved('reconnect_error', e))
                      : t.onreconnect()
                  }))
            }, e)
            this.opts.autoUnref && r.unref(),
              this.subs.push(function () {
                clearTimeout(r)
              })
          }
        }
        onreconnect() {
          const t = this.backoff.attempts
          ;(this._reconnecting = !1), this.backoff.reset(), this.emitReserved('reconnect', t)
        }
      }
      const ht = {}
      function ct(t, e) {
        'object' === typeof t && ((e = t), (t = void 0))
        const r = (function (t, e = '', r) {
            let n = t
            ;(r = r || ('undefined' !== typeof location && location)),
              null == t && (t = r.protocol + '//' + r.host),
              'string' === typeof t &&
                ('/' === t.charAt(0) && (t = '/' === t.charAt(1) ? r.protocol + t : r.host + t),
                /^(https?|wss?):\/\//.test(t) ||
                  (t = 'undefined' !== typeof r ? r.protocol + '//' + t : 'https://' + t),
                (n = i(t))),
              n.port ||
                (/^(http|ws)$/.test(n.protocol)
                  ? (n.port = '80')
                  : /^(http|ws)s$/.test(n.protocol) && (n.port = '443')),
              (n.path = n.path || '/')
            const s = -1 !== n.host.indexOf(':') ? '[' + n.host + ']' : n.host
            return (
              (n.id = n.protocol + '://' + s + ':' + n.port + e),
              (n.href = n.protocol + '://' + s + (r && r.port === n.port ? '' : ':' + n.port)),
              n
            )
          })(t, (e = e || {}).path || '/socket.io'),
          n = r.source,
          s = r.id,
          o = r.path,
          a = ht[s] && o in ht[s].nsps
        let h
        return (
          e.forceNew || e['force new connection'] || !1 === e.multiplex || a
            ? (h = new at(n, e))
            : (ht[s] || (ht[s] = new at(n, e)), (h = ht[s])),
          r.query && !e.query && (e.query = r.queryKey),
          h.socket(r.path, e)
        )
      }
      Object.assign(ct, { Manager: at, Socket: st, io: ct, connect: ct })
    },
  },
])
