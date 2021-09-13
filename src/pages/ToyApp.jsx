import { ToyFilter } from "../cmps/ToyFilter.jsx";
import { ToyList } from "../cmps/ToyList.jsx";
import { loadToys, onRemove } from '../store/toy.actions.js'
import React from 'react'
import { connect } from 'react-redux'



class _ToyApp extends React.Component {
    state = {}
    componentDidMount() {
        this.props.loadToys(this.props.filterBy)
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

    render() {
        const { toys } = this.props
        if (!toys) return <div>loadingg</div>
        return (
            <section className="main-container">
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
    }
}

const mapDispatchToProps = {
    loadToys,
    onRemove,

}

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)

