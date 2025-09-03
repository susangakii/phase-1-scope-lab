// Write your solution in this file!
//declare var in global scope
var customerName = "bob";

//uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

//declare global variable in a function
function setBestCustomer(){
    bestCustomer = "not bob";
}

//new function that overwrites the previous
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

//assign variable in global scope using cont
const leastFavoriteCustomer = "Bran";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Mary";
}