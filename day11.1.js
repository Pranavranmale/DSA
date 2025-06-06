const sumOfnum=(num)=>{
    let arr=Array.from(String(num),Number)
    return arr.reduce((a,c)=>a+=c,0)
}
console.log(sumOfnum(1234));