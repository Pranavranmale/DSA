// const findvovel=(str)=>{
//     let vovel=['a','e','i','o','u']
//     let arr=str.split('')
//     let count=0
//     for(let char of arr){
//         if(vovel.includes(char.toLowerCase())){
//             count++
//         }
//     }
//     return count
// }
// console.log(findvovel("pranavranmale"));


const CheckVovel=(arr)=>{
    let vovel=["a","e","i","o","u"]
    arr=arr.split("")
    console.log(arr);
    let count=0
    for(let char of arr){
        if(vovel.includes(char.toLowerCase())){
            count++
        }
    }
    return count
}
console.log(CheckVovel("My name is prAnav"));
