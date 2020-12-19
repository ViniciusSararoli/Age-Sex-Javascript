function verificacao() {
  var data = new Date()
  var anoAtual = data.getFullYear()
  var anoNascimento = document.getElementById('anoNascimento')
  var msgAlerta = document.getElementById('alerta')
  var sexo = document.getElementsByName('sexo')
  //var sexoFem = document.getElementById('feminino')
  var homem = document.getElementById('homem')
  var mulher = document.getElementById('mulher')
  //imagem.setAttribute('id', 'foto')
  var genero = ""

  if (anoNascimento.value.length == 0 || anoNascimento.value > anoAtual) {
    msgAlerta.innerHTML = `Verifique`
    anoNascimento.style.border = "solid 1px red"
  } else {
    var idade = anoAtual - Number(anoNascimento.value)
  }

  if (sexo[0].checked) {
    genero = "masculino"
    document.body.style.background = "blue"
    homem.style.display = "block"
  } else {
    genero = "feminino"
    document.body.style.background = "red"
    mulher.style.display = "block"
  }
  msgAlerta.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos`
  //msgAlerta.appendChild(imagem)
}