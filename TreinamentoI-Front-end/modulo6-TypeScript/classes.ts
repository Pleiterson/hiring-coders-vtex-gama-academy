class Data {
  // public dia: number; // a propriedade dia poderá acessar acessada de fora da classe Date
  // private mes: number; // a propriedade mes só poderá ser acessada de dentro da classe Date
  // mes: number; // a propriedade mes só poderá ser acessada de dentro da classe Date
  // ano: number; // por default todas as propriedades nao definidas com os modificadores de acesso são public

  constructor(public dia: number, public mes: number, public ano: number = 1970) {
    // this.dia = dia;
    // this.mes = mes;
    // this.ano = ano;
  }
}

const data = new Data(14, 7, 2021);
console.log(data.dia); // conseguirá acessa a propriedade dia, pois dia é public
// console.log(data.mes); // não conseguirá acessa a propriedade mes, pois mes é private

const data2 = new Data(14, 7);


// Utilizando Modificadores de Acesso
class Carro {
  // velocidadeAtual: number = 0;
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220,
  ) {}

  private alterarVelocidade(delta: number) {
    const novaVelocidade = this.velocidadeAtual + delta;
    
    // se a soma da velocidadeAtual com a aceleracao for menor ou igual a velocidadeMaxima, pode acelerar
    if ((novaVelocidade > 0) && (novaVelocidade <= this.velocidadeMaxima)) {
      this.velocidadeAtual += novaVelocidade;
    } else {
      // se a velocidade for menor que zero, fica zero, senão velocidadeMaxima
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
// carro.velocidadeAtual = 400; // conseguirá acessar, pois a variável velocidadeAtual é public
// carro.velocidadeMaxima = 400;  // não conseguirá acessar, pois a variável velocidadeMaxima é private
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.frear();
carro.frear();
// carro.alterarVelocidade(); // não conseguirá acessar, pois este método alterarVelocidade() é private


// Herança
class Camaro extends Carro{
  private turbo = false;

  constructor() {
    super('Chevrolet', 'Camaro', 500);
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const camaro = new Camaro();
camaro.acelerar(); // pode acessar o método acelerar(), pois a classe Camaro herdou o método da classe Carro
camaro.frear(); // pode acessar o método frear(), pois a classe Camaro herdou o método da classe Carro
camaro.ligarTurbo(); 
// carro.ligarTurbo();  // não pode acessar o método ligarTurbo(), pois este método pertence apenas a classe Camaro e não a classe Carro