//What is the name of the recipe?
const RecipeName = document.querySelector("#recipe-name");
console.log(RecipeName.innerText);

//What HTML tag is used to display the Recipe name?
console.log(RecipeName.tagName);

//What is the font size of the paragraph tag with the class "description".

const fontSizeParagraph = document.querySelector(".description");
const showParagraphStyle = window
  .getComputedStyle(fontSizeParagraph)
  .getPropertyValue("font-size");
console.log(showParagraphStyle);

//What is the value of the alt atrribute on the image?

const recipeImg = document.querySelector("img");
console.log(recipeImg.alt);

//What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:

const imgHeight = window.getComputedStyle(recipeImg).getPropertyValue("height");

const imgWidth = window.getComputedStyle(recipeImg).getPropertyValue("width");

const imageObject = {
  url: `${recipeImg}`,
  height: `${imgHeight}`,
  width: `${imgWidth}`,
};

console.log(imageObject);

//How many ingredients has the batter?

const batterList = document.querySelectorAll(".ingredients-list-paste >li");

console.log(`The batter has ${batterList.length} ingredients`);

// Which is the fourth element in the list containing the ingredients for the batter?

console.log(`The fourth ingrediens is ${batterList[3].innerText}`);

//Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:

const listOfInstruction = document.querySelectorAll(".instructions-list > li");

console.log(listOfInstruction);

const instructionObjects = [];
listOfInstruction.forEach((instruction, index) => {
  const instructionObject = {
    number: index,
    instruction: instruction.innerText,
  };
  instructionObjects.push(instructionObject);
});

console.log(instructionObjects);
