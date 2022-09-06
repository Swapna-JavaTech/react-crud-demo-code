import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";


 
class ListEmployeeComponent extends Component{
   
    constructor(props){
        super(props);
        //declaring state of react component
        this.state ={
            employees : []
        }

        this.addEmployee = this.addEmployee.bind(this);
       this.editEmployee = this.editEmployee.bind(this);
       this.deleteEmployee = this.deleteEmployee.bind(this);
       this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getAllEmployees().then((response) =>{
            this.setState({employees : response.data})
        })
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(
            res => {
                this.setState({
                    employees: this.state.employees
                                .filter(employee => employee.empId !== id)
                });
            });
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                <button type="button" className="btn btn-primary"
                                    onClick={this.addEmployee}>Add Employee</button>
                </div>
                <br /><br />
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Salary</th>
                                <th>Employee Location</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                               {
                                this.state.employees.map(
                                    emp =>
                                <tr key={emp.empId}>
                                    <td>
                                        {emp.empName}
                                    </td>
                                    <td>
                                        {emp.empSal}
                                    </td>
                                    <td>
                                        {emp.empLoc}
                                    </td>
                                    <td>
                                       <button type="button" 
                                            className="btn btn-primary" 
                                            onClick={ ()=>this.editEmployee(emp.empId)}>
                                            update
                                        </button>
                                       <button type="button" 
                                            className="btn btn-danger" 
                                            style={{marginLeft: "10px"}}
                                            onClick={ ()=>this.deleteEmployee(emp.empId)}>
                                                delete
                                        </button>
                                       <button type="button" 
                                            className="btn btn-default" 
                                            style={{marginLeft: "10px"}}
                                            onClick={ ()=>this.viewEmployee(emp.empId)}>
                                            View
                                      </button>
                                    </td>
                                </tr>
                                )
                               }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListEmployeeComponent