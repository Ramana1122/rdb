import { Component } from '@angular/core';
import { EmpDataService } from '../services/emp-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  sideNavStatus:boolean=false;
  userName:string='';
  toggleSideNav() {
    this.sideNavStatus = !this.sideNavStatus;
  }
  
  constructor(private employeeService: EmpDataService) { 

  }

  
  ngOnInit(): void {
    this.userName=this.employeeService.getName();
    console.log("jhjl",this.userName)
  }

}