const myBox = document.getElementById("myBox");
const movDis = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "😮";

  event.preventDefault();

  if(event.key === 'ArrowLeft' || event.key === 'a'){
    x -= movDis;
  }else if(event.key === 'ArrowRight' || event.key === 'd'){
    x += movDis;
  }else if(event.key === 'ArrowUp' || event.key === 'w'){
    y -= movDis;
  }else if(event.key === 'ArrowDown' || event.key === 's'){
    y += movDis;
  }
  myBox.style.marginTop = `${y}px`;
  myBox.style.marginLeft = `${x}px`;
});

document.addEventListener("keyup", event => {
  myBox.style.backgroundColor = "aqua";
  myBox.textContent = "😀";
});
