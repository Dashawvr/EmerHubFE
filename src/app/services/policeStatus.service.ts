import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BikeOwner} from '../models/bikeOwner.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponse} from '../models/serverResponse.interface';
import {Police} from '../models/police.interface';
import {PoliceStatus} from '../models/policeStatus.interface';

@Injectable({
  providedIn: 'root'
})
export class PoliceStatusService {

  private readonly url;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.backEndUrl}/api/policeStatus`;
  }

  create(policeStatus: PoliceStatus): Observable<PoliceStatus> {
    return this.http.post<PoliceStatus>(this.url, policeStatus);
  }

  getAll(): Observable<ServerResponse<PoliceStatus>> {
    return this.http.get<ServerResponse<PoliceStatus>>(this.url);
  }

}
