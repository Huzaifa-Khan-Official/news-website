const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const cards = document.querySelector(".cards");
const errorDiv = document.querySelector(".error");

btn.addEventListener("click", () => {
    cards.innerHTML = "";
    const apiKey = "8c8d1dfc665a40c5affe11ea36632f31";
    const apiUrl = "https://newsapi.org/v2/everything?from=2023-10-10&sortBy=publishedAt&q=";

    fetch(apiUrl + input.value + `&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;

            articles.forEach(curNews => {
                const newsImageUrl = curNews.urlToImage;
                if (newsImageUrl !== null) {
                    const newsTitle = curNews.title;
                    const newsDes = curNews.description;
                    cards.innerHTML += `
                <div class="card">
                <img src="${newsImageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${newsTitle}</h5>
                <p class="card-text">${newsDes}</p>
                </div>
                </div>`;
                    input.value = "";
                } else {
                    return
                }
            });

        })
        .catch(err => {
            errorDiv.style.display = "block";
        });
})