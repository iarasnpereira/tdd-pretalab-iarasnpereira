class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  isEmpty(){
    return this.elements.length === 0
  }

  size(){
    return this.elements.length
  }

  add(item){
    this.elements.push(item)
    return this
  }

  dequeue(){
    if(this.isEmpty()){
      return "A fila está vazia, não há itens para remover."
    }
    return this.elements.shift()
  } 

  peek(){
    if(this.isEmpty()){
      return "A fila está vazia, não há item para retornar."
    }
    return this.elements[0]
  }
}

module.exports = Queue