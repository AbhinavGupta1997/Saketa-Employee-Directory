import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../Services/claims.service';

@Component({
  selector: 'app-employee-list-filter',
  templateUrl: './employee-list-filter.component.html',
  styleUrls: ['./employee-list-filter.component.scss']
})
export class EmployeeListFilterComponent implements OnInit {

  constructor(private claimService: ClaimsService) { }

  ngOnInit(): void {
    // this.getClaims();
    // this.getClaimsTest();
    // this.getEmail();
  }

  // claims: any;
  claims: any[] = [];
  email:any;

  getClaims(): void {
    this.claimService.getClaims()
    .subscribe(claims => this.claims = claims)
  }

  getEmail() {
    this.claimService.getUserEmail().subscribe(email => this.email = email)
  }

  // public claimsTest: any;

  // public getClaimsTest = () =>{
  //   this.claimService.getData('account/privacy')
  //   // this.claimService.getData('api/Employee/Privacy')
  //   .subscribe(res => {
  //     this.claims = res as [];
  //   })
  // }
}
