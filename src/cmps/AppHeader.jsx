import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { onLogin, onLogout, onSignup } from '../store/user.actions'
import Button from '@material-ui/core/Button';
import logo from '../assets/img/logo.svg';


function _AppHeader({ user, onLogout }) {

    return (
        <header>
            {user &&
                <nav>
                    <NavLink exact active="my-active" to="/home"> <div className='logo-store'>Mister Toy
                        <img className='logo' alt="logo" src={logo} />
                    </div></NavLink>

                    <div>welcome, {user.username}</div>
                    <div className='nav-user-page'>

                        <NavLink exact to='/'><Button onClick={() => { onLogout() }}>logout</Button></NavLink>
                        <NavLink exact to='/dashboard'><Button>Dashboard</Button></NavLink>
                        <NavLink exact to='/branch'><Button>Our branch</Button> </NavLink>
                    </div>
                </nav>
            }
        </header>
    )
}


function mapStateToProps(state) {
    return {
        toys: state.toyModule.toys,
        user: state.userModule.user

    }
}

const mapDispatchToProps = {
    onLogin, onSignup, onLogout
}

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)
