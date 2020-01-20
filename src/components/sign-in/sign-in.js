import React, {Component} from 'react';
import './sign-in.scss';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {signInWithGoogle} from '../../firebase/firebase';


class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.prefentDefault();

        this.setState({email:'', password: ''})
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }
     
render () {
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type='email' name='email' label='email' value={this.state.email} handleChange={this.handleChange} required />
                <FormInput  type='password' name='password' label='password' value={this.state.password} handleChange={this.handleChange} required />
                <div className='buttons'>
                    <CustomButton  type='submit'>SIGN IN</CustomButton> 
                    <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>{''} SIGN IN WITH GOOGLE {''}</CustomButton> 
                </div>
            </form>
        </div>
    )
}

}


export default SignIn;


