import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmpDataService } from '../services/emp-data.service';
import * as XLSX from 'xlsx';
import { server } from '../services/allservers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  showPrintButton:boolean=true;
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
  userName:string='';
  employeeData3: any;
  
  constructor(private router: Router,private employeeService: EmpDataService,public dataSer:server ) { 

  }

  
  ngOnInit(): void {
   
    this.employeeService.getName().subscribe((data:any)=>{
      console.log("jhjl",data)
      this.userName=data
    });
    
    console.log("jhjl",this.userName)
    console.log(this.router.url);
  }
  sideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  logout(): void {
    // Perform any necessary logout logic (e.g., clear user session, reset variables, etc.)
  
    // Redirect to the login page
    this.router.navigate(['/login']);
    this.employeeService.setName("");
  }

}
