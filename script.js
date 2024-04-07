let participantes = [
  {
    nome: 'Guilherme Aquino',
    email: 'gui@gmail.com',
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 10)
  },
  {
    nome: 'Paulo Silva Morais',
    email: 'paulomorais@gmail.com',
    dataInscricao: new Date(2024, 1, 25, 20, 26),
    dataCheckIn: null
  },
  {
    nome: 'Ana Lucia Maria',
    email: 'analucia@gmail.com',
    dataInscricao: new Date(2024, 5, 23, 22, 26),
    dataCheckIn: new Date(2024, 5, 23, 23, 18)
  },
  {
    nome: 'Maria Eduarda',
    email: 'mariaduda@gmail.com',
    dataInscricao: new Date(2022, 3, 23, 22, 26),
    dataCheckIn: new Date(2022, 3, 23, 23, 18)
  },
  {
    nome: 'Raquel Santos',
    email: 'raquelsantos@gmail.com',
    dataInscricao: new Date(2023, 4, 23, 22, 26),
    dataCheckIn: null
  }
]

const criarNovoParticipante = participante => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if (participante.dataCheckIn == null) {
    dataCheckIn = `
    <button 
      data-email="${participante.email}" 
      onclick="fazerCheckIn(event)">
      Confirmar check-in
    </button>
    `
  }

  return `
  <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
          <br>
          <small>
            ${participante.email}
          </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `
}

const atualizarLista = participantes => {
  let output = ''
  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = event => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante existe
  const participanteExiste = participantes.find(
    p => p.email == participante.email
  )

  if (participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = ''
  event.target.querySelector('[name="email"]').value = ''
}

const fazerCheckIn = event => {
  // confirmar se realmente quer fazer o check-in
  const mensagemConfirmacao = 'Tem erteza que deseja fazer o check-in ?'

  if (confirm(mensagemConfirmacao) === false) {
    return
  }

  //encontrar o participante dentro da lista
  const participante = participantes.find(p => {
    return p.email == event.target.dataset.email
  })
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}
