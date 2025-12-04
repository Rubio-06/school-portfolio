import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initExperienceAnimations() {
  // Animation du header
  gsap.fromTo(
    "[data-experience-header]",
    {
      y: 50,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "[data-experience-header]",
        start: "top 80%",
        once: true,
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  );

  // Animation des items de la timeline
  const items = document.querySelectorAll("[data-experience-item]");

  items.forEach((item, index) => {
    const itemElement = item as HTMLElement;
    const itemIndex = parseInt(itemElement.getAttribute("data-item-index") || "0");
    const isEven = itemIndex % 2 === 0;

    // Animation d'entrée selon la position (gauche ou droite)
    gsap.fromTo(
      itemElement,
      {
        x: isEven ? -50 : 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: itemElement,
          start: "top 80%",
          once: true,
        },
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.1,
      }
    );

    // Animation du dot de la timeline
    const dot = itemElement.querySelector("div.absolute > div");
    if (dot) {
      gsap.fromTo(
        dot,
        {
          scale: 0,
        },
        {
          scrollTrigger: {
            trigger: itemElement,
            start: "top 80%",
            once: true,
          },
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: index * 0.1 + 0.2,
        }
      );
    }

    // Animation hover sur les cartes
    const card = itemElement.querySelector(".rounded-2xl");
    if (card) {
      const cardElement = card as HTMLElement;

      cardElement.addEventListener("mouseenter", () => {
        gsap.to(cardElement, {
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      cardElement.addEventListener("mouseleave", () => {
        gsap.to(cardElement, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  });

  // Animation de la ligne verticale
  const timeline = document.querySelector("[data-experience-section] .absolute.left-8");
  if (timeline) {
    gsap.fromTo(
      timeline,
      {
        scaleY: 0,
        transformOrigin: "top",
      },
      {
        scrollTrigger: {
          trigger: "[data-experience-section]",
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1,
        },
        scaleY: 1,
        ease: "none",
      }
    );
  }
}
