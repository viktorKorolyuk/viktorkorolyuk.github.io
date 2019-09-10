const section = document.getElementById("section");

function wait(func, timeout) {
  return new Promise(resolve => {
    setTimeout(e => {
      func();
      resolve();
    }, timeout);
  })
}

const string = section.innerHTML.split("");
section.innerHTML = "";
const elems = [];
for (let i = 0; i < string.length; i++) {
  let p = document.createElement("p");
  p.classList.add("animatableText");
  p.innerText = string[i];
  section.appendChild(p);
  elems.push(p);
}

async function play() {
  for (let i = 0; i < elems.length; i++) {
    let elem = elems[i];

    console.log("ayy");
    await wait(e => {
      elem.animate([{
        transform: "rotateX(180deg)"
      }, {
        transform: "rotateX(0deg)"
      }], 500).play();
    }, 50);
    elem.style.transform = "rotateX(0deg)";
  }
}
play();