workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js)')
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'cache'
  })
)
self.addEventListener('install', event => {
    console.log('install')
  })
self.addEventListener('activate', event => {
    console.log('activate')
  })