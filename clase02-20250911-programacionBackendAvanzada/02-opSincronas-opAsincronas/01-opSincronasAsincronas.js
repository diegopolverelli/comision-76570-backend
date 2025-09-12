let cont=1

// console.log(`op ${cont}`)
// cont++
// console.log(`op ${cont}`)
// cont++
// console.log(`op ${cont}`)
// cont++
// console.log(`op ${cont}`)
// cont++



let i01=setInterval(() => {
    console.log(`op ${cont}`)
    cont++
    if(cont>10){
        clearInterval(i01)
    }
}, 500);

let cont2=100
let i02=setInterval(() => {
    console.log(`op ${cont2}`)
    cont2++
    if(cont2>103){
        clearInterval(i02)
    }
}, 1000);

// setInterval(() => {
    
// }, 3000);

















