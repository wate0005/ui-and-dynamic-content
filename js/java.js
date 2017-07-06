/*global prompt*/

//Open closure:
(function (){ 
    "use strict";
   
    // Access new-item button: 
    // Access unordered list:
    // Declare variable list-item:
    var btn, items, individual;

    btn = document.querySelector("button");
    items = document.querySelector("#list ul");

    // Define function removeItem (use event object to find out which item is clicked):
    function removeItem(gone) {
        
        // Remove clicked item from unordered list: 
        individual = gone.target;
        items.removeChild(individual);
        
    // End function removeItem:
    }
    
    //Define function addItem:
    function addItem() {
        
        //Create list item and store output in a variable:
        individual = document.createElement("li");

        //Use innerHTML on created list item and assign it with user input from prompt("Enter a new item for to-do list:"):
        individual.innerHTML = prompt("Enter a new item for to-do list!");
        
        //If list item has a content: 
        if (individual.innerHTML !== "") {
            
            //Append list item to unordered list:
            items.appendChild(individual);
            
            //Add event listener to the added list-item to listen for click event - event handler will be removeItem function:  
            individual.addEventListener("click", removeItem, false);

        //End if:    
        }
         
    //End function addItem:    
    }
    
    //Add event listener to button to listen for click event - event handler will be addItem function:
    btn.addEventListener("click", addItem, false);

//Close and immediately invoke closure:    
}());