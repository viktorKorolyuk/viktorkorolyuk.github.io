/* Now its time for the "fun" part
 * In the following code we will make a system that simplifies
 * debugging and adding features later on.
 *
 *I am using a custom page handler to organize the code as much as
 * possible.
 */


setPossibilities({
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
        return "<h1>My projects</h1> <div class=''>" + loadGallery() + "</div>";
    }
});

setGallery([{
    name: "viktorkorolyuk.github.io",
    desc: "The current website.",
    url: "https://viktorkorolyuk.github.io",
    img: "viktorkorolyuk.github.io.png"
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
},{
  name:"SVG skull",
  desc: "Polyart skull recreated using SVG.",
  url:"https://codepen.io/ViktorKorolyuk/full/EmMrVb/",
  img:"svgSkull.png"
}, {
  name:"ReactJS Switch",
  desc:"Boolean switch with nice CSS animations and event hanlder.",
  url:"https://codepen.io/ViktorKorolyuk/full/dzGzVw/",
  img:"reactJsSwitch.png"
}]);

/* Gallery */
function loadGallery() {
    let main = document.getElementById("main");
    let str = "";
    let pages = pgHandler.gallery;
    var x, z = "none";
    for (i in pages) {
      x = (x == "left") ? "right" : "left";
        //Set the the content
        str += `<div class="gallery" style="background-image:url('res/gallery/${pages[i].img}'); float: ${z};" onclick="window.location.href='${pages[i].url}'">
        <p onmouseover="this.innerHTML = '${pages[i].desc}'" onmouseout="this.innerHTML = '${pages[i].name}'">${pages[i].name}</p>
    </div>`;

    }
    return str;
}

pgHandler.init(); //start
