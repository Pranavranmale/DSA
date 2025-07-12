// const removeDuplicateval=(arr)=>{
//     newarr=[... new Set(arr)]
//     return newarr
// }

// console.log(removeDuplicateval([1,2,3,4,2,3]))

const removeDuplicateval=(arr)=>{
    newArr=[...new Set(arr)]
    return newArr
}
console.log(removeDuplicateval([1,2,3,4,5,6,7,1,5,7]));
