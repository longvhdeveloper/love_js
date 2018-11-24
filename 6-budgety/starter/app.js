var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      expense: [],
      income: []
    },
    totals: {
      expense: 0,
      income: 0
    }
  };

  return {
    addItem: function(type, description, value) {
      var newItem, id;
      console.log(type);
      console.log(data.allItems[type].length);
      // get next id by last + 1
      if (data.allItems[type].length > 0) {
        id = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        id = 0;
      }

      // Create new item by type
      if (type === "expense") {
        newItem = new Expense(id, description, value);
      } else if (type === "income") {
        newItem = new Income(id, description, value);
      }

      // push it into our data structure
      data.allItems[type].push(newItem);

      // return the new element
      return newItem;
    },
    testing: function() {
      console.log(data);
    }
  };
})();

var UIController = (function() {
  var DOMString = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        // will be either inc or exp
        type: document.querySelector(DOMString.inputType).value,
        description: document.querySelector(DOMString.inputDescription).value,
        value: document.querySelector(DOMString.inputValue).value
      };
    },
    getDOMString: function() {
      return DOMString;
    }
  };
})();

var controller = (function(budget, UI) {
  // Init event listener
  var setupEventListener = function() {
    var DOMString = UI.getDOMString();
    document
      .querySelector(DOMString.inputBtn)
      .addEventListener("click", controlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        controlAddItem();
      }
    });
  };

  var controlAddItem = function() {
    // Get the field input data
    var input = UI.getInput();

    // Add item to the budget controller
    var newItem = budget.addItem(input.type, input.description, input.value);

    // Add item to the UI
    // Calculate the budget
    // Display budget on the UI
  };

  return {
    init: function() {
      console.log("Application started.");
      setupEventListener();
    }
  };
})(budgetController, UIController);

controller.init();
