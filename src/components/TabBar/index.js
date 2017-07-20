import React from 'react'
import './tabbar.css'

export default class TabBar extends React.Component {
    constructor(props) {
        super(props)
        this.selectTab = this.selectTab.bind(this)
        this.handleAddTab = this.handleAddTab.bind(this)
    }
    selectTab(id) {
        console.log(id)
        this.props.onSelectTab(id)
    }
    handleAddTab(){
        console.log('clicked')
        this.props.onAddTab()
    }
    render() {
        return (<div id="tab-bar">
            {this.props.tabs.map((tab) =>
                (<div className={tab.id === this.props.current ? "selected" : ""} key={tab.id} onClick={() => this.selectTab(tab.id)}>{tab.id}</div>)
            )}

            <div onClick={this.handleAddTab}>Add a tab</div>
        </div >)
    }
}