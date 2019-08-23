import React, { Component } from 'react';


class Review extends Component {

    handleClick = () => {
        this.props.history.push('/submission')
    }

    render() {


        return (
            <div>
                <h1>REVIEW</h1>
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}




export default Review;