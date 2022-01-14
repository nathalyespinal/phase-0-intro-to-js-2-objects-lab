
const employee = {
    name: {},
    streetaddress : {},
};


    function updateEmployeeWithKeyAndValue(employee, key, value) {
        const newEmployee = {... employee};
        newEmployee [key] = value
            return employee, newEmployee;
    };

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key]  = value;
           return employee;
    }
    

    function deleteFromEmployeeByKey(employee, key) {
        const newEmployee = {... employee};
        delete newEmployee.key
        return employee = {};
    }


    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key]
        return employee;

    }

   
    

  
    






