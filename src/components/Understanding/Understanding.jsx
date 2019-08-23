import React, { Component } from 'react';


class Understanding extends Component {

    handleClick = () => {
        this.props.history.push('/support')
    }

    render() {


        return (
            <div>
                <h1>UNDERSTANDING</h1>
                <h3>How well are you understanding the content?</h3>
                <input className="radioBtn" type="radio" /> 1
                <input className="radioBtn" type="radio" /> 2
                <input className="radioBtn" type="radio" /> 3
                <input className="radioBtn" type="radio" /> 4
                <input className="radioBtn" type="radio" /> 5
                <br />
                <br />
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}




export default Understanding;