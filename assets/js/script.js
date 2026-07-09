let currentLang = "ar";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("lang-ar", lang === "ar");
  document.body.classList.toggle("lang-en", lang === "en");
  document.title =
    lang === "ar"
      ? "كفاءة العربية المتحدة للخدمات اللوجستية | تأجير سيارات فاخرة"
      : "Kafaa United Arab Logistics | Luxury Car Rental";

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  const content = languageContent[lang];
  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };
  const setHTML = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  };
  const setListText = (selector, values) => {
    const items = document.querySelectorAll(selector);
    items.forEach((element, index) => {
      if (values[index] !== undefined) element.textContent = values[index];
    });
  };

  setText(".loading-screen p", content.loadingText);
  document.querySelectorAll(".brand-name").forEach((element) => {
    element.textContent = content.brandName;
  });
  setText("#testimonials .section-heading p", content.testimonialsText);

  document.querySelectorAll(".brand-subtitle").forEach((element) => {
    element.textContent = content.brandSubtitle;
  });
  // Navbar Links
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link, index) => {
    if (content.navbarLinks[index]) {
      link.textContent = content.navbarLinks[index];
    }
  });
  setText(".hero-section .eyebrow", content.heroEyebrow);
  setText(".hero-title", content.heroTitle);
  setText(".hero-text", content.heroText);
  const heroButtons = document.querySelectorAll(".hero-actions .btn");
  heroButtons.forEach((button, index) => {
    if (content.heroButtons[index])
      button.textContent = content.heroButtons[index];
  });
  const heroBadges = document.querySelectorAll(".hero-badges span");
  heroBadges.forEach((badge, index) => {
    if (content.heroBadges[index]) {
      const iconClass = index === 0 ? "fa-shield-halved" : "fa-star";
      badge.innerHTML = `<i class="fa-solid ${iconClass}"></i> ${content.heroBadges[index]}`;
    }
  });

  setText("#fleet .section-heading .eyebrow", content.fleetEyebrow);
  setText("#fleet .section-heading h2", content.fleetTitle);
  setText("#fleet .section-heading p", content.fleetText);

  document
    .querySelectorAll("#fleet .swiper-slide:not(.swiper-slide-duplicate)")
    .forEach((slide, index) => {
      const card = content.fleetCards[index];
      if (!card) return;

      slide.querySelector("h4").textContent = card.title;
      slide.querySelector("p").textContent = card.text;
      slide.querySelector(".btn").textContent = card.button;
    });

  setText("#about .eyebrow", content.aboutEyebrow);
  setText("#about h2", content.aboutTitle);
  setText(
    "#about > .container > .row > .col-lg-6:first-child > p:last-of-type",
    content.aboutText,
  );
  const aboutCards = document.querySelectorAll("#about .about-box h4");
  aboutCards.forEach((card, index) => {
    if (content.aboutCards[index]) card.textContent = content.aboutCards[index];
  });
  const aboutCardTexts = document.querySelectorAll("#about .about-box p");
  aboutCardTexts.forEach((card, index) => {
    if (content.aboutCardTexts[index])
      card.textContent = content.aboutCardTexts[index];
  });
  setText("#about .values-card h3", content.valuesTitle);
  setListText("#about .value-list li", content.valuesItems);

  setText("#why-us .eyebrow", content.whyEyebrow);
  setText("#why-us h2", content.whyTitle);
  setText("#why-us .section-heading p", content.whyText);
  setListText(
    "#why-us .info-card h4",
    content.whyCards.map((card) => card.title),
  );
  setListText(
    "#why-us .info-card p",
    content.whyCards.map((card) => card.text),
  );

  setListText(".stat-box p", content.stats);

  setText("#services .eyebrow", content.servicesEyebrow);
  setText("#services h2", content.servicesTitle);
  setText("#services .services-description", content.servicesText);
  setText("#services .section-heading p:last-of-type", content.servicesText);
  setListText(
    "#services .service-card h4",
    content.services.map((service) => service.title),
  );
  setListText(
    "#services .service-card p",
    content.services.map((service) => service.text),
  );
  setText("#services .services-cta .btn", content.servicesButton);

  setText("#gallery .gallery-description", content.galleryText);
  setText("#gallery .eyebrow", content.galleryEyebrow);
  setText("#gallery h2", content.galleryTitle);
  setText("#gallery .gallery-description", content.galleryText);

  setText(
    "#testimonials .section-heading .eyebrow",
    content.testimonialsEyebrow,
  );
  setText("#testimonials .section-heading h2", content.testimonialsTitle);
  setListText(
    ".testimonial-card p",
    content.testimonials.map((item) => item.quote),
  );
  setListText(
    ".testimonial-card h4",
    content.testimonials.map((item) => item.name),
  );
  setListText(
    ".testimonial-card span",
    content.testimonials.map((item) => item.role),
  );

  setText("#contact .eyebrow", content.contactEyebrow);
  setText("#contact .section-heading h2", content.contactTitle);
  setText("#contact .section-heading p", content.contactText);
  const contactItems = document.querySelectorAll(
    "#contact .contact-info-item h4",
  );
  contactItems.forEach((item, index) => {
    if (content.contactItems[index])
      item.textContent = content.contactItems[index];
  });
  const contactValues = document.querySelectorAll(
    "#contact .contact-info-item p",
  );
  contactValues.forEach((item, index) => {
    if (content.contactValues[index])
      item.textContent = content.contactValues[index];
  });
  const contactButtons = document.querySelectorAll(
    "#contact .contact-actions .btn",
  );
  contactButtons.forEach((button, index) => {
    if (content.contactButtons[index]) {
      const iconClass = index === 0 ? "fa-phone" : "fa-whatsapp";
      if (content.contactButtons[index]) {
        if (index === 0) {
          button.innerHTML = `<i class="fa-solid fa-phone"></i> ${content.contactButtons[index]}`;
        } else {
          button.innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${content.contactButtons[index]}`;
        }
      }
      const contactLinks = document.querySelectorAll(
        "#contact .contact-actions .btn",
      );

      if (contactLinks[0]) {
        contactLinks[0].href = "tel:8001280030";
      }

      if (contactLinks[1]) {
        contactLinks[1].href = "https://wa.me/966507000227";
      }
    }
  });

  setText(".footer-section .col-lg-4:first-of-type p", content.footerIntro);
  setText(
    ".footer-section .col-lg-4:nth-of-type(2) h4",
    content.footerLinksHeading,
  );
  setListText(".footer-section .footer-links a", content.footerLinks);
  setText(
    ".footer-section .col-lg-4:nth-of-type(3) h4",
    content.footerFollowHeading,
  );
  setText(
    ".footer-section .col-lg-4:nth-of-type(3) p.mt-3",
    content.footerRegistration,
  );
  setText(".footer-bottom p", content.footerBottom);

  setText(".back-to-top", "");
  setHTML(".back-to-top", '<i class="fa-solid fa-arrow-up"></i>');
  setText(".floating-btn.whatsapp", "");
  setHTML(".floating-btn.whatsapp", '<i class="fa-brands fa-whatsapp"></i>');
  setText(".floating-btn.call", "");
  setHTML(".floating-btn.call", '<i class="fa-solid fa-phone"></i>');

  document.querySelectorAll("[aria-label]").forEach((element) => {
    const label = element.getAttribute("aria-label");
    const translation = translations[label];
    if (translation) element.setAttribute("aria-label", translation[lang]);
  });
  initFleetSwiper();
  initTestimonialSwiper();
  updateActiveNavLink();
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

function updateActiveNavLink() {
  const sections = Array.from(
    document.querySelectorAll("main section[id], main [id]"),
  );
  const links = Array.from(document.querySelectorAll(".nav-link"));
  const scrollY = window.scrollY + 140;

  let currentId = "";
  sections.forEach((section) => {
    if (section.offsetTop <= scrollY) {
      currentId = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentId}`,
    );
  });
}

window.addEventListener("scroll", updateActiveNavLink, { passive: true });
window.addEventListener("load", updateActiveNavLink);

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(updateActiveNavLink, 80);
  });
});

