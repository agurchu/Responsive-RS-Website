/// change background header
function scrollHeader() {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

//_____________________ swiper popular ___________________
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidePerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//_____________________ value accordion ___________________

///The code selects all the DOM elements with the class "value__accordion-item" and stores them in the variable "accordionItems".
const accordionItems = document.querySelectorAll(".value__accordion-item");

//The code loops through each accordion item in "accordionItems" and adds a click event listener to its header.
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");

  //the const varieble will listen to a click
  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    ///When an accordion header is clicked, the code first checks if there is any other open accordion item. If so, it closes it by calling the "toggleItem" function with the open item.
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");
  /// If the item is being opened, the function sets the height of its content to its scroll height, which expands it to fit its content. If the item is being closed, the function removes the height style attribute, which collapses it.
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

//_____________________ scroll sections active linkS ___________________

// Select all sections with an id attribute
const sections = document.querySelectorAll("section[id]");

// Function to check which section is active and add or remove the active-link class from the corresponding navigation link
function scrollActive() {
  // Get the current scroll position
  const scrollY = window.pageYOffset;

  // Loop through each section
  sections.forEach((current) => {
    // Get the height and top position of the current section
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    // Select the navigation link corresponding to the current section
    const navLink = document.querySelector(
      ".nav__menu a[href*= " + sectionId + "]"
    );

    // Check if the selected element is not null before calling the classList property
    if (navLink !== null) {
      // If the current section is in view, add the active-link class to the corresponding navigation link
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      }
      // Otherwise, remove the active-link class from the corresponding navigation link
      else {
        navLink.classList.remove("active-link");
      }
    }
  });
}

// Add an event listener to the window object to call the scrollActive function when the user scrolls
window.addEventListener("scroll", scrollActive);

//___________________________________________________ Show scroll Up ___________________

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // when the scroll is higher than 350 viewport height, add the show-scroll class to the tag with scroll-t
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);
