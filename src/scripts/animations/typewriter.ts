import { gsap } from "gsap";

export function initTypewriterAnimation(
  element: HTMLElement,
  texts: string[],
  options?: {
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
  }
) {
  const { typeSpeed = 0.08, deleteSpeed = 0.05, pauseDuration = 2 } = options || {};

  let currentIndex = 0;
  let isDeleting = false;

  const typeWriter = () => {
    const currentText = texts[currentIndex];
    const displayedText = element.textContent || "";

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentText.length) {
        element.textContent = currentText.substring(0, displayedText.length + 1);
        gsap.delayedCall(typeSpeed, typeWriter);
      } else {
        // Pause before deleting
        gsap.delayedCall(pauseDuration, () => {
          isDeleting = true;
          typeWriter();
        });
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        element.textContent = currentText.substring(0, displayedText.length - 1);
        gsap.delayedCall(deleteSpeed, typeWriter);
      } else {
        // Move to next text
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        gsap.delayedCall(0.5, typeWriter);
      }
    }
  };

  // Add cursor blink animation
  const cursor = document.createElement("span");
  cursor.className = "typewriter-cursor";
  cursor.textContent = "|";
  element.parentElement?.appendChild(cursor);

  // Cursor blink animation
  gsap.to(cursor, {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  // Start typing
  typeWriter();
}
