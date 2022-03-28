const rand = (min, max) => {
  min *= 1000
  max *= 1000
  const randomCalc = Math.floor(Math.random() * (max - min + 1)) + min
  return randomCalc
}

const holdOn = (msg, time) => {
  setTimeout(() => {
    console.log(msg)
  }, time)
}

holdOn('Hold 1', rand(1, 3))
holdOn('Hold 2', rand(1, 3))
holdOn('Hold 3', rand(1, 3))

// como ficaria com callback
const randT = (min, max) => {
  min *= 1000
  max *= 1000
  const randomCalc = Math.floor(Math.random() * (max - min + 1)) + min
  return randomCalc
}

const holdOnT = (msg, time, callback) => {
  setTimeout(() => {
    console.log(msg)
    if (callback) callback()
  }, time)
}

holdOnT('callback 1', rand(1, 3), () => {
  holdOnT('callback 2', rand(1, 3), () => {
    holdOnT('callback 3', rand(1, 3))
  })
})

// Trabalhando com PROMISES
const holdOnTree = (msg, time) => {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(new Error('msg precisa ser uma string'))

    setTimeout(() => {
      resolve(msg)
    }, time)
  })
}

holdOnTree('Conexão com DB', rand(1, 3))
  .then(msg => {
    console.log(msg)
    return holdOnTree('Buscando dados na base', rand(1, 4))
  })
  .then(msg => {
    console.log(msg)
    return holdOnTree('Tratando os dados da base', rand(1, 5))
  })
  .then(msg => {
    console.log(msg)
    return holdOnTree(333, rand(1, 6))
  })
  .then(msg => {
    console.log(msg)
  })
  .then(() => {
    console.log('Fim da conexão com DB')
  })
  .catch((err) => {
    console.log('Deu ruim: ', err)
  })
