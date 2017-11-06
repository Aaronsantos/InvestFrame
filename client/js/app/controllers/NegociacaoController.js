class NegociacaoController {

  constructor () {
    let $ = document.querySelector.bind(document)

    this._inputData = $('#data')
    this._inputQuantidade = $('#quantidade')
    this._inputValor = $('#valor')
  }

  adiciona(event)
  {
    event.preventDefault()

    console.log(typeof(this._inputData.value))
    console.log(this._inputData.value)

    let dataNeg = new Date(...this._inputData.value
      .split('-')
      .map( (item, indice) => {
        return item - indice%2
      })
    )
    
    let negocioacao = new Negociacao(
      dataNeg,
      this._inputQuantidade.value,
      this._inputValor.value
    )
    console.log(negocioacao)
    }
}
