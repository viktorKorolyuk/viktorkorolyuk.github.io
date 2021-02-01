/**
 * @description Chooses which pages to show when the navigation buttons are pressed.
 */
class PageHandler {

    constructor() {
        this._gallery = [];
        this.possibilities = [];
        this.selected = undefined;
    }

    /**
     * @description Set up the on-click listeners for the navigation buttons.
     */
    init() {
        let buttons = document.getElementsByClassName("navigation_button");

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", e => {
                // Set the divider by id tag "main" to a set html code defined in possibilities
                this.setPage(pgHandler.possibilities[e.target.target](), e.target.target);
                if(this.selected != undefined) this.selected.classList.remove("selected")
                this.selected = e.target
                this.selected.classList.add("selected")
            });
        }
        // Runs every page reload
        if (window.location.hash != "") {
            let option = window.location.hash.split("#")[1].replace("_", "");
            this.setPage(this.possibilities[option](), option);
        }
    }

    /**
     * @description Changes the current page selection.
     * @param {*} location
     * @param {*} id 
     */

    setPage(location, id) {
        // Return if same page loaded
        if (document.getElementById("main").innerHTML === `${location} ${pgHandler.possibilities.before}`) return;
        document.getElementById("main").innerHTML = `${location} ${pgHandler.possibilities.before}`;
        window.location.hash = "_" + id;
    }


    set gallery(e) {
        this._gallery = e;
    }

    get gallery() {
        return this._gallery;
    }
    /**
     * @description Set the pages.
     * @param {e} Object with anonymous function declarations.
     */
    set options(e) {
        this.possibilities = e;
    }
}