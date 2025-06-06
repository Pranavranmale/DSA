const findvovel=(str)=>{
    let vovel=['a','e','i','o','u']
    let arr=str.split('')
    let count=0
    for(let char of arr){
        if(vovel.includes(char.toLowerCase())){
            count++
        }
    }
    return count
}
console.log(findvovel("pranavranmale"));
