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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "09df58dcf02f344836a2cbab18f142e0"
  },
  {
    "url": "assets/css/0.styles.d16b9b0d.css",
    "revision": "672bddc0c474245216ba8bf5f2356064"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.d28bf57f.js",
    "revision": "a5ccc1ee114b38d98965cf28f7c8a4f0"
  },
  {
    "url": "assets/js/10.33f76f26.js",
    "revision": "220f65ea638281da19c0b0a7cdd4a305"
  },
  {
    "url": "assets/js/11.25089477.js",
    "revision": "4ef4bceb3f3fbc91dbae4f1f03563e71"
  },
  {
    "url": "assets/js/12.599433ca.js",
    "revision": "06ebae44bd8f02f95e2245a8869980fe"
  },
  {
    "url": "assets/js/13.9422b4fc.js",
    "revision": "db1d989744ef17f4d6e062658e9f4508"
  },
  {
    "url": "assets/js/14.b88a7395.js",
    "revision": "219e79fde1d615c6a0e069ac91e8c3ad"
  },
  {
    "url": "assets/js/15.6ff5bfa8.js",
    "revision": "63a1157a67f9588bcc18ea4d3ac865b9"
  },
  {
    "url": "assets/js/16.b4126a68.js",
    "revision": "49bd3bfe51d19e41b4e1572f74d5cd9d"
  },
  {
    "url": "assets/js/17.51d35a3e.js",
    "revision": "55481fc8883194f5debcff1a4647ed4a"
  },
  {
    "url": "assets/js/18.0dcebe79.js",
    "revision": "5d3da8e42f8901487960079e1f92d613"
  },
  {
    "url": "assets/js/4.86f2a9b9.js",
    "revision": "c026ea6cc971d554f4321bf7de725e62"
  },
  {
    "url": "assets/js/5.f86740fb.js",
    "revision": "9b9cb82a6d53d3683a2ebbff85546d54"
  },
  {
    "url": "assets/js/6.c53e0db8.js",
    "revision": "4a16595e3026c4ee936f4fabdb399486"
  },
  {
    "url": "assets/js/7.d51dfeed.js",
    "revision": "0c87ed99af5b16be211472c8f40f98cd"
  },
  {
    "url": "assets/js/8.c32581b2.js",
    "revision": "75bbb0b04f31e38bddf06c1e7f804ec4"
  },
  {
    "url": "assets/js/9.dd890fc4.js",
    "revision": "03da552e728a7b189acc16c7b0388b4b"
  },
  {
    "url": "assets/js/app.49519e2b.js",
    "revision": "ff9fa164193d360ad559b53ef65e98c9"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c6937b0c.js",
    "revision": "81ef84d370addbda5a2e08aa6861f5f8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "3051310ec10942bfc895bd3775c2a758"
  },
  {
    "url": "categories/java/index.html",
    "revision": "800a773e7ed401624891c819a60b339a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "099ea519d77b4390af74772c69b1364b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "df5c4339305ed313b04f3cc78d5f74c7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e52b8179dbb2b3f1b693d05d005f5937"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a4382190650d91a505bc6a99c89e8fee"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "91908d1770ef39714978efc71bac75e4"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ac8b6b6b0715b082121b4ed9760df03c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "68e63791e5f0873db47fc16b4bdeac14"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "913d6f561faf60ee4a6f57d855b362bb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b2db6a79dc2693a3202c57b0935633a5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0eb0b0c7ac07a85c1f5a6121bf20e9a0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1ca81780f79756abd2e7d787963c3e95"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "23238842765b4bfb3a51a2629b80b85c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a86fc8a1cd1305e2e8dd924761305f27"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "04921dd7f8e196cd7e912de74ece2e86"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0de2fe0f1f4cae247094a91b55965cc2"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "2fe09adb66cec66daa95b03ec47574ec"
  },
  {
    "url": "timeline/index.html",
    "revision": "ab96004fbd1b15d387110b4414eba643"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b58cfb96e91e9289a21b9a72f8b729a9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ef322b92b956976178fc3fb4cf3f3151"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "90b454866010c4652f4c7c52f82598f8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "48551c8aea8a6346ab4d6cfa906882fd"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4b4cdcae8dfdc81b4988491ba85c7c87"
  }
].concat(self.__precacheManifest || []);
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
