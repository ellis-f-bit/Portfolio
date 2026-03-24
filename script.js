const orb = document.querySelector("[data-cursor-orb]");
const hoverTargets = document.querySelectorAll("[data-hover-label]");
const horizontalPages = document.querySelectorAll(".page-horizontal");

if (orb && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    orb.classList.add("is-visible");
    orb.style.left = `${event.clientX}px`;
    orb.style.top = `${event.clientY}px`;
  });

  hoverTargets.forEach((target) => {
    target.addEventListener("pointerenter", () => {
      orb.classList.add("is-active");
    });

    target.addEventListener("pointerleave", () => {
      orb.classList.remove("is-active");
    });
  });
}

horizontalPages.forEach((page) => {
  if (window.matchMedia("(max-width: 760px)").matches) {
    return;
  }

  page.addEventListener(
    "wheel",
    (event) => {
      const absY = Math.abs(event.deltaY);
      const absX = Math.abs(event.deltaX);
      if (absY > absX) {
        event.preventDefault();
        page.scrollLeft += event.deltaY;
      }
    },
    { passive: false }
  );
});
