const display = document.getElementById("display");
display.value=0;
let isResult=false;

function appendDisplay(input){
  if(!isResult){
    if(display.value == 0){
      display.value = "";
    }
    display.value += input;
  }
  display.scrollLeft = display.scrollWidth;
}

function clearDisplay(input){
  display.value = 0;
  isResult=false;
}

function calculate(){
  try{
    display.value = eval(display.value);
    isResult=true;
  }catch{
    display.value = "ERROR!";
    isResult=true;
  }
}