<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add New Employee</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!--INICIO DO BLOCO: Employee Name-->
          <div class="form-group">
            <label class="font-weight-bold" for="name">Employee Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Type your Name"
              v-model="employeeForm.name"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.name.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.name.required"
              class="invalid-feedback"
            >
              Employee 'Name' field is required!
            </div>
          </div>
          <!--FIM DO BLOCO: Employee Name-->
          <!--INICIO DO BLOCO:Job Role-->
          <div class="form-group">
            <label class="font-weight-bold" for="job-role">Job Role</label>
            <input
              type="text"
              id="job-role"
              name="job-role"
              class="form-control"
              placeholder="Type your You Job Role"
              v-model="employeeForm.job_role"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.job_role.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.job_role.required"
              class="invalid-feedback"
            >
              Employee 'Job' Role field is required!
            </div>
          </div>
          <!--FIM DO BLOCO: Job Role-->
          <!--INICIO DO BLOCO:Salary-->
          <div class="form-group">
            <label class="font-weight-bold" for="salary">Salary</label>
            <input
              type="number"
              name="salary"
              id="salary"
              class="form-control"
              placeholder="Your Salary"
              v-model="employeeForm.salary"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.salary.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.salary.required"
              class="invalid-feedback"
            >
              Employee 'Salary' field is required!
            </div>
          </div>
          <!--FIM DO BLOCO: Salary-->
          <!--INICIO DO BLOCO:Birth-->
          <div class="form-group">
            <label class="font-weight-bold" for="birth">Birth</label>
            <input
              type="number"
              id="birth"
              name="birth"
              class="form-control"
              placeholder="Your Birth"
              v-model="employeeForm.birth"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.birth.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.employeeForm.birth.required"
              class="invalid-feedback"
            >
              Employee 'Birth' field is required!
            </div>
          </div>
          <!--FIM DO BLOCO: Birth-->
          <!--INICIO DO BLOCO:Registration-->
          <div class="form-group">
            <label class="font-weight-bold" for="registration"
              >Registration</label
            >
            <input
              type="number"
              id="registration"
              name="registration"
              class="form-control"
              placeholder="Your Registration"
              v-model="employeeForm.employee_registration"
              :class="{
                'is-invalid':
                  isSubmitted && $v.employeeForm.employee_registration.$error,
              }"
            />
            <div
              v-if="
                isSubmitted && !$v.employeeForm.employee_registration.required
              "
              class="invalid-feedback"
            >
              Employee 'Registration' field is required!
            </div>
          </div>
          <!--FIM DO BLOCO: Registration-->
          <div class="form-group">
            <button @click="submitNewEmployee" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./CreateEmployee.js">
</script>