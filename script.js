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
    closeSecondDiv();
});

function closeButton() {
    closePopup();
}

function displaySocial() {
    if (social.style.display === "none") {
        document.getElementById("overlay").style.display = "block";
        social.style.display = "flex";
    } else {
        document.getElementById("overlay").style.display = "none";
        social.style.display = "none";
    }
}

let copyLink = document.getElementById("copy_link");
let copyButton = document.getElementById("copy_button");

function copy() {
    copyLink.select();
    document.execCommand('copy');
    copyButton.innerText = 'Copied !';
}

function closeSecondDiv() {
    social.style.display = "none";
}

function like() {
    like.addEventListener("mouseenter", function() {
        like.classList.add("animate");
    });
    console.log("To make");
}