/* Now its time for the "fun" part
 * In the following code we will make a system that simplifies debugging and
 * adding features later on.
 */
const possibilities = {
    before: `<style>
#main *{
   animation: fadein 2s; /* Why not add some effects? */
   opacity: 1;
}
</style>`,
    about: function () {
        return document.getElementById("about-template").innerHTML;
    },
    gallery: function () {
        return  "<h1>My projects</h1>"+ loadGallery();
    }
}
const images = [{
    name: "viktorkorolyuk.github.io",
    desc: "My main webpage",
    url: "https://viktorkorolyuk.github.io",
    img: "viktorkorolyuk.github.io.png" //<-- define this
}, {
    name: "viktorkorolyuk.cu.cc",
    desc: "A webpage made in 2015 as a porfolio",
    url: "http://viktorkorolyuk.cu.cc",
    img: "viktorkorolyuk.cu.cc.png"
}, {
    name: "SWipe",
    desc:"Are you fast enough?",
    url: "https://viktorkorolyuk.github.io/SWipe/",
    img: "SWipe-game.png"
}, {
    name: "jstoolbox",
    desc:"Tools to optimise your chromebook usage",
    url: "https://viktorkorolyuk.github.io/jstoolbox/",
    img: "jstoolbox.png"
}];

var buttons = document.getElementsByClassName("button");



/* Create an "INIT" subroutine to aid in later development and debugging */
function init() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function (e) {
            document.getElementById("main").innerHTML = `${possibilities[e.target.target]()} ${possibilities.before}`; //set the divider by id tag "main" to a set html code defined in possibilities
        }
    }
}

/* Gallery */
function loadGallery() {
    let main = document.getElementById("main");
    let str = "";
    for (i in images) {
        //Set the the content
        str += `<div class="gallery" style="background-image:url('res/gallery/${images[i].img}')" onclick="window.location.href='${images[i].url}'">
        <p onmouseover="this.innerHTML = '${images[i].desc}'" onmouseout="this.innerHTML = '${images[i].name}'">${images[i].name}</p>
    </div>`;

    }
    return str;
}


init(); //start
