
const titles = [
  ["Attack on Titan","Экшен","2013",9.1],
  ["Death Note","Триллер","2006",8.9],
  ["Fullmetal Alchemist: Brotherhood","Фэнтези","2009",9.1],
  ["One Punch Man","Экшен","2015",8.5],
  ["Demon Slayer","Экшен","2019",8.7],
  ["My Hero Academia","Экшен","2016",8.2],
  ["Sword Art Online","Фантастика","2012",7.6],
  ["Hunter x Hunter","Приключения","2011",9.0],
  ["Naruto","Экшен","2002",8.4],
  ["Jujutsu Kaisen","Экшен","2020",8.7],
  ["Tokyo Ghoul","Триллер","2014",7.8],
  ["Your Name","Романтика","2016",8.9],
  ["Steins;Gate","Фантастика","2011",9.1],
  ["Naruto: Shippuden","Экшен","2007",8.7],
  ["One Piece","Приключения","1999",9.0],
  ["A Silent Voice","Драма","2016",8.9],
  ["Code Geass","Фантастика","2006",8.7],
  ["Re:Zero","Фэнтези","2016",8.3],
  ["Your Lie in April","Романтика","2014",8.6],
  ["Toradora!","Романтика","2008",8.0],
  ["Mob Psycho 100","Экшен","2016",8.6],
  ["Noragami","Фэнтези","2014",8.2],
  ["Erased","Триллер","2016",8.5],
  ["Akame ga Kill!","Экшен","2014",7.8],
  ["Angel Beats!","Драма","2010",8.1],
  ["The Seven Deadly Sins","Фэнтези","2014",7.7],
  ["Assassination Classroom","Комедия","2015",8.4],
  ["Bleach","Экшен","2004",8.2],
  ["The Future Diary","Триллер","2011",7.4],
  ["Haikyuu!!","Спорт","2014",8.7],
  ["KonoSuba","Комедия","2016",8.1],
  ["The Promised Neverland","Триллер","2019",8.3],
  ["Blue Exorcist","Фэнтези","2011",7.5],
  ["Cowboy Bebop","Фантастика","1998",8.8],
  ["Parasyte: The Maxim","Триллер","2014",8.3],
  ["Spirited Away","Приключения","2001",8.6],
  ["Neon Genesis Evangelion","Фантастика","1995",8.5],
  ["Violet Evergarden","Драма","2018",8.7],
  ["Death Parade","Триллер","2015",8.1],
  ["Dr. Stone","Фантастика","2019",8.2],
  ["Rascal Does Not Dream of Bunny Girl Senpai","Романтика","2018",8.2],
  ["Kaguya-sama: Love Is War","Романтика","2019",8.6],
  ["Fairy Tail","Фэнтези","2009",7.9],
  ["Kill la Kill","Экшен","2013",7.9],
  ["Black Clover","Фэнтези","2017",8.2],
  ["JoJo's Bizarre Adventure","Экшен","2012",8.5],
  ["Darling in the FranXX","Фантастика","2018",7.4],
  ["Another","Триллер","2012",7.5],
  ["Spy x Family","Комедия","2022",8.3],
  ["Frieren: Beyond Journey's End","Фэнтези","2023",9.3],
  ["Chainsaw Man","Экшен","2022",8.5],
  ["Blue Lock","Спорт","2022",8.1],
  ["Bocchi the Rock!","Комедия","2022",8.4],
  ["Horimiya","Романтика","2021",8.2],
  ["Fruits Basket","Романтика","2019",8.6],
  ["Clannad","Драма","2007",8.0],
  ["Ouran High School Host Club","Комедия","2006",8.2],
  ["K-On!","Комедия","2009",7.9],
  ["The Disastrous Life of Saiki K.","Комедия","2016",8.4],
  ["Gintama","Комедия","2006",8.9],
  ["Grand Blue","Комедия","2018",8.4],
  ["Nichijou","Комедия","2011",8.5],
  ["Barakamon","Комедия","2014",8.4],
  ["Monthly Girls' Nozaki-kun","Романтика","2014",7.9],
  ["Wotakoi: Love Is Hard for Otaku","Романтика","2018",7.9],
  ["Lovely Complex","Романтика","2007",8.0],
  ["My Love Story!!","Романтика","2015",7.9],
  ["Kamisama Kiss","Романтика","2012",8.1],
  ["Snow White with the Red Hair","Романтика","2015",7.7],
  ["The Angel Next Door Spoils Me Rotten","Романтика","2023",7.8],
  ["Insomniacs After School","Романтика","2023",8.0],
  ["Skip and Loafer","Драма","2023",8.1],
  ["A Sign of Affection","Романтика","2024",8.1],
  ["Sailor Moon","Фэнтези","1992",7.8],
  ["Cardcaptor Sakura","Фэнтези","1998",8.1],
  ["Puella Magi Madoka Magica","Фэнтези","2011",8.4],
  ["Inuyasha","Приключения","2000",7.9],
  ["Rurouni Kenshin","Экшен","1996",8.3],
  ["Samurai Champloo","Приключения","2004",8.5],
  ["Trigun","Фантастика","1998",8.2],
  ["Psycho-Pass","Триллер","2012",8.3],
  ["Monster","Триллер","2004",8.9],
  ["Paranoia Agent","Триллер","2004",7.7],
  ["Odd Taxi","Триллер","2021",8.6],
  ["The Apothecary Diaries","Драма","2023",8.8],
  ["Mushishi","Фэнтези","2005",8.6],
  ["Land of the Lustrous","Фэнтези","2017",8.4],
  ["Made in Abyss","Приключения","2017",8.3],
  ["To Your Eternity","Драма","2021",8.3],
  ["Ranking of Kings","Приключения","2021",8.5],
  ["The Ancient Magus' Bride","Фэнтези","2017",7.7],
  ["That Time I Got Reincarnated as a Slime","Фэнтези","2018",8.1],
  ["Overlord","Фэнтези","2015",7.9],
  ["No Game No Life","Фэнтези","2014",8.0],
  ["Log Horizon","Фантастика","2013",7.9],
  ["The Rising of the Shield Hero","Фэнтези","2019",7.8],
  ["Mushoku Tensei","Приключения","2021",8.3],
  ["Vinland Saga","Приключения","2019",8.8],
  ["Hajime no Ippo","Спорт","2000",8.8],
  ["Slam Dunk","Спорт","1993",8.6],
  ["Kuroko's Basketball","Спорт","2012",8.2],
  ["Yuri on Ice","Спорт","2016",7.9]
];

