import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header-test',
  templateUrl: './header-test.component.html',
  styleUrls: ['./header-test.component.scss']
})
export class HeaderTestComponent implements OnInit, OnDestroy {

  name!: string;
  isAuthenticated!: boolean;
  subscription!: Subscription;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
    this.name = this.authService.name;
  } 

   async signout() {
    await this.authService.signout();     
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}