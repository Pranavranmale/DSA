// const arrayAreEqual=(arr1,arr2)=>{
//     if(arr1.lenght!==arr2.lenght){
//         return false
//     }
//     return arr1.every((curval,index)=>curval===arr2[index])
// }
// console.log(arrayAreEqual([1,2,3],[1,4,3]));
const arrayAreEqual=(arr1,arr2)=>{
    if(arr1.length !==arr2.length){
       return false
    }
    return arr1.every((curval,i)=>curval===arr2[i])
}
console.log(arrayAreEqual([1,2,3],[1,2,3]));
console.log(arrayAreEqual([1,2,3],[1,2,3,4]));
console.log(arrayAreEqual([1,2,3,5],[1,2,3,4]));
