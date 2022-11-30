
// ________________________NEWS BOYD STARTED________________________
let apiKey = "3104946bd90a4c738d1a1e4d7dc35012";
let newsCountry = "in";
let newsCategory = "science";

let newsCards = document.getElementById('newsCards');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${newsCountry}&category=${newsCategory}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        let newsHtml = "";

        articles.forEach(function (news) {
            //if description is not present or too short
            if(news["description"] == null || news["description"].length < 10){
                news["description"] = "Description is not avaliable for this news. Go to the main source by clicking below button.";
            }

            // custom date formation
            let date = news["publishedAt"].slice(0, 10).split("-");
            date = date.reverse().join(".");

            // let dateMonths = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
            // if(date.slice(3, 5) === "11")
            //     news["publishedAt"] = dateMonths[10];
            // console.log(date.slice(3, 5));


            let newsCards = `<div class="col-sm-6 mt-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title" id="newsTitle">${news["title"]}</h5>
                                        <p class="card-text" id="newsDescription">${news["description"]}</p>
                                        <div class="d-flex justify-content-between">
                                            <a href="${news["url"]}" target="_blank" class="btn btn-outline-dark" id="newsButton">Readmore</a>
                                            <p id="newsDate">${date}</p>
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
// ________________________NEWS BOYD ENDED________________________
