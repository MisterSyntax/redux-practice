/**
 * @desc: Manage every key in the initialState.json file
 * @return: A combined reducer that has the same structure as the initialState
 */

import C from '../constants.js'
import { combineReducers } from 'redux'

export const enable = (state = false, action) => {
    switch (action.type) {
        case C.ENABLE: {
            return true
        }
        case C.DISABLE: {
            return false
        }
        default: {
            return state
        }
    }
}

export const tabs = (state = [], action) => {
    switch (action.type) {
        case C.ADD_TAB: {
            return [...state, action.payload]
        }
        case C.REMOVE_TAB: {
            return state.filter((curr) => curr.id !== action.payload
            )
        }
        case C.UPDATE_TAB: {
            return state.map((curr) => (curr.id === action.payload.id) ? { id: curr.id, content: action.payload.content } : curr)
        }
        default: {
            return state
        }
    }
}

export const current = (state = 0, action) => {
    switch (action.type) {
        case C.SELECT_TAB: {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default combineReducers({
    enable,
    tabs,
    current
})