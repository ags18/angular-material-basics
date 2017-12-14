import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Employee, AppService, cities } from './app.service';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cities = cities;
  filteredStates: Observable<any[]>;
  employee$: Observable<Employee>;
  employeeForm: FormGroup; // <--- employeeForm is of type FormGroup
  id;
  newEmployee = false;
  employee: Employee;
  employees:Employee[];
  dataSource;
  displayedColumns = ['id', 'name', 'gender', 'joiningDate'];

  constructor(
    private service: AppService,
    private fb: FormBuilder
  ) {}

  createForm() {
    this.employeeForm = this.fb.group({
      fname: new FormControl('', Validators.required),
      jobDesp: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      joiningDate: new FormControl('', Validators.required),
      slide: new FormControl('', Validators.required),
      slider: new FormControl('', Validators.required),
      autoComp: new FormControl('', Validators.required),
      terms: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
    this.createForm();
    
  }

  gotoEmployees() {
    let employee: Employee = new Employee(
      this.id,
      this.employeeForm.controls.fname.value,
      this.employeeForm.controls.jobDesp.value,
      this.employeeForm.controls.city.value,
      this.employeeForm.controls.gender.value,
      this.employeeForm.controls.joiningDate.value,
      this.employeeForm.controls.slide.value,
      this.employeeForm.controls.autoComp.value,
      this.employeeForm.controls.terms.value,
    )
    this.service.add(employee);
    this.service.getEmployees().subscribe((data)=>{this.employees=data});
    
    this.dataSource = new MatTableDataSource<Employee>(this.employees);
  }
}