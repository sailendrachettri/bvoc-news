let apiKey = "3104946bd90a4c738d1a1e4d7dc35012";
// let source = "bbc-news";
// let source = "the-times-of-india";
let source = "in";  

let newsCards = document.getElementById('newsCards');

const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);

        let newsHtml = "";

        articles.forEach(function (news) {
            if(news["description"] == null){
                news["description"] = "Description is not avaliable for this news. Go to the main source by clicking below button.";
            }

            let newsCards = `<div class="col-sm-6 mt-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title" id="newsTitle">${news["title"]}</h5>
                                        <p class="card-text" id="newsDescription">${news["description"]}</p>
                                        <!-- <div class="de-flex">
                                        </div> -->
                                        <div class="d-flex justify-content-between">
                                            <a href="${news["url"]}" target="_blank" class="btn btn-outline-primary" id="newsButton">Readmore</a>
                                            <p id="newsDate">${news["publishedAt"].slice(0, 10)}</p>
                                        </div>
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


// console.log("Js is working");