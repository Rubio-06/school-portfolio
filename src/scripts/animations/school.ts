import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initSchoolAnimations(): void {
  const section = document.querySelector(".school-section");
  if (!section) return;

  // Title animation
  gsap.fromTo(
    ".school-section .section-title",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".school-section .section-title",
        start: "top 80%",
        once: true,
      },
    }
  );

  // Subtitle animation
  gsap.fromTo(
    ".school-section .section-subtitle",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".school-section .section-subtitle",
        start: "top 80%",
        once: true,
      },
    }
  );

  // Diploma card animation
  gsap.fromTo(
    ".diploma-card",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".diploma-card",
        start: "top 80%",
        once: true,
      },
    }
  );

  // Option cards animation
  gsap.fromTo(
    ".option-card",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".option-card",
        start: "top 80%",
        once: true,
      },
    }
  );
}
