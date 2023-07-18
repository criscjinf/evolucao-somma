abstract class Pessoa {
  private listaAmigos = [];
  private nome: string;
  private meuNome() {
    return this.nome;
  }
  constructor(nome: string) {
    this.nome = nome;
  }

  fullName() {
    return this.meuNome() + ' alguma coisa';
  }
  getAmigos(name: string) {
    return this.listaAmigos[name];
  }
  setNovoAmigo(amigo: object) {
    this.listaAmigos.push(amigo);
  }
  static sexo() {
    return 'Feminino';
  }
  abstract cpf(): string;
}

interface Adulto {
  trabalho: Function;
}

class TesteFilha extends Pessoa implements Adulto {
  cpf(): string {
    return '123456'
  }
  trabalho() {

  };

  idade() {
    return 13;
  }
}

class TesteFilha2 extends Pessoa implements Adulto {
  cpf(): string {
    return '987654231'
  }
  trabalho() {

  };
  static sexo() {
    return 'Masculino'
  }

  minhaIdade() {
    return 17;
  }
}

const testefilha1 = new TesteFilha('Ariane');

const testefilha2 = new TesteFilha2('Cristiano');
// console.log(teste.fullName())

//Não é possível instanciar uma classe abstrata
const pessoa = new Pessoa('teste')

function registraPessoas(pessoa: Pessoa) {
  const conexao = {insert: () => void }
  pessoa.cpf()
  conexao.insert()
}


registraPessoas(testefilha2)