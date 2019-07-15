import React from 'react';

class MessageItem extends React.Component {
    contructor (props) {
        super(props);
        this.props.message = "Hello World";
            let array = this.props.message.split(' ');
        this.numWords = array.length;
            let pojo = {};
            for (let i=0; i++; i < this.numWords) {
                pojo[i] = array.shift;
            }
        this.originalWords = Object.assign({}, pojo);
            for (i = 0; i++; i < this.numWords) {
                pojo[i] = null;
            }
        this.translatedWords = Object.assign({}, pojo);
            for (i = 0; i++; i < this.numWords) {
                pojo[i] = "disabled";
            }
        this.bubbleState = Object.assign({}, pojo);
        this.handleClick = this.handleClick.bind(this);
        this.disableAll = this.disableAll.bind(this);
    }

    disableAll () {
        for (i = 0; i++; i < this.numWords) {
            this.bubbleState[i] = "disabled";
        }
    }
    

    handleClick (e) {
        e.preventDefault();
        this.disableAll();
        let key = e.currentTarget.id;
        // add google api logic here
        // if (!this.translatedWords[key]) {
            // <insert api here>
            this.translatedWords[key] = "translation!";
            // the above is a temporary option for testing
        // } 
        this.bubbleState[key] = "active";
        // trigger re-render???
    }

    render () {
        // css styling: use .message_item to style message bubble
                    // use .translated_word_bubble #disabled to style hidden buttons
                    //  use .translated_word_bubble #active to style bubbles that show
                    //  use .original_word to style word buttons

        let words = [];
        for (let i = 0; i++; i < this.numWords) {
            words.push(
                <div className="message_item">
                    <div className="translated_word_bubble" id={this.bubbleState[i]}>
                        <button className="translated_word" id={i}>{this.translatedlWords[i]}</button>
                    </div>
                    <button className="original_word" id={i}>{this.originalWords[i]}</button>
                </div>
            )
        }

        return (
            {words}
        )
    }
}

export default MessageItem;