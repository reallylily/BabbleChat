// parent component
// import { connect } from 'react-redux';
import React from 'react';
import Display from './display';
import io from "socket.io-client";
import Footer from '../footer/footer'; 

class Chat extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.state = {
            endpoint: 'http://localhost:3000',
            messages: [],
            currentMessage: '', 
            displayEmoji: false, 
            currentEmojiPage: 1 
        }
        this.socket = io(this.state.endpoint);

        this.setEmojiMenuRef = this.setEmojiMenuRef.bind(this); 
        
        this.handleClickOutsideEmojiMenu = this.handleClickOutsideEmojiMenu.bind(this); 
    }

    componentDidMount() {
        // const socket = io(this.state.endpoint);
        this.socket.on('connect', () => {
            console.log('Chat component is connected');
        }); 
            this.socket.on('display_message', (message_object) => {
            let new_message_array = this.state.messages;
            new_message_array.push(message_object['message']);
            this.setState({ messages: new_message_array, currentMessage: "" });
        });
        document.addEventListener('mousedown', this.handleClickOutsideEmojiMenu);
    };


    componentWillUnmount() {
        this.socket.emit('off');
        document.removeEventListener('mousedown', this.handleClickOutsideEmojiMenu);
    }

    setEmojiMenuRef(node) {
        this.emojiMenuRef = node;
    }

    handleClickOutsideEmojiMenu(e) {
        if (this.emojiMenuRef && !this.emojiMenuRef.contains(e.target)) {
            this.setState({
                displayEmoji: false 
            })
        }
    }

    update () {
        return e => this.setState({
            currentMessage: e.currentTarget.value
        });
        
    }

    handleSubmit (e) {
        e.preventDefault();
        if (this.state.currentMessage !== '') {
            this.socket.emit('chat_message', {
                message: this.state.currentMessage
            });
        }   
    }

    triggerEmojiList(e) {
        e.preventDefault(); 
        this.setState({
            displayEmoji: !this.state.displayEmoji
        })
    }

    addEmoji(e) {
        e.preventDefault(); 
        this.setState({
            currentMessage: this.state.currentMessage + e.target.innerHTML
        })
    }

    navigateOne(e) {
        e.preventDefault(); 
        this.setState({
            currentEmojiPage: 1
        })
    }

    navigateTwo(e) {
        e.preventDefault();
        this.setState({
            currentEmojiPage: 2
        })
    }

    navigateThree(e) {
        e.preventDefault();
        this.setState({
            currentEmojiPage: 3
        })
    }

    navigateFour(e) {
        e.preventDefault();
        this.setState({
            currentEmojiPage: 4
        })
    }

    navigateFive(e) {
        e.preventDefault();
        this.setState({
            currentEmojiPage: 5
        })
    }

    render () {
        return (
            <>
            
            <div className="chat-box">
                <Display className="chat-box-display-messages" 
                        messages={this.state.messages} />

                <div className="input_field">
                    <form onSubmit={this.handleSubmit} className="chat-box-form">
                        <input type="text" 
                            onChange={this.update()} 
                            value={this.state.currentMessage}
                            className="chat-box-submit"/>
                        
                        <button type="submit" style={{display: 'none'}}/>

                        <button className="chat-box-trigger-emoji-list-button"
                            onClick={(e) => this.triggerEmojiList(e)}><i class="far fa-smile"></i>
                        </button>
                    </form> 

                    <div></div>
                    {this.state.displayEmoji &&
                        <div className="chat-box-emoji-menu" ref={this.setEmojiMenuRef}>

                        <div className="emoji-category-banner">
                        <button className="emoji-category"
                                onClick={(e) => this.navigateOne(e)}><i className="fas fa-smile-beam"></i></button>
                        <button className="emoji-category"
                                onClick={(e) => this.navigateTwo(e)}><i className="fas fa-user-friends"></i></button>
                        <button className="emoji-category"
                                onClick={(e) => this.navigateThree(e)}><i className="fas fa-user-secret"></i></button>
                        <button className="emoji-category"
                                onClick={(e) => this.navigateFour(e)}><i className="fas fa-dog"></i></button>
                        <button className="emoji-category"
                                onClick={(e) => this.navigateFive(e)}><i className="fas fa-utensils"></i></button>
                        </div>

                            <br />

                            <div className="emoji-items-list">
                            {this.state.currentEmojiPage === 1 &&
                                <>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😀</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😃</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😂</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤣</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😃</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😃</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😄</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😅</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😆</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😉</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😊</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😋</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😎</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😍</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😘</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😗</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😙</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😚</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🙂</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤗</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤩</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤔</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤨</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😐</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😑</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😶</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🙄</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😏</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😣</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😥</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😮</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤐</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😯</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😪</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😫</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😴</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😌</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😛</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😜</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😝</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤤</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😒</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😓</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😔</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😕</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🙃</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤑</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😲</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>☹️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🙁</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😖</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😞</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😟</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😤</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>😢</button>
                                </>
                            }

                            {
                                this.state.currentEmojiPage === 2 &&
                                <>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👶</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👧</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧒</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👦</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧑</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👵</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧓</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👴</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👲</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👳‍♀</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👳‍♂️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧕</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧔 </button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👱‍♂️ </button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👱‍♀️ </button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👮‍♀️ </button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👮‍♂️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👷‍♀️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👷‍♂️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>💂‍♀️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>💂‍♂️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🕵️‍♀️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🕵️‍♂️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍⚕️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍⚕️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🌾</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🌾</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🍳</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🍳</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🎓</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🎓</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🎤</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🎤</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🏫</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🏫</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🏭</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🏭</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍💻</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍💻</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍💼</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍💼</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🔧</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🔧</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🔬</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🔬</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🎨</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🎨</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🚒</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🚒</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍✈️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍✈️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍🚀</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍🚀</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👩‍⚖️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👨‍⚖️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👰</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤵</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👸</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤴</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🤶 </button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🎅</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧙‍♀️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧙‍♂️</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧝‍♀️</button>
                                </>
                            }


                            {this.state.currentEmojiPage === 3 &&
                                <>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧥</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👚</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👕</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👖</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👔</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👗</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👙</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👘</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👠</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👡</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👢</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👞</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👟</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧦</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧤</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧣</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🎩</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🧢</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👒</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🎓</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>⛑</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👑</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👝</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👛</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👜</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>💼</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🎒</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>👓</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🕶</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🌂</button>
                                </>
                            }



                            {
                                this.state.currentEmojiPage === 4 &&
                                <>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐶</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐱</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐭</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐹</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐰</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🦊</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐻</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐼</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐨</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐯</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🦁</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐮</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐷</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐽</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐸</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐵</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🙈</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🙉</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🙊</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐒</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐔</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐧</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐦</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐤</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐣</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🐥</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🦆</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🦅</button>
                                </>
                            }

                            {this.state.currentEmojiPage === 5 &&
                                <>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍏</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍎</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍐</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍊</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍋</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍌</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍉</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍇</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍓</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍈</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍒</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍑</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍍</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🥥</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🥝</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍅</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍆</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🥑</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🥦</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🥒</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🌶</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🌽</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🥕</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🥔</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍠</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🥐</button>
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}>🍞</button>
                                </>
                            }
                            </div>

                        </div>}
                </div>
                
            </div>
                <Footer />
            </>
        )
    }
}

export default Chat;
