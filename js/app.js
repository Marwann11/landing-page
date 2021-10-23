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

const sectArray = Array.from(mySections)

// declare the ul
const navBar = document.querySelector('#navbar__list');
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

// create a document fragment to minimize reflow & repaint
const myDocFrag = document.createDocumentFragment()

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

  // append to documentFragment
  myDocFrag.appendChild(listItem); // no reflow or repaint here
});

// append to navBar
navBar.appendChild(myDocFrag); // one reflow and repaint here



// Add class 'active' to section when near top of viewport

// use intersectionObserver api to track changes in sections visibility
// source => https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// intersectionObserver options
let options = {
  root: null, // root refers to browser viewport
  threshold: 0.65
}

//callback function for intersection observer
let callBackFunc = (entries) => { // entries refers to all elements observed
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active-class');
    }
    else {
      entry.target.classList.remove('active-class');
    }
  }) 
}

// create intersectionObserver
const observer = new IntersectionObserver(callBackFunc, options);


// using forEach method to observe over every element
mySections.forEach(elem => {
  if (elem) {
    observer.observe(elem);
  }
})



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


