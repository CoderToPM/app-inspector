/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "237ac78543407dcc881aa54c6dbc2956"
  },
  {
    "url": "assets/6d308bd9gy1fg7cnt9hf6j20t70h7782.jpg",
    "revision": "d1b909c93ce3b8478ca3cbe6c12b9e56"
  },
  {
    "url": "assets/7dfcf2f7gw1f77ev6csw5g20s50iwe81.gif",
    "revision": "f451c80694ab147dcd9b1dbf6eb1d5f4"
  },
  {
    "url": "assets/css/0.styles.5a835115.css",
    "revision": "8f760517119e6c64a72834cd48586c2c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16158d8d.js",
    "revision": "1f839e0a5d082626123ed4efa06afc1c"
  },
  {
    "url": "assets/js/11.3cf600da.js",
    "revision": "a5b13f92d1145ad037fc4670c5aaedab"
  },
  {
    "url": "assets/js/2.62e78fdc.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.004229b0.js",
    "revision": "0f0280fb8f975c1aac256ca8dd18777d"
  },
  {
    "url": "assets/js/4.f7e54eeb.js",
    "revision": "1b6bac80795f25659c1a9aa35c7a777e"
  },
  {
    "url": "assets/js/5.c0a0853c.js",
    "revision": "acea13ddb5cbd708f9dbb1eb527a5639"
  },
  {
    "url": "assets/js/6.c27e1dc5.js",
    "revision": "a3364ff8ec51ede7b4dc7a8d4fadbaac"
  },
  {
    "url": "assets/js/7.9baeb051.js",
    "revision": "d606e03d6abfbc69770890080ef65bac"
  },
  {
    "url": "assets/js/8.1545dd59.js",
    "revision": "9f338986214e1203716e18b9f14d017b"
  },
  {
    "url": "assets/js/9.bf4c86d5.js",
    "revision": "9d2a45575c28848eccab16679c86b1df"
  },
  {
    "url": "assets/js/app.57f14c4e.js",
    "revision": "2db397cd0d90100df0736a11daa219bb"
  },
  {
    "url": "guide/get-device-id.html",
    "revision": "8911421aa1a22c4a3c6fbba8ae609309"
  },
  {
    "url": "guide/install.html",
    "revision": "e8e135dcdbeb1e693c24268405a138b8"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "0e9063d300ac62d352928ff5149b21bf"
  },
  {
    "url": "index.html",
    "revision": "8e5c9010abad93361fe12b2bafc26d7b"
  },
  {
    "url": "zh/guide/get-device-id.html",
    "revision": "2a80c9bf75a3a1090f2bfd50a4992e33"
  },
  {
    "url": "zh/guide/install.html",
    "revision": "db5e27498d0ac13385cd9d07c2c29baf"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "8db25ef41b6b0227a153a1a410ea2799"
  },
  {
    "url": "zh/index.html",
    "revision": "3b9e6eaeae803008145194f8812fa7d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
