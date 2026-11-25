/* Boriental preview gate: password screen, agreement note, closes after Fri Jan 15 2027 (11:59 PM ET). */
(function () {
  var CLOSE_AT = Date.parse('2027-01-16T04:59:59Z');      // Fri Jan 15 2027, 11:59:59 PM Eastern
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
    var B = base;
    var g = document.createElement('div'); g.id = 'bg-gate';
    g.innerHTML = '<div style="max-width:440px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.35);border-bottom:8px solid #d3232b;text-align:center;font-family:Raleway,system-ui,Arial,sans-serif;color:#2b2b86">'+
'<div style="background:#2b2b86 url('+B+'img/wave-white.png) center/cover;padding:22px 20px 54px"><img src="'+B+'img/logo-boriental.png" alt="Boriental Sushi" style="width:84px;height:84px;object-fit:contain;background:#fff;border-radius:50%;padding:6px"></div>'+
'<img src="'+B+'img/chef-izaya.jpg" alt="Chef Izaya" style="width:116px;height:116px;object-fit:cover;object-position:top;border-radius:50%;border:5px solid #fff;margin-top:-58px;background:#fff;box-shadow:0 4px 14px rgba(0,0,0,.2)">'+
'<div style="padding:10px 26px 26px"><h1 style="font-family:\'Rozha One\',Georgia,serif;font-weight:400;font-size:28px;line-height:1.15;margin:4px 0 10px">Built just for you, Chef</h1>'+
'<p style="color:#5d5f85;font-size:16px;line-height:1.55;margin:0 0 14px">We dug into Charlotte&rsquo;s events, venues and neighborhoods and custom-made Boriental Sushi by TAZ around your food, your story and your city. This preview has closed for now, but your build is saved.</p>'+
'<div style="background:#f6f4ef;border-left:5px solid #d3232b;border-radius:0 10px 10px 0;padding:12px 16px;margin:0 0 16px;text-align:left"><div style="font-family:Georgia,serif;font-style:italic;font-size:19px;color:#2b2b86">&ldquo;Never trust a skinny chef.&rdquo;</div><div style="font-size:13px;color:#d3232b;font-weight:700;margin-top:4px">Mrs. Perez</div></div>'+
'<details style="text-align:left;border:1px solid #d6d9ee;border-radius:10px;padding:10px 14px;margin:0 0 16px"><summary style="cursor:pointer;font-weight:700;color:#d3232b;font-size:15px">How we built this for you &rarr;</summary><div style="font-size:14px;line-height:1.5;color:#5d5f85;margin-top:8px"><b style="color:#2b2b86">Where the research came from</b><ul style="padding-left:18px;margin:6px 0 10px"><li style="margin:0 0 6px">Your own site, menus and story, so everything sounds like you</li><li style="margin:0 0 6px">Charlotte event calendars: Eventbrite, Meetup, chamber of commerce and Latin American Chamber listings</li><li style="margin:0 0 6px">Local news and guides on singles events, cultural festivals and holiday markets</li><li style="margin:0 0 6px">Brewery, venue and apartment community pages that book outside food</li></ul><b style="color:#2b2b86">How the outreach works</b><ul style="padding-left:18px;margin:6px 0 0"><li style="margin:0 0 6px">About 250 Charlotte targets in six segments, with the first 41 verified by hand</li><li style="margin:0 0 6px">Social DMs for events and hospitality, email from a separate domain for offices and corporate teams</li><li style="margin:0 0 6px">Reach out 2 to 6 weeks before each event, three touches, a catering quote as the close</li></ul></div></details>'+
'<p style="font-size:15px;margin:0;color:#2b2b86"><b>Want back in?</b> Reply to your TAZ email and we&rsquo;ll reopen it.</p></div></div>';
    (document.body || document.documentElement).appendChild(g);
  }
  function unlock() {
    document.documentElement.classList.remove('bg-lock');
    var g = document.getElementById('bg-gate'); if (g) g.remove();
    T('unlocked');
    if (/agreement\.html/.test(location.pathname)) return;
    var days = Math.max(0, Math.ceil((CLOSE_AT - Date.now()) / 864e5));
    var n = document.createElement('div'); n.id = 'bg-note';
    n.innerHTML = '<span><b>Hey Chef Izaya, this portal is all yours through Friday, Jan 15' +
      (days ? ' (' + days + ' day' + (days > 1 ? 's' : '') + ' left)' : '') + '.</b> Click around, try the order pages, and send me anything you want changed. We&rsquo;ll go over pricing together when we talk.</span>' +
      '<span style="display:flex;gap:8px;align-items:center;justify-content:center"><a href="' + base + 'agreement.html">Read the agreement →</a>' +
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
    var g = gate('<h2>Boriental Sushi by TAZ</h2><p>Welcome, Chef Izaya! This private preview is yours through Friday, January 15. Enter the password from your TAZ email to jump in.</p>' +
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
