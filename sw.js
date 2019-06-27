self.addEventListener('install', function (event) {
    // event.waitUntil(
    //     caches.open('cache-v1').then(function (cache) {
    //         return cache.addAll(
    //             '/',
    //             'js/main.js',
    //             'css/style.css'
    //         )
    //     })
    // )
})
self.addEventListener('fetch', function (event) {
    console.log('hello');
    event.respondWith(
        new Response('lalalalalala', {
            headers: { 'foo': 'bar'}
        })
    )
})