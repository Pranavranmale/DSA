// const avgNum=(arr)=>{
//     let total=arr.reduce((a,c)=>a+c,0)
//     return total/arr.length
// }

// console.log(avgNum([1,2,3]));
const avgNum=(arr)=>{
   let num=arr.reduce((a,b)=>a+b,0)
    console.log(num);
    return num/arr.length
}
 console.log(avgNum([1,2,3,6,8,5]));