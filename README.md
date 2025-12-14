# 📰 News Fetcher (Vanilla JS)

A small learning project to practice **modular JavaScript**, **state management**, and **DOM rendering** — without any frameworks.  
It fetches fake news articles from a public API and allows **live searching** with relevance-based filtering and keyword highlighting.

---

## 🚀 Features

- 🔄 Fetches 20 mock articles from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- 🧠 Modular structure (`state.js`, `ui.js`, `main.js`)
- 🔍 Live, case-insensitive search
- ✨ Highlights search terms in results
- 🧩 Smart filtering logic
  - Title match → show immediately
  - Body match → show only if term appears 2+ times
- 🪶 Lightweight — no libraries or frameworks
- 💻 Simple, beginner-friendly code organization

---

## 📂 Project Structure

news-fetcher/
│
├── index.html # Entry point
├── styles.css # Basic layout and highlight style
└── js/
├── state.js # Handles data and logic (fetching, filtering)
├── ui.js # Handles DOM rendering
└── main.js # Glue layer – connects state and UI

---

## 🧠 How It Works

1. `state.js` fetches and stores the articles.
2. `ui.js` renders the filtered articles into the DOM.
3. `main.js` listens to input events and re-renders when the user types.
4. The app doesn’t use any storage — all happens in memory.

---

## ⚙️ Setup & Usage

1. **Clone or download** this repository.
2. Open the project folder in VS Code (or your editor).
3. Start a simple local server.
4. Open the browser at the shown local URL (often http://localhost:3000 or http://127.0.0.1:8000).
5. Start typing in the search box to see instant filtering and highlighting.

---

## 💡 What I Learned

- How to organize vanilla JS projects with clear separation of logic and UI
- Managing application state without frameworks
- DOM manipulation and rendering functions
- Basic algorithm for search relevance
- Writing reusable modules and using type="module"

---

## 🌟 Next Steps (Ideas)

- Add loading spinner animation
- Add “dark/light” theme toggle
- Add result count (“X articles found”)
- Implement pagination or infinite scroll

---

## 🧑‍💻 Author

Created by Zafer Yilmaz — for JavaScript practice and learning purposes.
Feel free to fork, modify, or improve!

---

## 🪶 License

This project is released under the MIT License.

---
