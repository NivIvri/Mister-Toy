//import React from 'react'
//import { connect } from 'react-redux'
//import { onLogin, onSignup, onLogout } from '../store/user.actions.js'
//import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';


//class _Signin extends React.Component {
//    state = {
//        credentials: {
//            username: '',
//            password: '',
//            fullname: '',
//            isAdmin: false
//        },
//        isSignup: false,
//        isLogin: false
//    }



//    clearState = () => {
//        const clearTemplate = {
//            credentials: {
//                username: '',
//                password: '',
//                fullname: ''
//            },
//            isSignup: false
//        }
//        this.setState({ clearTemplate })
//    }

//    handleChange = (ev) => {
//        const field = ev.target.name;
//        const value = ev.target.value;
//        this.setState({ credentials: { ...this.state.credentials, [field]: value } });
//    }

//    onLogin = async (ev = null) => {
//        if (!this.state.credentials.username || !this.state.credentials.password) return;
//        if (ev) ev.preventDefault();
//        const loginUser = await this.props.onLogin(this.state.credentials)
//        if (loginUser) {

//            this.props.history.push(`/home`)
//        }

//        //this.clearState()
//    }

//    onSignup = async (ev = null) => {
//        if (!this.state.credentials.username || !this.state.credentials.password || !this.state.credentials.fullname) return;
//        if (ev) ev.preventDefault();
//        const loginUser = await this.props.onSignup(this.state.credentials);
//        if (loginUser) {
//            this.props.history.push(`/home`)
//        }
//        //this.clearState()
//    }

//    toggleSignup = () => {
//        this.setState({ isSignup: !this.state.isSignup })
//    }

//    render() {
//        const { username, password, fullname } = this.state.credentials;
//        const { isSignup } = this.state;
//        return (
//            <div className="login-page">
//                <p>
//                    <a href="#" onClick={this.toggleSignup}>{!isSignup ? 'Login' : 'New here? signup'}</a>
//                </p>
//                {!isSignup && <form className="login-form" onSubmit={this.onLogin}>
//                    <TextField name="username"

//                        id="outlined-basic" label="Username" variant="outlined" value={username}
//                        onChange={this.handleChange}
//                        required
//                    />
//                    <TextField name="password"
//                        id="outlined-basic" label="Password" variant="outlined" value={password}
//                        onChange={this.handleChange}
//                        required
//                    />
//                    <Button>Login!</Button>
//                </form>}

//                <div className="signup-section">
//                    {isSignup && <form className="signup-form" onSubmit={this.onSignup}>

//                        <TextField name="fullname"
//                            id="outlined-basic" label="Fullname" variant="outlined" value={fullname}
//                            onChange={this.handleChange}
//                            required
//                        />
//                        <TextField name="username"
//                            id="outlined-basic" label="Username" variant="outlined" value={username}
//                            onChange={this.handleChange}
//                            required
//                        />
//                        <TextField name="password"
//                            id="outlined-basic" label="Password" variant="outlined" value={password}
//                            onChange={this.handleChange}
//                            required
//                        />
//                        {/*<input
//                            type="text"
//                            name="fullname"
//                            value={fullname}
//                            placeholder="Fullname"
//                            onChange={this.handleChange}
//                            required
//                        />*/}
//                        {/*<input
//                            type="text"
//                            name="username"
//                            value={username}
//                            placeholder="Username"
//                            onChange={this.handleChange}
//                            required
//                        />
//                        <input
//                            type="password"
//                            name="password"
//                            value={password}
//                            placeholder="Password"
//                            onChange={this.handleChange}
//                            required
//                        />*/}
//                        <button >Signup!</button>
//                    </form>}
//                </div>

//            </div>
//        )
//    }
//}


//function mapStateToProps(state) {
//    return {
//        filterBy: state.toyModule.filterBy,
//        toys: state.toyModule.toys,
//        user: state.userModule.user
//    }
//}

//const mapDispatchToProps = {
//    onLogin, onSignup, onLogout
//}

//export const Signin = connect(mapStateToProps, mapDispatchToProps)(_Signin)

