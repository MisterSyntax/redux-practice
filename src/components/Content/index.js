import React from 'react'
import './content.css'

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: this.props.tabs.filter((curr) => curr.id === this.props.current)[0].content
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.current !== this.props.current){
            this.setState({
                content:this.props.tabs.filter((curr) => curr.id === nextProps.current)[0].content
            })
        }
    }
    handleUpdate(evt) {
        this.setState({content: evt.target.value})
        this.props.onUpdateTab({id:this.props.current, content: this.state.content})
    }
    render() {
        return (<div id="content">
            <textarea className="content-text-area" value={this.state.content} onChange={(evt)=>this.handleUpdate(evt)}/>
            
        </div>)

    }
} 