const grid = document.getElementById("animeGrid");
const favoriteGrid = document.getElementById("favoriteGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const currentCategory = document.getElementById("currentCategory");
const loadMore = document.getElementById("loadMore");

let activeGenre = "Все";
let visibleCount = 20;
let authMode = "login";
let selectedAnime = null;
let currentUser = localStorage.getItem("starAnimeCurrentUser") || "";

const posterCache = new Map();

function getPosterUrl(title) {
  // Официальные постеры загружаются из TMDB после поиска.
  // Ключ API не требуется для демонстрационных карточек:
  // используем сервис изображений по названию как резервный вариант.
  return "https://image.tmdb.org/t/p/w342/";
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[char]);
}

function getAnimeId(anime) {
  return anime[0];
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("starAnimeFavorites") || "[]");
  } catch {
    return [];
  }
}

function setFavorites(favorites) {
  localStorage.setItem("starAnimeFavorites", JSON.stringify(favorites));
}

function toggleFavorite(title) {
  if (!currentUser) {
    openAuth();
    return;
  }

  const favorites = getFavorites();
  const updated = favorites.includes(title)
    ? favorites.filter(item => item !== title)
    : [...favorites, title];

  setFavorites(updated);
  renderAnime();
  renderFavorites();
}

function cardHTML(anime) {
  const [title, genre, year, rating] = anime;
  const saved = getFavorites().includes(title);
  const poster = posterCache.get(title);

  return `
    <article class="anime-card">
      <div class="poster-wrap">
        ${poster
          ? `<img class="poster" loading="lazy" src="${escapeHTML(poster)}"
               alt="Постер ${escapeHTML(title)}">`
          : `<div class="poster-placeholder">✦</div>`}
        <span class="card-badge">${escapeHTML(year)}</span>
        <button class="heart-btn ${saved ? "saved" : ""}"
          data-fav="${escapeHTML(title)}"
          aria-label="Добавить в избранное">${saved ? "♥" : "♡"}</button>
      </div>
      <div class="card-content">
        <h3>${escapeHTML(title)}</h3>
        <div class="card-meta">
          <span>${escapeHTML(year)}</span>
          <span class="rating">★ ${rating.toFixed(1)}</span>
        </div>
        <p class="card-genre">${escapeHTML(genre)}</p>
        <button class="card-open" data-open="${escapeHTML(title)}">
          Подробнее ↗
        </button>
      </div>
    </article>`;
}

