const obj = {
    temp: 0,
    //implemente aqui
    get temperatura(){ return this.temp},
    set temperatura(temp){ 
        if(temp<=0) throw new Error("Números negativos não são permitidos!")
        else this.temp = temp
    }
}

//test to throw exception
obj.temperatura = -1