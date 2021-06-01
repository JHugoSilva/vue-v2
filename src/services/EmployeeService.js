/**
 * file:src/services/EmployeeService.js
 * data:06/01/2021
 * description:arquivo responsável pelos métodos de requisição das Apís via HTTP
 * author:Hugo Silva
 */

import Api from './Api';

export default {
    /**
    * Método responsável por criar um novo(a) 'Employee'
    *  (POST): localhost:3000/api/employees
    */
    async createNewEmployee(employee) {
        try {
            const response = await Api().post('/employees', employee);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * Método responsável por listar todos os 'Employees'
     *  (GET): localhost:3000/api/employees
     */
    async getEmployees() {
        try {
            const response = await Api().get('/employees');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * Método responsável por listar os 'Employees' por Id
     * (GET): localhost:3000/api/employees/:id
     */
    async getEmployeeId(id) {
        try {
            const response = await Api().get(`/employees/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    /**
    * Método responsável por atualizar um novo(a) 'Employee'
    *  (PUT): localhost:3000/api/employees/:id
    */
    async updateEmployee(id) {
        try {
            const response = await Api().put(`/employees/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    /**
    * Método responsável por deletar um 'Employee'
    *  (DELETE): localhost:3000/api/employees/:id
    */
    async deleteEmployee(id) {
        try {
            const response = await Api().delete(`/employees/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
};

