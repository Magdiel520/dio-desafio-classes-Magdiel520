class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque indefinido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi('Merlin', 1000, 'mago');
  const heroi2 = new Heroi('Sun Tzu', 35, 'guerreiro');
  const heroi3 = new Heroi('KinChun', 65, 'monge');
  const heroi4 = new Heroi('Bruce Lee', 30, 'ninja');
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
  