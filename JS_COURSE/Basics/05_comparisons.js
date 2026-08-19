/*
console.log(2==3);
console.log(2<3);
console.log(2>3);
console.log(2>=3);
console.log(2<=3);
console.log(2!=3);
*/

/*
console.log("2" > 1);
console.log("02" > 1);
// "2" and "02" will be converted into integer

*/

/*
console.log(null>0);
console.log(null == 0);
console.log(null>=0);

// here '==' and other operators (like >,<,>=,<=)will work differently

console.log(undefined>0);
console.log(undefined == 0);
console.log(undefined>=0);
*/

//strict operator (===) : this will check both datatype and value stored 

let x,y=10;// x is undefined and y=10 , so output will be false 
let str="10";
console.log(x===y);
console.log(x===str);