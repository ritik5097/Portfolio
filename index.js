// =========================
// EMAILJS CONTACT FORM
// =========================

// EmailJS Initialize
// emailjs.init("BhV_X1tSbtaZlG-ta");
emailjs.init({
  publicKey: "BhV_X1tSbtaZlG-ta",
});

// Form
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  message.style.display = "block";
  message.className = "";
  message.innerHTML = "⏳ Sending message...";

  emailjs
    .sendForm("service_b8piybd", "template_89e5hpo", this)
    .then(function () {
      message.className = "success";
      message.innerHTML = "✅ Message sent successfully!";

      form.reset();

      setTimeout(() => {
        message.style.display = "none";
      }, 5000);
    })
    .catch(function (error) {
      console.log(error);

      message.className = "error";
      message.innerHTML = "❌ Failed to send message. Please try again.";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const typing = document.getElementById("typing");

  if (!typing) return;

  const words = [
    "Frontend Developer",
    "WordPress Developer",
    "Web Designer",
    "UI/UX Enthusiast",
    "JavaScript Developer",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typing.textContent = currentWord.substring(0, charIndex--);
    } else {
      typing.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex > currentWord.length) {
      isDeleting = true;
      speed = 1500;
    }

    if (isDeleting && charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 300;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

/*=========================
SKILL ANIMATION
=========================*/
// alert("JavaScript Loaded");
const circles = document.querySelectorAll(".circle");

if (circles.length) {
  circles.forEach((circle) => {
    const progress = circle.querySelector(".progress");

    if (!progress) return;

    const percent = Number(circle.dataset.percent || 0);

    const radius = 52;

    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;

    progress.style.strokeDashoffset =
      circumference - (percent / 100) * circumference;
  });
}

/*=========================
PORTFOLIO FILTER
=========================*/

const filterBtns = document.querySelectorAll(".portfolio-filter button");
const cards = document.querySelectorAll(".portfolio-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        card.style.display = card.classList.contains(filter) ? "block" : "none";
      }
    });
  });
});

const counters = document.querySelectorAll(".count");

counters.forEach((counter) => {
  let start = 0;

  const end = counter.dataset.count;

  const speed = 40;

  const update = () => {
    start++;

    counter.innerText = start;

    if (start < end) {
      setTimeout(update, speed);
    }
  };

  update();
});

/*==========================
CUSTOM CURSOR
==========================*/

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
});

document.querySelectorAll("a,button,.btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.width = "70px";
    cursor.style.height = "70px";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.width = "40px";
    cursor.style.height = "40px";
  });
});
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 700);
  }, 2200);
});
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const width = (scrollTop / height) * 100;

  document.getElementById("progress-bar").style.width = width + "%";
});
const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {
  document.body.classList.toggle("light-theme");

  localStorage.setItem(
    "theme",

    document.body.classList.contains("light-theme") ? "light" : "dark",
  );
};

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
}
/*==========================
LENIS
==========================*/

const lenis = new Lenis({
  duration: 1.3,

  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/*==========================
GSAP
==========================*/

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,

    y: 80,

    duration: 1,

    scrollTrigger: {
      trigger: section,

      start: "top 80%",
    },
  });
  gsap.from(".faq-item", {
    scrollTrigger: ".faq-section",
    x: -80,
    opacity: 0,
    stagger: 0.15,
  });
});
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const typing = document.getElementById("typing");

  if (!typing) return;

  const words = [
    "Frontend Developer",
    "WordPress Developer",
    "Web Designer",
    "UI/UX Enthusiast",
    "JavaScript Developer",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typing.textContent = currentWord.substring(0, charIndex--);
    } else {
      typing.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex > currentWord.length) {
      isDeleting = true;
      speed = 1500;
    }

    if (isDeleting && charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 300;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
});
