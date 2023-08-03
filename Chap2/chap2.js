//Q1
const student2={
    name:"sahil",//Composition
    rollno:12,//Composition
    address:"XYZ",//Composition
    hobbies:['Cooking','Cricket','Table Tennis'],//Aggregation
    marks:{//Composition
        maths:92,
        science:88,
        english:71
    },
    displayInfo:function(){
        console.log(`My name is ${this.name} and my rollno is ${this.rollno}`)
    }
}

student2.displayInfo();
