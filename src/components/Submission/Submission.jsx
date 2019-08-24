import React, { Component } from 'react';


class Submission extends Component {

    handleClick = () => {
        this.props.history.push('/feelings')
    }


    render() {


        return (
            <div>
                <h1>SUBMISSION</h1>
                <h2>Thank You!</h2>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        )
    }
}




export default Submission;