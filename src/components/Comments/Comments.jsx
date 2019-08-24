import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        this.setState ({
            comments: event.target.value
        })
    }

    handleClick = (event) => {
        this.props.dispatch ({
            type: 'SET_COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/review')
    }


    handleBackButton = () => {
        console.log('back button clicked');
        this.props.history.push('/support')
    }

    render() {


        return (
            <div>
                <h1>COMMENTS</h1>
                <h3>Any comments you want to leave:</h3>
                <form >
                    <input size="100" type="text" placeholder="Type comments Here" onChange={this.handleChange}/>
                    <br />
                    <br />
                    <button onClick={this.handleBackButton}>GO BACK</button>
                    <button onClick={this.handleClick}>NEXT</button>
                    
                </form>
               
                
            </div>
        )
    }
}



export default connect () (Comments);