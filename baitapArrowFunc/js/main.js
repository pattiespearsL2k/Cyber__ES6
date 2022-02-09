const colorList = ["pallet", "viridian", "pewter", "cerulean",
    "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let container = document.getElementById("colorContainer");
let house = document.getElementById("house");
let index = 0;
const loadWeb = () => {
    for (i = 0; i < colorList.length; i++) {
        container.innerHTML += `<button class='color-button ${colorList[i]}' id='${colorList[i]}' onclick="changeColor(this.id)" ></button>`;
    }
}

const changeColor = (id) => {
         colorList.forEach(c => {
            if (house.classList.contains(c)) {
               house.classList.remove(c);
            }
            else{
                house.classList.add(id);
            }
           
          })
}



