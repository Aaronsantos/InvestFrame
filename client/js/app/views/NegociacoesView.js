class NegociacoesView extends View {

  constructor (elemento){

    super(elemento)
  }

  _template(model){

    return `
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
              </tr>
          </thead>

          <tbody>
            ${model.map(neg => `
              <tr>
              <td>${DateHelper.dataParaTexto(neg.data)}</td>
              <td>${neg.quantidade}</td>
              <td>${neg.valor}</td>
              <td>${neg.volume}</td>
              </tr>
              `).join('')}
          </tbody>

          <tfoot>
            <td colspan="3"> </td>
            <td>
              ${
                  model.reduce((total, n) => total + n.volume, 0.0)
              }
            </td>
          </tfoot>
      </table>
    `
  }
}
