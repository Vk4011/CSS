let searchInputElement = document.getElementById("searchInput");

const output  = document.getElementById("searchResults") 




searchInputElement.addEventListener("keydown",seg);


function seg(event){
    if(event.key === "Enter"){
        let s = searchInputElement.value;
        console.log(s)

        
        
        let url = "https://apis.ccbp.in/wiki-search?search="+s;

        
        
        let options = {
            method : "GET"      //Request configuration
        }




        fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            console.log(jsonData);


            let {search_results} =jsonData;
            displayResults(search_results);


        });



    }
}

function displayResults(searchResults){
    let result = searchResults[0];
    careateAndAppendsearchresult(result);
}


//creating elements
function careateAndAppendsearchresult(result){

    let {title ,link ,description } = result;


    let resultElement = document.createElement("div");
    resultElement.classList.add("result-item")

    output.appendChild(resultElement);


    let titleEl = document.createElement("a");
    titleEl.classList.add("result-title"); //Styleing css 
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank";


    resultElement.appendChild(titleEl);


    //title break;

    let titleBreak = document.createElement("br");
    resultElement.appendChild(titleBreak);


    let urlElement = document.createElement("a");
    urlElement.classList.add("result-url");
    urlElement.href = link;
    urlElement.target = "_blank";
    urlElement.textContent = link;

    resultElement.appendChild(urlElement);


    let lineBreak = document.createElement("br");
    resultElement.appendChild(lineBreak);


    let descriptionElement = document.createElement("p");
    descriptionElement.classList("link-description");
    descriptionElement.textContent = description;


    resultElement.appendChild(descriptionElement);
    





}