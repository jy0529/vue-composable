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
    "revision": "339688b18554379149cace23fcca3f80"
  },
  {
    "url": "api/axios.api.html",
    "revision": "3ed4375cf20be3996d96d4a9ad7e6a4b"
  },
  {
    "url": "api/core.api.html",
    "revision": "5e06fdfa124433e572ddd55361a559cc"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "3299145035a4aa8f988d2f8a55b60a90"
  },
  {
    "url": "api/web.api.html",
    "revision": "12f3cc8a3ad252c92bb8773d2496bfa5"
  },
  {
    "url": "assets/css/2.styles.e4095f46.css",
    "revision": "1773dfc42efcd85274f5520562a468dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.c5dfdf9f.js",
    "revision": "ef9ce5ef46df59b7e2e9d4b8cae94a82"
  },
  {
    "url": "assets/js/1.6ed239f1.js",
    "revision": "80716463d01d2460a8c15192b3a4c5f0"
  },
  {
    "url": "assets/js/10.02d43f9a.js",
    "revision": "37324a8ec9fdca082f6757374e5a276b"
  },
  {
    "url": "assets/js/100.8e478158.js",
    "revision": "4b5eb7826f427ea76b733dfd796cdf05"
  },
  {
    "url": "assets/js/101.de35f669.js",
    "revision": "87a1167a7a372ae31a81f5c6782eb870"
  },
  {
    "url": "assets/js/102.05049f39.js",
    "revision": "104889e24d9f38859645526b1aece615"
  },
  {
    "url": "assets/js/103.5d11f43f.js",
    "revision": "1562b044237945ef480c2876dcef306c"
  },
  {
    "url": "assets/js/104.2e2c2040.js",
    "revision": "fc2a1c97e484cf0a6ba408b918ee40c1"
  },
  {
    "url": "assets/js/105.eebb9a2a.js",
    "revision": "2cf2ef6f632a87d3f3b581097c27599d"
  },
  {
    "url": "assets/js/106.fc04df66.js",
    "revision": "327e56fa57024c5c6651e9e0f87b9da3"
  },
  {
    "url": "assets/js/107.2449da79.js",
    "revision": "665d60cdc32ed33f3a0d47d065ced14c"
  },
  {
    "url": "assets/js/108.6bc7d0c4.js",
    "revision": "362093bae25f8801c0d1d1e43b80fa7e"
  },
  {
    "url": "assets/js/109.53aa4bed.js",
    "revision": "9f5d977e3b24dc9f5d103144c0f77e89"
  },
  {
    "url": "assets/js/11.c8bd5a4c.js",
    "revision": "1dc543f528ddb3fde59d9873aea7ef5f"
  },
  {
    "url": "assets/js/110.2bac89a8.js",
    "revision": "f7e9e587bc798331c5ab6dbe8fb2355c"
  },
  {
    "url": "assets/js/111.cd44e48c.js",
    "revision": "6b1669e84d6b7db1a1e679bdae536d99"
  },
  {
    "url": "assets/js/112.b9a89c9d.js",
    "revision": "3d62c56727ae930facad631ad4282ce5"
  },
  {
    "url": "assets/js/113.7930ee1c.js",
    "revision": "32f23a7872bba1aa778f485835701baf"
  },
  {
    "url": "assets/js/114.a8909753.js",
    "revision": "4869d1f17ff07238ab798b7a1105e5f5"
  },
  {
    "url": "assets/js/115.edad912e.js",
    "revision": "0e34fe1706be467cd67c7b804008c151"
  },
  {
    "url": "assets/js/116.efe4d4dd.js",
    "revision": "203680eefb7ca2f303cba3d95fcbd4f2"
  },
  {
    "url": "assets/js/117.57e93c20.js",
    "revision": "5986f6ce8c3cce9b20c068af272d6e9f"
  },
  {
    "url": "assets/js/12.0f398068.js",
    "revision": "c5961ef62d6c8207ca7f2dab89c9ebd4"
  },
  {
    "url": "assets/js/13.30b4322d.js",
    "revision": "8fb7f353151cffb4e7feb16a9cf0fb34"
  },
  {
    "url": "assets/js/14.d317f1e7.js",
    "revision": "48d5ba01af5fdd1ed1a76c881bb852b7"
  },
  {
    "url": "assets/js/15.f5883ef3.js",
    "revision": "9e45dcfcc2dc47a79e42b5eadf24d9c8"
  },
  {
    "url": "assets/js/16.4d9cfad1.js",
    "revision": "fd9d8031d3d7dfd450ee226e0b61b4f4"
  },
  {
    "url": "assets/js/17.e03eca80.js",
    "revision": "776f568a9c26f1cadd059b33bc69cfee"
  },
  {
    "url": "assets/js/18.0a3a9a8a.js",
    "revision": "34d47884c8a98cbcbfad864cde93adc0"
  },
  {
    "url": "assets/js/19.6103c216.js",
    "revision": "c47e6828b96e733b0f1314a7312dc92b"
  },
  {
    "url": "assets/js/20.ae97c496.js",
    "revision": "afe9525f572d6c4ac5d0f45d7476bfd7"
  },
  {
    "url": "assets/js/21.11063bfc.js",
    "revision": "1417550e4fd6638da05754c741efdb44"
  },
  {
    "url": "assets/js/22.80194234.js",
    "revision": "5fc21e4834df8399f587bc51156cb396"
  },
  {
    "url": "assets/js/23.d19a0640.js",
    "revision": "e4b7e053c633eec9c4c241b10b9cd794"
  },
  {
    "url": "assets/js/24.35925c8d.js",
    "revision": "b0d827b1a8cfbe28c1d659a0dba4ea15"
  },
  {
    "url": "assets/js/25.967459aa.js",
    "revision": "65f5eba314394386e31c151ce3c2c0b1"
  },
  {
    "url": "assets/js/26.f7e5d36d.js",
    "revision": "8cd4dd034e6c178d9b5e69ad18916157"
  },
  {
    "url": "assets/js/27.f36cac7d.js",
    "revision": "050cfeaccfcf4a45ad58031aa27c4a9e"
  },
  {
    "url": "assets/js/28.ec9cb5f7.js",
    "revision": "710d877ef1a1e3608950079780d881c7"
  },
  {
    "url": "assets/js/29.32f6bce0.js",
    "revision": "8be34dcd3e62a8677c7b7834c5b87934"
  },
  {
    "url": "assets/js/30.5366c73f.js",
    "revision": "70a01abcdd73ab4532fca0a7aca3950b"
  },
  {
    "url": "assets/js/31.036b9a69.js",
    "revision": "5c27e14b2c77743b6a357448368e76e1"
  },
  {
    "url": "assets/js/32.056fddfa.js",
    "revision": "b1d36316938f01b15cac29ea6b855866"
  },
  {
    "url": "assets/js/33.7b068555.js",
    "revision": "7916e6772169bd4df6d48bc7233c2a34"
  },
  {
    "url": "assets/js/34.92bafca8.js",
    "revision": "54e41f5fbb39e746006dd04684e7ed57"
  },
  {
    "url": "assets/js/35.f9d302f3.js",
    "revision": "7c7ff074da7a27ac59c9e6c7700e6e51"
  },
  {
    "url": "assets/js/36.cbc60690.js",
    "revision": "3c7565ba43ebf5f95a9e63315e8159d2"
  },
  {
    "url": "assets/js/37.bff76c1b.js",
    "revision": "8627b9ecd5b05eb4beaaddfc06dc1787"
  },
  {
    "url": "assets/js/38.06379326.js",
    "revision": "15afe95506663d4e8c7bae5850be718a"
  },
  {
    "url": "assets/js/39.f7515568.js",
    "revision": "6d98243301b49f4f017ff3fd29286f54"
  },
  {
    "url": "assets/js/4.aed6686f.js",
    "revision": "6bef0dc8c8f79a4867da493bd5110c3b"
  },
  {
    "url": "assets/js/40.ecad55fd.js",
    "revision": "58150a81365fd7637b6be4d381f9c932"
  },
  {
    "url": "assets/js/41.7f8221d9.js",
    "revision": "d861f5b39286e4330ee370efb461689b"
  },
  {
    "url": "assets/js/42.3ba2c3b3.js",
    "revision": "80726881a4c29dbc10c0f64db00cd5ec"
  },
  {
    "url": "assets/js/43.6ae5db49.js",
    "revision": "b778d4e95362366b0430024076499054"
  },
  {
    "url": "assets/js/44.6a1fd5d3.js",
    "revision": "614dc4b3aa291210683b1343c64e2990"
  },
  {
    "url": "assets/js/45.749f4473.js",
    "revision": "958761147e5664e382bff4dc8efba2e8"
  },
  {
    "url": "assets/js/46.97941333.js",
    "revision": "bccd1177676ba8ad0dd2c9eb8a7950db"
  },
  {
    "url": "assets/js/47.8608cd4f.js",
    "revision": "feaca011683409793ed10fa5577ac110"
  },
  {
    "url": "assets/js/48.0d1a996f.js",
    "revision": "00913a8eaccb0cfb3639c0fa2ec404da"
  },
  {
    "url": "assets/js/49.dd02f794.js",
    "revision": "1e67968f87a970530aa9882707144890"
  },
  {
    "url": "assets/js/5.3a64806d.js",
    "revision": "06bfdae6c332f46974267eeaf83889c4"
  },
  {
    "url": "assets/js/50.6016f395.js",
    "revision": "3f57494d97d3bd3c8877fcc16e8ee817"
  },
  {
    "url": "assets/js/51.c90d480f.js",
    "revision": "52620435ab7e853f4ddf648d1c3b9924"
  },
  {
    "url": "assets/js/52.ee1c5c37.js",
    "revision": "f6b81bfe76490fd97d633f1025ba09d2"
  },
  {
    "url": "assets/js/53.8ba366dd.js",
    "revision": "d8860b604023a9e25c5a9a0173782a7f"
  },
  {
    "url": "assets/js/54.9b7767c8.js",
    "revision": "91a7413df28468b0ae631fef43562f52"
  },
  {
    "url": "assets/js/55.973a9591.js",
    "revision": "bb678f22046ed37c29d4aac46b2849a5"
  },
  {
    "url": "assets/js/56.4623a9d2.js",
    "revision": "4d644e94107129d617302560f0631040"
  },
  {
    "url": "assets/js/57.adb513a9.js",
    "revision": "55d83df1d392237d7f8de1e2b73407a4"
  },
  {
    "url": "assets/js/58.ce41b931.js",
    "revision": "914c681aa64f47dc8d63f902ab95a4f0"
  },
  {
    "url": "assets/js/59.506f157c.js",
    "revision": "6e23a315f302a72f98699f191195d087"
  },
  {
    "url": "assets/js/6.60cae91f.js",
    "revision": "bc1738da9458d0bcfb0687fff2cf2359"
  },
  {
    "url": "assets/js/60.1f031475.js",
    "revision": "d536de91627e5a526a8a440f396b9372"
  },
  {
    "url": "assets/js/61.7d16c368.js",
    "revision": "cd3a180c1c3954a46b8ac9a83f0d6530"
  },
  {
    "url": "assets/js/62.4626390f.js",
    "revision": "21aac3d8308b77e8c147ace4d9eeb498"
  },
  {
    "url": "assets/js/63.e3d61770.js",
    "revision": "b59faf6937c0a1d21271f836a32143d4"
  },
  {
    "url": "assets/js/64.d1e24c92.js",
    "revision": "132a0928159f1cbc6d40bb4763c845bd"
  },
  {
    "url": "assets/js/65.3a3138f3.js",
    "revision": "d11f4fae8846c1630f4f89e95aff6651"
  },
  {
    "url": "assets/js/66.41ee84b9.js",
    "revision": "b43f1503a2f5da9cd5738fe5d6c766f3"
  },
  {
    "url": "assets/js/67.63e72113.js",
    "revision": "27628f0295ad4205f4f3faa4049f361d"
  },
  {
    "url": "assets/js/68.9e29d6e7.js",
    "revision": "9c8c22e4db64709fd48c8be54e900df1"
  },
  {
    "url": "assets/js/69.d6508dfd.js",
    "revision": "e42eef3454e982d96a421869a338b2a0"
  },
  {
    "url": "assets/js/7.4e92ca38.js",
    "revision": "eeda74ba86e067e73c1aa2685255ca68"
  },
  {
    "url": "assets/js/70.509c624a.js",
    "revision": "7d084465aafbe3f30f3997bfc0a8b325"
  },
  {
    "url": "assets/js/71.759b176f.js",
    "revision": "679de1216b871168357c321a01a3567a"
  },
  {
    "url": "assets/js/72.2737945a.js",
    "revision": "dd062f894a4edd5b35cd141fbf0766f6"
  },
  {
    "url": "assets/js/73.07749e69.js",
    "revision": "1913f42222b7784aabd4e415e2b0656d"
  },
  {
    "url": "assets/js/74.396f1965.js",
    "revision": "bd28766d16a7f9735608b5c8993fae7e"
  },
  {
    "url": "assets/js/75.47f81317.js",
    "revision": "cd4b7e2b796eb7dec86f83743918a53d"
  },
  {
    "url": "assets/js/76.403b0c1b.js",
    "revision": "49bbcafc67d60dece8cd117ac3873632"
  },
  {
    "url": "assets/js/77.97157af4.js",
    "revision": "895c1d56c7f6424dd0a3f58d239ea845"
  },
  {
    "url": "assets/js/78.deced4f5.js",
    "revision": "6bed7d24adeb413125535f9615902ab2"
  },
  {
    "url": "assets/js/79.5d4ab514.js",
    "revision": "28794ab169d72bb15029cded078521b9"
  },
  {
    "url": "assets/js/8.62da7a2e.js",
    "revision": "c51e5daee960861eebb8d9072cf64d2a"
  },
  {
    "url": "assets/js/80.a4fb6671.js",
    "revision": "64d5164bd30a9f7875d9b2c122b3168b"
  },
  {
    "url": "assets/js/81.d5fa4022.js",
    "revision": "c4a827f83484dcbca844ffbc81ff5767"
  },
  {
    "url": "assets/js/82.99c907a8.js",
    "revision": "bc8a721f563e20b6bf1eb31fefe74182"
  },
  {
    "url": "assets/js/83.fe8ca4f3.js",
    "revision": "66e1946dc868072a70c2e94cb6a160e8"
  },
  {
    "url": "assets/js/84.97b749d0.js",
    "revision": "ae1e51ee70fd0fad85dfc92864f20214"
  },
  {
    "url": "assets/js/85.85a11756.js",
    "revision": "39ff811be449f254ce5fe2db0111c812"
  },
  {
    "url": "assets/js/86.606137ec.js",
    "revision": "97a7c618a92fdaebb5f910a2487a4db0"
  },
  {
    "url": "assets/js/87.c49584d0.js",
    "revision": "536c2dc3d0ab99ba14194afccbd71c11"
  },
  {
    "url": "assets/js/88.cffcb9b2.js",
    "revision": "74c7fd35b474856e76560c42369c5c27"
  },
  {
    "url": "assets/js/89.ddf40d33.js",
    "revision": "add38564e014c0638e19cae57dbc4994"
  },
  {
    "url": "assets/js/9.d739c910.js",
    "revision": "fb42f25bc4918cae866627632178e231"
  },
  {
    "url": "assets/js/90.a449c2a8.js",
    "revision": "33b54d75a70db85305d73fa4f59c100c"
  },
  {
    "url": "assets/js/91.f6030b37.js",
    "revision": "6ea2de37465599e741a121f57b72c639"
  },
  {
    "url": "assets/js/92.17570be5.js",
    "revision": "c6c7f4c740cb7519a2a9763dc474bed4"
  },
  {
    "url": "assets/js/93.d2f285f8.js",
    "revision": "9b24318e5b681327a8bda6d9b1fc50b1"
  },
  {
    "url": "assets/js/94.07ea41a5.js",
    "revision": "dfdee26800d27269b458c87043cee309"
  },
  {
    "url": "assets/js/95.a488ce93.js",
    "revision": "ad57c51894ea536424e73fd77fd02190"
  },
  {
    "url": "assets/js/96.8a8dba77.js",
    "revision": "077a4c5f0c5864a497e9e210fd2b8c7c"
  },
  {
    "url": "assets/js/97.7d1eaf57.js",
    "revision": "ab957f82d9a39ee7eea6b37e0e93fa02"
  },
  {
    "url": "assets/js/98.fc2482f5.js",
    "revision": "d73e5a9ab7ba88510a5ee71400d2f036"
  },
  {
    "url": "assets/js/99.692057e0.js",
    "revision": "9f99e24ffa3339e29f255d2df9163859"
  },
  {
    "url": "assets/js/app.331f7253.js",
    "revision": "e46487af7f7603063c8f66f6ef8cf9bd"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "578dca779d67630fc100e7a3c6fe0f9e"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "64b19e4a6b556c91c40c95f86679d962"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "92a0b702457cc496505d47e02232ae58"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "b43900ebe5fc2869e8bc8448cda57339"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "7fef8bd8837dfe1cd80ccd1f2b118927"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "1958d992a005f434b8a127304c6c55c9"
  },
  {
    "url": "composable/date/now.html",
    "revision": "b27826bc0cbcd6c2246dcd89e4653c39"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "76081d7d510e7e682710228b0961fe16"
  },
  {
    "url": "composable/event/event.html",
    "revision": "33a4ec515a15426f3582a35814ea7fd8"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "4849a72384d70c7f795bc3c9d7c142d7"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "46b2aaea0f5a3fb362c20ecb55b880fe"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "f8a9139dfc4dfdfee8b796dd4d6814e3"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "0e3021971dc5e2d8684ff195340b3332"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "f054bd2676815acb581ae26cb9acbca6"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "8d69a7c067413e5e11fe1b97db4c45c7"
  },
  {
    "url": "composable/format/format.html",
    "revision": "e22b056bfd562fc1e80323fdefcb310e"
  },
  {
    "url": "composable/format/path.html",
    "revision": "f97f218a192cf3e1909f88e065a4efdc"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "1d2220005075e04e0f8f9cd94f17f52c"
  },
  {
    "url": "composable/index.html",
    "revision": "9d4670d48813950e8fac3cc1d1cae781"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "08e03945d747d5cd6c779704257d42db"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "3b1ef6f4c5bcbf661b55491a24485f29"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "8eff2188c21ab09055ba5316bc1e4358"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "ff72a0861f3294d205c8bbcccdfdd480"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "14caff41a33f94af769c4f1c7e2d8ab1"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "6ae1bebaee0be8e0be45d133a31d23e0"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "0d8801e7f2f36921d4fb374a6aaa2773"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "adbd4b676e8852056387e5ba3d2151ec"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "0b73b7d9e5a48d833464f3261d9d2b5a"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "c3a17ef44483d26c855f8be4e36e087a"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "6807588b5f4252899b55365d9bfda38a"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "7e83cdf26423e88d21f3fbbe9084b848"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "0b5eac503b4890e82e45d7c7e47e96ad"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "f2b835e58ad7fb4c5831a452cfc9a8e9"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "64faf5f232159b27f07009dec337ed27"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "7a9170195cc0430a92469c84b1f39c3c"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "bf82a34055432ded9c8c11fe0d11e550"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "fc38d105902fc289140142cb987078f8"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "89b9b718080175fcee1fdbd3aba4fef2"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "d62aef61dc5b2c2b8253d36ee374b5df"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "2465505a49c8d6cc29ca84d726f0b27a"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "1e71924c5468f4de93acf5cb4604b947"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "0a9338f9a61557224183fa4a89c31f75"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "abc85ebd39af17e3641a0ff007e358ee"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "388a7a6c63e6f5af649f2e1f3d24c187"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "90606eef200c465a052d7bd77b2332a8"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "ebeebfe3502a84d2b55fd4b4ff5fedc0"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "a289adec35cd49e11d3107bb0f363438"
  },
  {
    "url": "composable/web/language.html",
    "revision": "f189644f845a54a95e72268da47f162d"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "278591f7e54cee63ca9d436a664bbfc1"
  },
  {
    "url": "composable/web/online.html",
    "revision": "b93083c0d5554ea5c8c96e0adab46a5b"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "be7d7cf58d2e185e1a8d2560a8ab9bd7"
  },
  {
    "url": "composable/web/share.html",
    "revision": "8622c69956075bac5e1423123c9c87a2"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "038088e56da89c78563396a5c02bcfee"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "a92f4c2074fe50c99b3480061ce04e9f"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "2f937041c2a242144b8fc047c05758f7"
  },
  {
    "url": "Examples/index.html",
    "revision": "56742a084027bd7e1c655905a16ab1e3"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "46feb08a707d6e70139970088cfbf15e"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "3171a88ec7603f31ac1e598076de056d"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "84d9b37071bc9e5977feec6df62063ec"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "77285ac53516fb6b404d7c5610bd2b5a"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "19a6d4a66917dcda25caae8d34c0c8cf"
  },
  {
    "url": "img/mstile-144x144.png",
    "revision": "cc6105c0fccdf70fd6935fb66c78eb7f"
  },
  {
    "url": "img/mstile-150x150.png",
    "revision": "820538a3b382930b9d93872aac7e4620"
  },
  {
    "url": "img/mstile-310x150.png",
    "revision": "08d0342c2269809d855f41185958a902"
  },
  {
    "url": "img/mstile-310x310.png",
    "revision": "c25adad82f954fff78bee2ff56f7ad24"
  },
  {
    "url": "img/mstile-70x70.png",
    "revision": "9f09d77175ccda1f0adef3ddab039b25"
  },
  {
    "url": "index.html",
    "revision": "f2eb6325132d06b33591348e007dc0cc"
  },
  {
    "url": "localStorage.gif",
    "revision": "575844f7c491240c02c7b269ed532917"
  },
  {
    "url": "worker.example.js",
    "revision": "f755a971ea3890285ded636071badae5"
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