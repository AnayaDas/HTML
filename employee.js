let empName = document.getElementById("name").value;
let empId = document.getElementById("id").value;
let joinDate = document.getElementById("date1").value;
let hoursWorked = document.getElementById("hw").value;
let designation = document.getElementById("desig").value;
let details;
let employeeList = []

class Employee{
    constructor(empName,empId,joinDate,hoursWorked,designation){
        this.empName = empName;
        this.empId = empId;
        this.joinDate = joinDate;
        this.hoursWorked = hoursWorked;
        this.designation = designation;

        if(designation == "Manager"){
            this.salary = hoursWorked*90;
        }
        else if(designation == "Consultant"){
            this.salary = hoursWorked*70;
        }
        else if(designation == "Trainee"){
            this.salary = hoursWorked*45;
        }
    }
    getDetails(){
        return `${this.empName} who is a ${this.designation} will get $${this.salary}`;
    }
}
document.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    employeeList.push(new Employee(empName, empId , joinDate, hoursWorked, designation));
    console.log("Success");
    empName.value = null;
    empId.value = null;
    joinDate.value = null;
    hoursWorked.value = null;
    designation.value = null;
});
function pass(){
    localStorage.clear();
let details = employeeList.map((employee)=>{return employee.getDetails();});
localStorage.setItem('details',JSON.stringify(details));
}