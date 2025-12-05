export function initBlogFilters() {
  // Filtrage par catégorie
  const categoryButtons = document.querySelectorAll(".category-filter");
  const articles = document.querySelectorAll(".blog-article");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Mettre à jour l'état actif
      categoryButtons.forEach((btn) => btn.classList.remove("active", "bg-white/10", "text-white"));
      button.classList.add("active", "bg-white/10", "text-white");

      // Filtrer les articles
      articles.forEach((article) => {
        const articleCategory = article.getAttribute("data-category");
        if (category === "all" || articleCategory === category) {
          article.classList.remove("hidden");
        } else {
          article.classList.add("hidden");
        }
      });
    });
  });

  // Filtrage par tag
  const tagButtons = document.querySelectorAll(".tag-filter");

  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-tag");

      // Toggle état actif du tag
      button.classList.toggle("bg-blue-500/20");
      button.classList.toggle("text-blue-400");

      // Récupérer tous les tags actifs
      const activeTags = Array.from(document.querySelectorAll(".tag-filter.bg-blue-500\\/20")).map(
        (btn) => btn.getAttribute("data-tag")
      );

      // Filtrer les articles
      articles.forEach((article) => {
        const articleTags = article.getAttribute("data-tags")?.split(",") || [];

        if (activeTags.length === 0 || activeTags.some((t) => t && articleTags.includes(t))) {
          article.classList.remove("hidden");
        } else {
          article.classList.add("hidden");
        }
      });
    });
  });
}
