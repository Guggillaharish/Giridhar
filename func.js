function hello(a,b){
 
    return  function hi(){
       if(a==b){
            return "correct";
       }
        else{
            return "wrong";
        }
    }
}
var z= hello(10,1);
z();