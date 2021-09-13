import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class _UserProfile extends React.Component {
    state = {
        user: this.props.user
    }

    handelChange = ({ target }) => {
        const field = target.name;
        const value = target.value
        const type = target.type
        let user
        if (type === 'color') {
            user = { ...this.state.user, prefs: { ...this.state.user.prefs, [field]: value } }
        }

        else {
            user = { ...this.state.user, [field]: value }
        }
        this.setState({ user })
    }

    getDiffDate = (time) => {
        var resolution
        var EndTime = Date.now()
        var StartTime = time
        resolution = EndTime - StartTime
        var resolutionTime = (((resolution / 1000) / 60) / 60)
        if (+resolutionTime * 60 < 10)
            return (Math.floor(resolutionTime * 60) + 'minutes ago')
        if (((+resolutionTime * 60) >= 60) && (130 >= resolutionTime * 60))
            return ('one hour ago')
        return (Math.floor(resolutionTime) + ' hours ago')
    }

    onSave = () => {
        let { user } = this.state
        this.props.dispatch(
            {
                type: 'SET_USER',
                user
            }
        )
    }

    render() {
        const { user } = this.state
        if (!user) return <div className='main-layout user-profile' >no user found</div>
        return (
            <div className='main-layout user-profile' style={{
                backgroundColor: `${this.props.user.prefs.bgColor}`,
                color:`${this.props.user.prefs.color}`,
            }}>
                <div className='input-section'>
                    Name: <input type='txt' onChange={this.handelChange} name='fullname' value={user.fullname} />
                    Background Color:<input type='color' onChange={this.handelChange} name='bgColor' value={`${user.prefs.bgColor}`} />
                    Color:  <input type='color' onChange={this.handelChange} name='color' value={`${user.prefs.color}`} />
                    <button className='save-pref-btn' onClick={this.onSave}>save</button>

                </div>
                <div>
                    {user.activities.map((todo) => {
                        return <div key={todo._id} className='user-activities'>
                            <span>{this.getDiffDate(todo.createdAt)}</span>
                            {todo.txt}
                        </div>
                    })}
                    
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.userModule.user
    }
}

export const UserProfile = connect(mapStateToProps)(_UserProfile)