var Itemprice=38;
var Item2price=69;
var Item3price=90;
var totalcost=Itemprice+Item2price+Item3price;

const discountaccount = 250;
const discountRate = 14.5;

var discountApplied= totalcost>discountaccount;
var finaldiscountamount = discountApplied ? totalcost *discountRate: 0;
var finalcost = totalcost - finaldiscountamount;

var results =

"Items:\n" +

"- Item: $" + Itemprice + "\n" +

"- Item 2: $" + Item2price + "\n" +

"- Item 3: $" + Item3price + "\n" +

"Total: $" + totalcost + "\n" +

(discountApplied ? "Discount: $" + discountaccount + "\n" : "No discount\n") +

"Final Total: $" + finalcost;

// Display the results

document.getElementById("results").innerText = results;