AOS.init({ duration: 900, once: true, offset: 90, easing: "ease-out-cubic" });
let carSwiper = null;
let testimonialSwiper = null;

function initTestimonialSwiper() {
  if (testimonialSwiper) {
    testimonialSwiper.destroy(true, true);
  }

  const testimonialElement = document.querySelector(".testimonialSwiper");
  if (!testimonialElement) return;

  try {
    testimonialSwiper = new Swiper(testimonialElement, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      speed: 800,

      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      pagination: {
        el: ".testimonialSwiper .swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
}

function initFleetSwiper() {
  if (carSwiper) {
    carSwiper.destroy(false, true);
  }

  const fleetSwiper = document.querySelector(".carSwiper");
  if (!fleetSwiper) return;

  // أضف السطر ده
  fleetSwiper.dir = document.documentElement.dir;

  try {
    carSwiper = new Swiper(fleetSwiper, {
      slidesPerView: 1.2,
      spaceBetween: 30,
      loop: true,
      centeredSlides: false,
      speed: 500,

      autoplay: {
        delay: 800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: false,

      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
carSwiper.update();
carSwiper.slideTo(0, 0);
    fleetSwiper.classList.remove("is-fallback");
  } catch (error) {
    fleetSwiper.classList.add("is-fallback");
  }
}

const counters = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.target);
      const duration = 1400;
      const startTime = performance.now();
      const suffix =
        target === 24
          ? "+"
          : target === 12
            ? "+"
            : target === 250
              ? "+"
              : target === 1000
                ? "+"
                : "";
      const updateCounter = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        entry.target.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(updateCounter);
      };
      requestAnimationFrame(updateCounter);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.6 },
);

counters.forEach((counter) => counterObserver.observe(counter));

window.addEventListener("load", () => {
  const loader = document.querySelector(".loading-screen");
  const transition = document.querySelector(".page-transition");
  if (loader) loader.classList.add("hidden");
  if (transition) transition.classList.add("active");
  setTimeout(() => {
    if (loader) loader.remove();
    if (transition) transition.classList.remove("active");
  }, 500);
});

const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);
});

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector("#lightbox img");
const closeButton = document.querySelector(".lightbox-close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const source = item.querySelector("img")?.src;
    if (source && lightboxImage) {
      lightboxImage.src = source;
      lightbox?.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  });
});

const closeLightbox = () => {
  lightbox?.classList.remove("show");
  document.body.style.overflow = "";
};

closeButton?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

const premiumCards = document.querySelectorAll(".premium-card");
premiumCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 6;
    const rotateX = (0.5 - y / rect.height) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  if (button) {
    button.textContent = "Request Submitted";
    button.disabled = true;
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      event.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

applyLanguage("ar");
initFleetSwiper();
initTestimonialSwiper();
