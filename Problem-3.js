const x = Number(prompt("Enter the value of x: "));
let counter = 1;

const printres =  (x) => {
    for(let i=1; i<=x; i++){
        console.log(counter);
        counter += 2;
    }
}

if(x%2 == 0){
     printres(x-1);
}else{
    printres(x);
}
