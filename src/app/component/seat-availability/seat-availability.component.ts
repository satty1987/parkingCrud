import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import * as _ from 'lodash';
import { API_URLS } from 'src/app/core/constants/api-urls';
@Component({
  selector: 'app-seat-availability',
  templateUrl: './seat-availability.component.html',
  styleUrls: ['./seat-availability.component.scss']
})
export class SeatAvailabilityComponent implements OnInit {
  dataList = [];
  totalParking = 0;
  alocatedParking = 0;
  availableParking = 0;
  constructor(public apiService: NewsService) { }
 

  ngOnInit() {
    const path = API_URLS.parking;
    this.apiService.getHttpRequest(path).subscribe((data: any) => {
      this.dataList = data.result;
      this.availableParking = data.availableParking;
      this.totalParking = data.totalParking;
      this.alocatedParking = data.alocatedParking;

      console.log(data);
    });
  }
}
