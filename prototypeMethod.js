/*1 ttype of object creation with new keyword*/
var obj= new Object();
obj.name="harish";
console.log(obj)
/*2 ttype of object creationwith literal*/
var obj1={name:"hari",lname:"g",
add:function(name,lname){
   this[name]=name;
   this[lname]=lname;
}
};
obj1.add("sandy","gajula");
console.log(obj1);
/*3 ttype of object creation with constructor function*/
function customer(name,phone){
this.name=name;
this.phone=phone;
this.details=function(){
    return this.name+" "+this.phone;
}

}
var sandy=new customer("sandy",123);
var harish=new customer("haris",143);


harish.details();
sandy.details();

/*4 ttype of object creation with Object.create() function*/
    var shoe={size:5,gender:"female"};/*from this shoe we can creat new one by inheriting it's properties it will used as blueprint*/
    var anOtherShoe=Object.create(shoe);
     anOtherShoe.size=6;
     anOtherShoe.color="blue";
    console.log(anOtherShoe);
     


var obj= new Object();
obj.name="harish";
console.log(obj.name)

obj.hello=function (name) {
    return name;
}
var x=obj.hello("guggilla")
console.log(x);