(function () {
  function initProjectsPager() {
    const list = document.getElementById("projects-list");
    const position = document.getElementById("projects-position");
    const prevBtn = document.querySelector('[data-projects-nav="prev"]');
    const nextBtn = document.querySelector('[data-projects-nav="next"]');
    if (!list || !(prevBtn instanceof HTMLButtonElement) || !(nextBtn instanceof HTMLButtonElement)) return;

    const cards = Array.from(list.children);
    const getVisibleCount = function () {
      return window.matchMedia("(max-width: 760px)").matches ? 1 : 2;
    };
    let visibleCount = getVisibleCount();
    let start = 0;

    const maxStart = function () {
      return Math.max(0, cards.length - visibleCount);
    };

    const render = function () {
      cards.forEach(function (card, index) {
        const visible = index >= start && index < start + visibleCount;
        const wasHidden = card.hasAttribute("hidden");
        card.toggleAttribute("hidden", !visible);
        card.setAttribute("aria-hidden", String(!visible));
        if (visible && wasHidden) {
          card.classList.remove("project-card-enter");
          void card.offsetWidth;
          card.classList.add("project-card-enter");
        }
      });
      const disableNav = cards.length <= visibleCount;
      prevBtn.disabled = disableNav;
      nextBtn.disabled = disableNav;
      if (position) {
        const currentStart = cards.length === 0 ? 0 : start + 1;
        const currentEnd = cards.length === 0 ? 0 : Math.min(start + visibleCount, cards.length);
        position.textContent = currentStart + "-" + currentEnd + " / " + cards.length;
      }
    };

    prevBtn.onclick = function () {
      if (cards.length <= visibleCount) return;
      start = start <= 0 ? maxStart() : start - 1;
      render();
    };

    nextBtn.onclick = function () {
      if (cards.length <= visibleCount) return;
      start = start >= maxStart() ? 0 : start + 1;
      render();
    };

    window.addEventListener(
      "resize",
      function () {
        const nextCount = getVisibleCount();
        if (nextCount === visibleCount) return;
        visibleCount = nextCount;
        start = Math.min(start, maxStart());
        render();
      },
      { passive: true }
    );

    render();
  }

  window.initializeProjectsPager = initProjectsPager;
  window.addEventListener("DOMContentLoaded", initProjectsPager);
})();
