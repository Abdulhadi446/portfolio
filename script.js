// 1. Create the observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Element is visible:", entry.target);
        entry.target.classList.add("show"); // e.g., trigger animation
        observer.unobserve(entry.target); // optional: stop watching
      }
    });
  },
  {
    root: null, // defaults to viewport
    threshold: 0.1, // triggers when 10% of element is visible
  }
);
// 2. Observe target elements
document.querySelector("#about").classList.add("hide");
document.querySelector("#projects").classList.add("hide");
document.querySelectorAll("#about, #projects").forEach((el) => {
  observer.observe(el);
});

// Toggle description function
function toggleDescription(id) {
  const element = document.getElementById(id);
  element.classList.toggle('hidden-description');
}