import React, { Component } from 'react';


class Support extends Component {

    handleClick = () => {
        this.props.history.push('/comments')
    }

    render() {


        return (
            <div>
                <h1>SUPPORT</h1>
                <h3>How well are you being supported?</h3>
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




export default Support;