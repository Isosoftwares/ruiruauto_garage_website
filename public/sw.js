// Ruiru Auto Garage - Zero Cache Service Worker
// Satisfies PWA installation criteria without caching stale pages.

self.addEventListener("install", (event) => {
  // Activate immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Claim clients immediately
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Network-only fetch strategy (does not cache assets, ensuring latest content is always served)
  event.respondWith(fetch(event.request));
});
