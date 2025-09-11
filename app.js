// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
// PAGE TRANSITIONS
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  // Handle clicks on internal links
  document.querySelectorAll("a[href]").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        const url = link.getAttribute("href");

        // Ignore anchors and external links
        if (!url || url.startsWith("#") || url.startsWith("http")) return;

        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = url;
        }, 500); // matches CSS transition duration
      });
    }
  });
});
// COUNTER ANIMATION
document.querySelectorAll(".counter").forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const speed = 200; // lower = faster
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
function toggleMenu() {
  document.querySelector(".nav").classList.toggle("show");
}
// MOBILE DROPDOWN TOGGLE
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", function(e) {
    // Only apply this on mobile screens
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent navigation
      const parent = this.parentElement;
      parent.classList.toggle("open");
    }
  });
});
