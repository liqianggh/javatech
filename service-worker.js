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
    "revision": "33eb33480ca1feb92d0d54c99144f067"
  },
  {
    "url": "assets/css/0.styles.eab644ea.css",
    "revision": "109def3067389abf84d21483b8df012e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.abe16a9b.js",
    "revision": "94a33aa1cebdaab0aff0f4237d16238e"
  },
  {
    "url": "assets/js/11.1db2fbf9.js",
    "revision": "74391f4385a5b3df7db0a3bcb264a726"
  },
  {
    "url": "assets/js/12.db87c722.js",
    "revision": "d69da5e8ececfd69c7239525b3905153"
  },
  {
    "url": "assets/js/13.7fbbeb54.js",
    "revision": "1119ca89a64951a327edffe16f25aa54"
  },
  {
    "url": "assets/js/14.019fb1b7.js",
    "revision": "ed650d85841f29f8eb9b658c74e45fbf"
  },
  {
    "url": "assets/js/15.4d9c79c4.js",
    "revision": "aa5783a8fd32f81b432361fb67192132"
  },
  {
    "url": "assets/js/16.22d385f6.js",
    "revision": "56b013a0c7a43a58ed624e57467cfd5d"
  },
  {
    "url": "assets/js/17.75f033ed.js",
    "revision": "fca9220ec99e0eddef83e2d5a67231c0"
  },
  {
    "url": "assets/js/18.2651bd10.js",
    "revision": "e58f19b0656f889dfbc5ee8127a93bd5"
  },
  {
    "url": "assets/js/19.8d844c00.js",
    "revision": "4573ec80395b654c5860519914278775"
  },
  {
    "url": "assets/js/20.a858b962.js",
    "revision": "021f0121d1ef8654a1197697a071f082"
  },
  {
    "url": "assets/js/21.ec323462.js",
    "revision": "47da9bac70d2ac327f8bb9d969c14d65"
  },
  {
    "url": "assets/js/22.72bc75eb.js",
    "revision": "cbfafadcd84aa22affc1ab5c6e7053ec"
  },
  {
    "url": "assets/js/23.06c86cfd.js",
    "revision": "5716134d501ad79816ac8b51ee975ea2"
  },
  {
    "url": "assets/js/24.b8a397db.js",
    "revision": "600cf1b103909d0b556fcf772c0a27f6"
  },
  {
    "url": "assets/js/25.11ffa846.js",
    "revision": "75010646c8f8c129ad81f6c0756982b8"
  },
  {
    "url": "assets/js/26.1eaee2f3.js",
    "revision": "6f94f83ebc447e328ebde455cad8704a"
  },
  {
    "url": "assets/js/27.6565e9ea.js",
    "revision": "713f9dda0036299177041535b8349846"
  },
  {
    "url": "assets/js/28.116bde5f.js",
    "revision": "13d3013d0a997552058eb6529ceebc74"
  },
  {
    "url": "assets/js/29.d1bca8c0.js",
    "revision": "fb01c619cae8f558ceaa7b6a478dc43e"
  },
  {
    "url": "assets/js/30.439c6e78.js",
    "revision": "11202d7b190fb46cb225b6811883ca42"
  },
  {
    "url": "assets/js/31.2afcf0ee.js",
    "revision": "40fa70ff90b60a4415851f670d3ef08f"
  },
  {
    "url": "assets/js/32.0c755e42.js",
    "revision": "cd566969a28e0f58efec3b08107f3f46"
  },
  {
    "url": "assets/js/33.fab562ca.js",
    "revision": "801d083ba953a0908f0dfb0d31b3939b"
  },
  {
    "url": "assets/js/34.e731278a.js",
    "revision": "2ec7d27953eb28a1989d987d827d00c9"
  },
  {
    "url": "assets/js/35.6ee296cc.js",
    "revision": "91b1f861ad4736b78ab88d97923eda92"
  },
  {
    "url": "assets/js/36.6c444623.js",
    "revision": "9ced4762d252a2cb2b3770c8bb5fcea6"
  },
  {
    "url": "assets/js/37.19390928.js",
    "revision": "be57bebfe1e02b0185e8c9659ecdbda0"
  },
  {
    "url": "assets/js/38.cb32daec.js",
    "revision": "7d7b86618cd57421f492cca94d38ab15"
  },
  {
    "url": "assets/js/39.f024017c.js",
    "revision": "d2707896c4e2a5ab715b92bfd39dae19"
  },
  {
    "url": "assets/js/4.4836182d.js",
    "revision": "929a1764b884c11ece4e4996e853a119"
  },
  {
    "url": "assets/js/40.97ee61e0.js",
    "revision": "32ac8ca87161b2f8533d5d04b61d1793"
  },
  {
    "url": "assets/js/41.229bce0f.js",
    "revision": "8b280bde7d2e100800bc1e3fcbe099a4"
  },
  {
    "url": "assets/js/42.afdbccf7.js",
    "revision": "b698f0502e81230af8dd57c865d0f577"
  },
  {
    "url": "assets/js/43.4d7a47b0.js",
    "revision": "d823571ac535986b07b152b088c88fe7"
  },
  {
    "url": "assets/js/44.54f632a7.js",
    "revision": "094e62b5aa53a0be37370f2976151e42"
  },
  {
    "url": "assets/js/45.41f792d4.js",
    "revision": "f3a30dd0b0ea124474e0946208bc4e23"
  },
  {
    "url": "assets/js/46.e508b14a.js",
    "revision": "7bc0aee6a3361bec5cf728acbf25b900"
  },
  {
    "url": "assets/js/47.a644a10b.js",
    "revision": "9a0c8b808aa97bd74fb242eee5630a8f"
  },
  {
    "url": "assets/js/48.0405c816.js",
    "revision": "081c6390bf5d9a01ab128429e058c767"
  },
  {
    "url": "assets/js/49.4ce645d0.js",
    "revision": "add5f06d84feec835d1f7f130b920c58"
  },
  {
    "url": "assets/js/5.a7e36e29.js",
    "revision": "85c32ceb809dec516e4d3400f99e8ed3"
  },
  {
    "url": "assets/js/50.d9531ff2.js",
    "revision": "5a570ce7e242e8f270944ce1ac349f28"
  },
  {
    "url": "assets/js/51.7b80fc9d.js",
    "revision": "c700a18806c57c6fd1077761bfba18a5"
  },
  {
    "url": "assets/js/52.5465c495.js",
    "revision": "703d1cb63f71d3d412489bf56e70498b"
  },
  {
    "url": "assets/js/53.e41b11a0.js",
    "revision": "dea38ae3d928a662cfe912e8dd47f824"
  },
  {
    "url": "assets/js/54.9d3c5291.js",
    "revision": "ed6c2da3df4b92a0bd7ec9c022497143"
  },
  {
    "url": "assets/js/55.2cfd2709.js",
    "revision": "f537df9bbcdf8b270cbc28d47df3274a"
  },
  {
    "url": "assets/js/56.3e1581cb.js",
    "revision": "933d23f4735e63d9efa17199ab40943d"
  },
  {
    "url": "assets/js/57.3c5de9f4.js",
    "revision": "15c802165744610ffafaea4c3f7be466"
  },
  {
    "url": "assets/js/58.f3d809a8.js",
    "revision": "c4484dd0158d01afb4e6d1cc7100678e"
  },
  {
    "url": "assets/js/59.b052ae80.js",
    "revision": "44303f73e897445d2eb1580c5d59284d"
  },
  {
    "url": "assets/js/6.12a1f9fe.js",
    "revision": "56a2c133bf05df1432e5bdb0742c2c0a"
  },
  {
    "url": "assets/js/60.280e2e15.js",
    "revision": "d09fb4684d76b23858b76fc6ef4f42dc"
  },
  {
    "url": "assets/js/61.7fb7e2d9.js",
    "revision": "1887ca780a5b80664792aa39649754a8"
  },
  {
    "url": "assets/js/62.7bca5012.js",
    "revision": "a7fe3131b25b5d877da005eb70ce017f"
  },
  {
    "url": "assets/js/63.dad9706a.js",
    "revision": "4242b420f3a772bdd25d5070aa86a3bd"
  },
  {
    "url": "assets/js/7.046e5a1b.js",
    "revision": "a1a4eabe5f9f709c8fdb0f59c535f7e3"
  },
  {
    "url": "assets/js/8.77fb8967.js",
    "revision": "fe3132e4d77b75cf16882c0fcf84463c"
  },
  {
    "url": "assets/js/9.ebfa537e.js",
    "revision": "f8c46e4421227a74a3111727b37c7e7a"
  },
  {
    "url": "assets/js/app.f51e3fcf.js",
    "revision": "39386707560bec265ac3c2d0c033b0d7"
  },
  {
    "url": "assets/js/vendors~flowchart.20a64d45.js",
    "revision": "716c82a5a8d7e7248817c9c543fbb778"
  },
  {
    "url": "assets/js/vendors~notification.ea176280.js",
    "revision": "4638db80765160e1766d4bf574a4457c"
  },
  {
    "url": "cache/cache-framework.html",
    "revision": "35c0078f12592d3a8391ab772998ccbc"
  },
  {
    "url": "cache/cache-interview.html",
    "revision": "ed2a7d64639253eac1066e1d549efcb7"
  },
  {
    "url": "cache/cache-libs.html",
    "revision": "002167891d6151e0e395cd107ae069b7"
  },
  {
    "url": "cache/ehcache.html",
    "revision": "61b90a57f1bd632af64b1f81d3d7c003"
  },
  {
    "url": "cache/http-cache.html",
    "revision": "b168eb09a89091536bf99a40d9249d53"
  },
  {
    "url": "cache/index.html",
    "revision": "9134475e143f3563c146fcc93aadb67c"
  },
  {
    "url": "cache/memcached.html",
    "revision": "1695a4aa963d6bcbfe1e54d6991b5e3c"
  },
  {
    "url": "framework/index.html",
    "revision": "458c0d3d7ce83bc248c9bc6544bbe68b"
  },
  {
    "url": "framework/mybatis/index.html",
    "revision": "ea41d430a0ec00238cab0ee39b003be2"
  },
  {
    "url": "framework/mybatis/Mybatis原理.html",
    "revision": "d6bcdfc77794e3eff6f60ec745b8b659"
  },
  {
    "url": "framework/mybatis/Mybatis应用指南.html",
    "revision": "569365ecd6953c8822ccfd4459f60324"
  },
  {
    "url": "framework/netty.html",
    "revision": "05ad8983b9bd2d2bed8331bebd91871f"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "0505fd291e37d94ab78c84f2dca65c1b"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "1d1df79a6e9ca18bb46ba15dfe1d04b3"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "a7f6c4f9cd4bf0134eeb5550dd88b553"
  },
  {
    "url": "lib/index.html",
    "revision": "5679177b688fff2efb88c984705cd55e"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "608816a0a297f20b175f5710b1a9b629"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "89dc289d7ab1fa5ff632daf3f295a77c"
  },
  {
    "url": "lib/javamail.html",
    "revision": "cb66a248bdca9887f63ba13ecbac312c"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "57523bff6a1ea58f98ef05db05165611"
  },
  {
    "url": "lib/reflections.html",
    "revision": "1fc005407c829668155bb39a4997d101"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "2df85d705897f650e7d614369dbbe7d4"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "f6129126c998d70f45354033db3b0271"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "08c9d86b69f3f2f2105fa1b4f82f03ec"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "1e861d1adb8fb59b9def5348934a5ba1"
  },
  {
    "url": "lib/template/index.html",
    "revision": "13eeb10a500edbd5956926f8b68a0afc"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "11b33d0152f38fb9f4d8d8d29128a801"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "d8873de03d80ccbde3610c7a399ac2d0"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "a00f9691e06d8dd73b52c84bbae46992"
  },
  {
    "url": "lib/zxing.html",
    "revision": "34a5b209d8a3e60f54046f91a3128d81"
  },
  {
    "url": "limiting/hystrix.html",
    "revision": "4a7684d15ffff0659bf60e7d665c6499"
  },
  {
    "url": "microservice/dubbo.html",
    "revision": "01982b319385acd37b69857c1001cf24"
  },
  {
    "url": "microservice/index.html",
    "revision": "877a49582dab2bc58ce9821e827b1d9e"
  },
  {
    "url": "mq/activemq.html",
    "revision": "2bf09964b32651f729165e05cf31fbb7"
  },
  {
    "url": "mq/index.html",
    "revision": "a3fb4d11d6c164cc0fa7fba568e7c21a"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "bebc99d8a86324e2f29a543c6eb3fd98"
  },
  {
    "url": "mq/消息队列基本原理.html",
    "revision": "3350b0344e7727a7e852d1140f613345"
  },
  {
    "url": "mq/消息队列面试.html",
    "revision": "2840f09fe61fc90a5c0aa5c22cd13bc3"
  },
  {
    "url": "security/index.html",
    "revision": "b60f4c6cda20f840ed161a1328cc50bd"
  },
  {
    "url": "security/shiro.html",
    "revision": "f7d16d857d728e526d47d026494a0772"
  },
  {
    "url": "security/spring-security.html",
    "revision": "1225206a5ac5367164fc8222e5ffa077"
  },
  {
    "url": "server/index.html",
    "revision": "dd485ccf02ff94dbfe8fc1741afc12b4"
  },
  {
    "url": "server/jetty.html",
    "revision": "ad6b2991be7dbdba2ca97e8a80e54999"
  },
  {
    "url": "server/tomcat-and-jetty.html",
    "revision": "1aedd9b185fa60b6d6e9265674acdfd2"
  },
  {
    "url": "server/Tomcat优化.html",
    "revision": "b8d348acc3d0ebe04cf2681a76fd0575"
  },
  {
    "url": "server/Tomcat容器.html",
    "revision": "be0074fa9e6c1163f5f2a3940b1940e1"
  },
  {
    "url": "server/Tomcat应用指南.html",
    "revision": "3fbe0c2871ac71e1444d11620f33becf"
  },
  {
    "url": "server/Tomcat连接器.html",
    "revision": "c28f09e95bb65de3fc85e935ba789020"
  },
  {
    "url": "test/index.html",
    "revision": "2f739a81a2ed0012720718ed04979bb1"
  },
  {
    "url": "test/jmeter.html",
    "revision": "b2354f0ab4161b3ff1a4a26149074e71"
  },
  {
    "url": "test/jmh.html",
    "revision": "997c83f033df5cca45b807bf526ee824"
  },
  {
    "url": "test/junit.html",
    "revision": "01c40719ff90e7ea90519fa02fb301cd"
  },
  {
    "url": "test/mockito.html",
    "revision": "7e7e392f7040f114e61230e92d2f8e57"
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
