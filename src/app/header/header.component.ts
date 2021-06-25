import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../Services/claims.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private claimService: ClaimsService) { }

  ngOnInit(): void {
    this.getClaims();
  }

  claims: any[] = [];

  username!: string;

  getClaims(): void {
    this.claimService.getClaims()
    .subscribe(claims => {this.claims = claims;
    this.username = claims[9].value})
  }

}
