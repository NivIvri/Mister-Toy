import { toyService } from "../services/toyService";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadToys(filterBy) {
    return (dispatch) => {
        toyService.query(filterBy)
            .then(toys => {
                dispatch({
                    type: 'SET_TOYS',
                    toys
                })
            })
    }
}

export function onRemove(toyId) {
    return (dispatch) => {
        debugger
        toyService.remove(toyId).then(
            () => {
                dispatch(
                    {
                        type: 'REMOVE_TOY',
                        toyId
                    })
                showSuccessMsg('TOY removed')
            }

        )

            .catch(err => {
                showErrorMsg('Cannot remove TOY')
            })

    }
}


export function onSave(toy) {
    return (dispatch) => {
        if (!toy.name || !toy.labels) return
        if (toy._id) {
            return toyService.update(toy).then(() => {
                dispatch({
                    type: 'UPDATE_TOY',
                    toy
                })
            })
        }
        else {
            return toyService.add(toy).then((toy) => {
                dispatch({
                    type: 'ADD_TOY',
                    toy
                })
                return toy
            })

        }
    }
}

export function onGetById(toyId) {
    return () => {
        return toyService.getById(toyId).then(
            (toy) => { return toy }
        )
    }
}


