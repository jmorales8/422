// TODO: create Cereal class with fields 'name', 'count', 'img' -- must be in this order!
class Cereal {
  constructor(name, count, img) {
      this.name = name;
      this.count = count;
      this.img = img;
      // Add an id field that corresponds to the td element id in the HTML
      this.id = name === "Frosted Flakes" ? "ff-count" : (name === "Lucky Charms" ? "lc-count" : "cc-count");
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
  cereal.count++;
  cerealArray.map(c => document.getElementById(c.id).textContent = c.count);
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
