import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const Chore = props => (
    <tr>
        <td className={props.chore.completed ? "completed" : ""}>{props.chore.description}</td>
        <td className={props.chore.completed ? "completed" : ""}>{props.chore.assignee}</td>
        <td className={props.chore.completed ? "completed" : ""}>{props.chore.dueDate}</td>
        <td><span className="glyphicon glyphicon-ok"></span></td> 
    </tr>
)

class ChoreDashboard extends Component {
   state = {chores: []}
   
   componentDidMount() {
       axios.get("http://localhost:3001/chores/")
        .then(response => {
            console.log(response.data);
            this.setState({chores: response.data})
        })
        .catch(function(err) {
            console.log(err)
        });
    }
    
    choreDashboard() {
        return this.state.chores.map(function(currentChore, i) {
            return <Chore chore={currentChore} key={i} />
        });
    }

    render() {
        return (
            <div>
                <h3>Chore Dashboard</h3>
                <table className="table table-striped" style={{marginTop: 30}}>
                    <thead>
                        <tr>
                            <th>Chore:</th>
                            <th>Assigned To:</th>
                            <th>Due Date:</th>
                            <th>Completed?</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.choreDashboard() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ChoreDashboard;