import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export interface TypewriterProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({
  texts,
  typeSpeed = 0.08,
  deleteSpeed = 0.05,
  pauseDuration = 2,
  className = "",
  cursorClassName = "",
}: TypewriterProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current || !cursorRef.current) return;

    let currentIndex = 0;
    let isDeleting = false;

    // Cursor blink animation
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    const typeWriter = () => {
      if (!textRef.current) return;

      const currentText = texts[currentIndex];
      const displayedText = textRef.current.textContent || "";

      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentText.length) {
          textRef.current.textContent = currentText.substring(0, displayedText.length + 1);
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
          textRef.current.textContent = currentText.substring(0, displayedText.length - 1);
          gsap.delayedCall(deleteSpeed, typeWriter);
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
  }, [texts, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <div className="relative inline-block">
      <span ref={textRef} className={className}></span>
      <span ref={cursorRef} className={`ml-0.5 font-bold text-blue-400 ${cursorClassName}`}>
        |
      </span>
    </div>
  );
}
