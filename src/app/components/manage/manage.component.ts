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
    id: 0,
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

  public deleteEmployee(id: Number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.manageService.deleteEmployee(id).subscribe(data => {
          console.log(data);

          Swal.fire({
            title: "Deleted!",
            text: "Employee has been deleted.",
            icon: "success"
          });

          this.retriveAllEmployees();
        })
      }
    });


  }
}
