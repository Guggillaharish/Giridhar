function myFun(number){
    return function(number1){
        function not(){
            return "yes equak";
        }
         function yes(){
            return "not equak";
        }
       if(number==number1){
           return not();
       }
       else{
           return yes();
       }
    }
}
var z= myFun(10);
z(10);