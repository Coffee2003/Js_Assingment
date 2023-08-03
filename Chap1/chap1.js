// Q1
const student1={
    name:"sahil",//Composition
    rollno:12,//Composition
    address:"XYZ",//Composition
    hobbies:['Cooking','Cricket','Table Tennis']//Aggregation
}

//Q2

const student2={
    name:"sahil",//Composition
    rollno:12,//Composition
    address:"XYZ",//Composition
    hobbies:['Cooking','Cricket','Table Tennis'],//Aggregation
    marks:{//Composition
        maths:92,
        science:88,
        english:71
    }
}
console.log(student2.marks.maths)

//Q3

class Emp{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
}

const emp=new Emp(1,"Sahil",120000);
console.log(emp)


//Q4
//global
const globalconst="globalconst";
var globalvar="globalvar"
let globallet="globallet"


function print1() {
    console.log(globalconst);
    console.log(globalvar);
    console.log(globallet);
}

//local

function print2() {
    const localconst="localconst";
var localvar="localvar"
let locallet="locallet"
}
//Not able to access the local variables outside the function
console.log(localconst);
    console.log(localvar);
    console.log(locallet);

//blocked scoped && Function scoped

function print3() {
    if(true){
        let block="Blocked_scoped"
        var functionvar="Function scoped"
    }
    //Not able to access the block variable because it is blocked scoped
    console.log(block);
    //Able to access the functionvar variable because it is function scoped
    console.log(functionvar);
}




