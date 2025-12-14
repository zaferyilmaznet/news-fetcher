// main.js
// Controller & initialization
import { fetchArticles, setSearchTerm } from "./state.js";
import { renderArticles, showLoading, showError } from "./ui.js";

const searchInput = document.querySelector("#searchInput");

async function init() {
  showLoading();

  try {
    await fetchArticles();
    renderArticles();
  } catch {
    showError();
  }
}

// Live search (no need to press Enter)
searchInput.addEventListener("input", (e) => {
  const term = e.target.value;
  setSearchTerm(term);
  renderArticles();
});

init();
