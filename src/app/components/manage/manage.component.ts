import { Component, OnInit } from '@angular/core';
import { ManageService } from '../../services/manage.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {

  private employees: Employee[] = [];

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
    this.retriveAllEmployees();
  }

  private retriveAllEmployees(): void {
    this.manageService.retrieveEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    })
  }
}
