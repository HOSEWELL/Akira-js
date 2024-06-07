{
//     // 1a.
//     let names = ["john", "james", "kelvin", "Hosewell"];
// function getLengths(names) {
//     return names.map(name => name.length);  //(.map())each item in the array
// }
// let lengths = getLengths(names);
// console.log(lengths);

//   // b.
//   let name = ["john", "james", "kelvin", "Hosewell"];
//   function Length(names) {
//     const lengths = [];
//     for (let i = 0; i < names.length; i++) {
//         lengths.push(names[i].length);                // (.push) allow add element to an array
//     }
//     return lengths;
// }
// let length = Length(names);
// console.log(Length);
}
// {

    // 2a.
      const numbers = [10, 5, 20, 8, 15];
      function findLargestNumber(numbers) {
        let largest = numbers[0];
                                 // Initialize largest with the first element of the array
        for (let i=1; i < numbers.length; i++) {   
                 // loop through the array
            if (numbers[i] > largest) {
                largest = numbers[i];
            }
        }
        return largest;
    }
    
    console.log(findLargestNumber("The largest number is:" + largest));

//     // b.
//     function findLargestNumber(numbers) {
//         return Math.max(...numbers);        // used to spread the elements of the numbers array as to math.max
//     }
//     let largestNumb = findLargestNumber(numbers);
//     console.log("The largest number is:", largestNumb);
    
// }

// {
//  // 3a.

//  const vowels = ["a", "e", "i", "o", "u"];

// function identifyVowels(x) {
//     if (vowels.includes(x)) {
//         return "character is a vowel";
//     } else {
//         return "character is consonant";
//     }
// }

// console.log(identifyVowels("a"));

//    //b.


// }

// {
//     //4a.
//     function isEven(number) {
//         return number % 2 === 0;
//     }
//     console.log(isEven(4));

//     //b.
//     function isEven(number) {
//         if (number % 2 === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     console.log(isEven(5)); 
    
//     //c.
//     function isEven(number) {
//         if (number % 2 === 0) {
//             return true;
//         }
//         return false;
//     }
//     console.log(isEven(5)); 
// }

// {
//     //5a.

//     let age = 20
//     function checkAge(age) {
//         if (age >= 18) {
//             return "You are qualified to drive";
//         } else {
//             return "You are not allowed to drive until you turn 18";
//         }
//     }

//     console.log(checkAge(age));
    

// }
// // {
//     //6a.
//     // const books = [
//     //     { title: "Book 1", author: "Alex", pages: 150 },
//     //     { title: "Book 2", author: "paul", pages: 200 },
//     //     { title: "Book 3", author: "Henry", pages: 120 },
//     //     { title: "Book 4", author: "Hosewell", pages: 180 }
//     // ];

//     // function findShortestBook(books) {
//     //     if (books.length === 0) {
//     //         return "No books found.";
//     //     }
    
//     //     let shortestBook = books[0];
    
//     //     for (let i = 1; i < books.length; i++) {
//     //         if (books[i].pages < shortestBook.pages) {
//     //             shortestBook = books[i];
//     //         }
//     //     }
    
//     //     return shortestBook.title;
// // }
// // }

// {
//     //8a.

// }

// {
//     //9a.

//     const array = [5, 5, 8, 5, 7, 3, 5, 9];

//     let removeDuplicates = (array) => {
//         let newarray = [];
//         array.forEach(item => {
//             if (!newarray.includes(item)) {
//                 newarray.push(item);
//             }
//         });
//         return newarray;
//     };
    
//     console.log(removeDuplicates(array));

//     // b.

// let removeDuplicate = (array) => {
//     return Array.from(new Set(arr));
// };

// console.log(removeDuplicates(array));

// }  

// {
//     //10a.

//     const array1 = [4, 5, 6, 7, 8];
//     const array2 = [9, 10, 11, 12, 13];


// }