import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Employee {
  constructor(
    public id: number, 
    public fname: string,
    public jobDesp: string,
    public city: string,
    public gender: string,
    public joiningDate: string,
    public slide: string,
    public autoComp: string,
    public terms: string,
    
  ) { }
}

const EMPLOYEES = [
  new Employee(11, 'June','Assistant','CA','female','2016-12-13','1','something','true'),

];

export const cities = ['CA', 'MD', 'OH', 'VA'];

@Injectable()
export class AppService {
  id:number=17;
  getEmployees() { return Observable.of(EMPLOYEES); }

  getEmployee(id: number | string) {
    return this.getEmployees()
      // (+) before `id` turns the string into a number
      .map(employees => employees.find(employee => employee.id === +id));
  }

//    edit(id: number,editemployee:Employee){
//      for(let employee of EMPLOYEES){
//        if(id==employee.id){
//          employee.fname=editemployee.fname;
//          employee.lastname=editemployee.lastname;
//          employee.email=editemployee.email;
//          employee.joiningDate=editemployee.joiningDate;
//          break;
//        }
//      }
//    }
   
   add(addEmployee:Employee){
     addEmployee.id=this.id++;
      EMPLOYEES.push(addEmployee);

   }
}