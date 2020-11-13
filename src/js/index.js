import "../scss/main.scss";

console.log("HELLO 🚀");

const media = window.matchMedia("(min-width: 768px)");

if (media.matches) {
  const mq = document.querySelector(".contact__mail");
  mq.innerHTML = `bartoszmalecki90@gmail.com`;
} 

const repositoryList = document.querySelector(".projects-grid");

fetch("https://api.github.com/users/bartosz-malecki/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, description, homepage, html_url } = repo;
      const myTemplate = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img
            class="project__ghLogo"
            src="img/ghContent.svg"
            alt=""
          />
          <h3 class="project__title project__grid">
            <span class="project__label">project:</span>
            <span>${name}</span>
          </h3>
          <p class="project__grid">
            <span class="project__label">description:</span
            ><span class="project__description">${description}</span>
          </p>
          <p class="project__grid">
            <span class="project__label">demo:</span
            ><span
              >&lt;<a href="${homepage}" title="${name}" class="project__link" target="_blank"
                >see here</a
              >&gt;</span
            >
          </p>
          <p class="project__grid">
            <span class="project__label">github:</span
            ><span
              >&lt;<a href="${html_url}" title="${name}" class="project__link" target="_blank"
                >source code</a
              >&gt;</span
            >
          </p>
        </div>
      </article>`;
      repositoryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("Nie udało się pobrać");
  });
