const Calculadora = require('./calculadora')

describe('Calculadora', () => {

  it('Deverá retornar false se um número não for inteiro', () => {
    const calculadora = new Calculadora()
    expect(calculadora.eInteiro(2.5)).toEqual(false)
  })

  it('Deverá retornar true se um número não for inteiro', () => {
    const calculadora = new Calculadora()
    expect(calculadora.eInteiro(3)).toEqual(true)
  })

  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.soma(2, 2)).toEqual(4)
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.subtracao(2, 2)).toEqual(0)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.multiplicacao(2, 2)).toEqual(4)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.divisao(2, 2)).toEqual(1)
  })
})