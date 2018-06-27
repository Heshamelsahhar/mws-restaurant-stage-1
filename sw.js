self.addEventListener('install', (event) => {
    const toCache = [
        '/',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'data/restaurants.json',
        'css/mainstyle.css',
        'css/styles.css',
        //'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
        //'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
       //'//normalize-css.googlecode.com/svn/trunk/normalize.css'
    ];
    event.waitUntil(
        caches.open('mainCache').then((openedcache) => {
            console.log('Cached Successfully');
            return openedcache.addAll(toCache);
        })
    );

});


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(
            response => {
                if (response) return response;
                else return fetch(event.request);
            }
        )
    );
});
