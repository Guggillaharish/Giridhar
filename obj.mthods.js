var cricketers={
    Dhoni:{type:"btasmen",role:"keeping",score:"185"},
      Raina:{type:"btasmen",role:"fielding",score:"185"},
        Yuvraj:{type:"btasmen",role:"allrounder",score:"185"},
          Sachin:{type:"btasmen",role:"fielding",score:"185"},
            Virat:{type:"btasmen",role:"fielding",score:"185"},
              Shami:{type:"bowler",role:"bowling",wickets:"15"},
                Yadav:{type:"bowler",role:"bowling",wickets:"85"},
                  Ishanth:{type:"bowler",role:"bowling",wickets:"5"},
                  add:function(cricketer,type,role,score){
                     this[cricketer]={type:type,role:role,score:score}
                  }
}
cricketers.add("patel","batsmen","keeping","125");

for(x in cricketers){
console.log(x);
}