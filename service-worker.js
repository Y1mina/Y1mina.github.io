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
    "revision": "810791ae62c62bcc999e3d8f7f1242bd"
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
    "url": "assets/js/1.d112b0b5.js",
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
    "url": "assets/js/12.8daec512.js",
    "revision": "abef476360cee8a93e81ce167e48015d"
  },
  {
    "url": "assets/js/13.9422b4fc.js",
    "revision": "db1d989744ef17f4d6e062658e9f4508"
  },
  {
    "url": "assets/js/14.795a1ecc.js",
    "revision": "fadbf5bb18a68e25d3e4ad57655eb146"
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
    "url": "assets/js/17.6d8c550e.js",
    "revision": "ec48824028dfa0b249fb69912dfcfa31"
  },
  {
    "url": "assets/js/18.ccb1f5a6.js",
    "revision": "4618a2a9e799f30e7bb8423bdc449866"
  },
  {
    "url": "assets/js/4.81e80d6d.js",
    "revision": "c026ea6cc971d554f4321bf7de725e62"
  },
  {
    "url": "assets/js/5.dc5e06a2.js",
    "revision": "9b9cb82a6d53d3683a2ebbff85546d54"
  },
  {
    "url": "assets/js/6.38b4d1d1.js",
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
    "url": "assets/js/app.8208ba58.js",
    "revision": "d6d87c5eb580b73ad682850dd1fae38f"
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
    "revision": "46015217737920a3f59d09ffb6dd113f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "aa0a20c637445099a7e9a17869f118d3"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b4298fe62d9299403162633176b6ab7d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "678f38472ce918f3b33e9c1648e5544d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "82dfd1b0fc88756e4100d476deed7936"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5263b39c07699280f5f0b2e7f9b63da1"
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
    "revision": "91a6b2c6db0223d9d326a9ed8d4e5199"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "26393f12acefeb362be73138118c50fa"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c1a947a27177e361c508deeece3bcbca"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ba67b4820230e546252f8e1e16ade741"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e6edddd5206e126b21c68cde6e3612a7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "cc27ed29891f40148ee506cbcf7f84d8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a3dd5b1900d5b03ce9c262bf3acea6c4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "67783731e57eff0b64c3f67475e43604"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4450448657c4235216e3d9aab72b68c7"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6b5ffaa02a3936b7ceaff667522b586d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2daf4eaa0f1528a86f0c7c13fbff4a42"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d3b1d43abe8d9dc5b86dbfc43f2130bc"
  },
  {
    "url": "timeline/index.html",
    "revision": "a95376d2d2860e0072c15f18e986c5fe"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f3a2a2636de85474c52cc7ab59980514"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b6739d4e2ad16562322d060b8c5068a0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "acc7e207315e17a5e85be57d7930d666"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "26c3e5fe12b0994988d14c371bd1c963"
  },
  {
    "url": "生活分享/life.html",
    "revision": "78735c29d6619088eecaef45e7ca148f"
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
