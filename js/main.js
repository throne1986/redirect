$(document).ready(function(){
    var info = {
        car_driver: "Jeff",
        car_speed: 80,
        car_manufaacturer: "BMW",
        car_model: 200,
        car_color: "color",
        // car_status: function(){
        //        return this.car_color + " " + this.car_driver;
        // }
    }
    console.log(info);

var text = "";
var x;
  for(x in info){
      info.nationality ="Tanzania";
      console.log(info.nationality);
      text =info[x];   
      document.getElementById('car_details').innerHTML += text + "<br>";
    //   document.getElementById('car_status').innerHTML = text
  }
  

  // object constructor 
  function Person(first, last, age, eye){
      this.firsname = first;
      this.lastname= last;
      this.age =age;
      this.eye = eye;
      this.nationality ="Kenya";
  }

  var myDaughter = new Person("Geofrey", "Zellah", 23, "black");
  console.log(myDaughter);
  var myMother = new Person("Joyce", "Zellah", 23, "black");
  console.log(myMother);

  function multiply(x, y){
      return x*y;
  }
 console.log(multiply(2,3));

 var m =(x,y) =>x*y;
 console.log(m(2,3));

 var m2 =(x,y,z) =>(x*y/z);
 console.log(m2(3,3,4));
});