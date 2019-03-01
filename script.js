const perIncome = prompt("How much do you bring home each pay period after taxes and deductions to the nearest even dollar?");
const payPeriod = prompt("How many times a year do you get paid? Enter 52 for weekly pay, 26 for biweekly, and 12 for monthly.");
const monthIncome = (perIncome * payPeriod)/12;
const rentBudget = prompt("How much is your rent each month?");
const autoBudget = prompt("How much is the total of your car payment, insurance, gas, and other maintenance per month?");
const debtBudget = prompt("How much is the total of your student loans, credit card minimums, personal loans, and other debt payments per month?");
const careBudget = prompt("How much do you spend on child, pet or other dependent care per month?");
const utilBudget = prompt("How much are your utilities, including phone and internet, each month?");
const groceryBudget = prompt("How much does it cost to keep you fed each month?");
const essentialBudget = rentBudget + autoBudget + debtBudget + careBudget + utilBudget + groceryBudget;
if (essentialBudget < monthIncome) {
    alert("Your essential expenses are greater than your monthly income. At this pace, you'll either go into debt or be unable to afford your bills. Please visit our resources page for more information on how to adjust your budget or increase your income.")
}
else {
    const outBudget = prompt("How much do you spend out at restaurants (including coffeeshops and fast food) and bars each month?");
    const shoppingBudget = prompt("How much do you spend on shopping each month?");
    const entBudget = prompt("How much do you spend on entertainment, including cable, concerts, subscriptions, and video games, each month?");
    const discBudget = outBudget + shoppingBudget + entBudget;
}
const totalBudget = discBudget + essentialBudget;
if (totalBudget < monthIncome) {
    alert("Your total spending is above your monthly income. Please view our resources page for ideas on how to trim your discretionary spending.");
}
    else {
        if (totalBudget > (monthIncome * .9)) {
        alert("Your spending is high, but manageable. Please view our resources page for ideas on how to trim your discretionary spending so you can save more each month.")
    }
    else {
        alert("You are saving at least 10 percent of your income each month, that's great! Please visit our resources page for ideas on how to maximize your savings.");
    }
}
