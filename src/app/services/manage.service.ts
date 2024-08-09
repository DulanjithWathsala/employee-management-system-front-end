import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";

@Injectable({ providedIn: 'root' })
export class ManageService {
    constructor(private http: HttpClient) { }

    public retrieveEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>('http://localhost:8080/employee/all');
    }
}