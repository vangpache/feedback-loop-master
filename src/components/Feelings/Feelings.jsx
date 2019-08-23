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
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}




export default Feelings;