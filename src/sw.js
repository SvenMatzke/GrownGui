workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
self.addEventListener('install', event => {
    console.log('install')
  })
self.addEventListener('activate', event => {
    console.log('activate')
  })