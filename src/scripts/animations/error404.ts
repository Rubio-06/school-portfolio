import { gsap } from "gsap";

export function init404Animations() {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Animation du code d'erreur 404 avec effet de rebond
  tl.from("[data-error-code]", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
  });

  // Animation du titre
  tl.from(
    "[data-error-title]",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.5"
  );

  // Animation de la description
  tl.from(
    "[data-error-description]",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.5"
  );

  // Animation des éléments décoratifs
  tl.from(
    "[data-error-decoration]",
    {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "-=0.5"
  );

  // Animation des boutons CTA
  tl.from(
    "[data-error-cta] > *",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    },
    "-=0.4"
  );

  // Animation flottante continue pour le code 404
  gsap.to("[data-error-code]", {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  // Animation des particules flottantes
  const particles = document.querySelectorAll("[data-particle]");
  particles.forEach((particle, index) => {
    gsap.to(particle, {
      y: gsap.utils.random(-30, 30),
      x: gsap.utils.random(-30, 30),
      duration: gsap.utils.random(2, 4),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.2,
    });

    // Effet de pulsation
    gsap.to(particle, {
      opacity: gsap.utils.random(0.3, 0.8),
      scale: gsap.utils.random(0.8, 1.2),
      duration: gsap.utils.random(1.5, 3),
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: index * 0.3,
    });
  });

  // Animation de rotation pour l'icône
  gsap.to("[data-error-decoration] svg", {
    rotation: 10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Effet de glitch aléatoire sur le titre
  const glitchTitle = () => {
    const title = document.querySelector("[data-error-title] h2");
    if (title) {
      gsap.to(title, {
        x: gsap.utils.random(-2, 2),
        duration: 0.05,
        repeat: 3,
        yoyo: true,
        onComplete: () => {
          gsap.to(title, { x: 0, duration: 0.1 });
          gsap.delayedCall(gsap.utils.random(3, 6), glitchTitle);
        },
      });
    }
  };

  // Démarrer l'effet de glitch après un délai
  gsap.delayedCall(2, glitchTitle);
}