function getFilteredAnime() {
  const query = searchInput.value.trim().toLowerCase();

  return titles.filter(anime => {
    const matchesName = anime[0].toLowerCase().includes(query);
    const matchesGenre = activeGenre === "Все" || anime[1] === activeGenre;
    return matchesName && matchesGenre;
  });
}

function renderAnime() {
  const filtered = getFilteredAnime();
  const shown = filtered.slice(0, visibleCount);

  grid.innerHTML = shown.length
    ? shown.map(cardHTML).join("")
    : `<p class="empty-note">☆ Ничего не найдено. Попробуй другое название.</p>`;

  resultCount.textContent = `${filtered.length} аниме`;
  currentCategory.textContent = activeGenre === "Все"
    ? "Все аниме"
    : `Жанр: ${activeGenre}`;

  loadMore.style.display = filtered.length > visibleCount ? "flex" : "none";
  loadMore.textContent = "Показать ещё ↓";

  loadPosters(shown);
}

function renderFavorites() {
  const favorites = getFavorites();
  const saved = titles.filter(anime => favorites.includes(anime[0]));

  favoriteGrid.innerHTML = saved.map(cardHTML).join("");
  document.getElementById("emptyFavorites").style.display =
    saved.length ? "none" : "block";

  loadPosters(saved);
}

async function loadPosters(animeList) {
  // Демонстрационные постеры не заменяют легальный источник видео.
  // Для настоящих постеров подключи API TMDB и выполни поиск по названию.
  const key = "starAnimePosterNotice";
  if (!sessionStorage.getItem(key)) {
    sessionStorage.setItem(key, "shown");
  }
}

function showDetails(title) {
  const anime = titles.find(item => item[0] === title);
  if (!anime) return;

  selectedAnime = anime;
  const [name, genre, year, rating] = anime;

  document.getElementById("detailTitle").textContent = name;
  document.getElementById("detailGenre").textContent = `${genre} · ${year}`;
  document.getElementById("detailDescription").textContent =
    `Открой для себя ${name} — популярное аниме жанра «${genre}». ` +
    `Добавь его в избранное и найди официальный источник для просмотра.`;
  document.getElementById("detailRating").textContent = `★ ${rating.toFixed(1)}`;

  const image = document.getElementById("detailImage");
  image.src = posterCache.get(name) || "";
  image.alt = `Постер ${name}`;
  image.style.display = image.src ? "block" : "none";

  const favButton = document.getElementById("detailFavorite");
  favButton.textContent = getFavorites().includes(name)
    ? "♥ В избранном"
    : "♡ В избранное";

  document.getElementById("officialLink").href =
    "https://www.justwatch.com/us/search?q=" + encodeURIComponent(name);

  document.getElementById("detailModal").classList.remove("hidden");
}

function openAuth(mode = "login") {
  setAuthMode(mode);
  document.getElementById("authModal").classList.remove("hidden");
}

function closeAuth() {
  document.getElementById("authModal").classList.add("hidden");
}

function setAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll(".auth-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.mode === mode);
  });

  document.getElementById("authTitle").textContent =
    mode === "login" ? "Добро пожаловать!" : "Создай аккаунт";
  document.getElementById("authDescription").textContent =
    mode === "login" ? "Войди в свою аниме-вселенную" :
    "Начни собирать свою коллекцию";
  document.getElementById("authSubmit").textContent =
    mode === "login" ? "Войти в аккаунт" : "Зарегистрироваться";
  document.getElementById("password").autocomplete =
    mode === "login" ? "current-password" : "new-password";

  document.getElementById("authMessage").textContent = "";
  document.getElementById("authMessage").className = "";
}

function updateLoginButton() {
  const button = document.getElementById("openAuth");
  button.textContent = currentUser ? `☻ ${currentUser} · Выйти` : "Войти";
}

function getAccounts() {
  try {
    return JSON.parse(localStorage.getItem("starAnimeAccounts") || "{}");
  } catch {
    return {};
  }
}

document.getElementById("authForm").addEventListener("submit", event => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("authMessage");
  const accounts = getAccounts();

  if (username.length < 3 || password.length < 6) {
    message.textContent = "Имя: минимум 3 символа, пароль: минимум 6.";
    message.className = "error";
    return;
  }

  if (authMode === "register") {
    if (accounts[username]) {
      message.textContent = "Это имя уже занято. Попробуй другое.";
      message.className = "error";
      return;
    }

    // Только учебный пример. Не храните реальные пароли так.
    accounts[username] = password;
    localStorage.setItem("starAnimeAccounts", JSON.stringify(accounts));
  } else {
    if (!accounts[username] || accounts[username] !== password) {
      message.textContent = "Неверное имя или пароль. Проверь ещё раз.";
      message.className = "error";
      return;
    }
  }

  currentUser = username;
  localStorage.setItem("starAnimeCurrentUser", username);
  message.textContent = "Успешно! Добро пожаловать во вселенную STAR ANIME.";
  message.className = "success";

  updateLoginButton();
  renderAnime();
  renderFavorites();

  setTimeout(closeAuth, 700);
});

document.getElementById("openAuth").addEventListener("click", () => {
  if (currentUser) {
    currentUser = "";
    localStorage.removeItem("starAnimeCurrentUser");
    updateLoginButton();
    renderAnime();
    renderFavorites();
  } else {
    openAuth();
  }
});

document.getElementById("closeAuth").addEventListener("click", closeAuth);

document.getElementById("authModal").addEventListener("click", event => {
  if (event.target.id === "authModal") closeAuth();
});

document.querySelectorAll(".auth-tab").forEach(tab => {
  tab.addEventListener("click", () => setAuthMode(tab.dataset.mode));
});

searchInput.addEventListener("input", () => {
  visibleCount = 20;
  renderAnime();
});

document.getElementById("clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  visibleCount = 20;
  renderAnime();
  searchInput.focus();
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeGenre = button.dataset.genre;
    visibleCount = 20;

    document.querySelectorAll(".filter").forEach(filter => {
      filter.classList.toggle("active", filter === button);
    });

    renderAnime();
  });
});

loadMore.addEventListener("click", () => {
  visibleCount += 20;
  renderAnime();
});

document.addEventListener("click", event => {
  const favButton = event.target.closest("[data-fav]");
  if (favButton) {
    toggleFavorite(favButton.dataset.fav);
    return;
  }

  const openButton = event.target.closest("[data-open]");
  if (openButton) showDetails(openButton.dataset.open);
});

document.getElementById("closeDetail").addEventListener("click", () => {
  document.getElementById("detailModal").classList.add("hidden");
});

document.getElementById("detailModal").addEventListener("click", event => {
  if (event.target.id === "detailModal") {
    event.currentTarget.classList.add("hidden");
  }
});

document.getElementById("detailFavorite").addEventListener("click", () => {
  if (selectedAnime) {
    toggleFavorite(selectedAnime[0]);
    showDetails(selectedAnime[0]);
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeAuth();
    document.getElementById("detailModal").classList.add("hidden");
  }
});

updateLoginButton();
renderAnime();
renderFavorites();
