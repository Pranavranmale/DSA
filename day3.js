// const countChar=(word,char)=>{
//     word=word.toLowerCase()
//     char=char.toLowerCase()
//     totalCount=word.split("").reduce((a,b)=>{
//         if(b===char){
//             a++
//         }
//         return a
//     },0)
//     return totalCount
// }
// console.log(countChar("PranavPrakashRanmale","r"))

const countChar=(str,char)=>{
    str=str.toLowerCase()
    char=char.toLowerCase()
    totalWord=str.split("").reduce((a,b)=>{
        if(b===char){
            a++
        }
        return a
    },0)
    return totalWord
}
console.log(countChar("Pranav Prakash Ranmale","r"))