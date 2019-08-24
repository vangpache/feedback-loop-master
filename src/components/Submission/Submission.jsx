import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Submission extends Component {

    handleClick = () => {
        this.props.history.push('/feelings')
    }


    render() {


        return (
            <div>
                <h1>SUBMISSION</h1>
                <h2>Thank You!</h2>
                <Button onClick={this.handleClick} variant="outlined" color="primary">Leave New Feedback</Button>
            </div>
        )
    }
}




export default Submission;