class Calculadora {

  eInteiro(a) {
    return Number.isInteger(a)
  }

  soma(a, b ) {
    if (!this.eInteiro(a) || !this.eInteiro(b)) {
      return "Os valores informados não são inteiros"
    }else{
      return a + b
    }
  }

  subtracao(a, b) {
    if (!this.eInteiro(a) || !this.eInteiro(b)) {
      return "Os valores informados não são inteiros"
    }else{
      return a - b
    }
  }

  multiplicacao(a, b) {
    if (!this.eInteiro(a) || !this.eInteiro(b)) {
      return "Os valores informados não são inteiros"
    }else{
      return a * b
    }
  }

  divisao(a, b) {
    if (!this.eInteiro(a) || !this.eInteiro(b)) {
      return "Os valores informados não são inteiros"
    }else{
      return a / b
    }
  }
} 

module.exports = Calculadora