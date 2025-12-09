import { gsap } from "gsap";

export function initHeaderAnimations() {
  // Animation d'entrée du header
  gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  // Détection de la section active au scroll
  let ticking = false;
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("a[data-nav-link][data-section]");
  const mobileNavLinks = document.querySelectorAll("a[data-mobile-nav-link][data-section]");

  function updateActiveSection() {
    const scrollPosition = window.scrollY + 100; // Offset pour trigger plus tôt

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.id;
      }
    });

    // Mettre à jour les liens desktop
    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("data-section");
      const underline = link.querySelector("[data-underline]");
      const isActive = sectionId === currentSection;

      if (isActive) {
        link.classList.add("active");
        link.classList.remove("text-gray-400");
        link.classList.add("text-white");
        if (underline) {
          gsap.to(underline, {
            width: "100%",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      } else {
        link.classList.remove("active");
        link.classList.remove("text-white");
        link.classList.add("text-gray-400");
        if (underline && !link.matches(":hover")) {
          gsap.to(underline, {
            width: "0%",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    });

    // Mettre à jour les liens mobile
    mobileNavLinks.forEach((link) => {
      const sectionId = link.getAttribute("data-section");
      const indicator = link.querySelector("[data-mobile-indicator]");
      const isActive = sectionId === currentSection;

      if (isActive) {
        link.classList.remove("text-gray-400");
        link.classList.add("text-white");
        if (indicator) {
          indicator.classList.remove("opacity-0");
          indicator.classList.add("opacity-100");
        }
      } else {
        link.classList.remove("text-white");
        link.classList.add("text-gray-400");
        if (indicator) {
          indicator.classList.remove("opacity-100");
          indicator.classList.add("opacity-0");
        }
      }
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateActiveSection);
      ticking = true;
    }
  }

  // Écouter le scroll si on est sur la page d'accueil
  if (window.location.pathname === "/" || window.location.pathname === "/school-portfolio/") {
    window.addEventListener("scroll", onScroll);
    // Initialiser l'état au chargement
    updateActiveSection();
  }

  // Gestion du menu mobile
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      const spans = mobileMenuButton.querySelectorAll("span");

      if (isMenuOpen) {
        // Animation du bouton hamburger vers X
        gsap.to(spans[0], {
          rotation: 45,
          y: 8,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(spans[1], {
          opacity: 0,
          duration: 0.2,
        });
        gsap.to(spans[2], {
          rotation: -45,
          y: -8,
          duration: 0.3,
          ease: "power2.inOut",
        });

        // Ouverture du menu mobile
        gsap.to(mobileMenu, {
          height: "auto",
          duration: 0.4,
          ease: "power3.out",
        });

        // Animation des liens du menu mobile
        const mobileLinkElements = mobileMenu.querySelectorAll("a[data-mobile-nav-link]");
        gsap.from(mobileLinkElements, {
          opacity: 0,
          x: -20,
          duration: 0.3,
          stagger: 0.05,
          delay: 0.1,
          ease: "power2.out",
        });
      } else {
        // Reset du bouton hamburger
        gsap.to(spans[0], {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(spans[1], {
          opacity: 1,
          duration: 0.2,
        });
        gsap.to(spans[2], {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });

        // Fermeture du menu mobile
        gsap.to(mobileMenu, {
          height: 0,
          duration: 0.4,
          ease: "power3.in",
        });
      }
    });

    // Fermer le menu lors du clic sur un lien
    const mobileLinkElements = mobileMenu.querySelectorAll("a[data-mobile-nav-link]");
    mobileLinkElements.forEach((link) => {
      link.addEventListener("click", () => {
        if (isMenuOpen) {
          mobileMenuButton.click();
        }
      });
    });
  }

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

  // Animation des liens de navigation (desktop uniquement)
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
