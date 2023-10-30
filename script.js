let x = Math.floor((Math.random() * 10) + 1);
let guess=1;
const btn = document.getElementById('btn');
btn.addEventListener("click", function handleClick(event) {
    event.preventDefault();
    const y = document.getElementById("input");
    a=y.value;
  if (a<=10 &&a>=1){
  if (a==x) { 
  alert("You have guessed it correctly in "+guess +" guess");
   x = Math.floor((Math.random() * 10) + 1);
   guess=1;
  }
  else if (a>x) { 
    alert("Guess something lesser than this number.");
    guess++;
  }
  else { 
    alert("Guess something greater than this number.");
    guess++;
  }
}
else
{
    alert("Input format is invalid"); 
    guess++; 
}
  y.value='';
});




