let a = 6
console.log(a);

let student="jane"
student[1]="e"
console.log(student);

const b="42"
console.log(b*10);

let food ="I ate Today"
console.log("length",food.length);
console.log("itematindex3",food[3]);
const extractedCharacters=food.slice(0,4);
console.log({extractedCharacters});
const remainingCharacters=food.slice(4);
console.log({remainingCharacters});
food=food.split(" ")
console.log(food);
food[2]="yesterday"
console.log({food});
food=food.join(" ")
console.log(food);

fu