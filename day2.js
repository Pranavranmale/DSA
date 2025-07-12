// const hashtag=(str)=>{
//     if(str.length>280 || str.trim().length===0){
//         return false
//     }
//     str=str.split(" ")
//      str=str.map((cm)=>
//     cm.replace(cm[0],cm[0].toUpperCase())
//     //cm.charAt(0).toUpperCase()+cm.slice(1)
//      )
//      str=`#${str.join("")}`
//     console.log(str)
// }
// console.log(hashtag("my name is pranav prakash ranmale")); 

function StringVal(str){
    if(str.trim().length==0){
        return false;
    }
    str=str.split(" ")
    console.log(str);
    str=str.map((cm)=>
        cm.replace(cm[0],cm[0].toUpperCase())
    )
    str=`#${str.join("")}`
    console.log(str);
    
}
console.log(StringVal("pranav prakash ranmale"))