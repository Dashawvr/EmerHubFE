import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Bike} from '../models/bike.interface';
import {ServerResponse} from '../models/serverResponse.interface';
import {BikeOwner} from '../models/bikeOwner.interface';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private readonly url;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.backEndUrl}/api/bike`;
  }

  create(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.url, bike);
  }

  getAll(): Observable<ServerResponse<Bike>> {
    return this.http.get<ServerResponse<Bike>>(this.url);
  }

  getByOwnerId(id: number): Observable<ServerResponse<Bike>> {
    return this.http.get<ServerResponse<Bike>>(this.url);
  }

}
