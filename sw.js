// Service worker minimal : sert uniquement à rendre l'outil installable sur l'écran d'accueil.
// Il ne met rien en cache : l'outil se met donc toujours à jour tout seul (il a besoin d'internet de toute façon).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* laisse passer toutes les requêtes telles quelles */ });
