import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { registerService } from '../../services/register.service';
import { Department } from '../../models/department.model';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public departments: Department[] = [];
  public roles: Role[] = [];

  constructor(private registerSerive: registerService) { }

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
}
