class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference [x]
    // this.tabElement; [x]
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here [x]
    // this.tabData = ;  [x]
    this.tabData = this.tabElement.dataset.tab;

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // <- Delete this comment block when you work on the if statement  [x]
    // Check to see if this.tabData is equal to 'all'  [x]
    if(this.tabData === "all"){
      // If `all` is true, select all cards regardless of their data attribute values
      // this.cards = ;  [x]
      this.cards = document.querySelectorAll(".card");
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      // this.cards = ;  [x]
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    }
    // <- Delete this comment block when you work on the if statement



     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class.  [x]
    // this.cards = Array.from(this.cards).map(); [x]
    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // Add a click event that invokes this.selectTab [x]
    // this.tabElement.addEventListener(); [x]
    // console.log();
    this.tabElement.addEventListener("click", () => {
      this.selectTab();
    });
  }

  selectTab(){

    // Select all elements with the .tab class on them [x]
    // const tabs = document.querySelectorAll(); [x]
    const tabs = document.querySelectorAll(".tab");
    // console.log("tabs");

    // Iterate through the NodeList removing the .active-tab class from each element [x]
    // tabs.forEach() [x]
    tabs.forEach(tab => tab.classList.remove("active-tab")); 

    // Select all of the elements with the .card class on them [x]
    // const cards = ; [x]
    const cards = document.querySelectorAll(".card");
    
    // Iterate through the NodeList setting the display style each one to 'none' [x]
    // cards.forEach() [x]
    cards.forEach(card => (card.style.display = "none"));

    // Add a class of ".active-tab" to this.tabElement [x]
    // this.tabElement; [x]
    this.tabElement.classList.add("active-tab");

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here. [x]
    // this.cards.forEach(card => card.selectCard()); [x]
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference [x]
    // this.cardElement; [x]
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex" [x]
    // this.cardElement; [x]
    this.cardElement.style.display = "flex";
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable [x]

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList [x]

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter [x]

*/
let tabs = document.querySelectorAll(".tab");
tabs.forEach(element => new TabLink(element));
