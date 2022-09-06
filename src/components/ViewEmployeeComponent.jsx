import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component{

    constructor(props){
        super(props);
        //declaring state of react component
        this.state ={
            empId : this.props.match.params.id,
            employee : {}
        }

        this.goBack = this.goBack.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.empId).then((response) =>{
            this.setState({employee : response.data})
        })
    }

    goBack(){
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <br /><br />
                <div className="card col-md-6 offset-md-3 ">
                    <h3 className="text-center">View Employee Profile</h3>
                        <div className="card-body">
                            <div className="row">
                                <label><b>Employee Name :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.employee.empName}</div>
                            </div>
                            <div className="row">
                                <label><b>Employee Salary :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.employee.empSal}</div>
                            </div>
                            <div className="row">
                                <label><b>Employee Location :</b></label>
                                <div style={{marginLeft:"10px"}}>{this.state.employee.empLoc}</div>
                            </div>
                            <div className="row">
                                <button type="button" className="btn btn-primary"
                                onClick={()=>this.goBack}>
                                    List of Employees
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent