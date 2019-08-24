import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Button from '@material-ui/core/Button';

import 'typeface-roboto';

import {Delete} from '@material-ui/icons';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Admin extends Component {
    componentDidMount() {
        this.getFeedback();
    }


    getFeedback = () => {
        console.log('in GET FEEDBACK function');
        axios.get('/feedback')
            .then((response) => {
                console.log('in getFeedback:', response);
                this.props.dispatch({
                    type: 'GET_FEEDBACK',
                    payload: response.data
                })
            }).catch((error) => {
                console.log('in getFeedback ERROR:', error);
            })
    }


    handleDelete = (id) => {
        console.log('delete button clicked');
        console.log({ id });

        //PUT 
        axios.delete(`/feedback/${id}`)
            .then((response) => {
                console.log('in DELETE:', response);
                this.getFeedback();
            }).catch((error) => {
                console.log('in DELETE error:', error);
            })
    }




    render() {


      

        let feedback = this.props.reduxStore.getAllFeedBack.map(each => {
            return (
                <TableRow key={each.id}>
                    <TableCell>{each.feeling}</TableCell>
                    <TableCell>{each.understanding}</TableCell>
                    <TableCell>{each.support}</TableCell>
                    <TableCell>{each.comments}</TableCell>
                    <TableCell><Button onClick={() => this.handleDelete(each.id)} variant="outlined" color="secondary"><Delete /></Button></TableCell>
                </TableRow>
            )
        })



        return (

            <div>

                <div className="adminHeadingDiv">
                    <h1>ADMIN VIEW: STUDENT FEEDBACK</h1>
                </div>
                
                <div className="adminTableDiv">
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Feeling</TableCell>
                                    <TableCell>Comprehension</TableCell>
                                    <TableCell>Support</TableCell>
                                    <TableCell>Comments</TableCell>
                                    <TableCell>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {feedback}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
               
    
                {/* {JSON.stringify(this.props.reduxStore.getAllFeedBack)} */}
                {/* {JSON.stringify(this.state.collection)} */}
            </div>
        )
    }
}


const mapsToProps = (reduxStore) => {
    return {
        reduxStore
    }
}


export default connect(mapsToProps)(Admin);