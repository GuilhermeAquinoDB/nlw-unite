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
    dataCheckIn: new Date(2024, 1, 26, 21, 15)
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
    dataCheckIn: new Date(2023, 4, 23, 23, 18)
  }
]

const criarNovoParticipante = participante => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  return `
  <tr>
      <td>
        <strong>
          ${participante.nome}
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
