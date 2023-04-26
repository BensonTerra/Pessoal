const quiz1Question =
[
  {
    pergunta: "Quanto é 1 mais 1?",
    resposta: ["1","2","3","4"],
    solucao: 1
  },
  {
    pergunta: "Quanto é 1 mais 2?",
    resposta: ["1","2","3","4"],
    solucao: 2
  }
]

let question

const porta = document.getElementById("door")
console.log(porta)
const obj1 = document.getElementById("livro")
console.log(obj1)
const chave = document.getElementById("chave")
console.log(chave)

const dialogQuiz = document.getElementById("dialogQuiz")
console.log(dialogQuiz)
const dialogForm =document.getElementById("quizForm");
console.log(dialogForm)
const txtPergunta = document.getElementById("pergunta")
console.log(txtPergunta)
const closeButton = document.getElementById("close");
console.log(closeButton)

obj1.addEventListener("click",renderDialog)
porta.addEventListener("click",checkPorta)
closeButton.addEventListener("click",closeDialog)

function checkPorta()
{
  if (chave.style.display === "block")
  {
    alert("SAISTE DO ER!!");
  }
  else 
  {
    alert("ENCONTRA PRIMEIRO A CHAVE!!");
  }
}

function renderDialog()
{
  //alert("Função TesteDialog")
  dialogQuiz.showModal()
  carregarQuestoes()
}
//renderDialog()

function carregarQuestoes()
{
  const index = Math.floor(Math.random() * quiz1Question.length);
  question = quiz1Question[index]
  console.log(index)

  txtPergunta.innerHTML = question.pergunta

  let resposta1 = document.getElementById("resposta1")
  resposta1.innerHTML = question.resposta[0]
  let resposta2 = document.getElementById("resposta2")
  resposta2.innerHTML = question.resposta[1]
  let resposta3 = document.getElementById("resposta3")
  resposta3.innerHTML = question.resposta[2]
  let resposta4 = document.getElementById("resposta4")
  resposta4.innerHTML = question.resposta[3]

  const answers = document.querySelectorAll("[name = 'answers']")
  answers.forEach( answer => {
    answer.addEventListener("click",checkSuccess)
  })
}

function checkSuccess(event) 
{  
  if (event.target.value == question.solucao)
  {
    chave.style.display = "block";
    porta.style.backgroundColor = "green"
    alert("PARABÉNS, GANHASTE UMA CHAVE");
  }
  else
  {
    alert("FALHASTE, TENTA NOVAMENTE")
  }
  closeDialog()
}

function closeDialog()
{
  dialogForm.reset();
  dialogQuiz.close();
}