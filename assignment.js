// count the consonants in each string
// let str = ["hello", "world", "javascript", "programming"];

// function countConsonants(str) {
//     const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
//     let count = 0;
//     for (let char of str) {
//         if (consonants.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// str.forEach((string) => {
//     console.log(`${string} = ${countConsonants(string)}`);
// });

    // solution two;
    // let strings = ["hello", "world", "javascript", "programming"];

    // function count(strings) {
    //     const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    //     let counts = []; 
    
    //     strings.forEach((str) => {
    //         let count = 0;
    //         for (let char of str) {
    //             if (consonants.includes(char)) {
    //                 count++;
    //             }
    //         }
    //         counts.push(count);
    //     });
    
    //     return counts;
    // }
    
    // console.log(count(strings));

    // quiz(2)count the times a number appears in object
//solution 1 
//    const numb = [1, 2, 3, 4, 1, 2, 2, 3, 3, 3];
// function countDuplicates(numb) {
//     let counts = {};
//     for (let i = 0; i < numb.length; i++) {
//         let num = numb[i];
//         if (counts[num] === undefined) {
//             counts[num] = 1;
//         } else {
//             counts[num]++;
//         }
//     }
//     let duplicatesCount = 0;
//     for (let num in counts) {
//         if (counts[num] > 1) {
//             duplicatesCount++;
//         }
//     }
//     return duplicatesCount;
// }

// console.log(countDuplicates(numb));

//     // solution(2)

//     const numbers = [1, 2, 3, 4, 1, 2, 2, 3, 3, 3];
//     function countDuplicates(numbers) {
//         let duplicatesCount = 0;
//         for (let i = 0; i < numbers.length; i++) {
//             let count = 0;
//             for (let j = 0; j < numbers.length; j++) {
//                 if (numbers[i] === numbers[j]) {
//                     count++;
//                 }
//             }
//             if (count > 1) {
//                 duplicatesCount++;
//             }
//         }
//         return duplicatesCount;
//     }
    
//     console.log(countDuplicates(numbers));

//     //quiz (3)
//     //solution 1
//      const products = [
//         { name: "Product 1", price: 950 },
//         { name: "Product 2", price: 570 },
//         { name: "Product 3", price: 700 }];

//     function applyDiscount(products) {
//         for (let i = 0; i < products.length; i++) {
//             products[i].price *= 0.9;
//         }
//         return products;
//     }
//     console.log(applyDiscount(products));

//     //solution (2)
//      const products = [
//         { name: "Product 1", price: 500 },
//         { name: "Product 2", price: 2000 },
//         { name: "Product 3", price: 3000 }
//     ];
//     function applyDiscount(products) {
//         products.forEach(product => {
//             product.price *= 0.9;
//         });
//         return products;
//     }
    // console.log(applyDiscount(products));
    

    // quiz (4)
    //solution 1
    //   const studentScores = {
    //     "Joseph": 85,
    //     "Ellen": 92,
    //     "Mike": 78,
    //     "Shanice": 92};

    // function findTopScorer(students) {
    //     let topScorer = "";
    //     let highestScore = Number.Min-value;
    
    //     const studentNames = Object.keys(students);
    //     const numOfStudents = studentNames.length;
    
    //     for (let i = 0; i < numOfStudents; i++) {
    //         const student = studentNames[i];
    //         const score = students[student];
    
    //         if (score > highestScore) {
    //             topScorer = student;
    //             highestScore = score;
    //         }
    //     }
    
    //     return topScorer;
    // }
  
    // console.log(findTopScorer(studentScores));

    //quiz(5)
    //solution 1;
    //    const products = [{ name: "mango", price: 100 },
    //     { name: "apple", price: 200 },
    //     { name: "grape", price: 300 }];
    
    // function findProductByName(products, name) {
    //     const proName = "mango";
    //     for (let i = 0; i < products.length; i++) {
    //         if (products[i].name === name) {
    //             return products[i];
    //         }
    //     }
    //   console.log(findProductByName(products, name));
    // }

    // quiz(6)
    // solution,.
//     const colors = ["red", "green", "blue", "yellow", "orange"];

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i].toUpperCase());
// }

// solution(2)
// const colors = ["red", "green", "blue", "yellow", "orange"];

// colors.forEach((color) => {
//     console.log(color.toUpperCase());
// });

//quiz(7)
// solution  ****!!return

// const numbers = [5, 3, 9, 1, 7];
// function findMinMax(numbers) {
//     let min = numbers[0];
//     let max = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         const currentNumber = numbers[i];
//         if (currentNumber < min) {
//             min = currentNumber;
//         } else if (currentNumber > max) {
//             max = currentNumber;
//         }
//     }

//     return { min,max };
// }
// console.log((findMinMax(numbers))) 

//quiz(8)
//solution;;
// const arr = [1, 2, 3, 4, 5];

// function removeAtIndex(array, index) {
//     array.splice(index);
//     array.pop();

//     return array;
// }

// const indexToRemove = 2;
// const result = removeAtIndex(arr, indexToRemove);
// console.log(result); 

//quiz(9);
// solution;;
class Book {
    constructor(title, author, totalCopies) {
        this.title = title;
        this.author = author;
        this.totalCopies = totalCopies;
        this.availableCopies = totalCopies;
    }

    checkout() {
        if (this.availableCopies > 0) {
            console.log(`"${this.title}" by ${this.author} has been checked out. Remaining copies: ${this.availableCopies}`);
        } else {
            console.log(`Sorry, "${this.title}" by ${this.author} is currently unavailable.`);
        }
    }

    returnBook() {
        if (this.availableCopies < this.totalCopies) {
            console.log(`"${this.title}" by ${this.author} has been returned. Remaining copies: ${this.availableCopies}`);
        } else {
            console.log(`All copies of "${this.title}" by ${this.author} have already been returned.`);
        }
    }
}

const book1 = new Book("Africa my Homeland", "Rachael W.J", 3);
const book2 = new Book("The way home", "Samson Walker", 2);

book1.checkout(); 
book1.returnBook(); 

book2.checkout(); 
book2.returnBook(); 









    
    
    
