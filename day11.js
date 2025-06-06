// const sumofNumber=(num)=>{
// let sum=0
// while(num>0){
//     sum+=num%10
//     num=Math.floor(num/10)
// }
// return sum
// }

// console.log(sumofNumber(1234));

const sumofdigits=(num)=>{
    let arr=Array.from(String(num),Number)
    return arr.reduce((a,c)=>a+=c,0)
}
console.log(sumofdigits(1234));

