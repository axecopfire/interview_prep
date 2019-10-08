function tripledouble(num1, num2) {
  var counter = {times: 0, char: "", checks: ""};
  var bool1 = 0;
  num1.toString().split("").forEach(el => {

    if(el === counter.char) {
      counter.times++;
    } else {
      counter.char = el;
      counter.times = 1;
    }  
    
    console.log(el, counter);
    if(counter.times === 3) { 
      bool1 = 1;
      counter.checks += counter.char;
    }
  });
  
  counter.times = 0;
  var bool2 = 0;
  
  counter.checks.split("").forEach(el => {
    num2.toString().split("").forEach(check => {
      if(el === check) {
        ++counter.times;
      } else {
        counter.times = 0;
      }    

      if(counter.times === 2) { return bool2 = 1; }
    });
  });
  
  var output = (bool1 + bool2) === 2 ? 1 : 0;
  return output;
}