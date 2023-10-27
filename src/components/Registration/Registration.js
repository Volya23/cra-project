import React from 'react'
import './style.css';

class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            username: '',
            phone: '',
            isEmailValid: true
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {email} = this.state;

        if(!email.includes('@')) {
            this.setState({
                isEmailValid: false
            })
        }

        console.log(this.state);
    }

    render() {
        const {email, password, username, phone, isEmailValid} = this.state;

        return (
            <form className='form-wrapper' onSubmit={this.submitHandler}>
                <label>
                    Your email: 
                    <input className={isEmailValid ? '' : 'invalid'} type='text' name='email' onChange={this.universalChangeHandler} value={email} />
                </label>

                <label>
                    Your password:
                    <input type='password' name='password' onChange={this.universalChangeHandler} value={password} />
                </label>

                <label>
                    Your name: 
                    <input type='text' name='username' onChange={this.universalChangeHandler} value={username} />
                </label>

                <label>
                    Your phone: 
                    <input type='tel' name='phone' onChange={this.universalChangeHandler} value={phone} />
                </label>
    
                <button type='submit'>Send form</button>
                <button type='reset'>Reset</button>
            </form>
        )
    }
    
}export default Registration;