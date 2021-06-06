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

import { signupNewUser } from "../../redux/signup/signup.action"; // new import

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        login: [{
            email: "",
            password: ""
    }]
    };
  }
    formSubmit = e => {
        e.preventDefault();
        let login = [{email : e.target[0].value , password: e.target[1].value }];
        this.setState({login: login});
      console.log(this.state.login);
      const userData = {
        email: this.state.login[0].email,
        password: this.state.login[0].password
      };
      console.log(this.props);
      this.props.signupNewUser(userData);
    };
  
  componentDidUpdate() {
    console.log(this.state.login);
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
            <div className="signupcard">
                <div className="background-red">Sign Up
                </div>
                <div className="signupcard-body">
                    <Form onSubmit={this.formSubmit}>
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            //isInvalid={this.props.createUser.emailError}
                            className="signupcard-text"
                            type="text"
                            name="email"
                            placeholder="Enter an email"
                            />
                            {/* <FormControl.Feedback type="invalid">
                            {this.props.createUser.emailError}
                            </FormControl.Feedback> */}
                        </Form.Group>

                        <Form.Group controlId="passwordId">
                            <Form.Label>Your password</Form.Label>
                            <Form.Control
                            //isInvalid={this.props.createUser.passwordError}
                            className="signupcard-text"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            />
                            {/* <Form.Control.Feedback type="invalid">
                            {this.props.createUser.passwordError}
                            </Form.Control.Feedback> */}
                        </Form.Group>
                        <input className="login-btn" type="submit" value="Envoyez" />
                    </Form>
                    {/* <p className="mt-2">
                        Already have account? <Link to="/login">Login</Link>
                    </p> */}
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

// Signup.propTypes = {
//   signupNewUser: PropTypes.func.isRequired,
//   createUser: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  createUser: state.createUser
});

const mapDispatchToProps = (dispatch)=>{
  return {
    signupNewUser:(userData)=>dispatch(signupNewUser(userData)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);