// const findLOngestWord= (str) =>{
//     if(str.trim().length===0){
//         return false
//     }
//       strarr=str.split(" ")
//     // strarr=strarr.sort((a,b)=>b.length-a.length)
//     // //console.log(strarr.at(-1))
//     // return strarr[0]  
//     return strarr.reduce((a,b)=>(a.length>b.length?a:b))
// }
// //strarr=word.sort((a,b)=>a-b)
// console.log(findLOngestWord("This day is Good day in the wordlast day"));

const LongWord=(str)=>{
  if(str.trim().length===0){
    return false
  }
  strr=str.split(" ")
  console.log(strr)
  // return strr.reduce((a,b)=>a.length>b.length?a:b)
   strr.sort((a,b)=>b.length-a.length)
   return strr[0]
}

console.log(LongWord("Hey...! my name is Pranav"))
export default {LongWord}