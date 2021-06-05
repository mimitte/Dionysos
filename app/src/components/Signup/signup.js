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
      email: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.email]: e.target.value });
  };

  // update function to call the action
  onSignupClick = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signupNewUser(userData); // <-- signup new user request
  };

  render() {
    return (
    <React.Fragment>
        {
            <div className="signupcard  mb-3">
                <div className="background-red">Sign Up
                </div>
                <div className="signupcard-body">
                    <Form>
                        <Form.Group controlId="emailId">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            isInvalid={this.props.createUser.emailError}
                            type="email"
                            name="email"
                            placeholder="Enter an email"
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                            <FormControl.Feedback type="invalid">
                            {this.props.createUser.emailError}
                            </FormControl.Feedback>
                        </Form.Group>

                        <Form.Group controlId="passwordId">
                            <Form.Label>Your password</Form.Label>
                            <Form.Control
                            isInvalid={this.props.createUser.passwordError}
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.password}
                            onChange={this.onChange}
                            />
                            <Form.Control.Feedback type="invalid">
                            {this.props.createUser.passwordError}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                    <Button color="primary" onClick={this.onSignupClick}>
                        Sign up
                    </Button>
                    <p className="mt-2">
                        Already have account? <Link to="/login">Login</Link>
                    </p>
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

Signup.propTypes = {
  signupNewUser: PropTypes.func.isRequired,
  createUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  createUser: state.createUser
});

export default connect(mapStateToProps, {
  signupNewUser
})(Signup);