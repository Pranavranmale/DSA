const avgNum=(arr)=>{
    let total=arr.reduce((a,c)=>a+c,0)
    return total/arr.length
}

console.log(avgNum([1,2,3]));
