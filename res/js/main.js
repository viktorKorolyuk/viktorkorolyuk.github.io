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

        // Set the the content
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
   animation: fadein 0.5s ease-in; /* Why not add some effects? */
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
    name: "SVG Facial Reconstruction Animation",
    desc: "An infinitely looping animation of a face recognised only by it's fundemental features",
    url: "https://codepen.io/ViktorKorolyuk/full/gOaymPZ"
}, {
    name: "CSS Single element waves",
    desc: "A peaceful and minimalistic wave animation",
    url: "https://codepen.io/ViktorKorolyuk/full/JjdwZXm"
}, {
    name: "Button ripple effect",
    desc: "A neat effect to add to button designs",
    url: "https://codepen.io/ViktorKorolyuk/full/GYGwpv"
}, {
    name: "Animated point mesh",
    desc: "Spawns a random set of moving points on the screen and connects them with lines",
    url: "https://codepen.io/ViktorKorolyuk/full/QWLmWPm"
}, {
    name: "Conway's Game of Life",
    desc: "A colourful implementation of the popular cellular automaton by John Horton Conway",
    url: "https://codepen.io/ViktorKorolyuk/full/dJZPGK"
}, {
    name: "JS Data-Structs",
    desc: "A set of simple data structures which parse into JSON",
    url: "https://github.com/viktorKorolyuk/JS-Data-Structures"
}, {
    name: "Electron Music Player",
    desc: "Cross-platform music player made with electron",
    url: "https://github.com/viktorKorolyuk/Fancy-Music-Player"
}, {
    name: "Not-Latex",
    "desc": "A latex-inspired javascript text processor",
    url: "https://github.com/viktorKorolyuk/Not-Latex"
}, {
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
    name: "Draggyman",
    desc: "(ANDROID) Drag a sprite around the screen avoiding flying spikes",
    url: "https://github.com/viktorKorolyuk/DraggyMan"
}, {
    name: "SVG Skull",
    desc: "Polyart skull recreated using SVG",
    url: "https://codepen.io/ViktorKorolyuk/full/EmMrVb/",
    img: "svgSkull.png"
}, {
    name: "ReactJS Switch",
    desc: "Boolean switch with nice CSS animations and event hanlder",
    url: "https://codepen.io/ViktorKorolyuk/full/dzGzVw/",
    img: "reactJsSwitch.png"
}, ];

// Call the pagehandler to process the given options
pgHandler.init();