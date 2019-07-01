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
// create new arrays from one array

// create array of company names from companies array
const companyNames = companies.map(function(company){
  return company.name;
});

console.log(companyNames);

// create an array of company names and end and start dates
// company info using an es6 template string in an arrow function
// variable syntax
const companyInfo = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyInfo);

// get the square root of all ages in the ages array
const agesSquared = ages.map(age => Math.sqrt(age));
console.log(agesSquared);

// retrun an array with average of all numbers in the ages array
const sum = ages.reduce((previous, current) => current += previous);
const agesAvg = ages.map(age => sum / ages.length);
console.log(agesAvg);

// chaining map() Methods
const ageMap = ages
  .map(age => Math.sqrt(age))// get the square root of the ages in the ages array
  .map(age => age * 2);// then, multiply each number in the array times 2
console.log(ageMap);

// ----------------------------------------------------------------------------- sort
// return an array of companies, sorted by start year
// compare start dates, return 1, or -1 to place companies in a sorted array
// will compare companies for each iteration
const sortedCompanies = companies.sort(function(company1, company2){
  if(company1.start > company2.start){
    return 1;
  }else{
    return -1;
  }
});
console.log(sortedCompanies);

// sort companies by end dates using an arrow function with a ternary operator(?) for a conditional statement
const companiesEnd = companies.sort((a,b) => (a.end < b.end ? 1 : -1));
console.log(companiesEnd);

// sort through the ages from lowest to highest
const sortAges = ages.sort((a,b) => a - b);
console.log(sortAges);

// ----------------------------------------------------------------------------- reduce
const ageSum = ages.reduce(function(total, age){
  return total + age;
}, 0);
console.log(ageSum);

// add all ages and multiply times 2 - for loop
let ageTimes = 0;
for(let i = 0; i < ages.length; i++){
  ageTimes += ages[i] * 2;
};
console.log(ageTimes);

// add all ages and multiply times 2 - arrow function
// the 0 is set as the starting point for the reduce method
const ageMultiplied = ages.reduce((a, b) => a + (b * 2), 0);
console.log(ageMultiplied);

// get the range of total years for all companies
const totalYears = companies.reduce(function(total, company){
  return total + (company.end - company.start);
}, 0);
console.log(totalYears);

// get the range of total years for all companies using an arrow function
const totalCompanyYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalCompanyYears);

// ----------------------------------------------------------------------------- combined Methods
