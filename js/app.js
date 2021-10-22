/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// declare all sections in a variable 
const mySections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// declare the ul
const navBar = document.querySelector('#navbar__list');

// iterate over mySections variable and add li dynamically
mySections.forEach(section => {
  
  // create Element
  const listItem = document.createElement('li');

  // assign text to each listItem
  listItem.textContent = section.getAttribute('data-nav');

  // add smooth scroll
  navBar.addEventListener('click', ev => {
    if (ev.target === listItem) {
      section.scrollIntoView({behavior: 'smooth',block: 'center',inline: 'start'}); // MDN reference https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    }
  });

  // add class for each listItem => (for Css)
  listItem.className = 'list__edit'

  // append to navBar
  navBar.appendChild(listItem);
});


// Add class 'active' to section when near top of viewport
function allSectionDim() {
  mySections.forEach(section => {
  // get each section dimension using getBoundingClientRect
  const sectDimension = section.getBoundingClientRect(); 
  //console.log(sectDimension.top)
  //console.log(sectDimension.bottom)
  

  window.addEventListener('scroll', () => {
    if (sectDimension.top > 500) {
      mySections.forEach(section => {
        section.classList.remove('active-class')
      });
    }
    section.classList.add('active-class')
  })
})}

setTimeout(allSectionDim(), 0);
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


