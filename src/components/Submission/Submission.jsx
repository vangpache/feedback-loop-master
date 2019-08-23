import React, { Component } from 'react';


class Submission extends Component {

    handleClick = () => {
        this.props.history.push('/')
    }


    render() {


        return (
            <div>
                <h1>SUBMISSION</h1>
                <button onClick={this.handleClick}>Enter New Feedback</button>
            </div>
        )
    }
}




export default Submission;