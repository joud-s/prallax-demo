const translate = document.querySelectorAll('.translate');
const title = document.querySelector('.big-title');
const header = document.querySelector('header');
const shadow = document.querySelector('.shadow');
const content = document.querySelector('.content');
const section = document.querySelector('section');
const imgCon = document.querySelector('.imgCon');
const opacity = document.querySelectorAll('.opacity');

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

console.log(header_height);
window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });
  opacity.forEach(element => {
    element.style.opacity = scroll / (section_height + sectionY.top);
  });
  title.style.opacity = -scroll / (header_height / 1.5) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;
  content.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * 75 - 75
  }px)`;
  imgCon.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -75 + 75
  }px)`;
});
