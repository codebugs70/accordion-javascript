const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((item) =>
  item.addEventListener("click", function (e) {
    item.classList.toggle("active");

    const content = e.target.nextElementSibling;
    content.classList.toggle("active");
    content.style.height = `${content.scrollHeight}px`;

    if (!content.classList.contains("active")) {
      content.style.height = `0px`;
    }
  })
);
