const quiz1Question =
[
  {
    pergunta: "Quanto é 1 mais 1?",
    resposta: 2
  },
  {
    pergunta: "Quanto é 1 mais 2?",
    resposta: 3
  },
  {
    pergunta: "Quanto é 1 mais 3?",
    resposta: 4
  }
]

const obj1 = document.getElementById("livro")
console.log(obj1)
const dialogQuiz = document.getElementById("dialogQuiz")
console.log(dialogQuiz)
const closeButton = document.getElementById("close");
console.log(closeButton)
const numQuestion = document.getElementById("nQuestao")
console.log(numQuestion)
const dialogForm =document.getElementById("quizForm");
console.log(dialogForm)
const txtPergunta = document.getElementById("pergunta")
console.log(txtPergunta)
const txtResposta = document.getElementById("resposta")
console.log(txtResposta)

obj1.addEventListener("click",renderDialog)
closeButton.addEventListener("click",closeDialog)

function teste()
{
  alert("Função Teste")
}

function renderDialog()
{
  //alert("Função TesteDialog")
  dialogQuiz.showModal()
  carregarQuestoes()
}
renderDialog()
function carregarQuestoes()
{
  let n=1
  numQuestion.innerHTML = n
  quiz1Question.forEach(question => 
  {
    console.log("ciclo")
    txtPergunta.innerHTML = question.pergunta
  })
  
}

function closeDialog()
{
  dialogQuiz.close();
}