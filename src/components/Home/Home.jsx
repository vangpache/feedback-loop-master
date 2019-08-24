import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Home extends Component {

    handleClick = () => {
        this.props.history.push('/feelings')
    }

    render() {


        return (
            <div>
                {/* <h1>Home</h1> */}
                <Button onClick={this.handleClick} variant="outlined" color="primary">Enter Feedback</Button>
            </div>
        )
    }
}




export default Home;