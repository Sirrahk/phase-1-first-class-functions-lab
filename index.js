//Declare varaibale with const and assign an anonymous function that returns a new array of the first two drivers
const returnFirstTwoDrivers = ((arrDrivers) => {
    return arrDrivers.slice(0,2)
    


})
//Declare variable with const and assign an anoymous function that returns new array of last two drivers

const returnLastTwoDrivers = ((arrDrivers) => {
   return arrDrivers.slice(2, arrDrivers.length)
  
    


})
//Create an array containing two elements from retrunFirstTwoDrivers and returnLastTwoDrivers functions.

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integerValue){
    return function (fare) { 
        return fare * integerValue
        }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}
const selectDifferentDrivers = (arrDrivers, returnFirstOrLast) =>{

   return returnFirstOrLast(arrDrivers);
   
}