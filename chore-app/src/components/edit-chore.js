import React, { Component } from "react";
import axios from "axios";


class EditChore extends Component {
    
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            description: "",
            assignee: "",
            dueDate: "",
            completed: false
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/chores/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    assignee: response.data.assignee,
                    dueDate: response.data.dueDate,
                    completed: response.data.completed
                })
            })
            .catch(function(err) {
                console.log(err)
            });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const updatedChore = {
            description: this.state.description,
            assignee: this.state.assignee,
            dueDate: this.state.dueDate,
            completed: this.state.completed
        }

        axios.post("http://localhost:3001/chores/update/" + this.props.match.params.id, updatedChore)
            .then(res => console.log(res))
        
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <h3>Edit Chore</h3>
                <form onSubmit= {this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                        />
                    </div>
                    <div className="form-group">
                        <label>Assigned to:</label>
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
                            name="description"
                        />
                    </div>
                    <div className="form-group">
                        <label>Completed </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.completed}
                            onChange={this.handleInputChange}
                            name="completed"
                        />
                    </div>
                    <input type="submit" 
                        value="Update Chore"
                        className="btn btn-primary"
                        onClick = {this.handleFormSubmit}
                        />
                </form>
            </div>
        )
    }
}

export default EditChore;