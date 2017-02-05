/** Now its time for the "fun" part */
var buttons = document.getElementsByClassName("button");
var x;
const possibilities = {
    "about" : `<h1>Lorum ipsum dolor:</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, eros at efficitur rutrum, ligula purus sollicitudin mi, congue egestas libero nisi sed sem. Curabitur suscipit mi a nisl aliquet vestibulum. In hac habitasse platea dictumst. Nulla vulputate non neque nec laoreet. Donec vehicula ante ut mauris luctus, eget venenatis mi tempor. Vivamus a tellus tempus arcu cursus accumsan ac at justo. Aliquam nec augue euismod, viverra ligula et, cursus diam. Donec mattis dui arcu, malesuada tincidunt lacus ultrices a. Aenean maximus et turpis at viverra. Aliquam luctus felis est, id egestas lectus ullamcorper at. Integer diam quam, dictum ac sapien semper, fermentum fermentum turpis. Fusce condimentum orci vitae orci imperdiet, sed vehicula nunc mattis. Vestibulum purus risus, vulputate vel maximus nec, eleifend at leo. In gravida lorem vel lacinia hendrerit.

Aliquam egestas ac ligula ut laoreet. Donec eget laoreet ex. Aliquam vitae lorem mollis, efficitur urna tristique, consequat lacus. Fusce pharetra metus velit, congue fermentum orci aliquet a. Aenean at luctus diam. Maecenas porta mollis dolor, ac interdum mi faucibus in. Donec ut bibendum ante, at elementum massa. Phasellus a fermentum nunc. Vivamus eget ligula et odio accumsan semper ac ac felis. Nullam augue nisl, vulputate at congue a, malesuada eget orci. Vivamus et leo ut nisi convallis pellentesque at quis elit. Maecenas quis justo nec nisi scelerisque elementum. Ut mollis augue nec mi tempor efficitur et id massa. Sed sit amet ipsum cursus, rhoncus mi ac, feugiat enim. Vestibulum luctus metus vitae porta maximus. Integer elit enim, porta sit amet aliquam vitae, cursus tempus neque. Curabitur posuere id eros ut posuere. Donec consectetur convallis odio, eget rhoncus mauris dignissim ut. Nam sed augue cursus, luctus eros in, aliquam magna. Duis rutrum venenatis placerat. Curabitur vestibulum interdum ex, sed condimentum ipsum cursus id. Aenean scelerisque porta tincidunt.`,
    "gallery" : ``
}
for(var i = 0; i < buttons.length; i++){
    console.log(i);
    buttons[i].onclick = function(e){
        console.log(e.target.id);
        x = e;
        document.getElementById("main").innerHTML = possibilities[x];
    }
}

// Create a class for the element
class XProduct extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create a standard img element and set it's attributes.
    var img = document.createElement('img');
      img.src = "https://secure.gravatar.com/avatar/d0d90148e08e3b64ccf75c46f31442c5?s=34&r=pg&d=https%3A%2F%2Fdeveloper.cdn.mozilla.net%2Fmedia%2Fimg%2Favatar.png"
    img.width = '150';
    img.height = '150';
    img.className = 'product-img';

    // Add the image to the shadow root.
    shadow.appendChild(img);
  }
}

// Define the new element
customElements.define('g-hg', XProduct);