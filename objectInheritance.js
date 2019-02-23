/*base class*/
function student (name,age,sex){
this.name=name;
this.age=age;
this.sex=sex;
}

student.prototype={
    add:function(){
        console.log("added");
    },
    dete:function(){
        console.log("deleted");
    }
};

var sandy=new student("sadya",28,"F");
var hari=new student("hari",25,"M");
hari.add();

/* subclass from base student class*/
function employ (lname,marks,rollnumber){
this.lname=lname;
this.marks=marks;
this.rollnumber=rollnumber;
}
employ.prototype=new student();
var ajay=new employ("ajju",28,"F");
ajay.add();  