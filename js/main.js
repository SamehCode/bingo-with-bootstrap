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

  link.addEventListener('click', (e) => {
    e.preventDefault()
    allLinks.forEach(l => l.classList.remove('active'))
    link.classList.add('active')
    allDropMenus.forEach(m => m.classList.remove('clicked'))
    if(link.parentElement.querySelector('ul.drop-menu').classList.contains('clicked')) {
      link.parentElement.querySelector('ul.drop-menu').classList.remove('clicked')
    } else {
      link.parentElement.querySelector('ul.drop-menu').classList.add('clicked')

    }
  })
})

// landing carousel
let leftArrow = document.querySelector('.landing .carousel .carousel-control-prev');
let rightArrow = document.querySelector('.carousel-control-next');

let backImg = ['call-to-action-bg', 'slider-bg-1', 'slider-bg-2'];
let carouselItems = document.querySelectorAll('.landing .carousel .carousel-item');



let countInt = setInterval(() => {
    let randomNum =  Math.floor(Math.random() * backImg.length)
    document.getElementById('landing').style.backgroundImage = "url(" + '../theme/images/slider/' + backImg[randomNum] + '.jpg' + ")";
    carouselItems.forEach(item => item.classList.remove('active'))
    carouselItems[randomNum].classList.add('active')

}, 2000)

document.querySelector('.landing').onmouseenter = function() {
  leftArrow.classList.add('show')
  rightArrow.classList.add('show')
}
document.querySelector('.landing').onmouseleave = function() {
  leftArrow.classList.remove('show')
  rightArrow.classList.remove('show')
}

let currentSlide = 0;

leftArrow.onclick = prevSlide;
rightArrow.onclick = nextSlide;

function theChecker() {
  document.getElementById('landing').style.backgroundImage = "url(" + 'theme/images/slider/' + backImg[currentSlide - 1] + '.jpg' + ")";
  clearInterval(countInt);
  carouselItems.forEach(item => item.classList.remove('active'))
  carouselItems[currentSlide - 1].classList.add('active')
}

function prevSlide() {
  if(currentSlide == 0) {
    currentSlide = backImg.length
  }

  console.log(currentSlide)
  currentSlide--
  theChecker()
}

function nextSlide() {
  if(currentSlide == backImg.length) {
    currentSlide = 0
  }

  console.log(currentSlide)
  currentSlide++
  theChecker()
}


// award winning section logic
let statsSec = document.querySelector('.stats')

let allCounters = document.querySelectorAll('.stat p');

let started = false;


allCounters.forEach(c => c.textContent = '0')

window.addEventListener('scroll', () => {
  if(scrollY >= (statsSec.offsetTop - 300))
    if(!started) {
      allCounters.forEach(c => setCount(c))
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



