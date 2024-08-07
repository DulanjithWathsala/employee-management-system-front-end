import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Department } from "../models/department.model";
import { Observable } from "rxjs";
import { Role } from "../models/role.model";
import { FormGroup, FormControl } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class registerService {
    constructor(private http: HttpClient) { }

    public retrieveDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>('http://localhost:8080/department/all');
    }

    public retrieveRoles(): Observable<Role[]> {
        return this.http.get<Role[]>('http://localhost:8080/role/all');
    }
}