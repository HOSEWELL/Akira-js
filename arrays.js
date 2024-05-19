const nums = [1,2,3,4,5,6,7,8,];
nums[2]=10;
console.log(nums);

console.log(nums[4]);

const double = nums.map((item)=>item*2);
console.log(double);

//loops in arrays
const newArray=[];
for(let i=0; i<nums.length; i++){
    const addByTwo= nums[i]+=2
    console.log(addByTwo);
    newArray.push(addByTwo)
}
console.log(newArray);
