import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'



function _ToyFilter(props) {
    const handleChange = ({ target }) => {
        const field = target.name;
        let value = target.value
        console.log(field, 'field');
        console.log(value, 'value');
        if (field === 'inStock') {
            value = !props.filterBy.inStock
        }
        let filterBy = { ...props.filterBy, [field]: value }
        props.dispatch(
            {
                type: 'SET_FILTER',
                filterBy
            }
        )
    }

    return (
        <form className="toy-form" >
            <Grid container direction={"row"} spacing={5}>
                <Grid item>
                    <TextField spacing='4' autoComplete="off" name="name" onChange={handleChange} type="text" placeholder='search a toy!' />
                </Grid>
                <Grid item>
                    <Select onChange={handleChange} name="lable">
                        <MenuItem value="all">All lable</MenuItem>
                        <MenuItem value="On wheels">On wheels</MenuItem>
                        <MenuItem value="Box game">Box game</MenuItem>
                        <MenuItem value="Art">Art</MenuItem>
                        <MenuItem value="Baby">Baby</MenuItem>
                        <MenuItem value="Doll">Doll</MenuItem>
                        <MenuItem value="Puzzle">Puzzle</MenuItem>
                        <MenuItem value="Outdoor">Outdoor</MenuItem>
                    </Select>  </Grid>
                <Grid item>
                    <Checkbox color="primary"

                        type="checkbox" onChange={handleChange} value={props.filterBy.inStock} id="inStock" name="inStock" />
                    <label for="inStock">in Stock</label>

                </Grid>
                <Grid item>
                    <Select onChange={handleChange} name="sort">
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="price">Price</MenuItem>
                        <MenuItem value="date">Date</MenuItem>
                    </Select>

                </Grid>
                <Grid item>
                    <Link to={`/toy/edit`}><Button variant="outlined">Add new toy</Button></Link>
                </Grid>

            </Grid>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        filterBy: state.toyModule.filterBy,
    }
}

export const ToyFilter = connect(mapStateToProps)(_ToyFilter)



