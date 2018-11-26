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

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(item) {
      sum += item.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      expense: [],
      income: []
    },
    totals: {
      expense: 0,
      income: 0
    },
    budget: 0,
    percentage: -1
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

    calculateBudget: function() {
      // calculate total income and expense
      calculateTotal("expense");
      calculateTotal("income");
      // calculate the budget: income - expense
      data.budget = data.totals["income"] - data.totals["expense"];
      // calculate the percentage of income that we spent
      if (data.totals.income != 0) {
        data.percentage = Math.round(
          (data.totals["expense"] / data.totals["income"]) * 100
        );
      } else {
        data.percentage = -1;
      }
    },
    getBuget: function() {
      return {
        budget: data.budget,
        income: data.totals.income,
        expense: data.totals.expense,
        percentage: data.percentage
      };
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
    inputBtn: ".add__btn",
    incomeContanier: ".income__list",
    expenseContanier: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expenseLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage"
  };
  return {
    getInput: function() {
      return {
        // will be either inc or exp
        type: document.querySelector(DOMString.inputType).value,
        description: document.querySelector(DOMString.inputDescription).value,
        value: parseFloat(document.querySelector(DOMString.inputValue).value)
      };
    },
    addListItem: function(obj, type) {
      var html, newhtml, element;
      if (type === "income") {
        element = DOMString.incomeContanier;
        // create html string with placeholder text
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div</div></div>';
      } else {
        element = DOMString.expenseContanier;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // Replace the placeholder text with some actual data
      newhtml = html.replace("%id%", obj.id);
      newhtml = newhtml.replace("%value%", obj.value);
      newhtml = newhtml.replace("%description%", obj.description);
      //Insert HTML
      document.querySelector(element).insertAdjacentHTML("beforeend", newhtml);
    },

    clearField: function() {
      var fiels = document.querySelectorAll(
        DOMString.inputDescription + ", " + DOMString.inputValue
      );

      var fielsArray = Array.prototype.slice.call(fiels);

      fielsArray.forEach(function(element) {
        element.value = "";
      });

      fielsArray[0].focus();
    },

    displayBuget: function(obj) {
      document.querySelector(DOMString.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMString.incomeLabel).textContent = obj.income;
      document.querySelector(DOMString.expenseLabel).textContent = obj.expense;

      if (obj.percentage > 0) {
        document.querySelector(DOMString.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMString.percentageLabel).textContent = "---";
      }
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

  var updateBuget = function() {
    // Calculate the budget
    budget.calculateBudget();
    // Return the budget
    var budgetValue = budget.getBuget();
    // Display budget on the UI
    UI.displayBuget(budgetValue);
  };

  var controlAddItem = function() {
    // Get the field input data
    var input = UI.getInput();

    // Check input value before add
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // Add item to the budget controller
      var newItem = budget.addItem(input.type, input.description, input.value);

      // Add item to the UI
      UI.addListItem(newItem, input.type);
      // Clear the field input
      UI.clearField();

      // Calculate and update budget
      updateBuget();
    }
  };

  return {
    init: function() {
      console.log("Application started.");
      UI.displayBuget({
        budget: 0,
        income: 0,
        expense: 0,
        percentage: -1
      });
      setupEventListener();
    }
  };
})(budgetController, UIController);

controller.init();
