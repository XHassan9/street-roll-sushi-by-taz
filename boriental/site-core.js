(function(){
  var END=Date.parse('2026-11-21T05:00:00Z');
  function closed(){
    document.documentElement.innerHTML='<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Boriental Sushi by TAZ</title></head><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#2b2b86;color:#fff;font-family:system-ui,Arial,sans-serif;text-align:center;padding:24px"><div><h1 style="font-family:Georgia,serif;font-weight:400;font-size:34px;margin:0 0 12px">This preview has closed</h1><p style="font-size:18px;opacity:.9;max-width:460px;margin:0 auto">The Boriental Sushi by TAZ proposal was open through November 20, 2026. Reach out and we will open it back up.</p></div></body>';
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
