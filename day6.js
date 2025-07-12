const isPalindrom=(str)=>{
    str=str.toLowerCase().replace(/\W/g, "")
    ss=str.split("").reverse().join("")
    return str===ss?true:false
    
}
console.log(isPalindrom("Raecear"))
console.log(isPalindrom("Madam, in Eden, I'm Adam "));
console.log(isPalindrom("Pranav"));

