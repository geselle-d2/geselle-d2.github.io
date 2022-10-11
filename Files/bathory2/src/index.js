import {albums} from "./components/albums.js"

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
function darkMode(x) {
    if (x.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', darkMode, false);


let albumsList = []

for (let i = 0; i <= 3; i++ ){
   var albumDiv = document.getElementById("album-gallery");
   var albumCard = document.createElement("div");
   albumCard.setAttribute("class", "album-body");
   albumCard.innerHTML = `<img class="album-covers" src="${albums[i].cover}" alt="bathory" />
   <p class="album-comment">${albums[i].firstParagraph}</p><p class="album-comment">${albums[i].secondParagraph}</p>`  
   albumDiv.appendChild(albumCard)

}
var addAlbumButton = document.createElement("button")
addAlbumButton.setAttribute("id", "add-album-button")
var buttonText = document.createTextNode("Press me. if you want to know about more albums")
buttonText.onclick
addAlbumButton.appendChild(buttonText)
var addAlbumButtonAnchor = document.getElementById("legacy")
addAlbumButtonAnchor.appendChild(addAlbumButton)


let j = 4
function addAlbum(){
   var albumDiv = document.getElementById("album-gallery");
   var albumCard = document.createElement("div");
   albumCard.setAttribute("class", "album-body");
   albumCard.innerHTML = `<img class="album-covers" src="${albums[j].cover}" alt="bathory" />
   <p class="album-comment">${albums[j].firstParagraph}</p><p class="album-comment">${albums[j].secondParagraph}</p>`  
   albumDiv.appendChild(albumCard)
   j++
   if (j == albums.length){
    document.getElementById("add-album-button").remove() 
   }
}

addAlbumButton.addEventListener("click", addAlbum);
