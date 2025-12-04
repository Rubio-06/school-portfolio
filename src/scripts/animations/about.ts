import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAboutAnimations() {
  // Animation du header
  gsap.fromTo(
    "[data-about-header]",
    {
      y: 50,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "[data-about-header]",
        start: "top 80%",
        once: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  );

  // Animation de la colonne de gauche (profil)
  gsap.fromTo(
    "[data-about-profile]",
    {
      x: -50,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "[data-about-profile]",
        start: "top 75%",
        once: true,
      },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  );

  // Animation de la section CV
  gsap.fromTo(
    "[data-about-cv]",
    {
      scale: 0.9,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "[data-about-cv]",
        start: "top 80%",
        once: true,
      },
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.2)",
      delay: 0.2,
    }
  );

  // Animation des paragraphes de description
  const paragraphs = document.querySelectorAll("[data-about-paragraph]");
  gsap.fromTo(
    paragraphs,
    {
      x: 50,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "[data-about-description]",
        start: "top 75%",
        once: true,
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    }
  );

  // Animation de la section contact
  gsap.fromTo(
    "[data-about-contact]",
    {
      y: 30,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "[data-about-contact]",
        start: "top 80%",
        once: true,
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4,
    }
  );

  // Animation hover subtile sur les cartes highlights
  const highlights = document.querySelectorAll("[data-about-profile] .grid > div");
  highlights.forEach((card) => {
    const cardElement = card as HTMLElement;

    cardElement.addEventListener("mouseenter", () => {
      gsap.to(cardElement, {
        y: -5,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    cardElement.addEventListener("mouseleave", () => {
      gsap.to(cardElement, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}
