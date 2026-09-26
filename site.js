const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems=document.querySelectorAll('.v2-intro-copy,.v2-feature-head,.v2-feature-frame,.v2-manifesto-grid,.v2-process-head,.v2-process-item,.v2-work-head,.v2-work-card,.v2-closing-inner');
if('IntersectionObserver' in window&&!reduced){
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v2-in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -50px'});
 revealItems.forEach((el,i)=>{el.style.setProperty('--v2-delay',Math.min(i*45,260)+'ms');io.observe(el)});
}else revealItems.forEach(el=>el.classList.add('v2-in'));
if(!reduced&&!('ontouchstart' in window)){
 const hero=document.querySelector('.v2-hero-media img');
 window.addEventListener('scroll',()=>{if(hero)hero.style.transform='translate3d(0,'+Math.min(window.scrollY*.035,22)+'px,0) scale(1.02)'},{passive:true});
}