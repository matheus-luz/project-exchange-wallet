import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableExpenses extends Component {
  constructor(props) {
    super(props);

    this.tableAddExpenses = this.tableAddExpenses.bind(this);
  }

  tableAddExpenses() {
    const { expenses } = this.props;
    if (expenses.length >= 1) {
      expenses.map((expense) => (
        <tbody key={ expense.id }>
          <tr>
            <th>{expense.value}</th>
            <th>{expense.tag}</th>
            <th>{expense.method}</th>
            <th>{expense.method}</th>
          </tr>
        </tbody>
      ));
    }
  }

  render() {
    return (
      <section className="tableAdd">
        <table>
          <thead>
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
            { this.tableAddExpenses() }
          </thead>
        </table>
      </section>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpenses);
