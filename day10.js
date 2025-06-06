const arrayAreEqual=(arr1,arr2)=>{
    if(arr1.lenght!==arr2.lenght){
        return false
    }
    return arr1.every((curval,index)=>curval===arr2[index])
}
console.log(arrayAreEqual([1,2,3],[1,4,3]));
