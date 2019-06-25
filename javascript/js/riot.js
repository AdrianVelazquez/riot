// -----------------------------JS Array Methods
// src: https://www.youtube.com/watch?v=rRgD1yVwIvE
const companies = [
  {name: "Company One", category: "Finance", start: 1956, end: 2001},
  {name: "Company Two", category: "Marketing", start: 1989, end: 2011},
  {name: "Company Three", category: "Retail", start: 1976, end: 2016},
  {name: "Company Four", category: "Technology", start: 2015, end: 2018},
  {name: "Company Five", category: "Auto", start: 1980, end: 2019},
  {name: "Company Six", category: "Technology", start: 2012, end: 2017},
  {name: "Company Seven", category: "Finance", start: 2014, end: 2017},
  {name: "Company Eight", category: "Marketing", start: 2018, end: 2019},
  {name: "Company Nine", category: "Retail", start: 2013, end: 2015},
  {name: "Company Ten", category: "Finance", start: 1999, end: 2017}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach - loop through an array, does not return anything back, just loops through data
// takes a synchronus callback function
// can take three parameters
//iterator created as parameter in callback, then called in the function to use
companies.forEach(function(company){
  console.log(company);
  // console.log(company.name);
  // console.log(company.category);
});

// filter - filter things from an array
const canDrink = ages.filter(function(age){
  if(age >= 21){
    return true;
  };
});
console.log(canDrink);

// filter arrow function with a condition
const canDrink2 = ages.filter(age => age >= 21);
console.log(canDrink2);
// map
// sort
// reduce
