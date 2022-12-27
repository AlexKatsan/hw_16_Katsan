const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];

// Task 1
const isMarried = database.filter(function (key) {
return key.isMarried === true;
})
console.log(isMarried)

// Task 2
const sortAge = database.sort(function (ageValue1, ageValue2) {
return ageValue1.age - ageValue2.age
})
console.log(sortAge)

// Task 3
const avgAge = database.reduce(function (accum, value, index, array) {
    accum += value.age
    if (index === array.length - 1) {
        return accum / array.length
    }
    return accum
},0)
console.log(avgAge)

// Task 4
const statisticCountry = database.reduce(function (accum, value) {
    if(!accum[value.country]){
        accum[value.country] = 1
    }else {
        accum[value.country] = accum[value.country] + 1
    }
    return accum
}, {})
console.log(statisticCountry)

// Task 5
// Married person sorted ASC by name
const marriedASC = isMarried.sort(function (value1, value2) {
    if (value1.name < value2.name) return -1;
    if (value1.name > value2.name) return 1;
    if (value1.name === value2.name) return 0;
        })
console.log(marriedASC)

// Not married DESC by age
const notMarried = database.filter(function (key) {
    return key.isMarried !== true;
})
const notMarriedAgeDesc = notMarried.sort(function (value1, value2) {
    return value2.age - value1.age
})
console.log(notMarriedAgeDesc)

// Average age of married person
const avgAgeMarried = isMarried.reduce(function (accum, value, index, array) {
    accum += value.age
    if (index === array.length - 1) {
        return accum / array.length
    }
    return accum
},0)
console.log(avgAgeMarried)