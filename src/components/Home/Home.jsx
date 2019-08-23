import React, { Component } from 'react';


class Home extends Component {

    handleClick = () => {
        this.props.history.push('/feelings')
    }

    render() {


        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.handleClick}>Enter Feedback</button>
            </div>
        )
    }
}




export default Home;