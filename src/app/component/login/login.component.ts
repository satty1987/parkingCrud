

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { API_URLS } from 'src/app/core/constants/api-urls';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userId: String = '';
  password: String = '';
  error = 'User is not Valid.Please enter valid UserId';
  isUserInvalid = false;

  constructor(private fb: FormBuilder, private route: Router,
    public appService: NewsService
  ) { }



  ngOnInit() {
    this.loginForm = this.fb.group({
      'userId': [null, Validators.required],
      'password': [null, Validators.required]
    });

    if (!_.isNull(sessionStorage.getItem('userInfo'))) {
      this.route.navigate(['/home']);
    }

  }
  onFormSubmit(form: any) {
    console.log(form);
    if (!_.isEmpty(form)) {
       const path = 'api/users/' + form.userId;
      this.appService.getHttpRequest(path).subscribe((data) => {
        this.appService.cacheUser.set('userInfo', data[0]);
        sessionStorage.setItem('userInfo', JSON.stringify(data[0]));
        this.appService.notify.next({id : 'login', value : true});
        this.route.navigate(['/home']);
      }, err =>{
        this.isUserInvalid = true;
        this.loginForm.reset();
      });
    }

  }
}
