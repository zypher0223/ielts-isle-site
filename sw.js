// 离线缓存：网页外壳、程序、数据和外部词库，访问过就存下来，没网也能打开。
// 单词录音（audio/）是分段播放的，浏览器用分段请求，这里不缓存，没网时听不了录音。
const CACHE = 'ielts-isle-mwnjbjn0';
const SHELL = ['./', './index.html', './manifest.webmanifest', './logo.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL);
    // 打包清单里的全部程序和样式（各页面的分包）
    try { const list = await (await fetch('./precache.json', { cache: 'no-store' })).json(); await c.addAll(list.map((f) => './' + f)); } catch { /* 清单拿不到就按访问缓存 */ }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.pathname.includes('/audio/') || req.headers.has('range')) return; // 录音不缓存
  if (url.hostname === 'dict.youdao.com') return; // 有道发音走网络

  // 打开网页：先联网拿最新版本，没网时用缓存
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); return res; })
      .catch(() => caches.match('./index.html')));
    return;
  }

  // 程序、样式、数据、字体：先用缓存，同时后台更新
  const sameOrigin = url.origin === self.location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !isFont) return;
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(req);
    const net = fetch(req).then((res) => { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
