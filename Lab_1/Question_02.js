// 2. Write a JS function to reverse an array using loop or reduce( ). (Without using
// reverse( ) ). 

// function reverseArray(arr){
//     for(let i =0;i<arr.length/2;i++){
//         console.log(arr[i]+" "+arr[arr.length-1-i]);
//         let temp = arr[i];
//         arr[i] = arr[arr.length-i-1];
//         arr[arr.length-i-1] = temp;
//     }
// }

// let arr = [1,2,3,4,5,6]
// let arr = [1,2,2.2,true,null,"MCA"]
let arr = ["abc","def","ghi","jkl","MN)","0"];


console.log(arr);
// reverseArray(arr);
arr = arr.reduce((prev,cur)=>
    [cur, ...prev]
,[])
console.log(arr);