function verificacao() {
  var data = new Date()
  var anoAtual = data.getFullYear()
  var anoNascimento = document.getElementById('anoNascimento')
  var msgAlerta = document.getElementById('alerta')
  var sexo = document.getElementsByName('sexo')
  var imagem = document.getElementById('imagem')
 


  if (anoNascimento.value.length == 0 || anoNascimento.value > anoAtual) {
    msgAlerta.innerHTML = `Verifique`
    anoNascimento.style.border = "solid 1px red"
  } else {
    var idade = anoAtual - Number(anoNascimento.value)
  }
  
  if (sexo[0].checked) {
    genero = "masculino"
    document.body.style.background = "blue"
    imagem.src="./image/foto-homem.jpg"
  } else {
    genero = "feminino"
    document.body.style.background = "red"
    imagem.src="./image/foto-mulher.jpg"
  }
  msgAlerta.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos`
}