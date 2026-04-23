// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',(e)=>{
  mx=e.clientX; my=e.clientY;
  cursor.style.left=(mx-5)+'px';
  cursor.style.top=(my-5)+'px';
});
function animateRing(){
  rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
  ring.style.left=(rx-18)+'px';
  ring.style.top=(ry-18)+'px';
  requestAnimationFrame(animateRing);
}
animateRing();
document.querySelectorAll('a,button,.faq-q,.action-card,.feature-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.transform='scale(2)';ring.style.transform='scale(1.5)';});
  el.addEventListener('mouseleave',()=>{cursor.style.transform='scale(1)';ring.style.transform='scale(1)';});
});

// Nav scroll
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>50);
});

// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// FAQ
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement;
    const wasOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
});
