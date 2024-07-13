const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()
    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
      const queue = new Queue()
      expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.add(0)
    expect(queue.size()).toEqual(1)
    expect(queue.elements).toEqual([0])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add(0)
    queue.add(1)
    expect(queue.peek()).toEqual(0)
  })

  it('Deve retornar "A fila está vazia, não há item para retornar." se a fila estiver vazia ao chamar peek', () => {
    const queue = new Queue()
    expect(queue.peek()).toEqual("A fila está vazia, não há item para retornar.")
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add(0)
    queue.add(1)
    expect(queue.size()).toBe(2)
    expect(queue.dequeue()).toEqual(0)
    expect(queue.size()).toBe(1);
  })

  it('Deve retornar "A fila está vazia, não há itens para remover." se a fila estiver vazia ao chamar dequeue', () => {
    const queue = new Queue()
    expect(queue.dequeue()).toEqual("A fila está vazia, não há itens para remover.")
  })

})