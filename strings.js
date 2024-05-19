//extract the first four characters
{
    let a= "beautiful";
const extract = a.slice(0, 4);
console.log(extract);
}

//insert string at tenth index

{
    let food ="I did not have appetite today"
food=food.split(" ")
console.log(food);
food[10]="eat"
console.log({food});
}


//how many times the string appears("the" and "s")
{

    let story = "She sells sea shells at the sea shore";
const a = "the";
const b= "s";
function countOccurrences(mainStr, subStr) {
    return mainStr.split(subStr).length - 1;
}
const countThe = countOccurrences(story.toLowerCase(), a.toLowerCase());
const countS = countOccurrences(story.toLowerCase(), b.toLowerCase());

console.log("Occurrences of 'the':", countThe);
console.log("Occurrences of 's':", countS);
}

//convert string to uppercase
{
    let a= "CONfidant";
const upperCaseString = a.toUpperCase();

console.log(upperCaseString);
}

// convert string to lowercase

{
  let b="beuatiFUL"
  const lowerCaseString = b.toLowerCase()

  console.log(lowerCaseString);
}

// convert string to title case

{
   let c="A busy office"
   let titleCase= c.toTitleCase()

   console.log(titleCase);
}

//find the word in the string 
//(market)

//{

//let string1= "The lady went to the market with her sister"
//const wordToFind = "market";
//const a = string1.split(" ");

//console.log(a);
  //  }