import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleChange = (event) => {
        this.setState ({
            comments: event.target.value
        })
    }

    handleClick = (event) => {
        this.props.dispatch ({
            type: 'SET_COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/review')
    }

    render() {


        return (
            <div>
                <h1>COMMENTS</h1>
                <h3>Any comments you want to leave:</h3>
                <form onSubmit={this.handleClick}>
                    <input size="100" type="text" placeholder="Type comments Here" onChange={this.handleChange}/>
                    <br />
                    <br />
                    <button>NEXT</button>
                    
                </form>
               
                
            </div>
        )
    }
}

// const mapToProps = reduxStore => {
//     return {
//         reduxStore
//     }
// }


// export default connect(mapToProps)(Comments);


export default connect () (Comments);