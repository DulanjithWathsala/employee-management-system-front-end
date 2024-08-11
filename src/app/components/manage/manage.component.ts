import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../services/manage.service';
import { Employee } from '../../models/employee.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {

  public employees: Employee[] = [];
  public selectedEmployee: Employee = {
    firstName: "",
    lastName: "",
    contactNo: "",
    email: "",
    address: "",
    departmentId: 0,
    roleId: 0
  };

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
    this.retriveAllEmployees();
  }

  private retriveAllEmployees(): void {
    this.manageService.retrieveEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    })
  }

  public updateEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }
}
