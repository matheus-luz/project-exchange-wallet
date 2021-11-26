import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExpenses extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <section className="tableAdd">
        <table>
          <tbody>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            { expenses.length > 0
               && expenses.map((expense) => (
                 <tr key={ expense.id }>
                   <td>{expense.description}</td>
                   <td>{expense.tag}</td>
                   <td>{expense.method}</td>
                   <td>{expense.value}</td>
                   <td>{expense.exchangeRates[expense.currency].name}</td>
                   <td>
                     {
                       Number(expense.exchangeRates[expense.currency].ask).toFixed(2)
                     }

                   </td>
                   <td>
                     { (
                       expense
                         .exchangeRates[expense.currency].ask * expense.value).toFixed(2)}
                   </td>
                   <td>Real</td>
                 </tr>
               )) }
          </tbody>
        </table>
      </section>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpenses);
