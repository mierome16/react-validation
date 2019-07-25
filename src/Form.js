import React, { Component } from 'react';
import validator from 'validator'
import './formpage.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';


class Form extends Component {
    state = {
        name: '',
        nameError: '',
        nameClass: '',
        email: '',
        emailError: '',
        emailClass: '',
        username: '',
        usernameError: '',
        usernameClass: '',
        password: '',
        passwordError: '',
        passwordClass: '',
        confirm: '',
        confirmError: '',
        confirmClass: '',
        website: '',
        websiteError: '',
        websiteClass: '',
        error: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let error = false
        this.setState({
            [e.target.name]: e.target.value,
        })

        if(!validator.isLength(this.state.name, {min:4})){
            error = true
            this.setState({
                error: true,
                nameError: 'Please enter more than 4 characters',
                nameClass: 'err'
            })
        } else {
            error = false
            this.setState({
                nameError: '',
                nameClass: ''
            })
        }

        if(!validator.isEmail(this.state.email)) {
            error = true
            this.setState({
                emailError: 'Please enter a valid email address',
                emailClass: 'err',
            })
        } else {
            error=false
            this.setState({
                emailError: '',
                emailClass: '',
            })
        }

        if (!validator.isLength(this.state.username, {min:6})) {
            error = true
            this.setState({
                error: true,
                usernameError: 'Username must contain at least 6 characters',
                usernameClass: 'err',
            })
        } else {
            error = false
            this.setState({
                error: false,
                usernameError: '',
                usernameClass: ''
            })
        }

    if(!validator.isLength(this.state.password, {min:8})){
        error = true
        this.setState({
            error: true,
            passwordError: 'Password must be atleast 8 characters long',
            passwordClass: 'err'
        })
    } else {
        error = false
        this.setState({
            error: false,
            passwordError: '',
            passwordClass: ''
        })
    }


    if(!validator.equals(this.state.password, this.state.confirm)) {
        error = true
        this.setState({
            error: true,
            confirmError: 'Password did not match',
            confirmClass: 'err'
        })
    } else {
        error = false
        this.setState({
            error: false,
            confirmError: '',
            confirmClass: ''
        })
    }


    if(!validator.isURL(this.state.website)){
        error = true
        this.setState({
            error: true,
            websiteError: 'Please enter a valid URL',
            websiteClass: 'err'
        })
    } else {
        error =false
        this.setState({
            error: false,
            websiteError: '',
            websiteClass: ''
        })
    }
    if(error === false){
        this.props.history.push('/submitted')
    }
}



    render() {
        return (
            <form className="regform" onSubmit={this.handleSubmit}>
                 <div className="header">
                <h1 className="title">Profile Form</h1>
                <h3>All fields required</h3>
                </div>


            <label className={this.state.nameClass} htmlFor="name">
                {this.state.nameError ? this.state.nameError : "Name"}
            </label>
            <div className="input">
            <MaterialIcon icon="account_circle" />
            <input  id="name" name="name" type="text" value={this.state.name}  onChange={this.handleChange} placeholder="Name"></input>
            </div>

            <label className={this.state.emailClass} htmlFor="email">
                {this.state.emailError ? this.state.emailError : "Email Address"}
            </label>
            <div className="input">
            <MaterialIcon icon="email" />
            <input  id="email" name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email Address"></input>
            </div>

            <label className={this.state.usernameClass} htmlFor="username">
                {this.state.usernameError ? this.state.usernameError : "Username"}
            </label>
            <div className="input">
            <MaterialIcon icon="chrome_reader_mode" />
            <input  id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username"></input>
            </div>

            <label className={this.state.passwordClass} htmlFor="password">
                {this.state.passwordError ? this.state.passwordError : "Password"}
            </label>
            <div className="input">
            <MaterialIcon icon="lock" />
            <input  id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Create Password"></input>
            </div>

            <label className={this.state.confirmClass} htmlFor="confirm">
                {this.state.confirmError ? this.state.confirmError : "Confirm Password"}
            </label>
            <div className="input">
            <MaterialIcon icon="lock" />
            <input  id="confirm" name="confirm" type="password" value={this.state.confirm} onChange={this.handleChange} placeholder="Confirm Password"></input>
            </div>

            <label className={this.state.websiteClass} htmlFor="website">
                {this.state.websiteError ? this.state.websiteError : "Website"}
            </label>
            <div className="input">
            <MaterialIcon icon="web"/>
            <input  id="website" name="website" type="text" value={this.state.website} onChange={this.handleChange} placeholder="Website URL"></input>
            </div>

            <button>Register</button>
            </form>
        )
    }
}

export default Form