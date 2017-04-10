/** class to make page handling easier */
const pgHandler = new pageHandler();

function pageHandler() {

    this.gallery = [];
    this.possibilities = {};
    this.init = function () {
        let buttons = document.getElementsByClassName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function (e) {
                setPage(pgHandler.possibilities[e.target.target](), e.target.target); //set the divider by id tag "main" to a set html code defined in possibilities
            }
        }
        if (window.location.hash != "") setPage(this.possibilities[window.location.hash.split("#")[1]](), window.location.hash.split("#")[1]);
    }
}
//global functions
function setPage(location, id) {
    if (document.getElementById("main").innerHTML === `${location} ${pgHandler.possibilities.before}`) return;

    document.getElementById("main").innerHTML = `${location} ${pgHandler.possibilities.before}`;
    window.location.hash = id;
}

function setGallery(e) {
    pgHandler.gallery = e;
}

function setPossibilities(e) {
    pgHandler.possibilities = e;
}
