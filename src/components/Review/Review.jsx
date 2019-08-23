import React, { Component } from 'react';


class Review extends Component {

    handleClick = () => {
        this.props.history.push('/submission')
    }

    render() {


        return (
            <div>
                <h1>REVIEW</h1>
                <div>
                    <h3>Feelings:</h3>
                    <h3>Understanding:</h3>
                    <h3>Support:</h3>
                    <h3>Comments:</h3>
                </div>
                <button onClick={this.handleClick}>SUBMIT REVIEW</button>
            </div>
        )
    }
}




export default Review;