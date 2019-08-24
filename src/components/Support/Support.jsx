import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';


class Support extends Component {

    state = {
        support: ''
    }

    handleRadio = (event) => {
        return this.setState({
            support: event.target.value
        })
    }


    handleClick = (event) => {
        event.preventDefault();
        if (this.state.support === '') {
            swal('Please select a rating!')
        } else {
            this.props.dispatch({
                type: 'SET_SUPPORT',
                payload: this.state.support
            })
            this.props.history.push('/comments')
        }
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




export default connect()(Support);