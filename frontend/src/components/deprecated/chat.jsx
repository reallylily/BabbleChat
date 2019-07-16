import React from 'react';
import io from "socket.io-client";
// import {port} from  '../../app.js'

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            endpoint: 'http://localhost:3000'
        }
    };

    componentDidMount() {
        console.log('hello');
        const socket = io(this.state.endpoint);
        socket.on('connect', () => {
            console.log('Chat component is connected');
        });
    };

    render() {
        return(
        <div>
            The chat component is being rendered.
        </div>
        )
    };

}

export default Chat;

