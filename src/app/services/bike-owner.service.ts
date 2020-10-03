import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BikeOwner} from '../models/bikeOwner.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponse} from '../models/serverResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class BikeOwnerService {

  private readonly url;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.backEndUrl}/api/bikeOwner`;
  }

  create(bikeOwner: BikeOwner): Observable<BikeOwner> {
    return this.http.post<BikeOwner>(this.url, bikeOwner);
  }

  getAll(): Observable<ServerResponse<BikeOwner>> {
    return this.http.get<ServerResponse<BikeOwner>>(this.url);
  }

}
