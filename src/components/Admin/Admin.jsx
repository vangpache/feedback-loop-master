import React, { Component } from 'react';
import { connect } from 'react-redux';



class Admin extends Component {



    render() {
    

        //map data and render in table
        let feedback = this.props.reduxStore.getAllFeedBack.map(each => {
            return (
                <tr key={each.id}>
                    <td>{each.feeling}</td>
                    <td>{each.understanding}</td>
                    <td>{each.support}</td>
                    <td>{each.comments}</td>
                    <td><button>Delete</button></td>
                </tr>
            )
        })


        return (

            <div>
                <h1>ADMIN: FEEDBACK RESULZZZT</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedback}
                    </tbody>
                </table>
                {/* {JSON.stringify(this.props.reduxStore.getAllFeedBack)} */}
            </div>
        )
    }
}


const mapsToProps = (reduxStore) => {
    return {
        reduxStore
    }
}


export default connect(mapsToProps) (Admin);