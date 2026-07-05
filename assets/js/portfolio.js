(function () {
  const nav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-drawer a");
  const sections = document.querySelectorAll("section[id]");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileDrawer = document.querySelector(".mobile-drawer");

  function onScroll() {
    if (window.scrollY > 12) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    let current = "";
    sections.forEach(function (section) {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove("open");
    }
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", function () {
      mobileDrawer.classList.toggle("open");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
  }
})();
