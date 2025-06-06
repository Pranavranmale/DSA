const countChar=(word,char)=>{
    word=word.toLowerCase()
    char=char.toLowerCase()
    totalCount=word.split("").reduce((a,b)=>{
        if(b===char){
            a++
        }
        return a
    },0)
    return totalCount
}
console.log(countChar("PranavPrakashRanmale","r"))