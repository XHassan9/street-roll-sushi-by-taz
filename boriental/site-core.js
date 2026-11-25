(function(){
  var END=Date.parse('2027-01-16T05:00:00Z');
  function closed(){window.__siteCoreClose=true;
    var B=(document.currentScript&&document.currentScript.src)?document.currentScript.src.replace(/site-core\.js.*$/,''):(window.__bgBase||'');
    document.documentElement.innerHTML='<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Boriental Sushi by TAZ</title></head><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#2b2b86;padding:24px;box-sizing:border-box">'+'<div style="max-width:440px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.35);border-bottom:8px solid #d3232b;text-align:center;font-family:Raleway,system-ui,Arial,sans-serif;color:#2b2b86">'+
'<div style="background:#2b2b86 url('+B+'img/wave-white.png) center/cover;padding:22px 20px 54px"><img src="'+B+'img/logo-boriental.png" alt="Boriental Sushi" style="width:84px;height:84px;object-fit:contain;background:#fff;border-radius:50%;padding:6px"></div>'+
'<img src="'+B+'img/chef-izaya.jpg" alt="Chef Izaya" style="width:116px;height:116px;object-fit:cover;object-position:top;border-radius:50%;border:5px solid #fff;margin-top:-58px;background:#fff;box-shadow:0 4px 14px rgba(0,0,0,.2)">'+
'<div style="padding:10px 26px 26px"><h1 style="font-family:\'Rozha One\',Georgia,serif;font-weight:400;font-size:28px;line-height:1.15;margin:4px 0 10px">Built just for you, Chef</h1>'+
'<p style="color:#5d5f85;font-size:16px;line-height:1.55;margin:0 0 14px">We dug into Charlotte&rsquo;s events, venues and neighborhoods and custom-made Boriental Sushi by TAZ around your food, your story and your city. This preview has closed for now, but your build is saved.</p>'+
'<div style="background:#f6f4ef;border-left:5px solid #d3232b;border-radius:0 10px 10px 0;padding:12px 16px;margin:0 0 16px;text-align:left"><div style="font-family:Georgia,serif;font-style:italic;font-size:19px;color:#2b2b86">&ldquo;Never trust a skinny chef.&rdquo;</div><div style="font-size:13px;color:#d3232b;font-weight:700;margin-top:4px">Mrs. Perez</div></div>'+
'<details style="text-align:left;border:1px solid #d6d9ee;border-radius:10px;padding:10px 14px;margin:0 0 16px"><summary style="cursor:pointer;font-weight:700;color:#d3232b;font-size:15px">How we built this for you &rarr;</summary><div style="font-size:14px;line-height:1.5;color:#5d5f85;margin-top:8px"><b style="color:#2b2b86">Where the research came from</b><ul style="padding-left:18px;margin:6px 0 10px"><li style="margin:0 0 6px">Your own site, menus and story, so everything sounds like you</li><li style="margin:0 0 6px">Charlotte event calendars: Eventbrite, Meetup, chamber of commerce and Latin American Chamber listings</li><li style="margin:0 0 6px">Local news and guides on singles events, cultural festivals and holiday markets</li><li style="margin:0 0 6px">Brewery, venue and apartment community pages that book outside food</li></ul><b style="color:#2b2b86">How the outreach works</b><ul style="padding-left:18px;margin:6px 0 0"><li style="margin:0 0 6px">About 250 Charlotte targets in six segments, with the first 41 verified by hand</li><li style="margin:0 0 6px">Social DMs for events and hospitality, email from a separate domain for offices and corporate teams</li><li style="margin:0 0 6px">Reach out 2 to 6 weeks before each event, three touches, a catering quote as the close</li></ul></div></details>'+
'<p style="font-size:15px;margin:0;color:#2b2b86"><b>Want back in?</b> Reply to your TAZ email and we&rsquo;ll reopen it.</p></div></div>'+'</body>';
  }
  if(Date.now()>=END){closed();return;}
  setTimeout(closed,Math.min(END-Date.now(),2147483647));
  var field=function(t){return t&&t.closest&&t.closest('input,textarea,select,[contenteditable]');};
  var st=document.createElement('style');
  st.textContent='body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}input,textarea,select,[contenteditable]{-webkit-user-select:text;user-select:text}img{-webkit-user-drag:none}@media print{body{display:none!important}}';
  document.head.appendChild(st);
  ['contextmenu','dragstart'].forEach(function(e){document.addEventListener(e,function(ev){if(!field(ev.target))ev.preventDefault();},true);});
  ['copy','cut'].forEach(function(e){document.addEventListener(e,function(ev){if(!field(ev.target))ev.preventDefault();},true);});
  document.addEventListener('keydown',function(ev){
    var k=(ev.key||'').toLowerCase(),m=ev.ctrlKey||ev.metaKey;
    if(k==='f12'||(m&&(k==='u'||k==='s'||k==='p'))||(m&&ev.shiftKey&&(k==='i'||k==='j'||k==='c'))||(m&&ev.altKey&&(k==='i'||k==='j'||k==='u'))){ev.preventDefault();ev.stopPropagation();}
  },true);
})();
