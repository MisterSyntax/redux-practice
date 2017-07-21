import React from 'react'
import './modal.css'
import CloseIcon from 'react-icons/lib/fa/times-circle-o'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.toggleContent = this.toggleContent.bind(this)
    }
    toggleContent(viewState) {
        viewState ? this.props.onDisableContent() : this.props.onEnableContent()
    }
    render() {
        return (
            <div id="modal-container">
                <div className="modal-openifier">
                    <div className="button" onClick={() => this.toggleContent(this.props.enable)}>Open</div>
                    <div className="tabs-open">{this.props.tabs.length} open tabs</div>
                </div>
                
                <div className={this.props.enable ? "open modal" : "closed modal"}>
                    <div className="modal-close-button" onClick={() => this.toggleContent(this.props.enable)}> <CloseIcon/></div>
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}