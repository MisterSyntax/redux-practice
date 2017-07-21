/**
 * @desc: THis is a sample container for connecting the state with a component
 */

import React from 'react'

//import your component
import Content from '../../components/Content/'

import { connect } from 'react-redux'

//import whatever action you need to update your state
import { updateTab } from '../../actions'

const mapStateToProps = (state, props) => (
    {
        current: state.current,
        tabs: state.tabs
    }
)

const mapDispatchToProps = dispatch => {
    return{
        onUpdateTab(tab){
            dispatch(
                updateTab(tab)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)