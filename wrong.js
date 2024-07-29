//The logo text of the site has the wrong color. Change it to the correct one.

document.querySelector(".logo-text").style.color = "#384241";

//The alignment of the elements inside the header element are wrong. Change it to the correct one. Hint, check the flex properties for the correct alignment. Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

document.querySelector("header").style.justifyContent = "flex-start";

// The header has a border at the bottom, but it has the wrong color. Change it do the correct one.

document.querySelector("header").style.borderBottom = "solid 1px lightgrey";

// The recipe name is wrong, change it to the correct one.

document.querySelector("main h1").innerText = "Frozen Cheesecake";

//The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.

document
  .querySelector(".time-container > span")
  .classList.add("material-icons");

// The estimated time of the recipe is also incorrect. Change it to the correct time estimation.

document.querySelector(".time-container").children[1].innerText = "60+ min";

// The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.

document.querySelector("img").src = "assets/frozen-cheesecake-slice.jpg";

//The background color of the ingredients list container is wrong. Fix it.

document.querySelector(".ingredients-container").style.backgroundColor =
  "#f9f9f9";

// The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.

document.querySelector(".ingredients-list-bottom > p").remove();
const bottomList = document.querySelector(".ingredients-list-bottom");

const newLi1 = document.createElement("li");
newLi1.innerText = "15st digestivekex";
const newLi2 = document.createElement("li");
newLi2.innerText = "Lite smör";

bottomList.appendChild(newLi1);
bottomList.appendChild(newLi2);

// The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.

const batterListElements = document.querySelectorAll(
  ".ingredients-list-paste >li"
);

batterListElements[2].innerText = "3tsk vaniljsocker";

// There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.

const batterList = document.querySelector(".ingredients-list-paste");
const newLi3 = document.createElement("li");
newLi3.innerText = "400g naturell philadelphiaost";
batterList.appendChild(newLi3);

// The text "Instructions" to the right, beneath the image, has some shadow styling applied to it. Remove that styling.

document.querySelector(".instructions").style.boxShadow = "0 0 0 0 ";

// Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.

const instructionsList = document.querySelectorAll(".instructions-list > li");

console.log(instructionsList[1].innerText);

instructionsList[1].innerText =
  " Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";

instructionsList[8].innerText = "Ställ in i frysen över natten.";
