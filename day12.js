const removeDuplicateval=(arr)=>{
    newarr=[... new Set(arr)]
    return newarr
}

console.log(removeDuplicateval([1,2,3,4,2,3]))