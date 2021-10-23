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
/*function allSectionDim() {
  mySections.forEach(section => {
  // get each section dimension using getBoundingClientRect
  const sectDimension = section.getBoundingClientRect(); 
  console.log(sectDimension.top)
  //console.log(sectDimension.bottom)

  // add event listener on window to detect changes
  window.addEventListener('scroll', () => {
      for(i = 0; i < mySections.length; i++) {
        // if statement to check sections
        if (sectDimension.top < 250 && sectDimension.bottom < 960 && sectDimension.top > -400 && sectDimension.bottom > 312) {
          mySections[i].classList.add('active-class');
        }
      }
  })
  section.classList.remove('active-class')
})}*/

// intersectionObserver options
let options = {
  root: null,
  threshold: 0.4
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


