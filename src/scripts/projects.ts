import { gsap } from "gsap";

/**
 * Initialise les filtres de projets avec animations GSAP
 */
export const initProjectFilters = () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const categorySections = document.querySelectorAll(".category-section");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Mettre à jour les boutons actifs
      filterButtons.forEach((btn) => {
        btn.classList.remove(
          "active",
          "bg-gradient-to-r",
          "from-blue-500",
          "to-purple-500",
          "shadow-lg",
          "shadow-blue-500/30"
        );
        btn.classList.add("border-2", "border-white/20", "bg-white/5");
      });
      button.classList.add(
        "active",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-500",
        "shadow-lg",
        "shadow-blue-500/30"
      );
      button.classList.remove("border-2", "border-white/20", "bg-white/5");

      // Filtrer les sections avec animation
      categorySections.forEach((section) => {
        const category = section.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            display: "block",
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(section, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              (section as HTMLElement).style.display = "none";
            },
          });
        }
      });
    });
  });
};
