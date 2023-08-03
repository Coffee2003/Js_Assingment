let employee=[];

const form=document.getElementById('form');
const emplist=document.getElementById('emplist');

function validate(event){
    const name=document.getElementById('name');
    const id=document.getElementById('id');

    if (name.value.trim()==="") {
        alert("Please enter your name");
        return false;
    }
    if (id.value>=0 && id.value<=9) {
        alert("Please enter your id");
        return false;
    }
    if (name.value && id.value !=="" ) {
        alert("submitted")
    }
}

form.addEventListener('submit',addEmp);

function addEmp(event){
    event.preventDefault();
    validate();

    const name=document.getElementById('name').value;
    const id=document.getElementById('id').value;

    const emp={name,id};
    employee.push(emp);
    console.log(employee);
    displayEmployee(); 
}
function displayEmployee(){
    emplist.innerHTML="";
    
    employee.forEach((emp,index)=>{
        const empDiv=document.createElement('div');
        empDiv.innerHTML=`<strong>Name :</strong> ${emp.name}, <strong>Id :</strong> ${emp.id}
        <button onclick="deleteEmp(${index})">Delete</button>`;
        
        emplist.appendChild(empDiv);
    })
}
function deleteEmp(index){
    employee.splice(index,1);
    displayEmployee();
}
