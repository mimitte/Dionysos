import React, { Component } from "react";
import { Form } from "react-bootstrap";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    if (userId != null && token != null) {
      this.props.history.goBack();
    }
  }

  formSubmit = e => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ email, password })
    };
    fetch('http://localhost:5000/api/auth/login', requestOptions)
      .then( (response) => {
        if (response.status != 200) this.props.push('/login');
        else return response.json();
      })
      .then( (userData) => {
        localStorage.setItem('userId', userData.userId);
        localStorage.setItem('token', `Bearer ${userData.token}`);
        this.props.history.push('/');
      })
      .catch( (error) => console.log('Bad credentials ! You are a fraud !'));
  };

  render() {
    return (
    <React.Fragment>
      {
        <div className="fond">
          <div className="dionysos">
            <h1 className="title">
              DIONYSOS
            </h1>
            <h4 className="sub-title">
              Qui sait déguster ne boit plus jamais de vin mais goûte ses secrets
            </h4>
            <div className="CTA-homepage">
              <Form onSubmit={this.formSubmit}>
                <Form.Group >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    // isInvalid={this.props.createUser.emailError}
                    // className="signupcard-text"
                    type="text"
                    name="email"
                    placeholder="Entrez votre email"
                  />
                  {/*<FormControl.Feedback type="invalid">
                           {this.props.createUser.emailError}
                           </FormControl.Feedback>*/}
                </Form.Group>
                <Form.Group controlId="passwordId">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    // isInvalid={this.props.createUser.passwordError}
                    // className="signupcard-text"
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                  />
                  {/*<Form.Control.Feedback type="invalid">
                           {this.props.createUser.passwordError}
                           </Form.Control.Feedback>*/}
                </Form.Group>
                <input className="dio-btn dio-btn-success" type="submit" value="Envoyez" />
              </Form>
              {/* <p className="mt-2">
                       Already have account? <Link to="/login">Login</Link>
                   </p> */}
            </div>
            <p>Vous n'avez pas de compte ? <Link to='/signup'>Créez-en un</Link>.</p>
          </div>
        </div>
      }
    </React.Fragment>
    );
  }
}

export default Login;