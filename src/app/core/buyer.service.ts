import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BuyerService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4600/api/buyer';

  constructor() {}

  purchaseCrop(orderData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/purchase`, orderData);
  }

  getBuyerPurchases(): Observable<any> {
    return this.http.get(`${this.apiUrl}/purchases`);
  }
}
