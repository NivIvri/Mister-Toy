import { ToyFilter } from "../cmps/ToyFilter.jsx";
import { ToyList } from "../cmps/ToyList.jsx";
import { loadToys, onRemove } from '../store/toy.actions.js'
import React from 'react'
import { connect } from 'react-redux'
import intercom from '../assets/img/intercom.jpg';
import ChatApp from "../cmps/ChatApp.jsx";
import { Loading } from "../cmps/Loading.jsx";



class _ToyApp extends React.Component {
    state = {
        isChat: false
    }
    componentDidMount() {
        this.props.loadToys(this.props.filterBy)
        //if (!this.props.user) this.props.history.push("/");
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.filterBy !== prevProps.filterBy) {
            this.props.loadToys(this.props.filterBy)
        }
    }

    onRemove = (ev, toyId) => {
        ev.stopPropagation();
        this.props.onRemove(toyId);
    }

    toggleChat = () => {
        this.setState({ isChat: !this.state.isChat })
    }
   

    render() {
        const { toys } = this.props

        if (!toys) return <Loading />
        return (
            <section className="main-container">
                <img className='intercom' src={intercom} alt={'intercom'} onClick={this.toggleChat} />
                {this.state.isChat && <ChatApp />}
                <ToyFilter />
                <ToyList onRemove={this.onRemove} toys={this.props.toys} />
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        filterBy: state.toyModule.filterBy,
        toys: state.toyModule.toys,
        user: state.userModule.user
    }
}

const mapDispatchToProps = {
    loadToys,
    onRemove,

}

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)

