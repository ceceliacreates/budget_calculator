$("button").click(gather)

function gather() {
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
  essential = rent + groceries + utilities + insurance + auto + care;
  food = document.getElementById("food").value;
  food = food.replace(/\D/g, '');
  food = parseInt(food);
  shopping = document.getElementById("shopping").value;
  shopping = shopping.replace(/\D/g, '');
  shopping = parseInt(shopping);
  entertainment = document.getElementById("entertainment").value;
  entertainment = entertainment.replace(/\D/g, '');
  entertainment = parseInt(entertainment);
  discretionary = food + shopping + entertainment;
  spending = essential + discretionary;
  result = income - essential - discretionary;
  savings = (income * 0.20);

  $(".results-data").empty();
  if (result === 0) {
    $(".results-data").append('<p> Please enter your information using the form.</p>');
  }
  else if (essential > income) {
    $(".results-data").append('<p>Your essential expenses exceed your monthly income. You should look at increasing your income or making changes to your lifestyle.</p>');
  }

  else if (spending > income) {
    $(".results-data").append('<p>You have enough income to meet your basic spending, but your discretionary expenses put you over budget. You should consider reducing your spending on things like restaurants, shopping, and entertainment.');
  }
  else {
    if (result > savings) {
     $(".results-data").append(
      '<p> After your expenses you have $' + result + ' left in your budget. You should be setting aside $' + savings +' of this as savings.</p>');
    }
    else {
      $(".results-data").append('<p> After your expenses you have $' + result + ' left in your budget, but you should be saving $' + savings + ' each month. Try to reduce discretionary expenses.</p>');
    }
  }
}