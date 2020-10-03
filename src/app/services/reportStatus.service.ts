import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BikeOwner} from '../models/bikeOwner.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponse} from '../models/serverResponse.interface';
import {Police} from '../models/police.interface';
import {PoliceStatus} from '../models/policeStatus.interface';
import {ReportStatus} from '../models/reportStatus.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportStatusService {

  private readonly url;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.backEndUrl}/api/reportStatus`;
  }

  create(reportStatus: ReportStatus): Observable<ReportStatus> {
    return this.http.post<ReportStatus>(this.url, reportStatus);
  }

  getAll(): Observable<ServerResponse<ReportStatus>> {
    return this.http.get<ServerResponse<ReportStatus>>(this.url);
  }

  getById(id = 1): Observable<ReportStatus> {
    return this.http.get<ReportStatus>(this.url + '/' + id);
  }

}
