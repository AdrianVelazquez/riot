// -----------------------------JS Array Methods
// src: https://www.youtube.com/watch?v=rRgD1yVwIvE
const companies = [
  {name: "Company One", category: "Finance", start: 1956, end: 2001},
  {name: "Company Two", category: "Marketing", start: 1989, end: 2011},
  {name: "Company Three", category: "Retail", start: 1976, end: 2016},
  {name: "Company Four", category: "Technology", start: 2015, end: 2018},
  {name: "Company Five", category: "Auto", start: 1980, end: 2019},
  {name: "Company Six", category: "Retail", start: 2012, end: 2017},
  {name: "Company Seven", category: "Finance", start: 2014, end: 2017},
  {name: "Company Eight", category: "Marketing", start: 2018, end: 2019},
  {name: "Company Nine", category: "Retail", start: 2013, end: 2015},
  {name: "Company Ten", category: "Finance", start: 1984, end: 2017}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ----------------------------------------------------------------------------- forEach()
// loop through an array, does not return anything back, just loops through data
// takes a synchronus callback function
// can take three parameters
//iterator created as parameter in callback, then called in the function to use
companies.forEach(function(company){
  console.log(company);
  // console.log(company.name);
  // console.log(company.category);
});

// ----------------------------------------------------------------------------- filter()
// filter things out from an array
// filter ages that are greater than or equal to 21
const canDrink = ages.filter(function(age){
  if(age >= 21){
    return true;
  };
});
console.log(canDrink);

// filter arrow function with a condition
const canDrink2 = ages.filter(age => age >= 21);
console.log(canDrink2);

// const stillOpen = companies.filter(company => companies.end >= 2019);
// filter out companies that are still open today that are in the auto category
const stillOpen = companies.filter(function(company){
  if(company.end >= 2019 && company.category === "Auto"){
    return true
  };
});
console.log(stillOpen);

// filter out retail companies
const retailCompanies = companies.filter(function(company){
  if(company.category === "Retail"){
    return true;
  };
});
console.log(retailCompanies);

// filter out finance companies using an arrow function and conditional
const financeCompanies = companies.filter(company => company.category === "Finance");
console.log(financeCompanies);

// filter out companies that started in the 1980's
// using an arrow function and conditional
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <=1989));
console.log(eightiesCompanies);

// filter out companies that lasted more than 10 years
const tenur = companies.filter(company => (company.end - company.start >= 10));
console.log(tenur);
// ----------------------------------------------------------------------------- map
// sort
// reduce
