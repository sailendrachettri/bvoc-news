let apiKey = "3104946bd90a4c738d1a1e4d7dc35012";
let source = "bbc-news";
// let source = "in";

let newsCards = document.getElementById('newsCards');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);

        let newsHtml = "";

        articles.forEach(function (news) {
            let newsCards = `<div class="col-sm-6 mt-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">${news["title"]}</h5>
                                        <p class="card-text">${news["description"]}</p>
                                        <a href="${news["url"]}" class="btn btn-outline-primary">Readmore</a>
                                    </div>
                                </div>
                            </div>`;

            newsHtml += newsCards;
        });
        newsCards.innerHTML = newsHtml;

    } else {
        console.log("Error occured while fetching news");
    }
}
xhr.send();

