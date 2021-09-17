

import { onSave } from '../store/toy.actions'
import { toyService } from "../services/toy.service.js";
import { UserMsg } from '../cmps/user-msg.jsx';
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { MainLayout } from '../cmps/layout/MainLayout';
import { Loading } from '../cmps/Loading';

const animatedComponents = makeAnimated();

class _ToyEdit extends React.Component {
    state = {
        toy: ''
    }
    labelOptions = [
        { value: 'On wheels', label: 'On wheels' },
        { value: 'Box game', label: 'Box game' },
        { value: 'Art', label: 'Art' },
        { value: 'Baby', label: 'Baby' },
        { value: 'Doll', label: 'Doll' },
        { value: 'Puzzle', label: 'Puzzle' },
        { value: 'Outdoor', label: 'Outdoor' },
    ]

    getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }



    async componentDidMount() {
        const toyId = this.props.match.params.toyId
        if (!toyId) {
            //save
            const toy = {
                name: "new toy",
                price: 100,
                labels: ["Doll", "Baby"],
                createdAt: Date.now(),
                inStock: true,
                imgNum: +this.getRandomIntInclusive(1, 4)
            }
            this.setState({ toy })
        }
        else {
            //edit
            let curToy = await toyService.getById(toyId)
            if (!curToy) { this.props.history.push('/') }
            this.setState({ toy: curToy })
        }
    }

    getToyLabels = () => {
        if (!this.state.toy) return
        let labelToyOptions = this.state.toy.labels.map((label) => {
            return ({ value: label, label }
            )
        })
        return labelToyOptions
    }


    handleChange = ({ target }) => {
        console.log([this.state.toy.labels]);
        let toy = this.state.toy;
        if (Array.isArray(target)) toy.labels = target.map(option => option.value)
        else toy[target.name] = target.value;
        this.setState({ toy });

    };


    onSave = async (ev) => {
        ev.preventDefault()
        let toy = await this.props.onSave(this.state.toy)
        if (this.state.toy._id) {
            this.props.history.push(`/toy/${this.state.toy._id}`)
        }
        else {
            this.props.history.push(`/toy/${toy._id}`)
        }
    }

    render() {
        const { toy } = this.state
        if (!toy) return <Loading />
        console.log(toy.labels[0]);
        return (
            <MainLayout>

                <UserMsg />
                <form className="edit-toy" onSubmit={(ev) => this.onSave(ev)}>
                    <table className='main-layout edit'>
                        <thead>
                            <tr>
                                <th colSpan="2">EDIT</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>NAME</td>
                                <td><input name='name' type='text' value={toy.name} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td>labels</td>
                                <td> <Select
                                    onChange={(e) => this.handleChange({ 'target': e })}
                                    name='label'
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    defaultValue={this.getToyLabels()}
                                    isMulti
                                    options={this.labelOptions}
                                />
                                </td>
                            </tr>
                            <tr>
                                <td>price</td>
                                <td><input name='price' type='number' value={toy.price} onChange={this.handleChange} /></td>

                            </tr>
                            <tr><td colSpan="2">  <button onClick={this.onSave} type='submit' className='save-btn'>save</button></td></tr>
                        </tbody>
                    </table>

                </form>
            </MainLayout>
        )
    }
}


function mapStateToProps({ }) {
    return {
    }
}


const mapDispatchToProps = {
    onSave
}


export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit)


