/**
 * @desc: This file holds the action creators which dispatch actions, and non-reducer functions(e.g.)
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 * @TODO: remove default enable/disable
 */
import C from "./constants"

export const enableContent = () => {
    return {
        type: C.ENABLE
    }
}

export const disableContent = () => {
    return {
        type: C.DISABLE
    }
}

export const addTab = () => {
    let id = new Date().getTime()
    return {
        type: C.ADD_TAB,
        payload: {id,content:""}
    }
}

export const removeTab = (id) => {
    return {
        type: C.REMOVE_TAB,
        payload: id
    }
}

export const updateTab = (content) => {
    return {
        type: C.UPDATE_TAB,
        payload: id
    }
}

export const selectTab = (id) => {
    return {
        type: C.SELECT_TAB,
        payload: id
    }
}