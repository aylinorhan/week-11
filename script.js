// LIST ARRAY IS WHERE OUR DATA FOR THIS APPLICATION LIVES
var listArray = [
  { name: "Books to Read",
    items: [
      "Hitchhiker's Guide to Galaxy",
      "Walden",
      "The Elephant, the Tiger, and the Cell Phone"
    ]
  },

   { name: "Other List",
    items: [
      "Hitchhiker's Guide to Galaxy",
      "Walden",
      "The Elephant, the Tiger, and the Cell Phone"
    ]
  }
];
var selectedList = 0;
var listDiv = document.getElementById("lists"); //items on left of the page
var itemDiv = document.getElementById("list-items"); // ites on right of the page
var addListButton = document.getElementById("add-list-button"); //popup
var addItemButton = document.getElementById("add-item-button"); //popup

// FUNCTIONS TO UPDATE THE HTML PAGE WITH RESPECT TO DATA
function updateLists() {
 while(listDiv.hasChildNodes()) {
    listDiv.removeChild(listDiv.lastChild);
  }
 //var list = listArray[0];

function addHTMLForList(list, index) {
   var aElement = document.createElement("a");
aElement.classList.add("list-group-item");
aElement.classList.add("list-group");
aElement.classList.add("list-group-item-action");

aElement.setAttribute("data-index", index);

var textNode = document.createTextNode(list.name);
aElement.appendChild(textNode);

console.log(aElement);
listDiv.appendChild(aElement);


}

listArray.forEach(addHTMLForList);





}

updateLists();

// ADDING TO LIST
addListButton.addEventListener("click", function(){
  e.preventDefault();

  //console.log(document["add-list-form"]["list-name-input"]);
  var input = document["add-list-form"]["list-name-input"];
  var newListName = input.value;
 
  if ( newListName.length>2) { 
    var newList = { name: newListName,  
                    items: []};
  listArray.push(newList);
  updateLists();
  closePopups();

  } else { 
    alert ("List name not valid!");

}

});


// ADDING TO LIST ITEMS

// POP-UP HANDLING CODE
var buttonsArray = document.querySelectorAll(".popup-button");
// querySelectorAll returns a DOMTokenList and not an Array (which includes methods like forEach)
buttonsArray = Array.from(buttonsArray); // Conevrting DOMTokenList to an Array

buttonsArray.forEach(function(button) {
  button.addEventListener("click", function() {
    var popup = document.getElementById(this.dataset.popupid);
    // The data attributes can be accessed by .dataset variable which is part of the DOMElement (check HTML for buttonsArray)
    popup.style.display = "flex";
  });
});

var closeButton = document.querySelectorAll(".close");
closeButton.forEach(function(button, i) {
  button.addEventListener("click", closePopups);
});

function closePopups() {
  var popupsArray = Array.from(document.querySelectorAll(".popup"));
  popupsArray.forEach(function(popup) {
    popup.style.display = "none";
  });
}
