/** class to make page handling easier */
function pageHandler() {

    this.pages = [];
    this.possibilities = {};
    this.init = function () {
        let buttons = document.getElementsByClassName("button");
        /* Create an "INIT" subroutine to aid in later development and debugging */
        for (var i = 0; i < buttons.length; i++) {

            console.log(this.possibilities.about);
            buttons[i].onclick = function (e) {
                pgHandle.setPage(pgHandle.possibilities[e.target.target](), e.target.target); //set the divider by id tag "main" to a set html code defined in possibilities
            }
        }
        if(window.location.hash != "") this.setPage(this.possibilities[window.location.hash.split("#")[1]](), window.location.hash.split("#")[1]);
    }
    this.setPage = function (location, id) {
        document.getElementById("main").innerHTML = `${location} ${this.possibilities.before}`;
        window.location.hash = id;
    }
}
