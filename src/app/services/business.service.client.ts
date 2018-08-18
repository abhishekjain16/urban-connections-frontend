import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class BusinessServiceClient {
  searchBusiness(term: String, location: String) {
    const url = environment.baseUrl + '/api/business?term=' + term + '&location=' + location;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  SearchBusinessById(id: String) {
    const url = environment.baseUrl + '/api/business/' + id;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  constructor(private  http: Http) {}
}
