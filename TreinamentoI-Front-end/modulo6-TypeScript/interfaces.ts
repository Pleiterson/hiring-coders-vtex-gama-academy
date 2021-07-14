interface Usuario {
  nome: string,
  email: string,
  address?: string
}

function getUser() {
  return {
    nome: 'Pleiterson',
    email: 'pleiterson@plei.com'
  }
}

function setUser() {
  // ...
}