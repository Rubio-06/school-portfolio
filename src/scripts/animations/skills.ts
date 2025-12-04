import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSkillsAnimations() {
  // Animation du header
  gsap.fromTo(
    "[data-skills-header]",
    {
      y: 50,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "[data-skills-header]",
        start: "top 80%",
        once: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  );

  // Animation pour chaque catégorie
  const categories = document.querySelectorAll("[data-skills-category]");

  categories.forEach((category) => {
    const cards = category.querySelectorAll("[data-skill-card]");
    const categoryHeader = category.querySelector("div.mb-8");

    // Animation du titre de catégorie
    gsap.fromTo(
      categoryHeader,
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: category,
          start: "top 75%",
          once: true,
        },
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Animation des cartes avec stagger
    gsap.fromTo(
      cards,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: category,
          start: "top 70%",
          once: true,
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: "start",
          ease: "power2.out",
        },
        ease: "power3.out",
      }
    );

    // Animation des barres de niveau
    cards.forEach((card) => {
      const levelBar = card.querySelector("[data-skill-level]");
      if (levelBar) {
        const targetWidth = levelBar.getAttribute("data-target-width");

        gsap.to(levelBar, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
          width: targetWidth || "0%",
          duration: 0.8,
          ease: "power2.out",
        });
      }
    });

    // Animation de hover pour les cartes
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;

      cardElement.addEventListener("mouseenter", () => {
        gsap.to(cardElement, {
          y: -8,
          scale: 1.02,
          duration: 0.05,
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
  });
}
