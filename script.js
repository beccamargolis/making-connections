console.log("page loaded...");

var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");

var accept1 = document.querySelector(".card-list-item1")
function acceptRequest1() {
    accept1.remove()
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

var close1 = document.querySelector(".card-list-item1")
function closeRequest1() {
    close1.remove()
    requestSpan.innerText--;
}

var accept2 = document.querySelector(".card-list-item2")
function acceptRequest2() {
    accept2.remove()
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

var close2 = document.querySelector(".card-list-item2")
function closeRequest2() {
    close2.remove()
    requestSpan.innerText--;
}

var changeUsername = document.querySelector("#user-title")
function editProfile() {
    changeUsername.innerText = "Rebecca Margolis"
}