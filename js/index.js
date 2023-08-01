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
