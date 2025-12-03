import { gsap } from "gsap";

export function initHeaderAnimations() {
  // Animation d'entrée du header
  gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  // Animation du logo au survol
  const logo = document.querySelector("header a[href='/']");
  if (logo) {
    logo.addEventListener("mouseenter", () => {
      gsap.to(logo, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    logo.addEventListener("mouseleave", () => {
      gsap.to(logo, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }

  // Animation des liens de navigation
  const navLinks = document.querySelectorAll("nav a[data-nav-link]");
  navLinks.forEach((link) => {
    const underline = link.querySelector("[data-underline]");

    link.addEventListener("mouseenter", () => {
      if (!link.classList.contains("active")) {
        gsap.to(link, {
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });

        if (underline) {
          gsap.to(underline, {
            width: "100%",
            duration: 0.4,
            ease: "power3.out",
          });
        }
      }
    });

    link.addEventListener("mouseleave", () => {
      if (!link.classList.contains("active")) {
        gsap.to(link, {
          color: "#9ca3af",
          duration: 0.3,
          ease: "power2.out",
        });

        if (underline) {
          gsap.to(underline, {
            width: "0%",
            duration: 0.4,
            ease: "power3.out",
          });
        }
      }
    });
  });

  // Animation des icônes sociales
  const socialIcons = document.querySelectorAll("[data-social-icon]");
  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        y: -4,
        scale: 1.1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    });

    icon.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Animation d'apparition séquentielle des éléments de navigation
  gsap.from("nav li", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.3,
  });
}
