/* TAZ client portal tracker: entries, page views, clicks, time on page. Never records anything typed. */
(function () {
  if (window.__tazTrackLoaded) return; window.__tazTrackLoaded = true;
  var LOG = 'https://cloud.activepieces.com/api/v1/webhooks/5fPn637NF4TV3LWx2SgbS';
  var ALERT = 'https://cloud.activepieces.com/api/v1/webhooks/MKZERcxEqxCBqvDD9saFR';
  var cfg = window.TAZ_TRACK || {};
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) || location.protocol === 'file:') cfg.off = cfg.off !== false;
  function sid(k, store) { try { var v = store.getItem(k); if (!v) { v = Math.random().toString(36).slice(2, 10); store.setItem(k, v); } return v; } catch (e) { return 'na'; } }
  var visitor = sid('taz_vid', localStorage), visit = sid('taz_sid', sessionStorage);
  var ua = navigator.userAgent;
  var dev = (/iPhone|iPad|iPod/.test(ua) ? 'iPhone/iPad' : /Android/.test(ua) ? 'Android' : /Macintosh/.test(ua) ? 'Mac' : /Windows/.test(ua) ? 'Windows' : 'Other') + ' · ' +
    (/Edg\//.test(ua) ? 'Edge' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : /Firefox\//.test(ua) ? 'Firefox' : 'Browser') +
    (window.matchMedia && matchMedia('(display-mode: standalone)').matches ? ' · home-screen app' : '');
  function page() { return ((location.pathname.split('/').pop() || 'index.html') + (location.hash || '')).slice(0, 60); }
  function person() { try { return (typeof cfg.person === 'function' ? cfg.person() : cfg.person) || ''; } catch (e) { return ''; } }
  function hit(url, e, d, t, extra) {
    if (cfg.off) { (window.__tazTrackLog = window.__tazTrackLog || []).push({ e: e, d: d, t: t, pg: page(), p: person() }); return; }
    var p = new URLSearchParams({ c: cfg.client || '', p: person(), e: e, pg: page(), d: (d || '').slice(0, 120), dev: dev, v: visitor, s: visit });
    if (t != null) p.set('t', String(t));
    if (extra) for (var k in extra) p.set(k, extra[k]);
    var u = url + '?' + p.toString();
    try { fetch(u, { mode: 'no-cors', keepalive: true }); } catch (x) { new Image().src = u; }
  }
  var unlocked = false, shown = Date.now(), activeMs = 0, lastClick = '', lastClickAt = 0;
  function track(e, d, t) {
    if (e === 'unlocked') {
      unlocked = true; shown = Date.now();
      var first = false; try { first = !sessionStorage.getItem('taz_entered'); sessionStorage.setItem('taz_entered', '1'); } catch (x) {}
      if (first) {
        var seen = '0'; try { seen = localStorage.getItem('taz_seen') ? '1' : '0'; localStorage.setItem('taz_seen', '1'); } catch (x) {}
        hit(LOG, 'enter', d || ''); hit(ALERT, 'enter', '', null, { r: seen });
      }
      hit(LOG, 'view', document.title);
      return;
    }
    hit(LOG, e, d, t);
  }
  window.tazTrack = track;
  (window.tazQ || []).forEach(function (a) { track.apply(null, a); }); window.tazQ = { push: function (a) { track.apply(null, a); } };

  document.addEventListener('click', function (ev) {
    if (!unlocked) return;
    var el = ev.target.closest && ev.target.closest('a,button,[role=tab],[role=button],[onclick],summary,label.opt,.nav-item,[data-tab],[data-view]');
    if (!el || el.closest('#bg-gate,#so-gate')) return;
    if (el.matches('input,textarea,select')) return;
    var txt = (el.getAttribute('aria-label') || el.innerText || el.title || el.getAttribute('href') || el.tagName).replace(/\s+/g, ' ').trim().slice(0, 60);
    var href = el.getAttribute && el.getAttribute('href');
    if (href && /^https?:/.test(href) && href.indexOf(location.host) < 0) txt += ' → ' + href.replace(/^https?:\/\//, '').split('/')[0];
    var now = Date.now(); if (txt === lastClick && now - lastClickAt < 800) return; lastClick = txt; lastClickAt = now;
    hit(LOG, 'click', txt);
  }, true);
  window.addEventListener('hashchange', function () { if (unlocked) hit(LOG, 'view', document.title); });
  document.addEventListener('visibilitychange', function () {
    if (!unlocked) return;
    if (document.visibilityState === 'hidden') { activeMs += Date.now() - shown; hit(LOG, 'time_on_page', 'left or switched tabs', Math.round(activeMs / 1000)); }
    else { shown = Date.now(); hit(LOG, 'came_back', ''); }
  });
})();
