import React from 'react';
import { connect } from 'react-redux';

import '../App.css';

import PropTypes from 'prop-types';
import Input from '../components/Input';

import { setEmailValue } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  ValidarEmail(email) {
    const valid = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return valid.test(email);
  }

  handleChange({ target }) {
    this.setState({
      email: target.value,
    });
  }

  handlePassword({ target }) {
    this.setState({
      password: target.value,
    }, () => {
      const { password, email } = this.state;
      const NUMBER_FIVE = 6;
      if (password.length >= NUMBER_FIVE && this.ValidarEmail(email)) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    });
  }

  handleClick() {
    const { history } = this.props;
    const { dispatchEmail } = this.props;
    const { email } = this.state;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div className="App">
        <Input
          datatestid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          datatestid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handlePassword }
        />
        <button
          type="submit"
          disabled={ disabled }
          onClick={ () => this.handleClick() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (state) => dispatch(setEmailValue(state)),
});

export default connect(null, mapDispatchToProps)(Login);
