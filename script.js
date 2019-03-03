/*Add event listener to submit button to run function*/

$("button").click(gather)

/*function that runs when submit button clicked*/
function gather() {

/* collects essential income data from forms and assigns to variables, also replaces any non-number characters and parses to integer*/
  income = document.getElementById("income").value;
  income = income.replace(/\D/g,'');
  income = parseInt(income);
  rent = document.getElementById("rent").value;
  rent = rent.replace(/\D/g,'');
  rent = parseInt(rent);
  utilities = document.getElementById("utilities").value;
  utilities = utilities.replace(/\D/g,'');
  utilities = parseInt(utilities);
  groceries = document.getElementById("groceries").value;
  groceries = groceries.replace(/\D/g,'');
  groceries = parseInt(groceries);
  insurance = document.getElementById("insurance").value;
  insurance = insurance.replace(/\D/g,'');
  insurance = parseInt(insurance);
  auto = document.getElementById("auto").value;
  auto = auto.replace(/\D/g, '');
  auto = parseInt(auto);
  care = document.getElementById("care").value;
  care = care.replace(/\D/g, '');
  care = parseInt(care);

/*calculates essential expenses*/
  essential = rent + groceries + utilities + insurance + auto + care;

/*collects discretionary income data from form, assigns to variables, removes non-number characters, and parses values as integers*/
  food = document.getElementById("food").value;
  food = food.replace(/\D/g, '');
  food = parseInt(food);
  shopping = document.getElementById("shopping").value;
  shopping = shopping.replace(/\D/g, '');
  shopping = parseInt(shopping);
  entertainment = document.getElementById("entertainment").value;
  entertainment = entertainment.replace(/\D/g, '');
  entertainment = parseInt(entertainment);

/*calculates discretionary expenses*/
  discretionary = food + shopping + entertainment;

/*calculates total expenses*/
  spending = essential + discretionary;
  
/*calculates amount left over after expenses*/
  result = income - essential - discretionary;

/*calculates desired savings amount at 20 percent of income*/
  savings = (income * 0.20);

/*removes instructions from results div to prepare for results*/
  $(".results-data").empty();

/*tells user to enter information in form if no info entered*/
  if (result === 0) {
    $(".results-data").append('<p> Please enter your information using the form.</p>');
  }

/*displays results if essential spending is more than their income*/
  else if (essential > income) {
    $(".results-data").append('<p>Your essential expenses exceed your monthly income. You should look at increasing your income or making changes to your lifestyle.</p>');
  }

/*displays reults if total expenses are more than income*/
  else if (spending > income) {
    $(".results-data").append('<p>You have enough income to meet your basic spending, but your discretionary expenses put you over budget. You should consider reducing your spending on things like restaurants, shopping, and entertainment.');
  }

/*displays results if spending is less than income, differentiating whether savings rate is at 20 percent*/
  else {

/*displays results if spending is less than income and they have enough to save 20 percent of income*/
    if (result > savings) {
     $(".results-data").append(
      '<p> After your expenses you have $' + result + ' left in your budget. You should be setting aside $' + savings +' of this as savings.</p>');
    }

/*displays results if spending is less than income but they do not have enough left over to save 20 percent of income*/
    else {
      $(".results-data").append('<p> After your expenses you have $' + result + ' left in your budget, but you should be saving $' + savings + ' each month. Try to reduce discretionary expenses.</p>');
    }
  }
}