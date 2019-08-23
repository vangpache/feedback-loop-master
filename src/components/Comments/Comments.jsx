import React, { Component } from 'react';


class Comments extends Component {

    handleClick = () => {
        this.props.history.push('/review')
    }

    render() {


        return (
            <div>
                <h1>COMMENTS</h1>
                <button onClick={this.handleClick}>NEXT</button>
            </div>
        )
    }
}




export default Comments;