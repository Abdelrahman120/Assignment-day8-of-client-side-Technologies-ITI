var fruits = ["apple", "strawberry", "banana", "orange","mango"];

console.log(fruits.every(e=> typeof e === "string"));

console.log(fruits.some(e=> e.startsWith("a")));

var newArr=fruits.filter(e=>e.startsWith("b")|| e.startsWith("s"));
console.log(newArr);

var newArr2=fruits.map(e=>"I like "+e);
newArr2.forEach(e=>console.log(e));
