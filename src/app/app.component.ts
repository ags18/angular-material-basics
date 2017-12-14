import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Employee, AppService,cities }  from './app.service';
import { Validators, FormBuilder,FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cities=cities;
  employee$: Observable<Employee>;
  employeeForm: FormGroup; // <--- employeeForm is of type FormGroup
  employeeNewForm: FormGroup;
  id;
  newEmployee=false;
  employee: Employee;
  
  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    private service: AppService,
    private fb: FormBuilder
  ) {  }

  // public id: number, 
  // public fname: string,
  // public jobDesp: string,
  // public city: string,
  // public gender: string,
  // public joiningDate: string,
  // public slide: string,
  // public autoComp: string,
  // public terms: string,

  createForm() {
    //alert("create form");
    this.employeeForm = this.fb.group({
      fname: new FormControl('',Validators.required ),
      jobDesp: new FormControl('',Validators.required ),
      city: new FormControl('', Validators.required),
      gender: new FormControl('',Validators.required ),
      joiningDate: new FormControl('',Validators.required ),
      slide: new FormControl('',Validators.required ),
      autoComp: new FormControl('',Validators.required ),
      terms: new FormControl('',Validators.required ),
    });
  }
  ngOnInit() {
    this.createForm();
  }

  gotoEmployees() {
    let employee:Employee=new Employee(
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
  }
}