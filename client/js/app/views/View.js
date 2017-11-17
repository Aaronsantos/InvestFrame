class View {

  constructor(elemento){

    this._elemento = elemento
  }

 _template(model) {

   throw new error("O template deve ser implementada na VIEW")
 }

  update(model) {

    this._elemento.innerHTML = this._template(model)
  }
}
