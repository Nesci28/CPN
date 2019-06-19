if (window.innerWidth >= 791) {
  window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    const sticky = window.innerHeight;
    myFunction(navbar, sticky);
  };
}

// window.onresize

function myFunction(navbar, sticky) {
  if (window.pageYOffset > sticky - 100) {
    navbar.classList.remove("notSticky");
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("notSticky");
  }
}

if (window.innerWidth <= 884) {
  document
    .querySelector(
      "#testimonials > div > div:nth-child(1) > div.testimonial-avatar > i"
    )
    .classList.remove("fa-4x");
  document
    .querySelector(
      "#testimonials > div > div:nth-child(1) > div.testimonial-avatar > i"
    )
    .classList.add("fa-2x");
  document
    .querySelector(
      "#testimonials > div > div:nth-child(2) > div.testimonial-avatar > i"
    )
    .classList.remove("fa-4x");
  document
    .querySelector(
      "#testimonials > div > div:nth-child(2) > div.testimonial-avatar > i"
    )
    .classList.add("fa-2x");
  document
    .querySelector(
      "#testimonials > div > div:nth-child(3) > div.testimonial-avatar > i"
    )
    .classList.remove("fa-4x");
  document
    .querySelector(
      "#testimonials > div > div:nth-child(3) > div.testimonial-avatar > i"
    )
    .classList.add("fa-2x");
}
