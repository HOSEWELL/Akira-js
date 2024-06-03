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



  //1st element 
 { let arr1 = [3, 7, 34, 90, 12];
let lastElement = arr1[arr1.length - 1];
console.log(lastElement);
 }


{
    let arr2 = [true, "green", "where", 12, 56];
let lastElement = arr2[arr2.length - 1];
console.log(lastElement);
}


//join into a string
{
let myPets = ["Cow", "Python", "Snake", "Dog"];
let joinedString = myPets.join(", ");
console.log(joinedString);
}

// sort the arrays
{
let arr = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr.sort(function(a, b) {
    return a - b;
});

console.log(arr); 

}
// sort the string
{
    let word = "lufituaeb";

    let reversedWord = word.split('').reverse().join('');

console.log(reversedWord); 
}

//remove duplicate from arrrays
{
    let array=["apple","mango","apple","orange", "mango", "mango"]
    let removeDuplicate = (array)=>{
        let newarray = [];
        array.forEach(item =>{
            if(!removeDuplicate.includes(item)){
                removeDuplicate.push(item)
            }
        })
        return newarray;
    }
    console.log(removeDuplicate(array));
    }