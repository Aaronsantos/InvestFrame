

class Negociacao{

  constructor(data,quantidade, valor){

    this._data = new Date(data.getDate())
    this._quantidade = quantidade
    this._valor = valor
    Object.freeze(this)
  }

  //get cria uma função somente leitura
  get volume()
  {
    return this._quatidade * this._valor
  }

  //programação defensiva: cria-se uma nova data para garantir encapsulamento do objeto
  get data()
  {
    return new Date(this._data.getTime())
  }

  get quantidade()
  {
    return this._quantidade
  }

  get valor()
  {
    return this._valor
  }

}
