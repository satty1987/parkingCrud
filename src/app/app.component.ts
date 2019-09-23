import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ui';

  constructor( private router: Router, public location: PlatformLocation ) {}

}
