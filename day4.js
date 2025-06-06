const Trang= (a,b,c)=>{
if(a===b && b===c)return "equilateral"
if(a===b||b===c||c===a)return "isoscles"
return "scalene"

}
console.log(Trang(3,6,2));//equilateral
console.log(Trang(3,5,3));//isoscles
console.log(Trang(3,3,3));//scalene


