//Accordion functions for reason section

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(
    ".spoilers-reason-list__header"
  );

  function toggleAccordion() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (this.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  }

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", toggleAccordion);
  });
});

//Navigation

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  function smoothScrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const offsetTop = targetSection.getBoundingClientRect().top;
    const headerHeight = document.querySelector("nav").offsetHeight;
    const scrollOptions = {
      behavior: "smooth",
    };
    window.scrollBy({
      top: offsetTop - headerHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScrollToSection);
  });
});
