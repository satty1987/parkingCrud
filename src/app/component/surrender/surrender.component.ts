import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-surrender',
  templateUrl: './surrender.component.html',
  styleUrls: ['./surrender.component.scss']
})
export class SurrenderComponent implements OnInit {
userinfo ;
  constructor(public apiService: NewsService) { }

  ngOnInit() {
    this.userinfo = this.apiService.cacheUser.get('userInfo');

    const path = 'api/surrender-request/' + this.userinfo.sapId;
    this.apiService.getHttpRequest(path).subscribe((data: any) => {
      this.apiService.notify.next({id : 'surrender', value : data.surrender});
    });
  }

}
