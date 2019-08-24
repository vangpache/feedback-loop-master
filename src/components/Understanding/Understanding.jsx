import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {
    state = {
        understanding: ''
    }



    handleRadio = (event) => {
        
        if (event.target.value === '1') {
            return this.setState({
                understanding: event.target.value
            })
        } else if (event.target.value === '2') {
            return this.setState({
                understanding: event.target.value
            })
        } else if (event.target.value === '3') {
            return this.setState({
                understanding: event.target.value
            })
        } else if (event.target.value === '4') {
            return this.setState({
                understanding: event.target.value
            })
        } else if (event.target.value === '5') {
            return this.setState({
                understanding: event.target.value
            });
        } else {
            alert('Please select a rating')
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding
        })
        this.props.history.push('/support')
    }



    render() {


        return (
            <div>
                <h1>UNDERSTANDING</h1>
                <form >
                    <h3>How well are you understanding the content?</h3>
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="1" /> 1
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="2" /> 2
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="3" /> 3
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="4" /> 4
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="5" /> 5
                <br />
                    <br />
                    <button onClick={this.handleClick}>NEXT</button>
                </form>
                
            </div>
        )
    }
}




export default connect() (Understanding);