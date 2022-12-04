const cache_key = "cache-1"
const precacheList = [
  "/",
  "/index.html"
]

self.addEventListener("install", function(event) {
  
  event.waitUntil(
    
    caches.open(cache_key)
    .then(function(cache) {
      cache.addAll(precacheList)
    })

  )

})

self.addEventListener("fetch", function(user_request) {
  // if(user_request.request.destination == "script") console.log(user_request.request.url)
})