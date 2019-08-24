import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    state = {
        support: ''
    }



    handleRadio = (event) => {

        if (event.target.value === '1') {
            return this.setState({
                support: event.target.value
            })
        } else if (event.target.value === '2') {
            return this.setState({
                support: event.target.value
            })
        } else if (event.target.value === '3') {
            return this.setState({
                support: event.target.value
            })
        } else if (event.target.value === '4') {
            return this.setState({
                support: event.target.value
            })
        } else if (event.target.value === '5') {
            return this.setState({
                support: event.target.value
            });
        } else {
            alert('Please select a rating')
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: this.state.support
        })
        this.props.history.push('/comments')
    }

    render() {


        return (
            <div>
                <h1>SUPPORT</h1>
                <h3>How well are you being supported?</h3>
                <form onSubmit={this.handleClick}>
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="support" value="1" /> 1
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="support" value="2" /> 2
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="support" value="3" /> 3
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="support" value="4" /> 4
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="support" value="5" /> 5
                <br />
                    <br />
                    <button>NEXT</button>
                </form>
                
            </div>
        )
    }
}




export default connect () (Support);