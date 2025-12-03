import { gsap } from "gsap";

export function initHeroAnimations() {
  // Animation d'entrée du hero
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Greeting animation
  tl.from("[data-hero-greeting]", {
    y: 50,
    opacity: 0,
    duration: 0.8,
  });

  // Name animation with split effect
  tl.from(
    "[data-hero-name]",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      scale: 0.9,
    },
    "-=0.4"
  );

  // Tagline animation
  tl.from(
    "[data-hero-tagline]",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.5"
  );

  // Animated text container
  tl.from(
    "[data-hero-animated]",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.5"
  );

  // CTA buttons animation
  tl.from(
    "[data-hero-cta] > *",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    },
    "-=0.4"
  );

  // Decorative elements animation
  tl.from(
    "[data-hero-decoration]",
    {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    },
    "-=1"
  );
}
