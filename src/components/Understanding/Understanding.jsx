import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';


class Understanding extends Component {
    state = {
        understanding: ''
    }


    handleRadio = (event) => {
        return this.setState({
            understanding: event.target.value
        })
    }





    handleClick = (event) => {
        event.preventDefault();
        if (this.state.understanding === '') {
            swal('Please select a rating!')
        } else {
            this.props.dispatch({
                type: 'SET_UNDERSTANDING',
                payload: this.state.understanding
            })
            this.props.history.push('/support')
        }
    }

    handleBackButton = () => {
        console.log('back button clicked');
        this.props.history.push('/feelings')
    }


    render() {


        return (
            <div>
                <h1>UNDERSTANDING</h1>
                <form>
                    <h3>How well are you understanding the content?</h3>
                    <input onClick={this.handleRadio} className="radioBtn" type="radio" name="understanding" value="1" /> 1
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="understanding" value="2" /> 2
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="understanding" value="3" /> 3
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="understanding" value="4" /> 4
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="understanding" value="5" /> 5
                <br />
                    <br />
                    <button onClick={this.handleBackButton}>GO BACK</button>
                    <button onClick={this.handleClick}>NEXT</button>
                </form>

            </div>
        )
    }
}




export default connect()(Understanding);