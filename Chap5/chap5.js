// Q1
var a=1;
try{
var x=a+b;
}catch(e){
console.log(e+"Error");
}

//Q2

var a=1;
try{
var x=a+b;
}catch(e){
console.log(e+"Error");
}finally{
    console.log("Final block")
}

//Q3
num=15;

if(num<=18){
    throw new Error("age is not valid");
}
else{
    console.log("Welcome to vote!");
}


// Q.4) Create a user defined exception :

class InvalidNumber extends Error{
    meth(){
        try {
            num=10;
            if (num<20) {
                throw new 
            }
        } catch (error) {
            
        }
    }
    
    
}
