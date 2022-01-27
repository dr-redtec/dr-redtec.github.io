const staticNFTGallery = "NFTGalleryV1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/js/readapi.js",
  "/js/showNFT.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticNFTGallery).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
