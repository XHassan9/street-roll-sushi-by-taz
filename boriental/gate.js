/* Boriental preview gate: password screen, agreement note, closes after Fri Nov 20 2026 (11:59 PM ET). */
(function () {
  var CLOSE_AT = Date.parse('2026-11-21T04:59:59Z');      // Fri Nov 20 2026, 11:59:59 PM Eastern
  var HASH = '5bf47bc534e6caad50c1f418c6d25099ee0989aabe9cada8f41686fa51b6d370';                                 // SHA-256 of the preview password
  var KEY = 'boriental_preview_ok';
  var base = (document.currentScript && document.currentScript.src) ? document.currentScript.src.replace(/gate\.js.*$/, '') : '';
  window.TAZ_TRACK = { client: 'Boriental Sushi', person: 'Chef Izaya' };
  window.tazQ = window.tazQ || [];
  function T() { var a = [].slice.call(arguments); if (window.tazTrack) window.tazTrack.apply(null, a); else window.tazQ.push(a); }
  if (Date.now() <= CLOSE_AT) (function () { var s = document.createElement('script'); s.src = base + 'taz-track.js'; s.async = true; document.documentElement.appendChild(s); })();
  var css = document.createElement('style');
  css.textContent =
    'html.bg-lock body>*:not(#bg-gate){display:none!important}' +
    '#bg-gate{position:fixed;inset:0;z-index:99999;background:#2b2b86;display:flex;align-items:center;justify-content:center;font-family:Raleway,system-ui,Arial,sans-serif;padding:20px}' +
    '#bg-gate .box{background:#fff;border-radius:12px;max-width:420px;width:100%;padding:30px 26px;text-align:center;border-bottom:8px solid #d3232b}' +
    '#bg-gate h2{font-family:"Rozha One",Georgia,serif;font-weight:400;color:#2b2b86;margin:0 0 8px;font-size:28px}' +
    '#bg-gate p{color:#5d5f85;margin:0 0 18px;line-height:1.5}' +
    '#bg-gate input{width:100%;padding:12px 14px;border:1px solid #d6d9ee;border-radius:8px;font-size:16px;margin-bottom:10px}' +
    '#bg-gate button{width:100%;padding:12px;border:0;border-radius:8px;background:#d3232b;color:#fff;font-weight:700;font-size:16px;cursor:pointer}' +
    '#bg-gate .err{color:#d3232b;font-size:14px;min-height:20px;margin:6px 0 0}' +
    '#bg-note{position:fixed;left:12px;right:12px;bottom:12px;z-index:9998;background:#2b2b86;color:#fff;border-radius:10px;padding:12px 16px;display:flex;gap:12px;align-items:center;justify-content:space-between;font-family:Raleway,system-ui,Arial,sans-serif;font-size:15px;box-shadow:0 6px 24px rgba(0,0,0,.25);border-left:6px solid #d3232b}' +
    '#bg-note a{background:#d3232b;color:#fff;text-decoration:none;font-weight:700;padding:9px 14px;border-radius:7px;white-space:nowrap}' +
    '#bg-note .x{background:none;border:0;color:#fff;opacity:.7;font-size:20px;cursor:pointer;padding:0 4px}' +
    '@media(max-width:600px){#bg-note{flex-direction:column;align-items:stretch;text-align:center}}';
  document.documentElement.appendChild(css);
  document.documentElement.classList.add('bg-lock');

  function gate(html) {
    var g = document.createElement('div'); g.id = 'bg-gate'; g.innerHTML = '<div class="box">' + html + '</div>';
    (document.body || document.documentElement).appendChild(g); return g;
  }
  function closed() {
    gate('<h2>This preview has closed</h2><p>The Boriental Sushi by TAZ preview ran through Friday, November 20, 2026.</p>' +
      '<p>Want to pick it back up or learn more? Reply to your TAZ email and I will reopen it.</p>');
  }
  function unlock() {
    document.documentElement.classList.remove('bg-lock');
    var g = document.getElementById('bg-gate'); if (g) g.remove();
    T('unlocked');
    if (/agreement\.html/.test(location.pathname)) return;
    var days = Math.max(0, Math.ceil((CLOSE_AT - Date.now()) / 864e5));
    var n = document.createElement('div'); n.id = 'bg-note';
    n.innerHTML = '<span><b>Hey Chef Izaya, this portal is all yours through Friday, Nov 20' +
      (days ? ' (' + days + ' day' + (days > 1 ? 's' : '') + ' left)' : '') + '.</b> Click around, try the order pages, and send me anything you want changed. When you&rsquo;re ready, you can review and sign your agreement right here in the portal.</span>' +
      '<span style="display:flex;gap:8px;align-items:center;justify-content:center"><a href="' + base + 'agreement.html">Review &amp; sign →</a>' +
      '<button class="x" aria-label="Hide">×</button></span>';
    n.querySelector('.x').onclick = function () { n.remove(); };
    document.body.appendChild(n);
  }
  async function sha(s) {
    var b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return Array.from(new Uint8Array(b)).map(function (x) { return x.toString(16).padStart(2, '0'); }).join('');
  }
  function start() {
    if (Date.now() > CLOSE_AT) { if (window.__siteCoreClose) { document.documentElement.classList.remove('bg-lock'); return; } return closed(); }
    var ok = false; try { ok = sessionStorage.getItem(KEY) === HASH; } catch (e) {}
    if (ok) return unlock();
    var g = gate('<h2>Boriental Sushi by TAZ</h2><p>Welcome, Chef Izaya! This private preview is yours through Friday, November 20. Enter the password from your TAZ email to jump in.</p>' +
      '<form><input type="password" autocomplete="current-password" placeholder="Password" aria-label="Password"><button>Open preview</button><div class="err"></div></form>');
    var f = g.querySelector('form'), i = g.querySelector('input'), e = g.querySelector('.err');
    i.focus();
    f.onsubmit = async function (ev) {
      ev.preventDefault();
      if ((await sha(i.value.trim())) === HASH) { try { sessionStorage.setItem(KEY, HASH); } catch (x) {} unlock(); }
      else { T('wrong_password', ''); e.textContent = 'That password did not match. Reply to your TAZ email and I will resend it.'; i.select(); }
    };
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
