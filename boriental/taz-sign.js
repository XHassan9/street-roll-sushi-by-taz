/* TAZ accept & sign block. Usage: <div id="taz-sign" data-client="..." data-version="..." data-options="A|B"></div><script src="taz-sign.js"></script> */
(function () {
  var HOOK = 'https://cloud.activepieces.com/api/v1/webhooks/o94jfmWD36Gb2Seta4rLc';
  var el = document.getElementById('taz-sign'); if (!el) return;
  var client = el.dataset.client || '', version = el.dataset.version || '', opts = (el.dataset.options || '').split('|').filter(Boolean);
  var KEY = 'taz_signed_' + client.replace(/\W+/g, '_');
  var accent = el.dataset.accent || '#d3232b', ink = el.dataset.ink || '#2b2b86';
  var st = document.createElement('style');
  st.textContent = '#taz-sign{border:2px solid ' + ink + ';border-radius:12px;padding:22px;margin-top:28px;background:#fff}' +
    '#taz-sign h2{margin-top:0}#taz-sign label{display:block;font-weight:600;margin:12px 0 4px;font-size:14px}' +
    '#taz-sign input[type=text],#taz-sign input[type=email],#taz-sign textarea{width:100%;padding:11px 12px;border:1px solid #cfd3e6;border-radius:8px;font:inherit;font-size:15px;box-sizing:border-box}' +
    '#taz-sign .sig{font-family:"Brush Script MT","Segoe Script",cursive;font-size:26px}' +
    '#taz-sign .opt{display:flex;gap:10px;align-items:flex-start;border:1px solid #cfd3e6;border-radius:8px;padding:10px 12px;margin:6px 0;cursor:pointer;font-weight:400}' +
    '#taz-sign .chk{display:flex;gap:10px;align-items:flex-start;font-weight:400;margin-top:14px}' +
    '#taz-sign button{margin-top:16px;width:100%;padding:14px;border:0;border-radius:8px;background:' + accent + ';color:#fff;font-weight:700;font-size:16px;cursor:pointer}' +
    '#taz-sign button:disabled{opacity:.6;cursor:default}#taz-sign .msg{margin-top:10px;font-size:14px}' +
    '#taz-sign .done{text-align:center;padding:10px}#taz-sign .done b{display:block;font-size:22px;color:' + ink + ';margin-bottom:6px}' +
    '@media print{#taz-sign form{display:none}}';
  document.head.appendChild(st);
  function done(d) {
    el.innerHTML = '<div class="done"><b>Signed. Thank you!</b>Accepted by ' + esc(d.signer_name) + ' on ' + esc(d.when) +
      (d.payment_option ? ' · ' + esc(d.payment_option) : '') + '.<br>A copy of your acceptance was sent to TAZ, and I will be in touch with next steps shortly.</div>';
  }
  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  try { var prev = JSON.parse(localStorage.getItem(KEY) || 'null'); if (prev) return done(prev); } catch (e) {}
  el.innerHTML = '<h2>Accept &amp; sign</h2><p>Ready to move forward? Fill this in and tap the button. Your typed name works as your electronic signature on this agreement.</p>' +
    '<form novalidate><label>Full legal name</label><input type="text" name="signer_name" required autocomplete="name">' +
    '<label>Title</label><input type="text" name="signer_title" placeholder="Owner, Partner, etc." autocomplete="organization-title">' +
    '<label>Email</label><input type="email" name="signer_email" required autocomplete="email">' +
    (opts.length ? '<label>Payment option</label>' + opts.map(function (o, i) { return '<label class="opt"><input type="radio" name="payment_option" value="' + esc(o) + '"' + (i ? '' : ' checked') + '> <span>' + esc(o) + '</span></label>'; }).join('') : '') +
    '<label>Type your name to sign</label><input type="text" name="signature" class="sig" required>' +
    '<label>Anything you want me to know? (optional)</label><textarea name="notes" rows="2"></textarea>' +
    '<label class="chk"><input type="checkbox" name="agreed" required> <span>I have read this agreement and agree to its terms, and I am authorized to sign for my business.</span></label>' +
    '<button type="submit">Accept &amp; sign</button><div class="msg"></div></form>';
  var f = el.querySelector('form'), msg = f.querySelector('.msg'), btn = f.querySelector('button');
  f.onsubmit = function (ev) {
    ev.preventDefault();
    var fd = new FormData(f), d = {};
    fd.forEach(function (v, k) { d[k] = String(v).trim(); });
    if (!d.signer_name || !d.signer_email || !d.signature) { msg.style.color = accent; msg.textContent = 'Please add your name, email and signature.'; return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.signer_email)) { msg.style.color = accent; msg.textContent = 'Please check your email address.'; return; }
    if (d.signature.toLowerCase() !== d.signer_name.toLowerCase()) { msg.style.color = accent; msg.textContent = 'Your typed signature should match your full legal name.'; return; }
    if (!f.agreed.checked) { msg.style.color = accent; msg.textContent = 'Please check the box to agree to the terms.'; return; }
    d.agreed = 'Yes'; d.client = client; d.version = version; d.page = location.href; d.ua = navigator.userAgent;
    d.at = new Date().toISOString(); d.when = new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' });
    btn.disabled = true; btn.textContent = 'Signing…'; msg.textContent = '';
    fetch(HOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
      .then(function (r) { if (!r.ok) throw 0; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} done(d); })
      .catch(function () { btn.disabled = false; btn.textContent = 'Accept & sign'; msg.style.color = accent; msg.textContent = 'That did not go through. Please try again, or reply to your TAZ email with "I\'m in".'; });
  };
})();
