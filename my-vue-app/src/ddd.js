const a=[10,20,30,40]
const b=[10,100,200,300]
b.forEach(item=>{
    const ref=a.find(i=>i===item)
    console.log(ref)
    if(ref){
        b.push(ref)
    }
})
console.log(b)