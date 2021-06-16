import React, { Component } from "react";
import { connect } from "react-redux"; // new import
import PropTypes from "prop-types"; // new import
import { Link } from "react-router-dom";
import {
  Form,
  FormControl
} from "react-bootstrap";
import { toast } from "react-toastify";

import { signupNewUser } from "../../redux/signup/signup.action"; // new import
import { fowardMessages } from '../../utils/signupMessages';
import {
  CREATE_USER_ERROR,
  // eslint-disable-next-line no-unused-vars
  CREATE_USER_SUBMITTED,
  // eslint-disable-next-line no-unused-vars
  CREATE_USER_SUCCESS
} from "../../redux/signup/signupTypes";

class Signup extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
   
  }
    formSubmit = e => {
      e.preventDefault();
      console.log(e);
      let password1 = e.target[1].value;
      let confirmPassword = e.target[2].value;
      let userData = { email: e.target[0].value, password: password1 };
      if (password1 === confirmPassword) {
        this.props.signupNewUser(userData);
        this.props.history.push('/login');

      } else {
        console.log('wrong password');
        toast.error (fowardMessages(false, CREATE_USER_ERROR));
        e.target.reset();
      }
        // let userData = {email : e.target[0].value , password: password1 };
    
      
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
                        <Form.Group controlId="passwordId2">
                            <Form.Label>Ré-entrez le Mot de passe</Form.Label>
                            <Form.Control
                            isInvalid={this.props.createUser.passwordError}
                            // className="signupcard-text"
                            type="password"
                            name="confirm-password"
                            placeholder="Mot de passe"
                            />
                            <Form.Control.Feedback type="invalid">
                            {this.props.createUser.passwordError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <input className="dio-btn dio-btn-success" type="submit" value="Inscription" />
                    </Form>
                    {/* <p className="mt-2">
                        Already have account? <Link to="/login">Login</Link>
                    </p> */}
              </div>
              <p className="dio-text">Vous avez déjà un compte ? <br/>
                <Link to='/login'><button className="dio-btn dio-btn-success" >Connexion</button></Link></p>
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

const mapDispatchToProps = (dispatch)=>{
  return {
    signupNewUser:(userData)=>dispatch(signupNewUser(userData)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);