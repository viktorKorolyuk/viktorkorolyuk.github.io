/**
 * @description Generates a gallery to be added when required.
 */
function generateGallery() {
    let string_htmlElements = "";

    for (galleryElement of gallery) {
        string_htmlElements += `<div class='project hov-pointer' onclick="window.location.href='${galleryElement.url}'">`

        // Insert another element if the image is not null (an image is available)
        if (galleryElement.imgURL) {
            string_htmlElements += `<div class='st'><img onclick="window.location.href='${galleryElement.url}'" src='res/imgs/${galleryElement.imgURL}' /></div>`;
        }

        // Add the text body component
        string_htmlElements += `<div class='content'>
                        <h1 class="name">${galleryElement.name}</h1>
                        <p class="desc">${galleryElement.desc}</p>
                    </div>`;
        string_htmlElements += `</div>`
    }
    
    return string_htmlElements;
}

let gallery = [{
        name: "Google Form - Discord Integration",
        desc: "Skeleton script used to send notificationf of Google Form submissions to a Discord server. This solution is actively being used in the Tech Under Twenty Discord server.",
        imgURL: "gallery/no_image.png",
        url: "https://gist.github.com/viktorKorolyuk/84df2f5c3e9aa67739e124899086b91b"
    }, {
        name: "TU20 Discord Bot",
        desc: "Dedicated bot for the Tech Under Twenty Discord server that is designed to augment and extend the features of Discord and provide custom tools for the internal and external memberbase. This project was made under the TU20 Development team.",
        imgURL: "gallery/no_image.png",
        url: "https://github.com/TechUnderTwenty/TU20Bot"
    },
    {
        name: "SVG Facial Reconstruction Animation",
        desc: "An infinitely looping animation of a face recognised only by it's fundemental features",
        imgURL: "gallery/facial_reconstruction.png",
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
        imgURL: "gallery/no_image.png",
        url: "https://codepen.io/ViktorKorolyuk/full/dJZPGK"
    }, {
        name: "JS Data-Structs",
        desc: "A set of simple data structures which parse into JSON",
        imgURL: "gallery/no_image.png",
        url: "https://github.com/viktorKorolyuk/JS-Data-Structures"
    }, {
        name: "Electron Music Player",
        desc: "Cross-platform music player made with electron",
        imgURL: "gallery/no_image.png",
        url: "https://github.com/viktorKorolyuk/Fancy-Music-Player"
    }, {
        name: "Not-Latex",
        "desc": "A latex-inspired javascript text processor",
        imgURL: "gallery/not_latex.png",
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
        imgURL: "gallery/jstoolbox.png"
    }, {
        name: "Draggyman",
        desc: "(ANDROID) Drag a sprite around the screen avoiding flying spikes",
        imgURL: "gallery/no_image.png",
        url: "https://github.com/viktorKorolyuk/DraggyMan"
    }, {
        name: "SVG Skull",
        desc: "Polyart skull recreated using SVG",
        url: "https://codepen.io/ViktorKorolyuk/full/EmMrVb/",
        imgURL: "skull-EXTRACT-pink.png"
    }, {
        name: "ReactJS Switch",
        desc: "Boolean switch with nice CSS animations and event hanlder",
        url: "https://codepen.io/ViktorKorolyuk/full/dzGzVw/",
        imgURL: "gallery/reactJsSwitch.png"
    },
];

document.getElementById("main").innerHTML = "<div class='gallery'>" + generateGallery() + "</div>"