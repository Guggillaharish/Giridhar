var students={
    rakesh:{fname:"raki",lname:"K",marks:20},
     suresh:{fname:"suri",lname:"H",marks:201},
      naresh:{fname:"nari",lname:"I",marks:120},
        harish:{fname:"Hari",lname:"G",marks:210},
        addStudent:function(student,fname,lname,marks){
            this[student]={fname:fname,lname:lname,marks:marks};
           
              
        },
           deleteStudent:function(student){
           delete this[student];
           
              
        }
}
students.addStudent("sathish","sathi","A",100);
students.deleteStudent("rakesh");
for(var x in students){
    console.log(students[x].fname);
}