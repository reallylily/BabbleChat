// parent component
import { connect } from 'react-redux';
import React from 'react';
import Display from './display';
import io from "socket.io-client";

class Chat extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = {
            endpoint: 'http://localhost:3000',
            messages: [],
            currentMessage: ''
        }
        this.socket = io(this.state.endpoint)
    }

    componentDidMount() {
        console.log('hello');
        // const socket = io(this.state.endpoint);
        this.socket.on('connect', () => {
            console.log('Chat component is connected');
        });
            this.socket.on('display_message', (message_object) => {
            let new_message_array = this.state.messages;
            new_message_array.push(message_object['message']);
            this.setState({ messages: new_message_array, currentMessage: "" });
        });

    };

    // componentDidUnmount() {
    //     this.socket.emit('off');
    // }

    update () {
        return e => this.setState({
            currentMessage: e.currentTarget.value
        });
        
    }

    handleSubmit (e) {
        e.preventDefault();
        this.socket.emit('chat_message', {
            message: this.state.currentMessage
        });
        
    }

    render () {

        return (
            
            <div className="chat_box">
                <Display messages={this.state.messages} />
                <div className="input_field">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.update()} value={this.state.currentMessage}/>
                        <input type="submit"/>
                    </form>              
                </div>
            </div>
        )
    }
}

export default connect(null, null)(Chat);