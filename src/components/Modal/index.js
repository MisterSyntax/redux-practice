import React from 'react'
import './modal.css'

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.toggleContent = this.toggleContent.bind(this)
    }
    toggleContent(viewState) {
        viewState ? this.props.onDisableContent() : this.props.onEnableContent()
    }
    render() {
        return (
            <div id="modal-container">
                <button onClick={()=>this.toggleContent(this.props.enable)}>Open</button>
                <div id="modal" className={this.props.enable? "":"closed"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}