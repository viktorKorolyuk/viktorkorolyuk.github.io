const pgHandler = new PageHandler();

/**
 * @description Generates a gallery to be added when required.
 */
function loadGallery() {
    let str = "";
    let pages = pgHandler.gallery;

    for (i of pages) {

        // If the image URL is empty, don't render it
        if (i.imgURL) {
            str += `<div class='project'>
                    <div class='st'>
                        <img onclick="window.location.href='${i.url}'" src='res/imgs/${i.imgURL}' />
                    </div>
                    <div class='content'>
                        <h1 class="name">${i.name}</h1>
                        <p class="desc">${i.desc}</p>
                    </div>
                </div>`;
        } else {
            str += `<div class='project hov-pointer' onclick="window.location.href='${i.url}'">
                    <div class='content'>
                        <h1 class="name">${i.name}</h1>
                        <p class="desc">${i.desc}</p>
                    </div>
                </div>`;
        }
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
        return "<div class='gallery'>" + loadGallery() + "</div>";
    }
};

pgHandler.gallery = [{
    name: "SVG Facial Reconstruction Animation",
    desc: "An infinitely looping animation of a face recognised only by it's fundemental features",
    imgURL: "skull-EXTRACT-333.png",
    url: "https://codepen.io/ViktorKorolyuk/full/gOaymPZ"
}, {
    name: "CSS Single element waves",
    desc: "A peaceful and minimalistic wave animation",
    imgURL: "gallery/singleElementWaves.png",
    url: "https://codepen.io/ViktorKorolyuk/full/JjdwZXm"
}, {
    name: "Button ripple effect",
    desc: "A neat effect to add to button designs",
    imgURL: "gallery/buttonRippleEffect.png",
    url: "https://codepen.io/ViktorKorolyuk/full/GYGwpv"
}, {
    name: "Animated point mesh",
    desc: "Spawns a random set of moving points on the screen and connects them with lines",
    imgURL: "gallery/animatedPointMesh.png",
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
    imgURL: "gallery/SWipe-game.png"
}, {
    name: "jstoolbox",
    desc: "Tools to optimise your chromebook usage.",
    url: "https://viktorkorolyuk.github.io/jstoolbox/",
    img: "gallery/jstoolbox.png"
}, {
    name: "Draggyman",
    desc: "(ANDROID) Drag a sprite around the screen avoiding flying spikes",
    url: "https://github.com/viktorKorolyuk/DraggyMan"
}, {
    name: "SVG Skull",
    desc: "Polyart skull recreated using SVG",
    url: "https://codepen.io/ViktorKorolyuk/full/EmMrVb/",
    imgURL: "gallery/svgSkull.png"
}, {
    name: "ReactJS Switch",
    desc: "Boolean switch with nice CSS animations and event hanlder",
    url: "https://codepen.io/ViktorKorolyuk/full/dzGzVw/",
    imgURL: "gallery/reactJsSwitch.png"
}, ];

// Call the pagehandler to process the given options
pgHandler.init();