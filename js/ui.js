// ui.js
// Rendering & UI feedback
import { getFilteredArticles } from "./state.js";

const newsContainer = document.querySelector("#newsContainer");

export function renderArticles() {
  const articles = getFilteredArticles();
  newsContainer.innerHTML = "";

  if (!articles.length) {
    newsContainer.innerHTML = `<p>No articles found.</p>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "news-list";

  const term = document.querySelector("#searchInput").value.trim();

  articles.forEach((article) => {
    const card = document.createElement("article");
    card.className = "news-card";

    const safeTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // escape regex special chars
    const regex = new RegExp(safeTerm, "gi");

    const highlightedTitle = term
      ? article.title.replace(regex, (match) => `<mark>${match}</mark>`)
      : article.title;

    const highlightedBody = term
      ? article.body.replace(regex, (match) => `<mark>${match}</mark>`)
      : article.body;

    card.innerHTML = `
    <h2>${highlightedTitle}</h2>
    <p>${highlightedBody}</p>
    `;

    list.appendChild(card);
  });

  newsContainer.appendChild(list);
}

export function showLoading() {
  newsContainer.innerHTML = `<p class="loading">Loading articles...</p>`;
}

export function showError() {
  newsContainer.innerHTML = `<p class="error">Failed to load articles 😢</p>`;
}
