import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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

    render() {



        return (
            <div>
                <h1>REVIEW</h1>
                {/* {review} */}
                <div>
                    <h3 className="reviewh3">Feelings:</h3><span> {this.props.allFeedback.feeling}</span><br/>
                    <h3 className="reviewh3">Understanding:</h3><span> {this.props.allFeedback.understanding}</span><br />
                    <h3 className="reviewh3">Support:</h3><span> {this.props.allFeedback.support}</span><br />
                    <h3 className="reviewh3">Comments:</h3><span> {this.props.allFeedback.comments}</span><br />
                </div>
                <button onClick={this.handleBackButton}>GO BACK</button>
                <button onClick={this.handleClick}>SUBMIT REVIEW</button>
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