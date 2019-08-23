import React, { Component } from 'react';


class Comments extends Component {

    handleClick = () => {
        this.props.history.push('/review')
    }

    render() {


        return (
            <div>
                <h1>COMMENTS</h1>
                <h3>Any comments you want to leave:</h3>
                <form>
                    <input size="100" type="text" placeholder="Type comments Here" />
                    <br />
                    <br />
                    <button onClick={this.handleClick}>NEXT</button>
                </form>
                
            </div>
        )
    }
}




export default Comments;