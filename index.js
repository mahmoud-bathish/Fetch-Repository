//Main variable 
let theInput = document.querySelector(".get-repo input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
    getRepos();
}

//Get Repos Function 
function getRepos() {
    if (theInput.value == "") {
        reposData.innerHTML = "<span>Please Write Github Username.</span>"
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            reposData.innerHTML = '';
            data.forEach(element => {
                let mainDiv = document.createElement("div");
                let firstDiv = document.createElement("div");
                let text = document.createTextNode(element.name);
                firstDiv.appendChild(text);
                // mainDiv.appendChild(text);
                let theUrl = document.createElement("a");
                let theUrlText = document.createTextNode("Visit");
                theUrl.appendChild(theUrlText);
                theUrl.href = `https://github.com/${theInput.value}/${element.name}`;
                theUrl.setAttribute("target","_blank");
                // mainDiv.appendChild(theUrl);
                let starsSpan = document.createElement("span");
                let starsText = document.createTextNode(`Stars ${element.stargazers_count}`);
                starsSpan.appendChild(starsText);
                let secondDiv = document.createElement("div");
                secondDiv.appendChild(starsSpan);
                secondDiv.appendChild(theUrl);
                secondDiv.className = 'the-second';
                mainDiv.appendChild(firstDiv);
                mainDiv.appendChild(secondDiv);
                mainDiv.className = "repo-box";
                reposData.appendChild(mainDiv);
            });
        })
        
    }
}

