import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsService } from 'src/app/core/services/news.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {
  data;
  constructor(
    public dialogRef: MatDialog,
    public apiService: NewsService
  ) { }
  ngOnInit() {
    this.data = JSON.parse(sessionStorage.getItem('userInfo'));
  }
  reject() {
    const payLoad = {
      RequestId: '',
      RequestStatus: 'N'
    }
    this.save(payLoad);

  }
  accept() {
    const payLoad = {
      RequestId: '',
      RequestStatus: 'Y'
    }
    this.save(payLoad);

  }
  save(obj) {
    const path = 'path';

    this.apiService.postHttpRequest(path, obj).subscribe((data) => {
      this.dialogRef.closeAll();
    })

  }
}
