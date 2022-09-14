import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee';
import { NgForm } from '@angular/forms';
import { EmployeesService } from '../../Services/employees.service';
import { AuthService } from '../../Services/auth.service';

//import { HistoriqueFormation } from 'src/app/models/HistoriqueFormation';

//import { cpuUsage } from 'process';



@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})

export class ProfileEditComponent implements OnInit {

  addE: any = {};
  public uptC = {'company_name':'Focus Technologies','contact_person':'Daniel Porter','address' : '3434 quiet valley lane, sherman oaks ca, 94344', 'country' : 'USA',  'city' : 'Sherman Oaks',    'state' : 'California',    'postal_code' : '98988',    'email' : 'danielporter@example.com',    'phone_number' : '9878187102',    'mobile_number' : '7051403258',    'fax' : '8189875527',    'url' : 'www.wxample.com'  };
  uptCompany:boolean = false;
  updateCompany(f)  { let json = JSON.stringify(f.form.value); json = json.replace(/,/g,', ');    this.uptCompany = true;  }


  historiqueFormation :any = []
  employee : Employee;

    private fieldArray: Array<any> = [];


    public newAttribute: any = {};

    constructor(private employeesService: EmployeesService, private authService: AuthService) {this.employee = new Employee(); }

    addFieldValue() {

       this.fieldArray.push(this.newAttribute)
       this.newAttribute = {};

        /*console.log(this.fieldArray)
        console.log(this.newAttribute)*/
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe((employees: Employee[]) => {
      const userId = Number(this.authService.userValue.id)
      const currentUser = employees.filter((employee: Employee) => Number(employee.UserId) === userId )[0]
      this.employee = currentUser
    })

    this.newAttribute.AnneeFormation='';
    this.newAttribute.NombreJours='';
    this.newAttribute.SpecialiteFormation='';
    this.newAttribute.OrganismeFormation='';

    }

  /* AddRowHisto(){

    let data = {} as HistoriqueFormation;
    data.AnneeFormation='';
    data.NombreJours='';
    data.SpecialiteFormation='';
    data.OrganismeFormation='';

  this.historiqueFormation.push(data);
  // console.log(this.historiqueFormation)
  //this.employee.historiqueFormation= this.historiqueFormation

}*/

  createEmp(form: NgForm){

    console.log(this.fieldArray)
    console.log(this.newAttribute)

     this.employeesService.createEmployee(this.employee).subscribe(result => {
     console.log("result ==>", result)
     this.employee=result
     })

    }
  }
