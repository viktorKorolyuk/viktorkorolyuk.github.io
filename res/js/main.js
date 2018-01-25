/* Now its time for the "fun" part
 * In the following code we will make a system that simplifies
 * debugging and adding features later on.
 *
 *I am using a custom page handler to organize the code as much as
 * possible.
 */


/** class to make page handling easier */
const pgHandler = new PageHandler();

/**
 * @description Generates a gallery to be added when required.
 * @arguments none
 */

function loadGallery() {
    let str = "";
    let pages = pgHandler.gallery;
    var x, z = "none";
    for (i of pages) {

        //Set the the content
        str += `<div class='project' onclick="window.location.href='${i.url}'">
                    <div class='st'>
                        <!-- <img onclick="window.location.href='${i.url}'" src='res/gallery/${i.img}' /> -->
                    </div>
                    <div class='content'>
                        <h1 class="name">${i.name}</h1>
                        <p class="desc">${i.desc}</p>
                    </div>
                </div>`;

    }
    return str;
}


pgHandler.options = {
    before: `<style>
#main *{
   animation: fadein 1.5s ease-in; /* Why not add some effects? */
   opacity: 1;
}
</style>`,
    about: function () {
        return document.getElementById("about-template").innerHTML;
    },
    gallery: function () {
        return "<h1 style='text-align: center;'>My projects</h1> <div class='gallery'>" + loadGallery() + "</div>";
    }
};

pgHandler.gallery = [{
    name: "SWipe",
    desc: "Are you fast enough?",
    url: "https://viktorkorolyuk.github.io/SWipe/",
    img: "SWipe-game.png"
}, {
    name: "jstoolbox",
    desc: "Tools to optimise your chromebook usage.",
    url: "https://viktorkorolyuk.github.io/jstoolbox/",
    img: "jstoolbox.png"
}, {
    name: "SVG skull",
    desc: "Polyart skull recreated using SVG.",
    url: "https://codepen.io/ViktorKorolyuk/full/EmMrVb/",
    img: "svgSkull.png"
}, {
    name: "ReactJS Switch",
        desc: "Boolean switch with nice CSS animations and event hanlder.",
    url: "https://codepen.io/ViktorKorolyuk/full/dzGzVw/",
    img: "reactJsSwitch.png"
}, {
    name:"Codepen.io",
    desc:"A link to my codepen.io 'portfolio'",
    url: "https://codepen.io/ViktorKorolyuk/"
}];

// Tell the pagehandler to process the given options
pgHandler.init();