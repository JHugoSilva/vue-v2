/**
 * file:src/components/pages/create-employee/CreateEmployee.js
 * data:06/01/2021
 * author:Hugo Silva
 */

import { required } from 'vuelidate/lib/validators';
import EmployeeService from '../../../services/EmployeeService';


export default {
    name: "Create Employee",
    data() {
        return {
            employeeForm: {
                name: null,
                job_role: null,
                salary: null,
                birth: null,
                employee_registration: null,
            },
            isSubmitted: false,
        };
    },
    validations: {
        employeeForm: {
            name: { required },
            job_role: { required },
            salary: { required },
            birth: { required },
            employee_registration: { required },
        },
    },
    methods: {
        handleSubmitForm() {
            this.isSubmitted = true;

            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
        },
        async submitNewEmployee() {
            try {
                await EmployeeService.createNewEmployee(this.employeeForm);
                this.$router.push({
                    name: "list",
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
};