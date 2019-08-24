import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { DoneOutline } from '@material-ui/icons';

class Review extends Component {

    state = {
        feeling: this.props.allFeedback.feeling,
        understanding: this.props.allFeedback.understanding,
        support: this.props.allFeedback.support,
        comments: this.props.allFeedback.comments
    }

    handleClick = () => {
        //setup server then: POST info to server
        axios.post('/feedback', this.state )
        .then((result) => {
            console.log('in client POST:', result);
            
        }).catch((error) => {
            console.log('in client POST error:', error);
            
        })
        // this.getFeedback();
        this.props.history.push('/submission')
    }

    handleBackButton = () => {
        this.props.history.push('/comments')
    }

    render() {



        return (
            <div>
                <DoneOutline />
                <h1>REVIEW</h1>
                {/* {review} */}
                <div>
                    <h3 className="reviewh3">Feelings:</h3><span> {this.props.allFeedback.feeling}</span><br/>
                    <h3 className="reviewh3">Understanding:</h3><span> {this.props.allFeedback.understanding}</span><br />
                    <h3 className="reviewh3">Support:</h3><span> {this.props.allFeedback.support}</span><br />
                    <h3 className="reviewh3">Comments:</h3><span> {this.props.allFeedback.comments}</span><br />
                </div>
                <Button onClick={this.handleBackButton} variant="outlined" color="primary">GO BACK</Button>
                <Button onClick={this.handleClick} variant="outlined" color="primary">SUBMIT REVIEW</Button>
                {/* {JSON.stringify(this.state)} */}
            </div>
        )
    }
}

const mapToProps = reduxStore => {
    return {
        allFeedback: reduxStore.feedbackReducer
    }
}

// export default Review;
export default connect(mapToProps) (Review);