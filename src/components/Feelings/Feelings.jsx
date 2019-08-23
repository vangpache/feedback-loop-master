import React, { Component } from 'react';
// import Understanding from '../Understanding/Understanding';


class Feelings extends Component {

    handleClick = () => {
        this.props.history.push('/understanding')
    }

    render() {


        return (
            <div>
                <h1>FEELINGS</h1>
                <h3>How are you feeling today?</h3>
                <input className="radioBtn" type="radio"/> 1
                <input className="radioBtn"  type="radio" /> 2
                <input className="radioBtn"  type="radio" /> 3
                <input className="radioBtn"  type="radio" /> 4
                <input className="radioBtn"  type="radio" /> 5
                <br/>
                <br />
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}




export default Feelings;