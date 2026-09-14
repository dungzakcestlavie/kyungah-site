/* Decorative opening constellation. No timers or changes to navigation. */
(() => {
 let field=document.querySelector('#panel-home .kyungah-stars');
 if(!field) return;
 function renderConstellation() {
 const fragment=document.createDocumentFragment();
 const count=window.matchMedia('(max-width:600px)').matches?104:168;
 for(let i=0;i<count;i++) {
  const star=document.createElement('span');
  const type=i%12===0?'flare':i%3===0?'star':'dust';
  star.className='kyungah-spark kyungah-spark--'+type;
  const angle=i*2.399963229728653;
  const radius=.65+(i%7)*.05;
  star.style.setProperty('--cx',String(Math.cos(angle)));
  star.style.setProperty('--cy',String(Math.sin(angle)));
  star.style.setProperty('--dx',String(Math.cos(angle)*radius));
  star.style.setProperty('--dy',String(Math.sin(angle)*radius));
  star.style.setProperty('--size',(type==='flare'?12+i%5:type==='star'?5+i%4:1.5+i%3)+'px');
  star.style.setProperty('--duration',(18+i%7*1.1)+'s');
  star.style.setProperty('--delay',((i%28)*.2)+'s');
  star.style.setProperty('--spark-color',['#4385A5','#57A18D','#BFA777','#78AFC2'][i%4]);
  const core=document.createElement('i');
  star.appendChild(core);fragment.appendChild(star);
 }
 field.replaceChildren(fragment);
 }
 renderConstellation();
 window.addEventListener('pageshow', event => {
  if (event.persisted) { const fresh=field.cloneNode(false); field.replaceWith(fresh); field=fresh; renderConstellation(); }
 });
})();
