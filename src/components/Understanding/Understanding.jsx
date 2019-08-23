import React, { Component } from 'react';


class Understanding extends Component {

    handleClick = () => {
        this.props.history.push('/comments')
    }

    render() {


        return (
            <div>
                <h1>UNDERSTANDING</h1>
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}




export default Understanding;