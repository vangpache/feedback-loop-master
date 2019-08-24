import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';

import { Face } from '@material-ui/icons';



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
                <Face />
                <h3>How are you feeling today?</h3>
                
                <form >
                
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="1"/> 1
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="2"/> 2
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="3" /> 3
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="4" /> 4
                <input onClick={this.handleRadio} className="radioBtn" type="radio" value="5" /> 5
                <br />
                    <br />
                    <Button onClick={this.handleClick} variant="outlined" color="primary">NEXT</Button>
                </form>
                {/* {JSON.stringify(this.state)} */}
                
            </div>
        )
    }
}




export default connect() (Feelings);