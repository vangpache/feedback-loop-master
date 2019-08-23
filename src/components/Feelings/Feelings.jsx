import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Understanding from '../Understanding/Understanding';


class Feelings extends Component {

    state = {
        feeling: ''
    }



    handleRadio = (event) => {
        // event.preventDefault();
        if (event.target.value === '1') {
            return this.setState({
                feeling: event.target.value
            })
        } else if (event.target.value === '2') {
            return this.setState({
                feeling: event.target.value
            })
        } else if (event.target.value === '3') {
            return this.setState({
                feeling: event.target.value
            })
        } else if (event.target.value === '4') {
            return this.setState({
                feeling: event.target.value
            })
        } else if (event.target.value === '5') {
            return this.setState({
                feeling: event.target.value
            });
        } else {
            alert('Please select a rating')
        }   
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling
        })
        this.props.history.push('/understanding')
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
                <input onClick={this.handleRadio} className="radioBtn" type="radio" name="feeling" value="5" /> 5
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