import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { registerService } from '../../services/register.service';
import { Department } from '../../models/department.model';
import { Role } from '../../models/role.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public departments: Department[] = [];
  public roles: Role[] = [];

  constructor(private registerSerive: registerService) { }

  public registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    contactNo: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    departmentId: new FormControl('', [
      Validators.required
    ]),
    roleId: new FormControl('', [
      Validators.required
    ])
  });

  ngOnInit(): void {
    this.fetchDepartments();
    this.fetchRoles();
  }

  private fetchDepartments(): void {
    this.registerSerive.retrieveDepartments().subscribe((data: Department[]) => {
      this.departments = data;
    })
  }

  private fetchRoles(): void {
    this.registerSerive.retrieveRoles().subscribe((data: Role[]) => {
      this.roles = data;
    })
  }

  private clearForm(): void {
    this.registerForm.reset();
  }

  public register(): void {
    const formValue = this.registerForm.value;

    if (this.registerForm.invalid) {
      Swal.fire({
        title: "Try Again!",
        text: "Text fields can't be empty",
        icon: "warning"
      });
    }

    if (this.registerForm.valid) {
      const employee: Employee = {
        firstName: formValue.firstName!, // Using Non-null assertion operator to tell Typescript to assume these properties will not be 'null' or 'undefined'
        lastName: formValue.lastName!,
        contactNo: formValue.contactNo!,
        email: formValue.email!,
        address: formValue.address!,
        departmentId: Number(formValue.departmentId),
        roleId: Number(formValue.roleId)
      }

      this.registerSerive.registerEmployee(employee).subscribe(data => {
        console.log(data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Employee Saved Successfully",
          showConfirmButton: false,
          timer: 1500
        });

        this.clearForm();
      })
    }
  }
}
