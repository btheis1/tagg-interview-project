import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class ChoreDashboard extends Component {
   state = {chores: []}
   
   componentDidMount() {
       axios.get("http://localhost:3001/chores/")
        .then(response => {
            this.setState({chores: response.data})
        })
        .catch(function(err) {
            console.log(err)
        });
    }
    
    choreDashboard() {
        return this.state.chores.
    }
    render() {
        return (
            <div>
                <h3>Chore Dashboard Component</h3>
            </div>
        )
    }
}

export default ChoreDashboard;