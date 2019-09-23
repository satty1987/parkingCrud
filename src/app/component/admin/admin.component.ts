import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
dataList : any;
  constructor(public apiService: NewsService) { }

  ngOnInit() {
     this.getRequest();
  }
  getRequest() {
    const path = 'api/raise-request';
    this.apiService.getHttpRequest(path).subscribe((data: any) =>{
     this.dataList =  data.result;
    });
  }
  approve(item) {
    const path = 'api/raise-request';
    this.apiService.putHttpRequest(path, item).subscribe((data: any) =>{
      this.getRequest();
    });
  }
  reject(item) {
    const path = 'api/raise-request/' + item._id;
    this.apiService.deleteHttpRequest(path).subscribe((data: any) =>{
      this.getRequest();
    });
  }
}
