var type=document.getElementById('type');
//classes : 
class person{
    constructor(Name,dob,gender,birthcity){
    this.Name=Name;
    this.dob=dob;
    this.gender=gender;
    this.birthcity=birthcity;
    }
}
class student extends person{
    constructor(Name,dob,gender,birthcity,studentclass){
        super(Name,dob,gender,birthcity);
        this.studentclass=studentclass;
    }
    
}
class empolyee extends person{
    constructor(Name,dob,gender,birthcity,empsalary){
        super(Name,dob,gender,birthcity);
        this.empsalary=empsalary;
    }
}

function showHide(){
    console.log(type.value);
    if(type.value=='student'){
        document.getElementById('s-emp-class').style.display="block";
        document.getElementById('st-emp-class').type="text";
        document.getElementById('lab').innerHTML="Current class";

    }else{
        document.getElementById('s-emp-class').style.display="block";
        document.getElementById('st-emp-class').type="number";
        document.getElementById('lab').innerHTML="salary";

    }
}

document.getElementById('myform').addEventListener('submit',function(e){
    let students=[];
    let employees=[];
    const name=document.getElementById('name').value;
    const dob=document.getElementById('date').value;
    const gender=document.getElementById('gender').value;
    var t = document.getElementById('place');
    const city = t.options[t.selectedIndex].text;
    var v = document.getElementById('type');
    const type = v.options[v.selectedIndex].text;
    const student_class=document.getElementById('st-emp-class').value;
    const empolyee_sal=student_class;
    console.log(name,dob,gender,city,type,student_class);

     if(type==='Student'){
         const student1=new student(name,dob,gender,city,student_class);
         studentAddToList(student1);
         students.push(student1);
     }
     else{
        const emp=new empolyee(name,dob,gender,city,empolyee_sal);
        employees.push(emp);
        empAddToList(emp);
    }
    clearin();
    e.preventDefault();

})



function studentAddToList(student){
   const st_tbl=document.getElementById('st-table');
   const row=document.createElement('tr');
   row.innerHTML=`
   <td>${student.Name}</td>
   <td>${student.dob}</td>
   <td>${student.gender}</td>
   <td>${student.birthcity}</td>
   <td>${student.studentclass}</td>
   `;
   st_tbl.appendChild(row);

}

function clearin(){
    document.getElementById('name').value='';
    document.getElementById('date').value='';
    document.getElementById('st-emp-class').value='';
    document.getElementById('gender').value='';
    document.getElementById('type').value='';
    document.getElementById('place').value='';
    

}


function empAddToList(empolyee){
    const employee_tbl=document.getElementById('emp-table');
    const row=document.createElement('tr');
    row.innerHTML=`
    <td>${empolyee.Name}</td>
    <td>${empolyee.dob}</td>
    <td>${empolyee.gender}</td>
    <td>${empolyee.birthcity}</td>
    <td>${empolyee.empsalary}</td>
    `;
    employee_tbl.appendChild(row); 
 }
