import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BikeOwner} from '../models/bikeOwner.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponse} from '../models/serverResponse.interface';
import {Police} from '../models/police.interface';
import {PoliceStatus} from '../models/policeStatus.interface';
import {ReportStatus} from '../models/reportStatus.interface';
import {Report} from '../models/report.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private readonly url;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.backEndUrl}/api/report`;
  }

  create(report: ReportStatus): Observable<Report> {
    return this.http.post<Report>(this.url, report);
  }

  getAll(): Observable<ServerResponse<Report>> {
    return this.http.get<ServerResponse<Report>>(this.url);
  }

}
