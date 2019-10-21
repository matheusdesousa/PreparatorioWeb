function try_catch(){
    try{
        if (Math.random() > 0.3)
            throw new Error()
            return
    }catch(e){

    }finally{
        console.log("Esta mensagem sempre será exibida")
    }
}

try_catch()
