
import React from 'react';
import { setCORS } from "google-translate-api-browser";
import Bubble from '../bubble/bubble'
// https://pure-headland-71945.herokuapp.com/ | https://git.heroku.com/pure-headland-71945.git

class TranslateWord extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props
        this.handleClick = this.handleClick.bind(this)
        this.translate = setCORS("https://pure-headland-71945.herokuapp.com/");
        this.state = {
            bubble: null
        } 
        // this.bubble = null
    }
    handleClick() {
        if (this.state.bubble === null) {
            console.log('button clicked')
            let text = this.props.text
            // let to_learn = this.props.user.to_learn
            let to_share = this.props.user.to_share
            this.translate(text, { to: to_share })
                .then(res => {
                    this.setState({ bubble: this.state.bubble = () => (<Bubble text={res.text} response={res} />) })
                    console.log(res.text)
                    // console.log(res)
                    // console.log(this)
                })
                .catch(err => {
                    console.error(err);
                });
        } else {
            console.log('hitting this')
            console.log(this)
            this.setState({
                bubble: null
            })
        }
        // e.preventDefault();
        // this.translate = setCORS("http://cors-anywhere.herokuapp.com/");
        // console.log(this)

    }

    render() {
        const button = () =>{
            if (this.props.myIndex === 0 && this.props.myIndex === this.props.myLength -1) {
                return (
                    <button className="chat-box-message-detail-round-center"
                        onClick={() => this.handleClick()}>{this.props.text}</button>
                ) 
            } else if (this.props.myIndex === 0) {
                return (
                    <button className="chat-box-message-detail-round-left"
                        onClick={() => this.handleClick()}>{this.props.text}</button>
                )
            } else if (this.props.myIndex === this.props.myLength - 1) {
                return (
                    <button className="chat-box-message-detail-round-right"
                        onClick={() => this.handleClick()}>{this.props.text}</button>
                )
            } else {
                return (
                    <button className="chat-box-message-detail"
                        onClick={() => this.handleClick()}>{this.props.text}</button>
                )
            }
        }
        return (
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <span className="chat-box-bubble">{this.state.bubble ? this.state.bubble() : null }</span>
                {button()}
                
                {/* {this.props.myIndex === 0 || this.props.myIndex == this.props.myLength - 1 ? 
                <button className="chat-box-message-detail-round"
                onClick={()=>this.handleClick()}>{this.props.myIndex}{this.props.text}</button>
                : 
                <button className="chat-box-message-detail"
                onClick={() => this.handleClick()}>{this.props.text}</button>
                } */}
            </div>
        );
    }
}

export default TranslateWord;