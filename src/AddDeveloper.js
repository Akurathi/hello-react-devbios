import React, { Component } from 'react';
import Developer from './Developer';
import { withRouter } from 'react-router-dom';

class AddDeveloper extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            favoriteDevLanguage:'',
            yearStarted:null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.addDeveloper(
            new Developer(
                null,
                this.state.firstName,
                this.state.lastName,
                this.state.favoriteDevLanguage,
                this.state.yearStarted
            )
        );
        this.clearForm();
    }

    clearForm = () =>{
        this.setState({
            firstName:'',
            lastName:'',
            favoriteDevLanguage:'',
            yearStarted:null
        })
        document.getElementById("devForm").reset();
        this.props.history.push("/bios");
    }

    render(){
        return (
            <div className="container">
                <h1>Add New Developer Bio</h1>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.submitForm} id="devForm">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" className="form-control" onChange={this.handleChange}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" className="form-control" onChange={this.handleChange}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="favoriteLanguage">Favorite Language</label>
                                <input type="text" name="favoriteDevLanguage" className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="yearStarted">Year Started</label>
                                <input type="text" name="yearStarted" className="form-control" onChange={this.handleChange}  />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success"  >Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(AddDeveloper);