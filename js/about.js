// header logic

let header = document.querySelector('header');
let toggleBtn = document.querySelector('header .toggle');
let allLinks = document.querySelectorAll('header ul.links > li > a');
let allDropMenus = document.querySelectorAll('header ul.links li.sub ul.drop-menu');
window.onscroll = function() {
  if(scrollY > 0) {
    header.classList.add('scrl')
  } else {
    header.classList.remove('scrl')

  }
}

toggleBtn.onclick = function() {
  document.querySelector('header .toggle svg').classList.toggle('clicked')
  document.querySelector('header ul.links').classList.toggle('vert')
}

allLinks.forEach(link => {

  link.addEventListener('click', () => {
    // e.preventDefault()
    allLinks.forEach(l => l.classList.remove('active'))
    link.classList.add('active')
    allDropMenus.forEach(m => m.classList.remove('clicked'))
    // if(link.parentElement.querySelector('ul.drop-menu').classList.contains('clicked')) {
      link.parentElement.querySelector('ul.drop-menu').classList.toggle('clicked')
  })
})

// landing carousel


// award winning section logic
let statsSec = document.querySelector('.stats')

let allCounters = document.querySelectorAll('.stat p');

let started = false;


allCounters.forEach(c => c.textContent = '0')

window.addEventListener('scroll', () => {
  if(scrollY >= (statsSec.offsetTop - 300))
    if(!started) {
      allCounters.forEach(c => setCount(c));
    }

  started = true
})


function setCount(el) {
  let goal = el.dataset.count;

  let count = setInterval(() => {
    el.textContent++

    if (el.textContent == goal) {
      clearInterval(count)
    }

  }, 1000 / goal)

}



