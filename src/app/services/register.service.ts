import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Department } from "../models/department.model";
import { Observable } from "rxjs";
import { Role } from "../models/role.model";

@Injectable({ providedIn: 'root' })
export class registerService {

    private departmentUrl = 'http://localhost:8080/department/all';
    private roleUrl = 'http://localhost:8080/role/all';

    constructor(private http: HttpClient) { }

    public retrieveDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(this.departmentUrl);
    }

    public retrieveRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(this.roleUrl);
    }
}