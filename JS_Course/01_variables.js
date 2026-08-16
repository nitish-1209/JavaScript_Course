const a=1234; //cannot be modified or redeclared in the same scope
var b="ram";//can be redeclared in the same scope
let c ="agra";//cannot be redeclared in the same scope
let d;//undefined

console.table({a,b,c,d});

// Prefer not to use var due to its scope issues and hoisting behavior. Use const for values that should not change and let for variables that may change.
