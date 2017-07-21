import React from 'react'
import './tabbar.css'

export default class TabBar extends React.Component {
    constructor(props) {
        super(props)
        this.selectTab = this.selectTab.bind(this)
        this.handleAddTab = this.handleAddTab.bind(this)
        this.handleRemoveTab = this.handleRemoveTab.bind(this)
    }
    selectTab(id) {
        this.props.onSelectTab(id)
    }
    handleAddTab() {
        this.props.onAddTab()
    }
    handleRemoveTab(id) {
        this.props.onRemoveTab(id)
        console.log(this.props.tabs[0].id)
        this.props.onSelectTab(this.props.tabs[0].id ? this.props.tabs[0].id : "" )
    }   
    render() {
        return (
        <div id="tab-bar">
            <div className="tab-scroll-box">
                {this.props.tabs.map((tab) =>
                    (
                        <div 
                            className={tab.id === this.props.current ? "selected tab" : "tab"} 
                            key={tab.id} 
                        >
                            <div className="tab-name" onClick={() => this.selectTab(tab.id)}>{tab.id}</div>
                            <div className="tab-delete" onClick={()=>this.handleRemoveTab(tab.id)}>X</div>
                        </div>)
                )}
            </div>
            <div className="tab-add-button">
                <div className="" onClick={this.handleAddTab} >Add a tab</div>
            </div>
        </div >)
    }
}