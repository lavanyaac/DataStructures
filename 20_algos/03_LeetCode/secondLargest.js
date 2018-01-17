 //2. write a function to return 2nd Largest number from given array  
      
function secondLargest(arr){
  var num1 = 0;
  var num2 = 0;
  
  for(var i = 0; i<arr.length; i++){
    var v = arr[i];
    if( v !== num1 && v !== num2){
      if(v > num2){
        num2 = v;      
      }else if(v > num1){
        num1 = v;
      }
      if(num1 < num2){
          [num1, num2] = [num2, num1];
      }
    }
  }
  
  return num2;
}

function secondLargest1(arr){
  var num1 = 0;
  var num2 = 0;
  
  for(var i = 0; i<arr.length; i++){
    var v = arr[i];
    if(v > num1){
      num2 = num1;
      num1 = v;
    }else if(v > num2 && v !== num1){
      num2 = v;
    }
  }
  
  return num2;
}

const A = [ 3,4,5,6,4,7,7,7,8,8,10,10,9];
console.log(secondLargest1(A));