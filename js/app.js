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

// declare the ul
const navBar = document.querySelector('#navbar__list');

// declare all listItems
const allLists = document.querySelectorAll('li');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//callback function for intersection observer
let callBackFunc = (sections) => { 
  sections.forEach(section => {
    if (section.isIntersecting) { // if section is intersecting with the amount declared in threshold
      //
      section.target.classList.add('active-class'); // section(entry).target refers to the element itself
    } else {
      section.target.classList.remove('active-class');
    }
  }) 
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// create a document fragment to minimize reflow & repaint
const myDocFrag = document.createDocumentFragment();

// iterate over mySections variable and add li dynamically
mySections.forEach(section => {
  
  // create Element
  const listItem = document.createElement('li');

  // assign text to each listItem
  listItem.textContent = section.getAttribute('data-nav');
  
  // add smooth scroll
  navBar.addEventListener('click', ev => { // one event listener here on navBar
    if (ev.target === listItem) { //using event.target to access each listItem
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
};

// create intersectionObserver
const observer = new IntersectionObserver(callBackFunc, options);

// using forEach method to observe over every section 
mySections.forEach(elem => { 
  if (elem) {
    observer.observe(elem); // learned from => https://stackoverflow.com/questions/54866560/same-intersection-observer-for-multiple-html-elements
  }
});


/** 
 * layoutChanges
 */

// fontSize adjust for multiple screens

// for mobile-devices
if (window.innerWidth < 600) {
    document.body.style.fontSize = '60%';
};

// for laptops and medium screens
if (window.innerWidth >= 1000) {
  document.querySelectorAll('li').forEach(elem => {
    elem.style.fontSize = '90%';
  })
  document.querySelectorAll('section').forEach(section => {
    section.style.fontSize = '15pt';
  })
};

// for 4k screens
if (window.innerWidth > 2000) {
  document.body.style.fontSize = '200%';
  document.querySelectorAll('section').forEach(section => {
    section.style.fontSize = '30pt';
  })
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


