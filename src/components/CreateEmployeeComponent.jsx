import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            empId : this.props.match.params.id,
            empName: '',
            empSal: 0.0,
            empLoc: ''
        }
        this.changeEmpNameHandler =  this.changeEmpNameHandler.bind(this);
        this.changeEmpSalHandler =  this.changeEmpSalHandler.bind(this);
        this.changeEmpLocHandler =  this.changeEmpLocHandler.bind(this);
        this.saveOrUpdateEmployee =  this.saveOrUpdateEmployee.bind(this);
    }

    changeEmpNameHandler = (event) =>{
            this.setState({empName:event.target.value})
    }

    changeEmpSalHandler = (event) =>{
        this.setState({empSal:event.target.value})
    }

    changeEmpLocHandler= (event) =>{
        this.setState({empLoc:event.target.value})
    }

    cancel(){
        this.props.history.push('/employees');
    }

    componentDidMount(){
        if(this.state.empId ==='_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.empId).then(
                (response)  =>{
                    let employee = response.data;
                    this.setState({
                        empName: employee.empName,
                        empSal: employee.empSal,
                        empLoc: employee.empLoc
                    });
                }
            );
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            empName: this.state.empName,
            empSal: this.state.empSal,
            empLoc: this.state.empLoc
        }
        console.log("employee => " + JSON.stringify(employee));

        if(this.state.empId ==='_add'){
            EmployeeService.saveEmployee(employee)
            .then((response) => {
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee,this.state.empId)
            .then((response) => {
                this.props.history.push('/employees');
            });
        }
    }

    getTitle(){
        if(this.state.empId === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <br /><br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Employee Name</label>
                                        <input type="text" name="empName" 
                                        className="form-control" 
                                        placeholder="Enter Emp Name"
                                        value={this.state.empName}
                                        onChange={this.changeEmpNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Employee Salary</label>
                                        <input type="text" name="empSal" 
                                        className="form-control" 
                                        placeholder="Enter Emp Salary"
                                        value={this.state.empSal}
                                        onChange={this.changeEmpSalHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Employee Location</label>
                                        <input type="text" name="empLoc" 
                                        className="form-control" 
                                        placeholder="Enter Emp Location"
                                        value={this.state.empLoc}
                                        onChange={this.changeEmpLocHandler}/>
                                    </div>
                                    <button type="button" className="btn btn-success"
                                    onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button type="button" 
                                    style={{marginLeft:"10px"}}
                                    onClick = {this.cancel.bind(this)}
                                    className="btn btn-danger">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent