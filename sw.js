const CACHE_NAME = 'restaurants_version_1_0';
const cache_list = [
        '/',
        '/js/restaurant_info.js',
        '/js/dbhelper.js',
        '/js/main.js',
        '/css/styles.css',
        '/data/restaurants.json',
        '/img/1.jpg',
        'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1Ijoic2h1ZmFsaSIsImEiOiJjandzamNqOTgwNmJsNGJubDhnNTQwOHN2In0.ixB4RkDpuRgsNPMe4M2wFQ',
        'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1Ijoic2h1ZmFsaSIsImEiOiJjandzamNqOTgwNmJsNGJubDhnNTQwOHN2In0.ixB4RkDpuRgsNPMe4M2wFQ',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
        'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
        'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png'

];
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(cache_list))
    )
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('restaurants_') &&
                   cacheName != CACHE_NAME;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    )
})