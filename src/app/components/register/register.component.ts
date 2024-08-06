import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { registerService } from '../../services/register.service';
import { Department } from '../../models/department.model';
import { Role } from '../../models/role.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public departments: Department[] = [];
  public roles: Role[] = [];

  constructor(private registerSerive: registerService) { }

  public registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    contactNo: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    departmentId: new FormControl(''),
    roleId: new FormControl('')
  });

  ngOnInit(): void {
    this.fetchDepartments();
    this.fetchRoles();
  }

  private fetchDepartments(): void {
    this.registerSerive.retrieveDepartments().subscribe((data: Department[]) => {
      this.departments = data;
      console.log(this.departments);

    })
  }

  private fetchRoles(): void {
    this.registerSerive.retrieveRoles().subscribe((data: Role[]) => {
      this.roles = data;
      console.log(this.roles);

    })
  }

  public registerEmployee(): void {
    Swal.fire("SweetAlert2 is working!");
  }
}
