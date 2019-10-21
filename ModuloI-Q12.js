let a = true
let b = true

//const value = a? b? 1 : -1 : 0

if (a){
    if (b){
        value = 1
    }else{
        value = -1
    }
}else{
    value = 0
}

/*
 *print 1 if a and b are both "true"
 *print -1 if a is "true" and b is "false"
 *print 0 if a and b are both "false"  
 */
console.log(value)

