let txtScore = document.getElementById("score")
console.log(txtScore.innerHTML)

let btnScore = document.getElementById("btn1")
console.log(btnScore.value)

let time = 100
let score =0

setInterval(() => 
{
  time -= 1
  if(time == 0)
  {
    alert("Perdeu")
  }
  console.log(time)
}, 1000);

btnScore.addEventListener("click", teste1)
function teste1()
{
  score =  score + time * 0.05
  console.log(score)
  txtScore.innerHTML = score
}