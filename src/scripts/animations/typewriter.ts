import { gsap } from "gsap";

export function initTypewriterAnimation() {
  const textElement = document.querySelector("[data-typewriter-text]");
  const cursorElement = document.querySelector("[data-typewriter-cursor]");

  if (!textElement || !cursorElement) return;

  const textsAttr = textElement.getAttribute("data-texts");
  const texts = textsAttr ? JSON.parse(textsAttr) : [];

  if (texts.length === 0) return;

  let currentIndex = 0;
  let isDeleting = false;

  // Cursor blink animation
  gsap.to(cursorElement, {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  const typeWriter = () => {
    const currentText = texts[currentIndex];
    const displayedText = textElement.textContent || "";

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentText.length) {
        textElement.textContent = currentText.substring(0, displayedText.length + 1);
        gsap.delayedCall(0.08, typeWriter);
      } else {
        // Pause before deleting
        gsap.delayedCall(2, () => {
          isDeleting = true;
          typeWriter();
        });
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        textElement.textContent = currentText.substring(0, displayedText.length - 1);
        gsap.delayedCall(0.05, typeWriter);
      } else {
        // Move to next text
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        gsap.delayedCall(0.5, typeWriter);
      }
    }
  };

  // Start typing
  typeWriter();
}
