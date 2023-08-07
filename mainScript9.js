let  tod = new Date();
let day = tod.getDay()
let mon = tod.getMonth()

let mybirthday = new Date(1997,3,31)
let day1 = mybirthday.getDay()
let mon1 = mybirthday.getMonth()

let isitmybirthday = day1==day && mon1==mon
console.log(isitmybirthday)