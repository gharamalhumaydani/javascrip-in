let first = 0
let second = 1
for(let i =1; i<=20; i++){
    console.log(first)
    let Fibonacci= first + second
    first = second 
    second = Fibonacci
}
