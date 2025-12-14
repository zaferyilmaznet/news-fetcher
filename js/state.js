// state.js
// Data logic & fetching

let articles = [];
let searchTerm = "";

export async function fetchArticles() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    articles = data.slice(0, 20); // limit to 20 fake articles
    return articles;
  } catch (err) {
    console.error("Fetch error:", err);
    throw err;
  }
}

// Getter for all articles
export function getArticles() {
  return articles;
}

// Search state management
export function setSearchTerm(term) {
  searchTerm = term.trim().toLowerCase();
}

// Filter articles by search term
export function getFilteredArticles() {
  if (!articles.length) return [];
  if (!searchTerm) return articles;

  return articles.filter((a) => {
    const titleMatches = a.title.toLowerCase().includes(searchTerm);

    // Count how many times searchTerm appears in body
    const bodyLower = a.body.toLowerCase();
    const occurrences = bodyLower.split(searchTerm).length - 1;

    const bodyMatches = occurrences >= 2; // only show if 2 or 3+ instances

    return titleMatches || bodyMatches;
  });
}
