// parent component


import { connect } from 'react-redux';
import React from 'react';
import Display from './display';

class Chat extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.currentMessage = "";
        this.messages = [];
    }

    update () {
        this.currentMessage = e.currentTarget.value;
    }

    handleSubmit (e) {
        e.preventDefault();
        this.messages.push(this.currentMessage);
        this.currentMessage = "";
    }

    render () {


        return (
            <div className="chat_box">
                <Display messages={this.messages} />
                <div className="input_field">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.update()}/>
                        <input type="submit"/>
                    </form>              
                </div>
            </div>
        )
    }
}



export default connect(null, null)(Chat);