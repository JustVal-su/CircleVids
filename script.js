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

let testId = document.getElementById("url_test").value;

function setTwitterUrl(url) {
    let tweetUrl = encodeURI("Check this vid" + url);
    tweetUrl = "https://x.com/intent/post?url=" + tweetUrl;
    return tweetUrl;
}

let postInfos = {
    postUrl: "url",
    videoSrc: "url",
    title: "title",
    date: "date",
    description: "text",
    account: "account",
    isLiked: "true_or_false",
    isBookmark: "t_f",
    numberOfLikes: "number",
    numberOfViews: "number",
    numberOfRt: "number",
    numberOfDownloads: "number",
    comments: "for_later"
}

// To do : make <a> pfp works

let dummyPost = {
    videoSrc: "Placeholder.mp4",
    pfpSrc: "placeholder_img.png",
    videoTitle: "Hello World"
}

// Add social div

function createPost(object) {
    let feeds = document.getElementById("feeds");
    let main = document.querySelector("main");
    let post = document.createElement("div");
    let posts = document.getElementById("posts");
    let none = document.getElementById("none");
    post.classList.add("post");
    let fullPost = document.createElement("div");
    fullPost.classList.add("fullPost")
    let VideoSrc = object.videoSrc;
    let newVideo = document.createElement("video");
    newVideo.src = VideoSrc;
    newVideo.controls = true;
    post.appendChild(newVideo);
    fullPost.appendChild(post);
    posts.appendChild(fullPost);
    let titleAndPfp = document.createElement("div");
    titleAndPfp.classList.add("title_pfp");
    let pfpLink = document.createElement("a");
    let newImg = document.createElement("img");
    pfpLink.appendChild(newImg);
    newImg.classList.add("pfp");
    newImg.alt = "pfp";
    newImg.src = object.pfpSrc;
    titleAndPfp.appendChild(pfpLink);
    let title = document.createElement("p");
    title.innerHTML = object.videoTitle;
    titleAndPfp.appendChild(title);
    fullPost.appendChild(titleAndPfp);
    let actDiv = document.createElement("div");
    actDiv.classList.add("act_div");
    let buttonOne = document.createElement("button");
    buttonOne.classList.add("like");
    buttonOne.classList.add("act_buttons");
    buttonOne.innerHTML = "🖏";
    actDiv.appendChild(buttonOne);
    let buttonTwo = document.createElement("button");
    buttonTwo.classList.add("act_buttons");
    buttonTwo.innerHTML = "⤓";
    actDiv.appendChild(buttonTwo);
    let buttonThree = document.createElement("button");
    buttonThree.classList.add("act_buttons");
    buttonThree.innerHTML = "⮩";
    buttonThree.onclick = displaySocial;
    actDiv.appendChild(buttonThree);
    let buttonFour = document.createElement("button");
    buttonFour.classList.add("act_buttons");
    buttonFour.innerHTML = "...";
    actDiv.appendChild(buttonFour);
    fullPost.appendChild(actDiv);
    posts.insertBefore(fullPost, none);
}