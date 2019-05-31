import React, { Component } from "react";
import axios from "axios";


class CreateChore extends Component {
    state = {
        description: "",
        assignee: "",
        dueDate: "",
        completed: false
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`Form submitted:`);
        console.log(`Description: ${this.state.description}`)
        console.log(`Assigned to: ${this.state.assignee}`)
        console.log(`Due date: ${this.state.dueDate}`);
        console.log(`Completed: ${this.state.completed}`);

        const newChore = {
            description: this.state.description,
            assignee: this.state.assignee,
            dueDate: this.state.dueDate,
            completed: this.state.completed

        }

        axios.post("http://localhost:3001/chores/add", newChore)
            .then(res => console.log(res.data));

        this.setState({
            description: "",
            assignee: "",
            dueDate: "",
            completed: false
        });
    }
    render() {
        return (
            <div className="container">
                <h3>Add Chore Component</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                        />
                    </div>
                    <div className="form-group">
                        <label>Assigned to: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.assignee}
                            onChange={this.handleInputChange}
                            name="assignee"
                        />
                    </div>
                    <div className="form-group">
                        <label>Due Date: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.dueDate}
                            onChange={this.handleInputChange}
                            name="dueDate"
                        />
                    </div>
                    <input type="submit" 
                        value="Add Chore"
                        className="btn btn-primary"
                        onClick = {this.handleFormSubmit}
                        />
                    
                </form>
            </div>
        )
    }
}

export default CreateChore;