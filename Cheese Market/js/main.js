'use strict';
{
const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  overlay.classList.add('show')
  open.classList.add('hide')
});

close.addEventListener('click', () => {
  overlay.classList.remove('show')
  open.classList.remove('hide')
});


const targets = document.querySelectorAll('.huwatto');

  function callback(entries, obs){
    console.log(entries);

    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
  
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.3,
    rootMargin:' 0px 0px -10px',
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}