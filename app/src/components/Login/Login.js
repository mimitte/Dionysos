import React, { Component } from "react";
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

import { loginUser, logoutUser } from "../../redux/login/login.action"; // new import

class Login extends Component {
  constructor(props) {
    super(props);
   
  }
    formSubmit = e => {
      e.preventDefault();
      console.log(e.target[0].value);
      console.log(e.target[1].value);
        let userData = {email : e.target[0].value , password: e.target[1].value };
      console.log(this.props);
      this.props.LoginUser(userData);
    };
  
  componentDidUpdate() {

  }

  // update function to call the action
//   onSignupClick = () => {
//     const userData = {
//       email: this.state.email,
//       password: this.state.password
//     };
//     this.props.signupNewUser(userData); // <-- signup new user request
//   };

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
                            isInvalid={this.props.createUser.emailError}
                            // className="signupcard-text"
                            type="text"
                            name="email"
                            placeholder="Entrez votre email"
                            />
                            <FormControl.Feedback type="invalid">
                            {this.props.createUser.emailError}
                            </FormControl.Feedback>
                        </Form.Group>

                        <Form.Group controlId="passwordId">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control
                            isInvalid={this.props.createUser.passwordError}
                            // className="signupcard-text"
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            />
                            <Form.Control.Feedback type="invalid">
                            {this.props.createUser.passwordError}
                            </Form.Control.Feedback>
                        </Form.Group>
                                
                         <Form.Group controlId="passwordId">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control
                            isInvalid={this.props.createUser.passwordError}
                            // className="signupcard-text"
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            />
                            <Form.Control.Feedback type="invalid">
                            {this.props.createUser.passwordError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <input className="dio-btn dio-btn-success" type="submit" value="Envoyez" />
                    </Form>
                    {/* <p className="mt-2">
                        Already have account? <Link to="/login">Login</Link>
                    </p> */}
                </div>
            </div>
          </div>
        }
    </React.Fragment>
    );
  }
}

// connect action and reducer
// replace 
// export default Signup;
// with code below:

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
//   createUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
//   createUser: state.createUser
});

const mapDispatchToProps = (dispatch)=>{
  return {
    loginUser:(userData)=>dispatch(loginUser(userData)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);