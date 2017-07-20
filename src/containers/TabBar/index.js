/**
 * @desc: THis is a sample container for connecting the state with a component
 */

import React from 'react'

//import your component
import TabBar from '../../components/TabBar/'

import { connect } from 'react-redux'

//import whatever action you need to update your state
import { updateTab, addTab, removeTab, selectTab } from '../../actions'

const mapStateToProps = (state, props) => (
    {
        tabs: state.tabs,
        current: state.current
    }
)

const mapDispatchToProps = dispatch => {
    return{
        onAddTab(){
            dispatch(
                addTab()
            )
        },
        onRemoveTab(id){
            dispatch(
                removeTab(id)
            )
        },
        onUpdateTab(content){
            dispatch(
                updateTab(content)
            )
        },
        onSelectTab(id){
            dispatch(
                selectTab(id)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar)