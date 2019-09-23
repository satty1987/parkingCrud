import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { NewsService } from 'src/app/core/services/news.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-reguest.component.html',
  styleUrls: ['./new-reguest.component.scss']
})
export class NewReguestComponent implements OnInit {

  @Input() name: string;
  @Input() requestType: String;
  public request = ['New Request', 'Surrender'];
  public prefferTower = [
    {name : 'Tower 1', value : 'tower_1'},
    {name : 'Tower 2', value : 'tower_2'},
    {name : 'Tower 3', value : 'tower_3'}
   ];
  public employeeBands = ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', ' E10'];
  regiForm: FormGroup;
  employeeCode: String = '';
  employeeBand: String = '';
  startDate: Date = null;
  endDate: Date = null;
  prefferTowerValue: String = '';
  userProfile: any = {};
  todayDate: Date = new Date();
  constructor(private fb: FormBuilder, public apiService: NewsService) {

  }

  ngOnInit() {
    this.apiService.notify.subscribe((response) => {
      if (response.id === 'surrender' && !response.value) {
       this.regiForm.disable();
      }
    });
    const userInfo =  this.apiService.cacheUser.get('userInfo');
    this.regiForm = this.fb.group({
      'employeeCode': [userInfo.sapId , Validators.required],
      'employeeBand': [userInfo.employee_band, Validators.required],
      'startDate': [null, Validators.required],
      'endDate': [null, Validators.required],
      'prefferTowerValue': [userInfo.employee_tower, Validators.required],
    });
  }
  onFormSubmit(form: any) {

    console.log(form);
    if (!_.isEmpty(form)) {
      form.requestType = this.requestType;


      if (this.requestType === 'newRequest') {
        const path = 'api/raise-request';
        this.apiService.postHttpRequest(path, form).subscribe((data) => {
          console.log(data);
          this.regiForm.reset();
        });
      }

      if (this.requestType === 'surrenderRequest') {
        const path = 'api/surrender-request';
        this.apiService.postHttpRequest(path, form).subscribe((data) => {
          console.log(data);
          this.regiForm.reset();
        });
      }
    }
  }

}
