let popup = document.getElementById("popup");
let social = document.getElementById("social");
let likeButton = document.getElementById("like");

function newFeed() {
    if (popup.style.display === "none") {
        document.getElementById("overlay").style.display = "block";
        popup.style.display = "flex";
    } else {
        document.getElementById("overlay").style.display = "none";
        popup.style.display = "none";
    }
}

/*let fermer = document.querySelector(".fermer");

fermer.onclick = function() {
    popup.style.display = "none";
}*/

function closePopup() {
    popup.style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("overlay").addEventListener("click", function() {
    closePopup();
});

function displaySocial() {
    if (social.style.display === "none") {
        document.getElementById("overlay").style.display = "block";
        social.style.display = "flex";
    } else {
        document.getElementById("overlay").style.display = "none";
        social.style.display = "none";
    }
}