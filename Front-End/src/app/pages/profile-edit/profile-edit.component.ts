import { Component, OnInit, ViewChild } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { Employee } from 'src/app/models/employee';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { EmployeesService } from 'src/Services/employees.service';
import { HistoriqueFormation } from 'src/app/models/HistoriqueFormation';



@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})

export class ProfileEditComponent implements OnInit {

  public myDatePickerOptions1: IMyDpOptions = {todayBtnTxt: 'Today',dateFormat: 'dd-mm-yyyy',firstDayOfWeek: 'su', sunHighlight: true,inline: false,height: '38px'  };
  addE: any = {};
  public uptC = {'company_name':'Focus Technologies','contact_person':'Daniel Porter','address' : '3434 quiet valley lane, sherman oaks ca, 94344', 'country' : 'USA',  'city' : 'Sherman Oaks',    'state' : 'California',    'postal_code' : '98988',    'email' : 'danielporter@example.com',    'phone_number' : '9878187102',    'mobile_number' : '7051403258',    'fax' : '8189875527',    'url' : 'www.wxample.com'  };
  uptCompany:boolean = false;
  updateCompany(f)  { let json = JSON.stringify(f.form.value); json = json.replace(/,/g,', ');    this.uptCompany = true;  }


  historiqueFormation :any = []
  employee : Employee;

  constructor(private employeesService: EmployeesService) {

    this.employee = new Employee();

   }

  ngOnInit() {
/*
    let data = {} as HistoriqueFormation;
    data.AnneeFormation='';
    data.NombreJours='';
    data.SpecialiteFormation='';
    data.OrganismeFormation='';
   this.historiqueFormation.push(data)*/

    }

   DeleteRow(){

   }

   AddRowHisto(){

    let data = {} as HistoriqueFormation;
    data.AnneeFormation='';
    data.NombreJours='';
    data.SpecialiteFormation='';
    data.OrganismeFormation='';

  this.historiqueFormation.push(data);
  console.log(this.historiqueFormation)
  //this.employee.historiqueFormation= this.historiqueFormation

}

  createEmp(form: NgForm){

    this.employee.historiqueFormation=this.historiqueFormation

     this.employeesService.createEmployee(this.employee).subscribe(result => {
     console.log("result ==>", result)
     this.employee=result
     })

    }
  }
