/* Now its time for the "fun" part
 * In the following code we will make a system that simplifies debugging and
 * adding features later on.
 */
const pgHandle = new pageHandler();

pgHandle.possibilities = {
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
        return "<h1>My projects</h1>" + loadGallery();
    }
};

pgHandle.pages = [{
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
    desc: "Are you fast enough?",
    url: "https://viktorkorolyuk.github.io/SWipe/",
    img: "SWipe-game.png"
}, {
    name: "jstoolbox",
    desc: "Tools to optimise your chromebook usage",
    url: "https://viktorkorolyuk.github.io/jstoolbox/",
    img: "jstoolbox.png"
}];

/* Gallery */

function loadGallery() {
    let main = document.getElementById("main");
    let str = "";
    let pages = pgHandle.pages;
    for (i in pages) {
        //Set the the content
        str += `<div class="gallery" style="background-image:url('res/gallery/${pages[i].img}')" onclick="window.location.href='${pages[i].url}'">
        <p onmouseover="this.innerHTML = '${pages[i].desc}'" onmouseout="this.innerHTML = '${pages[i].name}'">${pages[i].name}</p>
    </div>`;

    }
    return str;
}


pgHandle.init(); //start
