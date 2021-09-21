import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { onLogin, onLogout, onSignup } from '../store/user.actions'
import Button from '@material-ui/core/Button';
import logo from '../assets/img/logo.svg';
import menu from '../assets/img/list.png';
import enter from '../assets/img/enter.png';
import logoutImg from '../assets/img/logout.png';


function _AppHeader({ user, onLogout }) {
    const onToggleMenu = () => {
        document.body.classList.toggle('menu-open')
    }
    return (
        <header>
            <nav>
                <NavLink exact active="my-active" to="/home"> <div className='logo-store'><span>Mister Toy</span>
                    <img className='logo' alt="logo" src={logo} />
                </div></NavLink>
                {user &&
                    <div>welcome, {user.username}</div>
                }
                <button className='btn-menu-toggle' onClick={onToggleMenu}> <img alt="menu" src={menu} />
                </button>
                <div className='nav-user-page'>



                    <NavLink exact to='/dashboard'><Button onClick={onToggleMenu}
                    >Dashboard</Button></NavLink>
                    <NavLink exact to='/branch'><Button onClick={onToggleMenu}
                    >Our branch</Button> </NavLink>
                    <NavLink exact to='/reviews'><Button onClick={onToggleMenu}
                    >Reviews</Button> </NavLink>
                    {user &&
                        <NavLink exact to='/'><Button onClick={() => {
                            onLogout()
                            onToggleMenu()
                        }}>logout
                            <img className='logo' alt="logo" src={logoutImg} />
                        </Button></NavLink>
                    }
                    {!user &&
                        <NavLink exact to='/'><Button onClick={() => {
                            onToggleMenu()
                        }}>login <img src={enter} /></Button></NavLink>
                    }
                </div>
            </nav>
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
