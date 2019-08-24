import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {



    handleClick = () => {
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
                <button onClick={this.handleClick}>SUBMIT REVIEW</button>
                {/* {JSON.stringify(this.props.allFeedback)} */}
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