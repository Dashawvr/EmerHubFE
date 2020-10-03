import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BikeOwner} from '../models/bikeOwner.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponse} from '../models/serverResponse.interface';
import {Police} from '../models/police.interface';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  private readonly url;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.backEndUrl}/api/police`;
  }

  create(police: Police): Observable<Police> {
    return this.http.post<Police>(this.url, police);
  }

  getAll(): Observable<ServerResponse<Police>> {
    return this.http.get<ServerResponse<Police>>(this.url);
  }

}
