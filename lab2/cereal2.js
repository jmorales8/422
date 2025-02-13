// TODO: create Cereal class with fields 'name', 'count', 'img' -- must be in this order!
class Cereal {
  constructor(name, count, img) {
    this.name = name;
    this.count = count;
    this.img = img;
  }
}

// lines 4-8 creates the cereal instances and the cereal array
let frostedFlakes = new Cereal("Frosted Flakes", 0, "frostedFlakes.jpg");
let luckyCharms = new Cereal("Lucky Charms", 0, "luckyCharms.png");
let captainCrunch = new Cereal("Captain Crunch", 0, "capnCrunch.png");

let cerealArray = [frostedFlakes, luckyCharms, captainCrunch];

//TODO: Add a changeCerealName function that takes in a Cereal instance and sets the name
// using the 'name' field. (same as you did in exercise 1). Keep the function name as listed in the TODO
function changeCerealName(cereal) {
  document.getElementById("cereal-name").textContent = cereal.name;
}

//TODO: Add a changeCerealImg function that takes in a Cereal instance and sets the img
// using the 'img' field. (same as you did in exercise 1). Keep the function name as listed in the TODO
function changeCerealImg(cereal) {
  document.getElementById("cereal-img").src = cereal.img;
}
// IMPORTANT: this function also takes in a Cereal instance!
function incrementCerealCount(cereal) {
  // TODO: create 3 if statements, checking if the cereal name is "Frosted Flakes",
  // "Lucky Charms", or "Captain Crunch".
  // hint: you can access the name of the cereal using cereal.name

  // TODO: inside each if statement, grab the td element with the corresponding id
  // and set the contents (the cereal count) to the current cereal count + 1.
  // Reference the html file to get the id!
  // TODO: increment the cereal count of the current instance.
  if (cereal.name === "Frosted Flakes") {
    let countElement = document.getElementById("ff-count");
    countElement.textContent = parseInt(countElement.textContent) + 1;
    cereal.count++;
  }
  if (cereal.name === "Lucky Charms") {
    let countElement = document.getElementById("lc-count");
    countElement.textContent = parseInt(countElement.textContent) + 1;
    cereal.count++;
  }
  if (cereal.name === "Captain Crunch") {
    let countElement = document.getElementById("cc-count");
    countElement.textContent = parseInt(countElement.textContent) + 1;
    cereal.count++;
  }
}

// TODO: write the function changeCereal() USING ES6 SYNTAX. This function should do the following:
// (1) generate a random index, which you will use to chose a cereal from the cereal array.
//     you can do this with the following line of code:
//     let ind = Math.floor(Math.random() * 3);
// (2) get the cereal object from the cereal array using the index 'ind' generated above
// (3) call the appropriate functions (there should be 3!) to change the cereal name, image, and cereal counts
const changeCereal = () => {
  let ind = Math.floor(Math.random() * 3);
  let selectedCereal = cerealArray[ind];
  changeCerealName(selectedCereal);
  changeCerealImg(selectedCereal);
  incrementCerealCount(selectedCereal);
};
