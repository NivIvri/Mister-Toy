import { toyService } from "../services/toy.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadToys(filterBy) {
    return async (dispatch) => {
        const toys = await toyService.query(filterBy)
        dispatch({
            type: 'SET_TOYS',
            toys
        })
    }
}

export function onRemove(toyId) {
    return async (dispatch) => {
        await toyService.remove(toyId)
        try {

            dispatch(
                {
                    type: 'REMOVE_TOY',
                    toyId
                })
            showSuccessMsg('TOY removed')
        }

        catch (err) {
            showErrorMsg('Cannot remove TOY:', err)
        }
    }
}


export function onSave(toy) {
    return async (dispatch) => {
        if (!toy.name || !toy.labels) return
        if (toy._id) {
            await toyService.update(toy)
            dispatch({
                type: 'UPDATE_TOY',
                toy
            })
        }
        else {
            let newtoy = await toyService.add(toy)
            dispatch({
                type: 'ADD_TOY',
                toy:newtoy
            })
            return newtoy
        }
    }
}

export function onGetById(toyId) {
    return async () => {
        const toy = await toyService.getById(toyId)
        return toy
    }
}


