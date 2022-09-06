import axios from "axios";

class EmployeeService{

    getAllEmployees(){
        return axios.get("http://localhost:8088/employee/listemployees")
    }

    saveEmployee(employee){
        return axios.post("http://localhost:8088/employee/saveemployee",employee)
    }

    getEmployeeById(employeeId){
        return axios.get("http://localhost:8088/employee/findemployee/"+employeeId);
    }

    updateEmployee(employee,employeeId){
        return axios.put("http://localhost:8088/employee/updateemployee/"+employeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete("http://localhost:8088/employee/deleteemployee/"+employeeId);
    }
}

export default new EmployeeService();