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
    "revision": "0a3942768da986fcd5c032721be4cf28"
  },
  {
    "url": "about/index.html",
    "revision": "4ba04272719c3fd1a910c0d67d866bd9"
  },
  {
    "url": "assets/css/0.styles.12467bf8.css",
    "revision": "5406176545cd1ae87153b5ccc95eada6"
  },
  {
    "url": "assets/js/1.a782ce55.js",
    "revision": "a43577738ebcd95577ffca7d459b8b4f"
  },
  {
    "url": "assets/js/10.92757891.js",
    "revision": "dc1f305b52dfe168b32b8025c06afa74"
  },
  {
    "url": "assets/js/11.de91bc0a.js",
    "revision": "513586647fff114706c3426bcbe5106e"
  },
  {
    "url": "assets/js/12.4b9357da.js",
    "revision": "5f652ebed70202c4bddddfd8aef24486"
  },
  {
    "url": "assets/js/13.c7039f48.js",
    "revision": "4d984d814c633a01e0ed1073f694142f"
  },
  {
    "url": "assets/js/14.1b9cac39.js",
    "revision": "48883c9f7cd844aa3f4c168d9e0ff090"
  },
  {
    "url": "assets/js/15.74617f4b.js",
    "revision": "a87796b962f7a418dbf9a29c4ba92b94"
  },
  {
    "url": "assets/js/16.2bc8f727.js",
    "revision": "33bbfe0c408b4a0fcf595d282102c2f3"
  },
  {
    "url": "assets/js/17.26573f0c.js",
    "revision": "609b56ea677e0b63a5d3c419d20364a2"
  },
  {
    "url": "assets/js/18.d033b199.js",
    "revision": "a096ef77f30a6cb8a47ae2b7d6bf917e"
  },
  {
    "url": "assets/js/19.831a9889.js",
    "revision": "841f909fa2747939a5d9b93e3625ab10"
  },
  {
    "url": "assets/js/2.2bfaa8a1.js",
    "revision": "8100899915558b7c3ec00b5fab96894c"
  },
  {
    "url": "assets/js/20.7a935309.js",
    "revision": "cdacb87922700fbe9c12f976122a1152"
  },
  {
    "url": "assets/js/21.257e6cce.js",
    "revision": "d74b2303ad1aae7f5fac7bb9b3e21e6b"
  },
  {
    "url": "assets/js/22.90420739.js",
    "revision": "8c4ee9a0f6f4eebc9fc7a6a84a06f9fe"
  },
  {
    "url": "assets/js/23.2b3c4746.js",
    "revision": "35fe969259c77bd1639fb54a1df781ec"
  },
  {
    "url": "assets/js/24.9d71d2b6.js",
    "revision": "a2d6ce4126b1c0ff83ed4e6a8e45d749"
  },
  {
    "url": "assets/js/25.5f89d4d9.js",
    "revision": "2559fd406e2d9baa085f757c1f96dec7"
  },
  {
    "url": "assets/js/26.d73c86b9.js",
    "revision": "2579393bd54d7dcd6cc3b1a5737f9b12"
  },
  {
    "url": "assets/js/27.846c989e.js",
    "revision": "f052cf4a50e5ac0ab2ba0c1f63de707f"
  },
  {
    "url": "assets/js/28.66c15a83.js",
    "revision": "d222481043ba68919e86c214af03c196"
  },
  {
    "url": "assets/js/29.23e1be12.js",
    "revision": "85a4a2c2151f7722babed998f43194f3"
  },
  {
    "url": "assets/js/30.d610dc26.js",
    "revision": "e638576d66dd109f2c6502313c1379ed"
  },
  {
    "url": "assets/js/31.ea934140.js",
    "revision": "271a7a896f2cfd92326d7e6e105eac8e"
  },
  {
    "url": "assets/js/32.f92d2d7f.js",
    "revision": "795da701bc1cbcb230e355a83800630e"
  },
  {
    "url": "assets/js/33.34a42bd3.js",
    "revision": "89f49df96b0530170df9f493d64e11cc"
  },
  {
    "url": "assets/js/34.186a6fa8.js",
    "revision": "e6f4b5a6782812d477f1b769c45aae32"
  },
  {
    "url": "assets/js/35.a909c69f.js",
    "revision": "149629ae4fbef33c6b1bbc60fc7e7183"
  },
  {
    "url": "assets/js/36.6d22a830.js",
    "revision": "5f0a904f03f62dd13c2a9ecb94f7b30c"
  },
  {
    "url": "assets/js/37.4b77361c.js",
    "revision": "8457fca52991dd051cea626be02e5ab0"
  },
  {
    "url": "assets/js/38.add33ed5.js",
    "revision": "d362e21e836047f3bca6a84b43bcbe52"
  },
  {
    "url": "assets/js/39.925f27ee.js",
    "revision": "1ab36aaeb68db487b54ab423e1febc2d"
  },
  {
    "url": "assets/js/40.6ab3b7e7.js",
    "revision": "1349c6b665c4a526ea12824d5f0915ab"
  },
  {
    "url": "assets/js/41.c4eb69c7.js",
    "revision": "bdb2dea1aa35841d21b5a7f03995e580"
  },
  {
    "url": "assets/js/5.26db3257.js",
    "revision": "e8a6f5e6b7e70be9f839d7088d430ea9"
  },
  {
    "url": "assets/js/6.e96b8fbe.js",
    "revision": "9cc867a057d38e0a5c79ee8a35ceae0a"
  },
  {
    "url": "assets/js/7.3b23d05c.js",
    "revision": "340d316b39d5168c61d0058b5bb1eb01"
  },
  {
    "url": "assets/js/8.9f3f00ea.js",
    "revision": "161a24230bbe95d15ae182728d8abf5e"
  },
  {
    "url": "assets/js/9.5befe0ff.js",
    "revision": "b18a5df163af961017e539fdc595df5e"
  },
  {
    "url": "assets/js/app.f40ceed7.js",
    "revision": "4cad3cf05470f3ebf6771e71221ef07f"
  },
  {
    "url": "assets/js/vendors~flowchart.6246eb6a.js",
    "revision": "4c1dea738df39292936a8565cd354c88"
  },
  {
    "url": "avatar.jpg",
    "revision": "2091260c8a669edfb842504713178ff2"
  },
  {
    "url": "belief-smash/index.html",
    "revision": "9e06f5ea7818550572a3b0f3f3715bfe"
  },
  {
    "url": "blogs/tech/index.html",
    "revision": "68d9a83fc393054c611ea3132fcc5ea2"
  },
  {
    "url": "calc-in-css/index.html",
    "revision": "11f38cdec880756f872d40a1055bc74e"
  },
  {
    "url": "categories/book/index.html",
    "revision": "64bed7fe244194fdc0f7cad0931010b2"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "c17aa2defca42817506f79d34ab5dbaa"
  },
  {
    "url": "categories/essay/page/2/index.html",
    "revision": "ab119a9858dab306ce3bb53fea9216d8"
  },
  {
    "url": "categories/index.html",
    "revision": "e8b0d93ca4d5b11388193bd9a4ce38ce"
  },
  {
    "url": "categories/tech/index.html",
    "revision": "e00713c925fa21d8b71a25eaae0be367"
  },
  {
    "url": "centering-in-css/index.html",
    "revision": "e739c14deab0166343a85976fbfc838c"
  },
  {
    "url": "comment/index.html",
    "revision": "22bad0ee52440e531604f103f7f9283f"
  },
  {
    "url": "css-media-queries/index.html",
    "revision": "a07cbe2a27c80df860d784a46a6d1b33"
  },
  {
    "url": "diary-1/index.html",
    "revision": "6c1e3ad7df6085bdff76b5a1af528b23"
  },
  {
    "url": "efficiency-tips/index.html",
    "revision": "cf717bf6dfbd5fedaa786ab8409d0516"
  },
  {
    "url": "index.html",
    "revision": "6ff6dfad91ab11e7bc8b66b31f1a81fe"
  },
  {
    "url": "js/typing.js",
    "revision": "8cd550a4208c963e4cb814b605c807e0"
  },
  {
    "url": "logo.png",
    "revision": "c196d904e71d53f7ea38cdabc8b58478"
  },
  {
    "url": "long-term-habit/index.html",
    "revision": "700ca3d3649ab304cddcf94a8bc28617"
  },
  {
    "url": "long-termism/index.html",
    "revision": "08e304e21244919b58a662cc09099d88"
  },
  {
    "url": "man-history/index.html",
    "revision": "a86dbb324efe693f03f1c0daa3d35317"
  },
  {
    "url": "os-tutorial/index.html",
    "revision": "f498f23e19ebd1f283ff504d26886970"
  },
  {
    "url": "perfect-life/index.html",
    "revision": "97587ea35a0045a8982d70c70c3f4374"
  },
  {
    "url": "promise-1/index.html",
    "revision": "fbf986a1fe96564ecfab5d5a4832bb3e"
  },
  {
    "url": "rich-dad/index.html",
    "revision": "2bb0b33aebd341b8efccce4b9b7e1b24"
  },
  {
    "url": "set-a-goal/index.html",
    "revision": "f9d9604c24709a3a5ad0cad981553c45"
  },
  {
    "url": "tag/book/index.html",
    "revision": "bdc1f3cdd1f73d97b5ba0f20fb1d1fef"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a47f40c5e527322cdc65e19490d828a2"
  },
  {
    "url": "tag/efficiency/index.html",
    "revision": "29f59271d601e05721e08cb921b38dcd"
  },
  {
    "url": "tag/habit/index.html",
    "revision": "ab92fe41ec8d7dd79ae309ec89b41f85"
  },
  {
    "url": "tag/index.html",
    "revision": "8e2515da1a446563a71c08b536e47941"
  },
  {
    "url": "tag/OS/index.html",
    "revision": "7228134d49b3621056ed7f1bc1e51250"
  },
  {
    "url": "tag/Promise/index.html",
    "revision": "fd8298ff543ffb9ce7ef52d87009773c"
  },
  {
    "url": "tag/thought/index.html",
    "revision": "44a65f1ea01064483260235030268e5a"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "f81f4c84594d08f5fefda18be3094fba"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "722839afeacf4adfca307e9d17d3a09b"
  },
  {
    "url": "thought-1/index.html",
    "revision": "d52f4fc29a64d42165887cb1194f7daa"
  },
  {
    "url": "thought-2/index.html",
    "revision": "d3c58cc65ef67797788d8900ec853d41"
  },
  {
    "url": "thought-3/index.html",
    "revision": "315e405cd451a1259d41c3c19a4f605c"
  },
  {
    "url": "thought-4/index.html",
    "revision": "313f8b15e8d8d1ce53ad7afa560d180d"
  },
  {
    "url": "time-friend/index.html",
    "revision": "d4abcc7ee9aa44c884abb8a8383a6eb0"
  },
  {
    "url": "time-go-rich/index.html",
    "revision": "eb5036727fedcdab53e3f7511a0ae8b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "984d9652df996fb344ce1c42bc396e6b"
  },
  {
    "url": "vuex-source-code/index.html",
    "revision": "6fafea9e03badd0318023a41c12a974e"
  },
  {
    "url": "webpack/index.html",
    "revision": "7ea4283eccd69b29140c902841744416"
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
