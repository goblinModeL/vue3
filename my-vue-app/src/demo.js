const data=(x,callback)=>{
    if(x>10){
        callback(true)
    }
}

data(11,(result)=>{
    console.log(result)})