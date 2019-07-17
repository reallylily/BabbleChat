// parent component
// import { connect } from 'react-redux';
import React from 'react';
import Display from './display';
import io from "socket.io-client";
import Footer from '../footer/footer'; 
import languages from '../languages/languages';

class Chat extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleSubmitImage = this.handleSubmitImage.bind(this); 

        this.state = {
            endpoint: 'http://localhost:3000',
            messages: [],
            currentMessage: '', 
            displayEmoji: false, 
            displayGifs: false, 
            currentEmojiPage: 1, 
            gifs: [], 
            giphySearch: 'chicken',   
            partner_handle: '',
            partner_learn_lang: '',
            partner_share_lang: '',
        }
        // this.socket = io(this.state.endpoint);
        this.socket = io();

        this.setEmojiMenuRef = this.setEmojiMenuRef.bind(this); 
        
        this.handleClickOutsideEmojiMenu = this.handleClickOutsideEmojiMenu.bind(this); 
    }


    componentWillMount() {
        this.socket.on('connect', () => {
            console.log('Chat component is connected');
        });

        this.socket.emit('join_room', this.props.roomId);
    }

    componentDidMount() {
        
        let giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=vlPTCQfyNUPbvRZ4Yo9Dcnwa0VJYNlXQ&q=${this.state.giphySearch}&limit=25&offset=0&rating=G&lang=en`;
        fetch(giphyURL)
            .then(res => res.json())
            .then(gifs => this.setState({
                gifs: gifs.data.map(gif => gif.images.downsized.url)
            }))

        this.socket.on('request_partner_data', () => {
            this.socket.emit('send_own_user_data', {
                user_handle: this.props.currentUser.handle,
                learning_language: languages[this.props.currentUser.to_learn],
                sharing_language: languages[this.props.currentUser.to_share],
                roomId: this.props.roomId
            })
        });
        
        // const socket = io(this.state.endpoint);
        // this.socket.on('connect', () => {
        //     console.log('Chat component is connected');
        //     this.socket.emit('send_own_user_data', {
        //         user_handle: this.props.currentUser.handle,
        //         learning_language: languages[this.props.currentUser.to_learn],
        //         sharing_language: languages[this.props.currentUser.to_share],
        //         roomId: this.props.roomId
        //     })
        // }); 

        // this.socket.emit('join_room', this.props.roomId);

        this.socket.on('chat_partner_data', (partner_data) => {
            console.log(partner_data);
            const partner_handle = partner_data['other_user_handle'];
            const partner_learn_lang = partner_data['other_learn_lang'];
            const partner_share_lang = partner_data['other_share_lang'];
            if (partner_handle !== this.props.currentUser.handle) {
                this.setState({
                    partner_handle: partner_handle,
                    partner_learn_lang: partner_learn_lang,
                    partner_share_lang: partner_share_lang,
                });
            }
                // console.log(this.state);
        });

        this.socket.on('display_message', (message_object) => {
            console.log('message received');
            let new_message_array = this.state.messages;
            new_message_array.push(message_object['message']);
            this.setState({ messages: new_message_array, currentMessage: "" });
            console.log(this.state.messages);
        });
        document.addEventListener('mousedown', this.handleClickOutsideEmojiMenu);
    };


    componentWillUnmount() {
        console.log('chat component unmounting');
        this.props.clearRoomId();
        this.socket.emit('off-chat');
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
        console.log(this.state);
        e.preventDefault();
        if (this.state.currentMessage !== '') {
            this.socket.emit('chat_message', {
                message: this.state.currentMessage,
                roomId: this.props.roomId,
                userId: this.props.currentUserId
            });
        }   
    }

    handleSubmitImage(e) {
        console.log('hello')
        console.log(e.currentTarget.value)
    }

    triggerEmojiList(e) {
        e.preventDefault(); 
        this.setState({
            displayEmoji: !this.state.displayEmoji
        })
    }

    triggerGifList(e) {
        e.preventDefault(); 
        this.setState({
            displayGifs: !this.state.displayGifs
        })
    }

    addEmoji(e) {
        e.preventDefault(); 
        this.setState({
            currentMessage: this.state.currentMessage + e.target.innerHTML
        })
    }

    // addGif(e) {
    //     e.preventDefault(); 
    //     this.setState({
    //         currentMessage: this.state.currentMessage + e.target.innerHTML
    //     })
    // }

    clearGiphySearch(e) {
        e.preventDefault(); 
        this.setState({
            giphySearch: ''
        })
    }

    updateGiphySearch(e) {
        e.preventDefault(); 
        this.setState({
            giphySearch: e.target.value 
        })

        let giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=vlPTCQfyNUPbvRZ4Yo9Dcnwa0VJYNlXQ&q=${this.state.giphySearch}&limit=25&offset=0&rating=G&lang=en`;
        fetch(giphyURL)
            .then(res => res.json())
            .then(gifs => this.setState({
                gifs: gifs.data.map(gif => gif.images.downsized.url)
            }))
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
        console.log(this.state.gifs)
        console.log(this.state.giphySearch)
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
                                onClick={(e) => this.triggerGifList(e)}>
                                <i class="fas fa-video"></i>
                        </button>

                        <button className="chat-box-trigger-emoji-list-button"
                            onClick={(e) => this.triggerEmojiList(e)}>
                                <i className="far fa-smile"></i>
                        </button>
                    </form> 
                   
                        {this.state.displayGifs && this.state.gifs && 
                        <div className="chat-box-gif-menu">

                            <input type="text" 
                                className="giphy-search-bar"
                                onClick={(e) => this.clearGiphySearch(e)}
                                onChange={(e) => this.updateGiphySearch(e)} 
                                value={this.state.giphySearch} />
          


                            {this.state.gifs.map((gif, idx) =>
                            
                            <img key={idx} src={gif} width="50px" height="50px"
                                onClick={this.handleSubmitImage}>
                            </img>)}
                        </div> 
                        }

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
                                    <button className="emoji-icon" onClick={(e) => this.addEmoji(e)}><span role='img' aria-label="Smiling">😀</span></button>
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
