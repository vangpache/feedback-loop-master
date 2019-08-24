import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';


class Feelings extends Component {

    state = {
        feeling: ''
    }


    handleRadio = (event) => {
        return this.setState ({
            feeling: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        if(this.state.feeling === '') {
            swal('Please select a rating!')
        } else {
            this.props.dispatch({
                type: 'SET_FEELING',
                payload: this.state.feeling
            })
            this.props.history.push('/understanding')
        }
    }

    render() {


        return (
            <div>
                <h1>FEELINGS</h1>
                <h3>How are you feeling today?</h3>
                <form onSubmit={this.handleClick}>
                
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="1"/> 1
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="2"/> 2
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="3" /> 3
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="4" /> 4
                <input onClick={this.handleRadio} className="radioBtn" type="radio" value="5" /> 5
                <br />
                    <br />
                    <button>NEXT</button>
                </form>
                {/* {JSON.stringify(this.state)} */}
                
            </div>
        )
    }
}




export default connect() (Feelings);