(function(w,d){!function(bS,bT,bU,bV){bS[bU]=bS[bU]||{};bS[bU].executed=[];bS.zaraz={deferred:[],listeners:[]};bS.zaraz.q=[];
      bS.zaraz._f=function(bW){return async function(){var bX=Array.prototype.slice.call(arguments);bS.zaraz.q.push({m:bW,a:bX})}};
      for(const bY of["track","set","debug"])bS.zaraz[bY]=bS.zaraz._f(bY);
      bS.zaraz.init=()=>{var bZ=bT.getElementsByTagName(bV)[0],b$=bT.createElement(bV),ca=bT.getElementsByTagName("title")[0];
      ca&&(bS[bU].t=bT.getElementsByTagName("title")[0].text);bS[bU].x=Math.random();bS[bU].w=bS.screen.width;bS[bU].h=bS.screen.height;
      bS[bU].j=bS.innerHeight;bS[bU].e=bS.innerWidth;bS[bU].l=bS.location.href;bS[bU].r=bT.referrer;bS[bU].k=bS.screen.colorDepth;
      bS[bU].n=bT.characterSet;bS[bU].o=(new Date).getTimezoneOffset();if(bS.dataLayer)for(const ce of Object.entries(Object.entries
      (dataLayer).reduce(((cf,cg)=>({...cf[1],...cg[1]})),{})))zaraz.set(ce[0],ce[1],{scope:"page"});bS[bU].q=[];
      for(;bS.zaraz.q.length;){const ch=bS.zaraz.q.shift();bS[bU].q.push(ch)}b$.defer=!0;for(const ci of[localStorage,sessionStorage])
      Object.keys(ci||{}).filter((ck=>ck.startsWith("_zaraz_"))).forEach((cj=>{try{bS[bU]["z_"+cj.slice(7)]=JSON.parse(ci.getItem(cj))}
      catch{bS[bU]["z_"+cj.slice(7)]=ci.getItem(cj)}}));b$.referrerPolicy="origin";b$.src="../../cdn-cgi/zaraz/sd0d9.js?z="+
      btoa(encodeURIComponent(JSON.stringify(bS[bU])));bZ.parentNode.insertBefore(b$,bZ)};["complete","interactive"].includes(bT.readyState)?
      zaraz.init():bS.addEventListener("DOMContentLoaded",zaraz.init)}(w,d,"zarazData","script");})(window,document);
