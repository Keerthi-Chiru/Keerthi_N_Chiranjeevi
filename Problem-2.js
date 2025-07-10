const x = Number(prompt("Enter the value of x: "));
let counter = 1;
if( x == 1){
    console.log(x)
}else{
for(let i = 1; i<x; i++){
    console.log(counter);
    counter += 2;
}
}
