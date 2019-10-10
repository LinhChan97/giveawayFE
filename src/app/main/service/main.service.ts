import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../../shared/constants/api.constant';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharityModel, ICharity } from '../model/charity.model';
import {IPartner, PartnerModel} from '../model/partner.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private httpClient: HttpClient) {}

  getCharityList(): Observable<any> {
    return this.httpClient.get('http://giveawayapi.herokuapp.com/api/v1/causes?per_page=12').pipe(
      map(charityData => {
        return charityData['data'].map((charity: ICharity) => new CharityModel(charity));
      }),
      catchError(error => throwError(error))
    );
  }

  getPartnerList(): Observable<any> {
    return this.httpClient.get('https://giveawayapi.herokuapp.com/api/v1/charities').pipe(
      map(partnerData => {
        return partnerData['data'].map((partner: IPartner) => new PartnerModel(partner));
      }),
      catchError(error => throwError(error))
    );
  }
}
