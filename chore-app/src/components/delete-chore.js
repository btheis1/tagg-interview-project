import React, { Component } from "react";
import axios from "axios";


class DeleteBtn extends Component {
    
    deleteChore() {
        axios.post("http://localhost:3001/chores/delete/" + this.params._id)
         .then(res => console.log("Chore deleted"))

        
    }

    render() {
        return(
            <span className="btn btn-outline-primary btn-sm m-0" role="button" tabIndex="0" onClick={this.deleteChore}>
            Delete
        </span>
        
        )
    } 
        
}

export default DeleteBtn;